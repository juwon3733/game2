// 심문: 증언을 하나씩 듣고 [파고들기] 또는 [반박!]으로 컷·물증을 들이밀거나, 증언 컷 속 한 곳을 짚는다.
//
// 증인 데이터(WITNESSES)는 두 가지 모양을 받는다.
//  1장식: answer 하나 + rebut/success (+ round2)
//  2장식: answers 배열. 한 증인에게 여러 번 반박하고, 반박할 때마다 증언이 바뀌거나 벗겨진다.
//    answers[k] = { statement, cut | spot, line, requires: [k...], shout, rebut, success,
//                   changes: { 증언번호: 새 증언 }, peel: [증언번호], gives, words, items, rewards, choice }
//    with: 겹쳐 보기. 첫 컷이 맞으면 같은 일을 다른 쪽에서 받쳐 주는 컷·물증을 하나 더 내야 한다 (id 또는 배열)
//    hold = { statement, lines }
//  4·5장:
//    statement.char  교차 심문: 이 증언을 말하는 사람 (W.char2가 오른쪽에 함께 선다)
//    W.erode         흐려지는 현장: 틀린 반박 3번마다 수첩의 컷 1장이 흐려진다(심문이 끝나면 토와가 복구, 원고 평가 −)
//    W.inkPenalty    이 플래그가 켜져 있으면 증인의 마음 −1 로 시작
//    W.editor        실시간 편집: 반박이 통해 증언이 바뀔 때 편집 연출  모든 반박이 끝난 뒤 "지금은 못 깨는 증언"으로 남긴다(나중에 다른 심문에서 연다)

function showLine(who, text, face) {
  $('#textbox').classList.remove('hidden', 'narr');
  if (face && onStage[who]) show(who, face, onStage[who].dataset.pos);
  $('#tb-name').textContent = CHARACTERS[who].name;
  $('#tb-name').style.background = CHARACTERS[who].accent;
  $('#tb-name').style.setProperty('--name-accent', CHARACTERS[who].accent);
  $('#tb-text').textContent = text;
  $('#tb-next').classList.add('hidden');
  // 대사창 얼굴도 지금 말하는 사람으로 (안 바꾸면 앞사람 얼굴이 남는다)
  setFace(who, face || (onStage[who] && onStage[who].dataset.face));
  focusChar(who);
}

