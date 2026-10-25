// ChatGPT 이미지 프롬프트. 에셋 현황 페이지(assets.html)와 CI 검사(tools/check-assets.mjs)가 같이 쓴다.

const PROMPT_STYLE = {
  // 캐릭터와 배경도 컷과 같은 저해상도 도트. 해상도만 종류별로 다르다.
  pixel: '이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.\n\nAuthentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.',
  sheetRes: 'Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.',
  portraitRes: 'Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors.',
  bgRes: 'Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. Full color, limited palette of about 32 colors.',
  // 컷은 PC-98 어드벤처 게임식 저해상도 도트. 그냥 "pixel art"라고 하면 고해상도 일러스트가 나온다.
  cut: '이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.\n\nAuthentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.\n\n{palette}',
  cutPalette: 'Palette: 8 grey levels from black to white, and one accent color {color}. Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.',
  // 크레용 왜곡 컷은 아이의 기억이라 색을 허용한다
  cutPaletteCrayon: 'Palette: exception for this panel — it is a child\'s crayon memory, so use a few bright crayon colors (yellow, pink, sky blue) with wobbly hand-drawn shapes, still made of chunky pixels. No text, no speech bubbles.',
  portrait: 'Same character as the reference sheet above, waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character: no door, wall, frame, furniture, panel or shape. The head, hair and both arms stay inside the image with clear empty margin on the left, right and top; only the waist touches the bottom edge.',
  // 타이틀·이벤트 CG: 화질 우선. 저해상도·색 제한 없이 GPT가 낼 수 있는 최고 화질의 도트풍 일러스트.
  keyart: '이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.\n\nHigh-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.',
  // 캐릭터(설정화·상반신)만 모바일 가챠게임풍 서브컬처 디자인. 배경과 컷 분위기는 그대로 둔다.
  character: 'Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.',
  // 컷 속 인물도 상반신과 같은 얼굴로 보이게
  cutFaces: 'Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits.',
};

const SPEC = {
  portrait: { w: 1024, h: 1536, note: '세로 1024×1536 · 원본 256×384 도트 4배 · 투명 배경 · 양옆·위 여백' },
  bg: { w: 1536, h: 1024, note: '가로 1536×1024' },
  cut: { w: 1536, h: 1024, note: '가로 1536×1024 · 저해상도 도트 · 회색 8단계 + 포인트 색 1개' },
  map: { w: 1248, h: 624, note: '가로 1248×624 · 원본 416×208 도트를 정확히 3배 · 16px 칸 26×13' },
  sprite: { w: 192, h: 384, note: '192×384 · 64×96 칸 3열×4행 · 투명 배경' },
  title: { w: 1536, h: 1024, note: '가로 1536×1024 · 왼쪽 40%는 제목 자리로 비움' },
  cg: { w: 1536, h: 1024, note: '가로 1536×1024 · 풀컬러 도트 이벤트 그림' },
};

