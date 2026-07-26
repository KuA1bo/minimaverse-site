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
    { title: 'Knowledge', url: 'https://minimaverse.com/knowledge', desc: 'Evidence-based overviews and technical explanations' },
    { title: 'Ecosystem', url: 'https://minimaverse.com/ecosystem', desc: 'Verified projects in Minima ecosystem' },
    { title: 'Developers', url: 'https://minimaverse.com/developers', desc: 'Resources for Minima developers' },
    { title: 'Nodes', url: 'https://minimaverse.com/nodes', desc: 'Guides to run Minima nodes' },
    { title: 'Tools', url: 'https://minimaverse.com/tools', desc: 'Utilities for Minima ecosystem' },
    { title: 'Timeline', url: 'https://minimaverse.com/timeline', desc: 'Verified milestones of Minima' },
    { title: 'News', url: 'https://minimaverse.com/news', desc: 'Latest updates about Minima' },
    { title: 'Submit Project', url: 'https://minimaverse.com/submit-project', desc: 'Request listing for your project' },
  ];

  const newsItems = [
    {
      title: 'Public Developer Call: Minima Core Demonstration',
      url: 'https://minimaverse.com/news/developer-call-minima-core-demo',
      desc: 'The Minima team has published the latest Public Developer Call, featuring a demonstration of Minima Core, a lightweight client designed for improved efficiency compared to Minima Classic. The presentation covers current development work and technical demonstrations. Source: MinimaGlobal/605. Status: confirmed.',
      date: new Date('2026-07-24'),
    },
    {
      title: 'Republic Campaign Surpasses $1 Million',
      url: 'https://minimaverse.com/news/republic-campaign-1-million-raised',
      desc: 'Minima announced that its Republic fundraising campaign has raised more than $1 million. Campaign statistics include largest Swiss-based company campaign on Republic/Seedrs platform, investors from 30 countries. Source: MinimaGlobal/604. Status: confirmed.',
      date: new Date('2026-07-08'),
    },
    {
      title: 'XXIM Podcast Features Hugo and Adam',
      url: 'https://minimaverse.com/news/xxim-podcast-hugo-adam-interview',
      desc: 'Minima team announced a new XXIM Podcast episode featuring Hugo and Adam discussing enterprise partnerships, ecosystem developments, and project direction. Source: MinimaGlobal/602. Status: confirmed.',
      date: new Date('2026-06-29'),
    },
    {
      title: 'Engineering Update',
      url: 'https://minimaverse.com/news/engineering-update-2026-06-13',
      desc: 'This update reports continued engineering progress across the Minima protocol and Integritas ecosystem, including Minima Core entering closed testing, exploration of native application integration beyond MiniDapps, design-level validation of a potential Key Uses solution, and ongoing development of local execution capabilities for decentralized AI workloads. Source: MinimaGlobal/598. Status: confirmed.',
      date: new Date('2026-06-13'),
    },
    {
      title: 'Maximize Rewards Programme Concludes',
      url: 'https://minimaverse.com/news/maximize-conclusion',
      desc: 'The Maximize rewards programme has concluded after distributing more than 50 million $MINIMA across participants. New contracts can no longer be created, while existing contracts remain active until maturity. Source: MinimaGlobal/597. Status: confirmed.',
      date: new Date('2026-06-11'),
    },
    {
      title: 'Engineering Update: Minima Core, MegaMMR, Integritas',
      url: 'https://minimaverse.com/news/engineering-update-june-2026',
      desc: 'Minima Global announced that Minima Core completed beta and moved to closed testing, alongside infrastructure updates and ongoing Integritas-related development. Source: MinimaGlobal/596. Status: confirmed.',
      date: new Date('2026-06-05'),
    },
    {
      title: 'Maximize Rewards Programme Update',
      url: 'https://minimaverse.com/news/maximize-rewards-update',
      desc: 'Update on Maximize rewards programme nearing completion, with active contracts continuing normally and focus remaining on infrastructure, partnerships, utility, and protocol development. Source: Official Minima Global Announcements (Telegram). Status: confirmed.',
      date: new Date('2026-06-04'),
    },
    {
      title: 'Engineering Update: DEX, Stablecoin Bridge, and Ecosystem Progress',
      url: 'https://minimaverse.com/news/engineering-update-2026-05-24',
      desc: 'The Minima ecosystem team published an engineering update covering progress across core products and infrastructure. Testing across the DEX, MiniMask, and Stablecoin Bridge has been completed, with all components moving into release preparation. Source: MinimaGlobal/593. Status: confirmed.',
      date: new Date('2026-05-24'),
    },
    {
      title: 'Blockchain-on-Chip Demonstrated on Embedded Hardware',
      url: 'https://minimaverse.com/news/blockchain-on-chip-breakthrough',
      desc: 'Minima announced a working implementation of its Layer-1 blockchain node on embedded Arm-based hardware using a C++ client and FPGA-based cryptographic accelerators. The milestone demonstrates Minima operating directly on embedded systems. Source: Minima Global Blog. Status: confirmed.',
      date: new Date('2025-12-15'),
    },
  ];

  pages.forEach(page => {
    feed.item({
      title: page.title,
      description: page.desc,
      url: page.url,
      date: new Date(),
    });
  });

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
