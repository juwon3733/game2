// 모든 장면을 열어 빨리 넘기기로 진행해 보고 자바스크립트 오류와 깨진 파일을 찾는다.
// 사용: node tools/smoke.mjs   (playwright 필요. CI는 워크플로에서 설치)
// 심문·퍼즐은 정답을 고르지 않으므로 끝까지 가진 않는다. 화면이 뜨고 오류 없이 돌아가는지만 본다.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const { chromium } = createRequire(import.meta.url)('playwright');
const web = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'web');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.woff2': 'font/woff2', '.json': 'application/json' };

// 아직 없어도 되는 이미지(게임이 임시 그림을 쓴다)
const OPTIONAL = /\/assets\/(maps|sprites|title|ui|cg)\//;

const server = http.createServer((req, res) => {
  const p = path.join(web, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html'));
  if (!p.startsWith(web) || !fs.existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}/`;

const scenes = [...fs.readFileSync(path.join(web, 'js', 'script_ch1.js'), 'utf8').matchAll(/^\s+\['(\w+)', '/gm)].map((m) => m[1]);
const browser = await chromium.launch();
const problems = [];

for (const scene of ['', ...scenes]) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const tag = scene || 'title';
  page.on('pageerror', (e) => problems.push(`[${tag}] JS 오류: ${e.message}`));
  page.on('response', (r) => {
    if (r.status() >= 400 && r.url().startsWith(base) && !OPTIONAL.test(r.url())) problems.push(`[${tag}] ${r.status()} ${r.url().slice(base.length)}`);
  });
  await page.goto(base + (scene ? '#' + scene : ''));
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForTimeout(800);
  if (scene) {
    // 빨리 넘기기 + 뜨는 확인 버튼·첫 선택지를 눌러 가며 6초 진행
    await page.evaluate(() => setMode('skip'));
    const end = Date.now() + 6000;
    while (Date.now() < end) {
      for (const sel of ['.md-ok', '.ch-btn']) {
        const b = page.locator(sel).first();
        if (await b.isVisible().catch(() => false)) await b.click().catch(() => {});
      }
      await page.keyboard.press('Space').catch(() => {});
      await page.evaluate(() => { if (!G.skip && !G.busyModal) setMode('skip'); }).catch(() => {});
      await page.waitForTimeout(150);
    }
  }
  await page.close();
}

await browser.close();
server.close();
if (problems.length) {
  console.log('❌ 문제 ' + problems.length + '개');
  [...new Set(problems)].forEach((p) => console.log(' - ' + p));
  process.exit(1);
}
console.log(`✅ 장면 ${scenes.length}개 + 타이틀: 오류 없음`);
