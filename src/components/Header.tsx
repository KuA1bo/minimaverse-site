'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/protocol', label: 'Protocol' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/developers', label: 'Developers' },
  { href: '/tools', label: 'Tools' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/partners', label: 'Partners' },
  { href: '/nodes', label: 'Nodes' },
  { href: '/news', label: 'News' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header className="relative sm:sticky sm:top-0 z-50 mb-6 sm:mb-8 backdrop-blur-xl bg-black/30 border-b border-gray-700/40 transition-all duration-300 hover:border-purple-500/40">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <div className="flex items-center justify-between gap-3 sm:gap-4 max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <Link
            href="/"
            className="group flex items-center gap-2 hover:scale-105 transition-transform duration-300 flex-shrink-0"
          >
            <Image
              src="/logo.webp"
              alt="Minimaverse Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain bg-transparent mix-blend-screen"
              priority
              unoptimized
            />
            <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              Minimaverse
            </span>
          </Link>

          <nav className="hidden md:flex flex-1 justify-end flex-wrap gap-x-1.5 gap-y-1 sm:gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-2 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center ml-2 border-l border-gray-700/50 lg:ml-4 lg:pl-3">
            <Search />
          </div>

          <button
            className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-gray-900/95 backdrop-blur-2xl border-l border-gray-700/50 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6 pb-8 h-full flex flex-col">
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-3 px-4 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-4 border-t border-gray-700/50 mt-4">
            <Search mobile />
          </div>
        </div>
      </div>
    </>
  );
}
