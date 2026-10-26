// 게임 진행: 장(CHAPTERS) 이어서 하기, 자동 저장, 타이틀. 장마다 script_chN.js가 CHAPTERS[N]을 채운다.

// ---------- 장면 찾기 ----------

function findScene(id) {
  for (const [ch, C] of Object.entries(CHAPTERS)) {
    const i = C.scenes.findIndex(([sid]) => sid === id);
    if (i >= 0) return { ch: Number(ch), i };
  }
  return null;
}
const sceneLabel = (id) => { const f = findScene(id); return f ? `${f.ch}장 · ${CHAPTERS[f.ch].scenes[f.i][1]}` : ''; };

// 여백 엔딩 조건: 장마다 하나씩 있는 감정 선택 (1장 히마리, 2장 루루, 3장 스케치북, 4장 하야카, 5장 배지)
const MARGIN_FLAGS = ['yohaku1', 'yohaku2', 'sketch3', 'rescueShown', 'badgeBack'];

// ---------- 저장 ----------
// 장면이 시작될 때마다 자동 저장. 타이틀의 [이어하기]가 그 장면부터 다시 시작한다.
const SAVE_KEY = 'gaha-save';
function loadSave() {
  const s = loadJSON(SAVE_KEY);
  if (s) return s;
  const old = loadJSON('gaha-ch1-save'); // 1장만 있던 때의 저장
  return old ? Object.assign({ ch: 1 }, old) : null;
}
function saveProgress(ch, scene) {
  saveJSON(SAVE_KEY, { ch, scene, cuts: G.cuts, lines: G.lines, fills: G.fills, items: G.items, words: G.words,
    koharuLeft: G.koharuLeft, flags: G.flags, stats: G.stats, at: Date.now() });
}

// 장 시작 상태: 저장이 있으면 그것, 없으면 그 장면의 기본 소지품
function loadState(ch, scene, saved) {
  const s = saved || CHAPTERS[ch].state[scene] || {};
  G.cuts = (s.cuts || []).slice();
  G.lines = (s.lines || []).slice();
  G.fills = Object.assign({}, s.fills || {});
  G.items = (s.items || []).slice();
  G.words = (s.words || []).slice();
  G.koharuLeft = saved ? saved.koharuLeft : diff().koharu;
  G.stats = Object.assign({ wrong: 0, hints: 0, help: 0, accuse: null }, saved ? saved.stats : {});
  G.flags = Object.assign({}, saved ? saved.flags : {});
}

async function playFrom(scene, saved) {
  const found = findScene(scene);
  if (!found) return titleScreen();
  let { ch, i: start } = found;
  loadState(ch, scene, saved);
  LOG.length = 0;
  // 장면 선택으로 중간부터 시작하면 앞 장면에서 만난 인물을 수첩에 미리 넣는다
  if (!saved) G.flags.met = CHAPTERS[ch].scenes.slice(0, start).flatMap(([id]) => (CHAPTERS[ch].cast || {})[id] || []);
  for (;;) {
    const C = CHAPTERS[ch];
    for (let i = start; i < C.scenes.length; i++) {
      const id = C.scenes[i][0];
      saveProgress(ch, id);
      await fade(true, 400);
      clearChars(); hideText(); goal(''); FX.zoom(null); FX.mood(null); FX.memory(false);
      bgm((C.bgm || {})[id]);
      const run = C.fn[id]();
      setTimeout(() => fade(false, 600), 60);
      await run;
    }
    try { localStorage.setItem(`gaha-ch${ch}-clear`, '1'); } catch { /* 저장 불가 */ }
    // 다음 장이 있으면 이어서. 장이 바뀌면 소지품은 새로, 튜토리얼 표시 등은 유지
    if (!CHAPTERS[ch + 1]) break;
    const keep = { trialTut: G.flags.trialTut, puzzleTut: G.flags.puzzleTut, simTut: G.flags.simTut, discardTut: G.flags.discardTut, timeTut: G.flags.timeTut, met: G.flags.met };
    MARGIN_FLAGS.forEach((f) => { if (G.flags[f]) keep[f] = true; }); // 여백 엔딩 조건은 장을 넘어 이어진다
    ch += 1; start = 0;
    const first = CHAPTERS[ch].scenes[0][0];
    loadState(ch, first, null);
    Object.assign(G.flags, keep);
  }
  try { localStorage.removeItem(SAVE_KEY); localStorage.removeItem('gaha-ch1-save'); } catch { /* 저장 불가 */ }
  await fade(true, 800);
  titleScreen();
  fade(false, 600);
}

