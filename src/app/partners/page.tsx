import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Minimaverse
          </Link>
          <h1 className="text-3xl font-bold">Ecosystem & Research Partnerships</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-8">
          <p className="text-gray-300 mb-4">
            This page lists publicly confirmed partnerships, integrations, and research collaborations associated with the Minima ecosystem.
          </p>
          <p className="text-gray-300 mb-6">
            Only links with verifiable public sources are included.
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Confirmed Associations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200 mb-2">Integritas</h3>
              <p className="text-gray-400 text-sm mb-2">
                Integrity and verification systems for AI and distributed environments.
              </p>
              <a
                href="https://integritas.technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block"
              >
                Source: Official Website
              </a>
            </div>

            <div>
              <h3 className="font-medium text-gray-200 mb-2">Academic & Research Collaborations</h3>
              <p className="text-gray-400 text-sm mb-2">
                Protocol research and experimentation with academic institutions.
              </p>
              <p className="text-gray-500 text-xs">
                Status: <span className="text-yellow-400">Confirmed</span> — Links included only when official public confirmation exists.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Inclusion Criteria</h2>
          <div className="space-y-3 text-gray-400 text-sm">
            <p>
              • Partnership must be publicly announced by official channels
            </p>
            <p>
              • Direct link to source (press release, official statement, or documentation)
            </p>
            <p>
              • No speculative or unconfirmed collaborations
            </p>
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

