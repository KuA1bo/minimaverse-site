// src/app/developers/page.tsx
export default function DevelopersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">Developers</h1>
      <p className="mb-6">
        Minima is designed to support developers building decentralized systems that do not rely on centralized infrastructure.
      </p>
      <p className="mb-8">
        This section aggregates official documentation, SDKs, and technical resources relevant to development on the Minima protocol.
      </p>

      <div>
        <h2 className="text-xl font-semibold mb-4">Key Resources</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Official Minima documentation</li>
          <li>Protocol specifications</li>
          <li>Developer tools and APIs</li>
          <li>Community technical discussions</li>
        </ul>
      </div>

      <p className="mt-6 italic text-gray-600">
        This page serves as a curated index, not a replacement for official documentation.
      </p>
    </div>
  );
}
