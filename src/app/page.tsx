// src/app/page.tsx
// Home page - Coming Soon placeholder

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Coming Soon Hero */}
      <section className="py-16 text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Minimaverse</h1>
          <p className="text-gray-400 text-lg mb-2">
            Community-driven information hub for the Minima Protocol
          </p>
        </div>
        
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-3 bg-blue-900/30 border border-blue-700/50 rounded-full px-6 py-3 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span className="text-blue-300 font-medium">Coming Soon</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          We're preparing verified documentation, technical guides, and ecosystem resources 
          for the Minima Protocol. All content will be factual, sourced, and hype-free.
        </p>
        
        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link 
            href="/protocol" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500/10 transition-colors min-w-[200px]"
          >
            Explore Protocol
          </Link>
          <Link 
            href="/nodes" 
            className="inline-flex items-center justify-center px-6 py-3 mt-3 sm:mt-0 border-2 border-gray-600 text-gray-400 hover:text-blue-400 hover:border-blue-500 transition-colors min-w-[200px]"
          >
            Run a Node
          </Link>
        </div>
        
        {/* GitHub Link */}
        <div className="mt-10">
          <a 
            href="https://github.com/KuA1bo/minimaverse-site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View source on GitHub
          </a>
        </div>
      </section>

      {/* Primary Sources Box */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8">
        <h3 className="text-white font-medium mb-3 text-center">📚 Primary Sources</h3>
        <ul className="space-y-2 text-sm text-center">
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

      {/* Universal Disclaimer Block */}
      <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8">
        <p className="text-amber-200 text-sm text-center">
          <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
          All information is compiled from publicly available sources.{' '}
          <Link href="/disclaimer" className="underline hover:text-amber-100">
            Learn more
          </Link>
        </p>
      </div>

      {/* Last Updated */}
      <section className="border-t border-gray-700 pt-6">
        <p className="text-gray-500 text-sm text-center">
          Last updated: February 17, 2026
        </p>
      </section>
    </div>
  );
}
