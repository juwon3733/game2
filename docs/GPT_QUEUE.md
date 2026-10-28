# GPT 작업 순서표 (자동 생성: `node tools/gpt-queue.mjs`)

위에서부터 **한 줄 = 한 장**씩 만든다. 프롬프트는 `web/assets/prompts.json`에서 같은 id의 `prompt`를 그대로 쓴다.
- **설정화(reference sheet)는 만들지 않는다.** 모든 인물의 상반신이 이미 있다. 인물이 나오면 「첨부」 칸의 PNG를 이미지로 붙인다.
- **프롬프트에 없는 인물을 그리지 않는다.** 바깥·공공장소라면 멀리 작은 얼굴 없는 행인은 괜찮다(단서 근처, 등장인물로 보일 사람, 「nobody·empty·No people」 장면은 안 됨). 배경(bg)은 사람 없음. 나오는 인물은 첨부 상반신과 같은 머리색·나이로.
- **새 그림은 한 장당 한 번만** 만들고 다음 줄로. 빠진 게 있어도 올리고 PR 설명에 적는다. 맨 아래 「다시 받기」는 새 그림을 다 올린 뒤에 한다(이유를 고치는 게 목적, 최대 2번).
- 「확인」 칸: 그 장에서 틀리기 쉬운 것. 그리기 전에 읽고, 다 그린 뒤 하나씩 맞는지 본다.
- 묶음(장·종류)마다 PR 하나, 브랜치는 `assets/<첫 id>-<월일시분>`. 올리면 바로 다음 줄로.

## 5장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 1 | `5A` | cuts/5A.png | 다시: 손만이 아니라 다른 여자 전신이 나옴 → 메모 쓰는 손과 소매만, 사람 없음 | — | 깜깜한 창, 스탠드 불빛, 메모 쓰는 손, 그을린 경찰 배지(포인트 색) | 시계·손목시계 없음 |
| 2 | `6Y6` | cuts/6Y6.png | 다시: 죽은 시오리·렌 등 사람이 화재 앞에 서 있음 → 사람 없음, 한쪽 눈을 가린 손만 | — | 한쪽 눈을 가린 손, 위층을 모두 삼킨 불길(포인트 색), 경광등 불빛 | 1인칭: 보는 사람은 손·발만 · 밤 |
| 3 | `6Y5` | cuts/6Y5.png | 다시: 말풍선 대신 파란 풍선이 나옴 → 위층 계단에서 내려오는 빈 말풍선 모양 | — | 빈손으로 다시 연기 속으로, 입구 서가까지 번진 불, 위층의 목소리(포인트 색) | 1인칭: 보는 사람은 손·발만 |

