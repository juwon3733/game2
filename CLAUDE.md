# CLAUDE.md

애니풍 도트 스토리 + 퍼즐 + 추리/심문 게임 「같은 하루, 다른 칸」. 1장 웹 버전이 `web/`에 있고 GitHub Pages로 배포된다.

- 게임: https://juwon3733.github.io/game2/
- 에셋 현황: https://juwon3733.github.io/game2/assets.html

## 사용자

- 한국어로 대화한다. 짧고 바로 실행하는 걸 선호한다. "알아서 해"라고 하면 확인 질문 없이 진행한다.
- "씹덕"은 **그림체(애니풍/가챠풍 캐릭터, 도트)** 를 말한다. 소재·스토리에 오타쿠 문화나 의학/의대생 티를 넣지 않는다.
- 채팅에 프롬프트를 길게 나열하는 걸 싫어한다. 이미지는 아래 에이전트 파이프라인으로 돌린다.

## 구조

| 경로 | 내용 |
|---|---|
| `web/` | 게임 본체 (빌드 없음, 순수 JS). 장마다 `js/script_chN.js` 진행(+탐색 맵) · `js/data_chN.js` 데이터(1장 표에 Object.assign) · `js/asset_prompts_chN.js` 그림 프롬프트. `js/main.js` 장 이어가기·저장·원고 평가, `js/explore.js` 탑뷰 탐색, `js/trial.js` 심문(여러 번 반박·짚기·보류), `js/puzzle.js` 컷 배열(동시 칸·파기 칸), `js/timeline.js` 시각표(사람×시각 칸), `js/name.js` 네임(가설 문장), `js/fx.js` 연출 |
| `web/assets/` | 이미지 (`portraits/`, `bg/`, `cuts/`, `maps/`, `sprites/`, `title/`, `ui/`, `cg/`), 소리(`audio/`). 이미지가 없으면 게임이 임시 그림/기본 CSS를 쓴다 |
| `web/fonts/` | Galmuri 글꼴 (OFL, CDN 없이) |
| `web/js/asset_prompts.js` | **이미지 프롬프트 원본** (유일한 원본) |
| `web/assets/prompts.json`, `docs/PROMPTS_CH1.md` | 위에서 자동 생성. 직접 고치지 않는다 |
| `AGENTS.md` | 이미지 생성 에이전트(GPT/Codex)용 작업 지시서 |
| `tools/check-assets.mjs` | 이미지 파일명·형식·크기 검사 |
| `tools/export-prompts.mjs` | 프롬프트 파일 재생성 (`--check`로 동기화 검사) |
| `tools/compose/` | **배경음악·효과음 작곡** (numpy FM 신시사이저). `songs.py` 곡 악보, `sfx.py` 효과음, `python3 tools/compose/build.py [이름]` → `web/assets/audio/` |
| `docs/` | 기획 문서 (01~10), `WORKFLOW.md`, **`11_quality_plan.md` (지금 따르는 품질 올리기 계획)**, `12_story_plan.md`(전체 스토리), **`13_deduction_upgrade.md`(추리 보강: 단서 짚기·네임·시각표·겹쳐 보기·중간 지목)** |
| `prototype/` | 초기 프로토타입 (참고용, 손대지 않음) |

## 작업 방식

- `main`은 항상 플레이 가능. 작업은 `feat/` `fix/` `chore/` `docs/` 브랜치 → main 병합. 병합하면 Pages가 자동 배포된다.
- **이미지 파이프라인**: 사용자가 GPT 에이전트에게 "AGENTS.md대로 이미지 만들어서 PR 올려줘. 범위: <묶음 id>"라고 맡긴다 → GPT가 `assets/…` 브랜치로 올린다 → **Claude가 이미지를 직접 열어 보고, 게임 화면에서 확인한 뒤 main에 병합**한다.
  - 확인할 것: 스타일 일관성, 캐릭터끼리 같은 사람으로 보이는지, 컷의 `must_show` 단서가 보이는지, 상반신 배경이 투명한지.
- 프롬프트를 바꾸면: `web/js/asset_prompts.js` 수정 → `node tools/export-prompts.mjs` → 커밋. CI가 동기화를 검사한다.
- 커밋/PR 전에 `node tools/check-assets.mjs`와 `node tools/export-prompts.mjs --check`가 통과해야 한다.

## 정해진 것

