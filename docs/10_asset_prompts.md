# 10. ChatGPT 이미지 프롬프트 목록 (1장)

ChatGPT로 뽑은 이미지를 **아래 파일명 그대로** `web/assets/` 폴더에 넣으면 게임이 임시 그림 대신 그 이미지를 쓴다. 새로고침만 하면 바로 바뀐다.

```
web/assets/
├─ portraits/   캐릭터 상반신 (투명 배경 PNG)
├─ bg/          배경
└─ cuts/        잔상 컷 (만화 컷)
```

## 0. 작업 순서 (중요)

AI 이미지는 **같은 캐릭터를 여러 장 뽑으면 얼굴이 조금씩 달라진다.** 그래서 순서가 중요하다.

1. **캐릭터마다 설정화(레퍼런스 시트)를 먼저 한 장 뽑는다.** (아래 1절)
2. 마음에 드는 설정화가 나오면, **같은 대화창에서** 그 이미지를 기준으로 표정별 상반신을 뽑는다.
   - 예: "방금 그 캐릭터 그대로, 표정만 놀란 얼굴로. 허리 위 상반신, 투명 배경, 세로 1024×1536."
3. 배경과 컷은 **공통 스타일 문장**을 매번 붙인다.
4. 저장할 때 파일명을 표대로 바꾼다. (예: `rei_normal.png`)

## 1. 공통 스타일 (모든 프롬프트 앞에 붙이기)

```
Anime-style pixel art in the style of a modern visual novel, crisp visible pixels, limited 32-color palette,
clean dark outlines, soft cel shading, late-summer Japanese harbor town mood, slightly melancholic and warm.
No text, no letters, no watermark, no UI.
```

## 2. 캐릭터 설정화 (먼저 뽑기)

각 캐릭터 한 장씩. 정면 전신 + 얼굴 클로즈업이 같이 있는 설정화로 뽑는다.

| 캐릭터 | 프롬프트 (공통 스타일 뒤에 붙이기) |
|---|---|
| 레이 | Character reference sheet of an androgynous 22-year-old investigator, sleepy half-closed eyes with dark circles, messy short black hair, oversized grey hoodie under a worn beige trench coat, holding a canned coffee, pen callus on right index finger. Navy and lavender accent colors. Full body front view plus face close-up. |
| 코하루 | Character reference sheet of a cheerful 20-year-old rookie detective girl, orange-brown side ponytail tied with a sky-blue hair tie, big bright eyes, navy suit jacket with white shirt and white sneakers, a notebook covered in stickers. Sunny orange and sky-blue accent colors. Full body front view plus face close-up. |
| 쿠로가네 | Character reference sheet of a tired 47-year-old police chief, rumpled white shirt, loose tie, grey stubble, holding a strawberry lollipop stick in his mouth, old wristwatch. Iron grey and strawberry pink accents. |
| 토와 | Chibi avatar of a hacker shown only on a monitor screen: small 2-head-tall character with cat-ear headphones, wrapped in a cream blanket like a cape, green monitor glow. Reference sheet with several expressions. |
| 아사기리 | Character reference sheet of a gentle 61-year-old cafe owner woman, silver-grey hair in a bun, round glasses, linen apron, warm smile. Cream and coffee brown palette. |
| 오오쿠보 | Character reference sheet of a talkative 63-year-old apartment security guard, grey hair, olive green guard uniform and cap, chubby friendly face. |
| 타이가 | Character reference sheet of a 21-year-old delivery worker who looks like a delinquent, bleached blond hair, sharp narrow eyes, black delivery uniform with a cap, intimidating face but kind eyes. |
| 히마리 | Character reference sheet of a 9-year-old girl, brown twin tails, a small music-note hairpin, pink t-shirt, shy expression. |
| 시오리 | Character reference sheet of a 16-year-old girl in an old navy sailor school uniform, long straight black hair, a bookmark-shaped hairpin on her bangs, barefoot, faintly translucent like a screentone ghost. |

