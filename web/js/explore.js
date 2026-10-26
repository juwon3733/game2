// 현장 조사: 장소 배경 위에 조사할 곳 목록을 띄우고, 고른 곳의 대사를 실행한다.
// (예전의 걸어 다니는 탑뷰 탐색을 대신한다. 장마다 MAPS에 장소와 조사 대상(objects)을 둔다.)

const MAPS = {
  mansion5f: {
    label: '하나미즈키 맨션 5층',
    hallWallRow: 1,
    // 칸 배치는 maps/mansion5f.png 그림에 맞춘 것 (16px 칸 26×13, 화면에선 3배)
    rows: [
      '##########################',
      '#EWWWWWWWWWWWWWWWWWWWWWWW#',
      '#........................#',
      '#WWWWWWWWWDWWWWWWW#XXXXXXX',
      '#,,,,,,,,,,,,,,,,,#XXXXXXX',
      '#,,,,,,,,,,,,,,,,,#XXXXXXX',
      '#,,,,,,,,,,,,,,,,,#XXXXXXX',
      '#WWWWWWWgggWWWWWWW#XXXXXXX',
      '#WWWWWWW___WWWWWW#XXXXXXX#',
      '#________________P_______#',
      '#RRRRRRRRRRRRRRRRRRRRRRRR#',
      'XXXXXXXXXXXXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXXXXXXXXXXXX',
    ],
    // 그림 속 가구라서 지나갈 수 없는 칸 (조사 대상 아님)
    blocks: [[1, 4], [1, 5], [1, 6], [7, 4], [8, 4], [15, 4], [16, 4], [15, 6], [16, 6], [16, 5]],
    objects: [
      { id: 'parcel', x: 11, y: 2, draw: 'parcel', overlay: true, label: '택배 상자', walkable: true },
      { id: 'door', x: 10, y: 3, label: '사에키 씨 집 현관 문고리' },
      { id: 'shoes', x: 10, y: 4, draw: 'shoes', label: '신발', walkable: true },
      { id: 'calendar', x: 6, y: 3, draw: 'calendar', label: '달력' },
      { id: 'piano', x: 2, y: 4, w: 3, h: 2, solid: true, draw: 'piano', label: '피아노' },
      { id: 'sofa', x: 12, y: 4, w: 3, solid: true, draw: 'sofa', label: '소파' },
      { id: 'table', x: 9, y: 6, w: 3, solid: true, draw: 'table', label: '테이블' },
      { id: 'pot', x: 15, y: 8, solid: true, draw: 'pot', label: '베란다 화분' },
      { id: 'partition', x: 17, y: 8, h: 2, label: '비상 칸막이' },
      { id: 'potPink', x: 18, y: 8, solid: true, draw: 'potPink', label: '옆집 화분' },
      { id: 'railing', x: 10, y: 10, label: '난간' },
      { id: 'nbdoor', x: 19, y: 1, label: '옆집 현관' },
      { id: 'stairs', x: 1, y: 1, label: '계단' },
    ],
  },
};

// 장소별 배경
const MAP_BG = {
  mansion5f: 'night', crescent: 'crescent_stage', backstage: 'backstage', tendooffice: 'tendo_office',
  tokiwa: 'tokiwa_shop', arcade: 'arcade', sakurayu: 'sakurayu', siteoffice: 'site_office',
  koharuroom: 'koharu_room', lighthouse: 'lighthouse_in',
};

// ---------- 조사 상태 ----------

let EX = null; // 진행 중인 조사

function exploreActive() { return !!EX && !EX.paused; }

function explore(mapId, opts) {
  const map = MAPS[mapId];
  return new Promise((resolve) => {
    EX = {
      map, opts, paused: false, done: false,
      examined: new Set(opts.examined || []),
      extras: opts.extras || [],
      end: () => { EX.done = true; },
      resolve,
    };
    setMode(null);
    hideText();
    clearChars();
    bg(map.bg || MAP_BG[mapId] || 'night');
    renderExplore();
  });
}

// 조사할 수 있는 곳: 대사가 있는 대상만
function exploreTargets() {
  return EX.map.objects.filter((o) => EX.opts.on[o.id] && !(EX.opts.hidden || []).includes(o.id));
}

// 시오리 같은 추가 인물이 서 있는 곳: 가장 가까운 조사 대상에 표시
function hauntedId() {
  const e = EX.extras[0];
  if (!e) return null;
  const d = (o) => Math.hypot(o.x + (o.w || 1) / 2 - e.x, o.y + (o.h || 1) / 2 - e.y);
  return exploreTargets().reduce((a, o) => (!a || d(o) < d(a) ? o : a), null)?.id;
}

// 사람인 조사 대상: [말 걸기]로 따로 묶는다 (지도 데이터에 who가 없으면 id로 찾는다)
const EX_PEOPLE = { kura: 'kuramochi', tendo: 'tendo', aoi: 'aoi', murase: 'murase' };
const whoOf = (o) => o.who || EX_PEOPLE[o.id] || null;

function renderExplore() {
  const box = $('#explore');
  const haunt = hauntedId();
  const btn = (o) => {
    const who = whoOf(o);
    const known = who && (G.flags.met || []).includes(who);
    const face = who ? `<span class="ex-face"${known ? ` style="${faceStyle(who)}"` : ''}>${known ? '' : '?'}</span>` : '';
    return `<button class="ex-btn${who ? ' talk' : ''}${EX.examined.has(o.id) ? ' seen' : ''}${o.id === haunt ? ' haunt' : ''}" data-id="${o.id}">${face}${o.label}</button>`;
  };
  const all = exploreTargets();
  const things = all.filter((o) => !whoOf(o)), people = all.filter(whoOf);
  box.innerHTML = `<div class="ex-head">${EX.map.label}</div>
    <div class="ex-list">${people.length ? `<div class="ex-group">말 걸기</div>${people.map(btn).join('')}<div class="ex-group">살펴보기</div>` : ''}${things.map(btn).join('')}</div>`;
  box.querySelectorAll('[data-id]').forEach((b) => {
    b.onclick = (e) => { e.stopPropagation(); interact(EX.map.objects.find((o) => o.id === b.dataset.id)); };
  });
  box.classList.remove('hidden');
}

function finishExplore() {
  const r = EX.resolve;
  EX = null;
  $('#explore').classList.add('hidden');
  $('#explore').innerHTML = '';
  r();
}

async function interact(o) {
  if (!o || !EX || EX.paused || G.busyModal) return;
  const h = EX.opts.on[o.id];
  sfx('select');
  EX.paused = true;
  $('#explore').classList.add('hidden');
  if (h) await h(o);
  else await say('rei', `(${o.label}. 별다른 건 없다.)`);
  hideText();
  clearChars();
  if (!EX) return;
  EX.examined.add(o.id);
  EX.paused = false;
  if (EX.done) finishExplore(); else renderExplore();
}
