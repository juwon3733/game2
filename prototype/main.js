// 컷 배열 퍼즐 프로토타입. data.js의 PAGES를 차례로 플레이한다.

const $ = (sel) => document.querySelector(sel);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let pageIdx = 0;
let page = null;   // 현재 PAGES 항목
let st = null;     // 현재 페이지 상태
let selected = null; // { type: 'cut' | 'line', id }
const results = [];

// ---------- 상태 ----------

function shuffled(ids, solution) {
  const a = ids.slice();
  do {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  } while (solution.every((id, i) => a[i] === id));
  return a;
}

function loadPage(i) {
  pageIdx = i;
  page = PAGES[i];
  st = {
    slots: Array(page.solution.length).fill(null),
    tray: shuffled(page.cuts, page.solution),
    fill: {},                  // cutId -> lineId
    lines: page.lines.slice(), // 아직 안 쓴 대사 조각
    locked: new Set(),         // 클립으로 고정된 칸
    attempts: 0,
    hints: 0,
    shioriUsed: false,
    flags: null,
  };
  selected = null;
  $('#page-title').textContent = page.title;
  $('#page-sub').textContent = page.subtitle;
  $('#btn-shiori').disabled = false;
  $('#btn-shiori').textContent = '…?';
  towa(i === 0 ? '토와: 힌트 필요하면 불러. …딱히 기다리는 건 아니야.' : '토와: 이번엔 말풍선도 있어. 모양 잘 봐.');
  render();
}

function slotOf(cutId) { return st.slots.indexOf(cutId); }

function placeCut(cutId, slotIdx) {
  if (st.locked.has(slotIdx)) return toast('클립으로 고정된 칸이야.');
  const from = slotOf(cutId);
  if (from === slotIdx) return;
  const occupant = st.slots[slotIdx];
  st.slots[slotIdx] = cutId;
  if (from >= 0) {
    st.slots[from] = occupant;
  } else {
    st.tray.splice(st.tray.indexOf(cutId), 1);
    if (occupant) st.tray.push(occupant);
  }
  changed();
}

function returnCut(cutId) {
  const i = slotOf(cutId);
  if (i < 0 || st.locked.has(i)) return;
  st.slots[i] = null;
  st.tray.push(cutId);
  changed();
}

function placeLine(lineId, cutId) {
  if (!(cutId in page.bubbles)) return toast('이 말풍선은 지금 채울 수 없어.');
  if (LINES[lineId].shape !== CUTS[cutId].bubble) {
    return toast('말풍선 모양이 안 맞아. 뾰족한 풍선엔 외침만 들어가.');
  }
  const old = st.fill[cutId];
  if (old) st.lines.push(old);
  st.lines.splice(st.lines.indexOf(lineId), 1);
  st.fill[cutId] = lineId;
  changed();
}

function returnLine(cutId) {
  const old = st.fill[cutId];
  if (!old) return;
  delete st.fill[cutId];
  st.lines.push(old);
  changed();
}

function changed() {
  st.flags = null;
  selected = null;
  render();
}

// ---------- 판정 ----------

function rank(tag, value) { return TAG_ORDER[tag].indexOf(value); }

// a 다음에 b가 올 수 없으면 true
function violates(a, b) {
  const ta = CUTS[a].tags, tb = CUTS[b].tags;
  return Object.keys(ta).some((t) => t in tb && rank(t, ta[t]) > rank(t, tb[t]));
}

