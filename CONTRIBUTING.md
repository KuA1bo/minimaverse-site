# Contributing to Minimaverse

Minimaverse is an independent, community-driven information hub for the Minima protocol. This document outlines how to contribute to the project.

## Project Principles
Before contributing, please review our core content policies:

| Principle | Requirement |
|-----------|-------------|
| Verified Facts Only | All information must be sourced from official documentation, whitepapers, or publicly verified announcements |
| Transparent Sourcing | Each fact must include a link to its primary source (one fact = one source) |
| Clear Status Indicators | Features and projects must be labeled: `confirmed`, `in-development`, `experimental`, `speculative` |
| Neutral Tone | No marketing language, hype, or subjective evaluations |
| No Placeholders | If verified information is unavailable, omit the section entirely |

## Content Guidelines
### Acceptable Content
- Technical documentation links
- Protocol architecture explanations
- Verified milestone documentation
- Developer resources and tools
- Publicly announced partnerships (with primary source)
- Official announcements (press releases, RFCs, GitHub repos)

### Prohibited Content
- Price predictions or market analysis
- Tokenomics speculation
- Unverified rumors or "insider information"
- Marketing language (`revolutionary`, `best`, `game-changing`)
- Subjective opinions or endorsements

## Sourcing Requirements
Every claim must include a verifiable primary source.

### Example: Correct Source Attribution
```tsx
// components/PrimarySource.tsx
<PrimarySource
  label="Official Documentation"
  url="https://docs.minima.global"
  status="confirmed"
/>
```

### Example: Status Badge Usage
```tsx
// Status labels must use canonical values
const status = "confirmed" | "in-development" | "experimental" | "speculative";
```

## How to Contribute
### Option 1: Report an Issue
Use this method for typos, broken links, or incorrect facts:
→ [New Issue: Bug Report](https://github.com/KuA1bo/minimaverse-site/issues/new?template=bug-report.md)

### Option 2: Submit a Pull Request
Use this method for direct fixes or content updates:
1. Fork the repository
2. Create a feature branch: `git checkout -b fix/typo-readme`
3. Make your changes (follow Content Guidelines above)
4. Test locally: `npm run dev`
5. Submit PR with descriptive title and context

## Code Standards
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS (no inline styles)
- Component structure: Functional components + hooks
- Linting: ESLint + Prettier (auto-fix on commit)

## Review Process
1. PR submitted → automated checks run (lint, typecheck, build)
2. Maintainer review (focus: sourcing, tone, status labels)
3. Feedback or approval within 3-5 business days
4. Merge to `main` → auto-deploy via Vercel

## Questions?
- Technical issues: [GitHub Issues](https://github.com/KuA1bo/minimaverse-site/issues)
- Content policy: `contact@minimaverse.com`
- Ecosystem submissions: `/submit-project` on live site

## Disclaimer
Minimaverse is a community-driven independent project. Not officially affiliated with Minima Global. All contributions must adhere to neutral, source-based content policy.
