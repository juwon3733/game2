// 1장 이미지 프롬프트를 ChatGPT 대화창(작업 묶음) 순서로 정리해 두 파일로 뽑는다.
//   web/assets/prompts.json  — 이미지 생성 에이전트가 읽는 작업 목록 (AGENTS.md 참고)
//   docs/PROMPTS_CH1.md      — 사람이 읽는 같은 내용
// 사용: node tools/export-prompts.mjs          (파일 갱신)
//       node tools/export-prompts.mjs --check  (갱신이 필요하면 실패. CI용)
// 같은 묶음 안에서 이어 뽑는 그림은 짧은 후속 프롬프트로 써서 그림체가 흔들리지 않게 한다.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const web = path.join(root, 'web');
const ctx = vm.createContext({});
// 장별 데이터(data_chN.js)와 프롬프트(asset_prompts*.js)를 전부 읽는다
const jsFiles = fs.readdirSync(path.join(web, 'js'));
const dataFiles = jsFiles.filter((f) => /^data_ch\d+\.js$/.test(f)).sort();
const promptFiles = jsFiles.filter((f) => /^asset_prompts(_ch\d+)?\.js$/.test(f)).sort();
for (const f of [...dataFiles, ...promptFiles, 'asset_list.js'].map((x) => 'js/' + x)) {
  vm.runInContext(fs.readFileSync(path.join(web, f), 'utf8'), ctx, { filename: f });
}
const list = JSON.parse(vm.runInContext('JSON.stringify(requiredAssets())', ctx));
const S = JSON.parse(vm.runInContext('JSON.stringify({ PROMPT_STYLE, BG_PROMPTS, FACE_PROMPTS, OWNERS })', ctx));
const UI_PROMPTS_TEXT = JSON.parse(vm.runInContext('JSON.stringify(Object.fromEntries(Object.entries(UI_PROMPTS).map(([k, v]) => [k, v.p])))', ctx));

// ---------- 작업 묶음 만들기 ----------

const batches = [];
const item = (a, followup) => ({
  id: a.id,
  file: `web/assets/${a.path}`,
  kind: a.kind,
  width: a.spec.w,
  height: a.spec.h,
  transparent: a.kind === 'portrait' || a.kind === 'sprite' || a.kind === 'ui',
  must_show: a.must || null,
  prompt: a.prompt,                 // 단독으로 쓸 때의 전체 프롬프트
  followup_prompt: followup || null, // 같은 묶음에서 앞 그림에 이어 쓸 때의 짧은 프롬프트
});

// 캐릭터: 설정화 → 표정들
const byChar = {};
list.filter((a) => a.kind === 'portrait').forEach((a) => { (byChar[a.id.split('_')[0]] = byChar[a.id.split('_')[0]] || []).push(a); });
for (const [char, items] of Object.entries(byChar)) {
  batches.push({
    id: `portrait-${char}`,
    title: `${items[0].group} 상반신`,
    note: '먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.',
    reference_sheet_prompt: items[0].sheet,
    items: items.map((a, i) => {
      const face = (S.FACE_PROMPTS[a.id] || '').replace(/^expression:\s*/i, '');
      const follow = i === 0
        ? `방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.\n\n${S.PROMPT_STYLE.portraitRes} No anti-aliasing.\n\nWaist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: ${face}.`
        : `같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.\n\nExpression: ${face}.`;
      return item(a, follow);
    }),
  });
}

// 배경: 첫 장은 전체, 나머지는 짧게
const bgs = list.filter((a) => a.kind === 'bg');
batches.push({
  id: 'bg',
  title: '배경',
  note: '배경끼리 그림체를 맞추려고 한 대화에서 이어 만든다.',
  items: bgs.map((a, i) => item(a, i === 0 ? null : `같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.\n\n${S.BG_PROMPTS[a.id]} Keep the lower third simple because characters will stand in front.`)),
});

