// 시각표 퍼즐: 사람마다 한 줄, 시각마다 한 칸. 컷 속 시계를 읽어 누가 언제 어디 있었는지 채운다.
// 같은 시각에 두 곳에 있을 수 없다 → 알리바이를 세우거나 깬다.
//
// PUZZLES[id] = { timeline: true, title, goal, times: ['20:50', …], rows: [{ who: '유키', cells: [null, '3E', …] }, …],
//                 cuts: [...], hint, rei }   cells의 null은 "이 시각엔 컷이 없다" (비워 둬야 맞다)

function runTimeline(id) {
  const P = PUZZLES[id];
  const R = P.rows.length, T = P.times.length;
  const st = { grid: P.rows.map(() => Array(T).fill(null)), tray: shuffle(P.cuts, P.cuts), pick: null, locked: new Set(), hints: 0, tries: 0, bad: [] };
  const key = (r, t) => r + ':' + t;
  const root = $('#puzzle');
  root.classList.remove('hidden');
  goal(P.goal);
  hideText();
  clearChars();

  return new Promise(async (resolve) => {
    const MSG0 = '묶음에서 컷을 누르고, 들어갈 칸을 누른다. 칸의 컷을 누르면 빠진다. 컷이 없는 시각은 비워 둔다.';
    let msg = MSG0;
    let done = false;

    const render = () => {
      root.innerHTML = `
        <div class="pz-main">
          <div class="tl-paper" style="grid-template-columns: 110px repeat(${T}, minmax(0, 1fr))">
            <div class="tl-corner">시각표</div>${P.times.map((t) => `<div class="tl-time">${t}</div>`).join('')}
            ${P.rows.map((row, r) => `<div class="tl-who${st.bad.includes(r) ? ' bad' : ''}">${row.who}</div>`
              + P.times.map((_, t) => `<div class="tl-cell" data-r="${r}" data-t="${t}"></div>`).join('')).join('')}
          </div>
          <div class="pz-tray"><h3>컷 묶음 (${st.tray.length})</h3></div>
        </div>
        <div class="pz-bar">
          <div class="pz-say">${sayBar(msg)}</div>
          ${done ? '' : `<button class="act-btn small" data-a="reset">모두 빼기</button>
          <button class="act-btn small press" data-a="hint">토와 힌트</button>`}
          <button class="act-btn objection" data-a="check">${done ? '다음 ▶' : '이 시각표로 확정'}</button>
        </div>`;
      root.querySelectorAll('.tl-cell').forEach((c) => {
        const r = Number(c.dataset.r), t = Number(c.dataset.t), cid = st.grid[r][t];
        if (st.locked.has(key(r, t))) c.classList.add('locked');
        if (cid) { c.classList.add('filled'); c.appendChild(cutView(cid, { noSpots: true })); }
        else c.innerHTML = '<span class="tl-empty">—</span>';
      });
      const tray = root.querySelector('.pz-tray');
      st.tray.forEach((cid) => {
        const v = cutView(cid, { noSpots: true });
        v.dataset.tray = cid;
        if (st.pick === cid) v.classList.add('picked');
        tray.appendChild(v);
      });
      if (!st.tray.length) tray.insertAdjacentHTML('beforeend', '<p style="font-size:18px;color:#999">모든 컷을 놓았다.</p>');
    };

    root.onclick = async (e) => {
      if (G.busyModal) return;
      const btn = e.target.closest('[data-a]');
      if (btn) return onAction(btn.dataset.a);
      if (done || e.target.closest('.cutv-zoom')) return;
      const t = e.target.closest('[data-tray]');
      if (t) { st.pick = st.pick === t.dataset.tray ? null : t.dataset.tray; sfx('select'); return render(); }
      const c = e.target.closest('.tl-cell');
      if (!c) return;
      const r = Number(c.dataset.r), ti = Number(c.dataset.t);
      if (st.locked.has(key(r, ti))) { msg = '토와: 그 칸은 확실해서 고정해 뒀어.'; return render(); }
      const old = st.grid[r][ti];
      if (st.pick) {
        st.grid[r][ti] = st.pick;
        st.tray.splice(st.tray.indexOf(st.pick), 1);
        if (old) st.tray.push(old);
        st.pick = null;
        sfx('place');
      } else if (old) {
        st.grid[r][ti] = null;
        st.tray.push(old);
        sfx('cancel');
      } else { msg = '토와: 먼저 오른쪽 묶음에서 컷을 골라.'; }
      st.bad = [];
      render();
    };

    const wrongRows = () => P.rows.map((row, r) => (row.cells.some((want, t) => (want || null) !== st.grid[r][t]) ? r : -1)).filter((r) => r >= 0);

    const onAction = async (a) => {
      if (a === 'check' && done) {
        root.classList.add('hidden'); root.onclick = null; goal('');
        G.lastSolution = P.times.flatMap((_, t) => P.rows.map((row) => row.cells[t]).filter(Boolean)); // 결론 몽타주용
        return resolve({ tries: st.tries, hints: st.hints });
      }
      if (done) return;
      if (a === 'reset') {
        st.grid.forEach((row, r) => row.forEach((c, t) => { if (c && !st.locked.has(key(r, t))) { st.tray.push(c); row[t] = null; } }));
        st.pick = null; st.bad = [];
        msg = MSG0;
        return render();
      }
      if (a === 'hint') {
        if (st.hints >= diff().hints) { msg = '토와: 힌트는 여기까지. 시계를 직접 읽어.'; return render(); }
        st.hints++; G.stats.hints++;
        if (st.hints === 1) { msg = '토와: ' + P.hint; return render(); }
        // 두 번째: 틀린 칸 하나를 정답으로 고정
        for (let r = 0; r < R; r++) for (let t = 0; t < T; t++) {
          const want = P.rows[r].cells[t];
          if (!want || st.grid[r][t] === want) continue;
          st.grid.forEach((row) => row.forEach((c, k) => { if (c === want) row[k] = null; }));
          st.tray = st.tray.filter((c) => c !== want);
          if (st.grid[r][t]) st.tray.push(st.grid[r][t]);
          st.grid[r][t] = want;
          st.locked.add(key(r, t));
          msg = `토와: …${P.rows[r].who}, ${P.times[t]}은 「${CUTS[want].title}」. 고정해 뒀어.`;
          return render();
        }
        msg = '토와: 채운 칸은 다 맞아. 남은 걸 봐.';
        return render();
      }
      if (a === 'check') {
        if (st.tray.length) { msg = '토와: 아직 놓지 않은 컷이 있어.'; return render(); }
        st.tries++;
        const bad = wrongRows();
        if (!bad.length) { done = true; return playPage(); }
        G.stats.wrong++;
        PLOG.mark(`시각표 ${id}`);
        sfx('wrong'); quake();
        st.bad = bad;
        msg = `토와: 에러. 「${P.rows[bad[0]].who}」 줄이 맞지 않아.` + (bad.length > 1 ? ' (다른 줄도.)' : '');
        return render();
      }
    };

    const playPage = async () => {
      msg = '…';
      render();
      const paper = root.querySelector('.tl-paper');
      paper.classList.add('reading');
      // 시각 순서대로 한 열씩 밝힌다
      for (let t = 0; t < T; t++) {
        paper.querySelectorAll(`.tl-cell[data-t="${t}"], .tl-time:nth-of-type(${t + 2})`).forEach((c) => c.classList.add('lit'));
        sfx('page', { vol: 0.5 });
        await sleep(700);
      }
      sfx('correct');
      FX.stamp('완성!');
      paper.classList.remove('reading');
      msg = '레이: ' + P.rei;
      render();
    };

    render();
    if (!G.flags.timeTut) {
      G.flags.timeTut = true;
      await sayAll([
        ['tip', '[[시각표]]: 사람마다 한 줄, 시각마다 한 칸.'],
        ['tip', '컷 속 시계(벽시계·계산대·휴대폰·역 시계)로 시각을 읽고, 누구의 컷인지는 손이나 발 같은 데서 알아낸다.'],
        ['tip', '한 사람이 같은 시각에 두 군데 있을 수는 없다. 컷이 없는 시각은 비워 둔다.'],
      ]);
      hideText();
    }
  });
}
