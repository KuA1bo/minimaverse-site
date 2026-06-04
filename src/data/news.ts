// src/data/news.ts
// Centralized news data source for Minimaverse
// All verified news articles are stored here and rendered via dynamic route /news/[slug]
// Updated: Maximize Rewards Programme Update [04.06.2026]

export interface NewsArticle {
  slug: string;
  date: string;           // ISO format: YYYY-MM-DD
  displayDate: string;    // Human-readable: June 4, 2026
  title: string;
  summary: string;        // 1-2 sentence overview
  details: {
    label: string;
    text: string;
  }[];
  source: string;         // Primary source URL
  sourceLabel: string;    // Human-readable source description
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'maximize-rewards-update',
    date: '2026-06-04',
    displayDate: 'June 4, 2026',
    title: 'Maximize Rewards Programme Update',
    summary:
      'The Maximize rewards programme is a limited-term initiative with a finite rewards pool. This pool is now nearing depletion, and the programme is expected to conclude in the near future.',
    details: [
      {
        label: 'Active contracts',
        text: 'Will continue to operate according to their existing terms. Users can claim rewards normally upon maturity.',
      },
      {
        label: 'New contracts',
        text: 'Creation of new Maximize contracts will cease once the remaining rewards allocation is fully committed.',
      },
      {
        label: 'Strategic focus',
        text: 'Infrastructure, partnerships, use cases, and real-world utility remain core areas of ecosystem development.',
      },
    ],
    source: 'https://t.me/MinimaGlobal/594',
    sourceLabel: 'Official Telegram Announcement — MinimaGlobal/594',
  },
];
