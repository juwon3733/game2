# GPT 그림 요청 (10/26 리뷰 반영 후)

전체 284장 중 없는 그림 205장 + 다시 받을 그림 37장. 아래 글을 GPT(이미지 에이전트)에게 그대로 보낸다.

```
최신 main을 받고 AGENTS.md, docs/GPT_REQUEST.md(이 글), web/assets/prompts.json을 다시 읽은 뒤 이미지를 만들어서 PR 올려줘.

[규칙]
1. 프롬프트는 prompts.json에 있는 그대로 쓴다. 고치거나 줄이지 않는다.
2. 인물이 나오는 그림은 그 항목의 reference_images(상반신 PNG)를 반드시 이미지로 첨부한다. 글만 보고 그리지 않는다.
3. 다 그리면 올리기 전에 아래 [확인]을 하나씩 본다. 하나라도 아니면 다시 만든다(최대 3번). 그래도 안 되면 가장 나은 걸 올리고 PR 설명에 무엇이 안 됐는지 적는다.
4. 묶음마다 PR 하나. 브랜치는 assets/<묶음 id>-<월일시분>(예: assets/cut-pink-1028-1530)처럼 늘 새 이름. 이름이 겹쳐 거절되면 조사하지 말고 시각만 바꿔 다시 푸시. 올리면 기다리지 말고 바로 다음 묶음. 중간 보고 없음.
5. 이미 main의 web/assets에 같은 파일이 있으면 건너뛴다. 단 아래 0차에 적힌 건 덮어쓴다.
6. 대화가 끊기면 이 글을 다시 읽고 남은 차례부터. 전부 끝나면 "끝"이라고만 말한다.

[확인] (올리기 전에 매번)
- 첨부한 상반신과 같은 사람인가: 얼굴, 머리 색·모양, 옷, 소품(모자·핀·시계·붕대 등)
- 나이에 맞는 비율인가: 어른·고등학생은 다리가 길고 머리 대 몸 1:7쯤. 치비·아기 얼굴·실제보다 어려 보이면 안 됨. 아이처럼 그리는 건 9살 히마리뿐
- must_show에 적힌 게 작게 줄여 봐도 한눈에 보이는가
- 장면 설명의 장소·시간이 맞는가(밤이면 밤, 5층이면 아래로 거리 불빛, 같은 장소는 다른 컷과 같은 모양)
- 컷은 회색 8단계 + 포인트 색 1개만, 글자·말풍선 글씨·워터마크 없음
- 0차 항목은 괄호 안의 "틀린 점"이 고쳐졌는가 → PR 설명에 한 줄씩 적기

[순서]
0차 — 지금 게임에 들어가 있지만 틀린 그림(덮어쓰기). 공개판이 1장이라 1장부터:
- portrait-rei: rei_normal (막대 핀 → 다른 표정들과 같은 보라색 X자 핀·같은 옷)
- portrait-yuki: yuki_normal (연필이 오른손 → 왼손)
- portrait-asagiri: asagiri_cold (웃는 얼굴 → 차갑게 굳은 표정, 커피잔 없이)
- portrait-tendo 전부 (너무 늙음 → 42세, 주름 없이 30대 후반처럼)
- portrait-yukin 전부 (리본이 왼쪽 → 오른쪽. 유키로 변장한 나기)
- cut-kirishima: 2N (루루가 재킷을 입음 → 재킷 없이 검은 탱크톱)
- cut-pin: 2A (리그와 캣워크 난간 사이 빈 곳이 크게), 2K (모니터 속 그림자 손목의 금빛 반짝임 크게)
- cut-ruru: 2H 2P t_ruru_1 (루루가 다른 사람 → 상반신처럼 긴 파란 생머리·새 인형 모자. 2H는 후드·형광 작업등)

1차 — 2장 남은 것: bg(crescent_out crescent_stage booth greenroom backstage tendo_office)
2차 — 3장: bg의 storage (전구가 켜져 있었음 → 꺼진 전구, 빛은 아래층에서만, 금고 열림, 뒷문 철계단), cut-twin cut-hasegawa cut-tofu cut-madoka
3차 — 4장: bg(sakurayu sakurayu_boiler okamoto_house site_office clinic), cut-hayaka cut-keiko cut-murase cut-okamoto cut-genzo
4차 — 5장: bg(station_chief koharu_room library busstop warehouse pier warehouse_in cafe_night), cut-koharu cut-tanabe cut-ren cut-sota cut-kurogane
5차 — 종장: bg(lighthouse lighthouse_in lighthouse_dawn), cut-rei cut-shiori cut-asagiri, cut-crayon의 AF
6차 — CG: cg 전부
7차 — UI: ui
8차 — 낮은 우선순위: cut-pin t_pin_1~3 (기억 속 루루 머리), portrait-murase (50세로)
```