// 1장식 데이터를 answers 모양으로 맞춘다
// ---------- 틀린 반박에 대한 반응 ----------
// 무엇을 내밀었느냐(증인 자신의 기억 / 남의 기억 / 물건 / 컷 속 짚기)에 따라 증인이 다르게 받아친다.
// 증언 자체는 맞게 짚었는데 내민 것만 틀렸으면 "아깝다" 쪽 반응. W.wrongBy[컷·짚을 곳 id]가 있으면 그게 먼저.
const WRONG_POOL = {
  polite: {
    own: ['그건 제 기억이잖아요. 그게 왜요?', '제가 본 걸 저한테 보여 줘서 뭐 하게요.'],
    item: ['그 물건이 지금 이 얘기랑 무슨 상관이에요?', '그걸로 뭘 말하고 싶은 건데요?'],
    other: ['{name} 씨가 본 거요? 그 얘긴 지금 안 했는데요.', '그건 다른 사람이 본 거잖아요.'],
    spot: ['거기가 뭐요? 아무것도 없는데요.', '그림을 아무 데나 짚는다고 말이 바뀌진 않아요.'],
  },
  casual: {
    own: ['그건 내 기억이잖아. 그래서?', '내가 본 걸 나한테 보여 줘서 뭐 하게.'],
    item: ['그 물건이 지금 얘기랑 무슨 상관인데.', '그걸로 뭘 말하고 싶은 거야?'],
    other: ['{name}이(가) 본 거? 그 얘긴 지금 안 했잖아.', '그건 남이 본 거잖아.'],
    spot: ['거기가 뭐. 아무것도 없잖아.', '아무 데나 짚는다고 말이 바뀌진 않아.'],
  },
};
// 벗겨진 뒤 보일 컷: 진실 컷(truthCut·truthDesc)이 따로 없으면 원래 컷을 그대로 둔다
function truthOf(s) { return s.truthCut || (s.truthDesc ? s.cut + '_truth' : s.cut); }
// 틀렸을 때 레이의 혼잣말. 어느 증언이 맞는 자리인지는 흘리지 않는다
const NEAR = ['(…이걸로는 안 깨져.)', '(다른 걸 봐야 해.)'];
function wrongReaction(W, st, here, cutId, spotId) {
  const key = spotId || cutId;
  if (W.wrongBy && W.wrongBy[key]) return W.wrongBy[key];
  st.wrongN = (st.wrongN || 0) + 1;
  const near = here.length > 0 && !W.gentle;
  const base = W.wrong || [];
  // 처음 틀렸을 땐 증인 고유의 반응, 그다음부터는 내민 것에 따라
  if (W.gentle || st.wrongN === 1) return base;
  const polite = (W.statements || []).some((x) => /요[.?!…」]*$/.test(x.text || ''));
  const pool = WRONG_POOL[polite ? 'polite' : 'casual'];
  const owner = cutId && CUTS[cutId] ? CUTS[cutId].owner : null;
  // 아직 누구 시점인지 가려진 컷(OWNERS.mask)이면 "내 기억"이라고도, 이름으로도 받아치지 않는다
  const o = owner && OWNERS[owner], masked = !!(o && o.mask && !G.flags[o.mask]);
  const kind = spotId ? 'spot' : !CUTS[cutId] ? 'item' : !masked && (owner === W.char || owner === W.char2) ? 'own' : 'other';
  const list = pool[kind];
  let line = list[st.wrongN % list.length];
  const name = owner && CHARACTERS[owner] && !masked ? CHARACTERS[owner].name : '';
  if (kind === 'other' && !name) line = list[1];
  line = line.replace('{name}', name);
  const who = W.char2 && st.R && st.R.statements[st.idx] && st.R.statements[st.idx].char ? st.R.statements[st.idx].char : W.char;
  const out = [[who, line, (base[0] && base[0][2]) || undefined]];
  if (st.wrongN % 3 === 0) out.push(['rei', NEAR[st.wrongN % NEAR.length], 'serious']);
  return out;
}

function roundOf(R) {
  if (R.answers) return R;
  return Object.assign({}, R, {
    answers: [{ statement: R.answer.statement, cut: R.answer.cut, line: R.answer.line, shout: R.shout, rebut: R.rebut,
      success: R.success, peel: R.peel, gives: R.gives, cg: R.cg, page: R.page, pageCap: R.pageCap }],
  });
}

function renderTrial(W, st) {
  const ink = Array.from({ length: st.maxInk }, (_, k) => `<span class="ink-b${k < st.ink ? '' : ' empty'}"></span>`).join('');
  const s = st.stmts[st.idx];
  const peeled = st.peeled.has(st.idx);
  const panel = $('#tr-panel');
  const held = st.held === st.idx;
  panel.innerHTML = `<div class="tr-label">증언 ${st.idx + 1} / ${st.stmts.length} · ${CHARACTERS[s.char || W.char].name}의 기억${held ? ' <span class="tr-hold">보류</span>' : ''}</div>`;
  const v = cutView(peeled ? truthOf(s) : s.cut);
  if (peeled) v.classList.add('peeled');
  panel.appendChild(v);
  // 증언 위치 막대 + 증인의 마음(틀리면 한 칸씩 줄고, 다 닳으면 증언을 처음부터)
  panel.insertAdjacentHTML('beforeend', `<div class="tr-dots">${st.stmts.map((_, i) => `<span class="tr-dot${i === st.idx ? ' on' : ''}${i === st.hint ? ' hint' : ''}${st.done.size && [...st.done].some((k) => st.R.answers[k].statement === i) ? ' broken' : ''}"></span>`).join('')}
    <span class="tr-mind" title="틀린 컷을 내밀면 한 칸 줄고, 다 닳으면 증언을 처음부터 다시 듣는다">증인의 마음 ${ink}<small>틀리면 −1</small></span></div>`);
}

