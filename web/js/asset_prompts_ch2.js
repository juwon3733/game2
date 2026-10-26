// 2장 「앙코르 없음」 이미지 프롬프트. asset_prompts.js의 표에 더한다.
// 고친 뒤엔 node tools/export-prompts.mjs 로 prompts.json / PROMPTS 문서를 다시 만든다.

Object.assign(CHARACTER_SHEETS, {
  ruru: 'Character reference sheet of a stunning 19-year-old indie rock vocalist and guitarist girl with a sharp tongue. Large vivid amber-orange eyes with sharp star-shaped highlights, waist-length sky-blue to cobalt hair with blunt bangs and two small braided loops at each side with tiny blue flower clips, a black newsboy cap tilted to one side with a plaid blue ribbon bow and a small round white bird-shaped plush mascot sitting on its brim, a black ribbon choker, an oversized white stage jacket with silver buttons worn off the shoulders over a cropped black tank top showing her midriff, a short blue plaid pleated skirt, black thigh-high socks, a guitar pick necklace, a vintage stage microphone in one hand. On stage a perfect idol smile, off stage a cool glare. Blue, white and amber accents.',
  pin: 'Character reference sheet of a sweet, dreamy 18-year-old bassist girl. Big soft rose-pink eyes, long fluffy silver-white hair down to her back with pastel coral-pink tips on the inner layer, a crossed silver hairpin on the bangs, a black beret with two small white plum-blossom flowers and a thin ribbon, a long black coat with white double-line trim and very wide sleeves embroidered with white plum blossoms, an off-shoulder white blouse with a big bow tie and a pink gem brooch, a black belt, short white shorts, a black lace-up garter on one thigh, a bass case covered in stickers. Black, white and rose-pink accents.',
  aoi: 'Character reference sheet of a cool 21-year-old drummer girl and band leader. Long navy-black hair in a high ponytail, calm sharp cobalt-blue eyes, silver ear cuffs, a black crop tank top under an open cobalt work shirt, low-slung cargo pants, drumsticks in her back pocket, taped fingers. Cobalt blue and black accents.',
  kuramochi: 'Character reference sheet of a quiet 28-year-old live-house lighting technician woman. Long brown hair in a low loose ponytail, tired honest amber eyes, a headset with microphone around her neck, a fitted black crew T-shirt with a small crescent moon logo, a tool belt, thick black work gloves always on her hands. Amber and black accents.',
  tendo: 'Character reference sheet of an elegant, intimidating 52-year-old talent agency president woman, clearly in her fifties (fine wrinkles at the eyes and mouth, a mature face — not a young woman). Dark hair in a tight elegant updo, sharp smiling eyes with long lashes, deep wine-magenta tailored suit with a brooch, pearl earrings, and a very large square gold wristwatch on her left wrist that is always visible. Smiles politely but the eyes do not smile. Magenta and gold accents.',
  kirishima: 'Character reference sheet of a stern, handsome 34-year-old band manager man. Neat short black hair, narrow tired teal eyes, always in a plain black suit and dark tie, a radio transceiver clipped to the belt, a small worn notebook in the breast pocket. Teal green accents.',
});

Object.assign(FACE_PROMPTS, {
  ruru_normal: 'expression: cool, bored glare, arms crossed',
  ruru_angry: 'expression: sharp angry glare, teeth showing, defensive',
  ruru_crying: 'expression: crying with clenched teeth, tears streaming, trying not to break',
  ruru_smile: 'expression: perfect stage idol smile, mouth open, holding the microphone, one hand waving',
  pin_normal: 'expression: nervous, hiding her hands in her wide flower sleeves',
  pin_happy: 'expression: bright fluffy smile, peace sign',
  pin_crying: 'expression: sobbing, beret slipping, flower sleeves pressed to her eyes',
  aoi_normal: 'expression: calm and cool, spinning a drumstick',
  aoi_serious: 'expression: serious, frowning, holding a folded document',
  kuramochi_normal: 'expression: guarded, looking away, gloved hand on her headset',
  kuramochi_scared: 'expression: scared and guilty, biting her lip, eyes down',
  kuramochi_resolute: 'expression: resolute, looking straight ahead, gloves taken off',
  tendo_smile: 'expression: polished polite smile, hand near her chin showing the big square gold watch',
  tendo_normal: 'expression: cold, businesslike, checking her square gold watch',
  tendo_angry: 'expression: icy anger, eyes narrowed, pointing',
  tendo_cornered: 'expression: cornered, forced smile cracking, sweat on her temple',
  kirishima_normal: 'expression: stern and blunt, holding a clipboard',
  kirishima_soft: 'expression: a rare small gentle smile, slightly sad',
});