## 3. 캐릭터 상반신 (게임에 들어가는 것)

규격: **세로 1024×1536, 투명 배경 PNG, 허리 위 상반신, 화면을 향해 살짝 비스듬히.**
프롬프트: `Same character as the reference, waist-up portrait, transparent background, 1024x1536, expression: (표정)`

| 파일명 (`portraits/`) | 표정 |
|---|---|
| `rei_normal.png` | sleepy, indifferent, half-closed eyes |
| `rei_serious.png` | eyes open, focused and sharp |
| `rei_surprised.png` | eyes wide, startled |
| `koharu_normal.png` | friendly smile |
| `koharu_happy.png` | big cheerful grin, eyes closed with joy |
| `koharu_worried.png` | worried, eyebrows raised, hand near chest |
| `kurogane_normal.png` | tired, lollipop in mouth |
| `towa_normal.png` | smug chibi on a monitor frame (모니터 테두리 포함) |
| `asagiri_normal.png` | warm gentle smile, holding a coffee cup |
| `ookubo_normal.png` | proud, confident, arms crossed |
| `ookubo_flustered.png` | flustered, sweating, eyes darting |
| `taiga_angry.png` | defensive glare, arms crossed |
| `taiga_sad.png` | ashamed, looking down, biting lip |
| `himari_normal.png` | shy, hiding half behind a door |
| `himari_crying.png` | crying, clutching something in her fist |

## 4. 배경

규격: **가로 1536×1024**, 캐릭터가 설 수 있게 화면 아래쪽은 비교적 단순하게.

| 파일명 (`bg/`) | 프롬프트 (공통 스타일 뒤에) |
|---|---|
| `office.png` | Basement storage room turned into a tiny police office, cardboard evidence boxes stacked high, an old sofa, an electric kettle, dim fluorescent light. Interior, eye level. |
| `guardroom.png` | Small security guard room on the first floor of an old apartment building, a tiny CRT TV showing baseball, a desk with a logbook, night outside the window. |
| `interrogate.png` | Police interrogation room, grey walls, metal table, a single desk lamp, one-way mirror. |
| `himari_door.png` | Apartment corridor on the 5th floor at night, a slightly opened front door with a name plate, warm light leaking out. |
| `hospital.png` | Quiet hospital corridor at night, benches along the wall, soft cold light. |
| `cafe.png` | Small cozy retro cafe on a hillside street, wooden counter, siphon coffee makers, warm evening light through the window. |
| `night.png` | Exterior of an old 6-story apartment building on a hill at night, balconies, a flowerbed below, city lights in the distance. |

## 5. 잔상 컷

규격: **가로 1536×1024.**
컷은 **흑백 만화 + 스크린톤 + 포인트 색 한 가지**로 통일한다. 포인트 색은 그 컷의 "시점 주인" 색.

컷 공통 문장 (공통 스타일 대신 이걸 쓴다):
```
A single black-and-white manga panel drawn in pixel art, screentone shading, bold ink lines,
only one accent color: (포인트 색). Dramatic framing. No text, no speech bubbles.
```

| 시점 | 포인트 색 |
|---|---|
| 타이가 | gold `#c9961a` |
| 미츠루 | blue `#3b8fd0` |
| 히마리 | pink `#e0679a` |
| 오오쿠보 | olive green `#6b8a5a` |

> **단서가 반드시 그림에 보여야 한다.** 표의 "꼭 보여야 할 것"을 프롬프트에 넣고, 빠지면 다시 뽑는다. (게임은 컷 아래에 설명 문장도 같이 띄워 주지만, 그림에서 보이는 게 훨씬 재밌다.)

### 내 컷

