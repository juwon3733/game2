# GPT 작업 순서표 (자동 생성: `node tools/gpt-queue.mjs`)

위에서부터 **한 줄 = 한 장**씩 만든다. 프롬프트는 `web/assets/prompts.json`에서 같은 id의 `prompt`를 그대로 쓴다.
- **설정화(reference sheet)는 만들지 않는다.** 모든 인물의 상반신이 이미 있다. 인물이 나오면 「첨부」 칸의 PNG를 이미지로 붙인다.
- **프롬프트에 없는 인물을 그리지 않는다.** 바깥·공공장소라면 멀리 작은 얼굴 없는 행인은 괜찮다(단서 근처, 등장인물로 보일 사람, 「nobody·empty·No people」 장면은 안 됨). 배경(bg)은 사람 없음. 나오는 인물은 첨부 상반신과 같은 머리색·나이로.
- **새 그림은 한 장당 한 번만** 만들고 다음 줄로. 빠진 게 있어도 올리고 PR 설명에 적는다. 맨 아래 「다시 받기」는 새 그림을 다 올린 뒤에 한다(이유를 고치는 게 목적, 최대 2번).
- 「확인」 칸: 그 장에서 틀리기 쉬운 것. 그리기 전에 읽고, 다 그린 뒤 하나씩 맞는지 본다.
- 묶음(장·종류)마다 PR 하나, 브랜치는 `assets/<첫 id>-<월일시분>`. 올리면 바로 다음 줄로.

## 4장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 1 | `4E` | cuts/4E.png | 새로 | portraits/keiko_normal.png | 울타리 앞 손전등(포인트 색)을 든 엄마, 반쯤 열린 뒷문(문 밖엔 아무도 없음), 보일러실 창 안의 헤드랜턴 불빛 두 개 | 시계·손목시계 없음 · 밤 · 44살로 |
| 2 | `4K` | cuts/4K.png | 새로 | — | 창 없는 하얀 방, 흰 장갑, 빈 말풍선 로고(포인트 색), 벽시계 9시 | 시계 9:00 |
| 3 | `t_hayaka_3` | cuts/t_hayaka_3.png | 새로 | — | 삭제: 오려 낸 빈 칸, 귀퉁이의 손전등 빛 자국 | 사람 없음 |
| 4 | `4B` | cuts/4B.png | 새로 | — | 건네받는 손전등(포인트 색), 장갑의 로고, 꺼진 목욕탕 창, 시계탑 10:30, 축제 등불 | 1인칭: 보는 사람은 손·발만 · 시계 10:30 · 밤 |
| 5 | `4F` | cuts/4F.png | 새로 | — | 보일러실 창의 불꽃(포인트 색), 굴뚝 위 연기 | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 6 | `4G` | cuts/4G.png | 새로 | — | 연기 속으로 젖히는 포렴, 기침 소리 모양(포인트 색) | 1인칭: 보는 사람은 손·발만 |
| 7 | `t_cross_4` | cuts/t_cross_4.png | 새로 | — | 열쇠함, 걸린 사본 열쇠(포인트 색), 그 고리 둘레만 먼지 없음 | 사람 없음 · 밤 |
| 8 | `4D` | cuts/4D.png | 새로 | portraits/hayaka_normal.png | 헬멧 둘(포인트 색), 열린 뒷문, 골목 모퉁이 교복 차림, 탁상시계 10:45 | 시계 10:45 · 밤 · 17살로 |
| 9 | `t_cross_3` | cuts/t_cross_3.png | 새로 | — | 보일러실 창의 불꽃 | 밤 |

