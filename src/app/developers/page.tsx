// src/app/developers/page.tsx
export default function DevelopersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section>
        <h1 className="text-3xl font-bold mb-6">Developer Resources</h1>
        <p className="mb-4">
          This page provides resources for developers building on or contributing to the Minima protocol.
        </p>
        <p className="text-gray-400 text-sm">
          All information is publicly available and community-contributed. Verify through official sources.
        </p>
      </section>

      {/* Official Documentation */}
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
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

          <div>
            <h3 className="font-medium text-gray-200">Development Guides</h3>
            <p className="text-gray-400 text-sm">
              Step-by-step tutorials for building decentralized applications, smart contracts, and integrating with Minima.
            </p>
            <a
              href="https://docs.minima.global/docs/development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm block mt-2"
            >
              Access: Development Guides
            </a>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
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

      {/* GitHub Repositories */}
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">GitHub Repositories</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-200">Core Protocol</h3>
            <p className="text-gray-400 text-sm">
              Main Minima protocol implementation and node software.
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

          <div>
            <h3 className="font-medium text-gray-200">Contributing</h3>
            <p className="text-gray-400 text-sm">
              Guidelines for contributing to the Minima project, including code style, testing, and pull request process.
            </p>
            <a
              href="https://github.com/minima-global/Minima/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm block mt-2"
            >
              Source: Contributing Guide
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Getting Started</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-200">Run a Node</h3>
            <p className="text-gray-400 text-sm">
              Install and run a full Minima node on your device to begin development and testing.
            </p>
            <a
              href="https://docs.minima.global/docs/node"
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
              Create your first decentralized application on the Minima protocol using TypeScript.
            </p>
            <a
              href="https://docs.minima.global/docs/development/using-typescript"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm block mt-2"
            >
              Guide: MiniDapp Development
            </a>
          </div>
        </div>
      </section>

      <section>
        <p className="text-red-400 text-sm">
          This site does not represent the official Minima team. Information is provided for reference only.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Last updated: January 2026. Verify all information through official sources.
        </p>
      </section>
    </div>
  );
}

