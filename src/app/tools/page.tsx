// src/app/tools/page.tsx
// Tools page - verified tools and utilities for Minima Protocol
// Final version: section icons + clean links + specific KISS VM link

import Link from 'next/link';

// ExternalLink component for all external links with ↗ icon
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

// StatusBadge component for feature status indicators
const StatusBadge = ({ status }: { status: 'confirmed' | 'in-development' | 'community' }) => {
  const config = {
    'confirmed': { bg: 'bg-green-900/40', text: 'text-green-300', border: 'border-green-700/50', dot: 'bg-green-500' },
    'in-development': { bg: 'bg-yellow-900/40', text: 'text-yellow-300', border: 'border-yellow-700/50', dot: 'bg-yellow-500' },
    'community': { bg: 'bg-gray-700/40', text: 'text-gray-300', border: 'border-gray-600/50', dot: 'bg-gray-400' },
  };
  const style = config[status];
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${style.bg} ${style.text} text-xs font-medium border ${style.border}`}>
      <span className="relative flex h-2 w-2">
        {status === 'in-development' && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dot}`} />
      </span>
      {status === 'confirmed' ? 'confirmed' : status === 'in-development' ? 'in-development' : 'community-maintained'}
    </span>
  );
};

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Unified Header with gradient accent */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div className="relative inline-block">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4"
            >
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Tools & Utilities</h1>
            <p className="text-gray-400">Essential tools for interacting with Minima Protocol</p>
            {/* Gradient accent line under title */}
            <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>
          <ExternalLink 
            href="https://github.com/KuA1bo/minimaverse-site" 
            className="text-gray-400 hover:text-white transition-colors"
            ariaLabel="View source on GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </ExternalLink>
        </div>
      </header>

      {/* Primary Sources Box */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8 
                      transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 
                      opacity-0 animate-fade-in-up delay-75">
        <h3 className="text-white font-medium mb-3">📚 Primary Sources for This Page</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-400">Documentation:</span>{' '}
            <ExternalLink 
              href="https://docs.minima.global" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              docs.minima.global
            </ExternalLink>
          </li>
          <li>
            <span className="text-gray-400">Explorer:</span>{' '}
            <ExternalLink 
              href="https://explorer.minima.global" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              explorer.minima.global
            </ExternalLink>
          </li>
          <li>
            <span className="text-gray-400">Wallet:</span>{' '}
            <ExternalLink 
              href="https://wallet.minima.global" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              wallet.minima.global
            </ExternalLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">📋 About This Page</h2>
          <p className="text-gray-300 leading-relaxed">
            This page aggregates verified tools and utilities for interacting with the Minima 
            Protocol. All links point to official or community-verified sources.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Status legend:{' '}
            <StatusBadge status="confirmed" />{' '}
            <span className="text-gray-500">|</span>{' '}
            <StatusBadge status="in-development" />{' '}
            <span className="text-gray-500">|</span>{' '}
            <StatusBadge status="community" />
          </p>
        </section>

        {/* Official Tools */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">🛠️ Official Tools</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Minima Terminal</h3>
              <p className="text-gray-300 text-sm mb-3">
                Command-line interface for advanced node management, transaction creation, 
                and smart contract deployment.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/development/terminal-commands" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Terminal Commands Documentation
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Minima Scan (Explorer)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Blockchain explorer for viewing transactions, blocks, addresses, and network 
                statistics on the Minima protocol.
              </p>
              <ExternalLink 
                href="https://explorer.minima.global" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                explorer.minima.global
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Web Wallet</h3>
              <p className="text-gray-300 text-sm mb-3">
                Browser-based wallet for managing Minima tokens, sending/receiving transactions, 
                and interacting with MiniDapps.
              </p>
              <ExternalLink 
                href="https://wallet.minima.global" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                wallet.minima.global
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Mobile Wallet</h3>
              <p className="text-gray-300 text-sm mb-3">
                Official mobile wallet available on Google Play and as direct APK download.
              </p>
              <div className="space-y-2">
                <ExternalLink 
                  href="https://play.google.com/store/search?q=minima&c=apps&hl=en" 
                  className="text-blue-400 hover:text-blue-300 underline text-sm block"
                >
                  📱 Google Play Store
                </ExternalLink>
                <ExternalLink 
                  href="https://github.com/minima-global/Minima/blob/master/jar/minima-1.0.46.6.apk" 
                  className="text-blue-400 hover:text-blue-300 underline text-sm block"
                >
                  🤖 Android APK (GitHub)
                </ExternalLink>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>
          </div>
        </section>

        {/* Development Tools */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">💻 Development Tools</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">TypeScript SDK</h3>
              <p className="text-gray-300 text-sm mb-3">
                Official SDK for building applications and MiniDapps using TypeScript/JavaScript. 
                Provides high-level abstractions for protocol interaction.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/development/using-typescript" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                TypeScript Development Guide
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            {/* KISS VM - Smart Contract Scripting */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">📜 KISS VM (Smart Contract Scripting)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Complete language specification: grammar, globals, and 40+ functions for writing 
                smart contracts on Minima (SHA2/3, CHECKSIG, MULTISIG, and more).
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/development/contracts-kissvm" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                KISS VM Documentation
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            {/* Terminal Commands & RPC */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">🔌 Terminal Commands & RPC</h3>
              <p className="text-gray-300 text-sm mb-3">
                Node interaction via command-line interface and RPC API for automation, 
                transaction creation, and programmatic control.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/development/terminal-commands" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Terminal Commands Documentation
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

          </div>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8 
                        transition-all duration-200 hover:border-amber-600/70 
                        opacity-0 animate-fade-in-up delay-300">
          <p className="text-amber-200 text-sm">
            <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" className="underline hover:text-amber-100">
              Learn more
            </Link>
          </p>
        </div>

        {/* Last Updated */}
        <section className="border-t border-gray-700 pt-6 opacity-0 animate-fade-in-up delay-75">
          <p className="text-gray-500 text-sm">
            Last updated: February 17, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
