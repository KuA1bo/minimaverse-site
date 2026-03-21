// src/app/layout.tsx
// Root layout component for Minimaverse - Next.js App Router
// Enhanced with Upscayl-style visuals: glassmorphism, gradients, animated nav

import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

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
      <body className="flex flex-col min-h-screen bg-black text-gray-200 overflow-y-auto relative">
        
        {/* Animated background orbs (same as homepage) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-3/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float-slower" />
        </div>

        {/* Global Header - appears on all pages */}
        <header className="sticky top-0 z-50 mb-8 backdrop-blur-xl bg-black/40 border-b border-gray-700/50 
                          transition-all duration-300 hover:border-purple-500/30">
          {/* Animated gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-4 max-w-6xl mx-auto px-4 py-3">
            
            {/* Logo and site title - links to homepage */}
            <div className="flex items-center gap-3">
              <Link 
                href="/" 
                className="group flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                  <img
                    src="/logo.webp"
                    alt="Minimaverse Logo"
                    className="relative w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Minimaverse
                </span>
              </Link>
            </div>

            {/* Main navigation links */}
            <nav className="flex-1 flex justify-end gap-1 md:gap-2 flex-wrap">
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
                  className="group relative px-3 py-2 text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                  {/* Animated underline - centered expansion */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 
                                 group-hover:w-full transition-all duration-300" />
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main content area - page-specific content renders here */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 relative z-10">
          {children}
        </main>

        {/* Global Footer - appears on all pages */}
        <footer className="relative z-10 mt-16 backdrop-blur-xl bg-black/40 border-t border-gray-700/50 
                          transition-all duration-300 hover:border-purple-500/30">
          <div className="max-w-6xl mx-auto px-4 py-8">
            
            {/* Footer sections grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
              
              {/* Quick Links */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                  <span className="text-lg">📚</span> Quick Links
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Link href="/links" className="group text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Links
                  </Link>
                  <Link href="/open-questions" className="group text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Open Questions
                  </Link>
                </div>
              </div>

              {/* Dev Resources */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                  <span className="text-lg">⚙️</span> Dev Resources
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <ExternalLink href="https://docs.minima.global" className="group text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Docs
                  </ExternalLink>
                  <ExternalLink href="https://github.com/minima-global" className="group text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> GitHub
                  </ExternalLink>
                </div>
              </div>

              {/* Social / Legal */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                  <span className="text-lg">📢</span> Legal
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Link href="/disclaimer" className="group text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Disclaimer
                  </Link>
                  <ExternalLink href="https://github.com/KuA1bo/minimaverse-site/raw/main/LICENSE" className="group text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> MIT License
                  </ExternalLink>
                </div>
              </div>
            </div>

            {/* Divider with gradient */}
            <div className="relative h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6" />

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                © 2026 Minimaverse — Independent documentation project
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-600">•</span>
                Not affiliated with Minima Foundation
                <span className="text-gray-600">•</span>
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
