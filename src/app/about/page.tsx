// src/app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold">What is Minima</h1>
          <p className="text-gray-400 mt-2">Protocol Architecture</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Core Concept</h2>
          <p className="text-gray-300 mb-4">
            Minima is the world's first fully decentralized blockchain protocol where every node is a full node. Unlike traditional blockchains that require significant computational power, Minima enables every device (including mobile phones and IoT devices) to participate in the network on equal terms.
          </p>
          <p className="text-sm text-gray-500">
            Source: <Link href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Minima Whitepaper v1.1</Link>
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Architectural Features</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">1. Compact Data Structure</h3>
              <p className="text-gray-300 mb-2">
                Minima uses a unique data structure that allows storing the complete blockchain history in just a few megabytes. This is achieved through the use of Directed Acyclic Graphs (DAG) and optimized compression algorithms.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Official Documentation</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">2. Hybrid Consensus</h3>
              <p className="text-gray-300 mb-2">
                The protocol uses a hybrid consensus mechanism combining elements of Proof of Work (PoW) and Proof of Stake (PoS). This ensures network security with minimal energy consumption.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Minima Whitepaper v1.1</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">3. Horizontal Scaling</h3>
              <p className="text-gray-300 mb-2">
                Minima's architecture allows the network to scale horizontally without compromising decentralization. Each new node increases the overall network throughput.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global/docs/architecture" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Architecture Documentation</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Differences from Classical Blockchains</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="font-medium text-gray-300 mb-2">Traditional Blockchains</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Require significant resources for full nodes</li>
                <li>• Mining centralization</li>
                <li>• Limited scalability</li>
                <li>• High energy consumption</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <h3 className="font-medium text-gray-300 mb-2">Minima</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Full nodes on any device</li>
                <li>• Decentralized consensus</li>
                <li>• Horizontal scaling</li>
                <li>• Energy efficiency</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Source: <Link href="https://minima.global/technology" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Technology Overview</Link>
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-gray-300">Full Node Size</h3>
              <p className="text-gray-400">~5-10 MB (as of 2024)</p>
              <p className="text-sm text-gray-500">Status: <span className="text-green-500">confirmed</span></p>
            </div>

            <div>
              <h3 className="font-medium text-gray-300">Transaction Confirmation Time</h3>
              <p className="text-gray-400">~30-60 seconds</p>
              <p className="text-sm text-gray-500">Status: <span className="text-green-500">confirmed</span></p>
            </div>

            <div>
              <h3 className="font-medium text-gray-300">Smart Contract Languages</h3>
              <p className="text-gray-400">Minima Script (built-in), TypeScript SDK</p>
              <p className="text-sm text-gray-500">Status: <span className="text-green-500">confirmed</span></p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Decentralization Principles</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">1. Node Equality</h3>
              <p className="text-gray-300 mb-2">
                In the Minima network, all nodes have equal rights and capabilities. There is no distinction between "full" and "light" nodes — every network participant stores and verifies the complete blockchain history.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Minima Whitepaper v1.1</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">2. Universal Device Accessibility</h3>
              <p className="text-gray-300 mb-2">
                The protocol is designed to run on resource-constrained devices — mobile phones, single-board computers (Raspberry Pi), and IoT devices.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global/docs/architecture" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Architecture Documentation</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">3. Censorship Resistance</h3>
              <p className="text-gray-300 mb-2">
                Thanks to complete decentralization and the absence of central points of failure, the Minima network is resistant to censorship and external control.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://minima.global/technology" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Technology Overview</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="bg-amber-900/10 border-l-4 border-amber-500 p-4 text-sm text-amber-300">
          <div className="flex items-start">
            <span className="mr-2 mt-0.5">⚠️</span>
            <span>This site does not represent the official Minima team. All information is compiled from publicly available sources.</span>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-700 py-6 mt-8">
        <div className="container mx-auto px-4 max-w-4xl text-center text-gray-500 text-sm">
          <p>Minimaverse — Community-driven information hub</p>
          <p className="mt-1">Data verified from official sources</p>
        </div>
      </footer>
    </div>
  );
}

