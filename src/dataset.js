const defaultDataset = {
  "init": {
      answers: [
          {content: "仕事を依頼したい", nextId: "job_offer"},
          {content: "どうしてエンジニアになりたいと思ったんですか？", nextId: "dream"},
          {content: "趣味は何ですか？", nextId: "hobby"}
      ],
      question: "はじめまして！プロのエンジニアを目指している川北翔です！よろしくおねがいします！",
  },
  "job_offer": {
      answers: [
          {content: "Webサイトを制作してほしい", nextId: "website"},
          {content: "Webアプリを開発してほしい", nextId: "webapp"},
          {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
          {content: "その他", nextId: "other_jobs"}
      ],
      question: "どのようなお仕事でしょうか？",
  },
  "website": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
  },
  "webapp": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  "automation_tool": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
  },
  "other_jobs": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね。コチラからお問い合わせできます。",
  },
  "dream": {
      answers: [
          {content: "どのような学習を行いましたか？", nextId: "learn"},
          {content: "苦労したことはなんですか？", nextId: "work"},
          {content: "どのような作品を作りましたか？", nextId: "artifact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "エンジニアの仕事がかっこいいと思ったからです！",
  },
  "learn": {
      answers: [
          {content: "ポートフィリオサイトを見てみる", nextId: "「ポートフォリオサイトにページ遷移」"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "主に、HTML & CSS、JavaScript、PHPやGitを学習しました！",
  },
  "work": {
      answers: [
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "作成した作品をFirebaseのホスティングサービスを利用してデプロイしたことですかね！とても苦労しましたがなんとかデプロイすることができました！",
  },
  "artifact": {
      answers: [
          {content: "Todo管理アプリを見てみる", nextId: "https://twitter.com/torahack_"},
          {content: "ブログサイトを見てみる", nextId: "https://twitter.com/torahack_"},
          {content: "おすすめの模写コーディングを見ている", nextId: "https://twitter.com/torahack_"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Todo管理アプリケーション、ホームページの模写コーディング、ブログサイトなどを作成しました！よかったら見てください！",
  },
  "hobby": {
      answers: [
          {content: "詳しく知りたい！", nextId: "https://twitter.com/torahack_"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "街の散策と美味しいご飯屋さん巡りです！詳細は私のブログにて紹介していますのでよろしければご覧ください！",
  },
}

export default defaultDataset;