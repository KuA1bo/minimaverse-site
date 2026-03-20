// src/app/page.tsx
// Home page - entry point for Minimaverse documentation hub
// Hybrid version: full content + visual enhancements + section icons + clean links

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

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Hero Section - unique to homepage */}
      <section className="mb-12 py-8 border-b border-gray-700 opacity-0 animate-fade-in-up delay-75">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-4 relative inline-block">
              Minimaverse
              {/* Gradient accent line under title */}
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              Community-driven information hub for the Minima Protocol
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Link 
                href="/protocol" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500/10 transition-colors min-w-[200px]"
              >
                How Minima Works
              </Link>
              <Link 
                href="/nodes" 
                className="inline-flex items-center justify-center px-6 py-3 mt-3 sm:mt-0 border-2 border-gray-600 text-gray-400 hover:text-blue-400 hover:border-blue-500 transition-colors min-w-[200px]"
              >
                Run a Node
              </Link>
            </div>
            
            <p className="mt-6 text-xs text-gray-500 max-w-2xl">
              All information sourced from official Minima documentation and verified public announcements
            </p>
          </div>
          
          <div className="flex items-start justify-end">
            <ExternalLink 
              href="https://github.com/KuA1bo/minimaverse-site" 
              className="text-gray-400 hover:text-white transition-colors"
              ariaLabel="View source on GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </ExternalLink>
          </div>
        </div>
      </section>

      {/* Primary Sources Box */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8 
                      transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 
                      opacity-0 animate-fade-in-up delay-150">
        <h3 className="text-white font-medium mb-3">📚 Primary Sources for This Site</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-400">Official Website:</span>{' '}
            <ExternalLink 
              href="https://minima.global" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              minima.global
            </ExternalLink>
          </li>
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
            <span className="text-gray-400">GitHub:</span>{' '}
            <ExternalLink 
              href="https://github.com/minima-global" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              github.com/minima-global
            </ExternalLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* About This Site */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">📋 About This Site</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <p className="text-gray-300 text-sm mb-3">
              <strong>Minimaverse</strong> is an independent, community-driven information hub 
              dedicated to the Minima Protocol. This site provides verified technical information, 
              documentation links, and ecosystem resources for developers, researchers, and 
              institutional observers.
            </p>
            <p className="text-gray-300 text-sm">
              We focus on factual, hype-free content with clear sourcing and transparent status 
              indicators for all information.
            </p>
            <p className="text-gray-400 text-xs mt-4">
              Status legend:{' '}
              <StatusBadge status="confirmed" />{' '}
              <span className="text-gray-500">|</span>{' '}
              <StatusBadge status="in-development" />{' '}
              <span className="text-gray-500">|</span>{' '}
              <StatusBadge status="community" />
            </p>
          </div>
        </section>

        {/* Project Principles */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">✅ Project Principles</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">✓ Verified Facts Only</h3>
              <p className="text-gray-300 text-sm">
                All information is sourced from official documentation, whitepapers, or publicly 
                verified announcements. No speculation, price predictions, or unconfirmed rumors.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">✓ Transparent Sourcing</h3>
              <p className="text-gray-300 text-sm">
                Every fact includes a link to its primary source. One fact = one verified source.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">✓ Clear Status Indicators</h3>
              <p className="text-gray-300 text-sm">
                All features and projects are marked with clear status labels: confirmed, 
                in development, or experimental.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">✓ Neutral Tone</h3>
              <p className="text-gray-300 text-sm">
                No marketing language, hype, or subjective evaluations. Just facts.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">🔗 Quick Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-3">Protocol Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/about" 
                    className="text-blue-400 hover:text-blue-300 underline text-sm block"
                  >
                    → What is Minima
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/ecosystem" 
                    className="text-blue-400 hover:text-blue-300 underline text-sm block"
                  >
                    → Ecosystem
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/timeline" 
                    className="text-blue-400 hover:text-blue-300 underline text-sm block"
                  >
                    → Verified Milestones (Timeline)
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-3">For Developers</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/developers" 
                    className="text-blue-400 hover:text-blue-300 underline text-sm block"
                  >
                    → Developer Resources
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/nodes" 
                    className="text-blue-400 hover:text-blue-300 underline text-sm block"
                  >
                    → Run a Node
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tools" 
                    className="text-blue-400 hover:text-blue-300 underline text-sm block"
                  >
                    → Tools & Utilities
                  </Link>
                </li>
              </ul>
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
            Last updated: March 20, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
