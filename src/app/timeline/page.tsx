// src/app/timeline/page.tsx
// Timeline page - verified historical milestones of Minima Protocol

import Link from 'next/link';

export default function TimelinePage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Unified Header */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4"
            >
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Historical Execution Timeline</h1>
            <p className="text-gray-400">Verified milestones and evidence-based progress</p>
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
            <span className="text-gray-400">Official Blog:</span>{' '}
            <a 
              href="https://minima.global/blog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              minima.global/blog
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
            <span className="text-gray-400">GitHub Releases:</span>{' '}
            <a 
              href="https://github.com/minima-global/Minima/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              github.com/minima-global/Minima/releases
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-300 leading-relaxed">
            This timeline documents completed and publicly verifiable milestones in the development 
            and deployment of the Minima Protocol. It intentionally excludes speculative roadmaps 
            or future promises, reflecting Minima's commitment to evidence-based progress reporting.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Status legend:{' '}
            <span className="text-green-500">● confirmed</span>{' '}
            <span className="text-gray-500">|</span>{' '}
            <span className="text-yellow-500">● in-development</span>{' '}
            <span className="text-gray-500">|</span>{' '}
            <span className="text-gray-500">● community-maintained</span>
          </p>
        </section>

        {/* Timeline Philosophy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Timeline Philosophy</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <p className="text-gray-300 text-sm mb-3">
              Minima's development approach emphasizes delivered results over projected plans. 
              Following the January 2026 communication shift, the project no longer publishes 
              dated roadmaps.
            </p>
            <p className="text-gray-300 text-sm">
              This timeline documents only events that have occurred and can be independently 
              verified, reflecting Minima's commitment to evidence-based progress reporting 
              and long-term infrastructure building.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Status: <span className="text-green-500">confirmed</span> | Source:{' '}
              <a 
                href="https://minima.global/post/minima-from-roadmaps-to-results" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Minima Official Blog
              </a>
            </p>
          </div>
        </section>

        {/* Key Communications */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Key Communications</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
            <div className="flex justify-between items-start mb-3">
              <span className="text-sm text-gray-400">January 20, 2026</span>
              <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
            </div>
            <h3 className="text-white font-medium mb-3">Minima: From Roadmaps to Results</h3>
            <p className="text-gray-300 text-sm mb-3">
              Minima announced a fundamental shift in communication strategy:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-4">
              <li>Moving away from traditional roadmaps with fixed dates</li>
              <li>Reframing as a technology company solving real-world infrastructure problems</li>
              <li>Emphasizing evidence of execution over speculative narratives</li>
              <li>Focusing on long-term investors and builders aligned with infrastructure durability</li>
            </ul>
            <blockquote className="text-gray-400 text-sm italic border-l-2 border-gray-600 pl-3 mb-3">
              "Blockchain is not the product. Decentralisation is not the marketing. Speculation is not the strategy."
            </blockquote>
            <p className="text-gray-500 text-xs">
              Source:{' '}
              <a 
                href="https://minima.global/post/minima-from-roadmaps-to-results" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                minima.global/post/minima-from-roadmaps-to-results
              </a>
            </p>
          </div>
        </section>

        {/* Example Entry Types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Example Entry Types</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Protocol releases and network upgrades</span>
                  <p className="text-gray-400 text-xs">Official version releases, hard forks, and consensus updates</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Public product launches and deployments</span>
                  <p className="text-gray-400 text-xs">Wallet releases, explorer launches, and tooling availability</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Architecture shifts and technical pivots</span>
                  <p className="text-gray-400 text-xs">Documented changes to protocol design or consensus mechanism</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Published research and documentation</span>
                  <p className="text-gray-400 text-xs">Whitepapers, audits, and technical specifications</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Major communication shifts</span>
                  <p className="text-gray-400 text-xs">Official announcements about project direction or strategy</p>
                </div>
              </li>
            </ul>
            <p className="text-gray-500 text-xs mt-4 italic">
              Note: This timeline will be expanded with additional verified historical milestones 
              as they are documented and sourced.
            </p>
          </div>
        </section>

        {/* Universal Disclaimer Block - REQUIRED ON EVERY PAGE */}
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
