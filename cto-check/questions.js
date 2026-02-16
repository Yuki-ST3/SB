const questions = [
  {
    id: 1,
    text: "PCを使って業務を行っている従業員は何名ですか？",
    options: [
      { text: "10名未満", scores: { A: 5, B: 5, C: 5 } },
      { text: "10-50名", scores: { A: 15, B: 10, C: 10 } },
      { text: "50名以上", scores: { A: 25, B: 15, C: 15 } }
    ]
  },
  {
    id: 2,
    text: "毎月のIT関連支払（保守料、SaaS、回線代など）の総額を把握していますか？",
    options: [
      { text: "完璧に把握している", scores: { A: 0, B: 0 } },
      { text: "ざっくりとしか知らない", scores: { A: 15, B: 10 } },
      { text: "全く把握していない", scores: { A: 25, B: 20 } }
    ]
  },
  {
    id: 3,
    text: "1年以上内容を見直していない「保守契約」や「月額ライセンス」はありますか？",
    options: [
      { text: "ない", scores: { A: 0 } },
      { text: "ある / わからない", scores: { A: 30 } }
    ]
  },
  {
    id: 4,
    text: "【現場】毎日1時間以上の「Excelへの手入力やコピペ作業」が現場で発生していますか？",
    options: [
      { text: "ほとんどない", scores: { C: 0 } },
      { text: "かなり発生している", scores: { A: 20, C: 35 } }
    ]
  },
  {
    id: 5,
    text: "【リスク】前任者が作った「中身がブラックボックス化したマクロやExcelファイル」が現在も業務に使われていますか？",
    options: [
      { text: "使われていない", scores: { B: 0 } },
      { text: "使われている", scores: { B: 40 } }
    ]
  },
  {
    id: 6,
    text: "【判断】「システム化すべきか、今のままでいくべきか」の判断がつかず、1ヶ月以上止まっている案件はありますか？",
    options: [
      { text: "ない", scores: { C: 0 } },
      { text: "ある", scores: { C: 45 } }
    ]
  },
  {
    id: 7,
    text: "システムトラブルやセキュリティ問題が起きた際、即座に相談できる「身内の専門家（CTO代行）」はいますか？",
    options: [
      { text: "いる", scores: { B: 0 } },
      { text: "いない", scores: { B: 30 } }
    ]
  },
  {
    id: 8,
    text: "ChatGPTなどの生成AIを、実際の業務効率化に活用できていますか？",
    options: [
      { text: "活用できていない", scores: { C: 20 } },
      { text: "活用できている", scores: { C: 0 } }
    ]
  },
  {
    id: 9,
    text: "今後3年以内に「システムの刷新」や「新規事業の立ち上げ」の予定はありますか？",
    options: [
      { text: "ない", scores: { C: 5 } },
      { text: "ある", scores: { C: 30 } }
    ]
  }
];

export default questions;
