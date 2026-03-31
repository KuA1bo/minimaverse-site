// src/app/layout.tsx
// Root layout component for Minimaverse - Next.js App Router
// Updated: metadata title/description for SEO and neutral positioning
// Note: All comments in English only
// Content: 1:1 unchanged

import './globals.css';
import Link from 'next/link';
import type { Metadata, Viewport } from 'next';

// ExternalLink component for external links (reusable)
const ExternalLink = ({ 
  href, 
  children, 
  className = "",
  ariaLabel
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  ariaLabel?: string;
}) => (
  <a 
    href={href.trim()} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 ${className}`}
    aria-label={ariaLabel}
  >
    {children}
    <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);

// Metadata configuration for SEO and favicons
export const metadata: Metadata = {
  title: 'Minimaverse — Minima Ecosystem Hub',
  description: 'Unofficial, neutral information hub covering the Minima protocol, core components, development history, and publicly verifiable updates.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

// Viewport configuration for browser/extension compatibility
export const viewport: Viewport = {
  colorScheme: 'dark', // Tells Dark Reader and browsers: "this site is already dark"
};

// Enhanced background orbs - animated style
const BackgroundOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div 
      className="absolute top-1/4 -left-32 w-80 h-80 bg-purple-500/40 rounded-full blur-2xl animate-float-slow will-change-transform transform-gpu" 
      aria-hidden="true"
    />
    <div 
      className="absolute top-3/4 -right-32 w-80 h-80 bg-blue-500/40 rounded-full blur-2xl animate-float-slower will-change-transform transform-gpu" 
      aria-hidden="true"
    />
  </div>
);

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-gray-200 overflow-y-auto relative">
        
        <BackgroundOrbs />

        {/* Global Header - HYBRID STICKY MODE (scrollable on mobile, fixed on desktop) */}
        <header className="relative sm:sticky sm:top-0 z-50 mb-6 sm:mb-8 backdrop-blur-xl bg-black/30 border-b border-gray-700/40 
                          transition-all duration-300 hover:border-purple-500/40">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-3 sm:gap-4 max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
            
            {/* Logo - responsive sizing */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <Link 
                href="/" 
                className="group flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/logo.webp"
                  alt="Minimaverse Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain bg-transparent mix-blend-screen"
                />
                <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                  Minimaverse
                </span>
              </Link>
            </div>

            {/* Navigation - WRAPPING + RESPONSIVE */}
            <nav className="flex-1 flex justify-end flex-wrap gap-x-1.5 gap-y-1 sm:gap-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/protocol', label: 'Protocol' },
                { href: '/ecosystem', label: 'Ecosystem' },
                { href: '/developers', label: 'Developers' },
                { href: '/tools', label: 'Tools' },
                { href: '/timeline', label: 'Timeline' },
                { href: '/partners', label: 'Partners' },
                { href: '/nodes', label: 'Nodes' },
                { href: '/news', label: 'News' },
              ].map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="group relative px-2 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 
                                 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 relative z-10">
          {children}
        </main>

        {/* Footer - responsive spacing */}
        <footer className="relative z-10 mt-12 sm:mt-16 backdrop-blur-xl bg-black/30 border-t border-gray-700/40 
                          transition-all duration-300 hover:border-purple-500/40">
          <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 text-center md:text-left">
              
              {/* Quick Links */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                  <span className="text-lg">📚</span> Quick Links
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2">
                  <Link href="/links" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Links
                  </Link>
                  <Link href="/open-questions" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Open Questions
                  </Link>
                </div>
              </div>

              {/* Dev Resources */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                  <span className="text-lg">⚙️</span> Dev Resources
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2">
                  <ExternalLink href="https://docs.minima.global" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Docs
                  </ExternalLink>
                  <ExternalLink href="https://github.com/minima-global" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> GitHub
                  </ExternalLink>
                </div>
              </div>

              {/* Legal */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                  <span className="text-lg">📢</span> Legal
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2">
                  <Link href="/disclaimer" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Disclaimer
                  </Link>
                  <ExternalLink href="https://github.com/KuA1bo/minimaverse-site/raw/main/LICENSE" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> MIT License
                  </ExternalLink>
                </div>
              </div>
            </div>

            <div className="relative h-px bg-gray-700 mb-4 sm:mb-6" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                © 2026 Minimaverse — Independent documentation project
              </p>
              <p className="flex items-center gap-2 text-center md:text-right">
                <span className="text-gray-600 hidden sm:inline">•</span>
                Not affiliated with Minima Foundation
                <span className="text-gray-600 hidden sm:inline">•</span>
                <ExternalLink href="https://github.com/KuA1bo/minimaverse-site" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  GitHub
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </ExternalLink>
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
