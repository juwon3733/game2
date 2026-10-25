# 1장 「낙하」 웹 버전

비주얼 노벨 + 탑뷰 탐색 + 단간론파/역전재판식 심문 + 컷 배열 퍼즐로 1장 전체를 플레이할 수 있다.

## 실행

```powershell
powershell -ExecutionPolicy Bypass -File web/serve.ps1
```

그 다음 http://localhost:8124 접속. 타이틀 화면에서 원하는 장면부터 시작할 수도 있다. (주소 뒤에 `#ookubo` 처럼 붙여도 됨)

## 이미지 넣기

`docs/10_asset_prompts.md`의 프롬프트로 ChatGPT에서 이미지를 뽑아, 표의 파일명 그대로 아래 폴더에 넣으면 된다. 없는 파일은 임시 그림으로 대신한다.

- `assets/portraits/` 캐릭터 상반신 (예: `rei_normal.png`)
- `assets/bg/` 배경 (예: `office.png`)
- `assets/cuts/` 잔상 컷 (예: `A.png`, `t_ookubo_2.png`)

## 흐름

브리핑 → 탐색 1 (5층, 컷 4장) → 컷 정리 1 → 심문: 오오쿠보 → 심문: 타이가 → 탐색 2 (시오리, 컷 G) → 심문: 히마리 → 컷 정리 2 → 결론 → 에필로그

## 파일

| 파일 | 내용 |
|---|---|
| `js/data_ch1.js` | 캐릭터, 배경, 컷, 대사 조각, 퍼즐, 증인, 결론 질문 |
| `js/assets.js` | 이미지 경로, 임시 그림, 컷 화면 요소 |
| `js/engine.js` | 무대(배경/캐릭터/대사창/선택지/모달/수첩) |
| `js/explore.js` | 탑뷰 탐색, 도트 스프라이트, 맵 |
| `js/trial.js` | 심문 |
| `js/puzzle.js` | 컷 배열 퍼즐 |
| `js/script_ch1.js` | 1장 진행 스크립트, 타이틀 |
