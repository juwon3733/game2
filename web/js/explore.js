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
    label: '하나미즈키 맨션 5층',
    hallWallRow: 1,
    rows: [
      '##########################',
      '#WWWWWWWWWWWWWWWWWWWWWWWW#',
      '#E.......................#',
      '#........................#',
      '#########D########N#######',
      '#WWWWWWWW,WWWWWWWW#XXXXXXX',
      '#,,,,,,,,,,,,,,,,,#XXXXXXX',
      '#,,,,,,,,,,,,,,,,,#XXXXXXX',
      '#,,,,,,,,,,,,,,,,,#XXXXXXX',
      '#,,,,,,,,,,,,,,,,,#XXXXXXX',
      '#WWWWWWgggWWWWWWWW#XXXXXXX',
      '#________________P______#X',
      '#RRRRRRRRRRRRRRRRRRRRRRRR#',
    ],
    objects: [
      { id: 'parcel', x: 8, y: 3, solid: true, draw: 'parcel', label: '택배 상자' },
      { id: 'door', x: 9, y: 4, label: '사에키 씨 집 현관 문고리' },
      { id: 'shoes', x: 10, y: 6, draw: 'shoes', label: '신발', walkable: true },
      { id: 'calendar', x: 5, y: 5, draw: 'calendar', label: '달력' },
      { id: 'piano', x: 2, y: 7, w: 2, solid: true, draw: 'piano', label: '피아노' },
      { id: 'sofa', x: 12, y: 6, w: 2, solid: true, draw: 'sofa', label: '소파' },
      { id: 'table', x: 8, y: 8, w: 2, solid: true, draw: 'table', label: '테이블' },
      { id: 'pot', x: 16, y: 11, solid: true, draw: 'pot', label: '베란다 화분' },
      { id: 'partition', x: 17, y: 11, label: '비상 칸막이' },
      { id: 'potPink', x: 18, y: 11, solid: true, draw: 'potPink', label: '옆집 화분' },
      { id: 'railing', x: 10, y: 12, label: '난간' },
      { id: 'nbdoor', x: 18, y: 4, label: '옆집 현관' },
      { id: 'stairs', x: 1, y: 2, label: '계단' },
    ],
  },
};

// ---------- 탐색 상태 ----------

let EX = null; // 진행 중인 탐색

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
      player: { x: opts.start[0], y: opts.start[1], dir: 'down', move: null },
      koharu: { x: opts.start[0], y: opts.start[1], dir: 'down', move: null },
      keys: {}, path: [], hover: null, paused: false, done: false,
      examined: new Set(opts.examined || []),
      extras: opts.extras || [],   // 시오리 등 추가 스프라이트
      end: () => { EX.done = true; },
      resolve,
    };
    cv.classList.remove('hidden');
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
  const o = objAt(x, y);
  return !!(o && o.solid);
}

const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };

function startMove(ent, dir) {
  ent.dir = dir;
  const [dx, dy] = DIRS[dir];
  const nx = ent.x + dx, ny = ent.y + dy;
  if (solidAt(nx, ny)) return false;
  // 코하루는 플레이어가 있던 칸으로 따라온다
  const k = EX.koharu;
  const kdx = ent.x - k.x, kdy = ent.y - k.y;
  if (Math.abs(kdx) + Math.abs(kdy) === 1) {
    k.dir = kdx > 0 ? 'right' : kdx < 0 ? 'left' : kdy > 0 ? 'down' : 'up';
    k.move = { fx: k.x, fy: k.y, t: 0 };
    k.x = ent.x; k.y = ent.y;
  } else if (Math.abs(kdx) + Math.abs(kdy) > 1) {
    k.x = ent.x; k.y = ent.y; k.move = null;
  }
  ent.move = { fx: ent.x, fy: ent.y, t: 0 };
  ent.x = nx; ent.y = ny;
  return true;
}

function heldDir() {
  const k = EX.keys;
  if (k.ArrowUp || k.w || k.KeyW || k.up) return 'up';
  if (k.ArrowDown || k.s || k.KeyS || k.down) return 'down';
  if (k.ArrowLeft || k.a || k.KeyA || k.left) return 'left';
  if (k.ArrowRight || k.d || k.KeyD || k.right) return 'right';
  return null;
}

const SPEED = 6.5; // 칸/초

function update(dt) {
  const p = EX.player;
  for (const ent of [p, EX.koharu]) {
    if (ent.move) {
      ent.move.t += dt * SPEED;
      if (ent.move.t >= 1) ent.move = null;
    }
  }
  if (p.move) return;
  const d = heldDir();
  if (d) { EX.path = []; EX.pending = null; if (!startMove(p, d)) p.dir = d; return; }
  if (EX.path.length) {
    const [nx, ny] = EX.path.shift();
    const dir = nx > p.x ? 'right' : nx < p.x ? 'left' : ny > p.y ? 'down' : 'up';
    if (!startMove(p, dir)) EX.path = [];
    return;
  }
  if (EX.pending) {
    const o = EX.pending;
    EX.pending = null;
    facePoint(p, o);
    interact(o);
  }
}

