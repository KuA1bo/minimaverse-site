import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-12">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
          <div className="flex-1">
            <p className="text-gray-500 text-lg">
              Community-driven information hub for the Minima protocol
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Link 
                href="/protocol" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500/10 transition-colors min-w-[200px]"
              >
                How Minima Works
              </Link>
              <Link 
                href="/nodes" 
                className="inline-flex items-center justify-center px-6 py-3 mt-3 sm:mt-0 border-2 border-gray-600 text-gray-400 hover:text-blue-400 hover:border-blue-500 transition-colors min-w-[200px]"
              >
                Run a Node
              </Link>
            </div>
            
            <p className="mt-6 text-xs text-gray-600 max-w-2xl">
              All information sourced from official Minima documentation and verified public announcements
            </p>
          </div>
          
          <div className="flex items-start justify-end">
            <a 
              href="https://github.com/KuA1bo/minimaverse-site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="View source on GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">About This Site</h2>
          <p className="text-gray-300 mb-4">
            Minimaverse is an independent, community-driven information hub dedicated to the Minima protocol. This site provides verified technical information, documentation links, and ecosystem resources for developers, researchers, and institutional observers.
          </p>
          <p className="text-gray-300 mb-4">
            We focus on factual, hype-free content with clear sourcing and transparent status indicators for all information.
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Project Principles</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">1. Verified Facts Only</h3>
              <p className="text-gray-300">
                All information is sourced from official documentation, whitepapers, or publicly verified announcements. No speculation, price predictions, or unconfirmed rumors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">2. Transparent Sourcing</h3>
              <p className="text-gray-300">
                Every fact includes a link to its primary source. One fact = one verified source.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">3. Clear Status Indicators</h3>
              <p className="text-gray-300">
                All features and projects are marked with clear status labels: confirmed, in development, or experimental.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">4. Neutral Tone</h3>
              <p className="text-gray-300">
                No marketing language, hype, or subjective evaluations. Just facts.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-300 mb-2">Protocol Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="text-blue-400 hover:underline">
                    → What is Minima
                  </Link>
                </li>
                <li>
                  <Link href="/ecosystem" className="text-blue-400 hover:underline">
                    → Ecosystem
                  </Link>
                </li>
                <li>
                  <Link href="/timeline" className="text-blue-400 hover:underline">
                    → Verified Milestones (Timeline)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-300 mb-2">For Developers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/developers" className="text-blue-400 hover:underline">
                    → Developer Resources
                  </Link>
                </li>
                <li>
                  <Link href="/nodes" className="text-blue-400 hover:underline">
                    → Run a Node
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="text-blue-400 hover:underline">
                    → Tools & Utilities
                  </Link>
                </li>
              </ul>
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
    </div>
  );
}

