// src/app/links/page.tsx
// Useful Links page - verified channels and resources for Minima Protocol

import Link from 'next/link';

export default function LinksPage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4"
            >
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Useful Links</h1>
            <p className="text-gray-400">Verified channels, resources, and community links</p>
          </div>
          <a 
            href="https://github.com/KuA1bo/minimaverse-site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="View source on GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Primary Sources Box */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8">
        <h3 className="text-white font-medium mb-3">📚 Primary Sources for This Page</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-400">Official Website:</span>{' '}
            <a 
              href="https://minima.global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              minima.global
            </a>
          </li>
          <li>
            <span className="text-gray-400">Documentation:</span>{' '}
            <a 
              href="https://docs.minima.global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              docs.minima.global
            </a>
          </li>
          <li>
            <span className="text-gray-400">GitHub:</span>{' '}
            <a 
              href="https://github.com/minima-global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              github.com/minima-global
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none animate-fade-in">
        
        {/* Section 1: Project Feedback */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Project Feedback</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This documentation project is maintained independently. For questions, 
            bug reports, or suggestions about this website, please use GitHub:
          </p>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <a 
              href="https://github.com/KuA1bo/minimaverse-site/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Open an Issue on GitHub
            </a>
          </div>
        </section>

        {/* Section 2: Official Communication Channels */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Official Communication Channels</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For questions, support, and community discussion about Minima Protocol:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">💬</span>
              <div>
                <span className="text-white font-medium">Discord Community</span>
                <p className="text-gray-500 text-sm">Primary channel for real-time discussion</p>
                <a 
                  href="https://discord.gg/minimaglobal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  discord.gg/minimaglobal
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✈️</span>
              <div>
                <span className="text-white font-medium">Telegram (English)</span>
                <p className="text-gray-500 text-sm">Official English-language community chat</p>
                <a 
                  href="https://t.me/Minima_Global" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  t.me/Minima_Global
                </a>
              </div>
            </li>
          </ul>
        </section>

        {/* NEW Section 3: Official Email Contacts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Official Email Contacts</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For formal inquiries, partnerships, or technical support, contact Minima directly:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Enterprise / Partnerships */}
            <a 
              href="mailto:enterprise@minima.global" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors block group"
            >
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">🤝</span>
                <div>
                  <span className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                    Partnerships
                  </span>
                  <p className="text-gray-500 text-xs mt-1">Enterprise collaborations & business inquiries</p>
                  <p className="text-blue-400 text-xs mt-2 underline">enterprise@minima.global</p>
                </div>
              </div>
            </a>

            {/* General Questions */}
            <a 
              href="mailto:info@minima.global" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors block group"
            >
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">ℹ️</span>
                <div>
                  <span className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                    General Info
                  </span>
                  <p className="text-gray-500 text-xs mt-1">General questions & public inquiries</p>
                  <p className="text-blue-400 text-xs mt-2 underline">info@minima.global</p>
                </div>
              </div>
            </a>

            {/* Technical Support */}
            <a 
              href="mailto:querysupport@minima.global" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors block group"
            >
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">🔧</span>
                <div>
                  <span className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                    Technical Support
                  </span>
                  <p className="text-gray-500 text-xs mt-1">Protocol issues & developer assistance</p>
                  <p className="text-blue-400 text-xs mt-2 underline">querysupport@minima.global</p>
                </div>
              </div>
            </a>
          </div>
          
          <p className="text-gray-500 text-xs mt-4 italic">
            Note: Email responses may take 3-5 business days. For urgent matters, use Discord or Telegram channels above.
          </p>
        </section>

        {/* Section 4: Official Resources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Official Resources</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Verified links to official Minima Foundation platforms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a 
              href="https://minima.global/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors block"
            >
              <span className="text-white font-medium">🌐 Website</span>
              <p className="text-gray-500 text-sm break-all">minima.global</p>
            </a>
            <a 
              href="https://github.com/minima-global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors block"
            >
              <span className="text-white font-medium">💻 GitHub</span>
              <p className="text-gray-500 text-sm break-all">github.com/minima-global</p>
            </a>
            <a 
              href="https://twitter.com/Minima_Global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors block"
            >
              <span className="text-white font-medium">🐦 Twitter / X</span>
              <p className="text-gray-500 text-sm break-all">twitter.com/Minima_Global</p>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors block"
            >
              <span className="text-white font-medium">📺 YouTube</span>
              <p className="text-gray-500 text-sm break-all">youtube.com/channel/UCDe2j57uQrUVtVizFbDpsoQ</p>
            </a>
            <a 
              href="https://newsletter.minima.global/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors block"
            >
              <span className="text-white font-medium">📰 SubStack Newsletter</span>
              <p className="text-gray-500 text-sm break-all">newsletter.minima.global</p>
            </a>
            <a 
              href="https://merch.minima.global/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors block"
            >
              <span className="text-white font-medium">👚 Official Merch</span>
              <p className="text-gray-500 text-sm break-all">merch.minima.global</p>
            </a>
            <a 
              href="https://www.minima.global/media-kit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors block md:col-span-2"
            >
              <span className="text-white font-medium">🎨 Media Kit</span>
              <p className="text-gray-500 text-sm break-all">minima.global/media-kit</p>
            </a>
          </div>
        </section>

        {/* Section 5: Regional Community Channels */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Regional Community Channels</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Telegram communities for non-English speakers. 
            These channels are community-maintained and not officially moderated by Minima Foundation:
          </p>
          <ul className="list-none space-y-2">
            <li>
              <a 
                href="https://t.me/minima_ru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇷🇺 Russian Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/minimablockchainES" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇪🇸 Spanish Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/minima_Turkey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇹🇷 Turkish Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/MinimaVietNam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇻🇳 Vietnamese Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/minimachina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
              >
                🇨🇳 Chinese Community <span className="text-gray-500 text-xs">(community-maintained)</span>
              </a>
            </li>
          </ul>
          <p className="text-gray-500 text-xs mt-4 italic">
            Note: Regional channels are provided for community convenience. 
            Always verify channel authenticity before sharing sensitive information.
          </p>
        </section>

        {/* Section 6: Response Time */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Response Time</h2>
          <p className="text-gray-300 leading-relaxed">
            GitHub issues for this documentation project are typically reviewed within 7 days. 
            For urgent matters related to Minima Protocol itself, please use Discord or Telegram 
            channels listed above.
          </p>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8">
          <p className="text-amber-200 text-sm">
            <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" className="underline hover:text-amber-100">
              Learn more
            </Link>
          </p>
        </div>

        {/* Last Updated */}
        <section className="border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            Last updated: February 17, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
