import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl flex justify-between items-start">
          <div>
            <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold">What is Minima</h1>
            <p className="text-gray-400 mt-2">Protocol Architecture</p>
          </div>
          <a 
            href="https://github.com/KuA1bo/minimaverse-site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="View source on GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
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
    </div>
  );
}

