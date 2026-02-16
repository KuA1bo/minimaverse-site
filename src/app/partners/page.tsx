import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      {/* Header with Back button and GitHub icon */}
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl flex justify-between items-start">
          <div>
            <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold">Confirmed Partnerships</h1>
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
        <section className="mb-8">
          <p className="text-gray-300 mb-4">
            This page lists publicly confirmed partnerships and collaborations associated with the Minima ecosystem.
          </p>
          <p className="text-gray-300 mb-6">
            All entries include verifiable publication dates and official announcements. Only partnerships with public confirmation are included.
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Confirmed Partnerships (Chronological)</h2>
          
          <div className="space-y-5">
            {/* March 25, 2025 - Zeekr */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">March 25, 2025</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">Minima and Zeekr</h3>
              <p className="text-gray-400 text-sm mt-1">
                Developing an on-demand EV charging solution enabling secure access to private charging stations to solve accessibility challenges.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-x-zeekr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* March 3, 2025 - SchoolTry */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">March 3, 2025</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">SchoolTry</h3>
              <p className="text-gray-400 text-sm mt-1">
                Launching Minima blockchain curriculum in April 2025 to reach 2 million Nigerian students.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/schooltry_partners_with_minima" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* December 3, 2024 - Arm */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">December 3, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">Arm Flexible Access Program</h3>
              <p className="text-gray-400 text-sm mt-1">
                Minima applied to participate in Arm's program to advance development of the Minima chip.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/arm-and-minima" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* November 27, 2024 - Trust Exchange */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">November 27, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">Trust Exchange</h3>
              <p className="text-gray-400 text-sm mt-1">
                Partnership to pioneer decentralized real-world asset (RWA) verification with blockchain-based data attestation.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/trust-exchange-and-minima" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* October 17, 2024 - CPIN */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">October 17, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">CPIN</h3>
              <p className="text-gray-400 text-sm mt-1">
                Strategic partnership to secure renewable energy data using Minima's infrastructure.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-global-announces-strategic-partnership-with-cpin-to-secure-renewable-energy-data" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* July 24, 2024 - Mercury Global */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">July 24, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">Mercury Global</h3>
              <p className="text-gray-400 text-sm mt-1">
                Pilot project to create a decentralized alternative to SWIFT for global payment networks using Maxima protocol.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-partners-with-mercury-global-to-pilot-decentralised-swift-alternative-to-reshape-global-payment-networks" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* July 9, 2024 - Sfero */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">July 9, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">Sfero</h3>
              <p className="text-gray-400 text-sm mt-1">
                Partnership to revolutionize retail payment systems using Minima infrastructure.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-partners-with-sfero-to-revolutionize-retail-payments" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* June 12, 2024 - McLaren GT4 */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">June 12, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">McLaren GT4</h3>
              <p className="text-gray-400 text-sm mt-1">
                Minima powers world's first blockchain-based race data recorder for McLaren GT4 supercar at Spa.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-l1-blockchain-powers-the-worlds-first-on-chain-race-data-logger-for-mclaren-gt4-supercar-at-spa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* April 30, 2024 - OPP */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">April 30, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">OPP (Online Payment Platform)</h3>
              <p className="text-gray-400 text-sm mt-1">
                Bringing private EV charging stations worldwide to the $7.3B electric vehicle market through tokenized access.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-partners-with-opp-online-payment-platform-to-commodify-private-charging-points-worldwide-in-7-3b-ev-market" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* March 27, 2024 - ABB SynerLeap */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">March 27, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">ABB SynerLeap</h3>
              <p className="text-gray-400 text-sm mt-1">
                Collaboration with ABB's innovation hub to drive advancements in energy and industrial IoT.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-partners-with-abb-innovation-hub-synerleap-to-drive-innovation-in-energy-industrial-iot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* March 19, 2024 - Gaia-X */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">March 19, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">Gaia-X</h3>
              <p className="text-gray-400 text-sm mt-1">
                Minima joins Gaia-X initiative for European data infrastructure sovereignty.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-thrilled-to-announce-it-is-a-member-of-gaia-x" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* March 11, 2024 - Streamr */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">March 11, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">Streamr</h3>
              <p className="text-gray-400 text-sm mt-1">
                Partnership to pioneer secure real-time data streaming solutions on Minima infrastructure.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-partners-with-streamr-to-pioneer-secure-live-data-streaming" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* February 19, 2024 - Wicrypt */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">February 19, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">Wicrypt</h3>
              <p className="text-gray-400 text-sm mt-1">
                DePIN-focused partnership with Wicrypt Wi-Fi network to democratize internet access globally.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/minima-a-depin-focused-layer1-blockchain-is-joining-forces-with-wi-fi-network-wicrypt-to-democratise-internet-access" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>

            {/* February 14, 2024 - LTA Labs */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm text-gray-400">February 14, 2024</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
              </div>
              <h3 className="font-medium text-gray-200">LTA Labs</h3>
              <p className="text-gray-400 text-sm mt-1">
                Collaboration to develop a range of financial products leveraging Minima infrastructure.
              </p>
              <div className="text-sm text-gray-500 mt-1">
                Source: <a href="https://minima.global/post/lta-labs-partners-with-minima-to-power-its-financial-product-suite" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Announcement</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Inclusion Criteria</h2>
          <div className="space-y-3 text-gray-400 text-sm">
            <p>• Partnership must be publicly announced by official Minima channels</p>
            <p>• Publication date must be verifiable</p>
            <p>• Direct link to source (press release, official statement, or documentation)</p>
            <p>• No speculative, rumored, or unconfirmed collaborations</p>
            <p>• Academic/research collaborations require official institutional confirmation</p>
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

