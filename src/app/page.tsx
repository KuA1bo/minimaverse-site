import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold">Minimaverse</h1>
          <p className="text-gray-400 mt-3">
            Device-first blockchain • Full nodes everywhere • Infrastructure, not hype
          </p>
          <p className="text-gray-500 mt-1 text-sm">
            Community-driven information hub for the Minima protocol
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <Link 
              href="/protocol" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500/10 transition-colors"
            >
              How Minima Works
            </Link>
            <Link 
              href="/nodes" 
              className="inline-flex items-center justify-center px-6 py-3 mt-3 sm:mt-0 text-gray-400 hover:text-blue-400 transition-colors"
            >
              Run a Node
            </Link>
          </div>
          
          <p className="mt-4 text-xs text-gray-600">
            All information sourced from official Minima documentation
          </p>
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

      <footer className="border-t border-gray-700 py-6 mt-8">
        <div className="container mx-auto px-4 max-w-4xl text-center text-gray-500 text-sm">
          <p>Minimaverse — Community-driven information hub</p>
          <p className="mt-1">Data verified from official sources</p>
        </div>
      </footer>
    </div>
  );
}
