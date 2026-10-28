// 게임 진행: 장(CHAPTERS) 이어서 하기, 자동 저장, 타이틀. 장마다 script_chN.js가 CHAPTERS[N]을 채운다.

// ---------- 공개판 ----------
// 배포 주소에서는 1장만 보인다(체험판). 내 컴퓨터(localhost)나 주소 끝 ?dev 로 열면 전 장이 열린다.
// #장면id 로 바로 들어가기도 개발판에서만 된다.
const DEV = /^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(location.hostname) || new URLSearchParams(location.search).has('dev');
const PUBLIC_CHAPTERS = 1;
if (!DEV) Object.keys(CHAPTERS).forEach((k) => { if (Number(k) > PUBLIC_CHAPTERS) delete CHAPTERS[k]; });

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
// 여백 조건: 장 끝 감정 선택에서 말 대신 컷·물건을 건네는 보기(늘 세 번째)를 고르면 켜진다. 고른 순간 알려 준다
function marginMark(flag) {
  G.flags[flag] = true;
  sfx('chime');
  toast(`여백에 한 칸이 남았다 (${MARGIN_FLAGS.filter((f) => G.flags[f]).length} / ${MARGIN_FLAGS.length})`);
}

// 이름이 밝혀지는 인물: 장면 선택으로 중간부터 들어가도 그 시점의 이름으로 보이게
function revealNames(ch, id) {
  CHARACTERS.ren.name = ch >= 4 ? '렌' : '???'; // 3장 에필로그는 토와가 이름을 알려 주는 대사에서 바뀐다
  CHARACTERS.shiori.name = ch >= 6 ? '시오리' : '???';
}

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
    koharuLeft: G.koharuLeft, flags: G.flags, stats: G.stats, marks: G.marks || [], at: Date.now() });
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
  G.marks = saved && saved.marks ? saved.marks.slice() : [];
}

async function playFrom(scene, saved) {
  const found = findScene(scene);
  if (!found) return titleScreen();
  let { ch, i: start } = found;
  loadState(ch, scene, saved);
  LOG.length = 0;
  // 장면 선택으로 중간부터 시작하면 앞 장면에서 만난 인물을 수첩에 미리 넣는다
  if (!saved) G.flags.met = CHAPTERS[ch].scenes.slice(0, start).flatMap(([id]) => (CHAPTERS[ch].cast || {})[id] || []);
  // 장면 선택으로 들어가면 앞 장들에서 이미 고른 여백 조건(기록에 남은 것)을 이어받는다
  if (!saved) ((loadJSON('gaha-records') || {}).margin || []).forEach((f) => { if (MARGIN_FLAGS.includes(f)) G.flags[f] = true; });
  let recap = !!saved;
  for (;;) {
    const C = CHAPTERS[ch];
    for (let i = start; i < C.scenes.length; i++) {
      const id = C.scenes[i][0];
      G.ch = ch; G.scene = id;
      PLOG.start(ch, id);
      revealNames(ch, id);
      saveProgress(ch, id);
      if (recap) { recap = false; await previously(); }
      await fade(true, 400);
      clearChars(); hideText(); goal(''); FX.zoom(null); FX.mood(null); FX.memory(false);
      bgm((C.bgm || {})[id]);
      const run = C.fn[id]();
      setTimeout(() => fade(false, 600), 60);
      await run;
    }
    PLOG.end(); // 장이 바뀌면 원고 평가 수치가 0부터 다시 시작하므로 그 전에 닫는다
    try { localStorage.setItem(`gaha-ch${ch}-clear`, '1'); } catch { /* 저장 불가 */ }
    // 다음 장이 있으면 이어서. 장이 바뀌면 소지품은 새로, 튜토리얼 표시 등은 유지
    if (!CHAPTERS[ch + 1]) break;
    await nextPreview(ch + 1);
    const keep = { trialTut: G.flags.trialTut, puzzleTut: G.flags.puzzleTut, simTut: G.flags.simTut, discardTut: G.flags.discardTut, timeTut: G.flags.timeTut, exploreTut: G.flags.exploreTut, bond: G.flags.bond, met: G.flags.met };
    MARGIN_FLAGS.forEach((f) => { if (G.flags[f]) keep[f] = true; }); // 여백 엔딩 조건은 장을 넘어 이어진다
    ch += 1; start = 0;
    const first = CHAPTERS[ch].scenes[0][0];
    loadState(ch, first, null);
    Object.assign(G.flags, keep);
  }
  PLOG.end();
  if (!DEV) await banner('체험판은 여기까지', '2장 「앙코르 없음」은 준비 중이에요', 2800);
  try { localStorage.removeItem(SAVE_KEY); localStorage.removeItem('gaha-ch1-save'); } catch { /* 저장 불가 */ }
  await fade(true, 800);
  titleScreen();
  fade(false, 600);
}

