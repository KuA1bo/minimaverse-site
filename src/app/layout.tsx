import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <title>Minimaverse</title>
      </head>
      <body className="flex flex-col min-h-screen bg-black text-gray-200 overflow-y-auto">
        {/* Header */}
        <header className="mb-6 border-b border-gray-700 p-4">
          <div className="flex items-center gap-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.webp" 
                alt="Minimaverse Logo" 
                className="h-10 w-auto"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-bold text-white">Minimaverse</h1>
            </div>
            <p className="text-sm text-gray-400 ml-4 flex-1">
              Device-first blockchain • Full nodes everywhere • Infrastructure, not hype
            </p>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="font-medium text-gray-300 hover:text-white">Home</a>
              <a href="/about" className="font-medium text-gray-300 hover:text-white">About</a>
              <a href="/ecosystem" className="font-medium text-gray-300 hover:text-white">Ecosystem</a>
              <a href="/developers" className="font-medium text-gray-300 hover:text-white">Developers</a>
              <a href="/nodes" className="font-medium text-gray-300 hover:text-white">Nodes</a>
              <a href="/tools" className="font-medium text-gray-300 hover:text-white">Tools</a>
              <a href="/partners" className="font-medium text-gray-300 hover:text-white">Partners</a>
              <a href="/timeline" className="font-medium text-gray-300 hover:text-white">Timeline</a>
              <a href="/news" className="font-medium text-gray-300 hover:text-white">News</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-4">
          {children}
        </main>

        <footer className="mt-8 border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
          &copy; 2026 Minimaverse. All rights reserved.  
          • <a href="/privacy" className="hover:underline text-gray-300">Privacy Policy</a>
          • <a href="/terms" className="hover:underline text-gray-300">Terms of Use</a>
        </footer>
      </body>
    </html>
  );
}

