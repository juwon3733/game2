# 같은 하루, 다른 칸 (가제)

> 기억을 만화 컷으로 꺼내 보는 조사관이, 뒤섞인 컷을 다시 배열해 사건의 진실을 맞춘다.
> 그런데 어떤 컷은 거짓말을 한다.

애니풍 도트 그래픽의 **스토리 + 퍼즐 + 추리/심문** 어드벤처.

## 플레이

- 게임 (1장): https://juwon3733.github.io/game2/
- 에셋 현황 (이미지 목록 · 프롬프트): https://juwon3733.github.io/game2/assets.html

`main`에 병합되면 자동으로 배포된다. 작업 방식은 [docs/WORKFLOW.md](docs/WORKFLOW.md).

이미지는 이미지 생성 에이전트가 [AGENTS.md](AGENTS.md)와 `web/assets/prompts.json`을 읽고 만들어 PR로 올린다.

## 폴더

| 폴더 | 내용 |
|---|---|
| `web/` | 게임 본체 (1장 웹 버전). [web/README.md](web/README.md) |
| `web/assets/` | ChatGPT로 뽑은 이미지 (`portraits`, `bg`, `cuts`) |
| `docs/` | 기획 문서 |
| `tools/` | 검사 도구 (`check-assets.mjs`) |
| `prototype/` | 초기 퍼즐·심문 프로토타입 (참고용) |
| `.github/` | 자동 검사, 자동 배포, PR 양식 |

## 기획 문서

| 문서 | 내용 |
|---|---|
| [01. 개요](docs/01_overview.md) | 컨셉, 핵심 재미, 타깃, 레퍼런스, 차별점 |
| [02. 세계관](docs/02_world.md) | 츠키미나토, 잔상의 규칙, 독자/편집자, 조직 |
| [03. 캐릭터](docs/03_characters.md) | 주요 인물, 사건별 인물, 관계도 |
| [04. 게임 시스템](docs/04_systems.md) | 게임 루프, 컷 배열, 말풍선, 심문, 가짜 컷, 힌트, 데이터 구조 |
| [05. 스토리](docs/05_story.md) | 메인 미스터리, 5장 구성, 복선 배치, 엔딩 |
| [06. 1장 시나리오](docs/06_chapter1.md) | 튜토리얼 장의 상세 시나리오와 퍼즐 정답 |
| [07. 아트 · UI · 사운드](docs/07_art_ui_sound.md) | 해상도, 도트 규격, 컷 조립 방식, UI, 사운드 |
| [08. 제작 계획](docs/08_production.md) | 엔진, 범위, 에셋 수량, 마일스톤, 리스크 |
| [09. 미정 사항](docs/09_open_questions.md) | 아직 결정하지 않은 것들 |
| [10. 이미지](docs/10_asset_prompts.md) | 이미지 규격, 스타일 원칙, 뽑는 요령 |
| [작업 방식](docs/WORKFLOW.md) | 브랜치, 이미지 올리는 법, 자동 검사, 배포 |
