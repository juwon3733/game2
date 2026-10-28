// 종장 「같은 하루」 이미지 프롬프트. asset_prompts.js의 표에 더한다.

Object.assign(FACE_PROMPTS, {
  rei_crying: 'expression: crying quietly for the first time, tears on the cheeks, sleepy eyes wide open',
  shiori_smile: 'expression: warm gentle smile, holding a bookmark hairpin, slightly translucent',
});

Object.assign(BG_PROMPTS, {
  lighthouse: 'The ruins of a small lighthouse-shaped library on the tip of a cape at dusk: half-collapsed white tower, burned windows, overgrown grass, a lone bench facing the sea, the late-summer harbor town lights far away.',
  lighthouse_in: 'Inside the burned upper floor of a lighthouse-shaped library: charred bookshelves, a reading table by a round window, scattered burnt manuscript pages, moonlight through the broken roof.',
  lighthouse_dawn: 'The tip of a cape at dawn: the ruined lighthouse library silhouetted against a pink and orange sky, calm sea, birds, a bench.',
});

Object.assign(CUT_CHARS, {
  shiori: 'a 16-year-old girl with long straight black hair, blunt bangs, a bookmark hairpin and an old navy sailor uniform',
  young_rei: 'a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger',
  nishi: 'a man in a black suit with slicked-back hair',
});

