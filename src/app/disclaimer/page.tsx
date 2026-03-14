// src/app/disclaimer/page.tsx
// Disclaimer page - Legal notice and project information

import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto">
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
            <h1 className="text-3xl font-bold text-white mb-2">Disclaimer</h1>
            <p className="text-gray-400">Legal notice and project information</p>
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

      {/* Content */}
      <article className="prose prose-invert max-w-none animate-fade-in">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Project Status</h2>
          <p className="text-gray-300 leading-relaxed">
            Minimaverse is an <strong>independent documentation project</strong> focused on 
            the Minima Protocol ecosystem. This website is not affiliated with, endorsed by, 
            or connected to Minima Foundation in any official capacity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Official Resources</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For official information about Minima Protocol, please refer to the following 
            verified sources:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Official Website:{' '}
              <a 
                href="https://minima.global" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                minima.global
              </a>
            </li>
            <li>
              Official Documentation:{' '}
              <a 
                href="https://docs.minima.global" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                docs.minima.global
              </a>
            </li>
            <li>
              Official Blog:{' '}
              <a 
                href="https://minima.global/blog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                minima.global/blog
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Information Accuracy</h2>
          <p className="text-gray-300 leading-relaxed">
            All information presented on this website is sourced from publicly available 
            official Minima Foundation communications. Every factual claim is accompanied 
            by a direct link to its primary source. Content is maintained in a neutral, 
            factual tone without marketing language or speculation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">No Financial Advice</h2>
          <p className="text-gray-300 leading-relaxed">
            This website does not provide financial, investment, or legal advice. All 
            content is for informational and educational purposes only. Users should 
            conduct their own research and consult qualified professionals before making 
            any decisions related to Minima Protocol or associated projects.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Project Maintenance</h2>
          <p className="text-gray-300 leading-relaxed">
            This documentation project is maintained independently. For questions, issues, 
            or contributions, please use the official GitHub repository:
          </p>
          <p className="mt-4">
            <a 
              href="https://github.com/KuA1bo/minimaverse-site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              github.com/KuA1bo/minimaverse-site
            </a>
          </p>
        </section>

        {/* Universal Disclaimer Block - ADAPTED FOR DISCLAIMER PAGE */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8">
          <p className="text-amber-200 text-sm">
            <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <span className="text-amber-300">You are currently viewing the full disclaimer page.</span>
          </p>
        </div>

        <section className="border-t border-gray-700 pt-6 mt-12">
          <p className="text-gray-500 text-sm">
            Last updated: February 17, 2026
          </p>
        </section>
      </article>
    </div>
  );
}
