# CLAUDE.md

애니풍 도트 스토리 + 퍼즐 + 추리/심문 게임 「같은 하루, 다른 칸」. 1장 웹 버전이 `web/`에 있고 GitHub Pages로 배포된다.

- 게임: https://juwon3733.github.io/game2/ (Cloudflare Pages에도 같은 `web/`을 배포, `docs/DEPLOY.md`)
- 에셋 현황: https://juwon3733.github.io/game2/assets.html

## 사용자

- 한국어로 대화한다. 짧고 바로 실행하는 걸 선호한다. "알아서 해"라고 하면 확인 질문 없이 진행한다.
- "씹덕"은 **그림체(애니풍/가챠풍 캐릭터, 도트)** 를 말한다. 소재·스토리에 오타쿠 문화나 의학/의대생 티를 넣지 않는다.
- 채팅에 프롬프트를 길게 나열하는 걸 싫어한다. 이미지는 아래 에이전트 파이프라인으로 돌린다.

## 구조

| 경로 | 내용 |
|---|---|
| `web/` | 게임 본체 (빌드 없음, 순수 JS). 장마다 `js/script_chN.js` 진행(+조사 장소 `MAPS`) · `js/data_chN.js` 데이터(1장 표에 Object.assign) · `js/asset_prompts_chN.js` 그림 프롬프트. `js/main.js` 장 이어가기·저장·원고 평가, `js/explore.js` 현장 조사(배경 + 조사할 곳 목록), `js/trial.js` 심문(여러 번 반박·짚기·보류), `js/puzzle.js` 컷 배열(동시 칸·파기 칸), `js/timeline.js` 시각표(사람×시각 칸), `js/name.js` 네임(가설 문장), `js/fx.js` 연출 |
| `web/assets/` | 이미지 (`portraits/`, `bg/`, `cuts/`, `title/`, `ui/`, `cg/`), 소리(`audio/`). 이미지가 없으면 게임이 임시 그림/기본 CSS를 쓴다 |
| `web/fonts/` | Galmuri 글꼴 (OFL, CDN 없이) |
| `web/js/asset_prompts.js` | **이미지 프롬프트 원본** (유일한 원본) |
| `web/assets/prompts.json`, `docs/PROMPTS_CH1.md` | 위에서 자동 생성. 직접 고치지 않는다 |
| `AGENTS.md` | 이미지 생성 에이전트(GPT/Codex)용 작업 지시서 |
| `tools/check-assets.mjs` | 이미지 파일명·형식·크기 검사 |
| `tools/export-prompts.mjs` | 프롬프트 파일 재생성 (`--check`로 동기화 검사) |
| `tools/smoke.mjs`, `tools/playthrough.mjs` | 모든 장면 오류 검사 / 장마다 정답으로 끝까지 풀어 보기(네임 단어가 그 장에서 다 모이는지까지). 둘 다 CI에서 돈다 |
| `tools/spot-overlay.mjs` | 컷 그림 위에 짚을 곳(spots) 상자를 그려 좌표 확인 |
| `tools/dither-cut.py` | GPT 컷을 게임 컷 규칙으로 변환(384×256, 회색 N단계 + 포인트 색, 순서 디더링, 4배). 1장 초기 컷과 맞출 땐 `--levels 4` |
| `tools/compose/` | **배경음악·효과음 작곡** (numpy FM 신시사이저). `songs.py` 곡 악보, `sfx.py` 효과음, `python3 tools/compose/build.py [이름]` → `web/assets/audio/` |
| `docs/` | 기획 문서 (01~10), `WORKFLOW.md`, **`17_season_plan.md` (지금 따르는 계획: 6장 전체를 그림까지 완성)**, `15_quality_plan_noart.md`(끝남), `GPT_REQUEST.md`(GPT에 보낼 그림 요청 글), `14_next_quality.md`(이전 계획), `12_story_plan.md`(전체 스토리), **`13_deduction_upgrade.md`(추리 보강: 단서 짚기·네임·시각표·겹쳐 보기·중간 지목)** |
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
- **2장 「앙코르 없음」 구현됨** (장면 13개, 중간 지목: 쿠라모치를 지목하면 연행됨). 그림은 전부 임시. GPT에 맡길 묶음: `portrait-ruru pin aoi kuramochi tendo kirishima`, `bg`(새 6장), `cut-pin cut-ruru cut-aoi cut-kuramochi cut-kirishima cut-tendo`. 컷이 오면 `data_ch2.js`의 spots 좌표를 그림에 맞춘다.
- **3장 「둘 중 하나」 구현됨** (장면 16개, 중간 지목: 유키를 지목하면 데려가지고 진짜 유키가 학원을 포기하겠다고 함). 새 규칙: 시각표(`time3`), 파기 칸(`page3c`), 돋보기(가짜 미래 컷 이음매 짚기), 변장 인물(`CHARACTERS.yukin.as='yuki'`). 그림 전부 임시. GPT 묶음: `portrait-yuki nagi madoka tofu ren`, `bg`(새 6장), `cut-twin cut-hasegawa cut-tofu cut-madoka`. 미래 컷 F2·F3은 이음매(스크린톤 점 간격, 그림자 방향)가 그림에 꼭 보여야 함.
- **4장 「지워 드립니다」 구현됨** (장면 14개, 중간 지목: 하야카를 지목하면 거짓 자백). 새 규칙: 잘린 증언(`dist:'삭제'`에 남의 컷 이식 + 동의 구하기), 교차 심문(`statement.char` + `W.char2`, 누가 거짓말인지 선택), 흐려지는 현장(`W.erode`: 오답 3번마다 컷 흐림), 두 페이지 퍼즐(`P.pageBreak`). GPT 묶음: `portrait-hayaka keiko okamoto murase nishimura`, `cut-hayaka cut-keiko cut-genzo cut-okamoto cut-murase`, `bg`.
- **5장 「편집자」 구현됨** (장면 13개, 중간 지목: 렌을 지목하면 렌 심문이 어려워짐 `inkPenalty`). 새 규칙: 원본 복원(`runRestore`, 편집 컷 `edited/original`), 실시간 편집 대결(`W.editor` + `answers[k].changes`). 마지막에 아사기리=편집장. 새 표정: asagiri_cold ren_sad kurogane_sad towa_serious. GPT 묶음: `portrait-tanabe` + 위 새 표정, `cut-koharu cut-tanabe cut-sota cut-kurogane cut-ren cut-asagiri`, `bg`. 편집 컷(5Ae 5Be 5Ce 5Ee 5De, t_ren_*)은 이음매가 그림에 보여야 함.
- 장마다 단어 조각은 새로 시작한다: 결론 네임에 쓰는 단어는 그 장 안에서 다 얻을 수 있어야 한다(자동 플레이로 확인).
- **종장 「같은 하루」 구현됨** (장면 8개). 등대 도서관 화재의 밤을 레이(R1~R8)·시오리(S1~S8) 두 줄 시각표(`time6`)로 맞추고, 아사기리 심문 → 자기 심문(`self6`, 레이 자신의 편집된 기억) → 결론 네임 → 최종 선택. **반전**: 지워 달라고 한 건 레이 자신(병원에서 렌에게 한 번, 그 뒤 해마다 8월 31일 밤 「여백」에서 아사기리에게 "다시 지워 주세요", 첫 방문까지 모두 여섯 번). 철망 앞 국화(`RF`)가 레이의 것, 단 커피는 그 약속의 표시, 지울 때마다 아사기리는 딸의 얼굴을 잃음. 자기 심문 마지막 증언 「아무도 나한테 묻지 않았어」를 RF로 깨고 AC(문 닫은 카페)가 드러남. 최종 선택은 "…다시 지워 주세요."/"올해는 제가 둘게요". 코하루는 첫날부터 알고 있었음(수첩 첫 장), 시오리는 레이 안에서 새어 나온 기억. 복선: 1장 카페 국화, 4장 서랍 꽃집 영수증, 5장 렌 "그다음 해부터 손본 건 내가 아니야"·코하루 "역시". 엔딩 3개(`G.flags.ending`): 잊게 해 줘=`edit`, 기억할게=`truth`, 기억할게+여백 조건 5개(`MARGIN_FLAGS`, 1~5장 감정 선택 yohaku1 yohaku2 sketch3 rescueShown badgeBack, 장을 넘어 유지)=`margin`. GPT 묶음: `portrait-shiori` + rei_crying shiori_smile, `cut-rei cut-shiori cut-asagiri`(R S AF RF AC t_asg_* t_self_*), `bg`(lighthouse lighthouse_in lighthouse_dawn), `cg`(cg_margin cg_farewell).
- **GPT 그림 검수 기록 (10/26)**: 넣음 — 상반신 akari komatsu koharu(4) ookubo(3) taiga(2) kirishima kuramochi pin ruru tendo, 컷 2A 2K t_pin_1~3 2H 2P t_ruru_1~4 t_ruru_4_truth, cut-gold(디더 변환). 뺌 — ch1-clue-fixes 전부(기존 그림을 매끈하게 다시 칠했을 뿐, 높이·밤·우는 얼굴 안 고쳐짐, 새 이상한 요소), aoi(짧은 머리), 2B(루루가 남자처럼), delivery-impact D. 다시 받을 것 — cut-pink(G H I t_himari_2_truth t_himari_3_truth), cut-blue(B), portrait-aoi tendo(나이) asagiri kurogane(나이) rei(serious·surprised 캔 없이) shiori(normal·point), cut-ruru 2B.
- 1장 이미지 들어감. **다시 받을 그림**: 컷 `H I B t_himari_2_truth t_ookubo_2 t_taiga_3_truth t_taiga_2`, 상반신 `taiga_sad`(볼 빨감 없이), 새 표정 `ookubo_sad`, 컷 `E t_ookubo_2_truth`(밤인데 낮), `t_himari_3_truth`(눈 감고 자는 얼굴 → 우는 얼굴), `B`(아이 그림자가 옆집 베란다에), 상반신 아사기리·쿠로가네(나이보다 너무 젊음), rei_serious·surprised(캔 커피 없이), 시오리 normal(가리키지 않는 자세, 가리키는 건 point), 장발로 바뀐 `portrait-koharu komatsu akari`, 새 그림 `portrait-yukin`(유키로 변장한 나기), 표정 towa_real koharu_crying asagiri_sad, CG cg_encore cg_twins cg_carry cg_sota. 히마리 상반신의 음표 핀은 Claude가 지웠다(핀은 주먹에 숨김). 코마츠·아카리 상반신 아직 없음 (높이·머리핀·밤·단서 크기, t_taiga_2는 폭발이 아니라 "큰 소리"로. 프롬프트 고침). 남은 것: `ui cg`, 타이틀 원본 화질. GPT가 풀컬러로 주면 Claude가 384×256 → 회색 8 + 포인트 1 디더링 → 1536×1024로 변환해 넣는다.
- GPT 그림 검수에서 그림체가 기존과 다르면(색 단계·디더링) 그대로 넣지 말고 `tools/dither-cut.py`로 맞춘다. cut-gold(1장 타이가 컷 7장)는 이렇게 회색 4단계로 맞춰 넣었다.
- 그림은 GPT 이미지를 적극적으로 쓴다. 코드로 직접 그린 그림·CSS 장식은 "AI 슬롭" 티가 나서 사용자가 싫어한다. 코드 그림은 이미지가 없을 때의 임시용.
- 타이틀 키아트(`title/key.png`)도 GPT 이미지.
- **걸어 다니는 탑뷰 탐색은 없앴다**(사용자 요청). 현장 조사는 장소 배경(`MAP_BG`) 위에 조사할 곳 목록을 띄워 고르는 방식. 장소는 구역(`EX_AREAS`)으로 나뉘어 탭으로 오가고, 물건마다 [살펴보기](공짜, 잔상이 있는 물건이면 첫 묘사만)와 [읽기](집중력 1)가 있다. 잔상 있는 물건 = `required`. 빈 물건을 읽으면 집중력만 닳고, 바닥나면 코하루(5장은 토와)가 쉬게 해 줌(도움 +1). 집중력 = 잔상 수 + 2. `MAPS[id].objects`의 label과 `explore(id, {on, required})`의 대사를 쓴다. rows·좌표는 남아 있지만 안 쓴다(유령 표시 위치 정도). 맵·걷는 캐릭터 그림은 받지 않는다.
- 상반신은 `style_version` 3: 원본 256×384 도트 4배, 배경 없이 양옆·위 여백. 지금 있는 16장(128×192)은 교체 대상.
- **대사 규칙** (1장 플레이 리뷰에서 나온 것):
  - 조작 설명은 인물 대사가 아니라 `say('tip', …)`(도움말 대사창). 인물은 사건 얘기만 한다.
  - 조사는 `을(를)`·`이(가)`처럼 써도 된다. `josa()`가 화면에 낼 때 받침에 맞춰 고친다(대사·배너·토스트·목표·네임).
  - "X인 게 아니라 Y인 거야" 같은 주제 문장은 장마다 한 번만. 나머지는 장면으로 보여 준다. 대사를 "…"로 시작하는 건 레이의 짧은 말·히마리·쿠라모치 정도만.
  - `(전화)` 대사의 인물은 `show()`하지 않는다(대사창 얼굴로 나옴). 토와는 `remote`라 모니터 창으로 뜨고, 5장 창고처럼 실제로 왔을 때만 `show('towa', 'real', pos, { here: true })`. 창밖·길 건너 인물은 `{ far: true }`.
  - 대사창 왼쪽 얼굴(`#tb-face`)은 `engine.js`의 `faceCrop`이 그림의 투명 배경에서 머리 위치를 찾아 자동으로 자른다.
