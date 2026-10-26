// 탑뷰 탐색: 타일 맵, 도트 캐릭터, 이동(키보드/클릭/패드), 조사.

const TILE = 16, SCALE = 3, TS = TILE * SCALE;

// ---------- 도트 스프라이트 ----------

const SPRITE_BODY = {
  down: [
    '....oooooooo....', '...ohhhhhhhho...', '..ohhHHhhhhhho..', '..ohhhhhhhhhho..',
    '..ohhsssssshho..', '..ohsessssesho..', '...osssssssso...', '...occgggggcco..',
    '..occgggggggcco.', '..occgGgggGgcco.', '..ocCgggggggCco.', '..osCgggggggCso.',
    '..oocCCCCCCCcoo.', '...occccccccco..', '...ocCcccccCco..', '....oppppppo....',
  ],
  up: [
    '....oooooooo....', '...ohhhhhhhho...', '..ohhHHhhhhhho..', '..ohhhhhhhhhho..',
    '..ohhhhhhhhhho..', '..ohhhhhhhhhho..', '...ohhhhhhhho...', '...occgggggcco..',
    '..occgggggggcco.', '..occgggggggcco.', '..ocCgggggggCco.', '..osCgggggggCso.',
    '..oocCCCCCCCcoo.', '...occccccccco..', '...ocCcccccCco..', '....oppppppo....',
  ],
  right: [
    '....oooooooo....', '...ohhhhhhhho...', '..ohhHHhhhhhho..', '..ohhhhhhhhhho..',
    '..ohhhhhssssso..', '..ohhhhsssseso..', '...ohhhssssso...', '...occgggggco...',
    '...occggggggco..', '...occgGggggco..', '...ocCggggggco..', '...ocCgggggsco..',
    '...oocCCCCCCoo..', '...occccccccco..', '...ocCcccccCco..', '....oppppppo....',
  ],
};
const SPRITE_LEGS = {
  stand: ['....oppo.oppo...', '....oppo.oppo...', '....obbo.obbo...', '....oooo.oooo...'],
  walk:  ['...oppo..oppo...', '...oppo...oppo..', '...obbo...oppo..', '...oooo...obbo..'],
};

const PALETTES = {
  rei:    { o: '#1d1d22', h: '#2a2840', H: '#4a4570', s: '#f4d6bd', e: '#2a2840', g: '#8a8d96', G: '#6b6e78', c: '#a08a63', C: '#7d6a48', p: '#2f3342', b: '#1d1d22' },
  koharu: { o: '#1d1d22', h: '#c8743a', H: '#e89a5a', s: '#f4d6bd', e: '#3a2a1a', g: '#f2f2f2', G: '#d6d6d6', c: '#3c4a6b', C: '#2b3650', p: '#3c4a6b', b: '#eeeeee' },
  shiori: { o: '#1d1d22', h: '#121212', H: '#33334a', s: '#f2e6dc', e: '#121212', g: '#f2f2f2', G: '#cfd3dd', c: '#2b3550', C: '#1d2540', p: '#2b3550', b: '#f2e6dc' },
};
// 캐릭터별로 덧그리는 픽셀 (포니테일, 긴 머리)
const SPRITE_EXTRA = {
  koharu: { down: [[13, 3], [13, 4], [14, 4], [14, 5], [14, 6], [13, 7]], right: [[2, 3], [1, 4], [1, 5], [1, 6], [2, 7]], up: [[13, 3], [13, 4], [14, 4], [14, 5], [14, 6], [13, 7]] },
  shiori: { down: [[2, 6], [2, 7], [2, 8], [2, 9], [13, 6], [13, 7], [13, 8], [13, 9]], up: [[3, 7], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 7], [3, 8], [12, 8]], right: [[3, 6], [3, 7], [3, 8], [4, 9], [3, 9]] },
};

const spriteCache = {};
// GPT가 만든 걷는 캐릭터 시트 (64×96 칸, 열: 정지/걸음A/걸음B, 행: 아래/왼/오른/위)
const SHEET_ROW = { down: 0, left: 1, right: 2, up: 3 };
const SHEETS = Object.fromEntries(['rei', 'koharu', 'shiori'].map((w) => [w, optionalImg(ASSET.sprite(w))]));

