// src/app/news/page.tsx
export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">News & Updates</h1>
      <p className="mb-6">
        This page aggregates official public communications related to Minima.
      </p>
      <p className="mb-8">
        At the current stage, it includes only confirmed official updates.
      </p>

      <div className="border-l-4 border-blue-500 pl-4 py-1">
        <h2 className="font-semibold">Latest Update</h2>
        <p>Official Minima — Community update on development progress.</p>
      </div>

      <p className="mt-6 italic text-gray-600">
        (Manual updates only; no automated feeds enabled.)
      </p>
    </div>
  );
}
