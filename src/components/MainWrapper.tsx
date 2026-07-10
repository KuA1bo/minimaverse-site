'use client';

import { usePathname } from 'next/navigation';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main
      className={`flex-1 max-w-6xl mx-auto w-full px-4 relative z-10 ${
        isHome ? '' : 'pt-2 sm:pt-4'
      }`}
    >
      {children}
    </main>
  );
}

