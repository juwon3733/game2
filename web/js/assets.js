// 이미지 경로와 임시 그림.
// assets/ 폴더에 정해진 이름으로 PNG를 넣으면 자동으로 그 이미지를 쓴다. 없으면 임시 그림.

const ASSET = {
  portrait: (char, face) => `assets/portraits/${char}_${face}.png`,
  bg: (id) => `assets/bg/${id}.png`,
  cut: (id) => `assets/cuts/${id}.png`,
  map: (id) => `assets/maps/${id}.png`,
  sprite: (who) => `assets/sprites/${who}.png`,
  title: () => 'assets/title/key.png',
  cg: (id) => `assets/cg/${id}.png`,
};

// 있으면 쓰고 없으면 null로 남는 이미지 (탐색 맵, 걷는 캐릭터)
function optionalImg(src) {
  const img = new Image();
  img.ok = false;
  img.onload = () => { img.ok = true; };
  img.src = src;
  return img;
}

const svgUrl = (svg) => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

// 이미지가 있으면 그걸, 없으면 fallback을 넣는다.
function loadImg(img, src, fallback) {
  img.onerror = () => { img.onerror = null; img.src = fallback(); img.classList.add('placeholder'); };
  img.src = src;
}

// ---------- 임시 초상 (상반신 실루엣) ----------

const FACE_DRAW = {
  normal:    '<path d="M196 300 h44 M272 300 h44" stroke="#222" stroke-width="9" stroke-linecap="round"/><path d="M236 372 q20 8 40 0" stroke="#a55" stroke-width="6" fill="none"/>',
  serious:   '<path d="M190 280 l52 10 M322 280 l-52 10" stroke="#222" stroke-width="8"/><circle cx="218" cy="306" r="9" fill="#222"/><circle cx="294" cy="306" r="9" fill="#222"/><path d="M236 376 h40" stroke="#a55" stroke-width="6"/>',
  surprised: '<circle cx="218" cy="302" r="16" fill="#fff" stroke="#222" stroke-width="6"/><circle cx="294" cy="302" r="16" fill="#fff" stroke="#222" stroke-width="6"/><ellipse cx="256" cy="380" rx="12" ry="16" fill="#a55"/>',
  happy:     '<path d="M198 308 q20 -24 40 0 M274 308 q20 -24 40 0" stroke="#222" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M226 366 q30 30 60 0" stroke="#a55" stroke-width="7" fill="#e88"/>',
  worried:   '<path d="M192 276 l48 -12 M320 276 l-48 -12" stroke="#222" stroke-width="7"/><circle cx="218" cy="306" r="10" fill="#222"/><circle cx="294" cy="306" r="10" fill="#222"/><path d="M234 382 q22 -12 44 0" stroke="#a55" stroke-width="6" fill="none"/>',
  flustered: '<circle cx="218" cy="304" r="12" fill="#fff" stroke="#222" stroke-width="5"/><circle cx="294" cy="304" r="12" fill="#fff" stroke="#222" stroke-width="5"/><path d="M230 378 q8 -10 16 0 q8 10 16 0 q8 -10 16 0" stroke="#a55" stroke-width="5" fill="none"/><path d="M340 230 l10 30 M356 236 l6 22" stroke="#6ab" stroke-width="5"/>',
  angry:     '<path d="M190 272 l52 22 M322 272 l-52 22" stroke="#222" stroke-width="9"/><circle cx="220" cy="310" r="8" fill="#222"/><circle cx="292" cy="310" r="8" fill="#222"/><path d="M234 384 q22 -14 44 0" stroke="#a55" stroke-width="7" fill="none"/>',
  sad:       '<path d="M196 300 q22 10 44 0 M272 300 q22 10 44 0" stroke="#222" stroke-width="8" fill="none"/><path d="M238 384 q18 -8 36 0" stroke="#a55" stroke-width="6" fill="none"/>',
  crying:    '<path d="M196 300 q22 -12 44 0 M272 300 q22 -12 44 0" stroke="#222" stroke-width="8" fill="none"/><path d="M212 312 v46 M300 312 v46" stroke="#7cc4f0" stroke-width="10" stroke-linecap="round"/><ellipse cx="256" cy="384" rx="16" ry="10" fill="#a55"/>',
};

