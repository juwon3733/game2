// 장마다 처음부터 끝까지 정답으로 풀어 보고, 다음 장(종장은 타이틀)까지 가는지 본다.
// 결론 네임 단어가 그 장 안에서 다 모이는지, 오류가 없는지도 검사한다.
// 사용: node tools/playthrough.mjs [장 번호...] [--mode=right|edit|margin]   (playwright 필요)

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const { chromium } = createRequire(import.meta.url)('playwright');
const web = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'web');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.mp3': 'audio/mpeg', '.woff2': 'font/woff2', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const p = path.join(web, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html'));
  if (!p.startsWith(web) || !fs.existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}/`;

const args = process.argv.slice(2);
const mode = (args.find((a) => a.startsWith('--mode=')) || '--mode=right').slice(7);
const files = fs.readdirSync(path.join(web, 'js')).filter((f) => /^script_ch\d+\.js$/.test(f)).sort();
const firsts = files.map((f) => fs.readFileSync(path.join(web, 'js', f), 'utf8').match(/^\s+\['(\w+)', '/m)[1]);
const wanted = args.filter((a) => /^\d+$/.test(a)).map(Number);
const chs = wanted.length ? wanted : firsts.map((_, i) => i + 1);

const browser = await chromium.launch();
const problems = [];
const log = (s) => console.log(s);

for (const ch of chs) {
  const start = firsts[ch - 1], stop = firsts[ch] || 'TITLE';
  log(`${ch}장 (${start} → ${stop})`);
  const p = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push('JS 오류: ' + e.message));
  p.on('console', (m) => {
    if (m.type() === 'error' && !m.text().includes('404') && !m.text().includes('Failed to load')) errs.push(m.text());
    if (m.type() === 'log' && /ok=false/.test(m.text())) errs.push(m.text());
  });
  await p.addInitScript((mode) => {
    window.__mode = mode;
    window.addEventListener('load', () => {
      const oRound = trialRound;
      trialRound = (wid, R) => { window.__R = R; window.__k = 0; return oRound(wid, R); };
      const oRun = runTrial;
      runTrial = async (id) => { await oRun(id); window.__R = null; window.__A = null; };
      const oAct = actions;
      actions = async (btns) => {
        const R = window.__R;
        if (!R || !btns.some((x) => x.id === 'obj')) return oAct(btns);
        await new Promise((r) => setTimeout(r, 30));
        const dots = [...document.querySelectorAll('.tr-dot')];
        const idx = dots.findIndex((d) => d.classList.contains('on'));
        const a = R.answers ? R.answers[window.__k] : (window.__k === 0 ? R.answer : null);
        window.__A = a;
        if (!a) return 'next';
        const want = a.statement === 'any' ? idx : a.statement;
        return idx < want ? 'next' : idx > want ? 'prev' : (window.__k++, 'obj');
      };
      const oPick = pickCut;
      pickCut = async (title, sub, o = {}) => {
        if (window.__R && window.__A) return title === '겹쳐 보기' ? [].concat(window.__A.with)[0] : [].concat(window.__A.cut)[0];
        if (o.only) { const Q = [CONCLUSION, CONCLUSION2, CONCLUSION3, CONCLUSION4, CONCLUSION6].flat().find((q) => title.includes(q.q)); const ans = Q ? Q.answer : []; const all = [...G.cuts, ...G.items]; const c = o.only.find((id) => ans.includes(id) && all.includes(id)); if (c) return c; console.error('NO ANSWER OWNED for ' + title); }
        return oPick(title, sub, o);
      };
      const oLine = pickLine;
      pickLine = async (cid) => {
        if (window.__A && window.__A.line) return window.__A.line;
        for (const P of Object.values(PUZZLES)) if (P.bubbles[cid]) { if (!G.lines.includes(P.bubbles[cid])) console.error('LINE NOT OWNED ' + P.bubbles[cid]); return P.bubbles[cid]; }
        return oLine(cid);
      };
      pickSpot = async (cid, spots, title) => (/이음매/.test(title || '') ? spots.find((x) => x.restore).id : window.__A ? [].concat(window.__A.spot)[0] : null);
      choice = async (opts, prompt) => {
        const A = window.__A;
        if (A && A.choice && prompt === A.choice.prompt) return A.choice.answer;
        if (prompt === '어떻게 반박할까?') return A && A.spot ? 1 : 0;
        if (/루루에게/.test(prompt)) return 1;
        if (prompt === '최종 선택') { if (window.__mode === 'margin') MARGIN_FLAGS.forEach((f) => (G.flags[f] = true)); console.log('ENDING-CHOICE ' + window.__mode); return window.__mode === 'edit' ? 0 : 1; }
        return 0;
      };
      const oName = runName;
      runName = async (opt) => {
        // 플레이어처럼 가진 컷을 크게 보고 짚어서 얻는 단어도 줍는다
        G.cuts.forEach((c) => ((CUTS[c] && CUTS[c].spots) || []).forEach((sp) => { if (sp.word && !G.words.includes(sp.word)) G.words.push(sp.word); }));
        const picks = {}; let missing = [];
        opt.parts.forEach((pt, i) => { if (typeof pt === 'string') return; const want = [].concat(pt.a);
          let w = want.find((x) => G.words.includes(x));
          if (window.__mode !== 'right' && pt.cat === 'person' && opt.report && pt === opt.parts.find((x) => typeof x !== 'string' && x.cat === 'person')) w = window.__mode;
          if (!w) { missing.push(want[0]); w = G.words.find((x) => WORDS[x].cat === pt.cat); } picks[i] = w; });
        if (missing.length) console.error('NAME MISSING WORDS ' + missing.join(','));
        const ok = opt.parts.every((pt, i) => typeof pt === 'string' || [].concat(pt.a).includes(picks[i]));
        console.log('NAME ' + opt.title + ' ok=' + ok);
        return { ok, picks };
      };
    });
  }, mode);
  await p.goto(base + '#' + start);
  await p.evaluate(() => localStorage.clear());
  await p.reload();
  const t0 = Date.now(); let last = '', reached = false;
  while (Date.now() - t0 < 420000) {
    await p.keyboard.press('Control').catch(() => {});
    const st = await p.evaluate(() => {
      if (typeof EX !== 'undefined' && EX && !EX.paused) {
        const o = EX.map.objects.find((m) => (EX.opts.required || []).includes(m.id) && !EX.examined.has(m.id));
        if (o) { interact(o); return 'ex:' + o.id; }
        return 'ex-idle';
      }
      const pz = document.querySelector('#puzzle:not(.hidden)');
      if (pz && !G.busyModal && pz.querySelector('.tl-paper')) {
        const btn = pz.querySelector('[data-a=check]');
        if (btn.textContent.includes('다음')) { btn.click(); return 'tl-next'; }
        if (pz.querySelector('.tl-paper.reading')) return 'tl-reading';
        if (pz.querySelectorAll('.tl-cell.filled').length) { btn.click(); return 'tl-check'; }
        const P = Object.values(PUZZLES).find((P) => P.timeline && document.body.textContent.includes(P.goal));
        P.rows.forEach((row, r) => row.cells.forEach((cid, t) => { if (!cid) return;
          pz.querySelector(`.pz-tray [data-tray="${cid}"]`).click(); pz.querySelector(`.tl-cell[data-r="${r}"][data-t="${t}"]`).click(); }));
        return 'tl';
      }
      if (pz && !G.busyModal) {
        const btn = pz.querySelector('[data-a=check]');
        if (btn.textContent.includes('다음')) { btn.click(); return 'pz-next'; }
        if (pz.querySelector('.pz-paper.reading')) return 'pz-reading';
        const empty = pz.querySelector('.bubble.empty'); if (empty) { empty.click(); return 'pz-bubble'; }
        const P = Object.values(PUZZLES).find((P) => P.goal === document.querySelector('#goal')?.textContent?.replace(/^목표\s*/, '')) ;
        return 'pz';
      }
      return '';
    });
    if (st === 'pz') {
      // 정답 순서로 넣기
      await p.evaluate(() => {
        const P = Object.values(PUZZLES).find((P) => document.body.textContent.includes(P.goal));
        const pz = document.querySelector('#puzzle');
        const filled = pz.querySelectorAll('.pz-half.filled').length;
        if (filled === 0) for (const id of P.solution.flat()) { const t = pz.querySelector(`.pz-tray [data-tray="${id}"]`); if (t) t.click(); }
        else pz.querySelector('[data-a=check]').click();
      });
    }
    const ok = await p.$('.md-ok'); if (ok) await ok.click().catch(() => {});
    if (!st.startsWith('ex') && !st.startsWith('pz') && !st.startsWith('tl')) await p.mouse.click(800, 820).catch(() => {});
    const sv = await p.evaluate(() => (JSON.parse(localStorage.getItem('gaha-save') || '{}').scene) || (document.querySelector('.title-screen') ? 'TITLE' : ''));
    if (sv !== last) { log(`  ${sv} ${Math.round((Date.now() - t0) / 1000)}s`); last = sv; }
    if (sv === stop) { reached = true; break; }
    await p.waitForTimeout(120);
  }
  if (!reached) errs.push(`${stop}까지 못 감 (마지막 장면 ${last})`);
  if (errs.length) problems.push(...[...new Set(errs)].map((e) => `[${ch}장] ${e}`));
  await p.close();
}

await browser.close();
server.close();
if (problems.length) {
  console.log('❌ 문제 ' + problems.length + '개');
  problems.forEach((x) => console.log(' - ' + x));
  process.exit(1);
}
console.log(`✅ ${chs.join(', ')}장 끝까지 풀림 (${mode})`);
