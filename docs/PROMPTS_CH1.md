# 1장 이미지 프롬프트 전체

> `node tools/export-prompts.mjs`로 자동 생성된 파일. 직접 고치지 말고 `web/js/asset_prompts.js`를 고친 뒤 다시 생성한다.
> 이미지 생성 에이전트는 같은 내용의 `web/assets/prompts.json`과 `AGENTS.md`를 쓴다.

- **묶음마다 새 ChatGPT 대화**를 연다. 한 대화 안에서는 위에서부터 차례로 붙여넣는다.
- 받은 이미지는 **원본 PNG**로 굵은 파일명 그대로 저장한다.

## 대화 1 — 레이 상반신 (4장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an androgynous 22-year-old investigator with a cool, sleepy charm. Large half-closed violet-grey eyes with soft highlights and faint dark circles, messy short black hair with one stray ahoge and a small lavender hair clip, oversized grey hoodie under a long beige trench coat with rolled sleeves, a pin badge shaped like a manga panel on the coat, a canned coffee in hand, pen callus on right index finger. Navy and lavender accent colors. Full body front view plus face close-up.
```

**`rei_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: sleepy, indifferent, half-closed eyes.
```

**`rei_serious.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: eyes open, focused and sharp.
```

**`rei_surprised.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: eyes wide, startled.
```

**`rei_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying quietly for the first time, tears on the cheeks, sleepy eyes wide open.
```

## 대화 2 — 코하루 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a cheerful 20-year-old rookie detective girl. Big sparkling amber eyes, orange-brown side ponytail tied with a sky-blue scrunchie with a small star charm, navy suit jacket with rolled sleeves over a white shirt with a loose sky-blue ribbon tie, navy pants, white sneakers, a police badge clipped to her belt, a notebook covered in cute stickers. Sunny orange and sky-blue accent colors. Full body front view plus face close-up.
```

**`koharu_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: friendly smile.
```

**`koharu_happy.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: big cheerful grin, eyes closed with joy.
```

**`koharu_worried.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: worried, eyebrows raised, hand near chest.
```

## 대화 3 — 쿠로가네 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a tired but handsome 47-year-old police chief with a "cool uncle" design. Slicked-back black hair streaked with grey, light stubble, sharp tired eyes, rumpled white shirt with rolled sleeves, loose dark tie, shoulder holster strap, a strawberry lollipop stick in his mouth, old wristwatch. Iron grey and strawberry pink accents.
```

**`kurogane_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: tired, lollipop in mouth.
```

**`kurogane_sad.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: sad and tired, no lollipop, holding an old stopped wristwatch.
```

## 대화 4 — 토와 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Chibi avatar of a hacker shown only on a monitor screen: small 2-head-tall character with big sparkling green eyes, oversized cat-ear headphones with glowing LEDs, wrapped in a cream blanket like a cape, green monitor glow. Reference sheet with several expressions.
```

**`towa_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: smug chibi inside a monitor frame.
```

**`towa_serious.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: serious chibi inside a monitor frame, headphone LEDs red instead of green.
```

## 대화 5 — 아사기리 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an elegant, gentle 61-year-old cafe owner woman. Beautiful silver hair in a neat bun with a wooden hairpin, round gold glasses, soft kind eyes, cream blouse with a linen apron, a coffee-bean brooch. Cream and coffee brown palette.
```

**`asagiri_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: warm gentle smile, holding a coffee cup.
```

**`asagiri_cold.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: calm but cold, the gentle smile gone, eyes looking down at the viewer, holding a coffee cup.
```

## 대화 6 — 오오쿠보 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a friendly, chubby 63-year-old apartment security guard with a comical and lovable design. Round face, bushy grey eyebrows and mustache, olive green guard uniform and cap with a shiny badge, a whistle on a cord. Olive and brass accents.
```

**`ookubo_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: proud and confident, arms crossed.
```

**`ookubo_flustered.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: flustered, sweating, eyes darting.
```

## 대화 7 — 타이가 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a 21-year-old delivery worker with a "scary-looking but soft-hearted delinquent" design. Spiky bleached blond hair under a black cap worn backwards, sharp golden eyes, a small silver earring, black delivery uniform jacket with reflective stripes and rolled sleeves, fingerless gloves. Black and gold accents.
```

**`taiga_angry.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: defensive glare, arms crossed.
```

**`taiga_sad.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: ashamed, looking down, biting lip.
```

## 대화 8 — 히마리 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an adorable 9-year-old girl. Big round brown eyes, brown twin tails tied with pink ribbons, a small gold music-note hairpin, pink t-shirt with a piano-key pattern, denim overall skirt, shy expression.
```

**`himari_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: shy, half hidden behind a door.
```

**`himari_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying, clutching something in her fist.
```

## 대화 9 — 시오리 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an ethereal, beautiful 16-year-old girl. Large calm dark eyes, long straight black hair with blunt bangs and a bookmark-shaped hairpin, old navy sailor school uniform with a white ribbon, barefoot, faintly translucent edges like a screentone ghost.
```

**`shiori_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: calm, faint smile, pointing at something.
```

**`shiori_smile.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: warm gentle smile, holding a bookmark hairpin, slightly translucent.
```

## 대화 10 — 코마츠 상반신 (1장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a gentle, tired 36-year-old single mother who works late shifts. Soft brown bob hair, kind worried eyes like her daughter's, beige cardigan over a simple white blouse, an office lanyard, a small music-note keychain on her bag. Warm rose and beige accents.
```

**`komatsu_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: tired but relieved, a gentle sad smile.
```

## 대화 11 — 아카리 상반신 (1장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a lively 20-year-old convenience store clerk girl. Short black hair with mint-green tips and a star hairpin, bright honest eyes, green-and-white store uniform vest over a T-shirt, name tag, wired earbuds around her neck. Mint and white accents.
```

**`akari_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: earnest, slightly flustered, holding a smartphone.
```

## 대화 12 — 루루 상반신 (4장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a stunning 19-year-old indie rock vocalist and guitarist girl with a sharp tongue. Large vivid vermilion-orange eyes with sharp highlights, long platinum-white hair with a straight fringe and one thin braid, a small black ribbon choker, an oversized white stage jacket with silver buttons over a black tank top, black shorts and torn tights, a guitar pick necklace. On stage a perfect idol smile, off stage a cool glare. Vermilion and white accents.
```

**`ruru_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: cool, bored glare, arms crossed.
```

**`ruru_angry.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: sharp angry glare, teeth showing, defensive.
```

**`ruru_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying with clenched teeth, tears streaming, trying not to break.
```

**`ruru_smile.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: perfect stage idol smile, one hand waving.
```

## 대화 13 — 핀 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a sweet, fluffy 18-year-old bassist girl. Big round lavender eyes, pastel pink wavy hair in two buns with star clips, lots of glitter makeup and a heart sticker under one eye, oversized lilac hoodie with a cartoon bunny, pleated skirt, platform sneakers, a bass case covered in stickers. Lavender and pink accents.
```

**`pin_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: nervous, hugging her sleeves.
```

**`pin_happy.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: bright fluffy smile, peace sign.
```

**`pin_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: sobbing, glitter makeup running.
```

## 대화 14 — 아오이 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a cool 21-year-old drummer girl and band leader. Short navy-black hair with an undercut, calm sharp cobalt-blue eyes, silver ear cuffs, black tank top under an open cobalt work shirt, cargo pants, drumsticks in her back pocket, taped fingers. Cobalt blue and black accents.
```

**`aoi_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: calm and cool, spinning a drumstick.
```

**`aoi_serious.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: serious, frowning, holding a folded document.
```

## 대화 15 — 쿠라모치 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a quiet 28-year-old live-house lighting technician woman. Short brown bob with a neat side part, tired honest amber eyes, a headset with microphone around her neck, black crew T-shirt with a small crescent moon logo, a tool belt, thick black work gloves always on her hands. Amber and black accents.
```

**`kuramochi_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: guarded, looking away, gloved hand on her headset.
```

**`kuramochi_scared.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: scared and guilty, biting her lip, eyes down.
```

**`kuramochi_resolute.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: resolute, looking straight ahead, gloves taken off.
```

## 대화 16 — 텐도 상반신 (4장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an elegant, intimidating 52-year-old talent agency president woman. Dark hair in a tight elegant updo, sharp smiling eyes with long lashes, deep wine-magenta tailored suit with a brooch, pearl earrings, and a very large square gold wristwatch on her left wrist that is always visible. Smiles politely but the eyes do not smile. Magenta and gold accents.
```

**`tendo_smile.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: polished polite smile, hand near her chin showing the big square gold watch.
```

**`tendo_normal.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: cold, businesslike, checking her square gold watch.
```

**`tendo_angry.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: icy anger, eyes narrowed, pointing.
```

**`tendo_cornered.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: cornered, forced smile cracking, sweat on her temple.
```

## 대화 17 — 키리시마 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a stern, handsome 34-year-old band manager man. Neat short black hair, narrow tired teal eyes, always in a plain black suit and dark tie, a radio transceiver clipped to the belt, a small worn notebook in the breast pocket. Teal green accents.
```

**`kirishima_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: stern and blunt, holding a clipboard.
```

**`kirishima_soft.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: a rare small gentle smile, slightly sad.
```

## 대화 18 — 유키 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a gentle, artistic 19-year-old girl, the older of identical twins. Big soft teal eyes, glossy dark navy bob hair with a cream ribbon tied on the RIGHT side, a charcoal smudge on her LEFT hand (she is left-handed), cream blouse under a pastry shop apron with a small cake emblem, an art portfolio bag on her shoulder. Teal and cream accents.
```

**`yuki_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: shy, holding a charcoal pencil in her left hand.
```

**`yuki_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying quietly, clutching her portfolio bag.
```

**`yuki_smile.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: soft relieved smile.
```

## 대화 19 — 나기 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a lively but anxious 19-year-old girl, the younger of identical twins, with exactly the same face as her sister. Big teal eyes, glossy dark navy bob hair with a cream ribbon tied on the LEFT side, a white bandage around her right ankle, cream blouse under a pastry shop apron with a small cake emblem. Teal and cream accents.
```

**`nagi_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: forced bright customer-service smile.
```

**`nagi_scared.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: frightened, eyes darting, hands gripping her apron.
```

**`nagi_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying, ribbon slightly undone.
```

## 대화 20 — 마도카 상반신 (4장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a beautiful, mysterious 26-year-old tarot fortune teller woman. Long wavy violet-black hair, half-lidded amethyst eyes with long lashes, a dark violet dress under a large black shawl covered in small silver star sequins, many rings, a tarot card held between two fingers, a charming smile that hides something. Violet and silver accents.
```

**`madoka_smile.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: charming mysterious smile, a tarot card near her lips.
```

**`madoka_normal.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: calm and composed, shuffling cards.
```

**`madoka_cornered.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: cornered, smile frozen, sweat on her temple, shawl slipping.
```

**`madoka_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying, makeup running, holding the shawl tightly.
```

