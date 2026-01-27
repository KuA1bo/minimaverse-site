// src/app/partners/page.tsx
export default function PartnersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">Ecosystem & Research Partnerships</h1>
      <p className="mb-6">
        This page lists publicly confirmed partnerships, integrations, and research collaborations associated with the Minima ecosystem.
      </p>
      <p className="mb-8">
        Only links with verifiable public sources are included.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Confirmed Associations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="https://integritas.technology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Integritas — integrity and verification systems
              </a>
            </li>
            <li>
              Academic & research collaborations — protocol research and experimentation
              <br />
              <span className="text-sm text-gray-600">(linked only when official public confirmation exists)</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-6 italic text-gray-600">
        This list is intentionally conservative and excludes unverified claims.
      </p>
    </div>
  );
}
