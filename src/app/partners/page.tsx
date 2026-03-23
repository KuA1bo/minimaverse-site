// src/app/partners/page.tsx
// Partners page - verified confirmed partnerships in the Minima ecosystem
// Visual enhancements applied per site design system (content unchanged)

import Link from 'next/link';

// ExternalLink component for all external links with ↗ icon (enhanced with hideArrow)
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

// StatusBadge component for feature status indicators (enhanced with glow + hover)
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

export default function PartnersPage() {
  return (
    <div className="max-w-4xl mx-auto relative">
      
      <BackgroundOrbs />

      {/* Unified Header with gradient accent */}
      <header className="mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex justify-between items-start">
          {/* Header text block - pb-3 for line spacing */}
          <div className="relative inline-block w-full pb-3">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Confirmed Partnerships
              </span>
            </h1>
            <p className="text-gray-400">Publicly verified collaborations and integrations</p>
            {/* Gradient accent line under subtitle */}
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>
          
          {/* GitHub icon - lower position, glow centered on icon */}
          <div className="flex items-center justify-end relative -translate-x-10 mt-12">
            {/* Centered glow - matches icon size exactly */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500/80 rounded-full blur-xl" />
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
        </div>
      </header>

      {/* Primary Sources Box - enhanced with bullet points • */}
      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-8 
                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                      opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />
        
        <div className="relative">
          <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
            <span className="text-2xl">📚</span> Primary Sources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">•</span>
              <ExternalLink 
                href="https://minima.global/blog" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                minima.global/blog
              </ExternalLink>
              <span className="text-gray-500">— Official Blog</span>
            </li>
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">•</span>
              <ExternalLink 
                href="https://docs.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                docs.minima.global
              </ExternalLink>
              <span className="text-gray-500">— Documentation</span>
            </li>
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">•</span>
              <ExternalLink 
                href="https://github.com/minima-global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                github.com/minima-global
              </ExternalLink>
              <span className="text-gray-500">— Official GitHub</span>
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
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Page</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed relative">
              This page lists publicly confirmed partnerships and collaborations associated with 
              the Minima ecosystem. All entries include verifiable publication dates and official 
              announcements. Only partnerships with public confirmation are included.
            </p>
            <p className="text-gray-400 text-sm mt-4 relative">
              Status legend:{' '}
              <StatusBadge status="confirmed" reducedGlow={true} />{' '}
              <span className="text-gray-500">|</span>{' '}
              <StatusBadge status="in-development" reducedGlow={true} />{' '}
              <span className="text-gray-500">|</span>{' '}
              <StatusBadge status="community" reducedGlow={true} />
            </p>
          </div>
        </section>

        {/* Confirmed Partnerships Timeline */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📅</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Confirmed Partnerships (Reverse Chronological)</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { date: 'March 25, 2025', title: 'Minima and Zeekr', text: 'Developing an on-demand EV charging solution enabling secure access to private charging stations to solve accessibility challenges.', source: 'https://minima.global/post/minima-x-zeekr' },
              { date: 'March 3, 2025', title: 'SchoolTry', text: 'Launching Minima blockchain curriculum in April 2025 to reach 2 million Nigerian students.', source: 'https://minima.global/post/schooltry_partners_with_minima' },
              { date: 'December 3, 2024', title: 'Arm Flexible Access Program', text: 'Minima applied to participate in Arm\'s program to advance development of the Minima chip.', source: 'https://minima.global/post/arm-and-minima' },
              { date: 'November 27, 2024', title: 'Trust Exchange', text: 'Partnership to pioneer decentralized real-world asset (RWA) verification with blockchain-based data attestation.', source: 'https://minima.global/post/trust-exchange-and-minima' },
              { date: 'October 17, 2024', title: 'CPIN', text: 'Strategic partnership to secure renewable energy data using Minima\'s infrastructure.', source: 'https://minima.global/post/minima-global-announces-strategic-partnership-with-cpin-to-secure-renewable-energy-data' },
              { date: 'July 24, 2024', title: 'Mercury Global', text: 'Pilot project to create a decentralized alternative to SWIFT for global payment networks using Minima protocol.', source: 'https://minima.global/post/minima-partners-with-mercury-global-to-pilot-decentralised-swift-alternative-to-reshape-global-payment-networks' },
              { date: 'July 9, 2024', title: 'Sfero', text: 'Partnership to revolutionize retail payment systems using Minima infrastructure.', source: 'https://minima.global/post/minima-partners-with-sfero-to-revolutionize-retail-payments' },
              { date: 'June 12, 2024', title: 'McLaren GT4', text: 'Minima powers world\'s first blockchain-based race data recorder for McLaren GT4 supercar at Spa.', source: 'https://minima.global/post/minima-l1-blockchain-powers-the-worlds-first-on-chain-race-data-logger-for-mclaren-gt4-supercar-at-spa' },
              { date: 'April 30, 2024', title: 'OPP (Online Payment Platform)', text: 'Bringing private EV charging stations worldwide to the $7.3B electric vehicle market through tokenized access.', source: 'https://minima.global/post/minima-partners-with-opp-online-payment-platform-to-commodify-private-charging-points-worldwide-in-7-3b-ev-market' },
              { date: 'March 27, 2024', title: 'ABB SynerLeap', text: 'Collaboration with ABB\'s innovation hub to drive advancements in energy and industrial IoT.', source: 'https://minima.global/post/minima-partners-with-abb-innovation-hub-synerleap-to-drive-innovation-in-energy-industrial-iot' },
              { date: 'March 19, 2024', title: 'Gaia-X', text: 'Minima joins Gaia-X initiative for European data infrastructure sovereignty.', source: 'https://minima.global/post/minima-thrilled-to-announce-it-is-a-member-of-gaia-x' },
              { date: 'March 11, 2024', title: 'Streamr', text: 'Partnership to pioneer secure real-time data streaming solutions on Minima infrastructure.', source: 'https://minima.global/post/minima-partners-with-streamr-to-pioneer-secure-live-data-streaming' },
              { date: 'February 19, 2024', title: 'Wicrypt', text: 'DePIN-focused partnership with Wicrypt Wi-Fi network to democratize internet access globally.', source: 'https://minima.global/post/minima-a-depin-focused-layer1-blockchain-is-joining-forces-with-wi-fi-network-wicrypt-to-democratise-internet-access' },
              { date: 'February 14, 2024', title: 'LTA Labs', text: 'Collaboration to develop a range of financial products leveraging Minima infrastructure.', source: 'https://minima.global/post/lta-labs-partners-with-minima-to-power-its-financial-product-suite' },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 border-l-4 border-l-blue-500
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex justify-between items-start mb-2 relative">
                  <span className="text-sm text-gray-400">{item.date}</span>
                  <StatusBadge status="confirmed" reducedGlow={true} />
                </div>
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                <p className="text-gray-500 text-xs relative">
                  Source:{' '}
                  <ExternalLink 
                    href={item.source} 
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                  >
                    Official Announcement
                  </ExternalLink>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Inclusion Criteria */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Inclusion Criteria</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <ul className="space-y-2">
              {[
                'Partnership must be publicly announced by official Minima channels',
                'Publication date must be verifiable',
                'Direct link to source (press release, official statement, or documentation)',
                'No speculative, rumored, or unconfirmed collaborations',
                'Academic/research collaborations require official institutional confirmation'
              ].map((criterion, index) => (
                <li key={index} className="flex items-start gap-3 relative">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Universal Disclaimer Block - enhanced */}
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

        {/* Last Updated - enhanced */}
        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: February 20, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
