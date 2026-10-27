# GPT 그림 요청 (10/26 리뷰 반영 후)

전체 284장 중 없는 그림 205장 + 다시 받을 그림 37장. 아래 글을 GPT(이미지 에이전트)에게 그대로 보낸다.

```
AGENTS.md대로 이미지 만들어서 PR 올려줘. 작업 전에 최신 main의 web/assets/prompts.json을 다시 읽어.
묶음마다 PR 하나(브랜치 assets/<묶음 id>), 아래 순서대로 진행해. 없는 그림이 먼저고, 이미 있는 그림 고치기는 맨 마지막이야.
**인물이 나오는 그림은 prompts.json의 `reference_images`(상반신 PNG)를 꼭 이미지로 첨부해서 같은 사람·나이에 맞는 비율로 그려(AGENTS.md 2장).**
**멈추지 말고 끝까지 계속해.** 묶음 하나를 PR로 올리면 확인을 기다리지 말고 바로 다음 묶음으로 넘어가. 중간 보고도 필요 없어.
- 시작할 때마다 최신 main을 받아서, 이미 main에 들어간 그림은 건너뛰어(web/assets에 같은 파일이 있으면 받은 것).
- 대화가 끊기거나 새로 시작하면 이 글을 다시 읽고 남은 차례부터 이어서 해.
- 한 장이 계속 잘 안 나오면 그 장만 PR 설명에 적어 두고 다음으로 넘어가.
- 8차까지 다 끝나면 "끝"이라고만 말해.

0차 — 먼저! 이미 있는데 틀린 그림 다시 받기(공개판이 1장이라 1장부터. 지금 그림이 정답·글과 반대인 것들):
- cut-pink: I t_himari_1_truth (I: 10/27 새 그림도 뺐음. 유리문 안 피아노 앞에 사람 그림자가 그대로 있고(미츠루는 베란다에 있어야 함), 미츠루가 난간 바깥에 있고, 주먹 속 머리핀이 안 보임. 방은 비우고, 미츠루는 난간 안쪽 바닥에 서서 상체만 내밀고, 분홍 머리핀을 주먹에 크게)
- cut-blue: C (머리핀이 거의 안 보임. 웅크려 바깥 턱의 핀으로 손 뻗기)
- cut-gold: t_taiga_2 t_taiga_3_truth (t_taiga_2는 검은 짧은 머리 다른 남자라 게임에서 뺐음 → taiga_angry.png를 첨부해 같은 사람으로. t_taiga_3_truth는 앉아 있음 → 뛰어 내려가며)
- portrait-rei: rei_normal (X자 핀으로, 다른 표정과 같은 그림)
- portrait-yuki: yuki_normal (연필을 오른손에 쥠 → 왼손잡이라 왼손)
- portrait-asagiri: asagiri_cold (웃지 말고 차갑게, 커피잔 없이)
- cut-pin: 2A 2K (공연장은 이제 800석 중형 라이브홀로 설정 바꿈(다른 2장 컷들에 맞춤). 2A 리그와 난간 사이 빈 곳이 크게 보이게 / 2K 그림자 손목 금빛 반짝임 크게)
- cut-kirishima: 2N (루루가 흰 재킷을 입고 있음. 이 순간엔 이미 던져서 검은 탱크톱만이어야 함 — 재킷 유무가 순서 단서)
- cut-ruru: 2H 2P t_ruru_1 (루루가 다른 사람처럼 보임 → 긴 파란 생머리·후드, 2H 형광 작업등)
- portrait-tendo 전부 (42세 미인), portrait-aoi 전부 (언더컷 짧은 머리), portrait-yukin 전부 (리본 오른쪽)

1차 — 2장: bg(crescent_out crescent_stage booth greenroom backstage tendo_office), cut-aoi cut-kuramochi cut-kirishima cut-tendo

2차 — 3장: bg의 storage (10/27 받은 건 천장 전구가 켜져 있어서 뺌. 3장 그림자 단서가 「전구가 나가서 아래층 불빛만」이라 전구는 꺼져 있어야 함. 금고 열림, 뒷문 철계단), cut-twin cut-hasegawa cut-tofu cut-madoka

3차 — 4장: bg(sakurayu sakurayu_boiler okamoto_house site_office clinic), cut-hayaka cut-keiko cut-murase cut-okamoto cut-genzo

4차 — 5장: bg(station_chief koharu_room library busstop warehouse pier warehouse_in cafe_night), cut-koharu cut-tanabe cut-ren cut-sota cut-kurogane

5차 — 종장: bg(lighthouse lighthouse_in lighthouse_dawn), cut-rei(새 컷 RF t_self_5 포함) cut-shiori cut-asagiri(새 컷 AC 포함), cut-crayon의 AF

6차 — CG: cg (11장 전부)

7차 — UI(원고 테마): ui

8차 — 낮은 우선순위: cut-aoi 2C(트러스·발코니가 대형 공연장처럼), cut-pin t_pin_1~3(기억 속 루루 머리), portrait-murase(50세로)

(10/27 받아 넣음: 3장 배경 tokiwa_shop arcade booth3 academy arcade_exit, 2장 컷 2B 2D 2F 2G 2I 2L 2M 2T t_kuramochi_1·1_truth·2·3 t_tendo_1·2·3·3b, cut-pink G H t_himari_2_truth t_himari_3_truth, towa ren aoi yuki nagi shiori madoka tofu hayaka keiko okamoto murase nishimura tanabe 상반신, cut-blue B C)

컷은 회색 8단계 + 포인트 색 1개, must_show 단서는 크게. 같은 인물은 상반신 설정화와 같은 얼굴·옷으로.
```
