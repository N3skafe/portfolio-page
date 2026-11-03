# 콘텐츠 감사

조사일: 2026-11-03

인증 없는 GitHub REST API로 조회했습니다. 초안 릴리스는 이 방식으로 보이지 않습니다. 비밀 파일과 `.env`의 실제 값은 읽지 않았습니다. `project_mio` README에 로컬 전용 데이터베이스 비밀번호가 있으나, 그 값은 이 문서와 사이트에 옮기지 않았습니다.

## 확인한 URL

- https://api.github.com/users/N3skafe
- https://api.github.com/users/N3skafe/repos?per_page=100&sort=updated&type=owner
- https://api.github.com/repos/N3skafe/perplexity-door-bell/releases/latest
- https://api.github.com/repos/N3skafe/tui_helper/releases?per_page=5
- https://api.github.com/repos/N3skafe/instagram-easy-dm/releases?per_page=5
- https://api.github.com/repos/N3skafe/yt_handclap/releases?per_page=5
- https://api.github.com/repos/N3skafe/register/releases?per_page=5
- https://api.github.com/repos/N3skafe/project_mio/releases?per_page=5
- https://api.github.com/repos/N3skafe/chat_bot_new/releases?per_page=5
- https://api.github.com/repos/N3skafe/LLM_Chat_bot/releases?per_page=5
- 각 저장소 README: `GET /repos/N3skafe/<repo>/readme`
- https://api.github.com/repos/N3skafe/<repo>/languages (`perplexity-door-bell`, `tui_helper`, `project_mio`, `yt_handclap`, `instagram-easy-dm`)
- https://raw.githubusercontent.com/N3skafe/perplexity-door-bell/main/requirements.txt
- https://raw.githubusercontent.com/N3skafe/tui_helper/main/requirements.txt
- https://raw.githubusercontent.com/N3skafe/project_mio/main/docs/ARCHITECTURE.md
- https://raw.githubusercontent.com/N3skafe/project_mio/main/tui/pyproject.toml
- https://raw.githubusercontent.com/N3skafe/project_mio/main/trainer/pyproject.toml
- https://raw.githubusercontent.com/N3skafe/perplexity-door-bell/main/verification_log.md

공개 저장소는 13개였고 `public_repos`도 13이었습니다. `per_page=100` 한 페이지로 끝났습니다. fork와 archived는 모두 false였습니다. 스타 수와 최근 push 시각만으로 순서를 정하지 않았습니다. 스타 수와 팔로워 수는 화면에 넣지 않았습니다.

## 프로필

| 항목 | 확인 값 | 화면 |
| --- | --- | --- |
| login | N3skafe | 워드마크와 링크 |
| name | neskafe3112 | 사용하지 않음 |
| bio | Media Software Student at Sungkyul University | About에 원문 인용 |
| blog | 빈 문자열 | 없음 |
| company, location, twitter, hireable | null | 없음 |
| email | 프로필에는 null. 이후 소유자가 `dkim816@gmail.com`을 지정 | 연락 섹션 |
| LinkedIn | 프로필 blog 필드는 비어 있음. 이후 소유자가 `https://www.linkedin.com/in/dongjoon-kim-603640444`를 지정 | 연락 섹션 |

사이트에 쓰는 이름 Dongjoon Kim / 김동준은 이번 작업에서 지정한 이름입니다. GitHub `name` 필드와는 다릅니다. 수업 저장소 README에도 한글 이름이 보였고, 학번은 이 문서에 복사하지 않았습니다.

일본어 화면의 영어 이름은 Dongjoon Kim입니다. 함께 보이는 한국어 이름은 한자와 한글로 金東俊/김동준입니다. 가나 표기는 프로필에서 확인하지 못했습니다.

## 대표작

순서의 이유는 관심 분야인 개발자 도구와 백엔드를 앞에 두기 위해서입니다. `perplexity-door-bell`은 후보로 제시되었지만, 그것만으로 첫 자리에 두지 않았습니다.

### tui helper

- 저장소: https://github.com/N3skafe/tui_helper
- 근거: README, `requirements.txt`의 `prompt_toolkit`, 루트의 `main.py`, `test_completion.py`, `test_execution.py`, `build.ps1`, 릴리스 v1.0.0
- 문제와 동작, 키, 셸 분리, 테스트 범위, MIT, 실행 방법이 README에 있습니다. README 본문은 2026-11-03 재확인에서 이전과 같았습니다.
- 릴리스 v1.0.0은 2026-11-03T14:20:53Z에 게시되었습니다. draft와 prerelease는 아닙니다. 자산은 업로드된 `tui.exe`와 `tui.exe.sha256`입니다. 릴리스 노트는 첫 공개이고, cmd는 `tui`, PowerShell은 `.\tui.exe`라고 적습니다.
- 이 환경에서 exe를 실행해 확인하지는 않았습니다.

### MaidOps Lab

