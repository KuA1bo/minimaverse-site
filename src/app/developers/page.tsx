import Link from 'next/link';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      {/* Header with Back button and GitHub icon */}
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl flex justify-between items-start">
          <div>
            <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold">Developer Resources</h1>
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

      {/* Local footer REMOVED to prevent duplication with global footer from layout.tsx */}
    </div>
  );
}

