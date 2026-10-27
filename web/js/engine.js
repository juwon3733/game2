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
  items: [],       // 물증 (메모·물건). 반박에 컷처럼 내밀 수 있다
  words: [],       // 단어 조각 (네임 빈칸에 넣는다)
  stats: { wrong: 0, hints: 0, help: 0, accuse: null }, // 원고 평가용
  auto: false,     // 자동 진행
  skip: false,     // 빨리 넘기기
};

// 장 목록. script_chN.js가 CHAPTERS[N] = { title, scenes, state, fn, bgm, cast } 를 채운다.
const CHAPTERS = {};

// ---------- 화면 크기 맞추기 ----------

function fitStage() {
  // 높이는 720 기준으로 맞추고, 가로는 창 비율에 맞게 1280~1720까지 넓혀서 양옆을 채운다
  const W = Math.round(Math.max(1280, Math.min(1720, (innerWidth / innerHeight) * 720)));
  const s = Math.min(innerWidth / W, innerHeight / 720);
  $('#stage').style.width = W + 'px';
  $('#stage').style.transform = `scale(${s})`;
  $('#stage').style.left = (innerWidth - W * s) / 2 + 'px';
  $('#stage').style.top = (innerHeight - 720 * s) / 2 + 'px';
  // 탐색 캔버스(1280×720, 맵은 1:1)는 실제 화면 배율이 정수일 때만 또렷하게, 아니면 부드럽게
  const k = s * (devicePixelRatio || 1);
  $('#stage').style.setProperty('--pix-canvas', Math.abs(k - Math.round(k)) < 0.01 ? 'pixelated' : 'auto');
}
addEventListener('resize', fitStage);
fitStage();

// ---------- 화면 전환 / 효과 ----------

// 검은 화면으로 덮기(true) / 걷기(false)
// 검은 화면으로 덮기(true) / 걷기(false). 도트 디더로 번진다 (fx.js)
function fade(on, ms = 450) {
  return FX.fade(on, ms);
}

function quake() {
  const s = $('#stage');
  s.classList.remove('quake'); void s.offsetWidth; s.classList.add('quake');
}

function flash(color = '#fff') {
  if (SETTINGS.fxReduce) return;
  const f = $('#flash');
  f.style.background = color;
  f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
}

// ---------- 배경 / 캐릭터 ----------

let curBg = null;
let bgUntil = 0; // 배경이 바뀌는 중이면 첫 대사를 그 뒤에 띄운다
function bg(id) {
  if (curBg === id) return;
  if (typeof amb === 'function') amb(BG_AMB[id] || null);
  const img = $('#bg');
  // 이전 배경을 위에 겹쳐 두고 서서히 지운다. 장면 전환으로 화면이 검게 덮여 있을 땐 바로 바꾼다(늦게 바뀌어 보이지 않게)
  const covered = FX.covered && FX.covered();
  if (curBg && !covered) {
    const old = img.cloneNode();
    old.removeAttribute('id');
    old.className = 'bg-old';
    img.after(old);
    setTimeout(() => old.remove(), 400);
    bgUntil = performance.now() + 300;
  }
  curBg = id;
  FX.bg(id);
  img.classList.remove('settle'); if (!covered) { void img.offsetWidth; img.classList.add('settle'); }
  loadImg(img, ASSET.bg(id), () => bgPlaceholder(id));
}

const onStage = {}; // char -> img
const REACT = { angry: 're-shake', flustered: 're-shake', crying: 're-sink', sad: 're-sink', scared: 're-sink', surprised: 're-jump', cornered: 're-jump' };

