// src/app/tools/page.tsx
// Tools page - verified tools and utilities for Minima Protocol

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

// ExternalLink component for all external links with arrow icon
const ExternalLink = ({ 
  href, 
  children, 
  className = "",
  ariaLabel,
  hideArrow = false,
  id
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  ariaLabel?: string;
  hideArrow?: boolean;
  id?: string;
}) => (
  <a 
    id={id}
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

// StatusBadge component for feature status indicators
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

// Structured data for Schema.org ItemList (tools collection)
// Synchronized with actual page content (9 items)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Minima Tools & Utilities",
  "description": "Verified tools, wallets, explorers, and developer utilities for interacting with the Minima Protocol.",
  "url": "https://minimaverse.com/tools",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Minima Terminal", "url": "https://docs.minima.global/docs/development/terminal-commands" },
    { "@type": "ListItem", "position": 2, "name": "Minima Scan Explorer", "url": "https://explorer.minima.global" },
    { "@type": "ListItem", "position": 3, "name": "Web Wallet", "url": "https://wallet.minima.global" },
    { "@type": "ListItem", "position": 4, "name": "Mobile Wallet", "url": "https://play.google.com/store/apps/details?id=com.minima.android" },
    { "@type": "ListItem", "position": 5, "name": "TypeScript SDK", "url": "https://docs.minima.global/docs/development/using-typescript" },
    { "@type": "ListItem", "position": 6, "name": "KISS VM", "url": "https://docs.minima.global/docs/development/contracts-kissvm" },
    { "@type": "ListItem", "position": 7, "name": "MiniMask", "url": "https://minimask.org" },
    { "@type": "ListItem", "position": 8, "name": "MinimaXT DEX", "url": "https://minimaxt.org" },
    { "@type": "ListItem", "position": 9, "name": "MXUSD Bridge", "url": "https://mxusd.global" }
  ],
  "isPartOf": {
    "@type": "WebSite",
    "name": "Minimaverse",
    "url": "https://minimaverse.com"
  }
};

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      
      {/* Structured data for SEO - ItemList schema */}
      <JsonLd data={structuredData} />

      {/* Unified Header with gradient accent */}
      <header className="mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative flex justify-between items-start">
          <div className="relative inline-block w-full pb-3">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>
            
            <div className="flex flex-wrap items-center gap-1.5 mb-3 text-sm">
              <Link href="/developers" className="text-gray-400 hover:text-purple-400 transition-colors">Developers</Link>
              <span className="text-gray-600">•</span>
              <Link href="/nodes" className="text-gray-400 hover:text-purple-400 transition-colors">Nodes</Link>
              <span className="text-gray-600">•</span>
              <Link href="/ecosystem" className="text-gray-400 hover:text-purple-400 transition-colors">Ecosystem</Link>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Minima Tools & Utilities
              </span>
            </h1>
            <p className="text-gray-400">Essential tools for interacting with Minima Protocol</p>
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>
          
          <div className="hidden sm:flex items-center justify-end relative -translate-x-10 mt-12 flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500/80 rounded-full blur-lg" />
            </div>
            <ExternalLink 
              href="https://github.com/KuA1bo/minimaverse-site" 
              className="relative text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 z-10"
              ariaLabel="View source on GitHub"
              hideArrow={true}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </ExternalLink>
          </div>
        </div>
      </header>

      {/* Primary Sources Box - sort by domain length preserved */}
      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-8 
                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                      opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl pointer-events-none" />
        
        <div className="relative">
          <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
            <span className="text-2xl">📚</span> Primary Sources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://minimammr.com/" 
                className="text-green-400 hover:text-green-300 underline decoration-green-500/30 hover:decoration-green-400/60 underline-offset-4 transition-all duration-300"
              >
                minimammr.com
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Community interface</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://docs.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                docs.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Documentation</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://wallet.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                wallet.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Web Wallet</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://explorer.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                explorer.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Block Explorer</span>
            </li>
          </ul>
          
          <div className="mt-4 pt-4 border-t border-gray-700/40 text-xs text-gray-500">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
              <span className="block sm:inline">Status indicators:</span>
              <span className="text-green-300">• confirmed</span>
              <span className="text-yellow-300">• in-development</span>
              <span className="text-gray-300">• community-maintained</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* About This Page */}
        <section id="intro" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Page</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed">
              Verified tools, wallets, explorers, and developer utilities for interacting with the Minima Protocol.
            </p>
          </div>
        </section>

        {/* Official Tools */}
        <section id="official" className="mb-10 opacity-0 animate-fade-in-up delay-300 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🛠️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Tools</span>
          </h2>
          
          <div className="space-y-4">
            
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">Minima Terminal</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Command-line interface for advanced node management, transaction creation, and smart contract deployment.
              </p>
              <StatusBadge status="confirmed" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <ExternalLink 
                href="https://docs.minima.global/docs/development/terminal-commands" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                📚 Terminal Commands Documentation
              </ExternalLink>
            </p>

            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">Minima Scan (Explorer)</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Blockchain explorer for viewing transactions, blocks, addresses, and network statistics on the Minima protocol.
              </p>
              <StatusBadge status="confirmed" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <ExternalLink 
                href="https://explorer.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                🌐 explorer.minima.global
              </ExternalLink>
            </p>

            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">Web Wallet</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Browser-based wallet for managing Minima tokens, sending/receiving transactions, and interacting with MiniDapps.
              </p>
              <StatusBadge status="confirmed" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 ml-1">
              <ExternalLink 
                href="https://wallet.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm"
              >
                🌐 wallet.minima.global
              </ExternalLink>
              <span className="hidden sm:inline text-gray-500">→</span>
              <span className="hidden sm:inline text-gray-500 text-xs sm:text-sm">
                Alternative: <ExternalLink href="https://minimammr.com/" className="text-green-400 hover:text-green-300 underline">minimammr.com</ExternalLink>
              </span>
            </div>
            <div className="sm:hidden ml-1 mt-1">
              <p className="text-gray-400 text-xs flex items-start gap-1.5">
                <span className="text-green-400 mt-0.5">💡</span>
                Alternative: <ExternalLink href="https://minimammr.com/" className="text-green-400 hover:text-green-300 underline">minimammr.com</ExternalLink>
              </p>
            </div>

            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <h3 className="text-white font-medium mb-2 relative">Mobile Wallet</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Official mobile wallet available on Google Play and as direct APK download.
              </p>
              <StatusBadge status="confirmed" />
            </div>
            <div className="space-y-2 relative">
              <ExternalLink 
                href="https://play.google.com/store/apps/details?id=com.minima.android" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm block"
              >
                📱 Google Play Store
              </ExternalLink>
              <ExternalLink 
                href="https://github.com/minima-global/minimaapk" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm inline-flex items-center gap-2 block relative sm:ml-4"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Android APK (GitHub)
              </ExternalLink>
            </div>

          </div>
        </section>

        {/* Development Tools */}
        <section id="dev" className="mb-10 opacity-0 animate-fade-in-up delay-75 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">💻</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Development Tools</span>
          </h2>
          
          <div className="space-y-4">
            
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">TypeScript SDK</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Official SDK for building applications and MiniDapps using TypeScript/JavaScript. Provides high-level abstractions for protocol interaction.
              </p>
              <StatusBadge status="confirmed" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <ExternalLink 
                href="https://docs.minima.global/docs/development/using-typescript" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                📚 TypeScript Development Guide
              </ExternalLink>
            </p>

            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">📜 KISS VM (Smart Contract Scripting)</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Complete language specification: grammar, globals, and 40+ functions for writing smart contracts on Minima (SHA2/3, CHECKSIG, MULTISIG, and more).
              </p>
              <StatusBadge status="confirmed" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <ExternalLink 
                href="https://docs.minima.global/docs/development/contracts-kissvm" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                📚 KISS VM Documentation
              </ExternalLink>
            </p>

            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">🔌 Terminal Commands & RPC</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Node interaction via command-line interface and RPC API for automation, transaction creation, and programmatic control.
              </p>
              <StatusBadge status="confirmed" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <ExternalLink 
                href="https://docs.minima.global/docs/run-a-node/startup-parameters#rpc" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                📚 RPC Startup Parameters
              </ExternalLink>
            </p>

          </div>
        </section>

        {/* Emerging Ecosystem Utilities - Compact unified version with workflow context */}
        <section id="emerging" className="mb-10 opacity-0 animate-fade-in-up delay-150 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🔧</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              Emerging Ecosystem Utilities
            </span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <p className="text-gray-300 leading-relaxed mb-2 relative">
              Utilities extending core protocol functionality within the Minima ecosystem. Currently in soft launch / test run phase.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed relative">
              Typical usage flow: install MiniMask → authenticate on MinimaXT → swap assets via MXUSD Bridge.
            </p>
            
            <div className="space-y-4 relative mt-6">
              
              {/* MiniMask */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium">MiniMask</h3>
                    <StatusBadge status="confirmed" reducedGlow={true} />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Browser wallet extension for authentication with selected ecosystem services (requires{' '}
                    <ExternalLink 
                      href="https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked" 
                      className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                    >
                      Developer Mode
                    </ExternalLink>
                    {' '}for unpacked installation).
                  </p>
                </div>
                <div className="sm:w-48 flex flex-col gap-1 text-xs">
                  <ExternalLink href="https://minimask.org" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
                    → Extension Package
                  </ExternalLink>
                  <ExternalLink href="https://discord.com/channels/562272317930209280/1492101909153189989" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
                    → Feedback Thread
                  </ExternalLink>
                </div>
              </div>

              <div className="border-t border-gray-700/30" />

              {/* MinimaXT */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium">MinimaXT</h3>
                    <StatusBadge status="confirmed" reducedGlow={true} />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Decentralized exchange interface supporting Minima ↔ USDT trading (only pair available). Supports up to 5 wallet profiles.
                  </p>
                </div>
                <div className="sm:w-48 flex flex-col gap-1 text-xs">
                  <ExternalLink href="https://minimaxt.org" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
                    → Open DEX
                  </ExternalLink>
                  <ExternalLink href="https://discord.com/channels/562272317930209280/1492121137948266616" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
                    → Feedback Thread
                  </ExternalLink>
                </div>
              </div>

              <div className="border-t border-gray-700/30" />

              {/* MXUSD Bridge */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium">MXUSD Bridge</h3>
                    <StatusBadge status="confirmed" reducedGlow={true} />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Cross-chain bridge utility for USDT ↔ Minima swaps.
                  </p>
                </div>
                <div className="sm:w-48 flex flex-col gap-1 text-xs">
                  <ExternalLink href="https://mxusd.global" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
                    → Open Bridge
                  </ExternalLink>
                  <ExternalLink href="https://discord.com/channels/562272317930209280/1492101583859744788" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
                    → Feedback Thread
                  </ExternalLink>
                </div>
              </div>
            </div>
            
            {/* Operational Notes - with 5-minute delay specificity */}
            <div className="mt-6 pt-4 border-t border-gray-700/40">
              <p className="text-amber-200 text-xs leading-relaxed">
                <span className="text-base mr-1">⚠️</span>
                <strong>Operational Notes:</strong> In-app chat on MinimaXT is unmoderated with a 5-minute delivery delay. Token visibility issues should be verified via{' '}
                <ExternalLink 
                  href="https://explorer.minima.global" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  Block Explorer
                </ExternalLink>.
              </p>
            </div>

            <div className="mt-3 text-xs text-gray-500">
              <strong className="text-gray-400">Note:</strong> Some services provide native wallet creation and do not require MiniMask.
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-6 mb-8 
                        transition-all duration-300 hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-500/10 
                        opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-500 to-orange-500" />
          <p className="text-amber-200 text-sm leading-relaxed">
            <strong className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚠️</span>
              Disclaimer:
            </strong>
            This site does not represent the official Minima Global team. 
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" aria-label="Read full disclaimer" className="underline hover:text-amber-100 decoration-amber-500/50 hover:decoration-amber-400 underline-offset-4 transition-all duration-300">
              Learn more
            </Link>
          </p>
        </div>

        {/* Last Updated */}
        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: June 6, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
