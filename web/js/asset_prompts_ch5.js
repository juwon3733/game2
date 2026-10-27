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
  pier: 'A long harbor breakwater at dusk: concrete path with tetrapods, a small red harbor lighthouse at the far end just switching on, an abandoned warehouse and cranes in the distance, orange and purple sky, seagulls.',
  warehouse_in: 'Inside an abandoned harbor warehouse: dusty floor, a single hanging lamp over an old table with two teacups, stacked crates, light leaking through holes in the roof.',
  cafe_night: 'A small cozy retro cafe at night after closing: wooden counter, siphon coffee makers, only one warm lamp on, chairs up on some tables.',
});

Object.assign(CUT_CHARS, {
  koharu: 'a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie',
  ren: 'a woman with long silver-white hair, a black eyepatch, white gloves and a long white coat',
  sota: 'a young police officer in uniform',
  child_rei: 'a 16-year-old high school student (a teenager, not a small child) with messy short black hair, a school uniform with an oversized hoodie over it, and an ink stain on the right index finger',
});

Object.assign(CUT_PROMPTS, {
  '5Ae': ['A small apartment that looks ransacked before dawn: a broken door off its hinges, an overturned desk, pulled-out drawers, papers everywhere, a streetlight through the window on the left. IMPORTANT: it is an edited picture: the desk\'s shadow falls to the right, but the door\'s shadow falls to the left, toward the light, and the edge of the pasted door area shows a faint seam line (accent color on the scattered papers).', '편집: 어질러진 방, 문 그림자 방향이 반대, 이음매'],
  '5A': ['Before dawn in a tidy small apartment, the window still pitch dark: under a desk lamp, a hand writes a memo at a neat desk; next to it, a scorched police badge (accent color). No clock.', '깜깜한 창, 스탠드 불빛, 메모 쓰는 손, 그을린 경찰 배지(포인트 색)'],
  '5Be': ['A library newspaper room: {koharu} reads an old newspaper while two men in black stand right behind her. IMPORTANT: edited picture: the two men are pasted in, their screentone dots are clearly larger (bean-sized vs rice-sized on {koharu}), with a faint seam around them.', '편집: 남자 둘의 스크린톤 점이 코하루보다 굵음, 이음매'],
  '5B': ['A library newspaper room, wall clock 9:00: close view of an old newspaper about a lighthouse library fire (headline: one schoolgirl and one police officer dead, one high school student rescued) with a photo of a young police officer (accent color on the photo), held by {koharu}\'s hands.', '오래된 신문의 순경 사진(포인트 색), 벽시계 9:00'],
  '5Ce': ['A bus stop in front of a glass headquarters: several white-gloved hands drag {koharu} into a white van. IMPORTANT: edited picture: the gloved hands have unnaturally smooth clean lines unlike the rest, with a visible seam where they were pasted.', '편집: 매끈한 흰 장갑 손들, 이음매'],
  '5C': ['A bus stop in front of a glass headquarters: {koharu} sits on the bench smiling while typing on her phone; the screen shows a short sent message (accent color). A small star-shaped charm hangs from the bag on her lap. No clock.', '웃으며 문자 보내는 코하루, 휴대폰 화면(포인트 색), 가방의 별 모양 참'],
  '5Ee': ['View from a guard booth window at noon: {ren} drags a girl by the arm. The gate pillar, the girl and her bag cast short shadows. IMPORTANT: edited picture: the white-coated figure has no shadow at all.', '편집: 흰 코트만 그림자가 없음'],
  '5E': ['View from a guard booth window at noon: among office workers streaming out for lunch, {koharu} stands alone (nobody holding her) and calmly asks for directions with a clear, untroubled face (accent color on her), phone in one hand; the guard\'s own hand at the edge of the window points toward the harbor; the charm loop on her bag is empty. The guard\'s wristwatch shows 12:10.', '혼자 길을 묻는 아가씨(포인트 색), 빈 가방 고리, 손목시계 12:10'],
  '5De': ['Inside an abandoned warehouse: {koharu} tied to a chair, stacked crates nearby. IMPORTANT: edited picture: there is only one ceiling lamp, yet each of the four chair legs casts two shadows (eight leg shadows in total, in two directions), while the crates cast only one shadow each.', '편집: 전등 하나인데 의자 다리 그림자가 여덟 개'],
  '5D': ['Dusk at the harbor: first-person view walking alone toward an abandoned warehouse, the viewer\'s long shadow stretching ahead; at the half-open shutter, {ren} waits (accent color on her coat). Orange sky. No clock.', '혼자 걸어가는 시점, 긴 그림자, 셔터 앞의 흰 코트(포인트 색)'],
  '5F': ['Inside an abandoned warehouse: an old table with two teacups, one empty; across the table, {koharu} holds out a scorched police badge with both hands, asking earnestly (accent color on the teacups). Purple evening sky through a gap in the shutter.', '찻잔 둘, 하나는 빔(포인트 색), 배지를 내미는 코하루, 보랏빛 하늘'],
  '6Y1': ['Six years ago at night: first-person view from a bicycle on a cape road, looking up at a lighthouse-shaped library with smoke from one ground-floor window. A wristwatch shows 8:20 (accent color).', '6년 전, 1층 창의 연기, 손목시계 8:20(포인트 색)'],
  '6Y2': ['First-person view kicking open the library front door into low smoke between tall bookshelves (accent color on the door); beside the door a clear notice board with a big arrow: emergency exit closed for construction, this door only. Deep inside, a spiral staircase leading up. No clock.', '연기 속 서가, 문(포인트 색), 문 옆 「비상구 공사 중」 안내판, 안쪽 깊숙이 계단'],
  '6Y3': ['First-person view in smoke at the foot of a spiral staircase deep inside the library, far from the front door; the top of the stairs glows red. Hands pull up {child_rei}, collapsed on the first step, onto the viewer\'s back; the ink stain on the teenager\'s right index finger is clearly visible (accent color).', '정문에서 먼 계단 아래, 고등학생을 업음, 오른손 검지 잉크 얼룩(포인트 색)'],
  '6Y4': ['Outside the library front door at night: first-person view helping a half-conscious {child_rei} down from {sota}\'s back and holding them up by the shoulder; on the viewer\'s wrist, a watch stopped at 8:31 (accent color).', '순경 등에서 고등학생을 받아 부축, 8:31에 멈춘 손목시계(포인트 색)'],
  '6Y5': ['First-person view with empty hands, turning back into the library; fire has now spread to the bookshelves just inside the door; from the floor above, a speech shape of a girl\'s voice (accent color).', '빈손으로 다시 연기 속으로, 입구 서가까지 번진 불, 위층의 목소리(포인트 색)'],
  '6Y6': ['Outside a burning lighthouse library on a lawn at night: first-person view with one hand covering one eye; flames have swallowed every upper floor window (accent color on the flames); fire engine lights spill across the grass.', '한쪽 눈을 가린 손, 위층을 모두 삼킨 불길(포인트 색), 경광등 불빛'],
  t_tanabe_2: ['A girl crying on a bus stop bench, hugging her bag; a bus timetable beside the bench, a drink can rolled near her feet. Her face area is unnaturally smooth like a different drawing pasted in.', '편집: 매끈하게 붙인 우는 얼굴'],
  t_ren_1: ['{ren} pulls {koharu} by the wrist into a warehouse through a half-open shutter, one ceiling lamp inside. The area around the wrist has noticeably thicker lines than the rest (a pasted seam).', '편집: 손목 둘레만 굵은 선'],
  t_ren_1b: ['{koharu} behind iron bars inside a warehouse, gripping the bars; a padlock on the bar door, one ceiling lamp. The single lamp hangs straight above the bars, so their shadows should fall short and straight down, but the bar shadows on the floor stretch long and slanted to one side (a pasted seam).', '편집: 창살 그림자가 어긋남'],
  t_ren_2: ['A 16-year-old high school student sick in bed with fever; medicine packets and a glass of water by the pillow, a school uniform hanging on the wall; a wall calendar where the date square has a different paper texture, as if a different date was pasted over it.', '편집: 달력 날짜 칸만 질감이 다름'],
  t_ren_2b: ['A 16-year-old in a school uniform running alone between burning bookshelves, back view.', '편집: 불타는 서가 사이로 달아나는 고등학생'],
  t_tanabe_0: ['View from a guard booth window at noon: office workers with ID lanyards stream out of the headquarters gate for lunch; the guard\'s wristwatch lies on the window frame.', '점심시간 정문 앞, 창틀의 손목시계 (사실 증언)'],
  t_ren_3: ['An afternoon breakwater: {ren} and {koharu} sit side by side on tetrapods; a scorched police badge on {koharu}\'s lap, seagulls, a low sun.', '방파제에 나란히 앉은 렌과 코하루, 무릎의 배지 (사실 증언)'],
  t_asagiri_0: ['A rainy night at a small retro cafe door: {child_rei} stands soaked in a school uniform with a bandage on the forehead; one warm lamp behind the counter.', '비 오는 밤 카페 문가의 젖은 고등학생 레이 (사실 증언)'],
  t_asagiri_1: ['Close view over a cafe counter: six nearly identical layers of the same moment stacked like translucent pages — a woman\'s hand offers a cup of sweet coffee with steam, two sugar cubes on the saucer, wood grain of the counter. Same angle, same steam in every layer; only the pale ring mark on the ring finger fades a little more in each layer (accent color).', '6겹 같은 장면, 약지 반지 자국만 겹마다 옅어짐(포인트 색)'],
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
