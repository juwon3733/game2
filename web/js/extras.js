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
    'taiga', 'himari', 'ookubo', 'mitsuru', 'komatsu', 'akari', 'ruru', 'pin', 'aoi', 'kuramochi', 'tendo', 'kirishima',
    'yuki', 'nagi', 'madoka', 'tofu', 'ren', 'hayaka', 'keiko', 'genzo', 'okamoto', 'murase', 'nishimura', 'tanabe', 'sota']
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
    } else if (t === 'rec') {
      body.innerHTML = recordsHTML();
    } else {
      const all = Object.keys(CUTS).filter((id) => !CUTS[id].blank);
      body.innerHTML = `<div class="md-sub">모은 컷 ${all.filter((id) => g.cuts.includes(id)).length} / ${all.length}</div><div class="gal-cuts"></div>`;
      const grid = body.querySelector('.gal-cuts');
      all.filter((id) => g.cuts.includes(id)).forEach((id) => grid.appendChild(cutView(id, { noSpots: true })));
    }
  };
  const m = openModal(`<div class="md-title">갤러리</div>
    <div class="gal-tabs"><button data-t="cg">이벤트 CG</button><button data-t="bgm">음악</button><button data-t="cuts">컷</button><button data-t="rec">기록</button></div>
    <div class="gal-body"></div>
    <div class="md-sub">엔딩 ${g.endings.length} / 3</div>
    <button class="md-cancel">닫기</button>`, 'gallery');
  m.querySelectorAll('.gal-tabs button').forEach((b) => (b.onclick = () => tab(b.dataset.t)));
  m.querySelector('.md-cancel').onclick = () => { closeModal(); bgm('title'); };
  tab('cg');
}