// ---------- 원고 평가 ----------
// 장 끝에서 보여 준다. 오답·힌트·도움이 적고 중간 지목을 맞히면 높다.
function manuscriptRank() {
  const st = G.stats;
  let score = 100 - st.wrong * 3 - st.hints * 5 - st.help * 8 + (st.accuse === true ? 15 : 0);
  score = Math.max(0, Math.min(115, score));
  const rank = score >= 100 ? 'S' : score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : 'D';
  return { rank, score, ...st };
}

async function showRank(chTitle) {
  const r = manuscriptRank();
  saveRecord(G.ch, r);
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
  const save = (() => { const v = loadSave(); return v && findScene(v.scene) ? v : null; })(); // 공개판에선 1장 밖 저장은 없는 셈
  const t = document.createElement('div');
  t.className = 'title-screen';
  t.innerHTML = `
    <div class="ts-bg" style="background-image:url(${ASSET.bg('night')})"></div>
    <div class="ts-shade"></div>
    <img class="ts-char ts-koharu" src="${ASSET.portrait('koharu', 'happy')}" alt="">
    <img class="ts-char ts-rei" src="${ASSET.portrait('rei', 'normal')}" alt="">
    <div class="ts-logo">
      <h1><span>같은 하루,</span><span class="ts-l2">다른 칸</span></h1>
    </div>
    <nav class="ts-menu">
      ${save ? `<button id="t-cont" class="ts-btn primary">이어하기<small>${sceneLabel(save.scene)}</small></button>` : ''}
      <button id="t-start" class="ts-btn${save ? '' : ' primary'}">처음부터</button>
      <button id="t-load" class="ts-btn">불러오기</button>
      <button id="t-gallery" class="ts-btn small">갤러리</button>
      <button id="t-set" class="ts-btn small">설정</button>
    </nav>
    <div class="ts-hint">클릭 · Space로 넘기기</div>`;
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
  t.querySelector('#t-start').onclick = () => go(CHAPTERS[1].scenes[0][0]);
  if (save) t.querySelector('#t-cont').onclick = () => go(save.scene, save);
  t.querySelector('#t-load').onclick = () => { sfx('select'); openSlots('load'); };
  t.querySelector('#t-gallery').onclick = () => { sfx('select'); openGallery(); };
  t.querySelector('#t-set').onclick = (e) => { e.stopPropagation(); sfx('select'); openSettings(); };
}

$('#btn-save').onclick = (e) => { e.stopPropagation(); openSlots('save'); };

hud(true);
const jump = location.hash.slice(1);
// 첫 로딩: 글꼴과 타이틀 그림만 먼저 받고 시작한다(나머지는 쓰일 때 받는다). 3초 넘으면 그냥 시작
applyLook();
(async () => {
  const ld = document.createElement('div');
  ld.id = 'loading';
  ld.innerHTML = '불러오는 중<i></i>';
  document.body.appendChild(ld);
  const img = (src) => new Promise((r) => { const i = new Image(); i.onload = i.onerror = r; i.src = src; });
  await Promise.race([Promise.all([document.fonts ? document.fonts.ready : null, img('assets/title/key.png')]), sleep(3000)]);
  ld.classList.add('out');
  setTimeout(() => ld.remove(), 500);
  if (DEV && findScene(jump)) playFrom(jump); else titleScreen();
})();
