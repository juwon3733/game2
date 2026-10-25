// 비주얼 노벨 무대: 배경, 캐릭터, 대사창, 선택지, 모달, 진행 상태.

const $ = (s) => document.querySelector(s);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const G = {
  cuts: [],        // 가진 컷
  lines: [],       // 가진 대사 조각
  fills: {},       // 컷 id -> 말풍선에 붙인 대사 조각
  koharuLeft: 2,
  busyModal: false,
  flags: {},       // 튜토리얼 본 것 등 (저장됨)
  auto: false,     // 자동 진행
  skip: false,     // 빨리 넘기기
};

// ---------- 화면 크기 맞추기 ----------

function fitStage() {
  // 높이는 720 기준으로 맞추고, 가로는 창 비율에 맞게 1280~1720까지 넓혀서 양옆을 채운다
  const W = Math.round(Math.max(1280, Math.min(1720, (innerWidth / innerHeight) * 720)));
  const s = Math.min(innerWidth / W, innerHeight / 720);
  $('#stage').style.width = W + 'px';
  $('#stage').style.transform = `scale(${s})`;
  $('#stage').style.left = (innerWidth - W * s) / 2 + 'px';
  $('#stage').style.top = (innerHeight - 720 * s) / 2 + 'px';
  // 상반신(원본 256×384 도트)은 도트 한 칸이 실제 화면 픽셀의 정수 배가 되게 키워서 또렷하게 그린다
  const dev = s * (devicePixelRatio || 1);
  const n = Math.max(1, Math.round(1.8 * dev));
  $('#stage').style.setProperty('--char-h', (384 * n) / dev + 'px');
  // 탐색 캔버스(1280×720, 맵은 1:1)는 실제 화면 배율이 정수일 때만 또렷하게, 아니면 부드럽게
  const k = s * (devicePixelRatio || 1);
  $('#stage').style.setProperty('--pix-canvas', Math.abs(k - Math.round(k)) < 0.01 ? 'pixelated' : 'auto');
}
addEventListener('resize', fitStage);
fitStage();

// ---------- 화면 전환 / 효과 ----------

// 검은 화면으로 덮기(true) / 걷기(false)
function fade(on, ms = 450) {
  const f = $('#fade');
  f.style.transitionDuration = ms + 'ms';
  f.classList.toggle('on', on);
  return sleep(ms);
}

function quake() {
  const s = $('#stage');
  s.classList.remove('quake'); void s.offsetWidth; s.classList.add('quake');
}

function flash(color = '#fff') {
  const f = $('#flash');
  f.style.background = color;
  f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
}

// ---------- 배경 / 캐릭터 ----------

let curBg = null;
function bg(id) {
  if (curBg === id) return;
  const img = $('#bg');
  // 이전 배경을 위에 겹쳐 두고 서서히 지운다
  if (curBg) {
    const old = img.cloneNode();
    old.removeAttribute('id');
    old.className = 'bg-old';
    img.after(old);
    setTimeout(() => old.remove(), 800);
  }
  curBg = id;
  loadImg(img, ASSET.bg(id), () => bgPlaceholder(id));
}

const onStage = {}; // char -> img

function show(char, face = CHARACTERS[char].faces[0], pos = 'center') {
  G.flags.met = G.flags.met || [];
  if (!G.flags.met.includes(char)) G.flags.met.push(char);
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
    // 상반신 그림이 없으면 임시 그림 대신 아예 안 보인다(이름은 대사창에 나옴)
    img.onerror = () => { img.style.visibility = 'hidden'; };
    img.onload = () => { img.style.visibility = ''; };
    img.src = ASSET.portrait(char, face);
  }
}

function hide(char) {
  const img = onStage[char];
  if (!img) return;
  delete onStage[char];
  img.classList.add('leave');
  setTimeout(() => img.remove(), 260);
}

function clearChars() { Object.keys(onStage).forEach(hide); }

let lastSpeaker = null;
function focusChar(char) {
  Object.entries(onStage).forEach(([k, img]) => img.classList.toggle('dim', !!char && k !== char));
  // 말하는 사람이 바뀌면 살짝 들썩
  if (char && char !== lastSpeaker && onStage[char]) {
    const img = onStage[char];
    img.classList.remove('hop'); void img.offsetWidth; img.classList.add('hop');
  }
  lastSpeaker = char;
}

// ---------- 대사 ----------

let advanceFn = null;
let typing = null;

// 자동 진행 / 빨리 넘기기면 알아서 넘어간다
function waitAdvance(len = 0) {
  return new Promise((r) => {
    advanceFn = r;
    scheduleAuto(r, len);
  });
}