Object.assign(BG_PROMPTS, {
  crescent_out: 'Entrance of a small basement live house in front of a train station at night, neon crescent moon sign, posters on the wall, stairs going down, police tape across the door.',
  crescent_stage: 'Inside a small live house seen from the audience floor: a low stage with drums and amps, a lighting truss above, a metal catwalk along the ceiling, a lighting booth window at the back, empty floor with tape marks. Dim blue house lights.',
  booth: 'Small lighting booth at the back of a live house, a lighting console with many faders and buttons, a large glass window looking down on the stage and the catwalk, a clipboard, a headset hanging.',
  greenroom: 'Cramped live-house dressing room, a long mirror with bulbs, a bench, guitar and bass cases covered in stickers, a small CRT monitor on the wall showing the stage, a black suit jacket on a chair.',
  backstage: 'Narrow backstage corridor of a live house, black walls, cables, road cases, a steep steel staircase going up to the catwalk, a dented spot on the wall.',
  tendo_office: 'Luxurious talent agency president office in the afternoon, a big wooden desk, a leather chair, framed band posters, a safe, a waste basket beside the desk, blinds with warm sunlight.',
});

Object.assign(CUT_CHARS, {
  ruru: 'a 19-year-old girl vocalist with long blue hair with two small braided loops and a black cap with a small white bird mascot',
  ruru_jacket: 'a white oversized stage jacket',
  pin: 'an 18-year-old girl bassist with long silver-white hair with pink tips, a black beret with white flowers and a long black coat with wide sleeves',
  aoi: 'a girl drummer with a long navy-black ponytail',
  kuramochi: 'a woman lighting technician with a long low ponytail, a headset and thick black work gloves',
  tendo: 'a woman in her fifties with a tight updo and a tailored suit',
  watch: 'a very large square wristwatch',
  kirishima: 'a man in a plain black suit with neat short black hair',
  rig: 'a lighting rig (a metal truss with four stage lights and one pattern projector) hanging above the center of the stage, next to a metal catwalk railing about one meter away',
});

