// src/app/protocol/page.tsx
// Protocol page - technical overview of Minima Protocol architecture
// Updated: GitHub icon hidden on mobile, added Cascading Chain source link
// Content: 1:1 unchanged

import Link from 'next/link';

// ExternalLink component for all external links with ↗ icon (enhanced with hideArrow)
const ExternalLink = ({ 
  href, 
  children, 
  className = '', 
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

export default function ProtocolPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      
      <BackgroundOrbs />

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
                Minima Protocol
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Architecture, consensus, and technical specifications</p>
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

      {/* Primary Sources Box - enhanced */}
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
                href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Whitepaper v1.1 (PDF)
              </ExternalLink>
              <span className="text-gray-500">— full protocol specification</span>
            </li>
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">•</span>
              <ExternalLink 
                href="https://docs.minima.global/docs/core/minimawhitepaper/txpow" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Tx-PoW Documentation
              </ExternalLink>
              <span className="text-gray-500">— consensus mechanics</span>
            </li>
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">•</span>
              <ExternalLink 
                href="https://docs.minima.global/docs/learn/network-overview" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Network Overview
              </ExternalLink>
              <span className="text-gray-500">— architecture and layers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 1: Edge Consensus */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🌐</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Edge Consensus Architecture</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed">
              Minima implements <strong>edge consensus</strong>, where block production and validation 
              are carried out by every device connected to the network. Unlike traditional blockchains 
              that rely on specialized miners or validators, Minima enables universal participation: 
              smartphones, Raspberry Pi, and IoT devices all contribute to network security on equal terms.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Key innovation:</strong> Through collaborative Tx-PoW, the complete blockchain 
              state remains compact (~300 MB RAM), allowing any device to store and verify the entire 
              chain history independently.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            <ExternalLink 
              href="https://docs.minima.global/docs/core/minimawhitepaper/consensusforksandimmutableprotocols" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              Source: Consensus, Forks and Immutable Protocols
            </ExternalLink>
          </p>
        </section>

        {/* Section 2: Tx-PoW */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⛏️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Tx-PoW: Collaborative Proof of Work</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                title: 'How Tx-PoW Works',
                text: 'Each transaction in Minima performs a small amount of Proof of Work (~10 seconds average work per device). When a Tx-PoW value meets the network difficulty threshold (~1 block every 50 seconds), that transaction also mines a block. Blocks store only transaction hashes (~10 KB per block), keeping the chain lightweight.',
                status: 'confirmed' as const
              },
              {
                title: 'Security Through Collaboration',
                text: 'Minima nodes collaborate rather than compete. The total network security equals the sum of all individual Tx-PoW contributions. More transactions = more secure network. This cooperative approach significantly reduces energy consumption compared to competitive mining systems.',
                status: 'confirmed' as const
              },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            <ExternalLink 
              href="https://docs.minima.global/docs/core/minimawhitepaper/txpow" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              Source: Tx-PoW Documentation
            </ExternalLink>
          </p>
        </section>

        {/* Section 3: Data Structures */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🗄️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Efficient Data Structures</span>
          </h2>
          
          <div className="space-y-4">
            {/* Cascading Chain Card */}
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">Cascading Chain with Superblocks</h3>
              <p className="text-gray-300 text-sm mb-3 relative">Minima's Cascading Chain structure efficiently manages blockchain growth through Superblocks. This approach keeps the chain compact and scalable without sacrificing security, enabling fast synchronization even on resource-constrained devices.</p>
              <StatusBadge status="confirmed" />
            </div>
            {/* Cascading Chain Source Link - outside the card, like MMR */}
            <p className="text-sm text-gray-500 -mt-2 pl-2">
              <ExternalLink 
                href="https://docs.minima.global/docs/learn/the-blockchain#the-cascading-chain" 
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Source: The Cascading Chain
              </ExternalLink>
            </p>
            
            {/* MMR UTXO Card */}
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">Merkle Mountain Range (MMR) UTXO</h3>
              <p className="text-gray-300 text-sm mb-3 relative">Minima utilizes a Merkle Mountain Range database to store only the UTXOs relevant to each node's private keys. This "storage-less" approach allows each node to operate with just ~300 MB RAM, making Minima highly resource-efficient.</p>
              <StatusBadge status="confirmed" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            <ExternalLink 
              href="https://docs.minima.global/docs/learn/mmr-database" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              Source: MMR Database Documentation
            </ExternalLink>
          </p>
        </section>

        {/* Section 4: Protocol Layers */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🧱</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Protocol Layers</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl overflow-hidden 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/60">
                  <tr>
                    <th scope="col" className="text-left p-4 text-gray-300 font-semibold border-b border-gray-700/40">Layer</th>
                    <th scope="col" className="text-left p-4 text-gray-300 font-semibold border-b border-gray-700/40">Function</th>
                    <th scope="col" className="text-left p-4 text-gray-300 font-semibold border-b border-gray-700/40">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/40">
                  {[
                    { layer: 'Minima (L1)', func: 'Value transfer; flood-fill P2P backbone; all nodes validate all transactions', status: 'confirmed' as const },
                    { layer: 'Maxima', func: 'Communication layer; point-to-point off-chain messaging between connected peers', status: 'confirmed' as const },
                    { layer: 'Omnia', func: 'Layer 2 scaling; bi-directional payment channels (Lightning Network-style)', status: 'in-development' as const },
                    { layer: 'MiniDapps (L3)', func: 'Decentralized applications using value transfer (Minima) + messaging (Maxima) + scaling (Omnia)', status: 'confirmed' as const },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                      <td className="p-4 text-gray-400 font-medium">{row.layer}</td>
                      <td className="p-4 text-gray-400">{row.func}</td>
                      <td className="p-4"><StatusBadge status={row.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            <ExternalLink 
              href="https://docs.minima.global/docs/learn/network-overview" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              Source: Network Overview
            </ExternalLink>
          </p>
        </section>

        {/* Section 5: Technical Specifications */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Technical Specifications</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { title: 'Tx-PoW Difficulty', text: '~10 seconds average work per transaction; ~1 block every 50 seconds network-wide' },
              { title: 'Block Size', text: '~10 KB (stores transaction hashes only); adaptive based on network activity' },
              { title: 'RAM Requirement', text: '~300 MB per node using MMR UTXO storage optimization' },
              { title: 'Consensus', text: 'GHOST protocol for fast block times with secure finality' },
              { title: 'Quantum Resistance', text: 'KECCAK hashing + WOTS signatures for post-quantum security' },
            ].map((spec, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="flex items-start gap-3 relative">
                  <span className="text-purple-400 mt-1 text-lg">✓</span>
                  <div>
                    <span className="text-white font-medium">{spec.title}</span>
                    <p className="text-gray-300 text-sm mt-1">{spec.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            <ExternalLink 
              href="https://docs.minima.global/docs/core/at-a-glance" 
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              Source: Core Features Overview
            </ExternalLink>
          </p>
        </section>

        {/* Section 6: Network Participation */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">👥</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Network Participation Requirements</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <p className="text-gray-300 text-sm mb-3 relative">
              To maintain network health and personal security, Minima users should connect their 
              node at least once per week. This ensures:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2 relative">
              <li>Updates to MMR proofs for owned UTXOs</li>
              <li>Contribution to collective Tx-PoW security</li>
              <li>Synchronization with the latest chain state</li>
            </ul>
            <p className="text-gray-300 text-sm mt-3 relative">
              <strong>Note:</strong> There are no miners, no token incentives for validation, 
              and no ever-growing database. Every user runs a Complete node. Forever.
            </p>
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
