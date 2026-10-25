// 심문: 증언을 하나씩 듣고 [파고들기] 또는 [반박!]으로 컷·물증을 들이밀거나, 증언 컷 속 한 곳을 짚는다.
//
// 증인 데이터(WITNESSES)는 두 가지 모양을 받는다.
//  1장식: answer 하나 + rebut/success (+ round2)
//  2장식: answers 배열. 한 증인에게 여러 번 반박하고, 반박할 때마다 증언이 바뀌거나 벗겨진다.
//    answers[k] = { statement, cut | spot, line, requires: [k...], shout, rebut, success,
//                   changes: { 증언번호: 새 증언 }, peel: [증언번호], gives, words, items, rewards, choice }
//    hold = { statement, lines }  모든 반박이 끝난 뒤 "지금은 못 깨는 증언"으로 남긴다(나중에 다른 심문에서 연다)

function showLine(who, text, face) {
  $('#textbox').classList.remove('hidden', 'narr');
  if (face && onStage[who]) show(who, face, onStage[who].dataset.pos);
  $('#tb-name').textContent = CHARACTERS[who].name;
  $('#tb-name').style.background = CHARACTERS[who].accent;
  $('#tb-name').style.setProperty('--name-accent', CHARACTERS[who].accent);
  $('#tb-text').textContent = text;
  $('#tb-next').classList.add('hidden');
  focusChar(who);
}

// 1장식 데이터를 answers 모양으로 맞춘다
function roundOf(R) {
  if (R.answers) return R;
  return Object.assign({}, R, {
    answers: [{ statement: R.answer.statement, cut: R.answer.cut, line: R.answer.line, shout: R.shout, rebut: R.rebut,
      success: R.success, peel: R.peel, gives: R.gives, cg: R.cg }],
  });
}

function renderTrial(W, st) {
  const ink = Array.from({ length: diff().ink }, (_, k) => `<span class="ink-b${k < st.ink ? '' : ' empty'}"></span>`).join('');
  const s = st.stmts[st.idx];
  const peeled = st.peeled.has(st.idx);
  const panel = $('#tr-panel');
  const held = st.held === st.idx;
  panel.innerHTML = `<div class="tr-label">증언 ${st.idx + 1} / ${st.stmts.length} · ${CHARACTERS[W.char].name}의 기억${held ? ' <span class="tr-hold">보류</span>' : ''}</div>`;
  const v = cutView(peeled ? s.truthCut || s.cut + '_truth' : s.cut);
  if (peeled) v.classList.add('peeled');
  panel.appendChild(v);
  // 증언 위치 막대 + 증인의 마음(틀리면 한 칸씩 줄고, 다 닳으면 증언을 처음부터)
  panel.insertAdjacentHTML('beforeend', `<div class="tr-dots">${st.stmts.map((_, i) => `<span class="tr-dot${i === st.idx ? ' on' : ''}${i === st.hint ? ' hint' : ''}${st.done.size && [...st.done].some((k) => st.R.answers[k].statement === i) ? ' broken' : ''}"></span>`).join('')}
    <span class="tr-mind" title="틀린 컷을 내밀면 한 칸 줄고, 다 닳으면 증언을 처음부터 다시 듣는다">증인의 마음 ${ink}<small>틀리면 −1</small></span></div>`);
}

async function runTrial(id) {
  const W = WITNESSES[id];
  bg(W.bg);
  clearChars();
  show(W.char, W.face || CHARACTERS[W.char].faces[0], 'left');
  $('#trial').classList.remove('hidden');
  // 심문 중엔 증인 시점 색 하나만 강조색으로, 자동·빨리 넘기기는 숨긴다
  $('#stage').style.setProperty('--accent', OWNERS[W.char] ? OWNERS[W.char].color : CHARACTERS[W.char].accent);
  $('#stage').classList.add('in-trial');
  goal(W.goal);
  bgm('trial');
  await banner('— 증언 —', `${CHARACTERS[W.char].name}의 기억이 컷으로 펼쳐진다`, 1500);

  if (!G.flags.trialTut) {
    G.flags.trialTut = true;
    await sayAll([
      ['towa', '심문 설명할게. 오른쪽이 증인의 기억 컷. 감정 때문에 그림이 비틀려 있어(빨간 딱지).'],
      ['towa', '증언을 넘겨 보다가 수상하면 [파고들기]. 공짜야. 새 단서나 대사 조각이 나와.'],
      ['towa', '틀린 증언에서 [반박!]을 누르고 그걸 깨뜨릴 컷을 골라. 틀리면 증인 마음이 줄고, 다 닳으면 처음부터야.'],
    ]);
  }

  if (W.intro) await sayAll(W.intro);
  await trialRound(id, roundOf(W));
  // 2라운드: 증인이 말을 바꾼다 (1장식)
  if (W.round2) {
    const R = roundOf(Object.assign({}, W, W.round2, { peel: W.round2.peel || [], answers: undefined }));
    hideText();
    show(W.char, CHARACTERS[W.char].faces[0], 'left');
    bgm('trial');
    await banner('— 증언 추가 —', `${CHARACTERS[W.char].name}이(가) 말을 바꾼다`, 1300);
    await trialRound(id, R);
  }
  for (const c of W.rewards || []) await gainCut(c);
  if (W.outro) await sayAll(W.outro);
  $('#trial').classList.add('hidden');
  $('#actions').classList.remove('trial');
  $('#stage').classList.remove('in-trial');
  $('#stage').style.removeProperty('--accent');
  goal('');
  clearChars();
  hideText();
}