function portraitPlaceholder(char, face) {
  const c = CHARACTERS[char];
  const longHair = ['koharu', 'himari', 'shiori', 'asagiri'].includes(char);
  const hair = longHair
    ? `<path d="M120 300 q0 -200 136 -200 q136 0 136 200 v260 h-50 v-220 h-172 v220 h-50z" fill="${c.hair}"/>`
    : `<path d="M140 290 q0 -180 116 -180 q116 0 116 180 l-20 -40 l-30 30 l-20 -50 l-40 40 l-30 -50 l-30 40 l-30 -30z" fill="${c.hair}"/>`;
  const extra = char === 'koharu' ? `<circle cx="400" cy="220" r="40" fill="${c.hair}"/><rect x="372" y="236" width="20" height="14" fill="#7ac4f0"/>`
    : char === 'himari' ? `<circle cx="120" cy="250" r="34" fill="${c.hair}"/><circle cx="392" cy="250" r="34" fill="${c.hair}"/><text x="350" y="200" font-size="40" fill="#e0679a">♪</text>`
    : char === 'towa' ? `<path d="M160 150 l20 -70 l40 60z M352 150 l-20 -70 l-40 60z" fill="#333"/><rect x="150" y="230" width="30" height="80" rx="10" fill="#333"/><rect x="332" y="230" width="30" height="80" rx="10" fill="#333"/>`
    : char === 'kurogane' ? `<rect x="300" y="380" width="70" height="8" fill="#e07a9a" transform="rotate(-20 300 380)"/><circle cx="372" cy="356" r="16" fill="#e07a9a"/>`
    : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="768" viewBox="0 0 512 768">
    <path d="M60 768 q20 -260 196 -270 q176 10 196 270z" fill="${c.outfit}" stroke="#111" stroke-width="6"/>
    <path d="M200 500 l56 90 l56 -90" fill="none" stroke="${c.accent}" stroke-width="14"/>
    <rect x="226" y="420" width="60" height="80" fill="#f2d3b8"/>
    ${longHair ? hair : ''}
    <ellipse cx="256" cy="300" rx="120" ry="140" fill="#f2d3b8" stroke="#111" stroke-width="6"/>
    ${longHair ? `<path d="M136 270 q0 -170 120 -170 q120 0 120 170 q-40 -60 -120 -70 q-80 10 -120 70z" fill="${c.hair}"/>` : hair}
    ${extra}
    ${FACE_DRAW[face] || FACE_DRAW.normal}
    <rect x="96" y="700" width="320" height="52" fill="#111" opacity=".75"/>
    <text x="256" y="736" font-size="28" text-anchor="middle" fill="#fff" font-family="sans-serif">${c.name} · ${face} (임시)</text>
  </svg>`;
  return svgUrl(svg);
}

// ---------- 임시 배경 ----------

function bgPlaceholder(id) {
  const b = BACKGROUNDS[id] || { label: id, sky: ['#333', '#666'] };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${b.sky[0]}"/><stop offset="1" stop-color="${b.sky[1]}"/></linearGradient>
    <pattern id="t" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#000" opacity=".18"/></pattern></defs>
    <rect width="1280" height="720" fill="url(#g)"/>
    <rect y="470" width="1280" height="250" fill="#000" opacity=".25"/>
    <rect width="1280" height="720" fill="url(#t)"/>
    <rect x="80" y="140" width="260" height="200" fill="#fff" opacity=".08"/>
    <rect x="940" y="120" width="240" height="300" fill="#fff" opacity=".06"/>
    <text x="640" y="80" font-size="30" text-anchor="middle" fill="#fff" opacity=".7" font-family="sans-serif">${b.label} (임시 배경)</text>
  </svg>`;
  return svgUrl(svg);
}

// ---------- 컷 ----------

// 컷 정보: 내 컷(CUTS) 또는 증언 컷(WITNESSES의 statements)
function cutInfo(id) {
  if (typeof ITEMS !== 'undefined' && ITEMS[id]) return { title: ITEMS[id].title, owner: '물증', color: '#4a4d5e', desc: ITEMS[id].desc, item: true };
  if (CUTS[id]) {
    const c = CUTS[id];
    return { title: c.title, owner: OWNERS[c.owner].name, color: OWNERS[c.owner].color, desc: c.desc, sfx: c.sfx, bubble: c.bubble };
  }
  for (const w of Object.values(WITNESSES)) {
    const s = w.statements.find((st) => id.startsWith(st.cut));
    if (s) {
      const truth = id.endsWith('_truth');
      return {
        title: '증언', owner: CHARACTERS[w.char].name, color: '#555',
        desc: truth ? s.truthDesc : s.cutDesc, dist: truth ? null : s.dist,
      };
    }
  }
  return { title: id, owner: '', color: '#555', desc: '' };
}

// 컷 이미지를 화면 가득 크게 본다. 모달 위에도 뜬다.
// 단서 짚기: 컷에 spots가 있으면 크게 볼 때 그림을 눌러 단어 조각을 얻는다
function spotsOf(id) { return (CUTS[id] && CUTS[id].spots) || []; }

