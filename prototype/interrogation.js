// 심문(끼워 넣기) 프로토타입. WITNESSES를 차례로 심문한다.

const $ = (sel) => document.querySelector(sel);

const inv = { cuts: [], lines: [] };
let fills = {};             // 내 컷 id -> 붙인 대사 조각 id
let gotLines = new Set();   // 한 번이라도 얻은 대사 조각 (중복 지급 방지)
let newCuts = new Set();
let koharuLeft = 2;
const stats = [];

let wIdx = 0, w = null;
let ink = 3, cur = 0, probed = new Set(), revealed = new Set();
let inserted = null;        // { cut, gap }
let underline = -1, peeled = false, wrongGap = -1;
let phase = 'dialog';       // 'dialog' | 'testimony'
let selected = null;        // { type: 'cut' | 'line', id }

// ---------- 대화 ----------

let advance = null;

function setDialog(speaker, text) {
  $('#d-speaker').textContent = speaker;
  $('#d-text').textContent = text;
}

async function say(lines) {
  setBusy(true);
  for (const [speaker, text] of lines) {
    setDialog(speaker, text);
    $('#dialog').classList.add('waiting');
    await new Promise((r) => { advance = r; });
  }
  $('#dialog').classList.remove('waiting');
}

function choose(options) {
  setBusy(true);
  setDialog('레이', '(뭐라고 말할까.)');
  const box = $('#d-choices');
  return new Promise((resolve) => {
    options.forEach((text, i) => {
      const b = document.createElement('button');
      b.className = 'btn';
      b.textContent = text;
      b.onclick = () => { box.innerHTML = ''; resolve(i); };
      box.appendChild(b);
    });
  });
}

function setBusy(on) {
  document.body.classList.toggle('busy', on);
  if (on) { phase = 'dialog'; selected = null; }
  render();
}

$('#dialog').addEventListener('click', () => {
  if (advance && $('#dialog').classList.contains('waiting')) { const a = advance; advance = null; a(); }
});
document.addEventListener('keydown', (e) => {
  if ((e.key === ' ' || e.key === 'Enter') && advance) { e.preventDefault(); const a = advance; advance = null; a(); }
});

function showStatement() {
  const t = w.testimony[cur];
  setDialog(`${w.name} · 증언 ${cur + 1}/${w.testimony.length}`, t.line);
  if (probed.has(cur)) $('#d-text').insertAdjacentHTML('beforeend', '<span class="probed-mark">(파고듦)</span>');
  $('#btn-prev').disabled = cur === 0;
  $('#btn-next-st').disabled = cur === w.testimony.length - 1;
}

function enterTestimony() {
  setBusy(false);
  phase = 'testimony';
  render();
  showStatement();
}

// ---------- 진행 ----------

async function runWitness(i) {
  wIdx = i;
  w = WITNESSES[i];
  ink = 3; cur = 0; inserted = null; underline = -1; peeled = false; wrongGap = -1;
  probed = new Set(); revealed = new Set();
  stats[i] = { name: w.name, inkLost: 0, restarts: 0, koharu: 0, probes: 0 };
  render();
  if (w.before) {
    await say(w.before);
    addCuts(w.beforeRewards);
  }
  await say(w.intro);
  if (i === 0) await say(TUTORIAL);
  if (w.insertHint) await say([['토와', w.insertHint]]);
  if (w.consent) await consentLoop();
  enterTestimony();
}

async function consentLoop() {
  for (;;) {
    const o = w.consent[await choose(w.consent.map((c) => c.text))];
    await say(o.lines);
    if (o.ok) return;
    loseInk();
    if (ink === 0) {
      await say(w.close);
      ink = 3;
      stats[wIdx].restarts++;
      render();
    }
  }
}

async function onInsert(cutId, gap) {
  if (phase !== 'testimony') return;
  const s = w.solve;
  if (s.line && cutId === s.cut && !fills[cutId]) {
    return toast('말풍선이 빈 컷은 증거가 약해. 뭐라고 했는지 채워서 보여줘.');
  }
  const lineOk = !s.line || fills[cutId] === s.line;
  const right = cutId === s.cut && (s.gap === 'any' || gap === s.gap) && lineOk;

  if (right) {
    inserted = { cut: cutId, gap };
    setBusy(true);
    bang();
    await say(w.rebut);
    peeled = true;
    render();
    await say(w.success);
    addCuts(w.rewards);
    if (wIdx + 1 < WITNESSES.length) return runWitness(wIdx + 1);
    return finish();
  }

  wrongGap = gap;
  loseInk();
  setBusy(true);
  const extra = [];
  if (cutId === s.cut && !lineOk) extra.push(['코하루', '(그 컷은 맞는 것 같은데… 말풍선 대사가 이상해요.)']);
  else if (cutId === s.cut) extra.push(['코하루', '(컷은 맞는 것 같은데… 끼울 자리가 다른 것 같아요.)']);
  await say([...w.wrong, ...extra]);
  wrongGap = -1;
  if (ink === 0) {
    await say(w.close);
    ink = 3; cur = 0; underline = -1;
    stats[wIdx].restarts++;
  }
  enterTestimony();
}

