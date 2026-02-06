import Link from 'next/link';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Minimaverse
          </Link>
          <h1 className="text-3xl font-bold">Developer Resources</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-6">
          <p className="text-gray-300 mb-4">
            This page provides resources for developers building on or contributing to the Minima protocol.
          </p>
          <p className="text-gray-400 text-sm">
            All information is publicly available and community-contributed. Verify through official sources.
          </p>
        </section>

        {/* Official Documentation */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Official Documentation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Technical Documentation</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive guides, API references, and technical specifications for the Minima protocol.
              </p>
              <a
                href="https://docs.minima.global"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-2"
              >
                Access: Full Documentation
              </a>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Getting Started</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Run a Node</h3>
              <p className="text-gray-400 text-sm">
                Install and run a full Minima node on your device to begin development and testing.
              </p>
              <a
                href="https://minima.global/ru/technology/run-a-node"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-2"
              >
                Guide: Run a Node
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">Build a MiniDapp</h3>
              <p className="text-gray-400 text-sm">
                Create decentralized applications on the Minima protocol. Learn about transactions, 
                smart contracts, peer-to-peer communication, and the MiniDapp system.
              </p>
              <a
                href="https://docs.minima.global/docs/development"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-2"
              >
                Guide: Development Overview
              </a>
            </div>
          </div>
        </section>

        {/* GitHub Repositories */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">GitHub Repositories</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Core Protocol</h3>
              <p className="text-gray-400 text-sm">
                Main Minima protocol implementation and node software. Source code, issue tracking, and releases.
              </p>
              <a
                href="https://github.com/minima-global/Minima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block mt-2"
              >
                Source: GitHub Repository
              </a>
            </div>
          </div>
        </section>

        {/* Community Resources */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Community Resources</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Technical Discussions</h3>
              <p className="text-gray-400 text-sm">
                Join technical discussions, ask questions, and collaborate with other developers in the Minima community.
              </p>
              <div className="mt-2 space-y-2">
                <a
                  href="https://discord.com/invite/minimaglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm block"
                >
                  Join: Discord Server
                </a>
                <p className="text-gray-500 text-xs">
                  Instructions: Select role in #role-picker channel. Complete developer skills survey in #developer-surveys.
                </p>
              </div>
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

