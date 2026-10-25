// 1장 이미지 프롬프트 전체를 ChatGPT 대화창 순서대로 docs/PROMPTS_CH1.md에 뽑는다.
// 사용: node tools/export-prompts.mjs
// 같은 대화창에서 이어 뽑는 그림은 짧은 후속 프롬프트로 써서 그림체가 흔들리지 않게 한다.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const web = path.join(root, 'web');
const ctx = vm.createContext({});
for (const f of ['js/data_ch1.js', 'js/asset_prompts.js', 'js/asset_list.js']) {
  vm.runInContext(fs.readFileSync(path.join(web, f), 'utf8'), ctx, { filename: f });
}
const list = JSON.parse(vm.runInContext('JSON.stringify(requiredAssets())', ctx));
const S = JSON.parse(vm.runInContext('JSON.stringify({ PROMPT_STYLE, BG_PROMPTS, CUT_PROMPTS, CUT_CHARS, FACE_PROMPTS })', ctx));

const out = [];
const block = (file, text) => { out.push(`**\`${file}\`**`, '```', text.trim(), '```', ''); };
let win = 0;
const window = (title, note) => { win++; out.push(`## 대화창 ${win} — ${title}`, '', note ? `${note}\n` : ''); };

out.push('# 1장 이미지 프롬프트 전체', '');
out.push('> `node tools/export-prompts.mjs`로 자동 생성된 파일. 직접 고치지 말고 `web/js/asset_prompts.js`를 고친 뒤 다시 생성한다.', '');
out.push('- **대화창마다 새 ChatGPT 채팅**을 연다. 한 창 안에서는 위에서부터 차례로 붙여넣는다.');
out.push('- 받은 이미지는 **다운로드 버튼으로 원본 PNG**를 받아 굵은 파일명 그대로 저장한다.');
out.push('- 저장 위치: 상반신 `web/assets/portraits/`, 배경 `web/assets/bg/`, 컷 `web/assets/cuts/`', '');

// 캐릭터: 설정화(전체 프롬프트) → 첫 표정(해상도 포함) → 나머지 표정(짧게)
const byChar = {};
list.filter((a) => a.kind === 'portrait').forEach((a) => { (byChar[a.id.split('_')[0]] = byChar[a.id.split('_')[0]] || []).push(a); });
for (const items of Object.values(byChar)) {
  window(`${items[0].group} (상반신 ${items.length}장)`, '첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.');
  block('설정화 (저장 안 해도 됨)', items[0].sheet);
  items.forEach((a, i) => {
    const face = (S.FACE_PROMPTS[a.id] || '').replace(/^expression:\s*/i, '');
    if (i === 0) {
      block(`${a.id}.png`, `방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.\n\n${S.PROMPT_STYLE.portraitRes} No anti-aliasing.\n\nWaist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: ${face}.`);
    } else {
      block(`${a.id}.png`, `같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.\n\nExpression: ${face}.`);
    }
  });
}

// 배경: 한 창에서 첫 장은 전체, 나머지는 짧게
const bgs = list.filter((a) => a.kind === 'bg');
window(`배경 (${bgs.length}장)`, '배경끼리 그림체를 맞추려고 한 창에서 이어 뽑는다.');
bgs.forEach((a, i) => {
  if (i === 0) block(`${a.id}.png`, a.prompt);
  else block(`${a.id}.png`, `같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.\n\n${S.BG_PROMPTS[a.id]} Keep the lower third simple because characters will stand in front.`);
});

// 컷: 시점 주인(포인트 색)별로 창을 나눈다. 첫 장은 전체, 나머지는 짧게
const cuts = list.filter((a) => a.kind === 'cut');
const colorOf = (a) => (a.prompt.match(/accent color ([^.]*?\(#[0-9a-f]{6}\))/i) || [])[1];
const groups = [
  ['컷 · 타이가 시점 + 증언 (금색)', (a) => /gold/.test(a.prompt) && !/crayon memory/.test(a.prompt)],
  ['컷 · 미츠루 시점 (파랑)', (a) => /blue \(#3b8fd0\)/.test(a.prompt)],
  ['컷 · 히마리 시점 (분홍)', (a) => /pink \(#e0679a\)/.test(a.prompt) && !/crayon memory/.test(a.prompt)],
  ['컷 · 히마리 크레용 기억 (예외: 크레용 색)', (a) => /crayon memory/.test(a.prompt)],
  ['컷 · 오오쿠보 증언 (올리브)', (a) => /olive/.test(a.prompt)],
];
const used = new Set();
for (const [title, test] of groups) {
  const items = cuts.filter((a) => !used.has(a.id) && test(a));
  if (!items.length) continue;
  items.forEach((a) => used.add(a.id));
  window(`${title} (${items.length}장)`, '같은 포인트 색 컷끼리 한 창에서 뽑으면 팔레트가 맞는다.');
  items.forEach((a, i) => {
    const scene = (a.prompt.match(/Scene: ([\s\S]*?)\n\n/) || [])[1] || '';
    if (i === 0) block(`${a.id}.png`, a.prompt);
    else {
      const crayon = /crayon memory/.test(a.prompt);
      const rule = crayon ? '같은 크레용 도트 스타일, 같은 픽셀 크기로 다음 컷을 그려줘.' : `같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + ${colorOf(a)} 하나)로 다음 컷을 그려줘.`;
      block(`${a.id}.png`, `${rule} 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.\n\nScene: ${scene}`);
    }
    if (a.must) out.push(`> 꼭 보여야 할 것: ${a.must}`, '');
  });
}
const rest = cuts.filter((a) => !used.has(a.id));
if (rest.length) throw new Error('창에 배정되지 않은 컷: ' + rest.map((a) => a.id).join(', '));

const file = path.join(root, 'docs', 'PROMPTS_CH1.md');
fs.writeFileSync(file, out.join('\n'));
console.log(`docs/PROMPTS_CH1.md — ${list.length}장, 대화창 ${win}개`);
