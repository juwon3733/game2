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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

Expression: eyes open, focused and sharp, NO can in hand, one hand slightly raised as if pointing out a contradiction.
```

**`rei_surprised.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: eyes wide, startled, NO can in hand, both hands lowered.
```

**`rei_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying quietly for the first time, tears on the cheeks, sleepy eyes wide open.
```

## 대화 2 — 코하루 상반신 (4장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a cheerful 20-year-old rookie detective girl. Big sparkling amber eyes, orange-brown side ponytail tied with a sky-blue scrunchie with a small star charm, long orange-brown hair in a high side ponytail reaching her waist, fitted navy suit jacket with rolled sleeves over a white shirt with a loose sky-blue ribbon tie and the top button undone, short navy pencil skirt, black tights, white sneakers, a police badge clipped to her belt, a notebook covered in cute stickers. Sunny orange and sky-blue accent colors. Full body front view plus face close-up.
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

**`koharu_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying, tears streaming, still trying to smile.
```

## 대화 3 — 쿠로가네 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a tired but handsome 47-year-old police chief with a "cool uncle" design, clearly middle-aged (crow's feet, grey at the temples, a slightly weathered face — not a young man). Slicked-back black hair streaked with grey, light stubble, sharp tired eyes, rumpled white shirt with rolled sleeves, loose dark tie, shoulder holster strap, a strawberry lollipop stick in his mouth, old wristwatch. Iron grey and strawberry pink accents.
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

## 대화 4 — 토와 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

**`towa_real.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: IMPORTANT: this one is NOT on a monitor. Towa in person for the first time: a small shy young woman (not chibi, normal proportions like the other characters) with the same long ash-blonde wavy hair and big green eyes, cat-ear headphones around her neck, wrapped in the same cream blanket like a cape, serious expression, no monitor frame.
```

## 대화 5 — 아사기리 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an elegant, gentle 61-year-old cafe owner woman, clearly in her sixties (soft wrinkles around the eyes and mouth, a mature face — not a young woman). Beautiful silver hair in a neat bun with a wooden hairpin, round gold glasses, soft kind eyes, cream blouse with a linen apron, a coffee-bean brooch. Cream and coffee brown palette.
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

**`asagiri_sad.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: quiet grief, eyes lowered, holding an old crayon drawing, the gentle smile gone.
```

## 대화 6 — 오오쿠보 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

**`ookubo_sad.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: guilty and sincere, eyes open, brows lowered, cap in his hands, about to apologize, no smile.
```

## 대화 7 — 타이가 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

Expression: ashamed and sad, looking down, biting lip, pale face, no blush on the cheeks.
```

## 대화 8 — 히마리 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an adorable 9-year-old girl. Big round brown eyes, brown twin tails tied with pink ribbons, NO hairpin in her hair (she keeps her gold music-note hairpin hidden in her fist), pink t-shirt with a piano-key pattern, denim overall skirt, white sneakers, shy expression.
```

**`himari_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: shy, half hidden behind a door, no hairpin in her hair.
```

**`himari_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: crying, clutching something hidden in her fist, no hairpin in her hair.
```

## 대화 9 — 시오리 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of an ethereal, beautiful 16-year-old girl. Large calm dark eyes, long straight black hair with blunt bangs and a bookmark-shaped hairpin, old navy sailor school uniform with a white ribbon, barefoot, faintly translucent edges like a screentone ghost.
```

**`shiori_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: calm and quiet, faint smile, hands together in front of her skirt, NOT pointing.
```

**`shiori_point.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: calm, faint smile, pointing at something to the side.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a gentle, tired 36-year-old single mother who works late shifts. Long soft brown hair loosely tied over one shoulder, kind worried eyes like her daughter's, beige cardigan over a simple white blouse, an office lanyard, a small music-note keychain on her bag. Warm rose and beige accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a lively 20-year-old convenience store clerk girl. Long black hair with mint-green tips in a high ponytail and a star hairpin, bright honest eyes, a fitted green-and-white store uniform vest over a cropped T-shirt, denim shorts, name tag, wired earbuds around her neck. Mint and white accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a stunning 19-year-old indie rock vocalist and guitarist girl with a sharp tongue. Large vivid amber-orange eyes with sharp star-shaped highlights, waist-length sky-blue to cobalt hair with blunt bangs and two small braided loops at each side with tiny blue flower clips, a black newsboy cap tilted to one side with a plaid blue ribbon bow and a small round white bird-shaped plush mascot sitting on its brim, a black ribbon choker, an oversized white stage jacket with silver buttons worn off the shoulders over a cropped black tank top showing her midriff, a short blue plaid pleated skirt, black thigh-high socks, a guitar pick necklace, a vintage stage microphone in one hand. On stage a perfect idol smile, off stage a cool glare. Blue, white and amber accents.
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

Expression: perfect stage idol smile, mouth open, holding the microphone, one hand waving.
```

## 대화 13 — 핀 상반신 (3장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a sweet, dreamy 18-year-old bassist girl. Big soft rose-pink eyes, long fluffy silver-white hair down to her back with pastel coral-pink tips on the inner layer, a crossed silver hairpin on the bangs, a black beret with two small white plum-blossom flowers and a thin ribbon, a long black coat with white double-line trim and very wide sleeves embroidered with white plum blossoms, an off-shoulder white blouse with a big bow tie and a pink gem brooch, a black belt, short white shorts, a black lace-up garter on one thigh, a bass case covered in stickers. Black, white and rose-pink accents.
```

**`pin_normal.png`
```
방금 설정화 캐릭터 그대로, 같은 도트 스타일과 같은 팔레트로 그려줘. 모바일 가챠게임 캐릭터처럼 예쁘고 매력적으로.

Native resolution 256x384 pixels, upscaled exactly 4x with nearest-neighbor to 1024x1536 so every pixel is a crisp square block. Fine, detailed pixel art like a high-quality modern pixel-art visual novel: clean 1-pixel outlines, detailed eyes and hair strands, careful shading. Full color, limited palette of about 40 colors. No anti-aliasing.

Waist-up portrait facing slightly to the side, vertical 1024x1536. Fully transparent background with nothing behind the character; clear empty margin on the left, right and top. Expression: nervous, hiding her hands in her wide flower sleeves.
```

**`pin_happy.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: bright fluffy smile, peace sign.
```

**`pin_crying.png`
```
같은 캐릭터, 같은 구도, 같은 픽셀 크기로 표정만 바꿔줘. 투명 배경, 세로 1024x1536.

Expression: sobbing, beret slipping, flower sleeves pressed to her eyes.
```

## 대화 14 — 아오이 상반신 (2장)

먼저 설정화(reference sheet)를 만들어 기준으로 삼고, 같은 대화 안에서 표정을 이어 만든다. 설정화는 저장하지 않는다.

**`설정화 (저장 안 해도 됨)`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a cool 21-year-old drummer girl and band leader. Short navy-black hair with a shaved undercut on the sides (short cropped, NOT long, no ponytail), calm sharp cobalt-blue eyes, silver ear cuffs, a black crop tank top under an open cobalt work shirt, low-slung cargo pants, drumsticks in her back pocket, taped fingers. Cobalt blue and black accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a quiet 28-year-old live-house lighting technician woman. Long brown hair in a low loose ponytail, tired honest amber eyes, a headset with microphone around her neck, a fitted black crew T-shirt with a small crescent moon logo, a tool belt, thick black work gloves always on her hands. Amber and black accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a glamorous, intimidating 42-year-old talent agency president woman, a beautiful mature woman who looks late thirties: smooth skin with no wrinkles, sharp elegant features, attractive gacha-style adult beauty (not a young girl, not an old woman). Dark hair in a tight elegant updo, sharp smiling eyes with long lashes, deep wine-magenta tailored suit with a brooch, pearl earrings, and a very large square gold wristwatch on her left wrist that is always visible. Smiles politely but the eyes do not smile. Magenta and gold accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a stern, handsome 34-year-old band manager man. Neat short black hair, narrow tired teal eyes, always in a plain black suit and dark tie, a radio transceiver clipped to the belt, a small worn notebook in the breast pocket. Bare wrists, no wristwatch. Teal green accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a gentle, artistic 19-year-old girl, the older of identical twins. Big soft teal eyes, long glossy dark navy hair with a cream ribbon tied on the RIGHT side, a charcoal smudge on her LEFT hand (she is left-handed), cream blouse under a pastry shop apron with a small cake emblem, an art portfolio bag on her shoulder. Teal and cream accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a lively but anxious 19-year-old girl, the younger of identical twins, with exactly the same face as her sister. Big teal eyes, long glossy dark navy hair with a cream ribbon tied on the LEFT side, a white bandage around her right ankle, cream blouse under a pastry shop apron with a small cake emblem. Teal and cream accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a beautiful, mysterious 26-year-old tarot fortune teller woman. Long wavy violet-black hair, half-lidded amethyst eyes with long lashes, an off-shoulder dark violet dress with a high leg slit under a large black shawl covered in small silver star sequins, many rings, a tarot card held between two fingers, a charming smile that hides something. Violet and silver accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a striking, cold 22-year-old woman. Long straight silver-white hair, one pale grey eye and a black eyepatch over the other, a long pure white coat with a high collar worn open over a fitted white high-neck dress, white thigh-high boots, white gloves, a calm unreadable smile. White and pale silver palette.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Native resolution about 320x213 pixels, upscaled with nearest-neighbor so every pixel is a clearly visible square block. Full color, limited palette of about 24 colors.

Character reference sheet of a worn but kind 44-year-old working mother. Brown hair tied back with a simple orange hair tie, gentle tired eyes, a grey work jacket over a plain shirt, both hands wrapped in white bandages, a fresh burn dressing (white gauze) on the nape of her neck. Warm orange and grey accents.
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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

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

## 대화 29 — 배경 (35장)

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

Entrance of a mid-size live hall in front of a train station at night, neon crescent moon sign, posters on the wall, a wide glass entrance, police tape across the door. Keep the lower third simple because characters will stand in front.
```

**`crescent_stage.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

Inside a mid-size live hall (main floor plus a balcony) seen from the audience floor: a raised stage with drums and amps, a lighting truss above, a metal catwalk along the ceiling, a lighting booth window at the back, empty floor with tape marks. Dim blue house lights. Keep the lower third simple because characters will stand in front.
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

A cramped second-floor storage room of a pastry shop at night: stacked cake boxes, a small old safe with its door open, a back door to an outside iron staircase, a steep staircase going down. The single bare bulb hanging from the ceiling is clearly DARK and dead (burnt-out filament, NOT glowing, no light around it); the room is dim and lit ONLY by warm light coming up the staircase from the shop downstairs, so shadows point upward. The small safe stands wide open and empty. A back door stands open onto an outside iron staircase. Keep the lower third simple because characters will stand in front.
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

An art prep school studio in the evening: rows of easels, plaster busts, charcoal drawings pinned on the walls, big dark windows with the station lights outside, fluorescent lights. Keep the lower third simple because characters will stand in front.
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

A police station chief's office: a heavy desk, a flag, a leather sofa, closed blinds at night, a single desk lamp, an oppressive atmosphere. Keep the lower third simple because characters will stand in front.
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

**`pier.png`
```
같은 도트 스타일, 같은 픽셀 크기와 팔레트로 다음 배경을 그려줘. 사람 없이, 가로 1536x1024.

