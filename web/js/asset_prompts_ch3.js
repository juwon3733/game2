// 3장 「둘 중 하나」 이미지 프롬프트. asset_prompts.js의 표에 더한다.
// 고친 뒤엔 node tools/export-prompts.mjs 로 prompts.json / PROMPTS 문서를 다시 만든다.

Object.assign(CHARACTER_SHEETS, {
  yuki: 'Character reference sheet of a gentle, artistic 19-year-old girl, the older of identical twins. Big soft teal eyes, long glossy dark navy hair with a cream ribbon tied on the RIGHT side, a charcoal smudge on her LEFT hand (she is left-handed), cream blouse under a pastry shop apron with a small cake emblem, an art portfolio bag on her shoulder. Teal and cream accents.',
  nagi: 'Character reference sheet of a lively but anxious 19-year-old girl, the younger of identical twins, with exactly the same face as her sister. Big teal eyes, long glossy dark navy hair with a cream ribbon tied on the LEFT side, a white bandage around her right ankle, cream blouse under a pastry shop apron with a small cake emblem. Teal and cream accents.',
  yukin: 'Character reference sheet of a 19-year-old girl pretending to be her identical twin sister: exactly the same face as the twins, big teal eyes, long glossy dark navy hair with a cream ribbon tied on the RIGHT side (copying her sister), cream blouse under a pastry shop apron with a small cake emblem, clean hands with no charcoal, no art bag, a slightly too-stiff polite smile. Teal and cream accents.',
  madoka: 'Character reference sheet of a beautiful, mysterious 26-year-old tarot fortune teller woman. Long wavy violet-black hair, half-lidded amethyst eyes with long lashes, an off-shoulder dark violet dress with a high leg slit under a large black shawl covered in small silver star sequins, many rings, a tarot card held between two fingers, a charming smile that hides something. Violet and silver accents.',
  tofu: 'Character reference sheet of a lively, sharp-eyed 78-year-old grandmother who runs a tofu shop. Neat white hair in a small bun, round glasses, a navy work apron and a white headscarf, rubber boots, a wooden tofu paddle in hand, a proud grin. Navy and khaki accents.',
  ren: 'Character reference sheet of a striking, cold 22-year-old woman. Long straight silver-white hair, one pale grey eye and a black eyepatch over the other, a long pure white coat with a high collar worn open over a fitted white high-neck dress, white thigh-high boots, white gloves, a calm unreadable smile. White and pale silver palette.',
});

Object.assign(FACE_PROMPTS, {
  yuki_normal: 'expression: shy, holding a charcoal pencil in her left hand',
  yuki_crying: 'expression: crying quietly, clutching her portfolio bag',
  yuki_smile: 'expression: soft relieved smile',
  nagi_normal: 'expression: forced bright customer-service smile',
  nagi_scared: 'expression: frightened, eyes darting, hands gripping her apron',
  nagi_crying: 'expression: crying, ribbon slightly undone',
  yukin_normal: 'expression: stiff polite customer-service smile, hands folded on her apron',
  yukin_crying: 'expression: crying, hiding her face with her right hand',
  yukin_smile: 'expression: forced bright smile, eyes not smiling',
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
  storage: 'A cramped second-floor storage room of a pastry shop at night: stacked cake boxes, a small old safe with its door open, a back door to an outside iron staircase, a steep staircase going down. The single bare bulb hanging from the ceiling is clearly DARK and dead (burnt-out filament, NOT glowing, no light around it); the room is dim and lit ONLY by warm light coming up the staircase from the shop downstairs, so shadows point upward. The small safe stands wide open and empty. A back door stands open onto an outside iron staircase.',
  arcade: 'A covered old shopping arcade (shotengai) at night, most shutters down, a tofu shop with a wall clock, a tiny tarot booth with a curtain and star decorations, paper lanterns, a narrow back alley between shops.',
  booth3: 'Inside a tiny tarot fortune telling booth: a round table with a purple cloth and tarot cards, a crystal ball, star-shaped fairy lights, heavy curtains.',
  academy: 'An art prep school studio in the evening: rows of easels, plaster busts, charcoal drawings pinned on the walls, big dark windows with the station lights outside, fluorescent lights.',
  arcade_exit: 'The exit of a covered shopping arcade at night opening onto a quiet street, a single streetlamp, the arcade roof ending against a dark sky.',
});

Object.assign(CUT_CHARS, {
  twin: 'a 19-year-old girl with long dark navy hair, big teal eyes and a cream ribbon, wearing a cream puff-sleeve blouse and a pastry shop apron with a small cake emblem',
  yuki: 'a 19-year-old girl with long dark navy hair, big teal eyes and a cream ribbon on her RIGHT side (the same face as the twin portraits)',
  twin_hands: 'the viewer\'s own hands in cream puff sleeves (a pastry shop girl\'s own point of view)',
  madoka: 'a woman with long wavy purple hair wrapped in a black shawl covered with star sequins',
  tofu: 'a cheerful old grandmother in her seventies with white hair, wrinkles, round glasses and a white headscarf',
});

