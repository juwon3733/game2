# 1장 이미지 프롬프트 전체

> `node tools/export-prompts.mjs`로 자동 생성된 파일. 직접 고치지 말고 `web/js/asset_prompts.js`를 고친 뒤 다시 생성한다.
> 이미지 생성 에이전트는 같은 내용의 `web/assets/prompts.json`과 `AGENTS.md`를 쓴다.

- **묶음마다 새 ChatGPT 대화**를 연다. 한 대화 안에서는 위에서부터 차례로 붙여넣는다.
- 받은 이미지는 **원본 PNG**로 굵은 파일명 그대로 저장한다.

## 대화 1 — 레이 상반신 (3장)

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

## 대화 3 — 쿠로가네 상반신 (1장)

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

## 대화 4 — 토와 상반신 (1장)

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

## 대화 5 — 아사기리 상반신 (1장)

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

## 대화 9 — 시오리 상반신 (1장)

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

## 대화 12 — 배경 (7장)

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

## 대화 13 — 컷 · 타이가 시점 + 증언 (금색) (7장)

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

Scene: An enormous impact effect filling the entire panel, the apartment hallway tiny underneath (an exaggerated memory).
```

> 꼭 보여야 할 것: 과장: 화면을 뒤덮는 충격

**`t_taiga_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a young delivery worker with spiky bleached blond hair (accent color) under a backwards black cap, a small earring and a black uniform with reflective stripes going down stairs, with his face and hands left completely blank white as if erased.
```

> 꼭 보여야 할 것: 생략: 하얀 여백

**`t_taiga_3_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a young delivery worker with spiky bleached blond hair (accent color) under a backwards black cap, a small earring and a black uniform with reflective stripes on the stairs gripping a dead smartphone, biting his lip in frustration.
```

> 꼭 보여야 할 것: (진실) 꺼진 휴대폰

## 대화 14 — 컷 · 미츠루 시점 (파랑) (2장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`B.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color blue (#3b8fd0). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: a gentle man in his early 30s with glasses and a light shirt with both hands lifted clearly above the piano keys, not touching them, turning toward a curtained balcony door, a small child-sized shadow behind the curtain.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 멈춘 손, 커튼 너머 작은 그림자

**`C.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + blue (#3b8fd0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a gentle man in his early 30s with glasses and a light shirt leaning through the gap of a balcony partition at night, reaching out desperately. Beyond the partition: a child's small feet standing on the railing, and a tiny glint of a small hairpin caught on the outer ledge (only a small sparkle, no toy or other object). Leave empty space at the top center for a speech bubble.
```

> 꼭 보여야 할 것: 칸막이, 뻗은 팔, 난간 위 작은 발, 바깥 턱의 반짝임, 위쪽 가운데 빈 공간

## 대화 15 — 컷 · 히마리 시점 (분홍) (6장)

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

Scene: a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt standing on a flowerpot and climbing the balcony railing, reaching for her hairpin caught on the outer ledge. The neighboring balcony behind the partition is empty.
```

> 꼭 보여야 할 것: 화분을 밟은 발, 난간, 바깥 턱의 머리핀

**`I.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An adult's arm pulling a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt back to safety from the railing. She clutches the hairpin in her hand. The adult is leaning dangerously outward over the railing.
```

> 꼭 보여야 할 것: 손에 쥔 머리핀, 바깥으로 기우는 어른

**`t_himari_1_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt at her desk, looking out the window instead of at her homework.
```

> 꼭 보여야 할 것: (진실) 창밖을 보는 아이

**`t_himari_2_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt looking at her hairpin caught on the balcony's outer ledge.
```

> 꼭 보여야 할 것: (진실) 턱에 걸린 머리핀

**`t_himari_3_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails tied with ribbons, a small music-note hairpin, a t-shirt with a piano-key pattern and a denim overall skirt crying under a blanket, holding her music-note hairpin tightly.
```

> 꼭 보여야 할 것: (진실) 머리핀을 쥔 손

## 대화 16 — 컷 · 히마리 크레용 기억 (예외: 크레용 색) (3장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`t_himari_1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: exception for this panel — it is a child's crayon memory, so use a few bright crayon colors (yellow, pink, sky blue) with wobbly hand-drawn shapes, still made of chunky pixels. No text, no speech bubbles.

Scene: Child's crayon drawing of a little girl doing homework at a desk.

Any person in the panel has the same cute anime gacha-game style face (large expressive eyes) as the character portraits. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
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

## 대화 17 — 컷 · 오오쿠보 증언 (올리브) (5장)

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

Scene: a young delivery worker with spiky bleached blond hair (light grey) under a backwards black cap, a small earring and a black uniform with reflective stripes running out of a stairwell, same outfit and delivery backpack as always, but his face is scribbled over with a crude horned monster doodle like a child's pen scribble (a prejudiced memory). He is not wearing a guard uniform.
```

> 꼭 보여야 할 것: 낙서: 얼굴이 괴물 낙서

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

## 대화 18 — 탐색 맵 (1장)

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

## 대화 19 — 걷는 캐릭터 (탐색용) (3장)

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

## 대화 20 — UI 스킨 (9장)

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

## 대화 21 — 이벤트 CG (5장)

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

## 대화 22 — 타이틀 키아트 (1장)

상반신 이미지를 기준으로 첨부해 같은 얼굴로 그린다.

**`key.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Key visual illustration for the title screen of a mystery visual novel. Late-summer harbor town at night, seen from a sloped street with old apartment buildings, warm window lights and the sea with harbor lights in the distance. On the right half: an androgynous 22-year-old investigator, messy short black hair with one ahoge and a small lavender hair clip, sleepy violet-grey eyes, oversized grey hoodie under a long beige trench coat. standing in front, looking back over the shoulder at the viewer with a calm sleepy expression, and a cheerful 20-year-old rookie detective girl, orange-brown side ponytail with a sky-blue scrunchie, navy suit jacket over a white shirt with a sky-blue ribbon tie, navy pants, white sneakers. slightly behind, smiling. Several translucent black-and-white manga panels float in the air around them like scattered memories, each showing a faint scene from the same night. The left 40% of the image is calm, darker night sky and street with no important details, reserved for the title text. No text, no letters, no logo.
```
