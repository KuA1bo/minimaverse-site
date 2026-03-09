// src/app/protocol/page.tsx
// Protocol page - technical overview of Minima Protocol architecture

import Link from 'next/link';

export default function ProtocolPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Minima Protocol</h1>
            <p className="text-gray-400">Architecture, consensus, and technical specifications</p>
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
            <span className="text-gray-400">Consensus Docs:</span>{' '}
            <a 
              href="https://docs.minima.global/docs/learn/mining-consensus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              Mining & Consensus
            </a>
          </li>
          <li>
            <span className="text-gray-400">Architecture:</span>{' '}
            <a 
              href="https://minima.global/technology/overview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              Technology Overview
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Section 1: Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Protocol Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            Minima Protocol is a layer-1 blockchain designed for universal accessibility. 
            Unlike traditional blockchains that require significant computational resources, 
            Minima enables every device to run a full node and participate in consensus on 
            equal terms.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            <strong>Key innovation:</strong> The complete blockchain state fits in approximately 
            5-10 MB, allowing mobile phones, Raspberry Pi, and IoT devices to store and verify 
            the entire chain history independently.
          </p>
        </section>

        {/* Section 2: Consensus Mechanism */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Consensus Mechanism</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Cascada Consensus</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima uses the Cascada consensus mechanism, which combines probabilistic finality 
                with efficient block propagation. This approach ensures network security without 
                requiring intensive computational work from every node.
              </p>
              <p className="text-gray-500 text-xs">
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

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Proof of Work (Lightweight)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima implements a lightweight PoW mechanism that can be executed on mobile devices. 
                The computational difficulty is adjusted to remain accessible while maintaining 
                security guarantees.
              </p>
              <p className="text-gray-500 text-xs">
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
          </div>
        </section>

        {/* Section 3: Data Structure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Data Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Compact Chain History</h3>
              <p className="text-gray-300 text-sm mb-3">
                Through optimized compression and the use of Directed Acyclic Graph (DAG) principles, 
                Minima maintains a complete verifiable history in minimal storage space.
              </p>
              <p className="text-gray-500 text-xs">
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

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">State Management</h3>
              <p className="text-gray-300 text-sm mb-3">
                The protocol maintains a minimal UTXO set and uses efficient merkle tree structures 
                for transaction verification without requiring full historical data for each operation.
              </p>
              <p className="text-gray-500 text-xs">
                Status: <span className="text-green-500">confirmed</span> | Source:{' '}
                <span className="text-gray-400">see Primary Sources box above (Whitepaper v1.1)</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Network Architecture */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Network Architecture</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800">
                <tr>
                  <th className="text-left p-3 text-gray-300 font-semibold">Component</th>
                  <th className="text-left p-3 text-gray-300 font-semibold">Description</th>
                  <th className="text-left p-3 text-gray-300 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="p-3 text-gray-400">Node Type</td>
                  <td className="p-3 text-gray-400">Every node is a full node (no light clients)</td>
                  <td className="p-3 text-green-500">confirmed</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-400">Node Size</td>
                  <td className="p-3 text-gray-400">~5-10 MB complete chain history</td>
                  <td className="p-3 text-green-500">confirmed</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-400">Block Time</td>
                  <td className="p-3 text-gray-400">Approximately 30-60 seconds</td>
                  <td className="p-3 text-green-500">confirmed</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-400">Scaling</td>
                  <td className="p-3 text-gray-400">Horizontal (more nodes = more capacity)</td>
                  <td className="p-3 text-green-500">confirmed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Source:{' '}
            <span className="text-gray-400">see Primary Sources box above (Technology Overview)</span>
          </p>
        </section>

        {/* Section 5: Smart Contracts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Smart Contracts (MiniDapps)</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">Minima Script</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima uses a built-in scripting language for smart contract execution. MiniDapps 
                are decentralized applications that run on the Minima network with peer-to-peer 
                communication capabilities.
              </p>
              <p className="text-gray-500 text-xs">
                Status: <span className="text-green-500">confirmed</span> | Source:{' '}
                <a 
                  href="https://docs.minima.global/docs/development" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Development Documentation
                </a>
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-2">TypeScript SDK</h3>
              <p className="text-gray-300 text-sm mb-3">
                Developers can build MiniDapps using the official TypeScript SDK, which provides 
                high-level abstractions for interacting with the Minima Protocol.
              </p>
              <p className="text-gray-500 text-xs">
                Status: <span className="text-green-500">confirmed</span> | Source:{' '}
                <a 
                  href="https://build.minima.global/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  build.minima.global
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Security Model */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Security Model</h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Decentralized Validation</span>
                <p className="text-gray-300 text-sm">Every node independently verifies all transactions and blocks; no trusted third parties required.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Censorship Resistance</span>
                <p className="text-gray-300 text-sm">No central points of failure; network remains operational as long as any node is active.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <div>
                <span className="text-white font-medium">Device-Level Security</span>
                <p className="text-gray-300 text-sm">Private keys never leave the user's device; full control over funds at all times.</p>
              </div>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            Source:{' '}
            <span className="text-gray-400">see Primary Sources box above (Whitepaper v1.1)</span>
          </p>
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

