// src/app/tools/page.tsx
// Tools page - verified tools and utilities for Minima Protocol

import Link from 'next/link';

// ExternalLink component for all external links with arrow icon
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

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      

      {/* Unified Header with gradient accent */}
      <header className="mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex justify-between items-start">
          {/* Header text block */}
          <div className="relative inline-block w-full pb-3">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Tools & Utilities
              </span>
            </h1>
            <p className="text-gray-400">Essential tools for interacting with Minima Protocol</p>
            {/* Gradient accent line under subtitle */}
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>
          
          {/* GitHub icon - Desktop only (hidden on mobile), unified with homepage */}
          <div className="hidden sm:flex items-center justify-end relative -translate-x-10 mt-12 flex-shrink-0">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500/80 rounded-full blur-lg" />
            </div>
            <ExternalLink 
              href="https://github.com/KuA1bo/minimaverse-site  " 
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

      {/* Primary Sources Box - UPDATED with community node alternative */}
      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-8 
                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                      opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />
        
        <div className="relative">
          <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
            <span className="text-2xl">📚</span> Primary Sources
          </h3>
          <ul className="space-y-3 text-sm">
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
                href="https://explorer.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                explorer.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Block Explorer</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://wallet.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 opacity-60"
              >
                wallet.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Web Wallet (temporarily unavailable)</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://minimammr.com/" 
                className="text-green-400 hover:text-green-300 underline decoration-green-500/30 hover:decoration-green-400/60 underline-offset-4 transition-all duration-300"
              >
                minimammr.com
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Community Node (MMR endpoint)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Page</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed">
              This page aggregates verified tools and utilities for interacting with the Minima 
              Protocol. All links point to official or community-verified sources.
            </p>
            
            {/* Status legend - vertical on mobile with divider */}
            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <p className="text-gray-400 text-xs mb-2">Status legend:</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <StatusBadge status="confirmed" />
                <span className="text-gray-500 hidden sm:inline">|</span>
                <StatusBadge status="in-development" />
                <span className="text-gray-500 hidden sm:inline">|</span>
                <StatusBadge status="community" />
              </div>
            </div>
          </div>
        </section>

        {/* NEW: DEX, Bridge & Minimask Launch Guide */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">New Launches: DEX, Bridge & Minimask</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-6
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <p className="text-gray-300 leading-relaxed mb-4 relative">
              The Minima ecosystem now includes a decentralized exchange (DEX), cross-chain bridge, 
              and browser wallet extension. Follow this step-by-step guide to get started:
            </p>
            
            <div className="space-y-4 relative">
              {/* Step 1 */}
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="text-gray-300 text-sm">
                    Visit <ExternalLink href="https://minimaxt.org" className="text-blue-400 hover:text-purple-400 underline">minimaxt.org</ExternalLink> (DEX). 
                    You'll see a prompt to install MiniMask.
                  </p>
                </div>
              </div>
              
              {/* Step 2 - UPDATED with official guide link */}
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="text-gray-300 text-sm">
                    Go to <ExternalLink href="https://minimask.org" className="text-blue-400 hover:text-purple-400 underline">minimask.org</ExternalLink>, 
                    download and unzip the extension. Enable <ExternalLink href="https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked" className="text-blue-400 hover:text-purple-400 underline">Developer Mode</ExternalLink> in your browser (Chrome/Brave/Edge) and click "Load Unpacked" to install.
                  </p>
                </div>
              </div>
              
              {/* Step 3 - UPDATED for clarity */}
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold flex items-center justify-center">3</span>
                <div>
                  <p className="text-gray-300 text-sm">
                    Return to <ExternalLink href="https://minimaxt.org" className="text-blue-400 hover:text-purple-400 underline">minimaxt.org</ExternalLink>, 
                    restore or create a wallet (the interface supports up to 5 separate wallets), set a password, and start trading Minima ↔ USDT.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold flex items-center justify-center">4</span>
                <div>
                  <p className="text-gray-300 text-sm">
                    To swap USDT in/out of Minima, use the bridge at <ExternalLink href="https://mxusd.global" className="text-blue-400 hover:text-purple-400 underline">mxusd.global</ExternalLink>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Note + Warning about In-App Chat */}
            <div className="mt-4 pt-4 border-t border-gray-700/40 space-y-3">
              <p className="text-gray-400 text-xs relative">
                💡 <strong>Note:</strong> The DEX has its own wallet creation page — you don't need MiniMask installed for basic trading. 
                Use the <ExternalLink href="https://block.minima.global/" className="text-blue-400 hover:text-purple-400 underline">Block Explorer</ExternalLink> if tokens appear missing.
              </p>
              
              {/* ⚠️ MOVED HERE: Clear warning about minimaxt.org chat */}
              <div className="bg-amber-900/10 border border-amber-700/30 rounded-lg p-3">
                <p className="text-amber-400/90 text-xs relative flex items-start gap-2">
                  <span className="text-base">⚠️</span>
                  <span>
                    <strong>In-App Chat on minimaxt.org:</strong> The chat room is unmoderated. New messages will appear publicly after a 5-minute delay.
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <ExternalLink 
              href="https://minimaxt.org"
              className="relative bg-purple-900/20 border border-purple-700/50 rounded-2xl p-4 
                        hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                        transition-all duration-300 block group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-white font-medium group-hover:text-purple-300 transition-colors relative">🦄 DEX</span>
              <p className="text-gray-400 text-xs mt-1 relative">Trade Minima ↔ USDT</p>
              <p className="text-purple-400 text-xs mt-2 relative">minimaxt.org</p>
            </ExternalLink>
            
            <ExternalLink 
              href="https://mxusd.global"
              className="relative bg-blue-900/20 border border-blue-700/50 rounded-2xl p-4 
                        hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 
                        transition-all duration-300 block group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors relative">🌉 Bridge</span>
              <p className="text-gray-400 text-xs mt-1 relative">Cross-chain USDT swaps</p>
              <p className="text-blue-400 text-xs mt-2 relative">mxusd.global</p>
            </ExternalLink>
            
            <ExternalLink 
              href="https://minimask.org"
              className="relative bg-cyan-900/20 border border-cyan-700/50 rounded-2xl p-4 
                        hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/15 
                        transition-all duration-300 block group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-white font-medium group-hover:text-cyan-300 transition-colors relative">🎭 Minimask</span>
              <p className="text-gray-400 text-xs mt-1 relative">Browser wallet extension</p>
              <p className="text-cyan-400 text-xs mt-2 relative">minimask.org</p>
            </ExternalLink>
          </div>
          
          {/* Feedback Channels (WARNING REMOVED) */}
          <div className="mt-6 pt-4 border-t border-gray-700/40">
            <p className="text-gray-400 text-sm mb-2 relative">🔧 Feedback Channels:</p>
            <div className="space-y-1 text-sm relative">
              <ExternalLink 
                href="https://discord.com/channels/562272317930209280/1492121137948266616"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 block"
              >
                💬 DEX Feedback Thread
              </ExternalLink>
              <ExternalLink 
                href="https://discord.com/channels/562272317930209280/1492101909153189989"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 block"
              >
                💬 MiniMask Feedback Thread
              </ExternalLink>
              <ExternalLink 
                href="https://discord.com/channels/562272317930209280/1492101583859744788"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 block"
              >
                💬 Bridge Feedback Thread
              </ExternalLink>
            </div>
          </div>
        </section>

        {/* Official Tools */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🛠️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Tools</span>
          </h2>
          
          <div className="space-y-4">
            
            {/* Minima Terminal */}
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

            {/* Minima Scan */}
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

            {/* Web Wallet - UPDATED: responsive layout like /ecosystem */}
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">Web Wallet</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Browser-based wallet for managing Minima tokens, sending/receiving transactions, and interacting with MiniDapps.
              </p>
              <StatusBadge status="confirmed" />
            </div>
            {/* Responsive link + alternative */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 ml-1">
              <ExternalLink 
                href="https://wallet.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm opacity-60"
                hideArrow={true} // ✅ Hide arrow on mobile
              >
                🌐 wallet.minima.global (temporarily unavailable)
              </ExternalLink>
              {/* Alternative: visible on desktop only */}
              <span className="hidden sm:inline text-gray-500">→</span>
              <span className="hidden sm:inline text-gray-500 text-xs sm:text-sm">
                Use <ExternalLink href="https://minimammr.com/" className="text-green-400 hover:text-green-300 underline">minimammr.com</ExternalLink> as community alternative
              </span>
            </div>
            {/* Mobile-only alternative hint */}
            <div className="sm:hidden bg-gray-800/30 border border-gray-700/30 rounded-lg px-3 py-2 ml-1 mt-1">
              <p className="text-gray-400 text-xs flex items-start gap-1.5">
                <span className="text-green-400 mt-0.5">💡</span>
                Use <ExternalLink href="https://minimammr.com/" className="text-green-400 hover:text-green-300 underline">minimammr.com</ExternalLink> as community alternative while the official web wallet is unavailable.
              </p>
            </div>

            {/* Mobile Wallet */}
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-white font-medium mb-2 relative">Mobile Wallet</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Official mobile wallet available on Google Play and as direct APK download.
              </p>
              <StatusBadge status="confirmed" />
            </div>
            <div className="space-y-2 relative">
              <ExternalLink 
                href="https://play.google.com/store/search?q=minima&c=apps&hl=en" 
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
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">💻</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Development Tools</span>
          </h2>
          
          <div className="space-y-4">
            
            {/* TypeScript SDK */}
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

            {/* KISS VM */}
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

            {/* Terminal Commands & RPC */}
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

        {/* Universal Disclaimer Block */}
        <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-6 mb-8 
                        transition-all duration-300 hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-500/10 
                        opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
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

        {/* Last Updated - UPDATED DATE */}
        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: April 13, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
