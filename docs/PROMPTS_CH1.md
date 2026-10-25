# 1장 이미지 프롬프트 전체

> `node tools/export-prompts.mjs`로 자동 생성된 파일. 직접 고치지 말고 `web/js/asset_prompts.js`를 고친 뒤 다시 생성한다.

- **대화창마다 새 ChatGPT 채팅**을 연다. 한 창 안에서는 위에서부터 차례로 붙여넣는다.
- 받은 이미지는 **다운로드 버튼으로 원본 PNG**를 받아 굵은 파일명 그대로 저장한다.
- 저장 위치: 상반신 `web/assets/portraits/`, 배경 `web/assets/bg/`, 컷 `web/assets/cuts/`

## 대화창 1 — 레이 (상반신 3장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an androgynous 22-year-old investigator, sleepy half-closed eyes with dark circles, messy short black hair, oversized grey hoodie under a worn beige trench coat, holding a canned coffee, pen callus on right index finger. Navy and lavender accent colors. Full body front view plus face close-up.
```

**`rei_normal.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: sleepy, indifferent, half-closed eyes.
```

**`rei_serious.png`**
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: eyes open, focused and sharp.
```

**`rei_surprised.png`**
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: eyes wide, startled.
```

## 대화창 2 — 코하루 (상반신 3장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a cheerful 20-year-old rookie detective girl, orange-brown side ponytail tied with a sky-blue hair tie, big bright eyes, navy suit jacket with white shirt and white sneakers, a notebook covered in stickers. Sunny orange and sky-blue accent colors. Full body front view plus face close-up.
```

**`koharu_normal.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: friendly smile.
```

**`koharu_happy.png`**
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: big cheerful grin, eyes closed with joy.
```

**`koharu_worried.png`**
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: worried, eyebrows raised, hand near chest.
```

## 대화창 3 — 쿠로가네 (상반신 1장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a tired 47-year-old police chief, rumpled white shirt, loose tie, grey stubble, a strawberry lollipop stick in his mouth, old wristwatch. Iron grey and strawberry pink accents.
```

**`kurogane_normal.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: tired, lollipop in mouth.
```

## 대화창 4 — 토와 (상반신 1장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Chibi avatar of a hacker shown only on a monitor screen: small 2-head-tall character with cat-ear headphones, wrapped in a cream blanket like a cape, green monitor glow. Reference sheet with several expressions.
```

**`towa_normal.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: smug chibi inside a monitor frame.
```

## 대화창 5 — 아사기리 (상반신 1장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a gentle 61-year-old cafe owner woman, silver-grey hair in a bun, round glasses, linen apron, warm smile. Cream and coffee brown palette.
```

**`asagiri_normal.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: warm gentle smile, holding a coffee cup.
```

## 대화창 6 — 오오쿠보 (상반신 2장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a talkative 63-year-old apartment security guard, grey hair, olive green guard uniform and cap, chubby friendly face.
```

**`ookubo_normal.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: proud and confident, arms crossed.
```

**`ookubo_flustered.png`**
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: flustered, sweating, eyes darting.
```

## 대화창 7 — 타이가 (상반신 2장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a 21-year-old delivery worker who looks like a delinquent, bleached blond hair, sharp narrow eyes, black delivery uniform with a cap, intimidating face but kind eyes.
```

**`taiga_angry.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: defensive glare, arms crossed.
```

**`taiga_sad.png`**
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: ashamed, looking down, biting lip.
```

## 대화창 8 — 히마리 (상반신 2장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a 9-year-old girl, brown twin tails, a small music-note hairpin, pink t-shirt, shy expression.
```

**`himari_normal.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: shy, half hidden behind a door.
```

**`himari_crying.png`**
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying, clutching something in her fist.
```

## 대화창 9 — 시오리 (상반신 1장)

첫 블록은 설정화라 게임에 안 들어간다. 기준 그림이니 마음에 들 때까지 다시 뽑는다.

**`설정화 (저장 안 해도 됨)`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a 16-year-old girl in an old navy sailor school uniform, long straight black hair, a bookmark-shaped hairpin on her bangs, barefoot, faintly translucent like a screentone ghost.
```

**`shiori_normal.png`**
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘.

