// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section>
        <h1 className="text-3xl font-bold mb-6">What is Minima</h1>
        <p className="mb-4">
          Minima is a next-generation blockchain protocol designed to be fully decentralized by default.
        </p>
        <p className="mb-4">
          It enables every user to run a full validating and constructing node on everyday devices, including mobile phones and low-power hardware.
        </p>
        <p className="mb-4">
          By eliminating reliance on centralized infrastructure, Minima creates a network that is owned, operated and secured by its users themselves.
        </p>
        <p className="mb-4">
          This architecture allows participants to remain fully autonomous while still being accountable within a shared consensus system.
        </p>
        <p>
          Minima focuses on long-term protocol sustainability, censorship resistance, and true decentralization at scale.
        </p>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Purpose of this site</h2>
        <p className="mb-4">
          Minimaverse is a neutral, community-driven information hub that documents the Minima ecosystem, its historical development, core components, and publicly verifiable integrations.
        </p>
        <p className="text-red-600 font-medium">
          This site does not represent the official Minima team.
        </p>
      </section>

      <section className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h2 className="font-semibold mb-2">Open Questions</h2>
        <p>
          The Minima protocol is under active development. Key open questions include:
          node discovery in offline environments, long-term storage efficiency on embedded devices,
          and formal verification of the consensus mechanism. This site will document answers as they become publicly available.
        </p>
        <a href="/open-questions" className="text-blue-600 hover:underline mt-2 inline-block">
          View all open questions →
        </a>
      </section>
    </div>
  );
}