// 발이 (x, y) 칸 바닥에 오게 캐릭터를 그린다. ctx는 원본 해상도(16px 칸) 기준.
function drawWalker(ctx, who, dir, frame, x, y) {
  const sh = SHEETS[who];
  if (sh && sh.ok) {
    const cw = sh.naturalWidth / 3, ch = sh.naturalHeight / 4, w = cw / SCALE, h = ch / SCALE;
    ctx.drawImage(sh, frame * cw, SHEET_ROW[dir] * ch, cw, ch, x * TILE + TILE / 2 - w / 2, y * TILE + TILE - h + 1, w, h);
    return;
  }
  ctx.drawImage(sprite(who, dir, frame), x * TILE, y * TILE - 4);
}

function buildSprite(who, dir, legs, flipLegs) {
  const pal = PALETTES[who];
  const rows = SPRITE_BODY[dir].concat(SPRITE_LEGS[legs].map((r) => (flipLegs ? r.split('').reverse().join('') : r)));
  const c = document.createElement('canvas');
  c.width = 16; c.height = 20;
  const x = c.getContext('2d');
  rows.forEach((row, y) => {
    for (let i = 0; i < 16; i++) {
      const k = row[i];
      if (k && k !== '.' && pal[k]) { x.fillStyle = pal[k]; x.fillRect(i, y, 1, 1); }
    }
  });
  const extra = SPRITE_EXTRA[who] && SPRITE_EXTRA[who][dir];
  if (extra) { x.fillStyle = pal.h; extra.forEach(([i, y]) => x.fillRect(i, y, 1, 1)); }
  return c;
}

function sprite(who, dir, frame) {
  // frame: 0 정지, 1 걸음A, 2 걸음B
  const key = `${who}-${dir}-${frame}`;
  if (!spriteCache[key]) {
    const base = dir === 'left' ? 'right' : dir;
    let c = buildSprite(who, base, frame === 0 ? 'stand' : 'walk', frame === 2);
    if (dir === 'left') {
      const f = document.createElement('canvas');
      f.width = 16; f.height = 20;
      const x = f.getContext('2d');
      x.translate(16, 0); x.scale(-1, 1); x.drawImage(c, 0, 0);
      c = f;
    }
    spriteCache[key] = c;
  }
  return spriteCache[key];
}

// ---------- 타일 그리기 ----------

function px(ctx, x, y, w, h, color) { ctx.fillStyle = color; ctx.fillRect(x, y, w, h); }

function hash(x, y) { return ((x * 73856093) ^ (y * 19349663)) >>> 0; }

const TERRAIN = {
  '#': { solid: true, draw(c, x, y) { px(c, x, y, 16, 16, '#24242e'); px(c, x, y + 14, 16, 2, '#3a3a48'); } },
  'X': { solid: true, draw(c, x, y) { px(c, x, y, 16, 16, '#15151c'); } },
  'W': { solid: true, draw(c, x, y, tx, ty, map) {
    const hall = ty < map.hallWallRow + 1;
    px(c, x, y, 16, 16, hall ? '#9aa0a8' : '#d9c9a6');
    for (let i = 0; i < 16; i += 4) px(c, x + i, y, 1, 13, hall ? '#8a9098' : '#cbb994');
    px(c, x, y + 13, 16, 3, hall ? '#5a6068' : '#7a6248');
  } },
  '.': { draw(c, x, y, tx, ty) {
    px(c, x, y, 16, 16, '#7d8590');
    px(c, x, y, 16, 1, '#6d7580'); px(c, x, y, 1, 16, '#6d7580');
    if (hash(tx, ty) % 5 === 0) px(c, x + 6, y + 7, 2, 1, '#8b939e');
  } },
  ',': { draw(c, x, y, tx, ty) {
    px(c, x, y, 16, 16, '#b98a5a');
    for (let r = 0; r < 16; r += 4) px(c, x, y + r, 16, 1, '#9c6f43');
    const off = (ty * 5 + Math.floor(r0(tx))) % 16;
    px(c, x + off, y + 1, 1, 3, '#9c6f43'); px(c, x + ((off + 8) % 16), y + 5, 1, 3, '#9c6f43');
    px(c, x + ((off + 4) % 16), y + 9, 1, 3, '#9c6f43'); px(c, x + ((off + 12) % 16), y + 13, 1, 3, '#9c6f43');
  } },
  '_': { draw(c, x, y, tx, ty) {
    px(c, x, y, 16, 16, '#8f9298');
    const h = hash(tx, ty);
    px(c, x + (h % 13), y + ((h >> 4) % 13), 1, 1, '#7a7d83');
    px(c, x + ((h >> 8) % 13), y + ((h >> 12) % 13), 1, 1, '#a3a6ac');
  } },
  'R': { solid: true, draw(c, x, y) {
    px(c, x, y, 16, 6, '#8f9298');
    px(c, x, y + 6, 16, 2, '#4a4d55');
    for (let i = 1; i < 16; i += 4) px(c, x + i, y + 8, 2, 8, '#4a4d55');
  } },
  'P': { solid: true, draw(c, x, y) {
    px(c, x, y, 16, 16, '#8f9298');
    px(c, x + 3, y - 10, 10, 24, '#e2dacb'); px(c, x + 3, y - 10, 10, 2, '#b8ae9c');
    px(c, x + 4, y + 11, 8, 3, '#2a2a30');
    px(c, x + 5, y - 4, 6, 1, '#b04040'); px(c, x + 5, y - 2, 6, 1, '#b04040');
  } },
  'D': { draw(c, x, y) { px(c, x, y, 16, 16, '#5a4632'); px(c, x + 2, y + 2, 12, 12, '#8a6a48'); px(c, x + 3, y + 3, 10, 10, '#a07c54'); } },
  'N': { solid: true, draw(c, x, y) { px(c, x, y, 16, 16, '#3a2c20'); px(c, x + 2, y + 1, 12, 15, '#6b4a30'); px(c, x + 11, y + 8, 2, 2, '#e2c26b'); } },
  'g': { draw(c, x, y) { px(c, x, y, 16, 16, '#b98a5a'); px(c, x, y, 16, 3, '#9fc3d8'); px(c, x, y + 3, 16, 1, '#5a7a8a'); } },
  'E': { solid: true, draw(c, x, y) { for (let i = 0; i < 16; i += 4) { px(c, x, y + i, 16, 4, i % 8 ? '#6a7078' : '#878e97'); } } },
};
function r0(v) { return (v * 7) % 16; }

