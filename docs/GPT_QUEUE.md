# GPT 작업 순서표 (자동 생성: `node tools/gpt-queue.mjs`)

위에서부터 **한 줄 = 한 장**씩 만든다. 프롬프트는 `web/assets/prompts.json`에서 같은 id의 `prompt`를 그대로 쓴다.
- **설정화(reference sheet)는 만들지 않는다.** 모든 인물의 상반신이 이미 있다. 인물이 나오면 「첨부」 칸의 PNG를 이미지로 붙인다.
- **프롬프트에 없는 인물을 그리지 않는다.** 바깥·공공장소라면 멀리 작은 얼굴 없는 행인은 괜찮다(단서 근처, 등장인물로 보일 사람, 「nobody·empty·No people」 장면은 안 됨). 배경(bg)은 사람 없음. 나오는 인물은 첨부 상반신과 같은 머리색·나이로.
- 「다시」 줄은 그 이유를 고치는 게 목적이다. 고쳤는지 PR 설명에 한 줄로 적는다.
- 「확인」 칸: 그 장에서 틀리기 쉬운 것. 그리기 전에 읽고, 다 그린 뒤 하나씩 맞는지 본다.
- 묶음(장·종류)마다 PR 하나, 브랜치는 `assets/<첫 id>-<월일시분>`. 올리면 바로 다음 줄로.

## 3장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 1 | `F3` | cuts/F3.png | 다시: 손 그림자가 안 보임(2번째) → 손 바로 아래 벽에 손 모양 그림자 하나가 아래로, 크게. 다른 그림자는 모두 위로 | — | 타로 테두리, 미는 손(포인트 색), 아래에서 비친 불빛, 손 바로 아래 벽에 아래로 떨어진 손 모양 그림자(다른 그림자는 위로) | IMPORTANT 부분이 핵심: 크게 보이게 |

