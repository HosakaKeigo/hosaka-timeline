import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/competition')({
  component: Competition,
})

function Competition() {
  const competitionData = {
    overview: {
      title: "コンクール事業への貢献",
      description: "2019年から2022年までコンクール事業部に所属し、コンクール運営に深く関わってきました。システム関連のサポート・開発から、運営・事務作業の支援まで幅広く担当しています。",
      keyPoints: [
        "技術と事務の両方に精通したオールラウンドな実務中核人材",
        "全体最適視点を持つハブ的存在",
        "トラブルに対する先回り的な思考とリスクヘッジ力の発揮",
        "既存業務の踏襲＋改良提案による持続的改善"
      ]
    },
    categories: [
      {
        name: "コンペティション運営・準備",
        icon: "🏆",
        items: [
          "準本選・本選の申込ページの文言修正、定員管理画面の設計、マイページ連携の調整",
          "本選参加票のHTMLメール化に伴うレイアウト・フィールド仕様の整備",
          "支部からの要望に応じたQRコード表示や個別案内への柔軟対応",
          "全国大会に向けた申込フォーム仕様（Typeform）の確認と改修",
          "本選時間割のWeb掲載・参加票送信のフロー確認",
          "動画予選に向けて、マイページバナーのリンク差し替えなどWeb導線の整備",
          "地区調整のためのシミュレーション用スプレッドシートの作成依頼に対応",
          "プログラムや参加票発送、審査員調整などの現場運営支援",
          "2023年度コンペに向けた仕様検討会への参加",
          "ソロデュオ入賞者記念コンサートのチケット情報をマイページに掲載する要望への対応"
        ]
      },
      {
        name: "システム調整・開発・保守",
        icon: "💻",
        items: [
          "FileMakerベースの集計・審査システムの設計・修正依頼",
          "定員管理、ドビ転送、受賞フラグなどシステム処理の実装・監修",
          "特級・全国大会の審査集計システム拡張（審査員特別賞の追加実装、FileMakerと連携）",
          "採点入力画面におけるTabキー動作不良の問い合わせに対応",
          "印刷ズレ・表示レイアウト不具合に関する再現条件・ブラウザバージョン確認",
          "東音：本選の結果自動アップの実現（集計システムのリファクタリングとテストの充実）",
          "ブルグミュラーファイナル、バッハコンクール全国大会、ショパンランドコンクール本選、ソナタコンクール本選で実装",
          "Cloud Monitoringの導入による結果速報エラーの捕捉"
        ]
      },
      {
        name: "トラブル対応",
        icon: "🔧",
        items: [
          "「審査結果の氏名表記ミス」など現場からの修正要請に対応",
          "採点票の入れ違い、講評画面の「？」表示などに関する問い合わせ・相談に対応",
          "表示・印刷トラブル（奨励賞の賞状レイアウトズレ）への技術的な確認・再現条件の検証",
          "アクセス集中によるページ表示不具合への対応"
        ]
      },
      {
        name: "事務処理",
        icon: "📋",
        items: [
          "会報・コンペ資料へのチラシ封入業務",
          "請求・納期・納品数管理",
          "個別対応"
        ]
      }
    ],
    projects: [
      {
        name: "ブルグミュラーコンクール",
        year: "2021-2022",
        description: "集計システムの改善と結果自動アップ機能の実装"
      },
      {
        name: "バッハコンクール全国大会",
        year: "2022",
        description: "審査集計システム拡張と審査員特別賞の追加実装"
      },
      {
        name: "ショパンランドコンクール",
        year: "2022-2023",
        description: "本選結果自動アップと地区調整システムの整備"
      },
      {
        name: "ソナタコンクール",
        year: "2023",
        description: "本選参加票のHTMLメール化と結果自動アップの実装"
      }
    ]
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* ヘッダーセクション */}
      <section className="mb-12 text-center py-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-xl text-white">
        <h1 className="text-4xl font-bold mb-4">{competitionData.overview.title}</h1>
        <p className="text-lg max-w-3xl mx-auto">{competitionData.overview.description}</p>
      </section>

      {/* キーポイントセクション */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-2">主な特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitionData.overview.keyPoints.map((point, index) => (
            <div key={index} className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <p className="text-indigo-900 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* カテゴリーセクション */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-2">業務カテゴリー</h2>
        
        <div className="space-y-8">
          {competitionData.categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-indigo-700 text-white p-4">
                <h3 className="text-xl font-bold flex items-center">
                  <span className="mr-2 text-2xl">{category.icon}</span>
                  {category.name}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-800">
                      <span className="text-indigo-500 mr-2 font-bold">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* プロジェクト実績セクション */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-2">主要コンクール実績</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitionData.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-400 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-indigo-700">{project.name}</h3>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">{project.year}</span>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* まとめセクション */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">総評</h2>
        <p className="text-lg text-indigo-900">
          コンクール事業部での経験を通じて、技術的な側面と運営実務の両方に精通したスキルセットを構築しました。
          システム改善によるオペレーション効率化と、現場のニーズに即した柔軟な対応を両立させることで、
          コンクール運営全体の質の向上に貢献してきました。
        </p>
      </section>
    </div>
  );
}