## 종장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 4 | `R2` | cuts/R2.png | 다시: 금발 여자와 일본어 글자가 나옴 → 1인칭 손과 응모 서류만, 글자 없이 | — | 응모 서류의 칸을 긋는 손(포인트 색) | 1인칭: 보는 사람은 손·발만 |
| 5 | `R7` | cuts/R7.png | 다시: 레이를 놓는 손이 금발 소녀 → 시오리(검은 장발, 책갈피 핀, 남색 세일러복) 소매와 손 | portraits/shiori_normal.png | 흐린 시야, 부축하던 손이 떨어지고 순경의 등이 받아 올림(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 6 | `S3` | cuts/S3.png | 다시: 금발 여자가 앉아 있음 → 사람 없는 열람석, 원고 마지막 장이 백지 | — | 밀려난 의자, 백지인 마지막 장(포인트 색) | 시계·손목시계 없음 · 밤 |
| 7 | `t_asg_1` | cuts/t_asg_1.png | 다시: 군복 차림 여자가 나옴 → 사람 없이 책상 위 보고서만 | — | 말끔한 소방 보고서 |  |
| 8 | `t_asg_3` | cuts/t_asg_3.png | 다시: 손님과 바리스타가 나옴 → 사람 없는 카운터, 빈 벽 | — | 아무것도 걸리지 않은 벽 | 밤 |
| 9 | `AF` | cuts/AF.png | 다시: 풀컬러에 가족 셋이 나옴 → 회색+포인트 1색, 사람 없이 냉장고의 크레용 그림만 | — | 냉장고의 크레용 그림(포인트 색), 창밖 크레인과 불빛 |  |

## UI

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 10 | `ui_textbox` | ui/ui_textbox.png | 새로 | — |  |  |
| 11 | `ui_textbox_dark` | ui/ui_textbox_dark.png | 새로 | — |  |  |
| 12 | `ui_name` | ui/ui_name.png | 새로 | — |  |  |
| 13 | `ui_button` | ui/ui_button.png | 새로 | — |  |  |
| 14 | `ui_button_hot` | ui/ui_button_hot.png | 새로 | — |  |  |
| 15 | `ui_button_red` | ui/ui_button_red.png | 새로 | — |  |  |
| 16 | `ui_panel` | ui/ui_panel.png | 새로 | — |  |  |
| 17 | `ui_icons` | ui/ui_icons.png | 새로 | — |  |  |
| 18 | `ui_objection` | ui/ui_objection.png | 새로 | — |  |  |

## 다시 받기 (새 그림을 다 뽑은 뒤 마지막에)

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 19 | `F2` | cuts/F2.png | 다시: 마감 뒤(21:10)인데 아래 매장에 손님들이 앉아 있음 → 빈 매장, 손 부분 스크린톤 이음매는 그대로 | cuts/F2.png | 타로 테두리, 어두운 문간, 봉투를 쥔 앞치마 소매의 손(포인트 색), 손 부분만 스크린톤 점이 다르고 오린 선이 보임 | 1인칭: 보는 사람은 손·발만 · 밤 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 20 | `4E` | cuts/4E.png | 다시: 불 나기 전인데 케이코 손에 붕대 → 맨손 | portraits/keiko_normal.png | 울타리 앞 손전등(포인트 색)을 든 엄마, 반쯤 열린 뒷문(문 밖엔 아무도 없음), 보일러실 창 안의 헤드랜턴 불빛 두 개 | 시계·손목시계 없음 · 밤 · 44살로 |
| 21 | `4K` | cuts/4K.png | 다시: 상담원의 얼굴·몸이 보임 → 흰 장갑 손과 소매만, 얼굴은 화면 밖 | — | 창 없는 하얀 방, 흰 장갑, 빈 말풍선 로고(포인트 색), 벽시계 9시 | 시계 9:00 |
| 22 | `t_hayaka_4` | cuts/t_hayaka_4.png | 다시: 상담소에 벚꽃 핀 창 → 창 없는 하얀 방, 벽에 빈 말풍선 로고 | cuts/4K.png | 하얀 방, 서명하는 손 | 1인칭: 보는 사람은 손·발만 |
| 23 | `4J` | cuts/4J.png | 다시: 소방차 경광등이 불길과 같은 색이라 안 보임 → 흰 연기 아래 소방차 차체·사다리를 크게 | cuts/4J.png | 창밖 불길과 소방차 불빛, 귀에 댄 휴대폰, 달력의 동그라미(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 24 | `4D` | cuts/4D.png | 다시: 헬멧 둘이 문에서 나오는 방향 → 등을 보이며 문 안으로 들어가는 중 | portraits/hayaka_normal.png | 헬멧 둘(포인트 색), 열린 뒷문, 골목 모퉁이 교복 차림, 탁상시계 10:45 | 시계 10:45 · 밤 · 17살로 |
| 25 | `5Ee` | cuts/5Ee.png | 다시: 끌려가는 아가씨가 코하루가 아님(검은 단발) → 코하루, 흰 코트만 그림자 없음 | portraits/koharu_normal.png<br>portraits/ren_smile.png | 편집: 흰 코트만 그림자가 없음 | 20살로 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 26 | `okamoto_normal` | portraits/okamoto_normal.png | 다시: 30대처럼 젊고 가슴이 보임 → 68세 할머니(주름, 작은 체구, 단정한 옷) | portraits/okamoto_normal.png |  |  |
| 27 | `okamoto_angry` | portraits/okamoto_angry.png | 다시: 30대처럼 젊고 가슴이 보임 → 68세 할머니(주름, 작은 체구, 단정한 옷) | portraits/okamoto_angry.png |  |  |
| 28 | `murase_normal` | portraits/murase_normal.png | 다시: 20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리) | portraits/murase_normal.png |  |  |
| 29 | `murase_smile` | portraits/murase_smile.png | 다시: 20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리) | portraits/murase_smile.png |  |  |
| 30 | `murase_cornered` | portraits/murase_cornered.png | 다시: 20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리) | portraits/murase_cornered.png |  |  |
| 31 | `tanabe_normal` | portraits/tanabe_normal.png | 다시: 경찰 순경 복장(모자 휘장·호루라기) → 민간 경비업체 회청색 제복, 경찰 표시 없음 | portraits/tanabe_normal.png |  |  |
| 32 | `tanabe_confused` | portraits/tanabe_confused.png | 다시: 경찰 순경 복장 → 민간 경비업체 제복 | portraits/tanabe_normal.png |  |  |
| 33 | `towa_serious` | portraits/towa_serious.png | 다시: 고양이 귀·헤드폰·모니터 테두리가 빨강 → towa_normal과 같은 초록, 표정만 진지하게 | portraits/towa_normal.png |  |  |
| 34 | `2H` | cuts/2H.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 긴 파란 머리·새 인형 모자, 후드, 형광 작업등 | portraits/ruru_normal.png | 클램프를 붙잡은 손, 클램프 옆 큰 매듭, 작업등, 오른쪽 위 빈 공간 | 19살로 |
| 35 | `2P` | cuts/2P.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 얼굴·머리 | portraits/ruru_normal.png<br>portraits/kirishima_normal.png | 밤거리, 사복 루루, 종이의 레코드사 로고(포인트 색) | 밤 · 19살로 |
| 36 | `t_ruru_1` | cuts/t_ruru_1.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 얼굴·머리 | portraits/ruru_normal.png<br>portraits/kirishima_normal.png | 낙서: 루루 자신의 얼굴이 새까만 낙서 | 19살로 |
| 37 | `rei_normal` | portraits/rei_normal.png | 다시: serious와 같은 손가락질 자세 → 졸린 반쯤 감은 눈, 캔 커피를 든 무심한 자세 | portraits/rei_serious.png |  |  |
| 38 | `yuki_normal` | portraits/yuki_normal.png | 다시: 초록 앞치마(나기 옷) → 갈색 멜빵 앞치마, 연필은 왼손 | portraits/yuki_smile.png |  |  |
