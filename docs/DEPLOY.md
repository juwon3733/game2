# 배포

게임은 빌드 없는 정적 사이트(`web/` 폴더 그대로)라 어디에 올려도 된다. 지금은 두 곳.

## GitHub Pages (자동)
`main`에 `web/`이 바뀌어 올라가면 `.github/workflows/pages.yml`이 배포한다. https://juwon3733.github.io/game2/

## Cloudflare Workers (지금 쓰는 것: https://game2.2dasteria.workers.dev/)
저장소 루트의 `wrangler.jsonc`가 `web/` 폴더를 정적 사이트로 올리라고 알려 준다. Cloudflare 대시보드에서 GitHub 저장소를 연결해 두면 `main`에 올릴 때마다 다시 배포된다.
- 이 파일이 없으면 Cloudflare가 저장소 안의 다른 `index.html`(예: `prototype/`)을 골라 올려서 옛 프로토타입이 뜬다.
- 대시보드 Settings → Build에서 Build command는 비워 두거나 `npx wrangler deploy`, Root directory는 `/`(저장소 맨 위).

## Cloudflare Pages (다른 방법, GitHub 연결, 한 번만 설정)
1. Cloudflare 대시보드 → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. GitHub 계정 연결 → 저장소 `juwon3733/game2` 선택.
3. 설정:
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: **비워 둠**
   - Build output directory: `web`
4. **Save and Deploy**. 주소는 `https://<프로젝트 이름>.pages.dev`.
5. (선택) 프로젝트 → **Custom domains**에서 내 도메인 연결.

이후에는 `main`에 올릴 때마다 Cloudflare가 알아서 다시 배포한다. 다른 브랜치(`assets/…`, `claude/…`)를 올리면 미리보기 주소가 따로 생긴다(필요 없으면 Settings → Builds → Preview deployments 끄기).

- 응답 헤더(캐시)는 `web/_headers`. 코드(html·js·css)는 매번 새로 받고, 그림·소리는 하루 캐시.
- 파일 하나 25MB 제한이 있다. 지금 가장 큰 파일은 몇 MB라 문제없다.
- 게임 안 경로는 전부 상대 경로라 주소가 `/game2/`든 `/`든 그대로 동작한다.