- 새 표정 그림이 없으면 `CHARACTERS[x].alt`의 비슷한 표정으로 대신 보인다(예: ookubo sad→flustered).
  - 날짜: 1장 8/24, 2장 8/26~27, 3장 8/28, 4장 8/29~8/30 새벽, 5장 8/30, 종장 8/31. 6년 전 레이는 16살.
- 연출 효과는 `js/fx.js` (저해상도 캔버스 + 디더, 계단식 애니메이션): 디더 장면 전환, 배경별 분위기(먼지·무대 조명·연기·반짝이·유령), 반박 컷인, 충격(반전 프레임·집중선·의성어), 증언 컷 찢기, 잔상 파문, 심장 박동, 글리치, 가장자리부터 지우기, 화면 당기기, 표정 반응, 장 제목 카드(`FX.title`), 회상(`FX.memory`), 형광등 깜빡임, 증언 붕괴, CG 레터박스. 대사: `[[단어]]` 강조, `(전화)` 전화 목소리, `(…)` 속마음, 문장부호에서 쉼. 설정에 [화면 효과: 줄이기].
- 소리는 Claude가 직접 작곡한다(PC-98식 FM 음원). 곡 17개(1장 title office explore trial tension truth epilogue, 2장 live encore tendo, 3장 madoka, 4장 fire, 5장 editor, 종장 final chrysanthemum(국화·일곱 번째 질문·편집 엔딩) dawn(진실·여백 새벽), 심문 막판 chase — 반박이 하나 남으면 자동. 결정적 반박의 곡은 `answers[k].bgm`), 효과음 19개, 환경음 5개(`tools/compose/ambience.py`: sea rain crowd fire hum — `engine.js`의 `BG_AMB`가 배경마다 자동으로 깐다). 장면별 곡은 `script_chN.js`의 `CHN_BGM`, 증인별 곡은 `WITNESSES[id].bgm`.
- 심문 `answers[k].with`: 겹쳐 보기(같은 순간의 다른 시점 컷을 하나 더 내야 깨짐). 2장 텐도 반박 3(2T+2K). 
- 추리 난이도는 고르는 게 아니라 **게임 기본이 어렵게** (사용자 요청). `audio.js`의 `RULES`: 컷 설명 없이 그림으로 풀기, 퍼즐 오답은 어느 칸 사이인지만, 힌트 2·코하루 1, 결론은 가장 정확한 컷만. 컷 단서는 그림에 크게 들어가야 한다.
- 2장 루루(파란 머리·새 인형 모자·마이크)와 핀(끝만 분홍인 흰 단발·꽃 베레모·검은 코트)은 사용자가 준 참고 그림을 바탕으로, 그대로 베끼지 않게 바꾼 디자인. 루루의 흰 무대 재킷은 단서라 유지.
- 여성 캐릭터는 대부분 **장발**(사용자 요청). 예외: 2장 아오이는 언더컷 짧은 머리(사용자 요청). 성인 여성(18세 이상)은 수위를 살짝 올린 가챠풍 옷(몸에 맞는 옷, 어깨·배·다리 노출, 짧은 치마)까지. 노출 수위는 거기까지이고 노골적인 건 없다. **미성년(히마리·시오리·하야카·6년 전 레이)은 그대로 단정하게.** 원칙은 `asset_prompts.js`의 `PROMPT_STYLE.character`에.
- `js/extras.js`: 결론 몽타주(`montage(G.lastSolution)`, 퍼즐·시각표가 정답 순서를 남김), 갤러리(본 CG·들은 곡·모은 컷·엔딩, 타이틀 [갤러리]), 엔딩 크레딧(`credits(ending)`), 저장 슬롯 3개(HUD [저장], 타이틀 [불러오기]). CG 순서는 `CG_LIST`.
- 15번 계획 1~5단계 반영됨:
  - 대사 검사 `tools/lint-text.mjs`(CI), 말투 표 `docs/16_voice.md`.
  - 추리: 심문 [표시] → 수첩 「메모」(`G.marks`), 수첩 「사건」 탭과 이어하기 「지난 이야기」(`CASES`), 조사 [같이 생각하기](`EX_TALK`), 반박 정답 여러 개(`cut`/`spot` 배열).
  - 이야기: 1장 콜드 오픈, 장 첫머리 관계 선택(`G.flags.bond`).
  - 연출: 결정적 반박 뒤 만화 페이지(`answers[k].page/pageCap` → `mangaPage`), 심문 긴장음(`tension(0~2)`: 마음이 줄면 곡이 먹먹·느려짐), 증언 붕괴가 왜곡 종류마다 다름(`FX.tear(el, dist)`), 장 사이 다음 장 예고(`PREVIEWS`).
  - 다듬기: 첫 로딩 화면, 설정 글자 크기·흔들림 끄기, 손가락 화면 버튼 크게, 갤러리 「기록」 탭(장별 최고 평가·힌트 없이·틀림 없이·여백 조건, `gaha-records`).