## 대화 21 — 두부집 할머니 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a lively, sharp-eyed 78-year-old grandmother who runs a tofu shop. Neat white hair in a small bun, round glasses, a navy work apron and a white headscarf, rubber boots, a wooden tofu paddle in hand, a proud grin. Navy and khaki accents.
```

**`tofu_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: proud grin, tofu paddle on her shoulder.
```

**`tofu_surprised.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: surprised, glasses slipping down her nose.
```

## 대화 22 — 시오리 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a striking, cold 22-year-old woman. Long straight silver-white hair, one pale grey eye and a black eyepatch over the other, a long pure white coat with a high collar, white gloves, a calm unreadable smile. White and pale silver palette.
```

**`ren_smile.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: calm unreadable smile, one gloved hand raised.
```

**`ren_normal.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: cold, looking down at the viewer.
```

**`ren_sad.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: sad, looking away, one white-gloved hand on her eyepatch.
```

## 대화 23 — 하야카 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a fragile, pretty 17-year-old high school girl. Long dark brown hair in a low side braid, big tired rose-brown eyes with faint dark circles, navy sailor-style school uniform with a rose-red scarf, a small bathhouse-shaped keychain on her bag, a plain white wristband from a clinic. Rose red and navy accents.
```

**`hayaka_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: blank and tired, hugging her school bag.
```

**`hayaka_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying silently, gripping her wristband.
```

**`hayaka_smile.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: small fragile smile.
```

## 대화 24 — 케이코 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a worn but kind 44-year-old working mother. Brown hair tied back with a simple orange hair tie, gentle tired eyes, a grey work jacket over a plain shirt, both hands wrapped in white bandages, a small scar of a burn on her neck. Warm orange and grey accents.
```

**`keiko_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: tired, holding her bandaged hands together.
```

**`keiko_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying, head bowed.
```

**`keiko_resolute.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: resolute, looking straight ahead, bandaged hands clenched.
```

## 대화 25 — 오카모토 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a fierce, energetic 68-year-old grandmother who leads a neighborhood protest. Short permed grey hair, sharp eyes behind thick glasses, a moss-green cardigan, a white headband with protest writing (no readable letters), a megaphone at her side. Moss green accents.
```

**`okamoto_angry.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: angry, pointing, mouth open shouting.
```

**`okamoto_normal.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: calmer, adjusting her glasses.
```

## 대화 26 — 무라세 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a polite but cold 50-year-old construction site manager. Neat short black hair with grey at the temples, thin smiling eyes that never smile, grey work jacket with a company patch (abstract logo), a yellow safety helmet under his arm, a clipboard. Dark red accent on his tie.
```

**`murase_smile.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: polite thin smile, bowing slightly.
```

**`murase_normal.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: businesslike, checking his clipboard.
```

**`murase_cornered.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: cornered, cold sweat, smile gone.
```

## 대화 27 — 니시무라 상반신 (1장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an intimidating 55-year-old company executive man. Slicked-back black hair, narrow cold eyes, a perfectly tailored black suit, a silver lighter in his fingers, expressionless face. Dark grey and silver palette.
```

**`nishimura_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: expressionless, flicking a silver lighter.
```

## 대화 28 — 타나베 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a kind, slightly confused 40-year-old security guard man. Short black hair, round face, a navy guard uniform with a cap and a whistle, a slightly puzzled expression. Slate blue accents.
```

**`tanabe_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: polite, hand on his cap.
```

**`tanabe_confused.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: confused, holding his head as if it aches.
```

## 대화 29 — 배경 (34장)

배경끼리 그림체를 맞추려고 한 대화에서 이어 만든다.

**`office.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. Full color, limited palette of about 32 colors.

Basement storage room turned into a tiny police office, cardboard evidence boxes stacked high, an old sofa, an electric kettle, dim fluorescent light. Interior, eye level. Keep the lower third simple so characters can stand in front. No people. Horizontal 1536x1024 PNG.
```

**`guardroom.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Small security guard room on the first floor of an old apartment building, a tiny CRT TV showing baseball, a desk with a logbook, night outside the window. Keep the lower third simple because characters will stand in front.
```

**`interrogate.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Police interrogation room, grey walls, metal table, a single desk lamp, one-way mirror. Keep the lower third simple because characters will stand in front.
```

**`himari_door.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Apartment corridor on the 5th floor at night, a slightly opened front door with a name plate, warm light leaking out. Keep the lower third simple because characters will stand in front.
```

**`hospital.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Quiet hospital corridor at night, benches along the wall, soft cold light. Keep the lower third simple because characters will stand in front.
```

**`cafe.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Small cozy retro cafe on a hillside street, wooden counter, siphon coffee makers, warm evening light through the window. Keep the lower third simple because characters will stand in front.
```

**`night.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Exterior of an old 6-story apartment building on a hill at night, balconies, a flowerbed below, city lights in the distance. Keep the lower third simple because characters will stand in front.
```

**`crescent_out.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Entrance of a small basement live house in front of a train station at night, neon crescent moon sign, posters on the wall, stairs going down, police tape across the door. Keep the lower third simple because characters will stand in front.
```

**`crescent_stage.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Inside a small live house seen from the audience floor: a low stage with drums and amps, a lighting truss above, a metal catwalk along the ceiling, a lighting booth window at the back, empty floor with tape marks. Dim blue house lights. Keep the lower third simple because characters will stand in front.
```

**`booth.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Small lighting booth at the back of a live house, a lighting console with many faders and buttons, a large glass window looking down on the stage and the catwalk, a clipboard, a headset hanging. Keep the lower third simple because characters will stand in front.
```

**`greenroom.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Cramped live-house dressing room, a long mirror with bulbs, a bench, guitar and bass cases covered in stickers, a small CRT monitor on the wall showing the stage, a black suit jacket on a chair. Keep the lower third simple because characters will stand in front.
```

**`backstage.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Narrow backstage corridor of a live house, black walls, cables, road cases, a steep steel staircase going up to the catwalk, a dented spot on the wall. Keep the lower third simple because characters will stand in front.
```

**`tendo_office.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Luxurious talent agency president office in the afternoon, a big wooden desk, a leather chair, framed band posters, a safe, a waste basket beside the desk, blinds with warm sunlight. Keep the lower third simple because characters will stand in front.
```

**`tokiwa_shop.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

An old retro Japanese Western-style pastry shop at night after closing: empty cake showcase, a small register counter, a round wall clock, warm dim lights, a steep wooden staircase at the back going up to a storage room, police tape at the door. Keep the lower third simple because characters will stand in front.
```

**`storage.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A cramped second-floor storage room of a pastry shop: stacked cake boxes, a small old safe with its door open, a steep staircase going down, a single bare bulb. Keep the lower third simple because characters will stand in front.
```

**`arcade.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A covered old shopping arcade (shotengai) at night, most shutters down, a tofu shop with a wall clock, a tiny tarot booth with a curtain and star decorations, paper lanterns, a narrow back alley between shops. Keep the lower third simple because characters will stand in front.
```

**`booth3.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Inside a tiny tarot fortune telling booth: a round table with a purple cloth and tarot cards, a crystal ball, star-shaped fairy lights, heavy curtains. Keep the lower third simple because characters will stand in front.
```

**`academy.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

An art prep school studio in the morning: rows of easels, plaster busts, charcoal drawings pinned on the walls, big windows with soft light. Keep the lower third simple because characters will stand in front.
```

**`arcade_exit.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

The exit of a covered shopping arcade at night opening onto a quiet street, a single streetlamp, the arcade roof ending against a dark sky. Keep the lower third simple because characters will stand in front.
```

**`sakurayu.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A burned old Japanese public bathhouse (sento) at dusk in an empty redevelopment lot: charred wooden entrance with a half-burned noren curtain, a tall chimney still standing, police tape, a fence at the back. Keep the lower third simple because characters will stand in front.
```

**`sakurayu_boiler.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

The burned boiler room of an old bathhouse: a scorched boiler, a blackened electrical panel on the wall, soot everywhere, a small window. Keep the lower third simple because characters will stand in front.
```

**`okamoto_house.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

The second floor of an old grandmother's house: tatami room, a window looking down at a burned bathhouse across the street, protest banners rolled in the corner, a small table clock. Keep the lower third simple because characters will stand in front.
```

**`site_office.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A container-style construction site office: desks with blueprints, a whiteboard schedule, a key cabinet on the wall, yellow helmets on hooks, a window showing a burned chimney. Keep the lower third simple because characters will stand in front.
```

**`clinic.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

An unnaturally clean white counseling room: white walls, a white sofa, a small white table, a framed logo of an empty speech bubble, soft shadowless light. Keep the lower third simple because characters will stand in front.
```

**`station_chief.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A police station chief's office: a heavy desk, a flag, a leather sofa, blinds with morning light, an oppressive atmosphere. Keep the lower third simple because characters will stand in front.
```

**`koharu_room.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A small one-room apartment overlooking the harbor in the morning: a desk with open drawers, a neatly made bed, a laptop left on, a framed photo on the wall, cute stickers everywhere. Keep the lower third simple because characters will stand in front.
```

**`library.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A quiet city library newspaper archive room: long tables, microfilm readers, bound newspapers on shelves, a wall clock, morning light. Keep the lower third simple because characters will stand in front.
```

**`busstop.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A bus stop in front of a huge glass corporate headquarters building at noon, a security guard booth at the gate, a bench. Keep the lower third simple because characters will stand in front.
```

**`warehouse.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

An abandoned harbor warehouse at dusk: rusty half-open shutter, cranes and the sea behind, seagulls. Keep the lower third simple because characters will stand in front.
```

**`warehouse_in.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Inside an abandoned harbor warehouse: dusty floor, a single hanging lamp over an old table with two teacups, stacked crates, light leaking through holes in the roof. Keep the lower third simple because characters will stand in front.
```

**`cafe_night.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A small cozy retro cafe at night after closing: wooden counter, siphon coffee makers, only one warm lamp on, chairs up on some tables. Keep the lower third simple because characters will stand in front.
```

**`lighthouse.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

The ruins of a small lighthouse-shaped library on the tip of a cape at dusk: half-collapsed white tower, burned windows, overgrown grass, a lone bench facing the sea, the late-summer harbor town lights far away. Keep the lower third simple because characters will stand in front.
```

**`lighthouse_in.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Inside the burned upper floor of a lighthouse-shaped library: charred bookshelves, a reading table by a round window, scattered burnt manuscript pages, moonlight through the broken roof. Keep the lower third simple because characters will stand in front.
```

**`lighthouse_dawn.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

The tip of a cape at dawn: the ruined lighthouse library silhouetted against a pink and orange sky, calm sea, birds, a bench. Keep the lower third simple because characters will stand in front.
```

