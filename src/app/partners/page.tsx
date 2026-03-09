// src/app/partners/page.tsx
// Partners page - verified confirmed partnerships in the Minima ecosystem

import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Unified Header */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4"
            >
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Confirmed Partnerships</h1>
            <p className="text-gray-400">Publicly verified collaborations and integrations</p>
          </div>
          <a 
            href="https://github.com/KuA1bo/minimaverse-site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="View source on GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Primary Sources Box */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8">
        <h3 className="text-white font-medium mb-3">📚 Primary Sources for This Page</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-400">Official Blog:</span>{' '}
            <a 
              href="https://minima.global/blog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              minima.global/blog
            </a>
          </li>
          <li>
            <span className="text-gray-400">Documentation:</span>{' '}
            <a 
              href="https://docs.minima.global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              docs.minima.global
            </a>
          </li>
          <li>
            <span className="text-gray-400">GitHub:</span>{' '}
            <a 
              href="https://github.com/minima-global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              github.com/minima-global
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-300 leading-relaxed">
            This page lists publicly confirmed partnerships and collaborations associated with 
            the Minima ecosystem. All entries include verifiable publication dates and official 
            announcements. Only partnerships with public confirmation are included.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Status legend:{' '}
            <span className="text-green-500">● confirmed</span>{' '}
            <span className="text-gray-500">|</span>{' '}
            <span className="text-yellow-500">● in-development</span>{' '}
            <span className="text-gray-500">|</span>{' '}
            <span className="text-gray-500">● community-maintained</span>
          </p>
        </section>

        {/* Confirmed Partnerships Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Confirmed Partnerships (Chronological)</h2>
          
          <div className="space-y-4">
            {/* Zeekr - March 25, 2025 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 25, 2025</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">Minima and Zeekr</h3>
              <p className="text-gray-300 text-sm mb-3">
                Developing an on-demand EV charging solution enabling secure access to private 
                charging stations to solve accessibility challenges.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-x-zeekr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* SchoolTry - March 3, 2025 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 3, 2025</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">SchoolTry</h3>
              <p className="text-gray-300 text-sm mb-3">
                Launching Minima blockchain curriculum in April 2025 to reach 2 million 
                Nigerian students.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/schooltry_partners_with_minima" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* Arm - December 3, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">December 3, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">Arm Flexible Access Program</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima applied to participate in Arm's program to advance development of 
                the Minima chip.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/arm-and-minima" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* Trust Exchange - November 27, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">November 27, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">Trust Exchange</h3>
              <p className="text-gray-300 text-sm mb-3">
                Partnership to pioneer decentralized real-world asset (RWA) verification 
                with blockchain-based data attestation.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/trust-exchange-and-minima" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* CPIN - October 17, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">October 17, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">CPIN</h3>
              <p className="text-gray-300 text-sm mb-3">
                Strategic partnership to secure renewable energy data using Minima's 
                infrastructure.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-global-announces-strategic-partnership-with-cpin-to-secure-renewable-energy-data" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* Mercury Global - July 24, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">July 24, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">Mercury Global</h3>
              <p className="text-gray-300 text-sm mb-3">
                Pilot project to create a decentralized alternative to SWIFT for global 
                payment networks using Minima protocol.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-partners-with-mercury-global-to-pilot-decentralised-swift-alternative-to-reshape-global-payment-networks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* Sfero - July 9, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">July 9, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">Sfero</h3>
              <p className="text-gray-300 text-sm mb-3">
                Partnership to revolutionize retail payment systems using Minima infrastructure.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-partners-with-sfero-to-revolutionize-retail-payments" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* McLaren GT4 - June 12, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">June 12, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">McLaren GT4</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima powers world's first blockchain-based race data recorder for 
                McLaren GT4 supercar at Spa.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-l1-blockchain-powers-the-worlds-first-on-chain-race-data-logger-for-mclaren-gt4-supercar-at-spa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* OPP - April 30, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">April 30, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">OPP (Online Payment Platform)</h3>
              <p className="text-gray-300 text-sm mb-3">
                Bringing private EV charging stations worldwide to the $7.3B electric 
                vehicle market through tokenized access.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-partners-with-opp-online-payment-platform-to-commodify-private-charging-points-worldwide-in-7-3b-ev-market" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* ABB SynerLeap - March 27, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 27, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">ABB SynerLeap</h3>
              <p className="text-gray-300 text-sm mb-3">
                Collaboration with ABB's innovation hub to drive advancements in energy 
                and industrial IoT.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-partners-with-abb-innovation-hub-synerleap-to-drive-innovation-in-energy-industrial-iot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* Gaia-X - March 19, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 19, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">Gaia-X</h3>
              <p className="text-gray-300 text-sm mb-3">
                Minima joins Gaia-X initiative for European data infrastructure sovereignty.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-thrilled-to-announce-it-is-a-member-of-gaia-x" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* Streamr - March 11, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">March 11, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">Streamr</h3>
              <p className="text-gray-300 text-sm mb-3">
                Partnership to pioneer secure real-time data streaming solutions on 
                Minima infrastructure.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-partners-with-streamr-to-pioneer-secure-live-data-streaming" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* Wicrypt - February 19, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">February 19, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">Wicrypt</h3>
              <p className="text-gray-300 text-sm mb-3">
                DePIN-focused partnership with Wicrypt Wi-Fi network to democratize 
                internet access globally.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/minima-a-depin-focused-layer1-blockchain-is-joining-forces-with-wi-fi-network-wicrypt-to-democratise-internet-access" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>

            {/* LTA Labs - February 14, 2024 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">February 14, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="text-white font-medium mb-2">LTA Labs</h3>
              <p className="text-gray-300 text-sm mb-3">
                Collaboration to develop a range of financial products leveraging 
                Minima infrastructure.
              </p>
              <p className="text-gray-500 text-xs">
                Source:{' '}
                <a 
                  href="https://minima.global/post/lta-labs-partners-with-minima-to-power-its-financial-product-suite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Official Announcement
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Inclusion Criteria */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Inclusion Criteria</h2>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">Partnership must be publicly announced by official Minima channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">Publication date must be verifiable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">Direct link to source (press release, official statement, or documentation)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">No speculative, rumored, or unconfirmed collaborations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">Academic/research collaborations require official institutional confirmation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Universal Disclaimer Block - REQUIRED ON EVERY PAGE */}
        <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-8">
          <p className="text-amber-200 text-sm">
            <strong>⚠️ Disclaimer:</strong> This site does not represent the official Minima team. 
            All information is compiled from publicly available sources.{' '}
            <Link href="/disclaimer" className="underline hover:text-amber-100">
              Learn more
            </Link>
          </p>
        </div>

        {/* Last Updated */}
        <section className="border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            Last updated: February 17, 2026
          </p>
        </section>

      </article>
    </div>
  );
}
