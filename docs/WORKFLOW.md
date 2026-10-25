# 작업 방식

## 브랜치

| 브랜치 | 용도 | 누가 |
|---|---|---|
| `main` | 항상 플레이 가능한 버전. 여기에 병합되면 GitHub Pages에 자동 배포된다. | 병합만 |
| `assets/…` | 이미지 추가·교체 (예: `assets/ch1-portraits`) | 직접 (GitHub 웹 업로드) |
| `feat/…` | 기능 추가 (예: `feat/ch2-explore`) | Claude |
| `fix/…` | 버그 수정 | Claude |
| `docs/…` | 기획 문서 | 둘 다 |
| `chore/…` | 저장소 설정, 도구 | Claude |

`main`에는 직접 올리지 않고 **브랜치 → PR → 검사 통과 → 병합** 순서로 넣는다.

## 플레이 링크

`main`에 병합되면 몇 분 뒤 여기에 반영된다.

- 게임: https://juwon3733.github.io/game2/
- 에셋 현황: https://juwon3733.github.io/game2/assets.html

> 처음 한 번만: 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 바꿔야 배포가 시작된다.

## 이미지 만드는 법 (기본: 에이전트에게 맡기기)

GitHub에 연결된 이미지 생성 에이전트(ChatGPT/Codex 등)에게 저장소를 맡긴다. 에이전트는 `AGENTS.md`를 읽고 `web/assets/prompts.json`의 프롬프트로 이미지를 만들어 `assets/…` 브랜치로 PR을 연다.

```
juwon3733/game2 저장소의 AGENTS.md대로 이미지 만들어서 PR 올려줘. 범위: cut-gold
```

- **범위**에는 묶음 id(`portrait-rei`, `bg`, `cut-gold` …)나 파일 id(`D`, `rei_normal` …)를 쓴다. 생략하면 없는 이미지 전부를 만든다.
- 묶음 id 목록: `portrait-rei` `portrait-koharu` `portrait-kurogane` `portrait-towa` `portrait-asagiri` `portrait-ookubo` `portrait-taiga` `portrait-himari` `portrait-shiori` `bg` `cut-gold` `cut-blue` `cut-pink` `cut-crayon` `cut-olive`
- 한 번에 너무 많이 맡기면 그림체가 흔들리기 쉽다. **묶음 1~3개씩** 맡기는 걸 권한다.
- PR이 올라오면 Claude가 게임 화면에서 확인하고 병합한다.

프롬프트를 바꾸려면 `web/js/asset_prompts.js`를 고치고 `node tools/export-prompts.mjs`로 `prompts.json`을 다시 만든다. 안 맞으면 PR 검사에서 실패한다.

## 이미지 직접 올리는 법 (ChatGPT 웹 → GitHub)

에이전트 없이 직접 할 때.

1. **에셋 현황 페이지**를 연다. 필요한 이미지 46장이 카드로 나온다. 빨간 카드가 아직 없는 이미지.
2. 카드의 **[프롬프트 복사]** → ChatGPT에 붙여넣기.
   - 캐릭터는 그룹 제목 옆 **[설정화 먼저]** 를 같은 대화창에서 먼저 뽑고, 그 다음 표정을 뽑는다. 얼굴이 덜 바뀐다.
3. 받은 이미지를 카드의 **파일명 그대로** 저장 (**[파일명 복사]**). 대소문자까지 같아야 한다. `A.png` ≠ `a.png`.
4. 그룹 제목 옆 **[GitHub에 올리기 ↗]** → 해당 폴더 업로드 화면이 열린다.
5. 파일을 끌어다 놓고 맨 아래에서
   - **Create a new branch for this commit and start a pull request** 선택
   - 브랜치 이름: `assets/` 로 시작 (예: `assets/ch1-rei`)
   - **Propose changes** → **Create pull request**
6. PR 화면 아래에 **에셋 검사**가 자동으로 돈다.
   - ✅ 초록: 문제없음 → **Merge pull request**
   - ❌ 빨강: 파일명이 틀렸거나 PNG가 아님 → **Details**를 누르면 무엇을 고칠지 나온다. 파일을 고쳐 같은 브랜치에 다시 올리면 검사가 다시 돈다.
7. 병합하면 배포가 자동으로 돌고, 몇 분 뒤 플레이 링크에서 바로 보인다.

여러 장을 한 번에 올려도 되고, 몇 장씩 나눠 PR을 여러 개 만들어도 된다.

## 검사 규칙 (`tools/check-assets.mjs`)

| 결과 | 조건 |
|---|---|
| ❌ 실패 | 게임이 모르는 파일명 (오타, 대소문자, `(1)` 붙은 이름 등) |
| ❌ 실패 | 확장자는 `.png`인데 실제로는 JPEG/WEBP |
| ⚠️ 경고 | 비율이 규격과 8% 넘게 다름 (잘릴 수 있음) |
| ⚠️ 경고 | 3MB 초과 |
| (괜찮음) | 아직 없는 이미지 — 게임이 임시 그림을 쓴다 |

## 이미지 목록을 바꾸고 싶을 때

이미지 목록과 프롬프트는 코드 한 곳에서 관리한다. 문서에 따로 적지 않는다.

- 필요한 이미지 목록: `web/js/asset_list.js` (게임 데이터 `web/js/data_ch1.js`에서 자동으로 만든다)
- 프롬프트: `web/js/asset_prompts.js`
- 에이전트용 작업 목록 `web/assets/prompts.json`과 사람용 `docs/PROMPTS_CH1.md`는 `node tools/export-prompts.mjs`로 다시 생성한다.

캐릭터 표정이나 컷을 추가하면 에셋 현황 페이지와 검사에 자동으로 반영된다.

## 로컬에서 실행

```powershell
powershell -ExecutionPolicy Bypass -File web/serve.ps1
```

http://localhost:8124 접속.
