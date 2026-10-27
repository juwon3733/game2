// GPT 이미지 에이전트에게 줄 "작업 순서표"를 만든다: docs/GPT_QUEUE.md
// 한 줄 = 그림 한 장. 위에서부터 차례로 만들면 된다. 이미 있는 그림은 빠지고, 다시 받을 그림(REDO)만 남는다.
// 사용: node tools/gpt-queue.mjs   (그림을 넣거나 빼면 다시 돌린다)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const P = JSON.parse(fs.readFileSync(path.join(root, 'web/assets/prompts.json'), 'utf8'));

// 이미 있지만 다시 받을 그림: id → [이유, 첨부할 기준 이미지]
const REDO = {
  towa_serious: ['고양이 귀·헤드폰·모니터 테두리가 빨강 → towa_normal과 같은 초록, 표정만 진지하게', ['web/assets/portraits/towa_normal.png']],
  F3: ['손 그림자가 안 보임(2번째) → 손 바로 아래 벽에 손 모양 그림자 하나가 아래로, 크게. 다른 그림자는 모두 위로', []],
  '2H': ['루루가 다른 사람 같음 → 상반신과 같은 긴 파란 머리·새 인형 모자, 후드, 형광 작업등', ['web/assets/portraits/ruru_normal.png']],
  '2P': ['루루가 다른 사람 같음 → 상반신과 같은 얼굴·머리', ['web/assets/portraits/ruru_normal.png']],
  t_ruru_1: ['루루가 다른 사람 같음 → 상반신과 같은 얼굴·머리', ['web/assets/portraits/ruru_normal.png']],
  rei_normal: ['serious와 같은 손가락질 자세 → 졸린 반쯤 감은 눈, 캔 커피를 든 무심한 자세', ['web/assets/portraits/rei_serious.png']],
  yuki_normal: ['초록 앞치마(나기 옷) → 갈색 멜빵 앞치마, 연필은 왼손', ['web/assets/portraits/yuki_smile.png']],
};

// 순서: 공개판 1장 → 이야기·추리에 걸리는 다시 받기 → 장 순서대로 없는 그림 → CG → UI → 얼굴만 다른 다시 받기
const ORDER = [
      ['2장 배경', ['crescent_out', 'crescent_stage', 'booth', 'greenroom', 'backstage', 'tendo_office']],
  ['3장', ['storage', 'cut-twin', 'cut-hasegawa', 'cut-tofu', 'cut-madoka']],
  ['4장', ['sakurayu', 'sakurayu_boiler', 'okamoto_house', 'site_office', 'clinic', 'cut-hayaka', 'cut-keiko', 'cut-murase', 'cut-okamoto', 'cut-genzo']],
  ['5장', ['station_chief', 'koharu_room', 'library', 'busstop', 'warehouse', 'pier', 'warehouse_in', 'cafe_night', 'cut-koharu', 'cut-tanabe', 'cut-ren', 'cut-sota', 'cut-kurogane']],
  ['종장', ['lighthouse', 'lighthouse_in', 'lighthouse_dawn', 'cut-rei', 'cut-shiori', 'cut-asagiri', 'AF']],
  ['CG', ['cg']],
  ['UI', ['ui']],
  ['얼굴·옷만 다른 다시 받기 (마지막)', ['towa_serious', '2H', '2P', 't_ruru_1', 'rei_normal', 'yuki_normal']],
];

