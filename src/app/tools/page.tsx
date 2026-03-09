// src/app/tools/page.tsx
// Tools page - verified tools and utilities for Minima Protocol

import Link from 'next/link';

export default function ToolsPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Tools & Utilities</h1>
            <p className="text-gray-400">Essential tools for interacting with Minima Protocol</p>
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
            <span className="text-gray-400">Explorer:</span>{' '}
            <a 
              href="https://explorer.minima.global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              explorer.minima.global
            </a>
          </li>
          <li>
            <span className="text-gray-400">Wallet:</span>{' '}
            <a 
              href="https://wallet.minima.global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              wallet.minima.global
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-300 leading-relaxed">
            This page aggregates verified tools and utilities for interacting with the Minima 
            Protocol. All links point to official or community-verified sources.
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

        {/* Official Tools */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Official Tools</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Minima Terminal</h3>
              <p className="text-gray-300 text-sm mb-3">
                Command-line interface for advanced node management, transaction creation, 
                and smart contract deployment.
              </p>
              <a 
                href="https://docs.minima.global/docs/development/terminal-commands" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Terminal Commands Documentation
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Minima Scan (Explorer)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Blockchain explorer for viewing transactions, blocks, addresses, and network 
                statistics on the Minima protocol.
              </p>
              <a 
                href="https://explorer.minima.global" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                explorer.minima.global
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Web Wallet</h3>
              <p className="text-gray-300 text-sm mb-3">
                Browser-based wallet for managing Minima tokens, sending/receiving transactions, 
                and interacting with MiniDapps.
              </p>
              <a 
                href="https://wallet.minima.global" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                wallet.minima.global
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Mobile Wallet</h3>
              <p className="text-gray-300 text-sm mb-3">
                Official mobile wallet available on Google Play and as direct APK download.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://play.google.com/store/search?q=minima&c=apps&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm block"
                >
                  📱 Google Play Store
                </a>
                <a 
                  href="https://github.com/minima-global/Minima/blob/master/jar/minima-1.0.46.6.apk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-sm block"
                >
                  🤖 Android APK (GitHub)
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>
          </div>
        </section>

        {/* Development Tools */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Development Tools</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">TypeScript SDK</h3>
              <p className="text-gray-300 text-sm mb-3">
                Official SDK for building applications and MiniDapps using TypeScript/JavaScript. 
                Provides high-level abstractions for protocol interaction.
              </p>
              <a 
                href="https://docs.minima.global/docs/development/using-typescript" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                TypeScript Development Guide
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Minima Script & RPC API</h3>
              <p className="text-gray-300 text-sm mb-3">
                Built-in scripting language and RESTful API for programmatic interaction with 
                Minima nodes. Enables custom automation and integration.
              </p>
              <a 
                href="https://docs.minima.global/docs/development" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Development Documentation
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>
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