function check() {
  if (st.slots.includes(null)) return toast('칸이 비어 있어.');
  const missing = Object.keys(page.bubbles).find((c) => slotOf(c) >= 0 && !st.fill[c]);
  if (missing) return toast('빈 말풍선이 있어.');

  st.attempts++;
  const orderOk = page.solution.every((id, i) => st.slots[i] === id);
  const wrongBubbles = Object.keys(page.bubbles).filter((c) => slotOf(c) >= 0 && st.fill[c] !== page.bubbles[c]);
  if (orderOk && wrongBubbles.length === 0) return playback();

  const decoys = (page.decoys || []);
  const decoySlots = st.slots.map((id, i) => (decoys.includes(id) ? i : -1)).filter((i) => i >= 0);
  const conflicts = [];
  for (let i = 0; i < st.slots.length - 1; i++) {
    const a = st.slots[i], b = st.slots[i + 1];
    if (decoys.includes(a) || decoys.includes(b)) continue;
    if (violates(a, b)) conflicts.push(i);
  }
  // 태그로 잡히지 않는 오답은 정답과 처음 달라지는 경계에 표시
  if (!orderOk && conflicts.length === 0 && decoySlots.length === 0) {
    const d = page.solution.findIndex((id, i) => st.slots[i] !== id);
    conflicts.push(Math.max(d - 1, 0));
  }

  if ($('#opt-clip').checked) {
    for (let i = 0; i < page.solution.length && st.slots[i] === page.solution[i]; i++) st.locked.add(i);
  }

  st.flags = { conflicts, decoySlots, wrongBubbles };
  selected = null;
  render();

  const parts = [];
  if (conflicts.length) parts.push(`순서 모순 ${conflicts.length}곳`);
  if (decoySlots.length) parts.push('이 페이지에 안 맞는 컷');
  if (wrongBubbles.length) parts.push('말풍선 대사가 이상해');
  towa(`토와: 에러. ${parts.join(', ')}. (${st.attempts}번째 시도)`);
}

// ---------- 힌트 ----------

function hint() {
  st.hints++;
  const level = Math.min(st.hints, 3);
  if (level === 1) {
    towa('토와: ' + page.hints[0]);
  } else if (level === 2) {
    towa('토와: ' + page.hints[1]);
    page.hintPair.forEach((id) => glow(id, 'hint-glow'));
  } else {
    const i = page.solution.findIndex((id, k) => st.slots[k] !== id);
    if (i < 0) {
      const c = Object.keys(page.bubbles).find((c) => st.fill[c] !== page.bubbles[c]);
      towa(c ? `토와: 순서는 맞아. "${CUTS[c].title}" 컷의 말풍선을 다시 봐. 누가 누구 이름을 불렀을까?` : '토와: 다 맞는 것 같은데? 넘겨 봐.');
    } else {
      placeCut(page.solution[i], i);
      st.locked.add(i);
      render();
      towa(`토와: …${i + 1}번 칸. 이건 확실해. 고정해 뒀어.`);
    }
  }
  updateHintCount();
}

function shiori() {
  if (st.shioriUsed) return;
  st.shioriUsed = true;
  $('#btn-shiori').disabled = true;
  $('#btn-shiori').textContent = '(사라졌다)';
  glow(page.shiori, 'shiori');
  towa(`레이: (…교복 입은 여자애가 "${CUTS[page.shiori].title}" 컷을 가리키고 사라졌다. 피곤한가.)`);
}

