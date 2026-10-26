# GPT 그림 요청 (10/26 리뷰 반영 후)

전체 284장 중 없는 그림 205장 + 다시 받을 그림 37장. 아래 글을 GPT(이미지 에이전트)에게 그대로 보낸다.

```
AGENTS.md대로 이미지 만들어서 PR 올려줘. 작업 전에 최신 main의 web/assets/prompts.json을 다시 읽어.
묶음마다 PR 하나(브랜치 assets/<묶음 id>), 아래 순서대로 진행해.

1차 — 교체(이미 파일이 있지만 프롬프트가 바뀜, 덮어써):
- portrait-rei: rei_serious rei_surprised (캔 커피 없이) + 없는 rei_crying
- portrait-taiga: taiga_sad (볼 빨감 없이)
- portrait-kirishima: kirishima_normal (손목시계 없이)
- portrait-tendo: 전부 (52세로, 지금 그림은 너무 젊음)
- portrait-kurogane: kurogane_normal (47세로) + 없는 kurogane_sad
- portrait-asagiri: asagiri_normal (61세로) + 없는 asagiri_cold asagiri_sad
- portrait-shiori: shiori_normal (가리키지 않는 자세) + 없는 shiori_point shiori_smile
- cut-blue: B C
- cut-pink: G H I t_himari_2_truth t_himari_3_truth
- cut-olive: E t_ookubo_2 t_ookubo_2_truth
- cut-gold: t_taiga_2 t_taiga_3_truth
- cut-pin: 2A 2K
- cut-ruru: 2H 2P + 없는 2B

2차 — 없는 상반신(그림이 없으면 인물이 화면에 안 나옴):
portrait-towa portrait-aoi portrait-yuki portrait-nagi portrait-yukin portrait-madoka portrait-tofu portrait-ren portrait-hayaka portrait-keiko portrait-okamoto portrait-murase portrait-nishimura portrait-tanabe

3차 — UI(원고 테마로 새로 씀): ui

4차 — 2장 그림: bg(2장 것 crescent_out crescent_stage booth greenroom backstage tendo_office), cut-aoi cut-kuramochi cut-kirishima cut-tendo

5차 — 3장: bg(tokiwa_shop storage arcade booth3 academy arcade_exit), cut-twin cut-hasegawa cut-tofu cut-madoka

6차 — 4장: bg(sakurayu sakurayu_boiler okamoto_house site_office clinic), cut-hayaka cut-keiko cut-murase cut-okamoto cut-genzo

7차 — 5장: bg(station_chief koharu_room library busstop warehouse pier warehouse_in cafe_night), cut-koharu cut-tanabe cut-ren cut-sota cut-kurogane

8차 — 종장: bg(lighthouse lighthouse_in lighthouse_dawn), cut-rei cut-shiori cut-asagiri, cut-crayon의 AF

9차 — CG: cg (11장 전부)

컷은 회색 8단계 + 포인트 색 1개, must_show 단서는 크게. 같은 인물은 상반신 설정화와 같은 얼굴·옷으로.
```
