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
  // 캐릭터(설정화·상반신)만 모바일 가챠게임풍 서브컬처 디자인. 배경과 컷 분위기는 그대로 둔다.
  character: 'Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.',
  // 컷 속 인물도 상반신과 같은 얼굴로 보이게
  cutFaces: 'Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits.',
};

const SPEC = {
  portrait: { w: 1024, h: 1536, note: '세로 1024×1536 · 원본 256×384 도트 4배 · 투명 배경 · 양옆·위 여백' },
  bg: { w: 1536, h: 1024, note: '가로 1536×1024' },
  cut: { w: 1536, h: 1024, note: '가로 1536×1024 · 저해상도 도트 · 회색 8단계 + 포인트 색 1개' },
};

// 캐릭터 설정화: 표정 상반신을 뽑기 전에 같은 대화창에서 먼저 뽑는다.
const CHARACTER_SHEETS = {
  rei: 'Character reference sheet of an androgynous 22-year-old investigator with a cool, sleepy charm. Large half-closed violet-grey eyes with soft highlights and faint dark circles, messy short black hair with one stray ahoge and a small lavender hair clip, oversized grey hoodie under a long beige trench coat with rolled sleeves, a pin badge shaped like a manga panel on the coat, a canned coffee in hand, pen callus on right index finger. Navy and lavender accent colors. Full body front view plus face close-up.',
  koharu: 'Character reference sheet of a cheerful 20-year-old rookie detective girl. Big sparkling amber eyes, orange-brown side ponytail tied with a sky-blue scrunchie with a small star charm, navy suit jacket with rolled sleeves over a white shirt with a loose sky-blue ribbon tie, navy pants, white sneakers, a police badge clipped to her belt, a notebook covered in cute stickers. Sunny orange and sky-blue accent colors. Full body front view plus face close-up.',
  kurogane: 'Character reference sheet of a tired but handsome 47-year-old police chief with a "cool uncle" design. Slicked-back black hair streaked with grey, light stubble, sharp tired eyes, rumpled white shirt with rolled sleeves, loose dark tie, shoulder holster strap, a strawberry lollipop stick in his mouth, old wristwatch. Iron grey and strawberry pink accents.',
  towa: 'Chibi avatar of a hacker shown only on a monitor screen: small 2-head-tall character with big sparkling green eyes, oversized cat-ear headphones with glowing LEDs, wrapped in a cream blanket like a cape, green monitor glow. Reference sheet with several expressions.',
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
  B: ['{mitsuru} with both hands lifted clearly above the piano keys, not touching them, turning toward a curtained balcony door, a small child-sized shadow behind the curtain.', '멈춘 손, 커튼 너머 작은 그림자'],
  C: ['{mitsuru} leaning through the gap of a balcony partition at night, reaching out desperately. Beyond the partition: a child\'s small feet standing on the railing, and a tiny glint of a small hairpin caught on the outer ledge (only a small sparkle, no toy or other object). Leave empty space at the top center for a speech bubble.', '칸막이, 뻗은 팔, 난간 위 작은 발, 바깥 턱의 반짝임, 위쪽 가운데 빈 공간'],
  D: ['{taiga}, startled at an apartment front door at night, turning back toward something off-panel. His cardboard box has just dropped to the floor at his feet. Simple speed lines from the side.', '바닥에 떨어진 상자, 놀란 얼굴'],
  E: ['{taiga} bursting out of a stairwell into the entrance hall, shouting with a terrified face, both hands empty. Leave empty space at the top center for a speech bubble.', '빈 손, 외치는 입, 위쪽 가운데 빈 공간'],
  F: ['Close-up on a stairwell: a hand gripping a dead smartphone, the screen showing a big empty battery icon. Blond hair (accent color) at the edge of the panel.', '휴대폰 화면의 빈 배터리'],
  G: ['On a balcony at night, a music-note hairpin flying away in the wind from the hair of {himari}. She stands on the balcony floor reaching for it.', '날아가는 음표 머리핀, 바닥에 선 아이'],
  H: ['{himari} standing on a flowerpot and climbing the balcony railing, reaching for her hairpin caught on the outer ledge. The neighboring balcony behind the partition is empty.', '화분을 밟은 발, 난간, 바깥 턱의 머리핀'],
  I: ['An adult\'s arm pulling {himari} back to safety from the railing. She clutches the hairpin in her hand. The adult is leaning dangerously outward over the railing.', '손에 쥔 머리핀, 바깥으로 기우는 어른'],
  t_ookubo_1: ['{ookubo} proudly writing in a logbook at his desk, absurd sparkles and flowers around him (an exaggerated, self-flattering memory).', '미화: 반짝이, 꽃'],
  t_ookubo_2: ['{taiga} running out of a stairwell, same outfit and delivery backpack as always, but his face is scribbled over with a crude horned monster doodle like a child\'s pen scribble (a prejudiced memory). He is not wearing a guard uniform.', '낙서: 얼굴이 괴물 낙서'],
  t_ookubo_2_truth: ['{taiga} running out of a stairwell, face clearly visible, scared and about to cry, shouting.', '(진실) 겁먹은 얼굴'],
  t_ookubo_3: ['A dull impact on a flowerbed in front of an apartment building at night, seen from far away: a puff of dust and crushed flowers. No person is visible.', '화단의 충격'],
  t_taiga_1: ['First-person view of a hand pressing an apartment doorbell at night, music notes coming through the door.', '초인종, 음표'],
  t_taiga_2: ['An enormous impact effect filling the entire panel, the apartment hallway tiny underneath (an exaggerated memory).', '과장: 화면을 뒤덮는 충격'],
  t_taiga_3: ['Back view of {taiga} going down stairs, with his face and hands left completely blank white as if erased.', '생략: 하얀 여백'],
  t_taiga_3_truth: ['{taiga} on the stairs gripping a dead smartphone, biting his lip in frustration.', '(진실) 꺼진 휴대폰'],
  t_himari_1: ['Child\'s crayon drawing of a little girl doing homework at a desk.', '크레용 그림체'],
  t_himari_1_truth: ['{himari} at her desk, looking out the window instead of at her homework.', '(진실) 창밖을 보는 아이'],
  t_himari_2: ['Child\'s crayon drawing of a little girl at a window, the balcony drawn strangely huge.', '크레용, 거대한 베란다'],
  t_himari_2_truth: ['{himari} looking at her hairpin caught on the balcony\'s outer ledge.', '(진실) 턱에 걸린 머리핀'],
  t_himari_3: ['Child\'s crayon drawing of a blanket colored completely black, a tiny fist in the corner.', '크레용, 새까만 이불'],
  t_himari_3_truth: ['{himari} crying under a blanket, holding her music-note hairpin tightly.', '(진실) 머리핀을 쥔 손'],
};