// opts.far: 멀리(창밖·길 건너) 서 있는 인물. 작고 흐리게.
// 토와처럼 remote인 인물은 모니터 창으로 뜬다(opts.here면 실제로 그 자리에 있음).
const FACE_USED = {}; // 그림이 없는 표정을 대신해 실제로 띄운 표정 (대사창 얼굴도 같이 쓴다)
function show(char, face = CHARACTERS[char].faces[0], pos = 'center', opts = {}) {
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
  img.classList.toggle('far', !!opts.far);
  img.classList.toggle('remote', !!CHARACTERS[char].remote && !opts.here);
  // 이미 나와 있던 인물의 표정이 바뀌면 몸으로도 반응한다
  if (img.dataset.face && img.dataset.face !== face && REACT[face]) {
    const r = REACT[face];
    img.classList.remove(...Object.values(REACT)); void img.offsetWidth; img.classList.add(r);
    if (r !== 're-sink') setTimeout(() => img.classList.remove(r), 700);
  } else if (img.dataset.face !== face) img.classList.remove('re-sink');
  if (img.dataset.face !== face) {
    img.dataset.face = face;
    // 상반신 그림이 없으면 임시 그림 대신 아예 안 보인다(이름은 대사창에 나옴)
    // 새 표정 그림이 아직 없으면 비슷한 표정(alt)으로
    // 그 표정 → 비슷한 표정(alt) → 기본 표정 → 있는 아무 표정 순서로 찾는다. 다 없을 때만 숨긴다
    const C = CHARACTERS[char];
    const tries = [...new Set([face, (C.alt || {})[face], ...C.faces].filter(Boolean))];
    let k = 0;
    img.onerror = () => {
      if (img.dataset.face !== face) return; // 그새 다른 표정으로 바뀜
      if (++k < tries.length) img.src = ASSET.portrait(char, tries[k]);
      else img.style.visibility = 'hidden';
    };
    img.onload = () => { img.style.visibility = ''; FACE_USED[char + ':' + face] = tries[k]; };
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
const VOICE = { rei: 0.82, koharu: 1.22, kurogane: 0.68, towa: 1.4, asagiri: 0.95, ookubo: 0.72, taiga: 0.9, himari: 1.5, shiori: 1.08, komatsu: 1.05, akari: 1.3,
  ruru: 1.12, pin: 1.35, aoi: 1.0, kuramochi: 0.98, tendo: 0.9, kirishima: 0.74,
  yuki: 1.18, nagi: 1.24, yukin: 1.18, madoka: 1.02, tofu: 1.1, ren: 0.92,
  hayaka: 1.2, keiko: 0.96, okamoto: 1.06, murase: 0.7, nishimura: 0.66, tanabe: 0.8, sota: 0.85, genzo: 0.62 };
// 배경마다 깔리는 환경음
const BG_AMB = { night: 'sea', office: 'hum', guardroom: 'hum', interrogate: 'hum', hospital: 'hum', himari_door: 'hum',
  crescent_out: 'crowd', crescent_stage: 'crowd', backstage: 'hum', booth: 'hum', greenroom: 'hum',
  arcade: 'crowd', arcade_exit: 'crowd', storage: 'hum', sakurayu: 'sea', sakurayu_boiler: 'fire', site_office: 'hum', clinic: 'hum', station_chief: 'hum',
  koharu_room: 'rain', busstop: 'rain', warehouse: 'sea', warehouse_in: 'sea', pier: 'sea', library: 'hum', lighthouse: 'sea', lighthouse_in: 'fire', lighthouse_dawn: 'sea' };

// [[단어]]는 강조색. 문장부호에서 잠깐 쉰다.
const PAUSE = { '…': 7, '.': 4, '?': 5, '!': 5, ',': 3, '—': 4 };
function markup(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\[\[(.+?)\]\]/g, '<em>$1</em>');
}
const plain = (text) => text.replace(/\[\[(.+?)\]\]/g, '$1');

// ---------- 조사 ----------
// 「구급차!」을(를) → 「구급차!」를. 앞 낱말의 마지막 글자 받침으로 고른다.
const JOSA = { '을(를)': ['을', '를'], '를(을)': ['을', '를'], '이(가)': ['이', '가'], '가(이)': ['이', '가'], '은(는)': ['은', '는'], '는(은)': ['은', '는'], '와(과)': ['과', '와'], '과(와)': ['과', '와'], '(으)로': ['으로', '로'], '(이)': ['이', ''] };
function batchim(ch) {
  const c = ch.charCodeAt(0);
  if (c >= 0xac00 && c <= 0xd7a3) return (c - 0xac00) % 28; // 0 = 받침 없음, 8 = ㄹ
  if (/[0-9]/.test(ch)) return [1, 8, 0, 1, 0, 0, 1, 8, 8, 0][ch]; // 영 일 이 삼 사 오 육 칠 팔 구
  return /[lmnr]/i.test(ch) ? 1 : 0;
}
function josa(text) {
  return String(text).replace(/(을\(를\)|를\(을\)|이\(가\)|가\(이\)|은\(는\)|는\(은\)|와\(과\)|과\(와\)|\(으\)로|\(이\))/g, (m, j, at, all) => {
    const before = all.slice(0, at).replace(/[\s」』"'”’)\]!?….,~·]+$/, '');
    const last = before.slice(-1);
    if (!last) return JOSA[j][0];
    const b = batchim(last);
    if (j === '(으)로') return b && b !== 8 ? '으로' : '로';
    return b ? JOSA[j][0] : JOSA[j][1];
  });
}

async function typeInto(el, text, voice) {
  text = josa(text);
  el.innerHTML = '';
  let done = false;
  typing = () => { done = true; };
  const ms = G.skip ? 0 : TEXT_MS[SETTINGS.textSpeed];
  if (ms) {
    // 강조 구간을 나눠 한 글자씩 붙인다
    const segs = text.split(/(\[\[.+?\]\])/).filter(Boolean).map((x) => (x.startsWith('[[') ? [x.slice(2, -2), true] : [x, false]));
    let i = 0;
    for (const [seg, em] of segs) {
      const node = em ? el.appendChild(document.createElement('em')) : el;
      for (const ch of seg) {
        if (done) break;
        if (em) node.textContent += ch; else node.insertAdjacentText('beforeend', ch);
        if (voice && ch.trim() && i++ % 3 === 0) sfx('blip', { rate: voice, vol: 0.3 });
        await sleep(ms * (PAUSE[ch] || 1) * (em ? 2.2 : 1));
      }
    }
  }
  el.innerHTML = markup(text);
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
  if (!G.skip && performance.now() < bgUntil) await sleep(bgUntil - performance.now());
  const tb = $('#textbox');
  tb.classList.remove('hidden');
  // 'tip': 조작 안내. 인물 대사가 아니라 게임이 하는 말
  const tip = who === 'tip';
  tb.classList.toggle('narr', !who || tip);
  tb.classList.toggle('tip', tip);
  if (tip) {
    $('#tb-name').textContent = '도움말';
    $('#tb-name').style.background = '';
    $('#tb-name').style.setProperty('--name-accent', '#8fa0c8');
    focusChar(null);
  } else if (who && CHARACTERS[who]) {
    if (face && onStage[who]) show(who, face, onStage[who].dataset.pos);
    $('#tb-name').textContent = CHARACTERS[who].name;
    $('#tb-name').style.background = CHARACTERS[who].accent;
    $('#tb-name').style.setProperty('--name-accent', CHARACTERS[who].accent);
    focusChar(onStage[who] ? who : null);
  } else {
    $('#tb-name').textContent = '';
    focusChar(null);
  }
  // (전화) 로 시작하면 전화 너머 목소리, 괄호로 감싼 말은 속마음
  const phone = /^\(전화\)\s*/.test(text);
  if (phone) text = text.replace(/^\(전화\)\s*/, '');
  tb.classList.toggle('phone', phone);
  tb.classList.toggle('thought', !phone && /^\(.*\)$/.test(text));
  // 화면에 상반신이 없거나 퍼즐·네임 화면 위라면 얼굴을 대사창에
  const over = !$('#puzzle').classList.contains('hidden') || document.querySelector('.name-screen') || (typeof EX !== 'undefined' && EX);
  setFace(who && CHARACTERS[who] && (!onStage[who] || over) ? who : null, face);
  const ch = who && CHARACTERS[who];
  LOG.push({ name: ch ? ch.name : '', color: ch ? ch.accent : '', text: josa(plain(text)) });
  // 짧은 외침은 대사창이 들썩인다
  const shout = !!who && /!$/.test(text) && text.length <= 14;
  tb.classList.toggle('jolt', false);
  if (shout) { void tb.offsetWidth; tb.classList.add('jolt'); }
  // 대사에 따라 몸짓: 외침은 들썩, 물음은 갸웃. 강조 단어가 있으면 화면이 말하는 사람 쪽으로 살짝 당겨진다.
  const body = onStage[who];
  if (body && !SETTINGS.fxReduce) {
    const g = /[!！]$/.test(text) ? 're-hop' : /[?？]$/.test(text) ? 're-tilt' : null;
    if (g) { body.classList.remove('re-hop', 're-tilt'); void body.offsetWidth; body.classList.add(g); setTimeout(() => body.classList.remove(g), 500); }
  }
  const pull = body && /\[\[/.test(text) && !$('#stage').dataset.zoom && !SETTINGS.fxReduce;
  if (pull) FX.zoom(body.dataset.pos);
  await typeInto($('#tb-text'), text, VOICE[who]);
  $('#tb-next').classList.remove('hidden');
  await waitAdvance(text.length);
  if (pull) FX.zoom(null);
  $('#tb-next').classList.add('hidden');
}

// ---------- 말하는 사람 얼굴 ----------
// 상반신이 화면에 없을 때(퍼즐·탐색·전화) 대사창 왼쪽에 얼굴을 잘라 보여 준다
const FACE_POS = { towa: '50% 46%' };
// 그림마다 머리가 있는 자리를 찾아(투명 배경 기준) 얼굴이 칸 가운데에 오게 자른다. 결과는 퍼센트라 칸 크기와 상관없다.
const FACE_CROP = {};
function faceCrop(src) {
  if (FACE_CROP[src] !== undefined) return FACE_CROP[src];
  FACE_CROP[src] = null;
  const img = new Image();
  img.onload = () => {
    const w = 128, h = Math.round(img.height * w / img.width);
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d'); x.drawImage(img, 0, 0, w, h);
    faceOk[src] = true;
    let d; try { d = x.getImageData(0, 0, w, h).data; } catch { FACE_CROP[src] = ''; return faceReady(src); }
    const op = (i, j) => d[(j * w + i) * 4 + 3] > 40;
    let top = -1;
    for (let j = 0; j < h && top < 0; j++) { let n = 0; for (let i = 0; i < w; i++) if (op(i, j)) n++; if (n >= 4) top = j; }
    if (top < 0 || top > h * 0.6) { FACE_CROP[src] = ''; return faceReady(src); } // 배경이 꽉 찬 그림이면 기본값
    // 정수리부터 그림 높이 10%의 불투명 픽셀 가로 평균 = 머리 가운데. 칸은 그림 너비의 절반, 정수리 조금 위~턱 아래까지
    let sx = 0, sn = 0;
    for (let j = top; j < top + h * 0.1; j++) for (let i = 0; i < w; i++) if (op(i, j)) { sx += i; sn++; }
    const cx = sx / sn, side = w * 0.5;
    const cy = top + side * 0.8;
    const bw = w / side, bh = h / side;
    const ox = Math.max(0, Math.min(bw - 1, (cx - side / 2) / side)), oy = Math.max(0, Math.min(bh - 1, (cy - side / 2) / side));
    FACE_CROP[src] = `background-size:${(bw * 100).toFixed(1)}% auto;background-position:${(ox / (bw - 1) * 100).toFixed(1)}% ${(oy / (bh - 1) * 100).toFixed(1)}%`;
    faceReady(src);
  };
  img.onerror = () => { FACE_CROP[src] = ''; faceOk[src] = false; };
  img.src = src;
  return null;
}
// 자르기 계산이 끝나면 그 그림을 쓰는 얼굴 칸을 고치고, 대사창 얼굴은 그때 연다(잘리기 전 그림이 잠깐 보이지 않게)
function faceReady(src) {
  document.querySelectorAll('#tb-face, .pz-face, .ex-face').forEach((el) => {
    if (!el.style.backgroundImage.includes(src)) return;
    el.setAttribute('style', faceStyle2(src));
    if (el.id === 'tb-face') $('#textbox').classList.add('has-face');
  });
}
const faceStyle2 = (src) => `background-image:url(${src});${FACE_CROP[src] || 'background-position:50% 19%'}`;
function faceStyle(who, face) {
  const f = face || (onStage[who] && onStage[who].dataset.face) || CHARACTERS[who].faces[0];
  const src = ASSET.portrait(who, f);
  return `background-image:url(${src});${faceCrop(src) || `background-position:${FACE_POS[who] || '50% 19%'}`}`;
}
const faceOk = {};
function setFace(who, face) {
  const tb = $('#textbox'), el = $('#tb-face');
  if (!who) { tb.classList.remove('has-face'); return; }
  let f = face || CHARACTERS[who].faces[0];
  f = FACE_USED[who + ':' + f] || f;
  // 그 표정 그림이 없다고 이미 알면 기본 표정부터 있는 것으로
  if (faceOk[ASSET.portrait(who, f)] === false) f = CHARACTERS[who].faces.find((x) => faceOk[ASSET.portrait(who, x)] !== false) || f;
  const src = ASSET.portrait(who, f);
  el.setAttribute('style', faceStyle(who, f));
  if (faceOk[src] === false) { tb.classList.remove('has-face'); return; }
  // 그림이 있고 얼굴 자르기까지 끝난 뒤에만 얼굴 칸을 연다 (없는 그림이면 빈 네모, 계산 전이면 머리카락만 잠깐 보인다)
  const ready = typeof FACE_CROP[src] === 'string';
  if (faceOk[src] && ready) tb.classList.add('has-face'); else tb.classList.remove('has-face');
  if (faceOk[src] === undefined && FACE_CROP[src] !== null) {
    const probe = new Image();
    probe.onload = () => { faceOk[src] = true; if (el.style.backgroundImage.includes(src)) tb.classList.add('has-face'); };
    probe.onerror = () => {
      faceOk[src] = false;
      if (!el.style.backgroundImage.includes(src)) return;
      tb.classList.remove('has-face');
      if (f !== CHARACTERS[who].faces[0]) setFace(who, CHARACTERS[who].faces[0]); // 기본 표정으로 다시
    };
    probe.src = src;
  }
}
// 퍼즐 화면 아래 안내줄: "토와: …" 앞에 얼굴을 붙인다
const SAY_WHO = { '토와': 'towa', '레이': 'rei', '코하루': 'koharu' };
function sayBar(msg) {
  const who = SAY_WHO[(msg.match(/^(\S+?):/) || [])[1]];
  msg = josa(msg);
  return who ? `<span class="pz-face" style="${faceStyle(who)}"></span>${msg}` : msg;
}

async function sayAll(lines) {
  for (const [who, text, face] of lines) await say(who, text, face);
}

function hideText() { $('#textbox').classList.add('hidden'); focusChar(null); }

// 그림을 끌어 옮기는 브라우저 기본 동작을 막는다(퍼즐 끌어 놓기는 포인터 이벤트라 영향 없음)
$('#stage').addEventListener('dragstart', (e) => e.preventDefault());

// 클릭/키로 대사 넘기기
$('#stage').addEventListener('click', (e) => {
  if (e.target.closest('button, #modal, #choices, #puzzle, #actions, .tr-panel, #explore, .title-screen')) return;
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
  // 고르는 동안 시간이 멈춘 것처럼 화면이 가라앉는다
  $('#stage').classList.add('fx-choice');
  return new Promise((resolve) => {
    options.forEach((text, i) => {
      const b = document.createElement('button');
      b.className = 'ch-btn';
      b.textContent = text;
      b.onclick = () => { sfx('select'); box.classList.add('hidden'); box.innerHTML = ''; $('#stage').classList.remove('fx-choice'); resolve(i); };
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
  g.innerHTML = text ? `<b>목표</b> ${josa(text)}` : '';
  // 목표가 두 줄이 되면 그 아래 패널(증언 번호 등)이 같이 내려간다
  $('#stage').style.setProperty('--goal-h', (text ? g.offsetHeight : 0) + 'px');
}

async function banner(text, sub = '', ms = 1800, cls = '') {
  if (cls !== 'objection') sfx('banner', { vol: 0.7 });
  if (G.skip) ms = Math.min(ms, 500);
  const b = $('#banner');
  b.className = cls;
  b.innerHTML = `<div class="bn-main">${josa(text)}</div>${sub ? `<div class="bn-sub">${josa(sub)}</div>` : ''}`;
  await sleep(ms);
  b.className = 'hidden';
}

let toastT = null;
function toast(text) {
  const t = $('#toast');
  t.textContent = josa(text);
  t.classList.remove('hidden');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.add('hidden'), 2200);
}

// ---------- 모달 ----------

function openModal(html, cls = '') {
  $('#toast').classList.add('hidden'); // 창이 뜨면 이전 알림은 걷는다
  const m = $('#modal');
  m.className = cls;
  m.innerHTML = `<div class="md-box">${html}</div>`;
  G.busyModal = true;
  setMode(null);
  return m;
}
function closeModal() { $('#modal').className = 'hidden'; $('#modal').innerHTML = ''; G.busyModal = false; }

// 컷을 골라야 하는 모달. filter로 고를 수 있는 컷 제한. 취소하면 null.
function pickCut(title, sub, { cancel = true, only = null, items = false } = {}) {
  const all = items ? [...G.cuts, ...G.items] : G.cuts;
  const ids = only ? only.filter((id) => all.includes(id)) : all;
  const m = openModal(`<div class="md-title">${title}</div><div class="md-sub">${sub || ''}</div><div class="md-grid${ids.length <= 5 ? ' few' : ''}"></div>${cancel ? '<button class="md-cancel">취소</button>' : ''}`, 'pick');
  const grid = m.querySelector('.md-grid');
  // 8장까지는 두 줄 안에 다 보이게, 그보다 많으면 5열로 두고 컷 목록만 위아래로 넘긴다(글자가 읽힐 크기 유지)
  const n = ids.length;
  const cols = n <= 3 ? Math.max(n, 1) : n <= 8 ? 4 : 5;
  grid.style.gridTemplateColumns = n <= 3 ? `repeat(${cols}, 320px)` : `repeat(${cols}, minmax(0, 1fr))`;
  grid.style.justifyContent = 'center';
  grid.classList.toggle('many', n > 8);
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

// 대사 조각 고르기. 모양(외침/보통)은 힌트로만 보여 주고, 어느 조각이든 넣어 볼 수 있다.
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
  FX.echo();
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

// 물증(메모·물건): 컷처럼 반박에 내밀 수 있다
function gainItem(id) {
  if (G.items.includes(id)) return Promise.resolve();
  G.items.push(id);
  sfx('place');
  const m = openModal('<div class="md-title gain">물증을 손에 넣었다</div><div class="md-one"></div><div class="md-sub">수첩의 [물증] 탭에 들어갔다.</div><button class="md-ok">확인</button>', 'gain');
  m.querySelector('.md-one').appendChild(cutView(id));
  return new Promise((r) => { m.querySelector('.md-ok').onclick = () => { closeModal(); r(); }; });
}

// 단어 조각: 네임(가설) 빈칸에 넣는 말. 조용히 얻고 알림만 띄운다
function gainWord(id) {
  if (!WORDS[id] || G.words.includes(id)) return;
  G.words.push(id);
  toast(`단어 「${WORDS[id].text}」`);
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
    <div class="nb-tabs"><button data-tab="case" class="on">사건</button><button data-tab="cuts">컷 ${G.cuts.length}</button><button data-tab="memo">메모 ${(G.marks || []).length}</button><button data-tab="items">물증 ${G.items.length}</button><button data-tab="lines">대사 조각 ${G.lines.length}</button><button data-tab="words">단어 ${G.words.length}</button><button data-tab="people">인물 ${met.length}</button></div>
    <div class="nb-page" data-page="case"><div class="nb-case"></div></div>
    <div class="nb-page hidden" data-page="cuts"><div class="md-grid"></div></div>
    <div class="nb-page hidden" data-page="memo"><div class="nb-memo"></div></div>
    <div class="nb-page hidden" data-page="items"><div class="md-grid nb-items"></div></div>
    <div class="nb-page hidden" data-page="words"><div class="nb-words"></div></div>
    <div class="nb-page hidden" data-page="lines"><div class="md-lines"></div></div>
    <div class="nb-page hidden" data-page="people"><div class="nb-people"></div></div>
    <button class="md-cancel">닫기</button>`, 'note');
  const grid = m.querySelector('.md-grid');
  G.cuts.forEach((id) => grid.appendChild(cutView(id, { fills: G.fills })));
  if (!G.cuts.length) grid.innerHTML = '<div class="md-empty">아직 모은 컷이 없다.</div>';
  const ig = m.querySelector('.nb-items');
  G.items.forEach((id) => ig.appendChild(cutView(id)));
  if (!G.items.length) ig.innerHTML = '<div class="md-empty">아직 물증이 없다.</div>';
  m.querySelector('.nb-words').innerHTML = G.words.map((w) => `<span class="word-chip cat-${WORDS[w].cat}">${WORDS[w].text}</span>`).join('') || '<div class="md-empty">아직 단어 조각이 없다. 컷을 크게 보고 수상한 곳을 짚거나, 증언을 파고들자.</div>';
  const lines = m.querySelector('.md-lines');
  G.lines.forEach((id) => lines.insertAdjacentHTML('beforeend', `<div class="line-btn static"><b>"${LINES[id].text}"</b><small>${LINES[id].from}</small></div>`));
  Object.entries(G.fills).forEach(([cut, id]) => lines.insertAdjacentHTML('beforeend', `<div class="line-btn static used"><b>"${LINES[id].text}"</b><small>「${CUTS[cut].title}」 말풍선에 넣음</small></div>`));
  if (!lines.children.length) lines.innerHTML = '<div class="md-empty">아직 대사 조각이 없다. 증언을 [파고들어] 모아 보자.</div>';
  m.querySelector('.nb-people').innerHTML = met.map((k) => `<div class="nb-person"><img src="${ASSET.portrait(k, CHARACTERS[k].faces[0])}" alt=""><div><b style="color:${CHARACTERS[k].accent}">${CHARACTERS[k].name}</b><p>${PROFILES[k]}</p></div></div>`).join('') || '<div class="md-empty">아직 만난 사람이 없다.</div>';
  m.querySelector('.nb-case').innerHTML = typeof casePage === 'function' ? casePage() : '';
  m.querySelector('.nb-memo').innerHTML = (G.marks || []).map((k) => `<div class="line-btn static"><b>${k.who}</b> 「${k.text}」</div>`).join('') || '<div class="md-empty">아직 표시한 증언이 없다. 심문 중에 수상한 증언에서 [표시]를 눌러 두자.</div>';
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
    probe.onload = () => { const el = $('#cg'); el.src = probe.src; el.classList.add('on'); $('#stage').classList.add('cg-on'); resolve(true); };
    probe.onerror = () => resolve(false);
    probe.src = ASSET.cg(id);
  });
}
function cgEnd() { $('#cg').classList.remove('on'); $('#stage').classList.remove('cg-on'); }

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
      <label>글자 크기</label>${seg('textSize', ['작게', '보통', '크게'])}
      <label>화면 흔들림</label>${seg('shake', ['켜기', '끄기'])}
      <label>화면 효과</label>${seg('fxReduce', ['보통', '줄이기 (번쩍임·반전 끔)'])}
      <label>플레이 기록</label><div class="set-seg set-log"><button data-log="export">플레이 기록 내보내기</button><button data-log="clear">기록 지우기</button></div>
    </div>
    <div class="set-help">대사 넘기기: 클릭 · Space · Enter　|　Ctrl 누르고 있기: 빨리 넘기기　|　휠 위로: 대사 기록</div>
    <button class="md-cancel">닫기</button>`, 'settings');
  // 플레이 기록: 내보내기 / 지우기(한 번 더 눌러야 지운다)
  m.querySelectorAll('[data-log]').forEach((b) => (b.onclick = (e) => {
    e.stopPropagation(); sfx('select');
    if (b.dataset.log === 'export') return exportPlaylog();
    if (b.dataset.armed) { PLOG.clear(); b.textContent = '지웠다'; delete b.dataset.armed; return; }
    b.dataset.armed = '1'; b.textContent = '한 번 더 누르면 지운다';
  }));
  m.querySelectorAll('.set-seg:not(.set-log) button').forEach((b) => (b.onclick = () => {
    const seg = b.parentElement;
    SETTINGS[seg.dataset.key] = Number(b.dataset.v);
    seg.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
    saveSettings(); sfx('select');
  }));
  m.querySelectorAll('input[type=range]').forEach((r) => (r.oninput = () => { SETTINGS[r.dataset.key] = Number(r.value); saveSettings(); }));
  m.querySelectorAll('input[data-key=sfx]').forEach((r) => (r.onchange = () => sfx('select')));
  m.querySelector('.md-cancel').onclick = closeModal;
}
