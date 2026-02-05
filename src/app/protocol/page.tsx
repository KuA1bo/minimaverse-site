import Link from 'next/link';

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Minimaverse
          </Link>
          <h1 className="text-4xl font-bold">How Minima Works</h1>
          <p className="text-gray-400 mt-2">
            Technical overview of the device-first blockchain architecture
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">What is Minima?</h2>
          <p className="text-gray-300 mb-4">
            Minima is a device-first blockchain protocol designed to run full nodes on everyday devices — smartphones, IoT devices, and personal computers. Unlike classical blockchains that rely on centralized infrastructure, Minima enables true decentralization by making every user a potential validator.
          </p>
          <p className="text-gray-300 mb-4">
            The protocol combines a unique consensus mechanism with compact chain architecture to achieve scalability without sacrificing decentralization.
          </p>
          <div className="mt-4">
            <Link href="https://docs.minima.global" className="text-blue-400 hover:underline text-sm">
              → Official documentation
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Device-First Architecture</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Full Nodes Everywhere</h3>
              <p className="text-gray-300">
                Every participant can run a full validating node on their device. This eliminates reliance on centralized infrastructure and creates a truly peer-to-peer network.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Compact Chain Design</h3>
              <p className="text-gray-300">
                Minima uses a compact blockchain structure where each node stores only the necessary state. This allows full validation on resource-constrained devices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Cascada Consensus</h3>
              <p className="text-gray-300">
                A hybrid consensus mechanism combining Proof-of-Work for security with efficient finality mechanisms for scalability.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Achieving Decentralization</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">No Mining Pools</h3>
              <p className="text-gray-300">
                The protocol is designed to prevent mining pool centralization. Each device contributes proportionally to its computational resources.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Permissionless Participation</h3>
              <p className="text-gray-300">
                Anyone can join the network and run a full node without special hardware or technical expertise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Network Resilience</h3>
              <p className="text-gray-300">
                With nodes distributed across millions of devices globally, the network becomes resistant to censorship and single points of failure.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
          
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="https://docs.minima.global" className="text-blue-400 hover:underline">
                → Official Documentation
              </Link>
            </li>
            <li>
              <Link href="/ecosystem" className="text-blue-400 hover:underline">
                → Ecosystem Overview
              </Link>
            </li>
            <li>
              <Link href="/timeline" className="text-blue-400 hover:underline">
                → Verified Milestones
              </Link>
            </li>
            <li>
              <Link href="/developers" className="text-blue-400 hover:underline">
                → Developer Resources
              </Link>
            </li>
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