function facePoint(p, o) {
  const cx = Math.max(o.x, Math.min(p.x, o.x + (o.w || 1) - 1));
  const cy = Math.max(o.y, Math.min(p.y, o.y + (o.h || 1) - 1));
  if (cx > p.x) p.dir = 'right'; else if (cx < p.x) p.dir = 'left'; else if (cy > p.y) p.dir = 'down'; else if (cy < p.y) p.dir = 'up';
}

// 앞에 있는 오브젝트 (없으면 발밑)
function facingObj() {
  const p = EX.player;
  const [dx, dy] = DIRS[p.dir];
  return objAt(p.x + dx, p.y + dy) || objAt(p.x, p.y);
}

async function interact(o) {
  if (!o || EX.paused) return;
  const h = EX.opts.on[o.id];
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
  const p = EX.player;
  const key = (x, y) => y * EX.W + x;
  const prev = new Map([[key(p.x, p.y), null]]);
  const q = [[p.x, p.y]];
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
  while (cur && !(cur[0] === p.x && cur[1] === p.y)) { path.unshift(cur); cur = prev.get(key(cur[0], cur[1])); }
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

function draw(now) {
  const { ctx, map, ox, oy, W, H } = EX;
  // 밤하늘
  const g = ctx.createLinearGradient(0, 0, 0, 720);
  g.addColorStop(0, '#0d1022'); g.addColorStop(1, '#2b2f55');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 1280, 720);
  for (let i = 0; i < 60; i++) {
    const h = hash(i, 7);
    ctx.fillStyle = i % 3 ? '#f2d27a' : '#9fb3ff';
    ctx.fillRect(h % 1280, 600 + ((h >> 10) % 120), 3, 3);
  }

  ctx.save();
  ctx.translate(ox, oy);
  ctx.scale(SCALE, SCALE);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const t = TERRAIN[map.rows[y][x]];
      if (t) t.draw(ctx, x * TILE, y * TILE, x, y, map);
    }
  }
  // 오브젝트 + 캐릭터를 y순으로
  const drawables = [];
  map.objects.forEach((o) => { if (o.draw && visibleObj(o)) drawables.push({ y: o.y, fn: () => OBJ_DRAW[o.draw](ctx, o.x * TILE, o.y * TILE) }); });
  const entPos = (e) => {
    if (!e.move) return [e.x, e.y];
    const t = Math.min(1, e.move.t);
    return [e.move.fx + (e.x - e.move.fx) * t, e.move.fy + (e.y - e.move.fy) * t];
  };
  const entFrame = (e) => (e.move ? (Math.floor(e.move.t * 2 + (e.x + e.y)) % 2) + 1 : 0);
  const k = EX.koharu, p = EX.player;
  const [kx, ky] = entPos(k);
  drawables.push({ y: ky, fn: () => ctx.drawImage(sprite('koharu', k.dir, entFrame(k)), kx * TILE, ky * TILE - 4) });
  const [pxx, pyy] = entPos(p);
  drawables.push({ y: pyy + 0.01, fn: () => ctx.drawImage(sprite('rei', p.dir, entFrame(p)), pxx * TILE, pyy * TILE - 4) });
  EX.extras.forEach((e) => drawables.push({ y: e.y, fn: () => {
    ctx.globalAlpha = 0.55 + 0.25 * Math.sin(now / 300);
    ctx.drawImage(sprite(e.who, e.dir || 'down', 0), e.x * TILE, e.y * TILE - 4);
    ctx.globalAlpha = 1;
  } }));
  drawables.sort((a, b) => a.y - b.y).forEach((d) => d.fn());

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
      const lx = Math.min(1280 - w - 10, ox + (o.x + (o.w || 1) / 2) * TS - w / 2);
      const ly = oy + o.y * TS - 46;
      ctx.fillStyle = 'rgba(20,20,26,.9)'; ctx.fillRect(lx, ly, w, 34);
      ctx.fillStyle = '#fff'; ctx.fillText(label, lx + 12, ly + 24);
    }
  }
  // 조작 안내
  ctx.font = '18px Galmuri11, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.75)';
  ctx.fillText('이동: 방향키/WASD 또는 바닥 클릭   ·   조사: Space/Enter 또는 물건 클릭', 20, 708);
}

// ---------- 입력 ----------

function canvasTile(e) {
  const r = $('#explore').getBoundingClientRect();
  const sx = ((e.clientX - r.left) / r.width) * 1280;
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
