


import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

interface PageNavLinksProps {
  links: [NavLink, NavLink, NavLink];
}

export default function PageNavLinks({ links }: PageNavLinksProps) {
  return (
    <nav
      aria-label="Related sections"
      className="w-full py-3 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <li className="text-neutral-500 dark:text-neutral-400 font-medium">
            Explore:
          </li>
          {links.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         text-neutral-700 dark:text-neutral-200
                         hover:text-minima-purple dark:hover:text-minima-cyan
                         hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-minima-purple/50"
                prefetch={true}
              >
                {link.label}
                <span className="text-neutral-400 dark:text-neutral-500 text-xs">
                  →
                </span>
              </Link>
              {index < 2 && (
                <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700 mx-1">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
