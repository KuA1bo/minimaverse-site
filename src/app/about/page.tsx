// src/app/about/page.tsx
// About page - factual overview of Minima Protocol and Minimaverse project

import Link from 'next/link';

export default function AboutPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">About Minima Protocol</h1>
            <p className="text-gray-400">Technical overview and project context</p>
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
            <span className="text-gray-400">Whitepaper:</span>{' '}
            <a 
              href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              Minima Whitepaper v1.1
            </a>
          </li>
          <li>
            <span className="text-gray-400">Technical Overview:</span>{' '}
            <a 
              href="https://minima.global/technology/overview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              Technology Overview
            </a>
          </li>
          <li>
            <span className="text-gray-400">Consensus:</span>{' '}
            <a 
              href="https://docs.minima.global/docs/learn/mining-consensus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              Mining & Consensus Documentation
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 1: About This Documentation Project */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>Minimaverse</strong> is an independent documentation project focused on the 
            Minima Protocol ecosystem. This website is not affiliated with, endorsed by, or 
            connected to Minima Foundation. All content is compiled from publicly available 
            official sources and maintained by the community.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            <strong>Purpose:</strong> To provide verified, neutral, and accessible documentation 
            about Minima Protocol for developers, node operators, and community members.
          </p>
        </section>

        {/* Section 2: What is Minima Protocol */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What is Minima Protocol</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Minima is a decentralized blockchain protocol designed to run on any device, from 
            mobile phones to IoT hardware, while maintaining full node participation for every 
            network member.
          </p>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <strong>Key principle:</strong> Every node is a full node. There are no "light" 
              clients or centralized validators — all participants store and verify the complete 
              blockchain state.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Source:{' '}
              <a 
                href="https://minima.global/technology/overview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Technology Overview
              </a>
            </p>
          </div>
        </section>

        {/* Section 3: Core Technical Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Core Technical Features</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Compact Blockchain State</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Minima uses an optimized data structure that allows the complete blockchain history 
                to be stored in approximately 5-10 MB (as of 2024), enabling full node operation 
                on resource-constrained devices.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source:{' '}
                <a 
                  href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Minima Whitepaper v1.1
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Cascada Consensus</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                The protocol employs the Cascada consensus mechanism, which combines probabilistic 
                finality with efficient block propagation to achieve security without requiring 
                intensive computational work from every node.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source:{' '}
                <a 
                  href="https://docs.minima.global/docs/learn/mining-consensus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Mining & Consensus Documentation
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Horizontal Scalability</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Network throughput scales with the number of participants: each additional node 
                contributes to overall capacity without creating bottlenecks or centralization points.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source:{' '}
                <span className="text-gray-400">see Primary Sources box above (Technology Overview)</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Minima vs Traditional Blockchains</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800">
                <tr>
                  <th className="text-left p-3 text-gray-300 font-semibold">Aspect</th>
                  <th className="text-left p-3 text-gray-300 font-semibold">Traditional Blockchains</th>
                  <th className="text-left p-3 text-gray-300 font-semibold">Minima Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="p-3 text-gray-400">Full Node Requirements</td>
                  <td className="p-3 text-gray-400">High storage/compute; often server-grade</td>
                  <td className="p-3 text-green-400">~5-10 MB; runs on mobile/IoT devices</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-400">Node Types</td>
                  <td className="p-3 text-gray-400">Full nodes + light clients (unequal)</td>
                  <td className="p-3 text-green-400">Every node is a full node (equal)</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-400">Scaling Approach</td>
                  <td className="p-3 text-gray-400">Vertical scaling or layer-2 solutions</td>
                  <td className="p-3 text-green-400">Horizontal scaling via node participation</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-400">Energy Model</td>
                  <td className="p-3 text-gray-400">Often high (PoW) or stake-concentrated (PoS)</td>
                  <td className="p-3 text-green-400">Optimized for low-energy devices</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Source:{' '}
            <span className="text-gray-400">see Primary Sources box above (Technology Overview)</span>
          </p>
        </section>

        {/* Section 5: Decentralization Principles */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Decentralization Principles</h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Node Equality</span>
                <p className="text-gray-300 text-sm">All participants run full nodes with equal verification rights; no privileged validator set.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Universal Accessibility</span>
                <p className="text-gray-300 text-sm">Protocol designed for mobile phones, Raspberry Pi, and IoT hardware without compromising security.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Censorship Resistance</span>
                <p className="text-gray-300 text-sm">No central points of failure; network remains operational as long as any node is active.</p>
              </div>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            Source:{' '}
            <span className="text-gray-400">see Primary Sources box above (Whitepaper v1.1)</span>
          </p>
        </section>

        {/* Section 6: Current Status & Considerations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Current Status & Considerations</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Protocol Maturity</h3>
              <p className="text-gray-300 text-sm">
                The core Minima Protocol is considered complete and immutable by its architects. 
                Future development focuses on application layers and tooling built atop the protocol.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Source: Paddy Cherry (Minima Architect), Official Communications
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Node Monetization</h3>
              <p className="text-gray-300 text-sm">
                Minima Protocol does not implement token-based incentives for node operation. 
                This design choice intentionally avoids centralization pressures associated with 
                reward mechanisms.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-green-500">confirmed</span> | Source: Protocol Design Philosophy
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Developer Resources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Developer Resources</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For developers interested in building on Minima Protocol, the official Edge Pioneers 
            program provides documentation, tools, and community support:
          </p>
          
          <a 
            href="https://build.minima.global/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 hover:border-blue-600 transition-colors group"
          >
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl mt-1">🛠️</span>
              <div>
                <h3 className="text-white font-medium group-hover:text-blue-300 transition-colors">
                  Edge Pioneers Program
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Official developer portal: documentation, SDKs, tutorials, and community support 
                  for building decentralized applications on Minima.
                </p>
                <p className="text-blue-400 text-sm mt-2 underline">
                  build.minima.global →
                </p>
              </div>
            </div>
          </a>
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

