import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { getCanonicalMetadata } from '@/lib/seo';

const ExternalLink = ({
  href,
  children,
  className = "",
  ariaLabel,
  hideArrow = false,
  id
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  hideArrow?: boolean;
  id?: string;
}) => (
  <a
    id={id}
    href={href.trim()}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 ${className}`}
    {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
  >
    {children}
    {!hideArrow && (
      <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )}
  </a>
);

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "What is Minima Protocol",
  "description": "Minima is a decentralized blockchain designed to run a full node on any device.",
  "url": "https://minimaverse.com/about",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Minimaverse",
    "url": "https://minimaverse.com"
  },
  "about": {
    "@type": "Thing",
    "name": "Minima",
    "description": "A minimalist, mobile-first Layer 1 blockchain protocol."
  }
};

export const metadata = getCanonicalMetadata('/about');

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      <JsonLd data={structuredData} />

      <header className="mb-8 opacity-0 animate-fade-in-up delay-75 relative pt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
          <div className="hidden sm:flex items-start justify-end relative -translate-x-10 mt-12 flex-shrink-0 order-last">
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

          <div className="relative inline-block w-full pb-3 pr-2">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors inline-block mb-4 group">
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>

            <div className="flex flex-wrap items-center gap-1.5 mb-3 text-sm">
              <Link href="/protocol" className="text-gray-400 hover:text-purple-400 transition-colors">Protocol</Link>
              <span className="text-gray-600">•</span>
              <Link href="/ecosystem" className="text-gray-400 hover:text-purple-400 transition-colors">Ecosystem</Link>
              <span className="text-gray-600">•</span>
              <Link href="/nodes" className="text-gray-400 hover:text-purple-400 transition-colors">Nodes</Link>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                What is Minima Protocol
              </span>
            </h1>
            <p className="text-gray-400">Decentralized blockchain for any device</p>
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>
        </div>
      </header>

      <p id="mobile" className="text-gray-300 leading-relaxed mb-6 opacity-0 animate-fade-in-up delay-100 scroll-mt-20">
        Minima is a decentralized blockchain designed to run a full node on any device —
        from smartphones to IoT hardware — while maintaining complete network participation
        for every user.
      </p>

      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 mb-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />

        <div className="relative">
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-lg flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
            </svg>
            Primary Sources
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm">
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink href="https://docs.minima.global" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-nowrap">
                docs.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">complete developer docs</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink href="https://docs.minima.global/docs/core" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-nowrap">
                docs.minima.global/docs/core
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">core concepts overview</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-nowrap">
                Minima Whitepaper v1.1 (PDF)
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
        <section id="about-project" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Project</span>
          </h2>

          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Minimaverse</strong> is an independent documentation project focused on the
              Minima Protocol ecosystem. This website is not affiliated with, endorsed by, or
              connected to Minima, Minima Global, or any associated entities. All content is compiled from publicly available
              official sources and maintained by the community.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>Purpose:</strong> To provide verified, neutral, and accessible documentation
              about Minima Protocol for developers, node operators, and community members.
            </p>
          </div>
        </section>

        <section id="who-we-are" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Who We Are</span>
          </h2>

          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <p className="text-gray-300 leading-relaxed relative">
              Minimaverse is maintained by <strong className="text-white">community volunteers</strong> who believe
              in Minima's vision of true decentralization. We are developers, node operators, and community
              contributors supporting ecosystem growth through documentation and education.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 relative">
              This project is developed independently for the Minima community.
            </p>
          </div>
        </section>

        <section id="consensus" className="mb-10 opacity-0 animate-fade-in-up delay-200 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Protocol Mechanics</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Minima Protocol enables every participating device to operate as a Complete node,
            regardless of hardware class — from mobile phones to IoT hardware — while maintaining
            full node participation for every network member.
          </p>

          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
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
              <StatusBadge status="confirmed" reducedGlow={true} />
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            Source:{' '}
            <ExternalLink href="https://docs.minima.global/docs/core" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
              docs.minima.global/docs/core
            </ExternalLink>
          </p>
        </section>

        <section id="architecture" className="mb-10 opacity-0 animate-fade-in-up delay-300 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Core Technical Features</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Compact State (~300 MB RAM)', text: 'Complete blockchain history fits in minimal storage through aggressive pruning and Cascading Proof Chain architecture.', status: 'confirmed' as const },
              { title: 'Cascading Proof Chain', text: '256 difficulty levels with logarithmic growth. Stores cumulative PoW in finite chain headers while pruning almost all blocks.', status: 'confirmed' as const },
              { title: 'Burn Mechanism', text: 'Instead of transaction fees, outputs sum to less than inputs. Burned coins reduce total supply, preventing DDoS without miner-centric fee markets.', status: 'confirmed' as const },
              { title: 'MMR UTXO (Storage-less)', text: 'Users track only their own coins with Merkle proofs instead of full UTXO database. Reduces storage by orders of magnitude.', status: 'confirmed' as const },
              { title: 'Maxima P2P Network', text: 'Layer 2 backbone for Lightning, Sidechains, DEX. All Maxima messages perform PoW, contributing to Layer 1 security.', status: 'confirmed' as const },
              { title: 'Pulse Network', text: 'Every 10 minutes, nodes send PING + PoW to peers. Verifies node health, syncs mempool, adds continuous security. No zombies allowed.', status: 'confirmed' as const },
            ].map((feature, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h3 className="text-white font-medium mb-2 relative">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{feature.text}</p>
                <StatusBadge status={feature.status} reducedGlow={true} />
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-xs mt-4">
            Explore technical docs:{' '}
            <ExternalLink href="https://docs.minima.global" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
              docs.minima.global
            </ExternalLink>
          </p>
        </section>

        <section id="comparison" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v18" />
              <path d="M5 21h14" />
              <path d="M5 21l-3-9h6l-3 9" />
              <path d="M19 21l-3-9h6l-3 9" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Minima vs Traditional Blockchains</span>
          </h2>

          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
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
                      <td className="p-4 text-gray-400 whitespace-nowrap">{row.aspect}</td>
                      <td className="p-4 text-gray-400 whitespace-nowrap">{row.traditional}</td>
                      <td className="p-4 text-green-400 font-medium whitespace-nowrap">{row.minima}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="decentralization" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Decentralization Principles</span>
          </h2>

          <div className="space-y-4">
            {[
              { title: 'Node Equality', text: 'All participants run Complete nodes with equal rights; no privileged validator set.' },
              { title: 'No Miner Cartels', text: 'Distributed PoW means no small group can coordinate 51% attack. Cost exceeds potential gains.' },
              { title: 'Censorship Resistance', text: 'No central points of failure. Attacking requires attacking entire user base (millions).' },
              { title: 'Protocol Immutability', text: '"No soft forks allowed. No hard forks required — ever." Protocol is complete from inception.' },
            ].map((principle, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
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

        <section id="status" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Current Status & Considerations</span>
          </h2>

          <div className="space-y-4">
            {[
              { title: 'Protocol Maturity', text: 'The core Minima Protocol is complete and immutable by design. Future development focuses on application layers and tooling built atop the protocol.' },
              { title: 'No Token Incentives', text: 'Minima does not implement token rewards for node operation. This conscious design choice avoids centralization pressures associated with paid mining.' },
              { title: 'User Participation Requirement', text: 'The protocol requires periodic connection (minimum weekly) to update MMR proofs and validate the Cascading Proof Chain. This is the trade-off for extreme decentralization.' },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm relative">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="crowdfunding" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Crowdfunding</span>
          </h2>
          <div className="relative bg-purple-900/20 border border-purple-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="text-gray-300 text-sm relative mb-3">
              The Republic Europe crowdfunding campaign concluded successfully in May 2026, exceeding its funding target.
            </p>
            <Link href="/news" className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/30 hover:decoration-purple-400 underline-offset-4 transition-all duration-300 font-medium inline-flex items-center gap-1 relative">
              View campaign summary →
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </section>

        <section id="dev-resources" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Developer Resources</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Official resources for building on the Minima Protocol:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="relative bg-blue-900/30 border border-blue-700/50 rounded-2xl p-4 sm:p-6 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-white font-medium group-hover:text-blue-300 transition-colors mb-2">Edge Pioneers Program</h3>
                  <p className="text-gray-400 text-sm">Official developer portal including SDKs, tutorials, and community resources.</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                <ExternalLink
                  href="https://build.minima.global"
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  build.minima.global
                </ExternalLink>
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-white font-medium group-hover:text-purple-300 transition-colors mb-2">How to Build on Minima</h3>
                  <p className="text-gray-400 text-sm">Official development guide covering MiniDapp fundamentals, prerequisites, and recommended learning path.</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                <ExternalLink
                  href="https://docs.minima.global/docs/development"
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                >
                  docs.minima.global/docs/development
                </ExternalLink>
              </p>
            </div>
          </div>
        </section>

        <section id="contribute" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">How to Contribute</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                title: 'Report Issues', 
                desc: 'Found a typo or outdated information? Open an issue on GitHub.', 
                icon: <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="6" width="8" height="14" rx="4" /><path d="M12 2v4" /><path d="M12 20v2" /><path d="M4 10h4" /><path d="M16 10h4" /><path d="M4 14h4" /><path d="M16 14h4" /></svg> 
              },
              { 
                title: 'Suggest Content', 
                desc: 'Have a topic that should be covered? We welcome suggestions.', 
                icon: <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg> 
              },
              { 
                title: 'Translate', 
                desc: 'Help translate Minimaverse into your native language.', 
                icon: <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> 
              },
              { 
                title: 'Share Knowledge', 
                desc: 'Write guides, tutorials, or technical deep-dives.', 
                icon: <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> 
              },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center px-2">
            <ExternalLink
              href="https://github.com/KuA1bo/minimaverse-site"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              ariaLabel="Visit GitHub Repository"
            >
              <svg className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Visit GitHub Repository
            </ExternalLink>
          </div>
        </section>

        <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-4 sm:p-6 mb-8 transition-all duration-300 hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-500/10 opacity-0 animate-fade-in-up delay-200 group overflow-hidden">
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