async function runTrial(id) {
  const W = WITNESSES[id];
  // 앞 증인의 패널·도장이 남지 않게 비운다
  $('#tr-panel').innerHTML = '';
  document.querySelectorAll('.fx-stamp').forEach((e) => e.remove());
  bg(W.bg);
  clearChars();
  show(W.char, W.face || CHARACTERS[W.char].faces[0], 'left');
  if (W.char2) show(W.char2, CHARACTERS[W.char2].faces[0], 'right');
  $('#trial').classList.remove('hidden');
  // 심문 중엔 증인 시점 색 하나만 강조색으로, 자동·빨리 넘기기는 숨긴다
  $('#stage').style.setProperty('--accent', OWNERS[W.char] ? OWNERS[W.char].color : CHARACTERS[W.char].accent);
  $('#stage').classList.add('in-trial');
  goal(W.goal);
  bgm(W.bgm || 'trial');
  hideText();
  await banner('— 증언 —', `${CHARACTERS[W.char].name}의 기억이 컷으로 펼쳐진다`, 1500);

  if (!G.flags.trialTut) {
    G.flags.trialTut = true;
    await sayAll([
      ['tip', '심문: 오른쪽은 증인의 기억 컷. 빨간 딱지가 붙은 컷은 감정 때문에 그림이 비틀려 있다.'],
      ['tip', '◀ ▶로 증언을 넘긴다. 수상하면 [파고들기]. 벌점 없이 새 단서나 대사 조각이 나온다.'],
      ['tip', '틀린 증언에서 [반박!]을 누르고 그걸 깨뜨릴 컷을 고른다. 틀리면 오른쪽 위 「증인의 마음」 칸이 하나 줄고, 다 닳으면 처음부터.'],
    ]);
  }

  if (W.intro) await sayAll(W.intro);
  await trialRound(id, roundOf(W));
  // 2라운드: 증인이 말을 바꾼다 (1장식)
  if (W.round2) {
    const R = roundOf(Object.assign({}, W, W.round2, { peel: W.round2.peel || [], answers: undefined }));
    hideText();
    show(W.char, CHARACTERS[W.char].faces[0], 'left');
    bgm(W.bgm || 'trial');
    await banner('— 증언 추가 —', `${CHARACTERS[W.char].name}이(가) 말을 바꾼다`, 1300);
    await trialRound(id, R);
  }
  FX.mood(null);
  if (!W.gentle) await FX.breakdown(W.char);
  // 흐려진 컷은 토와가 복구한다 (대신 원고 평가가 떨어진다)
  if (G.blurred && G.blurred.length) {
    G.stats.help += G.blurred.length;
    await say('towa', `흐려진 컷 ${G.blurred.length}장, 복구해 뒀어. …다음엔 그렇게 많이 틀리지 마. 현장이 지워지고 있어.`);
    G.blurred = [];
  }
  for (const c of W.rewards || []) await gainCut(c);
  if (W.outro) await sayAll(W.outro);
  $('#trial').classList.add('hidden');
  $('#tr-panel').innerHTML = '';
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
  const maxInk = Math.max(1, diff().ink - (W.inkPenalty && G.flags[W.inkPenalty] ? 1 : 0));
  const st = { ink: maxInk, maxInk, idx: 0, hint: -1, R, stmts: R.statements.slice(), peeled: new Set(), done: new Set(), held: -1, wrongs: 0 };
  const ready = (k) => !st.done.has(k) && (R.answers[k].requires || []).every((r) => st.done.has(r));
  const reset = () => { st.ink = maxInk; st.idx = 0; st.hint = -1; };

  while (st.done.size < R.answers.length) {
    renderTrial(W, st);
    const s = st.stmts[st.idx];
    // 미화된 기억은 반짝이가 흩날린다 (벗겨지면 멈춘다)
    FX.mood(s.dist === '미화' && !st.peeled.has(st.idx) ? 'glitter' : null);
    showLine(s.char || W.char, s.text, s.face);
    $('#actions').classList.add('trial');
    // 추리 메모: 수상한 증언에 표시를 해 두면 수첩 「메모」에 모인다
    G.marks = G.marks || [];
    const markKey = `${wid}:${st.idx}`;
    const marked = G.marks.some((m) => m.key === markKey);
    const act = await actions([
      { id: 'mark', label: marked ? '표시 ✓' : '표시', cls: 'small' + (marked ? ' on' : '') },
      { id: 'prev', label: '◀ 이전', cls: 'small', disabled: st.idx === 0 },
      { id: 'press', label: '파고들기', cls: 'press' },
      { id: 'obj', label: W.gentle ? '컷 보여주기' : '반박!', cls: 'objection' },
      { id: 'next', label: '다음 ▶', cls: 'small', disabled: st.idx === st.stmts.length - 1 },
      ...(st.ink === 1 && G.koharuLeft > 0 && !W.noKoharu ? [{ id: 'koharu', label: `코하루 도움 (${G.koharuLeft})`, cls: 'koharu' }] : []),
    ]);

    if (act === 'mark') {
      if (marked) G.marks = G.marks.filter((m) => m.key !== markKey);
      else G.marks.push({ key: markKey, who: CHARACTERS[s.char || W.char].name, text: s.text, cut: s.cut });
      sfx('place', { vol: 0.6 });
      continue;
    }
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

    // 보류할 증언: 지금 가진 것으로는 못 깬다. 벌점 없이 다른 증언으로 돌린다
    if (R.hold && st.idx === R.hold.statement && st.done.size < R.answers.length) {
      await say('rei', '(…여기도 뭔가 비어 있어. 근데 지금은 다른 데부터 깨야 해.)', 'serious');
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
      spotId = await pickSpot(st.peeled.has(st.idx) ? truthOf(s) : s.cut, s.spots, `증언: 「${s.text}」`);
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
    // 정답은 여러 개일 수 있다: cut·spot은 배열 가능. 겹쳐 보기(with)는 순서 상관없이 cut∪with 중 서로 다른 두 장
    const firsts = (a) => [].concat(a.cut || [], a.with || []);
    const hit = here.find(([a]) => (spotId ? [].concat(a.spot || []).includes(spotId) : (a.with ? firsts(a) : [].concat(a.cut || [])).includes(cutId)));
    if (hit && !ready(hit[1])) {
      await say('rei', '(…이 증언, 수상하긴 한데. 지금은 다른 데부터 깨야 해.)', 'serious');
      continue;
    }
    let ok = hit && (!hit[0].line || !(CUTS[cutId] && CUTS[cutId].bubble) || G.fills[cutId] === hit[0].line);
    // 겹쳐 보기: 한 장으로는 약하다. 같은 순간의 다른 시점을 겹친다
    let weak = false;
    if (ok && hit[0].with) {
      const second = await pickCut('겹쳐 보기', `「${cutInfo(cutId).title}」에 겹칠 컷·물증을 하나 더 고르자. 같은 일을 다른 쪽에서 받쳐 주는 것.`, { items: true });
      if (!second) continue;
      if (second !== cutId && firsts(hit[0]).includes(second)) await FX.overlay(cutId, second);
      else { ok = false; weak = true; }
    }
    if (ok) {
      const [a, k] = hit;
      sfx('objection');
      hideText();
      if (W.gentle) { await banner('이걸 봐 줘.', '', 1400, 'gentle'); }
      else { await FX.cutin('rei', a.shout || '그건 틀렸어!'); quake(); flash(); }
      if (a.rebut) {
        // 반박하는 동안은 증언 패널을 걷어 내고 레이를 앞에 세운다
        $('#stage').classList.add('rebutting');
        // 증인이 레이 자신이면(자기 심문) 이미 서 있으니 세우거나 치우지 않는다
        const reiUp = !!onStage.rei;
        if (!reiUp) show('rei', 'serious', 'right');
        await say('rei', a.rebut, 'serious');
        if (!reiUp) hide('rei');
        $('#stage').classList.remove('rebutting');
      }
      st.done.add(k);
      const peel = a.peel || [st.idx];
      // 지금 보이는 증언 컷이 벗겨지면 찢어져 떨어진다
      if (peel.includes(st.idx) && !st.peeled.has(st.idx)) FX.tear($('#tr-panel .cutv'), s.dist);
      peel.forEach((i) => st.peeled.add(i));
      FX.mood(null);
      tension(0);
      bgm('truth');
      sfx('page');
      renderTrial(W, st);
      const shown = a.cg && (await cg(a.cg));
      if (!shown && a.page) await mangaPage(a.page, a.pageCap);
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
      if (a.changes && W.editor) {
        // 증인이 눈앞에서 증언 컷을 고쳐 그린다
        FX.glitch(600); FX.stamp('편집!'); sfx('ghost');
        await sleep(G.skip ? 50 : 700);
        await sayAll(a.editLines || []);
      }
      Object.entries(a.changes || {}).forEach(([i, ns]) => { st.stmts[i] = ns; st.peeled.delete(Number(i)); });
      // 마지막 하나만 남으면 몰아붙이는 곡으로
      if (st.done.size < R.answers.length) { bgm(R.answers.length >= 2 && st.done.size === R.answers.length - 1 && !W.gentle ? 'chase' : W.bgm || 'trial'); show(W.char, W.face || CHARACTERS[W.char].faces[0], 'left'); }
      continue;
    }

    st.ink--;
    G.stats.wrong++;
    // 흐려지는 현장: 틀린 반박 3번마다 컷 하나가 흐려진다
    if (W.erode && ++st.wrongs % 3 === 0) {
      G.blurred = G.blurred || [];
      const left = G.cuts.filter((c) => !G.blurred.includes(c));
      if (left.length) {
        const c = left[Math.floor(Math.random() * left.length)];
        G.blurred.push(c);
        FX.glitch(400);
        toast(`현장이 지워지고 있다 — 「${cutInfo(c).title}」이(가) 흐려졌다`);
      }
    }
    sfx('wrong'); quake(); flash('rgba(190,30,40,.45)');
    if (st.ink === 1) FX.pulse();
    tension(st.ink === 1 ? 2 : st.ink < maxInk ? 1 : 0);
    renderTrial(W, st);
    const img = onStage[W.char];
    if (img) { img.classList.remove('shake'); void img.offsetWidth; img.classList.add('shake'); }
    const extra = [];
    if (weak) {
      extra.push(['koharu', '(그 컷 하나로는 안 돼요. 같은 일을 다른 쪽에서 보여 주는 걸 하나 더 겹쳐야 해요.)', 'worried']);
    } else if (hit && !ok) {
      extra.push(['koharu', '(그 컷은 맞는 것 같은데… 말풍선 대사가 이상해요.)', 'worried']);
      G.lines.push(G.fills[cutId]); // 다시 고를 수 있게 대사 조각을 돌려준다
      delete G.fills[cutId];
    } else if (!spotId && R.answers.some((a, k) => !st.done.has(k) && [].concat(a.cut || []).includes(cutId))) {
      extra.push(['koharu', '(그 컷은 맞는 것 같은데… 다른 증언에 들이밀어야 할 것 같아요.)', 'worried']);
    }
    await sayAll([...wrongReaction(W, st, here, cutId, spotId), ...extra]);
    if (st.ink === 0) {
      await sayAll(W.close || []);
      reset();
      tension(0);
      await banner('— 증언 다시 —', '처음부터 다시 듣자', 1200);
      bgm(W.bgm || 'trial');
    }
  }

  tension(0);
  // 지금 가진 것으로는 못 깨는 증언을 보류로 남긴다
  if (R.hold) {
    st.held = R.hold.statement;
    st.idx = R.hold.statement;
    renderTrial(W, st);
    FX.stamp('보류', 'hold');
    await sayAll(R.hold.lines);
    G.flags['hold_' + wid] = true;
  }
}

// 원본 복원: 편집된 컷의 이음매를 짚어 덧칠한 층을 긁어내면 원본 컷이 나온다.
// CUTS[id] = { edited: true, original: '원본 id', spots: [{ id, label, x, y, w, h, restore: true }, …] }
async function runRestore(ids, title = '원본 복원') {
  for (const id of ids) {
    const c = CUTS[id];
    if (!c || G.cuts.includes(c.original)) continue;
    for (;;) {
      const sid = await pickSpot(id, c.spots, `${title} — 「${c.title}」의 이음매를 짚어 긁어내자`);
      const spot = c.spots.find((p) => p.id === sid);
      if (spot && spot.restore) {
        FX.glitch(300); sfx('page');
        $('#toast').classList.add('hidden');
        await gainCut(c.original);
        break;
      }
      if (!sid) { toast('이음매를 찾아야 원본이 나온다.'); continue; }
      // 이음매 찾기는 탐색이라 평가의 오답으로 세지 않는다
      sfx('wrong');
      toast('거기엔 이음매가 없다.');
    }
  }
}
