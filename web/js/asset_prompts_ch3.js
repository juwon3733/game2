// 3장 「둘 중 하나」 이미지 프롬프트. asset_prompts.js의 표에 더한다.
// 고친 뒤엔 node tools/export-prompts.mjs 로 prompts.json / PROMPTS 문서를 다시 만든다.

Object.assign(CHARACTER_SHEETS, {
  yuki: 'Character reference sheet of a gentle, artistic 19-year-old girl, the older of identical twins. Big soft teal eyes, glossy dark navy bob hair with a cream ribbon tied on the RIGHT side, a charcoal smudge on her LEFT hand (she is left-handed), cream blouse under a pastry shop apron with a small cake emblem, an art portfolio bag on her shoulder. Teal and cream accents.',
  nagi: 'Character reference sheet of a lively but anxious 19-year-old girl, the younger of identical twins, with exactly the same face as her sister. Big teal eyes, glossy dark navy bob hair with a cream ribbon tied on the LEFT side, a white bandage around her right ankle, cream blouse under a pastry shop apron with a small cake emblem. Teal and cream accents.',
  madoka: 'Character reference sheet of a beautiful, mysterious 26-year-old tarot fortune teller woman. Long wavy violet-black hair, half-lidded amethyst eyes with long lashes, a dark violet dress under a large black shawl covered in small silver star sequins, many rings, a tarot card held between two fingers, a charming smile that hides something. Violet and silver accents.',
  tofu: 'Character reference sheet of a lively, sharp-eyed 78-year-old grandmother who runs a tofu shop. Neat white hair in a small bun, round glasses, a navy work apron and a white headscarf, rubber boots, a wooden tofu paddle in hand, a proud grin. Navy and khaki accents.',
  ren: 'Character reference sheet of a striking, cold 22-year-old woman. Long straight silver-white hair, one pale grey eye and a black eyepatch over the other, a long pure white coat with a high collar, white gloves, a calm unreadable smile. White and pale silver palette.',
});

Object.assign(FACE_PROMPTS, {
  yuki_normal: 'expression: shy, holding a charcoal pencil in her left hand',
  yuki_crying: 'expression: crying quietly, clutching her portfolio bag',
  yuki_smile: 'expression: soft relieved smile',
  nagi_normal: 'expression: forced bright customer-service smile',
  nagi_scared: 'expression: frightened, eyes darting, hands gripping her apron',
  nagi_crying: 'expression: crying, ribbon slightly undone',
  madoka_smile: 'expression: charming mysterious smile, a tarot card near her lips',
  madoka_normal: 'expression: calm and composed, shuffling cards',
  madoka_cornered: 'expression: cornered, smile frozen, sweat on her temple, shawl slipping',
  madoka_crying: 'expression: crying, makeup running, holding the shawl tightly',
  tofu_normal: 'expression: proud grin, tofu paddle on her shoulder',
  tofu_surprised: 'expression: surprised, glasses slipping down her nose',
  ren_smile: 'expression: calm unreadable smile, one gloved hand raised',
  ren_normal: 'expression: cold, looking down at the viewer',
});

Object.assign(BG_PROMPTS, {
  tokiwa_shop: 'An old retro Japanese Western-style pastry shop at night after closing: empty cake showcase, a small register counter, a round wall clock, warm dim lights, a steep wooden staircase at the back going up to a storage room, police tape at the door.',
  storage: 'A cramped second-floor storage room of a pastry shop: stacked cake boxes, a small old safe with its door open, a steep staircase going down, a single bare bulb.',
  arcade: 'A covered old shopping arcade (shotengai) at night, most shutters down, a tofu shop with a wall clock, a tiny tarot booth with a curtain and star decorations, paper lanterns, a narrow back alley between shops.',
  booth3: 'Inside a tiny tarot fortune telling booth: a round table with a purple cloth and tarot cards, a crystal ball, star-shaped fairy lights, heavy curtains.',
  academy: 'An art prep school studio in the morning: rows of easels, plaster busts, charcoal drawings pinned on the walls, big windows with soft light.',
  arcade_exit: 'The exit of a covered shopping arcade at night opening onto a quiet street, a single streetlamp, the arcade roof ending against a dark sky.',
});