// 캐릭터 설정화: 표정 상반신을 뽑기 전에 같은 대화창에서 먼저 뽑는다.
const CHARACTER_SHEETS = {
  rei: 'Character reference sheet of an androgynous 22-year-old investigator with a cool, sleepy charm. Large half-closed violet-grey eyes with soft highlights and faint dark circles, messy short black hair with one stray ahoge and a small lavender hair clip, oversized grey hoodie under a long beige trench coat with rolled sleeves, a pin badge shaped like a manga panel on the coat, a canned coffee in hand, pen callus on right index finger. Navy and lavender accent colors. Full body front view plus face close-up.',
  koharu: 'Character reference sheet of a cheerful 20-year-old rookie detective girl. Big sparkling amber eyes, orange-brown side ponytail tied with a sky-blue scrunchie with a small star charm, navy suit jacket with rolled sleeves over a white shirt with a loose sky-blue ribbon tie, navy pants, white sneakers, a police badge clipped to her belt, a notebook covered in cute stickers. Sunny orange and sky-blue accent colors. Full body front view plus face close-up.',
  kurogane: 'Character reference sheet of a tired but handsome 47-year-old police chief with a "cool uncle" design. Slicked-back black hair streaked with grey, light stubble, sharp tired eyes, rumpled white shirt with rolled sleeves, loose dark tie, shoulder holster strap, a strawberry lollipop stick in his mouth, old wristwatch. Iron grey and strawberry pink accents.',
  towa: 'Chibi avatar of a hacker shown only on a monitor screen: small 2-head-tall character with big sparkling green eyes, oversized cat-ear headphones with glowing LEDs, wrapped in a cream blanket like a cape, green monitor glow. Reference sheet with several expressions.',
  komatsu: 'Character reference sheet of a gentle, tired 36-year-old single mother who works late shifts. Soft brown bob hair, kind worried eyes like her daughter\'s, beige cardigan over a simple white blouse, an office lanyard, a small music-note keychain on her bag. Warm rose and beige accents.',
  akari: 'Character reference sheet of a lively 20-year-old convenience store clerk girl. Short black hair with mint-green tips and a star hairpin, bright honest eyes, green-and-white store uniform vest over a T-shirt, name tag, wired earbuds around her neck. Mint and white accents.',
  asagiri: 'Character reference sheet of an elegant, gentle 61-year-old cafe owner woman. Beautiful silver hair in a neat bun with a wooden hairpin, round gold glasses, soft kind eyes, cream blouse with a linen apron, a coffee-bean brooch. Cream and coffee brown palette.',
  ookubo: 'Character reference sheet of a friendly, chubby 63-year-old apartment security guard with a comical and lovable design. Round face, bushy grey eyebrows and mustache, olive green guard uniform and cap with a shiny badge, a whistle on a cord. Olive and brass accents.',
  taiga: 'Character reference sheet of a 21-year-old delivery worker with a "scary-looking but soft-hearted delinquent" design. Spiky bleached blond hair under a black cap worn backwards, sharp golden eyes, a small silver earring, black delivery uniform jacket with reflective stripes and rolled sleeves, fingerless gloves. Black and gold accents.',
  himari: 'Character reference sheet of an adorable 9-year-old girl. Big round brown eyes, brown twin tails tied with pink ribbons, a small gold music-note hairpin, pink t-shirt with a piano-key pattern, denim overall skirt, shy expression.',
  shiori: 'Character reference sheet of an ethereal, beautiful 16-year-old girl. Large calm dark eyes, long straight black hair with blunt bangs and a bookmark-shaped hairpin, old navy sailor school uniform with a white ribbon, barefoot, faintly translucent edges like a screentone ghost.',
};

// 표정 상반신: 캐릭터_표정
const FACE_PROMPTS = {
  rei_normal: 'expression: sleepy, indifferent, half-closed eyes',
  rei_serious: 'expression: eyes open, focused and sharp',
  rei_surprised: 'expression: eyes wide, startled',
  koharu_normal: 'expression: friendly smile',
  koharu_happy: 'expression: big cheerful grin, eyes closed with joy',
  koharu_worried: 'expression: worried, eyebrows raised, hand near chest',
  kurogane_normal: 'expression: tired, lollipop in mouth',
  towa_normal: 'expression: smug chibi inside a monitor frame',
  asagiri_normal: 'expression: warm gentle smile, holding a coffee cup',
  komatsu_normal: 'expression: tired but relieved, a gentle sad smile',
  akari_normal: 'expression: earnest, slightly flustered, holding a smartphone',
  ookubo_normal: 'expression: proud and confident, arms crossed',
  ookubo_flustered: 'expression: flustered, sweating, eyes darting',
  taiga_angry: 'expression: defensive glare, arms crossed',
  taiga_sad: 'expression: ashamed, looking down, biting lip',
  himari_normal: 'expression: shy, half hidden behind a door',
  himari_crying: 'expression: crying, clutching something in her fist',
  shiori_normal: 'expression: calm, faint smile, pointing at something',
};

const BG_PROMPTS = {
  office: 'Basement storage room turned into a tiny police office, cardboard evidence boxes stacked high, an old sofa, an electric kettle, dim fluorescent light. Interior, eye level. Keep the lower third simple so characters can stand in front.',
  guardroom: 'Small security guard room on the first floor of an old apartment building, a tiny CRT TV showing baseball, a desk with a logbook, night outside the window.',
  interrogate: 'Police interrogation room, grey walls, metal table, a single desk lamp, one-way mirror.',
  himari_door: 'Apartment corridor on the 5th floor at night, a slightly opened front door with a name plate, warm light leaking out.',
  hospital: 'Quiet hospital corridor at night, benches along the wall, soft cold light.',
  cafe: 'Small cozy retro cafe on a hillside street, wooden counter, siphon coffee makers, warm evening light through the window.',
  night: 'Exterior of an old 6-story apartment building on a hill at night, balconies, a flowerbed below, city lights in the distance.',
};

