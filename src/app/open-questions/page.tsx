// src/app/open-questions/page.tsx
// Open Questions page - redirect to official Discord for community questions
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

export default function OpenQuestionsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      
      {/* Header with gradient accent */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div className="relative inline-block">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4"
            >
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Open Questions</h1>
            <p className="text-gray-400">Community questions and official answers</p>
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

      {/* Intro notice */}
      <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mb-8 
                      transition-all duration-200 hover:border-blue-600/70 
                      opacity-0 animate-fade-in-up delay-75">
        <p className="text-blue-200 text-sm">
          <strong>Note:</strong> This page serves as a directory for community questions. 
          For accurate, up-to-date answers, please refer to official Minima channels. 
          Speculative content is intentionally minimized to maintain factual accuracy.
        </p>
      </div>

      {/* Answered Questions Section */}
      <article className="prose prose-invert max-w-none">
        
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">✅ Previously Asked Questions</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The following topics have been addressed through official Minima communications:
          </p>

          {/* Question 1: Node Monetization */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <h3 className="text-lg font-semibold text-white mb-2">Node Monetization Model</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong>Question:</strong> How will node operators be incentivized in a fully decentralized network?
            </p>
            <div className="bg-green-900/30 border border-green-700/50 rounded p-3">
              <p className="text-green-200 text-sm">
                <strong>Answer:</strong> Minima Protocol does not and will not implement token-based incentives for node operation. 
                Incentive mechanisms inherently introduce centralization pressures, which contradict Minima's core principle of 
                unconditional decentralization. This design choice was made consciously by the protocol architects.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Source: Minima Protocol Design Philosophy, Community AMAs
              </p>
            </div>
          </div>

          {/* Question 2: Protocol Immutability */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <h3 className="text-lg font-semibold text-white mb-2">Protocol Governance & Updates</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong>Question:</strong> How will protocol upgrades be decided in a fully decentralized Minima network?
            </p>
            <div className="bg-green-900/30 border border-green-700/50 rounded p-3">
              <p className="text-green-200 text-sm">
                <strong>Answer:</strong> The core Minima Protocol is complete and immutable. As stated by architect Paddy Cherry, 
                the foundational layer is finalized and will not undergo changes. Future development occurs on application layers 
                built atop the protocol, not within the protocol itself.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Source: Paddy Cherry (Minima Architect), Official Communications
              </p>
            </div>
          </div>
        </section>

        {/* Discord Redirect Section */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">💬 Ask a New Question</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For questions about Minima Protocol that are not answered above, please use the official 
            Discord channel dedicated to community inquiries:
          </p>
          
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 mb-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <div>
                <h4 className="text-white font-semibold mb-1">#stage-question</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Official Discord channel for community questions. Questions are reviewed and answered 
                  during scheduled AMA sessions with the Minima team.
                </p>
                <ExternalLink 
                  href="https://discord.com/channels/562272317930209280/1244940478756028446" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 underline font-medium"
                  ariaLabel="Open #stage-question Discord channel"
                >
                  Open #stage-question on Discord
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </ExternalLink>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 
                          transition-all duration-200 hover:border-yellow-600/70">
            <p className="text-yellow-200 text-sm">
              <strong>Tip:</strong> Before asking, search the channel history — your question may have already been answered.
            </p>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">🔗 Additional Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
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
              Minima Blog (Announcements):{' '}
              <ExternalLink 
                href="https://minima.global/blog" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                minima.global/blog
              </ExternalLink>
            </li>
            <li>
              Telegram Announcements:{' '}
              <ExternalLink 
                href="https://t.me/MinimaGlobal" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                t.me/MinimaGlobal
              </ExternalLink>
            </li>
          </ul>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8 
                        transition-all duration-200 hover:border-amber-600/70 
                        opacity-0 animate-fade-in-up delay-75">
          <p className="text-amber-200 text-sm">
            <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" className="underline hover:text-amber-100">
              Learn more
            </Link>
          </p>
        </div>

        <section className="border-t border-gray-700 pt-6 mt-12 opacity-0 animate-fade-in-up delay-150">
          <p className="text-gray-500 text-sm">
            Last updated: March 20, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
