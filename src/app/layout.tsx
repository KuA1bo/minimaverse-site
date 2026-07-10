import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata, Viewport } from 'next';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HtmlClassSync from '../components/HtmlClassSync';
import EconomyModeToggle from '../components/EconomyModeToggle';
import CinematicParticles from '../components/CinematicParticles';
import SupportBlock from '@/components/SupportBlock';
import Header from '@/components/Header';

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
    <svg
      className="w-3 h-3 text-gray-500 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
);

export const metadata: Metadata = {
  title: 'Minimaverse — Minima Ecosystem Hub',
  description: 'Unofficial, neutral information hub covering the Minima protocol, core components, development history, and publicly verifiable updates.',

  alternates: {
    canonical: 'https://minimaverse.com/',
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'Minimaverse Feed' }],
    },
  },

  icons: {
    icon: [{ url: '/icon.png', sizes: '192x192', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark'
};

const BackgroundOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
    <div
      className="orb-breathing absolute top-1/4 -left-48 lg:-left-32
                 w-48 h-48 lg:w-80 lg:h-80
                 bg-purple-500/10 lg:bg-purple-500/45
                 blur-xl lg:blur-2xl rounded-full"
      aria-hidden="true"
    />
    <div
      className="orb-breathing absolute top-3/4 -right-32
                 lg:w-80 lg:h-80 lg:bg-blue-500/25 lg:blur-xl
                 w-56 h-56 bg-blue-500/10 blur-xl rounded-full"
      aria-hidden="true"
    />
  </div>
);

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-gray-200 overflow-y-auto relative">
        <HtmlClassSync />

        <BackgroundOrbs />

        <CinematicParticles />

        <Analytics />
        <SpeedInsights />

        <Header />

        <main className="flex-1 max-w-6xl mx-auto w-full px-4 pt-2 sm:pt-4 relative z-10">
          {children}
        </main>

        <footer className="relative z-10 mt-12 sm:mt-16 backdrop-blur-xl bg-black/30 border-t border-gray-700/40 transition-all duration-300 hover:border-purple-500/40">
          <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 text-center md:text-left">
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                  <span className="text-lg">📚</span> Quick Links
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2">
                  <Link href="/resources" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Resources
                  </Link>
                  <Link href="/open-questions" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Open Questions
                  </Link>
                </div>
              </div>

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

              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                  <span className="text-lg">📢</span> Legal
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2">
                  <Link href="/disclaimer" aria-label="Read full disclaimer" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> Disclaimer
                  </Link>
                  <ExternalLink href="https://github.com/KuA1bo/minimaverse-site/raw/main/LICENSE" className="group text-[11px] sm:text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span> MIT License
                  </ExternalLink>
                </div>
              </div>
            </div>

            <SupportBlock />

            <div className="relative h-px bg-gray-700 mb-4 sm:mb-6" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                © 2026 Minimaverse — Independent documentation project
              </p>
              <div className="flex items-center gap-3">
                <EconomyModeToggle />
              </div>
              <p className="flex items-center gap-2 text-center md:text-right">
                <span className="text-gray-600 hidden sm:inline">•</span>
                Not affiliated with Minima Global
                <span className="text-gray-600 hidden sm:inline">•</span>
                <ExternalLink href="https://github.com/KuA1bo/minimaverse-site" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                  GitHub
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </ExternalLink>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <Link href="/rss.xml" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1" aria-label="RSS Feed">
                  RSS
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6-3a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                </Link>
              </p>
            </div>

            <p className="text-gray-600 text-[11px] mt-3 text-center sm:text-right opacity-80 hover:opacity-100 transition-opacity duration-300">
              Built for transparency &amp; community 🌐
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
