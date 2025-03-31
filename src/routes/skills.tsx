import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills')({
  component: Skills,
})

function Skills() {
  const skillsData = [
    {
      name: "FileMaker",
      description: "レイアウト作成、スクリプト修正・作成、外部API連携、FileMaker Data API連携など幅広く。",
      icon: "📊"
    },
    {
      name: "Google Apps Script",
      description: "Claspを使ったプロジェクト管理、TypeScriptでの実装。Web Appの作成からGmail、Google Chat UIまで幅広く実装・運用",
      icon: "📝"
    },
    {
      name: "Ruby on Rails",
      description: "既存プロジェクトの改築、Docker開発環境のセットアップ、RSpecのセットアップ〜作成、バージョンアップ（Rails 5系 / Ruby 2.4 -> Rails 7.2 / Ruby 3.3）",
      icon: "💎"
    },
    {
      name: "Vue",
      description: "Vue2 => Vue3へのバージョンアップ、Nuxt2開発（TypeScript化・テスト追加・CI/CD導入ほか）- コンクール採点システム",
      icon: "🖖"
    },
    {
      name: "TSバックエンド",
      description: "Honoを使ったOpenAPI準拠APIs、NestJS",
      icon: "⚙️"
    },
    {
      name: "Google Colab連携",
      description: "日常業務の効率化（Google Workspace連携ほか）／Gemini API（Vertex AI）を使ったお問い合わせの抽出",
      icon: "🔍"
    },
    {
      name: "GitHub App開発",
      description: "GitHub Appを使ったLLM統合（コードレビュー、Issue整形ほか）",
      url: "https://github.com/HosakaKeigo/OctoThink",
      icon: "🐙"
    },
    {
      name: "Slackアプリ開発",
      description: "Slackアプリケーションの開発および運用",
      url: "https://zenn.dev/ptna/articles/2bd69c532f1bb7",
      icon: "💬"
    },
    {
      name: "Playwright",
      description: "社内導入・普及。E2Eテスト実装、CI連携、レポート出力の自動化",
      icon: "🎭"
    },
    {
      name: "Vitest",
      description: "社内導入・普及。ユニットテスト・コンポーネントテストの実装、カバレッジ計測",
      icon: "✅"
    }
  ];

  const cloudSkills = [
    {
      name: "Google Workspace",
      services: [
        "Adminとして社内管理"
      ]
    },
    {
      name: "Google Cloud",
      services: [
        "GCE",
        "Cloud Run",
        "Cloud Run Functions",
        "Cloud SQL",
        "Workload Identity FederationによるCDセットアップ",
        "Vertex AI（Agent BuilderによるRAG構築）",
        "FinOps（継続割の適用）"
      ],
      icon: "☁️"
    },
    {
      name: "Azure",
      services: [
        "Azure OpenAI（Assistant APIを使ったRAG構築、Responses APIに移行）", 
        "Azure Static Web Apps（社内向けNuxt3アプリのデプロイ）"
      ],
      icon: "📘"
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* ヘッダーセクション */}
      <section className="mb-12 text-center py-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg shadow-xl text-white">
        <h1 className="text-4xl font-bold mb-4">技術スタック</h1>
        <p className="text-lg max-w-3xl mx-auto">開発・運用において習得した技術スキルの一覧です</p>
      </section>

      {/* メインスキルセクション */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-purple-800 border-b-2 border-purple-200 pb-2">開発スキル</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-md p-6 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <span className="text-3xl mr-4 mt-1">{skill.icon}</span>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">{skill.name}</h3>
                  <p className="text-gray-700">{skill.description}</p>
                  
                  {skill.url && (
                    <a 
                      href={skill.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center mt-3 text-purple-600 hover:text-purple-800"
                    >
                      関連リンク
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* クラウドスキルセクション */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-purple-800 border-b-2 border-purple-200 pb-2">クラウドスキル</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cloudSkills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-md p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-bold text-purple-700">{skill.name}</h3>
              </div>
              
              <ul className="space-y-2 text-gray-700">
                {skill.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <span className="text-purple-500 mr-2 font-bold">•</span>
                    <span className="flex-1">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* まとめセクション */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">スキル概要</h2>
        <p className="text-lg text-purple-900">
          FileMakerとGAS開発を基盤としながら、現代的なWebアプリケーション開発とクラウド技術を組み合わせたスキルセットを保有しています。
          フロントエンド、バックエンド、クラウドインフラ、AI連携など、フルスタック開発の経験を活かして、多様な技術課題に対応できます。
        </p>
      </section>
    </div>
  );
}