Object.assign(CUT_PROMPTS, {
  '2A': ['First song of a live show, seen from the bassist\'s position at stage left: the back of {ruru} wearing {ruru_jacket} (accent color) at the center microphone, a packed audience of silhouetted heads beyond her. Star shapes projected on the stage floor. Above: {rig}; the gap between the rig and the catwalk railing is clearly empty, nothing tied there.', '흰 재킷(포인트 색), 바닥의 별 무늬, 리그와 난간 사이가 비어 있음'],
  '2B': ['During the MC between songs, plain bright white light floods the whole stage with no pattern: {ruru_jacket} (accent color) flying through the air toward the audience, just thrown by {ruru} in a black tank top (a girl: long blue hair, black cap with a small white bird mascot — same design as her portrait). At the right edge, between the dark wing curtains, a black suit sleeve and hand waving "back, step back".', '공중의 재킷(포인트 색), 무늬 없는 흰빛, 윙 커튼 틈의 검은 소매 손짓'],
  '2C': ['Seen from behind the drum kit (cymbals in the foreground with the drummer\'s hands, accent color on the drumsticks): the stage floor is covered with wavy stripe patterns of light. {ruru} without her jacket, in a black tank top, sings. Above her, {rig}, perfectly still.', '물결 줄무늬, 재킷 없는 루루, 정지한 리그'],
  '2D': ['From inside the lighting booth through its glass window: the stage below covered in a grid pattern of light; above it {rig}, its beams crooked and trembling with shake lines. In the foreground a gloved hand tightly gripping a radio transceiver (accent color).', '격자 무늬, 비뚤어진 빔과 떨림 선, 무전기를 쥔 장갑 손(포인트 색)'],
  '2E': ['The moment of the fall, seen from the drum riser: no light pattern anymore, the stage suddenly dark. {ruru} pushed sideways and falling down, and in her place the back of a man in a black suit, with the lighting rig crashing down onto him. Dust and broken light.', '무늬 없음, 밀려 넘어지는 루루, 정장의 등, 떨어지는 리그'],
  '2F': ['Afternoon rehearsal, seen from the first row of an empty audience floor looking up at the stage: {ruru} in a grey hoodie doing a mic check. Above, on the metal catwalk, {kuramochi} points at a clamp of the lighting rig. In the foreground, on the viewer\'s knee, a clipboard checklist (accent color). Empty seats beside.', '텅 빈 객석, 후드 차림 루루, 캣워크 위에서 클램프를 가리키는 장갑 손, 무릎 위 점검표(포인트 색)'],
  '2G': ['Under harsh white fluorescent work lights with every seat of the audience floor clearly visible below: first-person view of two hands in black suit sleeves tying the lighting rig to the catwalk railing with a ratchet strap (accent color). The loose end of the strap still hangs down.', '형광 작업등, 다 보이는 객석, 래칫 끈(포인트 색), 늘어진 끈 끝'],
  '2H': ['Under fluorescent work lights on the catwalk: {ruru} grabs a clamp of the lighting rig with both hands, her side face gritting her teeth, angry and tearful. Right next to the clamp, a big tight knot of strap tying the rig to the railing, clearly visible. Leave empty space at the top right for a speech bubble.', '클램프를 붙잡은 손, 클램프 옆 큰 매듭, 작업등, 오른쪽 위 빈 공간'],
  '2I': ['Peeking from the wing between dark curtains at the stage: wavy stripe light patterns on the floor, {ruru} without her jacket singing. Above, the lighting rig and the catwalk railing next to it: the railing is bare, no strap, no knot. In the foreground, a hand in a black suit sleeve holding a radio transceiver (accent color).', '물결 무늬, 재킷 없는 루루, 매듭 없는 난간, 손의 무전기(포인트 색)'],
  '2L': ['A backstage corridor during rehearsal (music notes coming from the stage side): {tendo} waving her hand dismissively, wearing {watch} (big and clearly visible). In the foreground, a man\'s hand holds out a checklist with a big circle marked on it (accent color). Leave empty space at the top center for a speech bubble.', '손을 내젓는 텐도, 큰 사각 손목시계, 동그라미 친 점검표(포인트 색), 무대 쪽 음표, 위쪽 빈 공간'],
  '2N': ['First-person view bursting out of the stage wing onto the stage: grid patterns of light on the floor, {ruru} mid-jump at the center, and above her the lighting rig tilting and about to fall. The viewer\'s own hand in a black suit sleeve reaches out toward her (accent color on the radio in the other hand). Leave empty space at the top center for a speech bubble.', '격자 무늬, 점프하는 루루, 기우는 리그, 뻗은 손, 위쪽 빈 공간'],
  '2K': ['A cramped dressing room: {pin} hugging {ruru}, who is crying. On the wall, a small monitor shows the stage covered in haze with blue standby light, and on the catwalk in the monitor a tiny dark human silhouette; at the silhouette\'s wrist one small bright glint (accent color).', '벽 모니터 속 헤이즈와 캣워크 위 작은 그림자, 손목의 작은 반짝임(포인트 색)'],
  '2P': ['At night in front of a rehearsal studio on a city street: {kirishima} holds out a sheet of paper to {ruru} in casual clothes. The paper shows a record label logo (accent color). Ruru looks hurt.', '밤거리, 사복 루루, 종이의 레코드사 로고(포인트 색)'],
  '2T': ['Close-up on the catwalk: two hands untying the ratchet strap from the lighting rig, a very large square wristwatch (accent color) on the left wrist. Far below, the stage is covered in thick haze lit by blue standby lights.', '끈을 푸는 두 손, 큰 사각 손목시계(포인트 색), 아래 무대의 헤이즈와 대기 조명'],
  '2M': ['From inside the lighting booth through the glass: on the hazy catwalk across the room, {tendo} stuffs a strap into her jacket pocket and looks straight at the viewer, putting a finger to her lips. Her {watch} glints (accent color).', '부스 유리 너머 캣워크, 끈을 주머니에 넣으며 손가락을 입에 대는 텐도, 시계(포인트 색)'],
  t_kuramochi_1: ['Close-up of a gloved hand signing a checklist on a clipboard. The row for the lighting rig is left completely blank white, as if erased; the other rows are normal.', '생략: 리그 칸이 하얀 여백'],
  t_kuramochi_1_truth: ['Close-up of a checklist on a clipboard: the lighting rig row has a big circle mark (accent color), and over it someone has written "OK" in a different pen.', '(진실) 리그 칸의 큰 동그라미(포인트 색)'],
  t_kuramochi_2: ['Extreme close-up of a lighting console: only faders and buttons, gloved fingers on them (accent color on one button).', '콘솔 클로즈업'],
  t_kuramochi_3: ['From the lighting booth through the glass: the stage below is visible, but where the catwalk should be, the whole upper part of the panel is blank white as if erased.', '생략: 캣워크 자리가 통째로 하얀 여백'],
  t_pin_1: ['A sparkling, flattering memory: {ruru} shining with glitter and flowers, looking cool and noble; the man she argues with is only a blurry grey silhouette.', '미화: 반짝이, 흐린 상대'],
  t_pin_2: ['A sparkling memory: {pin} and {ruru} sitting side by side in front of a dressing room mirror, smiling, everything covered in glitter and hearts.', '미화: 거울 앞 두 사람'],
  t_pin_3: ['A sparkling memory: {ruru} doing {pin}\'s makeup, laughing; flowers and glitter cover the whole panel, including the wall behind them.', '미화: 벽까지 덮은 반짝이'],
  t_ruru_1: ['Back view of {kirishima} turning away on a dark street. In front of him, {ruru}, but her face is scribbled over completely black with crude pen scribbles (self-hatred).', '낙서: 루루 자신의 얼굴이 새까만 낙서'],
  t_ruru_2: ['An exaggerated memory: a gigantic hand violently shaking the lighting rig, the truss bending like rubber, dramatic shake lines everywhere.', '과장: 거대한 손, 휘는 리그'],
  t_ruru_3: ['Looking down from the catwalk: the lighting rig falling toward the stage below, the same composition as the fall but seen from above.', '위에서 내려다본 낙하'],
  t_ruru_4: ['A blurry memory: the back of a man in a black suit standing on the stage; where his face should be, a blank white hole.', '생략: 얼굴 자리 하얀 여백'],
  t_ruru_4_truth: ['{kirishima} bursting out of the dark wing, reaching his hand toward the viewer with a desperate face never seen before, grid light patterns behind him.', '(진실) 손을 뻗는 키리시마의 다급한 얼굴'],
  t_tendo_1: ['A backstage corridor: {tendo} smiling pleasantly. The speech bubble area of the person talking to her is a blank white hole, as if erased.', '생략: 상대 말풍선 자리 하얀 여백'],
  t_tendo_2: ['An exaggerated memory: a gigantic {ruru} shaking the lighting rig on the catwalk. The rig is at eye level, and in the lower left foreground the diagonal steel handrail of a staircase cuts across the panel, clearly visible.', '과장: 거대한 루루, 앞쪽의 비스듬한 계단 난간, 눈높이의 리그'],
  t_tendo_3: ['{tendo} sitting calmly in an office chair at a live house office, reading documents, {watch} on her wrist.', '사무실 의자의 텐도'],
  t_tendo_3b: ['Seen from the top of a steel staircase: the lighting rig in front; the railing right beside the rig is blank white, as if erased.', '생략: 리그 옆 난간 자리 하얀 여백'],
});