// 여러 컷에 나오는 인물은 같은 외형 문장으로 그려야 컷끼리 같은 사람으로 보인다.
const CUT_CHARS = {
  taiga: 'a young delivery worker with spiky bleached blond hair (accent color) under a backwards black cap, a small earring and a black uniform with reflective stripes',
  mitsuru: 'a gentle man in his early 30s with glasses and a light shirt',
  himari: 'a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt',
  ookubo: 'a chubby old security guard with a grey mustache in an olive uniform and cap',
};

// 컷: [장면, 꼭 보여야 할 것]. {taiga} 같은 자리는 CUT_CHARS로 바뀐다.
// 장면은 컷이 작게 보여도 읽히도록 큰 덩어리 위주로 쓴다.
const CUT_PROMPTS = {
  A: ['{taiga} holding a cardboard box under his arm, pressing the doorbell of an apartment front door at night. Big music notes drifting out through the door gap.', '옆구리에 낀 상자, 문틈의 음표(♪)'],
  B: ['{mitsuru} sitting at a black upright piano in a cozy living room at night, both hands lifted clearly above the keys and not touching them, his head turned toward the curtained glass door to the balcony; behind the thin curtain, the small shadow of a child.', '멈춘 손(건반에서 뗀 손), 업라이트 피아노, 커튼 너머 작은 그림자'],
  C: ['{mitsuru} leaning through the gap of a balcony partition at night, reaching out desperately. Beyond the partition: a child\'s small feet standing on the railing, and a tiny glint of a small hairpin caught on the outer ledge (only a small sparkle, no toy or other object). Leave empty space at the top center for a speech bubble.', '칸막이, 뻗은 팔, 난간 위 작은 발, 바깥 턱의 반짝임, 위쪽 가운데 빈 공간'],
  D: ['{taiga}, startled at an apartment front door at night, turning back toward something off-panel. His cardboard box has just dropped to the floor at his feet. Simple speed lines from the side.', '바닥에 떨어진 상자, 놀란 얼굴'],
  E: ['{taiga} bursting out of a stairwell into the entrance hall, shouting with a terrified face, both hands empty. Leave empty space at the top center for a speech bubble.', '빈 손, 외치는 입, 위쪽 가운데 빈 공간'],
  F: ['Close-up on a stairwell: a hand gripping a dead smartphone, the screen showing a big empty battery icon. Blond hair (accent color) at the edge of the panel.', '휴대폰 화면의 빈 배터리'],
  G: ['On a balcony at night, a music-note hairpin flying away in the wind from the hair of {himari}. She stands on the balcony floor reaching for it.', '날아가는 음표 머리핀, 바닥에 선 아이'],
  H: ['Seen from inside a 5th-floor apartment balcony high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious: {himari} has stepped up onto a flowerpot set against the railing and leans her upper body over the top of the railing, stretching one arm down toward the narrow outer ledge just outside the railing, where her music-note hairpin lies, drawn large and clearly in the accent color. On one side, a white emergency partition board; the neighbor\'s balcony beyond it is empty.', '화분을 밟은 발, 난간 위로 내민 몸, 난간 바로 바깥 턱의 큰 머리핀(포인트 색), 빈 칸막이, 아래로 보이는 항구 야경(높이)'],
  I: ['Seen from the side on a 5th-floor apartment balcony high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious: an adult\'s arm reaches through the gap beside the white emergency partition and pulls {himari} back down from the railing onto the balcony floor; she clutches her music-note hairpin, drawn clearly in the accent color. The adult (glasses, light shirt) leans dangerously far out over the railing on his side of the partition.', '손에 쥔 머리핀(포인트 색), 칸막이 틈으로 뻗은 어른 팔, 바깥으로 기우는 어른, 아래 항구 야경(높이)'],
  t_ookubo_1: ['{ookubo} proudly writing in a logbook at his desk, absurd sparkles and flowers around him (an exaggerated, self-flattering memory).', '미화: 반짝이, 꽃'],
  t_ookubo_2: ['At night: {taiga} running out of a stairwell, same outfit and delivery backpack as always, but his face is scribbled over with a crude horned monster doodle like a child\'s pen scribble (a prejudiced memory). He is not wearing a guard uniform. Through the glass entrance door, the dark night street lit by a single streetlamp.', '낙서: 얼굴이 괴물 낙서, 밤'],
  t_ookubo_2_truth: ['{taiga} running out of a stairwell, face clearly visible, scared and about to cry, shouting.', '(진실) 겁먹은 얼굴'],
  t_ookubo_3: ['A dull impact on a flowerbed in front of an apartment building at night, seen from far away: a puff of dust and crushed flowers. No person is visible.', '화단의 충격'],
  t_taiga_1: ['First-person view of a hand pressing an apartment doorbell at night, music notes coming through the door.', '초인종, 음표'],
  t_taiga_2: ['An enormous impact effect filling the entire panel, the apartment hallway tiny underneath (an exaggerated memory).', '과장: 화면을 뒤덮는 충격'],
  t_taiga_3: ['Back view of {taiga} going down stairs, with his face and hands left completely blank white as if erased.', '생략: 하얀 여백'],
  t_taiga_3_truth: ['At night on a dim stairwell: {taiga} holds up a smartphone close to the viewer; its black screen shows only one big empty battery icon, clearly readable. He bites his lip in frustration.', '(진실) 꺼진 휴대폰의 큰 빈 배터리 아이콘'],
  t_himari_1: ['Child\'s crayon drawing of a little girl doing homework at a desk.', '크레용 그림체'],
  t_himari_1_truth: ['{himari} at her desk, looking out the window instead of at her homework.', '(진실) 창밖을 보는 아이'],
  t_himari_2: ['Child\'s crayon drawing of a little girl at a window, the balcony drawn strangely huge.', '크레용, 거대한 베란다'],
  t_himari_2_truth: ['From inside the room through the open glass door, on a 5th-floor apartment balcony high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious: {himari} leans on the balcony railing and stares at her music-note hairpin lying on the narrow outer ledge just outside the railing, drawn large in the accent color.', '(진실) 난간 바깥 턱의 큰 머리핀(포인트 색), 항구 야경(높이)'],
  t_himari_3: ['Child\'s crayon drawing of a blanket colored completely black, a tiny fist in the corner.', '크레용, 새까만 이불'],
  t_himari_3_truth: ['{himari} crying under a blanket, holding her music-note hairpin tightly.', '(진실) 머리핀을 쥔 손'],
};

