import type { Dictionary } from './types.ts'

export const en = {
  meta: {
    title: 'Dongjoon Kim · Software developer',
    description:
      'Software developer building practical tools and interactive applications. Public work includes a terminal helper, a local backend lab, a Windows completion alert, and an on-device YouTube controller.',
    ogLocale: 'en_US',
  },
  skip: 'Skip to content',
  home: 'Back to top',
  github: 'GitHub',
  opensInNewTab: 'opens in a new tab',
  nav: {
    label: 'Sections',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  language: {
    label: 'Language',
    short: { en: 'EN', ko: 'KO', ja: 'JA' },
    name: { en: 'English', ko: '한국어', ja: '日本語' },
  },
  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },
  hero: {
    intro: 'Software developer building practical tools and interactive applications.',
    direction:
      'Public work is centered on developer tools and small backend experiments, with applied AI and interactive applications beside them.',
    viewProjects: 'View projects',
    githubProfile: 'GitHub profile',
    indexLabel: 'On this page',
  },
  projectsSection: {
    kicker: 'Selected work',
    title: 'Projects',
    lede: 'Four public repositories. The notes stay inside what each README, release, or dependency file actually says.',
    empty: 'No selected projects are listed yet.',
    details: 'View details',
    categories: {
      devtool: 'Developer tool',
      backend: 'Backend lab',
      utility: 'Windows utility',
      android: 'Android app',
    },
    statusRelease: 'Release',
    statusPhase: 'Phase',
    statusPartial: 'Partial device checks',
    markLabel: 'Repository index',
  },
  dialog: {
    close: 'Close',
    overview: 'Overview',
    problem: 'Problem',
    implementation: 'Implementation',
    decisions: 'Technical decisions',
    limitations: 'Limitations',
    source: 'Source',
    release: 'Release',
    demo: 'Demo',
  },
  about: {
    kicker: 'Profile',
    title: 'About',
    paragraphs: [
      'The projects on this page are public repositories that document a problem, an implementation, and how to run or build the program.',
      'Course exercise logs, repositories without a README, and thinner wrappers are left out of the selected set.',
    ],
    bioLabel: 'GitHub bio',
    bioNote: 'Quoted from the public GitHub profile, as written.',
    interestsTitle: 'Interests',
    interests: [
      'Backend development',
      'Developer tools',
      'Applied AI',
      'Flutter applications',
      'Unity and interactive applications',
    ],
    techTitle: 'Technical experience',
    groups: {
      tools: 'Developer tools',
      backend: 'Backend',
      ai: 'Applied AI',
      apps: 'Interactive applications',
    },
    notes: {
      'docker-compose':
        'The Compose file is in the repository. The README says Compose was not started on that PC.',
      pytorch:
        'Declared by the trainer package. The README says that PC used the CPU wheel and did not run CUDA training.',
      flutter:
        'A separate public repository, flutter_project, describes a Flutter slot machine. It is not one of the four case studies.',
      dart: 'The language of that slot machine repository.',
      unity: 'Listed as an interest. This review did not find a public Unity repository.',
    },
    related: 'Related projects',
  },
  contact: {
    kicker: 'Reach',
    title: 'Contact',
    body: 'GitHub, LinkedIn, and email are the contacts for this page. A blog and a location are not listed.',
    githubLabel: 'GitHub profile',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    rights: 'Public repositories under N3skafe.',
  },
  projects: {
    'tui-helper': {
      problem:
        'Suggest cmd, PowerShell, and git names under the prompt, then run only the line that is submitted.',
      overview:
        'A terminal prompt lists candidates and a short description under the input line. Choosing a candidate does not run a command. Enter submits that line in the foreground and shows stdout, stderr, and the exit status. The program UI and the Windows command text stay in English.',
      implementation: [
        'Release v1.0.0 was published on 2026-11-03 with tui.exe and tui.exe.sha256. Python is not required to run the exe. In that folder, cmd runs tui and PowerShell runs .\\tui.exe. Source still needs Python 3.10 or newer and prompt_toolkit. On Windows, build.ps1 produces dist\\tui.exe.',
        'An empty line offers help, clear, exit, git, docker, npm, cd, and open. The first word also matches cmd help names, programs on PATH, and PowerShell cmdlets, functions, and aliases. Git candidates come from git help -a, external commands, and aliases.',
        'A submitted line goes to a new shell: cmd.exe /d /c, Windows PowerShell -NoProfile when the name exists only there, or /bin/sh -c on Linux. It does not join the parent session.',
        'test_completion.py and test_execution.py check candidates and command handling without opening an interactive terminal.',
      ],
      decisions: [
        'Accepting a candidate does not execute it. The next Enter, with the menu closed, submits the line.',
        'When several sources share a name, one is kept in this order: this program, cmd, PATH, then PowerShell.',
        'netsh and diskpart continue in a nested prompt instead of taking the terminal. The program does not open a UAC prompt.',
      ],
      limitations: [
        'Commands run in the foreground. There is no job control, and full-screen programs can leave the terminal in an awkward state. Shell variables and aliases do not last across submissions.',
        'Completion uses simple tokens. Pipes, globs, nested quotes, and redirection are not used to build candidates. History is plain text in the home directory, so a password typed on a line stays in that file.',
        'The unit tests do not cover live typing, resizing, or Ctrl+C on a real console.',
      ],
    },
    'maidops-lab': {
      problem:
        'Explain work from a terminal character while job decisions stay in a service layer, not in the screen.',
      overview:
        'The README calls the current code Phase 5. DEMO replays fixed fixtures and does not touch a shell, project files, the network, or a model, and it does not train. LIVE uses a Spring Boot API, PostgreSQL, and a worker for registered commands. Failure-log drafts are rule-based. When confirmed labels meet the stated conditions, trainer/ fits a small MLP on frozen hash embeddings. There is no external LLM.',
      implementation: [
        'The maidops-tui package requires Python 3.11 and depends on Textual and httpx. The documented DEMO path is an editable install, then python -m maidops_tui. Tests are documented with pytest.',
        'LIVE points ApiService at MAIDOPS_BACKEND_URL. The architecture note names Spring Boot 3.5.16, Java 21, and PostgreSQL. Compose publishes host ports on 127.0.0.1 only. The API has no authentication and is described as a localhost, single-user service.',
        'The worker runs a registered {python} argument list with the shell disabled. A new draft is RULE_BASED, or MODEL when a default model is selected. The server does not execute the checkpoint. The trainer returns argmax.',
        'maidops-trainer depends on PyTorch. Embeddings use the local hashing-char-ngram-v1 scheme, so no embedding file is downloaded.',
      ],
      decisions: [
        'If LIVE cannot connect, the screen shows disconnected and does not create a job. Without a worker, a new job stays QUEUED and is not marked successful.',
        'A confirmed label is stored only after approve or edit. Approval alone does not start training, and a finished run does not replace the default model by itself.',
        'Typed commands are not sent to a shell. DEMO data disappears when the process exits. LIVE jobs and reviews stay in PostgreSQL.',
      ],
      limitations: [
        'The README says Docker was not installed on that PC, so Compose was not used to start the backend, worker, and trainer together. Linux and CUDA training were not verified there either.',
        'The trained MLP does not classify a new log. New drafts stay on keyword rules. There is no semantic search, and softmax output is not treated as a calibrated probability.',
        'No demo URL and no GitHub release were published for this repository.',
      ],
    },
    'perplexity-door-bell': {
      problem: 'Play a sound when a response finishes in the Perplexity desktop app.',
      overview:
        'A Windows program plays a sound and can show a popup when a response ends. The published file is PerplexityDoorBell.exe, so Python is not required to run that file. The license is MIT. The README says it was checked with Perplexity’s interface set to Korean.',
      implementation: [
        'It alerts once when the on-screen button named 응답 중지(Esc) appears and then stays gone for one second. A normal finish, a cancel, and a stop caused by an error share that alert.',
        'If Perplexity is closed and opened again, the program finds the new window by process name, window title, and the input box. requirements.txt lists pywinauto. doorbell.spec is the PyInstaller build.',
        'The window language can be Korean, English, Chinese, or Japanese. Language, sound, and the popup setting are stored in config.json next to the exe.',
        'The README says it does not read the answer, the input text, or login information, does not send them over the network, and does not click or type into the Perplexity window.',
      ],
      decisions: [
        'Finish and cancel are one alert. The README treats the stop button disappearing as the signal, rather than distinguishing those cases.',
        'While the window is minimized, the program can tell that the app is still running and cannot tell whether an answer is still being generated.',
      ],
      limitations: [
        'A question that finishes while the window is minimized is not announced when it is already done at the moment the window is restored.',
        'The published exe is unsigned. Windows can say the publisher cannot be verified.',
        'Release v1.1.1 was published on 2026-11-03 and attaches PerplexityDoorBell.exe. Its note says detection also covers the conversation screen, and that a language change updates the window text immediately and is kept.',
      ],
    },
    'sena-cue': {
      problem:
        'Pause or resume a regular video in the installed YouTube app with a wake word and a hand gesture, without an account or an API key.',
      overview:
        'Say HI SENA in English, then hold an open palm to pause or a thumbs-up to play. Speech and hand recognition stay on the phone. The screen language can be English, Korean, Simplified Chinese, or Japanese. The repository name is yt_handclap. The app name in the README is Sena Cue.',
      implementation: [
        'The repository language listing is Kotlin. After HI SENA, the front camera opens for a few seconds. An open palm pauses and a thumbs-up plays. Speech and hand recognition stay on the phone. There is no account and no API key.',
        'Commands go only to the package com.google.android.youtube, for a regular video while YouTube exposes a media session and notification access is on. The license section names the sherpa-onnx keyword model and the MediaPipe gesture model. Microphone audio and camera frames are not saved or uploaded.',
        'The documented build is gradlew :app:testDebugUnitTest :app:lintDebug :app:assembleDebug. The debug APK is app/build/outputs/apk/debug/app-debug.apk. JDK 17 or later and an Android SDK are required. The README lists compile SDK 37.2, target SDK 37, and minimum SDK 26.',
        'One wake sends at most one command. An open palm always pauses, and a thumbs-up always plays.',
      ],
      decisions: [
        'The camera stays closed while the app waits for HI SENA. Control starts only from a visible screen, and it does not start on boot.',
        'Only the YouTube app is controlled. YouTube Music and other audio apps are not. The README places Shorts, ads, and live streams outside that regular-video use.',
      ],
      limitations: [
        'It does not play, embed, or download video. It does not seek, change the volume, skip to the next video, or close YouTube.',
        'No public GitHub release was listed. The runnable file named in the README is the debug APK from that Gradle build.',
        'Bundled models and libraries keep their own licenses. The MIT grant covers this repository’s own source.',
      ],
    },
  },
} satisfies Dictionary
