// 게임에 필요한 이미지 전체 목록. data_ch1.js와 asset_prompts.js를 바탕으로 만든다.
// 브라우저(assets.html)와 Node(tools/check-assets.mjs) 양쪽에서 쓴다.

const COLOR_NAME = { '#c9961a': 'gold', '#3b8fd0': 'blue', '#e0679a': 'pink', '#6b8a5a': 'olive green',
  '#e4572e': 'vermilion orange', '#3aa58a': 'teal green', '#a07ad8': 'lavender purple', '#3a78c9': 'cobalt blue', '#d9a21b': 'amber', '#b0306a': 'magenta',
  '#38a3a5': 'teal', '#c4703a': 'burnt orange', '#7d4fd1': 'violet', '#8f9a4a': 'khaki green',
  '#e85d75': 'rose red', '#d4883a': 'warm orange', '#5a8fbf': 'steel blue', '#7a9a3a': 'moss green', '#a03a3a': 'dark red',
  '#f2a14a': 'bright orange', '#5a7a9a': 'slate blue', '#3a5aa0': 'navy blue', '#e07a9a': 'strawberry pink', '#6ac0d0': 'ice blue', '#8a5a3a': 'coffee brown' };

function requiredAssets() {
  const list = [];
  const px = PROMPT_STYLE.pixel;

  for (const [char, c] of Object.entries(CHARACTERS)) {
    if (c.as) continue; // 다른 인물 그림을 빌려 쓰는 경우
    for (const face of c.faces) {
      const id = `${char}_${face}`;
      list.push({
        kind: 'portrait', group: c.name === '???' ? '시오리' : c.name, id,
        path: `portraits/${id}.png`, spec: SPEC.portrait,
        sheet: `${px}\n\n${PROMPT_STYLE.character}\n\n${PROMPT_STYLE.sheetRes}\n\n${CHARACTER_SHEETS[char]}`,
        prompt: `${px}\n\n${PROMPT_STYLE.character}\n\n${PROMPT_STYLE.portraitRes}\n\n${PROMPT_STYLE.portrait} ${FACE_PROMPTS[id] || 'expression: ' + face}`,
      });
    }
  }

  for (const [id, b] of Object.entries(BACKGROUNDS)) {
    list.push({
      kind: 'bg', group: '배경', id, label: b.label,
      path: `bg/${id}.png`, spec: SPEC.bg,
      prompt: `${px}\n\n${PROMPT_STYLE.bgRes}\n\n${BG_PROMPTS[id]} No people. Horizontal 1536x1024 PNG.`,
    });
  }

  const cutPrompt = (id, color) => {
    const [raw, must] = CUT_PROMPTS[id] || [id, ''];
    // 타이가 금발은 타이가 시점(금색) 컷에서만 포인트 색. 다른 시점에선 밝은 회색으로 그린다.
    const scene = raw.replace(/\{(\w+)\}/g, (m, k) => CUT_CHARS[k] || m)
      .replace(/\(taiga-accent\)/g, color === '#c9961a' ? '(accent color)' : '(light grey)');
    const crayon = /crayon/i.test(scene);
    const palette = (crayon ? PROMPT_STYLE.cutPaletteCrayon : PROMPT_STYLE.cutPalette)
      .replace('{color}', `${COLOR_NAME[color] || ''} (${color})`);
    // 컷에 나오는 인물의 상반신 그림 = 기준 이미지. GPT는 이걸 이미지로 붙여 같은 사람으로 그린다
    // {자리} 이름과, 장면 글에 이름이 그대로 나온 인물을 모은다. 별칭은 실제 인물로
    const ALIAS = { young_rei: 'rei', child_rei: 'rei', nishi: 'nishimura', twin: ['yuki', 'nagi'] };
    const keys = [...raw.matchAll(/\{(\w+)\}/g)].map((m) => m[1])
      .concat(typeof CHARACTERS === 'undefined' ? [] : Object.keys(CHARACTERS).filter((k) => new RegExp(`\\b${k}\\b`, 'i').test(raw.replace(/\{\w+\}/g, ''))));
    const refs = [...new Set(keys.flatMap((k) => [].concat(ALIAS[k] || k)))]
      .filter((k) => typeof CHARACTERS !== 'undefined' && CHARACTERS[k] && CHARACTERS[k].faces)
      .map((k) => `web/assets/portraits/${k}_${CHARACTERS[k].faces[0]}.png`);
    return {
      must, refs,
      prompt: `${PROMPT_STYLE.cut.replace('{palette}', palette)}\n\nScene: ${scene}\n\n${PROMPT_STYLE.cutFaces} Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.`,
    };
  };

  for (const [id, c] of Object.entries(CUTS)) {
    if (c.blank) continue; // 여백 컷은 일부러 그림이 없다
    const color = OWNERS[c.owner].color;
    list.push({ kind: 'cut', group: '내 컷', id, label: c.title, path: `cuts/${id}.png`, spec: SPEC.cut, ...cutPrompt(id, color) });
  }

  // 증언 컷과 진실판. 진실판이 수집 컷을 재사용하면(truthCut) 새로 그리지 않는다
  const seen = new Set();
  for (const w of Object.values(WITNESSES)) {
    allStatements(w).forEach((s) => {
      const color = OWNERS[s.char || w.char].color; // 교차 심문은 말하는 사람 색으로
      const ids = [s.cut];
      if (s.truthDesc && !s.truthCut) ids.push(s.cut + '_truth');
      ids.filter((id) => !seen.has(id) && !CUTS[id]).forEach((id) => { // 수집 컷을 그대로 증언에 쓰면 따로 그리지 않는다
        seen.add(id);
        list.push({
          kind: 'cut', group: `증언 컷 · ${CHARACTERS[w.char].name}`, id,
          label: id.endsWith('_truth') ? '진실 버전' : (s.dist ? `왜곡: ${s.dist}` : '증언'),
          path: `cuts/${id}.png`, spec: SPEC.cut, ...cutPrompt(id, color),
        });
      });
    });
  }
  const W = WORLD_PROMPTS, px2 = PROMPT_STYLE.pixel;
  list.push({ kind: 'title', group: '타이틀', id: 'title_key', label: '타이틀 키아트', path: 'title/key.png', spec: SPEC.title,
    prompt: `${PROMPT_STYLE.keyart}\n\n${PROMPT_STYLE.character}\n\n${W.title_key.replace('{rei}', W.sprites.rei.replace(/^an? /, 'an ')).replace('{koharu}', W.sprites.koharu)}` });
  for (const [id, u] of Object.entries(UI_PROMPTS)) {
    list.push({ kind: 'ui', group: 'UI 스킨', id, label: id.replace('ui_', ''), path: `ui/${id}.png`, spec: { w: u.w, h: u.h, note: `${u.w}×${u.h}${u.slice ? ` · 9-slice 모서리 ${u.slice}px` : ''}` },
      prompt: `${PROMPT_STYLE.pixel}\n\n${UI_STYLE}\n\n${u.p}` });
  }
  for (const [id, p] of Object.entries(CG_PROMPTS)) {
    list.push({ kind: 'cg', group: '이벤트 CG', id, label: id.replace('cg_', ''), path: `cg/${id}.png`, spec: SPEC.cg,
      prompt: `${PROMPT_STYLE.keyart}\n\n${PROMPT_STYLE.character}\n\nEvent illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. ${p.replace(/\{(\w+)\}/g, (m, k) => CG_CHARS[k] || m)}` });
  }
  return list;
}
