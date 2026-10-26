// 컷 배열 퍼즐: 묶음의 컷을 누르면 빈 칸에 차례로 들어가고, 칸의 컷을 누르면 묶음으로 돌아간다.

function tagRank(tag, v) { return TAG_ORDER[tag].indexOf(v); }

// a 다음에 b가 오면 거꾸로 되는 태그
function conflictTag(a, b) {
  const ta = CUTS[a].tags, tb = CUTS[b].tags;
  return Object.keys(ta).find((t) => t in tb && tagRank(t, ta[t]) > tagRank(t, tb[t]));
}

// solution 항목이 배열이면 "동시 칸": 같은 순간의 두 컷을 한 칸에 나란히 놓는다(둘의 순서는 상관없음).
// P.discard가 true면 solution의 마지막 묶음은 "파기 칸": 가짜 컷을 버리는 칸. 순서 판정에서 빠진다.
function runPuzzle(id) {
  const P = PUZZLES[id];
  const n = P.solution.length;
  const group = (i) => [].concat(P.solution[i]);
  const cap = (i) => group(i).length;
  const D = P.discard ? n - 1 : -1;
  const cols = n === 4 ? 2 : n >= 8 ? 4 : 3;
  const st = { slots: Array.from({ length: n }, () => []), tray: shuffle(P.cuts, P.solution.flat()), locked: new Set(), tries: 0, hints: 0, bad: null };
  const placed = () => st.slots.flat();
  const sameSet = (a, b) => a.length === b.length && a.every((c) => b.includes(c));
  const firstFree = () => st.slots.findIndex((s, i) => !st.locked.has(i) && s.length < cap(i));
  const root = $('#puzzle');
  root.classList.remove('hidden');
  goal(P.goal);
  hideText();
  clearChars();

  return new Promise(async (resolve) => {
    const MSG0 = '컷을 칸으로 끌어다 놓거나 눌러서 넣는다. 칸끼리 끌면 자리가 바뀌고, 칸의 컷을 누르면 빠진다.';
    let msg = MSG0
      + (P.solution.some(Array.isArray) ? ' 넓은 칸은 같은 순간의 두 컷이 나란히 들어가는 동시 칸이야.' : '');
    let done = false;

    const render = () => {
      document.querySelectorAll('.pz-ghost').forEach((g) => g.remove()); // 남은 끌기 그림자
      root.innerHTML = `
        <div class="pz-main">
          <div class="pz-paper" style="grid-template-columns: repeat(${cols}, 1fr)"></div>
          <div class="pz-tray"><h3>컷 묶음 (${st.tray.length})</h3></div>
        </div>
        <div class="pz-bar">
          <div class="pz-say">${sayBar(msg)}</div>
          ${done ? '' : `<button class="act-btn small" data-a="reset">모두 빼기</button>
          <button class="act-btn small press" data-a="hint">토와 힌트</button>`}
          <button class="act-btn objection" data-a="check">${done ? '다음 ▶' : '이 순서로 확정'}</button>
        </div>`;
      const paper = root.querySelector('.pz-paper');
      // 두 페이지 퍼즐: 구분선 줄은 얇게, 나머지 줄은 같은 높이로
      if (P.pageBreak) {
        const r1 = Math.ceil(P.pageBreak / cols), r2 = Math.ceil((n - P.pageBreak) / cols);
        paper.style.gridTemplateRows = `repeat(${r1}, 1fr) 26px repeat(${r2}, 1fr)`;
      }
      st.slots.forEach((cids, i) => {
        // 두 페이지 퍼즐: 페이지가 넘어가는 자리에 구분선
        if (P.pageBreak && i === P.pageBreak) paper.insertAdjacentHTML('beforeend', `<div class="pz-pagebreak" style="grid-column: 1 / -1">— 2쪽 —</div>`);
        const s = document.createElement('div');
        s.className = 'pz-slot' + (cids.length ? ' filled' : '') + (i === D ? ' discard' : cap(i) > 1 ? ' sim' : '');
        if (st.bad) {
          if (st.bad.pairs.includes(i)) s.classList.add('bad-right');
          if (st.bad.pairs.includes(i - 1)) s.classList.add('bad-left');
          if (st.bad.decoys.includes(i) || st.bad.sims.includes(i)) s.classList.add('decoy');
        }
        s.dataset.slot = i;
        s.innerHTML = `<span class="pz-num">${i === D ? '파기' : i + 1}${cap(i) > 1 && i !== D ? ' 동시' : ''}${st.locked.has(i) ? ' 📎' : ''}</span>`;
        for (let h = 0; h < cap(i); h++) {
          const cid = cids[h];
          const half = document.createElement('div');
          half.className = 'pz-half' + (cid ? ' filled' : '');
          half.dataset.slot = i;
          half.dataset.half = h;
          if (cid) half.appendChild(cutView(cid, { fills: P.bubbles[cid] ? G.fills : null, noSpots: true }));
          else half.textContent = '빈 칸';
          s.appendChild(half);
        }
        paper.appendChild(s);
      });
      const tray = root.querySelector('.pz-tray');
      st.tray.forEach((cid) => {
        const v = cutView(cid, { fills: P.bubbles[cid] ? G.fills : null, noSpots: true });
        v.dataset.tray = cid;
        tray.appendChild(v);
      });
      if (!st.tray.length) tray.insertAdjacentHTML('beforeend', '<p style="font-size:18px;color:#999">모든 컷을 놓았다.</p>');
    };

    // 칸 i에 컷을 넣는다. 자리가 없으면 h번째(없으면 마지막) 컷을 밀어내고, 밀려난 컷을 돌려준다.
    const put = (i, cid, h) => {
      const s = st.slots[i];
      if (s.length < cap(i)) { s.push(cid); return null; }
      const k = h != null && h < s.length ? h : s.length - 1;
      const out = s[k];
      s[k] = cid;
      return out;
    };
    const take = (i, h) => st.slots[i].splice(h, 1)[0];

    // 끌어 놓기: 묶음 → 칸, 칸 ↔ 칸(맞바꿈), 칸 → 바깥(묶음으로). 그냥 누르면 차례로 들어간다.
    let drag = null, dragged = false;
    const stagePt = (e) => {
      const r = $('#stage').getBoundingClientRect(), k = r.height / 720;
      return [(e.clientX - r.left) / k, (e.clientY - r.top) / k];
    };
    const halfAt = (e) => { const el = document.elementFromPoint(e.clientX, e.clientY); return el && (el.closest('.pz-half') || el.closest('.pz-slot')); };
    root.onpointerdown = (e) => {
      if (done || G.busyModal || e.button > 0 || e.target.closest('.bubble, .cutv-zoom, [data-a]')) return;
      const card = e.target.closest('[data-tray], .pz-half.filled');
      if (!card) return;
      const slot = card.classList.contains('pz-half') ? Number(card.dataset.slot) : null;
      if (slot !== null && st.locked.has(slot)) return;
      e.preventDefault();
      drag = { tray: card.dataset.tray, slot, half: slot !== null ? Number(card.dataset.half) : null,
        src: slot !== null ? card.querySelector('.cutv') : card, x: e.clientX, y: e.clientY, ghost: null };
    };
    const onMove = (e) => {
      if (!drag) return;
      if (!drag.ghost) {
        if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 8) return;
        drag.ghost = drag.src.cloneNode(true);
        drag.ghost.className += ' pz-ghost';
        $('#stage').appendChild(drag.ghost);
        drag.src.classList.add('pz-dragging');
      }
      const [x, y] = stagePt(e);
      Object.assign(drag.ghost.style, { left: x - 115 + 'px', top: y - 60 + 'px' });
      root.querySelectorAll('.drop').forEach((s) => s.classList.remove('drop'));
      const t = halfAt(e);
      if (t && !st.locked.has(Number(t.dataset.slot))) t.classList.add('drop');
    };
    const onUp = (e) => {
      if (!drag) return;
      const d = drag;
      drag = null;
      if (!d.ghost) return;
      d.ghost.remove();
      dragged = true;
      setTimeout(() => { dragged = false; }, 0);
      const t = halfAt(e);
      const to = t ? Number(t.dataset.slot) : null;
      const toHalf = t && t.dataset.half != null ? Number(t.dataset.half) : null;
      if (to !== null && !st.locked.has(to)) {
        if (d.slot !== null) {
          if (to === d.slot) { render(); return; }
          const cid = take(d.slot, d.half);
          const out = put(to, cid, toHalf);
          if (out) st.slots[d.slot].splice(d.half, 0, out);
        } else {
          const out = put(to, d.tray, toHalf);
          st.tray.splice(st.tray.indexOf(d.tray), 1);
          if (out) st.tray.push(out);
        }
        sfx('place');
      } else if (d.slot !== null && !t) {
        st.tray.push(take(d.slot, d.half));
        sfx('cancel');
      }
      st.bad = null;
      render();
    };
    // 터치에서 브라우저가 끌기를 가로채면(pointercancel) 떠 있는 컷 그림자를 치운다
    const onCancel = () => {
      if (!drag) return;
      if (drag.ghost) drag.ghost.remove();
      drag = null;
      render();
    };
    addEventListener('pointermove', onMove);
    addEventListener('pointerup', onUp);
    addEventListener('pointercancel', onCancel);

    root.onclick = async (e) => {
      if (G.busyModal || dragged) return;
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
        const i = firstFree();
        if (i < 0) { msg = '토와: 칸이 꽉 찼어. 칸에 있는 컷을 눌러서 빼.'; return render(); }
        put(i, t.dataset.tray);
        st.tray.splice(st.tray.indexOf(t.dataset.tray), 1);
        sfx('place');
        st.bad = null;
        return render();
      }
      const s = e.target.closest('.pz-half.filled');
      if (s) {
        const i = Number(s.dataset.slot);
        if (st.locked.has(i)) { msg = '토와: 그 칸은 확실해서 고정해 뒀어.'; return render(); }
        st.tray.push(take(i, Number(s.dataset.half)));
        st.bad = null;
        sfx('cancel');
        return render();
      }
    };

    const onAction = async (a) => {
      if (a === 'check' && done) {
        root.classList.add('hidden'); root.onclick = null; root.onpointerdown = null; goal('');
        removeEventListener('pointermove', onMove); removeEventListener('pointerup', onUp); removeEventListener('pointercancel', onCancel);
        G.lastSolution = P.solution.slice(0, D >= 0 ? D : P.solution.length).flat(); // 결론 몽타주용
        return resolve({ tries: st.tries, hints: st.hints });
      }
      if (done) return;
      if (a === 'reset') {
        st.slots.forEach((c, i) => { if (!st.locked.has(i)) { st.tray.push(...c); st.slots[i] = []; } });
        st.bad = null;
        msg = MSG0;
        return render();
      }
      if (a === 'hint') {
        if (st.hints >= diff().hints) { msg = '토와: 힌트는 여기까지. 나머지는 직접 읽어.'; return render(); }
        st.hints++;
        G.stats.hints++;
        if (st.hints === 1) msg = '토와: ' + P.hint;
        else {
          const i = P.solution.findIndex((c, k) => !sameSet(st.slots[k], group(k)));
          if (i < 0) msg = '토와: 순서는 다 맞아. 말풍선을 확인해 봐.';
          else {
            // 정답 컷을 다른 칸·묶음에서 빼 오고, 이 칸에 있던 컷은 묶음으로
            const want = group(i);
            st.tray.push(...st.slots[i].filter((c) => !want.includes(c)));
            st.slots.forEach((s, k) => { if (k !== i) st.slots[k] = s.filter((c) => !want.includes(c)); });
            st.tray = st.tray.filter((c) => !want.includes(c));
            st.slots[i] = want.slice();
            st.locked.add(i);
            msg = `토와: …${i + 1}번 칸은 ${want.map((c) => `「${CUTS[c].title}」`).join('와 ')}. 확실해. 고정해 뒀어.`;
          }
        }
        st.bad = null;
        return render();
      }
      if (a === 'check') {
        if (st.slots.some((s, i) => s.length < cap(i))) { msg = '토와: 아직 빈 칸이 있어.'; return render(); }
        const missing = Object.keys(P.bubbles).find((c) => placed().includes(c) && !G.fills[c]);
        if (missing) { msg = `토와: 「${CUTS[missing].title}」 컷의 말풍선이 비어 있어. 말풍선을 눌러서 채워.`; return render(); }
        st.tries++;
        const orderOk = P.solution.every((c, i) => sameSet(st.slots[i], group(i)));
        const badBubble = Object.keys(P.bubbles).find((c) => placed().includes(c) && G.fills[c] !== P.bubbles[c]);
        if (orderOk && !badBubble) { done = true; return playPage(); }

        const decoys = st.slots.map((s, i) => (s.some((c) => (P.decoys || []).includes(c)) ? i : -1)).filter((i) => i >= 0);
        const pairs = [], sims = [];
        const msgs = [];
        // 동시 칸의 두 컷은 같은 순간이어야 한다: 둘 다 가진 태그 값이 같아야 함
        st.slots.forEach((s, i) => {
          if (s.length < 2 || decoys.includes(i) || i === D) return;
          const [a1, b1] = s, ta = CUTS[a1].tags, tb = CUTS[b1].tags;
          const t = Object.keys(ta).find((k) => k in tb && ta[k] !== tb[k]);
          if (t) { sims.push(i); msgs.push(`${i + 1}번 동시 칸의 두 컷은 「${TAG_NAME[t]}」이(가) 달라.`); }
        });
        for (let i = 0; i < n - 1; i++) {
          if (decoys.includes(i) || decoys.includes(i + 1) || i === D || i + 1 === D) continue;
          const t = st.slots[i].flatMap((a1) => st.slots[i + 1].map((b1) => conflictTag(a1, b1))).find(Boolean);
          if (t) { pairs.push(i); msgs.push(`${i + 1}번 → ${i + 2}번은 「${TAG_NAME[t]}」이(가) 거꾸로야.`); }
        }
        if (decoys.length) msgs.unshift(`${decoys[0] + 1}` + (P.decoyMsg || '번 컷은 이 페이지 범위 밖이야. 목표 문장을 다시 읽어 봐.'));
        if (D >= 0 && !sameSet(st.slots[D], group(D))) { decoys.push(D); msgs.unshift('파기 칸이 이상해. 진짜 컷을 버렸거나, 가짜가 원고에 남았어.'); }
        if (badBubble) msgs.push(`「${CUTS[badBubble].title}」 말풍선 대사가 이상해.`);
        if (!msgs.length) {
          const d = P.solution.findIndex((c, i) => !sameSet(st.slots[i], group(i)));
          pairs.push(Math.max(0, d - 1));
          msgs.push(`${d + 1}번 칸 근처가 이상해. 앞뒤 컷을 비교해 봐.`);
        }
        sfx('wrong'); quake();
        G.stats.wrong++;
        const fb = diff().feedback;
        if (fb === 'count') {
          const wrong = P.solution.filter((c, i) => !sameSet(st.slots[i], group(i))).length + (badBubble ? 1 : 0);
          st.bad = null;
          msg = `토와: 에러. 맞지 않는 곳이 ${wrong}군데.`;
          return render();
        }
        st.bad = { pairs, decoys, sims };
        // 어느 칸 사이인지만 말하고, 무엇이 거꾸로인지는 말하지 않는다
        const shown = fb === 'tag' ? msgs : msgs.map((m) => m.replace(/은 「.*?」이\(가\) 거꾸로야\./, ' 사이가 이상해.')
          .replace(/의 두 컷은 「.*?」이\(가\) 달라\./, '의 두 컷은 같은 순간이 아니야.').replace(/ 말풍선 대사가 이상해\./, ' 말풍선이 이상해.'));
        msg = '토와: 에러. ' + shown[0] + (shown.length > 1 ? ` (그 밖에 ${shown.length - 1}곳 더)` : '');
        return render();
      }
    };

    const playPage = async () => {
      msg = '…';
      render();
      const paper = root.querySelector('.pz-paper');
      paper.classList.add('reading');
      const slots = paper.querySelectorAll('.pz-slot');
      // 칸이 하나씩 밝아지며, 의성어가 있는 컷은 그 소리가 난다
      for (const s of slots) {
        if (Number(s.dataset.slot) === D) continue; // 파기 칸은 읽지 않는다
        s.classList.add('lit');
        const cids = st.slots[Number(s.dataset.slot)];
        const loud = cids.find((c) => PAGE_SFX[c]);
        const hit = cids.find((c) => PAGE_IMPACT[c]);
        if (hit) FX.impact(PAGE_IMPACT[hit]);
        else sfx(PAGE_SFX[loud] || 'page', { vol: loud ? 1 : 0.5 });
        await sleep(cids.length > 1 ? 1200 : 900);
      }
      sfx('correct');
      FX.stamp('완성!');
      paper.classList.remove('reading');
      msg = '레이: ' + P.rei;
      render();
    };

    render();
    if (!G.flags.puzzleTut) {
      G.flags.puzzleTut = true;
      await sayAll([
        ['tip', '컷 정리: 잔상에는 시간이 적혀 있지 않다. 그림 속 단서로 순서를 맞춘다.'],
        ['tip', '오른쪽 묶음의 컷을 원고지 칸으로 끌어다 놓는다. 누르기만 하면 1번 칸부터 차례로 들어간다. 읽는 순서는 왼쪽 위 → 오른쪽 아래.'],
        ['tip', '다 놓았으면 [이 순서로 확정]. 틀리면 몇 번 칸과 몇 번 칸 사이가 이상한지만 알려 준다. 왜 이상한지는 직접 찾아야 한다.'],
      ]);
      hideText();
    }
    if (D >= 0 && !G.flags.discardTut) {
      G.flags.discardTut = true;
      await sayAll([
        ['tip', '이번 원고지에는 [[파기 칸]]이 있다. 누가 고쳐 그린 가짜 컷은 원고에 넣지 말고 거기 버린다.'],
        ['tip', '가짜에는 이음매가 있다. 스크린톤이 어긋나거나 그림자 방향이 다르다. 컷을 크게 보고 확인하자.'],
      ]);
      hideText();
    }
    if (P.solution.slice(0, D >= 0 ? D : n).some(Array.isArray) && !G.flags.simTut) {
      G.flags.simTut = true;
      await sayAll([
        ['tip', '넓은 칸은 동시 칸. 같은 순간을 서로 다른 자리에서 본 두 컷이 나란히 들어간다.'],
        ['tip', '두 컷의 시계·소리·불빛이 같아야 같은 순간이다. 둘의 좌우 순서는 상관없다.'],
      ]);
      hideText();
    }
  });
}

// 페이지 재생 때 컷마다 나는 소리
const PAGE_SFX = { A: 'chime', D: 'thud', F: 'phone', '2A': 'chime', '2N': 'objection', '2E': 'thud', '2P': 'page' };
// 페이지 재생 때 화면을 때리는 컷: 반전 프레임 + 집중선 + 의성어
const PAGE_IMPACT = { D: '쿵!!', '2N': '지금!', '2E': '쾅!!' };

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