function scheduleAuto(r, len) {
  if (G.skip) setTimeout(() => { if (advanceFn === r) tryAdvance(); }, 60);
  else if (G.auto) setTimeout(() => { if (advanceFn === r) tryAdvance(); }, (1000 + len * 55) * SETTINGS.autoWait);
}

function tryAdvance() {
  if (typing) { typing(); return; }
  if (advanceFn) { const a = advanceFn; advanceFn = null; a(); }
}

const TEXT_MS = [42, 26, 12, 0];
// 말하는 사람마다 다른 높이의 타자음
const VOICE = { rei: 0.82, koharu: 1.22, kurogane: 0.68, towa: 1.4, asagiri: 0.95, ookubo: 0.72, taiga: 0.9, himari: 1.5, shiori: 1.08, komatsu: 1.05, akari: 1.3 };

async function typeInto(el, text, voice) {
  el.textContent = '';
  let done = false;
  typing = () => { done = true; };
  const ms = G.skip ? 0 : TEXT_MS[SETTINGS.textSpeed];
  if (ms) {
    let i = 0;
    for (const ch of text) {
      if (done) break;
      el.textContent += ch;
      if (voice && ch.trim() && i++ % 3 === 0) sfx('blip', { rate: voice, vol: 0.3 });
      await sleep(ms);
    }
  }
  el.textContent = text;
  typing = null;
}

// ---------- 대사 기록 ----------

const LOG = [];
function openLog() {
  if (G.busyModal) return;
  const m = openModal(`<div class="md-title">대사 기록</div><div class="log-list"></div><button class="md-cancel">닫기</button>`, 'log');
  const list = m.querySelector('.log-list');
  list.innerHTML = LOG.slice(-120).map((l) => `<div class="log-row${l.name ? '' : ' narr'}">${l.name ? `<b style="color:${l.color}">${l.name}</b>` : ''}<span>${l.text}</span></div>`).join('') || '<div class="md-empty">아직 대사가 없다.</div>';
  list.scrollTop = list.scrollHeight;
  m.querySelector('.md-cancel').onclick = closeModal;
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
    $('#tb-name').style.setProperty('--name-accent', CHARACTERS[who].accent);
    focusChar(onStage[who] ? who : null);
  } else {
    $('#tb-name').textContent = '';
    focusChar(null);
  }
  const ch = who && CHARACTERS[who];
  LOG.push({ name: ch ? ch.name : '', color: ch ? ch.accent : '', text });
  await typeInto($('#tb-text'), text, VOICE[who]);
  $('#tb-next').classList.remove('hidden');
  await waitAdvance(text.length);
  $('#tb-next').classList.add('hidden');
}

async function sayAll(lines) {
  for (const [who, text, face] of lines) await say(who, text, face);
}

function hideText() { $('#textbox').classList.add('hidden'); focusChar(null); }

// 클릭/키로 대사 넘기기
$('#stage').addEventListener('click', (e) => {
  if (e.target.closest('button, #modal, #choices, #puzzle, #actions, .tr-panel, #pad, .title-screen')) return;
  if (e.target.closest('#explore') && exploreActive()) return;
  if (G.auto || G.skip) return setMode(null);
  tryAdvance();
});
addEventListener('keydown', (e) => {
  if ((e.key === ' ' || e.key === 'Enter') && !G.busyModal && !exploreActive()) { e.preventDefault(); tryAdvance(); }
  if (e.key === 'Control' && !G.busyModal && !e.repeat && !G.skip) { G.ctrlSkip = true; setMode('skip'); }
});
addEventListener('keyup', (e) => { if (e.key === 'Control' && G.ctrlSkip) { G.ctrlSkip = false; setMode(null); } });
// 휠을 위로 굴리면 대사 기록
$('#stage').addEventListener('wheel', (e) => { if (e.deltaY < 0 && !G.busyModal && !$('#textbox').classList.contains('hidden')) openLog(); }, { passive: true });

// 자동 / 빨리 넘기기 켜고 끄기. 선택지·모달·탐색에서는 꺼진다.
function setMode(mode) {
  G.auto = mode === 'auto';
  G.skip = mode === 'skip';
  $('#btn-auto').classList.toggle('on', G.auto);
  $('#btn-skip').classList.toggle('on', G.skip);
  if (advanceFn && (G.auto || G.skip)) scheduleAuto(advanceFn, 0);
  if (G.skip && typing) typing();
}

// ---------- 선택지 ----------

function choice(options, prompt) {
  const box = $('#choices');
  box.innerHTML = prompt ? `<div class="ch-prompt">${prompt}</div>` : '';
  box.classList.remove('hidden');
  setMode(null);
  return new Promise((resolve) => {
    options.forEach((text, i) => {
      const b = document.createElement('button');
      b.className = 'ch-btn';
      b.textContent = text;
      b.onclick = () => { sfx('select'); box.classList.add('hidden'); box.innerHTML = ''; resolve(i); };
      box.appendChild(b);
    });
  });
}

