import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

// ✅ Явное указание метаданных и иконок
export const metadata: Metadata = {
  title: 'Minimaverse',
  description: 'Minima Protocol Universe Documentation',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-black text-gray-200 overflow-y-auto">
        
        {/* Header */}
        <header className="mb-6 border-b border-gray-700 p-4">
          <div className="flex items-center gap-4 max-w-6xl mx-auto">
            {/* Логотип */}
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img
                  src="/logo.webp"
                  alt="Minimaverse Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-white">Minimaverse</span>
              </Link>
            </div>

            {/* Навигация */}
            <nav className="flex-1 flex justify-end gap-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/protocol" className="hover:text-white transition-colors">Protocol</Link>
              <Link href="/ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
              <Link href="/developers" className="hover:text-white transition-colors">Developers</Link>
              <Link href="/nodes" className="hover:text-white transition-colors">Nodes</Link>
              <Link href="/news" className="hover:text-white transition-colors">News</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto w-full p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-700 p-6">
          <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
            <p>© 2026 Minimaverse. Documentation project.</p>
            <p className="mt-2">
              Not affiliated with Minima Foundation. 
              <Link href="/disclaimer" className="underline ml-1 hover:text-gray-300">Disclaimer</Link>
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}

