// 내보낸 플레이 기록(JSON)을 표로 본다.
// 사용: node tools/playlog-report.mjs playlog-2026-10-26.json
import fs from 'node:fs';

const TARGET = { 1: 60, 2: 100, 3: 100, 4: 120, 5: 120, 6: 100 }; // docs/12_story_plan.md §2-1 (분)
const file = process.argv[2];
if (!file) { console.error('사용: node tools/playlog-report.mjs <playlog.json>'); process.exit(1); }
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const runs = (data.runs || []).concat(data.open ? [data.open] : []);
if (!runs.length) { console.log('기록이 없다.'); process.exit(0); }

const min = (ms) => (ms / 60000).toFixed(1);
// 같은 장면을 여러 번 했으면 합친다 (다시 하기·이어하기)
const scenes = new Map();
for (const r of runs) {
  const k = `${r.ch}:${r.scene}`;
  const s = scenes.get(k) || { ch: r.ch, scene: r.scene, ms: 0, wrong: 0, hints: 0, help: 0, times: 0, where: {} };
  s.ms += r.ms || 0; s.wrong += r.wrong || 0; s.hints += r.hints || 0; s.help += r.help || 0; s.times++;
  for (const [w, n] of Object.entries(r.where || {})) s.where[w] = (s.where[w] || 0) + n;
  scenes.set(k, s);
}

const pad = (v, n) => { const t = String(v); const w = [...t].reduce((a, c) => a + (c.charCodeAt(0) > 0x2e80 ? 2 : 1), 0); return t + ' '.repeat(Math.max(0, n - w)); };
console.log(pad('장', 4) + pad('장면', 14) + pad('분', 7) + pad('오답', 6) + pad('힌트', 6) + pad('도움', 6) + '틀린 곳');
let ch = null, tot = null;
const flush = () => { if (tot) console.log(pad('', 4) + pad(`= ${ch}장 합계`, 14) + pad(min(tot.ms), 7) + pad(tot.wrong, 6) + pad(tot.hints, 6) + pad(tot.help, 6) + `목표 ${TARGET[ch] || '?'}분\n`); };
for (const s of [...scenes.values()].sort((a, b) => a.ch - b.ch)) {
  if (s.ch !== ch) { flush(); ch = s.ch; tot = { ms: 0, wrong: 0, hints: 0, help: 0 }; }
  tot.ms += s.ms; tot.wrong += s.wrong; tot.hints += s.hints; tot.help += s.help;
  const where = Object.entries(s.where).sort((a, b) => b[1] - a[1]).map(([w, n]) => `${w}×${n}`).join(', ');
  console.log(pad(s.ch, 4) + pad(s.scene + (s.times > 1 ? `(${s.times})` : ''), 14) + pad(min(s.ms), 7) + pad(s.wrong, 6) + pad(s.hints, 6) + pad(s.help, 6) + where);
}
flush();
if (data.exported) console.log(`내보낸 때: ${data.exported}`);
