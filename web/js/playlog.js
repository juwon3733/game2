// 플레이 기록: 장면마다 실제로 머문 시간(창이 보일 때만)과 오답·힌트·도움 수, 어디서 틀렸는지.
// 다른 사람의 플레이를 받아 막히는 곳을 찾으려고 남긴다. 설정에서 JSON으로 내보낸다.
// 저장 형식 { v: 1, runs: [{ ch, scene, at, ms, wrong, hints, help, where: { 라벨: 횟수 }, done }], open: 진행 중인 장면 }

const PLOG_KEY = 'gaha-playlog';
// 장별 목표 시간(분) — docs/12_story_plan.md §2-1
const PLOG_TARGET = { 1: 60, 2: 100, 3: 100, 4: 120, 5: 120, 6: 100 };

const PLOG = (() => {
  const load = () => loadJSON(PLOG_KEY) || { v: 1, runs: [], open: null };
  let data = load();
  let cur = null; // 진행 중인 장면 { ch, scene, at, ms, base, where }
  let last = 0;   // 마지막으로 시간을 잰 순간 (창이 숨겨지면 0)

  // 지난번에 끝나지 않은 장면(새로고침·창 닫기)은 그때까지의 기록으로 닫아 둔다
  if (data.open) { data.runs.push(Object.assign({}, data.open, { done: false })); data.open = null; saveJSON(PLOG_KEY, data); }

  const tick = () => {
    const now = performance.now();
    if (cur && last) cur.ms += now - last;
    last = document.visibilityState === 'visible' ? now : 0;
  };
  const stats = () => G.stats || { wrong: 0, hints: 0, help: 0 };
  // 진행 중인 장면을 기록 한 줄로
  const row = (done) => {
    const s = stats(), b = cur.base;
    const wrong = Math.max(0, s.wrong - b.wrong);
    const where = Object.assign({}, cur.where);
    const marked = Object.values(where).reduce((a, n) => a + n, 0);
    if (wrong > marked) where['기타'] = (where['기타'] || 0) + wrong - marked;
    return { ch: cur.ch, scene: cur.scene, at: cur.at, ms: Math.round(cur.ms), wrong,
      hints: Math.max(0, s.hints - b.hints), help: Math.max(0, s.help - b.help), where, done };
  };
  const persist = () => { if (!cur) return; tick(); data.open = row(false); saveJSON(PLOG_KEY, data); };

  document.addEventListener('visibilitychange', persist);
  addEventListener('pagehide', persist);
  setInterval(persist, 5000);

  return {
    // 장면이 시작될 때. 앞 장면은 끝난 것으로 닫는다
    start(ch, scene) {
      this.end();
      const s = stats();
      cur = { ch, scene, at: Date.now(), ms: 0, base: { wrong: s.wrong, hints: s.hints, help: s.help }, where: {} };
      last = document.visibilityState === 'visible' ? performance.now() : 0;
      persist();
    },
    end() {
      if (!cur) return;
      tick();
      data.runs.push(row(true));
      data.open = null; cur = null;
      saveJSON(PLOG_KEY, data);
    },
    // 오답이 난 자리 (심문 증언, 퍼즐, 네임, 시각표). 라벨이 없는 오답은 「기타」로 남는다
    mark(label) { if (cur) cur.where[label] = (cur.where[label] || 0) + 1; },
    all() { persist(); return data; },
    clear() { data = { v: 1, runs: [], open: null }; if (cur) { cur.at = Date.now(); cur.ms = 0; cur.where = {}; const s = stats(); cur.base = { wrong: s.wrong, hints: s.hints, help: s.help }; } saveJSON(PLOG_KEY, data); },
    // 장별 합계 (끝낸 장면 + 진행 중인 장면)
    byChapter() {
      const out = {};
      const rows = data.runs.concat(cur ? [row(false)] : []);
      rows.forEach((r) => {
        const c = (out[r.ch] = out[r.ch] || { ms: 0, wrong: 0, hints: 0, help: 0 });
        c.ms += r.ms; c.wrong += r.wrong; c.hints += r.hints; c.help += r.help;
      });
      return out;
    },
  };
})();

// 설정의 [플레이 기록 내보내기]: 파일로 내려받고, 안 되면(모바일 등) 클립보드에 복사한다
async function exportPlaylog() {
  const json = JSON.stringify(Object.assign({ exported: new Date().toISOString(), ua: navigator.userAgent }, PLOG.all()), null, 1);
  let saved = false;
  try {
    const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url; a.download = `playlog-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    saved = true;
  } catch { /* 내려받기 불가 */ }
  let copied = false;
  try { await navigator.clipboard.writeText(json); copied = true; } catch { /* 클립보드 불가 */ }
  toast(copied ? (saved ? '기록 파일을 내려받고, 클립보드에도 복사했다.' : '기록을 클립보드에 복사했다.') : saved ? '기록 파일을 내려받았다.' : '내보낼 수 없다. 브라우저 설정을 확인하자.');
}

function fmtMin(ms) { const m = Math.round(ms / 60000); return m < 60 ? `${m}분` : `${Math.floor(m / 60)}시간 ${m % 60}분`; }
