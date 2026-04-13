// src/app/developers/page.tsx
// Developers page - verified resources for building on Minima Protocol

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

// Enhanced background orbs - animated style

export default function DevelopersPage() {
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
                Developer Resources
              </span>
            </h1>
            <p className="text-gray-400">Tools, SDKs, and documentation for Minima development</p>
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

      {/* Primary Sources Box */}
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
                href="https://github.com/minima-global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                github.com/minima-global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Official GitHub</span>
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
                href="https://explorer.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                explorer.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Block Explorer</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed">
              This page aggregates verified resources for developers building on or contributing to 
              the Minima Protocol. All links point to official or community-verified sources.
            </p>
            
            {/* Status legend - with divider line */}
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

        {/* Official Developer Portal */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Developer Portal</span>
          </h2>
          
          {/* Card */}
          <div className="relative bg-blue-900/30 border border-blue-700/50 rounded-2xl p-6 
                        hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 
                        transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex items-start gap-4">
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
                <p className="text-gray-500 text-xs mt-2">
                  Status: <StatusBadge status="confirmed" /> | Official Minima Foundation resource
                </p>
              </div>
            </div>
          </div>
          {/* Link outside card */}
          <ExternalLink 
            href="https://build.minima.global/" 
            className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm inline-flex items-center gap-2 ml-1 mt-2"
          >
            🌐 build.minima.global
          </ExternalLink>
        </section>

        {/* Technical Documentation */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📚</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Technical Documentation</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Full Documentation',
                text: 'Comprehensive API references, protocol specifications, and technical guides for Minima development.',
                link: { href: 'https://docs.minima.global', text: '📚 docs.minima.global' }
              },
              {
                title: 'Protocol Architecture',
                text: "Deep dive into Minima's consensus mechanism, data structures, and network design.",
                link: { href: 'https://docs.minima.global/docs/core/at-a-glance', text: '📚 Core Features Overview' }
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                {/* Card */}
                <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                                transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                  <p className="text-gray-500 text-xs relative">
                    Status: <StatusBadge status="confirmed" /> | Official source
                  </p>
                </div>
                {/* Link outside card */}
                <ExternalLink 
                  href={item.link.href} 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm ml-1"
                >
                  {item.link.text}
                </ExternalLink>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Learning Paths</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: '📚 Learn the Basics',
                text: 'Foundational concepts and protocol overview for new developers.',
                links: [
                  { href: 'https://docs.minima.global/docs/development/minidapp-structure', text: '📚 MiniDapp Structure' },
                  { href: 'https://docs.minima.global/docs/learn/scripting', text: '📚 Smart Contracts Basics' }
                ]
              },
              {
                title: '📝 Build Applications',
                text: 'Practical guides for creating MiniDapps and smart contracts on Minima.',
                links: [
                  { href: 'https://docs.minima.global/docs/development/contracts-basics', text: '📚 KISS Scripting Basics' },
                  { href: 'https://docs.minima.global/docs/development/using-typescript', text: '📚 TypeScript SDK Guide' }
                ]
              },
            ].map((path, index) => (
              <div key={index} className="space-y-2">
                {/* Card */}
                <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                                transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-white font-medium mb-2 relative">{path.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 relative">{path.text}</p>
                  <p className="text-gray-500 text-xs relative">
                    Status: <StatusBadge status="confirmed" /> | Official source
                  </p>
                </div>
                {/* Links outside card */}
                <div className="space-y-2">
                  {path.links.map((link, linkIndex) => (
                    <ExternalLink 
                      key={linkIndex}
                      href={link.href} 
                      className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm block ml-1"
                    >
                      {link.text}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tutorials */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Tutorials</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Official Tutorials',
                text: 'Step-by-step guides from the Minima documentation team.',
                link: { href: 'https://docs.minima.global/docs/buildonminima/txntutorial/start', text: '📚 Smart Contract Tutorial Series' }
              },
              {
                title: '🐙 Community Tutorials',
                text: 'Additional transaction examples and patterns from community contributors.',
                link: { href: 'https://github.com/MBCOT/Minima-Tutorials/', text: 'MBCOT Minima Tutorials', icon: true, status: 'community' as const }
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                {/* Card */}
                <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                                transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                  <p className="text-gray-500 text-xs relative">
                    Status: <StatusBadge status={item.link.status || 'confirmed'} /> | {item.link.status === 'community' ? 'Community-maintained' : 'Official source'}
                  </p>
                </div>
                {/* Link outside card - GitHub icon added for MBCOT */}
                <ExternalLink 
                  href={item.link.href} 
                  className={`text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm ${item.link.icon ? 'inline-flex items-center gap-2' : ''} ml-1`}
                >
                  {item.link.icon && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {item.link.text}
                </ExternalLink>
              </div>
            ))}
          </div>
        </section>

        {/* Video Resources */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🖥️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Video Resources</span>
          </h2>
          
          {/* Card */}
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <h3 className="text-white font-medium mb-3 relative">YouTube Tutorial Series</h3>
            <p className="text-gray-300 text-sm mb-4 relative">
              Video walkthroughs for visual learners. Created by Pedy Cherry, Minima Global architect.
            </p>
            <p className="text-gray-500 text-xs relative">
              Status: <StatusBadge status="confirmed" /> | Official Minima Global content
            </p>
          </div>
          {/* Links outside card */}
          <div className="space-y-2 mt-2">
            <ExternalLink 
              href="https://www.youtube.com/watch?v=iLp-n7I2zbM&list=PLut-fF0yR_xWEeUgSFLkT6WyLbTovD_w4" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm block ml-1"
            >
              ▶️ Part 1: Introduction to Minima
            </ExternalLink>
            <ExternalLink 
              href="https://www.youtube.com/watch?v=nykHIXIuQiI&list=PLut-fF0yR_xWEeUgSFLkT6WyLbTovD_w4&index=2" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm block ml-1"
            >
              ▶️ Part 2: Create a Timelock Contract
            </ExternalLink>
            <ExternalLink 
              href="https://www.youtube.com/watch?v=WeFswRU3WBE&t" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm block ml-1"
            >
              ▶️ How to Use Script IDE
            </ExternalLink>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Getting Started</span>
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              {/* Card */}
              <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h3 className="text-white font-medium mb-2 relative">Run a Full Node</h3>
                <p className="text-gray-300 text-sm mb-3 relative">
                  Install and configure a Minima node on your device. Required for local development 
                  and testing.
                </p>
                <p className="text-gray-500 text-xs relative">
                  Status: <StatusBadge status="confirmed" /> | Official source
                </p>
              </div>
              {/* Link outside card */}
              <ExternalLink 
                href="https://docs.minima.global/docs/run-a-node" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm ml-1"
              >
                📚 Guide: Run a Node
              </ExternalLink>
            </div>
          </div>
        </section>

        {/* Source Code */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🐙</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Source Code</span>
          </h2>
          
          <div className="space-y-6">
            {/* Core Protocol */}
            <div className="space-y-2">
              {/* Card */}
              <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">Core Protocol</h3>
                <p className="text-gray-300 text-sm mb-3 relative">
                  Main Minima protocol implementation and node software.
                </p>
                <p className="text-gray-500 text-xs relative">
                  Status: <StatusBadge status="confirmed" /> | Official source
                </p>
              </div>
              {/* Links outside card */}
              <div className="space-y-2">
                <ExternalLink 
                  href="https://github.com/minima-global/Minima" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm inline-flex items-center gap-2 ml-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  github.com/minima-global/Minima
                </ExternalLink>
                <ExternalLink 
                  href="https://github.com/minima-global/Minima/tree/master/src/org/minima" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm text-xs inline-flex items-center gap-2 ml-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  → Core source: /src/org/minima
                </ExternalLink>
              </div>
            </div>

            {/* Mobile & Libraries */}
            <div className="space-y-6">
              {/* Card */}
              <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">Mobile & Libraries</h3>
                <p className="text-gray-300 text-sm mb-3 relative">
                  Official Android APK and third-party Kotlin library for Minima integration.
                </p>
              </div>
              {/* Links outside card - each with its own status */}
              <div className="space-y-3">
                {/* Minima APK - confirmed */}
                <div>
                  <ExternalLink 
                    href="https://github.com/minima-global/minimaapk" 
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm inline-flex items-center gap-2 ml-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Minima APK (Android)
                  </ExternalLink>
                  <p className="text-gray-500 text-xs mt-1 ml-1">
                    Status: <StatusBadge status="confirmed" /> | Official Minima Global
                  </p>
                </div>
                {/* minimak - community-maintained */}
                <div>
                  <ExternalLink 
                    href="https://github.com/mihbor/minimak" 
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm inline-flex items-center gap-2 ml-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    minimak (Kotlin Library)
                  </ExternalLink>
                  <p className="text-gray-500 text-xs mt-1 ml-1">
                    Status: <StatusBadge status="community" /> | Third-party library by @mihbor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Support */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Community & Support</span>
          </h2>
          
          <div className="space-y-6">
            {/* Card */}
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h3 className="text-white font-medium mb-2 relative">Discord Developer Channel</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Real-time technical discussions, Q&A, and collaboration with other Minima developers.
              </p>
              <p className="text-gray-500 text-xs relative">
                Status: <StatusBadge status="confirmed" /> | Official community channel
              </p>
              <p className="text-gray-500 text-xs mt-2 italic relative">
                Tip: Discussions happen in <span className="text-gray-300">#dev-chat</span>. 
                To post there, select the <span className="text-gray-300">Community Developer</span> role 
                in <span className="text-gray-300">#role-picker</span>.
              </p>
            </div>
            {/* Link outside card */}
            <ExternalLink 
              href="https://discord.gg/minimaglobal" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm ml-1"
            >
              💬 discord.gg/minimaglobal
            </ExternalLink>
          </div>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-6 mb-8 
                        transition-all duration-300 hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-500/10 
                        opacity-0 animate-fade-in-up delay-300 group overflow-hidden">
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

        {/* Last Updated */}
        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-75">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: April 13, 2026
          </p>
        </section>

      </article>
    </div>
  );
}