A long harbor breakwater at dusk: concrete path with tetrapods, a small red harbor lighthouse at the far end just switching on, an abandoned warehouse and cranes in the distance, orange and purple sky, seagulls. Keep the lower third simple because characters will stand in front.
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

Scene: the SAME young man as his character portrait: a 21-year-old delivery worker with spiky bleached blond hair (taiga-accent; in panels whose accent color is not gold, draw the hair as very light grey, never dark) under a backwards black cap with a small star, a small silver ring earring, a black hooded delivery jacket with reflective stripes and a small cat patch on the sleeve, black wristbands, rolled sleeves holding a cardboard box under his arm, pressing the doorbell of an apartment front door at night. Big music notes drifting out through the door gap.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/taiga_angry.png

> 꼭 보여야 할 것: 옆구리에 낀 상자, 문틈의 음표(♪)

**`D.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: the SAME young man as his character portrait: a 21-year-old delivery worker with spiky bleached blond hair (taiga-accent; in panels whose accent color is not gold, draw the hair as very light grey, never dark) under a backwards black cap with a small star, a small silver ring earring, a black hooded delivery jacket with reflective stripes and a small cat patch on the sleeve, black wristbands, rolled sleeves, startled at an apartment front door at night, turning back toward something off-panel. His cardboard box has just dropped to the floor at his feet. Simple speed lines from the side.
```

> 기준 이미지로 붙일 것: web/assets/portraits/taiga_angry.png

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