## 대화 30 — 컷 · 타이가 시점 + 증언 (금색) (7장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`A.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color gold (#c9961a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: a young delivery worker with spiky bleached blond hair (accent color) under a backwards black cap, a small earring and a black uniform with reflective stripes holding a cardboard box under his arm, pressing the doorbell of an apartment front door at night. Big music notes drifting out through the door gap.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 옆구리에 낀 상자, 문틈의 음표(♪)

**`D.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a young delivery worker with spiky bleached blond hair (accent color) under a backwards black cap, a small earring and a black uniform with reflective stripes, startled at an apartment front door at night, turning back toward something off-panel. His cardboard box has just dropped to the floor at his feet. Simple speed lines from the side.
```

> 꼭 보여야 할 것: 바닥에 떨어진 상자, 놀란 얼굴

**`F.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Close-up on a stairwell: a hand gripping a dead smartphone, the screen showing a big empty battery icon. Blond hair (accent color) at the edge of the panel.
```

> 꼭 보여야 할 것: 휴대폰 화면의 빈 배터리

**`t_taiga_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view of a hand pressing an apartment doorbell at night, music notes coming through the door.
```

> 꼭 보여야 할 것: 초인종, 음표

**`t_taiga_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An exaggerated memory of a SOUND, not an explosion: a young delivery worker with spiky bleached blond hair (accent color) under a backwards black cap, a small earring and a black uniform with reflective stripes in a 5th-floor apartment corridor at night covers his ears with both hands, drawn small, while the whole panel vibrates with huge concentric sound-wave rings and giant jagged empty sound-effect balloon shapes (no letters) coming from beyond the balcony. No fire, no smoke, no debris, no rocks, no blast, no flash.
```

> 꼭 보여야 할 것: 과장: 거대한 소리(음파·효과음 모양). 폭발·불·파편 없음

**`t_taiga_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a young delivery worker with spiky bleached blond hair (accent color) under a backwards black cap, a small earring and a black uniform with reflective stripes going down stairs, with his face and hands left completely blank white as if erased.
```

> 꼭 보여야 할 것: 생략: 하얀 여백

**`t_taiga_3_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night on a dim stairwell: a young delivery worker with spiky bleached blond hair (accent color) under a backwards black cap, a small earring and a black uniform with reflective stripes holds up a smartphone close to the viewer; its black screen shows only one big empty battery icon, clearly readable. He bites his lip in frustration.
```

> 꼭 보여야 할 것: (진실) 꺼진 휴대폰의 큰 빈 배터리 아이콘

## 대화 31 — 컷 · 미츠루 시점 (파랑) (2장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`B.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color blue (#3b8fd0). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: a gentle man in his early 30s with glasses and a light shirt sitting at a black upright piano in a cozy living room at night, both hands lifted clearly above the keys and not touching them, his head turned toward the curtained glass door to the balcony; behind the thin curtain, the small shadow of a child.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 멈춘 손(건반에서 뗀 손), 업라이트 피아노, 커튼 너머 작은 그림자

**`C.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + blue (#3b8fd0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a gentle man in his early 30s with glasses and a light shirt leaning through the gap of a balcony partition at night, reaching out desperately. Beyond the partition: a child's small feet standing on the railing, and a tiny glint of a small hairpin caught on the outer ledge (only a small sparkle, no toy or other object). Leave empty space at the top center for a speech bubble.
```

> 꼭 보여야 할 것: 칸막이, 뻗은 팔, 난간 위 작은 발, 바깥 턱의 반짝임, 위쪽 가운데 빈 공간

## 대화 32 — 컷 · 히마리 시점 (분홍) (6장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`G.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color pink (#e0679a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: On a balcony at night, a music-note hairpin flying away in the wind from the hair of a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt. She stands on the balcony floor reaching for it.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 날아가는 음표 머리핀, 바닥에 선 아이

**`H.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Seen from inside a 5th-floor apartment balcony high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious: a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt has stepped up onto a flowerpot set against the railing and leans her upper body over the top of the railing, stretching one arm down toward the narrow outer ledge just outside the railing, where her music-note hairpin lies, drawn large and clearly in the accent color. On one side, a white emergency partition board; the neighbor's balcony beyond it is empty.
```

> 꼭 보여야 할 것: 화분을 밟은 발, 난간 위로 내민 몸, 난간 바로 바깥 턱의 큰 머리핀(포인트 색), 빈 칸막이, 아래로 보이는 항구 야경(높이)

**`I.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Seen from the side on a 5th-floor apartment balcony high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious: an adult's arm reaches through the gap beside the white emergency partition and pulls a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt back down from the railing onto the balcony floor; she clutches her music-note hairpin, drawn clearly in the accent color. The adult (glasses, light shirt) leans dangerously far out over the railing on his side of the partition.
```

> 꼭 보여야 할 것: 손에 쥔 머리핀(포인트 색), 칸막이 틈으로 뻗은 어른 팔, 바깥으로 기우는 어른, 아래 항구 야경(높이)

**`t_himari_1_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt at her desk, looking out the window instead of at her homework.
```

> 꼭 보여야 할 것: (진실) 창밖을 보는 아이

**`t_himari_2_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: From inside the room through the open glass door, on a 5th-floor apartment balcony high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious: a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt leans on the balcony railing and stares at her music-note hairpin lying on the narrow outer ledge just outside the railing, drawn large in the accent color.
```

> 꼭 보여야 할 것: (진실) 난간 바깥 턱의 큰 머리핀(포인트 색), 항구 야경(높이)

**`t_himari_3_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt crying under a blanket, holding her music-note hairpin tightly.
```

> 꼭 보여야 할 것: (진실) 머리핀을 쥔 손

## 대화 33 — 컷 · 히마리 크레용 기억 (예외: 크레용 색) (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`AF.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: exception for this panel — it is a child's crayon memory, so use a few bright crayon colors (yellow, pink, sky blue) with wobbly hand-drawn shapes, still made of chunky pixels. No text, no speech bubbles.

Scene: An old small apartment kitchen twelve years ago: a child's crayon drawing of three people stuck on a fridge (accent color on the drawing); through the window, a hillside cut by construction cranes and a glow of fire.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 냉장고의 크레용 그림(포인트 색), 창밖 크레인과 불빛

**`t_himari_1.png`
```
같은 크레용 도트 스타일, 같은 픽셀 크기로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Child's crayon drawing of a little girl doing homework at a desk.
```

> 꼭 보여야 할 것: 크레용 그림체

**`t_himari_2.png`
```
같은 크레용 도트 스타일, 같은 픽셀 크기로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Child's crayon drawing of a little girl at a window, the balcony drawn strangely huge.
```

> 꼭 보여야 할 것: 크레용, 거대한 베란다

**`t_himari_3.png`
```
같은 크레용 도트 스타일, 같은 픽셀 크기로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Child's crayon drawing of a blanket colored completely black, a tiny fist in the corner.
```

> 꼭 보여야 할 것: 크레용, 새까만 이불

## 대화 34 — 컷 · 오오쿠보 증언 (올리브) (5장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`E.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color olive green (#6b8a5a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: a young delivery worker with spiky bleached blond hair (light grey) under a backwards black cap, a small earring and a black uniform with reflective stripes bursting out of a stairwell into the entrance hall, shouting with a terrified face, both hands empty. Leave empty space at the top center for a speech bubble.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 빈 손, 외치는 입, 위쪽 가운데 빈 공간

**`t_ookubo_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a chubby old security guard with a grey mustache in an olive uniform and cap proudly writing in a logbook at his desk, absurd sparkles and flowers around him (an exaggerated, self-flattering memory).
```

> 꼭 보여야 할 것: 미화: 반짝이, 꽃

**`t_ookubo_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night: a young delivery worker with spiky bleached blond hair (light grey) under a backwards black cap, a small earring and a black uniform with reflective stripes running out of a stairwell, same outfit and delivery backpack as always, but his face is scribbled over with a crude horned monster doodle like a child's pen scribble (a prejudiced memory). He is not wearing a guard uniform. Through the glass entrance door, the dark night street lit by a single streetlamp.
```

> 꼭 보여야 할 것: 낙서: 얼굴이 괴물 낙서, 밤

**`t_ookubo_2_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a young delivery worker with spiky bleached blond hair (light grey) under a backwards black cap, a small earring and a black uniform with reflective stripes running out of a stairwell, face clearly visible, scared and about to cry, shouting.
```

> 꼭 보여야 할 것: (진실) 겁먹은 얼굴

**`t_ookubo_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A dull impact on a flowerbed in front of an apartment building at night, seen from far away: a puff of dust and crushed flowers. No person is visible.
```

> 꼭 보여야 할 것: 화단의 충격

## 대화 35 — 탐색 맵 (10장)

칸 배치를 최대한 지킨다. 조금 어긋나도 Claude가 충돌 칸을 그림에 맞춘다.

**`mansion5f.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. Night, warm indoor lamp light and cool moonlight. No characters, no text.

Layout by tile rows, top to bottom:
- Rows 0-3: the 5th floor outdoor corridor of an old Japanese apartment building. Row 1 is the corridor's back wall with ceiling lamps, a fire extinguisher box and electric meter boxes. Rows 2-3 are the concrete corridor floor. A staircase going down at the far left (column 1).
- Row 4: thick wall between corridor and apartments. Column 9 is the open front door of Saeki's apartment (stone entrance floor, door swung open). Column 18 is the closed door of the neighbor's apartment with a small nameplate and a pink sticker.
- Rows 5-9, columns 1-17: inside Saeki's apartment, one wide living room with warm wooden floor and cream wallpaper on the top wall (row 5). A black upright piano with its lid open and sheet music at columns 2-3, row 7. A green two-seat sofa with a pink cushion at columns 12-13, row 6. A low wooden table with sheet music, notebooks and a mug on a rug at columns 8-9, row 8. A wall calendar on the top wall at column 5. A pair of men's shoes and a pair of small white children's indoor shoes just inside the door at column 10, row 6. A bookshelf at column 1, row 6, a potted plant at column 17, row 6, a small TV stand at columns 14-15, row 9.
- Columns 19-25, rows 5-10: the neighbor's apartment, not accessible, shown as plain dark roof.
- Row 10: the apartment's back wall with a glass sliding door to the balcony at columns 7-9 (the middle one open), an outdoor air-conditioner unit and hanging laundry on the outside.
- Row 11: a narrow concrete balcony running the whole width. A terracotta plant pot with soil spilled around it and tiny child footprints at column 16. A white emergency partition board standing across the balcony at column 17, with a small gap underneath. The neighbor's balcony continues on the right from column 18, with a pink flower pot at column 18 and warm light from the neighbor's window.
- Row 12: the balcony's metal railing; through the bars, far below, the lights of a harbor town at night.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`crescent.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A small basement live house, dim blue house lights, police tape. No characters, no text.

