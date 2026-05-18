// src/data/searchIndex.ts
// Search index for client-side fuzzy search with maximum keyword coverage
// Updated: May 18, 2026 - Synced with optimized page anchors, SEO tags, and E-E-A-T safe descriptions

export interface SearchItem {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

export const searchIndex: SearchItem[] = [
  // === PAGES ===
  { title: "Home", url: "/", description: "Neutral Minima Protocol Info Hub", tags: ["home", "minima", "hub", "start", "main", "landing"] },
  { title: "What is Minima", url: "/about", description: "Core features and architecture of the protocol", tags: ["about", "what is minima", "protocol", "intro", "overview", "basics"] },
  { title: "Ecosystem Projects", url: "/ecosystem", description: "Verified projects, tools, and integrations", tags: ["ecosystem", "projects", "dapps", "integrations", "apps", "partners"] },
  { title: "Node Setup Guide", url: "/nodes", description: "Verified guides for running Minima nodes on any platform", tags: ["nodes", "setup", "run a node", "guide", "install", "installation", "deployment", "server"] },
  { title: "Partnerships", url: "/partners", description: "Confirmed collaborations in the Minima ecosystem", tags: ["partners", "collaborations", "integrations", "partnerships", "alliance", "deals"] },
  { title: "Developers", url: "/developers", description: "Resources and documentation for builders", tags: ["developers", "dev", "api", "docs", "build", "code", "programmers"] },
  { title: "Tools", url: "/tools", description: "Curated utilities and community tools", tags: ["tools", "utilities", "wallets", "explorer", "utils", "apps"] },
  { title: "News & Updates", url: "/news", description: "Latest announcements and community updates", tags: ["news", "updates", "announcements", "changelog", "blog", "posts"] },
  { title: "Timeline", url: "/timeline", description: "Key milestones and protocol roadmap", tags: ["timeline", "roadmap", "history", "milestones", "dates", "events"] },
  { title: "Protocol Deep Dive", url: "/protocol", description: "Technical overview of consensus and architecture", tags: ["protocol", "architecture", "consensus", "technical", "deep dive", "specs"] },
  { title: "Open Questions", url: "/open-questions", description: "FAQs and community discussions", tags: ["faq", "questions", "help", "support", "troubleshooting", "answers"] },
  { title: "External Links", url: "/links", description: "Important community resources and socials", tags: ["links", "community", "social", "resources", "external", "channels"] },

  // === /: Home Sections ===
  { title: "Minimaverse Hero", url: "/#hero", description: "Independent knowledge base entry point", tags: ["hero", "start", "landing", "understand minima", "set up node", "explore ecosystem"] },
  { title: "About This Site", url: "/#about-site", description: "Independent community-driven information hub", tags: ["about site", "community driven", "neutral", "verified facts", "no hype"] },
  { title: "Project Principles", url: "/#principles", description: "Verified facts, transparent sourcing, clear status indicators", tags: ["principles", "verified facts", "transparent", "status indicators", "neutral tone"] },
  { title: "Quick Links", url: "/#quick-links", description: "Navigation to protocol, ecosystem, and developer resources", tags: ["quick links", "navigation", "sitemap", "resources", "developer"] },

  // === /about: Protocol Sections ===
  { title: "Mobile-First Design", url: "/about#mobile", description: "Minima is designed to run full nodes on smartphones and IoT", tags: ["mobile", "phone", "lightweight", "efficiency", "mobile first", "battery", "iot", "any device"] },
  { title: "About This Project", url: "/about#about-project", description: "Independent documentation project focused on Minima Protocol", tags: ["about project", "independent", "documentation", "community", "minima foundation"] },
  { title: "Who We Are", url: "/about#who-we-are", description: "Community volunteers maintaining neutral documentation", tags: ["who we are", "community", "volunteers", "maintainers", "contributors"] },
  { title: "Consensus Mechanism", url: "/about#consensus", description: "How Minima achieves PoW consensus without miners", tags: ["consensus", "pow", "mining", "proof-of-work", "validation", "security", "tx-pow"] },
  { title: "Protocol Architecture", url: "/about#architecture", description: "Technical overview of Minima architecture and data structures", tags: ["architecture", "technical", "design", "structure", "layers", "components", "cascading proof chain"] },
  { title: "Minima vs Traditional Blockchains", url: "/about#comparison", description: "Feature comparison table: requirements, fees, scaling, security", tags: ["comparison", "vs", "traditional", "blockchain", "table", "differences", "advantages"] },
  { title: "Decentralization Principles", url: "/about#decentralization", description: "Node equality, no cartels, censorship resistance, immutability", tags: ["decentralization", "principles", "equality", "censorship resistance", "no forks", "immutability"] },
  { title: "How to Contribute", url: "/about#contribute", description: "Open issues, suggest content, translate, share knowledge", tags: ["contribute", "github", "issues", "translate", "community", "help"] },
  { title: "Current Status", url: "/about#status", description: "Protocol maturity, no token incentives, participation requirements", tags: ["status", "maturity", "tokenomics", "no rewards", "periodic connection", "considerations"] },
  { title: "Developer Resources", url: "/about#dev-resources", description: "Edge Pioneers program and official dev portal", tags: ["dev resources", "edge pioneers", "build", "sdk", "developer portal"] },

  // === /protocol: Architecture Sections ===
  { title: "Edge Consensus Architecture", url: "/protocol#edge-consensus", description: "Universal participation: smartphones, Pi, IoT validate equally", tags: ["edge consensus", "universal", "participation", "iot", "smartphone", "validation", "decentralized"] },
  { title: "Tx-PoW: Collaborative Proof of Work", url: "/protocol#tx-pow", description: "Every transaction performs ~10s PoW, collaboratively securing network", tags: ["tx-pow", "collaborative", "proof of work", "10 seconds", "energy efficient", "no mining farms"] },
  { title: "Efficient Data Structures", url: "/protocol#data-structures", description: "Cascading Chain with Superblocks and MMR UTXO", tags: ["data structures", "cascading chain", "superblocks", "mmr", "utxo", "storage optimization"] },
  { title: "Protocol Layers", url: "/protocol#layers", description: "Minima L1, Maxima, Omnia L2, MiniDapps L3 stack", tags: ["layers", "stack", "l1", "l2", "l3", "maxima", "omnia", "minidapps", "scaling"] },
  { title: "Technical Specifications", url: "/protocol#specs", description: "Detailed specs: Tx-PoW difficulty, block size, RAM, consensus, quantum resistance", tags: ["specifications", "specs", "difficulty", "block size", "ram", "ghost", "quantum", "keccak", "wots"] },
  { title: "Network Participation Requirements", url: "/protocol#participation", description: "Weekly connection required for MMR updates and Tx-PoW contribution", tags: ["participation", "requirements", "weekly", "sync", "mmr proof", "complete node", "forever"] },

  // === /nodes: Main Sections (Updated) ===
  { title: "About Node Setup", url: "/nodes#intro", description: "Overview: desktop, mobile, Pi, cloud servers. Public reports indicate 100k+ installations", tags: ["intro", "overview", "100000 nodes", "depin", "decentralization", "global network"] },
  { title: "System Requirements", url: "/nodes#requirements", description: "Minimum: 2GB RAM, 10GB disk, Java 11+. Recommended: 4GB RAM, SSD, Static IP", tags: ["requirements", "specs", "ram", "ssd", "java", "hardware", "2gb", "4gb", "disk space"] },
  { title: "Why Run a Node?", url: "/nodes#why-run", description: "Practical benefits: DePIN infrastructure, P2P apps, network resilience, independent verification", tags: ["why run", "benefits", "depin", "p2p", "resilience", "verification", "infrastructure", "censorship resistance"] },
  { title: "Expert Guide by Paddy Cerri", url: "/nodes#expert-guide", description: "Alternative setup with peer lists, MDS config, Docker tips from Minima architect", tags: ["expert", "paddy cerri", "spartacusrex", "advanced", "troubleshooting", "peer lists", "mds", "alternative guide"] },

  // === /nodes: Quick Start & Installation Platforms ===
  { title: "Quick Start: Android or Docker", url: "/nodes", description: "Beginner-friendly setup options for new Minima users", tags: ["quick start", "beginner", "android", "docker", "easy setup", "onboarding", "first time"] },
  { title: "Android Node Setup", url: "/nodes#android", description: "Run Minima node on Android via Termux or APK", tags: ["android", "mobile", "termux", "phone", "apk", "install android", "smartphone", "play store"] },
  { title: "Windows Node Setup", url: "/nodes#windows", description: "Native Windows node installation guide", tags: ["windows", "desktop", "exe", "pc", "install", "windows setup", "microsoft"] },
  { title: "Linux CLI Setup", url: "/nodes#linux-cli", description: "Command-line interface for Linux desktops", tags: ["linux", "cli", "terminal", "ubuntu", "debian", "command line", "bash"] },
  { title: "Linux Systemd Setup", url: "/nodes#linux-systemd", description: "Systemd service for VPS deployment", tags: ["linux", "systemd", "service", "vps", "daemon", "background", "server", "autostart"] },
  { title: "Docker VPS Deployment", url: "/nodes#docker", description: "Docker container deployment for VPS", tags: ["docker", "container", "vps", "deploy", "devops", "orchestration", "kubernetes", "linux vps"] },
  { title: "Docker Desktop Setup", url: "/nodes#docker-desktop", description: "Containerized deployment for desktop", tags: ["docker", "desktop", "local", "container", "dev environment", "localhost", "macos docker", "windows docker"] },
  { title: "macOS Node Setup", url: "/nodes#macos", description: "Run Minima node on macOS", tags: ["macos", "mac", "apple", "desktop", "darwin", "osx", "brew"] },
  { title: "Raspberry Pi Setup", url: "/nodes#raspberry-pi", description: "Optimized for Pi 4+ devices", tags: ["raspberry pi", "pi", "arm", "single board", "iot", "edge", "sbc", "low power"] },

  // === /nodes: Advanced Node Types & Configuration ===
  { title: "Archive Node", url: "/nodes#archive-node", description: "Full historical blockchain data storage", tags: ["archive", "archive node", "history", "full data", "blockchain storage", "historical", "backup"] },
  { title: "Mega Node", url: "/nodes#mega-node", description: "High-performance node configuration", tags: ["mega", "mega node", "high performance", "throughput", "power node", "advanced", "enterprise"] },
  { title: "Minima E-Gateway (MEG)", url: "/nodes#meg", description: "Enterprise-grade gateway integration", tags: ["meg", "e-gateway", "enterprise", "gateway", "integration", "legacy systems", "business", "api gateway"] },
  { title: "Node Types Overview", url: "/nodes#node-types", description: "Understanding different node configurations", tags: ["node types", "configurations", "overview", "roles", "architecture", "node comparison", "complete node"] },
  { title: "Firewall Rules", url: "/nodes#firewall", description: "Network configurations and port forwarding", tags: ["firewall", "ports", "network", "port forwarding", "connectivity", "security", "rules", "tcp", "udp", "nat"] },
  { title: "Startup Parameters", url: "/nodes#startup", description: "Advanced configuration options and CLI flags", tags: ["startup", "parameters", "cli flags", "configuration", "command line", "advanced settings", "init", "config"] },

  // === /ecosystem: Sections ===
  { title: "Ecosystem Intro & Status", url: "/ecosystem#intro", description: "Verified projects list with community contribution status legend", tags: ["ecosystem intro", "verified", "status legend", "confirmed", "in-development", "community"] },
  { title: "Core Infrastructure", url: "/ecosystem#infra", description: "Minima Protocol base layer and Integritas AI compliance", tags: ["minima", "protocol", "layer 1", "blockchain", "base layer", "core", "integritas", "ai", "compliance"] },
  { title: "Developer Tools", url: "/ecosystem#dev-tools", description: "Terminal, Explorer, SDKs, and Faucet for testing", tags: ["terminal", "cli", "commands", "node management", "explorer", "sdk", "api", "faucet", "test tokens"] },
  { title: "Wallets", url: "/ecosystem#wallets", description: "Official Web, Mobile, and community alternatives", tags: ["wallet", "web", "browser", "mobile", "android", "app", "apk", "play store", "minimammr", "mmr"] },
  { title: "Centralized Exchanges", url: "/ecosystem#defi", description: "MEXC, BitMart, XT.com trading pairs", tags: ["mexc", "bitmart", "xt.com", "exchange", "trading", "minima/usdt", "spot", "crypto", "liquidity"] },
  { title: "Edge Deployments", url: "/ecosystem#edge", description: "IoT & embedded systems full-node capability", tags: ["iot", "embedded", "edge", "constrained", "devices", "sensors", "hardware", "depin"] },

  // === /developers: Sections ===
  { title: "Developer Intro", url: "/developers#intro", description: "Aggregated verified resources for building on Minima", tags: ["dev intro", "resources", "building", "aggregated", "official", "community"] },
  { title: "Official Developer Portal", url: "/developers#get-started", description: "Edge Pioneers Program: SDKs, tutorials, templates", tags: ["edge pioneers", "developer portal", "sdk", "tutorials", "build.minima.global", "onboarding", "templates"] },
  { title: "Technical Documentation", url: "/developers#api", description: "Full docs, protocol architecture, TypeScript SDK", tags: ["documentation", "api", "reference", "specs", "protocol", "docs.minima.global", "typescript"] },
  { title: "Learning Paths", url: "/developers#contracts", description: "MiniDapp structure, smart contracts, KISS scripting", tags: ["minidapp", "structure", "smart contracts", "scripting", "kiss", "vm", "learning", "basics"] },
  { title: "Tutorials", url: "/developers#tutorials", description: "Official Tx-PoW guides and community MBCOT examples", tags: ["tutorial", "smart contract", "series", "step-by-step", "mbcot", "community", "github", "transactions"] },
  { title: "Video Resources", url: "/developers#videos", description: "YouTube series by Paddy Cherry: Intro, Timelock, IDE", tags: ["youtube", "video", "introduction", "paddy cherry", "timelock", "ide", "tutorial", "visual"] },
  { title: "Getting Started", url: "/developers#getting-started", description: "Run a full node locally for development", tags: ["getting started", "run a node", "setup", "local development", "testing", "guide"] },
  { title: "Source Code", url: "/developers#source-code", description: "Core protocol, APK, minimak Kotlin library", tags: ["source code", "core", "protocol", "apk", "android", "kotlin", "library", "github", "open source"] },
  { title: "Community & Support", url: "/developers#community", description: "Discord dev-chat, role assignment, Q&A", tags: ["discord", "community", "dev-chat", "support", "q&a", "collaboration", "minimaglobal", "role picker"] },

  // === /partners: ALL Partnerships (reverse chronological) ===
  { title: "Zeekr Partnership", url: "/partners#verified", description: "EV charging solution with Zeekr for private station access", tags: ["zeekr", "ev", "charging", "electric vehicle", "mobility", "access", "private stations", "march 2025"] },
  { title: "SchoolTry Partnership", url: "/partners#verified", description: "Minima blockchain curriculum for 2M Nigerian students", tags: ["schooltry", "education", "curriculum", "nigeria", "students", "blockchain education", "march 2025"] },
  { title: "Arm Flexible Access", url: "/partners#verified", description: "Minima chip development via Arm program", tags: ["arm", "chip", "hardware", "flexible access", "development", "semiconductor", "december 2024"] },
  { title: "Trust Exchange", url: "/partners#verified", description: "Decentralized RWA verification with blockchain attestation", tags: ["trust exchange", "rwa", "real world assets", "verification", "attestation", "data", "november 2024"] },
  { title: "CPIN Partnership", url: "/partners#verified", description: "Secure renewable energy data with Minima infrastructure", tags: ["cpin", "renewable energy", "data security", "green energy", "infrastructure", "october 2024"] },
  { title: "Mercury Global", url: "/partners#verified", description: "Decentralized SWIFT alternative pilot for global payments", tags: ["mercury global", "swift", "payments", "global", "pilot", "financial", "july 2024"] },
  { title: "Sfero Partnership", url: "/partners#verified", description: "Retail payment systems revolution with Minima", tags: ["sfero", "retail", "payments", "pos", "merchant", "july 2024"] },
  { title: "McLaren GT4", url: "/partners#verified", description: "Blockchain race data recorder for McLaren supercar", tags: ["mclaren", "gt4", "racing", "motorsport", "data logger", "spa", "june 2024"] },
  { title: "OPP Partnership", url: "/partners#verified", description: "Tokenized access to private EV charging stations worldwide", tags: ["opp", "online payment platform", "ev charging", "tokenized", "access", "april 2024"] },
  { title: "ABB SynerLeap", url: "/partners#verified", description: "Energy and industrial IoT innovation with ABB hub", tags: ["abb", "synerleap", "energy", "industrial iot", "innovation", "hub", "march 2024"] },
  { title: "Gaia-X Membership", url: "/partners#verified", description: "European data infrastructure sovereignty initiative", tags: ["gaia-x", "europe", "data sovereignty", "infrastructure", "initiative", "march 2024"] },
  { title: "Streamr Partnership", url: "/partners#verified", description: "Secure real-time data streaming on Minima", tags: ["streamr", "streaming", "real-time", "data", "secure", "march 2024"] },
  { title: "Wicrypt Partnership", url: "/partners#verified", description: "DePIN Wi-Fi network for global internet access", tags: ["wicrypt", "wifi", "depin", "internet access", "global", "democratize", "february 2024"] },
  { title: "LTA Labs Partnership", url: "/partners#verified", description: "Financial products suite leveraging Minima infrastructure", tags: ["lta labs", "financial products", "defi", "suite", "infrastructure", "february 2024"] },

  // === /tools: DEX & Bridge ===
  { title: "MiniMaxt DEX", url: "/tools#dex-bridge", description: "Decentralized exchange for Minima ↔ USDT trading", tags: ["minimaxt", "dex", "exchange", "trading", "minima", "usdt", "swap", "defi"] },
  { title: "MXUSD Bridge", url: "/tools#dex-bridge", description: "Cross-chain bridge for USDT swaps in/out of Minima", tags: ["mxusd", "bridge", "cross-chain", "usdt", "swap", "interoperability"] },
  { title: "MiniMask Wallet Extension", url: "/tools#dex-bridge", description: "Browser wallet extension for Minima interaction", tags: ["minimask", "wallet", "extension", "browser", "chrome", "brave", "web3", "injection"] },

  // === /tools: Official & Dev Tools ===
  { title: "Official Tools", url: "/tools#official", description: "Terminal CLI, Scan Explorer, Web/Mobile wallets", tags: ["terminal", "cli", "explorer", "scan", "web wallet", "mobile apk", "official"] },
  { title: "Development Tools", url: "/tools#dev", description: "TypeScript SDK, KISS VM spec, built-in functions, RPC API", tags: ["typescript", "sdk", "kiss", "vm", "specification", "sha2", "multisig", "rpc", "api", "automation"] },

  // === Technical Keywords (fuzzy matching boost) ===
  { title: "PoW Consensus", url: "/about#consensus", description: "Transaction-based Proof of Work security model", tags: ["pow", "proof of work", "consensus", "tx-pow", "mining", "security", "validation"] },
  { title: "Complete Node", url: "/about", description: "Every participant stores, verifies, constructs blockchain", tags: ["complete node", "full node", "equal", "participation", "decentralization", "no light clients"] },
  { title: "DePIN", url: "/ecosystem", description: "Decentralized Physical Infrastructure Networks", tags: ["depin", "physical infrastructure", "iot", "hardware", "networks", "real world"] },
  { title: "MiniDapp", url: "/developers", description: "Lightweight decentralized application on Minima", tags: ["minidapp", "mini dapp", "dapp", "application", "lightweight", "smart contract"] },
  { title: "Maxima Layer 2", url: "/about#architecture", description: "P2P backbone for Lightning and sidechains", tags: ["maxima", "layer 2", "l2", "lightning", "sidechain", "p2p", "scaling"] },
  { title: "Pulse Protocol", url: "/about#architecture", description: "10-minute node health verification with PoW", tags: ["pulse", "protocol", "health", "verification", "10 minutes", "ping", "mempool"] },

  // === /links: Official Email Contacts ===
  { title: "Minima Enterprise Email", url: "/links#contacts", description: "Partnerships and business inquiries contact", tags: ["enterprise@minima.global", "partnerships", "business", "email", "contact", "enterprise inquiries"] },
  { title: "Minima Info Email", url: "/links#contacts", description: "General questions and public inquiries", tags: ["info@minima.global", "general", "info", "email", "contact", "public inquiries", "questions"] },
  { title: "Minima Technical Support Email", url: "/links#contacts", description: "Protocol issues and developer assistance", tags: ["querysupport@minima.global", "support", "technical", "developer", "help", "email", "contact", "protocol issues"] },
  { title: "Minima Email Contacts", url: "/links#contacts", description: "All official Minima email addresses for contact", tags: ["email", "contacts", "minima.global", "support", "enterprise", "info", "querysupport", "reach out"] },
];