Scene: An exaggerated memory of a SOUND, not an explosion: the SAME young man as his character portrait: a 21-year-old delivery worker with spiky bleached blond hair (taiga-accent; in panels whose accent color is not gold, draw the hair as very light grey, never dark) under a backwards black cap with a small star, a small silver ring earring, a black hooded delivery jacket with reflective stripes and a small cat patch on the sleeve, black wristbands, rolled sleeves in a 5th-floor apartment corridor at night covers his ears with both hands, drawn small, while the whole panel vibrates with huge concentric sound-wave rings and giant jagged empty sound-effect balloon shapes (no letters) coming from beyond the balcony. No fire, no smoke, no debris, no rocks, no blast, no flash.
```

> 기준 이미지로 붙일 것: web/assets/portraits/taiga_angry.png

> 꼭 보여야 할 것: 과장: 거대한 소리(음파·효과음 모양). 폭발·불·파편 없음

**`t_taiga_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night, back view of the SAME young man as his character portrait: a 21-year-old delivery worker with spiky bleached blond hair (taiga-accent; in panels whose accent color is not gold, draw the hair as very light grey, never dark) under a backwards black cap with a small star, a small silver ring earring, a black hooded delivery jacket with reflective stripes and a small cat patch on the sleeve, black wristbands, rolled sleeves going down stairs; IMPORTANT: his head and both hands are left as large completely blank white areas with no lines at all, as if cut out of the picture.
```

> 기준 이미지로 붙일 것: web/assets/portraits/taiga_angry.png

> 꼭 보여야 할 것: 생략: 하얀 여백

**`t_taiga_3_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + gold (#c9961a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night, running down a dim stairwell two steps at a time: the SAME young man as his character portrait: a 21-year-old delivery worker with spiky bleached blond hair (taiga-accent; in panels whose accent color is not gold, draw the hair as very light grey, never dark) under a backwards black cap with a small star, a small silver ring earring, a black hooded delivery jacket with reflective stripes and a small cat patch on the sleeve, black wristbands, rolled sleeves glances down at the dead smartphone in his own hand, biting his lip; seen from over his shoulder, the black screen shows one big empty battery icon, clearly readable. He is NOT showing the phone to anyone.
```

> 기준 이미지로 붙일 것: web/assets/portraits/taiga_angry.png

> 꼭 보여야 할 것: (진실) 꺼진 휴대폰의 큰 빈 배터리 아이콘

## 대화 31 — 컷 · 미츠루 시점 (파랑) (2장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`B.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color blue (#3b8fd0). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: a gentle man in his early 30s with glasses and a light shirt in a cozy living room at night, sitting on the bench of a black upright piano with the lid open and sheet music on the stand, but he has STOPPED playing (NOT playing, no fingers on the keys): both hands are off the keys, resting on his knees, and his whole upper body is twisted around to look back at the curtained glass door to the balcony. On the thin curtain, cast from HIS OWN balcony just outside the glass (not the neighbor's), the small shadow of a child climbing up near the railing beside the white emergency partition.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 건반에서 뗀 손(무릎 위), 돌아보는 몸, 업라이트 피아노, 바로 바깥 자기 집 베란다의 작은 그림자(커튼에 비침)

**`C.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + blue (#3b8fd0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night on his OWN 5th-floor apartment balcony, high above the ground; far below, the harbor town lights and the dark sea make the height obvious. a gentle man in his early 30s with glasses and a light shirt has just rushed out through the wide-open glass door behind him, standing on his own balcony floor (NOT squeezing through any gap in the partition), and leans over the railing, reaching out desperately toward the far end of his balcony beside the white emergency partition board, where a small girl in white sneakers (NOT barefoot, no dress or floral skirt) and a denim overall skirt crouches on top of the railing, one hand gripping it and the other stretched DOWN toward the narrow outer ledge just outside the railing, where a small music-note hairpin glints, drawn clearly visible in the accent color (a small but readable hairpin shape, not just a sparkle). The hairpin is NOT on the child's head. Leave empty space at the top center for a speech bubble.
```

> 꼭 보여야 할 것: 열린 유리문, 칸막이 옆 난간으로 뻗은 팔, 난간 위 흰 운동화·멜빵 치마, 그 아래 바깥 턱의 반짝임, 아래 항구 야경(높이), 위쪽 가운데 빈 공간

## 대화 32 — 컷 · 히마리 시점 (분홍) (6장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`G.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color pink (#e0679a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: On her own 5th-floor apartment balcony at night, high above the ground; far below, the harbor town lights. a 9-year-old girl with brown twin tails tied with pink ribbons, a pink t-shirt with a piano-key pattern, a denim overall skirt (suspender skirt) and white sneakers (never barefoot, never a floral dress) stands on the balcony floor and reaches out with a startled face as a music-note hairpin (accent color) slips out of her hair and flies in the wind toward the white emergency partition board at the side of the balcony. The hairpin flies sideways toward the partition and the neighbor's balcony, low over the railing (NOT up into the sky).

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/himari_normal.png

> 꼭 보여야 할 것: 날아가는 음표 머리핀(포인트 색), 바닥에 선 아이(멜빵 치마·운동화), 칸막이 쪽, 아래 항구 불빛

**`H.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: NOT a ground-floor garden: this is a narrow concrete balcony on the 5th floor, high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious. At the end of the balcony right beside the white emergency partition board, a 9-year-old girl with brown twin tails tied with pink ribbons, a pink t-shirt with a piano-key pattern, a denim overall skirt (suspender skirt) and white sneakers (never barefoot, never a floral dress) has used a flowerpot as a step and climbed up onto the top of the railing, crouching there and stretching one arm down toward the narrow outer ledge just outside the railing, where her music-note hairpin lies, drawn large and clearly in the accent color. Her own hair has NO hairpin. Behind her, the balcony glass door is closed; on its lit curtain, the silhouette of a man sitting at a piano. Nobody else on the balcony. This is the SAME balcony as in the earlier panel where the piano teacher reaches out: the piano teacher's own 5th-floor balcony (the child crawled over from next door through the gap under the white emergency partition board), with his lit glass door and curtain, an air-conditioner unit, and the white partition board at the far end.
```

> 기준 이미지로 붙일 것: web/assets/portraits/himari_normal.png

> 꼭 보여야 할 것: 화분을 디딤돌로 난간 위에 올라선 아이(멜빵 치마·운동화), 난간 바로 바깥 턱의 큰 머리핀(포인트 색, 머리엔 핀 없음), 칸막이, 닫힌 유리문 커튼의 피아노 앞 그림자, 아래 항구 야경(높이)

**`I.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: NOT a ground-floor garden: seen from the side on a narrow 5th-floor apartment balcony high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious. Beside the white emergency partition board, an adult's arm (light shirt sleeve) hooks a 9-year-old girl with brown twin tails tied with pink ribbons, a pink t-shirt with a piano-key pattern, a denim overall skirt (suspender skirt) and white sneakers (never barefoot, never a floral dress) and pulls her back down from the railing onto the balcony floor; she clutches her music-note hairpin in her fist, drawn clearly in the accent color (her hair has no hairpin). The adult, on the same balcony, has leaned so far out over the railing that his upper body tilts dangerously outward. This is the SAME balcony as in the earlier panel where the piano teacher reaches out: the piano teacher's own 5th-floor balcony (the child crawled over from next door through the gap under the white emergency partition board), with his lit glass door and curtain, an air-conditioner unit, and the white partition board at the far end. The room behind the glass door is EMPTY: no one at the piano and no silhouette on the curtain (the teacher is the one on the balcony now). The teacher stands on the balcony floor INSIDE the railing, only his upper body bent far out over it. The pink music-note hairpin is clearly visible gripped in the child's fist.
```

> 기준 이미지로 붙일 것: web/assets/portraits/himari_normal.png

> 꼭 보여야 할 것: 주먹에 쥔 머리핀(포인트 색), 아이를 끌어당기는 어른 팔, 바깥으로 기우는 어른, 칸막이, 아래 항구 야경(높이)

**`t_himari_1_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night in her room on the 5th floor: a 9-year-old girl with brown twin tails tied with pink ribbons, a pink t-shirt with a piano-key pattern, a denim overall skirt (suspender skirt) and white sneakers (never barefoot, never a floral dress) at her desk, looking out the window instead of at her homework; through the window, far below, the harbor town lights (high up, NO streetlamp or garden at eye level).
```

> 기준 이미지로 붙일 것: web/assets/portraits/himari_normal.png

> 꼭 보여야 할 것: (진실) 창밖을 보는 아이

**`t_himari_2_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: From inside the room through the open glass door, on a 5th-floor apartment balcony high above the ground at night; far below, the harbor town lights and the dark sea make the height obvious: a 9-year-old girl with brown twin tails tied with pink ribbons, a pink t-shirt with a piano-key pattern, a denim overall skirt (suspender skirt) and white sneakers (never barefoot, never a floral dress) stands at her own balcony railing right beside the white emergency partition board and stares past the partition at her music-note hairpin lying on the narrow outer ledge of the NEIGHBOR's balcony, drawn large in the accent color. Her own hair has no hairpin.
```

> 기준 이미지로 붙일 것: web/assets/portraits/himari_normal.png

> 꼭 보여야 할 것: (진실) 칸막이 너머 옆집 난간 바깥 턱의 큰 머리핀(포인트 색), 칸막이, 항구 야경(높이)

**`t_himari_3_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + pink (#e0679a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 9-year-old girl with brown twin tails tied with pink ribbons, a pink t-shirt with a piano-key pattern, a denim overall skirt (suspender skirt) and white sneakers (never barefoot, never a floral dress) crying under a blanket at night, eyes open and full of tears, sobbing, holding her music-note hairpin tightly against her chest, the pink hairpin clearly visible between her fingers. NOT asleep.
```

> 기준 이미지로 붙일 것: web/assets/portraits/himari_normal.png

> 꼭 보여야 할 것: (진실) 머리핀을 쥔 손

## 대화 33 — 컷 · 히마리 크레용 기억 (예외: 크레용 색) (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`AF.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: exception for this panel — it is a child's crayon memory, so use a few bright crayon colors (yellow, pink, sky blue) with wobbly hand-drawn shapes, still made of chunky pixels. No text, no speech bubbles.

Scene: An old small apartment kitchen twelve years ago: a child's crayon drawing of three people stuck on a fridge (accent color on the drawing); through the window, a hillside cut by construction cranes and a glow of fire.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
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

Scene: At night: the SAME young man as his character portrait: a 21-year-old delivery worker with spiky bleached blond hair (taiga-accent; in panels whose accent color is not gold, draw the hair as very light grey, never dark) under a backwards black cap with a small star, a small silver ring earring, a black hooded delivery jacket with reflective stripes and a small cat patch on the sleeve, black wristbands, rolled sleeves bursting out of a stairwell into the dim entrance hall, shouting with a terrified face, both hands empty. Through the glass entrance door, a pitch-dark night street; no daylight anywhere. Leave empty space at the top center for a speech bubble.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/taiga_angry.png

> 꼭 보여야 할 것: 빈 손, 외치는 입, 위쪽 가운데 빈 공간

**`t_ookubo_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a chubby old security guard with a grey mustache in an olive uniform and cap proudly writing in a logbook at his desk, absurd sparkles and flowers around him (an exaggerated, self-flattering memory).
```

> 기준 이미지로 붙일 것: web/assets/portraits/ookubo_normal.png

> 꼭 보여야 할 것: 미화: 반짝이, 꽃

**`t_ookubo_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night: the SAME young man as his character portrait: a 21-year-old delivery worker with spiky bleached blond hair (taiga-accent; in panels whose accent color is not gold, draw the hair as very light grey, never dark) under a backwards black cap with a small star, a small silver ring earring, a black hooded delivery jacket with reflective stripes and a small cat patch on the sleeve, black wristbands, rolled sleeves running out of a stairwell, same outfit and delivery backpack as always, but his face is scribbled over with a crude horned monster doodle like a child's pen scribble (a prejudiced memory). He is not wearing a guard uniform. Through the glass entrance door, a pitch-dark night street lit only by a single streetlamp; no daylight, no white sky, no utility poles.
```

> 기준 이미지로 붙일 것: web/assets/portraits/taiga_angry.png

> 꼭 보여야 할 것: 낙서: 얼굴이 괴물 낙서, 밤

**`t_ookubo_2_truth.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night: the SAME young man as his character portrait: a 21-year-old delivery worker with spiky bleached blond hair (taiga-accent; in panels whose accent color is not gold, draw the hair as very light grey, never dark) under a backwards black cap with a small star, a small silver ring earring, a black hooded delivery jacket with reflective stripes and a small cat patch on the sleeve, black wristbands, rolled sleeves running out of a stairwell, face clearly visible, scared and about to cry, shouting. Through the glass entrance door, a pitch-dark night street lit by one streetlamp; no daylight.
```

> 기준 이미지로 붙일 것: web/assets/portraits/taiga_angry.png

> 꼭 보여야 할 것: (진실) 겁먹은 얼굴

**`t_ookubo_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + olive green (#6b8a5a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A dull impact on a flowerbed in front of an apartment building at night, seen from far away: a puff of dust and crushed flowers. No person is visible.
```

> 꼭 보여야 할 것: 화단의 충격

## 대화 35 — UI 스킨 (9장)

한 대화에서 차례로 만들어 스타일을 맞춘다. 크기는 정확히 지키고, 9-slice 틀은 모서리 밖 가장자리가 똑같이 반복되게.

**`ui_textbox.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game. Anime-style character design. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and a little checkerboard dithering. Clean dark outlines. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Pixel art UI element for a mystery visual novel whose UI is made of manga manuscript panels. Only two surfaces: off-white manuscript paper (#efeadf) and solid black ink (#141418), plus a grey screentone dot pattern (round dots on a 6px grid). Perfectly square corners, no rounded corners, no ornaments, no flourishes, no paper clips, no gradients, no glow, no translucency, no gold. Borders are clean straight ink lines of whole pixels. Crisp pixel art at native resolution, upscaled exactly 3x with nearest-neighbor, no anti-aliasing, no text, no letters. Flat front view, no perspective, transparent background outside the element.

A narration caption box, 288x144, like a black caption panel in a manga: solid black ink fill with a 3-pixel off-white paper border, and a 2-pixel hard black offset shadow on the bottom and right edges. 9-slice friendly: identical 24x24 square corners, uniform straight edges, plain flat black center so it can stretch.
```

**`ui_textbox_dark.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

The same caption box as a quieter narration variant, 288x144: black ink fill with a very sparse off-white screentone (small dots) and a 2-pixel grey (#b6b1a4) border. 9-slice friendly: 24x24 square corners, uniform edges, plain center.
```

**`ui_name.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A speaker name tab, 144x48: off-white paper rectangle with a 3-pixel black ink border and a 2-pixel hard black offset shadow; the bottom 4 pixels inside the border are a plain mid-grey band (the game tints it). 9-slice friendly: 12x12 square corners, uniform edges, plain center.
```

**`ui_button.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A button that looks like a single manga panel, 144x48: off-white paper filled with light grey screentone dots, 3-pixel black ink border, 3-pixel hard black offset shadow on the bottom and right. 9-slice friendly: 12x12 square corners, uniform edges, plain screentone center.
```

**`ui_button_hot.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

The same panel button in its hovered state, 144x48: inverted to solid black ink with a 3-pixel off-white border and the same hard offset shadow. 9-slice friendly.
```

**`ui_button_red.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

The rebuttal button, 144x48: flat red (#e0383e) panel with a 3-pixel black ink border, hard black offset shadow, and a few short white manga speed lines only inside the corners. 9-slice friendly: 12x12 square corners, uniform edges, plain red center.
```

**`ui_panel.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A large manuscript sheet for menus and the case notebook, 288x288: off-white paper with a 4-pixel black ink panel border, a faint light-blue non-photo-blue guide line inset 8 pixels inside the border (like manga manuscript paper), and a 6-pixel hard black offset shadow. 9-slice friendly: 36x36 square corners, uniform edges, plain paper center.
```

**`ui_icons.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A horizontal strip of 8 icons, each exactly 96x96 (32x32 native), evenly spaced with transparent background, drawn as solid black ink shapes with off-white highlights only (no color), in this order from left to right: 1 a small notebook, 2 a stack of speech balloons (log), 3 a single play triangle (auto), 4 a double fast-forward arrow (skip), 5 a gear (settings), 6 a magnifying glass, 7 an ink bottle, 8 headphones.
```

**`ui_objection.png`
```
같은 UI 스타일(크림색 원고지, 검은 잉크 테두리, 금색 포인트, 3배 도트)로 다음 요소를 만들어줘. 글자 없이, 투명 배경.

A wide cut-in banner background, 1536x512, for the moment the hero rebuts a witness: black and red manga speed lines radiating from the left on off-white paper, coarse screentone burst, torn paper edges at top and bottom. Leave the middle empty and calm for text that will be overlaid by the game. No characters, no text.
```

## 대화 36 — 이벤트 CG (11장)

상반신 이미지를 기준으로 첨부해 같은 얼굴로 그린다. 배경 7장과 같은 도트 스타일.

**`cg_shiori.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. At night on the narrow concrete balcony of an old apartment, beside a white emergency partition board, a 16-year-old girl with long straight black hair, blunt bangs, a bookmark hairpin and an old navy sailor uniform stands still and points toward the neighbor's balcony, pale and faintly translucent, while an androgynous young investigator with messy short black hair and a lavender hair clip, oversized grey hoodie under a long beige trench coat in the foreground looks at her, startled. Cool moonlight, warm light from the neighbor's window.
```

**`cg_taiga_run.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. Night street of a harbor town. a young delivery worker with spiky bleached blond hair under a backwards black cap, black uniform with reflective stripes sprints across the road toward a brightly lit convenience store, a dead smartphone in his hand, teeth clenched, motion lines. Seen from behind at a low angle.
```

**`cg_rescue.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. The true moment, seen from the side at night: on a gentle man in his early 30s with glasses and a light shirt's own 5th-floor balcony beside the white emergency partition, he leans far out over the railing and pulls a 9-year-old girl with brown twin tails tied with pink ribbons, a pink t-shirt with a piano-key pattern, a denim overall skirt (suspender skirt) and white sneakers back from the top of the railing with one arm; she clutches a small music-note hairpin in her fist. Harbor lights far below. His body tilts dangerously outward over the railing. Tense, but warm and protective.
```

**`cg_page.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. In a quiet hospital corridor at dawn, an androgynous young investigator with messy short black hair and a lavender hair clip, oversized grey hoodie under a long beige trench coat holds up a finished manga page made of six panels that tell the true story of the night, looking at it with a calm, tired face, a cheerful young detective girl with an orange-brown side ponytail and sky-blue scrunchie, navy suit jacket and sky-blue ribbon tie peeking over the shoulder. Soft morning light from a window.
```

**`cg_cafe.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. Inside a small cozy cafe on a hill at sunset, called Yohaku: an elegant 61-year-old cafe owner with silver hair in a bun and round gold glasses, cream blouse and linen apron behind the counter places a cup of sweet coffee in front of an androgynous young investigator with messy short black hair and a lavender hair clip, oversized grey hoodie under a long beige trench coat, and a cheerful young detective girl with an orange-brown side ponytail and sky-blue scrunchie, navy suit jacket and sky-blue ribbon tie beside them smiles brightly. Warm orange light, harbor and sea through the window.
```

**`cg_encore.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. An empty small live house at night with the house lights off: on the stage, lit by a single white spotlight, a 19-year-old girl vocalist with long blue hair with two small braided loops, a black cap with a small white bird mascot and an oversized white stage jacket sits on an amp and sings alone with an acoustic guitar; in the empty first row of the audience floor, an 18-year-old girl bassist with long silver-white hair with pink tips, a black beret with white flowers and a long black coat and a 21-year-old girl drummer with short navy-black undercut hair and an open cobalt work shirt sit side by side listening, an empty folding chair with a black suit jacket draped over it beside them.
```

**`cg_twins.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. Late at night in a closed retro pastry shop: her identical twin sister with long navy hair and a cream ribbon on the LEFT side, a pastry shop apron sits on the stairs crying, and a 19-year-old girl with long navy hair and a cream ribbon on the RIGHT side, charcoal on her left hand kneels in front of her holding both her hands; their cream ribbons on opposite sides. Warm dim light from the cake showcase.
```

**`cg_carry.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. A burning old bathhouse entrance at night, fire and embers: a 44-year-old woman in a grey work jacket with her hair tied back with an orange hair tie walks out of the smoke carrying a 78-year-old bathhouse owner in a soot-stained white undershirt on her back, her face and neck sooty, gritting her teeth; red fire-engine lights sweep across the scene.
```

**`cg_sota.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. Six years ago, at night, at the foot of a smoky library staircase lit by fire: a young police officer in his twenties with a kind face and a shining police badge hoists a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger, a half-conscious teenager, onto his back; his police badge glints. Right beside them, a 16-year-old girl with long straight black hair, blunt bangs, a bookmark hairpin and an old navy sailor uniform lets go of Rei's arm and looks back up the smoky stairs.
```

**`cg_margin.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. Rei sitting at the burned reading table of the lighthouse library at dawn, holding a pen for the first time in six years, drawing in the last empty panel of a manuscript page; a faint translucent Shiori leans over the table smiling, the sea shining through the round window.
```

**`cg_farewell.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Event illustration (CG) for a key story moment, horizontal 1536x1024, full color, same faces as the character portraits. At the tip of the cape at sunrise, translucent Shiori in her old sailor uniform smiles and waves as she scatters into light, Rei and Koharu standing hand in hand watching, the ruined lighthouse library behind.
```

## 대화 37 — 타이틀 키아트 (1장)

상반신 이미지를 기준으로 첨부해 같은 얼굴로 그린다.

**`key.png`
```
이미지를 만들어줘. 최고 화질로, 색을 줄이지 말고.

High-quality, highly detailed pixel-art style illustration at the full 1536x1024 resolution, like the key visual of a premium modern pixel-art visual novel: crisp fine pixel detail, rich lighting and color, clean anime faces. Late-summer Japanese harbor town mood, slightly melancholic and warm. No text, no letters, no watermark, no UI.

Character design in the style of modern Japanese anime mobile gacha games (subculture style): large expressive eyes with bright highlights, small nose and mouth, attractive and cute face, slim stylish proportions, glossy hair with highlight strands, vivid but harmonious colors, fashionable outfit with small accessories, clear and appealing silhouette. Female characters mostly have long, flowing hair. Adult women (18 and over) have attractive, curvy-but-slim figures and slightly alluring gacha-style fashion (fitted clothes, bare shoulders or midriff, short skirts or shorts, thigh-high socks) — stylish and flirty, never explicit, no nudity, no underwear. Characters under 18 are drawn modestly and age-appropriately. Keep it as crisp low-resolution pixel art, not a smooth illustration.

Key visual illustration for the title screen of a mystery visual novel. Late-summer harbor town at night, seen from a sloped street with old apartment buildings, warm window lights and the sea with harbor lights in the distance. On the right half: an androgynous 22-year-old investigator, messy short black hair with one ahoge and a small lavender hair clip, sleepy violet-grey eyes, oversized grey hoodie under a long beige trench coat. standing in front, looking back over the shoulder at the viewer with a calm sleepy expression, and a cheerful 20-year-old rookie detective girl, orange-brown side ponytail with a sky-blue scrunchie, navy suit jacket over a white shirt with a sky-blue ribbon tie, navy pants, white sneakers. slightly behind, smiling. Several translucent black-and-white manga panels float in the air around them like scattered memories, each showing a faint scene from the same night. The left 40% of the image is calm, darker night sky and street with no important details, reserved for the title text. No text, no letters, no logo.
```

## 대화 38 — 컷 · 핀 시점 (5장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2A.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color lavender purple (#a07ad8). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First song of a live show in the mid-size live hall (about 800 capacity, main floor plus a balcony, a high ceiling with a big lighting truss and a metal catwalk, a raised stage), seen from the bassist's position at stage left: the back of a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker wearing a white oversized stage jacket (accent color) at the center microphone, a modest crowd of silhouetted heads beyond her with gaps between them, the back wall and the lighting booth window close behind them. Star shapes projected on the stage floor. Above: a lighting rig (a metal truss with four stage lights and one pattern projector) hanging above the center of the stage, next to a metal catwalk railing about one meter away; the gap between the rig and the catwalk railing is clearly empty, nothing tied there.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 작은 지하 공연장(낮은 천장, 듬성듬성한 관객), 흰 재킷(포인트 색), 바닥의 별 무늬, 리그와 난간 사이가 비어 있음

**`2K.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + lavender purple (#a07ad8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A cramped dressing room: an 18-year-old girl bassist with long silver-white hair with pink tips, a black beret with white flowers and a long black coat with wide sleeves hugging a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker, who is crying, in the lower left. In the upper right, a wall monitor drawn large (about a third of the panel): it shows the stage covered in haze with blue standby light, and on the catwalk a dark human silhouette bent over the lighting rig with both hands at the railing. At the silhouette's left wrist, a big bright square glint with a four-point sparkle (accent color — the only colored thing in the panel), clearly readable even at small size.
```

> 기준 이미지로 붙일 것: web/assets/portraits/pin_normal.png, web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 크게 그린 벽 모니터, 헤이즈와 캣워크 위 그림자, 손목의 큰 사각 반짝임(포인트 색, 작게 봐도 보이게)

**`t_pin_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + lavender purple (#a07ad8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A sparkling, flattering memory: a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker shining with glitter and flowers, looking cool and noble; the man she argues with is only a blurry grey silhouette.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 미화: 반짝이, 흐린 상대

**`t_pin_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + lavender purple (#a07ad8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A sparkling memory: an 18-year-old girl bassist with long silver-white hair with pink tips, a black beret with white flowers and a long black coat with wide sleeves and a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker sitting side by side in front of a dressing room mirror, smiling, everything covered in glitter and hearts.
```

> 기준 이미지로 붙일 것: web/assets/portraits/pin_normal.png, web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 미화: 거울 앞 두 사람

**`t_pin_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + lavender purple (#a07ad8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A sparkling memory: a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker doing an 18-year-old girl bassist with long silver-white hair with pink tips, a black beret with white flowers and a long black coat with wide sleeves's makeup, laughing; flowers and glitter cover the whole panel, including the wall behind them.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png, web/assets/portraits/pin_normal.png

> 꼭 보여야 할 것: 미화: 벽까지 덮은 반짝이

## 대화 39 — 컷 · 루루 시점 (8장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2B.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color vermilion orange (#e4572e). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: During the MC between songs, plain bright white light floods the whole stage with no pattern: a white oversized stage jacket (accent color) flying through the air toward the audience, just thrown by a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker in a black tank top (a girl: long blue hair, black cap with a small white bird mascot — same design as her portrait). At the right edge, between the dark wing curtains, a black suit sleeve and hand waving "back, step back". The place is the same mid-size live hall as the other panels: a high black ceiling with a big lighting truss and a metal catwalk, a raised stage, a main floor plus a balcony, about 800 capacity.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 공중의 재킷(포인트 색), 무늬 없는 흰빛, 윙 커튼 틈의 검은 소매 손짓

**`2H.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Under harsh white fluorescent work lights hanging from the low ceiling (clearly visible) on the catwalk: a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker (in a grey hoodie over her stage clothes, cap on; long straight sky-blue hair drawn as light grey, NOT short, NOT curly, NOT brown) grabs a clamp of the lighting rig with both hands, her side face gritting her teeth, angry and tearful. Right next to the clamp, a big tight knot of strap tying the rig to the railing, clearly visible. Leave empty space at the top right for a speech bubble.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 클램프를 붙잡은 손, 클램프 옆 큰 매듭, 작업등, 오른쪽 위 빈 공간

**`2P.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night in front of a rehearsal studio on a city street: a man in a plain black suit with neat short black hair holds out a sheet of paper to a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker in casual clothes (an oversized hoodie, the same long hair with braided loops and the same bird cap). The paper shows a record label logo (accent color). Ruru looks hurt.
```

> 기준 이미지로 붙일 것: web/assets/portraits/kirishima_normal.png, web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 밤거리, 사복 루루, 종이의 레코드사 로고(포인트 색)

**`t_ruru_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + vermilion orange (#e4572e) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a man in a plain black suit with neat short black hair turning away on a dark street in front of a rehearsal studio. In front of him, a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker in an oversized hoodie (long straight hair with braided loops and the bird cap, NOT short curly hair), but her face is scribbled over completely black with crude pen scribbles (self-hatred).
```

> 기준 이미지로 붙일 것: web/assets/portraits/kirishima_normal.png, web/assets/portraits/ruru_normal.png

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

> 기준 이미지로 붙일 것: web/assets/portraits/kirishima_normal.png

> 꼭 보여야 할 것: (진실) 손을 뻗는 키리시마의 다급한 얼굴

## 대화 40 — 컷 · 아오이 시점 (2장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2C.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color cobalt blue (#3a78c9). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Seen from behind the drum kit (cymbals in the foreground with the drummer's hands, accent color on the drumsticks): the stage floor is covered with wavy stripe patterns of light. a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker without her jacket, in a black tank top, sings. Above her, a lighting rig (a metal truss with four stage lights and one pattern projector) hanging above the center of the stage, next to a metal catwalk railing about one meter away, perfectly still. The place is the same mid-size live hall as the other panels: a high black ceiling with a big lighting truss and a metal catwalk, a raised stage, a main floor plus a balcony, about 800 capacity.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 물결 줄무늬, 재킷 없는 루루, 정지한 리그

**`2E.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + cobalt blue (#3a78c9) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: The moment of the fall, seen from the drum riser: no light pattern anymore, the stage suddenly dark. a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker pushed sideways and falling down, and in her place the back of a man in a black suit, with the lighting rig crashing down onto him. Dust and broken light. The place is the same mid-size live hall as the other panels: a high black ceiling with a big lighting truss and a metal catwalk, a raised stage, a main floor plus a balcony, about 800 capacity.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 무늬 없음, 밀려 넘어지는 루루, 정장의 등, 떨어지는 리그

## 대화 41 — 컷 · 쿠라모치 시점 (6장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2D.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color amber (#d9a21b). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: From inside the lighting booth through its glass window: the stage below covered in a grid pattern of light; above it a lighting rig (a metal truss with four stage lights and one pattern projector) hanging above the center of the stage, next to a metal catwalk railing about one meter away, its beams crooked and trembling with shake lines. In the foreground a gloved hand tightly gripping a radio transceiver (accent color). The place is the same mid-size live hall as the other panels: a high black ceiling with a big lighting truss and a metal catwalk, a raised stage, a main floor plus a balcony, about 800 capacity.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 격자 무늬, 비뚤어진 빔과 떨림 선, 무전기를 쥔 장갑 손(포인트 색)

**`2M.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + amber (#d9a21b) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: From inside the lighting booth through the glass: on the hazy catwalk across the room, a glamorous woman about forty (smooth face, no wrinkles) with a tight dark updo and a tailored wine-colored suit stuffs a strap into her jacket pocket and looks straight at the viewer, putting a finger to her lips. Her a very large square wristwatch glints (accent color).
```

> 기준 이미지로 붙일 것: web/assets/portraits/tendo_smile.png

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

## 대화 42 — 컷 · 키리시마 시점 (5장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2F.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color teal green (#3aa58a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Afternoon rehearsal, seen from the first row of an empty audience floor looking up at the stage: a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker in a grey hoodie doing a mic check. Above, on the metal catwalk, a woman lighting technician with a long low ponytail, a headset and thick black work gloves points at a clamp of the lighting rig. In the foreground, on the viewer's knee, a clipboard checklist (accent color) still blank: the rows are not filled in yet, no circle and no marks. Empty seats beside. The same small basement live house (low black ceiling, knee-high stage, about 150 capacity), house lights on, no stage lighting patterns.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png, web/assets/portraits/kuramochi_normal.png

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

Scene: Peeking from the wing between dark curtains at the stage: wavy stripe light patterns on the floor, a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker without her jacket singing. Above, the lighting rig and the catwalk railing next to it: the railing is bare, no strap, no knot. In the foreground, a hand in a black suit sleeve holding a radio transceiver (accent color). The place is the same mid-size live hall as the other panels: a high black ceiling with a big lighting truss and a metal catwalk, a raised stage, a main floor plus a balcony, about 800 capacity.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 물결 무늬, 재킷 없는 루루, 매듭 없는 난간, 손의 무전기(포인트 색)

**`2L.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal green (#3aa58a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A backstage corridor during rehearsal (music notes coming from the stage side): a glamorous woman about forty (smooth face, no wrinkles) with a tight dark updo and a tailored wine-colored suit waving her hand dismissively, wearing a very large square wristwatch (big and clearly visible). In the foreground, a man's hand holds out a checklist with a big circle marked on it (accent color). Leave empty space at the top center for a speech bubble.
```

> 기준 이미지로 붙일 것: web/assets/portraits/tendo_smile.png

> 꼭 보여야 할 것: 손을 내젓는 텐도, 큰 사각 손목시계, 동그라미 친 점검표(포인트 색), 무대 쪽 음표, 위쪽 빈 공간

**`2N.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal green (#3aa58a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view bursting out of the stage wing onto the stage: grid patterns of light on the floor, a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker WITHOUT her white jacket (she threw it to the crowd earlier; black tank top only) mid-jump at the center, and above her the lighting rig tilting and about to fall. The viewer's own hand in a black suit sleeve reaches out toward her (accent color on the radio in the other hand). Leave empty space at the top center for a speech bubble. The place is the same mid-size live hall as the other panels: a high black ceiling with a big lighting truss and a metal catwalk, a raised stage, a main floor plus a balcony, about 800 capacity.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 격자 무늬, 점프하는 루루, 기우는 리그, 뻗은 손, 위쪽 빈 공간

## 대화 43 — 컷 · 텐도 시점 (5장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`2T.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color magenta (#b0306a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Close-up on the catwalk: two hands untying the ratchet strap from the lighting rig, a very large square wristwatch (accent color) on the left wrist. Far below, the stage is covered in thick haze lit by blue standby lights.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 끈을 푸는 두 손, 큰 사각 손목시계(포인트 색), 아래 무대의 헤이즈와 대기 조명

**`t_tendo_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + magenta (#b0306a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A backstage corridor: a glamorous woman about forty (smooth face, no wrinkles) with a tight dark updo and a tailored wine-colored suit smiling pleasantly. The speech bubble area of the person talking to her is a blank white hole, as if erased.
```

> 기준 이미지로 붙일 것: web/assets/portraits/tendo_smile.png

> 꼭 보여야 할 것: 생략: 상대 말풍선 자리 하얀 여백

**`t_tendo_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + magenta (#b0306a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An exaggerated memory: a gigantic a 19-year-old girl vocalist with the same design as her portrait: waist-length straight hair with blunt bangs and two small braided loops at each side (sky-blue in color art, so a light-to-mid grey tone in a grey panel, never black, never short), a black newsboy cap tilted to one side with a small round white bird plush on its brim, a black ribbon choker shaking the lighting rig on the catwalk. The rig is at eye level, and in the lower left foreground the diagonal steel handrail of a staircase cuts across the panel, clearly visible.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ruru_normal.png

> 꼭 보여야 할 것: 과장: 거대한 루루, 앞쪽의 비스듬한 계단 난간, 눈높이의 리그

**`t_tendo_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + magenta (#b0306a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a glamorous woman about forty (smooth face, no wrinkles) with a tight dark updo and a tailored wine-colored suit sitting calmly in an office chair at a live house office, reading documents, a very large square wristwatch on her wrist.
```

> 기준 이미지로 붙일 것: web/assets/portraits/tendo_smile.png

> 꼭 보여야 할 것: 사무실 의자의 텐도

**`t_tendo_3b.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + magenta (#b0306a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Seen from the top of a steel staircase: the lighting rig in front; the railing right beside the rig is blank white, as if erased.
```

> 꼭 보여야 할 것: 생략: 리그 옆 난간 자리 하얀 여백

## 대화 44 — 컷 · 스즈네 시점 (12장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`3A.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color teal (#38a3a5). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: A pastry shop front at night: a 19-year-old girl with long dark navy hair and a ribbon, wearing a pastry shop apron with the ribbon on her RIGHT side pulls down the shop shutter by its handle; a "closed" sign at her feet. A round wall clock inside clearly shows 8:50. At the bottom of the panel, her ankle wrapped in a big white bandage above her sneaker (accent color), clearly visible.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/yuki_normal.png, web/assets/portraits/nagi_normal.png

> 꼭 보여야 할 것: 오른쪽 리본, 벽시계 8:50, 발목의 큰 붕대(포인트 색)

**`3B.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At the register counter at night, the shop shutter already down behind: close view of a hand writing in a ledger with a pen held in the RIGHT hand while the left hand holds down a stack of bills. A thick cash envelope (accent color) on the counter. No clock or time display visible.
```

> 꼭 보여야 할 것: 내려간 셔터, 오른손으로 쥔 펜, 매상 봉투(포인트 색), 시계 없음

**`3G.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night at the foot of a steep wooden staircase in a pastry shop: a man lies on the floor with his glasses fallen beside him; a 19-year-old girl with long dark navy hair and a ribbon, wearing a pastry shop apron stands frozen, hands over her mouth. The top of the staircase is pitch dark (the upstairs bulb is out); light comes only from the shop below. A wall clock clearly shows 9:15. Her ankle with a white bandage (accent color) is visible.
```

> 기준 이미지로 붙일 것: web/assets/portraits/yuki_normal.png, web/assets/portraits/nagi_normal.png

> 꼭 보여야 할 것: 쓰러진 남자와 안경, 깜깜한 계단 위, 벽시계 9:15, 발목 붕대(포인트 색)

**`3H.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Close-up of a trembling hand holding a smartphone; the screen shows a call to 119 in progress. No clock or time visible. Behind the hand, the leg of the register counter and a bandaged ankle (accent color).
```

> 꼭 보여야 할 것: 휴대폰 화면 119 통화, 붕대 발목(포인트 색), 시계 없음

**`3K.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Daytime in a pastry shop: a RIGHT hand pins a weekly shift chart on the wall (accent color on the chart). Bright sunlight through the window makes the cake showcase shine. No clock visible.
```

> 꼭 보여야 할 것: 낮, 근무표(포인트 색), 오른손, 햇빛

**`3E.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night in an art prep school studio: a girl at an easel draws a plaster bust with charcoal held in her LEFT hand (accent color on the charcoal). A wall clock clearly shows 9:00. Under the easel, her bare ankles in sandals, no bandage.
```

> 꼭 보여야 할 것: 왼손 목탄(포인트 색), 벽시계 9:00, 샌들 신은 맨 발목

**`3F.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A night train platform: a girl with an art portfolio bag looks at a smartphone held in her LEFT hand; the screen shows an unsent message, the recipient name hidden under her thumb (accent color). A big station clock shows 9:25.
```

> 꼭 보여야 할 것: 역 시계 9:25, 왼손의 휴대폰(포인트 색)

**`t_yukin_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A pastry shop at night: a 19-year-old girl with long dark navy hair and a ribbon, wearing a pastry shop apron with the ribbon on her RIGHT side stands in front of the half-closed shutter, one hand on the shutter handle, a ballpoint pen in her apron pocket, a "closed" sign beside her feet. At the very bottom of the panel, her ankle with a white bandage is visible (accent color), as if she did not notice it was in the picture. A wall clock in the corner.
```

> 기준 이미지로 붙일 것: web/assets/portraits/yuki_normal.png, web/assets/portraits/nagi_normal.png

> 꼭 보여야 할 것: 오른쪽 리본, 화면 아래 붕대 발목(포인트 색), 셔터 손잡이, 벽시계

**`t_yukin_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A flattering, sparkling memory: a hand neatly placing a cash envelope into a shining safe, with sparkles and flowers around it (accent color on the envelope).
```

> 꼭 보여야 할 것: 미화: 반짝이는 금고와 봉투

**`t_yukin_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A hand pressing 1-1-9 on a smartphone at night in a pastry shop; the left half of the panel, where whatever came before would be, is left completely blank white, as if erased.
```

> 꼭 보여야 할 것: 생략: 119를 누르는 손, 왼쪽 절반이 하얀 여백

**`t_nagi_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A girl in an apron holds a smartphone to her ear; where the wall clock should be, there is a blank white hole as if erased (accent color on the phone).
```

> 꼭 보여야 할 것: 생략: 벽시계 자리 하얀 여백, 휴대폰(포인트 색)

**`t_nagi_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + teal (#38a3a5) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An empty steep wooden staircase in a pastry shop at night, nobody in sight. The shop light from below lights only the lowest steps; the second floor at the top is pitch dark.
```

> 꼭 보여야 할 것: 아무도 없는 계단, 아래만 밝고 위는 깜깜함

## 대화 45 — 컷 · 하세가와 시점 (2장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`3C.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color burnt orange (#c4703a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First-person view from the MIDDLE of a steep wooden staircase, looking UP at night. At the top, in the dark doorway of the second-floor storage room (its bulb is out), a woman wrapped in a black shawl covered with star sequins snatches a thick cash envelope (accent color) and turns away; the star sequins on the shawl glitter. The only light comes from the shop BELOW, so her shadow stretches upward onto the ceiling. In the lower part of the panel, the viewer's own empty hand reaches upward, the wrist watch clearly showing 9:10.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/madoka_smile.png

> 꼭 보여야 할 것: 계단 중간에서 올려다봄, 어두운 2층 문간의 별무늬 숄, 봉투(포인트 색), 위로 뻗은 빈손과 손목시계 9:10, 아래에서 비친 불빛

**`3D.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + burnt orange (#c4703a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Blurry first-person view from the floor at the foot of a staircase: a 19-year-old girl with long dark navy hair and a ribbon, wearing a pastry shop apron stands frozen holding a smartphone in both hands, trembling, not calling: the phone screen is black and her fingers are not touching it. Behind her the top of the staircase is pitch dark. No clock visible. Her bandaged ankle (accent color) is near the viewer.
```

> 기준 이미지로 붙일 것: web/assets/portraits/yuki_normal.png, web/assets/portraits/nagi_normal.png

> 꼭 보여야 할 것: 흐릿한 시야, 휴대폰을 쥔 점원, 깜깜한 계단 위, 붕대(포인트 색), 시계 없음

## 대화 46 — 컷 · 두부집 할머니 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`3J.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color khaki green (#8f9a4a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: View over a tofu shop counter into a night shopping arcade: a woman wrapped in a black shawl covered with star sequins runs out of a narrow back alley, the star sequins on the shawl glittering (accent color). On the tofu shop wall, a clock clearly shows 9:22.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/madoka_smile.png, web/assets/portraits/tofu_normal.png

> 꼭 보여야 할 것: 뒷골목에서 뛰어나오는 별무늬 숄(포인트 색), 두부집 시계 9:22

**`t_tofu_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + khaki green (#8f9a4a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Inside a tofu shop at night: the wall clock clearly shows 9:00; across the arcade, a shutter coming down with a rattling sound effect drawn as lines.
```

> 기준 이미지로 붙일 것: web/assets/portraits/tofu_normal.png

> 꼭 보여야 할 것: 두부집 벽시계 9:00, 건너편 셔터

**`t_tofu_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + khaki green (#8f9a4a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A night shopping arcade seen from a tofu shop: a glittering shawl edge disappears into a narrow alley (accent color on the sparkle). The tofu shop clock shows 9:20.
```

> 기준 이미지로 붙일 것: web/assets/portraits/tofu_normal.png

> 꼭 보여야 할 것: 골목으로 사라지는 반짝이는 숄 자락, 시계 9:20

**`t_tofu_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + khaki green (#8f9a4a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A girl with the ribbon on her RIGHT side waves cheerfully from a pastry shop doorway in the evening.
```

> 꼭 보여야 할 것: 오른쪽 리본 점원이 손을 흔듦

## 대화 47 — 컷 · 마도카 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`F1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color violet (#7d4fd1). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Drawn like a tarot-card vision with a thin ornate border, but it is a real memory: view looking DOWN a steep staircase from its dark top. At the bottom, in the bright shop, a 19-year-old girl with long dark navy hair and a ribbon, wearing a pastry shop apron with the ribbon on her RIGHT side holds out a cash envelope, and a man's hand reaches in to take it. A banister post at the edge of the panel. No clock visible. Accent color on the envelope.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/yuki_normal.png, web/assets/portraits/nagi_normal.png

> 꼭 보여야 할 것: 타로 테두리, 어두운 계단 위에서 내려다봄, 봉투를 건네는 오른쪽 리본 점원과 받는 남자 손(포인트 색)

**`F2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + violet (#7d4fd1) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Drawn like a tarot-card vision with a thin ornate border: first-person view in the dark doorway at the top of a staircase; a hand in an apron sleeve grabs a cash envelope (accent color); the shop light glows at the bottom of the stairs. IMPORTANT: the hand and sleeve are a visibly pasted-on patch: its screentone dots are clearly denser and a different size than the rest of the panel, with a faint hand-shaped cut line around it.
```

> 꼭 보여야 할 것: 타로 테두리, 어두운 문간, 봉투를 쥔 앞치마 소매의 손(포인트 색), 손 부분만 스크린톤 점이 다르고 오린 선이 보임

**`F3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + violet (#7d4fd1) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Drawn like a tarot-card vision with a thin ornate border: at the top of a staircase, a hand in an apron sleeve pushes the shoulder of a man climbing up. The only light comes from the shop at the bottom of the stairs, so the banister and the man cast shadows that stretch UPWARD on the wall, EXCEPT the pushing hand's shadow which clearly falls DOWNWARD. Accent color on the hand.
```

> 꼭 보여야 할 것: 타로 테두리, 미는 손(포인트 색), 아래에서 비친 불빛, 손 그림자만 반대 방향

**`t_madoka_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + violet (#7d4fd1) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Inside a tarot booth: tarot cards on a purple cloth, a customer's hands across the table, star fairy lights (accent color on the cards).
```

> 꼭 보여야 할 것: 부스의 타로 카드와 손님의 손

## 대화 48 — 컷 · 하야카 시점 (7장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4A.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color rose red (#e85d75). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Inside an old bathhouse at night (the window behind is pitch dark), the brightly lit front counter: an old man in a bathhouse happi coat shouts angrily across the counter, purchase documents on the counter (accent color), a few pairs of customers' sandals on the shoe shelf. No clock.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 불 켜진 카운터, 소리치는 할아버지, 매입 서류(포인트 색), 신발장의 손님 신발

**`4E.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night from a dark alley corner: a tired woman in a grey work jacket with her hair tied back stands alone at a fence holding a flashlight (accent color), looking left and right down the alley; behind her, the boiler room back door is half open with nobody outside it, and inside the small boiler room window two headlamp lights are moving. No clock.
```

> 기준 이미지로 붙일 것: web/assets/portraits/keiko_normal.png

> 꼭 보여야 할 것: 울타리 앞 손전등(포인트 색)을 든 엄마, 반쯤 열린 뒷문(문 밖엔 아무도 없음), 보일러실 창 안의 헤드랜턴 불빛 두 개

**`4K.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An unnaturally white windowless counseling room: across a white table, a white-gloved hand slides a document toward the viewer; on the wall, a logo of an empty speech bubble (accent color) and a plain wall clock showing 9:00.
```

> 꼭 보여야 할 것: 창 없는 하얀 방, 흰 장갑, 빈 말풍선 로고(포인트 색), 벽시계 9시

**`t_hayaka_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a schoolgirl walking out of an old bathhouse at night, the door closing behind her.
```

> 꼭 보여야 할 것: 목욕탕을 나서는 뒷모습

**`t_hayaka_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + rose red (#e85d75) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A manga panel that has been neatly cut out with scissors: the whole inside is empty white, with faint white glove fingerprints on the edge and a tiny sliver of an alley wall corner left in one corner.
```

> 꼭 보여야 할 것: 삭제: 오려 낸 빈 칸, 가장자리의 흰 장갑 자국, 귀퉁이의 담벼락 조각

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

## 대화 49 — 컷 · 케이코 시점 (6장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4B.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color warm orange (#d4883a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: At night behind a bathhouse fence; all the bathhouse windows are dark: first-person view of the viewer's own hands receiving a flashlight (accent color) from a gloved hand with an abstract company logo on the glove. Far away, festival lanterns; a clock tower shows 10:30.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 건네받는 손전등(포인트 색), 장갑의 로고, 꺼진 목욕탕 창, 시계탑 10:30, 축제 등불

**`4F.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night by a fence: smoke and sparks burst out of a small boiler room window of a bathhouse (accent color on the sparks), smoke spreading over the chimney. No clock.
```

> 꼭 보여야 할 것: 보일러실 창의 불꽃(포인트 색), 굴뚝 위 연기

**`4G.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view pushing through a bathhouse changing-room curtain into thick smoke, the viewer's hands in thick work gloves reaching forward; deep inside, a coughing sound effect shape (accent color).
```

> 꼭 보여야 할 것: 연기 속으로 젖히는 포렴, 기침 소리 모양(포인트 색)

**`4M.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A hospital room at dawn: bandaged hands hold an old man's hand on the bed (accent color on the bandages). The window is just getting light. No clock.
```

> 꼭 보여야 할 것: 붕대 감은 손(포인트 색), 막 밝아 오는 새벽 창

**`t_keiko_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A tidy kitchen at night, a woman sitting alone at the table with a single cup and a dark phone; a grey work jacket with its company patch torn off hangs on the chair.
```

> 꼭 보여야 할 것: 부엌에 혼자 앉은 여자, 컵 하나와 꺼진 휴대폰, 패치 뗀 작업복

**`t_keiko_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + warm orange (#d4883a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A panel completely blurred as if covered by thick smoke; shapes cannot be recognized.
```

> 꼭 보여야 할 것: 흐림: 연기처럼 흐린 컷

## 대화 50 — 컷 · 무라세 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4C.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color dark red (#a03a3a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First-person view at night: a hand turning a key (accent color) in the back door of a boiler room; beside it, the work boots of another person standing close; a tool bag on the ground; far off by the fence, a tiny flashlight glow. No clock or watch visible.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 열쇠(포인트 색), 옆 사람의 작업화, 공구 가방, 멀리 손전등 불빛

**`4J.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + dark red (#a03a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Inside a construction site office at night: through the window, a bathhouse burning with fire truck lights in front of it; a man's hand holds a phone to his ear. On the wall calendar, a red circle (accent color) around the end of the month. No clock.
```

> 꼭 보여야 할 것: 창밖 불길과 소방차 불빛, 귀에 댄 휴대폰, 달력의 동그라미(포인트 색)

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

## 대화 51 — 컷 · 오카모토 시점 (8장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4D.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color moss green (#7a9a3a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Looking down from a second-floor window at night: two men in yellow safety helmets with an abstract company logo walk in through the open back door of a bathhouse (accent color on the helmets); the front one carries a tool bag, the second one's helmet has a white visitor sticker. In the corner of the alley, a small figure of a schoolgirl. On the window sill, a table clock shows 10:45.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 헬멧 둘(포인트 색), 열린 뒷문, 골목 모퉁이 교복 차림, 탁상시계 10:45

**`4I.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Looking down from a second-floor window at night at the front of a burning bathhouse: someone carries an old man on their back out of the flames, face hidden by smoke, only hair tied back visible; no fire trucks yet. In the foreground, the viewer's own old hand on the window sill holds a phone showing a call screen and 23:15 (accent color).
```

> 꼭 보여야 할 것: 창에서 본 노인을 업고 나오는 사람(얼굴은 연기에 가림), 아직 소방차 없음, 창틀의 내 손과 휴대폰 23:15(포인트 색)

**`4L.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Early evening in a community hall, the window still red with sunset: elderly people under a protest banner (no readable letters), one front-row chair (accent color). No clock.
```

> 꼭 보여야 할 것: 노을 지는 창, 반대 모임, 맨 앞자리 의자(포인트 색)

**`t_okamoto_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An exaggerated, frightened memory: two gigantic shadowy figures as tall as houses smash through a bathhouse back gate at night.
```

> 꼭 보여야 할 것: 과장: 집채만 한 그림자 둘

**`t_okamoto_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + moss green (#7a9a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At night, back view of a small schoolgirl squeezed between two men in safety helmets, all three walking into the open back door of a bathhouse together.
```

> 꼭 보여야 할 것: 헬멧 둘 사이에 끼어 뒷문으로 들어가는 교복

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

## 대화 52 — 컷 · 겐조 시점 (1장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`4H.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color steel blue (#5a8fbf). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Blurry first-person view through smoke, being carried on someone's back: a sooty nape and an orange hair tie (accent color) right in front; above, a burning ceiling beam.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 흐린 시야, 업어 준 사람의 그을린 목덜미와 머리끈(포인트 색), 불타는 들보

## 대화 53 — 컷 · 코하루 시점 (8장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`5Ae.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color bright orange (#f2a14a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: A small apartment that looks ransacked before dawn: a broken door off its hinges, an overturned desk, pulled-out drawers, papers everywhere, a streetlight through the window on the left. IMPORTANT: it is an edited picture: the desk's shadow falls to the right, but the door's shadow falls to the left, toward the light, and the edge of the pasted door area shows a faint seam line (accent color on the scattered papers).

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 편집: 어질러진 방, 문 그림자 방향이 반대, 이음매

**`5A.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Before dawn in a tidy small apartment, the window still pitch dark: under a desk lamp, a hand writes a memo at a neat desk; next to it, a scorched police badge (accent color). No clock.
```

> 꼭 보여야 할 것: 깜깜한 창, 스탠드 불빛, 메모 쓰는 손, 그을린 경찰 배지(포인트 색)

**`5Be.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A library newspaper room: a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie reads an old newspaper while two men in black stand right behind her. IMPORTANT: edited picture: the two men are pasted in, their screentone dots are clearly larger (bean-sized vs rice-sized on a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie), with a faint seam around them.
```

> 기준 이미지로 붙일 것: web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 편집: 남자 둘의 스크린톤 점이 코하루보다 굵음, 이음매

**`5B.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A library newspaper room, wall clock 9:00: close view of an old newspaper about a lighthouse library fire (headline: one schoolgirl and one police officer dead, one high school student rescued) with a photo of a young police officer (accent color on the photo), held by a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie's hands.
```

> 기준 이미지로 붙일 것: web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 오래된 신문의 순경 사진(포인트 색), 벽시계 9:00

**`5Ce.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A bus stop in front of a glass headquarters: several white-gloved hands drag a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie into a white van. IMPORTANT: edited picture: the gloved hands have unnaturally smooth clean lines unlike the rest, with a visible seam where they were pasted.
```

> 기준 이미지로 붙일 것: web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 편집: 매끈한 흰 장갑 손들, 이음매

**`5C.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A bus stop in front of a glass headquarters: a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie sits on the bench smiling while typing on her phone; the screen shows a short sent message (accent color). A small star-shaped charm hangs from the bag on her lap. No clock.
```

> 기준 이미지로 붙일 것: web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 웃으며 문자 보내는 코하루, 휴대폰 화면(포인트 색), 가방의 별 모양 참

**`5De.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Inside an abandoned warehouse: a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie tied to a chair, stacked crates nearby. IMPORTANT: edited picture: there is only one ceiling lamp, yet each of the four chair legs casts two shadows (eight leg shadows in total, in two directions), while the crates cast only one shadow each.
```

> 기준 이미지로 붙일 것: web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 편집: 전등 하나인데 의자 다리 그림자가 여덟 개

**`5D.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + bright orange (#f2a14a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Dusk at the harbor: first-person view walking alone toward an abandoned warehouse, the viewer's long shadow stretching ahead; at the half-open shutter, a woman with long silver-white hair, a black eyepatch, white gloves and a long white coat waits (accent color on her coat). Orange sky. No clock.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ren_smile.png

> 꼭 보여야 할 것: 혼자 걸어가는 시점, 긴 그림자, 셔터 앞의 흰 코트(포인트 색)

## 대화 54 — 컷 · 타나베 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`5Ee.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color slate blue (#5a7a9a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: View from a guard booth window at noon: a woman with long silver-white hair, a black eyepatch, white gloves and a long white coat drags a girl by the arm. The gate pillar, the girl and her bag cast short shadows. IMPORTANT: edited picture: the white-coated figure has no shadow at all.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ren_smile.png

> 꼭 보여야 할 것: 편집: 흰 코트만 그림자가 없음

**`5E.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + slate blue (#5a7a9a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: View from a guard booth window at noon: among office workers streaming out for lunch, a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie stands alone (nobody holding her) and calmly asks for directions with a clear, untroubled face (accent color on her), phone in one hand; the guard's own hand at the edge of the window points toward the harbor; the charm loop on her bag is empty. The guard's wristwatch shows 12:10.
```

> 기준 이미지로 붙일 것: web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 혼자 길을 묻는 아가씨(포인트 색), 빈 가방 고리, 손목시계 12:10

**`t_tanabe_0.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + slate blue (#5a7a9a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: View from a guard booth window at noon: office workers with ID lanyards stream out of the headquarters gate for lunch; the guard's wristwatch lies on the window frame.
```

> 꼭 보여야 할 것: 점심시간 정문 앞, 창틀의 손목시계 (사실 증언)

**`t_tanabe_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + slate blue (#5a7a9a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A girl crying on a bus stop bench, hugging her bag; a bus timetable beside the bench, a drink can rolled near her feet. Her face area is unnaturally smooth like a different drawing pasted in.
```

> 꼭 보여야 할 것: 편집: 매끈하게 붙인 우는 얼굴

## 대화 55 — 컷 · 렌 시점 (7장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`5F.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color ice blue (#6ac0d0). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Inside an abandoned warehouse: an old table with two teacups, one empty; across the table, a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie holds out a scorched police badge with both hands, asking earnestly (accent color on the teacups). Purple evening sky through a gap in the shutter.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 찻잔 둘, 하나는 빔(포인트 색), 배지를 내미는 코하루, 보랏빛 하늘

**`6Y6.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Outside a burning lighthouse library on a lawn at night: first-person view with one hand covering one eye; flames have swallowed every upper floor window (accent color on the flames); fire engine lights spill across the grass.
```

> 꼭 보여야 할 것: 한쪽 눈을 가린 손, 위층을 모두 삼킨 불길(포인트 색), 경광등 불빛

**`t_ren_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a woman with long silver-white hair, a black eyepatch, white gloves and a long white coat pulls a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie by the wrist into a warehouse through a half-open shutter, one ceiling lamp inside. The area around the wrist has noticeably thicker lines than the rest (a pasted seam).
```

> 기준 이미지로 붙일 것: web/assets/portraits/ren_smile.png, web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 편집: 손목 둘레만 굵은 선

**`t_ren_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: An afternoon breakwater: a woman with long silver-white hair, a black eyepatch, white gloves and a long white coat and a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie sit side by side on tetrapods; a scorched police badge on a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie's lap, seagulls, a low sun.
```

> 기준 이미지로 붙일 것: web/assets/portraits/ren_smile.png, web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 방파제에 나란히 앉은 렌과 코하루, 무릎의 배지 (사실 증언)

**`t_ren_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A 16-year-old high school student sick in bed with fever; medicine packets and a glass of water by the pillow, a school uniform hanging on the wall; a wall calendar where the date square has a different paper texture, as if a different date was pasted over it.
```

> 꼭 보여야 할 것: 편집: 달력 날짜 칸만 질감이 다름

**`t_ren_1b.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 20-year-old rookie detective girl with long orange-brown hair in a high ponytail tied with a sky-blue scrunchie, a navy blazer and a light blue tie behind iron bars inside a warehouse, gripping the bars; a padlock on the bar door, one ceiling lamp. The single lamp hangs straight above the bars, so their shadows should fall short and straight down, but the bar shadows on the floor stretch long and slanted to one side (a pasted seam).
```

> 기준 이미지로 붙일 것: web/assets/portraits/koharu_normal.png

> 꼭 보여야 할 것: 편집: 창살 그림자가 어긋남

**`t_ren_2b.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + ice blue (#6ac0d0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A 16-year-old in a school uniform running alone between burning bookshelves, back view.
```

> 꼭 보여야 할 것: 편집: 불타는 서가 사이로 달아나는 고등학생

## 대화 56 — 컷 · 소타 시점 (4장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`6Y1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color navy blue (#3a5aa0). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Six years ago at night: first-person view from a bicycle on a cape road, looking up at a lighthouse-shaped library with smoke from one ground-floor window. A wristwatch shows 8:20 (accent color).

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 6년 전, 1층 창의 연기, 손목시계 8:20(포인트 색)

**`6Y2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + navy blue (#3a5aa0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view kicking open the library front door into low smoke between tall bookshelves (accent color on the door); beside the door a clear notice board with a big arrow: emergency exit closed for construction, this door only. Deep inside, a spiral staircase leading up. No clock.
```

> 꼭 보여야 할 것: 연기 속 서가, 문(포인트 색), 문 옆 「비상구 공사 중」 안내판, 안쪽 깊숙이 계단

**`6Y3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + navy blue (#3a5aa0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view in smoke at the foot of a spiral staircase deep inside the library, far from the front door; the top of the stairs glows red. Hands pull up a 16-year-old high school student (a teenager, not a small child) with messy short black hair, a school uniform with an oversized hoodie over it, and an ink stain on the right index finger, collapsed on the first step, onto the viewer's back; the ink stain on the teenager's right index finger is clearly visible (accent color).
```

> 기준 이미지로 붙일 것: web/assets/portraits/rei_normal.png

> 꼭 보여야 할 것: 정문에서 먼 계단 아래, 고등학생을 업음, 오른손 검지 잉크 얼룩(포인트 색)

**`6Y5.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + navy blue (#3a5aa0) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view with empty hands, turning back into the library; fire has now spread to the bookshelves just inside the door; from the floor above, a speech shape of a girl's voice (accent color).
```

> 꼭 보여야 할 것: 빈손으로 다시 연기 속으로, 입구 서가까지 번진 불, 위층의 목소리(포인트 색)

## 대화 57 — 컷 · 쿠로가네 시점 (1장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`6Y4.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color strawberry pink (#e07a9a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: Outside the library front door at night: first-person view helping a half-conscious a 16-year-old high school student (a teenager, not a small child) with messy short black hair, a school uniform with an oversized hoodie over it, and an ink stain on the right index finger down from a young police officer in uniform's back and holding them up by the shoulder; on the viewer's wrist, a watch stopped at 8:31 (accent color).

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/rei_normal.png

> 꼭 보여야 할 것: 순경 등에서 고등학생을 받아 부축, 8:31에 멈춘 손목시계(포인트 색)

## 대화 58 — 컷 · 레이 시점 (12장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`R1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color  (#6b5fa8). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First-person view at a library reading table by a round window at night: the viewer's right hand inks a manga page with a pen (accent color on the pen); across the table, a 16-year-old girl with long straight black hair, blunt bangs, a bookmark hairpin and an old navy sailor uniform reads a manuscript aloud. A wall clock by the window shows 7:30.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/shiori_normal.png

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

Scene: First-person view running down a spiral staircase in a lighthouse library at night, leaving a stack of manuscript pages behind on the landing (accent color on the pages). No clock.
```

> 꼭 보여야 할 것: 계단을 뛰어 내려감, 두고 온 원고(포인트 색)

**`R4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A bench at the tip of a cape at night: the viewer's knees and arms, face buried; the lighthouse beam sweeps over the sea (accent color on the beam). A wristwatch on the viewer's wrist shows 8:15.
```

> 꼭 보여야 할 것: 곶 끝 벤치, 등대 불빛(포인트 색), 손목시계 8:15

**`R5.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view at night from a cape bench, turning back toward a lighthouse library with smoke spreading below its upper windows, starting to run toward it (accent color on the smoke glow). No clock.
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

Scene: Very blurry first-person view of a teenager half-conscious at the foot of a smoky staircase: a girl's hand that held the viewer's arm over her shoulder slips away, and a young police officer's broad back lifts the viewer up (accent color on the girl's sleeve). No clock.
```

> 꼭 보여야 할 것: 흐린 시야, 부축하던 손이 떨어지고 순경의 등이 받아 올림(포인트 색)

**`R8.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Blurry first-person view of a teenager leaning with one arm over an adult man's shoulder, being walked away from a burning library door at night, looking back over the shoulder; through the open door, inside at the foot of the staircase, a girl's small silhouette climbs back up the stairs and a police officer's cap runs in after her (accent color on the girl's silhouette). No clock.
```

> 꼭 보여야 할 것: 어깨에 기대 멀어짐, 뒤돌아본 문 안 계단을 오르는 그림자와 순경 모자(포인트 색)

**`RF.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Night, a rusty wire fence on the tip of a cape: a right hand lays a bouquet of white chrysanthemums at the foot of the fence (accent color on the flowers); a dark ink stain on the right index finger is clearly visible. The same hand and fence repeated as five faint overlapping layers, only the flower colors differ; in the last layer the hand lifts a phone.
```

> 꼭 보여야 할 것: 국화를 내려놓는 오른손, 검지의 잉크 자국(크게), 다섯 겹, 마지막에 휴대폰

**`t_self_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Two manga panels joined: a 16-year-old running down stairs, and immediately next to it, a girl's hand falling away; a very thin seam line between the two panels.
```

> 꼭 보여야 할 것: 편집: 뛰쳐나감과 떨어지는 손이 붙은 이음매

**`t_self_4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger standing alone in front of a burning lighthouse library at night, nobody else in sight.
```

> 기준 이미지로 붙일 것: web/assets/portraits/rei_normal.png

> 꼭 보여야 할 것: 불타는 도서관 앞에 혼자 선 레이

**`t_self_5.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#6b5fa8) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Six August wall calendars overlapped like stacked panels: on every one, the box for the 31st is blank white as if cut out, while the other days have small handwritten notes. No people.
```

> 꼭 보여야 할 것: 여섯 장 겹친 8월 달력, 31일 칸만 하얗게 빔

## 대화 59 — 컷 · 시오리 시점 (8장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`S1.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color  (#c84a6a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: First-person view reading a manuscript aloud at a library table at night; across the table, a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger draws, the pen tip moving (accent color on the manuscript). No clock.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 기준 이미지로 붙일 것: web/assets/portraits/rei_normal.png

> 꼭 보여야 할 것: 읽어 주는 원고(포인트 색), 맞은편에서 그리는 레이

**`S2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Back view of a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger turning away, holding a contest application form with a struck-out field (accent color on the form). No clock.
```

> 기준 이미지로 붙일 것: web/assets/portraits/rei_normal.png

> 꼭 보여야 할 것: 돌아선 레이의 등, 그어진 응모 서류(포인트 색)

**`S3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A lonely library reading table at night, the chair across pushed back: the last page of a manuscript is completely blank (accent color on the page edge). No clock.
```

> 꼭 보여야 할 것: 밀려난 의자, 백지인 마지막 장(포인트 색)

**`S4.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Looking down from a library stair landing into a dark ground-floor book stack: a pile of newspapers on the floor, an open back door at the far end, and the flame of a silver lighter (accent color) lighting up the side of the face of a man in a black suit with slicked-back hair. The face must be large and clear. No clock.
```

> 기준 이미지로 붙일 것: web/assets/portraits/nishimura_normal.png

> 꼭 보여야 할 것: 라이터 불빛(포인트 색)에 비친 남자의 옆얼굴, 신문지 더미, 열린 뒷문

**`S5.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view at a library reading table: hurriedly sketching a man's face in pencil on the back of a manuscript page (accent color on the pencil); hazy smoke beyond the window; a metal box with an open lid under the bookshelf nearby. No clock.
```

> 꼭 보여야 할 것: 원고 뒷면에 얼굴을 그림(포인트 색), 서가 아래 철제 상자

**`S6.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view in smoke on a staircase: pulling the arm of a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger, collapsed on the steps, over the viewer's shoulder to lift them up (accent color on the viewer's sleeve). No clock.
```

> 기준 이미지로 붙일 것: web/assets/portraits/rei_normal.png

> 꼭 보여야 할 것: 쓰러진 레이를 부축해 일으킴(포인트 색)

**`S7.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: At the foot of a library staircase in smoke: a young police officer who just ran in takes a 16-year-old with messy short black hair, an oversized hoodie and an ink stain on the right index finger, half-conscious, onto his back; the viewer's hands let go (accent color on the badge). The officer's wristwatch shows 8:28.
```

> 기준 이미지로 붙일 것: web/assets/portraits/rei_normal.png

> 꼭 보여야 할 것: 순경이 레이를 업음, 배지(포인트 색), 손목시계 8:28

**`S8.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 +  (#c84a6a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: First-person view from the foot of a smoky staircase, looking up toward the upper floor and stepping onto the first stair; behind, through the open front door, the silhouette of a police officer running back in (accent color on the officer's cap). No clock.
```

> 꼭 보여야 할 것: 계단을 다시 올려다봄, 뒤에서 뛰어 들어오는 순경(포인트 색)

## 대화 60 — 컷 · 아사기리 시점 (6장)

같은 포인트 색 컷끼리 한 대화에서 만들어 팔레트를 맞춘다.

**`AC.png`
```
이미지를 만들어줘. 진짜 도트(픽셀아트)여야 해. 고해상도 일러스트처럼 그리지 마.

Authentic low-resolution pixel art, like a PC-98 era Japanese adventure game screenshot. Native resolution about 320x213 pixels, upscaled with nearest-neighbor to 1536x1024 so every pixel is a clearly visible square block. No anti-aliasing, no smooth gradients, no fine details smaller than one pixel. Shading only with flat colors and checkerboard dithering.

Palette: 8 grey levels from black to white, and one accent color coffee brown (#8a5a3a). Black-and-white manga panel feel with screentone made of dither patterns. No text, no speech bubbles.

Scene: A small cafe at night after closing, chairs on the tables, one warm lamp over the counter: a teenager with messy short black hair and an oversized hoodie stands at the counter, head bowed, wet chrysanthemum petals on the sleeve (accent color on the lamp light). Faint overlapping layers show the same figure slightly taller each time.

Every person in the panel is drawn ON-MODEL from their attached character portrait reference image: the same face, hairstyle, outfit and accessories, in the same anime gacha-game art style. Use realistic proportions for their age: adults and teenagers have long legs and a normal head-to-body ratio (about 1:7 for adults); NOT chibi, NOT super-deformed, NOT baby-faced, NOT younger than their age. Only real children (like a 9-year-old girl) look like children. Keep the important objects big and readable even when the panel is shown small. Horizontal 1536x1024 PNG.
```

> 꼭 보여야 할 것: 문 닫은 카페, 고개 숙인 레이, 소매의 국화 꽃잎, 해마다 겹친 모습

**`t_asagiri_0.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + coffee brown (#8a5a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A rainy night at a small retro cafe door: a 16-year-old high school student (a teenager, not a small child) with messy short black hair, a school uniform with an oversized hoodie over it, and an ink stain on the right index finger stands soaked in a school uniform with a bandage on the forehead; one warm lamp behind the counter.
```

> 기준 이미지로 붙일 것: web/assets/portraits/rei_normal.png

> 꼭 보여야 할 것: 비 오는 밤 카페 문가의 젖은 고등학생 레이 (사실 증언)

**`t_asagiri_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + coffee brown (#8a5a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: Close view over a cafe counter: six nearly identical layers of the same moment stacked like translucent pages — a woman's hand offers a cup of sweet coffee with steam, two sugar cubes on the saucer, wood grain of the counter. Same angle, same steam in every layer; only the pale ring mark on the ring finger fades a little more in each layer (accent color).
```

> 꼭 보여야 할 것: 6겹 같은 장면, 약지 반지 자국만 겹마다 옅어짐(포인트 색)

**`t_asg_1.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + coffee brown (#8a5a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A spotless official fire report document on a desk, perfectly neat.
```

> 꼭 보여야 할 것: 말끔한 소방 보고서

**`t_asg_2.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + coffee brown (#8a5a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A glossy resort development rendering pinned on a corkboard: a hotel standing on the tip of a cape where a lighthouse-shaped library should be, a red stamp in the corner reading land secured. Clean, corporate, no people.
```

> 꼭 보여야 할 것: 리조트 조감도: 곶 끝 호텔, 귀퉁이 「용지 확보 완료」 도장

**`t_asg_3.png`
```
같은 도트 스타일, 같은 픽셀 크기, 같은 팔레트(회색 8단계 + coffee brown (#8a5a3a) 하나)로 다음 컷을 그려줘. 글자와 말풍선 없이, 중요한 물건은 크게, 가로 1536x1024.

Scene: A cafe counter at night, spotless; the wall behind is completely empty.
```

> 꼭 보여야 할 것: 아무것도 걸리지 않은 벽
