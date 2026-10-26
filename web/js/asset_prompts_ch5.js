// 5장 「편집자」 이미지 프롬프트. asset_prompts.js의 표에 더한다.

Object.assign(CHARACTER_SHEETS, {
  tanabe: 'Character reference sheet of a kind, slightly confused 40-year-old security guard man. Short black hair, round face, a navy guard uniform with a cap and a whistle, a slightly puzzled expression. Slate blue accents.',
});

Object.assign(FACE_PROMPTS, {
  tanabe_normal: 'expression: polite, hand on his cap',
  tanabe_confused: 'expression: confused, holding his head as if it aches',
  asagiri_cold: 'expression: calm but cold, the gentle smile gone, eyes looking down at the viewer, holding a coffee cup',
  ren_sad: 'expression: sad, looking away, one white-gloved hand on her eyepatch',
  kurogane_sad: 'expression: sad and tired, no lollipop, holding an old stopped wristwatch',
  towa_serious: 'expression: serious chibi inside a monitor frame, headphone LEDs red instead of green',
  towa_real: 'IMPORTANT: this one is NOT on a monitor. Towa in person for the first time: a small shy young woman (not chibi, normal proportions like the other characters) with the same long ash-blonde wavy hair and big green eyes, cat-ear headphones around her neck, wrapped in the same cream blanket like a cape, serious expression, no monitor frame',
  koharu_crying: 'expression: crying, tears streaming, still trying to smile',
  asagiri_sad: 'expression: quiet grief, eyes lowered, holding an old crayon drawing, the gentle smile gone',
});

Object.assign(BG_PROMPTS, {
  koharu_room: 'A small one-room apartment overlooking the harbor in the morning: a desk with open drawers, a neatly made bed, a laptop left on, a framed photo on the wall, cute stickers everywhere.',
  library: 'A quiet city library newspaper archive room: long tables, microfilm readers, bound newspapers on shelves, a wall clock, morning light.',
  busstop: 'A bus stop in front of a huge glass corporate headquarters building at noon, a security guard booth at the gate, a bench.',
  warehouse: 'An abandoned harbor warehouse at dusk: rusty half-open shutter, cranes and the sea behind, seagulls.',
  warehouse_in: 'Inside an abandoned harbor warehouse: dusty floor, a single hanging lamp over an old table with two teacups, stacked crates, light leaking through holes in the roof.',
  cafe_night: 'A small cozy retro cafe at night after closing: wooden counter, siphon coffee makers, only one warm lamp on, chairs up on some tables.',
});

Object.assign(CUT_CHARS, {
  koharu: 'a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie',
  ren: 'a woman with long silver-white hair, an eyepatch and a long white coat',
  sota: 'a young police officer in uniform',
  child_rei: 'a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger',
});

