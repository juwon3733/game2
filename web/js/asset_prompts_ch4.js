// 4장 「지워 드립니다」 이미지 프롬프트. asset_prompts.js의 표에 더한다.

Object.assign(CHARACTER_SHEETS, {
  hayaka: 'Character reference sheet of a fragile, pretty 17-year-old high school girl. Long dark brown hair in a low side braid, big tired rose-brown eyes with faint dark circles, navy sailor-style school uniform with a rose-red scarf, a small bathhouse-shaped keychain on her bag, a plain white wristband from a clinic. Rose red and navy accents.',
  keiko: 'Character reference sheet of a worn but kind 44-year-old working mother. Brown hair tied back with a simple orange hair tie, gentle tired eyes, a grey work jacket over a plain shirt, both hands wrapped in white bandages, a fresh burn dressing (white gauze) on the nape of her neck. Warm orange and grey accents.',
  okamoto: 'Character reference sheet of a fierce, energetic 68-year-old grandmother who leads a neighborhood protest. Short permed grey hair, sharp eyes behind thick glasses, a moss-green cardigan, a white headband with protest writing (no readable letters), a megaphone at her side. Moss green accents.',
  murase: 'Character reference sheet of a polite but cold 50-year-old construction site manager. Neat short black hair with grey at the temples, thin smiling eyes that never smile, grey work jacket with a company patch (abstract logo), a yellow safety helmet under his arm, a clipboard. Dark red accent on his tie.',
  nishimura: 'Character reference sheet of an intimidating 55-year-old company executive man. Slicked-back black hair, narrow cold eyes, a perfectly tailored black suit, a silver lighter in his fingers, expressionless face. Dark grey and silver palette.',
});

Object.assign(FACE_PROMPTS, {
  hayaka_normal: 'expression: blank and tired, hugging her school bag',
  hayaka_crying: 'expression: crying silently, gripping her wristband',
  hayaka_smile: 'expression: small fragile smile',
  keiko_normal: 'expression: tired, holding her bandaged hands together',
  keiko_crying: 'expression: crying, head bowed',
  keiko_resolute: 'expression: resolute, looking straight ahead, bandaged hands clenched',
  okamoto_angry: 'expression: angry, pointing, mouth open shouting',
  okamoto_normal: 'expression: calmer, adjusting her glasses',
  murase_smile: 'expression: polite thin smile, bowing slightly',
  murase_normal: 'expression: businesslike, checking his clipboard',
  murase_cornered: 'expression: cornered, cold sweat, smile gone',
  nishimura_normal: 'expression: expressionless, flicking a silver lighter',
});

Object.assign(BG_PROMPTS, {
  sakurayu: 'A burned old Japanese public bathhouse (sento) at dusk in an empty redevelopment lot: charred wooden entrance with a half-burned noren curtain, a tall chimney still standing, police tape, a fence at the back.',
  sakurayu_boiler: 'The burned boiler room of an old bathhouse: a scorched boiler, a blackened electrical panel on the wall, soot everywhere, a small window.',
  okamoto_house: 'The second floor of an old grandmother\'s house: tatami room, a window looking down at a burned bathhouse across the street, protest banners rolled in the corner, a small table clock.',
  site_office: 'A container-style construction site office: desks with blueprints, a whiteboard schedule, a key cabinet on the wall, yellow helmets on hooks, a window showing a burned chimney.',
  clinic: 'An unnaturally clean white counseling room: white walls, a white sofa, a small white table, a framed logo of an empty speech bubble, soft shadowless light.',
  station_chief: 'A police station chief\'s office: a heavy desk, a flag, a leather sofa, blinds with morning light, an oppressive atmosphere.',
});

Object.assign(CUT_CHARS, {
  hayaka: 'a 17-year-old girl in a navy sailor school uniform with a low side braid',
  keiko: 'a tired woman in a grey work jacket with her hair tied back',
  genzo: 'an old man in a bathhouse happi coat',
  murase: 'a man in a grey work jacket and a yellow safety helmet',
  workers: 'men in yellow safety helmets with an abstract company logo',
});