function glow(cutId, cls) {
  const el = document.querySelector(`.cut[data-cut="${cutId}"]`);
  if (!el) return;
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

function updateHintCount() {
  $('#hint-count').textContent = st.hints ? `(${st.hints})` : '';
}

// ---------- 재생 / 결과 ----------

async function playback() {
  st.flags = null;
  render();
  towa('토와: …읽힌다.');
  const paper = $('#paper');
  paper.classList.add('reading-mode');
  $('#reading').classList.remove('hidden');
  $('#rei-line').textContent = '';
  $('#btn-next').classList.add('hidden');
  const slots = paper.querySelectorAll('.slot');
  for (const s of slots) {
    s.classList.add('lit');
    s.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    await sleep(900);
  }
  await typeText($('#rei-line'), '레이: ' + page.reiLine);
  results.push({ title: page.title, attempts: st.attempts, hints: st.hints, grade: grade() });
  $('#btn-next').classList.remove('hidden');
}

async function typeText(el, text) {
  el.textContent = '';
  for (const ch of text) {
    el.textContent += ch;
    await sleep(45);
  }
}

function grade() {
  if (st.hints >= 3 || st.attempts >= 4) return '초고';
  if (st.attempts === 1) return '완벽 원고';
  return '수정 원고';
}

function next() {
  $('#reading').classList.add('hidden');
  $('#paper').classList.remove('reading-mode');
  if (pageIdx + 1 < PAGES.length) return loadPage(pageIdx + 1);
  showResult();
}

function showResult() {
  $('#game').classList.add('hidden');
  $('#result').classList.remove('hidden');
  const rows = results.map((r) => `<tr><td>${r.title}</td><td>${r.attempts}회</td><td>${r.hints}회</td><td><b>${r.grade}</b></td></tr>`);
  $('#result-table').innerHTML = '<tr><th>페이지</th><th>시도</th><th>힌트</th><th>평가</th></tr>' + rows.join('');
  const perfect = results.every((r) => r.grade === '완벽 원고');
  $('#result-say').textContent = perfect
    ? '토와: …전부 한 번에? 칭찬해도 아무것도 안 나와.'
    : '토와: 수고했어. 다음엔 힌트 없이 해 봐.';
}

// ---------- 렌더 ----------

function render() {
  const paper = $('#paper');
  paper.style.gridTemplateColumns = `repeat(${page.cols}, minmax(0, 240px))`;
  paper.style.width = '100%';
  paper.style.maxWidth = page.cols * 254 + 30 + 'px';
  paper.innerHTML = '';
  const f = st.flags;
  st.slots.forEach((id, i) => {
    const s = document.createElement('div');
    s.className = 'slot' + (id ? '' : ' empty');
    s.dataset.slot = i;
    if (f) {
      if (f.conflicts.includes(i)) s.classList.add('conflict-right');
      if (f.conflicts.includes(i - 1)) s.classList.add('conflict-left');
      if (f.decoySlots.includes(i)) s.classList.add('decoy');
    }
    s.innerHTML = `<span class="slot-num">${i + 1}</span>`;
    if (id) s.appendChild(cutEl(id, st.locked.has(i)));
    if (st.locked.has(i)) s.insertAdjacentHTML('beforeend', '<span class="clip" title="고정됨"></span>');
    paper.appendChild(s);
  });

  const tray = $('#tray');
  tray.innerHTML = '';
  st.tray.forEach((id) => tray.appendChild(cutEl(id, false)));

  $('#lines-box').classList.toggle('hidden', page.lines.length === 0);
  const lines = $('#lines');
  lines.innerHTML = '';
  st.lines.forEach((id) => {
    const l = LINES[id];
    const el = document.createElement('div');
    el.className = 'line' + (selected && selected.type === 'line' && selected.id === id ? ' selected' : '');
    el.dataset.line = id;
    el.innerHTML = `<span class="txt">"${l.text}"</span><span class="shape">${l.shape === 'burst' ? '외침' : '보통'}</span><div class="src">${l.source}</div>`;
    lines.appendChild(el);
  });
  if (page.lines.length && st.lines.length === 0) lines.innerHTML = '<div class="src">모든 조각을 붙였다.</div>';
  updateHintCount();
}

function cutEl(id, locked) {
  const c = CUTS[id];
  const el = document.createElement('div');
  el.className = 'cut' + (locked ? ' locked' : '') + (selected && selected.type === 'cut' && selected.id === id ? ' selected' : '');
  el.dataset.cut = id;
  el.style.setProperty('--owner', OWNERS[c.owner].color);
  const art = c.art.map((a) => {
    if (a.sfx) return `<span class="art-sfx">${a.sfx}</span>`;
    if (a.tiny) return `<span class="art-tiny">${a.tiny}</span>`;
    return `<span class="art-prop">${a.prop}</span>`;
  }).join('');
  el.innerHTML = `
    <div class="cut-head"><span>${OWNERS[c.owner].name} 시점</span><span>「${c.title}」</span></div>
    <div class="cut-art">${art}</div>
    <div class="cut-desc">${c.desc}</div>`;
  if (c.bubble) {
    const active = id in page.bubbles;
    const lineId = st.fill[id];
    const b = document.createElement('div');
    const wrong = st.flags && st.flags.wrongBubbles.includes(id);
    b.className = `bubble ${c.bubble}` + (active ? '' : ' disabled') + (lineId ? ' filled' : ' empty') + (wrong ? ' wrong' : '');
    b.dataset.bubble = id;
    b.innerHTML = `<span>${lineId ? LINES[lineId].text : '…'}</span>`;
    el.classList.add('has-bubble');
    el.appendChild(b);
  }
  return el;
}

function towa(text) { $('#towa-say').textContent = text; }

let toastTimer = null;
function toast(text) {
  const t = $('#toast');
  t.textContent = text;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('hidden'), 1800);
}