- 저장소: https://github.com/N3skafe/project_mio
- 근거: README의 Phase 5, DEMO/LIVE, Textual·httpx·PyTorch 의존성(`tui/pyproject.toml`, `trainer/pyproject.toml`), `docs/ARCHITECTURE.md`의 Spring Boot 3.5.16, Java 21, PostgreSQL
- README는 그 PC에 Docker가 없어 Compose 기동을 확인하지 못했고, Linux와 CUDA도 확인하지 못했다고 적습니다. 화면의 한계 항목은 이 문장에 맞춥니다.
- 데모 URL과 릴리스는 없었습니다.
- 상태는 README의 Phase 5만 표시합니다. Production이 아닙니다.
- 외부 LLM이 없다는 설명은 README에 있습니다. 성능 수치는 README에 특정 점수로 공개되어 있지 않아 만들지 않았습니다.

### Perplexity Door Bell

- 저장소: https://github.com/N3skafe/perplexity-door-bell
- 근거: README, `requirements.txt`의 `pywinauto`, `doorbell.spec`, 릴리스 v1.1.1
- 릴리스: draft false, prerelease false, 게시 시각 2026-11-03T12:53:45Z, 자산 `PerplexityDoorBell.exe`
- 릴리스 노트: 대화 화면에서도 완료를 감지하고, 언어를 바꾸면 창 문구가 바로 바뀌며 유지된다.
- README는 한국어 Perplexity 화면에서 확인했다고 적습니다. 서명되지 않은 exe, 최소화 중 한계도 README에 있습니다.
- `verification_log.md`는 중지 버튼 기준이라는 README 설명과 맞습니다. 창 핸들 같은 검사 세부 값은 화면에 넣지 않았습니다.
- 이 환경에서 exe를 실행해 확인하지는 않았습니다.

### Sena Cue

- 저장소: https://github.com/N3skafe/yt_handclap
- 근거: 2026-11-03에 다시 읽은 README. 사용 안내, 하지 않는 일, 개인정보, 라이선스, 빌드 절. 언어 집계는 여전히 Kotlin입니다.
- 이전 README에 있던 폰 확인 문장, 호출어 확인 범위의 차이, CameraX와 서비스 클래스 이름, JDK 21 사용 기록은 현재 README에 없습니다. 그래서 “기기 확인은 일부” 상태는 뺐습니다. 완료로 바꾸지는 않았습니다.
- 공개 릴리스 API는 빈 배열이었습니다. 실행 파일로 적힌 것은 디버그 APK 경로입니다.
- 라이선스 절은 sherpa-onnx 키워드 모델과 MediaPipe 제스처 모델을 계속 적습니다.

## 대표작에서 뺀 저장소

| 저장소 | 이유 |
| --- | --- |
| instagram-easy-dm | README가 있고 Electron으로 `instagram.com/direct/inbox`만 여는 `main.js`입니다. 문제는 분명하지만 구현 범위가 대표 네 건보다 작습니다. |
| register | 저항 색띠 연습 페이지이고 https://n3skafe.github.io/register/ 가 있습니다. 연습 페이지라 대표작에 넣지 않았습니다. |
| flutter_project | Flutter 슬롯 머신 README가 있습니다. 기술 목록에서 저장소로 연결하고, 사례 본문에는 넣지 않았습니다. 스토어 등록은 확인하지 못했습니다. |
| chat_bot_new, LLM_Chat_bot, mysite | README API가 404였습니다. 설명을 만들지 않았습니다. |
| java_web_demo | 수업 실습 기록입니다. 학교와 한글 이름을 대조하는 데만 참고했고, 학번과 수업 내용은 화면에 넣지 않았습니다. |
| visual-st-code-plus5-web-main | 수업 주차 기록입니다. |
| school-vacation-CS | README가 한 줄이고 제품 설명이 없습니다. |

관심 분야로 적힌 Unity 저장소는 이번 목록에서 찾지 못했습니다. 숙련도 막대는 만들지 않았습니다.

## 화면에 없는 것

- 블로그, 거주지, 문의 폼
- 경력 연수, 직함, 수상, 사용자 수, 성능 향상 수치
- 스타 수, 팔로워 수, 기여 잔디
- 확인되지 않은 스크린샷
- “My contribution”. 협업 범위가 README에 따로 없었습니다.
- 대표작이 아닌 저장소를 억지로 채운 카드

## 소유자가 추가할 정보

- 블로그
- GitHub 표시 이름을 Dongjoon Kim으로 둘지
- GitHub bio의 학교 문장을 사이트에 계속 둘지 (`showGithubBio`)
- 일본어 이름의 표기
- 각 프로젝트의 실제 스크린샷과 대체 텍스트
- MaidOps를 Compose로 실행해 확인했다면 그 사실
- Flutter 슬롯, Instagram 래퍼, 저항 색띠 페이지를 대표작에 넣을지
- Unity 작업을 공개했다면 저장소 주소
- 배포 URL이 정해진 뒤의 canonical과 `og:url`
- 혼자 작성하지 않은 부분이 있다면 그 범위. 확인 전에는 담당 역할을 적지 않습니다.
