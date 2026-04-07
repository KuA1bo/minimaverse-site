// src/app/timeline/page.tsx
// Timeline page - verified historical milestones of Minima Protocol
// Fixed: Primary Sources mobile layout for long URLs

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
const StatusBadge = ({ status, reducedGlow = false }: { 
  status: 'confirmed' | 'in-development' | 'community', reducedGlow?: boolean 
}) => {
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

export default function TimelinePage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      
      <BackgroundOrbs />

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
                Historical Execution Timeline
              </span>
            </h1>
            <p className="text-gray-400">Verified milestones and evidence-based progress</p>
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

      {/* Primary Sources Box - matches /developers desktop style */}
      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-8 
                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                      opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />
        
        <div className="relative">
          <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
            <span className="text-2xl">📚</span> Primary Sources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-gray-400 max-[400px]:hidden">•</span>
              <ExternalLink 
                href="https://minima.global/blog" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs sm:text-sm"
              >
                minima.global/blog
              </ExternalLink>
              <span className="text-gray-500 max-[400px]:hidden">—</span>
              <span className="text-gray-500 text-xs sm:text-sm">Official Blog</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-gray-400 max-[400px]:hidden">•</span>
              <ExternalLink 
                href="https://docs.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs sm:text-sm"
              >
                docs.minima.global
              </ExternalLink>
              <span className="text-gray-500 max-[400px]:hidden">—</span>
              <span className="text-gray-500 text-xs sm:text-sm">Documentation</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-gray-400 max-[400px]:hidden">•</span>
              <ExternalLink 
                href="https://github.com/minima-global/Minima/releases" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs sm:text-sm"
              >
                github.com/minima-global/Minima/releases
              </ExternalLink>
              <span className="text-gray-500 max-[400px]:hidden">—</span>
              <span className="text-gray-500 text-xs sm:text-sm">GitHub Releases</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              About This Page
            </span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed relative">
              This timeline documents completed and publicly verifiable milestones in the development 
              and deployment of the Minima Protocol. It intentionally excludes speculative roadmaps 
              or future promises, reflecting Minima's commitment to evidence-based progress reporting.
            </p>
            
            {/* Status legend - vertical on mobile with divider */}
            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <p className="text-gray-400 text-xs mb-2">Status legend:</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <StatusBadge status="confirmed" reducedGlow={true} />
                <span className="text-gray-500 hidden sm:inline">|</span>
                <StatusBadge status="in-development" reducedGlow={true} />
                <span className="text-gray-500 hidden sm:inline">|</span>
                <StatusBadge status="community" reducedGlow={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Philosophy */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🧭</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              Timeline Philosophy
            </span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 text-sm mb-3 relative">
              Minima's development approach emphasizes delivered results over projected plans. 
              Following the January 2026 communication shift, the project no longer publishes 
              dated roadmaps.
            </p>
            <p className="text-gray-300 text-sm relative">
              This timeline documents only events that have occurred and can be independently 
              verified, reflecting Minima's commitment to evidence-based progress reporting 
              and long-term infrastructure building.
            </p>
            
            {/* Status + Source - vertical on mobile, horizontal on desktop */}
            <div className="mt-3 pt-3 border-t border-gray-700/40">
              <p className="text-gray-500 text-xs flex flex-col sm:flex-row sm:items-center gap-2 relative">
                <span className="flex items-center gap-1">
                  Status: <StatusBadge status="confirmed" reducedGlow={true} />
                </span>
                <span className="hidden sm:inline text-gray-500">|</span>
                <span className="flex items-center gap-1">
                  Source:{' '}
                  <ExternalLink 
                    href="https://minima.global/post/minima-from-roadmaps-to-results" 
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs sm:text-sm"
                  >
                    Minima Official Blog
                  </ExternalLink>
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Example Entry Types */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              Example Entry Types
            </span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <ul className="space-y-3">
              {[
                {
                  title: 'Node software releases & infrastructure updates',
                  desc: 'Official version releases, performance improvements, and tooling updates (core consensus rules remain immutable by design)'
                },
                {
                  title: 'Public product launches and deployments',
                  desc: 'Wallet releases, explorer launches, and tooling availability'
                },
                {
                  title: 'Architecture documentation and technical specifications',
                  desc: 'Published whitepapers, audits, and protocol design documents'
                },
                {
                  title: 'Major communication shifts',
                  desc: 'Official announcements about project direction or strategy'
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 relative">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <span className="text-white font-medium text-sm">{item.title}</span>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs mt-4 italic relative">
              Note: This timeline will be expanded with additional verified historical milestones 
              as they are documented and sourced.
            </p>
          </div>
        </section>

        {/* Key Communications */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📢</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              Key Communications
            </span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 border-l-4 border-l-blue-500
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex justify-between items-start mb-3 relative">
              <span className="text-sm text-gray-400">January 20, 2026</span>
              <StatusBadge status="confirmed" reducedGlow={true} />
            </div>
            <h3 className="text-white font-medium mb-3 relative">Minima: From Roadmaps to Results</h3>
            <p className="text-gray-300 text-sm mb-3 relative">
              Minima announced a fundamental shift in communication strategy:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-4 relative">
              <li>Moving away from traditional roadmaps with fixed dates</li>
              <li>Reframing as a technology company solving real-world infrastructure problems</li>
              <li>Emphasizing evidence of execution over speculative narratives</li>
              <li>Focusing on long-term investors and builders aligned with infrastructure durability</li>
            </ul>
            <blockquote className="text-gray-400 text-sm italic border-l-2 border-gray-600 pl-3 mb-3 relative">
              "Blockchain is not the product. Decentralisation is not the marketing. Speculation is not the strategy."
            </blockquote>
          </div>
        </section>

        {/* Universal Disclaimer Block */}
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

        {/* Last Updated - UPDATED DATE */}
        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: March 26, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
