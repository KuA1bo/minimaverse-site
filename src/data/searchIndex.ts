// src/data/searchIndex.ts
// Search index for client-side fuzzy search with maximum keyword coverage
// Updated: Added Secrets Vaults (LTA Labs) entry for ecosystem security section

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
  { title: "Node Setup Guide", url: "/nodes", description: "Step-by-step guides for running Minima nodes", tags: ["nodes", "setup", "run a node", "guide", "install", "deployment", "server"] },
  { title: "Partnerships", url: "/partners", description: "Confirmed collaborations in the Minima ecosystem", tags: ["partners", "collaborations", "integrations", "partnerships", "alliance", "deals"] },
  { title: "Developers", url: "/developers", description: "Resources and documentation for builders", tags: ["developers", "dev", "api", "docs", "build", "code", "programmers"] },
  { title: "Tools", url: "/tools", description: "Curated utilities and community tools", tags: ["tools", "utilities", "wallets", "explorer", "utils", "apps"] },
  { title: "News & Updates", url: "/news", description: "Latest announcements and community updates", tags: ["news", "updates", "announcements", "changelog", "blog", "posts"] },
  { title: "Timeline", url: "/timeline", description: "Key milestones and protocol roadmap", tags: ["timeline", "roadmap", "history", "milestones", "dates", "events"] },
  { title: "Protocol Deep Dive", url: "/protocol", description: "Technical overview of consensus and architecture", tags: ["protocol", "architecture", "consensus", "technical", "deep dive", "specs"] },
  { title: "Open Questions", url: "/open-questions", description: "FAQs and community discussions", tags: ["faq", "questions", "help", "support", "troubleshooting", "answers"] },
  { title: "External Links", url: "/links", description: "Important community resources and socials", tags: ["links", "community", "social", "resources", "external", "channels"] },

  // === /nodes: Installation Platforms ===
  { title: "Android Node Setup", url: "/nodes#android", description: "Run Minima node on Android via Termux", tags: ["android", "mobile", "termux", "phone", "apk", "install android", "smartphone"] },
  { title: "Windows Node Setup", url: "/nodes#windows", description: "Native Windows node installation guide", tags: ["windows", "desktop", "exe", "pc", "install", "windows setup", "microsoft"] },
  { title: "Linux CLI Setup", url: "/nodes#linux-cli", description: "Command-line interface for Linux desktops", tags: ["linux", "cli", "terminal", "ubuntu", "debian", "command line", "bash"] },
  { title: "Linux Systemd Setup", url: "/nodes#linux-systemd", description: "Systemd service for VPS deployment", tags: ["linux", "systemd", "service", "vps", "daemon", "background", "server"] },
  { title: "Docker VPS Deployment", url: "/nodes#docker", description: "Docker container deployment for VPS", tags: ["docker", "container", "vps", "deploy", "devops", "orchestration", "kubernetes"] },
  { title: "Docker Desktop Setup", url: "/nodes#docker-desktop", description: "Containerized deployment for desktop", tags: ["docker", "desktop", "local", "container", "dev environment", "localhost"] },
  { title: "macOS Node Setup", url: "/nodes#macos", description: "Run Minima node on macOS", tags: ["macos", "mac", "apple", "desktop", "darwin", "osx"] },
  { title: "Raspberry Pi Setup", url: "/nodes#raspberry-pi", description: "Optimized for Pi 4+ devices", tags: ["raspberry pi", "pi", "arm", "single board", "iot", "edge", "sbc"] },

  // === /nodes: Advanced Node Types ===
  { title: "Archive Node", url: "/nodes#archive-node", description: "Full historical blockchain data storage", tags: ["archive", "archive node", "history", "full data", "blockchain storage", "historical", "backup"] },
  { title: "Mega Node", url: "/nodes#mega-node", description: "High-performance node configuration", tags: ["mega", "mega node", "high performance", "throughput", "power node", "advanced", "enterprise"] },
  { title: "Minima E-Gateway (MEG)", url: "/nodes#meg", description: "Enterprise-grade gateway integration", tags: ["meg", "e-gateway", "enterprise", "gateway", "integration", "legacy systems", "business", "api gateway"] },

  // === /nodes: Configuration Terms ===
  { title: "Node Types Overview", url: "/nodes#node-types", description: "Understanding different node configurations", tags: ["node types", "configurations", "overview", "roles", "architecture", "node comparison", "complete node"] },
  { title: "Firewall Rules", url: "/nodes#firewall", description: "Network configurations and port forwarding", tags: ["firewall", "ports", "network", "port forwarding", "connectivity", "security", "rules", "tcp", "udp", "nat"] },
  { title: "Startup Parameters", url: "/nodes#startup", description: "Advanced configuration options and CLI flags", tags: ["startup", "parameters", "cli flags", "configuration", "command line", "advanced settings", "init", "config"] },
  { title: "Peer Lists Configuration", url: "/nodes#firewall", description: "Managing peer connections and network discovery", tags: ["peers", "peer list", "network", "discovery", "p2p", "connections", "mds", "mesh"] },
  { title: "MDS Configuration", url: "/nodes#startup", description: "Minima Distribution System setup options", tags: ["mds", "distribution", "sync", "replication", "data propagation", "messaging"] },
  { title: "Static IP Setup", url: "/nodes#firewall", description: "Configuring static IP for public nodes", tags: ["static ip", "public node", "ip address", "network config", "dns", "routing"] },
  { title: "Java Requirements", url: "/nodes#windows", description: "Java 11+ runtime environment setup", tags: ["java", "jvm", "runtime", "java 11", "java 17", "dependency", "jdk"] },
  { title: "SSD Recommendation", url: "/nodes#linux-cli", description: "Why SSD storage is recommended for nodes", tags: ["ssd", "storage", "disk", "performance", "io", "speed", "nvme"] },
  { title: "RAM Requirements", url: "/nodes#windows", description: "Memory requirements for stable node operation", tags: ["ram", "memory", "2gb", "4gb", "requirements", "specs", "hardware"] },

  // === /about: Protocol Sections ===
  { title: "Consensus Mechanism", url: "/about#consensus", description: "How Minima achieves PoW consensus", tags: ["consensus", "pow", "mining", "proof-of-work", "validation", "security", "tx-pow"] },
  { title: "Mobile First Design", url: "/about#mobile", description: "Why Minima is designed for mobile devices", tags: ["mobile", "phone", "lightweight", "efficiency", "mobile first", "battery", "iot"] },
  { title: "Protocol Architecture", url: "/about#architecture", description: "Technical overview of Minima architecture", tags: ["architecture", "technical", "design", "structure", "layers", "components", "cascading proof chain"] },
  { title: "Compact State", url: "/about#architecture", description: "~300 MB RAM complete blockchain history", tags: ["compact state", "300mb", "ram", "pruning", "storage", "lightweight", "memory"] },
  { title: "Cascading Proof Chain", url: "/about#architecture", description: "256 difficulty levels with logarithmic growth", tags: ["cascading proof chain", "cpc", "difficulty", "poW", "pruning", "headers", "cumulative"] },
  { title: "Burn Mechanism", url: "/about#architecture", description: "Transaction burns instead of fees to miners", tags: ["burn", "burn mechanism", "fees", "no miners", "deflation", "tokenomics", "supply"] },
  { title: "MMR UTXO", url: "/about#architecture", description: "Storage-less UTXO tracking with Merkle proofs", tags: ["mmr", "utxo", "merkle", "proofs", "storage", "tracking", "coins"] },
  { title: "Maxima P2P Network", url: "/about#architecture", description: "Layer 2 backbone for Lightning and sidechains", tags: ["maxima", "p2p", "layer 2", "lightning", "sidechains", "dex", "messaging"] },
  { title: "Pulse Network", url: "/about#architecture", description: "10-minute node health checks with PoW", tags: ["pulse", "ping", "health check", "mempool", "sync", "security", "10 minutes"] },
  { title: "WOTS Cryptography", url: "/about#consensus", description: "Winternitz One-Time Signatures for quantum resistance", tags: ["wots", "winternitz", "signatures", "quantum", "cryptography", "keccak", "hash-based"] },
  { title: "Node Equality", url: "/about", description: "All participants run Complete nodes with equal rights", tags: ["equality", "complete node", "decentralization", "no validators", "peer-to-peer", "fair"] },
  { title: "No Miner Cartels", url: "/about", description: "Distributed PoW prevents 51% attack coordination", tags: ["no miners", "51% attack", "distributed", "security", "cartel", "resistance"] },
  { title: "Censorship Resistance", url: "/about", description: "No central points of failure in the network", tags: ["censorship", "resistance", "decentralized", "no central", "attack resistance", "robust"] },
  { title: "Protocol Immutability", url: "/about", description: "No soft forks allowed, no hard forks required", tags: ["immutable", "no forks", "stable", "complete", "final", "unchangeable"] },

  // === /ecosystem: Infrastructure ===
  { title: "Minima Protocol", url: "/ecosystem#infra", description: "Base layer blockchain for full-node participation", tags: ["minima", "protocol", "layer 1", "blockchain", "base layer", "core"] },
  { title: "Integritas", url: "/ecosystem#infra", description: "AI compliance infrastructure with cryptographic audit trails", tags: ["integritas", "ai", "compliance", "audit", "regulatory", "eu ai act", "iso 42001", "verification", "tamper-evident"] },
  { title: "Minima Terminal", url: "/ecosystem#infra", description: "CLI for node management and transaction creation", tags: ["terminal", "cli", "commands", "node management", "transactions", "interface"] },
  { title: "Minima Scan", url: "/ecosystem#infra", description: "Blockchain explorer for transactions and blocks", tags: ["explorer", "scan", "blockchain", "transactions", "blocks", "addresses", "explorer.minima.global"] },
  { title: "Minima Faucet", url: "/ecosystem#infra", description: "Free test tokens for development", tags: ["faucet", "test tokens", "free", "development", "testing", "eurobuddha"] },

  // === /ecosystem: Wallets ===
  { title: "Minima Wallet Web", url: "/ecosystem#wallets", description: "Browser-based wallet for Minima tokens", tags: ["wallet", "web", "browser", "tokens", "send", "receive", "wallet.minima.global"] },
  { title: "Minima Wallet Mobile", url: "/ecosystem#wallets", description: "Official Android app for Minima", tags: ["wallet", "mobile", "android", "app", "apk", "play store", "com.minima.android"] },
  { title: "MinimaMMR", url: "/ecosystem#wallets", description: "Community node and wallet alternative", tags: ["minimammr", "community", "alternative", "node", "wallet", "mmr"] },

  // === /ecosystem: Exchanges (DeFi) ===
  { title: "MEXC Exchange", url: "/ecosystem#defi", description: "Trade MINIMA/USDT on MEXC", tags: ["mexc", "exchange", "trading", "minima/usdt", "spot", "crypto"] },
  { title: "BitMart Exchange", url: "/ecosystem#defi", description: "Trade MINIMA/USDT on BitMart", tags: ["bitmart", "exchange", "trading", "minima/usdt", "spot", "crypto"] },
  { title: "XT.com Exchange", url: "/ecosystem#defi", description: "Trade MINIMA/USDT on XT.com", tags: ["xt.com", "exchange", "trading", "minima/usdt", "spot", "crypto"] },

  // === /ecosystem: Edge & IoT ===
  { title: "IoT Deployments", url: "/ecosystem#infra", description: "Full-node operation on resource-constrained devices", tags: ["iot", "embedded", "edge", "constrained", "devices", "sensors", "hardware"] },

  // === /ecosystem: Security & Privacy ===
  { 
    title: "Secrets Vaults (LTA Labs)", 
    url: "/ecosystem#security", 
    description: "Wallet backup and sensitive data protection. Official partnership announced Feb 2024.", 
    tags: ["secrets vaults", "lta labs", "wallet backup", "security", "privacy", "partnership", "minima", "in-development", "data protection"] 
  },

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

  // === /developers: Getting Started ===
  { title: "Edge Pioneers Program", url: "/developers#get-started", description: "Official developer portal with SDKs and tutorials", tags: ["edge pioneers", "developer portal", "sdk", "tutorials", "build.minima.global", "onboarding"] },
  { title: "Run a Node Guide", url: "/developers#get-started", description: "Install and configure Minima node for development", tags: ["run a node", "setup", "installation", "configuration", "local development", "testing"] },

  // === /developers: Documentation ===
  { title: "Full Documentation", url: "/developers#api", description: "API references and protocol specifications", tags: ["documentation", "api", "reference", "specs", "protocol", "docs.minima.global"] },
  { title: "Protocol Architecture Docs", url: "/developers#api", description: "Consensus mechanism and network design deep dive", tags: ["architecture", "consensus", "network design", "deep dive", "technical", "at-a-glance"] },
  { title: "TypeScript SDK Guide", url: "/developers#api", description: "Build apps with TypeScript/JavaScript SDK", tags: ["typescript", "sdk", "javascript", "development", "guide", "using-typescript"] },

  // === /developers: Learning Paths ===
  { title: "MiniDapp Structure", url: "/developers#contracts", description: "Learn how MiniDapps are structured", tags: ["minidapp", "structure", "basics", "learn", "tutorial", "mini-dapp"] },
  { title: "Smart Contracts Basics", url: "/developers#contracts", description: "Introduction to scripting on Minima", tags: ["smart contracts", "scripting", "basics", "learn", "kiss", "introduction"] },
  { title: "KISS Scripting Basics", url: "/developers#contracts", description: "Build applications with KISS language", tags: ["kiss", "scripting", "basics", "build", "applications", "contracts-basics"] },

  // === /developers: Tutorials ===
  { title: "Smart Contract Tutorial Series", url: "/developers", description: "Step-by-step guides from Minima docs team", tags: ["tutorial", "smart contract", "series", "step-by-step", "official", "txntutorial"] },
  { title: "MBCOT Community Tutorials", url: "/developers", description: "Additional transaction examples from community", tags: ["mbcot", "community", "tutorials", "examples", "github", "transactions"] },

  // === /developers: Video Resources ===
  { title: "YouTube: Introduction to Minima", url: "/developers", description: "Part 1 video tutorial by Paddy Cherry", tags: ["youtube", "video", "introduction", "part 1", "paddy cherry", "tutorial", "ilp-n7i2zbm"] },
  { title: "YouTube: Timelock Contract", url: "/developers", description: "Part 2: Create a timelock contract tutorial", tags: ["youtube", "video", "timelock", "contract", "part 2", "tutorial", "nykhixiuqii"] },
  { title: "YouTube: Script IDE Guide", url: "/developers", description: "How to use the Script IDE for development", tags: ["youtube", "video", "script ide", "ide", "development", "tutorial", "wefswru3wbe"] },

  // === /developers: Source Code ===
  { title: "Core Protocol Source", url: "/developers", description: "Main Minima protocol implementation", tags: ["source code", "core", "protocol", "implementation", "github", "src/org/minima"] },
  { title: "Minima APK Source", url: "/developers", description: "Official Android APK repository", tags: ["apk", "android", "mobile", "source", "github", "minimaapk"] },
  { title: "Minimak Kotlin Library", url: "/developers", description: "Third-party Kotlin library for Minima", tags: ["minimak", "kotlin", "library", "third-party", "community", "mihbor"] },

  // === /developers: Community ===
  { title: "Discord Dev Channel", url: "/developers", description: "Real-time technical discussions with developers", tags: ["discord", "community", "dev-chat", "support", "q&a", "collaboration", "minimaglobal"] },

  // === /tools: DEX & Bridge Launch ===
  { title: "MiniMaxt DEX", url: "/tools#dex-bridge", description: "Decentralized exchange for Minima ↔ USDT trading", tags: ["minimaxt", "dex", "exchange", "trading", "minima", "usdt", "swap", "defi"] },
  { title: "MXUSD Bridge", url: "/tools#dex-bridge", description: "Cross-chain bridge for USDT swaps in/out of Minima", tags: ["mxusd", "bridge", "cross-chain", "usdt", "swap", "bridge", "interoperability"] },
  { title: "MiniMask Wallet Extension", url: "/tools#dex-bridge", description: "Browser wallet extension for Minima interaction", tags: ["minimask", "wallet", "extension", "browser", "chrome", "brave", "web3", "injection"] },
  { title: "MiniMask Installation Guide", url: "/tools#dex-bridge", description: "Step-by-step: download, unzip, load unpacked", tags: ["minimask", "install", "installation", "load unpacked", "developer mode", "chrome", "setup"] },
  { title: "DEX Wallet Creation", url: "/tools#dex-bridge", description: "Create or restore wallet directly on MiniMaxt", tags: ["dex", "wallet", "create", "restore", "password", "miniMaxt", "trading"] },
  { title: "Block Explorer for Tokens", url: "/tools#dex-bridge", description: "Verify token balances if they appear missing", tags: ["block explorer", "tokens", "balance", "verify", "missing", "block.minima.global"] },
  { title: "DEX Feedback Thread", url: "/tools#dex-bridge", description: "Discord channel for DEX feedback and support", tags: ["feedback", "dex", "discord", "support", "community", "thread"] },
  { title: "MiniMask Feedback Thread", url: "/tools#dex-bridge", description: "Discord channel for MiniMask feedback", tags: ["feedback", "minimask", "discord", "support", "community", "thread"] },
  { title: "Bridge Feedback Thread", url: "/tools#dex-bridge", description: "Discord channel for bridge feedback", tags: ["feedback", "bridge", "discord", "support", "community", "thread"] },

  // === /tools: Official Tools ===
  { title: "Minima Terminal CLI", url: "/tools#official", description: "Advanced node management via command line", tags: ["terminal", "cli", "command line", "node management", "advanced", "commands"] },
  { title: "Minima Scan Explorer", url: "/tools#official", description: "View transactions, blocks, addresses on-chain", tags: ["explorer", "scan", "transactions", "blocks", "addresses", "on-chain", "explorer.minima.global"] },
  { title: "Web Wallet Interface", url: "/tools#official", description: "Browser wallet for tokens and MiniDapps", tags: ["web wallet", "browser", "tokens", "minidapps", "interface", "wallet.minima.global"] },
  { title: "Mobile Wallet APK", url: "/tools#official", description: "Official Android app from GitHub", tags: ["mobile", "apk", "android", "wallet", "github", "download", "minimaapk"] },

  // === /tools: Development Tools ===
  { title: "TypeScript SDK", url: "/tools#dev", description: "Build MiniDapps with high-level abstractions", tags: ["typescript", "sdk", "minidapps", "abstractions", "development", "javascript"] },
  { title: "KISS VM Specification", url: "/tools#dev", description: "Complete smart contract language reference", tags: ["kiss", "vm", "specification", "smart contracts", "language", "reference", "grammar"] },
  { title: "KISS Functions Reference", url: "/tools#dev", description: "40+ built-in functions: SHA2/3, CHECKSIG, MULTISIG", tags: ["kiss", "functions", "sha2", "sha3", "checksig", "multisig", "reference", "built-in"] },
  { title: "RPC API Parameters", url: "/tools#dev", description: "Automate node interaction via RPC", tags: ["rpc", "api", "parameters", "automation", "node", "programmatic", "startup-parameters"] },

  // === Technical Keywords (fuzzy matching boost) ===
  { title: "PoW Consensus", url: "/about#consensus", description: "Transaction-based Proof of Work security model", tags: ["pow", "proof of work", "consensus", "tx-pow", "mining", "security", "validation"] },
  { title: "Tx-PoW", url: "/about#consensus", description: "Every transaction performs ~10s of PoW work", tags: ["tx-pow", "transaction pow", "10 seconds", "work", "mining", "block production"] },
  { title: "KECCAK Hashing", url: "/about#consensus", description: "Hash-based cryptography for quantum resistance", tags: ["keccak", "hashing", "cryptography", "quantum", "resistance", "sha3", "algorithm"] },
  { title: "Complete Node", url: "/about", description: "Every participant stores, verifies, constructs blockchain", tags: ["complete node", "full node", "equal", "participation", "decentralization", "no light clients"] },
  { title: "DePIN", url: "/ecosystem", description: "Decentralized Physical Infrastructure Networks", tags: ["depin", "physical infrastructure", "iot", "hardware", "networks", "real world"] },
  { title: "MiniDapp", url: "/developers", description: "Lightweight decentralized application on Minima", tags: ["minidapp", "mini dapp", "dapp", "application", "lightweight", "smart contract"] },
  { title: "Maxima Layer 2", url: "/about#architecture", description: "P2P backbone for Lightning and sidechains", tags: ["maxima", "layer 2", "l2", "lightning", "sidechain", "p2p", "scaling"] },
  { title: "MMR Proofs", url: "/about#architecture", description: "Merkle Mountain Range proofs for UTXO tracking", tags: ["mmr", "merkle mountain range", "proofs", "utxo", "tracking", "verification"] },
  { title: "Pulse Protocol", url: "/about#architecture", description: "10-minute node health verification with PoW", tags: ["pulse", "protocol", "health", "verification", "10 minutes", "ping", "mempool"] },
   
   // === /links: Official Email Contacts ===
   { title: "Minima Enterprise Email", url: "/links#contacts", description: "Partnerships and business inquiries contact", tags: ["enterprise@minima.global", "partnerships", "business", "email", "contact", "enterprise inquiries"] },
   { title: "Minima Info Email", url: "/links#contacts", description: "General questions and public inquiries", tags: ["info@minima.global", "general", "info", "email", "contact", "public inquiries", "questions"] },
   { title: "Minima Technical Support Email", url: "/links#contacts", description: "Protocol issues and developer assistance", tags: ["querysupport@minima.global", "support", "technical", "developer", "help", "email", "contact", "protocol issues"] },
   { title: "Minima Email Contacts", url: "/links#contacts", description: "All official Minima email addresses for contact", tags: ["email", "contacts", "minima.global", "support", "enterprise", "info", "querysupport", "reach out"] },
];
