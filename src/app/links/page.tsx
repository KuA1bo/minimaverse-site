// src/app/links/page.tsx
// Useful Links page - verified channels and resources for Minima Protocol

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

export default function LinksPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      
      {/* NO BackgroundOrbs here - using global from layout.tsx */}

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
                Useful Links
              </span>
            </h1>
            <p className="text-gray-400">Verified channels, resources, and community links</p>
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
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs md:text-sm"
              >
                minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Official Website</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://docs.minima.global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs md:text-sm"
              >
                docs.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Documentation</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://github.com/minima-global" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs md:text-sm"
              >
                github.com/minima-global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Official GitHub</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 1: Project Feedback */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Project Feedback</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed mb-4 relative">
              This documentation project is maintained independently. For questions, 
              bug reports, or suggestions about this website, please use GitHub:
            </p>
            <ExternalLink 
              href="https://github.com/KuA1bo/minimaverse-site/issues" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 flex items-center gap-2 relative"
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📡</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Communication Channels</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <p className="text-gray-300 leading-relaxed mb-4 relative">
              For questions, support, and community discussion about Minima Protocol:
            </p>
            <ul className="space-y-3 relative">
              {[
                { icon: '💬', title: 'Discord Community', desc: 'Primary channel for real-time discussion', link: 'https://discord.gg/minimaglobal' },
                { icon: '✈️', title: 'Telegram (English)', desc: 'Official English-language community chat', link: 'https://t.me/Minima_Global' }
              ].map((channel, index) => (
                <li key={index} className="flex items-start gap-3 relative">
                  <span className="text-blue-400 mt-1">{channel.icon}</span>
                  <div>
                    <span className="text-white font-medium">{channel.title}</span>
                    <p className="text-gray-500 text-sm">{channel.desc}</p>
                    <ExternalLink 
                      href={channel.link} 
                      className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm"
                    >
                      → {channel.link.replace('https://', '')}
                    </ExternalLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Market Data & Audits */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Market Data & Audits</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { title: 'CoinMarketCap', text: 'Price tracking, market cap, volume, and supply data for MINIMA token.', link: { href: 'https://coinmarketcap.com/currencies/minima-global/', text: '→ View on CoinMarketCap' } },
              { title: 'CoinGecko', text: 'Independent crypto price charts, exchanges, community metrics.', link: { href: 'https://www.coingecko.com/en/coins/minima', text: '→ View on CoinGecko' } },
              { title: 'CertiK Skynet', text: 'Security audit scores, on-chain analytics, and project transparency metrics.', link: { href: 'https://skynet.certik.com/projects/minima', text: '→ View on CertiK Skynet' } },
              { title: 'Hacken Audit (Jan 2023)', text: 'Independent smart contract and protocol security audit. Full report available for download.', link: { href: 'https://hacken.io/audits/minima/pt-minima-minima-network-jan2023/', text: '→ View Report (PDF)' } }
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                <ExternalLink 
                  href={item.link.href} 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm relative"
                >
                  {item.link.text}
                </ExternalLink>
                <p className="text-gray-500 text-xs mt-2 relative">
                  Status: <StatusBadge status="confirmed" reducedGlow={true} /> | Official listing
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Official Email Contacts */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📧</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Email Contacts</span>
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            For formal inquiries, partnerships, or technical support, contact Minima directly:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { icon: '🤝', title: 'Partnerships', desc: 'Enterprise collaborations & business inquiries', email: 'enterprise@minima.global' },
              { icon: 'ℹ️', title: 'General Info', desc: 'General questions & public inquiries', email: 'info@minima.global' },
              { icon: '🔧', title: 'Technical Support', desc: 'Protocol issues & developer assistance', email: 'querysupport@minima.global' }
            ].map((contact, index) => (
              <a 
                key={index}
                href={`mailto:${contact.email}`}
                className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 
                          hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                          transition-all duration-300 block group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-3 relative">
                  <span className="text-blue-400 text-xl">{contact.icon}</span>
                  <div>
                    <span className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                      {contact.title}
                    </span>
                    <p className="text-gray-500 text-xs mt-1">{contact.desc}</p>
                    <p className="text-blue-400 text-xs mt-2">{contact.email}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <p className="text-gray-500 text-xs mt-4 italic">
            Note: Clicking email links opens your default email client. 
            If no client is configured, copy the address manually. 
            For urgent matters, use Discord or Telegram channels above.
          </p>
        </section>

        {/* Section 5: Official Resources - COMPLETELY REDESIGNED */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🔗</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Resources</span>
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            Verified links to official Minima Foundation platforms:
          </p>
          
          {/* ✅ NEW: Clean grid, natural heights, crowdfund spans full width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Crowdfunding - Full width highlight */}
            <ExternalLink 
              href="https://europe.republic.com/minima"
              className="md:col-span-2 relative bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-2 border-purple-500/40 rounded-2xl p-4 
                        hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/15 
                        transition-all duration-300 block group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold flex items-center gap-2">🚀 Crowdfunding on Republic Europe</span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-medium border border-purple-500/30">Active</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">Invest in Minima AG ahead of Series A. Over-subscription open.</p>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  europe.republic.com/minima <span className="opacity-50">→</span>
                </div>
                <p className="text-gray-500 text-[10px] mt-3 italic">Approved by Republic Europe on 30/03/26</p>
              </div>
            </ExternalLink>
            
            {/* Standard Resources - Clean 2-column cards */}
            {[
              { href: 'https://minima.global/', icon: '🌐', title: 'Official Website', url: 'minima.global' },
              { href: 'https://github.com/minima-global', icon: '💻', title: 'Official GitHub', url: 'github.com/minima-global' },
              { href: 'https://twitter.com/Minima_Global', icon: '🐦', title: 'Twitter / X', url: 'twitter.com/Minima_Global' },
              { href: 'https://www.youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ', icon: '📺', title: 'YouTube', url: 'youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ' },
              { href: 'https://newsletter.minima.global/', icon: '📰', title: 'SubStack Newsletter', url: 'newsletter.minima.global' },
              { href: 'https://merch.minima.global/', icon: '👚', title: 'Official Merch', url: 'merch.minima.global' }
            ].map((resource, index) => (
              <ExternalLink 
                key={index}
                href={resource.href}
                className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 
                          hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/15 
                          transition-all duration-300 block group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <span className="text-white font-medium block mb-1">{resource.icon} {resource.title}</span>
                    <p className="text-gray-400 text-xs font-mono break-all">{resource.url}</p>
                  </div>
                </div>
              </ExternalLink>
            ))}
          </div>
        </section>

        {/* Section 6: Regional Community Channels */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🌍</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Regional Community Channels</span>
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            Telegram communities for non-English speakers. 
            These channels are community-maintained and not officially moderated by Minima Foundation:
          </p>
          
          <ul className="space-y-2">
            {[
              { flag: '🇷🇺', name: 'Russian Community', link: 'https://t.me/minima_ru' },
              { flag: '🇪🇸', name: 'Spanish Community', link: 'https://t.me/minimablockchainES' },
              { flag: '🇹🇷', name: 'Turkish Community', link: 'https://t.me/minima_Turkey' },
              { flag: '🇻🇳', name: 'Vietnamese Community', link: 'https://t.me/MinimaVietNam' },
              { flag: '🇨🇳', name: 'Chinese Community', link: 'https://t.me/minimachina' }
            ].map((channel, index) => (
              <li key={index} className="flex items-center justify-between gap-2">
                <ExternalLink 
                  href={channel.link} 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 flex items-center gap-2"
                >
                  {channel.flag} {channel.name}
                </ExternalLink>
                <span className="text-gray-500 text-xs whitespace-nowrap">(community-maintained)</span>
              </li>
            ))}
          </ul>
          
          <p className="text-gray-500 text-xs mt-4 italic">
            Note: Regional channels are provided for community convenience. 
            Always verify channel authenticity before sharing sensitive information.
          </p>
        </section>

        {/* Section 7: Response Time */}
        <section className="mb-8 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Response Time</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed relative">
              GitHub issues for this documentation project are typically reviewed within 7 days. 
              For urgent matters related to Minima Protocol itself, please use Discord or Telegram 
              channels listed above.
            </p>
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
            Last updated: April 13, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
