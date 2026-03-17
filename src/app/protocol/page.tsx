// src/app/protocol/page.tsx
// Protocol page - technical overview of Minima Protocol architecture
// Content verified against: docs.minima.global + Whitepaper v1.1

import Link from 'next/link';

// ExternalLink component for all external links with ↗ icon
const ExternalLink = ({ href, children, className = '', ariaLabel }: { 
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
    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);

// StatusBadge component for feature status indicators
const StatusBadge = ({ status }: { status: 'confirmed' | 'in-development' | 'community' }) => {
  const styles = {
    'confirmed': 'bg-green-900/40 text-green-300 border-green-700/50',
    'in-development': 'bg-yellow-900/40 text-yellow-300 border-yellow-700/50',
    'community': 'bg-gray-700/40 text-gray-300 border-gray-600/50'
  };
  const dotStyles = {
    'confirmed': 'bg-green-500',
    'in-development': 'bg-yellow-500 animate-ping',
    'community': 'bg-gray-400'
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs border ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`} />
      {status}
    </span>
  );
};

export default function ProtocolPage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Unified Header */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div className="w-full">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4"
            >
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2 relative">
              Minima Protocol
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
            </h1>
            <p className="text-gray-400">Architecture, consensus, and technical specifications</p>
          </div>
          <ExternalLink 
            href="https://github.com/KuA1bo/minimaverse-site" 
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-4"
            ariaLabel="View source on GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </ExternalLink>
        </div>
      </header>

      {/* Primary Sources Box — consolidated reference point */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8 opacity-0 animate-fade-in-up delay-75">
        <h3 className="text-white font-medium mb-3">📚 Primary Sources</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>• <ExternalLink href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf" className="text-blue-400 hover:text-blue-300">Whitepaper v1.1 (PDF)</ExternalLink> — full protocol specification</li>
          <li>• <ExternalLink href="https://docs.minima.global/docs/core/minimawhitepaper/txpow" className="text-blue-400 hover:text-blue-300">Tx-PoW Documentation</ExternalLink> — consensus mechanics</li>
          <li>• <ExternalLink href="https://docs.minima.global/docs/learn/network-overview" className="text-blue-400 hover:text-blue-300">Network Overview</ExternalLink> — architecture and layers</li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 1: Introduction — Edge Consensus */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">Edge Consensus Architecture</h2>
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
          <p className="text-sm text-gray-500 mt-4">
            <ExternalLink href="https://docs.minima.global/docs/core/minimawhitepaper/consensusforksandimmutableprotocols" className="text-blue-400 hover:text-blue-300">
              Source: Consensus, Forks and Immutable Protocols
            </ExternalLink>
          </p>
        </section>

        {/* Section 2: Tx-PoW — Collaborative Proof of Work */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">Tx-PoW: Collaborative Proof of Work</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
              <h3 className="text-white font-medium mb-2">How Tx-PoW Works</h3>
              <p className="text-gray-300 text-sm mb-3">
                Each transaction in Minima performs a small amount of Proof of Work (~10 seconds 
                average work per device). When a Tx-PoW value meets the network difficulty threshold 
                (~1 block every 50 seconds), that transaction also mines a block. Blocks store only 
                transaction hashes (~10 KB per block), keeping the chain lightweight.
              </p>
              <StatusBadge status="confirmed" />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
              <h3 className="text-white font-medium mb-2">Security Through Collaboration</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima nodes collaborate rather than compete. The total network security equals 
                the sum of all individual Tx-PoW contributions. More transactions = more secure 
                network. This cooperative approach significantly reduces energy consumption 
                compared to competitive mining systems.
              </p>
              <StatusBadge status="confirmed" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            <ExternalLink href="https://docs.minima.global/docs/core/minimawhitepaper/txpow" className="text-blue-400 hover:text-blue-300">
              Source: Tx-PoW Documentation
            </ExternalLink>
          </p>
        </section>

        {/* Section 3: Cascading Chain + MMR UTXO */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">Efficient Data Structures</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
              <h3 className="text-white font-medium mb-2">Cascading Chain with Superblocks</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima's Cascading Chain structure efficiently manages blockchain growth through 
                Superblocks. This approach keeps the chain compact and scalable without sacrificing 
                security, enabling fast synchronization even on resource-constrained devices.
              </p>
              <StatusBadge status="confirmed" />
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
              <h3 className="text-white font-medium mb-2">Merkle Mountain Range (MMR) UTXO</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima utilizes a Merkle Mountain Range database to store only the UTXOs relevant 
                to each node's private keys. This "storage-less" approach allows each node to 
                operate with just ~300 MB RAM, making Minima highly resource-efficient.
              </p>
              <StatusBadge status="confirmed" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            <ExternalLink href="https://docs.minima.global/docs/learn/mmr-database" className="text-blue-400 hover:text-blue-300">
              Source: MMR Database Documentation
            </ExternalLink>
          </p>
        </section>

        {/* Section 4: Protocol Layers */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">Protocol Layers</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800">
                <tr>
                  <th scope="col" className="text-left p-3 text-gray-300 font-semibold">Layer</th>
                  <th scope="col" className="text-left p-3 text-gray-300 font-semibold">Function</th>
                  <th scope="col" className="text-left p-3 text-gray-300 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400 font-medium">Minima (L1)</td>
                  <td className="p-3 text-gray-400">Value transfer; flood-fill P2P backbone; all nodes validate all transactions</td>
                  <td className="p-3"><StatusBadge status="confirmed" /></td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400 font-medium">Maxima</td>
                  <td className="p-3 text-gray-400">Communication layer; point-to-point off-chain messaging between connected peers</td>
                  <td className="p-3"><StatusBadge status="confirmed" /></td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400 font-medium">Omnia</td>
                  <td className="p-3 text-gray-400">Layer 2 scaling; bi-directional payment channels (Lightning Network-style)</td>
                  <td className="p-3"><StatusBadge status="in-development" /></td>
                </tr>
                <tr className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 text-gray-400 font-medium">MiniDapps (L3)</td>
                  <td className="p-3 text-gray-400">Decentralized applications using value transfer (Minima) + messaging (Maxima) + scaling (Omnia)</td>
                  <td className="p-3"><StatusBadge status="confirmed" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            <ExternalLink href="https://docs.minima.global/docs/learn/glossary#maxima" className="text-blue-400 hover:text-blue-300">
              Source: Maxima — Glossary
            </ExternalLink>
          </p>
        </section>

        {/* Section 5: Key Technical Specifications */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">Technical Specifications</h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Tx-PoW Difficulty</span>
                <p className="text-gray-300 text-sm">~10 seconds average work per transaction; ~1 block every 50 seconds network-wide</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Block Size</span>
                <p className="text-gray-300 text-sm">~10 KB (stores transaction hashes only); adaptive based on network activity</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">RAM Requirement</span>
                <p className="text-gray-300 text-sm">~300 MB per node using MMR UTXO storage optimization</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Consensus</span>
                <p className="text-gray-300 text-sm">GHOST protocol for fast block times with secure finality</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Quantum Resistance</span>
                <p className="text-gray-300 text-sm">KECCAK hashing + WOTS signatures for post-quantum security</p>
              </div>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            <ExternalLink href="https://docs.minima.global/docs/core/minimawhitepaper/introduction" className="text-blue-400 hover:text-blue-300">
              Source: Whitepaper Introduction (Docs)
            </ExternalLink>
          </p>
        </section>

        {/* Section 6: Network Participation */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">Network Participation Requirements</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
            <p className="text-gray-300 text-sm mb-3">
              To maintain network health and personal security, Minima users should connect their 
              node at least once per week. This ensures:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
              <li>Updates to MMR proofs for owned UTXOs</li>
              <li>Contribution to collective Tx-PoW security</li>
              <li>Synchronization with the latest chain state</li>
            </ul>
            <p className="text-gray-300 text-sm mt-3">
              <strong>Note:</strong> There are no miners, no token incentives for validation, 
              and no ever-growing database. Every user runs a complete node. Forever.
            </p>
          </div>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8 opacity-0 animate-fade-in-up delay-200">
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
