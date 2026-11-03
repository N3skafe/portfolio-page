import type { Dictionary } from './types.ts'

export const ja = {
  meta: {
    title: 'Dongjoon Kim · ソフトウェア開発者',
    description:
      '日常の不便を解決するツールとインタラクティブなアプリケーションを作る開発者です。公開している作業には、ターミナル補助、ローカルなバックエンド実験、Windows の完了通知、端末上の YouTube 操作があります。',
    ogLocale: 'ja_JP',
  },
  skip: '本文へスキップ',
  home: 'ページ上部へ',
  github: 'GitHub',
  opensInNewTab: '新しいタブで開きます',
  nav: {
    label: 'セクション',
    projects: 'プロジェクト',
    about: '紹介',
    contact: '連絡先',
  },
  language: {
    label: '言語',
    short: { en: 'EN', ko: 'KO', ja: 'JA' },
    name: { en: '英語', ko: '韓国語', ja: '日本語' },
  },
  theme: {
    toLight: 'ライトテーマに切り替え',
    toDark: 'ダークテーマに切り替え',
  },
  hero: {
    intro: '日常の不便を解決するツールとインタラクティブなアプリケーションを作る開発者です。',
    direction:
      '公開している作業の中心は開発者ツールと小さなバックエンド実験で、そのそばに応用 AI とインタラクティブなアプリケーションがあります。',
    viewProjects: 'プロジェクトを見る',
    githubProfile: 'GitHub プロフィール',
    indexLabel: 'このページ',
  },
  projectsSection: {
    kicker: '選んだ作業',
    title: 'プロジェクト',
    lede: '公開リポジトリは 4 件です。説明は各 README、リリース、依存ファイルに書かれている範囲だけです。',
    empty: '選んだプロジェクトはまだありません。',
    details: '詳細を見る',
    categories: {
      devtool: '開発者ツール',
      backend: 'バックエンド実験',
      utility: 'Windows ユーティリティ',
      android: 'Android アプリ',
    },
    statusRelease: 'リリース',
    statusPhase: 'Phase',
    statusPartial: '端末での確認は一部',
    markLabel: 'リポジトリ索引',
  },
  dialog: {
    close: '閉じる',
    overview: '概要',
    problem: '問題',
    implementation: '実装',
    decisions: '技術上の選択',
    limitations: '限界',
    source: 'ソース',
    release: 'リリース',
    demo: 'デモ',
  },
  about: {
    kicker: 'プロフィール',
    title: '紹介',
    paragraphs: [
      'このページのプロジェクトは、問題、実装、実行またはビルド方法が README に書かれた公開リポジトリです。',
      '授業の演習記録、README がないリポジトリ、範囲のごく小さいラッパーは、選んだ事例に入れていません。',
    ],
    bioLabel: 'GitHub の自己紹介',
    bioNote:
      '公開 GitHub プロフィールの文をそのまま引用しています。Sungkyul University でメディアソフトウェアを学んでいる学生、という意味です。',
    interestsTitle: '関心',
    interests: [
      'バックエンド開発',
      '開発者ツール',
      '応用 AI',
      'Flutter アプリケーション',
      'Unity とインタラクティブなアプリケーション',
    ],
    techTitle: '技術経験',
    groups: {
      tools: '開発者ツール',
      backend: 'バックエンド',
      ai: '応用 AI',
      apps: 'インタラクティブなアプリケーション',
    },
    notes: {
      'docker-compose':
        'Compose ファイルはリポジトリにあります。README には、その PC では Compose の起動を確認していないと書かれています。',
      pytorch:
        'trainer パッケージの依存関係です。README には、その PC では CPU 版を使い、CUDA での学習は実行していないと書かれています。',
      flutter:
        '別の公開リポジトリ flutter_project に Flutter のスロットマシンがあります。上の 4 件の事例には入れていません。',
      dart: 'そのスロットマシンのリポジトリで使われている言語です。',
      unity: '関心として挙げています。今回の調査では公開されている Unity リポジトリは見つかりませんでした。',
    },
    related: '関連プロジェクト',
  },
  contact: {
    kicker: '連絡',
    title: '連絡先',
    body: '連絡先は GitHub、LinkedIn、メールです。ブログと所在地は載せていません。',
    githubLabel: 'GitHub プロフィール',
    emailLabel: 'メール',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    rights: 'N3skafe アカウントの公開リポジトリ。',
  },
  projects: {
    'tui-helper': {
      problem:
        'プロンプトの下で cmd、PowerShell、git の名前を選び、送信した行だけを実行します。',
      overview:
        '入力行の下に候補と短い説明を出すターミナルプロンプトです。候補を選んでいる間はコマンドを実行しません。Enter で行を送ると、その行だけをフォアグラウンドで実行し、stdout、stderr、終了状態を表示します。プログラムの画面と Windows コマンドの説明は英語です。',
      implementation: [
        'リリース v1.0.0 は 2026-11-03 に公開され、tui.exe と tui.exe.sha256 があります。exe の実行に Python は不要です。そのフォルダで cmd は tui、PowerShell は .\\tui.exe を実行します。ソースには引き続き Python 3.10 以降と prompt_toolkit が必要で、Windows では build.ps1 が dist\\tui.exe を作ります。',
        '空行のメニューは help、clear、exit、git、docker、npm、cd、open です。最初の単語は cmd のヘルプ名、PATH 上のプログラム、PowerShell の cmdlet・関数・エイリアスにも一致します。git の候補は git help -a、外部コマンド、エイリアスから来ます。',
        '送信した行は新しいシェルに渡します。Windows コマンドは cmd.exe /d /c、PowerShell にしかない名前は Windows PowerShell -NoProfile、Linux は /bin/sh -c です。親セッションには接続しません。',
        'test_completion.py と test_execution.py が、対話型ターミナルを開かずに候補とコマンド処理を確認します。',
      ],
      decisions: [
        '候補を受け入れることと実行は分かれています。メニューが閉じた次の Enter が行を送信します。',
        '同じ名前が複数の出典にあるときは、このプログラム、cmd、PATH、PowerShell の順で一つだけ残します。',
        'netsh と diskpart はターミナルを渡さず、入れ子のプロンプトで続けます。UAC の画面は開きません。',
      ],
      limitations: [
        'コマンドはフォアグラウンドだけで動きます。ジョブ制御はなく、全画面のプログラムはターミナルの状態を崩すことがあります。シェル変数とエイリアスは次の送信へ残りません。',
        '補完は単純なトークンだけを見ます。パイプ、グロブ、入れ子の引用符、リダイレクトからは候補を作りません。履歴はホームディレクトリのプレーンテキストなので、行に入力したパスワードもそのファイルに残ります。',
        '単体テストは、実際のコンソールでの入力、ウィンドウサイズの変更、Ctrl+C を扱っていません。',
      ],
    },
    'maidops-lab': {
      problem:
        'ターミナルのキャラクターは状態を説明し、作業の判断は画面ではなくサービス層に置きます。',
      overview:
        'README は現在の実装を Phase 5 と呼んでいます。DEMO は固定の fixture を再生し、シェル、プロジェクトファイル、ネットワーク、モデルには触れず、学習もしません。LIVE は Spring Boot API、PostgreSQL、登録されたコマンドを実行するワーカーを使います。失敗ログのラベル草案は規則ベースです。確定ラベルが条件を満たすと、trainer/ が固定ハッシュ埋め込みの上の小さな MLP を学習します。外部 LLM はありません。',
      implementation: [
        'maidops-tui パッケージは Python 3.11 が必要で、Textual と httpx に依存します。README の DEMO 手順は editable インストールのあと python -m maidops_tui です。テストは pytest と書かれています。',
        'LIVE では ApiService が MAIDOPS_BACKEND_URL に接続します。アーキテクチャの文書は Spring Boot 3.5.16、Java 21、PostgreSQL を挙げています。Compose はホストのポートを 127.0.0.1 だけに開きます。API 認証はなく、localhost の単一ユーザー向けと書かれています。',
        'ワーカーは登録された {python} 引数だけを、シェルを使わず実行します。新しい草案は RULE_BASED で、デフォルトモデルがあると MODEL です。サーバーはチェックポイントを実行せず、トレーナーは argmax を返します。',
        'maidops-trainer は PyTorch に依存します。埋め込みはローカルの hashing-char-ngram-v1 なので、埋め込みファイルはダウンロードしません。',
      ],
      decisions: [
        'LIVE の接続に失敗すると切断を表示し、ジョブを作りません。ワーカーがなければ新しいジョブは QUEUED のままになり、成功には変わりません。',
        '確定ラベルは承認または修正のあとだけ保存されます。承認だけでは学習が始まらず、学習が終わってもデフォルトモデルは自動では替わりません。',
        '入力したコマンドはシェルへ送りません。DEMO のデータはプロセスが終わると消えます。LIVE のジョブとレビューは PostgreSQL に残ります。',
      ],
      limitations: [
        'README には、その PC に Docker がなく、Compose でバックエンド、ワーカー、トレーナーをまとめて起動する実行は確認していないと書かれています。Linux での実行と CUDA 学習も確認していません。',
        '学習した MLP は新しいログを分類しません。新しい草案はキーワード規則のままです。意味検索はなく、softmax の出力を補正済みの確率としては扱いません。',
        'このリポジトリのデモ URL と GitHub リリースはありませんでした。',
      ],
    },
    'perplexity-door-bell': {
      problem: 'Perplexity デスクトップアプリで応答が終わったら、音で知らせます。',
      overview:
        '応答が終わると音を鳴らし、ポップアップを出せる Windows プログラムです。公開ファイルは PerplexityDoorBell.exe なので、そのファイルの実行に Python は不要です。ライセンスは MIT です。README には、Perplexity の画面言語が韓国語のときに確認したと書かれています。',
      implementation: [
        '画面の 응답 중지(Esc) ボタンが現れてから 1 秒消え続けると、一度だけ知らせます。正常終了、キャンセル、エラーによる停止は同じ通知を使います。',
        'Perplexity を閉じて再び開くと、プロセス名、ウィンドウタイトル、入力欄で新しいウィンドウを探します。requirements.txt には pywinauto があり、doorbell.spec が PyInstaller のビルドです。',
        'ウィンドウ言語の表示名は、README にある 한국어、English、中文、日本語 です。言語、音、ポップアップの設定は exe の隣の config.json に保存されます。',
        'README には、回答本文、入力欄の文字、ログイン情報を読まず、ネットワークへ送らず、クリックやキー入力で Perplexity のウィンドウを操作しないと書かれています。',
      ],
      decisions: [
        '完了とキャンセルを別の通知には分けません。README は、停止ボタンが消えることを合図にしています。',
        'ウィンドウが最小化されている間は、アプリが起動していることだけが分かり、応答を生成中かどうかは区別できません。',
      ],
      limitations: [
        '最小化中に終わった質問は、ウィンドウを戻した時点ですでに終わっていれば通知しません。',
        '公開 exe は署名されていません。Windows が発行元を確認できないと表示することがあります。',
        'リリース v1.1.1 は 2026-11-03 に公開され、PerplexityDoorBell.exe が添付されています。リリースノートには、会話画面でも完了を検知すること、言語を変えるとウィンドウの文言がすぐ変わり、次回起動後も保持されると書かれています。',
      ],
    },
    'sena-cue': {
      problem:
        'アカウントや API キーなしで、ウェイクワードと手の形により、インストール済み YouTube アプリの通常動画を一時停止または再生します。',
      overview:
        '英語で HI SENA と言ったあと、開いた手のひらで一時停止、親指を上げて再生します。音声と手の認識は端末の中で行います。画面の言語は英語、韓国語、簡体字中国語、日本語から選べます。リポジトリ名は yt_handclap で、README のアプリ名は Sena Cue です。',
      implementation: [
        'リポジトリの言語集計は Kotlin です。HI SENA のあと前面カメラが数秒開き、開いた手のひらは一時停止、親指は再生です。音声と手の認識は端末の中で行い、アカウントや API キーはありません。',
        'コマンドはパッケージ com.google.android.youtube だけに送られます。YouTube がメディアセッションを出し、通知アクセスがオンの通常動画が対象です。ライセンスの節は sherpa-onnx のキーワードモデルと MediaPipe のジェスチャーモデルを挙げています。マイクの音声とカメラのフレームは保存もアップロードもしません。',
        '文書のビルドは gradlew :app:testDebugUnitTest :app:lintDebug :app:assembleDebug です。デバッグ APK は app/build/outputs/apk/debug/app-debug.apk です。JDK 17 以降と Android SDK が必要です。README はコンパイル SDK 37.2、ターゲット SDK 37、最小 SDK 26 を挙げています。',
        'ウェイクワード 1 回につきコマンドは最大 1 回です。開いた手のひらは常に一時停止、親指は常に再生です。',
      ],
      decisions: [
        'HI SENA を待つ間、カメラは閉じています。制御は画面が表示されているときだけ開始し、起動時に自動では始まりません。',
        '制御するのは YouTube アプリだけです。YouTube Music と他のオーディオアプリは対象ではありません。README は Shorts、広告、ライブをその通常動画の使い方の外に置いています。',
      ],
      limitations: [
        '動画の再生、埋め込み、ダウンロードはしません。シーク、音量、次の動画、YouTube を閉じる操作もありません。',
        '公開された GitHub リリースはありませんでした。README が実行ファイルとして挙げるのは、その Gradle ビルドのデバッグ APK です。',
        '同梱したモデルとライブラリはそれぞれのライセンスを維持します。MIT はこのリポジトリ自身のソースに適用されます。',
      ],
    },
  },
} satisfies Dictionary