Object.assign(CUT_CHARS, {
  twin: 'a 19-year-old girl with a dark bob and a ribbon, wearing a pastry shop apron',
  madoka: 'a woman wrapped in a black shawl covered with star sequins',
  tofu: 'an old grandmother with a white headscarf',
});

Object.assign(CUT_PROMPTS, {
  '3A': ['A pastry shop at night: {twin} with the ribbon on her RIGHT side pulls down the shop shutter. A round wall clock clearly shows 8:50. At the bottom of the panel, her ankle with a big white bandage (accent color), clearly visible.', '오른쪽 리본, 벽시계 8:50, 발목의 큰 반창고(포인트 색)'],
  '3B': ['At the register counter at night: close view of a hand counting bills and writing in a ledger with a pen held in the RIGHT hand. The register display clearly shows 21:00. A thick cash envelope (accent color) on the counter.', '오른손으로 쥔 펜, 계산대 화면 21:00, 매상 봉투(포인트 색)'],
  '3G': ['At night at the foot of a steep wooden staircase in a pastry shop: a man\'s legs lying on the floor; {twin} stands frozen, hands over her mouth. A wall clock clearly shows 9:15. Her ankle with a white bandage (accent color) is visible.', '쓰러진 다리, 벽시계 9:15, 발목 반창고(포인트 색)'],
  '3H': ['Close-up of a trembling hand holding a smartphone; the screen shows a call to 119 and the time 21:25 large at the top. Behind the hand, a bandaged ankle (accent color).', '휴대폰 화면 119 통화와 21:25, 반창고 발목(포인트 색)'],
  '3K': ['Daytime in a pastry shop: a RIGHT hand pins a weekly shift chart on the wall (accent color on the chart). Sunlight through the window. A wall clock shows 3:00.', '낮, 근무표(포인트 색), 오른손, 벽시계 3:00'],
  '3E': ['At night in an art prep school studio: a girl at an easel draws a plaster bust with charcoal held in her LEFT hand (accent color on the charcoal). A wall clock clearly shows 9:00. Her ankles are bare, no bandage.', '왼손 목탄(포인트 색), 벽시계 9:00, 반창고 없는 발목'],
  '3F': ['A night train platform: a girl with an art portfolio bag looks at a smartphone held in her LEFT hand; the screen shows a message (accent color). A big station clock shows 9:25.', '역 시계 9:25, 왼손의 휴대폰(포인트 색)'],
  '3C': ['First-person view from the bottom of a steep staircase looking up at night: at the top, {madoka} snatches a thick cash envelope (accent color) and turns away; the star sequins on the shawl glitter. In the lower corner, the viewer\'s own wrist with a watch clearly showing 9:10.', '계단 위 별무늬 숄, 봉투(포인트 색), 손목시계 9:10'],
  '3D': ['Blurry first-person view from the floor at the foot of a staircase: {twin} stands frozen holding a smartphone, trembling. A wall clock shows 9:20. Her bandaged ankle (accent color) is near the viewer.', '흐릿한 시야, 휴대폰을 쥔 점원, 벽시계 9:20, 반창고(포인트 색)'],
  '3J': ['View over a tofu shop counter into a night shopping arcade: {madoka} runs out of a narrow back alley, the star sequins on the shawl glittering (accent color). On the tofu shop wall, a clock clearly shows 9:22.', '뒷골목에서 뛰어나오는 별무늬 숄(포인트 색), 두부집 시계 9:22'],
  F1: ['Drawn like a tarot-card vision with a thin ornate border: {twin} with the ribbon on her RIGHT side carries cake boxes up a steep staircase. A small clock on the landing shows 9:05. Accent color on the ribbon.', '타로 테두리, 상자를 든 오른쪽 리본 점원, 계단참 시계 9:05'],
  F2: ['Drawn like a tarot-card vision with a thin ornate border: {twin} with the ribbon on her RIGHT side grabs a cash envelope (accent color) in a storage room. IMPORTANT: the area around her hand and the envelope is a visibly pasted-on patch: its screentone dots are clearly denser and a different size than the rest of the panel, with a faint rectangular seam line around it.', '타로 테두리, 봉투를 쥔 손(포인트 색), 손 둘레만 스크린톤 점이 다르고 이음매가 보임'],
  F3: ['Drawn like a tarot-card vision with a thin ornate border: a hand pushes a man\'s back at the top of a staircase. The only light comes from the bottom of the stairs, so every shadow falls upward, EXCEPT the pushing hand\'s shadow which clearly falls downward (wrong direction). Accent color on the hand.', '타로 테두리, 미는 손(포인트 색), 손 그림자만 반대 방향'],
  t_tofu_1: ['Inside a tofu shop at night: the wall clock clearly shows 9:00; across the arcade, a shutter coming down with a rattling sound effect drawn as lines.', '두부집 벽시계 9:00, 건너편 셔터'],
  t_tofu_2: ['A night shopping arcade seen from a tofu shop: a glittering shawl edge disappears into a narrow alley (accent color on the sparkle). The tofu shop clock shows 9:20.', '골목으로 사라지는 반짝이는 숄 자락, 시계 9:20'],
  t_tofu_3: ['A girl with the ribbon on her RIGHT side waves cheerfully from a pastry shop doorway in the evening.', '오른쪽 리본 점원이 손을 흔듦'],
  t_yukin_1: ['A pastry shop at night: {twin} with the ribbon on her RIGHT side stands in front of the half-closed shutter. At the very bottom of the panel, her ankle with a white bandage is visible (accent color), as if she did not notice it was in the picture. A wall clock in the corner.', '오른쪽 리본, 화면 아래 반창고 발목(포인트 색), 벽시계'],
  t_yukin_2: ['A flattering, sparkling memory: a hand neatly placing a cash envelope into a shining safe, with sparkles and flowers around it (accent color on the envelope).', '미화: 반짝이는 금고와 봉투'],
  t_yukin_3: ['Back view of a girl leaving a pastry shop at night; the left half of the panel is left completely blank white, as if erased.', '생략: 왼쪽 절반이 하얀 여백'],
  t_nagi_1: ['A girl in an apron holds a smartphone to her ear; where the wall clock should be, there is a blank white hole as if erased (accent color on the phone).', '생략: 벽시계 자리 하얀 여백, 휴대폰(포인트 색)'],
  t_nagi_2: ['An empty steep wooden staircase in a pastry shop at night, the second floor light on, nobody in sight.', '아무도 없는 계단'],
  t_madoka_3: ['Inside a tarot booth: tarot cards on a purple cloth, a customer\'s hands across the table, star fairy lights (accent color on the cards).', '부스의 타로 카드와 손님의 손'],
});

