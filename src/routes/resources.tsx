import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resources')({
  component: Resources,
})

function Resources() {
  const resourcesData = [
    {
      title: "NotebookLM",
      url: "https://notebooklm.google.com/notebook/e2c1bcd7-de2e-46ec-939c-cdf18ea27ac6",
      description: "Google NotebookLMで作成したAIノート",
      icon: "📝"
    },
    {
      title: "Zenn技術記事",
      url: "https://zenn.dev/hosaka313",
      description: "プログラミングや技術に関する記事・知見の共有",
      icon: "💻"
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* ヘッダーセクション */}
      <section className="mb-12 text-center py-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-xl text-white">
        <h1 className="text-4xl font-bold mb-4">参考資料・リソース</h1>
        <p className="text-lg max-w-3xl mx-auto">技術記事や関連資料へのリンク集です</p>
      </section>

      {/* リソースリスト */}
      <section className="mb-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-800 border-b-2 border-green-200 pb-2">外部リンク</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesData.map((resource, index) => (
            <a 
              key={index} 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-white rounded-lg border border-green-200 shadow-md p-6 hover:shadow-lg transition-all hover:border-green-400"
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">{resource.icon}</span>
                <h3 className="text-xl font-bold text-green-700 group-hover:text-green-500 transition-colors">
                  {resource.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">{resource.description}</p>
              <div className="text-green-600 font-medium flex items-center">
                訪問する
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* まとめセクション */}
      <section className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-800">これらのリソースについて</h2>
        <p className="text-lg text-green-900">
          上記は私が作成した技術資料や記事へのリンクです。Zennでは主にプログラミングに関する知見を共有しており、
          NotebookLMでは業務や技術に関連する様々なメモやナレッジをAIと連携して整理しています。
          関心のある分野がありましたら、ぜひご覧ください。
        </p>
      </section>
    </div>
  );
}
