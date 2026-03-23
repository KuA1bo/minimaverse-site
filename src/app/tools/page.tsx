// src/app/tools/page.tsx
// Tools page - verified utilities for Minima Protocol
// Visual enhancements applied per site design system (content unchanged)
// Fixed: responsive GitHub icon offset (small on mobile, full on tablet/desktop)

import Link from 'next/link';

// ExternalLink component for all external links with ↗ icon (enhanced with hideArrow)
const ExternalLink = ({ 
  href, 
  children, 
  className = "",
  ariaLabel,
  hideArrow = false
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  ariaLabel?: string;
  hideArrow?: boolean;
}) => (
  <a 
    href={href.trim()} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 ${className}`}
    aria-label={ariaLabel}
  >
    {children}
    {!hideArrow && (
      <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )}
  </a>
);

// StatusBadge component for feature status indicators (enhanced with glow + hover)
const StatusBadge = ({ status, reducedGlow = false }: { status: 'confirmed' | 'in-development' | 'community', reducedGlow?: boolean }) => {
  const config = {
    'confirmed': { bg: 'bg-green-900/40', text: 'text-green-300', border: 'border-green-700/50', dot: 'bg-green-500', glow: reducedGlow ? 'shadow-green-500/25' : 'shadow-green-500/50' },
    'in-development': { bg: 'bg-yellow-900/40', text: 'text-yellow-300', border: 'border-yellow-700/50', dot: 'bg-yellow-500', glow: reducedGlow ? 'shadow-yellow-500/25' : 'shadow-yellow-500/50' },
    'community': { bg: 'bg-gray-700/40', text: 'text-gray-300', border: 'border-gray-600/50', dot: 'bg-gray-400', glow: reducedGlow ? 'shadow-gray-400/25' : 'shadow-gray-400/50' },
  };
  const style = config[status];
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${style.bg} ${style.text} text-xs font-medium border ${style.border} shadow-lg ${style.glow} transition-all duration-300 hover:scale-105`}>
      <span className="relative flex h-2 w-2">
        {status === 'in-development' && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dot} animate-pulse`} />
      </span>
      {status === 'confirmed' ? 'confirmed' : status === 'in-development' ? 'in-development' : 'community-maintained'}
    </span>
  );
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

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      
      <BackgroundOrbs />

      {/* Unified Header with gradient accent - RESPONSIVE OFFSET FIX */}
      <header className="mb-6 sm:mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex justify-between items-start gap-4">
          {/* Header text block */}
          <div className="relative inline-block w-full pb-2 sm:pb-3">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-3 sm:mb-4 group text-sm sm:text-base"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Tools & Utilities
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Essential tools for interacting with Minima Protocol</p>
            {/* Gradient accent line under subtitle */}
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>
          
          {/* GitHub icon - RESPONSIVE OFFSET (small on mobile, full on tablet/desktop) */}
          <div className="flex items-center justify-end relative -translate-x-2 mt-2 sm:-translate-x-10 sm:mt-12 flex-shrink-0">
            {/* Glow - HIDDEN on mobile (<640px), visible on sm+ (≥640px) */}
            <div className="hidden sm:flex absolute inset-0 items-center justify-center">
              <div className="w-8 h-8 bg-purple-500/80 rounded-full blur-xl" />
            </div>
            <ExternalLink 
              href="https://github.com/KuA1bo/minimaverse-site" 
              className="relative text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 z-10"
              ariaLabel="View source on GitHub"
              hideArrow={true}
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </ExternalLink>
          </div>
        </div>
      </header>

      {/* Primary Sources Box - enhanced with bullet points • */}
      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-8 
                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                      opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />
        
        <div className="relative">
          <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
            <span className="text-2xl">📚</span> Primary Sources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">•</span>
              <ExternalLink 
                href="https://docs.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                docs.minima.global
              </ExternalLink>
              <span className="text-gray-500">— Documentation</span>
            </li>
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">•</span>
              <ExternalLink 
                href="https://github.com/minima-global/Minima" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                github.com/minima-global/Minima
              </ExternalLink>
              <span className="text-gray-500">— Official GitHub</span>
            </li>
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">•</span>
              <ExternalLink 
                href="https://minima.global/blog" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                minima.global/blog
              </ExternalLink>
              <span className="text-gray-500">— Official Blog</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Official Tools */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🔧</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Tools</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                title: 'Minima Node Software',
                text: 'The official Minima node implementation. Run a full node on desktop, mobile, or Raspberry Pi to participate in the network.',
                link: { href: 'https://docs.minima.global/docs/run-a-node', text: '→ Download & Setup Guide' },
                status: 'confirmed' as const
              },
              {
                title: 'Minima Terminal',
                text: 'Command-line interface for interacting with your Minima node. Send transactions, deploy MiniDapps, and manage tokens.',
                link: { href: 'https://docs.minima.global/docs/learn/terminal-commands', text: '→ Terminal Commands Reference' },
                status: 'confirmed' as const
              },
              {
                title: 'Minima Explorer',
                text: 'Block explorer for viewing transactions, blocks, and account balances on the Minima network.',
                link: { href: 'https://minima.global/explorer', text: '→ Open Explorer' },
                status: 'confirmed' as const
              },
              {
                title: 'Minima Wallet',
                text: 'Official mobile wallet for iOS and Android. Store, send, and receive Minima coins and custom tokens.',
                link: { href: 'https://minima.global/wallet', text: '→ Download Wallet' },
                status: 'confirmed' as const
              },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                <div className="flex items-center gap-3 relative">
                  <ExternalLink 
                    href={item.link.href} 
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm"
                  >
                    {item.link.text}
                  </ExternalLink>
                  <StatusBadge status={item.status} reducedGlow={true} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Tools */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🌐</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Community Tools</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                title: 'MiniDapp Store',
                text: 'Browse and deploy community-created MiniDapps. Find utilities, games, and DeFi applications built on Minima.',
                link: { href: 'https://minidapp.store', text: '→ Visit MiniDapp Store' },
                status: 'community' as const
              },
              {
                title: 'Minima SDK',
                text: 'Software development kit for building MiniDapps with JavaScript, HTML, and CSS.',
                link: { href: 'https://docs.minima.global/docs/learn/minidapps', text: '→ SDK Documentation' },
                status: 'confirmed' as const
              },
              {
                title: 'Third-Party Explorers',
                text: 'Alternative block explorers with additional features and analytics.',
                link: { href: 'https://docs.minima.global/docs/learn/explorers', text: '→ Explorer List' },
                status: 'community' as const
              },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                <div className="flex items-center gap-3 relative">
                  <ExternalLink 
                    href={item.link.href} 
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm"
                  >
                    {item.link.text}
                  </ExternalLink>
                  <StatusBadge status={item.status} reducedGlow={true} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Resources */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Development Resources</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 relative">
                <span className="text-blue-400">•</span>
                <ExternalLink 
                  href="https://docs.minima.global/docs/learn/minidapps" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  MiniDapp Development Guide
                </ExternalLink>
              </li>
              <li className="flex items-center gap-2 relative">
                <span className="text-blue-400">•</span>
                <ExternalLink 
                  href="https://docs.minima.global/docs/learn/terminal-commands" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  Terminal Commands Reference
                </ExternalLink>
              </li>
              <li className="flex items-center gap-2 relative">
                <span className="text-blue-400">•</span>
                <ExternalLink 
                  href="https://github.com/minima-global/Minima" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  Minima Core GitHub Repository
                </ExternalLink>
              </li>
              <li className="flex items-center gap-2 relative">
                <span className="text-blue-400">•</span>
                <ExternalLink 
                  href="https://discord.com/invite/minima" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  Developer Discord Channel
                </ExternalLink>
              </li>
            </ul>
          </div>
        </section>

        {/* Universal Disclaimer Block - enhanced */}
        <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-6 mb-8 
                        transition-all duration-300 hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-500/10 
                        opacity-0 animate-fade-in-up delay-200 group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-500 to-orange-500" />
          <p className="text-amber-200 text-sm leading-relaxed">
            <strong className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚠️</span>
              Disclaimer:
            </strong>
            This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" className="underline hover:text-amber-100 decoration-amber-500/50 hover:decoration-amber-400 underline-offset-4 transition-all duration-300">
              Learn more
            </Link>
          </p>
        </div>

        {/* Last Updated - enhanced */}
        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: March 20, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
