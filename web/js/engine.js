// 비주얼 노벨 무대: 배경, 캐릭터, 대사창, 선택지, 모달, 진행 상태.

const $ = (s) => document.querySelector(s);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const G = {
  cuts: [],        // 가진 컷
  lines: [],       // 가진 대사 조각
  fills: {},       // 컷 id -> 말풍선에 붙인 대사 조각
  koharuLeft: 2,
  busyModal: false,
};

// ---------- 화면 크기 맞추기 ----------

function fitStage() {
  const s = Math.min(innerWidth / 1280, innerHeight / 720);
  $('#stage').style.transform = `scale(${s})`;
  $('#stage').style.left = (innerWidth - 1280 * s) / 2 + 'px';
  $('#stage').style.top = (innerHeight - 720 * s) / 2 + 'px';
}
addEventListener('resize', fitStage);
fitStage();

// ---------- 배경 / 캐릭터 ----------

function bg(id) {
  loadImg($('#bg'), ASSET.bg(id), () => bgPlaceholder(id));
}

const onStage = {}; // char -> img

function show(char, face = CHARACTERS[char].faces[0], pos = 'center') {
  let img = onStage[char];
  if (!img) {
    img = new Image();
    img.className = 'char enter';
    img.dataset.char = char;
    $('#chars').appendChild(img);
    onStage[char] = img;
    setTimeout(() => img.classList.remove('enter'), 30);
  }
  img.dataset.pos = pos;
  if (img.dataset.face !== face) {
    img.dataset.face = face;
    loadImg(img, ASSET.portrait(char, face), () => portraitPlaceholder(char, face));
  }
}

function hide(char) {
  const img = onStage[char];
  if (!img) return;
  img.remove();
  delete onStage[char];
}

function clearChars() { Object.keys(onStage).forEach(hide); }

function focusChar(char) {
  Object.entries(onStage).forEach(([k, img]) => img.classList.toggle('dim', !!char && k !== char));
}

// ---------- 대사 ----------

let advanceFn = null;
let typing = null;

function waitAdvance() {
  return new Promise((r) => { advanceFn = r; });
}

function tryAdvance() {
  if (typing) { typing(); return; }
  if (advanceFn) { const a = advanceFn; advanceFn = null; a(); }
}

async function typeInto(el, text) {
  el.textContent = '';
  let done = false;
  typing = () => { done = true; };
  for (const ch of text) {
    if (done) break;
    el.textContent += ch;
    await sleep(22);
  }
  el.textContent = text;
  typing = null;
}

// who: 캐릭터 키 또는 '' (나레이션). face가 있으면 표정을 바꾼다.
async function say(who, text, face) {
  const tb = $('#textbox');
  tb.classList.remove('hidden');
  tb.classList.toggle('narr', !who);
  if (who && CHARACTERS[who]) {
    if (face && onStage[who]) show(who, face, onStage[who].dataset.pos);
    $('#tb-name').textContent = CHARACTERS[who].name;
    $('#tb-name').style.background = CHARACTERS[who].accent;
    focusChar(onStage[who] ? who : null);
  } else {
    $('#tb-name').textContent = '';
    focusChar(null);
  }
  await typeInto($('#tb-text'), text);
  $('#tb-next').classList.remove('hidden');
  await waitAdvance();
  $('#tb-next').classList.add('hidden');
}

async function sayAll(lines) {
  for (const [who, text, face] of lines) await say(who, text, face);
}

function hideText() { $('#textbox').classList.add('hidden'); focusChar(null); }

// 클릭/키로 대사 넘기기
$('#stage').addEventListener('click', (e) => {
  if (e.target.closest('button, #modal, #choices, #puzzle, #actions, .tr-panel, #pad')) return;
  if (e.target.closest('#explore') && exploreActive()) return;
  tryAdvance();
});
addEventListener('keydown', (e) => {
  if ((e.key === ' ' || e.key === 'Enter') && !G.busyModal && !exploreActive()) { e.preventDefault(); tryAdvance(); }
});

// ---------- 선택지 ----------

function choice(options, prompt) {
  const box = $('#choices');
  box.innerHTML = prompt ? `<div class="ch-prompt">${prompt}</div>` : '';
  box.classList.remove('hidden');
  return new Promise((resolve) => {
    options.forEach((text, i) => {
      const b = document.createElement('button');
      b.className = 'ch-btn';
      b.textContent = text;
      b.onclick = () => { box.classList.add('hidden'); box.innerHTML = ''; resolve(i); };
      box.appendChild(b);
    });
  });
}

// 대사창 아래 행동 버튼 (심문용). 한 번 누르면 그 값으로 resolve.
function actions(list) {
  const box = $('#actions');
  box.innerHTML = '';
  box.classList.remove('hidden');
  return new Promise((resolve) => {
    list.forEach(({ id, label, cls = '', disabled }) => {
      const b = document.createElement('button');
      b.className = 'act-btn ' + cls;
      b.textContent = label;
      b.disabled = !!disabled;
      b.onclick = (e) => { e.stopPropagation(); box.classList.add('hidden'); resolve(id); };
      box.appendChild(b);
    });
  });
}

// ---------- 목표 / 배너 / 토스트 ----------

