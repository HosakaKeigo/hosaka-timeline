import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-4 bg-indigo-800 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">保坂恵吾 ポートフォリオ</h1>
          <div className="flex gap-4 flex-wrap justify-end">
            <Link to="/" className="[&.active]:font-bold hover:text-indigo-200 transition-colors">
              経歴・タイムライン
            </Link>
            <Link to="/competition" className="[&.active]:font-bold hover:text-indigo-200 transition-colors">
              コンクール業績
            </Link>
            <Link to="/infrastructure" className="[&.active]:font-bold hover:text-indigo-200 transition-colors">
              IT基盤業務
            </Link>
            <Link to="/skills" className="[&.active]:font-bold hover:text-indigo-200 transition-colors">
              技術スタック
            </Link>
            <Link to="/resources" className="[&.active]:font-bold hover:text-indigo-200 transition-colors">
              リソース
            </Link>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
      <footer className="bg-indigo-900 text-white p-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p>© 2025 保坂恵吾</p>
        </div>
      </footer>
      {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
    </>
  ),
})
