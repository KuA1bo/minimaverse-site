// src/app/sitemap.ts
// Sitemap generator for Next.js App Router
// Generates a standard XML sitemap for search engines

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of the website
  const baseUrl = 'https://minimaverse.com';

  // List of all static pages in the project
  const pages = [
    { route: '', priority: 1.0, frequency: 'weekly' as const },
    { route: '/about', priority: 0.8, frequency: 'monthly' as const },
    { route: '/protocol', priority: 0.8, frequency: 'monthly' as const },
    { route: '/ecosystem', priority: 0.8, frequency: 'monthly' as const },
    { route: '/developers', priority: 0.8, frequency: 'monthly' as const },
    { route: '/tools', priority: 0.8, frequency: 'monthly' as const },
    { route: '/timeline', priority: 0.8, frequency: 'monthly' as const },
    { route: '/partners', priority: 0.8, frequency: 'monthly' as const },
    { route: '/nodes', priority: 0.8, frequency: 'monthly' as const },
    { route: '/news', priority: 0.8, frequency: 'weekly' as const },
    { route: '/links', priority: 0.7, frequency: 'monthly' as const },
    { route: '/open-questions', priority: 0.6, frequency: 'monthly' as const },
    { route: '/disclaimer', priority: 0.5, frequency: 'yearly' as const },
  ];

  // Map each route to a SitemapEntry object
  return pages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.frequency,
    priority: page.priority,
  }));
}
