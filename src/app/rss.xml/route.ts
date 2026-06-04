// src/app/rss.xml/route.ts
// RSS feed generator for Minimaverse - static pages + verified news items
// NOTE: When adding a new page or news item, add it to the respective array below.
// Updated: Added Maximize Rewards Update [04.06.2026]
import RSS from 'rss';
import { NextResponse } from 'next/server';

export async function GET() {
  const feed = new RSS({
    title: 'Minimaverse',
    description: 'Independent information hub for the Minima Protocol.',
    feed_url: 'https://minimaverse.com/rss.xml',
    site_url: 'https://minimaverse.com',
    language: 'en',
  });

  const pages = [
    { title: 'Home', url: 'https://minimaverse.com', desc: 'Minimaverse independent information hub' },
    { title: 'Protocol', url: 'https://minimaverse.com/protocol', desc: 'How Minima Protocol works' },
    { title: 'Ecosystem', url: 'https://minimaverse.com/ecosystem', desc: 'Verified projects in Minima ecosystem' },
    { title: 'Developers', url: 'https://minimaverse.com/developers', desc: 'Resources for Minima developers' },
    { title: 'Nodes', url: 'https://minimaverse.com/nodes', desc: 'Guides to run Minima nodes' },
    { title: 'Tools', url: 'https://minimaverse.com/tools', desc: 'Utilities for Minima ecosystem' },
    { title: 'Timeline', url: 'https://minimaverse.com/timeline', desc: 'Verified milestones of Minima' },
    { title: 'News', url: 'https://minimaverse.com/news', desc: 'Latest updates about Minima' },
    { title: 'Submit Project', url: 'https://minimaverse.com/submit-project', desc: 'Request listing for your project' },
  ];

  // Verified news items - add new entries here with confirmed status only
  const newsItems = [
    {
      title: 'Maximize Rewards Programme Update',
      url: 'https://minimaverse.com/news/maximize-rewards-update',
      desc: 'Update on Maximize rewards programme nearing completion, with active contracts continuing normally and focus remaining on infrastructure, partnerships, utility, and protocol development. Source: Official Minima Global Announcements (Telegram). Status: confirmed.',
      date: new Date('2026-06-04'),
    },
    {
      title: 'Engineering Update: DEX, Stablecoin Bridge, and Ecosystem Progress',
      url: 'https://t.me/MinimaGlobal/593',
      desc: 'The Minima ecosystem team published an engineering update covering progress across core products and infrastructure. Testing across the DEX, MiniMask, and Stablecoin Bridge has been completed, with all components moving into release preparation. The DEX (v1.0.1) introduces UI improvements, SIM bin restrictions for new users, a 5-minute timeout on trades and messages, and several bug fixes. The Stablecoin Bridge (v1.0) adds redesigned front-end support and enables USDT (ERC-20) bridging into Minima-native USDT, along with performance optimizations. Ongoing work continues across Integritas tooling and Minima Core development. Source: Official Minima Global Announcements (Telegram). Status: confirmed.',
      date: new Date('2026-05-24'),
    },
  ];

  // Add static pages
  pages.forEach(page => {
    feed.item({
      title: page.title,
      description: page.desc,
      url: page.url,
      date: new Date(),
    });
  });

  // Add verified news items
  newsItems.forEach(item => {
    feed.item({
      title: item.title,
      description: item.desc,
      url: item.url,
      date: item.date,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
