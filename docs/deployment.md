# 배포

이 사이트는 서버 없이 호스팅하는 정적 SPA입니다. 브라우저가 GitHub API를 호출하지 않으므로, 배포 환경에 런타임 API 키가 필요 없습니다.

원격 저장소 생성, push, Pages 배포는 하지 않았습니다. 아래 저장소 이름은 예시이며, 실제 저장소 이름으로 확정하지 않습니다.

## base 경로

Vite의 `base`는 환경 변수 `VITE_BASE_PATH`입니다. 비어 있거나 `/`이면 사이트 루트입니다. 값이 `portfolio`처럼 슬래시 없이 들어와도 `/portfolio/`로 맞춥니다.

| 사이트 종류 | 저장소 예 | `VITE_BASE_PATH` |
| --- | --- | --- |
| 사용자 또는 조직 사이트 | `<owner>.github.io` | `/` |
| 프로젝트 사이트 | 그 외 이름 | `/<repository-name>/` |

사용자 사이트는 `https://<owner>.github.io/`가 루트입니다. 프로젝트 사이트는 `https://<owner>.github.io/<repository-name>/`라서, 빌드 결과의 자산 경로도 그 접두사를 가져야 합니다. 루트용으로 빌드한 파일을 프로젝트 사이트에 올리면 JS와 CSS를 찾지 못합니다.

로컬에서 프로젝트 사이트를 흉내 내려면:

```powershell
$env:VITE_BASE_PATH = "/your-repository-name/"
npm run build
npm run preview
```

bash:

```bash
VITE_BASE_PATH=/your-repository-name/ npm run build
npm run preview
```

`.env.example`에 같은 변수만 있습니다. 비밀 값은 넣지 않습니다.

## GitHub Actions

`.github/workflows/pages.yml`은 npm lockfile 기준입니다.

- `contents: read`, `pages: write`, `id-token: write`만 요청합니다.
- Node.js 22에서 `npm ci` 후 `npm run build`를 실행합니다.
- 저장소 이름이 `<owner>.github.io`이면 base를 `/`로, 아니면 `/<repository-name>/`로 넣습니다.
- `main`과 `master` push, 그리고 수동 실행에서 동작하도록 적어 두었습니다. 기본 브랜치가 다르면 `branches`를 바꿉니다.
- 배포 단계는 `actions/deploy-pages`를 사용합니다.

저장소에서 한 번만 설정합니다.

1. Settings → Pages → Build and deployment → Source를 GitHub Actions로 선택합니다.
2. 기본 브랜치에 워크플로가 포함된 상태를 push합니다.
3. Actions 탭에서 실행 결과와 Pages URL을 확인합니다.

이 워크플로는 작성만 되어 있고, 이 환경에서 실행하지 않았습니다.

## 검색과 언어

페이지는 하나이고 언어는 브라우저에서 바꿉니다. `index.html`의 제목, 설명, Open Graph 기본값은 영어입니다. 방문자가 언어를 바꾸면 JavaScript가 `document.documentElement.lang`, `title`, description, `og:title`, `og:description`, `og:locale`을 갱신합니다.

JavaScript를 실행하지 않는 수집기는 영어 문구만 봅니다. 언어별 URL, `hreflang`, canonical, `og:url`은 없습니다. 배포 주소를 모르므로 canonical과 `og:url`을 만들지 않았습니다. `og:image`도 없습니다. 다국어 검색 최적화는 구현하지 않았습니다.

주소가 정해진 뒤에 canonical과 `og:url`을 넣으려면, 그 실제 주소만 사용합니다.