// 그림 속 한 곳 짚기. 증언 컷 그림이 있으면 그림 위를 누르고, 없으면 살펴볼 곳 목록에서 고른다.
function pickSpot(cutId, spots, title) {
  const m = openModal(`<div class="md-title">${title}</div><div class="md-sub">수상한 곳을 짚자.</div><div class="spot-wrap"></div><div class="spot-list"></div><button class="md-cancel">취소</button>`, 'spot');
  const wrap = m.querySelector('.spot-wrap'), list = m.querySelector('.spot-list');
  return new Promise((resolve) => {
    const choose = (id) => { sfx('select'); closeModal(); resolve(id); };
    const img = new Image();
    img.onload = () => {
      wrap.appendChild(img);
      // 그림이 있으면 그림을 직접 누른다. 맞는 곳이 아니면 "빈 곳"
      img.onclick = (e) => {
        const r = img.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        const hit = spots.find((s) => x >= s.x && x <= s.x + s.w && y >= s.y && y <= s.y + s.h);
        choose(hit ? hit.id : '__none');
      };
    };
    img.onerror = () => {
      list.innerHTML = spots.map((s) => `<button class="line-btn" data-spot="${s.id}">${s.label}</button>`).join('');
      list.querySelectorAll('[data-spot]').forEach((b) => (b.onclick = () => choose(b.dataset.spot)));
    };
    img.src = ASSET.cut(cutId);
    m.querySelector('.md-cancel').onclick = () => { sfx('cancel'); closeModal(); resolve(null); };
  });
}

