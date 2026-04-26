// src/app/nodes/page.tsx
// Nodes page - verified guides for running Minima nodes

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

// ExternalLink component for all external links with arrow icon
const ExternalLink = ({ 
  href, 
  children, 
  className = "",
  ariaLabel,
  hideArrow = false
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  ariaLabel?: string;
  hideArrow?: boolean;
}) => (
  <a 
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

// StatusBadge component for feature status indicators
const StatusBadge = ({ status, reducedGlow = false }: { status: 'confirmed' | 'in-development' | 'community', reducedGlow?: boolean }) => {
  const config = {
    'confirmed': { bg: 'bg-green-900/40', text: 'text-green-300', border: 'border-green-700/50', dot: 'bg-green-500', glow: reducedGlow ? 'shadow-green-500/25' : 'shadow-green-500/50' },
    'in-development': { bg: 'bg-yellow-900/40', text: 'text-yellow-300', border: 'border-yellow-700/50', dot: 'bg-yellow-500', glow: reducedGlow ? 'shadow-yellow-500/25' : 'shadow-yellow-500/50' },
    'community': { bg: 'bg-gray-700/40', text: 'text-gray-300', border: 'border-gray-600/50', dot: 'bg-gray-400', glow: reducedGlow ? 'shadow-gray-400/25' : 'shadow-gray-400/50' },
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
      {status === 'confirmed' ? 'confirmed' : status === 'in-development' ? 'in-development' : 'community-maintained'}
    </span>
  );
};

// Structured data for Schema.org ItemList (list of node guides)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Minima Node Setup Guide",
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
      
      {/* Structured data for SEO - ItemList schema */}
      <JsonLd data={structuredData} />

      {/* Unified Header with gradient accent */}
      <header className="mb-8 opacity-0 animate-fade-in-up delay-75 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex justify-between items-start">
          {/* Header text block */}
          <div className="relative inline-block w-full pb-3">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Minimaverse
            </Link>
            
            {/* Internal navigation links for SEO authority distribution */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Link href="/ecosystem" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">Ecosystem</Link>
              <span className="text-gray-700">•</span>
              <Link href="/partners" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">Partners</Link>
              <span className="text-gray-700">•</span>
              <Link href="/about" className="text-xs text-gray-500 hover:text-purple-400 transition-colors">What is Minima</Link>
            </div>
            
            {/* Updated H1 title for better SEO intent match */}
            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
                Minima Node Setup Guide
              </span>
            </h1>
            {/* Updated subtitle for clarity and keyword coverage */}
            <p className="text-gray-400">Verified guides for running Minima nodes on any platform</p>
            {/* Gradient accent line under subtitle */}
            <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
          </div>
          
          {/* GitHub icon - Desktop only (hidden on mobile), unified with homepage */}
          <div className="hidden sm:flex items-center justify-end relative -translate-x-10 mt-12 flex-shrink-0">
            {/* Glow */}
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

      {/* Primary Sources Box - matches /developers desktop style */}
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
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">About This Page</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <p className="text-gray-300 leading-relaxed relative">
              Running a Minima node is straightforward and can be done on various platforms including 
              desktop computers, mobile devices, Raspberry Pi, and cloud servers. Each node is a full 
              node, contributing to the network's decentralization and security.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 relative">
              As of 2026, the Minima network is secured by over 100,000+ node operators globally, 
              making it one of the largest decentralized networks in the DePIN space.
            </p>
            
            {/* Status legend - vertical on mobile with divider */}
            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <p className="text-gray-400 text-xs mb-2">Status legend:</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <StatusBadge status="confirmed" reducedGlow={true} />
                <span className="text-gray-500 hidden sm:inline">|</span>
                <StatusBadge status="in-development" reducedGlow={true} />
                <span className="text-gray-500 hidden sm:inline">|</span>
                <StatusBadge status="community" reducedGlow={true} />
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
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

        {/* Why Run a Node */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Why Run a Node?</span>
          </h2>
          
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <ul className="space-y-3">
              {[
                { title: 'Contribute to decentralization', desc: 'Help secure the network and maintain its distributed nature' },
                { title: 'Enable peer-to-peer transactions', desc: 'Transact directly without intermediaries or trusted third parties' },
                { title: 'Support DePIN growth', desc: 'Participate in decentralized physical infrastructure networks' },
                { title: 'Verify independently', desc: 'Validate transactions and data integrity on your own terms' }
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
          {/* Use Cases link moved outside container - matches site-wide pattern */}
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

        {/* Installation Guides by Platform */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">📥</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Installation Guides by Platform</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: 'https://docs.minima.global/docs/run-a-node/windows', icon: '🪟', title: 'Windows', desc: 'Desktop installation for Windows' },
              { href: 'https://docs.minima.global/docs/run-a-node/android', icon: '📱', title: 'Android', desc: 'Run a full node on your phone' },
              { href: 'https://docs.minima.global/docs/run-a-node/mac', icon: '🍎', title: 'macOS', desc: 'Desktop installation for Apple computers' },
              { href: 'https://docs.minima.global/docs/run-a-node/desktop-cli', icon: '🐧', title: 'Linux (CLI)', desc: 'Command-line interface for Linux desktops' },
              { href: 'https://docs.minima.global/docs/run-a-node/linux-vps-docker', icon: '🐳', title: 'Linux (Docker)', desc: 'Docker deployment for VPS' },
              { href: 'https://docs.minima.global/docs/run-a-node/linux-vps-service', icon: '⚙️', title: 'Linux (Systemd)', desc: 'Systemd service for VPS' },
              { href: 'https://docs.minima.global/docs/run-a-node/docker-desktop', icon: '📦', title: 'Docker Desktop', desc: 'Containerized deployment for desktop' },
              { href: 'https://docs.minima.global/docs/run-a-node/node-types#supported-devices', icon: '🥧', title: 'Raspberry Pi', desc: 'Optimized for Pi 4+ devices' },
            ].map((guide, index) => (
              <ExternalLink 
                key={index}
                href={guide.href} 
                className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 
                          hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 
                          transition-all duration-300 block group overflow-hidden"
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

        {/* Expert Guide by Minima Architect */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">✨</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Expert Guide</span>
          </h2>
          
          {/* Expert card with subtle pulsing border animation (defined in globals.css) */}
          <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6 
                          transition-transform duration-300 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 
                          group overflow-hidden hover:-translate-y-1 expert-card-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Attribution badge: left on mobile, right on desktop */}
            <div className="absolute top-4 left-4 sm:left-auto sm:right-4">
              <span className="text-xs text-purple-300 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                by Paddy Cherry
              </span>
            </div>
            
            {/* Content wrapper with balanced padding below absolute badge */}
            <div className="pt-6">
              <h3 className="text-white font-medium mb-2 relative">Alternative Setup Guide</h3>
              <p className="text-gray-300 text-sm mb-3 relative">
                Comprehensive walkthrough with peer lists, MDS configuration, and Docker deployment tips 
                from Minima Global architect. Includes ready-to-use commands and troubleshooting.
              </p>
              
              {/* Links section - Downloads first, then Guide */}
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

        {/* Advanced Node Types */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🔧</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Advanced Node Types</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { title: 'Archive Node', text: 'Full historical blockchain data storage for archival purposes and complete transaction history verification.', link: { href: 'https://docs.minima.global/docs/run-a-node/archive-node', text: '→ Setup Guide' } },
              { title: 'Mega Node', text: 'High-performance node configuration for maximum network contribution and enhanced throughput capabilities.', link: { href: 'https://docs.minima.global/docs/run-a-node/mega-node', text: '→ Setup Guide' } },
              { title: 'Minima E-Gateway (MEG)', text: 'Enterprise-grade gateway for integrating Minima with external systems and legacy infrastructure.', links: [
                { href: 'https://docs.minima.global/docs/run-a-node/meg-about', text: '→ Documentation' },
                { href: 'https://docs.minima.global/docs/run-a-node/meg-setup', text: '→ Configuration Guide' }
              ]}
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
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

        {/* Node Configuration */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Node Configuration</span>
          </h2>
          
          <div className="space-y-4">
            {[
              { title: 'Node Types Overview', text: 'Understanding different node configurations and their roles in the network architecture.', link: { href: 'https://docs.minima.global/docs/run-a-node/node-types', text: '→ Documentation' } },
              { title: 'Firewall Rules', text: 'Required network configurations and port forwarding for proper node operation and peer connectivity.', link: { href: 'https://docs.minima.global/docs/run-a-node/firewall-rules', text: '→ Configuration Guide' } },
              { title: 'Startup Parameters', text: 'Advanced configuration options and command-line flags for node initialization and customization.', link: { href: 'https://docs.minima.global/docs/run-a-node/startup-parameters', text: '→ Parameter Reference' } },
            ].map((item, index) => (
              <div key={index} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 
                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden hover:-translate-y-1">
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

        {/* Universal Disclaimer Block */}
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
            <Link href="/disclaimer" className="underline hover:text-amber-100 decoration-amber-500/50 hover:decoration-amber-400 underline-offset-4 transition-all duration-300">
              Learn more
            </Link>
          </p>
        </div>

        {/* Last Updated */}
        <section className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-300">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Last updated: April 26, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