Object.assign(CUT_PROMPTS, {
  '4A': ['Inside an old bathhouse at night, the brightly lit front counter: {genzo} shouts angrily across the counter, purchase documents on the counter (accent color), a few pairs of customers\' sandals on the shoe shelf. No clock.', '불 켜진 카운터, 소리치는 할아버지, 매입 서류(포인트 색), 신발장의 손님 신발'],
  '4B': ['At night behind a bathhouse fence; all the bathhouse windows are dark: first-person view of the viewer\'s own hands receiving a flashlight (accent color) from a gloved hand with an abstract company logo on the glove. Far away, festival lanterns; a clock tower shows 10:30.', '건네받는 손전등(포인트 색), 장갑의 로고, 꺼진 목욕탕 창, 시계탑 10:30, 축제 등불'],
  '4C': ['First-person view at night: a hand turning a key (accent color) in the back door of a boiler room; beside it, the work boots of another person standing close; a tool bag on the ground; far off by the fence, a tiny flashlight glow. No clock or watch visible.', '열쇠(포인트 색), 옆 사람의 작업화, 공구 가방, 멀리 손전등 불빛'],
  '4D': ['Looking down from a second-floor window at night: two {workers} walk in through the open back door of a bathhouse (accent color on the helmets); the front one carries a tool bag, the second one\'s helmet has a white visitor sticker. In the corner of the alley, a small figure of a schoolgirl. On the window sill, a table clock shows 10:45.', '헬멧 둘(포인트 색), 열린 뒷문, 골목 모퉁이 교복 차림, 탁상시계 10:45'],
  '4E': ['At night from a dark alley corner: {keiko} stands alone at a fence holding a flashlight (accent color), looking left and right down the alley; behind her, the boiler room back door is half open. No clock.', '울타리 앞 손전등(포인트 색)을 든 엄마, 반쯤 열린 뒷문'],
  '4F': ['At night by a fence: smoke and sparks burst out of a small boiler room window of a bathhouse (accent color on the sparks), smoke spreading over the chimney. No clock.', '보일러실 창의 불꽃(포인트 색), 굴뚝 위 연기'],
  '4G': ['First-person view pushing through a bathhouse changing-room curtain into thick smoke, the viewer\'s hands in thick work gloves reaching forward; deep inside, a coughing sound effect shape (accent color).', '연기 속으로 젖히는 포렴, 기침 소리 모양(포인트 색)'],
  '4H': ['Blurry first-person view through smoke, being carried on someone\'s back: a sooty nape and an orange hair tie (accent color) right in front; above, a burning ceiling beam.', '흐린 시야, 업어 준 사람의 그을린 목덜미와 머리끈(포인트 색), 불타는 들보'],
  '4I': ['Looking down from a second-floor window at night at the front of a burning bathhouse: someone carries an old man on their back out of the flames, face hidden by smoke, only hair tied back visible; no fire trucks yet. In the foreground, the viewer\'s own old hand on the window sill holds a phone showing a call screen and 23:15 (accent color).', '창에서 본 노인을 업고 나오는 사람(얼굴은 연기에 가림), 아직 소방차 없음, 창틀의 내 손과 휴대폰 23:15(포인트 색)'],
  '4J': ['Inside a construction site office at night: through the window, a bathhouse burning with fire truck lights in front of it; a man\'s hand holds a phone to his ear. On the wall calendar, a red circle (accent color) around the end of the month. No clock.', '창밖 불길과 소방차 불빛, 귀에 댄 휴대폰, 달력의 동그라미(포인트 색)'],
  '4M': ['A hospital room at dawn: bandaged hands hold an old man\'s hand on the bed (accent color on the bandages). The window is just getting light. No clock.', '붕대 감은 손(포인트 색), 막 밝아 오는 새벽 창'],
  '4K': ['An unnaturally white windowless counseling room: across a white table, a white-gloved hand slides a document toward the viewer; on the wall, a logo of an empty speech bubble (accent color). No clock.', '창 없는 하얀 방, 흰 장갑, 빈 말풍선 로고(포인트 색)'],
  '4L': ['Early evening in a community hall, the window still red with sunset: elderly people under a protest banner (no readable letters), one front-row chair (accent color). No clock.', '노을 지는 창, 반대 모임, 맨 앞자리 의자(포인트 색)'],
  t_okamoto_1: ['An exaggerated, frightened memory: two gigantic shadowy figures as tall as houses smash through a bathhouse back gate at night.', '과장: 집채만 한 그림자 둘'],
  t_okamoto_2: ['Back view of a small schoolgirl running into the open back door of a bathhouse at night, flames already drawn inside the doorway.', '뒷문으로 뛰어드는 교복, 문틈 안 불길'],
  t_okamoto_3: ['A hand holding a phone to an ear; the window behind is red with firelight.', '휴대폰, 붉은 창'],
  t_hayaka_1: ['Back view of a schoolgirl leaving an old bathhouse at night, the door closing behind her.', '목욕탕을 나서는 뒷모습'],
  t_hayaka_2: ['A manga panel that has been neatly cut out with scissors: the whole inside is empty white, with faint white glove fingerprints on the edge and a tiny sliver of an alley wall corner left in one corner.', '삭제: 오려 낸 빈 칸, 가장자리의 흰 장갑 자국, 귀퉁이의 담벼락 조각'],
  t_hayaka_3: ['A manga panel neatly cut out: empty white inside, with a tiny yellow stain of flashlight glow left in one corner.', '삭제: 오려 낸 빈 칸, 귀퉁이의 손전등 빛 자국'],
  t_hayaka_4: ['An unnaturally white room with an empty speech bubble logo; a girl\'s hand signs a document.', '하얀 방, 서명하는 손'],
  t_cross_1: ['Looking down from a window at night: two men in safety helmets enter a back gate.', '창에서 본 헬멧 둘'],
  t_cross_2: ['A construction site office at night; the chair in front of the desk is a blank white hole as if erased.', '생략: 의자 자리 하얀 여백'],
  t_cross_3: ['Sparks bursting from a small boiler room window at night.', '보일러실 창의 불꽃'],
  t_cross_4: ['A sooty electrical panel with suspiciously neat wiring.', '그을린 배전반'],
  t_keiko_1: ['A tidy kitchen at night, a woman sitting alone at the table with a single cup and a dark phone.', '부엌에 혼자 앉은 여자, 컵 하나와 꺼진 휴대폰'],
  t_keiko_2: ['A panel completely blurred as if covered by thick smoke; shapes cannot be recognized.', '흐림: 연기처럼 흐린 컷'],
});

