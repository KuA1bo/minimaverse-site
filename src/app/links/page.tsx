// src/app/links/page.tsx
// Useful Links page - verified channels and resources for Minima Protocol
// Fixed version: removed broken Media Kit link + restored layout + clean links

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

export default function LinksPage() {
  return (
    <div className="max-w-4xl mx-auto">
      
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
            <h1 className="text-3xl font-bold text-white mb-2">Useful Links</h1>
            <p className="text-gray-400">Verified channels, resources, and community links</p>
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
        
        {/* Section 1: Project Feedback */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">💬 Project Feedback</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This documentation project is maintained independently. For questions, 
            bug reports, or suggestions about this website, please use GitHub:
          </p>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <ExternalLink 
              href="https://github.com/KuA1bo/minimaverse-site/issues" 
              className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Open an Issue on GitHub
            </ExternalLink>
          </div>
        </section>

        {/* Section 2: Official Communication Channels */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">📡 Official Communication Channels</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For questions, support, and community discussion about Minima Protocol:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">💬</span>
              <div>
                <span className="text-white font-medium">Discord Community</span>
                <p className="text-gray-500 text-sm">Primary channel for real-time discussion</p>
                <ExternalLink 
                  href="https://discord.gg/minimaglobal" 
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  discord.gg/minimaglobal
                </ExternalLink>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✈️</span>
              <div>
                <span className="text-white font-medium">Telegram (English)</span>
                <p className="text-gray-500 text-sm">Official English-language community chat</p>
                <ExternalLink 
                  href="https://t.me/Minima_Global" 
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  t.me/Minima_Global
                </ExternalLink>
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3: Market Data & Audits */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">📊 Market Data & Audits</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">CoinMarketCap</h3>
              <p className="text-gray-300 text-sm mb-3">
                Price tracking, market cap, volume, and supply data for MINIMA token.
              </p>
              <ExternalLink 
                href="https://coinmarketcap.com/currencies/minima-global/" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                View on CoinMarketCap
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official listing
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">CoinGecko</h3>
              <p className="text-gray-300 text-sm mb-3">
                Independent crypto  price charts, exchanges, community metrics.
              </p>
              <ExternalLink 
                href="https://www.coingecko.com/en/coins/minima" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                View on CoinGecko
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Official listing
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">CertiK Skynet</h3>
              <p className="text-gray-300 text-sm mb-3">
                Security audit scores, on-chain analytics, and project transparency metrics.
              </p>
              <ExternalLink 
                href="https://skynet.certik.com/projects/minima" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                View on CertiK Skynet
              </ExternalLink>
              <p className="text-gray-500 text-xs mt-2">
                Status: <StatusBadge status="confirmed" /> | Security audit
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Official Email Contacts */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">📧 Official Email Contacts</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For formal inquiries, partnerships, or technical support, contact Minima directly:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Enterprise / Partnerships */}
            <a 
              href="mailto:enterprise@minima.global" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">🤝</span>
                <div>
                  <span className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                    Partnerships
                  </span>
                  <p className="text-gray-500 text-xs mt-1">Enterprise collaborations & business inquiries</p>
                  <p className="text-blue-400 text-xs mt-2">enterprise@minima.global</p>
                </div>
              </div>
            </a>

            {/* General Questions */}
            <a 
              href="mailto:info@minima.global" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">ℹ️</span>
                <div>
                  <span className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                    General Info
                  </span>
                  <p className="text-gray-500 text-xs mt-1">General questions & public inquiries</p>
                  <p className="text-blue-400 text-xs mt-2">info@minima.global</p>
                </div>
              </div>
            </a>

            {/* Technical Support */}
            <a 
              href="mailto:querysupport@minima.global" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">🔧</span>
                <div>
                  <span className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                    Technical Support
                  </span>
                  <p className="text-gray-500 text-xs mt-1">Protocol issues & developer assistance</p>
                  <p className="text-blue-400 text-xs mt-2">querysupport@minima.global</p>
                </div>
              </div>
            </a>
          </div>
          
          <p className="text-gray-500 text-xs mt-4 italic">
            Note: Clicking email links opens your default email client. 
            If no client is configured, copy the address manually. 
            For urgent matters, use Discord or Telegram channels above.
          </p>
        </section>

        {/* Section 5: Official Resources - RESTORED TWO-LINE LAYOUT (Media Kit REMOVED) */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">🔗 Official Resources</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Verified links to official Minima Foundation platforms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a 
              href="https://minima.global/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
            >
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">🌐 Website</span>
              <p className="text-gray-500 text-sm break-all">minima.global</p>
            </a>
            <a 
              href="https://github.com/minima-global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
            >
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">💻 GitHub</span>
              <p className="text-gray-500 text-sm break-all">github.com/minima-global</p>
            </a>
            <a 
              href="https://twitter.com/Minima_Global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
            >
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">🐦 Twitter / X</span>
              <p className="text-gray-500 text-sm break-all">twitter.com/Minima_Global</p>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
            >
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">📺 YouTube</span>
              <p className="text-gray-500 text-sm break-all">youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ</p>
            </a>
            <a 
              href="https://newsletter.minima.global/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
            >
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">📰 SubStack Newsletter</span>
              <p className="text-gray-500 text-sm break-all">newsletter.minima.global</p>
            </a>
            <a 
              href="https://merch.minima.global/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
            >
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">👚 Official Merch</span>
              <p className="text-gray-500 text-sm break-all">merch.minima.global</p>
            </a>
          </div>
        </section>

        {/* Section 6: Regional Community Channels */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">🌍 Regional Community Channels</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Telegram communities for non-English speakers. 
            These channels are community-maintained and not officially moderated by Minima Foundation:
          </p>
          <ul className="list-none space-y-2">
            <li>
              <ExternalLink 
                href="https://t.me/minima_ru" 
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇷🇺 Russian Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink 
                href="https://t.me/minimablockchainES" 
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇪🇸 Spanish Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink 
                href="https://t.me/minima_Turkey" 
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇹🇷 Turkish Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink 
                href="https://t.me/MinimaVietNam" 
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇻🇳 Vietnamese Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink 
                href="https://t.me/minimachina" 
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇨🇳 Chinese Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </ExternalLink>
            </li>
          </ul>
          <p className="text-gray-500 text-xs mt-4 italic">
            Note: Regional channels are provided for community convenience. 
            Always verify channel authenticity before sharing sensitive information.
          </p>
        </section>

        {/* Section 7: Response Time */}
        <section className="mb-8 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">⏱️ Response Time</h2>
          <p className="text-gray-300 leading-relaxed">
            GitHub issues for this documentation project are typically reviewed within 7 days. 
            For urgent matters related to Minima Protocol itself, please use Discord or Telegram 
            channels listed above.
          </p>
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
            Last updated: March 20, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
