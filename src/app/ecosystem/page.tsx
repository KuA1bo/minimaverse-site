import Link from 'next/link';

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Minimaverse
          </Link>
          <h1 className="text-3xl font-bold">Ecosystem Overview</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-6">
          <p className="text-gray-300 mb-4">
            This page documents projects, tools, and services that operate on or integrate with the Minima protocol.
          </p>
          <p className="text-gray-400 text-sm">
            Inclusion does not constitute endorsement. All information is publicly verifiable.
          </p>
        </section>

        {/* Core Infrastructure */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Core Infrastructure</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Minima Protocol</h3>
              <p className="text-gray-400 text-sm">
                The base layer blockchain protocol enabling full-node participation on everyday devices.
                Designed for decentralization by default without reliance on centralized validators.
              </p>
              <a
                href="https://github.com/minima-global/Minima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
              >
                Source: GitHub Repository
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">Integritas</h3>
              <p className="text-gray-400 text-sm">
                Cryptographic integrity and verification system providing trust mechanisms for AI and distributed environments.
                Focused on data provenance and tamper-evident verification.
              </p>
              <a
                href="https://docs.integritas.technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
              >
                Source: Official Documentation
              </a>
            </div>
          </div>
        </section>

        {/* Developer Tools */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Developer Tools</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Minima Terminal</h3>
              <p className="text-gray-400 text-sm">
                Command-line interface for interacting with Minima nodes.
                Provides access to protocol commands, transaction creation, and node management.
              </p>
              <a
                href="https://docs.minima.global/docs/development/terminal-commands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
              >
                Source: Terminal Commands
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">Minima Scan</h3>
              <p className="text-gray-400 text-sm">
                Blockchain explorer for viewing transactions, blocks, and network activity on the Minima protocol.
              </p>
              <a
                href="https://explorer.minima.global"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
              >
                Source: Explorer Website
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">SDK & APIs</h3>
              <p className="text-gray-400 text-sm">
                Software development kits and application programming interfaces for building applications on Minima.
              </p>
              <a
                href="https://docs.minima.global/docs/development/using-typescript"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
              >
                Source: TypeScript Development Guide
              </a>
            </div>
          </div>
        </section>

        {/* Wallets */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Wallets</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Minima Wallet</h3>
              <p className="text-gray-400 text-sm">
                Official wallet for managing Minima assets and interacting with the protocol.
                Available as web interface and mobile application for Android devices.
              </p>
              <div className="mt-2 space-y-1">
                <a
                  href="https://wallet.minima.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm block"
                >
                  Access: Web Wallet
                </a>
                <a
                  href="https://play.google.com/store/search?q=minima&c=apps&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm block"
                >
                  Download: Google Play Store
                </a>
                <a
                  href="https://github.com/minima-global/Minima/blob/master/jar/minima-1.0.46.6.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm block"
                >
                  Download: Android APK (GitHub)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Exchanges */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Centralized Exchanges</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">MEXC</h3>
              <p className="text-gray-400 text-sm">
                Trading pair: MINIMA/USDT
              </p>
              <a
                href="https://www.mexc.com/ru-RU/exchange/MINIMA_USDT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
              >
                Trade: MEXC
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">BitMart</h3>
              <p className="text-gray-400 text-sm">
                Trading pair: MINIMA/USDT
              </p>
              <a
                href="https://www.bitmart.com/ru-RU/trade/MINIMA_USDT?type=spot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
              >
                Trade: BitMart
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">XT.com</h3>
              <p className="text-gray-400 text-sm">
                Trading pair: MINIMA/USDT
              </p>
              <a
                href="https://www.xt.com/en/trade/minima_usdt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
              >
                Trade: XT.com
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            Note: Exchange information is subject to change. Verify trading pairs and availability directly on exchange platforms.
          </p>
        </section>

        {/* Edge Deployments */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Edge Deployments</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">IoT & Embedded Systems</h3>
              <p className="text-gray-400 text-sm">
                The Minima protocol architecture is designed to support full-node operation on resource-constrained devices.
                Direct participation in consensus without cloud dependency is a core protocol capability.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Status: <span className="text-yellow-400">In development</span> — Verified production deployments 
                on IoT/embedded platforms by corporate partners are not yet publicly available.
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

