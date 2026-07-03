


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
];
