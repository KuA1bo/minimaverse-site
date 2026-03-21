// src/app/about/page.tsx
// About page - factual overview of Minima Protocol and Minimaverse project
// Upscayl-style visual enhancements applied (content unchanged)
// Fixed: header line break + updated date + GitHub icon position & glow + smaller icon + tighter brighter glow + icon lower + core docs link updated

import Link from 'next/link';

// Reusable component for external links with icon (enhanced with hideArrow)
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

// Reusable status badge component (enhanced with glow + hover)
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

// Enhanced background orbs - Upscayl style
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

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto relative">
      
      <BackgroundOrbs />

      {/* Unified Header with gradient accent */}
      <header className="mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex justify-between items-start">
          <div className="relative">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors block mb-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold mb-2 relative block">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                About Minima Protocol
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full animate-gradient-x" />
            </h1>
            <p className="text-gray-400">Technical overview and project context</p>
          </div>
          
          {/* GitHub icon - smaller size, tighter brighter glow, positioned lower, no arrow, shifted left */}
          <div className="flex items-center justify-end relative -translate-x-10 mt-8">
            {/* Tighter brighter centered glow - half radius, brighter opacity */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500/80 rounded-full blur-xl" />
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
              <span className="text-gray-400">Whitepaper:</span>
              <ExternalLink 
                href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf  "
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Minima Whitepaper v1.1 (PDF)
              </ExternalLink>
            </li>
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">What is Minima:</span>
              <ExternalLink 
                href="https://docs.minima.global/docs/core  "
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                docs.minima.global/docs/core
              </ExternalLink>
            </li>
            <li className="flex items-center gap-2 group/link">
              <span className="text-gray-400">Documentation:</span>
              <ExternalLink 
                href="https://docs.minima.global  "
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                docs.minima.global
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Content with fade-in animation */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 1: About This Project */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📄</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Project</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Minimaverse</strong> is an independent documentation project focused on the 
              Minima Protocol ecosystem. This website is not affiliated with, endorsed by, or 
              connected to Minima Foundation. All content is compiled from publicly available 
              official sources and maintained by the community.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Purpose:</strong> To provide verified, neutral, and accessible documentation 
              about Minima Protocol for developers, node operators, and community members.
            </p>
          </div>
        </section>

        {/* Section 2: What is Minima Protocol */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⛓️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">What is Minima Protocol</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Minima is a decentralized blockchain protocol designed to run on any device, from 
            mobile phones to IoT hardware, while maintaining full node participation for every 
            network member.
          </p>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative space-y-3">
              <p className="text-gray-300 text-sm">
                <strong>Key principle:</strong> Every node is a Complete node. There are no miners, 
                no light clients, and no centralized validators — all participants store, verify, 
                and construct the blockchain equally.
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Security model:</strong> Every transaction performs ~10 seconds of PoW work 
                (Tx-PoW). When difficulty is high enough (~1 per 50 seconds), the transaction also 
                mines a block. All users secure the network — no paid miners.
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Cryptography:</strong> All cryptographic security uses hash-based algorithms: 
                KECCAK for hashing and Winternitz One-Time Signatures (WOTS) for quantum resistance.
              </p>
              <StatusBadge status="confirmed" />
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            Source:{' '}
            <ExternalLink 
              href="https://docs.minima.global/docs/core  "
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              docs.minima.global/docs/core
            </ExternalLink>
          </p>
        </section>

        {/* Section 3: Core Technical Features */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Core Technical Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Compact State (~300 MB RAM)',
                text: 'Complete blockchain history fits in minimal storage through aggressive pruning and Cascading Proof Chain architecture.',
                status: 'confirmed' as const
              },
              {
                title: 'Cascading Proof Chain',
                text: '256 difficulty levels with logarithmic growth. Stores cumulative PoW in finite chain headers while pruning almost all blocks.',
                status: 'confirmed' as const
              },
              {
                title: 'Burn Mechanism',
                text: 'Instead of transaction fees, outputs sum to less than inputs. Burned coins reduce total supply, preventing DDoS without miner-centric fee markets.',
                status: 'confirmed' as const
              },
              {
                title: 'MMR UTXO (Storage-less)',
                text: 'Users track only their own coins with Merkle proofs instead of full UTXO database. Reduces storage by orders of magnitude.',
                status: 'confirmed' as const
              },
              {
                title: 'Maxima P2P Network',
                text: 'Layer 2 backbone for Lightning, Sidechains, DEX. All Maxima messages perform PoW, contributing to Layer 1 security.',
                status: 'confirmed' as const
              },
              {
                title: 'Pulse Network',
                text: 'Every 10 minutes, nodes send PING + PoW to peers. Verifies node health, syncs mempool, adds continuous security. No zombies allowed.',
                status: 'confirmed' as const
              },
            ].map((feature, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h3 className="text-white font-medium mb-2 relative">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{feature.text}</p>
                <StatusBadge status={feature.status} />
              </div>
            ))}
          </div>
          
          <p className="text-gray-500 text-xs mt-4">
            Explore technical docs:{' '}
            <ExternalLink 
              href="https://docs.minima.global/docs/core/at-a-glance"
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              docs.minima.global/docs/core/at-a-glance
            </ExternalLink>
          </p>
        </section>

        {/* Section 4: Comparison Table */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⚖️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Minima vs Traditional Blockchains</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl overflow-hidden 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/60">
                  <tr>
                    <th scope="col" className="text-left p-4 text-gray-300 font-semibold border-b border-gray-700/40">Aspect</th>
                    <th scope="col" className="text-left p-4 text-gray-300 font-semibold border-b border-gray-700/40">Traditional</th>
                    <th scope="col" className="text-left p-4 text-gray-300 font-semibold border-b border-gray-700/40">Minima</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/40">
                  {[
                    { aspect: 'Node Requirements', traditional: '100+ GB, server-grade', minima: '~300 MB RAM, mobile/IoT' },
                    { aspect: 'Node Types', traditional: 'Full + light (unequal)', minima: 'All Complete (equal)' },
                    { aspect: 'Block Production', traditional: 'Miners only', minima: 'All users (Tx-PoW)' },
                    { aspect: 'Fees', traditional: 'Fee market (to miners)', minima: 'Burn mechanism (no miners)' },
                    { aspect: 'Scaling', traditional: 'Vertical or L2', minima: 'Horizontal (more nodes)' },
                    { aspect: 'Quantum Security', traditional: 'ECDSA (vulnerable)', minima: 'KECCAK + WOTS' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                      <td className="p-4 text-gray-400">{row.aspect}</td>
                      <td className="p-4 text-gray-400">{row.traditional}</td>
                      <td className="p-4 text-green-400 font-medium">{row.minima}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: Decentralization Principles */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🔐</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Decentralization Principles</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { title: 'Node Equality', text: 'All participants run Complete nodes with equal rights; no privileged validator set.' },
              { title: 'No Miner Cartels', text: 'Distributed PoW means no small group can coordinate 51% attack. Cost exceeds potential gains.' },
              { title: 'Censorship Resistance', text: 'No central points of failure. Attacking requires attacking entire user base (millions).' },
              { title: 'Protocol Immutability', text: '"No soft forks allowed. No hard forks required — ever." Protocol is complete from inception.' },
            ].map((principle, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="flex items-start gap-3 relative">
                  <span className="text-purple-400 mt-1 text-lg">✓</span>
                  <div>
                    <span className="text-white font-medium">{principle.title}</span>
                    <p className="text-gray-300 text-sm mt-1">{principle.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Current Status & Considerations */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Current Status & Considerations</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { title: 'Protocol Maturity', text: 'The core Minima Protocol is complete and immutable by design. Future development focuses on application layers and tooling built atop the protocol.' },
              { title: 'No Token Incentives', text: 'Minima does not implement token rewards for node operation. This conscious design choice avoids centralization pressures associated with paid mining.' },
              { title: 'User Participation Requirement', text: 'Users must connect periodically (minimum weekly) to update MMR proofs and validate the Cascading Proof Chain. This is the trade-off for extreme decentralization.' },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm relative">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Developer Resources */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🛠️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Developer Resources</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For developers interested in building on Minima Protocol:
          </p>
          
          <ExternalLink 
            href="https://build.minima.global  " 
            className="block relative bg-blue-900/30 border border-blue-700/50 rounded-2xl p-6 
                      hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 
                      transition-all duration-300 group overflow-hidden"
            ariaLabel="Visit Edge Pioneers developer portal"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex items-start gap-4">
              <span className="text-blue-400 text-2xl mt-1">🛠️</span>
              <div>
                <h3 className="text-white font-medium group-hover:text-blue-300 transition-colors">
                  Edge Pioneers Program
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Official developer portal: documentation, SDKs, tutorials, and community support.
                </p>
                <p className="text-blue-400 text-sm mt-3 inline-flex items-center gap-1">
                  build.minima.global
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </p>
              </div>
            </div>
          </ExternalLink>
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

        {/* Last Updated - enhanced with corrected date */}
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
