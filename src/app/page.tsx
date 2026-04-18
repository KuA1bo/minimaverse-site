// src/app/page.tsx
// Home page - Minimaverse independent information hub
// Updated: Added JSON-LD structured data for SEO

import Link from 'next/link';

// ExternalLink component for all external links with optional arrow icon
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
const StatusBadge = ({ status }: { status: 'confirmed' | 'in-development' | 'community' }) => {
  const config = {
    'confirmed': { bg: 'bg-green-900/40', text: 'text-green-300', border: 'border-green-700/50', dot: 'bg-green-500', glow: 'shadow-green-500/50' },
    'in-development': { bg: 'bg-yellow-900/40', text: 'text-yellow-300', border: 'border-yellow-700/50', dot: 'bg-yellow-500', glow: 'shadow-yellow-500/50' },
    'community': { bg: 'bg-gray-700/40', text: 'text-gray-300', border: 'border-gray-600/50', dot: 'bg-gray-400', glow: 'shadow-gray-400/50' },
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

// JSON-LD structured data component for search engine optimization
const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Minimaverse",
        "url": "https://minimaverse.com",
        "description": "Independent information hub for the Minima Protocol. Verified documentation, node guides, ecosystem resources.",
        "publisher": {
          "@type": "Organization",
          "name": "Minimaverse Community",
          "url": "https://minimaverse.com"
        },
        "inLanguage": "en"
      })
    }}
  />
);

export default function HomePage() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
      
      {/* JSON-LD structured data for search engines */}
      <JsonLd />
      
      {/* Hero Section */}
      <section className="mb-12 py-12 border-b border-gray-700/40 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
          
          {/* GitHub icon - Desktop only (hidden on mobile) */}
          <div className="hidden sm:flex items-start justify-end relative -translate-x-10 mt-12 flex-shrink-0 order-last">
            {/* Glow effect */}
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
          
          {/* Title content block */}
          <div className="flex-1 min-w-0 pl-2 pr-2 sm:pl-4 sm:pr-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Minimaverse
              </span>
              <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full animate-gradient-x" />
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg mb-3 leading-relaxed">
              Independent knowledge base for the Minima protocol.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Verified documentation, node guides, and ecosystem resources — no hype, no noise.
            </p>
            
            {/* Micro-subheading: concise action-oriented tags */}
            <p className="text-gray-400/65 text-xs mt-2 flex flex-wrap gap-x-3 gap-y-1">
              <span>Understand Minima.</span>
              <span className="hidden sm:inline">•</span>
              <span>Set up your own node.</span>
              <span className="hidden sm:inline">•</span>
              <span>Explore the ecosystem.</span>
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 px-2 sm:px-0 mt-4">
              <Link 
                href="/protocol" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 min-w-[200px] sm:min-w-[220px] shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                How Minima Works
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/nodes" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 mt-3 sm:mt-0 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-purple-500/50 hover:text-white hover:bg-purple-500/10 transition-all duration-300 min-w-[200px] sm:min-w-[220px] hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Run a Node
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </Link>
              
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-1 text-gray-400 hover:text-purple-400 text-sm underline decoration-gray-600 hover:decoration-purple-500/60 underline-offset-4 transition-colors duration-200 ease-out mt-3 sm:mt-0 sm:ml-2 cursor-pointer"
              >
                Start Here 
                <span className="transform group-hover:translate-x-1 transition-transform duration-200 ease-out">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Sources Box */}
      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 mb-8 
                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                      opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />
        
        <div className="relative">
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-lg flex items-center gap-2">
            <span className="text-2xl">📚</span> Primary Sources
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm">
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-gray-400 hidden md:inline">•</span>
              <ExternalLink 
                href="https://minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 font-medium break-all min-w-0"
              >
                minima.global
              </ExternalLink>
              <span className="text-gray-500 hidden md:inline">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Official Website</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-gray-400 hidden md:inline">•</span>
              <ExternalLink 
                href="https://docs.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 font-medium break-all min-w-0"
              >
                docs.minima.global
              </ExternalLink>
              <span className="text-gray-500 hidden md:inline">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Documentation</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-gray-400 hidden md:inline">•</span>
              <ExternalLink 
                href="https://github.com/minima-global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 font-medium break-all min-w-0"
              >
                github.com/minima-global
              </ExternalLink>
              <span className="text-gray-500 hidden md:inline">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Official GitHub</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* About This Site */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">📋</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Site</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              <strong className="text-white">Minimaverse</strong> is an independent, community-driven information hub 
              dedicated to the Minima Protocol. This site provides verified technical information, 
              documentation links, and ecosystem resources for developers, researchers, and 
              institutional observers.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              We focus on factual, hype-free content with clear sourcing and transparent status 
              indicators for all information.
            </p>
            
            {/* Status badges: vertical on mobile, horizontal on desktop */}
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

        {/* Project Principles */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">✅</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Project Principles</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { icon: '✓', title: 'Verified Facts Only', text: 'All information is sourced from official documentation, whitepapers, or publicly verified announcements. No speculation, price predictions, or unconfirmed rumors.' },
              { icon: '✓', title: 'Transparent Sourcing', text: 'Every fact includes a link to its primary source. One fact = one verified source.' },
              { icon: '✓', title: 'Clear Status Indicators', text: 'All features and projects are marked with clear status labels: confirmed, in development, or experimental.' },
              { icon: '✓', title: 'Neutral Tone', text: 'No marketing language, hype, or subjective evaluations. Just facts.' },
            ].map((principle, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="text-purple-400 text-lg">{principle.icon}</span>
                  {principle.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-1">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🔗</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Quick Links</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Protocol Information',
                icon: '📖',
                links: [
                  { href: '/about', text: 'What is Minima' },
                  { href: '/ecosystem', text: 'Ecosystem' },
                  { href: '/timeline', text: 'Verified Milestones (Timeline)' },
                  { href: '/open-questions', text: 'Open Questions' },
                  { href: '/links', text: 'Links' },
                ]
              },
              {
                title: 'For Developers',
                icon: '⚙️',
                links: [
                  { href: '/developers', text: 'Developer Resources' },
                  { href: '/nodes', text: 'Run a Node' },
                  { href: '/tools', text: 'Tools & Utilities' },
                ]
              },
            ].map((section, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-semibold mb-3 sm:mb-4 flex items-center gap-2 relative">
                  <span className="text-2xl">{section.icon}</span>
                  {section.title}
                </h3>
                <ul className="space-y-3 relative">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href} 
                        className="group/link flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-all duration-300 text-sm"
                      >
                        <span className="transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                        <span className="underline decoration-blue-500/30 group-hover/link:decoration-purple-500/60 underline-offset-4">
                          {link.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-4 sm:p-6 mb-8 
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

        {/* Last Updated */}
        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: April 15, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