- **외부 플레이 리뷰 반영 (10/26)**:
  - 정한 설정: 1장 히마리는 칸막이 밑으로 사에키(미츠루) 집 베란다로 건너감. 2장 텐도는 적자 공연에 공연 중단 보험을 들고 끈을 풂, "앙코르 없음" 지시, 리그는 앙코르 도중 떨어짐. 3장 마도카는 손님 화장실에 남아 있다가 2층 창고 문간에서 봉투를 낚아챔, 미래 컷은 오려 붙인 위조. 4장 헬멧 두 번째 남자 = 니시무라(하쿠요 상무). 종장 니시무라 동기 = 하쿠요 리조트 부지가 도서관 보존 운동에 막혀 방화. 6년 전 레이는 16살 고등학생(업힘·부축, "아이" 금지).
  - 여백 조건: 1~5장 장 끝 감정 선택의 **세 번째 보기(말 대신 컷·물건을 건넴)** 로 통일, `marginMark(flag)`가 알림. 장면 선택으로 들어가면 기록(`gaha-records`)의 여백 조건을 이어받는다.
  - 추리: 확대 화면에 컷 설명 안 보임(`RULES.zoomDesc:false`), 네임은 맞은 칸 수 안 알려 줌, 미끼 컷 위치 안 알려 줌, 대사 조각은 모양 무관하게 넣어 볼 수 있음, 퍼즐마다 시계 보이는 컷은 기준점 2~4장만. 정체 숨긴 시점은 `OWNERS[x].mask = 플래그`(4장 keiko·keiko_in·murase).
  - 이름은 `main.js`의 `revealNames(ch, scene)`가 장면마다 정한다(렌·시오리).
  - **다시 받을 그림(리뷰 반영으로 프롬프트 바뀜)**: 1장 `B C G H I t_himari_2_truth cg_rescue`, 2장 `2A 2K 2H 2P`(루루 컷 설명 통일), 3장 `3A 3B 3G 3H 3K 3E 3C 3D F1 F2 F3 t_yukin_1 t_nagi_2`, 4장 `4A 4B 4C 4D 4E 4F 4I 4J 4K 4L 4M t_hayaka_2 t_keiko_1`, 5장 `5A 5Ae 5C 5E 5Ee 5De 5D 5F 6Y1~6Y6 t_tanabe_0 t_tanabe_2 t_ren_1 t_ren_1b t_ren_2 t_ren_2b t_ren_3 t_asagiri_0 t_asagiri_1`, 종장 `R3 R5 R7 R8 S1~S8 t_asg_2 t_self_4 cg_sota`, UI `ui` 묶음 전부(원고 테마로 다시 씀).
