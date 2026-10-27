# GPT 그림 요청 (10/26 리뷰 반영 후)

전체 284장 중 없는 그림 205장 + 다시 받을 그림 37장. 아래 글을 GPT(이미지 에이전트)에게 그대로 보낸다.

```
AGENTS.md대로 이미지 만들어서 PR 올려줘. 작업 전에 최신 main의 web/assets/prompts.json을 다시 읽어.
묶음마다 PR 하나(브랜치 assets/<묶음 id>), 아래 순서대로 진행해. 없는 그림이 먼저고, 이미 있는 그림 고치기는 맨 마지막이야.
**멈추지 말고 끝까지 계속해.** 묶음 하나를 PR로 올리면 확인을 기다리지 말고 바로 다음 묶음으로 넘어가. 중간 보고도 필요 없어.
- 시작할 때마다 최신 main을 받아서, 이미 main에 들어간 그림은 건너뛰어(web/assets에 같은 파일이 있으면 받은 것).
- 대화가 끊기거나 새로 시작하면 이 글을 다시 읽고 남은 차례부터 이어서 해.
- 한 장이 계속 잘 안 나오면 그 장만 PR 설명에 적어 두고 다음으로 넘어가.
- 9차까지 다 끝나면 "끝"이라고만 말해.

0차 — 먼저! 1장 다시 받기(공개판이 1장이라 제일 급함. 베란다 컷이 서로 안 맞음):
- cut-pink: G H I t_himari_2_truth t_himari_3_truth (H·I는 지금 1층 정원처럼 나와 있음. C 컷과 같은 5층 베란다·칸막이·항구 야경으로)
- cut-olive: E t_ookubo_2 t_ookubo_2_truth / cut-gold: t_taiga_2 t_taiga_3_truth
- portrait-rei: rei_normal

2차 — 2장: bg(crescent_out crescent_stage booth greenroom backstage tendo_office), cut-aoi cut-kuramochi cut-kirishima cut-tendo, cut-ruru의 2B

3차 — 3장: bg(tokiwa_shop storage arcade booth3 academy arcade_exit), cut-twin cut-hasegawa cut-tofu cut-madoka

4차 — 4장: bg(sakurayu sakurayu_boiler okamoto_house site_office clinic), cut-hayaka cut-keiko cut-murase cut-okamoto cut-genzo

5차 — 5장: bg(station_chief koharu_room library busstop warehouse pier warehouse_in cafe_night), cut-koharu cut-tanabe cut-ren cut-sota cut-kurogane

6차 — 종장: bg(lighthouse lighthouse_in lighthouse_dawn), cut-rei(새 컷 RF t_self_5 포함) cut-shiori cut-asagiri(새 컷 AC 포함), cut-crayon의 AF

7차 — CG: cg (11장 전부)

8차 — UI(원고 테마): ui

9차 — 이미 있는 그림 고치기(덮어써):
- portrait-yukin 전부 (리본이 나기처럼 왼쪽에 있음. 유키로 변장한 거라 유키와 같은 오른쪽(보는 사람 기준 왼쪽)에 달아야 함)
- portrait-aoi 전부 (아오이를 언더컷 짧은 머리로 바꿈. 지금 그림은 긴 포니테일)
- portrait-tendo 전부 (42세 미인, 주름 없이 30대 후반처럼)
- portrait-asagiri: asagiri_cold (웃지 말고 차갑게 굳은 표정, 커피잔 없이)
- cut-pin: 2A 2K / cut-ruru: 2H 2P

(10/27 받아 넣음: towa ren aoi yuki nagi shiori madoka tofu hayaka keiko okamoto murase nishimura tanabe 상반신, cut-blue B C)

컷은 회색 8단계 + 포인트 색 1개, must_show 단서는 크게. 같은 인물은 상반신 설정화와 같은 얼굴·옷으로.
```