function loseInk() {
  ink = Math.max(0, ink - 1);
  stats[wIdx].inkLost++;
  const p = $('#w-portrait');
  p.classList.remove('hurt');
  void p.offsetWidth;
  p.classList.add('hurt');
  render();
}

async function probe() {
  if (phase !== 'testimony') return;
  const t = w.testimony[cur];
  stats[wIdx].probes++;
  await say(t.probe);
  if (t.gives && !gotLines.has(t.gives)) {
    gotLines.add(t.gives);
    inv.lines.push(t.gives);
  }
  if (t.reveal) revealed.add(cur);
  probed.add(cur);
  enterTestimony();
}

async function koharu() {
  if (phase !== 'testimony' || ink !== 1 || koharuLeft === 0) return;
  koharuLeft--;
  stats[wIdx].koharu++;
  ink++;
  underline = w.hintTarget;
  await say(w.koharu);
  enterTestimony();
}

function addCuts(ids) {
  ids.forEach((id) => {
    if (!inv.cuts.includes(id)) { inv.cuts.push(id); newCuts.add(id); }
  });
  render();
}

async function finish() {
  await say(ENDING);
  $('#game').classList.add('hidden');
  $('#result').classList.remove('hidden');
  const rows = stats.map((s) => `<tr><td>${s.name}</td><td>${s.inkLost}</td><td>${s.restarts}</td><td>${s.koharu}</td><td>${s.probes}</td></tr>`);
  $('#result-table').innerHTML = '<tr><th>증인</th><th>잉크 손실</th><th>재시작</th><th>코하루</th><th>파고들기</th></tr>' + rows.join('');
  const clean = stats.every((s) => s.inkLost === 0);
  $('#result-say').textContent = clean
    ? '토와: 잉크 한 방울도 안 흘렸네. …조금은 인정.'
    : '토와: 수고했어. 증인 마음은 소모품이 아니야. 다음엔 아껴 써.';
}

// ---------- 내 컷의 말풍선 ----------

function placeLine(lineId, cutId) {
  const c = CUTS[cutId];
  if (!c.bubble) return;
  if (LINES[lineId].shape !== c.bubble) return toast('말풍선 모양이 안 맞아. 뾰족한 풍선엔 외침만 들어가.');
  const old = fills[cutId];
  if (old) inv.lines.push(old);
  inv.lines.splice(inv.lines.indexOf(lineId), 1);
  fills[cutId] = lineId;
  selected = null;
  render();
}

function returnLine(cutId) {
  const old = fills[cutId];
  if (!old) return;
  delete fills[cutId];
  inv.lines.push(old);
  render();
}

// ---------- 렌더 ----------

function artHtml(art) {
  return art.map((a) => {
    if (a.sfx) return `<span class="art-sfx">${a.sfx}</span>`;
    if (a.tiny) return `<span class="art-tiny">${a.tiny}</span>`;
    return `<span class="art-prop">${a.prop}</span>`;
  }).join('');
}

function cutBox({ owner, ownerColor, title, art, desc, cls = '' }) {
  const el = document.createElement('div');
  el.className = 'cut ' + cls;
  el.style.setProperty('--owner', ownerColor);
  el.innerHTML = `
    <div class="cut-head"><span>${owner}</span><span>「${title}」</span></div>
    <div class="cut-art">${artHtml(art)}</div>
    <div class="cut-desc">${desc}</div>`;
  return el;
}

const DIST_LABEL = { glitter: '미화', scribble: '낙서', exaggerate: '과장', blank: '생략', crayon: '크레용', blackout: '크레용' };

