// 결론 몽타주, 갤러리(본 CG·들은 곡·모은 컷), 엔딩 크레딧, 저장 슬롯.

// ---------- 갤러리 기록 ----------
// 플레이어 브라우저에만 남는다. 저장이 막혀 있어도 게임은 그대로 돈다.
const GALLERY_KEY = 'gaha-gallery';
const gallery = () => Object.assign({ cg: [], bgm: [], cuts: [], endings: [] }, loadJSON(GALLERY_KEY) || {});
function remember(kind, id) {
  if (!id) return;
  const g = gallery();
  if (g[kind].includes(id)) return;
  g[kind].push(id);
  saveJSON(GALLERY_KEY, g);
}

// 엔진 함수에 기록을 덧붙인다 (원래 동작은 그대로)
{
  const oCg = cg, oBgm = bgm, oGain = gainCut;
  cg = async (id) => { const ok = await oCg(id); if (ok) remember('cg', id); return ok; };
  bgm = (id, fade) => { remember('bgm', id); return oBgm(id, fade); };
  gainCut = (id) => { remember('cuts', id); return oGain(id); };
}

// ---------- 결론 몽타주 ----------
// 결론이 맞으면 그 장의 컷이 진짜 순서대로 한 장씩 넘어간다.
async function montage(ids) {
  ids = (ids || []).filter((id) => CUTS[id] && !CUTS[id].blank);
  if (!ids.length) return;
  hideText();
  const wrap = document.createElement('div');
  wrap.className = 'montage';
  $('#stage').appendChild(wrap);
  const per = G.skip ? 120 : Math.max(420, Math.min(900, 7000 / ids.length));
  for (let i = 0; i < ids.length; i++) {
    const v = cutView(ids[i], { fills: G.fills, noSpots: true });
    v.classList.add('mt-cut');
    v.style.setProperty('--tilt', `${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg`);
    wrap.appendChild(v);
    sfx('page', { rate: 1 + (i % 4) * 0.06, vol: 0.6 });
    await sleep(per);
    if (i > 0) wrap.children[i - 1].classList.add('mt-old');
  }
  FX.lines(600, '#ffffff');
  await banner('원고 완성', `${ids.length}칸 · 그날의 진짜 순서`, 1500);
  wrap.classList.add('mt-out');
  await sleep(400);
  wrap.remove();
}

// ---------- 엔딩 크레딧 ----------
const ENDING_NAME = { truth: '진실 엔딩 「같은 하루」', edit: '편집 엔딩 「잊어도 돼」', margin: '여백 엔딩 「다음 칸」' };
async function credits(ending) {
  remember('endings', ending);
  const g = gallery();
  const cast = ['rei', 'koharu', 'kurogane', 'towa', 'asagiri', 'shiori',
    'taiga', 'himari', 'ookubo', 'ruru', 'pin', 'aoi', 'kuramochi', 'tendo', 'kirishima',
    'yuki', 'nagi', 'madoka', 'tofu', 'ren', 'hayaka', 'keiko', 'okamoto', 'murase', 'tanabe']
    .filter((id) => CHARACTERS[id]).map((id) => (id === 'shiori' ? '시오리' : CHARACTERS[id].name));
  const box = document.createElement('div');
  box.className = 'credits';
  box.innerHTML = `<div class="cr-roll">
    <h2>같은 하루, 다른 칸</h2>
    <p class="cr-end">${ENDING_NAME[ending] || ''}</p>
    <h3>등장인물</h3>${cast.map((n) => `<p>${n}</p>`).join('')}
    <h3>그리고</h3><p>그날 밤을 기억해 준 모든 사람</p>
    <h3>엔딩</h3><p>${Object.keys(ENDING_NAME).map((k) => (g.endings.includes(k) ? ENDING_NAME[k] : '？？？')).join('<br>')}</p>
    <p class="cr-last">— 끝 —</p></div>`;
  $('#stage').appendChild(box);
  bgm('final');
  await new Promise((res) => {
    const done = () => { box.remove(); res(); };
    box.onclick = done;
    box.querySelector('.cr-roll').addEventListener('animationend', () => setTimeout(done, 1500));
    if (G.skip) setTimeout(done, 300);
  });
}

// ---------- 갤러리 화면 ----------
const MUSIC_NAME = { title: '같은 하루, 다른 칸', office: '잔상과', explore: '현장', trial: '심문', tension: '컷 정리', truth: '진짜 순서',
  epilogue: '여백', live: '크럼블', encore: '앙코르 없음', tendo: '사장실', madoka: '별무늬 숄', fire: '사쿠라유', editor: '편집국',
  final: '등대', chase: '몰아붙이기' };
