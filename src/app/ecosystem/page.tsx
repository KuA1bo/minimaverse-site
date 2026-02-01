// src/app/ecosystem/page.tsx
export default function EcosystemPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section>
        <h1 className="text-3xl font-bold mb-6">Ecosystem Overview</h1>
        <p className="mb-4">
          This page documents projects, tools, and services that operate on or integrate with the Minima protocol.
        </p>
        <p className="text-gray-400 text-sm">
          Inclusion does not constitute endorsement. All information is publicly verifiable.
        </p>
      </section>

      {/* Core Infrastructure */}
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
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
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
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
              href="https://docs.minima.global/developers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
            >
              Source: Developer Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Wallets */}
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
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
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Centralized Exchanges</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-200">Exchange Listings</h3>
            <p className="text-gray-400 text-sm">
              Minima tokens are available for trading on select centralized exchanges.
              Trading pairs and availability may vary by jurisdiction.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Note: Exchange information is subject to change. Verify directly with exchange platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Edge Deployments */}
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Edge Deployments</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-200">IoT & Embedded Systems</h3>
            <p className="text-gray-400 text-sm">
              Minima nodes deployed on embedded hardware, IoT devices, and edge infrastructure.
              Enables direct participation in consensus from physical devices without cloud dependency.
            </p>
            <a
              href="https://minima.global/technology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm block mt-1"
            >
              Source: Technical Overview
            </a>
          </div>
        </div>
      </section>

      {/* Experimental Projects */}
      <section className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Experimental Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-200">Research & Development</h3>
            <p className="text-gray-400 text-sm">
              Various experimental applications and research initiatives built on or exploring the Minima protocol.
              These projects are in early stages and may not be production-ready.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Status: Experimental — verify current state through project repositories.
            </p>
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