// ---------- 기록 ----------
// 장마다 가장 좋은 원고 평가와 노힌트 클리어, 여백 조건(1~5장 감정 선택)을 남긴다
const RECORD_KEY = 'gaha-records';
const RANKS = 'SABCD';
function saveRecord(ch, r) {
  if (!ch) return;
  const rec = loadJSON(RECORD_KEY) || {};
  const o = rec[ch] || {};
  if (!o.best || RANKS.indexOf(r.rank) < RANKS.indexOf(o.best)) o.best = r.rank;
  if (!r.hints && !r.help) o.noHint = true;
  if (!r.wrong) o.clean = true;
  rec[ch] = o;
  rec.margin = [...new Set([...(rec.margin || []), ...MARGIN_FLAGS.filter((f) => G.flags[f])])];
  saveJSON(RECORD_KEY, rec);
}
function recordsHTML() {
  const rec = loadJSON(RECORD_KEY) || {};
  const play = PLOG.byChapter();
  const rows = Object.keys(CHAPTERS).map((ch) => {
    const o = rec[ch] || {};
    const name = ch === '6' ? '종장' : ch + '장';
    // 플레이한 시간 / 목표 시간. 막대는 목표 대비 비율(넘으면 꽉 참)
    const p = play[ch], goal = PLOG_TARGET[ch];
    const pct = p && goal ? Math.min(100, Math.round((p.ms / 60000 / goal) * 100)) : 0;
    const time = p ? `<span class="rec-time" title="오답 ${p.wrong} · 힌트 ${p.hints} · 도움 ${p.help}"><b>${fmtMin(p.ms)}</b> / ${goal}분<em style="width:${pct}%"></em></span>` : `<span class="rec-time empty">— / ${goal}분</span>`;
    return `<div class="rec-row${o.best || p ? '' : ' locked'}"><span>${name} 「${CHAPTERS[ch].title}」</span><b class="rec-rank">${o.best || '—'}</b>
      ${time}<i class="${o.noHint ? 'on' : ''}">힌트 없이</i><i class="${o.clean ? 'on' : ''}">틀림 없이</i></div>`;
  }).join('');
  const m = (rec.margin || []).length;
  return `<div class="rec-list">${rows}</div>
    <div class="rec-foot"><span>여백 조건 ${m} / ${MARGIN_FLAGS.length}</span><button class="rec-export" onclick="event.stopPropagation(); exportPlaylog()">플레이 기록 내보내기</button></div>`;
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

// ---------- 사건 개요 (수첩 「사건」 탭 · 이어하기 때 「지난 이야기」) ----------
// facts: [그 장면이 끝나면 알게 되는 것]
const CASES = {
  1: { title: '하나미즈키 맨션 추락 사건', summary: '피아노 강사 사에키 미츠루가 5층 베란다에서 떨어져 의식불명. 경비원은 택배 기사 타이가가 도망치는 걸 봤다고 한다.',
    facts: [['puzzle1', '쿵 소리가 났을 때 타이가는 5층 문 앞에 있었다.'], ['ookubo', '경비원은 야구 중계 소리와 순서를 헷갈렸다. 타이가는 "구급차!"라고 외쳤다.'],
      ['taiga', '타이가는 휴대폰이 꺼져 길 건너 편의점에서 신고를 부탁했다.'], ['himari', '옆집 히마리가 날아간 머리핀을 주우려고 난간에 올라갔다.'],
      ['puzzle2', '사에키 씨는 칸막이 너머로 히마리를 끌어당기다가 떨어졌다.']] },
  2: { title: '크레센트 조명 리그 낙하 사건', summary: '라이브 공연 중 조명 리그가 떨어져 매니저 키리시마가 숨졌다. 보컬 루루는 "내 탓"이라고 자백했다.',
    facts: [['puzzle2a', '리그는 리허설 때부터 헐거웠다.'], ['kuramochi', '매니저가 끈으로 리그를 난간에 묶어 뒀는데, 그 끈이 개장 전에 사라졌다.'],
      ['ruru', '루루가 흔든 건 사실이지만, 끈이 있었다면 떨어지지 않았다. 키리시마는 루루를 밀어내고 대신 깔렸다.'],
      ['explore2c', '사장실 휴지통에 주황색 끈. 안전 와이어를 뺀 견적서에 사장 서명.'], ['tendo', '개장 직전 끈을 푼 사람은 텐도 사장.']] },
  3: { title: '토키와 양과점 점장 추락 사건', summary: '마감 뒤 점장이 창고 계단 아래에서 쓰러진 채 발견됐다. 매상 42만 엔 봉투가 없어졌고, 마감 담당 「유키」가 의심받는다.',
    facts: [['puzzle3a', '점장이 쓰러지고 신고까지 10분이 비었다.'], ['tofu', '두부집 시계는 10분 빨랐다. 숄을 두른 여자가 뒷골목에서 뛰어나왔다.'],
      ['academy3', '진짜 유키는 그날 밤 미술 학원에 있었다.'], ['yukin', '마감을 한 「유키」는 쌍둥이 동생 나기였다.'],
      ['nagi', '점장은 봉투를 낚아챈 별무늬 숄의 사람을 쫓다가 넘어졌다.'], ['madoka', '미래 컷은 오려 붙인 가짜. 봉투를 가져간 건 마도카.']] },
  4: { title: '사쿠라유 화재', summary: '재개발 지구의 목욕탕이 불탔다. 주인 겐조는 중상. 손녀 하야카는 그 밤의 기억을 지웠다.',
    facts: [['explore4a', '배전반 전선이 공구로 잘려 이어 붙여져 있었다.'], ['okamoto', '하야카는 불이 나기 전에 골목을 떠났다.'],
      ['hayaka', '하야카는 엄마가 망을 보는 걸 보고, 엄마를 지키려고 기억을 지웠다.'], ['cross4', '현장소장 무라세가 보일러실 열쇠로 들어가 배전반을 조작했다. 상무 니시무라의 지시.'],
      ['keiko', '케이코는 망을 봤지만, 불이 나자 아버지를 업고 나왔다.']] },
  5: { title: '코하루 실종', summary: '코하루가 사라졌다. 그가 지나간 길에 남은 잔상은 전부 "끌려가는" 그림이다.',
    facts: [['restore5', '잔상은 편집된 것이었다. 코하루는 제 발로 폐창고에 갔다.'], ['warehouse5', '코하루는 렌에게서 오빠 소타 이야기를 들었다.'],
      ['ren', '6년 전 레이의 기억을 지운 건 렌. 그날 레이는 등대 도서관에 있었다.'], ['kurogane5', '소타 순경이 레이를 업고 나왔고 쿠로가네가 받아 내려 부축했다. 토와는 전 편집국 사람.'],
      ['epilogue5', '편집국을 만든 건 아사기리.']] },
  6: { title: '6년 전, 등대 도서관 화재', summary: '6년 전 8월 31일 곶 끝 등대 도서관이 불탔다. 시오리와 소타 순경이 나오지 못했다.',
    facts: [['explore6', '1층 서고 잿더미에서 녹은 은색 라이터가 나왔다.'], ['asagiri6', '아사기리도 12년 전 하쿠요의 불로 가족을 잃었다.'],
      ['self6', '레이는 뛰쳐나간 뒤 연기를 보고 되돌아갔다.'], ['shiori6', '시오리는 범인의 얼굴을 그린 원고를 가지러 다시 들어갔다.'], ['puzzle6', '불을 지른 건 니시무라.']] },
};
function caseState() {
  const ch = G.ch || 1, C = CASES[ch], S = CHAPTERS[ch];
  if (!C || !S) return null;
  const idx = (id) => S.scenes.findIndex(([s]) => s === id);
  const now = idx(G.scene);
  const known = C.facts.filter(([s]) => idx(s) >= 0 && idx(s) < now).map(([, t]) => t);
  return { C, ch, known, unknown: C.facts.length - known.length };
}
function casePage() {
  const s = caseState();
  if (!s) return '';
  const goalText = ($('#goal').textContent || '').replace(/^목표\s*/, '');
  return `<div class="case-box"><div class="case-ch">${s.ch === 6 ? '종장' : s.ch + '장'} · ${CHAPTERS[s.ch].title}</div><h3>${s.C.title}</h3><p class="case-sum">${s.C.summary}</p>
    <div class="case-h">밝혀진 것</div>${s.known.map((t) => `<div class="case-fact">✓ ${t}</div>`).join('') || '<div class="md-empty">아직 없다.</div>'}
    ${s.unknown ? `<div class="case-h">아직 모르는 것</div><div class="case-fact unk">? ${s.unknown}가지</div>` : ''}
    ${goalText ? `<div class="case-h">지금 할 일</div><div class="case-fact next">▶ ${goalText}</div>` : ''}</div>`;
}
// 이어하기로 돌아오면 지난 이야기를 짧게
async function previously() {
  const s = caseState();
  if (!s) return;
  const last = s.known.slice(-3);
  const m = openModal(`<div class="md-title">지난 이야기</div><div class="case-box"><h3>${s.C.title}</h3><p class="case-sum">${s.C.summary}</p>
    ${last.map((t) => `<div class="case-fact">✓ ${t}</div>`).join('')}</div><button class="md-ok">이어서</button>`, 'case');
  await new Promise((r) => { m.querySelector('.md-ok').onclick = () => { closeModal(); r(); }; });
}

// 컷 한 장을 화면 가운데 잠깐 띄운다 (콜드 오픈·예고)
async function flashCut(id, ms = 1600) {
  const wrap = document.createElement('div');
  wrap.className = 'montage flash';
  const v = cutView(id, { noSpots: true });
  v.classList.add('mt-cut');
  v.style.setProperty('--tilt', '-1deg');
  wrap.appendChild(v);
  $('#stage').appendChild(wrap);
  await sleep(G.skip ? 150 : ms);
  wrap.classList.add('mt-out');
  await sleep(400);
  wrap.remove();
}

// ---------- 만화 페이지 ----------
// 결정적 순간을 만화 한 페이지처럼: 칸이 하나씩 열리고, 마지막 칸은 크게.
async function mangaPage(ids, caption = '') {
  ids = (ids || []).filter((id) => CUTS[id]);
  if (!ids.length) return;
  hideText();
  const wrap = document.createElement('div');
  wrap.className = 'manga';
  wrap.innerHTML = `<div class="mg-page mg-${ids.length}"></div>${caption ? `<div class="mg-cap">${caption}</div>` : ''}`;
  $('#stage').appendChild(wrap);
  const page = wrap.querySelector('.mg-page');
  for (let i = 0; i < ids.length; i++) {
    const v = cutView(ids[i], { fills: G.fills, noSpots: true });
    v.classList.add('mg-cell');
    if (i === ids.length - 1) v.classList.add('mg-last');
    page.appendChild(v);
    sfx('page', { rate: 0.9 + i * 0.05, vol: 0.6 });
    if (i === ids.length - 1) { FX.lines(500, '#ffffff'); }
    await sleep(G.skip ? 120 : i === ids.length - 1 ? 1600 : 900);
  }
  await waitClick(wrap);
  wrap.classList.add('mt-out');
  await sleep(400);
  wrap.remove();
}
function waitClick(el) {
  if (G.skip) return sleep(200);
  return new Promise((r) => { el.onclick = () => r(); setTimeout(r, 6000); });
}

// ---------- 다음 장 예고 ----------
// 장을 끝내고 다음 장으로 넘어가기 전에 컷 한 장 + 한 줄. 정답이 새지 않는 컷만 쓴다
const PREVIEWS = {
  2: { cut: '2A', line: '앙코르 박수 속에서 무대 위 조명이 떨어졌다.' },
  3: { cut: '3A', line: '셔터가 내려간 가게 앞. 그 시각에 있던 건 언니였을까, 동생이었을까.' },
  4: { cut: '4F', line: '불이 난 밤의 기억을 누군가 지워 달라고 했다.' },
  5: { cut: '5Ae', line: '같은 방인데, 컷 속 물건 자리가 하나씩 다르다.' },
  6: { cut: 'R5', line: '6년 전 8월 31일. 등대 도서관.' },
};
async function nextPreview(n) {
  const p = PREVIEWS[n];
  if (!p || G.skip) return;
  hideText();
  const wrap = document.createElement('div');
  wrap.className = 'manga preview';
  wrap.innerHTML = `<div class="pv-head">NEXT — CHAPTER ${n}<b>「${CHAPTERS[n].title}」</b></div>`;
  const v = cutView(p.cut, { noSpots: true });
  v.classList.add('pv-cut');
  wrap.appendChild(v);
  wrap.insertAdjacentHTML('beforeend', `<div class="mg-cap">${josa(p.line)}</div>`);
  $('#stage').appendChild(wrap);
  sfx('page');
  await sleep(700);
  await waitClick(wrap);
  wrap.classList.add('mt-out');
  await sleep(400);
  wrap.remove();
}
