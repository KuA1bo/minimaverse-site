// src/app/tools/page.tsx
import Link from 'next/link';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      {/* Header with Back button and GitHub icon */}
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl flex justify-between items-start">
          <div>
            <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold">Tools & Utilities</h1>
            <p className="text-gray-400 mt-2">Essential tools for interacting with Minima</p>
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
          <h2 className="text-2xl font-semibold mb-4">Official Tools</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">1. Minima Terminal</h3>
              <p className="text-gray-300 mb-2">
                Command-line interface for advanced node management, transaction creation, and smart contract deployment.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global/docs/development/terminal-commands" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Terminal Commands</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">2. Minima Scan</h3>
              <p className="text-gray-300 mb-2">
                Blockchain explorer for viewing transactions, blocks, addresses, and network statistics.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://explorer.minima.global" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">explorer.minima.global</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">3. Web Wallet</h3>
              <p className="text-gray-300 mb-2">
                Browser-based wallet for managing Minima tokens, sending/receiving transactions, and interacting with MiniDapps.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://wallet.minima.global" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">wallet.minima.global</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">4. Mobile Wallet</h3>
              <p className="text-gray-300 mb-2">
                Official mobile wallet available on Google Play and as APK download.
              </p>
              <div className="text-sm text-gray-500 space-y-1 mt-1">
                <p>
                  Status: <span className="text-green-500">confirmed</span> | Sources: 
                  <Link href="https://play.google.com/store/search?q=minima&c=apps&hl=en" className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">Google Play</Link>,
                  <Link href="https://github.com/minima-global/Minima/blob/master/jar/minima-1.0.46.6.apk" className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">APK Download</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Development Tools</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">TypeScript SDK</h3>
              <p className="text-gray-300 mb-2">
                Official SDK for building applications and MiniDapps using TypeScript/JavaScript.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global/docs/development/using-typescript" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">TypeScript Guide</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Minima Script & RPC API</h3>
              <p className="text-gray-300 mb-2">
                Built-in scripting language and RESTful API for programmatic interaction with Minima nodes.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global/docs/development" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Development Documentation</Link>
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

      {/* Local footer REMOVED to prevent duplication with global footer from layout.tsx */}
    </div>
  );
}