## 4장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 2 | `sakurayu` | bg/sakurayu.png | 새로 | — |  | 사람 없음 |
| 3 | `sakurayu_boiler` | bg/sakurayu_boiler.png | 새로 | — |  | 사람 없음 |
| 4 | `okamoto_house` | bg/okamoto_house.png | 새로 | — |  | 사람 없음 · 노인은 주름진 노인 얼굴 |
| 5 | `site_office` | bg/site_office.png | 새로 | — |  | 사람 없음 |
| 6 | `clinic` | bg/clinic.png | 새로 | — |  | 사람 없음 |
| 7 | `4A` | cuts/4A.png | 새로 | — | 불 켜진 카운터, 소리치는 할아버지, 매입 서류(포인트 색), 신발장의 손님 신발 | 시계·손목시계 없음 · 밤 · 노인은 주름진 노인 얼굴 |
| 8 | `4E` | cuts/4E.png | 새로 | portraits/keiko_normal.png | 울타리 앞 손전등(포인트 색)을 든 엄마, 반쯤 열린 뒷문(문 밖엔 아무도 없음), 보일러실 창 안의 헤드랜턴 불빛 두 개 | 시계·손목시계 없음 · 밤 · 44살로 |
| 9 | `4K` | cuts/4K.png | 새로 | — | 창 없는 하얀 방, 흰 장갑, 빈 말풍선 로고(포인트 색), 벽시계 9시 | 시계 9:00 |
| 10 | `t_hayaka_1` | cuts/t_hayaka_1.png | 새로 | portraits/hayaka_normal.png | 목욕탕을 나서는 뒷모습 | 밤 · 17살로 |
| 11 | `t_hayaka_2` | cuts/t_hayaka_2.png | 새로 | — | 삭제: 오려 낸 빈 칸, 가장자리의 흰 장갑 자국, 귀퉁이의 담벼락 조각 |  |
| 12 | `t_hayaka_3` | cuts/t_hayaka_3.png | 새로 | — | 삭제: 오려 낸 빈 칸, 귀퉁이의 손전등 빛 자국 |  |
| 13 | `t_hayaka_4` | cuts/t_hayaka_4.png | 새로 | — | 하얀 방, 서명하는 손 | 1인칭: 보는 사람은 손·발만 |
| 14 | `4B` | cuts/4B.png | 새로 | — | 건네받는 손전등(포인트 색), 장갑의 로고, 꺼진 목욕탕 창, 시계탑 10:30, 축제 등불 | 1인칭: 보는 사람은 손·발만 · 시계 10:30 · 밤 |
| 15 | `4F` | cuts/4F.png | 새로 | — | 보일러실 창의 불꽃(포인트 색), 굴뚝 위 연기 | 시계·손목시계 없음 · 밤 |
| 16 | `4G` | cuts/4G.png | 새로 | — | 연기 속으로 젖히는 포렴, 기침 소리 모양(포인트 색) | 1인칭: 보는 사람은 손·발만 |
| 17 | `4M` | cuts/4M.png | 새로 | — | 붕대 감은 손(포인트 색), 막 밝아 오는 새벽 창 | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 노인은 주름진 노인 얼굴 |
| 18 | `t_keiko_1` | cuts/t_keiko_1.png | 새로 | portraits/keiko_normal.png | 부엌에 혼자 앉은 여자, 컵 하나와 꺼진 휴대폰, 패치 뗀 작업복 | 밤 · 44살로 |
| 19 | `t_keiko_2` | cuts/t_keiko_2.png | 새로 | — | 흐림: 연기처럼 흐린 컷 |  |
| 20 | `4C` | cuts/4C.png | 새로 | — | 열쇠(포인트 색), 옆 사람의 작업화, 공구 가방, 멀리 손전등 불빛 | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 21 | `4J` | cuts/4J.png | 새로 | — | 창밖 불길과 소방차 불빛, 귀에 댄 휴대폰, 달력의 동그라미(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 22 | `t_cross_2` | cuts/t_cross_2.png | 새로 | — | 생략: 의자 자리 하얀 여백 | 밤 |
| 23 | `t_cross_4` | cuts/t_cross_4.png | 새로 | — | 그을린 배전반 |  |
| 24 | `4D` | cuts/4D.png | 새로 | portraits/hayaka_normal.png | 헬멧 둘(포인트 색), 열린 뒷문, 골목 모퉁이 교복 차림, 탁상시계 10:45 | 시계 10:45 · 밤 · 17살로 |
| 25 | `4I` | cuts/4I.png | 새로 | — | 창에서 본 노인을 업고 나오는 사람(얼굴은 연기에 가림), 아직 소방차 없음, 창틀의 내 손과 휴대폰 23:15(포인트 색) | 시계 23:15 · 밤 · 노인은 주름진 노인 얼굴 |
| 26 | `4L` | cuts/4L.png | 새로 | — | 노을 지는 창, 반대 모임, 맨 앞자리 의자(포인트 색) | 시계·손목시계 없음 · 노인은 주름진 노인 얼굴 |
| 27 | `t_okamoto_1` | cuts/t_okamoto_1.png | 새로 | — | 과장: 집채만 한 그림자 둘 | 밤 |
| 28 | `t_okamoto_2` | cuts/t_okamoto_2.png | 새로 | portraits/hayaka_normal.png | 헬멧 둘 사이에 끼어 뒷문으로 들어가는 교복 | 밤 · 17살로 |
| 29 | `t_okamoto_3` | cuts/t_okamoto_3.png | 새로 | — | 휴대폰, 붉은 창 | 1인칭: 보는 사람은 손·발만 · 노인은 주름진 노인 얼굴 |
| 30 | `t_cross_1` | cuts/t_cross_1.png | 새로 | — | 창에서 본 헬멧 둘 | 밤 |
| 31 | `t_cross_3` | cuts/t_cross_3.png | 새로 | — | 보일러실 창의 불꽃 | 밤 |
| 32 | `4H` | cuts/4H.png | 새로 | — | 흐린 시야, 업어 준 사람의 그을린 목덜미와 머리끈(포인트 색), 불타는 들보 | 1인칭: 보는 사람은 손·발만 |

## 5장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 33 | `station_chief` | bg/station_chief.png | 새로 | — |  | 사람 없음 · 밤 |
| 34 | `koharu_room` | bg/koharu_room.png | 새로 | — |  | 사람 없음 |
| 35 | `library` | bg/library.png | 새로 | — |  | 사람 없음 |
| 36 | `busstop` | bg/busstop.png | 새로 | — |  | 사람 없음 |
| 37 | `warehouse` | bg/warehouse.png | 새로 | — |  | 사람 없음 |
| 38 | `pier` | bg/pier.png | 새로 | — |  | 사람 없음 |
| 39 | `warehouse_in` | bg/warehouse_in.png | 새로 | — |  | 사람 없음 |
| 40 | `cafe_night` | bg/cafe_night.png | 새로 | — |  | 사람 없음 · 밤 |
| 41 | `5Ae` | cuts/5Ae.png | 새로 | — | 편집: 어질러진 방, 문 그림자 방향이 반대, 이음매 | IMPORTANT 부분이 핵심: 크게 보이게 |
| 42 | `5A` | cuts/5A.png | 새로 | — | 깜깜한 창, 스탠드 불빛, 메모 쓰는 손, 그을린 경찰 배지(포인트 색) | 시계·손목시계 없음 |
| 43 | `5Be` | cuts/5Be.png | 새로 | portraits/koharu_normal.png | 편집: 남자 둘의 스크린톤 점이 코하루보다 굵음, 이음매 | 20살로 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 44 | `5B` | cuts/5B.png | 새로 | portraits/koharu_normal.png | 오래된 신문의 순경 사진(포인트 색), 벽시계 9:00 | 20살로 |
| 45 | `5Ce` | cuts/5Ce.png | 새로 | portraits/koharu_normal.png | 편집: 매끈한 흰 장갑 손들, 이음매 | 20살로 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 46 | `5C` | cuts/5C.png | 새로 | portraits/koharu_normal.png | 웃으며 문자 보내는 코하루, 휴대폰 화면(포인트 색), 가방의 별 모양 참 | 시계·손목시계 없음 · 20살로 |
| 47 | `5De` | cuts/5De.png | 새로 | portraits/koharu_normal.png | 편집: 전등 하나인데 의자 다리 그림자가 여덟 개 | 20살로 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 48 | `5D` | cuts/5D.png | 새로 | portraits/ren_smile.png | 혼자 걸어가는 시점, 긴 그림자, 셔터 앞의 흰 코트(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 49 | `5Ee` | cuts/5Ee.png | 새로 | portraits/ren_smile.png | 편집: 흰 코트만 그림자가 없음 | IMPORTANT 부분이 핵심: 크게 보이게 |
| 50 | `5E` | cuts/5E.png | 새로 | portraits/koharu_normal.png | 혼자 길을 묻는 아가씨(포인트 색), 빈 가방 고리, 손목시계 12:10 | 시계 12:10 · 20살로 |
| 51 | `t_tanabe_0` | cuts/t_tanabe_0.png | 새로 | — | 점심시간 정문 앞, 창틀의 손목시계 (사실 증언) |  |
| 52 | `t_tanabe_2` | cuts/t_tanabe_2.png | 새로 | portraits/koharu_normal.png | 편집: 매끈하게 붙인 우는 얼굴 | 20살로 |
| 53 | `5F` | cuts/5F.png | 새로 | portraits/koharu_normal.png | 찻잔 둘, 하나는 빔(포인트 색), 배지를 내미는 코하루, 보랏빛 하늘 | 20살로 |
| 54 | `6Y6` | cuts/6Y6.png | 새로 | — | 한쪽 눈을 가린 손, 위층을 모두 삼킨 불길(포인트 색), 경광등 불빛 | 1인칭: 보는 사람은 손·발만 · 밤 |
| 55 | `t_ren_1` | cuts/t_ren_1.png | 새로 | portraits/ren_smile.png<br>portraits/koharu_normal.png | 편집: 손목 둘레만 굵은 선 | 20살로 |
| 56 | `t_ren_3` | cuts/t_ren_3.png | 새로 | portraits/ren_smile.png<br>portraits/koharu_normal.png | 방파제에 나란히 앉은 렌과 코하루, 무릎의 배지 (사실 증언) | 20살로 |
| 57 | `t_ren_2` | cuts/t_ren_2.png | 새로 | portraits/rei_normal.png | 편집: 달력 날짜 칸만 질감이 다름 | 16살로 |
| 58 | `t_ren_1b` | cuts/t_ren_1b.png | 새로 | portraits/koharu_normal.png | 편집: 창살 그림자가 어긋남 | 20살로 |
| 59 | `t_ren_2b` | cuts/t_ren_2b.png | 새로 | portraits/rei_normal.png | 편집: 불타는 서가 사이로 달아나는 고등학생 | 16살로 |
| 60 | `6Y1` | cuts/6Y1.png | 새로 | — | 6년 전, 1층 창의 연기, 손목시계 8:20(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계 8:20 · 밤 |
| 61 | `6Y2` | cuts/6Y2.png | 새로 | — | 연기 속 서가, 문(포인트 색), 문 옆 「비상구 공사 중」 안내판, 안쪽 깊숙이 계단 | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 62 | `6Y3` | cuts/6Y3.png | 새로 | portraits/rei_normal.png | 정문에서 먼 계단 아래, 고등학생을 업음, 오른손 검지 잉크 얼룩(포인트 색) | 1인칭: 보는 사람은 손·발만 · 16살로 |
| 63 | `6Y5` | cuts/6Y5.png | 새로 | — | 빈손으로 다시 연기 속으로, 입구 서가까지 번진 불, 위층의 목소리(포인트 색) | 1인칭: 보는 사람은 손·발만 |
| 64 | `6Y4` | cuts/6Y4.png | 새로 | portraits/rei_normal.png | 순경 등에서 고등학생을 받아 부축, 8:31에 멈춘 손목시계(포인트 색) | 1인칭: 보는 사람은 손·발만 · 밤 · 16살로 |

## 종장

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 65 | `lighthouse` | bg/lighthouse.png | 새로 | — |  | 사람 없음 |
| 66 | `lighthouse_in` | bg/lighthouse_in.png | 새로 | — |  | 사람 없음 |
| 67 | `lighthouse_dawn` | bg/lighthouse_dawn.png | 새로 | — |  | 사람 없음 |
| 68 | `R1` | cuts/R1.png | 새로 | portraits/shiori_normal.png | 펜을 쥔 오른손(포인트 색), 맞은편에서 읽어 주는 시오리, 벽시계 7:30 | 1인칭: 보는 사람은 손·발만 · 시계 7:30 · 밤 · 16살로 |
| 69 | `R2` | cuts/R2.png | 새로 | — | 응모 서류의 칸을 긋는 손(포인트 색) | 1인칭: 보는 사람은 손·발만 |
| 70 | `R3` | cuts/R3.png | 새로 | — | 계단을 뛰어 내려감, 두고 온 원고(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 71 | `R4` | cuts/R4.png | 새로 | — | 곶 끝 벤치, 등대 불빛(포인트 색), 손목시계 8:15 | 시계 8:15 · 밤 |
| 72 | `R5` | cuts/R5.png | 새로 | — | 연기 나는 도서관으로 되돌아 뜀(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 73 | `R6` | cuts/R6.png | 새로 | — | 연기 속 계단, 기울어지는 시야 | 1인칭: 보는 사람은 손·발만 |
| 74 | `R7` | cuts/R7.png | 새로 | — | 흐린 시야, 부축하던 손이 떨어지고 순경의 등이 받아 올림(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 75 | `R8` | cuts/R8.png | 새로 | — | 어깨에 기대 멀어짐, 뒤돌아본 문 안 계단을 오르는 그림자와 순경 모자(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 |
| 76 | `RF` | cuts/RF.png | 새로 | — | 국화를 내려놓는 오른손, 검지의 잉크 자국(크게), 다섯 겹, 마지막에 휴대폰 | 밤 |
| 77 | `t_self_3` | cuts/t_self_3.png | 새로 | portraits/rei_normal.png | 편집: 뛰쳐나감과 떨어지는 손이 붙은 이음매 | 16살로 |
| 78 | `t_self_4` | cuts/t_self_4.png | 새로 | portraits/rei_normal.png | 불타는 도서관 앞에 혼자 선 레이 | 밤 · 16살로 |
| 79 | `t_self_5` | cuts/t_self_5.png | 새로 | — | 여섯 장 겹친 8월 달력, 31일 칸만 하얗게 빔 | 사람 없음 |
| 80 | `S1` | cuts/S1.png | 새로 | portraits/rei_normal.png | 읽어 주는 원고(포인트 색), 맞은편에서 그리는 레이 | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 밤 · 16살로 |
| 81 | `S2` | cuts/S2.png | 새로 | portraits/rei_normal.png | 돌아선 레이의 등, 그어진 응모 서류(포인트 색) | 시계·손목시계 없음 · 16살로 |
| 82 | `S3` | cuts/S3.png | 새로 | — | 밀려난 의자, 백지인 마지막 장(포인트 색) | 시계·손목시계 없음 · 밤 |
| 83 | `S4` | cuts/S4.png | 새로 | portraits/nishimura_normal.png | 라이터 불빛(포인트 색)에 비친 남자의 옆얼굴, 신문지 더미, 열린 뒷문 | 시계·손목시계 없음 · IMPORTANT 부분이 핵심: 크게 보이게 |
| 84 | `S5` | cuts/S5.png | 새로 | — | 원고 뒷면에 얼굴을 그림(포인트 색), 서가 아래 철제 상자 | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 85 | `S6` | cuts/S6.png | 새로 | portraits/rei_normal.png | 쓰러진 레이를 부축해 일으킴(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 · 16살로 |
| 86 | `S7` | cuts/S7.png | 새로 | portraits/rei_normal.png | 순경이 레이를 업음, 배지(포인트 색), 손목시계 8:28 | 시계 8:28 · 16살로 |
| 87 | `S8` | cuts/S8.png | 새로 | — | 계단을 다시 올려다봄, 뒤에서 뛰어 들어오는 순경(포인트 색) | 1인칭: 보는 사람은 손·발만 · 시계·손목시계 없음 |
| 88 | `AC` | cuts/AC.png | 새로 | — | 문 닫은 카페, 고개 숙인 레이, 소매의 국화 꽃잎, 해마다 겹친 모습 | 밤 |
| 89 | `t_asagiri_0` | cuts/t_asagiri_0.png | 새로 | portraits/rei_normal.png | 비 오는 밤 카페 문가의 젖은 고등학생 레이 (사실 증언) | 밤 · 16살로 |
| 90 | `t_asagiri_1` | cuts/t_asagiri_1.png | 새로 | — | 6겹 같은 장면, 약지 반지 자국만 겹마다 옅어짐(포인트 색) |  |
| 91 | `t_asg_1` | cuts/t_asg_1.png | 새로 | — | 말끔한 소방 보고서 |  |
| 92 | `t_asg_2` | cuts/t_asg_2.png | 새로 | — | 리조트 조감도: 곶 끝 호텔, 귀퉁이 「용지 확보 완료」 도장 |  |
| 93 | `t_asg_3` | cuts/t_asg_3.png | 새로 | — | 아무것도 걸리지 않은 벽 | 밤 |
| 94 | `AF` | cuts/AF.png | 새로 | — | 냉장고의 크레용 그림(포인트 색), 창밖 크레인과 불빛 |  |

## CG

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 95 | `cg_shiori` | cg/cg_shiori.png | 새로 | — |  | 밤 · 16살로 |
| 96 | `cg_taiga_run` | cg/cg_taiga_run.png | 새로 | — |  | 밤 |
| 97 | `cg_rescue` | cg/cg_rescue.png | 새로 | — |  | 밤 · 9살로 |
| 98 | `cg_page` | cg/cg_page.png | 새로 | — |  |  |
| 99 | `cg_cafe` | cg/cg_cafe.png | 새로 | — |  | 61살로 |
| 100 | `cg_encore` | cg/cg_encore.png | 새로 | — |  | 밤 · 19살로 · 18살로 · 21살로 |
| 101 | `cg_twins` | cg/cg_twins.png | 새로 | — |  | 인물 자신의 왼쪽(정면이면 화면 오른쪽) · 인물 자신의 오른쪽(정면이면 화면 왼쪽) · 밤 · 19살로 |
| 102 | `cg_carry` | cg/cg_carry.png | 새로 | — |  | 밤 · 44살로 · 78살로 |
| 103 | `cg_sota` | cg/cg_sota.png | 새로 | — |  | 밤 · 16살로 |
| 104 | `cg_margin` | cg/cg_margin.png | 새로 | — |  |  |
| 105 | `cg_farewell` | cg/cg_farewell.png | 새로 | — |  |  |

## UI

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 106 | `ui_textbox` | ui/ui_textbox.png | 새로 | — |  |  |
| 107 | `ui_textbox_dark` | ui/ui_textbox_dark.png | 새로 | — |  |  |
| 108 | `ui_name` | ui/ui_name.png | 새로 | — |  |  |
| 109 | `ui_button` | ui/ui_button.png | 새로 | — |  |  |
| 110 | `ui_button_hot` | ui/ui_button_hot.png | 새로 | — |  |  |
| 111 | `ui_button_red` | ui/ui_button_red.png | 새로 | — |  |  |
| 112 | `ui_panel` | ui/ui_panel.png | 새로 | — |  |  |
| 113 | `ui_icons` | ui/ui_icons.png | 새로 | — |  |  |
| 114 | `ui_objection` | ui/ui_objection.png | 새로 | — |  |  |

## 얼굴·옷만 다른 다시 받기 (마지막)

| # | id | 파일 | 할 일 | 첨부 | 꼭 보여야 할 것 | 확인 |
|---|---|---|---|---|---|---|
| 115 | `towa_serious` | portraits/towa_serious.png | 다시: 고양이 귀·헤드폰·모니터 테두리가 빨강 → towa_normal과 같은 초록, 표정만 진지하게 | portraits/towa_normal.png |  |  |
| 116 | `2H` | cuts/2H.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 긴 파란 머리·새 인형 모자, 후드, 형광 작업등 | portraits/ruru_normal.png | 클램프를 붙잡은 손, 클램프 옆 큰 매듭, 작업등, 오른쪽 위 빈 공간 | 19살로 |
| 117 | `2P` | cuts/2P.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 얼굴·머리 | portraits/ruru_normal.png<br>portraits/kirishima_normal.png | 밤거리, 사복 루루, 종이의 레코드사 로고(포인트 색) | 밤 · 19살로 |
| 118 | `t_ruru_1` | cuts/t_ruru_1.png | 다시: 루루가 다른 사람 같음 → 상반신과 같은 얼굴·머리 | portraits/ruru_normal.png<br>portraits/kirishima_normal.png | 낙서: 루루 자신의 얼굴이 새까만 낙서 | 19살로 |
| 119 | `rei_normal` | portraits/rei_normal.png | 다시: serious와 같은 손가락질 자세 → 졸린 반쯤 감은 눈, 캔 커피를 든 무심한 자세 | portraits/rei_serious.png |  |  |
| 120 | `yuki_normal` | portraits/yuki_normal.png | 다시: 초록 앞치마(나기 옷) → 갈색 멜빵 앞치마, 연필은 왼손 | portraits/yuki_smile.png |  |  |