Native resolution about 128x192 pixels, upscaled with nearest-neighbor to 1024x1536 so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, plain transparent background, vertical 1024x1536. Expression: calm, faint smile, pointing at something.
```

## 대화창 10 — 배경 (7장)

배경끼리 그림체를 맞추려고 한 창에서 이어 뽑는다.

**`office.png`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. Full color, limited palette of about 32 colors.

Basement storage room turned into a tiny police office, cardboard evidence boxes stacked high, an old sofa, an electric kettle, dim fluorescent light. Interior, eye level. Keep the lower third simple so characters can stand in front. No people. Horizontal 1536x1024 PNG.
```

**`guardroom.png`**
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Small security guard room on the first floor of an old apartment building, a tiny CRT TV showing baseball, a desk with a logbook, night outside the window. Keep the lower third simple because characters will stand in front.
```

**`interrogate.png`**
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Police interrogation room, grey walls, metal table, a single desk lamp, one-way mirror. Keep the lower third simple because characters will stand in front.
```

**`himari_door.png`**
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Apartment corridor on the 5th floor at night, a slightly opened front door with a name plate, warm light leaking out. Keep the lower third simple because characters will stand in front.
```

**`hospital.png`**
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Quiet hospital corridor at night, benches along the wall, soft cold light. Keep the lower third simple because characters will stand in front.
```

**`cafe.png`**
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Small cozy retro cafe on a hillside street, wooden counter, siphon coffee makers, warm evening light through the window. Keep the lower third simple because characters will stand in front.
```

**`night.png`**
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Exterior of an old 6-story apartment building on a hill at night, balconies, a flowerbed below, city lights in the distance. Keep the lower third simple because characters will stand in front.
```

## 대화창 11 — 컷 · 타이가 시점 + 증언 (금색) (7장)

같은 포인트 색 컷끼리 한 창에서 뽑으면 팔레트가 맞는다.

