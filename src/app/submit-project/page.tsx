// src/app/submit-project/page.tsx
// Submission gateway page - neutral verification process for ecosystem projects
// Updated: Polished Initial Contact phrasing, updated timestamp [22.05.2026]

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

// ExternalLink component - matches site-wide styling
const ExternalLink = ({ 
  href, 
  children, 
  className = ""
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
}) => (
  <a 
    href={href.trim()} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 ${className}`}
  >
    {children}
    <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);

// Schema.org WebPage structured data for submission gateway
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Minimaverse Project Submission Request",
  "description": "Verification gateway for Minima ecosystem projects. Criteria, review process, and submission guidelines.",
  "url": "https://minimaverse.com/submit-project",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Minimaverse",
    "url": "https://minimaverse.com"
  }
};

export default function SubmitProjectPage() {
  return (
    <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
      
      {/* Structured data for SEO */}
      <JsonLd data={structuredData} />

      {/* Header */}
      <header className="mb-8 opacity-0 animate-fade-in-up delay-75 relative pt-4">
        <Link 
          href="/ecosystem" 
          className="text-gray-400 hover:text-white transition-colors inline-block mb-4 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Back to Ecosystem
        </Link>
        
        <h1 className="text-3xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
            Project Submission Request
          </span>
        </h1>
        <p className="text-gray-400">Verification gateway for Minima ecosystem projects</p>
        <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/40 to-transparent" />
      </header>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        
        {/* Intro */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-150">
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-6 
                          transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <p className="text-gray-300 leading-relaxed">
              Minimaverse maintains a neutral, verified index of projects building on or integrating with the Minima Protocol. 
              This page outlines the submission process and editorial criteria. Inclusion is not guaranteed and is subject to manual review.
            </p>
          </div>
        </section>

        {/* Listing Criteria */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Listing Criteria</span>
          </h2>
          <ul className="space-y-3">
            {[
              'Built on, for, or integrated with the Minima Protocol',
              'Publicly accessible documentation or open-source repository',
              'No active scam reports, security breaches, or fraudulent signals',
              'Clear project scope and publicly verifiable purpose'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Review Process */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🔄</span>
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">Review Process</span>
          </h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Initial Contact', desc: 'Send a concise email to contact@minimaverse.com including the project name, URL, and a brief description.' },
              { step: '2', title: 'Documentation Review', desc: 'We verify technical claims, official sources, and community reputation. (3–5 business days)' },
              { step: '3', title: 'Editorial Decision', desc: 'Approved projects are added to /ecosystem or /partners with a neutral, fact-based description.' },
              { step: '4', title: 'Ongoing Maintenance', desc: 'Listings are updated or removed if projects become inactive or violate core principles.' }
            ].map((item) => (
              <div key={item.step} className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 sm:p-5 
                                              transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15 group overflow-hidden">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/40 border border-purple-700/50 text-purple-300 flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Gate & Anti-Spam */}
        <section className="mb-10 opacity-0 animate-fade-in-up delay-75">
          <div className="relative bg-red-900/20 border border-red-700/50 rounded-2xl p-4 sm:p-6 
                          transition-all duration-300 hover:border-red-600/70 hover:shadow-2xl hover:shadow-red-500/10 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-red-500 to-orange-500" />
            <h3 className="text-red-300 font-medium mb-2 flex items-center gap-2">
              <span className="text-lg">⛔</span> Quality Gate & Anti-Spam
            </h3>
            <p className="text-red-200/80 text-sm leading-relaxed">
              Submissions are reviewed manually. Automated requests, marketing pitches, or projects lacking verifiable sources may be declined without response. 
              Minimaverse does not guarantee placement, response time, or promotional coverage. This is an independent editorial registry.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 opacity-0 animate-fade-in-up delay-150">
          <div className="relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-medium text-white mb-2">Submit a Project or Update</h3>
            <p className="text-gray-400 text-sm mb-4">We accept verified ecosystem submissions, corrections, and project updates via email.</p>
            <ExternalLink 
              href="mailto:contact@minimaverse.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-300 hover:bg-purple-600/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02]"
            >
              contact@minimaverse.com
            </ExternalLink>
          </div>
        </section>

        {/* Footer Note */}
        <div className="border-t border-gray-700/40 pt-6 opacity-0 animate-fade-in-up delay-200">
          <p className="text-gray-500 text-sm">
            This submission process is independent from Minima Global.{' '}
            <Link href="/disclaimer" aria-label="Read full disclaimer" className="text-gray-400 hover:text-white underline transition-colors">Read full disclaimer</Link>
          </p>
        </div>

      </article>
    </div>
  );
}
