import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      {/* Header with Back button and GitHub icon */}
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl flex justify-between items-start">
          <div>
            <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold">Official News & Updates</h1>
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
            This page aggregates verified official communications from Minima's public channels. All updates are sourced from permanent, publicly accessible records.
          </p>
          <p className="text-gray-300 mb-6">
            Following Minima's January 2026 communication shift, project updates prioritize evidence of execution over speculative roadmaps.
          </p>
        </section>

        {/* Official Channels Section */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Official Announcement Channels</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-200 mb-2">Telegram Announcements Channel</h3>
              <p className="text-gray-400 text-sm mb-2">
                Primary channel for real-time project updates, community announcements, and development progress.
              </p>
              <a
                href="https://t.me/MinimaGlobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block"
              >
                → Minima Global Announcements (Telegram)
              </a>
              <p className="text-gray-500 text-xs mt-1">
                Status: <span className="text-green-500">confirmed</span> | Official channel verified by Minima team
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-200 mb-2">Official Blog</h3>
              <p className="text-gray-400 text-sm mb-2">
                Permanent archive of major announcements, partnership details, and technical updates.
              </p>
              <a
                href="https://minima.global/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm block"
              >
                → Minima Official Blog
              </a>
              <p className="text-gray-500 text-xs mt-1">
                Status: <span className="text-green-500">confirmed</span> | All announcements preserved with timestamps
              </p>
            </div>
          </div>
        </section>

        {/* Recent Major Announcements Section */}
        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Recent Major Announcements</h2>
          
          <div className="border-l-4 border-blue-500 pl-4 py-3">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-gray-400">January 20, 2026</span>
              <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">confirmed</span>
            </div>
            <h3 className="text-xl font-medium text-gray-200 mb-2">Minima: From Roadmaps to Results</h3>
            <p className="text-gray-300 mb-3">
              Strategic shift in communication approach: moving away from dated roadmaps toward evidence-based progress reporting. Reframing Minima as a technology company solving real-world infrastructure problems.
            </p>
            <p className="text-gray-300 mb-3">
              Key principles: "Blockchain is not the product. Decentralisation is not the marketing. Speculation is not the strategy."
            </p>
            <div className="text-sm text-gray-500 mt-2">
              Source: <a href="https://minima.global/post/minima-from-roadmaps-to-results" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official Blog Post</a>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Update Policy</h2>
          <div className="space-y-3 text-gray-400 text-sm">
            <p>• Only official announcements from verified Minima channels (Telegram, blog, GitHub)</p>
            <p>• All entries include direct links to permanent sources with publication dates</p>
            <p>• No automated feeds — all content manually verified and curated</p>
            <p>• Focus on protocol updates, partnerships, major milestones, and strategic shifts</p>
            <p>• Speculative content, rumors, or unverified community discussions excluded</p>
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

