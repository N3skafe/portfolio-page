import type { Dictionary } from './types.ts'

export const ko = {
  meta: {
    title: '김동준 · 소프트웨어 개발자',
    description:
      '일상의 불편을 해결하는 도구와 인터랙티브 애플리케이션을 만드는 개발자입니다. 공개 작업에는 터미널 도우미, 로컬 백엔드 실험, Windows 완료 알림, 기기 안 YouTube 제어가 있습니다.',
    ogLocale: 'ko_KR',
  },
  skip: '본문으로 건너뛰기',
  home: '맨 위로',
  github: 'GitHub',
  opensInNewTab: '새 탭에서 열림',
  nav: {
    label: '섹션',
    projects: '프로젝트',
    about: '소개',
    contact: '연락',
  },
  language: {
    label: '언어',
    short: { en: 'EN', ko: 'KO', ja: 'JA' },
    name: { en: 'English', ko: '한국어', ja: '日本語' },
  },
  theme: {
    toLight: '라이트 테마로 전환',
    toDark: '다크 테마로 전환',
  },
  hero: {
    intro: '일상의 불편을 해결하는 도구와 인터랙티브 애플리케이션을 만드는 개발자입니다.',
    direction:
      '공개된 작업은 개발자 도구와 작은 백엔드 실험이 중심이고, 그 옆에 응용 AI와 인터랙티브 애플리케이션이 있습니다.',
    viewProjects: '프로젝트 보기',
    githubProfile: 'GitHub 프로필',
    indexLabel: '이 페이지',
  },
  projectsSection: {
    kicker: '고른 작업',
    title: '프로젝트',
    lede: '공개 저장소 네 개입니다. 설명은 각 README, 릴리스, 의존성 파일에 있는 내용만 적었습니다.',
    empty: '선택한 프로젝트가 아직 없습니다.',
    details: '자세히 보기',
    categories: {
      devtool: '개발자 도구',
      backend: '백엔드 실험',
      utility: 'Windows 유틸리티',
      android: 'Android 앱',
    },
    statusRelease: '릴리스',
    statusPhase: 'Phase',
    statusPartial: '기기 확인은 일부',
    markLabel: '저장소 색인',
  },
  dialog: {
    close: '닫기',
    overview: '개요',
    problem: '문제',
    implementation: '구현',
    decisions: '기술 선택',
    limitations: '한계',
    source: '소스',
    release: '릴리스',
    demo: '데모',
  },
  about: {
    kicker: '프로필',
    title: '소개',
    paragraphs: [
      '이 페이지의 프로젝트는 문제, 구현, 실행이나 빌드 방법이 README에 적힌 공개 저장소입니다.',
      '수업 실습 기록, README가 없는 저장소, 범위가 매우 작은 래퍼는 대표 사례에 넣지 않았습니다.',
    ],
    bioLabel: 'GitHub 소개',
    bioNote:
      '공개 GitHub 프로필의 문장을 그대로 인용했습니다. 성결대학교에서 미디어소프트웨어를 공부하는 학생이라는 뜻입니다.',
    interestsTitle: '관심 분야',
    interests: [
      '백엔드 개발',
      '개발자 도구',
      '응용 AI',
      'Flutter 애플리케이션',
      'Unity와 인터랙티브 애플리케이션',
    ],
    techTitle: '기술 경험',
    groups: {
      tools: '개발자 도구',
      backend: '백엔드',
      ai: '응용 AI',
      apps: '인터랙티브 애플리케이션',
    },
    notes: {
      'docker-compose':
        'Compose 파일은 저장소에 있습니다. README는 그 PC에서 Compose를 실행해 확인하지 못했다고 적습니다.',
      pytorch:
        'trainer 패키지 의존성입니다. README는 그 PC에서 CPU 휠을 썼고 CUDA 학습은 실행하지 않았다고 적습니다.',
      flutter:
        '별도 공개 저장소 flutter_project에 Flutter 슬롯 머신이 있습니다. 위의 네 사례에는 넣지 않았습니다.',
      dart: '그 슬롯 머신 저장소의 언어입니다.',
      unity: '관심 분야로 적혀 있습니다. 이번 조사에서 공개 Unity 저장소는 찾지 못했습니다.',
    },
    related: '관련 프로젝트',
  },
  contact: {
    kicker: '연결',
    title: '연락',
    body: '연락은 GitHub, LinkedIn, 이메일입니다. 블로그와 위치는 적지 않았습니다.',
    githubLabel: 'GitHub 프로필',
    emailLabel: '이메일',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    rights: 'N3skafe 계정의 공개 저장소.',
  },
  projects: {
    'tui-helper': {
      problem:
        '프롬프트 아래에서 cmd, PowerShell, git 이름을 고르고, 제출한 줄만 실행합니다.',
      overview:
        '입력줄 아래에 후보와 짧은 설명을 보여주는 터미널 프롬프트입니다. 후보를 고르는 동안에는 명령을 실행하지 않습니다. Enter로 줄을 제출하면 그 줄만 포그라운드에서 실행하고 stdout, stderr, 종료 상태를 보여 줍니다. 프로그램 화면과 Windows 명령 설명은 영어입니다.',
      implementation: [
        '릴리스 v1.0.0은 2026-11-03에 게시되었고 tui.exe와 tui.exe.sha256가 있습니다. exe 실행에는 Python이 필요 없습니다. 그 폴더에서 cmd는 tui, PowerShell은 .\\tui.exe로 실행합니다. 소스는 여전히 Python 3.10 이상과 prompt_toolkit가 필요하고, Windows에서는 build.ps1이 dist\\tui.exe를 만듭니다.',
        '빈 줄의 메뉴는 help, clear, exit, git, docker, npm, cd, open입니다. 첫 단어는 cmd 도움말 이름, PATH의 프로그램, PowerShell cmdlet·함수·별칭과도 맞습니다. git 후보는 git help -a, 외부 명령, 별칭에서 옵니다.',
        '제출한 줄은 새 셸로 갑니다. Windows 명령은 cmd.exe /d /c, PowerShell에만 있는 이름은 Windows PowerShell -NoProfile, Linux는 /bin/sh -c입니다. 부모 세션에 붙지 않습니다.',
        'test_completion.py와 test_execution.py가 대화형 터미널을 열지 않고 후보와 명령 처리를 확인합니다.',
      ],
      decisions: [
        '후보를 받아들이는 것과 실행은 분리되어 있습니다. 메뉴가 닫힌 다음 Enter가 줄을 제출합니다.',
        '같은 이름이 여러 출처에 있으면 이 프로그램, cmd, PATH, PowerShell 순서로 하나만 남깁니다.',
        'netsh와 diskpart는 터미널을 넘기지 않고 중첩 프롬프트에서 이어 갑니다. UAC 창은 띄우지 않습니다.',
      ],
      limitations: [
        '명령은 포그라운드에서만 돕니다. 작업 제어는 없고, 전체 화면 프로그램은 터미널 상태를 어색하게 남길 수 있습니다. 셸 변수와 별칭은 다음 제출로 넘어가지 않습니다.',
        '완성은 단순한 토큰만 봅니다. 파이프, 글로브, 중첩 따옴표, 리다이렉션으로는 후보를 만들지 않습니다. 기록은 홈 디렉터리의 일반 텍스트라서, 줄에 입력한 비밀번호도 그 파일에 남습니다.',
        '단위 테스트는 실제 콘솔에서의 입력, 창 크기 변경, Ctrl+C를 다루지 않습니다.',
      ],
    },
    'maidops-lab': {
      problem: '터미널 캐릭터는 상태를 설명하고, 작업 판단은 화면이 아니라 서비스 계층에 둡니다.',
      overview:
        'README는 현재 구현을 Phase 5라고 부릅니다. DEMO는 고정 fixture를 재생하고 셸, 프로젝트 파일, 네트워크, 모델에 접근하지 않으며 학습하지 않습니다. LIVE는 Spring Boot API, PostgreSQL, 등록된 명령을 실행하는 워커를 사용합니다. 실패 로그의 라벨 초안은 규칙 기반입니다. 확정 라벨이 조건을 만족하면 trainer/가 고정 해시 임베딩 위의 작은 MLP를 학습합니다. 외부 LLM은 없습니다.',
      implementation: [
        'maidops-tui 패키지는 Python 3.11이 필요하고 Textual과 httpx에 의존합니다. README의 DEMO 경로는 editable 설치 뒤 python -m maidops_tui입니다. 테스트는 pytest로 적혀 있습니다.',
        'LIVE는 ApiService가 MAIDOPS_BACKEND_URL로 접속합니다. 아키텍처 문서는 Spring Boot 3.5.16, Java 21, PostgreSQL을 적습니다. Compose는 호스트 포트를 127.0.0.1에만 엽니다. API 인증은 없고, localhost 단일 사용자용이라고 적혀 있습니다.',
        '워커는 등록된 {python} 인자만 셸 없이 실행합니다. 새 초안은 RULE_BASED이고, 기본 모델이 있으면 MODEL입니다. 서버는 체크포인트를 실행하지 않고, 학습기는 argmax를 반환합니다.',
        'maidops-trainer는 PyTorch에 의존합니다. 임베딩은 로컬 hashing-char-ngram-v1이라 임베딩 파일을 받지 않습니다.',
      ],
      decisions: [
        'LIVE 연결에 실패하면 끊김을 보여주고 작업을 만들지 않습니다. 워커가 없으면 새 작업은 QUEUED로 남고 성공으로 바뀌지 않습니다.',
        '확정 라벨은 승인하거나 수정한 뒤에만 저장됩니다. 승인만으로 학습이 시작되지 않고, 학습이 끝나도 기본 모델이 저절로 바뀌지 않습니다.',
        '입력한 명령은 셸로 보내지 않습니다. DEMO 데이터는 프로세스가 끝나면 사라집니다. LIVE의 작업과 검토는 PostgreSQL에 남습니다.',
      ],
      limitations: [
        'README는 그 PC에 Docker가 없어 Compose로 백엔드, 워커, 학습기를 함께 띄운 실행을 확인하지 못했다고 적습니다. Linux 실행과 CUDA 학습도 확인하지 않았습니다.',
        '학습된 MLP는 새 로그를 분류하지 않습니다. 새 초안은 키워드 규칙에 남습니다. 의미 검색은 없고, softmax 출력을 보정된 확률로 쓰지 않습니다.',
        '이 저장소의 데모 URL과 GitHub 릴리스는 없었습니다.',
      ],
    },
    'perplexity-door-bell': {
      problem: 'Perplexity 데스크톱 앱에서 응답이 끝나면 소리로 알려 줍니다.',
      overview:
        '응답이 끝나면 소리를 내고 팝업을 띄울 수 있는 Windows 프로그램입니다. 공개 파일은 PerplexityDoorBell.exe라서, 그 파일을 실행하는 데 Python은 필요 없습니다. 라이선스는 MIT입니다. README는 Perplexity 화면 언어가 한국어일 때 확인했다고 적습니다.',
      implementation: [
        '화면에 응답 중지(Esc) 버튼이 보였다가 1초 동안 사라지면 한 번 알립니다. 정상 종료, 취소, 오류로 멈춘 경우가 같은 알림을 씁니다.',
        'Perplexity를 끄고 다시 켜면 프로세스 이름, 창 제목, 입력란으로 새 창을 찾습니다. requirements.txt에는 pywinauto가 있고, doorbell.spec이 PyInstaller 빌드입니다.',
        '창 언어는 한국어, English, 中文, 日本語입니다. 언어, 소리, 팝업 설정은 exe 옆 config.json에 저장됩니다.',
        'README는 답변 본문, 입력란의 글, 로그인 정보를 읽지 않고, 네트워크로 보내지 않으며, 클릭이나 키 입력으로 Perplexity 창을 조작하지 않는다고 적습니다.',
      ],
      decisions: [
        '완료와 취소를 다른 알림으로 나누지 않습니다. README는 중지 버튼이 사라지는 것을 신호로 씁니다.',
        '창이 최소화되어 있는 동안에는 앱이 켜져 있는지만 알고, 답을 만드는 중인지는 구분하지 못합니다.',
      ],
      limitations: [
        '최소화 중에 끝난 질문은, 창을 다시 연 시점에 이미 끝나 있으면 알리지 않습니다.',
        '공개 exe는 서명이 없습니다. Windows가 게시자를 확인할 수 없다고 말할 수 있습니다.',
        '릴리스 v1.1.1은 2026-11-03에 게시되었고 PerplexityDoorBell.exe가 첨부되어 있습니다. 릴리스 노트는 대화 화면에서도 완료를 감지하고, 언어를 바꾸면 창 문구가 바로 바뀌며 다시 켜도 유지된다고 적습니다.',
      ],
    },
    'sena-cue': {
      problem:
        '계정이나 API 키 없이, 호출어와 손 모양으로 설치된 YouTube 앱의 일반 영상을 일시정지하거나 재생합니다.',
      overview:
        '영어로 HI SENA라고 말한 뒤, 손바닥을 펼치면 일시정지고 엄지를 올리면 재생입니다. 음성과 손 인식은 폰 안에서 이루어집니다. 화면 언어는 영어, 한국어, 중국어 간체, 일본어 중에서 고릅니다. 저장소 이름은 yt_handclap이고, README의 앱 이름은 Sena Cue입니다.',
      implementation: [
        '저장소 언어 집계는 Kotlin입니다. HI SENA 뒤에 전면 카메라가 몇 초 열리고, 손바닥은 일시정지, 엄지는 재생입니다. 음성과 손 인식은 폰 안에서 이루어지고 계정이나 API 키는 없습니다.',
        '명령은 패키지 com.google.android.youtube로만 갑니다. 유튜브가 미디어 세션을 내놓고 알림 접근이 켜져 있는 일반 동영상이 대상입니다. 라이선스 절은 sherpa-onnx 키워드 모델과 MediaPipe 제스처 모델을 적습니다. 마이크 소리와 카메라 화면은 저장하거나 올리지 않습니다.',
        '문서의 빌드는 gradlew :app:testDebugUnitTest :app:lintDebug :app:assembleDebug입니다. 디버그 APK는 app/build/outputs/apk/debug/app-debug.apk입니다. JDK 17 이상과 Android SDK가 필요합니다. README는 컴파일 SDK 37.2, 대상 SDK 37, 최소 SDK 26을 적습니다.',
        '호출어 한 번에는 명령을 최대 한 번 보냅니다. 손바닥은 항상 일시정지고 엄지는 항상 재생입니다.',
      ],
      decisions: [
        'HI SENA를 기다리는 동안 카메라는 닫혀 있습니다. 제어는 화면이 보일 때만 시작하고, 부팅할 때 켜지지 않습니다.',
        'YouTube 앱만 제어합니다. YouTube Music과 다른 오디오 앱은 대상이 아닙니다. README는 Shorts, 광고, 라이브를 그 일반 동영상 사용 밖에 둡니다.',
      ],
      limitations: [
        '영상을 재생하거나 유튜브를 내장하거나 영상을 내려받지 않습니다. 탐색, 음량, 다음 영상, 유튜브 종료도 없습니다.',
        '공개 GitHub 릴리스는 없었습니다. README가 실행 파일로 적는 것은 그 Gradle 빌드의 디버그 APK입니다.',
        '포함한 모델과 라이브러리는 각자 라이선스를 유지합니다. MIT는 이 저장소의 소스에 적용됩니다.',
      ],
    },
  },
} satisfies Dictionary