Object.assign(CUT_PROMPTS, {
  R1: ['First-person view at a library reading table by a round window at night: the viewer\'s right hand inks a manga page with a pen (accent color on the pen); across the table, {shiori} reads a manuscript aloud. A wall clock by the window shows 7:30.', '펜을 쥔 오른손(포인트 색), 맞은편에서 읽어 주는 시오리, 벽시계 7:30'],
  R2: ['First-person view: the viewer\'s hand strikes a pen line through the "story" name field of a manga contest application form (accent color on the line); speech space at the top.', '응모 서류의 칸을 긋는 손(포인트 색)'],
  R3: ['First-person view running down a spiral staircase in a lighthouse library at night, leaving a stack of manuscript pages behind on the landing (accent color on the pages). No clock.', '계단을 뛰어 내려감, 두고 온 원고(포인트 색)'],
  R4: ['A bench at the tip of a cape at night: the viewer\'s knees and arms, face buried; the lighthouse beam sweeps over the sea (accent color on the beam). A wristwatch on the viewer\'s wrist shows 8:15.', '곶 끝 벤치, 등대 불빛(포인트 색), 손목시계 8:15'],
  R5: ['First-person view at night from a cape bench, turning back toward a lighthouse library with smoke spreading below its upper windows, starting to run toward it (accent color on the smoke glow). No clock.', '연기 나는 도서관으로 되돌아 뜀(포인트 색)'],
  R6: ['First-person view in thick smoke on a library staircase, the view tilting as the viewer collapses toward the floor (accent color on a faint light above).', '연기 속 계단, 기울어지는 시야'],
  R7: ['Very blurry first-person view of a teenager half-conscious at the foot of a smoky staircase: a girl\'s hand that held the viewer\'s arm over her shoulder slips away, and a young police officer\'s broad back lifts the viewer up (accent color on the girl\'s sleeve). No clock.', '흐린 시야, 부축하던 손이 떨어지고 순경의 등이 받아 올림(포인트 색)'],
  R8: ['Blurry first-person view of a teenager leaning with one arm over an adult man\'s shoulder, being walked away from a burning library door at night, looking back over the shoulder; through the open door, inside at the foot of the staircase, a girl\'s small silhouette climbs back up the stairs and a police officer\'s cap runs in after her (accent color on the girl\'s silhouette). No clock.', '어깨에 기대 멀어짐, 뒤돌아본 문 안 계단을 오르는 그림자와 순경 모자(포인트 색)'],
  S1: ['First-person view reading a manuscript aloud at a library table at night; across the table, {young_rei} draws, the pen tip moving (accent color on the manuscript). No clock.', '읽어 주는 원고(포인트 색), 맞은편에서 그리는 레이'],
  S2: ['Back view of {young_rei} turning away, holding a contest application form with a struck-out field (accent color on the form). No clock.', '돌아선 레이의 등, 그어진 응모 서류(포인트 색)'],
  S3: ['A lonely library reading table at night, the chair across pushed back: the last page of a manuscript is completely blank (accent color on the page edge). No clock.', '밀려난 의자, 백지인 마지막 장(포인트 색)'],
  S4: ['Looking down from a library stair landing into a dark ground-floor book stack: a pile of newspapers on the floor, an open back door at the far end, and the flame of a silver lighter (accent color) lighting up the side of the face of {nishi}. The face must be large and clear. No clock.', '라이터 불빛(포인트 색)에 비친 남자의 옆얼굴, 신문지 더미, 열린 뒷문'],
  S5: ['First-person view at a library reading table: hurriedly sketching a man\'s face in pencil on the back of a manuscript page (accent color on the pencil); hazy smoke beyond the window; a metal box with an open lid under the bookshelf nearby. No clock.', '원고 뒷면에 얼굴을 그림(포인트 색), 서가 아래 철제 상자'],
  S6: ['First-person view in smoke on a staircase: pulling the arm of {young_rei}, collapsed on the steps, over the viewer\'s shoulder to lift them up (accent color on the viewer\'s sleeve). No clock.', '쓰러진 레이를 부축해 일으킴(포인트 색)'],
  S7: ['At the foot of a library staircase in smoke: a young police officer who just ran in takes {young_rei}, half-conscious, onto his back; the viewer\'s hands let go (accent color on the badge). The officer\'s wristwatch shows 8:28.', '순경이 레이를 업음, 배지(포인트 색), 손목시계 8:28'],
  S8: ['First-person view from the foot of a smoky staircase, looking up toward the upper floor and stepping onto the first stair; behind, through the open front door, the silhouette of a police officer running back in (accent color on the officer\'s cap). No clock.', '계단을 다시 올려다봄, 뒤에서 뛰어 들어오는 순경(포인트 색)'],
  AF: ['An old small apartment kitchen twelve years ago: a child\'s crayon drawing of three people stuck on a fridge (accent color on the drawing); through the window, a hillside cut by construction cranes and a glow of fire.', '냉장고의 크레용 그림(포인트 색), 창밖 크레인과 불빛'],
  t_asg_1: ['A spotless official fire report document on a desk, perfectly neat.', '말끔한 소방 보고서'],
  t_asg_2: ['A glossy resort development rendering pinned on a corkboard: a hotel standing on the tip of a cape where a lighthouse-shaped library should be, a red stamp in the corner reading land secured. Clean, corporate, no people.', '리조트 조감도: 곶 끝 호텔, 귀퉁이 「용지 확보 완료」 도장'],
  t_asg_3: ['A cafe counter at night, spotless; the wall behind is completely empty.', '아무것도 걸리지 않은 벽'],
  t_self_3: ['A library reading table at night, seen from behind the back of {young_rei}, who stands turning away clutching a contest application form; across the table {shiori} sits with her mouth closed and head bowed. No clock.', '돌아선 레이의 등 너머, 고개 숙인 시오리'],
  t_self_4: ['At the foot of a smoky library staircase at night: {young_rei}, carried on a young police officer\'s back, moving away toward the open front door; on the first step a girl in a navy sailor uniform sits slumped, only her sleeve and reaching hand clearly visible (accent color on the sleeve), her face hidden in smoke. No clock.', '순경 등에 업혀 멀어지는 레이, 첫 단에 주저앉아 손 뻗는 교복 소매(포인트 색)'],
  t_self_5: ['Six August wall calendars overlapped like stacked panels: on every one, the box for the 31st is blank white as if cut out, while the other days have small handwritten notes. No people.', '여섯 장 겹친 8월 달력, 31일 칸만 하얗게 빔'],
  RF: ['Night, a rusty wire fence on the tip of a cape: a right hand lays a bouquet of white chrysanthemums at the foot of the fence (accent color on the flowers); a dark ink stain on the right index finger is clearly visible. The same hand and fence repeated as five faint overlapping layers, only the flower colors differ; in the last layer the same person (seen from behind, only legs and the hand) walks away up a hill road toward the warm light of a small cafe.', '국화를 내려놓는 오른손, 검지의 잉크 자국(크게), 다섯 겹, 마지막엔 언덕 위 카페 쪽으로 걸어감'],
  AC: ['A small cafe at night after closing, chairs on the tables, one warm lamp over the counter: a teenager with messy short black hair and an oversized hoodie stands at the counter, head bowed, wet chrysanthemum petals on the sleeve (accent color on the lamp light). Faint overlapping layers show the same figure slightly taller each time.', '문 닫은 카페, 고개 숙인 레이, 소매의 국화 꽃잎, 해마다 겹친 모습'],
});

