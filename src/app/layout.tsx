// src/app/layout.tsx
// Root layout component for Minimaverse - Next.js App Router

import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

// Metadata configuration for SEO and favicons
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

// Root layout component - wraps all pages in the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-black text-gray-200 overflow-y-auto">
        
        {/* Global Header - appears on all pages */}
        <header className="mb-6 border-b border-gray-700 p-4">
          <div className="flex items-center gap-4 max-w-6xl mx-auto">
            
            {/* Logo and site title - links to homepage */}
            <div className="flex items-center gap-2">
              <Link 
                href="/" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/logo.webp"
                  alt="Minimaverse Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-white">Minimaverse</span>
              </Link>
            </div>

            {/* Main navigation links */}
            <nav className="flex-1 flex justify-end gap-4 md:gap-6 flex-wrap">
              <Link href="/about" className="hover:text-white transition-colors text-sm md:text-base">About</Link>
              <Link href="/protocol" className="hover:text-white transition-colors text-sm md:text-base">Protocol</Link>
              <Link href="/ecosystem" className="hover:text-white transition-colors text-sm md:text-base">Ecosystem</Link>
              <Link href="/developers" className="hover:text-white transition-colors text-sm md:text-base">Developers</Link>
              <Link href="/tools" className="hover:text-white transition-colors text-sm md:text-base">Tools</Link>
              <Link href="/timeline" className="hover:text-white transition-colors text-sm md:text-base">Timeline</Link>
              <Link href="/partners" className="hover:text-white transition-colors text-sm md:text-base">Partners</Link>
              <Link href="/nodes" className="hover:text-white transition-colors text-sm md:text-base">Nodes</Link>
              <Link href="/news" className="hover:text-white transition-colors text-sm md:text-base">News</Link>
            </nav>
          </div>
        </header>

        {/* Main content area - page-specific content renders here */}
        <main className="flex-1 max-w-6xl mx-auto w-full p-4">
          {children}
        </main>

        {/* Global Footer - appears on all pages */}
        <footer className="mt-12 border-t border-gray-700 p-6">
          <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
            <p className="mb-2">© 2026 Minimaverse. Independent documentation project.</p>
            <p className="mb-4">
              Not affiliated with Minima Foundation. 
              <Link href="/disclaimer" className="underline ml-1 hover:text-gray-300">Disclaimer</Link>
            </p>
            <p className="flex justify-center gap-3 md:gap-4 flex-wrap">
              {/* Meta-links: project information */}
              <Link 
                href="/links" 
                className="hover:text-gray-300 transition-colors"
              >
                Links
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                href="/open-questions" 
                className="hover:text-gray-300 transition-colors"
              >
                Open Questions
              </Link>
              <span className="text-gray-700">•</span>
              <a 
                href="https://github.com/KuA1bo/minimaverse-site/raw/main/LICENSE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                License (MIT)
              </a>
              <span className="text-gray-700">•</span>
              <a 
                href="https://github.com/KuA1bo/minimaverse-site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}