// ---------- 오브젝트 그리기 ----------

const OBJ_DRAW = {
  parcel(c, x, y) { px(c, x + 3, y + 5, 10, 9, '#b07a42'); px(c, x + 3, y + 5, 10, 2, '#c99456'); px(c, x + 7, y + 5, 2, 9, '#e6d39a'); px(c, x + 3, y + 13, 10, 1, '#6a4826'); },
  piano(c, x, y) {
    px(c, x + 1, y - 8, 30, 22, '#151518'); px(c, x + 2, y - 7, 28, 3, '#2c2c34');
    px(c, x + 3, y + 6, 26, 5, '#f4f4f0');
    for (let i = 5; i < 28; i += 4) px(c, x + i, y + 6, 2, 3, '#151518');
    px(c, x + 10, y - 12, 12, 5, '#f0ead8'); px(c, x + 11, y - 11, 10, 1, '#555');
  },
  sofa(c, x, y) { px(c, x + 1, y - 2, 30, 16, '#6b7a4a'); px(c, x + 1, y - 2, 30, 5, '#56633a'); px(c, x + 3, y + 4, 12, 8, '#7d8c5a'); px(c, x + 17, y + 4, 12, 8, '#7d8c5a'); },
  table(c, x, y) { px(c, x + 2, y + 2, 28, 10, '#8a5a32'); px(c, x + 2, y + 2, 28, 2, '#a06a3c'); px(c, x + 6, y + 4, 8, 6, '#f2efe4'); px(c, x + 8, y + 3, 8, 6, '#fbf8ee'); px(c, x + 9, y + 5, 5, 1, '#444'); px(c, x + 9, y + 7, 4, 1, '#444'); },
  pot(c, x, y) {
    px(c, x + 4, y + 7, 8, 8, '#b5583a'); px(c, x + 3, y + 6, 10, 2, '#cf6a48');
    px(c, x + 4, y + 1, 3, 6, '#3f7a3a'); px(c, x + 8, y, 3, 7, '#4f9a46'); px(c, x + 6, y + 3, 3, 4, '#3f7a3a');
    px(c, x + 1, y + 13, 2, 1, '#4a3424'); px(c, x + 13, y + 12, 2, 2, '#4a3424'); px(c, x + 12, y + 15, 1, 1, '#4a3424');
  },
  potPink(c, x, y) {
    px(c, x + 4, y + 7, 8, 8, '#b5583a'); px(c, x + 3, y + 6, 10, 2, '#cf6a48');
    px(c, x + 5, y + 2, 6, 5, '#4f9a46'); px(c, x + 4, y + 1, 3, 3, '#f08ab8'); px(c, x + 9, y + 2, 3, 3, '#f08ab8');
  },
  calendar(c, x, y) { px(c, x + 3, y + 2, 10, 10, '#fbf8ee'); px(c, x + 3, y + 2, 10, 3, '#c94040'); px(c, x + 8, y + 7, 3, 3, '#c94040'); },
  shoes(c, x, y) { px(c, x + 3, y + 9, 4, 3, '#3a3a40'); px(c, x + 8, y + 10, 4, 3, '#3a3a40'); },
};