Object.assign(CUT_PROMPTS, {
  '3A': ['A pastry shop front at night: {twin} with the ribbon on her RIGHT side pulls down the shop shutter by its handle; a "closed" sign at her feet. A round wall clock inside clearly shows 8:50. At the bottom of the panel, her ankle wrapped in a big white bandage above her sneaker (accent color), clearly visible.', '오른쪽 리본, 벽시계 8:50, 발목의 큰 붕대(포인트 색)'],
  '3B': ['At the register counter at night, the shop shutter already down behind: first-person view looking down at the counter: {twin_hands} — a pen held in the RIGHT hand writes in a ledger while the left hand holds down a stack of bills. A thick cash envelope (accent color) on the counter. No clock or time display visible. NO person, face or body in the panel, only the two hands.', '내려간 셔터, 오른손으로 쥔 펜, 매상 봉투(포인트 색), 시계 없음'],
  '3G': ['At night at the foot of a steep wooden staircase in a pastry shop: a man lies on the floor with his glasses fallen beside him; {twin} stands frozen, hands over her mouth. The top of the staircase is pitch dark (the upstairs bulb is out); light comes only from the shop below. A wall clock clearly shows 9:15. Her ankle with a white bandage (accent color) is visible.', '쓰러진 남자와 안경, 깜깜한 계단 위, 벽시계 9:15, 발목 붕대(포인트 색)'],
  '3H': ['First-person view at night inside the pastry shop: {twin_hands} — one trembling hand holds a smartphone; the screen shows a call to 119 in progress. Looking down past the phone: the leg of the register counter and the viewer\'s OWN feet, her own ankle wrapped in a big white bandage above her sneaker (accent color). No clock or time visible. NO other people in the panel.', '휴대폰 화면 119 통화, 붕대 발목(포인트 색), 시계 없음'],
  '3K': ['Daytime in an empty pastry shop, first-person view: {twin_hands} — her RIGHT hand pins a weekly shift chart on the wall (accent color on the chart). Bright sunlight through the window makes the cake showcase shine. No clock visible. NO people in the panel, only the one hand and sleeve.', '낮, 근무표(포인트 색), 오른손, 햇빛'],
  '3E': ['At night in an art prep school studio: {yuki}, in a paint-stained smock, sits at an easel and draws a plaster bust with charcoal held in her LEFT hand (accent color on the charcoal). A wall clock clearly shows 9:00. Under the easel, her bare ankles in sandals, no bandage.', '왼손 목탄(포인트 색), 벽시계 9:00, 샌들 신은 맨 발목'],
  '3F': ['A night train platform: a girl with an art portfolio bag looks at a smartphone held in her LEFT hand; the screen shows an unsent message, the recipient name hidden under her thumb (accent color). A big station clock shows 9:25.', '역 시계 9:25, 왼손의 휴대폰(포인트 색)'],
  '3C': ['First-person view from the MIDDLE of a steep wooden staircase, looking UP at night. At the top, in the dark doorway of the second-floor storage room (its bulb is out), {madoka} snatches a thick cash envelope (accent color) and turns away; the star sequins on the shawl glitter. The only light comes from the shop BELOW, so her shadow stretches upward onto the ceiling. In the lower part of the panel, the viewer\'s own empty hand reaches upward, the wrist watch clearly showing 9:10.', '계단 중간에서 올려다봄, 어두운 2층 문간의 별무늬 숄, 봉투(포인트 색), 위로 뻗은 빈손과 손목시계 9:10, 아래에서 비친 불빛'],
  '3D': ['Blurry first-person view from the floor at the foot of a staircase: {twin} with the ribbon on her RIGHT side stands frozen holding a smartphone in both hands, trembling, not calling: the phone screen is black and her fingers are not touching it. Behind her the top of the staircase is pitch dark. No clock visible. In the foreground, close to the viewer, HER OWN ankle (the girl\'s, not the viewer\'s) wrapped in a big white bandage above her sneaker (accent color). The viewer is a fallen man; none of his body is visible. Her apron skirt is long and modest.', '흐릿한 시야, 휴대폰을 쥔 점원, 깜깜한 계단 위, 붕대(포인트 색), 시계 없음'],
  '3J': ['First-person view from behind a tofu shop counter (the tofu shop woman herself is NOT in the panel; only tubs of tofu in water in the foreground) into a night shopping arcade: {madoka} runs out of a narrow back alley, the star sequins on the shawl glittering (accent color). On the tofu shop wall, a clock clearly shows 9:22.', '뒷골목에서 뛰어나오는 별무늬 숄(포인트 색), 두부집 시계 9:22'],
  F1: ['Drawn like a tarot-card vision with a thin ornate border, but it is a real memory: view looking DOWN a steep staircase from its dark top. At the bottom, in the bright shop, {twin} with the ribbon on her RIGHT side holds out a cash envelope, and a man\'s hand reaches in to take it. A banister post at the edge of the panel. No clock visible. Accent color on the envelope.', '타로 테두리, 어두운 계단 위에서 내려다봄, 봉투를 건네는 오른쪽 리본 점원과 받는 남자 손(포인트 색)'],
  F2: ['Drawn like a tarot-card vision with a thin ornate border: first-person view in the dark doorway at the top of a staircase; a hand in an apron sleeve grabs a cash envelope (accent color); the shop light glows at the bottom of the stairs. IMPORTANT: the hand and sleeve are a visibly pasted-on patch: its screentone dots are clearly denser and a different size than the rest of the panel, with a faint hand-shaped cut line around it.', '타로 테두리, 어두운 문간, 봉투를 쥔 앞치마 소매의 손(포인트 색), 손 부분만 스크린톤 점이 다르고 오린 선이 보임'],
  F3: ['Drawn like a tarot-card vision with a thin ornate border, seen from below on the staircase: at the TOP, only a hand and forearm in a cream puff sleeve (no face, no body) reaches out of the dark doorway and pushes the shoulder of a man who is climbing UP toward it (the man seen from behind, below the hand). The only light comes from the shop at the bottom of the stairs, so the banister and the man cast long shadows that stretch UPWARD on the wall toward the ceiling. THE KEY DETAIL: on the wall directly BELOW the pushing hand there is one small, clearly hand-shaped dark shadow (fingers and cuff readable) pointing DOWN toward the stairs, the only shadow in the panel that goes the wrong way. Make that hand shadow large and obvious. Accent color on the hand.', '타로 테두리, 미는 손(포인트 색), 아래에서 비친 불빛, 손 바로 아래 벽에 아래로 떨어진 손 모양 그림자(다른 그림자는 위로)'],
  t_tofu_1: ['First-person view from inside a tofu shop at night, over the tofu tubs: the wall clock clearly shows 9:00; across the arcade, a shutter coming down with a rattling sound effect drawn as lines. NO people in the panel.', '두부집 벽시계 9:00, 건너편 셔터'],
  t_tofu_2: ['A night shopping arcade seen from a tofu shop: only the hem of a black shawl with glittering star sequins disappears into a narrow alley (accent color on the sparkle); the person wearing it is already out of sight. The tofu shop clock shows 9:20. NO people visible.', '골목으로 사라지는 반짝이는 숄 자락, 시계 9:20'],
  t_tofu_3: ['{twin} with the cream ribbon on her RIGHT side waves cheerfully from a pastry shop doorway in the evening, seen from across the arcade.', '오른쪽 리본 점원이 손을 흔듦'],
  t_yukin_1: ['A pastry shop at night: {twin} with the ribbon on her RIGHT side stands in front of the half-closed shutter, one hand on the shutter handle, a ballpoint pen in her apron pocket, a "closed" sign beside her feet. At the very bottom of the panel, her ankle with a white bandage is visible (accent color), as if she did not notice it was in the picture. A wall clock in the corner.', '오른쪽 리본, 화면 아래 붕대 발목(포인트 색), 셔터 손잡이, 벽시계'],
  t_yukin_2: ['A flattering, sparkling memory, first-person view: {twin_hands} — her hand neatly places a cash envelope into a shining open safe, with sparkles and flowers around it (accent color on the envelope). NO people, no faces in the panel.', '미화: 반짝이는 금고와 봉투'],
  t_yukin_3: ['First-person view at night in an empty pastry shop: {twin_hands} — one hand presses 1-1-9 on a smartphone. NO other people anywhere in the panel. The left half of the panel, where whatever came before would be, is left completely blank white, as if erased.', '생략: 119를 누르는 손, 왼쪽 절반이 하얀 여백'],
  t_nagi_1: ['A girl in an apron holds a smartphone to her ear; where the wall clock should be, there is a blank white hole as if erased (accent color on the phone).', '생략: 벽시계 자리 하얀 여백, 휴대폰(포인트 색)'],
  t_nagi_2: ['An empty steep wooden staircase in a pastry shop at night, nobody in sight. The shop light from below lights only the lowest steps; the second floor at the top is pitch dark.', '아무도 없는 계단, 아래만 밝고 위는 깜깜함'],
  t_madoka_3: ['Inside a tarot booth, first-person view of the fortune teller: her own hands with purple rings lay tarot cards on a purple cloth; across the table only a customer\'s hands are visible (no faces), star fairy lights (accent color on the cards).', '부스의 타로 카드와 손님의 손'],
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