**`A.png`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: black, white, two greys, and one accent color gold (#c9961a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: a young delivery worker with bleached blond hair (accent color) and a black uniform and cap holding a cardboard box under his arm, pressing the doorbell of an apartment front door at night. Big music notes drifting out through the door gap.

Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 옆구리에 낀 상자, 문틈의 음표(♪)

**`D.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a young delivery worker with bleached blond hair (accent color) and a black uniform and cap, startled at an apartment front door at night, turning back toward something off-panel. His cardboard box has just dropped to the floor at his feet. Simple speed lines from the side.
```

> 꼭 보여야 할 것: 바닥에 떨어진 상자, 놀란 얼굴

**`F.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Close-up on a stairwell: a hand gripping a dead smartphone, the screen showing a big empty battery icon. Blond hair (accent color) at the edge of the panel.
```

> 꼭 보여야 할 것: 휴대폰 화면의 빈 배터리

**`t_taiga_1.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view of a hand pressing an apartment doorbell at night, music notes coming through the door.
```

> 꼭 보여야 할 것: 초인종, 음표

**`t_taiga_2.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An enormous impact effect filling the entire panel, the apartment hallway tiny underneath (an exaggerated memory).
```

> 꼭 보여야 할 것: 과장: 화면을 뒤덮는 충격

**`t_taiga_3.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a young delivery worker with bleached blond hair (accent color) and a black uniform and cap going down stairs, with his face and hands left completely blank white as if erased.
```

> 꼭 보여야 할 것: 생략: 하얀 여백

**`t_taiga_3_truth.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a young delivery worker with bleached blond hair (accent color) and a black uniform and cap on the stairs gripping a dead smartphone, biting his lip in frustration.
```

> 꼭 보여야 할 것: (진실) 꺼진 휴대폰

## 대화창 12 — 컷 · 미츠루 시점 (파랑) (2장)

같은 포인트 색 컷끼리 한 창에서 뽑으면 팔레트가 맞는다.

**`B.png`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: black, white, two greys, and one accent color blue (#3b8fd0). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: a gentle man in his early 30s with glasses and a light shirt lifting his hands off piano keys and turning toward a curtained balcony door, a small child-sized shadow behind the curtain.

Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 멈춘 손, 커튼 너머 작은 그림자

**`C.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + blue (#3b8fd0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a gentle man in his early 30s with glasses and a light shirt leaning through the gap of a balcony partition at night, reaching out desperately. Beyond the partition: a child's small feet standing on the railing, and something shiny caught on the outer ledge. Leave empty space at the top center for a speech bubble.
```

> 꼭 보여야 할 것: 칸막이, 뻗은 팔, 난간 위 작은 발, 바깥 턱의 반짝임, 위쪽 가운데 빈 공간

## 대화창 13 — 컷 · 히마리 시점 (분홍) (6장)

같은 포인트 색 컷끼리 한 창에서 뽑으면 팔레트가 맞는다.

**`G.png`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: black, white, two greys, and one accent color pink (#e0679a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: On a balcony at night, a music-note hairpin flying away in the wind from the hair of a 9-year-old girl with brown twin tails and a small music-note hairpin. She stands on the balcony floor reaching for it.

Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 날아가는 음표 머리핀, 바닥에 선 아이

**`H.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails and a small music-note hairpin standing on a flowerpot and climbing the balcony railing, reaching for her hairpin caught on the outer ledge. The neighboring balcony behind the partition is empty.
```

> 꼭 보여야 할 것: 화분을 밟은 발, 난간, 바깥 턱의 머리핀

**`I.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An adult's arm pulling a 9-year-old girl with brown twin tails and a small music-note hairpin back to safety from the railing. She clutches the hairpin in her hand. The adult is leaning dangerously outward over the railing.
```

> 꼭 보여야 할 것: 손에 쥔 머리핀, 바깥으로 기우는 어른

**`t_himari_1_truth.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails and a small music-note hairpin at her desk, looking out the window instead of at her homework.
```

> 꼭 보여야 할 것: (진실) 창밖을 보는 아이

**`t_himari_2_truth.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails and a small music-note hairpin looking at her hairpin caught on the balcony's outer ledge.
```

> 꼭 보여야 할 것: (진실) 턱에 걸린 머리핀

**`t_himari_3_truth.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails and a small music-note hairpin crying under a blanket, holding her music-note hairpin tightly.
```

> 꼭 보여야 할 것: (진실) 머리핀을 쥔 손

## 대화창 14 — 컷 · 히마리 크레용 기억 (예외: 크레용 색) (3장)

같은 포인트 색 컷끼리 한 창에서 뽑으면 팔레트가 맞는다.

**`t_himari_1.png`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: exception for this panel — it is a child's crayon memory, so use a few bright crayon colors (yellow, pink, sky blue) with wobbly hand-drawn shapes, still made of chunky pixels. No text, no speech bubbles.

Scene: Child's crayon drawing of a little girl doing homework at a desk.

Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 크레용 그림체

**`t_himari_2.png`**
```
같은 크레용 도트 스타일, 같은 픽셀 크기로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Child's crayon drawing of a little girl at a window, the balcony drawn strangely huge.
```

> 꼭 보여야 할 것: 크레용, 거대한 베란다

**`t_himari_3.png`**
```
같은 크레용 도트 스타일, 같은 픽셀 크기로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Child's crayon drawing of a blanket colored completely black, a tiny fist in the corner.
```

> 꼭 보여야 할 것: 크레용, 새까만 이불

## 대화창 15 — 컷 · 오오쿠보 증언 (올리브) (5장)

같은 포인트 색 컷끼리 한 창에서 뽑으면 팔레트가 맞는다.

**`E.png`**
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: black, white, two greys, and one accent color olive green (#6b8a5a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: a young delivery worker with bleached blond hair (accent color) and a black uniform and cap bursting out of a stairwell into the entrance hall, shouting with a terrified face, both hands empty. Leave empty space at the top center for a speech bubble.

Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 빈 손, 외치는 입, 위쪽 가운데 빈 공간

**`t_ookubo_1.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: an old chubby security guard in an olive uniform and cap proudly writing in a logbook at his desk, absurd sparkles and flowers around him (an exaggerated, self-flattering memory).
```

> 꼭 보여야 할 것: 미화: 반짝이, 꽃

**`t_ookubo_2.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A figure running out of a stairwell, the face scribbled over like a horned monster doodle (a prejudiced memory).
```

> 꼭 보여야 할 것: 낙서: 얼굴이 괴물 낙서

**`t_ookubo_2_truth.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a young delivery worker with bleached blond hair (accent color) and a black uniform and cap running out of a stairwell, face clearly visible, scared and about to cry, shouting.
```

> 꼭 보여야 할 것: (진실) 겁먹은 얼굴

**`t_ookubo_3.png`**
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(흑백 + 회색 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A dull impact on a flowerbed in front of an apartment building at night, seen from a distance.
```

> 꼭 보여야 할 것: 화단의 충격
