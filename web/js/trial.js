// 심문: 증언을 하나씩 듣고 [파고들기] 또는 [반박!]으로 컷을 들이민다.

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

function renderTrial(W, st) {
  const ink = Array.from({ length: diff().ink }, (_, k) => `<span class="ink-b${k < st.ink ? '' : ' empty'}"></span>`).join('');
  const s = W.statements[st.idx];
  const peeled = st.peeled && W.peel.includes(st.idx);
  const panel = $('#tr-panel');
  panel.innerHTML = `<div class="tr-label">증언 ${st.idx + 1} / ${W.statements.length} · ${CHARACTERS[W.char].name}의 기억</div>`;
  const v = cutView(peeled ? s.cut + '_truth' : s.cut);
  if (peeled) v.classList.add('peeled');
  panel.appendChild(v);
  // 증언 위치 막대 + 증인의 마음(틀리면 한 칸씩 줄고, 다 닳으면 증언을 처음부터)
  panel.insertAdjacentHTML('beforeend', `<div class="tr-dots">${W.statements.map((_, i) => `<span class="tr-dot${i === st.idx ? ' on' : ''}${i === st.hint ? ' hint' : ''}"></span>`).join('')}
    <span class="tr-mind" title="틀린 컷을 내밀면 한 칸 줄고, 다 닳으면 증언을 처음부터 다시 듣는다">증인의 마음 ${ink}<small>틀리면 −1</small></span></div>`);
}

async function runTrial(id) {
  const W = WITNESSES[id];
  bg(W.bg);
  clearChars();
  show(W.char, CHARACTERS[W.char].faces[0], 'left');
  $('#trial').classList.remove('hidden');
  // 심문 중엔 증인 시점 색 하나만 강조색으로, 자동·빨리 넘기기는 숨긴다
  $('#stage').style.setProperty('--accent', OWNERS[W.char] ? OWNERS[W.char].color : CHARACTERS[W.char].accent);
  $('#stage').classList.add('in-trial');
  goal(W.goal);
  renderTrial(W, { ink: diff().ink, idx: 0, peeled: false, hint: -1 });
  bgm('trial');
  await banner('— 증언 —', `${CHARACTERS[W.char].name}의 기억이 컷으로 펼쳐진다`, 1500);

  if (!G.flags.trialTut) {
    G.flags.trialTut = true;
    await sayAll([
      ['towa', '심문 설명할게. 오른쪽이 증인의 기억 컷. 감정 때문에 그림이 비틀려 있어(빨간 딱지).'],
      ['towa', '증언을 넘겨 보다가 수상하면 [파고들기]. 공짜야. 새 단서나 대사 조각이 나와.'],
      ['towa', '틀린 증언에서 [반박!]을 누르고 그걸 깨뜨릴 컷을 골라. 틀리면 증인 마음(파란 병)이 줄고, 다 닳으면 처음부터야.'],
    ]);
  }

  if (W.intro) await sayAll(W.intro);
  await trialRound(W);
  // 2라운드: 증인이 말을 바꾼다
  if (W.round2) {
    const R = Object.assign({}, W, W.round2, { peel: W.round2.peel || [] });
    hideText();
    show(W.char, CHARACTERS[W.char].faces[0], 'left');
    bgm('trial');
    await banner('— 증언 추가 —', `${CHARACTERS[W.char].name}이(가) 말을 바꾼다`, 1300);
    await trialRound(R);
  }
  for (const c of W.rewards) await gainCut(c);
  $('#trial').classList.add('hidden');
  $('#actions').classList.remove('trial');
  $('#stage').classList.remove('in-trial');
  $('#stage').style.removeProperty('--accent');
  goal('');
  clearChars();
  hideText();
}

// 증언 한 바퀴. 맞는 컷을 들이밀 때까지 반복한다.
async function trialRound(W) {
  const st = { ink: diff().ink, idx: 0, peeled: false, hint: -1 };
  const ans = W.answer;
  for (;;) {
    renderTrial(W, st);
    const s = W.statements[st.idx];
    showLine(W.char, s.text);
    $('#actions').classList.add('trial');
    const act = await actions([
      { id: 'prev', label: '◀ 이전', cls: 'small', disabled: st.idx === 0 },
      { id: 'press', label: '파고들기', cls: 'press' },
      { id: 'obj', label: W.gentle ? '컷 보여주기' : '반박!', cls: 'objection' },
      { id: 'next', label: '다음 ▶', cls: 'small', disabled: st.idx === W.statements.length - 1 },
      ...(st.ink === 1 && G.koharuLeft > 0 ? [{ id: 'koharu', label: `코하루 도움 (${G.koharuLeft})`, cls: 'koharu' }] : []),
    ]);

    if (act === 'prev') { st.idx--; continue; }
    if (act === 'next') { st.idx++; continue; }
    if (act === 'press') {
      await sayAll(s.press.map(([w, t, f]) => [w, t, f]));
      if (s.gives) gainLine(s.gives);
      continue;
    }
    if (act === 'koharu') {
      G.koharuLeft--;
      G.stats.help++;
      st.ink++;
      st.hint = ans.statement === 'any' ? 2 : ans.statement;
      renderTrial(W, st);
      show('koharu', 'worried', 'right');
      await sayAll(W.koharu);
      hide('koharu');
      continue;
    }

    // 반박
    hideText();
    const cutId = await pickCut(W.gentle ? '어떤 컷을 보여줄까?' : '이 증언을 깨뜨릴 컷을 고르자', `증언: 「${s.text}」`);
    if (!cutId) continue;
    if (CUTS[cutId].bubble && !G.fills[cutId]) {
      const lineId = await pickLine(cutId);
      if (!lineId) continue;
      setFill(cutId, lineId);
    }
    const cutOk = cutId === ans.cut;
    const stOk = ans.statement === 'any' || st.idx === ans.statement;
    const lineOk = !ans.line || G.fills[cutId] === ans.line;

    if (cutOk && stOk && lineOk) {
      sfx('objection'); quake(); flash();
      await banner(W.gentle ? '이걸 봐 줘.' : W.shout || '순서가 틀렸어!', W.gentle ? '' : `「${s.text}」`, 1400, 'objection');
      show('rei', 'serious', 'right');
      await say('rei', W.rebut, 'serious');
      hide('rei');
      st.peeled = true;
      bgm('truth');
      sfx('page');
      renderTrial(W, st);
      const shown = W.cg && (await cg(W.cg));
      await sayAll(W.success);
      if (W.gives) gainLine(W.gives);
      if (shown) cgEnd();
      return;
    }

    st.ink--;
    G.stats.wrong++;
    sfx('wrong'); quake();
    renderTrial(W, st);
    const img = onStage[W.char];
    if (img) { img.classList.remove('shake'); void img.offsetWidth; img.classList.add('shake'); }
    const extra = [];
    if (cutOk && !lineOk) {
      extra.push(['koharu', '(그 컷은 맞는 것 같은데… 말풍선 대사가 이상해요.)', 'worried']);
      G.lines.push(G.fills[cutId]); // 다시 고를 수 있게 대사 조각을 돌려준다
      delete G.fills[cutId];
    } else if (cutOk && !stOk) {
      extra.push(['koharu', '(그 컷은 맞는 것 같은데… 다른 증언에 들이밀어야 할 것 같아요.)', 'worried']);
    }
    await sayAll([...W.wrong, ...extra]);
    if (st.ink === 0) {
      await sayAll(W.close);
      st.ink = diff().ink; st.idx = 0; st.hint = -1;
      await banner('— 증언 다시 —', '처음부터 다시 듣자', 1200);
      bgm('trial');
    }
  }
}