Object.assign(CUT_PROMPTS, {
  '5Ae': ['A small apartment that looks ransacked: a broken door, an overturned desk, papers everywhere. IMPORTANT: it is an edited picture: the door\'s shadow falls the opposite way from every other shadow, and the edge of the pasted door area shows a faint seam line (accent color on the scattered papers).', '편집: 어질러진 방, 문 그림자만 반대 방향, 이음매'],
  '5A': ['Before dawn in a tidy small apartment: a hand writes a memo at a neat desk; next to it, a scorched police badge (accent color). A clock shows 4:10.', '정돈된 책상, 메모 쓰는 손, 그을린 경찰 배지(포인트 색), 4:10'],
  '5Be': ['A library newspaper room: {koharu} reads an old newspaper while two men in black stand right behind her. IMPORTANT: edited picture: the two men are pasted in, their screentone dots are clearly larger than the rest, with a visible seam around them.', '편집: 뒤의 검은 옷 남자 둘만 스크린톤이 굵음, 이음매'],
  '5B': ['A library newspaper room, wall clock 9:00: close view of an old newspaper about a lighthouse library fire with a photo of a young police officer (accent color on the photo), held by {koharu}\'s hands.', '오래된 신문의 순경 사진(포인트 색), 벽시계 9:00'],
  '5Ce': ['A bus stop in front of a glass headquarters: several white-gloved hands drag {koharu} into a white van. IMPORTANT: edited picture: the gloved hands have unnaturally smooth clean lines unlike the rest, with a visible seam where they were pasted.', '편집: 매끈한 흰 장갑 손들, 이음매'],
  '5C': ['Noon at a bus stop in front of a glass headquarters: {koharu} smiles while typing on her phone; the screen shows a short sent message (accent color).', '웃으며 문자 보내는 코하루, 휴대폰 화면(포인트 색)'],
  '5Ee': ['View from a guard booth window: {ren} drags a girl by the arm. IMPORTANT: edited picture: the white-coated figure has no shadow at all while everything else does.', '편집: 흰 코트만 그림자가 없음'],
  '5E': ['View from a guard booth window at noon: {koharu} stands alone and asks for directions, pointing toward the harbor (accent color). The guard\'s wristwatch shows 12:10.', '혼자 길을 묻는 아가씨(포인트 색), 손목시계 12:10'],
  '5De': ['Inside an abandoned warehouse: {koharu} tied to a chair. IMPORTANT: edited picture: there is only one ceiling lamp, but shadows fall in two different directions.', '편집: 그림자가 두 방향'],
  '5D': ['Dusk at the harbor: first-person view walking alone toward an abandoned warehouse; at the door, {ren} waits (accent color on her coat). The sky is orange; 6:00.', '혼자 걸어가는 시점, 문 앞의 흰 코트(포인트 색)'],
  '5F': ['Inside an abandoned warehouse: an old table with two teacups; across the table, {koharu} holds out a scorched police badge with both hands, asking earnestly (accent color on the teacups).', '찻잔 둘(포인트 색), 배지를 내미는 코하루'],
  '6Y1': ['Six years ago at night: first-person view from a bicycle on a cape road, looking up at a lighthouse-shaped library with smoke pouring from a window. A wristwatch shows 8:20 (accent color).', '6년 전, 등대 도서관의 연기, 손목시계 8:20(포인트 색)'],
  '6Y2': ['First-person view kicking open a library door into smoke between tall bookshelves (accent color on the door). 8:25 on a wall clock.', '연기 속 서가, 문(포인트 색)'],
  '6Y3': ['First-person view in smoke at the foot of library stairs: hands lift {child_rei} who is coughing; the ink stain on the teenager\'s right index finger is clearly visible (accent color).', '아이를 안아 올림, 오른손 검지 잉크 얼룩(포인트 색)'],
  '6Y4': ['At a library entrance at night: first-person view receiving an unconscious {child_rei} from {sota}\'s arms; on the viewer\'s wrist, a watch stopped at 8:31 (accent color).', '아이를 받아 안음, 8:31에 멈춘 손목시계(포인트 색)'],
  '6Y5': ['First-person view turning back into the smoke and fire of a library; from the floor above, a speech shape of a girl\'s voice (accent color).', '다시 연기 속으로, 위층의 목소리(포인트 색)'],
  '6Y6': ['Outside a burning lighthouse library on a lawn at night: first-person view with one hand covering one eye; flames swallow the upper floor windows (accent color on the flames).', '한쪽 눈을 가린 손, 위층을 삼키는 불길(포인트 색)'],
  t_tanabe_2: ['A girl crying on a bus stop bench; her face area is unnaturally smooth like a different drawing pasted in.', '편집: 매끈하게 붙인 우는 얼굴'],
  t_ren_1: ['{ren} pulls {koharu} by the wrist into a warehouse. The area around the wrist has noticeably thicker lines than the rest (a pasted seam).', '편집: 손목 둘레만 굵은 선'],
  t_ren_1b: ['{koharu} behind iron bars inside a warehouse; the bars stand upright but their shadows on the floor are skewed in a wrong direction.', '편집: 창살 그림자가 어긋남'],
  t_ren_2: ['A 16-year-old sick in bed with fever; a wall calendar where the date square has a different paper texture, as if a different date was pasted over it.', '편집: 달력 날짜 칸만 질감이 다름'],
  t_ren_2b: ['A 16-year-old running away alone between burning bookshelves, back view.', '편집: 불타는 서가 사이로 달아나는 아이'],
  t_asagiri_1: ['Close view over a cafe counter: a woman\'s hand offers a cup of sweet coffee with steam; on the ring finger, a faint pale mark where a ring used to be (accent color).', '커피잔, 약지의 희미한 반지 자국(포인트 색)'],
});

Object.assign(WORLD_PROMPTS.mapLabels, { koharuroom: '코하루의 자취방' });
Object.assign(WORLD_PROMPTS, {
  map_koharuroom: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A small one-room apartment in the morning, cute stickers, a harbor view window. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-6 and 20-24 in every row: dark, not accessible.
- Row 1, columns 7-19: the back wall with a framed photo at column 12.
- Rows 2-9, columns 7-19: the room (wooden floor). A desk with open drawers at columns 8-9 of row 2. A laptop on a low table at column 16 of row 3. A neatly made bed at columns 16-17, rows 7-8. A sticker notebook on the floor at column 9, row 6.
- Row 10: the front wall with the door at column 12. Row 11, columns 7-19: the outdoor corridor.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
});
