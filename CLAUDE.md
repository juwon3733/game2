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
| `web/` | 게임 본체 (빌드 없음, 순수 JS). `js/script_ch1.js` 진행, `js/data_ch1.js` 데이터, `js/explore.js` 탑뷰 탐색, `js/trial.js` 심문, `js/puzzle.js` 컷 배열 |
| `web/assets/` | 이미지 (`portraits/`, `bg/`, `cuts/`, `maps/`, `sprites/`, `title/`, `ui/`, `cg/`), 소리(`audio/`). 이미지가 없으면 게임이 임시 그림/기본 CSS를 쓴다 |
| `web/fonts/` | Galmuri 글꼴 (OFL, CDN 없이) |
| `web/js/asset_prompts.js` | **이미지 프롬프트 원본** (유일한 원본) |
| `web/assets/prompts.json`, `docs/PROMPTS_CH1.md` | 위에서 자동 생성. 직접 고치지 않는다 |
| `AGENTS.md` | 이미지 생성 에이전트(GPT/Codex)용 작업 지시서 |
| `tools/check-assets.mjs` | 이미지 파일명·형식·크기 검사 |
| `tools/export-prompts.mjs` | 프롬프트 파일 재생성 (`--check`로 동기화 검사) |
| `tools/compose/` | **배경음악·효과음 작곡** (numpy FM 신시사이저). `songs.py` 곡 악보, `sfx.py` 효과음, `python3 tools/compose/build.py [이름]` → `web/assets/audio/` |
| `docs/` | 기획 문서 (01~10), `WORKFLOW.md`, **`11_quality_plan.md` (지금 따르는 품질 올리기 계획)** |
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
- 컷: 회색 8단계 + 시점 주인의 포인트 색 1개 (포인트 색은 시점 구분 장치라 1개만. 초기 컷 13장은 회색 4단계) (타이가 금 `#c9961a`, 미츠루 파랑 `#3b8fd0`, 히마리 분홍 `#e0679a`, 오오쿠보 올리브 `#6b8a5a`). 크레용 기억 컷만 크레용 색.
- 배경: 풀컬러 도트, 늦여름 항구도시 밤 분위기 (7장 완료, 그대로 유지).
- 1장 이미지(상반신·배경·컷) 46장 모두 들어감. 남은 것: 탐색 맵·걷는 캐릭터·타이틀 키아트(`map sprite title`), 상반신 v3 교체 16장. GPT가 풀컬러로 주면 Claude가 384×256 → 회색 8 + 포인트 1 디더링 → 1536×1024로 변환해 넣는다.
- 그림은 GPT 이미지를 적극적으로 쓴다. 코드로 직접 그린 그림·CSS 장식은 "AI 슬롭" 티가 나서 사용자가 싫어한다. 코드 그림은 이미지가 없을 때의 임시용.
- 탐색 맵(`maps/`), 걷는 캐릭터 시트(`sprites/`), 타이틀 키아트(`title/key.png`)도 GPT 이미지. 맵 그림이 들어오면 Claude가 그림을 보고 `explore.js`의 충돌 칸(`rows`)과 물건 위치를 맞춘다.
- 상반신은 `style_version` 3: 원본 256×384 도트 4배, 배경 없이 양옆·위 여백. 지금 있는 16장(128×192)은 교체 대상.
- 소리는 Claude가 직접 작곡한다(PC-98식 FM 음원). 곡 7개(title office explore trial tension truth epilogue), 효과음 19개. 장면별 곡은 `script_ch1.js`의 `SCENE_BGM`.
- 추리 난이도 설정(쉬움/보통/어려움, 기본 보통, `audio.js`의 `DIFF`). 보통부터 컷 설명 없이 그림으로 푼다 → 컷 단서는 그림에 크게.
- 여성 캐릭터 비중을 높인다(사용자 요청). 장별 여성 인물은 `docs/12_story_plan.md` §0-1.
- 미정: 레이 성별(현재 중성적), 배경 국가(현재 일본풍). `docs/09_open_questions.md`.

## 로컬 실행

```
npx serve web          # 또는 python3 -m http.server -d web 8124
```

주소 뒤에 `#ookubo`처럼 장면 id를 붙이면 그 장면부터 시작한다 (`office explore1 puzzle1 ookubo taiga explore2 himari puzzle2 conclusion epilogue`). 타이틀 화면의 장면 선택도 같다.
