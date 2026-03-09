// src/app/contact/page.tsx
// Contact page - community feedback and support channels

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto">
      
      {/* Header */}
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors inline-block mb-4"
            >
              ← Back to Minimaverse
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Contact</h1>
            <p className="text-gray-400">Community support and feedback channels</p>
          </div>
          <a 
            href="https://github.com/KuA1bo/minimaverse-site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Project Feedback</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This documentation project is maintained by the community. For questions, 
            bug reports, or suggestions, please use the official GitHub repository:
          </p>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-4">
            <a 
              href="https://github.com/KuA1bo/minimaverse-site/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.26 0-1.38.48-2.37 1.26-3.225-.255-.315-.54-1.02-.12-2.13 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.42 1.11.135 1.815-.12 2.13.78.855 1.26 1.845 1.26 3.225 0 4.935-2.805 5.955-5.475 6.255.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Open an Issue on GitHub
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Official Minima Channels</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For official Minima Protocol support and announcements, refer to these 
            verified channels:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Official Website:{' '}
              <a 
                href="https://minima.global" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                minima.global
              </a>
            </li>
            <li>
              Documentation:{' '}
              <a 
                href="https://docs.minima.global" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                docs.minima.global
              </a>
            </li>
            <li>
              Telegram Announcements:{' '}
              <a 
                href="https://t.me/MinimaGlobal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                t.me/MinimaGlobal
              </a>
            </li>
            <li>
              Discord Community:{' '}
              <a 
                href="https://discord.com/invite/minimaglobal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                discord.com/invite/minimaglobal
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Response Time</h2>
          <p className="text-gray-300 leading-relaxed">
            GitHub issues are typically reviewed within 7 days. For urgent matters 
            related to Minima Protocol itself, please use the official channels listed above.
          </p>
        </section>

        <section className="border-t border-gray-700 pt-6 mt-12">
          <p className="text-gray-500 text-sm">
            Last updated: February 17, 2026
          </p>
        </section>

      </article>
    </div>
  );
}

