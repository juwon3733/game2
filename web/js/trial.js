// 심문: 증언을 하나씩 듣고 [파고들기] 또는 [반박!]으로 컷을 들이민다.

let trialTutorialDone = false;

function showLine(who, text, face) {
  $('#textbox').classList.remove('hidden', 'narr');
  if (face && onStage[who]) show(who, face, onStage[who].dataset.pos);
  $('#tb-name').textContent = CHARACTERS[who].name;
  $('#tb-name').style.background = CHARACTERS[who].accent;
  $('#tb-text').textContent = text;
  $('#tb-next').classList.add('hidden');
  focusChar(who);
}

function renderTrial(W, st) {
  $('#tr-ink').innerHTML = [0, 1, 2].map((k) => `<span class="ink-b${k < st.ink ? '' : ' empty'}"></span>`).join('');
  const s = W.statements[st.idx];
  const peeled = st.peeled && W.peel.includes(st.idx);
  const panel = $('#tr-panel');
  panel.innerHTML = `<div class="tr-label">증언 ${st.idx + 1} / ${W.statements.length} · ${CHARACTERS[W.char].name}의 기억</div>`;
  const v = cutView(peeled ? s.cut + '_truth' : s.cut);
  if (peeled) v.classList.add('peeled');
  panel.appendChild(v);
  panel.insertAdjacentHTML('beforeend', `<div class="tr-dots">${W.statements.map((_, i) => `<span class="tr-dot${i === st.idx ? ' on' : ''}${i === st.hint ? ' hint' : ''}"></span>`).join('')}</div>`);
}

async function runTrial(id) {
  const W = WITNESSES[id];
  const st = { ink: 3, idx: 0, peeled: false, hint: -1 };
  const ans = W.answer;
  bg(W.bg);
  clearChars();
  show(W.char, CHARACTERS[W.char].faces[0], 'left');
  $('#trial').classList.remove('hidden');
  goal(W.goal);
  renderTrial(W, st);
  await banner('— 증언 —', `${CHARACTERS[W.char].name}의 기억이 컷으로 펼쳐진다`, 1500);

  if (!trialTutorialDone) {
    trialTutorialDone = true;
    await sayAll([
      ['towa', '심문 설명할게. 오른쪽 위가 증인의 기억 컷이야. 감정 때문에 그림이 비틀려 있어(빨간 딱지).'],
      ['towa', '증언을 하나씩 넘겨 보면서, 의심 가는 건 [파고들기]로 캐물어. 공짜야. 새 단서나 대사 조각이 나와.'],
      ['towa', '틀린 증언을 찾았으면 [반박!]을 누르고, 그 증언을 깨뜨릴 내 컷을 골라. 엉뚱한 걸 고르면 증인 마음(파란 병)이 줄어.'],
      ['towa', '마음이 다 닳으면 처음부터야. 한 칸 남았을 땐 [코하루 도움]을 쓸 수 있어. 1장 전체에서 두 번.'],
    ]);
  }

  for (;;) {
    renderTrial(W, st);
    const s = W.statements[st.idx];
    showLine(W.char, s.text);
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
      await banner(W.gentle ? '이걸 봐 줘.' : '순서가 틀렸어!', W.gentle ? '' : `「${s.text}」`, 1400, 'objection');
      show('rei', 'serious', 'right');
      await say('rei', W.rebut, 'serious');
      hide('rei');
      st.peeled = true;
      renderTrial(W, st);
      await sayAll(W.success);
      for (const c of W.rewards) await gainCut(c);
      $('#trial').classList.add('hidden');
      goal('');
      clearChars();
      hideText();
      return;
    }

    st.ink--;
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
      st.ink = 3; st.idx = 0; st.hint = -1;
      await banner('— 증언 다시 —', '처음부터 다시 듣자', 1200);
    }
  }
}
