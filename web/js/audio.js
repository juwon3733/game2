// 소리와 설정. BGM은 반복 재생하고 장면이 바뀌면 교차 페이드, 효과음은 겹쳐서 재생.
// 파일이 없거나 브라우저가 막으면 조용히 넘어간다. 첫 클릭/키 입력 전에는 브라우저가 소리를 막는다.

function loadJSON(k) { try { return JSON.parse(localStorage.getItem(k)) || null; } catch { return null; } }
function saveJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* 저장 불가(사생활 모드 등) */ } }

// textSpeed: 0 느림 ~ 3 즉시, autoWait: 자동 진행 대기 배율
const SETTINGS = Object.assign({ textSpeed: 1, autoWait: 1, bgm: 0.55, sfx: 0.8, fxReduce: 0 }, loadJSON('gaha-settings') || {});

// 추리 규칙 (난이도 선택 없음. 이 게임의 기본 난이도)
//  - 컷 아래 설명 없음: 그림 속 단서를 직접 읽는다 (크게 보기에서만 설명)
//  - 퍼즐 오답: 어느 칸 사이가 이상한지만 알려 주고, 무엇이 거꾸로인지는 말하지 않는다
//  - 토와 힌트 2번, 코하루 도움 1번, 증인의 마음 3칸, 결론은 가장 정확한 컷만 정답
const RULES = { caption: false, zoomDesc: true, feedback: 'pair', hints: 2, koharu: 1, ink: 3, strict: true };
const diff = () => RULES;
function saveSettings() { saveJSON('gaha-settings', SETTINGS); applyVolumes(); }

// 곡 파일은 tools/compose/build.py가 반복 길이에 딱 맞게 렌더링한다(끝이 처음으로 자연스럽게 이어짐).
const MUSIC = {
  title:    { file: 'assets/audio/bgm_title.mp3' },
  office:   { file: 'assets/audio/bgm_office.mp3' },
  explore:  { file: 'assets/audio/bgm_explore.mp3' },
  trial:    { file: 'assets/audio/bgm_trial.mp3' },
  tension:  { file: 'assets/audio/bgm_tension.mp3' },
  truth:    { file: 'assets/audio/bgm_truth.mp3' },
  epilogue: { file: 'assets/audio/bgm_epilogue.mp3' },
  live:     { file: 'assets/audio/bgm_live.mp3' },     // 2장: 밴드의 곡 (기억 속처럼 먹먹하게)
  encore:   { file: 'assets/audio/bgm_encore.mp3' },   // 2장: 기타 하나로 부르는 앙코르
  tendo:    { file: 'assets/audio/bgm_tendo.mp3' },    // 2장: 사장 텐도의 심문
  madoka:   { file: 'assets/audio/bgm_madoka.mp3' },   // 3장: 점술가 마도카
  fire:     { file: 'assets/audio/bgm_fire.mp3' },     // 4장: 불탄 목욕탕
  editor:   { file: 'assets/audio/bgm_editor.mp3' },   // 5장: 편집국
  final:    { file: 'assets/audio/bgm_final.mp3' },    // 종장: 등대
  chase:    { file: 'assets/audio/bgm_chase.mp3' },    // 심문 막판: 반박이 이어질 때
};
// 배경 아래에 아주 작게 까는 환경음 (tools/compose/ambience.py)
const AMBIENCE = { sea: 'assets/audio/amb_sea.mp3', rain: 'assets/audio/amb_rain.mp3', crowd: 'assets/audio/amb_crowd.mp3', fire: 'assets/audio/amb_fire.mp3', hum: 'assets/audio/amb_hum.mp3' };
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

// 환경음 바꾸기. null이면 끈다. 배경음악 볼륨을 따라가고 그보다 훨씬 작게.
async function amb(id) {
  AU.wantAmb = id;
  const c = AU.ctx;
  if (!c || c.state !== 'running') return;
  if (AU.amb && AU.amb.id === id) return;
  const old = AU.amb;
  AU.amb = null;
  if (old) { old.gain.gain.setTargetAtTime(0, c.currentTime, 0.4); setTimeout(() => { try { old.src.stop(); } catch { /* 이미 멈춤 */ } }, 2000); }
  if (!id || !AMBIENCE[id]) return;
  const buf = await loadBuf(AMBIENCE[id]);
  if (!buf || AU.wantAmb !== id) return;
  const src = c.createBufferSource();
  src.buffer = buf; src.loop = true;
  const g = c.createGain();
  g.gain.value = 0;
  g.gain.setTargetAtTime(0.22, c.currentTime, 0.6);
  src.connect(g); g.connect(AU.bgm);
  src.start();
  AU.amb = { id, src, gain: g };
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
  if (!c || AU.woke) return;
  AU.woke = true;
  c.resume().then(() => {
    SOUNDS.forEach((n) => loadBuf(`assets/audio/sfx_${n}.wav`));
    if (AU.want && !AU.cur) bgm(AU.want);
    if (AU.wantAmb && !AU.amb) amb(AU.wantAmb);
  });
}, { capture: true }));