// ---------- 맵 ----------

const MAPS = {
  mansion5f: {
    img: optionalImg(ASSET.map('mansion5f')),
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

// ---------- 탐색 상태 ----------

let EX = null; // 진행 중인 탐색
const TOUCH = matchMedia('(pointer: coarse)').matches;

function exploreActive() { return !!EX && !EX.paused; }

function explore(mapId, opts) {
  const map = MAPS[mapId];
  const cv = $('#explore');
  const ctx = cv.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const W = map.rows[0].length, H = map.rows.length;
  const ox = Math.floor((1280 - W * TS) / 2), oy = Math.floor((720 - H * TS) / 2) + 20;

  return new Promise((resolve) => {
    EX = {
      map, ctx, ox, oy, W, H, opts,
      // fx, fy: 발 위치(칸 단위 실수). 칸에 묶이지 않고 자유롭게 움직인다
      player: { fx: opts.start[0] + 0.5, fy: opts.start[1] + 0.75, dir: 'down', moving: false, dist: 0 },
      koharu: { fx: opts.start[0] + 0.5, fy: opts.start[1] + 0.75, dir: 'down', moving: false, dist: 0 },
      trail: [],
      puffs: [], emote: null,
      keys: {}, path: [], hover: null, paused: false, done: false,
      examined: new Set(opts.examined || []),
      extras: opts.extras || [],   // 시오리 등 추가 스프라이트
      end: () => { EX.done = true; },
      resolve,
    };
    cv.classList.remove('hidden');
    setMode(null);
    $('#pad').classList.toggle('hidden', !matchMedia('(pointer: coarse)').matches);
    hideText();
    clearChars();
    let last = performance.now();
    const me = EX;
    const loop = (now) => {
      if (EX !== me) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (EX.done && !EX.paused) return finishExplore();
      if (!EX.paused) update(dt);
      draw(now);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  });
}

function finishExplore() {
  const r = EX.resolve;
  EX = null;
  $('#explore').classList.add('hidden');
  $('#pad').classList.add('hidden');
  r();
}

function objAt(x, y) {
  return EX.map.objects.find((o) => x >= o.x && x < o.x + (o.w || 1) && y >= o.y && y < o.y + (o.h || 1) && visibleObj(o));
}
function visibleObj(o) { return !EX.opts.hidden || !EX.opts.hidden.includes(o.id); }

function solidAt(x, y) {
  if (x < 0 || y < 0 || x >= EX.W || y >= EX.H) return true;
  const t = TERRAIN[EX.map.rows[y][x]];
  if (!t || t.solid) return true;
  if ((EX.map.blocks || []).some(([bx, by]) => bx === x && by === y)) return true;
  const o = objAt(x, y);
  return !!(o && o.solid);
}

const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const SPEED = 4.2;              // 칸/초
const HALF_W = 0.28, DEPTH = 0.3; // 발밑 충돌 상자(가로 반폭, 세로 깊이)

const tileOf = (e) => [Math.floor(e.fx), Math.floor(e.fy - 0.15)];

// 발밑 상자가 막힌 칸에 걸리는지
function blockedAt(fx, fy) {
  for (const [x, y] of [[fx - HALF_W, fy - DEPTH], [fx + HALF_W, fy - DEPTH], [fx - HALF_W, fy - 0.02], [fx + HALF_W, fy - 0.02]]) {
    if (solidAt(Math.floor(x), Math.floor(y))) return true;
  }
  return false;
}

// (dx, dy) 방향으로 한 프레임 이동. 벽에 닿으면 축마다 따로 미끄러진다.
function moveBy(e, dx, dy) {
  let moved = 0;
  if (dx && !blockedAt(e.fx + dx, e.fy)) { e.fx += dx; moved += Math.abs(dx); }
  else if (dx && !dy) moved += nudge(e, 'y', dx);
  if (dy && !blockedAt(e.fx, e.fy + dy)) { e.fy += dy; moved += Math.abs(dy); }
  else if (dy && !dx) moved += nudge(e, 'x', dy);
  return moved;
}

// 좁은 문으로 들어갈 때: 막힌 방향의 바로 앞 칸이 열려 있으면 그 칸 가운데 쪽으로 살짝 밀어 준다
function nudge(e, axis, d) {
  const step = Math.abs(d);
  if (axis === 'x') {
    const ty = Math.floor(e.fy - 0.15 + Math.sign(d) * 0.6), cx = Math.floor(e.fx) + 0.5;
    if (solidAt(Math.floor(e.fx), ty) || Math.abs(cx - e.fx) < 0.01) return 0;
    const m = Math.sign(cx - e.fx) * Math.min(step, Math.abs(cx - e.fx));
    if (blockedAt(e.fx + m, e.fy)) return 0;
    e.fx += m; return Math.abs(m);
  }
  const tx = Math.floor(e.fx + Math.sign(d) * 0.6), cy = Math.floor(e.fy - 0.15) + 0.7;
  if (solidAt(tx, Math.floor(e.fy - 0.15)) || Math.abs(cy - e.fy) < 0.01) return 0;
  const m = Math.sign(cy - e.fy) * Math.min(step, Math.abs(cy - e.fy));
  if (blockedAt(e.fx, e.fy + m)) return 0;
  e.fy += m; return Math.abs(m);
}

function faceVec(e, dx, dy) {
  if (Math.abs(dx) > Math.abs(dy)) e.dir = dx > 0 ? 'right' : 'left';
  else if (dy) e.dir = dy > 0 ? 'down' : 'up';
}

function heldVec() {
  const k = EX.keys;
  let x = 0, y = 0;
  if (k.ArrowUp || k.w || k.KeyW || k.up) y -= 1;
  if (k.ArrowDown || k.s || k.KeyS || k.down) y += 1;
  if (k.ArrowLeft || k.a || k.KeyA || k.left) x -= 1;
  if (k.ArrowRight || k.d || k.KeyD || k.right) x += 1;
  const l = Math.hypot(x, y);
  return l ? [x / l, y / l] : null;
}

function update(dt) {
  const p = EX.player;
  const step = SPEED * dt;
  let moved = 0;
  const v = heldVec();
  if (v) {
    EX.path = []; EX.pending = null;
    faceVec(p, v[0], v[1]);
    moved = moveBy(p, v[0] * step, v[1] * step);
  } else if (EX.path.length) {
    // 클릭 이동: 칸 가운데를 차례로 지나간다
    const [tx, ty] = EX.path[0];
    const gx = tx + 0.5, gy = ty + 0.7;
    const dx = gx - p.fx, dy = gy - p.fy, d = Math.hypot(dx, dy);
    if (d < 0.06) EX.path.shift();
    else {
      const k = Math.min(step, d) / d;
      faceVec(p, dx, dy);
      moved = moveBy(p, dx * k, dy * k);
      if (!moved) { p.fx = gx; p.fy = gy; } // 모서리에 걸리면 칸 가운데로 맞춘다
      moved = moved || 0.001;
    }
  } else if (EX.pending) {
    const o = EX.pending;
    EX.pending = null;
    facePoint(p, o);
    interact(o);
  }
  p.moving = moved > 0;
  if (p.moving) {
    const before = Math.floor(p.dist * 2.4);
    p.dist += moved;
    if (Math.floor(p.dist * 2.4) !== before) {
      sfx('step', { vol: 0.3, rate: 0.9 + Math.random() * 0.2 });
      EX.puffs.push({ x: p.fx, y: p.fy, t: performance.now() }); // 발밑 먼지
    }
    EX.trail.push([p.fx, p.fy]);
    if (EX.trail.length > 400) EX.trail.shift();
  }
  // 코하루: 플레이어가 지나간 길을 0.9칸 뒤에서 따라온다
  const k = EX.koharu;
  let need = 0.9, tx = k.fx, ty = k.fy;
  for (let i = EX.trail.length - 1, lx = p.fx, ly = p.fy; i >= 0; i--) {
    const [x, y] = EX.trail[i];
    need -= Math.hypot(x - lx, y - ly);
    lx = x; ly = y;
    if (need <= 0) { tx = x; ty = y; break; }
  }
  const kdx = tx - k.fx, kdy = ty - k.fy, kd = Math.hypot(kdx, kdy);
  k.moving = kd > 0.01;
  if (k.moving) { faceVec(k, kdx, kdy); k.fx = tx; k.fy = ty; k.dist += kd; }
}

function facePoint(p, o) {
  const [px, py] = tileOf(p);
  const cx = Math.max(o.x, Math.min(px, o.x + (o.w || 1) - 1));
  const cy = Math.max(o.y, Math.min(py, o.y + (o.h || 1) - 1));
  if (cx > px) p.dir = 'right'; else if (cx < px) p.dir = 'left'; else if (cy > py) p.dir = 'down'; else if (cy < py) p.dir = 'up';
}

// 앞에 있는 오브젝트 (없으면 발밑)
function facingObj() {
  const p = EX.player;
  const [dx, dy] = DIRS[p.dir];
  const ax = Math.floor(p.fx + dx * 0.75), ay = Math.floor(p.fy - 0.15 + dy * 0.75);
  const [px, py] = tileOf(p);
  return objAt(ax, ay) || objAt(px, py);
}

async function interact(o) {
  if (!o || EX.paused) return;
  const h = EX.opts.on[o.id];
  sfx('select');
  // 처음 보는 필수 조사 지점이면 "!", 아니면 "…"
  const fresh = (EX.opts.required || []).includes(o.id) && !EX.examined.has(o.id);
  EX.emote = { ch: fresh ? '!' : '…', t: performance.now() };
  EX.paused = true;
  EX.keys = {};
  if (h) await h(o);
  else await say('rei', `(${o.label}. 별다른 건 없다.)`);
  hideText();
  clearChars();
  if (!EX) return;
  EX.examined.add(o.id);
  EX.paused = false;
  if (EX.done) finishExplore();
}

// BFS로 목표 칸(또는 오브젝트 옆 칸)까지 경로
function pathTo(tx, ty, adjacent) {
  const [sx, sy] = tileOf(EX.player);
  const key = (x, y) => y * EX.W + x;
  const prev = new Map([[key(sx, sy), null]]);
  const q = [[sx, sy]];
  const isGoal = (x, y) => (adjacent ? adjacent(x, y) : x === tx && y === ty);
  let found = null;
  while (q.length) {
    const [x, y] = q.shift();
    if (isGoal(x, y)) { found = [x, y]; break; }
    for (const [dx, dy] of Object.values(DIRS)) {
      const nx = x + dx, ny = y + dy;
      if (prev.has(key(nx, ny)) || solidAt(nx, ny)) continue;
      prev.set(key(nx, ny), [x, y]);
      q.push([nx, ny]);
    }
  }
  if (!found) return null;
  const path = [];
  let cur = found;
  while (cur) { path.unshift(cur); cur = prev.get(key(cur[0], cur[1])); }
  return path;
}

function clickTile(tx, ty) {
  const o = objAt(tx, ty);
  if (o) {
    const near = (x, y) => {
      const inside = x >= o.x && x < o.x + (o.w || 1) && y >= o.y && y < o.y + (o.h || 1);
      if (o.walkable && inside) return true;
      if (inside) return false;
      const dx = x < o.x ? o.x - x : x >= o.x + (o.w || 1) ? x - (o.x + (o.w || 1) - 1) : 0;
      const dy = y < o.y ? o.y - y : y >= o.y + (o.h || 1) ? y - (o.y + (o.h || 1) - 1) : 0;
      return dx + dy === 1;
    };
    const path = pathTo(0, 0, near);
    if (!path) return toast('거기엔 갈 수 없다.');
    EX.path = path;
    EX.pending = o;
    return;
  }
  const path = pathTo(tx, ty);
  if (path) { EX.path = path; EX.pending = null; }
}

// ---------- 그리기 ----------

// 캔버스 가로는 무대 가로(1280~1720)에 맞추고 맵은 가운데
function fitCanvas() {
  const cv = $('#explore'), cw = $('#stage').offsetWidth || 1280;
  if (cv.width !== cw) { cv.width = cw; EX.ctx.imageSmoothingEnabled = false; }
  EX.ox = Math.floor((cw - EX.W * TS) / 2);
}

function draw(now) {
  fitCanvas();
  const { ctx, map, ox, oy, W, H } = EX;
  const CW = ctx.canvas.width;
  // 밤하늘
  const g = ctx.createLinearGradient(0, 0, 0, 720);
  g.addColorStop(0, '#0d1022'); g.addColorStop(1, '#2b2f55');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, CW, 720);
  for (let i = 0; i < 60; i++) {
    const h = hash(i, 7);
    ctx.fillStyle = i % 3 ? '#f2d27a' : '#9fb3ff';
    ctx.fillRect(h % CW, 600 + ((h >> 10) % 120), 3, 3);
  }

  ctx.save();
  ctx.translate(ox, oy);
  ctx.scale(SCALE, SCALE);
  // 맵 그림이 있으면 그걸 깔고(가구까지 그려져 있음), 없으면 코드로 그린 임시 맵
  const art = map.img && map.img.ok;
  if (art) ctx.drawImage(map.img, 0, 0, W * TILE, H * TILE);
  else {
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const t = TERRAIN[map.rows[y][x]];
        if (t) t.draw(ctx, x * TILE, y * TILE, x, y, map);
      }
    }
  }
  // 오브젝트 + 캐릭터를 y순으로
  const drawables = [];
  // 맵 그림에 없는 물건(overlay)만 그림 위에 덧그린다
  map.objects.forEach((o) => { if (o.draw && visibleObj(o) && (!art || o.overlay)) drawables.push({ y: o.y, fn: () => OBJ_DRAW[o.draw](ctx, o.x * TILE, o.y * TILE) }); });
  // drawWalker는 칸 왼쪽 위 기준이라 발 위치에서 되돌린다
  const entPos = (e) => [e.fx - 0.5, e.fy - 1];
  const entFrame = (e) => (e.moving ? (Math.floor(e.dist * 3.2) % 2) + 1 : 0);
  const k = EX.koharu, p = EX.player;
  const [kx, ky] = entPos(k);
  drawables.push({ y: ky + 0.5, fn: () => drawWalker(ctx, 'koharu', k.dir, entFrame(k), kx, ky) });
  const [pxx, pyy] = entPos(p);
  drawables.push({ y: pyy + 0.501, fn: () => drawWalker(ctx, 'rei', p.dir, entFrame(p), pxx, pyy) });
  EX.extras.forEach((e) => drawables.push({ y: e.y, fn: () => {
    ctx.globalAlpha = 0.55 + 0.25 * Math.sin(now / 300);
    drawWalker(ctx, e.who, e.dir || 'down', 0, e.x, e.y);
    ctx.globalAlpha = 1;
  } }));
  // 발밑 먼지: 회색 점 세 개가 퍼지며 사라진다
  EX.puffs = EX.puffs.filter((f) => now - f.t < 320);
  EX.puffs.forEach((f) => {
    const k = (now - f.t) / 320, r = 1 + Math.floor(k * 4), x = Math.round(f.x * TILE), y = Math.round(f.y * TILE);
    ctx.fillStyle = k < 0.5 ? '#c9c4b8' : '#8f8a80';
    ctx.fillRect(x - r - 1, y - 1, 1, 1); ctx.fillRect(x + r, y - 1, 1, 1); ctx.fillRect(x, y - 1 - Math.floor(r / 2), 1, 1);
  });
  drawables.sort((a, b) => a.y - b.y).forEach((d) => d.fn());
  // 레이 머리 위 말풍선 (튀어 오르고 잠시 머문다)
  if (EX.emote) {
    const age = now - EX.emote.t;
    if (age > 1400 && !EX.paused) EX.emote = null;
    else {
      const hop = age < 120 ? -3 : age < 200 ? 1 : 0;
      const bx = Math.round(p.fx * TILE) - 5, by = Math.round(p.fy * TILE) - 38 + hop;
      ctx.fillStyle = '#1d1d22'; ctx.fillRect(bx - 1, by - 1, 12, 11); ctx.fillRect(bx + 3, by + 10, 3, 2);
      ctx.fillStyle = '#fbf8ee'; ctx.fillRect(bx, by, 10, 9); ctx.fillRect(bx + 4, by + 9, 1, 1);
      ctx.fillStyle = EX.emote.ch === '!' ? '#c94040' : '#1d1d22';
      if (EX.emote.ch === '!') { ctx.fillRect(bx + 4, by + 1, 2, 5); ctx.fillRect(bx + 4, by + 7, 2, 1); }
      else { ctx.fillRect(bx + 2, by + 6, 1, 1); ctx.fillRect(bx + 5, by + 6, 1, 1); ctx.fillRect(bx + 8, by + 6, 1, 1); }
    }
  }

  // 아직 안 본 필수 조사 지점에 ! 표시
  const bob = Math.round(Math.sin(now / 200) * 1.5);
  (EX.opts.required || []).forEach((id) => {
    if (EX.examined.has(id)) return;
    const o = map.objects.find((m) => m.id === id);
    if (!o || !visibleObj(o)) return;
    const cx = (o.x + (o.w || 1) / 2) * TILE;
    const cy = o.y * TILE - 12 + bob;
    px(ctx, cx - 3, cy - 1, 6, 9, '#1d1d22');
    px(ctx, cx - 2, cy, 4, 5, '#f2c14e');
    px(ctx, cx - 2, cy + 6, 4, 2, '#f2c14e');
  });

  // 마우스가 올라간 칸
  if (EX.hover) {
    const [hx, hy] = EX.hover;
    const o = objAt(hx, hy);
    ctx.strokeStyle = o ? '#f2c14e' : 'rgba(255,255,255,.35)';
    ctx.lineWidth = 1;
    if (o) ctx.strokeRect(o.x * TILE + 0.5, o.y * TILE + 0.5, (o.w || 1) * TILE - 1, (o.h || 1) * TILE - 1);
    else ctx.strokeRect(hx * TILE + 0.5, hy * TILE + 0.5, TILE - 1, TILE - 1);
  }
  ctx.restore();

  // 오브젝트 이름 표시
  if (EX.hover && !EX.paused) {
    const o = objAt(EX.hover[0], EX.hover[1]);
    if (o) {
      ctx.font = '22px Galmuri11, sans-serif';
      const label = `${o.label}  (클릭해서 조사)`;
      const w = ctx.measureText(label).width + 24;
      const lx = Math.min(CW - w - 10, ox + (o.x + (o.w || 1) / 2) * TS - w / 2);
      const ly = oy + o.y * TS - 46;
      ctx.fillStyle = 'rgba(20,20,26,.9)'; ctx.fillRect(lx, ly, w, 34);
      ctx.fillStyle = '#fff'; ctx.fillText(label, lx + 12, ly + 24);
    }
  }
  // 조작 안내
  if (TOUCH) return; // 터치 화면엔 키보드 안내가 필요 없다
  ctx.font = '18px Galmuri11, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.75)';
  ctx.fillText('이동: 방향키/WASD 또는 바닥 클릭   ·   조사: Space/Enter 또는 물건 클릭', 20, 708);
}

