import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import CopyableEndpoint from '@/components/CopyableEndpoint';

import { getCanonicalMetadata } from '@/lib/seo';

export const metadata = getCanonicalMetadata('/nodes');

const ExternalLink = ({
  href,
  children,
  className = "",
  ariaLabel,
  hideArrow = false,
  id
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  hideArrow?: boolean;
  id?: string;
}) => (
  <a
    id={id}
    href={href.trim()}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 ${className}`}
    aria-label={ariaLabel}
  >
    {children}
    {!hideArrow && (
      <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )}
  </a>
);

const StatusBadge = ({ status, reducedGlow = false }: { status: 'confirmed' | 'in-development' | 'community' | 'expert-verified', reducedGlow?: boolean }) => {
  const config = {
    'confirmed': { bg: 'bg-green-900/40', text: 'text-green-300', border: 'border-green-700/50', dot: 'bg-green-500', glow: reducedGlow ? 'shadow-green-500/25' : 'shadow-green-500/50' },
    'in-development': { bg: 'bg-yellow-900/40', text: 'text-yellow-300', border: 'border-yellow-700/50', dot: 'bg-yellow-500', glow: reducedGlow ? 'shadow-yellow-500/25' : 'shadow-yellow-500/50' },
    'community': { bg: 'bg-gray-700/40', text: 'text-gray-300', border: 'border-gray-600/50', dot: 'bg-gray-400', glow: reducedGlow ? 'shadow-gray-400/25' : 'shadow-gray-400/50' },
    'expert-verified': { bg: 'bg-purple-900/40', text: 'text-purple-300', border: 'border-purple-700/50', dot: 'bg-purple-500', glow: reducedGlow ? 'shadow-purple-500/25' : 'shadow-purple-500/50' },
  };
  const style = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${style.bg} ${style.text} text-xs font-medium border ${style.border} shadow-lg ${style.glow} transition-all duration-300 hover:scale-105`}>
      <span className="relative flex h-2 w-2">
        {status === 'in-development' && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dot} animate-pulse`} />
      </span>
      {status === 'confirmed' ? 'confirmed' : status === 'in-development' ? 'in-development' : status === 'expert-verified' ? 'expert-verified' : 'community-maintained'}
    </span>
  );
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Minima Node Setup & Installation Guide",
  "description": "Verified guides for running Minima nodes on any platform: Windows, Android, macOS, Linux, Docker, Raspberry Pi.",
  "url": "https://minimaverse.com/nodes",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Windows Node Setup", "url": "https://docs.minima.global/docs/run-a-node/windows" },
    { "@type": "ListItem", "position": 2, "name": "Android Node Setup", "url": "https://docs.minima.global/docs/run-a-node/android" },
    { "@type": "ListItem", "position": 3, "name": "macOS Node Setup", "url": "https://docs.minima.global/docs/run-a-node/mac" },
    { "@type": "ListItem", "position": 4, "name": "Linux CLI Node Setup", "url": "https://docs.minima.global/docs/run-a-node/desktop-cli" },
    { "@type": "ListItem", "position": 5, "name": "Docker Node Deployment", "url": "https://docs.minima.global/docs/run-a-node/linux-vps-docker" }
  ],
  "isPartOf": {
    "@type": "WebSite",
    "name": "Minimaverse",
    "url": "https://minimaverse.com"
  }
};

export default function NodesPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">

      <JsonLd data={structuredData} />

      <header className="mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex justify-between items-start">
          <div className="relative inline-block w-full pb-3">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>

            <div className="flex flex-wrap items-center gap-1.5 mb-3 text-sm">
              <Link href="/protocol" className="text-gray-400 hover:text-purple-400 transition-colors">Protocol</Link>
              <span className="text-gray-600">•</span>
              <Link href="/tools" className="text-gray-400 hover:text-purple-400 transition-colors">Tools</Link>
              <span className="text-gray-600">•</span>
              <Link href="/developers" className="text-gray-400 hover:text-purple-400 transition-colors">Developers</Link>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Minima Node Setup & Installation Guide
              </span>
            </h1>
            <p className="text-gray-400">Verified guides for running Minima nodes on any platform</p>
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>

          <div className="hidden sm:flex items-center justify-end relative -translate-x-10 mt-12 flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500/80 rounded-full blur-lg" />
            </div>
            <ExternalLink
              href="https://github.com/KuA1bo/minimaverse-site"
              className="relative text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 z-10"
              ariaLabel="View source on GitHub"
              hideArrow={true}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </ExternalLink>
          </div>
        </div>
      </header>

      <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 mb-8
                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15
                      opacity-0 animate-fade-in-up delay-150 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />

        <div className="relative">
          <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
            <span className="text-2xl">📚</span> Primary Sources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink
                href="https://docs.minima.global"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs md:text-sm"
              >
                docs.minima.global
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Documentation</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink
                href="https://docs.minima.global/docs/run-a-node"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs md:text-sm"
              >
                docs.minima.global/docs/run-a-node
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Run a Node Guide</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="hidden md:inline text-gray-400">•</span>
              <ExternalLink
                href="https://github.com/minima-global/Minima/tree/master/jar"
                className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 break-all text-xs md:text-sm"
              >
                github.com/minima-global/Minima/tree/master/jar
              </ExternalLink>
              <span className="hidden md:inline text-gray-500">—</span>
              <span className="text-gray-500 text-xs md:text-sm">Latest Builds</span>
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-700/40 text-xs text-gray-500">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3 flex-wrap">
              <span className="block sm:inline">Status indicators:</span>
              <span className="text-green-300">• confirmed</span>
              <span className="text-purple-300">• expert-verified</span>
              <span className="text-yellow-300">• in-development</span>
              <span className="text-gray-300">• community-maintained</span>
            </div>
          </div>
        </div>
      </div>

      <section id="intro" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-2xl">📋</span>
          <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Page</span>
        </h2>

        <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                        transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          <p className="text-gray-300 leading-relaxed relative">
            Running a Minima node is a standard process and can be done on various platforms including
            desktop computers, mobile devices, Raspberry Pi, and cloud servers. Each node is a full
            node, contributing to the network's decentralization and security.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 relative">
            Public reports from Minima indicate over 100,000 node installations globally.
          </p>
        </div>
      </section>

      <div className="relative bg-blue-900/20 border border-blue-700/40 rounded-2xl p-4 sm:p-6 mb-8
                      transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10
                      opacity-0 animate-fade-in-up delay-200 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-white font-medium mb-1">Setup Entry Points</h3>
            <p className="text-gray-400 text-sm">Initial node configuration paths for common environments.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start">
            <ExternalLink
              href="https://docs.minima.global/docs/run-a-node/android"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              📱 Android
            </ExternalLink>
            <ExternalLink
              href="https://docs.minima.global/docs/run-a-node/linux-vps-docker"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              🐳 Docker
            </ExternalLink>
            <ExternalLink
              href="https://minidapps.minima.global/"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              🧩 MiniDapps
            </ExternalLink>
          </div>
        </div>
      </div>

      <section id="peer-configuration" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-250">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-2xl">🔗</span>
          <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Initial Peer Configuration</span>
        </h2>

        <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                        transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15
                        group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="mb-4 pb-4 border-b border-gray-700/40">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <StatusBadge status="community" reducedGlow={true} />
              <span className="text-gray-500">Note: Resource maintained by Paddy Cerri (Co-Founder & Chief Architect, Minima Global)</span>
            </div>
          </div>

          <div className="relative">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Initial network discovery requires valid peer endpoints.
              A public list of active nodes is available for initial synchronization.
            </p>

            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>Format: Plain text (one peer per line)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>Usage: Import contents via Minima app → Add Peers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>Verification: Verify peer endpoints before connecting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-500 text-xs mt-3 flex flex-col gap-1.5">
          <p>
            Attribution:{' '}
            <ExternalLink
              href="https://spartacusrex.com"
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              spartacusrex.com
            </ExternalLink>
          </p>
          <p>
            Source:{' '}
            <ExternalLink
              href="https://spartacusrex.com/minimapeers.txt"
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              Public Peer List (minimapeers.txt)
            </ExternalLink>
          </p>
        </div>
      </section>

      <section id="keyuses-guidance" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-275">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
            KeyUses During Seed Resync
          </span>
        </h2>

        <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                        transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15
                        group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          <p className="text-gray-300 leading-relaxed mb-6 relative">
            Incorrect KeyUses management during seed resync may lead to WOTS signature reuse. Follow official recommendations to maintain correct key usage.
          </p>

          <div className="space-y-4 text-sm text-gray-300 relative">
            <div>
              <h3 className="text-white font-semibold mb-1">What are KeyUses?</h3>
              <p>Every Minima transaction uses a Winternitz One-Time Signature (WOTS). These signatures are designed to be used exactly once. When you perform a seed resync, you must tell your node how many signatures have already been used.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-1">Why it matters</h3>
              <p>If you repeatedly perform a seed resync using the same KeyUses value (e.g., leaving it at the default 1000), you risk reusing signatures. Once enough cryptographic information is exposed, an attacker may be able to reconstruct your private key.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-1">Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong className="text-gray-200">Increment on Resync:</strong> Increase the KeyUses value by approximately the number of transactions made since your last resync.</li>
                <li><strong className="text-gray-200">Baseline:</strong> For most users, increasing it by 1,000 each time is a reasonable baseline.</li>
                <li><strong className="text-gray-200">Heavy Users:</strong> If you regularly use MiniDapps over several months, you may need to increase it by considerably more.</li>
                <li><strong className="text-gray-200">Monitoring:</strong> Users may monitor KeyUses using compatible ecosystem tools, including the KeyUses MiniDapp.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-1">Technical Limit</h3>
              <p>The maximum KeyUses value available is 262,144.</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative">
            <div className="flex items-center gap-2">
              <StatusBadge status="confirmed" reducedGlow={true} />
              <span className="text-xs text-gray-500">Operational Guidance</span>
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
              <span>Official Telegram Bot</span>
              <span className="text-gray-600">•</span>
              <ExternalLink
                href="https://docs.minima.global/docs/learn/keys-signatures#digital-signature-schemes"
                className="text-blue-400 hover:text-purple-400 transition-colors"
              >
                Official Documentation (WOTS)
              </ExternalLink>
              <span className="text-gray-600">•</span>
              <span>Support: querysupport@minima.global</span>
            </div>
          </div>
        </div>
      </section>

      <section id="node-recovery" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-2xl">🔒</span>
          <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Node Recovery</span>
        </h2>

        <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                        transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15
                        group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="mb-4 pb-4 border-b border-gray-700/40">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <StatusBadge status="confirmed" reducedGlow={true} />
              <span className="text-gray-500">Note: Based on official Minima documentation</span>
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              Recovery methods for restoring node access, wallet state, and chain synchronization.
            </p>
            <p className="text-gray-400 text-xs">
              All recovery operations are performed via the Security MiniDapp interface.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex flex-col gap-1.5 p-3 bg-gray-900/30 rounded-lg border border-gray-700/30">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-white font-medium">Chain Resync</span>
                </div>
                <p className="text-gray-400 text-xs pl-5">
                  Restore chain synchronization and update wallet state.
                </p>
                <div className="pl-5">
                  <ExternalLink
                    href="https://docs.minima.global/docs/user-guides/node-recovery/chain-resync"
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-xs"
                  >
                    → View Source
                  </ExternalLink>
                </div>
              </li>

              <li className="flex flex-col gap-1.5 p-3 bg-gray-900/30 rounded-lg border border-gray-700/30">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-white font-medium">Import Seed Phrase</span>
                </div>
                <p className="text-gray-400 text-xs pl-5">
                  Restore wallet access from a 24-word recovery phrase.
                </p>
                <div className="pl-5">
                  <ExternalLink
                    href="https://docs.minima.global/docs/user-guides/node-recovery/import-seed-phrase"
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-xs"
                  >
                    → View Source
                  </ExternalLink>
                </div>
              </li>

              <li className="flex flex-col gap-1.5 p-3 bg-gray-900/30 rounded-lg border border-gray-700/30">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-white font-medium">Restore Backup</span>
                </div>
                <p className="text-gray-400 text-xs pl-5">
                  Recover a node from a previously created backup.
                </p>
                <div className="pl-5">
                  <ExternalLink
                    href="https://docs.minima.global/docs/user-guides/node-recovery/restore-backup"
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-xs"
                  >
                    → View Source
                  </ExternalLink>
                </div>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-700/40">
              <h4 className="text-white text-xs font-medium mb-2 flex items-center gap-2">
                <span>⚠️</span> Critical Notes
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>QuickSync is generally faster than archive synchronization.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <span>MegaMMR endpoints available for QuickSync:</span>
                  </span>
                  <div className="flex flex-col gap-1">
                    <CopyableEndpoint endpoint="eurobuddha.com:9001" />
                    <CopyableEndpoint endpoint="spartacusrex.com:9001" />
                    <CopyableEndpoint endpoint="megammr.minima.global:9001" />
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>Do not use other MiniDapps during synchronization.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-xs mt-3">
          Source:{' '}
          <ExternalLink
            href="https://docs.minima.global/docs/user-guides/node-recovery/recovery-options"
            className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
          >
            Node Recovery Options
          </ExternalLink>
        </p>
      </section>

      <section id="cold-storage" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-2xl">🧊</span>
          <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Cold Storage Setup</span>
        </h2>

        <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                        transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15
                        group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="mb-4 pb-4 border-b border-gray-700/40">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <StatusBadge status="confirmed" reducedGlow={true} />
              <span className="text-gray-500">Note: Based on official Minima documentation</span>
            </div>
          </div>

          <div className="relative">
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              Offline signing workflow for securing private keys and reducing online exposure.
            </p>
            <p className="text-gray-400 text-xs">
              Recommended for advanced users requiring offline transaction signing.
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-xs mt-3">
          Source:{' '}
          <ExternalLink
            href="https://docs.minima.global/docs/user-guides/advanced/cold-storage"
            className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
          >
            Advanced Cold Storage Guide
          </ExternalLink>
        </p>
      </section>

      <article className="prose prose-invert max-w-none">

        <section id="requirements" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">System Requirements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-white font-medium mb-3 relative">Minimum Requirements</h3>
              <ul className="space-y-2 text-gray-400 text-sm relative">
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

            <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                            transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-white font-medium mb-3 relative">Recommended</h3>
              <ul className="space-y-2 text-gray-400 text-sm relative">
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
              href="https://docs.minima.global/docs/run-a-node/node-types#supported-devices"
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              Node Types: Supported devices & Minimum specs
            </ExternalLink>
          </p>
        </section>

        <section id="why-run" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Why Run a Node?</span>
          </h2>

          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <ul className="space-y-3">
              {[
                { title: 'Support decentralized infrastructure', desc: 'Contribute to decentralized infrastructure by hosting reliable, secure nodes' },
                { title: 'Enable peer-to-peer applications', desc: 'Power direct transactions and messaging without intermediaries or trusted third parties' },
                { title: 'Support network reliability', desc: 'Every additional node increases Minima\'s resistance to attacks and single points of failure' },
                { title: 'Verify independently', desc: 'Validate transactions and data integrity on your own terms, with independent verification' }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 relative">
                  <span className="text-blue-400 mt-1">✓</span>
                  <div>
                    <span className="text-white font-medium text-sm">{item.title}</span>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Source:{' '}
            <ExternalLink
              href="https://docs.minima.global/docs/core/use-cases"
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              docs.minima.global/docs/core/use-cases
            </ExternalLink>
          </p>
        </section>

        <section id="installation" className="mb-10 opacity-0 animate-fade-in-up delay-300 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📥</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Installation Guides by Platform</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'windows', href: 'https://docs.minima.global/docs/run-a-node/windows', icon: '🪟', title: 'Windows', desc: 'Desktop installation for Windows' },
              { id: 'android', href: 'https://docs.minima.global/docs/run-a-node/android', icon: '📱', title: 'Android', desc: 'Run a full node on your phone' },
              { id: 'macos', href: 'https://docs.minima.global/docs/run-a-node/mac', icon: '🍎', title: 'macOS', desc: 'Desktop installation for Apple computers' },
              { id: 'linux-cli', href: 'https://docs.minima.global/docs/run-a-node/desktop-cli', icon: '🐧', title: 'Linux (CLI)', desc: 'Command-line interface for Linux desktops' },
              { id: 'docker', href: 'https://docs.minima.global/docs/run-a-node/linux-vps-docker', icon: '🐳', title: 'Linux (Docker)', desc: 'Docker deployment for VPS' },
              { id: 'linux-systemd', href: 'https://docs.minima.global/docs/run-a-node/linux-vps-service', icon: '⚙️', title: 'Linux (Systemd)', desc: 'Systemd service for VPS' },
              { id: 'docker-desktop', href: 'https://docs.minima.global/docs/run-a-node/docker-desktop', icon: '📦', title: 'Docker Desktop', desc: 'Containerized deployment for desktop' },
              { id: 'raspberry-pi', href: 'https://docs.minima.global/docs/run-a-node/node-types#supported-devices', icon: '🥧', title: 'Raspberry Pi', desc: 'Optimized for Pi 4+ devices' },
            ].map((guide, index) => (
              <ExternalLink
                key={index}
                id={guide.id}
                href={guide.href}
                className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4
                          hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15
                          transition-all duration-300 block group overflow-hidden scroll-mt-20"
                ariaLabel={`${guide.title} installation guide`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-white font-medium text-sm group-hover:text-purple-300 relative">{guide.icon} {guide.title}</span>
                <p className="text-gray-500 text-xs mt-1 relative">{guide.desc}</p>
              </ExternalLink>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-3">
            All guides:{' '}
            <ExternalLink
              href="https://docs.minima.global/docs/run-a-node"
              className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
            >
              docs.minima.global/docs/run-a-node
            </ExternalLink>
          </p>
        </section>

        <section id="expert-guide" className="scroll-mt-20 mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">✨</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Expert Guide</span>
          </h2>

          <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6
                          transition-transform duration-300 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20
                          group overflow-hidden hover:-translate-y-1 expert-card-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="mb-4 pb-4 border-b border-purple-500/20">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <StatusBadge status="expert-verified" reducedGlow={true} />
                <span className="text-purple-300/70">Note: by Paddy Cerri (Co-Founder & Chief Architect, Minima Global)</span>
              </div>
            </div>

            <div className="relative">
              <h3 className="text-white font-medium mb-2">Alternative Setup Guide</h3>
              <p className="text-gray-300 text-sm mb-3">
                Alternative setup guide with peer configuration, Docker deployment, and operational notes.
              </p>

              <div className="space-y-2">
                <ExternalLink
                  href="https://spartacusrex.com/downloads.html"
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/30 hover:decoration-purple-400/60 underline-offset-4 transition-all duration-300 text-sm relative inline-flex items-center gap-1"
                >
                  <span className="text-base">⬇️</span>
                  spartacusrex.com/downloads
                </ExternalLink>
                <br />
                <ExternalLink
                  href="https://spartacusrex.com/run-a-node.html"
                  className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/30 hover:decoration-purple-400/60 underline-offset-4 transition-all duration-300 text-sm relative inline-flex items-center gap-1"
                >
                  <span className="text-base">📖</span>
                  spartacusrex.com/run-a-node
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section id="advanced-nodes" className="mb-10 opacity-0 animate-fade-in-up delay-75 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🔧</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Advanced Node Types</span>
          </h2>

          <div className="space-y-4">
            {[
              { id: 'archive-node', title: 'Archive Node', text: 'Full historical blockchain data storage for archival purposes and complete transaction history verification.', link: { href: 'https://docs.minima.global/docs/run-a-node/archive-node', text: '→ Setup Guide' } },
              { id: 'mega-node', title: 'Mega Node', text: 'High-performance node configuration designed for increased throughput.', link: { href: 'https://docs.minima.global/docs/run-a-node/mega-node', text: '→ Setup Guide' } },
              { id: 'meg', title: 'Minima E-Gateway (MEG)', text: 'Enterprise-grade gateway for integrating Minima with external systems and legacy infrastructure.', links: [
                { href: 'https://docs.minima.global/docs/run-a-node/meg-about', text: '→ Documentation' },
                { href: 'https://docs.minima.global/docs/run-a-node/meg-setup', text: '→ Configuration Guide' }
              ]}
            ].map((item, index) => (
              <div key={index} id={item.id} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1 scroll-mt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                {item.link && (
                  <ExternalLink
                    href={item.link.href}
                    className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm relative"
                  >
                    {item.link.text}
                  </ExternalLink>
                )}
                {item.links && (
                  <div className="space-y-2 text-sm relative">
                    {item.links.map((link, linkIndex) => (
                      <p key={linkIndex}>
                        <ExternalLink
                          href={link.href}
                          className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300"
                        >
                          {link.text}
                        </ExternalLink>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="configuration" className="mb-10 opacity-0 animate-fade-in-up delay-150 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Node Configuration</span>
          </h2>

          <div className="space-y-4">
            {[
              { id: 'node-types', title: 'Node Types Overview', text: 'Understanding different node configurations and their roles in the network architecture.', link: { href: 'https://docs.minima.global/docs/run-a-node/node-types', text: '→ Documentation' } },
              { id: 'firewall', title: 'Firewall Rules', text: 'Required network configurations and port forwarding for proper node operation and peer connectivity.', link: { href: 'https://docs.minima.global/docs/run-a-node/firewall-rules', text: '→ Configuration Guide' } },
              { id: 'startup', title: 'Startup Parameters', text: 'Advanced configuration options and command-line flags for node initialization and customization.', link: { href: 'https://docs.minima.global/docs/run-a-node/startup-parameters', text: '→ Parameter Reference' } },
            ].map((item, index) => (
              <div key={index} id={item.id} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6
                                      transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1 scroll-mt-20">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <h3 className="text-white font-medium mb-2 relative">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 relative">{item.text}</p>
                <ExternalLink
                  href={item.link.href}
                  className="text-blue-400 hover:text-purple-400 underline decoration-blue-500/30 hover:decoration-purple-500/60 underline-offset-4 transition-all duration-300 text-sm relative"
                >
                  {item.link.text}
                </ExternalLink>
              </div>
            ))}
          </div>
        </section>

        <div className="relative bg-amber-900/20 border border-amber-700/50 rounded-2xl p-6 mb-8
                        transition-all duration-300 hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-500/10
                        opacity-0 animate-fade-in-up delay-200 group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-500 to-orange-500" />
          <p className="text-amber-200 text-sm leading-relaxed">
            <strong className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚠️</span>
              Disclaimer:
            </strong>
            This site does not represent the official Minima team.
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" aria-label="Read full disclaimer" className="underline hover:text-amber-100 decoration-amber-500/50 hover:decoration-amber-400 underline-offset-4 transition-all duration-300">
              Learn more
            </Link>
          </p>
        </div>

        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: July 19, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
