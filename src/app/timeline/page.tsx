// src/app/timeline/page.tsx
export default function TimelinePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">Historical Execution Timeline</h1>
      <p className="mb-6">
        This timeline documents completed and publicly verifiable milestones in the development and deployment of the Minima protocol.
      </p>
      <p className="mb-8">
        It intentionally excludes speculative roadmaps or future promises.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Timeline Philosophy</h2>
        <p>
          Minima’s development approach emphasizes delivered results over projected plans.
          Only events that have occurred and can be independently verified are included.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-2">Example Entries</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Protocol releases</li>
          <li>Network upgrades</li>
          <li>Public launches</li>
          <li>Architecture shifts</li>
          <li>Published research or audits</li>
        </ul>
      </div>
    </div>
  );
}
