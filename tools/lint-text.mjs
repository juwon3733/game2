// 대사 점검: 스크립트·데이터의 한국어 문장을 모아 "AI 티" 나는 패턴과 실수를 찾는다.
// 사용: node tools/lint-text.mjs [--all]   (오류가 있으면 종료 코드 1. --all이면 경고도 전부 출력)
// 오류: 금지어(짱·그녀), 같은 긴 문장이 세 번 이상, 이름 뒤 조사 깨짐(레이은 등)
// 경고: "X인 게 아니라 Y" 주제문, "…"로 시작하는 대사 비율, 조작 설명 대사, "당신", 3박자 나열

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const js = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'web', 'js');
const files = fs.readdirSync(js).filter((f) => /^(script|data)_ch\d+\.js$/.test(f)).sort();
const showAll = process.argv.includes('--all');

// 문자열 뽑기: 작은따옴표 안의 한글 문장. 대사 주인은 바로 앞 'who' 또는 say('who'
const lines = [];
for (const f of files) {
  const src = fs.readFileSync(path.join(js, f), 'utf8');
  const ch = Number(f.match(/ch(\d+)/)[1]);
  src.split('\n').forEach((row, i) => {
    const re = /(?:say\('([a-z0-9]*)',\s*|\['([a-z0-9]*)',\s*)?'((?:[^'\\]|\\.)*[가-힣](?:[^'\\]|\\.)*)'/g;
    let m;
    while ((m = re.exec(row))) {
      const who = m[1] ?? m[2] ?? null;
      lines.push({ f, ch, line: i + 1, who, text: m[3].replace(/\\'/g, "'") });
    }
  });
}

const errors = [], warns = [];
const at = (l) => `${l.f}:${l.line}`;
const NAMES = ['레이', '코하루', '토와', '루루', '유키', '나기', '렌', '하야카', '케이코', '타이가', '히마리', '시오리', '아오이', '핀'];

for (const l of lines) {
  const t = l.text;
  if (/짱/.test(t) && !/팔짱/.test(t)) errors.push(`${at(l)} 일본식 호칭 '짱': ${t}`);
  if (/그녀/.test(t)) errors.push(`${at(l)} 번역투 '그녀': ${t}`);
  for (const n of NAMES) {
    const last = n.charCodeAt(n.length - 1), bat = (last - 0xac00) % 28;
    const wrong = bat ? ['를', '는', '가', '와'] : ['을', '은', '이 ', '과'];
    for (const w of wrong) if (t.includes(n + w) && !t.includes(n + w + '랑')) {
      // 「레이가」처럼 받침이 없는 이름 뒤 '이 '는 서술격(레이이다)일 수 있어 공백 붙은 경우만 본다
      if (!(w === '이 ' && bat)) errors.push(`${at(l)} 조사 확인 '${n}${w.trim()}': ${t}`);
    }
  }
  if (l.who !== 'tip') {
    if (/[가-힣]+(?:인|한|된|던|은|는|운) (?:게|것이) 아니(?:라|야|었|에요|예요)/.test(t)) warns.push(`${at(l)} 주제문 'X인 게 아니라': ${t}`);
    if (/\[(?:반박|파고들기|컷 보여주기)|빈칸|말풍선을 채|컷을 (?:골라|끌어)|원고지 칸/.test(t) && l.who) warns.push(`${at(l)} 인물이 조작을 설명: ${t}`);
    if (/당신/.test(t) && l.who && l.who !== 'asagiri' && l.who !== 'ren') warns.push(`${at(l)} '당신' (존댓말 상대면 이름·호칭으로): ${t}`);
    if (/^[^,.]{1,10}, [^,.]{1,10}, [^,.]{1,10}[.]/.test(t)) warns.push(`${at(l)} 3박자 나열: ${t}`);
  }
}

// 같은 긴 문장 반복
const seen = new Map();
for (const l of lines) if (l.who !== null && l.text.length >= 15) seen.set(l.text, [...(seen.get(l.text) || []), l]);
for (const [t, ls] of seen) if (ls.length >= 3) errors.push(`같은 문장 ${ls.length}번 (${ls.map(at).join(', ')}): ${t}`);

// 장마다 "…"로 시작하는 대사 비율
for (const ch of [...new Set(lines.map((l) => l.ch))]) {
  const said = lines.filter((l) => l.ch === ch && l.who && l.who !== 'tip');
  const dots = said.filter((l) => /^…[^.…]/.test(l.text) || /^\(…[^.…]/.test(l.text));
  const pct = Math.round((dots.length / Math.max(1, said.length)) * 100);
  if (pct > 20) warns.push(`${ch}장: "…"로 시작하는 대사 ${pct}% (${dots.length}/${said.length})`);
}

// 주제문은 장마다 하나까지
const themes = warns.filter((w) => w.includes('주제문'));
const byCh = {};
themes.forEach((w) => { const c = w.match(/ch(\d+)/)[1]; byCh[c] = (byCh[c] || 0) + 1; });
const themeOver = Object.entries(byCh).filter(([, n]) => n > 1);

console.log(`대사 ${lines.length}줄 검사`);
if (errors.length) { console.log(`❌ 오류 ${errors.length}개`); errors.forEach((e) => console.log(' - ' + e)); }
if (warns.length) {
  console.log(`⚠ 경고 ${warns.length}개${themeOver.length ? ` (주제문이 두 번 이상인 장: ${themeOver.map(([c, n]) => `${c}장 ${n}번`).join(', ')})` : ''}`);
  (showAll ? warns : warns.slice(0, 25)).forEach((w) => console.log(' - ' + w));
  if (!showAll && warns.length > 25) console.log(`   … --all로 전부 보기`);
}
if (!errors.length) console.log('✅ 오류 없음');
process.exit(errors.length ? 1 : 0);
