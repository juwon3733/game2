// 연출 효과. 전부 저해상도(무대의 1/4) 캔버스에 디더링으로 그려서 PC-98 도트 느낌을 맞춘다.
//  - 아래층(#fx-amb): 배경 분위기(먼지, 무대 연기와 조명, 반짝이, 유령) — 대사창 아래
//  - 위층(#fx-top): 장면 전환 디더, 집중선, 잔상 읽기 파문, 지우기 — 화면 맨 위
// 설정의 [화면 효과: 줄이기]면 번쩍임·반전·집중선을 끈다.

const FX = (() => {
  const PX = 4; // 캔버스 1픽셀 = 무대 4px
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  const stage = $('#stage');
  const mk = (id, z) => {
    const c = document.createElement('canvas');
    c.id = id;
    c.className = 'fx-canvas';
    c.style.zIndex = z;
    stage.appendChild(c);
    return c;
  };
  const amb = mk('fx-amb', 18), top = mk('fx-top', 92), back = mk('fx-back', 'auto');
  $('#bg').after(back); // 무대 조명·연기는 인물 뒤에
  const ac = amb.getContext('2d'), tc = top.getContext('2d'), bc = back.getContext('2d');
  let W = 320, H = 180;

  // 4×4 디더 무늬: level 0(투명) ~ 16(꽉 참)
  const patCache = {};
  function pat(ctx, level, color) {
    const key = level + color;
    if (!patCache[key]) {
      const c = document.createElement('canvas');
      c.width = c.height = 4;
      const x = c.getContext('2d');
      x.fillStyle = color;
      for (let i = 0; i < 16; i++) if (BAYER[i] < level) x.fillRect(i % 4, i >> 2, 1, 1);
      patCache[key] = c;
    }
    return ctx.createPattern(patCache[key], 'repeat');
  }
  const reduce = () => SETTINGS.fxReduce === 1;
  const rnd = (a, b) => a + Math.random() * (b - a);

  // ---------- 분위기 ----------
  let mood = null, parts = [];
  const MOODS = {
    dust:    { n: 34, init: () => ({ x: rnd(0, W), y: rnd(0, H), vx: rnd(-2, 2), vy: rnd(-3, -0.5), t: rnd(0, 6) }), color: '#f2e2b0' },
    ghost:   { n: 40, init: () => ({ x: rnd(0, W), y: rnd(H * 0.3, H), vx: rnd(-1, 1), vy: rnd(-8, -3), t: rnd(0, 6) }), color: '#e9e3d3' },
    glitter: { n: 26, init: () => ({ x: rnd(0, W), y: rnd(0, H), vx: 0, vy: 0, t: rnd(0, 6) }), color: '#fff6c8' },
    haze:    { n: 0 },
    stage:   { n: 20, init: () => ({ x: rnd(0, W), y: rnd(0, H), vx: rnd(-1, 1), vy: rnd(-2, -0.5), t: rnd(0, 6) }), color: '#cfd8ff' },
  };
  // 배경마다 기본 분위기
  const MOOD_OF = { office: 'dust', interrogate: 'dust', cafe: 'dust', crescent_stage: 'stage', booth: 'haze', greenroom: 'dust', backstage: 'dust', tendo_office: 'dust' };
  let override = null;

  function setMood(m) {
    if (m === mood) return;
    mood = m;
    if (!override) refill();
  }

  // 지금 보이는 분위기에 맞게 입자를 다시 뿌린다
  function refill() {
    const M = MOODS[override || mood];
    parts = M && M.n ? Array.from({ length: M.n }, M.init) : [];
  }

  function drawAmb(t, dt) {
    ac.clearRect(0, 0, W, H);
    bc.clearRect(0, 0, W, H);
    const m = override || mood;
    if (!m) return;
    const M = MOODS[m];
    if (m === 'haze' || m === 'stage') drawHaze(t);
    if (m === 'stage') drawBeams(t);
    for (const p of parts) {
      p.x += p.vx * dt; p.y += p.vy * dt; p.t += dt;
      if (p.y < -2) { p.y = H + 1; p.x = rnd(0, W); }
      if (p.x < -2) p.x = W + 1; else if (p.x > W + 2) p.x = -1;
      const blink = Math.sin(p.t * 2.3);
      ac.fillStyle = M.color;
      if (m === 'glitter') {
        if (blink < 0.3) continue;
        const s = blink > 0.85 ? 2 : 1, x = Math.round(p.x), y = Math.round(p.y);
        ac.fillRect(x - s, y, s * 2 + 1, 1); ac.fillRect(x, y - s, 1, s * 2 + 1);
      } else if (blink > -0.4) {
        ac.globalAlpha = m === 'ghost' ? 0.9 : 0.55;
        ac.fillRect(Math.round(p.x), Math.round(p.y), 1, 1);
        ac.globalAlpha = 1;
      }
    }
  }
  // 무대 연기: 디더 띠가 천천히 흐른다
  function drawHaze(t) {
    for (let i = 0; i < 3; i++) {
      const y = H * (0.45 + i * 0.16) + Math.sin(t / 3000 + i * 2) * 6;
      const off = (t / (60 + i * 25)) % 8;
      bc.save();
      bc.translate(Math.round(off), 0);
      bc.fillStyle = pat(bc, 2 + i, '#d8dcf0');
      bc.globalAlpha = 0.28;
      bc.fillRect(-8, Math.round(y), W + 16, Math.round(H * 0.12));
      bc.restore();
    }
  }
  // 라이브하우스 조명: 위에서 내려오는 빛줄기가 천천히 흔들린다
  function drawBeams(t) {
    const cols = ['#5a7cff', '#ff5ab0', '#ffd25a'];
    for (let i = 0; i < 3; i++) {
      const sx = W * (0.25 + i * 0.25), ang = Math.sin(t / (2400 + i * 500) + i) * 0.35;
      const ex = sx + Math.tan(ang) * H, half = W * 0.07;
      bc.fillStyle = pat(bc, 2, cols[i]);
      bc.globalAlpha = 0.32;
      bc.beginPath();
      bc.moveTo(sx - 2, 0); bc.lineTo(sx + 2, 0); bc.lineTo(ex + half, H); bc.lineTo(ex - half, H);
      bc.closePath(); bc.fill();
      bc.globalAlpha = 1;
    }
  }

  // ---------- 위층 효과 ----------
  let fadeLevel = 0, fadeColor = '#000';
  let lines = null;    // 집중선 { until, color }
  let rings = null;    // 잔상 파문 { start, ms }
  let wipe = null;     // 가장자리부터 지우기 { start, ms, color, back }

  function drawTop(t) {
    tc.clearRect(0, 0, W, H);
    if (lines && t < lines.until) drawLines(t);
    else lines = null;
    if (rings) {
      const k = (t - rings.start) / rings.ms;
      if (k >= 1) rings = null;
      else for (let r = 0; r < 3; r++) {
        const rr = (k * 1.4 - r * 0.18) * W * 0.6;
        if (rr <= 0) continue;
        tc.strokeStyle = pat(tc, Math.max(1, Math.round(10 * (1 - k))), '#ffffff');
        tc.lineWidth = 2;
        tc.beginPath(); tc.ellipse(W / 2, H / 2, rr, rr * 0.62, 0, 0, Math.PI * 2); tc.stroke();
      }
    }
    if (wipe) drawWipe(t);
    if (fadeLevel > 0) {
      tc.fillStyle = fadeLevel >= 16 ? fadeColor : pat(tc, fadeLevel, fadeColor);
      tc.fillRect(0, 0, W, H);
    }
  }
  // 만화 집중선
  function drawLines(t) {
    if (Math.floor(t / 50) === lines.frame) { tc.drawImage(lines.buf, 0, 0); return; }
    lines.frame = Math.floor(t / 50);
    const b = lines.buf, x = b.getContext('2d');
    if (b.width !== W) { b.width = W; b.height = H; }
    x.clearRect(0, 0, W, H);
    x.strokeStyle = lines.color;
    x.lineWidth = 1;
    const cx = W / 2, cy = H / 2;
    for (let i = 0; i < 70; i++) {
      const a = rnd(0, Math.PI * 2), r0 = rnd(0.42, 0.62), len = rnd(0.35, 0.8);
      x.beginPath();
      x.moveTo(Math.round(cx + Math.cos(a) * W * r0), Math.round(cy + Math.sin(a) * H * r0 * 1.2));
      x.lineTo(Math.round(cx + Math.cos(a) * W * (r0 + len)), Math.round(cy + Math.sin(a) * H * (r0 + len) * 1.2));
      x.stroke();
    }
    tc.drawImage(b, 0, 0);
  }
  // 가장자리부터 안쪽으로 디더가 번지며 덮는다
  function drawWipe(t) {
    const k = Math.min(1, (t - wipe.start) / wipe.ms);
    const step = 6;
    for (let y = 0; y < H; y += step) {
      for (let x = 0; x < W; x += step) {
        const d = Math.min(x, W - x, y * W / H, (H - y) * W / H) / (W / 2); // 0 가장자리 ~ 1 가운데
        const lv = Math.round(Math.max(0, Math.min(16, (k * 1.4 - d) * 24)));
        if (!lv) continue;
        tc.fillStyle = lv >= 16 ? wipe.color : pat(tc, lv, wipe.color);
        tc.fillRect(x, y, step, step);
      }
    }
  }

  // ---------- 루프 ----------
  let last = performance.now();
  function loop(t) {
    const w = Math.max(1, Math.round(stage.offsetWidth / PX));
    if (w !== W) { W = amb.width = top.width = back.width = w; H = amb.height = top.height = back.height = 180; refill(); }
    const dt = Math.min(0.1, (t - last) / 1000);
    last = t;
    drawAmb(t, dt);
    drawTop(t);
    requestAnimationFrame(loop);
  }
  amb.width = top.width = back.width = W; amb.height = top.height = back.height = H;
  requestAnimationFrame(loop);

  const once = (el, cls, ms) => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(() => el.classList.remove(cls), ms); };

  return {
    // 배경이 바뀔 때 기본 분위기
    bg(id) { setMood(MOOD_OF[id] || null); },
    // 장면에서 잠깐 분위기를 덮어쓴다 (null이면 원래대로)
    mood(m) { override = m; refill(); },
    // 디더 장면 전환
    fade(on, ms = 450, color = '#000') {
      fadeColor = color;
      const from = fadeLevel, to = on ? 16 : 0;
      if (G.skip) ms = Math.min(ms, 120);
      return new Promise((res) => {
        const t0 = performance.now();
        const step = () => {
          const k = Math.min(1, (performance.now() - t0) / ms);
          fadeLevel = Math.round(from + (to - from) * k);
          if (k < 1) requestAnimationFrame(step); else res();
        };
        step();
      });
    },
    lines(ms = 600, color = '#ffffff') {
      if (reduce()) return;
      lines = { until: performance.now() + ms, color, frame: -1, buf: lines ? lines.buf : document.createElement('canvas') };
    },
    // 잔상을 읽을 때: 화면이 잠깐 흑백이 되고 파문이 퍼진다
    echo() {
      rings = { start: performance.now(), ms: 700 };
      once(stage, 'fx-mono', 650);
    },
    // 큰 충격: 반전 프레임 + 집중선 + 의성어 도장
    async impact(text, color = '#fff') {
      sfx('thud');
      if (!reduce()) { once(stage, 'fx-invert', 120); FX.lines(700, color); }
      once(stage, 'quake-big', 520);
      if (text) FX.stamp(text);
      await sleep(G.skip ? 100 : 650);
    },
    stamp(text, cls = '') {
      const s = document.createElement('div');
      s.className = 'fx-stamp ' + cls;
      s.textContent = text;
      stage.appendChild(s);
      setTimeout(() => s.remove(), 1100);
    },
    // 반박 컷인: 사선 띠에 인물 눈매와 외침
    async cutin(char, text) {
      if (G.skip) return;
      const c = document.createElement('div');
      c.className = 'fx-cutin';
      c.style.setProperty('--c', (OWNERS[char] || CHARACTERS[char]).color || CHARACTERS[char].accent);
      const face = CHARACTERS[char].faces.includes('serious') ? 'serious' : CHARACTERS[char].faces[0];
      c.innerHTML = `<div class="fx-band"><img src="${ASSET.portrait(char, face)}" alt="" onerror="this.remove()"><b>${text}</b></div>`;
      stage.appendChild(c);
      FX.lines(900);
      await sleep(950);
      c.classList.add('out');
      await sleep(180);
      c.remove();
    },
    // 증언 컷이 찢어져 떨어진다
    tear(el) {
      if (!el) return;
      const r = el.getBoundingClientRect(), s = stage.getBoundingClientRect(), k = s.height / 720;
      ['a', 'b'].forEach((side) => {
        const p = el.cloneNode(true);
        p.classList.add('fx-tear', 'fx-tear-' + side);
        Object.assign(p.style, { left: (r.left - s.left) / k + 'px', top: (r.top - s.top) / k + 'px', width: r.width / k + 'px', height: r.height / k + 'px' });
        stage.appendChild(p);
        setTimeout(() => p.remove(), 900);
      });
      sfx('page');
    },
    // 가슴이 철렁: 붉은 테두리가 두 번 뛴다
    pulse() {
      if (!reduce()) once(stage, 'fx-pulse', 1200);
      sfx('thud', { rate: 0.6, vol: 0.7 });
    },
    // 시오리: 색이 어긋나고 흰 입자가 오른다
    ghost(ms = 2400) {
      sfx('ghost');
      once(stage, 'fx-ghost', 700);
      override = 'ghost';
      refill();
      setTimeout(() => { if (override === 'ghost') { override = null; refill(); } }, ms);
    },
    // 화면이 깨진다 (접속 끊김)
    glitch(ms = 700) { if (!reduce()) once(stage, 'fx-glitch', ms); },
    // 가장자리부터 하얗게 지워진다
    erase(ms = 1800, color = '#ffffff') {
      wipe = { start: performance.now(), ms, color };
      return sleep(ms + 200);
    },
    eraseEnd() { wipe = null; },
    // 증인 쪽으로 화면을 당긴다 (pos: left/right/center), off면 원래대로
    zoom(pos) {
      stage.dataset.zoom = pos || '';
    },
  };
})();
