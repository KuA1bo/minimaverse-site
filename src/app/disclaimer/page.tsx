// src/app/disclaimer/page.tsx
// Disclaimer page - Legal notice and project information
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

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto">
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
            <h1 className="text-3xl font-bold text-white mb-2">Disclaimer</h1>
            <p className="text-gray-400">Legal notice and project information</p>
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
        <section className="mb-8 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">📄 Project Status</h2>
          <p className="text-gray-300 leading-relaxed">
            Minimaverse is an <strong>independent documentation project</strong> focused on 
            the Minima Protocol ecosystem. This website is not affiliated with, endorsed by, 
            or connected to Minima Foundation in any official capacity.
          </p>
        </section>

        <section className="mb-8 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">🔗 Official Resources</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For official information about Minima Protocol, please refer to the following 
            verified sources:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Official Website:{' '}
              <ExternalLink 
                href="https://minima.global" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                minima.global
              </ExternalLink>
            </li>
            <li>
              Official Documentation:{' '}
              <ExternalLink 
                href="https://docs.minima.global" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                docs.minima.global
              </ExternalLink>
            </li>
            <li>
              Official Blog:{' '}
              <ExternalLink 
                href="https://minima.global/blog" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                minima.global/blog
              </ExternalLink>
            </li>
          </ul>
        </section>

        <section className="mb-8 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">✅ Information Accuracy</h2>
          <p className="text-gray-300 leading-relaxed">
            All information presented on this website is sourced from publicly available 
            official Minima Foundation communications. Every factual claim is accompanied 
            by a direct link to its primary source. Content is maintained in a neutral, 
            factual tone without marketing language or speculation.
          </p>
        </section>

        <section className="mb-8 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">⚠️ No Financial Advice</h2>
          <p className="text-gray-300 leading-relaxed">
            This website does not provide financial, investment, or legal advice. All 
            content is for informational and educational purposes only. Users should 
            conduct their own research and consult qualified professionals before making 
            any decisions related to Minima Protocol or associated projects.
          </p>
        </section>

        <section className="mb-8 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">🛠️ Project Maintenance</h2>
          <p className="text-gray-300 leading-relaxed">
            This documentation project is maintained independently. For questions, issues, 
            or contributions, please use the official GitHub repository:
          </p>
          <p className="mt-4">
            <ExternalLink 
              href="https://github.com/KuA1bo/minimaverse-site" 
              className="text-blue-400 hover:text-blue-300 underline"
            >
              github.com/KuA1bo/minimaverse-site
            </ExternalLink>
          </p>
        </section>

        {/* Universal Disclaimer Block - ADAPTED FOR DISCLAIMER PAGE */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8 
                        transition-all duration-200 hover:border-amber-600/70 
                        opacity-0 animate-fade-in-up delay-150">
          <p className="text-amber-200 text-sm">
            <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <span className="text-amber-300">You are currently viewing the full disclaimer page.</span>
          </p>
        </div>

        <section className="border-t border-gray-700 pt-6 mt-12 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm">
            Last updated: March 20, 2026
          </p>
        </section>
      </article>
    </div>
  );
}