// ---------- 원고 평가 ----------
// 장 끝에서 보여 준다. 오답·힌트·도움이 적고 중간 지목을 맞히면 높다.
function manuscriptRank() {
  const st = G.stats;
  let score = 100 - st.wrong * 6 - st.hints * 5 - st.help * 8 + (st.accuse === true ? 15 : 0);
  score = Math.max(0, Math.min(115, score));
  const rank = score >= 100 ? 'S' : score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : 'D';
  return { rank, score, ...st };
}

async function showRank(chTitle) {
  const r = manuscriptRank();
  sfx('correct');
  FX.lines(800, r.rank === 'S' ? '#f2c14e' : '#ffffff');
  const m = openModal(`<div class="rank-box"><div class="rank-head">원고 평가 · ${chTitle}</div>
    <div class="rank-letter">${r.rank}</div>
    <div class="rank-rows">
      <div><span>틀린 반박·배열</span><b>${r.wrong}</b></div>
      <div><span>토와 힌트</span><b>${r.hints}</b></div>
      <div><span>코하루 도움</span><b>${r.help}</b></div>
      <div><span>중간 지목</span><b>${r.accuse === true ? '정답' : r.accuse === false ? '오판' : '—'}</b></div>
    </div><button class="md-ok">확인</button></div>`, 'rank');
  await new Promise((res) => { m.querySelector('.md-ok').onclick = () => { closeModal(); res(); }; });
}

// ---------- 타이틀 ----------

function titleScreen() {
  clearChars();
  hideText();
  goal('');
  hud(false);
  bgm('title');
  const save = loadSave();
  const chs = Object.keys(CHAPTERS).map(Number);
  const t = document.createElement('div');
  t.className = 'title-screen';
  t.innerHTML = `
    <div class="ts-bg" style="background-image:url(${ASSET.bg('night')})"></div>
    <div class="ts-shade"></div>
    <img class="ts-char ts-koharu" src="${ASSET.portrait('koharu', 'happy')}" alt="">
    <img class="ts-char ts-rei" src="${ASSET.portrait('rei', 'normal')}" alt="">
    <div class="ts-logo">
      <div class="ts-chapter">CHAPTER ${save ? save.ch : 1} · ${CHAPTERS[save ? save.ch : 1].title}</div>
      <h1><span>같은 하루,</span><span class="ts-l2">다른 칸</span></h1>
      <div class="ts-tag">같은 밤, 서로 다르게 기억된 장면들</div>
    </div>
    <nav class="ts-menu">
      ${save ? `<button id="t-cont" class="ts-btn primary">이어하기<small>${sceneLabel(save.scene)}</small></button>` : ''}
      <button id="t-start" class="ts-btn${save ? '' : ' primary'}">처음부터</button>
      <button id="t-load" class="ts-btn">불러오기</button>
      <button id="t-select" class="ts-btn">장면 선택</button>
      <button id="t-gallery" class="ts-btn small">갤러리</button>
    </nav>
    <div class="ts-scenes hidden">
      <div class="ts-scenes-head">장면 선택 <button class="ts-close" aria-label="닫기">✕</button></div>
      <ol>${chs.map((ch) => `<li class="ts-ch">${ch}장 「${CHAPTERS[ch].title}」</li>` + CHAPTERS[ch].scenes.map(([id, label], i) =>
        `<li><button data-scene="${id}"><b>${String(i + 1).padStart(2, '0')}</b>${label}</button></li>`).join('')).join('')}</ol>
    </div>
    <div class="ts-hint">대사 넘기기 클릭 · Space</div>`;
  $('#stage').appendChild(t);
  // 키아트(GPT 이미지)가 있으면 배경과 캐릭터를 그걸로 바꾼다
  const key = new Image();
  key.onload = () => { t.classList.add('has-key'); t.querySelector('.ts-bg').style.backgroundImage = `url(${key.src})`; };
  key.src = ASSET.title();
  const go = (scene, saved) => {
    sfx('select');
    t.classList.add('leaving');
    setTimeout(() => { t.remove(); hud(true); playFrom(scene, saved); }, 450);
  };
  const list = t.querySelector('.ts-scenes');
  t.querySelector('#t-start').onclick = () => go(CHAPTERS[1].scenes[0][0]);
  if (save) t.querySelector('#t-cont').onclick = () => go(save.scene, save);
  t.querySelector('#t-select').onclick = () => list.classList.remove('hidden');
  t.querySelector('#t-load').onclick = () => { sfx('select'); openSlots('load'); };
  t.querySelector('#t-gallery').onclick = () => { sfx('select'); openGallery(); };
  t.querySelector('.ts-close').onclick = () => list.classList.add('hidden');
  list.querySelectorAll('[data-scene]').forEach((b) => (b.onclick = () => go(b.dataset.scene)));
}

$('#btn-save').onclick = (e) => { e.stopPropagation(); openSlots('save'); };

hud(true);
const jump = location.hash.slice(1);
if (findScene(jump)) playFrom(jump); else titleScreen();
