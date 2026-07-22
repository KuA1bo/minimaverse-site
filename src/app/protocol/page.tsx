import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { getCanonicalMetadata } from '@/lib/seo';

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
    {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
  >
    {children}
    {!hideArrow && (
      <>
        &nbsp;
        <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </>
    )}
  </a>
);

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Minima Protocol Architecture",
  "description": "Technical overview of Minima: edge consensus, Tx-PoW, lightweight full-node infrastructure, and protocol layers.",
  "url": "https://minimaverse.com/protocol",
  "inLanguage": "en",
  "about": {
    "@type": "Thing",
    "name": "Minima Protocol",
    "description": "A decentralized blockchain designed to run a full node on any device."
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "Minimaverse",
    "url": "https://minimaverse.com"
  }
};

export const metadata = getCanonicalMetadata('/protocol');

export default function ProtocolPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      <JsonLd data={structuredData} />

      <header className="mb-6 sm:mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex justify-between items-start gap-4">
          <div className="relative inline-block w-full pb-2 sm:pb-3">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors inline-block mb-3 sm:mb-4 group text-sm sm:text-base"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>

            <div className="flex flex-wrap items-center gap-1.5 mb-3 text-sm">
              <Link href="/nodes" className="text-gray-400 hover:text-purple-400 transition-colors">Nodes</Link>
              <span className="text-gray-600">•</span>
              <Link href="/developers" className="text-gray-400 hover:text-purple-400 transition-colors">Developers</Link>
              <span className="text-gray-600">•</span>
              <Link href="/ecosystem" className="text-gray-400 hover:text-purple-400 transition-colors">Ecosystem</Link>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Minima Protocol Architecture
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Edge consensus, Tx-PoW, and lightweight full-node infrastructure</p>
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>

          <div className="hidden sm:flex items-center justify-end relative -translate-x-10 mt-12 flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500/80 rounded-full blur-lg" />
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

      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-8
                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15
                      opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />

        <div className="relative">
          <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
            </svg>
            Primary Sources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink
                href="https://docs.minima.global/docs/learn/network-overview"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Network Overview
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">architecture and layers</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink
                href="https://docs.minima.global/docs/core/minimawhitepaper/txpow"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Tx-PoW Documentation
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">consensus mechanics</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink
                href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Whitepaper v1.1 (PDF)
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">full protocol specification</span>
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-700/40 text-xs text-gray-500">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
              <span className="block sm:inline">Status indicators:</span>
              <span className="text-green-300">• confirmed</span>
              <span className="text-yellow-300">• in-development</span>
              <span className="text-gray-300">• community-maintained</span>
            </div>
          </div>
        </div>
      </div>

      <article className="prose prose-invert max-w-none">
        <section id="about" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              About This Page
            </span>
          </h2>

          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <p className="text-gray-300 leading-relaxed relative">
              This page provides a technical overview of the Minima Protocol architecture,
              including edge consensus, Tx-PoW mechanics, data structures, and protocol layers.
              All information is compiled from publicly available documentation and whitepapers,
              presented in a neutral, developer-focused format for educational purposes.
            </p>
          </div>
        </section>

        <section id="edge-consensus" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Edge Consensus Architecture</span>
          </h2>

          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <p className="text-gray-300 leading-relaxed">
              Minima implements <strong>edge consensus</strong>, where block production and validation
              are carried out collaboratively. Unlike traditional blockchains that rely on specialized
              miners or validators, Minima supports universal participation across diverse hardware
              without specialized requirements.
            </p>

            <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700/40 rounded-xl">
              <p className="text-blue-200 text-sm">
                <strong className="text-white">Architectural characteristic:</strong> Through collaborative Tx-PoW, the complete blockchain
                state remains compact (~300 MB RAM), allowing any device to store and verify the entire
                chain history independently.
              </p>
            </div>
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

        <section id="tx-pow" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
              <path d="M17.64 15L22 10.64" />
              <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V7.86c0-.55-.45-1-1-1H16.14c-.85 0-1.65-.33-2.25-.93L12.64 4.64" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Tx-PoW: Collaborative Proof of Work</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                title: 'How Tx-PoW Works',
                text: 'Each transaction in Minima performs a small amount of Proof of Work (~10 seconds average work per device). When a Tx-PoW value meets the network difficulty threshold (~1 block every 50 seconds), that transaction also mines a block. Blocks store only transaction hashes (~10 KB per block), reducing on-chain storage requirements.',
              },
              {
                title: 'Security Through Collaboration',
                text: 'Minima nodes collaborate rather than compete. The total network security emerges from the combined Tx-PoW contributions of participating nodes, reducing competitive mining overhead associated with traditional proof-of-work systems.',
              },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
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

        <section id="data-structures" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Efficient Data Structures</span>
          </h2>

          <div className="space-y-4">
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">Cascading Chain with Superblocks</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Minima&apos;s Cascading Chain structure efficiently manages blockchain growth through Superblocks. This approach keeps the chain compact and scalable without sacrificing security, enabling fast synchronization even on resource-constrained devices.
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <ExternalLink
                href="https://docs.minima.global/docs/learn/the-blockchain#the-cascading-chain"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                Source: The Cascading Chain
              </ExternalLink>
            </p>

            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <h3 className="text-white font-medium mb-2 relative">Merkle Mountain Range (MMR) UTXO</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Minima utilizes a Merkle Mountain Range database to store only the UTXOs relevant to each node&apos;s private keys. This &quot;storage-less&quot; approach allows nodes to operate with minimal memory requirements while reducing hardware demands.
              </p>
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

        <section id="layers" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20h20" />
              <path d="M5 20v-8l7-5 7 5v8" />
              <path d="M12 12v8" />
            </svg>
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

        <section id="specs" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
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

        <section id="participation" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
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
              <strong className="text-white">Note:</strong> The protocol design ensures all users can participate equally in network validation without reliance on specialized validator classes.
            </p>
          </div>
        </section>

        <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-6 mb-8
                        transition-all duration-300 hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-500/10
                        opacity-0 animate-fade-in-up delay-200 group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-500 to-orange-500" />
          <p className="text-amber-200 text-sm leading-relaxed">
            <strong className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Disclaimer:
            </strong>
            This site does not represent the official Minima team.
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" aria-label="Read full disclaimer" className="underline hover:text-amber-100 decoration-amber-500/50 hover:decoration-amber-400 underline-offset-4 transition-all duration-300">
              Learn more
            </Link>
          </p>
        </div>

        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: July 21, 2026
          </p>
        </section>
      </article>
    </div>
  );
}
