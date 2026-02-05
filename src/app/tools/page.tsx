// src/app/tools/page.tsx
import Link from 'next/link';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold">Tools & Utilities</h1>
          <p className="text-gray-400 mt-2">Essential tools for interacting with Minima</p>
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

      <footer className="border-t border-gray-700 py-6 mt-8">
        <div className="container mx-auto px-4 max-w-4xl text-center text-gray-500 text-sm">
          <p>Minimaverse — Community-driven information hub</p>
          <p className="mt-1">Data verified from official sources</p>
        </div>
      </footer>
    </div>
  );
}