function goal(text) {
  const g = $('#goal');
  g.classList.toggle('hidden', !text);
  g.innerHTML = text ? `<b>목표</b> ${text}` : '';
}

async function banner(text, sub = '', ms = 1800, cls = '') {
  const b = $('#banner');
  b.className = cls;
  b.innerHTML = `<div class="bn-main">${text}</div>${sub ? `<div class="bn-sub">${sub}</div>` : ''}`;
  await sleep(ms);
  b.className = 'hidden';
}

let toastT = null;
function toast(text) {
  const t = $('#toast');
  t.textContent = text;
  t.classList.remove('hidden');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.add('hidden'), 2200);
}

// ---------- 모달 ----------

function openModal(html, cls = '') {
  const m = $('#modal');
  m.className = cls;
  m.innerHTML = `<div class="md-box">${html}</div>`;
  G.busyModal = true;
  return m;
}
function closeModal() { $('#modal').className = 'hidden'; $('#modal').innerHTML = ''; G.busyModal = false; }

// 컷을 골라야 하는 모달. filter로 고를 수 있는 컷 제한. 취소하면 null.
function pickCut(title, sub, { cancel = true } = {}) {
  const m = openModal(`<div class="md-title">${title}</div><div class="md-sub">${sub || ''}</div><div class="md-grid"></div>${cancel ? '<button class="md-cancel">취소</button>' : ''}`, 'pick');
  const grid = m.querySelector('.md-grid');
  return new Promise((resolve) => {
    G.cuts.forEach((id) => {
      const v = cutView(id, { fills: G.fills });
      v.classList.add('pickable');
      v.onclick = () => { closeModal(); resolve(id); };
      grid.appendChild(v);
    });
    const c = m.querySelector('.md-cancel');
    if (c) c.onclick = () => { closeModal(); resolve(null); };
  });
}

// 대사 조각 고르기. shape가 안 맞으면 고를 수 없다고 알려준다.
function pickLine(cutId) {
  const shape = CUTS[cutId].bubble;
  const m = openModal(`<div class="md-title">「${CUTS[cutId].title}」의 말풍선이 비어 있다.</div>
    <div class="md-sub">이 컷에서 뭐라고 했을까? 대사 조각을 고르자. (뾰족한 말풍선 = 외침)</div><div class="md-lines"></div><button class="md-cancel">취소</button>`, 'pick');
  const box = m.querySelector('.md-lines');
  return new Promise((resolve) => {
    if (!G.lines.length) box.innerHTML = '<div class="md-empty">가진 대사 조각이 없다. 증언을 [파고들어] 모아 보자.</div>';
    G.lines.forEach((id) => {
      const l = LINES[id];
      const b = document.createElement('button');
      b.className = 'line-btn';
      b.innerHTML = `<b>"${l.text}"</b><small>${l.shape === 'burst' ? '외침' : '보통'} · ${l.from}</small>`;
      b.onclick = () => {
        if (l.shape !== shape) return toast('말풍선 모양이 안 맞아. 뾰족한 말풍선엔 외침만 들어가.');
        closeModal();
        resolve(id);
      };
      box.appendChild(b);
    });
    m.querySelector('.md-cancel').onclick = () => { closeModal(); resolve(null); };
  });
}

function setFill(cutId, lineId) {
  const old = G.fills[cutId];
  if (old) G.lines.push(old);
  G.lines.splice(G.lines.indexOf(lineId), 1);
  G.fills[cutId] = lineId;
}

// ---------- 컷 / 대사 조각 획득 ----------

function gainCut(id) {
  if (G.cuts.includes(id)) return Promise.resolve();
  G.cuts.push(id);
  const m = openModal('<div class="md-title gain">잔상을 읽었다</div><div class="md-one"></div><div class="md-sub">수첩에 컷이 추가되었다.</div><button class="md-ok">확인</button>', 'gain');
  m.querySelector('.md-one').appendChild(cutView(id));
  return new Promise((r) => { m.querySelector('.md-ok').onclick = () => { closeModal(); r(); }; });
}

function gainLine(id) {
  if (G.lines.includes(id) || Object.values(G.fills).includes(id)) return;
  G.lines.push(id);
  toast(`대사 조각 「${LINES[id].text}」을(를) 얻었다.`);
}

// ---------- 수첩 ----------

$('#btn-note').onclick = (e) => {
  e.stopPropagation();
  if (G.busyModal) return;
  const m = openModal(`<div class="md-title">사건 수첩</div><div class="md-sub">모은 컷 ${G.cuts.length}장 · 대사 조각 ${G.lines.length}개</div>
    <div class="md-grid"></div><div class="md-lines"></div><button class="md-cancel">닫기</button>`, 'note');
  const grid = m.querySelector('.md-grid');
  G.cuts.forEach((id) => grid.appendChild(cutView(id, { fills: G.fills })));
  if (!G.cuts.length) grid.innerHTML = '<div class="md-empty">아직 모은 컷이 없다.</div>';
  const lines = m.querySelector('.md-lines');
  G.lines.forEach((id) => lines.insertAdjacentHTML('beforeend', `<div class="line-btn static"><b>"${LINES[id].text}"</b><small>${LINES[id].from}</small></div>`));
  m.querySelector('.md-cancel').onclick = closeModal;
};

function hud(on) { $('#hud').classList.toggle('hidden', !on); }