function testimonyEl(i) {
  const t = w.testimony[i];
  const isPeeled = peeled && w.peel.includes(i);
  const shown = isPeeled && t.truth ? t.truth : t;
  const art = shown.art.slice();
  if (revealed.has(i) && t.reveal) art.push(t.reveal);
  const dist = !isPeeled && t.distortion ? ' d-' + t.distortion : '';
  const box = cutBox({
    owner: `${w.name} 시점`, ownerColor: w.color, title: t.title,
    art, desc: shown.desc, cls: dist + (isPeeled ? ' peeled' : ''),
  });
  if (dist) box.insertAdjacentHTML('beforeend', `<span class="dist-tag">${DIST_LABEL[t.distortion]}</span>`);
  const wrap = document.createElement('div');
  wrap.className = 't-cut' + (i === cur && phase === 'testimony' ? ' current' : '') + (i === underline ? ' underline' : '');
  wrap.dataset.t = i;
  wrap.innerHTML = `<span class="t-num">증언 ${i + 1}</span>`;
  wrap.appendChild(box);
  return wrap;
}

function evidenceEl(id) {
  const c = CUTS[id];
  const el = cutBox({
    owner: `${OWNERS[c.owner].name} 시점`, ownerColor: OWNERS[c.owner].color, title: c.title,
    art: c.art, desc: c.desc,
    cls: (newCuts.has(id) ? 'new' : '') + (selected && selected.type === 'cut' && selected.id === id ? ' selected' : ''),
  });
  el.dataset.cut = id;
  if (c.bubble) {
    const lineId = fills[id];
    const b = document.createElement('div');
    b.className = `bubble ${c.bubble}` + (lineId ? ' filled' : ' empty');
    b.dataset.bubble = id;
    b.innerHTML = `<span>${lineId ? LINES[lineId].text : '…'}</span>`;
    el.classList.add('has-bubble');
    el.appendChild(b);
  }
  return el;
}

function render() {
  if (!w) return;
  $('#w-place').textContent = w.place;
  $('#w-progress').textContent = `증인 ${wIdx + 1}/${WITNESSES.length}`;
  const p = $('#w-portrait');
  p.textContent = w.name[0];
  p.style.background = w.color;
  $('#w-name').textContent = w.name;
  $('#w-trait').textContent = w.trait;
  $('#ink').innerHTML = [0, 1, 2].map((k) => `<span class="bottle${k < ink ? '' : ' empty'}"></span>`).join('');
  const kb = $('#btn-koharu');
  kb.disabled = !(phase === 'testimony' && ink === 1 && koharuLeft > 0);
  $('#koharu-left').textContent = `(${koharuLeft})`;

  const strip = $('#strip');
  strip.innerHTML = '';
  for (let g = 0; g <= w.testimony.length; g++) {
    if (inserted && inserted.gap === g) {
      const wrap = document.createElement('div');
      wrap.className = 't-cut inserted';
      wrap.innerHTML = '<span class="t-num">레이</span>';
      wrap.appendChild(evidenceEl(inserted.cut));
      strip.appendChild(wrap);
    } else if (!inserted || inserted.gap === 'any') {
      const gap = document.createElement('div');
      gap.className = 'gap' + (g === wrongGap ? ' wrong' : '');
      gap.dataset.gap = g;
      strip.appendChild(gap);
    }
    if (g < w.testimony.length) strip.appendChild(testimonyEl(g));
  }

  const ev = $('#ev-cuts');
  ev.innerHTML = '';
  inv.cuts.forEach((id) => ev.appendChild(evidenceEl(id)));

  const lines = $('#ev-lines');
  lines.innerHTML = '';
  inv.lines.forEach((id) => {
    const l = LINES[id];
    const el = document.createElement('div');
    el.className = 'line' + (selected && selected.type === 'line' && selected.id === id ? ' selected' : '');
    el.dataset.line = id;
    el.innerHTML = `<span class="txt">"${l.text}"</span><span class="shape">${l.shape === 'burst' ? '외침' : '보통'}</span><div class="src">${l.source}</div>`;
    lines.appendChild(el);
  });
  if (!inv.lines.length) lines.innerHTML = '<div class="src">없음</div>';

  document.body.classList.toggle('selecting-cut', !!(selected && selected.type === 'cut'));
}

function bang() {
  const b = $('#bang');
  b.classList.remove('hidden');
  b.style.animation = 'none';
  void b.offsetWidth;
  b.style.animation = '';
  setTimeout(() => b.classList.add('hidden'), 700);
}

let toastTimer = null;
function toast(text) {
  const t = $('#toast');
  t.textContent = text;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('hidden'), 2000);
}

// ---------- 입력 (드래그 + 클릭) ----------

let drag = null;

