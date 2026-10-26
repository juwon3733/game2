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
  R1: ['First-person view at a library reading table by a round window at night: the viewer\'s right hand inks a manga page with a pen (accent color on the pen); across the table, {shiori} reads a manuscript aloud. A wall clock shows 7:30.', '펜을 쥔 오른손(포인트 색), 맞은편에서 읽어 주는 시오리, 벽시계 7:30'],
  R2: ['First-person view: the viewer\'s hand strikes a pen line through the "story" name field of a manga contest application form (accent color on the line); speech space at the top.', '응모 서류의 칸을 긋는 손(포인트 색)'],
  R3: ['First-person view running down a spiral staircase in a lighthouse library, leaving a stack of manuscript pages behind on the landing (accent color on the pages). 8:05 on a wall clock.', '계단을 뛰어 내려감, 두고 온 원고(포인트 색)'],
  R4: ['A bench at the tip of a cape at night: the viewer\'s knees and arms, face buried; the lighthouse beam sweeps over the sea (accent color on the beam). A wristwatch shows 8:15.', '곶 끝 벤치, 등대 불빛(포인트 색), 손목시계 8:15'],
  R5: ['First-person view leaping up from a cape bench and running back toward a lighthouse library with smoke pouring from its windows (accent color on the smoke glow). 8:20.', '연기 나는 도서관으로 되돌아 뜀(포인트 색)'],
  R6: ['First-person view in thick smoke on a library staircase, the view tilting as the viewer collapses toward the floor (accent color on a faint light above).', '연기 속 계단, 기울어지는 시야'],
  R7: ['Very blurry first-person view: a girl\'s hand slips away from the viewer\'s hand, passing the viewer into a police officer\'s arms (accent color on the girl\'s sleeve). 8:28.', '흐린 시야, 넘겨주며 떨어지는 손(포인트 색)'],
  R8: ['Blurry first-person view carried on a police officer\'s back away from a burning library; through the door behind, a small girl\'s silhouette walks back inside (accent color on the silhouette).', '경찰의 등 위, 문 안으로 들어가는 작은 그림자(포인트 색)'],
  S1: ['First-person view reading a manuscript aloud at a library table at night; across the table, {young_rei} draws, the pen tip moving (accent color on the manuscript). 7:30.', '읽어 주는 원고(포인트 색), 맞은편에서 그리는 아이'],
  S2: ['Back view of {young_rei} turning away, holding a contest application form with a struck-out field (accent color on the form). 7:50.', '돌아선 아이의 등, 그어진 응모 서류(포인트 색)'],
  S3: ['A lonely library reading table at night: the last page of a manuscript is completely blank (accent color on the page edge). 8:05.', '백지인 마지막 장(포인트 색)'],
  S4: ['Looking down from a library stair landing into a dark book stack: the flame of a silver lighter (accent color) lights up the side of the face of {nishi}. 8:15.', '라이터 불빛(포인트 색)에 비친 남자의 옆얼굴'],
  S5: ['First-person view: hurriedly sketching a man\'s face in pencil on the back of a manuscript page, then hugging the pages to the chest (accent color on the pencil). 8:20.', '원고 뒷면에 얼굴을 그림(포인트 색)'],
  S6: ['First-person view in smoke on a staircase: arms reaching for {young_rei} collapsed on the steps (accent color on the reaching sleeve). 8:25.', '쓰러진 아이를 끌어안음(포인트 색)'],
  S7: ['At the foot of a library staircase in smoke: handing {young_rei} into the arms of a young police officer who just ran in (accent color on the badge). 8:28.', '순경에게 아이를 넘김, 배지(포인트 색)'],
  S8: ['First-person view turning back up a smoky staircase toward the upper floor; behind, the footsteps of a police officer following (accent color on the officer\'s cap). 8:33.', '다시 2층으로, 뒤따르는 순경(포인트 색)'],
  AF: ['An old small apartment kitchen twelve years ago: a child\'s crayon drawing of three people stuck on a fridge (accent color on the drawing); through the window, a hillside cut by construction cranes and a glow of fire.', '냉장고의 크레용 그림(포인트 색), 창밖 크레인과 불빛'],
  t_asg_1: ['A spotless official fire report document on a desk, perfectly neat.', '말끔한 소방 보고서'],
  t_asg_2: ['A child sleeping in bed with a fever, unnaturally calm and seamless.', '편집: 너무 고요한 감기 걸린 아이'],
  t_asg_3: ['A cafe counter at night, spotless; the wall behind is completely empty.', '아무것도 걸리지 않은 벽'],
  t_self_3: ['Two manga panels joined: a child running down stairs, and immediately next to it, a girl\'s hand falling away; a very thin seam line between the two panels.', '편집: 뛰쳐나감과 떨어지는 손이 붙은 이음매'],
  t_self_4: ['A child standing alone in front of a burning lighthouse library, nobody else in sight.', '불타는 도서관 앞에 혼자 선 아이'],
});

Object.assign(CG_PROMPTS, {
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
