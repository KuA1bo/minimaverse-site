import Link from 'next/link';

export default function NodesPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      {/* Header with Back button and GitHub icon */}
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl flex justify-between items-start">
          <div>
            <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold">Run a Node</h1>
            <p className="text-gray-400 mt-2">Setup, configuration, and node types guide</p>
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
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-300 mb-4">
            Running a Minima node is straightforward and can be done on various platforms including desktop computers, mobile devices, Raspberry Pi, and cloud servers. Each node is a full node, contributing to the network's decentralization and security.
          </p>
          <p className="text-gray-300">
            As of 2026, the Minima network is secured by over 100,000+ node operators globally, making it one of the largest decentralized networks in the DePIN space.
          </p>
          <div className="text-sm text-gray-500 mt-3">
            Source: <a href="https://minima.global/technology/run-a-node" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Minima Run a Node Guide</a>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-gray-300">Minimum Requirements</h3>
              <ul className="text-gray-400 text-sm space-y-1 mt-2">
                <li>• 2 GB RAM</li>
                <li>• 10 GB free disk space</li>
                <li>• Java 11 or higher</li>
                <li>• Stable internet connection</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-300">Recommended</h3>
              <ul className="text-gray-400 text-sm space-y-1 mt-2">
                <li>• 4 GB RAM</li>
                <li>• SSD storage</li>
                <li>• Static IP address (for public nodes)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Run a Node?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Contribute to network decentralization and security</li>
            <li>Enable peer-to-peer transactions without intermediaries</li>
            <li>Support the growth of decentralized physical infrastructure (DePIN)</li>
            <li>Participate in the network's consensus mechanism</li>
            <li>Access full blockchain data and verification capabilities</li>
          </ul>
          <div className="text-sm text-gray-500 mt-3">
            Source: <a href="https://minima.global/technology/overview" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Minima Technology Overview</a>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Installation Guides by Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium text-gray-200">Windows</h3>
              <p className="text-sm text-gray-400 mt-1">
                Desktop installation for Windows operating systems
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/windows" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Official Guide
              </a>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium text-gray-200">Android</h3>
              <p className="text-sm text-gray-400 mt-1">
                Run a full node directly on your Android device
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/android" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Official Guide
              </a>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium text-gray-200">macOS</h3>
              <p className="text-sm text-gray-400 mt-1">
                Desktop installation for Apple computers
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Official Guide
              </a>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium text-gray-200">Linux (Desktop CLI)</h3>
              <p className="text-sm text-gray-400 mt-1">
                Command-line interface installation for Linux desktops
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/desktop-cli" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Official Guide
              </a>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium text-gray-200">Linux (VPS) - Docker</h3>
              <p className="text-sm text-gray-400 mt-1">
                Docker deployment for virtual private servers
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/linux-vps-docker" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Official Guide
              </a>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium text-gray-200">Linux (VPS) - Service</h3>
              <p className="text-sm text-gray-400 mt-1">
                Systemd service installation for virtual private servers
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/linux-vps-service" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Official Guide
              </a>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium text-gray-200">Docker Desktop</h3>
              <p className="text-sm text-gray-400 mt-1">
                Containerized deployment for desktop environments
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/docker-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Official Guide
              </a>
            </div>

            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <h3 className="font-medium text-gray-200">Raspberry Pi</h3>
              <p className="text-sm text-gray-400 mt-1">
                Optimized installation for Raspberry Pi 4+ devices (see supported devices documentation)
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/node-types#supported-devices" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Supported Devices Documentation
              </a>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Advanced Node Types</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Archive Node</h3>
              <p className="text-gray-400 text-sm mt-1">
                Full historical blockchain data storage for archival purposes
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/archive-node" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Setup Guide
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">Mega Node</h3>
              <p className="text-gray-400 text-sm mt-1">
                High-performance node configuration for maximum network contribution
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/mega-node" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Setup Guide
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">Minima E-Gateway (MEG)</h3>
              <p className="text-gray-400 text-sm mt-1">
                Enterprise-grade gateway for integrating Minima with external systems
              </p>
              <div className="mt-1 space-y-1">
                <div>
                  <span className="text-sm text-gray-500">Overview: </span>
                  <a href="https://docs.minima.global/docs/run-a-node/meg-about" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                    Documentation
                  </a>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Setup: </span>
                  <a href="https://docs.minima.global/docs/run-a-node/meg-setup" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                    Configuration Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Node Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200">Node Types</h3>
              <p className="text-gray-400 text-sm mt-1">
                Understanding different node configurations and their roles in the network
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/node-types" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Documentation
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">Firewall Rules</h3>
              <p className="text-gray-400 text-sm mt-1">
                Required network configurations for proper node operation
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/firewall-rules" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Configuration Guide
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200">Startup Parameters</h3>
              <p className="text-gray-400 text-sm mt-1">
                Advanced configuration options for node initialization
              </p>
              <a href="https://docs.minima.global/docs/run-a-node/startup-parameters" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mt-1">
                → Parameter Reference
              </a>
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