Layout by tile rows, top to bottom:
- Row 1: the black back wall of the stage with amps and a cue sheet taped at column 21.
- Rows 2-4: a low wooden stage. A drum kit on a riser at columns 11-13 of row 2. A fallen microphone stand on an "X" of tape at column 12, row 4. A broken drumstick at column 8, row 4. A rectangle of tape outline on the floor at columns 15-16, row 3. A setlist taped to the floor at column 4, row 3.
- Row 5: the front edge of the stage, with short steps down in the middle (columns 11-14).
- Rows 6-9: the standing audience floor (dark concrete). A short row of folding chairs ("first row") at columns 4-9 of row 6. A white jacket lying on the floor at column 18, row 8.
- Row 10: a back wall with an opening at columns 18-20.
- Row 11: left part (columns 1-17) is the entrance lobby with a reception desk at columns 3-4; right part (columns 18-24) is a small raised lighting booth with a console at columns 22-23.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`backstage.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. Backstage of a small live house, black walls, cables, road cases. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-10, rows 2-6: the stage wing. Row 2 is a narrow metal catwalk; row 3 is its railing (with a scraped strap mark at columns 5-6 and a half clamp at column 9, row 2); column 1, row 3 is a steep steel staircase connecting the catwalk and the wing floor. Rows 4-6 are the wing floor with black curtains; a radio transceiver on the floor at column 6, row 5.
- Column 11, rows 1-6: a solid wall.
- Columns 12-24, rows 2-6: a dressing room with a long mirror on the top wall, a CRT monitor on the wall at columns 20-21, a chair with a black suit jacket at columns 15-16, row 4.
- Row 7: a wall with doors at column 5 and column 18; a dented fist mark on the wall at column 8.
- Rows 8-9: a narrow corridor across the whole width.
- Row 10: a wall with a door at column 17.
- Row 11: columns 15-24 is an evidence storage area with a bent lighting truss covered in plastic at columns 18-20; columns 1-13 are dark and inaccessible.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`tendooffice.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A luxurious talent agency president office in the afternoon, warm sunlight through blinds. No characters, no text.

Layout by tile rows, top to bottom:
- Row 1: the top wall with framed band posters at columns 5-6 and windows with blinds.
- Rows 2-10: carpeted office floor. A big wooden desk at columns 10-13, row 3, with a drawer side facing down (column 11, row 4). A waste basket at column 15, row 3. A safe with document folders on top at columns 21-22, row 2. A leather sofa set at columns 3-5, row 5, with a low table.
- Row 11: the bottom wall with the door at column 12.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`tokiwa.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. An old Japanese Western-style pastry shop at night, warm dim lamps. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-12, rows 1-9: the shop floor (warm wooden floor). Row 1 is the back wall with a weekly shift chart at column 3 and a staff memo board at column 6. A cake showcase at columns 2-5 of row 3. A register counter at columns 8-9 of row 3 and a shop telephone at column 10. A small office desk at columns 3-4 of row 8. Column 12, row 5 is the foot of a steep staircase.
- Column 13: a wall, with the staircase opening at row 5.
- Columns 14-24, rows 2-6: the second-floor storage room (concrete floor): stacked cake boxes at columns 17-19 of row 2, an old safe with its door open at column 23 of row 2, a back door at column 24 of row 6.
- Row 10: the shop front wall with the entrance at column 6. Row 11, columns 1-12: the arcade street outside with a half-closed shutter.
- Columns 14-24, rows 7-11: dark roof, not accessible.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`arcade.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A covered old shopping arcade at night, paper lanterns, most shutters down. No characters, no text.

Layout by tile rows, top to bottom:
- Row 1: shop fronts. A tofu shop at columns 19-20 with a wall clock at column 21.
- Rows 2-4: the arcade street (tiled floor). A tiny tarot booth with a curtain and star lights at columns 4-6 of row 2, its small table at column 7, a trash can at column 3 of row 4.
- Row 5: shop walls with a narrow back alley opening at columns 13-15.
- Columns 13-15, rows 6-10: the narrow back alley with a drain at column 14, row 10. Row 11, columns 13-15: the back door of a pastry shop.
- Everything else in rows 6-11 is dark rooftops, not accessible.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`sakurayu.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A burned old Japanese public bathhouse at dusk, soot, police tape. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-15, rows 1-5: the burned bathhouse interior (charred wooden floor). Row 1 is the back wall with a flyer at column 3. A front counter at columns 4-5 of row 3. An empty bath tub at columns 10-12, rows 3-4.
- Column 16: a wall with a doorway at row 4.
- Columns 17-24, rows 1-5: the boiler room (concrete): an electrical panel on the wall at column 21 of row 2, a big boiler at columns 18-19 of row 4.
- Row 6: the building's outer wall with the bathhouse entrance at column 8 and the boiler room back door at column 20.
- Rows 7-8: a back street. Row 9: a wooden fence with a gap at columns 15-18. Rows 10-11, columns 15-18: a path to the house across the street; everything else in rows 10-11 is dark.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`siteoffice.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A construction site container office in the morning. No characters, no text.

Layout by tile rows, top to bottom:
- Row 1: the back wall with a key cabinet at column 3, a helmet rack at columns 6-7, a whiteboard schedule at columns 17-19, a window at columns 22-23.
- Rows 2-9: office floor (linoleum). The site manager's desk at columns 11-13 of row 3. A few other desks and filing cabinets along the walls.
- Row 10: the front wall with the door at column 11. Row 11: gravel yard outside.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`koharuroom.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. A small one-room apartment in the morning, cute stickers, a harbor view window. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-6 and 20-24 in every row: dark, not accessible.
- Row 1, columns 7-19: the back wall with a framed photo at column 12.
- Rows 2-9, columns 7-19: the room (wooden floor). A desk with open drawers at columns 8-9 of row 2. A laptop on a low table at column 16 of row 3. A neatly made bed at columns 16-17, rows 7-8. A sticker notebook on the floor at column 9, row 6.
- Row 10: the front wall with the door at column 12. Row 11, columns 7-19: the outdoor corridor.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

**`lighthouse.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Top-down 3/4 view pixel art game map, like a high-quality modern Japanese RPG made in RPG Maker but with richer detail. Native resolution exactly 416x208 pixels on a 16-pixel tile grid (26 tiles wide, 13 tiles tall), upscaled exactly 3x with nearest-neighbor to 1248x624. The ruins of a lighthouse-shaped library on a cape at dusk, burned wood, moonlight. No characters, no text.

Layout by tile rows, top to bottom:
- Columns 1-13, rows 1-4: the burned upper floor reading room (charred wooden floor): a reading table at columns 3-4 of row 2, a bookshelf with a metal box at columns 11-12 of row 2, scattered manuscript pages at column 6 of row 3, a burnt form at column 10 of row 3, a small glint on the stair landing at column 7 of row 4.
- Row 5, columns 1-13: a wall with a staircase opening at column 7.
- Columns 1-13, rows 6-9: the burned ground floor book stacks, ash on the floor at column 4 of row 7.
- Column 14: the outer wall with the library door at row 8.
- Columns 15-24, rows 1-9: the grassy cape outside, with a bench facing the sea at columns 21-22 of row 4. Row 10: a cliff railing. Row 11: the sea.
Full color, limited palette of about 48 colors, clean dark outlines, soft dithered shadows, no anti-aliasing.
```

## 대화 36 — 걷는 캐릭터 (탐색용) (3장)

한 대화에서 레이 → 코하루 → 시오리 순서로 만든다. 칸 크기와 발 높이를 셋이 똑같이 맞춘다. 상반신 이미지를 기준으로 첨부하면 좋다.

**`rei.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Top-down RPG walking sprite sheet in pixel art, for the same game as the character portraits. Transparent background. The sheet is exactly 192x384: a grid of 3 columns by 4 rows, each cell 64x96, every cell the same size with the character centered and feet at the same height near the bottom of the cell. Native pixel size 2x2 (each cell is 32x48 pixels upscaled 2x with nearest-neighbor). Columns: standing, left foot forward, right foot forward. Rows from top: facing down (toward the viewer), facing left, facing right, facing up (back view). Cute chibi proportions about 2.5 heads tall, but keep the face, hair and outfit recognizable as the portrait design. Clean dark outline, limited palette of about 24 colors, no anti-aliasing, no text, no grid lines.

Character: an androgynous 22-year-old investigator, messy short black hair with one ahoge and a small lavender hair clip, sleepy violet-grey eyes, oversized grey hoodie under a long beige trench coat.
```

**`koharu.png`
```
같은 스프라이트 시트 규칙(192x384, 64x96 칸 3열×4행, 같은 픽셀 크기와 발 높이)으로 다음 캐릭터를 그려줘. 투명 배경.

Character: a cheerful 20-year-old rookie detective girl, orange-brown side ponytail with a sky-blue scrunchie, navy suit jacket over a white shirt with a sky-blue ribbon tie, navy pants, white sneakers.
```

**`shiori.png`
```
같은 스프라이트 시트 규칙(192x384, 64x96 칸 3열×4행, 같은 픽셀 크기와 발 높이)으로 다음 캐릭터를 그려줘. 투명 배경.