// 탐색 맵·걷는 캐릭터·타이틀 키아트. 게임은 이미지가 있으면 쓰고, 없으면 코드로 그린 임시 그림을 쓴다.
// 맵 그림이 들어오면 Claude가 그림을 보고 explore.js의 충돌 칸(rows)과 물건 위치를 그림에 맞춘다.
const WORLD_PROMPTS = {
  map_mansion5f: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. Night, warm indoor lamp light and cool moonlight. No characters, no text.

Layout by tile rows, top to bottom:
- Rows 0-3: the 5th floor outdoor corridor of an old Japanese apartment building. Row 1 is the corridor's back wall with ceiling lamps, a fire extinguisher box and electric meter boxes. Rows 2-3 are the concrete corridor floor. A staircase going down at the far left (column 1).
- Row 4: thick wall between corridor and apartments. Column 9 is the open front door of Saeki's apartment (stone entrance floor, door swung open). Column 18 is the closed door of the neighbor's apartment with a small nameplate and a pink sticker.
- Rows 5-9, columns 1-17: inside Saeki's apartment, one wide living room with warm wooden floor and cream wallpaper on the top wall (row 5). A black upright piano with its lid open and sheet music at columns 2-3, row 7. A green two-seat sofa with a pink cushion at columns 12-13, row 6. A low wooden table with sheet music, notebooks and a mug on a rug at columns 8-9, row 8. A wall calendar on the top wall at column 5. A pair of men's shoes and a pair of small white children's indoor shoes just inside the door at column 10, row 6. A bookshelf at column 1, row 6, a potted plant at column 17, row 6, a small TV stand at columns 14-15, row 9.
- Columns 19-25, rows 5-10: the neighbor's apartment, not accessible, shown as plain dark roof.
- Row 10: the apartment's back wall with a glass sliding door to the balcony at columns 7-9 (the middle one open), an outdoor air-conditioner unit and hanging laundry on the outside.
- Row 11: a narrow concrete balcony running the whole width. A terracotta plant pot with soil spilled around it and tiny child footprints at column 16. A white emergency partition board standing across the balcony at column 17, with a small gap underneath. The neighbor's balcony continues on the right from column 18, with a pink flower pot at column 18 and warm light from the neighbor's window.
- Row 12: the balcony's metal railing; through the bars, far below, the lights of a harbor town at night.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
  sprite: `Top-down RPG walking sprite sheet in pixel art, for the same game as the character portraits. Transparent background. The sheet is exactly 192x384: a grid of 3 columns by 4 rows, each cell 64x96, every cell the same size with the character centered and feet at the same height near the bottom of the cell. Native pixel size 2x2 (each cell is 32x48 pixels upscaled 2x with nearest-neighbor). Columns: standing, left foot forward, right foot forward. Rows from top: facing down (toward the viewer), facing left, facing right, facing up (back view). Cute chibi proportions about 2.5 heads tall, but keep the face, hair and outfit recognizable as the portrait design. Clean dark outline, limited palette of about 24 colors, no anti-aliasing, no text, no grid lines.

Character: {char}`,
  sprites: {
    rei: 'an androgynous 22-year-old investigator, messy short black hair with one ahoge and a small lavender hair clip, sleepy violet-grey eyes, oversized grey hoodie under a long beige trench coat.',
    koharu: 'a cheerful 20-year-old rookie detective girl, orange-brown side ponytail with a sky-blue scrunchie, navy suit jacket over a white shirt with a sky-blue ribbon tie, navy pants, white sneakers.',
    shiori: 'a pale 16-year-old girl ghost, long straight black hair with blunt bangs, old navy sailor school uniform with a white ribbon, barefoot, slightly translucent.',
  },
  title_key: `Key visual illustration for the title screen of a mystery visual novel. Late-summer harbor town at night, seen from a sloped street with old apartment buildings, warm window lights and the sea with harbor lights in the distance. On the right half: {rei} standing in front, looking back over the shoulder at the viewer with a calm sleepy expression, and {koharu} slightly behind, smiling. Several translucent black-and-white manga panels float in the air around them like scattered memories, each showing a faint scene from the same night. The left 40% of the image is calm, darker night sky and street with no important details, reserved for the title text. No text, no letters, no logo.`,
};