Object.assign(WORLD_PROMPTS.mapLabels, { sakurayu: '불탄 사쿠라유', siteoffice: '하쿠요 하청 현장사무소' });
Object.assign(WORLD_PROMPTS, {
  map_sakurayu: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A burned old Japanese public bathhouse at dusk, soot, police tape. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-15, rows 1-5: the burned bathhouse interior (charred wooden floor). Row 1 is the back wall with a flyer at column 3. A front counter at columns 4-5 of row 3. An empty bath tub at columns 10-12, rows 3-4.
- Column 16: a wall with a doorway at row 4.
- Columns 17-24, rows 1-5: the boiler room (concrete): an electrical panel on the wall at column 21 of row 2, a big boiler at columns 18-19 of row 4.
- Row 6: the building's outer wall with the bathhouse entrance at column 8 and the boiler room back door at column 20.
- Rows 7-8: a back street. Row 9: a wooden fence with a gap at columns 15-18. Rows 10-11, columns 15-18: a path to the house across the street; everything else in rows 10-11 is dark.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
  map_siteoffice: `Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A construction site container office in the morning. No characters, no text.

Layout by tile rows, top to bottom:
- Row 1: the back wall with a key cabinet at column 3, a helmet rack at columns 6-7, a whiteboard schedule at columns 17-19, a window at columns 22-23.
- Rows 2-9: office floor (linoleum). The site manager's desk at columns 11-13 of row 3. A few other desks and filing cabinets along the walls.
- Row 10: the front wall with the door at column 11. Row 11: gravel yard outside.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.`,
});
