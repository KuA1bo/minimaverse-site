// src/app/developers/page.tsx
// Developers page - verified resources for building on Minima Protocol

import Link from 'next/link';

export default function DevelopersPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Developer Resources</h1>
            <p className="text-gray-400">Tools, SDKs, and documentation for Minima development</p>
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
        
        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-300 leading-relaxed">
            This page aggregates verified resources for developers building on or contributing to 
            the Minima Protocol. All links point to official or community-verified sources.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Status legend:{' '}
            <span className="text-green-500">● confirmed</span>{' '}
            <span className="text-gray-500">|</span>{' '}
            <span className="text-yellow-500">● experimental</span>{' '}
            <span className="text-gray-500">|</span>{' '}
            <span className="text-gray-500">● community-maintained</span>
          </p>
        </section>

        {/* Official Developer Portal - PROMINENT FIRST SECTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">🚀 Official Developer Portal</h2>
          
          <a 
            href="https://build.minima.global/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-blue-900/30 border border-blue-700/50 rounded-lg p-5 hover:border-blue-600 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <span className="text-blue-400 text-2xl mt-1">🛠️</span>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
                  Edge Pioneers Program
                </h3>
                <p className="text-gray-300 mt-2">
                  The official starting point for Minima developers. Access SDKs, tutorials, 
                  code examples, and community support for building decentralized applications 
                  on the Minima Protocol.
                </p>
                <ul className="text-gray-400 text-sm mt-3 space-y-1">
                  <li>• TypeScript/JavaScript SDK documentation</li>
                  <li>• MiniDapp development guides</li>
                  <li>• Sample projects and templates</li>
                  <li>• Developer community channels</li>
                </ul>
                <p className="text-blue-400 text-sm mt-4 font-medium underline">
                  build.minima.global →
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Status: <span className="text-green-500">confirmed</span> | Official Minima Foundation resource
                </p>
              </div>
            </div>
          </a>
        </section>

        {/* Technical Documentation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Technical Documentation</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Full Documentation</h3>
              <p className="text-gray-300 text-sm mb-3">
                Comprehensive API references, protocol specifications, and technical guides for 
                Minima development.
              </p>
              <a 
                href="https://docs.minima.global" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                docs.minima.global
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Protocol Architecture</h3>
              <p className="text-gray-300 text-sm mb-3">
                Deep dive into Minima's consensus mechanism, data structures, and network design.
              </p>
              <a 
                href="https://minima.global/technology/overview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Technology Overview
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Run a Full Node</h3>
              <p className="text-gray-300 text-sm mb-3">
                Install and configure a Minima node on your device. Required for local development 
                and testing.
              </p>
              <a 
                href="https://minima.global/technology/run-a-node" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Guide: Run a Node
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official source
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Build a MiniDapp</h3>
              <p className="text-gray-300 text-sm mb-3">
                Learn to create decentralized applications using Minima Script and the TypeScript SDK.
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

        {/* Source Code */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Source Code</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Core Protocol Repository</h3>
            <p className="text-gray-300 text-sm mb-3">
              Main Minima protocol implementation, node software, and release artifacts.
            </p>
            <a 
              href="https://github.com/minima-global/Minima" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              github.com/minima-global/Minima
            </a>
            <p className="text-gray-500 text-xs mt-2">
              Status: <span className="text-green-500">confirmed</span> | Official source
            </p>
          </div>
        </section>

        {/* Community & Support */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Community & Support</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Discord Developer Channel</h3>
              <p className="text-gray-300 text-sm mb-3">
                Real-time technical discussions, Q&A, and collaboration with other Minima developers.
              </p>
              <a 
                href="https://discord.gg/minimaglobal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                discord.gg/minimaglobal
              </a>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Official community channel
              </p>
              <p className="text-gray-500 text-xs mt-2 italic">
                Tip: Complete the developer survey in #developer-surveys to unlock dev channels.
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
