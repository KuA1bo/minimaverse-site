import { MetadataRoute } from 'next';
import { newsArticles } from '@/data/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://minimaverse.com';

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
    { route: '/resources', priority: 0.7, frequency: 'monthly' as const },
    { route: '/submit-project', priority: 0.6, frequency: 'yearly' as const },
    { route: '/open-questions', priority: 0.6, frequency: 'monthly' as const },
    { route: '/disclaimer', priority: 0.5, frequency: 'yearly' as const },
  ];

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.frequency,
    priority: page.priority,
  }));

  const newsPages = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'never' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...newsPages];
}
