// src/app/ecosystem/page.tsx
export default function EcosystemPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">Ecosystem Overview</h1>
      <p className="mb-6">
        The Minima ecosystem consists of protocol-level infrastructure, developer tooling, edge deployments, and experimental applications built around the core blockchain.
      </p>
      <p className="mb-8">
        This page documents confirmed components and architectural layers of the ecosystem.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Core Protocol</h2>
          <p>The Minima blockchain protocol and consensus mechanism, designed to support full-node participation on everyday devices without reliance on centralized validators.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Payments</h2>
          <p>Payment primitives and peer-to-peer transaction capabilities native to the Minima protocol, enabling direct value transfer at the network edge.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Integrity & AI</h2>
          <p>Integrity-focused systems such as Integritas, providing cryptographic verification, trust, and data integrity mechanisms for AI and distributed environments.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Devices & Edge</h2>
          <p>Deployments on embedded systems, IoT devices, and edge hardware where Minima nodes operate directly on physical devices.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Developer Infrastructure</h2>
          <p>SDKs, APIs, documentation, and tooling used to build on top of the Minima protocol.</p>
        </div>
      </div>
    </div>
  );
}
