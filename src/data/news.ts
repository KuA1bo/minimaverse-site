export interface NewsArticle {
  slug: string;
  date: string;
  displayDate: string;
  title: string;
  summary: string;
  details: {
    label: string;
    text: string;
  }[];
  source: string;
  sourceLabel: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'republic-campaign-1-million-raised',
    date: '2026-07-08',
    displayDate: 'July 8, 2026',
    title: 'Republic Campaign Surpasses $1 Million',
    summary:
      'Minima announced that its Republic fundraising campaign has raised more than $1 million. The announcement includes campaign statistics covering fundraising performance, investor participation, and platform rankings reported by the project.',
    details: [
      {
        label: 'Funding Raised',
        text: 'Reported funding exceeded $1 million.',
      },
      {
        label: 'Campaign Statistics',
        text: 'Largest Swiss-based company campaign on the Republic/Seedrs platform. Ranked sixth by total funds raised among campaigns on the platform over the previous two years. Largest convertible funding round during the same period. Largest campaign within the Programming & Security category. Investors participated from 30 countries. Included among the platform\'s Top 10 campaigns by average investment size.',
      },
      {
        label: 'Project Statement',
        text: 'The announcement states that the campaign reflects investor interest in decentralized infrastructure designed for edge computing, connected devices, and AI-related applications.',
      },
    ],
    source: 'https://t.me/MinimaGlobal/604',
    sourceLabel: 'Official Telegram Announcement — MinimaGlobal/604',
  },
  {
    slug: 'xxim-podcast-hugo-adam-interview',
    date: '2026-06-29',
    displayDate: 'June 29, 2026',
    title: 'XXIM Podcast Features Hugo and Adam',
    summary:
      'Minima team announced a new XXIM Podcast episode featuring Hugo and Adam discussing enterprise partnerships, ecosystem developments, and project direction.',
    details: [
      {
        label: 'Participants',
        text: 'Hugo and Adam.',
      },
      {
        label: 'Topics Covered',
        text: 'Enterprise partnerships, ecosystem developments, ongoing initiatives.',
      },
      {
        label: 'Format',
        text: 'Video interview published on YouTube.',
      },
      {
        label: 'Note',
        text: 'Third-party media appearance, no new protocol features or roadmap changes.',
      },
    ],
    source: 'https://t.me/MinimaGlobal/602',
    sourceLabel: 'Official Telegram Announcement — MinimaGlobal/602',
  },
  {
    slug: 'engineering-update-2026-06-13',
    date: '2026-06-13',
    displayDate: 'June 13, 2026',
    title: 'Engineering Update',
    summary:
      'This update reports continued engineering progress across the Minima protocol and Integritas ecosystem, including Minima Core entering closed testing, exploration of native application integration beyond MiniDapps, design-level validation of a potential Key Uses solution, and ongoing development of local execution capabilities for decentralized AI workloads.',
    details: [
      {
        label: 'Minima Core',
        text: 'Lightweight version for hardware/embedded systems; beta completed, now in closed testing.',
      },
      {
        label: 'Application Architecture Expansion',
        text: 'Native applications (Android APKs, Windows services) via OS-level IPC, beyond browser-based MiniDapps.',
      },
      {
        label: 'Key Uses',
        text: 'Potential solution validated at design level; implementation phase planned next.',
      },
      {
        label: 'Integritas Edge Deployment',
        text: 'Local execution platform for low-powered devices, decentralized AI workloads.',
      },
    ],
    source: 'https://t.me/MinimaGlobal/598',
    sourceLabel: 'Official Telegram Announcement — MinimaGlobal/598',
  },
  {
    slug: 'maximize-conclusion',
    date: '2026-06-11',
    displayDate: 'June 11, 2026',
    title: 'Maximize Rewards Programme Concludes',
    summary:
      'The Maximize rewards programme has concluded after distributing more than 50 million $MINIMA across participants. New contracts can no longer be created, while existing contracts remain active until maturity and continue normal reward claims.',
    details: [
      {
        label: 'Programme Status',
        text: 'Concluded, rewards pool exhausted.',
      },
      {
        label: 'New Contracts',
        text: 'Creation disabled, no new contracts can be created.',
      },
      {
        label: 'Existing Contracts',
        text: 'Continue operating until maturity under original terms.',
      },
      {
        label: 'Total Distributed',
        text: 'More than 50 million $MINIMA distributed across network participants.',
      },
    ],
    source: 'https://t.me/MinimaGlobal/597',
    sourceLabel: 'Official Telegram Announcement — MinimaGlobal/597',
  },
  {
    slug: 'engineering-update-june-2026',
    date: '2026-06-05',
    displayDate: 'June 5, 2026',
    title: 'Engineering Update: Minima Core, MegaMMR, Integritas',
    summary:
      'Minima Global announced that Minima Core completed beta and moved to closed testing, alongside infrastructure updates and ongoing Integritas-related development.',
    details: [
      {
        label: 'Minima Core',
        text: 'Beta completed, moved to closed testing.',
      },
      {
        label: 'MegaMMR & Explorer',
        text: 'Optimization work completed.',
      },
      {
        label: 'AI Logger',
        text: 'Developed for AI transparency and auditability requirements.',
      },
      {
        label: 'Local Integritas Platform',
        text: 'Under development for low-powered deployments.',
      },
    ],
    source: 'https://t.me/MinimaGlobal/596',
    sourceLabel: 'Official Telegram Announcement — MinimaGlobal/596',
  },
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
  {
    slug: 'engineering-update-2026-05-24',
    date: '2026-05-24',
    displayDate: 'May 24, 2026',
    title: 'Engineering Update: DEX, Stablecoin Bridge, and Ecosystem Progress',
    summary:
      'The Minima ecosystem team published an engineering update covering progress across core products and infrastructure. Testing across the DEX, MiniMask, and Stablecoin Bridge has been completed, with all components moving into release preparation.',
    details: [
      {
        label: 'DEX Update',
        text: 'Version 1.0.1 introduces UI improvements, SIM bin restrictions for new users, a 5-minute timeout on trades and messages, and several bug fixes.',
      },
      {
        label: 'Stablecoin Bridge',
        text: 'Version 1.0 adds redesigned front-end support and enables USDT (ERC-20) bridging into Minima-native USDT, along with performance optimizations.',
      },
      {
        label: 'Ongoing Work',
        text: 'Continued development across Integritas tooling and Minima Core.',
      },
    ],
    source: 'https://t.me/MinimaGlobal/593',
    sourceLabel: 'Official Telegram Announcement — MinimaGlobal/593',
  },
  {
    slug: 'republic-campaign-march-2026',
    date: '2026-03-30',
    displayDate: 'March 30, 2026',
    title: 'Minima AG Crowdfunding Campaign on Republic Europe',
    summary:
      'Minima AG launched a crowdfunding campaign on Republic Europe ahead of a planned Series A round later in 2026. The campaign materials describe Minima\'s focus on embedded blockchain verification for connected devices and autonomous systems.',
    details: [
      {
        label: 'Campaign Platform',
        text: 'Republic Europe crowdfunding platform.',
      },
      {
        label: 'Strategic Focus',
        text: 'Embedded blockchain verification for connected devices and autonomous systems.',
      },
      {
        label: 'Funding Stage',
        text: 'Campaign launched ahead of planned Series A round in 2026.',
      },
    ],
    source: 'https://europe.republic.com/minima',
    sourceLabel: 'Republic Europe Campaign Page',
  },
  {
    slug: 'arm-education-alliance-2026',
    date: '2026-03-24',
    displayDate: 'March 24, 2026',
    title: 'Arm Semiconductor Education Alliance Explores Embedded Minima Node Deployment',
    summary:
      'Arm\'s Semiconductor Education Alliance explores running a full Minima node on embedded hardware. The article discusses running Minima nodes directly on embedded hardware environments.',
    details: [
      {
        label: 'Partnership',
        text: 'Arm Semiconductor Education Alliance.',
      },
      {
        label: 'Focus Area',
        text: 'Running full Minima nodes on embedded hardware environments.',
      },
      {
        label: 'Technical Exploration',
        text: 'Investigation of edge deployment capabilities for blockchain verification.',
      },
    ],
    source: 'https://minima.global/post/blockchain-doesnt-belong-in-the-cloud',
    sourceLabel: 'Minima Global Blog Post',
  },
  {
    slug: 'siemens-blockchain-on-chip-2026',
    date: '2026-03-10',
    displayDate: 'March 10, 2026',
    title: 'Siemens Highlights the Emergence of Blockchain-on-Chip',
    summary:
      'Siemens Cre8Ventures highlights Blockchain-on-Chip technology, exploring how embedded verification enables autonomous industrial systems. The article references a drone flight demonstration involving TRL 6 testing.',
    details: [
      {
        label: 'Technology',
        text: 'Blockchain-on-Chip embedded verification technology.',
      },
      {
        label: 'Application',
        text: 'Autonomous industrial systems requiring embedded verification.',
      },
      {
        label: 'Testing',
        text: 'Drone flight demonstration involving TRL 6 testing.',
      },
    ],
    source: 'https://minima.global/post/siemens',
    sourceLabel: 'Minima Global Blog Post',
  },
  {
    slug: 'blockchain-blackbox-verification-2026',
    date: '2026-03-05',
    displayDate: 'March 5, 2026',
    title: 'Blockchain Blackbox: Verification Systems for Autonomous Devices',
    summary:
      'Article describing Blockchain-on-Chip verification systems for autonomous devices and drones. The technology reached TRL 6 testing for autonomous system verification scenarios.',
    details: [
      {
        label: 'Technology',
        text: 'Blockchain-on-Chip verification systems for autonomous devices.',
      },
      {
        label: 'Testing Status',
        text: 'Technology reached TRL 6 testing for autonomous system verification scenarios.',
      },
      {
        label: 'Applications',
        text: 'Drones and other autonomous systems requiring tamper-proof verification.',
      },
    ],
    source: 'https://minima.global/post/blockchain-blackbox',
    sourceLabel: 'Minima Global Blog Post',
  },
  {
    slug: 'minima-roadmaps-to-results-2026',
    date: '2026-01-20',
    displayDate: 'January 20, 2026',
    title: 'Minima: From Roadmaps to Results',
    summary:
      'Minima announced a fundamental shift in communication strategy, moving away from traditional roadmaps with fixed dates toward evidence-based progress reporting.',
    details: [
      {
        label: 'Communication Shift',
        text: 'Moving away from traditional roadmaps with fixed dates.',
      },
      {
        label: 'New Approach',
        text: 'Evidence-based progress reporting focusing on completed milestones.',
      },
      {
        label: 'Rationale',
        text: 'Emphasis on verifiable results rather than speculative timelines.',
      },
    ],
    source: 'https://minima.global/post/minima-from-roadmaps-to-results',
    sourceLabel: 'Minima Global Blog Post',
  },
  {
    slug: 'depin-integration-progress-2025',
    date: '2025-11-01',
    displayDate: 'November 2025',
    title: 'DePIN Integration Progress',
    summary:
      'Multiple DePIN projects integrated Minima Protocol for decentralized device coordination and micropayments.',
    details: [
      {
        label: 'Integration Type',
        text: 'Decentralized device coordination and micropayments.',
      },
      {
        label: 'Protocol',
        text: 'Minima Protocol integration across multiple DePIN projects.',
      },
      {
        label: 'Use Cases',
        text: 'IoT device networks, distributed infrastructure, peer-to-peer services.',
      },
    ],
    source: 'https://minima.global/blog',
    sourceLabel: 'Minima Global Blog',
  },
];
