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

// 장소 안의 구역. 구역을 오가며 조사한다(여기 없는 대상은 첫 구역).
const EX_AREAS = {
  mansion5f: [['복도', ['stairs', 'nbdoor', 'parcel', 'door']], ['거실', ['shoes', 'calendar', 'piano', 'sofa', 'table']], ['베란다', ['pot', 'partition', 'potPink', 'railing']]],
  crescent: [['무대', ['setlist', 'drum', 'mic', 'stick', 'outline', 'cue']], ['객석', ['frontseat', 'jacket', 'reception']], ['조명 부스', ['console', 'kura']]],
  backstage: [['캣워크', ['catstairs', 'railing', 'clamp']], ['윙·복도', ['radio', 'fist', 'rigev', 'tendo']], ['대기실', ['jacketk', 'monitor']]],
  tendooffice: [['사장 책상', ['desk', 'drawer', 'trash', 'tendo']], ['응접 공간', ['safe', 'poster', 'sofa', 'aoi']]],
  tokiwa: [['1층 매장', ['sign', 'showcase', 'register', 'phone', 'shift', 'roster']], ['안쪽 사무실', ['ledger', 'stairsfoot', 'restroom']], ['2층 창고', ['boxes', 'safe', 'backdoor']]],
  arcade: [['점술 부스', ['booth', 'drawer', 'trash']], ['두부집', ['tofushop', 'tofuclock']], ['뒷골목', ['alley', 'tokiwaback']]],
  sakurayu: [['탈의실·탕', ['poster', 'counter', 'bath']], ['보일러실', ['panel', 'boiler', 'chimney']], ['바깥', ['fence', 'murase', 'okamotowin']]],
  lighthouse: [['2층 열람실', ['seat', 'lastpage', 'form', 'box']], ['1층', ['stairs', 'hairpin', 'lighter', 'plaque', 'gate']], ['곶 끝', ['bench', 'flowers', 'fence']]],
};

// ---------- 조사 상태 ----------
// 물건마다 [살펴보기](공짜: 겉모습만)와 [잔상 읽기](집중력 1)가 따로 있다.
// 잔상이 남은 물건(required)을 읽어야 컷이 나온다. 아무것도 안 남은 물건을 읽으면 집중력만 닳는다.
// 집중력이 바닥나면 코하루가 쉬게 해 준다(원고 평가에서 도움 1회).

let EX = null; // 진행 중인 조사

function exploreActive() { return !!EX && !EX.paused; }

function explore(mapId, opts) {
  const map = MAPS[mapId];
  const areas = (EX_AREAS[mapId] || [[map.label, map.objects.map((o) => o.id)]]);
  const req = (opts.required || []).filter((id) => !(opts.examined || []).includes(id));
  return new Promise((resolve) => {
    EX = {
      map, mapId, opts, paused: false, done: false, areas, area: 0,
      examined: new Set(opts.examined || []),
      looked: new Set(), empty: new Set(),
      focus: req.length + 2, maxFocus: req.length + 2,
      extras: opts.extras || [],
      end: () => { EX.done = true; },
      resolve,
    };
    setMode(null);
    hideText();
    clearChars();
    bg(map.bg || MAP_BG[mapId] || 'night');
    if (!G.flags.exploreTut) {
      G.flags.exploreTut = true;
      EX.paused = true;
      sayAll([
        ['tip', '현장 조사: 위의 탭으로 구역을 오간다. 물건 이름을 누르면 [살펴보기] — 공짜로 겉모습을 본다.'],
        ['tip', '오른쪽 [읽기]는 잔상 읽기. 강한 감정이 남은 물건이면 컷이 나온다. 아무것도 안 남은 물건을 읽으면 집중력만 닳는다.'],
      ]).then(() => { hideText(); EX.paused = false; renderExplore(); });
      return;
    }
    renderExplore();
  });
}

// 조사할 수 있는 곳: 대사가 있는 대상만
function exploreTargets() {
  return EX.map.objects.filter((o) => EX.opts.on[o.id] && !(EX.opts.hidden || []).includes(o.id));
}
const areaOf = (o) => Math.max(0, EX.areas.findIndex(([, ids]) => ids.includes(o.id)));

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
const echoOf = (o) => (EX.opts.required || []).includes(o.id) && !whoOf(o);

