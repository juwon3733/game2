// 컷 그림 위에 짚을 곳(spots) 상자를 그려서, 좌표가 그림과 맞는지 눈으로 확인한다.
// 사용: node tools/spot-overlay.mjs [출력 폴더] [컷 id...]   (기본: 그림이 있는 컷 전부)
// 초록 = 단어를 주는 곳, 빨강 = 헛짚기. 그림 파일이 없는 컷은 건너뛴다.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const { chromium } = createRequire(import.meta.url)('playwright');
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = process.argv[2] || 'spot-overlay';
const only = process.argv.slice(3);

// 데이터 파일은 브라우저 전역 변수로 쓰므로 한 컨텍스트에서 이어 실행한다
const ctx = vm.createContext({ console });
for (let n = 1; n <= 6; n++) {
  const f = path.join(root, 'web/js', `data_ch${n}.js`);
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8') + '\nthis.CUTS = CUTS; this.WITNESSES = WITNESSES;', ctx, { filename: f });
}

// 컷 자체의 spots + 증언 컷의 spots
const jobs = [];
for (const [id, c] of Object.entries(ctx.CUTS)) if (c.spots && c.spots.length) jobs.push({ id, spots: c.spots });
for (const w of Object.values(ctx.WITNESSES)) {
  const rounds = [w, w.round2].filter(Boolean);
  for (const r of rounds) for (const s of r.statements || []) if (s.spots && s.spots.length) jobs.push({ id: s.cut, spots: s.spots });
}
const todo = jobs.filter((j) => (!only.length || only.includes(j.id)) && fs.existsSync(path.join(root, 'web/assets/cuts', j.id + '.png')));
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1536, height: 1024 } });
for (const j of todo) {
  const img = 'data:image/png;base64,' + fs.readFileSync(path.join(root, 'web/assets/cuts', j.id + '.png')).toString('base64');
  const boxes = j.spots.map((s) => `<div style="position:absolute;left:${s.x * 100}%;top:${s.y * 100}%;width:${s.w * 100}%;height:${s.h * 100}%;border:4px solid ${s.word || s.restore ? '#2f2' : '#f33'};box-sizing:border-box"><span style="background:#000;color:#fff;font:20px sans-serif;padding:2px 4px">${s.id}${s.word ? ' → ' + s.word : ''}</span></div>`).join('');
  await page.setContent(`<body style="margin:0"><div style="position:relative;width:1536px;height:1024px"><img src="${img}" style="width:100%;height:100%;image-rendering:pixelated">${boxes}</div></body>`);
  await page.screenshot({ path: path.join(out, j.id + '.png') });
  console.log(j.id, j.spots.length + '곳');
}
await browser.close();
console.log(`${todo.length}장 → ${out}/`);
