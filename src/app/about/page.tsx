// src/app/about/page.tsx
// About page - factual overview of Minima Protocol and Minimaverse project
// Final version: verified links, no duplicates, accessibility-ready

import Link from 'next/link';

// Reusable component for external links with icon
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

// Reusable status badge component
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

export default function AboutPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">About Minima Protocol</h1>
            <p className="text-gray-400">Technical overview and project context</p>
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
                      transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 opacity-0 animate-fade-in-up delay-75">
        <h3 className="text-white font-medium mb-3">📚 Primary Sources</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-400">Whitepaper:</span>{' '}
            <ExternalLink 
              href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              Minima Whitepaper v1.1 (PDF)
            </ExternalLink>
          </li>
          <li>
            <span className="text-gray-400">What is Minima:</span>{' '}
            <ExternalLink 
              href="https://docs.minima.global/docs/core"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              docs.minima.global/docs/core
            </ExternalLink>
          </li>
          <li>
            <span className="text-gray-400">Documentation:</span>{' '}
            <ExternalLink 
              href="https://docs.minima.global/"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              docs.minima.global
            </ExternalLink>
          </li>
        </ul>
      </div>

      {/* Content with fade-in animation */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 1: About This Project */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>Minimaverse</strong> is an independent documentation project focused on the 
            Minima Protocol ecosystem. This website is not affiliated with, endorsed by, or 
            connected to Minima Foundation. All content is compiled from publicly available 
            official sources and maintained by the community.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            <strong>Purpose:</strong> To provide verified, neutral, and accessible documentation 
            about Minima Protocol for developers, node operators, and community members.
          </p>
        </section>

        {/* Section 2: What is Minima Protocol */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">What is Minima Protocol</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Minima is a decentralized blockchain protocol designed to run on any device, from 
            mobile phones to IoT hardware, while maintaining full node participation for every 
            network member.
          </p>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <p className="text-gray-300 text-sm mb-3">
              <strong>Key principle:</strong> Every node is a Complete node. There are no miners, 
              no light clients, and no centralized validators — all participants store, verify, 
              and construct the blockchain equally.
            </p>
            <p className="text-gray-300 text-sm mb-3">
              <strong>Security model:</strong> Every transaction performs ~10 seconds of PoW work 
              (Tx-PoW). When difficulty is high enough (~1 per 50 seconds), the transaction also 
              mines a block. All users secure the network — no paid miners.
            </p>
            <p className="text-gray-300 text-sm mb-3">
              <strong>Cryptography:</strong> All cryptographic security uses hash-based algorithms: 
              KECCAK for hashing and Winternitz One-Time Signatures (WOTS) for quantum resistance.
            </p>
            <StatusBadge status="confirmed" />
          </div>
          <p className="text-gray-500 text-xs mt-4">
            Source:{' '}
            <ExternalLink 
              href="https://docs.minima.global/docs/core"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              docs.minima.global/docs/core
            </ExternalLink>
          </p>
        </section>

        {/* Section 3: Core Technical Features */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">Core Technical Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Compact State (~300 MB RAM)</h3>
              <p className="text-gray-300 text-sm mb-2">
                Complete blockchain history fits in minimal storage through aggressive pruning 
                and Cascading Proof Chain architecture.
              </p>
              <StatusBadge status="confirmed" />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Cascading Proof Chain</h3>
              <p className="text-gray-300 text-sm mb-2">
                256 difficulty levels with logarithmic growth. Stores cumulative PoW in finite 
                chain headers while pruning almost all blocks.
              </p>
              <StatusBadge status="confirmed" />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Burn Mechanism</h3>
              <p className="text-gray-300 text-sm mb-2">
                Instead of transaction fees, outputs sum to less than inputs. Burned coins reduce 
                total supply, preventing DDoS without miner-centric fee markets.
              </p>
              <StatusBadge status="confirmed" />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">MMR UTXO (Storage-less)</h3>
              <p className="text-gray-300 text-sm mb-2">
                Users track only their own coins with Merkle proofs instead of full UTXO database. 
                Reduces storage by orders of magnitude.
              </p>
              <StatusBadge status="confirmed" />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Maxima P2P Network</h3>
              <p className="text-gray-300 text-sm mb-2">
                Layer 2 backbone for Lightning, Sidechains, DEX. All Maxima messages perform PoW, 
                contributing to Layer 1 security.
              </p>
              <StatusBadge status="confirmed" />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Pulse Network</h3>
              <p className="text-gray-300 text-sm mb-2">
                Every 10 minutes, nodes send PING + PoW to peers. Verifies node health, syncs 
                mempool, adds continuous security. No zombies allowed.
              </p>
              <StatusBadge status="confirmed" />
            </div>
          </div>
          
          <p className="text-gray-500 text-xs mt-4">
            Explore technical docs:{' '}
            <ExternalLink 
              href="https://docs.minima.global/"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              docs.minima.global
            </ExternalLink>
          </p>
        </section>

        {/* Section 4: Comparison Table */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">Minima vs Traditional Blockchains</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="text-left p-3 text-gray-300 font-semibold">Aspect</th>
                  <th scope="col" className="text-left p-3 text-gray-300 font-semibold">Traditional</th>
                  <th scope="col" className="text-left p-3 text-gray-300 font-semibold">Minima</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400">Node Requirements</td>
                  <td className="p-3 text-gray-400">100+ GB, server-grade</td>
                  <td className="p-3 text-green-400 font-medium">~300 MB RAM, mobile/IoT</td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400">Node Types</td>
                  <td className="p-3 text-gray-400">Full + light (unequal)</td>
                  <td className="p-3 text-green-400 font-medium">All Complete (equal)</td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400">Block Production</td>
                  <td className="p-3 text-gray-400">Miners only</td>
                  <td className="p-3 text-green-400 font-medium">All users (Tx-PoW)</td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400">Fees</td>
                  <td className="p-3 text-gray-400">Fee market (to miners)</td>
                  <td className="p-3 text-green-400 font-medium">Burn mechanism (no miners)</td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400">Scaling</td>
                  <td className="p-3 text-gray-400">Vertical or L2</td>
                  <td className="p-3 text-green-400 font-medium">Horizontal (more nodes)</td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400">Quantum Security</td>
                  <td className="p-3 text-gray-400">ECDSA (vulnerable)</td>
                  <td className="p-3 text-green-400 font-medium">KECCAK + WOTS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Decentralization Principles */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">Decentralization Principles</h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Node Equality</span>
                <p className="text-gray-300 text-sm">All participants run Complete nodes with equal rights; no privileged validator set.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">No Miner Cartels</span>
                <p className="text-gray-300 text-sm">Distributed PoW means no small group can coordinate 51% attack. Cost exceeds potential gains.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Censorship Resistance</span>
                <p className="text-gray-300 text-sm">No central points of failure. Attacking requires attacking entire user base (millions).</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Protocol Immutability</span>
                <p className="text-gray-300 text-sm">"No soft forks allowed. No hard forks required — ever." Protocol is complete from inception.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Section 6: Current Status & Considerations */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">Current Status & Considerations</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Protocol Maturity</h3>
              <p className="text-gray-300 text-sm">
                The core Minima Protocol is complete and immutable by design. Future development 
                focuses on application layers and tooling built atop the protocol.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">No Token Incentives</h3>
              <p className="text-gray-300 text-sm">
                Minima does not implement token rewards for node operation. This conscious design 
                choice avoids centralization pressures associated with paid mining.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">User Participation Requirement</h3>
              <p className="text-gray-300 text-sm">
                Users must connect periodically (minimum weekly) to update MMR proofs and validate 
                the Cascading Proof Chain. This is the trade-off for extreme decentralization.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Developer Resources */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">Developer Resources</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For developers interested in building on Minima Protocol:
          </p>
          
          <ExternalLink 
            href="https://build.minima.global/" 
            className="block bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 
                      hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 
                      transition-all duration-200 group"
            ariaLabel="Visit Edge Pioneers developer portal"
          >
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl mt-1">🛠️</span>
              <div>
                <h3 className="text-white font-medium group-hover:text-blue-300 transition-colors">
                  Edge Pioneers Program
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Official developer portal: documentation, SDKs, tutorials, and community support.
                </p>
                <p className="text-blue-400 text-sm mt-2 inline-flex items-center gap-1">
                  build.minima.global
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </p>
              </div>
            </div>
          </ExternalLink>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8 
                        transition-all duration-200 hover:border-amber-600/70 opacity-0 animate-fade-in-up delay-200">
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
            Last updated: February 17, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