// ---------- 입력 ----------

function canvasTile(e) {
  const r = $('#explore').getBoundingClientRect();
  const sx = ((e.clientX - r.left) / r.width) * $('#explore').width;
  const sy = ((e.clientY - r.top) / r.height) * 720;
  return [Math.floor((sx - EX.ox) / TS), Math.floor((sy - EX.oy) / TS)];
}

$('#explore').addEventListener('mousemove', (e) => { if (EX) EX.hover = canvasTile(e); });
$('#explore').addEventListener('mouseleave', () => { if (EX) EX.hover = null; });
$('#explore').addEventListener('click', (e) => {
  if (!EX || EX.paused || G.busyModal) return;
  const [tx, ty] = canvasTile(e);
  clickTile(tx, ty);
});

addEventListener('keydown', (e) => {
  if (!EX || EX.paused || G.busyModal) return;
  if ([' ', 'Enter', 'e', 'z'].includes(e.key)) { e.preventDefault(); interact(facingObj()); return; }
  EX.keys[e.key] = true; EX.keys[e.code] = true;
  if (e.key.startsWith('Arrow')) e.preventDefault();
});
addEventListener('keyup', (e) => { if (EX) { EX.keys[e.key] = false; EX.keys[e.code] = false; } });

document.querySelectorAll('#pad [data-dir]').forEach((b) => {
  const d = b.dataset.dir;
  b.addEventListener('pointerdown', (e) => { e.preventDefault(); if (EX) EX.keys[d] = true; });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => b.addEventListener(ev, () => { if (EX) EX.keys[d] = false; }));
});
$('#pad-a').addEventListener('click', (e) => { e.stopPropagation(); if (EX && !EX.paused) interact(facingObj()); });
