// 소리와 설정. BGM은 반복 재생하고 장면이 바뀌면 교차 페이드, 효과음은 겹쳐서 재생.
// 파일이 없거나 브라우저가 막으면 조용히 넘어간다. 첫 클릭/키 입력 전에는 브라우저가 소리를 막는다.

function loadJSON(k) { try { return JSON.parse(localStorage.getItem(k)) || null; } catch { return null; } }
function saveJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* 저장 불가(사생활 모드 등) */ } }

// textSpeed: 0 느림 ~ 3 즉시, autoWait: 자동 진행 대기 배율
const SETTINGS = Object.assign({ textSpeed: 1, autoWait: 1, bgm: 0.55, sfx: 0.8 }, loadJSON('gaha-settings') || {});
function saveSettings() { saveJSON('gaha-settings', SETTINGS); applyVolumes(); }

// 곡: loop는 반복 구간 길이(초). 파일은 정확히 그 길이로 만들어져 있다(tools/compose).
const MUSIC = {
  title:    { file: 'assets/audio/bgm_title.mp3' },
  office:   { file: 'assets/audio/bgm_office.mp3' },
  explore:  { file: 'assets/audio/bgm_explore.mp3' },
  trial:    { file: 'assets/audio/bgm_trial.mp3' },
  tension:  { file: 'assets/audio/bgm_tension.mp3' },
  truth:    { file: 'assets/audio/bgm_truth.mp3' },
  epilogue: { file: 'assets/audio/bgm_epilogue.mp3' },
};
const SOUNDS = ['blip', 'next', 'select', 'cancel', 'cut', 'objection', 'wrong', 'correct', 'press', 'page', 'place', 'step',
  'chime', 'thud', 'door', 'ghost', 'phone', 'banner', 'save'];

const AU = { ctx: null, bgm: null, sfx: null, bufs: {}, cur: null, want: null };

function audioCtx() {
  if (AU.ctx) return AU.ctx;
  const C = window.AudioContext || window.webkitAudioContext;
  if (!C) return null;
  AU.ctx = new C();
  AU.bgm = AU.ctx.createGain(); AU.bgm.connect(AU.ctx.destination);
  AU.sfx = AU.ctx.createGain(); AU.sfx.connect(AU.ctx.destination);
  applyVolumes();
  return AU.ctx;
}

function applyVolumes() {
  if (!AU.ctx) return;
  AU.bgm.gain.value = SETTINGS.bgm;
  AU.sfx.gain.value = SETTINGS.sfx;
}

function loadBuf(path) {
  if (!AU.bufs[path]) {
    AU.bufs[path] = fetch(path)
      .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(r.status))))
      .then((b) => new Promise((res, rej) => AU.ctx.decodeAudioData(b, res, rej)))
      .catch(() => null);
  }
  return AU.bufs[path];
}

// 곡 바꾸기. null이면 페이드아웃.
async function bgm(id, fade = 1.2) {
  AU.want = id;
  const c = AU.ctx;
  if (!c || c.state !== 'running') return;
  if (AU.cur && AU.cur.id === id) return;
  const old = AU.cur;
  AU.cur = null;
  if (old) {
    old.gain.gain.setTargetAtTime(0, c.currentTime, fade / 4);
    setTimeout(() => { try { old.src.stop(); } catch { /* 이미 멈춤 */ } }, fade * 1500);
  }
  if (!id || !MUSIC[id]) return;
  const buf = await loadBuf(MUSIC[id].file);
  if (!buf || AU.want !== id || (AU.cur && AU.cur.id === id)) return;
  const src = c.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  const g = c.createGain();
  g.gain.value = 0;
  g.gain.setTargetAtTime(1, c.currentTime, fade / 4);
  src.connect(g); g.connect(AU.bgm);
  src.start();
  AU.cur = { id, src, gain: g };
}

function sfx(name, { rate = 1, vol = 1 } = {}) {
  const c = AU.ctx;
  if (!c || c.state !== 'running' || SETTINGS.sfx <= 0) return;
  loadBuf(`assets/audio/sfx_${name}.wav`).then((buf) => {
    if (!buf) return;
    const s = c.createBufferSource();
    s.buffer = buf;
    s.playbackRate.value = rate;
    const g = c.createGain();
    g.gain.value = vol;
    s.connect(g); g.connect(AU.sfx);
    s.start();
  });
}

// 첫 입력에서 소리를 깨우고, 기다리던 곡과 효과음을 미리 받아 둔다
['pointerdown', 'keydown', 'touchstart'].forEach((ev) => addEventListener(ev, () => {
  const c = audioCtx();
  if (!c || c.state === 'running') return;
  c.resume().then(() => {
    SOUNDS.forEach((n) => loadBuf(`assets/audio/sfx_${n}.wav`));
    if (AU.want) { const w = AU.want; AU.want = null; bgm(w); }
  });
}, { capture: true }));