// 컷: 포인트 색(시점 주인)별로 묶는다
const cuts = list.filter((a) => a.kind === 'cut');
const colorOf = (a) => (a.prompt.match(/accent color ([^.]*?\(#[0-9a-f]{6}\))/i) || [])[1];
const cutGroups = [
  ['cut-gold', '컷 · 타이가 시점 + 증언 (금색)', (a) => /gold \(#c9961a\)/.test(a.prompt) && !/crayon memory/.test(a.prompt)],
  ['cut-blue', '컷 · 미츠루 시점 (파랑)', (a) => /blue \(#3b8fd0\)/.test(a.prompt)],
  ['cut-pink', '컷 · 히마리 시점 (분홍)', (a) => /pink \(#e0679a\)/.test(a.prompt) && !/crayon memory/.test(a.prompt)],
  ['cut-crayon', '컷 · 히마리 크레용 기억 (예외: 크레용 색)', (a) => /crayon memory/.test(a.prompt)],
  ['cut-olive', '컷 · 오오쿠보 증언 (올리브)', (a) => /olive green \(#6b8a5a\)/.test(a.prompt)],
];
const used = new Set();
for (const [id, title, test] of cutGroups) {
  const items = cuts.filter((a) => !used.has(a.id) && test(a));
  if (!items.length) continue;
  items.forEach((a) => used.add(a.id));
  batches.push({
    id, title,
    note: '같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.',
    items: items.map((a, i) => {
      if (i === 0) return item(a, null);
      const scene = (a.prompt.match(/Scene: ([\s\S]*?)\n\n/) || [])[1] || '';
      const rule = /crayon memory/.test(a.prompt)
        ? '같은 크레용 도트 스타일, 같은 픽셀 크기로 다음 컷을 그려줘.'
        : `같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ${colorOf(a)} 하나)로 다음 컷을 그려줘.`;
      return item(a, `${rule} 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.\n\nScene: ${scene}`);
    }),
  });
}
// 타이틀
batches.push({ id: 'ui', title: 'UI 스킨', note: '한 대화에서 차례로 만들어 스타일을 맞춘다. 크기는 정확히 지키고, 9-slice 틀은 모서리 밖 가장자리가 똑같이 반복되게.', items: list.filter((a) => a.kind === 'ui').map((a, i) => item(a, i === 0 ? null : `같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.\n\n${UI_PROMPTS_TEXT[a.id]}`)) });
batches.push({ id: 'cg', title: '이벤트 CG', note: '상반신 이미지를 기준으로 첨부해 같은 얼굴로 그린다. 배경 7장과 같은 도트 스타일.', items: list.filter((a) => a.kind === 'cg').map((a) => item(a, null)) });
batches.push({ id: 'title', title: '타이틀 키아트', note: '상반신 이미지를 기준으로 첨부해 같은 얼굴로 그린다.', items: list.filter((a) => a.kind === 'title').map((a) => item(a, null)) });

// 2장부터: 시점 주인(포인트 색)별로 자동으로 묶는다
const byOwner = {};
cuts.filter((a) => !used.has(a.id)).forEach((a) => {
  const hex = (a.prompt.match(/\((#[0-9a-f]{6})\)/i) || [])[1] || 'misc';
  const owner = Object.entries(S.OWNERS).find(([, o]) => o.color.toLowerCase() === hex.toLowerCase());
  const key = owner ? owner[0] : hex.replace('#', '');
  (byOwner[key] = byOwner[key] || { name: owner ? owner[1].name : hex, items: [] }).items.push(a);
});
for (const [key, g] of Object.entries(byOwner)) {
  batches.push({
    id: `cut-${key}`, title: `컷 · ${g.name} 시점`,
    note: '같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.',
    items: g.items.map((a, i) => item(a, i === 0 ? null : `같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ${colorOf(a)} 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.\n\nScene: ${(a.prompt.match(/Scene: ([\s\S]*?)\n\n/) || [])[1] || ''}`)),
  });
}

// ---------- JSON ----------

const json = {
  chapter: 1,
  generated_by: 'node tools/export-prompts.mjs (직접 고치지 말 것. web/js/asset_prompts.js를 고친 뒤 다시 생성)',
  style_version: 3,
  rules: {
    style: 'PC-98식 저해상도 도트. 캐릭터는 모바일 가챠게임풍 서브컬처 디자인(큰 눈, 매력적인 얼굴, 소품). 컷은 회색 8단계 + 포인트 색 1개, 캐릭터/배경은 풀컬러.',
    style_v2_redo: 'style_version 2부터 캐릭터 디자인이 바뀌었다. 이전에 만든 상반신(portraits)은 요청받으면 새 프롬프트로 교체한다.',
    style_v3_portraits: 'style_version 3부터 상반신은 원본 256×384(4배 확대) 고해상도 도트이고, 배경 없이 양옆·위에 여백을 둔다. 128×192로 만든 기존 상반신 16장은 모두 교체 대상이다.',
    format: 'PNG만. 파일명과 대소문자는 file 그대로. 크기는 width x height.',
    skip_existing: '이미 저장소에 있는 file은 다시 만들지 않는다 (교체 요청이 있을 때만).',
    validate: 'node tools/check-assets.mjs 가 통과해야 한다.',
  },
  total: list.length,
  batches,
};
const jsonText = JSON.stringify(json, null, 2) + '\n';

// ---------- 마크다운 ----------

const md = [];
const block = (file, text) => md.push(`**\`${file}\``, '```', text.trim(), '```', '');
md.push('# 1장 이미지 프롬프트 전체', '');
md.push('> `node tools/export-prompts.mjs`로 자동 생성된 파일. 직접 고치지 말고 `web/js/asset_prompts.js`를 고친 뒤 다시 생성한다.', '> 이미지 생성 에이전트는 같은 내용의 `web/assets/prompts.json`과 `AGENTS.md`를 쓴다.', '');
md.push('- **묶음마다 새 ChatGPT 대화**를 연다. 한 대화 안에서는 위에서부터 차례로 붙여넣는다.');
md.push('- 받은 이미지는 **원본 PNG**로 굵은 파일명 그대로 저장한다.', '');
batches.forEach((b, n) => {
  md.push(`## 대화 ${n + 1} — ${b.title} (${b.items.length}장)`, '', b.note, '');
  if (b.reference_sheet_prompt) block('설정화 (저장 안 해도 됨)', b.reference_sheet_prompt);
  b.items.forEach((it, i) => {
    block(it.file.split('/').pop(), (b.reference_sheet_prompt || i > 0) && it.followup_prompt ? it.followup_prompt : it.prompt);
    if (it.must_show) md.push(`> 꼭 보여야 할 것: ${it.must_show}`, '');
  });
});
const mdText = md.join('\n');

// ---------- 쓰기 / 검사 ----------

const targets = [
  [path.join(web, 'assets', 'prompts.json'), jsonText],
  [path.join(root, 'docs', 'PROMPTS_CH1.md'), mdText],
];
if (process.argv.includes('--check')) {
  const stale = targets.filter(([f, t]) => !fs.existsSync(f) || fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n') !== t);
  if (stale.length) {
    console.log('::error::프롬프트 파일이 게임 데이터와 다릅니다. `node tools/export-prompts.mjs`를 실행해 다시 생성하세요: ' + stale.map(([f]) => path.relative(root, f)).join(', '));
    process.exit(1);
  }
  console.log('프롬프트 파일 최신 상태');
} else {
  targets.forEach(([f, t]) => fs.writeFileSync(f, t));
  console.log(`web/assets/prompts.json, docs/PROMPTS_CH1.md — ${list.length}장, 묶음 ${batches.length}개`);
}
