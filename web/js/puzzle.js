// 컷 배열 퍼즐: 묶음의 컷을 누르면 빈 칸에 차례로 들어가고, 칸의 컷을 누르면 묶음으로 돌아간다.

let puzzleTutorialDone = false;

function tagRank(tag, v) { return TAG_ORDER[tag].indexOf(v); }

// a 다음에 b가 오면 거꾸로 되는 태그
function conflictTag(a, b) {
  const ta = CUTS[a].tags, tb = CUTS[b].tags;
  return Object.keys(ta).find((t) => t in tb && tagRank(t, ta[t]) > tagRank(t, tb[t]));
}

function runPuzzle(id) {
  const P = PUZZLES[id];
  const n = P.solution.length;
  const cols = n === 4 ? 2 : 3;
  const st = { slots: Array(n).fill(null), tray: shuffle(P.cuts, P.solution), locked: new Set(), tries: 0, hints: 0, bad: null };
  const root = $('#puzzle');
  root.classList.remove('hidden');
  goal(P.goal);
  hideText();
  clearChars();

  return new Promise(async (resolve) => {
    let msg ='토와: 묶음의 컷을 누르면 빈 칸에 차례로 들어가. 칸에 있는 컷을 누르면 빠져.';
    let done = false;

    const render = () => {
      root.innerHTML = `
        <div class="pz-main">
          <div class="pz-paper" style="grid-template-columns: repeat(${cols}, 1fr)"></div>
          <div class="pz-tray"><h3>컷 묶음 (${st.tray.length})</h3></div>
        </div>
        <div class="pz-bar">
          <div class="pz-say">${msg}</div>
          <button class="act-btn small" data-a="reset">모두 빼기</button>
          <button class="act-btn small press" data-a="hint">토와 힌트</button>
          <button class="act-btn objection" data-a="check">${done ? '다음 ▶' : '이 순서로 확정'}</button>
        </div>`;
      const paper = root.querySelector('.pz-paper');
      st.slots.forEach((cid, i) => {
        const s = document.createElement('div');
        s.className = 'pz-slot' + (cid ? ' filled' : '');
        if (st.bad) {
          if (st.bad.pairs.includes(i)) s.classList.add('bad-right');
          if (st.bad.pairs.includes(i - 1)) s.classList.add('bad-left');
          if (st.bad.decoys.includes(i)) s.classList.add('decoy');
        }
        s.dataset.slot = i;
        s.innerHTML = `<span class="pz-num">${i + 1}${st.locked.has(i) ? ' 📎' : ''}</span>${cid ? '' : '빈 칸'}`;
        if (cid) s.appendChild(cutView(cid, { fills: P.bubbles[cid] ? G.fills : null }));
        paper.appendChild(s);
      });
      const tray = root.querySelector('.pz-tray');
      st.tray.forEach((cid) => {
        const v = cutView(cid, { fills: P.bubbles[cid] ? G.fills : null });
        v.dataset.tray = cid;
        tray.appendChild(v);
      });
      if (!st.tray.length) tray.insertAdjacentHTML('beforeend', '<p style="font-size:18px;color:#999">모든 컷을 놓았다.</p>');
    };

    root.onclick = async (e) => {
      if (G.busyModal) return;
      const btn = e.target.closest('[data-a]');
      if (btn) return onAction(btn.dataset.a);
      if (done) return;
      const bubble = e.target.closest('.bubble');
      if (bubble) {
        const cid = bubble.dataset.bubble;
        const lineId = await pickLine(cid);
        if (lineId) setFill(cid, lineId);
        st.bad = null;
        return render();
      }
      const t = e.target.closest('[data-tray]');
      if (t) {
        const i = st.slots.indexOf(null);
        if (i < 0) { msg ='토와: 칸이 꽉 찼어. 칸에 있는 컷을 눌러서 빼.'; return render(); }
        st.slots[i] = t.dataset.tray;
        st.tray.splice(st.tray.indexOf(t.dataset.tray), 1);
        st.bad = null;
        return render();
      }
      const s = e.target.closest('.pz-slot.filled');
      if (s) {
        const i = Number(s.dataset.slot);
        if (st.locked.has(i)) { msg ='토와: 그 칸은 확실해서 고정해 뒀어.'; return render(); }
        st.tray.push(st.slots[i]);
        st.slots[i] = null;
        st.bad = null;
        return render();
      }
    };

    const onAction = async (a) => {
      if (a === 'check' && done) { root.classList.add('hidden'); root.onclick = null; goal(''); return resolve({ tries: st.tries, hints: st.hints }); }
      if (done) return;
      if (a === 'reset') {
        st.slots.forEach((c, i) => { if (c && !st.locked.has(i)) { st.tray.push(c); st.slots[i] = null; } });
        st.bad = null;
        return render();
      }
      if (a === 'hint') {
        st.hints++;
        if (st.hints === 1) msg ='토와: ' + P.hint;
        else {
          const i = P.solution.findIndex((c, k) => st.slots[k] !== c);
          if (i < 0) msg ='토와: 순서는 다 맞아. 말풍선을 확인해 봐.';
          else {
            const want = P.solution[i];
            const from = st.slots.indexOf(want);
            if (from >= 0) st.slots[from] = st.slots[i];
            else { st.tray.splice(st.tray.indexOf(want), 1); if (st.slots[i]) st.tray.push(st.slots[i]); }
            st.slots[i] = want;
            st.locked.add(i);
            msg =`토와: …${i + 1}번 칸은 「${CUTS[want].title}」. 확실해. 고정해 뒀어.`;
          }
        }
        st.bad = null;
        return render();
      }
      if (a === 'check') {
        if (st.slots.includes(null)) { msg ='토와: 아직 빈 칸이 있어.'; return render(); }
        const missing = Object.keys(P.bubbles).find((c) => st.slots.includes(c) && !G.fills[c]);
        if (missing) { msg =`토와: 「${CUTS[missing].title}」 컷의 말풍선이 비어 있어. 말풍선을 눌러서 채워.`; return render(); }
        st.tries++;
        const orderOk = P.solution.every((c, i) => st.slots[i] === c);
        const badBubble = Object.keys(P.bubbles).find((c) => st.slots.includes(c) && G.fills[c] !== P.bubbles[c]);
        if (orderOk && !badBubble) { done = true; return playPage(); }

        const decoys = st.slots.map((c, i) => ((P.decoys || []).includes(c) ? i : -1)).filter((i) => i >= 0);
        const pairs = [];
        const msgs = [];
        for (let i = 0; i < n - 1; i++) {
          const a1 = st.slots[i], b1 = st.slots[i + 1];
          if (decoys.includes(i) || decoys.includes(i + 1)) continue;
          const t = conflictTag(a1, b1);
          if (t) { pairs.push(i); msgs.push(`${i + 1}번 → ${i + 2}번은 「${TAG_NAME[t]}」이(가) 거꾸로야.`); }
        }
        if (decoys.length) msgs.unshift(`${decoys[0] + 1}번 컷은 이 페이지 범위 밖이야. 목표 문장을 다시 읽어 봐.`);
        if (badBubble) msgs.push(`「${CUTS[badBubble].title}」 말풍선 대사가 이상해.`);
        if (!msgs.length) {
          const d = P.solution.findIndex((c, i) => st.slots[i] !== c);
          pairs.push(Math.max(0, d - 1));
          msgs.push(`${d + 1}번 칸 근처가 이상해. 앞뒤 컷을 비교해 봐.`);
        }
        st.bad = { pairs, decoys };
        msg ='토와: 에러. ' + msgs[0] + (msgs.length > 1 ? ` (그 밖에 ${msgs.length - 1}곳 더)` : '');
        return render();
      }
    };

    const playPage = async () => {
      msg ='…';
      render();
      const paper = root.querySelector('.pz-paper');
      paper.classList.add('reading');
      const slots = paper.querySelectorAll('.pz-slot');
      for (const s of slots) { s.classList.add('lit'); await sleep(700); }
      paper.classList.remove('reading');
      msg ='레이: ' + P.rei;
      render();
    };

    render();
    if (!puzzleTutorialDone) {
      puzzleTutorialDone = true;
      await sayAll([
        ['towa', '컷 정리 시간. 잔상에는 시간이 안 적혀 있어. 그림 속 단서로 순서를 맞춰야 해.'],
        ['towa', '오른쪽 묶음의 컷을 누르면 왼쪽 원고지 빈 칸에 1번부터 차례로 들어가. 읽는 순서는 왼쪽 위 → 오른쪽 아래.'],
        ['towa', '다 놓았으면 [이 순서로 확정]. 틀리면 어디가 왜 이상한지 알려줄게.'],
      ]);
      hideText();
    }
  });
}

function shuffle(ids, solution) {
  const a = ids.slice();
  do {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  } while (solution.every((c, i) => a[i] === c));
  return a;
}