- **UI는 원고 테마** (`game.css` 끝 "원고 테마" 블록): 둥근 모서리·반투명·흐린 그림자 금지. 종이(#efeadf)·먹(#141418) 두 면 + 스크린톤 점, 흐림 없는 오프셋 그림자, 강조색은 시점 색 하나. 타이틀은 두 칸으로 나눈 제목 + 4칸 만화 메뉴. 새 UI도 이 규칙으로.
- 임시 컷(그림 없음)은 설명 글을 그대로 보인다. 그림 없이도 퍼즐을 풀 수 있게 일부러 둔 것. 그림이 들어오면 글은 사라진다.
- 조사 화면은 [말 걸기](사람, `EX_PEOPLE` 또는 objects의 `who`)와 [살펴보기]로 나뉜다. 틀린 반박은 `trial.js`의 `wrongReaction`이 내민 것(자기 기억/남의 기억/물건/짚기)에 따라 다르게 받아치고, 증언은 맞는데 컷만 틀리면 레이가 "아깝다" 쪽으로 생각한다. 증인별로 정해 두려면 `W.wrongBy[컷id]`.
- 여성 캐릭터 비중을 높인다(사용자 요청). 장별 여성 인물은 `docs/12_story_plan.md` §0-1.
- 미정: 레이 성별(현재 중성적), 배경 국가(현재 일본풍). `docs/09_open_questions.md`.

## 로컬 실행

```
npx serve web          # 또는 python3 -m http.server -d web 8124
```

**공개판은 1장만**: 배포 주소에서는 1장만 보이고 장면 선택 메뉴는 없다(`main.js`의 `DEV`·`PUBLIC_CHAPTERS`). localhost나 주소 끝 `?dev`로 열면 전 장이 열리고 장면 id 바로 가기도 된다.

개발판에서 주소 뒤에 `#ookubo`처럼 장면 id를 붙이면 그 장면부터 시작한다 (1장 `office explore1 puzzle1 ookubo taiga explore2 himari puzzle2 conclusion epilogue`, 2장 `office2 explore2a puzzle2a kuramochi explore2b pin ruru accuse2 explore2c tendo puzzle2b conclusion2 epilogue2`, 3장 `office3 … epilogue3`, 4장 `office4 explore4a puzzle4a okamoto hayaka1 accuse4 hayaka explore4b cross4 hospital4 keiko puzzle4b conclusion4 epilogue4`, 5장 `office5 explore5a route5 restore5 tanabe puzzle5a accuse5 warehouse5 ren kurogane5 puzzle5b conclusion5 epilogue5`, 종장 `offer6 explore6 asagiri6 self6 shiori6 puzzle6 conclusion6 ending6`).
