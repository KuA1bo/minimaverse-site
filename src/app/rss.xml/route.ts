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
    { title: 'Home', url: 'https://minimaverse.com', date: new Date() },
    { title: 'Protocol', url: 'https://minimaverse.com/protocol', date: new Date() },
    { title: 'Ecosystem', url: 'https://minimaverse.com/ecosystem', date: new Date() },
    { title: 'Developers', url: 'https://minimaverse.com/developers', date: new Date() },
    { title: 'Nodes', url: 'https://minimaverse.com/nodes', date: new Date() },
    { title: 'Tools', url: 'https://minimaverse.com/tools', date: new Date() },
    { title: 'Timeline', url: 'https://minimaverse.com/timeline', date: new Date() },
    { title: 'News', url: 'https://minimaverse.com/news', date: new Date() },
    { title: 'Submit Project', url: 'https://minimaverse.com/submit-project', date: new Date() },
  ];

  pages.forEach(page => {
    feed.item({
      title: page.title,
      url: page.url,
      date: page.date,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
