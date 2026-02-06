import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Minimaverse
          </Link>
          <h1 className="text-3xl font-bold">News & Updates</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-8">
          <p className="text-gray-300 mb-4">
            This page aggregates official public communications related to Minima.
          </p>
          <p className="text-gray-300 mb-6">
            At the current stage, it includes only confirmed official updates.
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Latest Update</h2>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="text-gray-300">
              Official Minima — Community update on development progress.
            </p>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Update Policy</h2>
          <div className="space-y-3 text-gray-400 text-sm">
            <p>
              • Only official announcements from verified sources
            </p>
            <p>
              • Manual curation — no automated feeds enabled
            </p>
            <p>
              • Focus on protocol updates, RFCs, and major milestones
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