| 파일명 (`cuts/`) | 장면 | 꼭 보여야 할 것 |
|---|---|---|
| `A.png` | Delivery worker with a cardboard box under his arm pressing an apartment doorbell, view from his side | 옆구리에 낀 상자, 문틈에서 흘러나오는 음표(♪) |
| `B.png` | A gentle man with glasses lifting his hands off piano keys and turning toward a curtained balcony door | 멈춘 손, 커튼 너머 작은 그림자 |
| `C.png` | A man leaning through the gap of a balcony partition, reaching out desperately; beyond it a child's small feet on the railing | 칸막이, 뻗은 팔, 난간 위 작은 발, 바깥 턱의 반짝임 / **위쪽 가운데를 말풍선 자리로 비워 둘 것** |
| `D.png` | Delivery worker startled at an apartment door, turning back, cardboard box dropped on the floor | 바닥에 떨어진 상자, 놀란 얼굴 |
| `E.png` | Delivery worker bursting out of a stairwell shouting, terrified face, empty hands | 빈 손, 외치는 입 / **위쪽 가운데를 말풍선 자리로 비워 둘 것** |
| `F.png` | Close-up of a hand gripping a dead smartphone on a stairwell, empty battery icon on screen | 휴대폰 화면의 빈 배터리 |
| `G.png` | A music-note hairpin flying away in the wind from a little girl's hair on a balcony, her hand reaching | 날아가는 음표 머리핀, 바닥에 선 아이 |
| `H.png` | A little girl standing on a flowerpot, climbing the balcony railing, reaching for a hairpin caught on the outer ledge | 화분을 밟은 발, 난간, 바깥 턱의 머리핀 |
| `I.png` | An adult's arm pulling a little girl back to safety from the railing, the girl clutching the hairpin, the adult leaning outward | 손에 쥔 머리핀, 바깥으로 기우는 어른 |

### 증언 컷 (왜곡된 버전 + 진실 버전)

왜곡된 버전은 **그 감정이 보이게** 과장해서 뽑는다.

| 파일명 (`cuts/`) | 장면 | 왜곡 |
|---|---|---|
| `t_ookubo_1.png` | Security guard proudly writing in a logbook, sparkles and flowers around him | 미화: 반짝이, 꽃 배경 |
| `t_ookubo_2.png` | A figure running out of a stairwell, face scribbled over like a horned monster doodle | 낙서: 얼굴이 괴물 낙서 |
| `t_ookubo_2_truth.png` | The same delivery worker running out, face visible, scared and about to cry, shouting | (진실) |
| `t_ookubo_3.png` | A dull "thud" impact on a flowerbed at night, seen from a distance | — |
| `t_taiga_1.png` | First-person view pressing a doorbell, music notes coming through the door | — |
| `t_taiga_2.png` | An enormous impact effect filling the entire panel, the hallway tiny underneath | 과장 |
| `t_taiga_3.png` | A back view of someone going down stairs, with the face and hands area left completely blank white | 생략: 하얀 여백 |
| `t_taiga_3_truth.png` | Delivery worker on the stairs gripping a dead phone, biting his lip | (진실) |
| `t_himari_1.png` | Child's crayon drawing of a girl doing homework at a desk | 크레용 그림체 |
| `t_himari_1_truth.png` | The girl at her desk looking out the window instead of at her homework (normal manga style) | (진실) |
| `t_himari_2.png` | Child's crayon drawing of a girl at a window, the balcony drawn strangely huge | 크레용 그림체 |
| `t_himari_2_truth.png` | The girl looking at a hairpin caught on the balcony's outer ledge (normal manga style) | (진실) |
| `t_himari_3.png` | Child's crayon drawing of a blanket colored completely black, a tiny fist in the corner | 크레용, 새까맣게 칠함 |
| `t_himari_3_truth.png` | The girl crying under a blanket, holding a music-note hairpin tightly (normal manga style) | (진실) |

## 6. 탐색 맵과 걷는 캐릭터

탑뷰 맵과 걷는 도트 캐릭터는 **코드로 직접 그린다.** AI 이미지는 타일 격자와 걸음 프레임을 정확히 맞추기 어렵기 때문이다. 나중에 도트를 직접 찍거나 외주를 맡길 때 교체한다.