async function trialRound(wid, R) {
  const W = R;
  const st = { ink: diff().ink, idx: 0, hint: -1, R, stmts: R.statements.slice(), peeled: new Set(), done: new Set(), held: -1 };
  const ready = (k) => !st.done.has(k) && (R.answers[k].requires || []).every((r) => st.done.has(r));
  const reset = () => { st.ink = diff().ink; st.idx = 0; st.hint = -1; };

  while (st.done.size < R.answers.length) {
    renderTrial(W, st);
    const s = st.stmts[st.idx];
    showLine(W.char, s.text, s.face);
    $('#actions').classList.add('trial');
    const act = await actions([
      { id: 'prev', label: '◀ 이전', cls: 'small', disabled: st.idx === 0 },
      { id: 'press', label: '파고들기', cls: 'press' },
      { id: 'obj', label: W.gentle ? '컷 보여주기' : '반박!', cls: 'objection' },
      { id: 'next', label: '다음 ▶', cls: 'small', disabled: st.idx === st.stmts.length - 1 },
      ...(st.ink === 1 && G.koharuLeft > 0 ? [{ id: 'koharu', label: `코하루 도움 (${G.koharuLeft})`, cls: 'koharu' }] : []),
    ]);

    if (act === 'prev') { st.idx--; continue; }
    if (act === 'next') { st.idx++; continue; }
    if (act === 'press') {
      await sayAll((s.press || []).map(([w, t, f]) => [w, t, f]));
      if (s.gives) gainLine(s.gives);
      (s.words || []).forEach(gainWord);
      for (const it of s.items || []) await gainItem(it);
      continue;
    }
    if (act === 'koharu') {
      G.koharuLeft--;
      G.stats.help++;
      st.ink++;
      const k = R.answers.findIndex((a, i) => ready(i));
      const a = R.answers[k];
      st.hint = a && a.statement !== 'any' ? a.statement : -1;
      renderTrial(W, st);
      show('koharu', 'worried', 'right');
      await sayAll((a && a.koharu) || W.koharu || [['koharu', '(선배, 표시한 증언이 수상해요.)', 'worried']]);
      hide('koharu');
      continue;
    }

    // 반박: 이 증언에 걸린 답이 무엇으로 깨지는지 모르므로, 짚을 곳이 있는 증언이면 방법부터 고른다
    hideText();
    let how = 'cut';
    if (s.spots) {
      const c = await choice(['컷·물증을 내민다', '증언 컷 속을 짚는다', '(그만둔다)'], '어떻게 반박할까?');
      if (c === 2) continue;
      how = c === 0 ? 'cut' : 'spot';
    }
    let cutId = null, spotId = null;
    if (how === 'spot') {
      spotId = await pickSpot(st.peeled.has(st.idx) ? s.truthCut || s.cut + '_truth' : s.cut, s.spots, `증언: 「${s.text}」`);
      if (!spotId) continue;
    } else {
      cutId = await pickCut(W.gentle ? '어떤 컷을 보여줄까?' : '이 증언을 깨뜨릴 컷·물증을 고르자', `증언: 「${s.text}」`, { items: true });
      if (!cutId) continue;
      if (CUTS[cutId] && CUTS[cutId].bubble && !G.fills[cutId]) {
        const lineId = await pickLine(cutId);
        if (!lineId) continue;
        setFill(cutId, lineId);
      }
    }

    // 맞는 답 찾기
    const here = R.answers.map((a, k) => [a, k]).filter(([a, k]) => !st.done.has(k) && (a.statement === 'any' || a.statement === st.idx));
    const hit = here.find(([a]) => (spotId ? a.spot === spotId : a.cut === cutId));
    if (hit && !ready(hit[1])) {
      await say('rei', '(…이 증언, 수상하긴 한데. 지금은 다른 데부터 깨야 해.)', 'serious');
      continue;
    }
    const ok = hit && (!hit[0].line || G.fills[cutId] === hit[0].line);
    if (ok) {
      const [a, k] = hit;
      sfx('objection'); quake(); flash();
      await banner(W.gentle ? '이걸 봐 줘.' : a.shout || '순서가 틀렸어!', W.gentle ? '' : `「${s.text}」`, 1400, 'objection');
      if (a.rebut) {
        show('rei', 'serious', 'right');
        await say('rei', a.rebut, 'serious');
        hide('rei');
      }
      st.done.add(k);
      (a.peel || [st.idx]).forEach((i) => st.peeled.add(i));
      bgm('truth');
      sfx('page');
      renderTrial(W, st);
      const shown = a.cg && (await cg(a.cg));
      await sayAll(a.success || []);
      if (shown) cgEnd();
      // 반박 뒤 증인이 반격하면 맞는 말로 다시 받아친다
      if (a.choice) {
        for (;;) {
          hideText();
          const c = await choice(a.choice.options, a.choice.prompt);
          if (c === a.choice.answer) { await sayAll(a.choice.success || []); break; }
          G.stats.wrong++; st.ink = Math.max(1, st.ink - 1); sfx('wrong'); quake(); renderTrial(W, st);
          await sayAll(a.choice.wrong || W.wrong);
        }
      }
      if (a.gives) gainLine(a.gives);
      (a.words || []).forEach(gainWord);
      for (const it of a.items || []) await gainItem(it);
      for (const c of a.rewards || []) await gainCut(c);
      Object.entries(a.changes || {}).forEach(([i, ns]) => { st.stmts[i] = ns; st.peeled.delete(Number(i)); });
      if (st.done.size < R.answers.length) { bgm('trial'); show(W.char, W.face || CHARACTERS[W.char].faces[0], 'left'); }
      continue;
    }

    st.ink--;
    G.stats.wrong++;
    sfx('wrong'); quake();
    renderTrial(W, st);
    const img = onStage[W.char];
    if (img) { img.classList.remove('shake'); void img.offsetWidth; img.classList.add('shake'); }
    const extra = [];
    if (hit && !ok) {
      extra.push(['koharu', '(그 컷은 맞는 것 같은데… 말풍선 대사가 이상해요.)', 'worried']);
      G.lines.push(G.fills[cutId]); // 다시 고를 수 있게 대사 조각을 돌려준다
      delete G.fills[cutId];
    } else if (!spotId && R.answers.some((a, k) => !st.done.has(k) && a.cut === cutId)) {
      extra.push(['koharu', '(그 컷은 맞는 것 같은데… 다른 증언에 들이밀어야 할 것 같아요.)', 'worried']);
    }
    await sayAll([...(W.wrong || []), ...extra]);
    if (st.ink === 0) {
      await sayAll(W.close || []);
      reset();
      await banner('— 증언 다시 —', '처음부터 다시 듣자', 1200);
      bgm('trial');
    }
  }

  // 지금 가진 것으로는 못 깨는 증언을 보류로 남긴다
  if (R.hold) {
    st.held = R.hold.statement;
    st.idx = R.hold.statement;
    renderTrial(W, st);
    await sayAll(R.hold.lines);
    G.flags['hold_' + wid] = true;
  }
}