// 그 장에서 틀리기 쉬운 것: 프롬프트 글에서 뽑아 「확인」 칸에 적는다 (GPT가 그릴 때마다 다시 보게)
const checks = (it) => {
  const sc = (it.prompt.match(/Scene: ([\s\S]*?)(Every person|Keep the important|Horizontal|$)/) || [, it.prompt])[1];
  const c = [];
  if (/first-person/i.test(sc)) c.push('1인칭: 보는 사람은 손·발만, 적힌 사람 말고 추가 금지');
  else if (it.file.includes('/bg/') || /\bNO people|No people|nobody in sight|NO person|No other people/.test(sc)) c.push('사람 없음');
  for (const m of sc.matchAll(/\b(RIGHT|LEFT)\b/g)) { const side = m[1] === 'RIGHT' ? '오른' : '왼'; const k = `인물 자신의 ${side}쪽(정면이면 화면 ${side === '오른' ? '왼' : '오른'}쪽)`; if (!c.includes(k)) c.push(k); }
  for (const m of sc.matchAll(/(?:shows?|showing|reads?)\s+(?:a call screen and\s+)?(\d{1,2}:\d{2})/gi)) c.push(`시계 ${m[1]}`);
  if (/No clock/i.test(sc)) c.push('시계·손목시계 없음');
  if (/\bnight\b/i.test(sc) && !/day|afternoon|noon|morning|sunset|evening/i.test(sc)) c.push('밤');
  for (const m of sc.matchAll(/(\d+)-year-old/g)) c.push(`${m[1]}살로`);
  if (/seventies|elderly|(?<!-)\bold (man|woman)|grandmother/i.test(sc)) c.push('노인은 주름진 노인 얼굴');
  if (/must|IMPORTANT|KEY DETAIL/.test(sc)) c.push('IMPORTANT 부분이 핵심: 크게 보이게');
  return [...new Set(c)].join(' · ');
};

const items = {}, byBatch = {};
for (const b of P.batches) { byBatch[b.id] = b.items.map((i) => i.id); for (const i of b.items) items[i.id] = { ...i, batch: b.id }; }
const exists = (it) => fs.existsSync(path.join(root, it.file));
const seen = new Set();
const md = ['# GPT 작업 순서표 (자동 생성: `node tools/gpt-queue.mjs`)', '',
  '위에서부터 **한 줄 = 한 장**씩 만든다. 프롬프트는 `web/assets/prompts.json`에서 같은 id의 `prompt`를 그대로 쓴다.',
  '- **설정화(reference sheet)는 만들지 않는다.** 모든 인물의 상반신이 이미 있다. 인물이 나오면 「첨부」 칸의 PNG를 이미지로 붙인다.',
  '- **프롬프트에 없는 사람을 그리지 않는다.** 「first-person」·「NO people」이면 손(과 발목)만. 나오는 인물은 첨부 상반신과 같은 머리색·나이로.',
  '- 「다시」 줄은 그 이유를 고치는 게 목적이다. 고쳤는지 PR 설명에 한 줄로 적는다.',
  '- 「확인」 칸: 그 장에서 틀리기 쉬운 것. 그리기 전에 읽고, 다 그린 뒤 하나씩 맞는지 본다.',
  '- 묶음(장·종류)마다 PR 하나, 브랜치는 `assets/<첫 id>-<월일시분>`. 올리면 바로 다음 줄로.', ''];
let n = 0;
for (const [title, keys] of ORDER) {
  const rows = [];
  for (const k of keys) {
    for (const id of byBatch[k] || [k]) {
      const it = items[id];
      if (!it || seen.has(id)) continue;
      const redo = REDO[id];
      if (exists(it) && !redo) continue;
      seen.add(id);
      const refs = [...new Set([...(redo ? redo[1] : []), ...(it.reference_images || [])])];
      rows.push(`| ${++n} | \`${id}\` | ${it.file.replace('web/assets/', '')} | ${redo ? '다시: ' + redo[0] : '새로'} | ${refs.map((r) => r.replace('web/assets/', '')).join('<br>') || '—'} | ${it.must_show || ''} | ${checks(it)} |`);
    }
  }
  if (rows.length) md.push(`## ${title}`, '', '| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |', '|---|---|---|---|---|---|---|', ...rows, '');
}
// 순서표에 안 넣은 빠진 그림이 있으면 끝에 모은다
const rest = Object.values(items).filter((it) => !seen.has(it.id) && !exists(it));
if (rest.length) md.push('## 그 밖에 빠진 그림', '', rest.map((it) => `- \`${it.id}\` ${it.file}`).join('\n'), '');
fs.writeFileSync(path.join(root, 'docs/GPT_QUEUE.md'), md.join('\n'));
console.log(`docs/GPT_QUEUE.md — ${n}장`);