function renderExplore() {
  const box = $('#explore');
  const haunt = hauntedId();
  const all = exploreTargets();
  const here = all.filter((o) => areaOf(o) === EX.area);
  const row = (o) => {
    const who = whoOf(o);
    if (who) {
      const known = (G.flags.met || []).includes(who);
      return `<button class="ex-btn talk${EX.examined.has(o.id) ? ' seen' : ''}" data-id="${o.id}" data-m="talk"><span class="ex-face"${known ? ` style="${faceStyle(who)}"` : ''}>${known ? '' : '?'}</span>${o.label}</button>`;
    }
    const read = EX.examined.has(o.id) && echoOf(o), empty = EX.empty.has(o.id);
    return `<div class="ex-row${read ? ' read' : ''}${empty ? ' empty' : ''}${o.id === haunt ? ' haunt' : ''}">
      <button class="ex-btn${EX.looked.has(o.id) ? ' looked' : ''}" data-id="${o.id}" data-m="look">${o.label}</button>
      <button class="ex-read" data-id="${o.id}" data-m="read" title="잔상 읽기 (집중력 1)"${read || empty ? ' disabled' : ''}>${read ? '읽음' : empty ? '없음' : '읽기'}</button></div>`;
  };
  const things = here.filter((o) => !whoOf(o)), people = here.filter(whoOf);
  const buddy = EX.mapId === 'koharuroom' ? 'towa' : 'koharu';
  const buddyBtn = `<button class="ex-btn talk buddy" data-buddy="1"><span class="ex-face" style="${faceStyle(buddy)}"></span>${josa(CHARACTERS[buddy].name + '와(과) 얘기하기')}</button>`;
  const pips = Array.from({ length: EX.maxFocus }, (_, i) => `<i class="${i < EX.focus ? 'on' : ''}"></i>`).join('');
  box.innerHTML = `<div class="ex-head">${EX.map.label}<span class="ex-focus" title="집중력: 잔상을 읽을 때마다 하나씩 닳는다">집중력 ${pips}</span></div>
    ${EX.areas.length > 1 ? `<div class="ex-areas">${EX.areas.map(([name], i) => `<button data-area="${i}" class="${i === EX.area ? 'on' : ''}">${name}</button>`).join('')}</div>` : ''}
    <div class="ex-list"><div class="ex-group">말 걸기</div>${buddyBtn}${people.map(row).join('')}<div class="ex-group">살펴보기 · 잔상 읽기</div>${things.map(row).join('')}</div>`;
  box.querySelectorAll('[data-id]').forEach((b) => {
    b.onclick = (e) => { e.stopPropagation(); interact(EX.map.objects.find((o) => o.id === b.dataset.id), b.dataset.m); };
  });
  box.querySelector('[data-buddy]').onclick = (e) => { e.stopPropagation(); buddyTalk(buddy); };
  box.querySelectorAll('[data-area]').forEach((b) => {
    b.onclick = (e) => { e.stopPropagation(); if (EX.paused) return; sfx('step'); EX.area = Number(b.dataset.area); renderExplore(); };
  });
  box.classList.remove('hidden');
}