// ---------- 입력 (드래그 + 클릭) ----------

let drag = null; // { item, x, y, ghost, src }

function dropAt(item, x, y) {
  const el = document.elementFromPoint(x, y);
  if (!el) return;
  if (item.type === 'line') {
    const b = el.closest('.bubble');
    if (b) placeLine(item.id, b.dataset.bubble);
    return;
  }
  const slot = el.closest('.slot');
  if (slot) return placeCut(item.id, Number(slot.dataset.slot));
  if (el.closest('.tray-wrap')) return returnCut(item.id);
}

function clickAt(target) {
  const bubble = target.closest('.bubble');
  if (bubble && !bubble.classList.contains('disabled')) {
    if (selected && selected.type === 'line') return placeLine(selected.id, bubble.dataset.bubble);
    if (bubble.classList.contains('filled')) return returnLine(bubble.dataset.bubble);
  }
  const lineEl = target.closest('.line');
  if (lineEl) {
    const id = lineEl.dataset.line;
    selected = selected && selected.id === id ? null : { type: 'line', id };
    return render();
  }
  const slot = target.closest('.slot');
  const cutNode = target.closest('.cut');
  if (selected && selected.type === 'cut') {
    if (slot && (!cutNode || cutNode.dataset.cut !== selected.id)) return placeCut(selected.id, Number(slot.dataset.slot));
    if (!cutNode && target.closest('.tray-wrap')) return returnCut(selected.id);
  }
  if (cutNode && !cutNode.classList.contains('locked')) {
    const id = cutNode.dataset.cut;
    selected = selected && selected.id === id ? null : { type: 'cut', id };
    return render();
  }
}

document.addEventListener('pointerdown', (e) => {
  if ($('#game').classList.contains('hidden') || !$('#reading').classList.contains('hidden')) return;
  const lineEl = e.target.closest('.line');
  const cutNode = e.target.closest('.cut');
  const onBubble = e.target.closest('.bubble');
  let item = null, src = null;
  if (lineEl) { item = { type: 'line', id: lineEl.dataset.line }; src = lineEl; }
  else if (cutNode && !onBubble && !cutNode.classList.contains('locked')) { item = { type: 'cut', id: cutNode.dataset.cut }; src = cutNode; }
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
  }
  drag.ghost.style.left = e.clientX - drag.offX + 'px';
  drag.ghost.style.top = e.clientY - drag.offY + 'px';
  document.querySelectorAll('.drop-hover').forEach((n) => n.classList.remove('drop-hover'));
  const over = document.elementFromPoint(e.clientX, e.clientY);
  const hov = over && (drag.item.type === 'line' ? over.closest('.bubble:not(.disabled)') : over.closest('.slot'));
  if (hov) hov.classList.add('drop-hover');
});

document.addEventListener('pointerup', (e) => {
  if (!drag) return;
  const d = drag;
  drag = null;
  document.querySelectorAll('.drop-hover').forEach((n) => n.classList.remove('drop-hover'));
  if (d.ghost) {
    d.ghost.remove();
    dropAt(d.item, e.clientX, e.clientY);
  } else if (!$('#game').classList.contains('hidden') && $('#reading').classList.contains('hidden')) {
    clickAt(d.target);
  }
});

// ---------- 버튼 ----------

$('#start').onclick = () => {
  $('#intro').classList.add('hidden');
  $('#game').classList.remove('hidden');
  loadPage(0);
};
$('#btn-check').onclick = check;
$('#btn-hint').onclick = hint;
$('#btn-shiori').onclick = shiori;
$('#btn-next').onclick = next;
$('#restart').onclick = () => {
  results.length = 0;
  $('#result').classList.add('hidden');
  $('#game').classList.remove('hidden');
  loadPage(0);
};