// 게임에 나오는 CG 순서 (프롬프트는 게임에 안 실리므로 따로 둔다)
const CG_LIST = ['cg_shiori', 'cg_taiga_run', 'cg_rescue', 'cg_page', 'cg_cafe', 'cg_encore', 'cg_twins', 'cg_carry', 'cg_sota', 'cg_margin', 'cg_farewell'];
function openGallery() {
  const g = gallery();
  const cgIds = CG_LIST;
  const tab = (t) => {
    const body = m.querySelector('.gal-body');
    m.querySelectorAll('.gal-tabs button').forEach((b) => b.classList.toggle('on', b.dataset.t === t));
    if (t === 'cg') {
      body.innerHTML = `<div class="gal-grid">${cgIds.map((id) => g.cg.includes(id)
        ? `<button class="gal-cg" data-id="${id}" style="background-image:url(${ASSET.cg(id)})"></button>`
        : '<div class="gal-cg locked">？</div>').join('')}</div>`;
      body.querySelectorAll('.gal-cg[data-id]').forEach((b) => (b.onclick = () => zoomCut(ASSET.cg(b.dataset.id), { title: '', desc: '' })));
    } else if (t === 'bgm') {
      body.innerHTML = `<div class="gal-list">${Object.keys(MUSIC).map((id) => (g.bgm.includes(id)
        ? `<button data-id="${id}">♪ ${MUSIC_NAME[id] || id}</button>` : '<div class="locked">♪ ？？？</div>')).join('')}</div>`;
      body.querySelectorAll('button[data-id]').forEach((b) => (b.onclick = () => { bgm(b.dataset.id); body.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b)); }));
    } else {
      const all = Object.keys(CUTS).filter((id) => !CUTS[id].blank);
      body.innerHTML = `<div class="md-sub">모은 컷 ${all.filter((id) => g.cuts.includes(id)).length} / ${all.length}</div><div class="gal-cuts"></div>`;
      const grid = body.querySelector('.gal-cuts');
      all.filter((id) => g.cuts.includes(id)).forEach((id) => grid.appendChild(cutView(id, { noSpots: true })));
    }
  };
  const m = openModal(`<div class="md-title">갤러리</div>
    <div class="gal-tabs"><button data-t="cg">이벤트 CG</button><button data-t="bgm">음악</button><button data-t="cuts">컷</button></div>
    <div class="gal-body"></div>
    <div class="md-sub">엔딩 ${g.endings.length} / 3</div>
    <button class="md-cancel">닫기</button>`, 'gallery');
  m.querySelectorAll('.gal-tabs button').forEach((b) => (b.onclick = () => tab(b.dataset.t)));
  m.querySelector('.md-cancel').onclick = () => { closeModal(); bgm('title'); };
  tab('cg');
}

// ---------- 저장 슬롯 ----------
// 장면이 시작될 때의 자동 저장을 슬롯에 복사해 둔다. 불러오면 그 장면 처음부터.
const SLOTS = 3;
const slotKey = (i) => `gaha-slot-${i}`;
function slotRow(i, s) {
  if (!s) return `<span class="sl-n">${i + 1}</span><span class="sl-empty">비어 있음</span>`;
  const d = new Date(s.at);
  return `<span class="sl-n">${i + 1}</span><span class="sl-scene">${sceneLabel(s.scene)}</span><small>${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}</small>`;
}
function openSlots(mode) { // 'save' | 'load'
  if (G.busyModal && mode === 'save') return;
  const m = openModal(`<div class="md-title">${mode === 'save' ? '저장' : '불러오기'}</div>
    <div class="md-sub">${mode === 'save' ? '지금 장면의 처음부터 다시 시작할 수 있게 저장한다.' : '저장한 장면의 처음부터 시작한다.'}</div>
    <div class="slot-list">${Array.from({ length: SLOTS }, (_, i) => `<button class="slot" data-i="${i}">${slotRow(i, loadJSON(slotKey(i)))}</button>`).join('')}</div>
    <button class="md-cancel">닫기</button>`, 'slots');
  m.querySelectorAll('.slot').forEach((b) => (b.onclick = () => {
    const i = Number(b.dataset.i);
    if (mode === 'save') {
      const cur = loadJSON(SAVE_KEY);
      if (!cur) return toast('저장할 진행이 없다.');
      saveJSON(slotKey(i), cur);
      sfx('save');
      b.innerHTML = slotRow(i, cur);
      toast(`${i + 1}번 칸에 저장했다.`);
    } else {
      const s = loadJSON(slotKey(i));
      if (!s) return;
      closeModal();
      document.querySelector('.title-screen')?.remove();
      hud(true);
      playFrom(s.scene, s);
    }
  }));
  m.querySelector('.md-cancel').onclick = closeModal;
}