- 모든 이미지: **PC-98식 저해상도 도트** (nearest-neighbor 확대, 안티앨리어싱 없음, 디더링).
- 캐릭터: **모바일 가챠게임풍 서브컬처 디자인** (`style_version` 2). 큰 눈, 매력적인 얼굴, 소품 디테일.
- 컷 검수 기준: 5층 베란다 컷은 아래로 항구 야경이 보여 높이가 느껴질 것, 단서(머리핀·배터리 등)는 크게 포인트 색으로, 사건 컷은 전부 밤.
- 컷: 회색 8단계 + 시점 주인의 포인트 색 1개 (포인트 색은 시점 구분 장치라 1개만. 초기 컷 13장은 회색 4단계) (타이가 금 `#c9961a`, 미츠루 파랑 `#3b8fd0`, 히마리 분홍 `#e0679a`, 오오쿠보 올리브 `#6b8a5a`). 크레용 기억 컷만 크레용 색.
- 배경: 풀컬러 도트, 늦여름 항구도시 밤 분위기 (7장 완료, 그대로 유지).
- **2장 「앙코르 없음」 구현됨** (장면 13개, 중간 지목: 쿠라모치를 지목하면 연행됨). 그림은 전부 임시. GPT에 맡길 묶음: `portrait-ruru pin aoi kuramochi tendo kirishima`, `bg`(새 6장), `cut-pin cut-ruru cut-aoi cut-kuramochi cut-kirishima cut-tendo`, `map`(crescent backstage tendooffice). 맵 그림이 오면 `script_ch2.js`의 rows·물건 위치를 맞추고, 컷이 오면 `data_ch2.js`의 spots 좌표를 그림에 맞춘다.
- **3장 「둘 중 하나」 구현됨** (장면 16개, 중간 지목: 유키를 지목하면 데려가지고 진짜 유키가 학원을 포기하겠다고 함). 새 규칙: 시각표(`time3`), 파기 칸(`page3c`), 돋보기(가짜 미래 컷 이음매 짚기), 변장 인물(`CHARACTERS.yukin.as='yuki'`). 그림 전부 임시. GPT 묶음: `portrait-yuki nagi madoka tofu ren`, `bg`(새 6장), `cut-twin cut-hasegawa cut-tofu cut-madoka`, `map`(tokiwa arcade). 미래 컷 F2·F3은 이음매(스크린톤 점 간격, 그림자 방향)가 그림에 꼭 보여야 함.
- 1장 이미지 들어감. **다시 받을 컷**: `H I B t_himari_2_truth t_ookubo_2 t_taiga_3_truth` (높이·머리핀·밤·단서 크기, 프롬프트 고침). 남은 것: `ui cg`, 타이틀 원본 화질. GPT가 풀컬러로 주면 Claude가 384×256 → 회색 8 + 포인트 1 디더링 → 1536×1024로 변환해 넣는다.
- 그림은 GPT 이미지를 적극적으로 쓴다. 코드로 직접 그린 그림·CSS 장식은 "AI 슬롭" 티가 나서 사용자가 싫어한다. 코드 그림은 이미지가 없을 때의 임시용.
- 탐색 맵(`maps/`), 걷는 캐릭터 시트(`sprites/`), 타이틀 키아트(`title/key.png`)도 GPT 이미지. 맵 그림이 들어오면 Claude가 그림을 보고 `explore.js`의 충돌 칸(`rows`)과 물건 위치를 맞춘다.
- 상반신은 `style_version` 3: 원본 256×384 도트 4배, 배경 없이 양옆·위 여백. 지금 있는 16장(128×192)은 교체 대상.
- 연출 효과는 `js/fx.js` (저해상도 캔버스 + 디더, 계단식 애니메이션): 디더 장면 전환, 배경별 분위기(먼지·무대 조명·연기·반짝이·유령), 반박 컷인, 충격(반전 프레임·집중선·의성어), 증언 컷 찢기, 잔상 파문, 심장 박동, 글리치, 가장자리부터 지우기, 화면 당기기, 표정 반응, 장 제목 카드(`FX.title`), 회상(`FX.memory`), 형광등 깜빡임, 증언 붕괴, 탐색 말풍선·발밑 먼지, CG 레터박스. 대사: `[[단어]]` 강조, `(전화)` 전화 목소리, `(…)` 속마음, 문장부호에서 쉼. 설정에 [화면 효과: 줄이기].
- 소리는 Claude가 직접 작곡한다(PC-98식 FM 음원). 곡 11개(1장 title office explore trial tension truth epilogue, 2장 live encore tendo, 3장 madoka), 효과음 19개. 장면별 곡은 `script_chN.js`의 `CHN_BGM`, 증인별 곡은 `WITNESSES[id].bgm`.
- 심문 `answers[k].with`: 겹쳐 보기(같은 순간의 다른 시점 컷을 하나 더 내야 깨짐). 2장 텐도 반박 3(2T+2K). 
- 추리 난이도는 고르는 게 아니라 **게임 기본이 어렵게** (사용자 요청). `audio.js`의 `RULES`: 컷 설명 없이 그림으로 풀기, 퍼즐 오답은 어느 칸 사이인지만, 힌트 2·코하루 1, 결론은 가장 정확한 컷만. 컷 단서는 그림에 크게 들어가야 한다.
- 여성 캐릭터 비중을 높인다(사용자 요청). 장별 여성 인물은 `docs/12_story_plan.md` §0-1.
- 미정: 레이 성별(현재 중성적), 배경 국가(현재 일본풍). `docs/09_open_questions.md`.

## 로컬 실행

```
npx serve web          # 또는 python3 -m http.server -d web 8124
```

주소 뒤에 `#ookubo`처럼 장면 id를 붙이면 그 장면부터 시작한다 (1장 `office explore1 puzzle1 ookubo taiga explore2 himari puzzle2 conclusion epilogue`, 2장 `office2 explore2a puzzle2a kuramochi explore2b pin ruru accuse2 explore2c tendo puzzle2b conclusion2 epilogue2`, 3장 `office3 explore3a puzzle3a tofu madoka1 accuse3 academy3 puzzle3b yukin hospital3 nagi explore3b madoka puzzle3c conclusion3 epilogue3`). 타이틀 화면의 장면 선택도 같다.