function dropAt(item, x, y) {
  const el = document.elementFromPoint(x, y);
  if (!el) return;
  if (item.type === 'line') {
    const b = el.closest('.evidence .bubble');
    if (b) placeLine(item.id, b.dataset.bubble);
    return;
  }
  const gap = el.closest('.gap');
  if (gap) onInsert(item.id, Number(gap.dataset.gap));
}

function clickAt(target) {
  if (phase !== 'testimony') {
    // 대화 중에도 말풍선 정리는 허용하지 않는다
    return;
  }
  const t = target.closest('.t-cut[data-t]');
  if (t) { cur = Number(t.dataset.t); render(); return showStatement(); }

  const gap = target.closest('.gap');
  if (gap && selected && selected.type === 'cut') return onInsert(selected.id, Number(gap.dataset.gap));

  const bubble = target.closest('.evidence .bubble');
  if (bubble) {
    if (selected && selected.type === 'line') return placeLine(selected.id, bubble.dataset.bubble);
    if (bubble.classList.contains('filled')) return returnLine(bubble.dataset.bubble);
  }
  const lineEl = target.closest('.line');
  if (lineEl) {
    const id = lineEl.dataset.line;
    selected = selected && selected.id === id ? null : { type: 'line', id };
    return render();
  }
  const cutEl = target.closest('.evidence .cut');
  if (cutEl) {
    const id = cutEl.dataset.cut;
    newCuts.delete(id);
    selected = selected && selected.id === id ? null : { type: 'cut', id };
    return render();
  }
}

document.addEventListener('pointerdown', (e) => {
  if ($('#game').classList.contains('hidden')) return;
  let item = null, src = null;
  if (phase === 'testimony') {
    const lineEl = e.target.closest('.evidence .line');
    const cutEl = e.target.closest('.evidence .cut');
    if (lineEl) { item = { type: 'line', id: lineEl.dataset.line }; src = lineEl; }
    else if (cutEl && !e.target.closest('.bubble')) { item = { type: 'cut', id: cutEl.dataset.cut }; src = cutEl; }
  }
  drag = { item, x: e.clientX, y: e.clientY, ghost: null, src, target: e.target };
});

document.addEventListener('pointermove', (e) => {
  if (!drag || !drag.item) return;
  if (!drag.ghost) {
    if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6) return;
    const r = drag.src.getBoundingClientRect();
    drag.ghost = drag.src.cloneNode(true);
    drag.ghost.classList.add('ghost-drag');
    drag.ghost.style.width = r.width + 'px';
    drag.offX = drag.x - r.left;
    drag.offY = drag.y - r.top;
    document.body.appendChild(drag.ghost);
    if (drag.item.type === 'cut') document.body.classList.add('dragging-cut');
  }
  drag.ghost.style.left = e.clientX - drag.offX + 'px';
  drag.ghost.style.top = e.clientY - drag.offY + 'px';
  document.querySelectorAll('.drop-hover').forEach((n) => n.classList.remove('drop-hover'));
  const over = document.elementFromPoint(e.clientX, e.clientY);
  const hov = over && (drag.item.type === 'line' ? over.closest('.evidence .bubble') : over.closest('.gap'));
  if (hov) hov.classList.add('drop-hover');
});

document.addEventListener('pointerup', (e) => {
  if (!drag) return;
  const d = drag;
  drag = null;
  document.body.classList.remove('dragging-cut');
  document.querySelectorAll('.drop-hover').forEach((n) => n.classList.remove('drop-hover'));
  if (d.ghost) {
    d.ghost.remove();
    dropAt(d.item, e.clientX, e.clientY);
  } else {
    clickAt(d.target);
  }
});

// ---------- 버튼 ----------

$('#btn-prev').onclick = () => { if (cur > 0) { cur--; render(); showStatement(); } };
$('#btn-next-st').onclick = () => { if (cur < w.testimony.length - 1) { cur++; render(); showStatement(); } };
$('#btn-probe').onclick = probe;
$('#btn-koharu').onclick = koharu;

function startGame() {
  inv.cuts = START_INVENTORY.cuts.slice();
  inv.lines = START_INVENTORY.lines.slice();
  fills = {};
  gotLines = new Set(inv.lines);
  newCuts = new Set();
  koharuLeft = 2;
  stats.length = 0;
  $('#intro').classList.add('hidden');
  $('#result').classList.add('hidden');
  $('#game').classList.remove('hidden');
  runWitness(0);
}

$('#start').onclick = startGame;
$('#restart').onclick = startGame;
