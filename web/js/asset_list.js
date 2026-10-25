// 게임에 필요한 이미지 전체 목록. data_ch1.js와 asset_prompts.js를 바탕으로 만든다.
// 브라우저(assets.html)와 Node(tools/check-assets.mjs) 양쪽에서 쓴다.

const COLOR_NAME = { '#c9961a': 'gold', '#3b8fd0': 'blue', '#e0679a': 'pink', '#6b8a5a': 'olive green' };

function requiredAssets() {
  const list = [];
  const px = PROMPT_STYLE.pixel;

  for (const [char, c] of Object.entries(CHARACTERS)) {
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
      .replace(/\(accent color\)/g, color === '#c9961a' ? '(accent color)' : '(light grey)');
    const crayon = /crayon/i.test(scene);
    const palette = (crayon ? PROMPT_STYLE.cutPaletteCrayon : PROMPT_STYLE.cutPalette)
      .replace('{color}', `${COLOR_NAME[color] || ''} (${color})`);
    return {
      must,
      prompt: `${PROMPT_STYLE.cut.replace('{palette}', palette)}\n\nScene: ${scene}\n\n${PROMPT_STYLE.cutFaces} Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.`,
    };
  };

  for (const [id, c] of Object.entries(CUTS)) {
    const color = OWNERS[c.owner].color;
    list.push({ kind: 'cut', group: '내 컷', id, label: c.title, path: `cuts/${id}.png`, spec: SPEC.cut, ...cutPrompt(id, color) });
  }

  for (const w of Object.values(WITNESSES)) {
    const color = OWNERS[w.char].color;
    w.statements.forEach((s, i) => {
      const ids = [s.cut];
      if (w.peel.includes(i) && s.truthDesc) ids.push(s.cut + '_truth');
      ids.forEach((id) => list.push({
        kind: 'cut', group: `증언 컷 · ${CHARACTERS[w.char].name}`, id,
        label: id.endsWith('_truth') ? '진실 버전' : (s.dist ? `왜곡: ${s.dist}` : '증언'),
        path: `cuts/${id}.png`, spec: SPEC.cut, ...cutPrompt(id, color),
      }));
    });
  }
  const W = WORLD_PROMPTS, px2 = PROMPT_STYLE.pixel;
  list.push({ kind: 'map', group: '탐색 맵', id: 'mansion5f', label: '하나미즈키 맨션 5층', path: 'maps/mansion5f.png', spec: SPEC.map, prompt: `${px2}\n\n${W.map_mansion5f}` });
  for (const [who, desc] of Object.entries(W.sprites)) {
    list.push({ kind: 'sprite', group: '걷는 캐릭터', id: `walk_${who}`, label: CHARACTERS[who].name === '???' ? '시오리' : CHARACTERS[who].name, path: `sprites/${who}.png`, spec: SPEC.sprite, prompt: `${px2}\n\n${PROMPT_STYLE.character}\n\n${W.sprite.replace('{char}', desc)}` });
  }
  list.push({ kind: 'title', group: '타이틀', id: 'title_key', label: '타이틀 키아트', path: 'title/key.png', spec: SPEC.title,
    prompt: `${px2}\n\n${PROMPT_STYLE.character}\n\n${W.title_key.replace('{rei}', W.sprites.rei.replace(/^an? /, 'an ')).replace('{koharu}', W.sprites.koharu)}` });
  return list;
}