Character: a pale 16-year-old girl ghost, long straight black hair with blunt bangs, old navy sailor school uniform with a white ribbon, barefoot, slightly translucent.
```

## 대화 37 — UI 스킨 (9장)

한 대화에서 차례로 만들어 스타일을 맞춘다. 크기는 정확히 지키고, 9-slice 틀은 모서리 밖 가장자리가 똑같이 반복되게.

**`ui_textbox.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Pixel art UI element for a mystery visual novel whose theme is manga pages: cream manga paper (#f7f3ea) with a bold black ink border (#1d1d22), small screentone dot patterns and a hint of gold (#f2c14e) accents. Crisp pixel art at native resolution, upscaled exactly 3x with nearest-neighbor, no anti-aliasing, no text, no letters. Flat front view, no perspective, no drop shadow outside the element, transparent background outside the element.

A dialogue box frame, 288x144. 9-slice friendly: the four 24x24 corners have small ink flourishes, the edges between them are a uniform repeatable ink border, the center is plain cream paper with a very faint screentone so it can stretch.
```

**`ui_textbox_dark.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A narration box frame, 288x144, same shape as the dialogue box but dark: deep navy-black paper (#14141a) with a thin light-grey ink border. 9-slice friendly: 24x24 corners, uniform edges, plain center.
```

**`ui_name.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A small name plate tab, 144x48, like a manga caption box: cream paper with a black ink border and a small gold corner. 9-slice friendly: 12x12 corners, uniform edges, plain center.
```

**`ui_button.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A button, 144x48: cream paper with a 3-pixel black ink border and a slightly darker bottom edge so it looks pressable. 9-slice friendly: 12x12 corners, uniform edges, plain center.
```

**`ui_button_hot.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

The same button in its hovered state, 144x48: gold (#f2c14e) paper with the same black ink border. 9-slice friendly.
```

**`ui_button_red.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A dramatic red action button, 144x48: red (#e0383e) with a black ink border and small white speed-line marks in the corners. 9-slice friendly: 12x12 corners, uniform edges, plain red center.
```

**`ui_panel.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A large panel frame for menus and the case notebook, 288x288: cream paper with a bold ink border, a paper-clip at the top-left corner and screentone in the corners. 9-slice friendly: 36x36 corners, uniform edges, plain center.
```

**`ui_icons.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A horizontal strip of 8 icons, each exactly 96x96 (32x32 native), evenly spaced with transparent background, black ink outline style with small gold accents, in this order from left to right: 1 a small notebook, 2 a scroll of dialogue lines (log), 3 a play triangle with a small "A" shape made only of pixels (auto), 4 a double fast-forward arrow (skip), 5 a gear (settings), 6 a magnifying glass, 7 a small blue ink bottle, 8 a cat-ear headphone.
```

**`ui_objection.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A wide cut-in banner background, 1536x512, for the moment the hero rebuts a witness: explosive black and red manga speed lines radiating from the left, white screentone burst, torn paper edges at top and bottom. Leave the middle empty and calm for text that will be overlaid by the game. No characters, no text.
```

## 대화 38 — 이벤트 CG (7장)

상반신 이미지를 기준으로 첨부해 같은 얼굴로 그린다. 배경 7장과 같은 도트 스타일.

**`cg_shiori.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. At night on the narrow concrete balcony of an old apartment, beside a white emergency partition board, a 16-year-old girl ghost with long straight black hair and blunt bangs in an old navy sailor school uniform, barefoot stands still and points toward the neighbor's balcony, pale and faintly translucent, while an androgynous young investigator with messy short black hair and a lavender hair clip, oversized grey hoodie under a long beige trench coat in the foreground looks at her, startled. Cool moonlight, warm light from the neighbor's window.
```

**`cg_taiga_run.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. Night street of a harbor town. a young delivery worker with spiky bleached blond hair under a backwards black cap, black uniform with reflective stripes sprints across the road toward a brightly lit convenience store, a dead smartphone in his hand, teeth clenched, motion lines. Seen from behind at a low angle.
```

**`cg_rescue.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. The true moment, seen from the side at night: on a 5th-floor balcony, a gentle man in his early 30s with glasses and a light shirt leans far out through the gap of the emergency partition and pulls a 9-year-old girl with brown twin tails tied with pink ribbons, a t-shirt with a piano-key pattern and a denim overall skirt back from the railing with one arm; she clutches a small music-note hairpin. His body tilts dangerously outward over the railing. Tense, but warm and protective.
```

**`cg_page.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. In a quiet hospital corridor at dawn, an androgynous young investigator with messy short black hair and a lavender hair clip, oversized grey hoodie under a long beige trench coat holds up a finished manga page made of six panels that tell the true story of the night, looking at it with a calm, tired face, a cheerful young detective girl with an orange-brown side ponytail and sky-blue scrunchie, navy suit jacket and sky-blue ribbon tie peeking over the shoulder. Soft morning light from a window.
```

**`cg_cafe.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. Inside a small cozy cafe on a hill at sunset, called Yohaku: an elegant 61-year-old cafe owner with silver hair in a bun and round gold glasses, cream blouse and linen apron behind the counter places a cup of sweet coffee in front of an androgynous young investigator with messy short black hair and a lavender hair clip, oversized grey hoodie under a long beige trench coat, and a cheerful young detective girl with an orange-brown side ponytail and sky-blue scrunchie, navy suit jacket and sky-blue ribbon tie beside them smiles brightly. Warm orange light, harbor and sea through the window.
```

**`cg_margin.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. Rei sitting at the burned reading table of the lighthouse library at dawn, holding a pen for the first time in six years, drawing in the last empty panel of a manuscript page; a faint translucent Shiori leans over the table smiling, the sea shining through the round window.
```

**`cg_farewell.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. At the tip of the cape at sunrise, translucent Shiori in her old sailor uniform smiles and waves as she scatters into light, Rei and Koharu standing hand in hand watching, the ruined lighthouse library behind.
```

## 대화 39 — 타이틀 키아트 (1장)

상반신 이미지를 기준으로 첨부해 같은 얼굴로 그린다.

**`key.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Key visual illustration for the title screen of a mystery visual novel. Late-summer harbor town at night, seen from a sloped street with old apartment buildings, warm window lights and the sea with harbor lights in the distance. On the right half: an androgynous 22-year-old investigator, messy short black hair with one ahoge and a small lavender hair clip, sleepy violet-grey eyes, oversized grey hoodie under a long beige trench coat. standing in front, looking back over the shoulder at the viewer with a calm sleepy expression, and a cheerful 20-year-old rookie detective girl, orange-brown side ponytail with a sky-blue scrunchie, navy suit jacket over a white shirt with a sky-blue ribbon tie, navy pants, white sneakers. slightly behind, smiling. Several translucent black-and-white manga panels float in the air around them like scattered memories, each showing a faint scene from the same night. The left 40% of the image is calm, darker night sky and street with no important details, reserved for the title text. No text, no letters, no logo.
```

## 대화 40 — 컷 · 핀 시점 (5장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2A.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color lavender purple (#a07ad8). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First song of a live show, seen from the bassist's position at stage left: the back of a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker wearing a white oversized stage jacket (accent color) at the center microphone, a packed audience of silhouetted heads beyond her. Star shapes projected on the stage floor. Above: a lighting rig (a metal truss with four stage lights and one pattern projector) hanging above the center of the stage, next to a metal catwalk railing about one meter away; the gap between the rig and the catwalk railing is clearly empty, nothing tied there.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 흰 재킷(포인트 색), 바닥의 별 무늬, 리그와 난간 사이가 비어 있음

**`2K.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + lavender purple (#a07ad8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A cramped dressing room: an 18-year-old girl bassist with pastel hair in two buns and an oversized bunny hoodie hugging a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker, who is crying. On the wall, a small monitor shows the stage covered in haze with blue standby light, and on the catwalk in the monitor a tiny dark human silhouette; at the silhouette's wrist one small bright glint (accent color).
```

> 꼭 보여야 할 것: 벽 모니터 속 헤이즈와 캣워크 위 작은 그림자, 손목의 작은 반짝임(포인트 색)

**`t_pin_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + lavender purple (#a07ad8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A sparkling, flattering memory: a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker shining with glitter and flowers, looking cool and noble; the man she argues with is only a blurry grey silhouette.
```

> 꼭 보여야 할 것: 미화: 반짝이, 흐린 상대

**`t_pin_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + lavender purple (#a07ad8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A sparkling memory: an 18-year-old girl bassist with pastel hair in two buns and an oversized bunny hoodie and a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker sitting side by side in front of a dressing room mirror, smiling, everything covered in glitter and hearts.
```

> 꼭 보여야 할 것: 미화: 거울 앞 두 사람

**`t_pin_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + lavender purple (#a07ad8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A sparkling memory: a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker doing an 18-year-old girl bassist with pastel hair in two buns and an oversized bunny hoodie's makeup, laughing; flowers and glitter cover the whole panel, including the wall behind them.
```

> 꼭 보여야 할 것: 미화: 벽까지 덮은 반짝이

## 대화 41 — 컷 · 루루 시점 (8장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2B.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color vermilion orange (#e4572e). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: During the MC between songs, plain bright white light floods the whole stage with no pattern: a white oversized stage jacket (accent color) flying through the air toward the audience. At the right edge, between the dark wing curtains, a black suit sleeve and hand waving "back, step back".

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 공중의 재킷(포인트 색), 무늬 없는 흰빛, 윙 커튼 틈의 검은 소매 손짓

**`2H.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Under fluorescent work lights on the catwalk: a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker grabs a clamp of the lighting rig with both hands, her side face gritting her teeth, angry and tearful. Right next to the clamp, a big tight knot of strap tying the rig to the railing, clearly visible. Leave empty space at the top right for a speech bubble.
```

> 꼭 보여야 할 것: 클램프를 붙잡은 손, 클램프 옆 큰 매듭, 작업등, 오른쪽 위 빈 공간

**`2P.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night in front of a rehearsal studio on a city street: a man in a plain black suit with neat short black hair holds out a sheet of paper to a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker in casual clothes. The paper shows a record label logo (accent color). Ruru looks hurt.
```

> 꼭 보여야 할 것: 밤거리, 사복 루루, 종이의 레코드사 로고(포인트 색)

**`t_ruru_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a man in a plain black suit with neat short black hair turning away on a dark street. In front of him, a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker, but her face is scribbled over completely black with crude pen scribbles (self-hatred).
```

> 꼭 보여야 할 것: 낙서: 루루 자신의 얼굴이 새까만 낙서

**`t_ruru_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An exaggerated memory: a gigantic hand violently shaking the lighting rig, the truss bending like rubber, dramatic shake lines everywhere.
```

> 꼭 보여야 할 것: 과장: 거대한 손, 휘는 리그

**`t_ruru_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Looking down from the catwalk: the lighting rig falling toward the stage below, the same composition as the fall but seen from above.
```

> 꼭 보여야 할 것: 위에서 내려다본 낙하

**`t_ruru_4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A blurry memory: the back of a man in a black suit standing on the stage; where his face should be, a blank white hole.
```

> 꼭 보여야 할 것: 생략: 얼굴 자리 하얀 여백

**`t_ruru_4_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a man in a plain black suit with neat short black hair bursting out of the dark wing, reaching his hand toward the viewer with a desperate face never seen before, grid light patterns behind him.
```

> 꼭 보여야 할 것: (진실) 손을 뻗는 키리시마의 다급한 얼굴

## 대화 42 — 컷 · 아오이 시점 (2장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2C.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color cobalt blue (#3a78c9). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Seen from behind the drum kit (cymbals in the foreground with the drummer's hands, accent color on the drumsticks): the stage floor is covered with wavy stripe patterns of light. a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker without her jacket, in a black tank top, sings. Above her, a lighting rig (a metal truss with four stage lights and one pattern projector) hanging above the center of the stage, next to a metal catwalk railing about one meter away, perfectly still.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 물결 줄무늬, 재킷 없는 루루, 정지한 리그

**`2E.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + cobalt blue (#3a78c9) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: The moment of the fall, seen from the drum riser: no light pattern anymore, the stage suddenly dark. a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker pushed sideways and falling down, and in her place the back of a man in a black suit, with the lighting rig crashing down onto him. Dust and broken light.
```

> 꼭 보여야 할 것: 무늬 없음, 밀려 넘어지는 루루, 정장의 등, 떨어지는 리그

## 대화 43 — 컷 · 쿠라모치 시점 (6장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2D.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color amber (#d9a21b). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: From inside the lighting booth through its glass window: the stage below covered in a grid pattern of light; above it a lighting rig (a metal truss with four stage lights and one pattern projector) hanging above the center of the stage, next to a metal catwalk railing about one meter away, its beams crooked and trembling with shake lines. In the foreground a gloved hand tightly gripping a radio transceiver (accent color).

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 격자 무늬, 비뚤어진 빔과 떨림 선, 무전기를 쥔 장갑 손(포인트 색)

**`2M.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + amber (#d9a21b) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: From inside the lighting booth through the glass: on the hazy catwalk across the room, a woman in her fifties with a tight updo and a tailored suit stuffs a strap into her jacket pocket and looks straight at the viewer, putting a finger to her lips. Her a very large square wristwatch glints (accent color).
```

> 꼭 보여야 할 것: 부스 유리 너머 캣워크, 끈을 주머니에 넣으며 손가락을 입에 대는 텐도, 시계(포인트 색)

**`t_kuramochi_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + amber (#d9a21b) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Close-up of a gloved hand signing a checklist on a clipboard. The row for the lighting rig is left completely blank white, as if erased; the other rows are normal.
```

> 꼭 보여야 할 것: 생략: 리그 칸이 하얀 여백

**`t_kuramochi_1_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + amber (#d9a21b) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Close-up of a checklist on a clipboard: the lighting rig row has a big circle mark (accent color), and over it someone has written "OK" in a different pen.
```

> 꼭 보여야 할 것: (진실) 리그 칸의 큰 동그라미(포인트 색)

**`t_kuramochi_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + amber (#d9a21b) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Extreme close-up of a lighting console: only faders and buttons, gloved fingers on them (accent color on one button).
```

> 꼭 보여야 할 것: 콘솔 클로즈업

**`t_kuramochi_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + amber (#d9a21b) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: From the lighting booth through the glass: the stage below is visible, but where the catwalk should be, the whole upper part of the panel is blank white as if erased.
```

> 꼭 보여야 할 것: 생략: 캣워크 자리가 통째로 하얀 여백

## 대화 44 — 컷 · 키리시마 시점 (5장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2F.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color teal green (#3aa58a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Afternoon rehearsal, seen from the first row of an empty audience floor looking up at the stage: a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker in a grey hoodie doing a mic check. Above, on the metal catwalk, a woman lighting technician with a short bob, a headset and thick black work gloves points at a clamp of the lighting rig. In the foreground, on the viewer's knee, a clipboard checklist (accent color). Empty seats beside.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 텅 빈 객석, 후드 차림 루루, 캣워크 위에서 클램프를 가리키는 장갑 손, 무릎 위 점검표(포인트 색)

**`2G.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal green (#3aa58a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Under harsh white fluorescent work lights with every seat of the audience floor clearly visible below: first-person view of two hands in black suit sleeves tying the lighting rig to the catwalk railing with a ratchet strap (accent color). The loose end of the strap still hangs down.
```

> 꼭 보여야 할 것: 형광 작업등, 다 보이는 객석, 래칫 끈(포인트 색), 늘어진 끈 끝

**`2I.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal green (#3aa58a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Peeking from the wing between dark curtains at the stage: wavy stripe light patterns on the floor, a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker without her jacket singing. Above, the lighting rig and the catwalk railing next to it: the railing is bare, no strap, no knot. In the foreground, a hand in a black suit sleeve holding a radio transceiver (accent color).
```

> 꼭 보여야 할 것: 물결 무늬, 재킷 없는 루루, 매듭 없는 난간, 손의 무전기(포인트 색)

**`2L.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal green (#3aa58a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A backstage corridor during rehearsal (music notes coming from the stage side): a woman in her fifties with a tight updo and a tailored suit waving her hand dismissively, wearing a very large square wristwatch (big and clearly visible). In the foreground, a man's hand holds out a checklist with a big circle marked on it (accent color). Leave empty space at the top center for a speech bubble.
```

> 꼭 보여야 할 것: 손을 내젓는 텐도, 큰 사각 손목시계, 동그라미 친 점검표(포인트 색), 무대 쪽 음표, 위쪽 빈 공간

**`2N.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal green (#3aa58a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view bursting out of the stage wing onto the stage: grid patterns of light on the floor, a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker mid-jump at the center, and above her the lighting rig tilting and about to fall. The viewer's own hand in a black suit sleeve reaches out toward her (accent color on the radio in the other hand). Leave empty space at the top center for a speech bubble.
```

> 꼭 보여야 할 것: 격자 무늬, 점프하는 루루, 기우는 리그, 뻗은 손, 위쪽 빈 공간

## 대화 45 — 컷 · 텐도 시점 (5장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2T.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color magenta (#b0306a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Close-up on the catwalk: two hands untying the ratchet strap from the lighting rig, a very large square wristwatch (accent color) on the left wrist. Far below, the stage is covered in thick haze lit by blue standby lights.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 끈을 푸는 두 손, 큰 사각 손목시계(포인트 색), 아래 무대의 헤이즈와 대기 조명

**`t_tendo_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + magenta (#b0306a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A backstage corridor: a woman in her fifties with a tight updo and a tailored suit smiling pleasantly. The speech bubble area of the person talking to her is a blank white hole, as if erased.
```

> 꼭 보여야 할 것: 생략: 상대 말풍선 자리 하얀 여백

**`t_tendo_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + magenta (#b0306a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An exaggerated memory: a gigantic a 19-year-old girl vocalist with long platinum-white hair, a thin braid and a black ribbon choker shaking the lighting rig on the catwalk. The rig is at eye level, and in the lower left foreground the diagonal steel handrail of a staircase cuts across the panel, clearly visible.
```

> 꼭 보여야 할 것: 과장: 거대한 루루, 앞쪽의 비스듬한 계단 난간, 눈높이의 리그

**`t_tendo_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + magenta (#b0306a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a woman in her fifties with a tight updo and a tailored suit sitting calmly in an office chair at a live house office, reading documents, a very large square wristwatch on her wrist.
```

> 꼭 보여야 할 것: 사무실 의자의 텐도

**`t_tendo_3b.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + magenta (#b0306a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Seen from the top of a steel staircase: the lighting rig in front; the railing right beside the rig is blank white, as if erased.
```

> 꼭 보여야 할 것: 생략: 리그 옆 난간 자리 하얀 여백

## 대화 46 — 컷 · 스즈네 시점 (12장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`3A.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color teal (#38a3a5). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: A pastry shop at night: a 19-year-old girl with a dark bob and a ribbon, wearing a pastry shop apron with the ribbon on her RIGHT side pulls down the shop shutter. A round wall clock clearly shows 8:50. At the bottom of the panel, her ankle with a big white bandage (accent color), clearly visible.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 오른쪽 리본, 벽시계 8:50, 발목의 큰 반창고(포인트 색)

**`3B.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At the register counter at night: close view of a hand counting bills and writing in a ledger with a pen held in the RIGHT hand. The register display clearly shows 21:00. A thick cash envelope (accent color) on the counter.
```

> 꼭 보여야 할 것: 오른손으로 쥔 펜, 계산대 화면 21:00, 매상 봉투(포인트 색)

**`3G.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night at the foot of a steep wooden staircase in a pastry shop: a man's legs lying on the floor; a 19-year-old girl with a dark bob and a ribbon, wearing a pastry shop apron stands frozen, hands over her mouth. A wall clock clearly shows 9:15. Her ankle with a white bandage (accent color) is visible.
```

> 꼭 보여야 할 것: 쓰러진 다리, 벽시계 9:15, 발목 반창고(포인트 색)

**`3H.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Close-up of a trembling hand holding a smartphone; the screen shows a call to 119 and the time 21:25 large at the top. Behind the hand, a bandaged ankle (accent color).
```

> 꼭 보여야 할 것: 휴대폰 화면 119 통화와 21:25, 반창고 발목(포인트 색)

**`3K.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Daytime in a pastry shop: a RIGHT hand pins a weekly shift chart on the wall (accent color on the chart). Sunlight through the window. A wall clock shows 3:00.
```

> 꼭 보여야 할 것: 낮, 근무표(포인트 색), 오른손, 벽시계 3:00

**`3E.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night in an art prep school studio: a girl at an easel draws a plaster bust with charcoal held in her LEFT hand (accent color on the charcoal). A wall clock clearly shows 9:00. Her ankles are bare, no bandage.
```

> 꼭 보여야 할 것: 왼손 목탄(포인트 색), 벽시계 9:00, 반창고 없는 발목

**`3F.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A night train platform: a girl with an art portfolio bag looks at a smartphone held in her LEFT hand; the screen shows a message (accent color). A big station clock shows 9:25.
```

> 꼭 보여야 할 것: 역 시계 9:25, 왼손의 휴대폰(포인트 색)

**`t_yukin_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A pastry shop at night: a 19-year-old girl with a dark bob and a ribbon, wearing a pastry shop apron with the ribbon on her RIGHT side stands in front of the half-closed shutter. At the very bottom of the panel, her ankle with a white bandage is visible (accent color), as if she did not notice it was in the picture. A wall clock in the corner.
```

> 꼭 보여야 할 것: 오른쪽 리본, 화면 아래 반창고 발목(포인트 색), 벽시계

**`t_yukin_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A flattering, sparkling memory: a hand neatly placing a cash envelope into a shining safe, with sparkles and flowers around it (accent color on the envelope).
```

> 꼭 보여야 할 것: 미화: 반짝이는 금고와 봉투

**`t_yukin_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a girl leaving a pastry shop at night; the left half of the panel is left completely blank white, as if erased.
```

> 꼭 보여야 할 것: 생략: 왼쪽 절반이 하얀 여백

**`t_nagi_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A girl in an apron holds a smartphone to her ear; where the wall clock should be, there is a blank white hole as if erased (accent color on the phone).
```

> 꼭 보여야 할 것: 생략: 벽시계 자리 하얀 여백, 휴대폰(포인트 색)

**`t_nagi_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An empty steep wooden staircase in a pastry shop at night, the second floor light on, nobody in sight.
```

> 꼭 보여야 할 것: 아무도 없는 계단

## 대화 47 — 컷 · 하세가와 시점 (2장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`3C.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color burnt orange (#c4703a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First-person view from the bottom of a steep staircase looking up at night: at the top, a woman wrapped in a black shawl covered with star sequins snatches a thick cash envelope (accent color) and turns away; the star sequins on the shawl glitter. In the lower corner, the viewer's own wrist with a watch clearly showing 9:10.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 계단 위 별무늬 숄, 봉투(포인트 색), 손목시계 9:10

**`3D.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + burnt orange (#c4703a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Blurry first-person view from the floor at the foot of a staircase: a 19-year-old girl with a dark bob and a ribbon, wearing a pastry shop apron stands frozen holding a smartphone, trembling. A wall clock shows 9:20. Her bandaged ankle (accent color) is near the viewer.
```

> 꼭 보여야 할 것: 흐릿한 시야, 휴대폰을 쥔 점원, 벽시계 9:20, 반창고(포인트 색)

## 대화 48 — 컷 · 두부집 할머니 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`3J.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color khaki green (#8f9a4a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: View over a tofu shop counter into a night shopping arcade: a woman wrapped in a black shawl covered with star sequins runs out of a narrow back alley, the star sequins on the shawl glittering (accent color). On the tofu shop wall, a clock clearly shows 9:22.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 뒷골목에서 뛰어나오는 별무늬 숄(포인트 색), 두부집 시계 9:22

**`t_tofu_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + khaki green (#8f9a4a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Inside a tofu shop at night: the wall clock clearly shows 9:00; across the arcade, a shutter coming down with a rattling sound effect drawn as lines.
```

> 꼭 보여야 할 것: 두부집 벽시계 9:00, 건너편 셔터

**`t_tofu_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + khaki green (#8f9a4a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A night shopping arcade seen from a tofu shop: a glittering shawl edge disappears into a narrow alley (accent color on the sparkle). The tofu shop clock shows 9:20.
```

> 꼭 보여야 할 것: 골목으로 사라지는 반짝이는 숄 자락, 시계 9:20

**`t_tofu_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + khaki green (#8f9a4a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A girl with the ribbon on her RIGHT side waves cheerfully from a pastry shop doorway in the evening.
```

> 꼭 보여야 할 것: 오른쪽 리본 점원이 손을 흔듦

## 대화 49 — 컷 · 마도카 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`F1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color violet (#7d4fd1). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Drawn like a tarot-card vision with a thin ornate border: a 19-year-old girl with a dark bob and a ribbon, wearing a pastry shop apron with the ribbon on her RIGHT side carries cake boxes up a steep staircase. A small clock on the landing shows 9:05. Accent color on the ribbon.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 타로 테두리, 상자를 든 오른쪽 리본 점원, 계단참 시계 9:05

**`F2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + violet (#7d4fd1) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Drawn like a tarot-card vision with a thin ornate border: a 19-year-old girl with a dark bob and a ribbon, wearing a pastry shop apron with the ribbon on her RIGHT side grabs a cash envelope (accent color) in a storage room. IMPORTANT: the area around her hand and the envelope is a visibly pasted-on patch: its screentone dots are clearly denser and a different size than the rest of the panel, with a faint rectangular seam line around it.
```

> 꼭 보여야 할 것: 타로 테두리, 봉투를 쥔 손(포인트 색), 손 둘레만 스크린톤 점이 다르고 이음매가 보임

**`F3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + violet (#7d4fd1) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Drawn like a tarot-card vision with a thin ornate border: a hand pushes a man's back at the top of a staircase. The only light comes from the bottom of the stairs, so every shadow falls upward, EXCEPT the pushing hand's shadow which clearly falls downward (wrong direction). Accent color on the hand.
```

> 꼭 보여야 할 것: 타로 테두리, 미는 손(포인트 색), 손 그림자만 반대 방향

**`t_madoka_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + violet (#7d4fd1) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Inside a tarot booth: tarot cards on a purple cloth, a customer's hands across the table, star fairy lights (accent color on the cards).
```

> 꼭 보여야 할 것: 부스의 타로 카드와 손님의 손

## 대화 50 — 컷 · 하야카 시점 (7장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4A.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color rose red (#e85d75). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Inside an old bathhouse at night, the front counter: an old man in a bathhouse happi coat shouts angrily across the counter, purchase documents on the counter (accent color). A wall clock clearly shows 9:00.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 소리치는 할아버지, 매입 서류(포인트 색), 벽시계 9:00

**`4E.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night from a dark alley corner: a tired woman in a grey work jacket with her hair tied back stands at a fence holding a flashlight (accent color), looking around nervously like a lookout. A clock tower shows 10:50.
```

> 꼭 보여야 할 것: 울타리 앞 손전등(포인트 색)을 든 엄마, 시계탑 10:50

**`4K.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An unnaturally white counseling room: across a white table, a white-gloved hand slides a document toward the viewer; on the wall, a logo of an empty speech bubble (accent color). A wall clock shows 9:00.
```

> 꼭 보여야 할 것: 하얀 방, 흰 장갑, 빈 말풍선 로고(포인트 색), 벽시계 9:00

**`t_hayaka_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a schoolgirl leaving an old bathhouse at night, the door closing behind her.
```

> 꼭 보여야 할 것: 목욕탕을 나서는 뒷모습

**`t_hayaka_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A manga panel that has been neatly cut out with scissors: the whole inside is empty white, with faint white glove fingerprints on the edge.
```

> 꼭 보여야 할 것: 삭제: 오려 낸 빈 칸, 가장자리의 흰 장갑 자국

**`t_hayaka_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A manga panel neatly cut out: empty white inside, with a tiny yellow stain of flashlight glow left in one corner.
```

> 꼭 보여야 할 것: 삭제: 오려 낸 빈 칸, 귀퉁이의 손전등 빛 자국

**`t_hayaka_4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An unnaturally white room with an empty speech bubble logo; a girl's hand signs a document.
```

> 꼭 보여야 할 것: 하얀 방, 서명하는 손

## 대화 51 — 컷 · 케이코 시점 (6장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4B.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color warm orange (#d4883a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: At night behind a bathhouse fence: first-person view of the viewer's own hands receiving a flashlight (accent color) from a gloved hand with an abstract company logo on the glove. Far away, festival lanterns; a clock tower shows 10:30.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 건네받는 손전등(포인트 색), 장갑의 로고, 시계탑 10:30, 축제 등불

**`4F.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night by a fence: smoke and sparks burst out of a small boiler room window of a bathhouse (accent color on the sparks). A clock tower shows 11:00.
```

> 꼭 보여야 할 것: 보일러실 창의 불꽃(포인트 색), 시계탑 11:00

**`4G.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view pushing through a bathhouse changing-room curtain into thick smoke, the viewer's bandage-free hands reaching forward; deep inside, a coughing sound effect shape (accent color).
```

> 꼭 보여야 할 것: 연기 속으로 젖히는 포렴, 기침 소리 모양(포인트 색)

**`4M.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A hospital room at dawn: bandaged hands hold an old man's hand on the bed (accent color on the bandages). The window is getting light; a clock shows 6:00.
```

> 꼭 보여야 할 것: 붕대 감은 손(포인트 색), 새벽 창, 시계 6:00

**`t_keiko_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A tidy kitchen at night, a woman sitting alone at the table; everything is unnaturally clean.
```

> 꼭 보여야 할 것: 부엌에 혼자 앉은 여자

**`t_keiko_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A panel completely blurred as if covered by thick smoke; shapes cannot be recognized.
```

> 꼭 보여야 할 것: 흐림: 연기처럼 흐린 컷

## 대화 52 — 컷 · 무라세 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4C.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color dark red (#a03a3a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First-person view at night: a hand unlocking the back door of a boiler room with a key (accent color), a tool bag on the ground. A wristwatch clearly shows 10:40.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 열쇠(포인트 색), 공구 가방, 손목시계 10:40

**`4J.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + dark red (#a03a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Inside a construction site office at night: through the window, a bathhouse burning; a man's hand holds a phone to his ear. On the wall calendar, a red circle (accent color) around the end of the month. A digital clock shows 23:20.
```

> 꼭 보여야 할 것: 창밖 불길, 귀에 댄 휴대폰, 달력의 동그라미(포인트 색), 23:20

**`t_cross_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + dark red (#a03a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A construction site office at night; the chair in front of the desk is a blank white hole as if erased.
```

> 꼭 보여야 할 것: 생략: 의자 자리 하얀 여백

**`t_cross_4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + dark red (#a03a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A sooty electrical panel with suspiciously neat wiring.
```

> 꼭 보여야 할 것: 그을린 배전반

## 대화 53 — 컷 · 오카모토 시점 (8장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4D.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color moss green (#7a9a3a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Looking down from a second-floor window at night: two men in yellow safety helmets with an abstract company logo enter the back gate of a bathhouse (accent color on the helmets). In the corner of the alley, a small figure of a schoolgirl. On the window sill, a table clock shows 10:45.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 헬멧 둘(포인트 색), 골목 모퉁이 교복 차림, 탁상시계 10:45

**`4I.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Night in front of a burning bathhouse: a woman carries an old man on her back out of the flames; red fire truck lights. In the foreground, a hand holds a phone showing a call and 23:15 (accent color).
```

> 꼭 보여야 할 것: 노인을 업고 나오는 여자, 소방차 불빛, 휴대폰 23:15(포인트 색)

**`4L.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Early evening in a community hall: elderly people under a protest banner (no readable letters), the front seat empty (accent color on the empty chair). A wall clock shows 7:00.
```

> 꼭 보여야 할 것: 반대 모임, 비어 있는 맨 앞자리(포인트 색), 7:00

**`t_okamoto_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An exaggerated, frightened memory: two gigantic shadowy figures as tall as houses smash through a bathhouse back gate at night.
```

> 꼭 보여야 할 것: 과장: 집채만 한 그림자 둘

**`t_okamoto_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a schoolgirl running down a night alley, with flames drawn behind her.
```

> 꼭 보여야 할 것: 골목을 달리는 교복, 뒤로 불길

**`t_okamoto_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A hand holding a phone to an ear; the window behind is red with firelight.
```

> 꼭 보여야 할 것: 휴대폰, 붉은 창

**`t_cross_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Looking down from a window at night: two men in safety helmets enter a back gate.
```

> 꼭 보여야 할 것: 창에서 본 헬멧 둘

**`t_cross_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Sparks bursting from a small boiler room window at night.
```

> 꼭 보여야 할 것: 보일러실 창의 불꽃

## 대화 54 — 컷 · 겐조 시점 (1장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4H.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color steel blue (#5a8fbf). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Blurry first-person view through smoke, being carried on someone's back: a sooty nape and an orange hair tie (accent color) right in front; above, a burning ceiling beam.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 흐린 시야, 업어 준 사람의 그을린 목덜미와 머리끈(포인트 색), 불타는 들보

## 대화 55 — 컷 · 코하루 시점 (8장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`5Ae.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color bright orange (#f2a14a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: A small apartment that looks ransacked: a broken door, an overturned desk, papers everywhere. IMPORTANT: it is an edited picture: the door's shadow falls the opposite way from every other shadow, and the edge of the pasted door area shows a faint seam line (accent color on the scattered papers).

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 편집: 어질러진 방, 문 그림자만 반대 방향, 이음매

**`5A.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Before dawn in a tidy small apartment: a hand writes a memo at a neat desk; next to it, a scorched police badge (accent color). A clock shows 4:10.
```

> 꼭 보여야 할 것: 정돈된 책상, 메모 쓰는 손, 그을린 경찰 배지(포인트 색), 4:10

**`5Be.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A library newspaper room: a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie reads an old newspaper while two men in black stand right behind her. IMPORTANT: edited picture: the two men are pasted in, their screentone dots are clearly larger than the rest, with a visible seam around them.
```

> 꼭 보여야 할 것: 편집: 뒤의 검은 옷 남자 둘만 스크린톤이 굵음, 이음매

**`5B.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A library newspaper room, wall clock 9:00: close view of an old newspaper about a lighthouse library fire with a photo of a young police officer (accent color on the photo), held by a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie's hands.
```

> 꼭 보여야 할 것: 오래된 신문의 순경 사진(포인트 색), 벽시계 9:00

**`5Ce.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A bus stop in front of a glass headquarters: several white-gloved hands drag a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie into a white van. IMPORTANT: edited picture: the gloved hands have unnaturally smooth clean lines unlike the rest, with a visible seam where they were pasted.
```

> 꼭 보여야 할 것: 편집: 매끈한 흰 장갑 손들, 이음매

**`5C.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Noon at a bus stop in front of a glass headquarters: a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie smiles while typing on her phone; the screen shows a short sent message (accent color).
```

> 꼭 보여야 할 것: 웃으며 문자 보내는 코하루, 휴대폰 화면(포인트 색)

**`5De.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Inside an abandoned warehouse: a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie tied to a chair. IMPORTANT: edited picture: there is only one ceiling lamp, but shadows fall in two different directions.
```

> 꼭 보여야 할 것: 편집: 그림자가 두 방향

**`5D.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Dusk at the harbor: first-person view walking alone toward an abandoned warehouse; at the door, a woman with long silver-white hair, an eyepatch and a long white coat waits (accent color on her coat). The sky is orange; 6:00.
```

> 꼭 보여야 할 것: 혼자 걸어가는 시점, 문 앞의 흰 코트(포인트 색)

## 대화 56 — 컷 · 타나베 시점 (3장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`5Ee.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color slate blue (#5a7a9a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: View from a guard booth window: a woman with long silver-white hair, an eyepatch and a long white coat drags a girl by the arm. IMPORTANT: edited picture: the white-coated figure has no shadow at all while everything else does.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 편집: 흰 코트만 그림자가 없음

**`5E.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + slate blue (#5a7a9a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: View from a guard booth window at noon: a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie stands alone and asks for directions, pointing toward the harbor (accent color). The guard's wristwatch shows 12:10.
```

> 꼭 보여야 할 것: 혼자 길을 묻는 아가씨(포인트 색), 손목시계 12:10

**`t_tanabe_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + slate blue (#5a7a9a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A girl crying on a bus stop bench; her face area is unnaturally smooth like a different drawing pasted in.
```

> 꼭 보여야 할 것: 편집: 매끈하게 붙인 우는 얼굴

## 대화 57 — 컷 · 렌 시점 (6장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`5F.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color ice blue (#6ac0d0). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Inside an abandoned warehouse: an old table with two teacups; across the table, a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie holds out a scorched police badge with both hands, asking earnestly (accent color on the teacups).

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 찻잔 둘(포인트 색), 배지를 내미는 코하루

**`6Y6.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Outside a burning lighthouse library on a lawn at night: first-person view with one hand covering one eye; flames swallow the upper floor windows (accent color on the flames).
```

> 꼭 보여야 할 것: 한쪽 눈을 가린 손, 위층을 삼키는 불길(포인트 색)

**`t_ren_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a woman with long silver-white hair, an eyepatch and a long white coat pulls a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie by the wrist into a warehouse. The area around the wrist has noticeably thicker lines than the rest (a pasted seam).
```

> 꼭 보여야 할 것: 편집: 손목 둘레만 굵은 선

**`t_ren_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A child sick in bed with fever; a wall calendar where the date square has a different paper texture, as if a different date was pasted over it.
```

> 꼭 보여야 할 것: 편집: 달력 날짜 칸만 질감이 다름

**`t_ren_1b.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 20-year-old rookie detective girl with an orange-brown side ponytail and a sky-blue scrunchie behind iron bars inside a warehouse; the bars stand upright but their shadows on the floor are skewed in a wrong direction.
```

> 꼭 보여야 할 것: 편집: 창살 그림자가 어긋남

**`t_ren_2b.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A child running away alone between burning bookshelves, back view.
```

> 꼭 보여야 할 것: 편집: 불타는 서가 사이로 달아나는 아이

## 대화 58 — 컷 · 소타 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`6Y1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color navy blue (#3a5aa0). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Six years ago at night: first-person view from a bicycle on a cape road, looking up at a lighthouse-shaped library with smoke pouring from a window. A wristwatch shows 8:20 (accent color).

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 6년 전, 등대 도서관의 연기, 손목시계 8:20(포인트 색)

**`6Y2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + navy blue (#3a5aa0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view kicking open a library door into smoke between tall bookshelves (accent color on the door). 8:25 on a wall clock.
```

> 꼭 보여야 할 것: 연기 속 서가, 문(포인트 색)

**`6Y3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + navy blue (#3a5aa0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view in smoke at the foot of library stairs: hands lift a 16-year-old with messy short black hair and an ink stain on the right index finger who is coughing; the ink stain on the child's right index finger is clearly visible (accent color).
```

> 꼭 보여야 할 것: 아이를 안아 올림, 오른손 검지 잉크 얼룩(포인트 색)

**`6Y5.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + navy blue (#3a5aa0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view turning back into the smoke and fire of a library; from the floor above, a speech shape of a girl's voice (accent color).
```

> 꼭 보여야 할 것: 다시 연기 속으로, 위층의 목소리(포인트 색)

## 대화 59 — 컷 · 쿠로가네 시점 (1장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`6Y4.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color strawberry pink (#e07a9a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: At a library entrance at night: first-person view receiving a child from a young police officer in uniform's arms; on the viewer's wrist, a watch stopped at 8:31 (accent color).

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 아이를 받아 안음, 8:31에 멈춘 손목시계(포인트 색)

## 대화 60 — 컷 · 레이 시점 (10장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`R1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color  (#6b5fa8). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First-person view at a library reading table by a round window at night: the viewer's right hand inks a manga page with a pen (accent color on the pen); across the table, a 16-year-old girl with long straight black hair, blunt bangs, a bookmark hairpin and an old navy sailor uniform reads a manuscript aloud. A wall clock shows 7:30.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 펜을 쥔 오른손(포인트 색), 맞은편에서 읽어 주는 시오리, 벽시계 7:30

**`R2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view: the viewer's hand strikes a pen line through the "story" name field of a manga contest application form (accent color on the line); speech space at the top.
```

> 꼭 보여야 할 것: 응모 서류의 칸을 긋는 손(포인트 색)

**`R3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view running down a spiral staircase in a lighthouse library, leaving a stack of manuscript pages behind on the landing (accent color on the pages). 8:05 on a wall clock.
```

> 꼭 보여야 할 것: 계단을 뛰어 내려감, 두고 온 원고(포인트 색)

**`R4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A bench at the tip of a cape at night: the viewer's knees and arms, face buried; the lighthouse beam sweeps over the sea (accent color on the beam). A wristwatch shows 8:15.
```

> 꼭 보여야 할 것: 곶 끝 벤치, 등대 불빛(포인트 색), 손목시계 8:15

**`R5.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view leaping up from a cape bench and running back toward a lighthouse library with smoke pouring from its windows (accent color on the smoke glow). 8:20.
```

> 꼭 보여야 할 것: 연기 나는 도서관으로 되돌아 뜀(포인트 색)

**`R6.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view in thick smoke on a library staircase, the view tilting as the viewer collapses toward the floor (accent color on a faint light above).
```

> 꼭 보여야 할 것: 연기 속 계단, 기울어지는 시야

**`R7.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Very blurry first-person view: a girl's hand slips away from the viewer's hand, passing the viewer into a police officer's arms (accent color on the girl's sleeve). 8:28.
```

> 꼭 보여야 할 것: 흐린 시야, 넘겨주며 떨어지는 손(포인트 색)

**`R8.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Blurry first-person view carried on a police officer's back away from a burning library; through the door behind, a small girl's silhouette walks back inside (accent color on the silhouette).
```

> 꼭 보여야 할 것: 경찰의 등 위, 문 안으로 들어가는 작은 그림자(포인트 색)

**`t_self_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Two manga panels joined: a child running down stairs, and immediately next to it, a girl's hand falling away; a very thin seam line between the two panels.
```

> 꼭 보여야 할 것: 편집: 뛰쳐나감과 떨어지는 손이 붙은 이음매

**`t_self_4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A child standing alone in front of a burning lighthouse library, nobody else in sight.
```

> 꼭 보여야 할 것: 불타는 도서관 앞에 혼자 선 아이

## 대화 61 — 컷 · 시오리 시점 (8장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`S1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color  (#c84a6a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First-person view reading a manuscript aloud at a library table at night; across the table, a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger draws, the pen tip moving (accent color on the manuscript). 7:30.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 읽어 주는 원고(포인트 색), 맞은편에서 그리는 아이

**`S2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger turning away, holding a contest application form with a struck-out field (accent color on the form). 7:50.
```

> 꼭 보여야 할 것: 돌아선 아이의 등, 그어진 응모 서류(포인트 색)

**`S3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A lonely library reading table at night: the last page of a manuscript is completely blank (accent color on the page edge). 8:05.
```

> 꼭 보여야 할 것: 백지인 마지막 장(포인트 색)

**`S4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Looking down from a library stair landing into a dark book stack: the flame of a silver lighter (accent color) lights up the side of the face of a man in a black suit with slicked-back hair. 8:15.
```

> 꼭 보여야 할 것: 라이터 불빛(포인트 색)에 비친 남자의 옆얼굴

**`S5.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view: hurriedly sketching a man's face in pencil on the back of a manuscript page, then hugging the pages to the chest (accent color on the pencil). 8:20.
```

> 꼭 보여야 할 것: 원고 뒷면에 얼굴을 그림(포인트 색)

**`S6.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view in smoke on a staircase: arms reaching for a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger collapsed on the steps (accent color on the reaching sleeve). 8:25.
```

> 꼭 보여야 할 것: 쓰러진 아이를 끌어안음(포인트 색)

**`S7.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At the foot of a library staircase in smoke: handing a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger into the arms of a young police officer who just ran in (accent color on the badge). 8:28.
```

> 꼭 보여야 할 것: 순경에게 아이를 넘김, 배지(포인트 색)

**`S8.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view turning back up a smoky staircase toward the upper floor; behind, the footsteps of a police officer following (accent color on the officer's cap). 8:33.
```

> 꼭 보여야 할 것: 다시 2층으로, 뒤따르는 순경(포인트 색)

## 대화 62 — 컷 · 아사기리 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`t_asagiri_1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color coffee brown (#8a5a3a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Close view over a cafe counter: a woman's hand offers a cup of sweet coffee with steam; on the ring finger, a faint pale mark where a ring used to be (accent color).

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 커피잔, 약지의 희미한 반지 자국(포인트 색)

**`t_asg_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + coffee brown (#8a5a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A spotless official fire report document on a desk, perfectly neat.
```

> 꼭 보여야 할 것: 말끔한 소방 보고서

**`t_asg_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + coffee brown (#8a5a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A child sleeping in bed with a fever, unnaturally calm and seamless.
```

> 꼭 보여야 할 것: 편집: 너무 고요한 감기 걸린 아이

**`t_asg_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + coffee brown (#8a5a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A cafe counter at night, spotless; the wall behind is completely empty.
```

> 꼭 보여야 할 것: 아무것도 걸리지 않은 벽
