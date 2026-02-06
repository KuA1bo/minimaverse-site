import Link from 'next/link';

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Minimaverse
          </Link>
          <h1 className="text-3xl font-bold">Historical Execution Timeline</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-8">
          <p className="text-gray-300 mb-4">
            This timeline documents completed and publicly verifiable milestones in the development and deployment of the Minima protocol.
          </p>
          <p className="text-gray-300 mb-6">
            It intentionally excludes speculative roadmaps or future promises.
          </p>
        </section>

        {/* Исправлено: тёмный фон как на главной */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Timeline Philosophy</h2>
          <p className="text-gray-300">
            Minima's development approach emphasizes delivered results over projected plans.
            Only events that have occurred and can be independently verified are included.
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Example Entry Types</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Protocol releases</li>
            <li>Network upgrades</li>
            <li>Public launches</li>
            <li>Architecture shifts</li>
            <li>Published research or audits</li>
          </ul>
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

