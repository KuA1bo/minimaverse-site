import Link from 'next/link';

export default function NodesPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <header className="border-b border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold">Run a Node</h1>
          <p className="text-gray-400 mt-2">Setup and configuration guide</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-grow">
        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-300 mb-4">
            Running a Minima node is straightforward and can be done on various platforms including desktop computers, Raspberry Pi, and cloud servers. Each node is a full node, contributing to the network's decentralization and security.
          </p>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Installation Methods</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">1. Desktop Installation</h3>
              <p className="text-gray-300 mb-2">
                Download the latest Minima jar file and run it on your computer with Java installed.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://minima.global/ru/technology/run-a-node" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Official Guide</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">2. Raspberry Pi</h3>
              <p className="text-gray-300 mb-2">
                Minima is optimized for low-resource devices. You can run a full node on Raspberry Pi 4 or newer models.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://docs.minima.global/docs/getting-started/raspberrypi" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Raspberry Pi Setup</Link>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">3. Docker</h3>
              <p className="text-gray-300 mb-2">
                Run Minima node using Docker for easy deployment and isolation.
              </p>
              <p className="text-sm text-gray-500">
                Status: <span className="text-green-500">confirmed</span> | Source: <Link href="https://github.com/minima-global/Minima/tree/master/docker" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Docker Repository</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-gray-300">Minimum Requirements</h3>
              <ul className="text-gray-400 text-sm space-y-1 mt-2">
                <li>• 2 GB RAM</li>
                <li>• 10 GB free disk space</li>
                <li>• Java 11 or higher</li>
                <li>• Stable internet connection</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-300">Recommended</h3>
              <ul className="text-gray-400 text-sm space-y-1 mt-2">
                <li>• 4 GB RAM</li>
                <li>• SSD storage</li>
                <li>• Static IP address (for public nodes)</li>
              </ul>
            </div>
          </div>
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

