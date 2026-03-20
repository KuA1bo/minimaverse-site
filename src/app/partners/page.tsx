// src/app/partners/page.tsx
// Partners page - verified confirmed partnerships in the Minima ecosystem
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

export default function PartnersPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Confirmed Partnerships</h1>
            <p className="text-gray-400">Publicly verified collaborations and integrations</p>
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
            <span className="text-gray-400">Official Blog:</span>{' '}
            <ExternalLink 
              href="https://minima.global/blog" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              minima.global/blog
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
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">📋 About This Page</h2>
          <p className="text-gray-300 leading-relaxed">
            This page lists publicly confirmed partnerships and collaborations associated with 
            the Minima ecosystem. All entries include verifiable publication dates and official 
            announcements. Only partnerships with public confirmation are included.
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

        {/* Confirmed Partnerships Timeline */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">📅 Confirmed Partnerships (Reverse Chronological)</h2>
          
          <div className="space-y-4">
            {/* Zeekr - March 25, 2025 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 25, 2025</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">Minima and Zeekr</h3>
              <p className="text-gray-300 text-sm mb-3">
                Developing an on-demand EV charging solution enabling secure access to private 
                charging stations to solve accessibility challenges.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-x-zeekr" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* SchoolTry - March 3, 2025 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 3, 2025</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">SchoolTry</h3>
              <p className="text-gray-300 text-sm mb-3">
                Launching Minima blockchain curriculum in April 2025 to reach 2 million 
                Nigerian students.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/schooltry_partners_with_minima" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* Arm - December 3, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">December 3, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">Arm Flexible Access Program</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima applied to participate in Arm's program to advance development of 
                the Minima chip.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/arm-and-minima" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* Trust Exchange - November 27, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">November 27, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">Trust Exchange</h3>
              <p className="text-gray-300 text-sm mb-3">
                Partnership to pioneer decentralized real-world asset (RWA) verification 
                with blockchain-based data attestation.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/trust-exchange-and-minima" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* CPIN - October 17, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">October 17, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">CPIN</h3>
              <p className="text-gray-300 text-sm mb-3">
                Strategic partnership to secure renewable energy data using Minima's 
                infrastructure.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-global-announces-strategic-partnership-with-cpin-to-secure-renewable-energy-data" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* Mercury Global - July 24, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">July 24, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">Mercury Global</h3>
              <p className="text-gray-300 text-sm mb-3">
                Pilot project to create a decentralized alternative to SWIFT for global 
                payment networks using Minima protocol.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-partners-with-mercury-global-to-pilot-decentralised-swift-alternative-to-reshape-global-payment-networks" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* Sfero - July 9, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">July 9, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">Sfero</h3>
              <p className="text-gray-300 text-sm mb-3">
                Partnership to revolutionize retail payment systems using Minima infrastructure.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-partners-with-sfero-to-revolutionize-retail-payments" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* McLaren GT4 - June 12, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">June 12, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">McLaren GT4</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima powers world's first blockchain-based race data recorder for 
                McLaren GT4 supercar at Spa.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-l1-blockchain-powers-the-worlds-first-on-chain-race-data-logger-for-mclaren-gt4-supercar-at-spa" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* OPP - April 30, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">April 30, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">OPP (Online Payment Platform)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Bringing private EV charging stations worldwide to the $7.3B electric 
                vehicle market through tokenized access.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-partners-with-opp-online-payment-platform-to-commodify-private-charging-points-worldwide-in-7-3b-ev-market" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* ABB SynerLeap - March 27, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 27, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">ABB SynerLeap</h3>
              <p className="text-gray-300 text-sm mb-3">
                Collaboration with ABB's innovation hub to drive advancements in energy 
                and industrial IoT.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-partners-with-abb-innovation-hub-synerleap-to-drive-innovation-in-energy-industrial-iot" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* Gaia-X - March 19, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 19, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">Gaia-X</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima joins Gaia-X initiative for European data infrastructure sovereignty.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-thrilled-to-announce-it-is-a-member-of-gaia-x" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* Streamr - March 11, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 11, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">Streamr</h3>
              <p className="text-gray-300 text-sm mb-3">
                Partnership to pioneer secure real-time data streaming solutions on 
                Minima infrastructure.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-partners-with-streamr-to-pioneer-secure-live-data-streaming" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* Wicrypt - February 19, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">February 19, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">Wicrypt</h3>
              <p className="text-gray-300 text-sm mb-3">
                DePIN-focused partnership with Wicrypt Wi-Fi network to democratize 
                internet access globally.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/minima-a-depin-focused-layer1-blockchain-is-joining-forces-with-wi-fi-network-wicrypt-to-democratise-internet-access" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>

            {/* LTA Labs - February 14, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">February 14, 2024</span>
                <StatusBadge status="confirmed" />
              </div>
              <h3 className="text-white font-medium mb-2">LTA Labs</h3>
              <p className="text-gray-300 text-sm mb-3">
                Collaboration to develop a range of financial products leveraging 
                Minima infrastructure.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <ExternalLink 
                  href="https://minima.global/post/lta-labs-partners-with-minima-to-power-its-financial-product-suite" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </ExternalLink>
              </p>
            </div>
          </div>
        </section>

        {/* Inclusion Criteria */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">✅ Inclusion Criteria</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">Partnership must be publicly announced by official Minima channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">Publication date must be verifiable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">Direct link to source (press release, official statement, or documentation)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">No speculative, rumored, or unconfirmed collaborations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">Academic/research collaborations require official institutional confirmation</span>
              </li>
            </ul>
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
