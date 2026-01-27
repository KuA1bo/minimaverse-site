import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-800">
        {/* Header */}
        <header className="mb-8 border-b border-gray-200 p-4">
          <div className="flex items-center gap-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h1 className="text-2xl font-bold">Minimaverse</h1>
            </div>
            <p className="text-sm text-gray-600 ml-4 flex-1">
              Device-first blockchain • Full nodes everywhere • Infrastructure, not hype
            </p>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="font-medium hover:text-blue-600">Home</a>
              <a href="/about" className="font-medium hover:text-blue-600">About</a>
              <a href="/ecosystem" className="font-medium hover:text-blue-600">Ecosystem</a>
              <a href="/developers" className="font-medium hover:text-blue-600">Developers</a>
              <a href="/partners" className="font-medium hover:text-blue-600">Partners</a>
              <a href="/timeline" className="font-medium hover:text-blue-600">Timeline</a>
              <a href="/news" className="font-medium hover:text-blue-600">News</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-6">
          {children}
        </main>

        <footer className="mt-12 border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
          &copy; 2026 Minimaverse. All rights reserved.  
          • <a href="/privacy" className="hover:underline mx-1">Privacy Policy</a>
          • <a href="/terms" className="hover:underline mx-1">Terms of Use</a>
        </footer>
      </body>
    </html>
  );
}
