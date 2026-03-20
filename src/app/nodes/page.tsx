// src/app/nodes/page.tsx
// Nodes page - verified guides for running Minima nodes
// Hybrid version: full content + visual enhancements + section icons + clean docs links

import Link from 'next/link';

// ExternalLink component for all external links with ↗ icon
const ExternalLink = ({ 
  href, 
  children, 
  className = "",
  ariaLabel
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  ariaLabel?: string;
}) => (
  <a 
    href={href.trim()} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 ${className}`}
    aria-label={ariaLabel}
  >
    {children}
    <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);

// StatusBadge component for feature status indicators
const StatusBadge = ({ status }: { status: 'confirmed' | 'in-development' | 'community' }) => {
  const config = {
    'confirmed': { bg: 'bg-green-900/40', text: 'text-green-300', border: 'border-green-700/50', dot: 'bg-green-500' },
    'in-development': { bg: 'bg-yellow-900/40', text: 'text-yellow-300', border: 'border-yellow-700/50', dot: 'bg-yellow-500' },
    'community': { bg: 'bg-gray-700/40', text: 'text-gray-300', border: 'border-gray-600/50', dot: 'bg-gray-400' },
  };
  const style = config[status];
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${style.bg} ${style.text} text-xs font-medium border ${style.border}`}>
      <span className="relative flex h-2 w-2">
        {status === 'in-development' && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dot}`} />
      </span>
      {status === 'confirmed' ? 'confirmed' : status === 'in-development' ? 'in-development' : 'community-maintained'}
    </span>
  );
};

export default function NodesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Unified Header with gradient accent */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div className="relative inline-block">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4"
            >
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Run a Node</h1>
            <p className="text-gray-400">Setup, configuration, and node types guide</p>
            {/* Gradient accent line under title */}
            <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>
          <ExternalLink 
            href="https://github.com/KuA1bo/minimaverse-site" 
            className="text-gray-400 hover:text-white transition-colors"
            ariaLabel="View source on GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </ExternalLink>
        </div>
      </header>

      {/* Primary Sources Box */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8 
                      transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 
                      opacity-0 animate-fade-in-up delay-75">
        <h3 className="text-white font-medium mb-3">📚 Primary Sources for This Page</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-400">Run a Node Guide:</span>{' '}
            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              docs.minima.global/docs/run-a-node
            </ExternalLink>
          </li>
          <li>
            <span className="text-gray-400">Documentation:</span>{' '}
            <ExternalLink 
              href="https://docs.minima.global" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              docs.minima.global
            </ExternalLink>
          </li>
          <li>
            <span className="text-gray-400">GitHub Repository:</span>{' '}
            <ExternalLink 
              href="https://github.com/minima-global/Minima" 
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              github.com/minima-global/Minima
            </ExternalLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">📋 About This Page</h2>
          <p className="text-gray-300 leading-relaxed">
            Running a Minima node is straightforward and can be done on various platforms including 
            desktop computers, mobile devices, Raspberry Pi, and cloud servers. Each node is a full 
            node, contributing to the network's decentralization and security.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            As of 2026, the Minima network is secured by over 100,000+ node operators globally, 
            making it one of the largest decentralized networks in the DePIN space.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Status legend:{' '}
            <StatusBadge status="confirmed" />{' '}
            <span className="text-gray-500">|</span>{' '}
            <StatusBadge status="in-development" />{' '}
            <span className="text-gray-500">|</span>{' '}
            <StatusBadge status="community" />
          </p>
        </section>

        {/* System Requirements */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">⚙️ System Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-3">Minimum Requirements</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>2 GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>10 GB free disk space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Java 11 or higher</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Stable internet connection</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-3">Recommended</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>4 GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>SSD storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Static IP address (for public nodes)</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Source:{' '}
            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node" 
              className="text-blue-400 hover:text-blue-300 underline"
            >
              docs.minima.global/docs/run-a-node
            </ExternalLink>
          </p>
        </section>

        {/* Why Run a Node */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Why Run a Node?</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                          transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Contribute to decentralization</span>
                  <p className="text-gray-400 text-xs">Help secure the network and maintain its distributed nature</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Enable peer-to-peer transactions</span>
                  <p className="text-gray-400 text-xs">Transact directly without intermediaries or trusted third parties</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Support DePIN growth</span>
                  <p className="text-gray-400 text-xs">Participate in decentralized physical infrastructure networks</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">Verify independently</span>
                  <p className="text-gray-400 text-xs">Validate transactions and data integrity on your own terms</p>
                </div>
              </li>
            </ul>
            <p className="text-gray-500 text-xs mt-4">
              Source:{' '}
              <ExternalLink 
                href="https://docs.minima.global/docs/core" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                docs.minima.global/docs/core
              </ExternalLink>
            </p>
          </div>
        </section>

        {/* Installation Guides */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">📥 Installation Guides by Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node/windows" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
              ariaLabel="Windows installation guide"
            >
              <span className="text-white font-medium text-sm group-hover:text-blue-300">🪟 Windows</span>
              <p className="text-gray-500 text-xs mt-1">Desktop installation for Windows</p>
            </ExternalLink>

            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node/android" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
              ariaLabel="Android installation guide"
            >
              <span className="text-white font-medium text-sm group-hover:text-blue-300">📱 Android</span>
              <p className="text-gray-500 text-xs mt-1">Run a full node on your phone</p>
            </ExternalLink>

            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node/mac" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
              ariaLabel="macOS installation guide"
            >
              <span className="text-white font-medium text-sm group-hover:text-blue-300">🍎 macOS</span>
              <p className="text-gray-500 text-xs mt-1">Desktop installation for Apple computers</p>
            </ExternalLink>

            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node/desktop-cli" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
              ariaLabel="Linux CLI installation guide"
            >
              <span className="text-white font-medium text-sm group-hover:text-blue-300">🐧 Linux (CLI)</span>
              <p className="text-gray-500 text-xs mt-1">Command-line interface for Linux desktops</p>
            </ExternalLink>

            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node/linux-vps-docker" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
              ariaLabel="Linux Docker installation guide"
            >
              <span className="text-white font-medium text-sm group-hover:text-blue-300">🐳 Linux (Docker)</span>
              <p className="text-gray-500 text-xs mt-1">Docker deployment for VPS</p>
            </ExternalLink>

            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node/linux-vps-service" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
              ariaLabel="Linux Systemd installation guide"
            >
              <span className="text-white font-medium text-sm group-hover:text-blue-300">⚙️ Linux (Systemd)</span>
              <p className="text-gray-500 text-xs mt-1">Systemd service for VPS</p>
            </ExternalLink>

            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node/docker-desktop" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
              ariaLabel="Docker Desktop installation guide"
            >
              <span className="text-white font-medium text-sm group-hover:text-blue-300">📦 Docker Desktop</span>
              <p className="text-gray-500 text-xs mt-1">Containerized deployment for desktop</p>
            </ExternalLink>

            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node/node-types#supported-devices" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 
                        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 
                        transition-all duration-200 block group"
              ariaLabel="Raspberry Pi installation guide"
            >
              <span className="text-white font-medium text-sm group-hover:text-blue-300">🥧 Raspberry Pi</span>
              <p className="text-gray-500 text-xs mt-1">Optimized for Pi 4+ devices</p>
            </ExternalLink>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            All guides:{' '}
            <ExternalLink 
              href="https://docs.minima.global/docs/run-a-node" 
              className="text-blue-400 hover:text-blue-300 underline"
            >
              docs.minima.global/docs/run-a-node
            </ExternalLink>
          </p>
        </section>

        {/* Advanced Node Types */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold text-white mb-4">🔧 Advanced Node Types</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Archive Node</h3>
              <p className="text-gray-300 text-sm mb-3">
                Full historical blockchain data storage for archival purposes and complete 
                transaction history verification.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/run-a-node/archive-node" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                → Setup Guide
              </ExternalLink>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Mega Node</h3>
              <p className="text-gray-300 text-sm mb-3">
                High-performance node configuration for maximum network contribution and 
                enhanced throughput capabilities.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/run-a-node/mega-node" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                → Setup Guide
              </ExternalLink>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Minima E-Gateway (MEG)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Enterprise-grade gateway for integrating Minima with external systems and 
                legacy infrastructure.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-500">Overview: </span>
                  <ExternalLink 
                    href="https://docs.minima.global/docs/run-a-node/meg-about" 
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Documentation
                  </ExternalLink>
                </p>
                <p>
                  <span className="text-gray-500">Setup: </span>
                  <ExternalLink 
                    href="https://docs.minima.global/docs/run-a-node/meg-setup" 
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Configuration Guide
                  </ExternalLink>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Node Configuration */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold text-white mb-4">⚙️ Node Configuration</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Node Types Overview</h3>
              <p className="text-gray-300 text-sm mb-3">
                Understanding different node configurations and their roles in the network 
                architecture.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/run-a-node/node-types" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                → Documentation
              </ExternalLink>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Firewall Rules</h3>
              <p className="text-gray-300 text-sm mb-3">
                Required network configurations and port forwarding for proper node operation 
                and peer connectivity.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/run-a-node/firewall-rules" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                → Configuration Guide
              </ExternalLink>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 
                            transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
              <h3 className="text-white font-medium mb-2">Startup Parameters</h3>
              <p className="text-gray-300 text-sm mb-3">
                Advanced configuration options and command-line flags for node initialization 
                and customization.
              </p>
              <ExternalLink 
                href="https://docs.minima.global/docs/run-a-node/startup-parameters" 
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                → Parameter Reference
              </ExternalLink>
            </div>
          </div>
        </section>

        {/* Universal Disclaimer Block */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8 
                        transition-all duration-200 hover:border-amber-600/70 
                        opacity-0 animate-fade-in-up delay-200">
          <p className="text-amber-200 text-sm">
            <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" className="underline hover:text-amber-100">
              Learn more
            </Link>
          </p>
        </div>

        {/* Last Updated */}
        <section className="border-t border-gray-700 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm">
            Last updated: February 17, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