// 대사창 아래 행동 버튼 (심문용). 한 번 누르면 그 값으로 resolve.
function actions(list) {
  const box = $('#actions');
  box.innerHTML = '';
  box.classList.remove('hidden');
  setMode(null);
  return new Promise((resolve) => {
    list.forEach(({ id, label, cls = '', disabled }) => {
      const b = document.createElement('button');
      b.className = 'act-btn ' + cls;
      b.textContent = label;
      b.disabled = !!disabled;
      b.onclick = (e) => { e.stopPropagation(); if (id !== 'obj') sfx(id === 'press' ? 'press' : 'select'); box.classList.add('hidden'); resolve(id); };
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
  if (cls !== 'objection') sfx('banner', { vol: 0.7 });
  if (G.skip) ms = Math.min(ms, 500);
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
  setMode(null);
  return m;
}
function closeModal() { $('#modal').className = 'hidden'; $('#modal').innerHTML = ''; G.busyModal = false; }

// 컷을 골라야 하는 모달. filter로 고를 수 있는 컷 제한. 취소하면 null.
function pickCut(title, sub, { cancel = true, only = null } = {}) {
  const ids = only ? only.filter((id) => G.cuts.includes(id)) : G.cuts;
  const m = openModal(`<div class="md-title">${title}</div><div class="md-sub">${sub || ''}</div><div class="md-grid${ids.length <= 5 ? ' few' : ''}"></div>${cancel ? '<button class="md-cancel">취소</button>' : ''}`, 'pick');
  const grid = m.querySelector('.md-grid');
  return new Promise((resolve) => {
    ids.forEach((id) => {
      const v = cutView(id, { fills: G.fills });
      v.classList.add('pickable');
      v.onclick = () => { sfx('select'); closeModal(); resolve(id); };
      grid.appendChild(v);
    });
    const c = m.querySelector('.md-cancel');
    if (c) c.onclick = () => { sfx('cancel'); closeModal(); resolve(null); };
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
  sfx('cut');
  flash('rgba(255,255,255,.7)');
  const m = openModal('<div class="md-title gain">잔상을 읽었다</div><div class="md-one"></div><div class="md-sub">수첩에 컷이 추가되었다.</div><button class="md-ok">확인</button>', 'gain');
  const card = cutView(id);
  m.querySelector('.md-one').appendChild(card);
  return new Promise((r) => {
    m.querySelector('.md-ok').onclick = () => {
      // 카드가 수첩 버튼으로 날아가 들어간다
      const from = card.getBoundingClientRect(), to = $('#btn-note').getBoundingClientRect();
      const fly = card.cloneNode(true);
      const k = $('#stage').getBoundingClientRect().height / 720;
      const st = $('#stage').getBoundingClientRect();
      Object.assign(fly.style, { position: 'absolute', zIndex: 99, left: (from.left - st.left) / k + 'px', top: (from.top - st.top) / k + 'px', width: from.width / k + 'px', margin: 0, transition: 'all .5s cubic-bezier(.5,0,.8,.4)', pointerEvents: 'none' });
      fly.classList.add('flying');
      $('#stage').appendChild(fly);
      closeModal();
      requestAnimationFrame(() => Object.assign(fly.style, { left: (to.left - st.left) / k + 'px', top: (to.top - st.top) / k + 'px', width: '60px', opacity: 0.2, transform: 'rotate(-12deg)' }));
      setTimeout(() => { fly.remove(); const b = $('#btn-note'); b.classList.remove('pulse'); void b.offsetWidth; b.classList.add('pulse'); sfx('place'); }, 520);
      r();
    };
  });
}

function gainLine(id) {
  if (G.lines.includes(id) || Object.values(G.fills).includes(id)) return;
  G.lines.push(id);
  sfx('correct', { vol: 0.6 });
  toast(`대사 조각 「${LINES[id].text}」을(를) 얻었다.`);
}

// ---------- 수첩 ----------

// 수첩: 컷 / 대사 조각 / 인물 탭
$('#btn-note').onclick = (e) => {
  e.stopPropagation();
  if (G.busyModal) return;
  sfx('page', { vol: 0.6 });
  const met = Object.keys(PROFILES).filter((k) => (G.flags.met || []).includes(k));
  const m = openModal(`<div class="md-title">사건 수첩</div>
    <div class="nb-tabs"><button data-tab="cuts" class="on">컷 ${G.cuts.length}</button><button data-tab="lines">대사 조각 ${G.lines.length}</button><button data-tab="people">인물 ${met.length}</button></div>
    <div class="nb-page" data-page="cuts"><div class="md-grid"></div></div>
    <div class="nb-page hidden" data-page="lines"><div class="md-lines"></div></div>
    <div class="nb-page hidden" data-page="people"><div class="nb-people"></div></div>
    <button class="md-cancel">닫기</button>`, 'note');
  const grid = m.querySelector('.md-grid');
  G.cuts.forEach((id) => grid.appendChild(cutView(id, { fills: G.fills })));
  if (!G.cuts.length) grid.innerHTML = '<div class="md-empty">아직 모은 컷이 없다.</div>';
  const lines = m.querySelector('.md-lines');
  G.lines.forEach((id) => lines.insertAdjacentHTML('beforeend', `<div class="line-btn static"><b>"${LINES[id].text}"</b><small>${LINES[id].from}</small></div>`));
  Object.entries(G.fills).forEach(([cut, id]) => lines.insertAdjacentHTML('beforeend', `<div class="line-btn static used"><b>"${LINES[id].text}"</b><small>「${CUTS[cut].title}」 말풍선에 넣음</small></div>`));
  if (!lines.children.length) lines.innerHTML = '<div class="md-empty">아직 대사 조각이 없다. 증언을 [파고들어] 모아 보자.</div>';
  m.querySelector('.nb-people').innerHTML = met.map((k) => `<div class="nb-person"><img src="${ASSET.portrait(k, CHARACTERS[k].faces[0])}" alt=""><div><b style="color:${CHARACTERS[k].accent}">${CHARACTERS[k].name}</b><p>${PROFILES[k]}</p></div></div>`).join('') || '<div class="md-empty">아직 만난 사람이 없다.</div>';
  m.querySelectorAll('.nb-tabs button').forEach((b) => (b.onclick = () => {
    m.querySelectorAll('.nb-tabs button').forEach((x) => x.classList.toggle('on', x === b));
    m.querySelectorAll('.nb-page').forEach((p) => p.classList.toggle('hidden', p.dataset.page !== b.dataset.tab));
    sfx('select');
  }));
  m.querySelector('.md-cancel').onclick = closeModal;
};

// ---------- 이벤트 CG ----------
// 그림이 있으면 화면 가득 띄우고 true. 없으면 false라서 대본이 원래 연출(상반신)로 넘어간다.
function cg(id) {
  return new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => { const el = $('#cg'); el.src = probe.src; el.classList.add('on'); resolve(true); };
    probe.onerror = () => resolve(false);
    probe.src = ASSET.cg(id);
  });
}
function cgEnd() { $('#cg').classList.remove('on'); }

function hud(on) { $('#hud').classList.toggle('hidden', !on); }

$('#btn-log').onclick = (e) => { e.stopPropagation(); openLog(); };
$('#btn-auto').onclick = (e) => { e.stopPropagation(); setMode(G.auto ? null : 'auto'); };
$('#btn-skip').onclick = (e) => { e.stopPropagation(); setMode(G.skip ? null : 'skip'); };
$('#btn-set').onclick = (e) => { e.stopPropagation(); openSettings(); };

// ---------- 설정 ----------

function openSettings() {
  if (G.busyModal) return;
  const seg = (key, labels) => `<div class="set-seg" data-key="${key}">${labels.map((l, i) => `<button data-v="${i}" class="${SETTINGS[key] === i ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  const range = (key) => `<input type="range" min="0" max="1" step="0.05" data-key="${key}" value="${SETTINGS[key]}">`;
  const m = openModal(`<div class="md-title">설정</div>
    <div class="set-grid">
      <label>글자 속도</label>${seg('textSpeed', ['느리게', '보통', '빠르게', '즉시'])}
      <label>자동 진행 간격</label><input type="range" min="0.5" max="2" step="0.1" data-key="autoWait" value="${SETTINGS.autoWait}">
      <label>배경음악</label>${range('bgm')}
      <label>효과음</label>${range('sfx')}
    </div>
    <div class="set-help">대사 넘기기: 클릭 · Space · Enter　|　Ctrl 누르고 있기: 빨리 넘기기　|　휠 위로: 대사 기록</div>
    <button class="md-cancel">닫기</button>`, 'settings');
  m.querySelectorAll('.set-seg button').forEach((b) => (b.onclick = () => {
    const seg = b.parentElement;
    SETTINGS[seg.dataset.key] = Number(b.dataset.v);
    seg.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
    saveSettings(); sfx('select');
  }));
  m.querySelectorAll('input[type=range]').forEach((r) => (r.oninput = () => { SETTINGS[r.dataset.key] = Number(r.value); saveSettings(); }));
  m.querySelectorAll('input[data-key=sfx]').forEach((r) => (r.onchange = () => sfx('select')));
  m.querySelector('.md-cancel').onclick = closeModal;
}
