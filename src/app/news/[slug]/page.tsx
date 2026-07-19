import Link from 'next/link';
import { notFound } from 'next/navigation';
import { newsArticles, NewsArticle } from '@/data/news';

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Minimaverse`,
    description: article.summary,
    alternates: {
      canonical: `https://minimaverse.com/news/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Minimaverse`,
      description: article.summary,
      url: `https://minimaverse.com/news/${article.slug}`,
      siteName: 'Minimaverse',
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.date,
    },
  };
}

const ExternalLink = ({
  href,
  children,
  className = "",
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

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
      <nav className="mb-6 opacity-0 animate-fade-in-up delay-75">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-purple-400 transition-colors duration-200">Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <span>/</span>
            <Link href="/news" className="hover:text-purple-400 transition-colors duration-200">News</Link>
          </li>
          <li className="flex items-center gap-2">
            <span>/</span>
            <span className="text-gray-400">{article.title}</span>
          </li>
        </ol>
      </nav>

      <article className="prose prose-invert max-w-none opacity-0 animate-fade-in-up delay-150">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-900/40 text-purple-300 text-xs font-medium border border-purple-700/50">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 animate-pulse" />
              </span>
              Verified Update
            </span>
            <time className="text-gray-500 text-sm" dateTime={article.date}>
              {article.displayDate}
            </time>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              {article.title}
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {article.summary}
          </p>
        </header>

        <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 mb-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p className="text-white font-medium">Key operational details:</p>
            <ul className="list-none space-y-3 pl-0">
              {article.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>
                    <strong className="text-gray-200">{detail.label}:</strong> {detail.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 mb-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span className="text-lg">📎</span>
            Primary Source
          </h3>
          <ExternalLink
            href={article.source}
            className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 font-medium break-all"
          >
            {article.sourceLabel}
          </ExternalLink>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-700/40">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to News
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
          >
            Home
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