// UI 스킨: 9-slice(모서리 고정, 가운데 늘어남)로 쓰는 틀 이미지와 아이콘. 한 대화에서 같은 스타일로 만든다.
// 크기는 원본 도트의 정확히 3배. slice는 확대 후 픽셀 기준 모서리 두께.
const UI_STYLE = 'Pixel art UI element for a mystery visual novel whose theme is manga pages: cream manga paper (#f7f3ea) with a bold black ink border (#1d1d22), small screentone dot patterns and a hint of gold (#f2c14e) accents. Crisp pixel art at native resolution, upscaled exactly 3x with nearest-neighbor, no anti-aliasing, no text, no letters. Flat front view, no perspective, no drop shadow outside the element, transparent background outside the element.';
const UI_PROMPTS = {
  ui_textbox: { w: 288, h: 144, slice: 24, p: 'A dialogue box frame, 288x144. 9-slice friendly: the four 24x24 corners have small ink flourishes, the edges between them are a uniform repeatable ink border, the center is plain cream paper with a very faint screentone so it can stretch.' },
  ui_textbox_dark: { w: 288, h: 144, slice: 24, p: 'A narration box frame, 288x144, same shape as the dialogue box but dark: deep navy-black paper (#14141a) with a thin light-grey ink border. 9-slice friendly: 24x24 corners, uniform edges, plain center.' },
  ui_name: { w: 144, h: 48, slice: 12, p: 'A small name plate tab, 144x48, like a manga caption box: cream paper with a black ink border and a small gold corner. 9-slice friendly: 12x12 corners, uniform edges, plain center.' },
  ui_button: { w: 144, h: 48, slice: 12, p: 'A button, 144x48: cream paper with a 3-pixel black ink border and a slightly darker bottom edge so it looks pressable. 9-slice friendly: 12x12 corners, uniform edges, plain center.' },
  ui_button_hot: { w: 144, h: 48, slice: 12, p: 'The same button in its hovered state, 144x48: gold (#f2c14e) paper with the same black ink border. 9-slice friendly.' },
  ui_button_red: { w: 144, h: 48, slice: 12, p: 'A dramatic red action button, 144x48: red (#e0383e) with a black ink border and small white speed-line marks in the corners. 9-slice friendly: 12x12 corners, uniform edges, plain red center.' },
  ui_panel: { w: 288, h: 288, slice: 36, p: 'A large panel frame for menus and the case notebook, 288x288: cream paper with a bold ink border, a paper-clip at the top-left corner and screentone in the corners. 9-slice friendly: 36x36 corners, uniform edges, plain center.' },
  ui_icons: { w: 768, h: 96, slice: 0, p: 'A horizontal strip of 8 icons, each exactly 96x96 (32x32 native), evenly spaced with transparent background, black ink outline style with small gold accents, in this order from left to right: 1 a small notebook, 2 a scroll of dialogue lines (log), 3 a play triangle with a small "A" shape made only of pixels (auto), 4 a double fast-forward arrow (skip), 5 a gear (settings), 6 a magnifying glass, 7 a small blue ink bottle, 8 a cat-ear headphone.' },
  ui_objection: { w: 1536, h: 512, slice: 0, p: 'A wide cut-in banner background, 1536x512, for the moment the hero rebuts a witness: explosive black and red manga speed lines radiating from the left, white screentone burst, torn paper edges at top and bottom. Leave the middle empty and calm for text that will be overlaid by the game. No characters, no text.' },
};

