import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/infrastructure')({
  component: Infrastructure,
})

function Infrastructure() {
  const infrastructureData = {
    overview: {
      title: "インフラ（IT）事業部での貢献",
      description: "2023年にコンクール事業部からインフラ事業部に異動して以降、組織全体のIT基盤を支える重要な役割を担当。クラウドインフラの構築・運用から、社内システムの開発・保守、業務効率化のためのツール導入・開発、そして技術的なサポートまで、幅広い業務を担当しています。",
      keyPoints: [
        "インフラ全体の設計から運用・保守、社内サポートまでカバーする「要の存在」",
        "複数のクラウドプラットフォームを活用した柔軟なインフラ構築",
        "自動化・効率化ツールの開発によるオペレーション改善",
        "技術的専門知識と現場ニーズを結びつける実装力"
      ]
    },
    categories: [
      {
        name: "クラウドインフラの構築・運用・保守",
        icon: "☁️",
        items: [
          "AWS、Google Cloud、Microsoft Azure、Cloudflareの導入・管理・最適化",
          "Tailscale（SaaS VPN）導入による接続性向上と管理簡便化",
          "Microsoft Azureの非営利特典獲得（仮想マシン、Azure OpenAI利用）",
          "portal.piano.or.jpのConoHaサーバーからAzureへの移転によるコスト削減",
          "ConoHa、Google Cloudの未使用リソース削除と予約インスタンス導入",
          "Cloud Monitoringによるシステムエラー・DB負荷の早期捕捉体制構築",
          "Cloudflareエコシステム（Workers, R2, AI Gateway）の活用",
          "Google Cloudでのリソース課金トラブル対応と予算アラート設定"
        ]
      },
      {
        name: "社内システムの開発・運用・保守",
        icon: "🔧",
        items: [
          "業務効率化のための社内向け便利ツール開発・展開",
          "Slack to timecard: Slack打刻とFileMakerタイムカード連携",
          "Slack to namecard: 名刺画像のAI解析とFileMaker自動登録",
          "Slack to GitHub Issue: SlackからのAI自動Issue起票",
          "A_AB スケジュール連携Gmailアドオン開発",
          "FileMakerベースのコンペティション集計システム機能拡張・保守",
          "週初ミーティング用資料のGitHub API自動化",
          "給与・賞与明細電子化システムのApps Script開発",
          "東音：本選の結果自動アップ機能の開発・実装",
          "FileMaker C_AIの画像生成・読取り機能実装"
        ]
      },
      {
        name: "情シス業務・技術サポート",
        icon: "🛠️",
        items: [
          "社内技術問い合わせ対応",
          "VPN接続トラブルシューティング",
          "新技術・ツールの導入・展開支援",
          "組織全体のITリテラシー向上活動"
        ]
      },
      {
        name: "技術調査・知識共有",
        icon: "📚",
        items: [
          "AI関連技術（OpenAI API、Langchain、Vector Database）の調査・活用",
          "Rust、Next.js、Nest.js、Prismaなどの技術学習",
          "技術イベント参加・社内報告による最新動向共有",
          "Qiita・Zennでの技術記事執筆・公開",
          "Claude MCPツールのチーム内導入とAI活用推進"
        ]
      },
      {
        name: "自動化・効率化",
        icon: "⚙️",
        items: [
          "定型業務の自動化による効率向上と人的ミス削減",
          "FileMakerのメモリ・CPU日次チェックのSlack自動投稿",
          "ルーティン作業のスクリプト化・自動化"
        ]
      },
      {
        name: "セキュリティ",
        icon: "🔒",
        items: [
          "VPN関連不具合対応",
          "クラウドサービスのセキュリティ設定最適化",
          "メール認証（SPF/DKIM/DMARC）対応",
          "組織全体のセキュリティ強化活動"
        ]
      }
    ],
    projects: [
      {
        name: "Azureマイグレーション",
        year: "2023",
        description: "非営利特典を活用したポータルサイトの移行とコスト削減"
      },
      {
        name: "Slack連携ツール群",
        year: "2023-2025",
        description: "タイムカード・名刺・GitHub連携など、Slackをハブとした業務自動化"
      },
      {
        name: "Cloudflareエコシステム",
        year: "2024",
        description: "Workers/R2/AI Gatewayを活用したマイクロサービス構築"
      },
      {
        name: "FileMaker C_AI",
        year: "2024-2025",
        description: "AI画像生成・解析機能の社内システムへの統合"
      }
    ]
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* ヘッダーセクション */}
      <section className="mb-12 text-center py-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg shadow-xl text-white">
        <h1 className="text-4xl font-bold mb-4">{infrastructureData.overview.title}</h1>
        <p className="text-lg max-w-3xl mx-auto">{infrastructureData.overview.description}</p>
      </section>

      {/* キーポイントセクション */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">主な特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infrastructureData.overview.keyPoints.map((point, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-900 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* カテゴリーセクション */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">業務カテゴリー</h2>
        
        <div className="space-y-8">
          {infrastructureData.categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-700 text-white p-4">
                <h3 className="text-xl font-bold flex items-center">
                  <span className="mr-2 text-2xl">{category.icon}</span>
                  {category.name}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-800">
                      <span className="text-blue-500 mr-2 font-bold">•</span>
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
        <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">主要プロジェクト</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infrastructureData.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-400 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-blue-700">{project.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">{project.year}</span>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* まとめセクション */}
      <section className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">総評</h2>
        <p className="text-lg text-blue-900">
          インフラ事業部での業務を通じて、クラウド技術の活用とシステム自動化による組織DXを推進してきました。
          複数のクラウドプラットフォームを横断的に活用し、コスト最適化と機能強化を両立させながら、
          現場のニーズに合わせた柔軟なツール開発によって業務効率の向上に貢献しています。
        </p>
      </section>
    </div>
  );
}
