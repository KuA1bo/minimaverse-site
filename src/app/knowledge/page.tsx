import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { knowledgeArticles } from '@/data/knowledge';
import { getCanonicalMetadata } from '@/lib/seo';

export const metadata = getCanonicalMetadata('/knowledge');

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

const knowledgeSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Knowledge Base — Minimaverse",
  "description": "Evidence-based overviews and technical explanations of Minima Protocol concepts.",
  "url": "https://minimaverse.com/knowledge",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Minimaverse",
    "url": "https://minimaverse.com"
  }
};

export default function KnowledgePage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      <JsonLd data={knowledgeSchema} />

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
              <Link href="/protocol" className="text-gray-400 hover:text-purple-400 transition-colors">Protocol</Link>
              <span className="text-gray-600">•</span>
              <Link href="/timeline" className="text-gray-400 hover:text-purple-400 transition-colors">Timeline</Link>
              <span className="text-gray-600">•</span>
              <Link href="/news" className="text-gray-400 hover:text-purple-400 transition-colors">News</Link>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Minima Knowledge Base
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Evidence-based overviews and technical explanations</p>

            <p className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
              Deep dives into Minima Protocol concepts, engineering decisions, and publicly verified milestones.
            </p>

            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
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
              <Link
                href="/news"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                minimaverse.com/news
              </Link>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Verified milestone archive</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <Link
                href="/protocol"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
              >
                minimaverse.com/protocol
              </Link>
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
      </div>

      <article className="prose prose-invert max-w-none">
        <section id="latest-articles" className="mb-10 opacity-0 animate-fade-in-up delay-75 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8V6Z" />
            </svg>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Latest Articles</span>
          </h2>

          <div className="space-y-4">
            {knowledgeArticles.map((article, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-6 transition-all duration-300 group overflow-hidden hover:-translate-y-1 bg-gray-800/40 border border-gray-700/40 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15"
              >
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs text-gray-500">{article.displayDate}</p>
                  </div>

                  <h3 className="font-medium mb-2 text-white">
                    {article.title}
                  </h3>

                  <p className="text-sm mb-3 whitespace-pre-line text-gray-300">
                    {article.summary}
                  </p>

                  <div className="space-y-2">
                    <Link
                      href={`/knowledge/${article.slug}`}
                      className="underline-offset-4 transition-all duration-300 text-sm block inline-flex items-center gap-1 text-blue-400 hover:text-purple-400 decoration-blue-500/30 hover:decoration-purple-500/60"
                    >
                      → Read More
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 mt-3">
                    <p className="text-gray-500 text-xs">
                      Status: <StatusBadge status={article.status} reducedGlow={true} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
            Last updated: July 26, 2026
          </p>
        </section>
      </article>
    </div>
  );
}
