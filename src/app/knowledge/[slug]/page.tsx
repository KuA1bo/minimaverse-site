import Link from 'next/link';
import { notFound } from 'next/navigation';
import { knowledgeArticles } from '@/data/knowledge';
import JsonLd from '@/components/JsonLd';

const ExternalLink = ({
  href,
  children,
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href.trim()}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 ${className}`}
  >
    {children}
    <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
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
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${style.bg} ${style.text} text-xs font-medium border ${style.border} shadow-lg ${style.glow} transition-all duration-300`}>
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

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = knowledgeArticles.find(a => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `Minimaverse — ${article.title}`,
    description: article.summary,
    alternates: {
      canonical: `https://minimaverse.com/knowledge/${article.slug}`,
    },
  };
}

export default function KnowledgeArticlePage({ params }: { params: { slug: string } }) {
  const article = knowledgeArticles.find(a => a.slug === params.slug);
  if (!article) notFound();

  if (params.slug === 'what-is-blockchain-on-chip') {
    return (
      <div className="max-w-4xl mx-auto relative px-4 sm:px-0 py-8">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.summary,
          "url": `https://minimaverse.com/knowledge/${article.slug}`,
          "datePublished": "2026-07-26"
        }} />

        <header className="mb-8 opacity-0 animate-fade-in-up delay-75">
          <Link href="/knowledge" className="text-gray-400 hover:text-white transition-colors inline-block mb-4 group text-sm sm:text-base">
            <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Knowledge Base
          </Link>

          <div className="flex flex-wrap items-center gap-1.5 mb-4 text-sm">
            <Link href="/protocol" className="text-gray-400 hover:text-purple-400 transition-colors">Protocol</Link>
            <span className="text-gray-600">•</span>
            <Link href="/timeline" className="text-gray-400 hover:text-purple-400 transition-colors">Timeline</Link>
            <span className="text-gray-600">•</span>
            <Link href="/news" className="text-gray-400 hover:text-purple-400 transition-colors">News</Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              {article.title}
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            Embedding a blockchain node directly into hardware, rather than running it as software on a general-purpose device.
          </p>
        </header>

        <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-8 opacity-0 animate-fade-in-up delay-150">
          <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
            </svg>
            Primary Sources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink href="https://minima.global/blog" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">minima.global/blog</ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Official Blog</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <Link href="/news" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">minimaverse.com/news</Link>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Verified milestone archive (detailed sourcing per event)</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <Link href="/protocol" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">minimaverse.com/protocol</Link>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Tx-PoW, Cascading Chain, MMR architecture</span>
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

        <article className="prose prose-invert max-w-none opacity-0 animate-fade-in-up delay-200">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Page</span>
            </h2>
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6">
              <p className="text-gray-300 leading-relaxed">
                This page explains the Blockchain-on-Chip concept and traces how it emerged from Minima&apos;s protocol design. It does not restate the underlying consensus mechanics — see <Link href="/protocol" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4">Protocol Architecture</Link> for that — or re-report each announcement in full — see <Link href="/news" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4">News</Link> for dated, individually sourced entries. This page connects the two: what the concept means, and which of the milestones in the archive belong to it.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Definition</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Blockchain-on-Chip is Minima&apos;s term for running a blockchain node&apos;s validation and consensus directly on embedded hardware, instead of as software on a general-purpose device. According to Minima, the term has been used internally for some time because it more accurately describes the engineering approach: capability sits inside the device, not above or alongside it.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400 mb-6">
              <span className="text-gray-500">Status:</span>
              <StatusBadge status="confirmed" reducedGlow={true} />
              <span className="text-gray-600">|</span>
              <span>Source:</span>
              <ExternalLink href="https://minima.global/ru/post/blockchain-doesnt-belong-in-the-cloud" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
                Blockchain Doesn&apos;t Belong in the Cloud
              </ExternalLink>
            </div>
            <p className="text-gray-300 leading-relaxed">
              It is not a single product release. It is the current stage of a longer engineering line that started with fitting a full node onto a phone and has since been demonstrated on an Arm-based FPGA platform during a live drone flight — see <a href="#milestones" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4">Milestones</a> below. FPGA hardware validates the design; it is not the same as the manufactured, tape-out chip that Minima&apos;s own roadmap places in a later phase (see <a href="#current-status" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4">Current Status</a>).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2v4" />
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
              </svg>
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Why It Emerged</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most blockchain networks assume high compute availability, constant connectivity, specialised validator classes, and cloud-coordinated operation. Embedded and industrial systems need the opposite: deterministic performance, a small memory footprint, energy efficiency, and integration at the hardware level.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400 mb-6">
              <span className="text-gray-500">Status:</span>
              <StatusBadge status="confirmed" reducedGlow={true} />
              <span className="text-gray-600">|</span>
              <span>Source:</span>
              <ExternalLink href="https://minima.global/ru/post/siemens" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">
                Siemens Highlights the Emergence of Blockchain-on-Chip
              </ExternalLink>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Minima&apos;s own architecture — collaborative Tx-PoW, the Cascading Chain, and MMR-based storage — was built around that constraint from the start rather than adapted to it afterward. Full technical detail: <Link href="/protocol" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4">Protocol Architecture</Link>.
            </p>
          </section>

          <section id="milestones" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Each entry below is documented in full, with its own primary source, on the <Link href="/news" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4">News</Link> page. This section lists only what belongs to the Blockchain-on-Chip line and why it matters.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2021–2024 — A node built to fit on a phone.</h3>
                <p className="text-gray-300 leading-relaxed mb-3">Minima positioned itself around running a full, decentralized node on a mobile or IoT device rather than a stripped-down client, later applied to DePIN use cases across automotive, logistics, and industrial verticals.</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400">
                  <span className="text-gray-500">Status:</span>
                  <StatusBadge status="confirmed" reducedGlow={true} />
                  <span className="text-gray-600">|</span>
                  <span>Source:</span>
                  <ExternalLink href="https://minima.global/ru/post/is-that-a-blockchain-in-your-pocket" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Is That a Blockchain in Your Pocket?</ExternalLink>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Aug 2024 — The Embedded Blockchain.</h3>
                <p className="text-gray-300 leading-relaxed mb-3">Minima first raised the idea of a full node running on a microchip as a System on Chip, describing it at the time as &quot;chain on chip,&quot; with an internal target of a 99% reduction in energy consumption.</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400">
                  <span className="text-gray-500">Status:</span>
                  <StatusBadge status="confirmed" reducedGlow={true} />
                  <span className="text-gray-600">|</span>
                  <span>Source:</span>
                  <ExternalLink href="https://minima.global/post/minima-the-embedded-blockchain" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Minima: The Embedded Blockchain</ExternalLink>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Oct 2024 – Mar 2025 — A dedicated chip, and Arm.</h3>
                <p className="text-gray-300 leading-relaxed mb-3">Design work began on the Minima Chip, a dedicated SoC intended to isolate blockchain validation from a device&apos;s safety-critical functions. In March 2025 Minima confirmed a collaboration with Arm stated to &quot;enable a Minima node to operate on-chip.&quot;</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400">
                  <span className="text-gray-500">Status:</span>
                  <StatusBadge status="confirmed" reducedGlow={true} />
                  <span className="text-gray-600">|</span>
                  <span>Sources:</span>
                  <ExternalLink href="https://minima.global/post/the-minima-chip" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">The Minima Chip</ExternalLink>
                  <span className="text-gray-600">,</span>
                  <ExternalLink href="https://minima.global/post/agentic-future" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">A Glimpse into the Agentic Future</ExternalLink>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Dec 2025 — First embedded hardware validation (Arm/FPGA).</h3>
                <p className="text-gray-300 leading-relaxed mb-3">A full Layer-1 node ran on the Arm processor subsystem inside an FPGA board, following a client refactor from Java to C++ and the addition of hardware SHA-3 accelerators, integrated into a working autonomous drone.</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400">
                  <span className="text-gray-500">Status:</span>
                  <StatusBadge status="confirmed" reducedGlow={true} />
                  <span className="text-gray-600">|</span>
                  <span>Source:</span>
                  <ExternalLink href="https://minima.global/post/minima-achieves-major-breakthrough-blockchain-on-chip-is-here" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Minima Achieves Major Breakthrough: Blockchain-on-Chip Is Here</ExternalLink>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Mar 2026 — TRL 6, independently validated.</h3>
                <p className="text-gray-300 leading-relaxed mb-3">The University of Southampton, with Arm and Siemens, flew a drone recording flight data to the node in real time, moving the project to Technology Readiness Level 6. Reported results include roughly 500× memory efficiency improvement and a ~10,000% increase in verification performance over software-only execution.</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400">
                  <span className="text-gray-500">Status:</span>
                  <StatusBadge status="confirmed" reducedGlow={true} />
                  <span className="text-gray-600">|</span>
                  <span>Sources:</span>
                  <Link href="/news/blockchain-blackbox-verification-2026" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">University of Southampton</Link>
                  <span className="text-gray-600">,</span>
                  <Link href="/news/siemens-blockchain-on-chip-2026" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Siemens</Link>
                  <span className="text-gray-600">,</span>
                  <Link href="/news/arm-education-alliance-2026" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Arm Semiconductor Education Alliance</Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Jun–Jul 2026 — Minima Core.</h3>
                <p className="text-gray-300 leading-relaxed mb-3">A new, lighter client — Minima Core — completed beta and moved to closed testing in June 2026, and was publicly demonstrated at the 24 July 2026 Developer Call running stably under low battery and unstable connectivity, alongside Android-intent integration with other apps. Minima now refers to its existing client as Minima Classic by comparison. The official roadmap lists &quot;Minima Core Launched&quot; under Q3 2026.</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400">
                  <span className="text-gray-500">Status:</span>
                  <StatusBadge status="in-development" reducedGlow={true} />
                  <span className="text-gray-600">|</span>
                  <span>Sources:</span>
                  <Link href="/news/developer-call-minima-core-demo" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Public Developer Call: Minima Core Demonstration</Link>
                  <span className="text-gray-600">,</span>
                  <ExternalLink href="https://minima.global/resources/timeline" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Official Roadmap Timeline</ExternalLink>
                </div>
                <p className="text-gray-400 text-sm mt-3 italic">
                  Naming note: an unrelated, much earlier item on the official timeline — &quot;Minima Core 0.1 – Alpha version completed,&quot; Q1 2019 — refers to early internal codebase naming and is not connected to the 2026 Minima Core client.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Official Programme Naming</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Minima&apos;s own roadmap groups the milestones above under a named, phased programme, Minima on Chip, rather than treating &quot;Blockchain-on-Chip&quot; only as an informal blog term:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-2">
              <li>Phase 2 — drone demonstration at Technology Readiness Level 6, listed under Q1 2026.</li>
              <li>Phase 3 — &quot;Minima on Physical Chip,&quot; listed under Q4 2026 and not yet completed as of this page&apos;s last update.</li>
            </ul>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400">
              <span className="text-gray-500">Status:</span>
              <StatusBadge status="confirmed" reducedGlow={true} />
              <span className="text-gray-600">|</span>
              <span>Source:</span>
              <ExternalLink href="https://minima.global/resources/timeline" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Official Roadmap Timeline</ExternalLink>
            </div>
          </section>

          <section id="current-status" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Current Status</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Blockchain-on-Chip / Minima on Chip stands at TRL 6 (Phase 2 complete): validated on embedded, Arm-based hardware in live operation, not yet at manufactured, tape-out-ready silicon. The official roadmap places physical-chip delivery (Phase 3) in Q4 2026. No source reviewed here discloses a finished chip design, a tape-out date, a manufacturing partner, or a commercial availability timeline beyond that quarter marker.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-400 mb-6">
              <span className="text-gray-500">Status:</span>
              <StatusBadge status="in-development" reducedGlow={true} />
              <span className="text-gray-600">|</span>
              <span>Sources:</span>
              <ExternalLink href="https://minima.global/resources/timeline" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Official Roadmap Timeline</ExternalLink>
              <span className="text-gray-600">,</span>
              <ExternalLink href="https://minima.global/ru/post/siemens" className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300">Siemens Highlights the Emergence of Blockchain-on-Chip</ExternalLink>
            </div>
          </section>

          <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-6 mt-12">
            <p className="text-amber-200 text-sm leading-relaxed">
              <strong className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Note:
              </strong>
              This page is maintained independently and is not an official Minima Global publication. All information is compiled from publicly available sources.
            </p>
          </div>
        </article>
      </div>
    );
  }

  notFound();
}