Object.assign(WORLD_PROMPTS.mapLabels, { tokiwa: '토키와 양과점 1층·2층', arcade: '츠키미나토 아케이드' });
Object.assign(WORLD_PROMPTS, {
  map_tokiwa: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. An old Japanese Western-style pastry shop at night, warm dim lamps. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-12, rows 1-9: the shop floor (warm wooden floor). Row 1 is the back wall with a weekly shift chart at column 3 and a staff memo board at column 6. A cake showcase at columns 2-5 of row 3. A register counter at columns 8-9 of row 3 and a shop telephone at column 10. A small office desk at columns 3-4 of row 8. Column 12, row 5 is the foot of a steep staircase.
- Column 13: a wall, with the staircase opening at row 5.
- Columns 14-24, rows 2-6: the second-floor storage room (concrete floor): stacked cake boxes at columns 17-19 of row 2, an old safe with its door open at column 23 of row 2, a back door at column 24 of row 6.
- Row 10: the shop front wall with the entrance at column 6. Row 11, columns 1-12: the arcade street outside with a half-closed shutter.
- Columns 14-24, rows 7-11: dark roof, not accessible.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
  map_arcade: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A covered old shopping arcade at night, paper lanterns, most shutters down. No characters, no text.

Layout by tile rows, top to bottom:
- Row 1: shop fronts. A tofu shop at columns 19-20 with a wall clock at column 21.
- Rows 2-4: the arcade street (tiled floor). A tiny tarot booth with a curtain and star lights at columns 4-6 of row 2, its small table at column 7, a trash can at column 3 of row 4.
- Row 5: shop walls with a narrow back alley opening at columns 13-15.
- Columns 13-15, rows 6-10: the narrow back alley with a drain at column 14, row 10. Row 11, columns 13-15: the back door of a pastry shop.
- Everything else in rows 6-11 is dark rooftops, not accessible.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
});
