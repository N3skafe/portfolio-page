# Dongjoon Kim 포트폴리오

GitHub의 공개 저장소를 처음 보는 사람이, 어떤 문제를 다루는지, 무엇이 구현되어 있는지, 설계와 결과를 어디서 확인하는지를 읽을 수 있는 정적 사이트입니다.

영어가 기본 언어입니다. 한국어와 일본어로 바꿀 수 있고, 선택한 언어는 브라우저에 저장됩니다. 프로젝트 설명은 공개 README, 릴리스, 의존성 파일에서 확인한 범위만 적습니다. 확인 기록은 [docs/content-audit.md](docs/content-audit.md)에 있습니다.

## 설치와 실행

```powershell
npm install
npm run dev
```

개발 서버 주소는 터미널에 표시됩니다. 기본값은 `http://localhost:5173/` 입니다.

## 빌드와 프리뷰

```powershell
npm run build
npm run preview
```

`npm run lint`는 oxlint를 실행합니다. `npm run build`는 TypeScript 검사 후 정적 파일을 `dist/`에 만듭니다.

프로젝트 사이트용 base 경로로 미리 보려면, 저장소 이름을 넣은 뒤 빌드합니다. 아래 이름은 예시입니다.

```powershell
$env:VITE_BASE_PATH = "/your-repository-name/"
npm run build
npm run preview
```

## 프로젝트 데이터 수정

- 이름, GitHub 주소, 소개 문장 표시 여부: `src/data/profile.ts`
- 대표 프로젝트의 이름, 저장소, 태그, 상태, 링크, 이미지 경로: `src/data/projects.ts`
- 분야별 기술과 연결할 프로젝트: `src/data/tech.ts`

링크 배열에 없는 GitHub, 데모, 릴리스 버튼은 그리지 않습니다. `id`를 추가하거나 바꾸면 `src/i18n/locales.ts`의 언어 파일마다 같은 프로젝트 키가 있어야 빌드가 통과합니다.

## 번역 수정

- 화면 문구와 프로젝트 설명: `src/i18n/en.ts`, `src/i18n/ko.ts`, `src/i18n/ja.ts`
- 키 구조: `src/i18n/types.ts`
- 노출 언어: `src/i18n/locales.ts`

버튼에 없는 언어는 `localeOrder`에 넣지 않습니다. `index.html`의 작은 스크립트도 저장된 언어를 같은 목록으로 읽습니다.

## 스크린샷 추가

1. 실제 화면 이미지를 `public/projects/`에 넣습니다.
2. `src/data/projects.ts`의 해당 프로젝트에 `imageSrc`를 넣습니다. 예: `projects/tui-helper.png`
3. `en.ts`, `ko.ts`, `ja.ts`의 해당 프로젝트에 `imageAlt`를 넣습니다.

`imageSrc`만 있고 대체 텍스트가 없거나, 파일을 읽지 못하면 글자로 된 저장소 색인을 보여 줍니다. 앱 화면처럼 보이는 가짜 이미지는 만들지 않습니다.

## GitHub Pages 배포

원격 저장소를 만들거나 배포하는 작업은 이 저장소 초기 구성에 포함되어 있지 않습니다. 사용자 사이트와 프로젝트 사이트의 차이, base 경로, Actions 설정은 [docs/deployment.md](docs/deployment.md)에 있습니다.

`.github/workflows/pages.yml`은 `main` 또는 `master`에 push할 때 `dist/`를 Pages로 올리는 워크플로입니다. 저장소 설정에서 Pages의 소스를 GitHub Actions로 바꿔야 동작합니다. 이 워크플로는 아직 실행하지 않았습니다.

## 아직 확인하거나 채워야 할 정보

- 이메일과 LinkedIn은 `src/data/profile.ts`의 `contacts`에 있습니다. 블로그는 아직 없습니다.
- GitHub 표시 이름은 `neskafe3112`입니다. 사이트 이름은 이 프로젝트를 위해 지정한 Dongjoon Kim / 김동준입니다.
- 학교 소개는 공개 GitHub bio 인용입니다. 숨기려면 `showGithubBio`를 `false`로 바꿉니다.
- 일본어 화면의 영어 이름은 Dongjoon Kim이고, 한국어 이름은 金東俊/김동준입니다. `src/data/profile.ts`의 `nameJaKo`에서 바꿉니다.
- 스크린샷, 배포 주소, Unity 저장소, 협업 범위는 확인되지 않았습니다.
- 상세 목록은 [docs/content-audit.md](docs/content-audit.md)를 봅니다.