function zoomCut(src, info, id) {
  const z = document.createElement('div');
  z.className = 'zoom';
  const spots = spotsOf(id);
  z.innerHTML = `<div class="zoom-box"><div class="zoom-head">${info.owner} 시점 「${info.title}」${spots.length ? '<small>수상한 곳을 눌러 보자</small>' : ''}</div><div class="zoom-img"><img src="${src}"></div>${diff().zoomDesc ? `<div class="zoom-cap">${info.desc}</div>` : ''}<button>닫기</button></div>`;
  const img = z.querySelector('img');
  img.onclick = (e) => {
    e.stopPropagation();
    if (!spots.length) return;
    const r = img.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    const s = spots.find((p) => x >= p.x && x <= p.x + p.w && y >= p.y && y <= p.y + p.h);
    if (!s) return;
    sfx('press');
    const mark = document.createElement('span');
    mark.className = 'spot-mark';
    Object.assign(mark.style, { left: (s.x + s.w / 2) * 100 + '%', top: (s.y + s.h / 2) * 100 + '%' });
    z.querySelector('.zoom-img').appendChild(mark);
    gainWord(s.word);
  };
  z.onclick = (e) => { e.stopPropagation(); z.remove(); };
  (document.getElementById('stage') || document.body).appendChild(z);
}

// 컷 하나의 화면 요소. 이미지가 없으면 글로 된 임시 컷.
function cutView(id, opts = {}) {
  const info = cutInfo(id);
  const el = document.createElement('div');
  el.className = 'cutv' + (info.dist ? ' dist-' + info.dist : '');
  el.dataset.cut = id;
  el.style.setProperty('--owner', info.color);
  el.innerHTML = `<div class="cutv-head"><span>${info.owner} 시점</span><span>「${info.title}」</span></div><div class="cutv-body"></div>`;
  const body = el.querySelector('.cutv-body');
  // 물증은 그림 대신 메모 카드
  if (info.item) {
    el.classList.add('item');
    el.querySelector('.cutv-head').innerHTML = `<span>물증</span><span>${info.title}</span>`;
    body.innerHTML = `<div class="cutv-memo">${info.desc}</div>`;
    return el;
  }
  if (CUTS[id] && CUTS[id].blank) {
    el.classList.add('blank');
    body.innerHTML = `<div class="cutv-whisper">${info.desc}</div>`;
    return el;
  }
  const img = new Image();
  img.className = 'cutv-img';
  img.draggable = false;
  img.onload = () => {
    body.classList.add('has-img');
    // 쉬움에서만 그림 아래 설명을 붙인다. 보통·어려움은 그림 속 단서를 직접 읽는다.
    if (diff().caption) body.insertAdjacentHTML('afterend', `<div class="cutv-cap">${info.desc}</div>`);
    const z = document.createElement('button');
    z.className = 'cutv-zoom';
    z.textContent = '🔍';
    z.title = '크게 보기';
    z.onclick = (e) => { e.stopPropagation(); zoomCut(img.src, info, id); };
    el.querySelector('.cutv-head').appendChild(z); // 그림 위가 아니라 머리띠에 둬서 단서를 가리지 않게
  };
  img.onerror = () => {
    img.remove();
    body.innerHTML = `${info.sfx ? `<div class="cutv-sfx">${info.sfx}</div>` : ''}<div class="cutv-desc">${info.desc}</div>`;
    // 그림이 아직 없을 때는 살펴볼 곳을 글로 보여 준다
    const sp = spotsOf(id);
    if (sp.length && !opts.noSpots) {
      body.insertAdjacentHTML('beforeend', `<div class="spot-chips">${sp.map((s, i) => `<button data-i="${i}">${s.label}</button>`).join('')}</div>`);
      body.querySelectorAll('.spot-chips button').forEach((b) => (b.onclick = (e) => { e.stopPropagation(); sfx('press'); gainWord(sp[b.dataset.i].word); b.classList.add('got'); }));
    }
    if (info.dist) body.insertAdjacentHTML('beforeend', `<span class="cutv-dist">${info.dist}</span>`);
  };
  img.src = ASSET.cut(id);
  body.appendChild(img);
  if (info.dist && !opts.noDistTag) el.insertAdjacentHTML('beforeend', `<span class="dist-tag">${info.dist}</span>`);
  if (info.bubble && opts.fills) {
    const lineId = opts.fills[id];
    el.classList.add('has-bubble');
    el.insertAdjacentHTML('beforeend', `<div class="bubble ${info.bubble}${lineId ? '' : ' empty'}" data-bubble="${id}"><span>${lineId ? LINES[lineId].text : '…'}</span></div>`);
  }
  return el;
}