Object.assign(CG_CHARS, {
  ruru: 'a 19-year-old girl vocalist with long blue hair with two small braided loops, a black cap with a small white bird mascot and an oversized white stage jacket',
  pin: 'an 18-year-old girl bassist with long silver-white hair with pink tips, a black beret with white flowers and a long black coat',
  aoi: 'a 21-year-old girl drummer with a long navy-black ponytail and an open cobalt work shirt',
  yuki: 'a 19-year-old girl with long navy hair and a cream ribbon on the RIGHT side, charcoal on her left hand',
  nagi: 'her identical twin sister with long navy hair and a cream ribbon on the LEFT side, a pastry shop apron',
  keiko: 'a 44-year-old woman in a grey work jacket with her hair tied back with an orange hair tie',
  genzo: 'a 78-year-old bathhouse owner in a soot-stained white undershirt',
  sota: 'a young police officer in his twenties with a kind face and a shining police badge',
  young_rei: 'a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger',
  shiori: 'a 16-year-old girl with long straight black hair, blunt bangs, a bookmark hairpin and an old navy sailor uniform',
});

Object.assign(CG_PROMPTS, {
  cg_encore: 'An empty small live house at night with the house lights off: on the stage, lit by a single white spotlight, {ruru} sits on an amp and sings alone with an acoustic guitar; in the empty first row of the audience floor, {pin} and {aoi} sit side by side listening, an empty folding chair with a black suit jacket draped over it beside them.',
  cg_twins: 'Late at night in a closed retro pastry shop: {nagi} sits on the stairs crying, and {yuki} kneels in front of her holding both her hands; their cream ribbons on opposite sides. Warm dim light from the cake showcase.',
  cg_carry: 'A burning old bathhouse entrance at night, fire and embers: {keiko} walks out of the smoke carrying {genzo} on her back, her face and neck sooty, gritting her teeth; red fire-engine lights sweep across the scene.',
  cg_sota: 'Six years ago, at night, at the foot of a smoky library staircase lit by fire: {sota} hoists {young_rei}, a half-conscious teenager, onto his back; his police badge glints. Right beside them, {shiori} lets go of Rei\'s arm and looks back up the smoky stairs.',
  cg_margin: 'Rei sitting at the burned reading table of the lighthouse library at dawn, holding a pen for the first time in six years, drawing in the last empty panel of a manuscript page; a faint translucent Shiori leans over the table smiling, the sea shining through the round window.',
  cg_farewell: 'At the tip of the cape at sunrise, translucent Shiori in her old sailor uniform smiles and waves as she scatters into light, Rei and Koharu standing hand in hand watching, the ruined lighthouse library behind.',
});

Object.assign(WORLD_PROMPTS.mapLabels, { lighthouse: '곶 끝, 등대 도서관 터' });
Object.assign(WORLD_PROMPTS, {
  map_lighthouse: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. The ruins of a lighthouse-shaped library on a cape at dusk, burned wood, moonlight. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-13, rows 1-4: the burned upper floor reading room (charred wooden floor): a reading table at columns 3-4 of row 2, a bookshelf with a metal box at columns 11-12 of row 2, scattered manuscript pages at column 6 of row 3, a burnt form at column 10 of row 3, a small glint on the stair landing at column 7 of row 4.
- Row 5, columns 1-13: a wall with a staircase opening at column 7.
- Columns 1-13, rows 6-9: the burned ground floor book stacks, ash on the floor at column 4 of row 7.
- Column 14: the outer wall with the library door at row 8.
- Columns 15-24, rows 1-9: the grassy cape outside, with a bench facing the sea at columns 21-22 of row 4. Row 10: a cliff railing. Row 11: the sea.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
});
