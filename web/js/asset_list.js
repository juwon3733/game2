// 게임에 필요한 이미지 전체 목록. data_ch1.js와 asset_prompts.js를 바탕으로 만든다.
// 브라우저(assets.html)와 Node(tools/check-assets.mjs) 양쪽에서 쓴다.

const COLOR_NAME = { '#c9961a': 'gold', '#3b8fd0': 'blue', '#e0679a': 'pink', '#6b8a5a': 'olive green' };

function requiredAssets() {
  const list = [];
  const common = PROMPT_STYLE.common;

  for (const [char, c] of Object.entries(CHARACTERS)) {
    for (const face of c.faces) {
      const id = `${char}_${face}`;
      list.push({
        kind: 'portrait', group: c.name === '???' ? '시오리' : c.name, id,
        path: `portraits/${id}.png`, spec: SPEC.portrait,
        sheet: `${common}\n\n${CHARACTER_SHEETS[char]}`,
        prompt: `${common}\n\n${PROMPT_STYLE.portrait} ${FACE_PROMPTS[id] || 'expression: ' + face}`,
      });
    }
  }

  for (const [id, b] of Object.entries(BACKGROUNDS)) {
    list.push({
      kind: 'bg', group: '배경', id, label: b.label,
      path: `bg/${id}.png`, spec: SPEC.bg,
      prompt: `${common}\n\n${BG_PROMPTS[id]} Horizontal 1536x1024.`,
    });
  }

  const cutPrompt = (id, color) => {
    const [scene, must] = CUT_PROMPTS[id] || [id, ''];
    return {
      must,
      prompt: `${PROMPT_STYLE.cut.replace('{color}', `${COLOR_NAME[color] || ''} (${color})`)}\n\n${scene} Horizontal 1536x1024.`,
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
  return list;
}
