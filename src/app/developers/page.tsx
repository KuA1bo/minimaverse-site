// src/app/developers/page.tsx
// Developers page - verified resources for building on Minima Protocol
// Hybrid version: full content + visual enhancements + fixed links + corrected attributions

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

export default function DevelopersPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Developer Resources</h1>
            <p className="text-gray-400">Tools, SDKs, and documentation for Minima development</p>
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

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <p className="text-gray-300 leading-relaxed">
            This page aggregates verified resources for developers building on or contributing to 
            the Minima Protocol. All links point to official or community-verified sources.
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

        {/* Official Developer Portal */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">🚀 Official Developer Portal</h2>
          
          <ExternalLink 
            href="https://build.minima.global/" 
            className="block bg-blue-900/30 border border-blue-700/50 rounded-lg p-5 
                      hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 
                      transition-all duration-200 group"
            ariaLabel="Visit Edge Pioneers developer portal"
          >
            <div className="flex items-start gap-4">
              <span className="text-blue-400 text-2xl mt-1">🛠️</span>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
                  Edge Pioneers Program
                </h3>
                <p className="text-gray-300 mt-2">
                  The official starting point for Minima developers. Access SDKs, tutorials, 
                  code examples, and community support for building decentralized applications 
                  on the Minima Protocol.
                </p>
                <ul className="text-gray-400 text-sm mt-3 space-y-1">
                  <li>• TypeScript/JavaScript SDK documentation</li>
                  <li>• MiniDapp development guides</li>
                  <li>• Sample projects and templates</li>
                  <li>• Developer community channels</li>
                </ul>
                <p className="text-blue-400 text-sm mt-4 font-medium inline-flex items-center gap-1">
                  build.minima.global
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Status: <StatusBadge status="confirmed" /> | Official Minima Foundation resource
                </p>
              </div>
            </div>
          </ExternalLink>
        </section>

        {/* Technical Documentation */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">📚 Technical Documentation</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Full Documentation</h3>
              <p className="text-gray-300 text-sm mb-3">
                Comprehensive API references, protocol specifications, and technical guides for 
                Minima development.
              </p>
              <ExternalLink 
                href="https://docs.minima.global" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                docs.minima.global
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Protocol Architecture</h3>
              <p className="text-gray-300 text-sm mb-3">
                Deep dive into Minima's consensus mechanism, data structures, and network design.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/core/at-a-glance" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Core Features Overview
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>
          </div>
        </section>

        {/* 🎓 Learning Paths */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">🎓 Learning Paths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">📚 Learn the Basics</h3>
              <p className="text-gray-300 text-sm mb-3">
                Foundational concepts and protocol overview for new developers.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/buildonminima/dapps/overview" 
                className="text-blue-400 hover:text-blue-300 underline text-sm block mb-2"
              >
                MiniDapps Overview
              </ExternalLink>
              <ExternalLink 
                href="https://docs.minima.global/docs/buildonminima/contracts/txnbasics" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Smart Contracts Basics
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">📝 Build Applications</h3>
              <p className="text-gray-300 text-sm mb-3">
                Practical guides for creating MiniDapps and smart contracts on Minima.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/development/contracts-basics" 
                className="text-blue-400 hover:text-blue-300 underline text-sm block mb-2"
              >
                KISS Scripting Basics
              </ExternalLink>
              <ExternalLink 
                href="https://docs.minima.global/docs/development/using-typescript" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                TypeScript SDK Guide
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>
          </div>
        </section>

        {/* 📝 Tutorials */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">📝 Tutorials</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Official Tutorials</h3>
              <p className="text-gray-300 text-sm mb-3">
                Step-by-step guides from the Minima documentation team.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/buildonminima/txntutorial/start" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Smart Contract Tutorial Series
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">🐙 Community Tutorials</h3>
              <p className="text-gray-300 text-sm mb-3">
                Additional transaction examples and patterns from community contributors.
              </p>
              <ExternalLink 
                href="https://github.com/MBCOT/Minima-Tutorials/" 
                className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                MBCOT Minima Tutorials
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="community" /> | Community-maintained
              </p>
            </div>
          </div>
        </section>

        {/* 🖥️ Video Resources */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">🖥️ Video Resources</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <h3 className="text-white font-medium mb-3">YouTube Tutorial Series</h3>
            <p className="text-gray-300 text-sm mb-4">
              Video walkthroughs for visual learners. Created by Pedy Cherry, Minima Global architect.
            </p>
            <div className="space-y-3">
              <ExternalLink 
                href="https://www.youtube.com/watch?v=iLp-n7I2zbM&list=PLut-fF0yR_xWEeUgSFLkT6WyLbTovD_w4" 
                className="text-blue-400 hover:text-blue-300 underline text-sm block"
              >
                ▶️ Part 1: Introduction to Minima
              </ExternalLink>
              <ExternalLink 
                href="https://www.youtube.com/watch?v=nykHIXIuQiI&list=PLut-fF0yR_xWEeUgSFLkT6WyLbTovD_w4&index=2" 
                className="text-blue-400 hover:text-blue-300 underline text-sm block"
              >
                ▶️ Part 2: Create a Timelock Contract
              </ExternalLink>
              <ExternalLink 
                href="https://www.youtube.com/watch?v=WeFswRU3WBE&t" 
                className="text-blue-400 hover:text-blue-300 underline text-sm block"
              >
                ▶️ How to Use Script IDE
              </ExternalLink>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              Status: <StatusBadge status="confirmed" /> | Official Minima Global content
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">🚀 Getting Started</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Run a Full Node</h3>
              <p className="text-gray-300 text-sm mb-3">
                Install and configure a Minima node on your device. Required for local development 
                and testing.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/run-a-node" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Guide: Run a Node
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>
          </div>
        </section>

        {/* 💻 Source Code */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">🐙 Source Code</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Core Protocol</h3>
              <p className="text-gray-300 text-sm mb-3">
                Main Minima protocol implementation and node software.
              </p>
              <ExternalLink 
                href="https://github.com/minima-global/Minima" 
                className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2 mb-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                github.com/minima-global/Minima
              </ExternalLink>
              <ExternalLink 
                href="https://github.com/minima-global/Minima/tree/master/src/org/minima" 
                className="text-blue-400 hover:text-blue-300 underline text-sm text-xs block"
              >
                → Core source: /src/org/minima
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Mobile & Libraries</h3>
              <p className="text-gray-300 text-sm mb-3">
                Official Android APK and third-party Kotlin library for Minima integration.
              </p>
              <ExternalLink 
                href="https://github.com/minima-global/minimaapk" 
                className="text-blue-400 hover:text-blue-300 underline text-sm block mb-2"
              >
                Minima APK (Android)
              </ExternalLink>
              <p className="text-gray-500 text-xs mb-2">
                Status: <StatusBadge status="confirmed" /> | Official Minima Global
              </p>
              <ExternalLink 
                href="https://github.com/mihbor/minimak" 
                className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                minimak (Kotlin Library)
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="community" /> | Third-party library by @mihbor
              </p>
            </div>
          </div>
        </section>

        {/* Community & Support */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">💬 Community & Support</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Discord Developer Channel</h3>
              <p className="text-gray-300 text-sm mb-3">
                Real-time technical discussions, Q&A, and collaboration with other Minima developers.
              </p>
              <ExternalLink 
                href="https://discord.gg/minimaglobal" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                discord.gg/minimaglobal
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official community channel
              </p>
              <p className="text-gray-500 text-xs mt-2 italic">
                Tip: Discussions happen in <span className="text-gray-300">#dev-chat</span>. 
                To post there, select the <span className="text-gray-300">Community Developer</span> role 
                in <span className="text-gray-300">#role-picker</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8 
                        transition-all duration-200 hover:border-amber-600/70 
                        opacity-0 animate-fade-in-up delay-150">
          <p className="text-amber-200 text-sm">
            <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" className="underline hover:text-amber-100">
              Learn more
            </Link>
          </p>
        </div>

        {/* Last Updated */}
        <section className="border-t border-gray-700 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm">
            Last updated: February 17, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