// 이벤트 CG: 중요한 순간을 한 장으로. 풀컬러 도트, 상반신과 같은 얼굴.
const CG_PROMPTS = {
  cg_shiori: 'At night on the narrow concrete balcony of an old apartment, beside a white emergency partition board, {shiori} stands still and points toward the neighbor\'s balcony, pale and faintly translucent, while {rei} in the foreground looks at her, startled. Cool moonlight, warm light from the neighbor\'s window.',
  cg_taiga_run: 'Night street of a harbor town. {taiga} sprints across the road toward a brightly lit convenience store, a dead smartphone in his hand, teeth clenched, motion lines. Seen from behind at a low angle.',
  cg_rescue: 'The true moment, seen from the side at night: on a 5th-floor balcony, {mitsuru} leans far out through the gap of the emergency partition and pulls {himari} back from the railing with one arm; she clutches a small music-note hairpin. His body tilts dangerously outward over the railing. Tense, but warm and protective.',
  cg_page: 'In a quiet hospital corridor at dawn, {rei} holds up a finished manga page made of six panels that tell the true story of the night, looking at it with a calm, tired face, {koharu} peeking over the shoulder. Soft morning light from a window.',
  cg_cafe: 'Inside a small cozy cafe on a hill at sunset, called Yohaku: {asagiri} behind the counter places a cup of sweet coffee in front of {rei}, and {koharu} beside them smiles brightly. Warm orange light, harbor and sea through the window.',
};
const CG_CHARS = {
  rei: 'an androgynous young investigator with messy short black hair and a lavender hair clip, oversized grey hoodie under a long beige trench coat',
  koharu: 'a cheerful young detective girl with an orange-brown side ponytail and sky-blue scrunchie, navy suit jacket and sky-blue ribbon tie',
  taiga: 'a young delivery worker with spiky bleached blond hair under a backwards black cap, black uniform with reflective stripes',
  himari: 'a 9-year-old girl with brown twin tails tied with pink ribbons, a t-shirt with a piano-key pattern and a denim overall skirt',
  mitsuru: 'a gentle man in his early 30s with glasses and a light shirt',
  asagiri: 'an elegant 61-year-old cafe owner with silver hair in a bun and round gold glasses, cream blouse and linen apron',
  shiori: 'a 16-year-old girl ghost with long straight black hair and blunt bangs in an old navy sailor school uniform, barefoot',
};
