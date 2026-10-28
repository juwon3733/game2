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
  okamoto_normal: ['30대처럼 젊고 가슴이 보임 → 68세 할머니(주름, 작은 체구, 단정한 옷)', ['web/assets/portraits/okamoto_normal.png']],
  okamoto_angry: ['30대처럼 젊고 가슴이 보임 → 68세 할머니(주름, 작은 체구, 단정한 옷)', ['web/assets/portraits/okamoto_angry.png']],
  murase_normal: ['20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리)', ['web/assets/portraits/murase_normal.png']],
  murase_smile: ['20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리)', ['web/assets/portraits/murase_smile.png']],
  murase_cornered: ['20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리)', ['web/assets/portraits/murase_cornered.png']],
  tanabe_normal: ['경찰 순경 복장(모자 휘장·호루라기) → 민간 경비업체 회청색 제복, 경찰 표시 없음', ['web/assets/portraits/tanabe_normal.png']],
  tanabe_confused: ['경찰 순경 복장 → 민간 경비업체 제복', ['web/assets/portraits/tanabe_normal.png']],
  '4J': ['소방차 경광등이 불길과 같은 색이라 안 보임 → 흰 연기 아래 소방차 차체·사다리를 크게', ['web/assets/cuts/4J.png']],
  t_hayaka_4: ['상담소에 벚꽃 핀 창 → 창 없는 하얀 방, 벽에 빈 말풍선 로고', ['web/assets/cuts/4K.png']],
  F2: ['마감 뒤(21:10)인데 아래 매장에 손님들이 앉아 있음 → 빈 매장, 손 부분 스크린톤 이음매는 그대로', ['web/assets/cuts/F2.png']],
  '5Ee': ['끌려가는 아가씨가 코하루가 아님(검은 단발) → 코하루, 흰 코트만 그림자 없음', ['web/assets/portraits/koharu_normal.png']],
  '4D': ['헬멧 둘이 문에서 나오는 방향 → 등을 보이며 문 안으로 들어가는 중', ['web/assets/portraits/hayaka_normal.png']],
  '4E': ['불 나기 전인데 케이코 손에 붕대 → 맨손', ['web/assets/portraits/keiko_normal.png']],
  '4K': ['상담원의 얼굴·몸이 보임 → 흰 장갑 손과 소매만, 얼굴은 화면 밖', []],
  towa_serious: ['고양이 귀·헤드폰·모니터 테두리가 빨강 → towa_normal과 같은 초록, 표정만 진지하게', ['web/assets/portraits/towa_normal.png']],
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
  ['추리·인상에 걸리는 다시 받기 (4·5장)', ['4J', 't_hayaka_4', 'okamoto_normal', 'okamoto_angry', 'murase_normal', 'murase_smile', 'murase_cornered', 'tanabe_normal', 'tanabe_confused']],
  ['종장', ['lighthouse', 'lighthouse_in', 'lighthouse_dawn', 'cut-rei', 'cut-shiori', 'cut-asagiri', 'AF']],
  ['CG', ['cg']],
  ['UI', ['ui']],
  ['얼굴·옷만 다른 다시 받기 (마지막)', ['towa_serious', '2H', '2P', 't_ruru_1', 'rei_normal', 'yuki_normal']],
];

// 그 장에서 틀리기 쉬운 것: 프롬프트 글에서 뽑아 「확인」 칸에 적는다 (GPT가 그릴 때마다 다시 보게)
const checks = (it) => {
  const sc = (it.prompt.match(/Scene: ([\s\S]*?)(Every person|Keep the important|Horizontal|$)/) || [, it.prompt])[1];
  const c = [];
  if (/first-person/i.test(sc)) c.push('1인칭: 보는 사람은 손·발만');
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
  '- **프롬프트에 없는 인물을 그리지 않는다.** 바깥·공공장소라면 멀리 작은 얼굴 없는 행인은 괜찮다(단서 근처, 등장인물로 보일 사람, 「nobody·empty·No people」 장면은 안 됨). 배경(bg)은 사람 없음. 나오는 인물은 첨부 상반신과 같은 머리색·나이로.',
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