## 5장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 10 | `5A` | cuts/5A.png | 새로 | — | 깜깜한 창, 스탠드 불빛, 메모 쓰는 손, 그을린 경찰 배지(포인트 색) | 시계·손목시계 없음 |
| 11 | `5Ee` | cuts/5Ee.png | 새로 | portraits/ren_smile.png<br>portraits/koharu_normal.png | 편집: 흰 코트만 그림자가 없음 | 20살로 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 12 | `6Y6` | cuts/6Y6.png | 새로 | — | 한쪽 눈을 가린 손, 위층을 모두 삼킨 불길(포인트 색), 경광등 불빛 | 1인칭: 보는 사람은 손·발만 · 밤 |
| 13 | `6Y3` | cuts/6Y3.png | 새로 | portraits/rei_normal.png | 정문에서 먼 계단 아래, 고등학생을 업음, 오른손 검지 잉크 얼룩(포인트 색) | 1인칭: 보는 사람은 손·발만 · 16살로 |
| 14 | `6Y5` | cuts/6Y5.png | 새로 | — | 빈손으로 다시 연기 속으로, 입구 서가까지 번진 불, 위층의 목소리(포인트 색) | 1인칭: 보는 사람은 손·발만 |

## 종장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 15 | `lighthouse` | bg/lighthouse.png | 새로 | — |  | 사람 없음 |
| 16 | `lighthouse_in` | bg/lighthouse_in.png | 새로 | — |  | 사람 없음 |
| 17 | `lighthouse_dawn` | bg/lighthouse_dawn.png | 새로 | — |  | 사람 없음 |
| 18 | `R1` | cuts/R1.png | 새로 | portraits/shiori_normal.png | 펜을 쥔 오른손(포인트 색), 맞은편에서 읽어 주는 시오리, 벽시계 7:30 | 1인칭: 보는 사람은 손·발만 · 시계 7:30 · 밤 · 16살로 |
| 19 | `R2` | cuts/R2.png | 새로 | — | 응모 서류의 칸을 긋는 손(포인트 색) | 1인칭: 보는 사람은 손·발만 |
| 20 | `R3` | cuts/R3.png | 새로 | — | 계단을 뛰어 내려감, 두고 온 원고(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 21 | `R4` | cuts/R4.png | 새로 | — | 곶 끝 벤치, 등대 불빛(포인트 색), 손목시계 8:15 | 시계 8:15 · 밤 |
| 22 | `R5` | cuts/R5.png | 새로 | — | 연기 나는 도서관으로 되돌아 뜀(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 23 | `R6` | cuts/R6.png | 새로 | — | 연기 속 계단, 기울어지는 시야 | 1인칭: 보는 사람은 손·발만 |
| 24 | `R7` | cuts/R7.png | 새로 | — | 흐린 시야, 부축하던 손이 떨어지고 순경의 등이 받아 올림(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 25 | `R8` | cuts/R8.png | 새로 | — | 어깨에 기대 멀어짐, 뒤돌아본 문 안 계단을 오르는 그림자와 순경 모자(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 26 | `RF` | cuts/RF.png | 새로 | — | 국화를 내려놓는 오른손, 검지의 잉크 자국(크게), 다섯 겹, 마지막엔 언덕 위 카페 쪽으로 걸어감 | 밤 |
| 27 | `t_self_3` | cuts/t_self_3.png | 새로 | portraits/rei_normal.png | 편집: 뛰쳐나감과 떨어지는 손이 붙은 이음매 | 16살로 |
| 28 | `t_self_4` | cuts/t_self_4.png | 새로 | portraits/rei_normal.png | 불타는 도서관 앞에 혼자 선 레이 | 밤 · 16살로 |
| 29 | `t_self_5` | cuts/t_self_5.png | 새로 | — | 여섯 장 겹친 8월 달력, 31일 칸만 하얗게 빔 | 사람 없음 |
| 30 | `S1` | cuts/S1.png | 새로 | portraits/rei_normal.png | 읽어 주는 원고(포인트 색), 맞은편에서 그리는 레이 | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 · 16살로 |
| 31 | `S2` | cuts/S2.png | 새로 | portraits/rei_normal.png | 돌아선 레이의 등, 그어진 응모 서류(포인트 색) | 시계·손목시계 없음 · 16살로 |
| 32 | `S3` | cuts/S3.png | 새로 | — | 밀려난 의자, 백지인 마지막 장(포인트 색) | 시계·손목시계 없음 · 밤 |
| 33 | `S4` | cuts/S4.png | 새로 | portraits/nishimura_normal.png | 라이터 불빛(포인트 색)에 비친 남자의 옆얼굴, 신문지 더미, 열린 뒷문 | 시계·손목시계 없음 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 34 | `S5` | cuts/S5.png | 새로 | — | 원고 뒷면에 얼굴을 그림(포인트 색), 서가 아래 철제 상자 | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 35 | `S6` | cuts/S6.png | 새로 | portraits/rei_normal.png | 쓰러진 레이를 부축해 일으킴(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 16살로 |
| 36 | `S7` | cuts/S7.png | 새로 | portraits/rei_normal.png | 순경이 레이를 업음, 배지(포인트 색), 손목시계 8:28 | 시계 8:28 · 16살로 |
| 37 | `S8` | cuts/S8.png | 새로 | — | 계단을 다시 올려다봄, 뒤에서 뛰어 들어오는 순경(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 38 | `AC` | cuts/AC.png | 새로 | — | 문 닫은 카페, 고개 숙인 레이, 소매의 국화 꽃잎, 해마다 겹친 모습 | 밤 |
| 39 | `t_asagiri_0` | cuts/t_asagiri_0.png | 새로 | portraits/rei_normal.png | 비 오는 밤 카페 문가의 젖은 고등학생 레이 (사실 증언) | 밤 · 16살로 |
| 40 | `t_asagiri_1` | cuts/t_asagiri_1.png | 새로 | — | 6겹 같은 장면, 약지 반지 자국만 겹마다 옅어짐(포인트 색) |  |
| 41 | `t_asg_1` | cuts/t_asg_1.png | 새로 | — | 말끔한 소방 보고서 |  |
| 42 | `t_asg_2` | cuts/t_asg_2.png | 새로 | — | 리조트 조감도: 곶 끝 호텔, 귀퉁이 「용지 확보 완료」 도장 |  |
| 43 | `t_asg_3` | cuts/t_asg_3.png | 새로 | — | 아무것도 걸리지 않은 벽 | 밤 |
| 44 | `AF` | cuts/AF.png | 새로 | — | 냉장고의 크레용 그림(포인트 색), 창밖 크레인과 불빛 |  |

## CG

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 45 | `cg_shiori` | cg/cg_shiori.png | 새로 | — |  | 밤 · 16살로 |
| 46 | `cg_taiga_run` | cg/cg_taiga_run.png | 새로 | — |  | 밤 |
| 47 | `cg_rescue` | cg/cg_rescue.png | 새로 | — |  | 밤 · 9살로 |
| 48 | `cg_page` | cg/cg_page.png | 새로 | — |  |  |
| 49 | `cg_cafe` | cg/cg_cafe.png | 새로 | — |  | 61살로 |
| 50 | `cg_encore` | cg/cg_encore.png | 새로 | — |  | 밤 · 19살로 · 18살로 · 21살로 |
| 51 | `cg_twins` | cg/cg_twins.png | 새로 | — |  | 인물 자신의 왼쪽(정면이면 화면 오른쪽) · 인물 자신의 오른쪽(정면이면 화면 왼쪽) · 밤 · 19살로 |
| 52 | `cg_carry` | cg/cg_carry.png | 새로 | — |  | 밤 · 44살로 · 78살로 |
| 53 | `cg_sota` | cg/cg_sota.png | 새로 | — |  | 밤 · 16살로 |
| 54 | `cg_margin` | cg/cg_margin.png | 새로 | — |  |  |
| 55 | `cg_farewell` | cg/cg_farewell.png | 새로 | — |  |  |

## UI

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 56 | `ui_textbox` | ui/ui_textbox.png | 새로 | — |  |  |
| 57 | `ui_textbox_dark` | ui/ui_textbox_dark.png | 새로 | — |  |  |
| 58 | `ui_name` | ui/ui_name.png | 새로 | — |  |  |
| 59 | `ui_button` | ui/ui_button.png | 새로 | — |  |  |
| 60 | `ui_button_hot` | ui/ui_button_hot.png | 새로 | — |  |  |
| 61 | `ui_button_red` | ui/ui_button_red.png | 새로 | — |  |  |
| 62 | `ui_panel` | ui/ui_panel.png | 새로 | — |  |  |
| 63 | `ui_icons` | ui/ui_icons.png | 새로 | — |  |  |
| 64 | `ui_objection` | ui/ui_objection.png | 새로 | — |  |  |

## 다시 받기 (새 그림을 다 뽑은 뒤 마지막에)

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 65 | `F2` | cuts/F2.png | 다시: 마감 뒤(21:10)인데 아래 매장에 손님들이 앉아 있음 → 빈 매장, 손 부분 스크린톤 이음매는 그대로 | cuts/F2.png | 타로 테두리, 어두운 문간, 봉투를 쥔 앞치마 소매의 손(포인트 색), 손 부분만 스크린톤 점이 다르고 오린 선이 보임 | 1인칭: 보는 사람은 손·발만 · 밤 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 66 | `t_hayaka_4` | cuts/t_hayaka_4.png | 다시: 상담소에 벚꽃 핀 창 → 창 없는 하얀 방, 벽에 빈 말풍선 로고 | cuts/4K.png | 하얀 방, 서명하는 손 | 1인칭: 보는 사람은 손·발만 |
| 67 | `4J` | cuts/4J.png | 다시: 소방차 경광등이 불길과 같은 색이라 안 보임 → 흰 연기 아래 소방차 차체·사다리를 크게 | cuts/4J.png | 창밖 불길과 소방차 불빛, 귀에 댄 휴대폰, 달력의 동그라미(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 68 | `okamoto_normal` | portraits/okamoto_normal.png | 다시: 30대처럼 젊고 가슴이 보임 → 68세 할머니(주름, 작은 체구, 단정한 옷) | portraits/okamoto_normal.png |  |  |
| 69 | `okamoto_angry` | portraits/okamoto_angry.png | 다시: 30대처럼 젊고 가슴이 보임 → 68세 할머니(주름, 작은 체구, 단정한 옷) | portraits/okamoto_angry.png |  |  |
| 70 | `murase_normal` | portraits/murase_normal.png | 다시: 20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리) | portraits/murase_normal.png |  |  |
| 71 | `murase_smile` | portraits/murase_smile.png | 다시: 20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리) | portraits/murase_smile.png |  |  |
| 72 | `murase_cornered` | portraits/murase_cornered.png | 다시: 20대처럼 보임 → 50세(이마 주름, 관자놀이 흰머리) | portraits/murase_cornered.png |  |  |
| 73 | `tanabe_normal` | portraits/tanabe_normal.png | 다시: 경찰 순경 복장(모자 휘장·호루라기) → 민간 경비업체 회청색 제복, 경찰 표시 없음 | portraits/tanabe_normal.png |  |  |
| 74 | `tanabe_confused` | portraits/tanabe_confused.png | 다시: 경찰 순경 복장 → 민간 경비업체 제복 | portraits/tanabe_normal.png |  |  |
| 75 | `towa_serious` | portraits/towa_serious.png | 다시: 고양이 귀·헤드폰·모니터 테두리가 빨강 → towa_normal과 같은 초록, 표정만 진지하게 | portraits/towa_normal.png |  |  |
| 76 | `2H` | cuts/2H.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 긴 파란 머리·새 인형 모자, 후드, 형광 작업등 | portraits/ruru_normal.png | 클램프를 붙잡은 손, 클램프 옆 큰 매듭, 작업등, 오른쪽 위 빈 공간 | 19살로 |
| 77 | `2P` | cuts/2P.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 얼굴·머리 | portraits/ruru_normal.png<br>portraits/kirishima_normal.png | 밤거리, 사복 루루, 종이의 레코드사 로고(포인트 색) | 밤 · 19살로 |
| 78 | `t_ruru_1` | cuts/t_ruru_1.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 얼굴·머리 | portraits/ruru_normal.png<br>portraits/kirishima_normal.png | 낙서: 루루 자신의 얼굴이 새까만 낙서 | 19살로 |
| 79 | `rei_normal` | portraits/rei_normal.png | 다시: serious와 같은 손가락질 자세 → 졸린 반쯤 감은 눈, 캔 커피를 든 무심한 자세 | portraits/rei_serious.png |  |  |
| 80 | `yuki_normal` | portraits/yuki_normal.png | 다시: 초록 앞치마(나기 옷) → 갈색 멜빵 앞치마, 연필은 왼손 | portraits/yuki_smile.png |  |  |
