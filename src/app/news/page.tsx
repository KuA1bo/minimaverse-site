// src/app/news/page.tsx
// News page - latest updates and announcements about Minima Protocol

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

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      

      {/* Unified Header with gradient accent */}
      <header className="mb-6 sm:mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex justify-between items-start gap-4">
          {/* Header text block */}
          <div className="relative inline-block w-full pb-2 sm:pb-3">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-3 sm:mb-4 group text-sm sm:text-base"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                News & Updates
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Latest announcements and development progress</p>
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
                href="https://minima.global/blog" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                minima.global/blog
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Official Blog</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://t.me/MinimaGlobal" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                t.me/MinimaGlobal
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Telegram Announcements</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink 
                href="https://discord.com/invite/minimaglobal" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                discord.com/invite/minimaglobal
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Official Discord</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Latest Updates */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📰</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Latest Updates</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                date: 'March 30, 2026',
                title: 'Crowdfunding on Republic Europe: Invest in Minima AG',
                text: "Minima is crowdfunding — giving long-term supporters and the public the opportunity to invest in Minima AG ahead of our planned Series A later this year. Minima exists to power a world where machines and AI don't just think: they transact, cooperate, and prove what is true. As autonomy accelerates, trust must exist at the edge, inside the machines themselves. Minima is building the trust layer for autonomous machines, using a radically compact blockchain protocol that can run directly on devices, at the silicon layer. The round has exceeded its initial target; over-subscription is open for a limited time.",
                link: { href: 'https://europe.republic.com/minima', text: '→ Register to Gain Access on Republic Europe' },
                status: 'confirmed' as const,
                highlight: true
              },
              {
                date: 'March 24, 2026',
                title: "Blockchain Doesn't Belong in the Cloud",
                text: "Arm's Semiconductor Education Alliance explores running a full Minima node on embedded hardware. A real protocol on real chips—no cloud dependency, just machines proving their actions independently at the edge.",
                link: { href: 'https://minima.global/post/blockchain-doesnt-belong-in-the-cloud', text: '→ Read Full Article' },
                status: 'confirmed' as const
              },
              {
                date: 'March 10, 2026',
                title: 'Siemens Highlights the Emergence of Blockchain-on-Chip',
                text: 'Siemens Cre8Ventures highlights Blockchain-on-Chip technology, exploring how embedded trust enables autonomous industrial systems. Features the world\'s first drone flight with a blockchain black box, moving the technology to TRL 6.',
                link: { href: 'https://minima.global/post/siemens', text: '→ Read Full Article' },
                status: 'confirmed' as const
              },
              {
                date: 'March 5, 2026',
                title: 'Blockchain Blackbox: How Autonomous Machines Can Prove Their Actions',
                text: 'Discover how the Blockchain-on-Chip "black box" enables autonomous drones, vehicles, and machines to record verifiable data. Learn how this TRL 6 technology ensures trust, accountability, and safety across land, sea, air, and space.',
                link: { href: 'https://minima.global/post/blockchain-blackbox', text: '→ Read Full Article' },
                video: { href: 'https://www.youtube.com/watch?v=QOCPWTWAMXI', text: '▶️ Watch: The Future of Autonomous Trust: Blockchain-on-Chip' },
                status: 'confirmed' as const
              },
              {
                date: 'January 20, 2026',
                title: 'Minima: From Roadmaps to Results',
                text: 'Minima announced a fundamental shift in communication strategy, moving away from traditional roadmaps with fixed dates toward evidence-based progress reporting.',
                link: { href: 'https://minima.global/post/minima-from-roadmaps-to-results', text: '→ Read Full Post' },
                status: 'confirmed' as const
              },
              {
                date: 'November 2025',
                title: 'DePIN Integration Progress',
                text: 'Multiple DePIN projects have successfully integrated Minima Protocol for decentralized device coordination and micropayments.',
                link: { href: 'https://minima.global/blog', text: '→ Learn More' },
                status: 'confirmed' as const
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-6 transition-all duration-300 group overflow-hidden hover:-translate-y-1
                  ${item.highlight 
                    ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 shadow-lg shadow-purple-500/10' 
                    : 'bg-gray-800/40 border border-gray-700/40 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15'
                  }`}
              >
                {item.highlight && (
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-gradient-x" />
                )}
                {!item.highlight && (
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                )}
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <p className={`text-xs ${item.highlight ? 'text-purple-300 font-medium' : 'text-gray-500'}`}>
                      {item.date}
                    </p>
                    {item.highlight && (
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-medium border border-purple-500/30">
                        Active Campaign
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`font-medium mb-2 ${item.highlight ? 'text-white text-lg' : 'text-white'}`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-sm mb-3 ${item.highlight ? 'text-gray-200' : 'text-gray-300'}`}>
                    {item.text}
                  </p>
                  
                  <div className="space-y-2">
                    {/* ✅ Стрелка "→" в тексте + компонент автоматически добавит SVG в конец */}
                    <ExternalLink 
                      href={item.link.href} 
                      className={`underline-offset-4 transition-all duration-300 text-sm block inline-flex items-center gap-1
                        ${item.highlight 
                          ? 'text-purple-300 hover:text-purple-200 decoration-purple-500/40 hover:decoration-purple-400' 
                          : 'text-blue-400 hover:text-purple-400 decoration-blue-500/30 hover:decoration-purple-500/60'
                        }`}
                    >
                      {item.link.text}
                    </ExternalLink>
                    {item.video && (
                      <ExternalLink 
                        href={item.video.href} 
                        className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm block"
                      >
                        {item.video.text}
                      </ExternalLink>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <p className="text-gray-500 text-xs">
                      Status: <StatusBadge status={item.status} reducedGlow={true} />
                    </p>
                    {item.highlight && (
                      <span className="text-gray-500 text-xs">•</span>
                    )}
                    {item.highlight && (
                      <p className="text-gray-400 text-xs italic">
                        Approved by Republic Europe on 30/03/26
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Communication Channels - mobile layout matches Primary Sources */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📢</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Communication Channels</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <p className="text-gray-300 text-sm mb-4 relative">
              For the most up-to-date information about Minima Protocol, follow these official channels:
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 relative">
                <span className="hidden md:inline text-gray-400">•</span>
                <ExternalLink 
                  href="https://minima.global/blog" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  Minima Official Blog
                </ExternalLink>
                <span className="hidden md:inline text-gray-500">—</span>
                <span className="text-gray-500 text-xs md:text-sm">Major announcements and updates</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 relative">
                <span className="hidden md:inline text-gray-400">•</span>
                <ExternalLink 
                  href="https://t.me/MinimaGlobal" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  Telegram Announcements
                </ExternalLink>
                <span className="hidden md:inline text-gray-500">—</span>
                <span className="text-gray-500 text-xs md:text-sm">Quick updates and community news</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 relative">
                <span className="hidden md:inline text-gray-400">•</span>
                <ExternalLink 
                  href="https://discord.com/invite/minimaglobal" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  Official Discord
                </ExternalLink>
                <span className="hidden md:inline text-gray-500">—</span>
                <span className="text-gray-500 text-xs md:text-sm">Community discussions and AMAs</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 relative">
                <span className="hidden md:inline text-gray-400">•</span>
                <ExternalLink 
                  href="https://github.com/minima-global/Minima/releases" 
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  GitHub Releases
                </ExternalLink>
                <span className="hidden md:inline text-gray-500">—</span>
                <span className="text-gray-500 text-xs md:text-sm">Software updates and changelogs</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Archive Notice */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🗄️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Archive Notice</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 text-sm leading-relaxed relative">
              This page serves as a curated archive of significant Minima Protocol announcements 
              and development milestones. For real-time updates, please refer to the official 
              communication channels listed above.
            </p>
            <p className="text-gray-400 text-xs mt-4 relative">
              <strong>Note:</strong> This page is maintained independently and is not an official 
              Minima Foundation publication.
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