Object.assign(WORLD_PROMPTS.mapLabels, { crescent: '크레센트 무대·객석', backstage: '크레센트 무대 뒤', tendooffice: '텐도 프로모션 사장실' });
Object.assign(WORLD_PROMPTS, {
  map_crescent: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A small basement live house, dim blue house lights, police tape. No characters, no text.

Layout by tile rows, top to bottom:
- Row 1: the black back wall of the stage with amps and a cue sheet taped at column 21.
- Rows 2-4: a low wooden stage. A drum kit on a riser at columns 11-13 of row 2. A fallen microphone stand on an "X" of tape at column 12, row 4. A broken drumstick at column 8, row 4. A rectangle of tape outline on the floor at columns 15-16, row 3. A setlist taped to the floor at column 4, row 3.
- Row 5: the front edge of the stage, with short steps down in the middle (columns 11-14).
- Rows 6-9: the standing audience floor (dark concrete). A short row of folding chairs ("first row") at columns 4-9 of row 6. A white jacket lying on the floor at column 18, row 8.
- Row 10: a back wall with an opening at columns 18-20.
- Row 11: left part (columns 1-17) is the entrance lobby with a reception desk at columns 3-4; right part (columns 18-24) is a small raised lighting booth with a console at columns 22-23.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
  map_backstage: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. Backstage of a small live house, black walls, cables, road cases. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-10, rows 2-6: the stage wing. Row 2 is a narrow metal catwalk; row 3 is its railing (with a scraped strap mark at columns 5-6 and a half clamp at column 9, row 2); column 1, row 3 is a steep steel staircase connecting the catwalk and the wing floor. Rows 4-6 are the wing floor with black curtains; a radio transceiver on the floor at column 6, row 5.
- Column 11, rows 1-6: a solid wall.
- Columns 12-24, rows 2-6: a dressing room with a long mirror on the top wall, a CRT monitor on the wall at columns 20-21, a chair with a black suit jacket at columns 15-16, row 4.
- Row 7: a wall with doors at column 5 and column 18; a dented fist mark on the wall at column 8.
- Rows 8-9: a narrow corridor across the whole width.
- Row 10: a wall with a door at column 17.
- Row 11: columns 15-24 is an evidence storage area with a bent lighting truss covered in plastic at columns 18-20; columns 1-13 are dark and inaccessible.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
  map_tendooffice: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A luxurious talent agency president office in the afternoon, warm sunlight through blinds. No characters, no text.

Layout by tile rows, top to bottom:
- Row 1: the top wall with framed band posters at columns 5-6 and windows with blinds.
- Rows 2-10: carpeted office floor. A big wooden desk at columns 10-13, row 3, with a drawer side facing down (column 11, row 4). A waste basket at column 15, row 3. A safe with document folders on top at columns 21-22, row 2. A leather sofa set at columns 3-5, row 5, with a low table.
- Row 11: the bottom wall with the door at column 12.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
});