// 같이 온 사람과 잡담. 처음엔 장소 얘기, 그다음부터는 아직 안 읽은 잔상이 남은 구역을 넌지시 알려 준다.
const EX_TALK = {
  mansion5f: [['koharu', '사에키 씨, 피아노 선생님이었대요. 문 앞에 아이들 그림 편지가 붙어 있었어요.', 'normal']],
  crescent: [['koharu', '저 여기 학생 때 와 본 적 있어요. 그땐 바닥이 엄청 끈적였는데.', 'happy']],
  backstage: [['koharu', '대기실 냄새… 헤어스프레이랑 땀이랑 탄 전선 냄새요.', 'worried']],
  tendooffice: [['koharu', '사장실이 우리 사무실보다 열 배는 넓어요. 소파 가죽 봐요.', 'normal']],
  tokiwa: [['koharu', '여기 슈크림, 오빠가 자주 사 왔었어요. 뚜껑이 별 모양이에요.', 'normal']],
  arcade: [['koharu', '셔터 내려간 아케이드는 좀 무섭네요. 발소리가 울려요.', 'worried']],
  sakurayu: [['koharu', '아직 그을음 냄새가 나요. …불은 언제 봐도 싫어요.', 'worried']],
  siteoffice: [['koharu', '공정표에 「9월 착공」. 사쿠라유 자리가 벌써 칠해져 있어요.', 'worried']],
  koharuroom: [['towa', '…코하루 방, 생각보다 깔끔하네. 스티커만 빼면.']],
  lighthouse: [['koharu', '선배, 숨 천천히 쉬어요. 저 여기 있어요.', 'worried']],
};
async function buddyTalk(buddy) {
  if (!EX || EX.paused || G.busyModal) return;
  EX.paused = true;
  sfx('select');
  $('#explore').classList.add('hidden');
  if (buddy === 'koharu') show('koharu', 'normal', 'right');
  EX.talked = (EX.talked || 0) + 1;
  const left = EX.areas.map(([name, ids], i) => [name, ids.filter((id) => (EX.opts.required || []).includes(id) && !EX.examined.has(id)).length, i]).filter(([, n]) => n);
  if (EX.talked === 1 && EX_TALK[EX.mapId]) await sayAll(EX_TALK[EX.mapId]);
  else if (left.length) {
    const [name] = left.find(([, , i]) => i !== EX.area) || left[0];
    await say(buddy, buddy === 'towa' ? `${name} 쪽. 아직 뭔가 남아 있어.` : `선배, ${name} 쪽은 아직 다 안 봤죠? 거기 뭔가 남아 있는 것 같아요.`, buddy === 'koharu' ? 'worried' : undefined);
  } else await say(buddy, buddy === 'towa' ? '여긴 다 읽었어.' : '여긴 다 본 것 같아요.', buddy === 'koharu' ? 'normal' : undefined);
  hideText(); clearChars();
  EX.paused = false;
  renderExplore();
}

function finishExplore() {
  const r = EX.resolve;
  EX = null;
  $('#explore').classList.add('hidden');
  $('#explore').innerHTML = '';
  r();
}

// 살펴보기: 잔상이 남은 물건이면 첫 묘사 한 줄만 (읽어야 나머지가 나온다)
const LOOK_STOP = {};
async function lookOnly(h, o) {
  const keep = { say, gainCut, gainItem, gainWord };
  let n = 0;
  window.say = async (...a) => { if (n++) throw LOOK_STOP; await keep.say(...a); };
  window.gainCut = window.gainItem = async () => { throw LOOK_STOP; };
  window.gainWord = () => {};
  try { await h(o); } catch (e) { if (e !== LOOK_STOP) throw e; } finally { Object.assign(window, keep); }
  if (!n) await say('', `${o.label}.`);
}

async function interact(o, mode = 'read') {
  if (!o || !EX || EX.paused || G.busyModal) return;
  const h = EX.opts.on[o.id];
  const echo = echoOf(o);
  sfx('select');
  EX.paused = true;
  $('#explore').classList.add('hidden');
  if (mode === 'look' && echo) {
    await lookOnly(h, o);
    EX.looked.add(o.id);
  } else if (mode === 'read' && !whoOf(o) && !echo) {
    // 잔상이 없는 물건을 읽었다
    EX.focus--;
    sfx('wrong', { vol: 0.5 });
    FX.glitch(200);
    await say('rei', `(${o.label}… 아무 감정도 남아 있지 않아.)`, 'normal');
    EX.empty.add(o.id);
  } else {
    if (mode === 'read' && echo) { EX.focus--; FX.echo(); }
    if (h) await h(o);
    else await say('rei', `(${o.label}. 별다른 건 없다.)`);
    if (mode === 'look') EX.looked.add(o.id);
    else EX.examined.add(o.id);
  }
  hideText();
  clearChars();
  if (!EX) return;
  // 집중력이 바닥났는데 아직 못 읽은 잔상이 있으면 코하루가 쉬게 해 준다
  const left = (EX.opts.required || []).some((id) => !EX.examined.has(id));
  if (EX.focus <= 0 && left && !EX.done) {
    G.stats.help++;
    if (EX.mapId === 'koharuroom') await say('towa', '레이, 맥박 너무 빨라. 1분만 눈 감고 있어.');
    else { show('koharu', 'worried', 'right'); await say('koharu', '선배, 얼굴이 하얘요. 잠깐 앉아요. 물 사 올게요.', 'worried'); }
    EX.focus = 2;
    clearChars(); hideText();
  }
  EX.paused = false;
  if (EX.done) finishExplore(); else renderExplore();
}
