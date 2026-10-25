// ChatGPT 이미지 프롬프트. 에셋 현황 페이지(assets.html)와 CI 검사(tools/check-assets.mjs)가 같이 쓴다.

const PROMPT_STYLE = {
  common: 'Anime-style pixel art in the style of a modern visual novel, crisp visible pixels, limited 32-color palette, clean dark outlines, soft cel shading, late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.',
  cut: 'A single black-and-white manga panel drawn in pixel art, screentone shading, bold ink lines, only one accent color: {color}. Dramatic framing. No text, no speech bubbles.',
  portrait: 'Same character as the reference sheet above, waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536.',
};

const SPEC = {
  portrait: { w: 1024, h: 1536, note: '세로 1024×1536 · 투명 배경 PNG' },
  bg: { w: 1536, h: 1024, note: '가로 1536×1024' },
  cut: { w: 1536, h: 1024, note: '가로 1536×1024 · 흑백 만화 + 포인트 색 1개' },
};

// 캐릭터 설정화: 표정 상반신을 뽑기 전에 같은 대화창에서 먼저 뽑는다.
const CHARACTER_SHEETS = {
  rei: 'Character reference sheet of an androgynous 22-year-old investigator, sleepy half-closed eyes with dark circles, messy short black hair, oversized grey hoodie under a worn beige trench coat, holding a canned coffee, pen callus on right index finger. Navy and lavender accent colors. Full body front view plus face close-up.',
  koharu: 'Character reference sheet of a cheerful 20-year-old rookie detective girl, orange-brown side ponytail tied with a sky-blue hair tie, big bright eyes, navy suit jacket with white shirt and white sneakers, a notebook covered in stickers. Sunny orange and sky-blue accent colors. Full body front view plus face close-up.',
  kurogane: 'Character reference sheet of a tired 47-year-old police chief, rumpled white shirt, loose tie, grey stubble, a strawberry lollipop stick in his mouth, old wristwatch. Iron grey and strawberry pink accents.',
  towa: 'Chibi avatar of a hacker shown only on a monitor screen: small 2-head-tall character with cat-ear headphones, wrapped in a cream blanket like a cape, green monitor glow. Reference sheet with several expressions.',
  asagiri: 'Character reference sheet of a gentle 61-year-old cafe owner woman, silver-grey hair in a bun, round glasses, linen apron, warm smile. Cream and coffee brown palette.',
  ookubo: 'Character reference sheet of a talkative 63-year-old apartment security guard, grey hair, olive green guard uniform and cap, chubby friendly face.',
  taiga: 'Character reference sheet of a 21-year-old delivery worker who looks like a delinquent, bleached blond hair, sharp narrow eyes, black delivery uniform with a cap, intimidating face but kind eyes.',
  himari: 'Character reference sheet of a 9-year-old girl, brown twin tails, a small music-note hairpin, pink t-shirt, shy expression.',
  shiori: 'Character reference sheet of a 16-year-old girl in an old navy sailor school uniform, long straight black hair, a bookmark-shaped hairpin on her bangs, barefoot, faintly translucent like a screentone ghost.',
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

// 컷: [장면, 꼭 보여야 할 것]
const CUT_PROMPTS = {
  A: ['Delivery worker with a cardboard box under his arm pressing an apartment doorbell, music notes drifting out through the door gap.', '옆구리에 낀 상자, 문틈의 음표(♪)'],
  B: ['A gentle man with glasses lifting his hands off piano keys and turning toward a curtained balcony door, a small shadow behind the curtain.', '멈춘 손, 커튼 너머 작은 그림자'],
  C: ['A man leaning through the gap of a balcony partition, reaching out desperately; beyond it a child\'s small feet on the railing and something shiny on the outer ledge. Leave empty space at the top center for a speech bubble.', '칸막이, 뻗은 팔, 난간 위 작은 발, 바깥 턱의 반짝임, 위쪽 가운데 빈 공간'],
  D: ['Delivery worker startled at an apartment door, turning back, cardboard box dropped on the floor, a huge impact off-panel.', '바닥에 떨어진 상자, 놀란 얼굴'],
  E: ['Delivery worker bursting out of a stairwell shouting, terrified face, empty hands. Leave empty space at the top center for a speech bubble.', '빈 손, 외치는 입, 위쪽 가운데 빈 공간'],
  F: ['Close-up of a hand gripping a dead smartphone on a stairwell, empty battery icon on the screen.', '휴대폰 화면의 빈 배터리'],
  G: ['A music-note hairpin flying away in the wind from a little girl\'s hair on a balcony, the girl standing on the floor reaching for it.', '날아가는 음표 머리핀, 바닥에 선 아이'],
  H: ['A little girl standing on a flowerpot, climbing the balcony railing, reaching for a hairpin caught on the outer ledge. The neighboring balcony behind the partition is empty.', '화분을 밟은 발, 난간, 바깥 턱의 머리핀'],
  I: ['An adult\'s arm pulling a little girl back to safety from the railing, the girl clutching the hairpin, the adult leaning outward over the railing.', '손에 쥔 머리핀, 바깥으로 기우는 어른'],
  t_ookubo_1: ['Security guard proudly writing in a logbook, absurd sparkles and flowers around him (exaggerated self-flattering memory).', '미화: 반짝이, 꽃'],
  t_ookubo_2: ['A figure running out of a stairwell, the face scribbled over like a horned monster doodle in red crayon.', '낙서: 얼굴이 괴물 낙서'],
  t_ookubo_2_truth: ['The same delivery worker running out of a stairwell, face clearly visible, scared and about to cry, shouting.', '(진실) 겁먹은 얼굴'],
  t_ookubo_3: ['A dull "thud" impact on a flowerbed at night, seen from a distance.', '화단의 충격'],
  t_taiga_1: ['First-person view pressing an apartment doorbell, music notes coming through the door.', '초인종, 음표'],
  t_taiga_2: ['An enormous impact effect filling the entire panel, the hallway tiny underneath (exaggerated memory).', '과장: 화면을 뒤덮는 충격'],
  t_taiga_3: ['Back view of someone going down stairs, with the face and hands area left completely blank white.', '생략: 하얀 여백'],
  t_taiga_3_truth: ['Delivery worker on the stairs gripping a dead phone, biting his lip.', '(진실) 꺼진 휴대폰'],
  t_himari_1: ['Child\'s crayon drawing of a girl doing homework at a desk.', '크레용 그림체'],
  t_himari_1_truth: ['A girl at her desk looking out the window instead of at her homework.', '(진실) 창밖을 보는 아이'],
  t_himari_2: ['Child\'s crayon drawing of a girl at a window, the balcony drawn strangely huge.', '크레용, 거대한 베란다'],
  t_himari_2_truth: ['A girl looking at a hairpin caught on the balcony\'s outer ledge.', '(진실) 턱에 걸린 머리핀'],
  t_himari_3: ['Child\'s crayon drawing of a blanket colored completely black, a tiny fist in the corner.', '크레용, 새까만 이불'],
  t_himari_3_truth: ['A girl crying under a blanket, holding a music-note hairpin tightly.', '(진실) 머리핀을 쥔 손'],
};
