import type { Bi } from "./dictionaries";

export const links = {
  github: "https://github.com/NurizkiAnsyah22",
  linkedin: "https://linkedin.com/in/nurizkiansyah",
  email: "nurizkiansyah02@gmail.com",
  virai: "https://virai.id",
  viraiApp: "https://app.virai.id",
};

export type Project = {
  slug: string;
  name: string;
  status: "live" | "internal";
  size: "large" | "medium" | "small";
  category: Bi;
  description: Bi;
  highlights: Bi[];
  tags: string[];
  role: Bi;
  links: { label: Bi; href: string }[];
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "virai",
    name: "Virai",
    status: "live",
    size: "large",
    category: {
      id: "AI SaaS — Otomasi WhatsApp Bisnis",
      en: "AI SaaS — WhatsApp Business Automation",
    },
    description: {
      id: "Pegawai AI untuk nomor WhatsApp bisnis: membalas pelanggan 24 jam, mencatat pesanan, mengirim QRIS otomatis, mengelola CRM pelanggan, broadcast anti-banned, hingga laporan performa harian yang terkirim otomatis ke WhatsApp pemilik usaha. Sudah live di production dan dipakai lintas industri (UMKM, klinik, leasing, asuransi, jasa profesional).",
      en: "An AI employee for business WhatsApp numbers: replies to customers 24/7, logs orders, sends QRIS automatically, manages a customer CRM, sends anti-ban broadcasts, and delivers a daily performance report straight to the owner's WhatsApp. Live in production and used across industries (SMEs, clinics, leasing, insurance, professional services).",
    },
    highlights: [
      {
        id: "AI Customer Service dengan human-takeover satu tombol",
        en: "AI Customer Service with one-tap human takeover",
      },
      {
        id: "Knowledge Base AI — membaca PDF/Excel/foto menu jadi pengetahuan AI (termasuk AI Vision untuk dokumen scan)",
        en: "AI Knowledge Base — turns PDFs/Excel/menu photos into AI knowledge (including AI Vision for scanned documents)",
      },
      {
        id: "Order & QRIS otomatis dengan pengurangan stok otomatis di backend",
        en: "Automated Order & QRIS flow with backend-driven stock deduction",
      },
      {
        id: "Multi-nomor WhatsApp dalam satu dashboard, tiered pricing Free–Business",
        en: "Multi-number WhatsApp in one dashboard, tiered Free–Business pricing",
      },
    ],
    tags: ["Next.js", "AI / LLM", "WhatsApp API", "Multi-tenant SaaS", "CRM"],
    role: { id: "Founder & Full Stack Developer", en: "Founder & Full Stack Developer" },
    image: "/virai/dashboard-card.jpg",
    links: [
      { label: { id: "Kunjungi Situs", en: "Visit Website" }, href: links.virai },
      { label: { id: "Buka App", en: "Open App" }, href: links.viraiApp },
      { label: { id: "GitHub", en: "GitHub" }, href: links.github },
    ],
  },
  {
    slug: "ecommerce-umkm",
    name: "E-Commerce Platforms for Local SMEs",
    status: "internal",
    size: "small",
    category: { id: "Freelance — Web Development", en: "Freelance — Web Development" },
    description: {
      id: "UMKM di Jakarta kewalahan mengelola pesanan lewat chat manual dan catatan Excel — order tercecer, stok sering tidak sinkron. Saya bangun platform e-commerce end-to-end (katalog, checkout, manajemen stok) yang memindahkan proses pemesanan mereka dari manual ke otomatis, lengkap dengan WhatsApp gateway untuk notifikasi & promosi. Pengalaman inilah yang jadi cikal bakal Virai.",
      en: "Local SMEs in Jakarta were drowning in manual order-taking across chat threads and spreadsheets — orders got lost, stock counts drifted out of sync. I built end-to-end e-commerce platforms (catalog, checkout, inventory) that moved their ordering process from manual to automated, complete with a WhatsApp gateway for notifications and promotions. This hands-on experience is where the idea for Virai was born.",
    },
    highlights: [
      { id: "Memindahkan pencatatan pesanan dari chat/Excel manual ke sistem otomatis", en: "Moved order tracking from manual chat/spreadsheets to an automated system" },
      { id: "Mengelola proyek end-to-end untuk beberapa klien independen, dari requirement sampai dukungan pasca-launch", en: "Managed end-to-end delivery for multiple independent clients, from requirements to post-launch support" },
      { id: "WhatsApp gateway untuk notifikasi pesanan & automasi promosi — versi awal dari Virai", en: "WhatsApp gateway for order notifications & promo automation — the early version of Virai" },
    ],
    tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Node.js"],
    role: { id: "Freelance Full Stack Software Engineer", en: "Freelance Full Stack Software Engineer" },
    image: "/projects/ecommerce.jpg",
    links: [],
  },
  {
    slug: "trellix-dlp-bsi",
    name: "Trellix DLP Program — PT Bank Syariah Indonesia",
    status: "internal",
    size: "medium",
    category: {
      id: "Enterprise Security — Data Loss Prevention",
      en: "Enterprise Security — Data Loss Prevention",
    },
    description: {
      id: "Case study tambahan di luar dunia produk: membangun program Data Loss Prevention dari nol untuk salah satu bank syariah terbesar di Indonesia, termasuk automasi pelaporan insiden custom pakai Excel VBA. Bukti bahwa insting engineering saya jalan bahkan di pekerjaan security.",
      en: "A bonus case study outside the product world: built a Data Loss Prevention program from scratch for one of Indonesia's largest Islamic banks, including a custom Excel VBA incident-reporting automation. Proof that my engineering instinct runs even inside security work.",
    },
    highlights: [
      {
        id: "Mengelola kebijakan DLP untuk 23.000+ endpoint",
        en: "Managing DLP policy coverage across 23,000+ endpoints",
      },
      {
        id: "Membangun tool automasi laporan insiden (Excel VBA) — bukan sekadar konfigurasi vendor",
        en: "Built a custom incident-reporting automation tool (Excel VBA) — not just vendor configuration",
      },
    ],
    tags: ["Trellix ePO", "Skyhigh CASB", "Excel VBA Automation"],
    role: { id: "DLP Engineer", en: "DLP Engineer" },
    image: "/projects/trellix.jpg",
    links: [],
  },
];

export type Job = {
  role: Bi;
  company: Bi;
  period: Bi;
  bullets: Bi[];
  tags: string[];
};

export const experience: Job[] = [
  {
    role: { id: "DLP Engineer", en: "DLP Engineer" },
    company: {
      id: "PT Logistik Teknologi Indonesia (Integra) — onsite di PT Bank Syariah Indonesia",
      en: "PT Logistik Teknologi Indonesia (Integra) — onsite at PT Bank Syariah Indonesia",
    },
    period: { id: "Des 2023 — Sekarang", en: "Dec 2023 — Present" },
    bullets: [
      {
        id: "Mengambil alih program DLP dari nol — tanpa ruleset atau dokumentasi yang ada — dengan menjalankan sesi Data Flow Analysis bersama unit bisnis internal",
        en: "Took ownership of the DLP program from zero — no existing ruleset or documentation — by running Data Flow Analysis sessions with internal business units",
      },
      {
        id: "Merancang & mengimplementasikan kebijakan di Trellix ePO (endpoint) dan Skyhigh CASB (email & cloud) untuk melindungi data finansial dan pelanggan",
        en: "Designed & implemented policies on Trellix ePO (endpoint) and Skyhigh CASB (email & cloud) to protect financial and customer data",
      },
      {
        id: "Membangun tool automasi pelaporan insiden sendiri memakai Excel VBA — satu klik menghasilkan rekap harian/mingguan/bulanan lengkap dengan dashboard pivot",
        en: "Built a custom incident-reporting automation tool using Excel VBA — one click generates daily/weekly/monthly recaps complete with pivot dashboards",
      },
      {
        id: "Menangani eskalasi teknis langsung dengan tim principal Trellix & Skyhigh",
        en: "Handled direct technical escalations with Trellix & Skyhigh principal teams",
      },
    ],
    tags: ["Trellix ePO", "Skyhigh CASB", "Excel VBA", "Power Automate"],
  },
  {
    role: {
      id: "Freelance Full Stack Software Engineer",
      en: "Freelance Full Stack Software Engineer",
    },
    company: { id: "Mandiri (Self-employed) — Jakarta", en: "Self-employed — Jakarta" },
    period: { id: "Jul 2021 — Sekarang", en: "Jul 2021 — Present" },
    bullets: [
      {
        id: "Membangun proyek software end-to-end sebagai full stack software engineer — mulai dari arsitektur, frontend, backend, sampai deployment",
        en: "Building software projects end-to-end as a full stack software engineer — from architecture, frontend, and backend, to deployment",
      },
      {
        id: "Mengembangkan Virai dari nol sebagai proyek independen — kini menjadi produk AI SaaS yang live di production",
        en: "Developed Virai from scratch as an independent project — now a live production AI SaaS product",
      },
      {
        id: "Mengirimkan platform e-commerce untuk UMKM lokal berbasis PHP/Laravel & JavaScript",
        en: "Delivered e-commerce platforms for local SMEs built with PHP/Laravel & JavaScript",
      },
      {
        id: "Mengelola siklus proyek penuh secara mandiri: requirement, development, testing, delivery, dan dukungan pasca-launch",
        en: "Independently managed full project cycles: requirements, development, testing, delivery, and post-launch support",
      },
    ],
    tags: ["React", "Next.js", "Node.js", "Laravel", "PostgreSQL"],
  },
  {
    role: { id: "IT Support Technician", en: "IT Support Technician" },
    company: { id: "PT Vanwellis Indonesia — Jakarta", en: "PT Vanwellis Indonesia — Jakarta" },
    period: { id: "Jul 2019 — Jun 2021", en: "Jul 2019 — Jun 2021" },
    bullets: [
      {
        id: "Dukungan teknis untuk hardware, software, dan jaringan — menjaga sistem tetap berjalan dengan downtime minimal",
        en: "Provided technical support for hardware, software, and network issues — keeping systems running with minimal downtime",
      },
      {
        id: "Memelihara infrastruktur LAN/WAN, server, dan workstation",
        en: "Maintained LAN/WAN network infrastructure, servers, and workstations",
      },
    ],
    tags: ["Networking", "Windows Server", "IT Support"],
  },
];

export const education = {
  degree: {
    id: "Sarjana Sistem Informasi",
    en: "Bachelor's Degree in Information Systems",
  } as Bi,
  school: "Institut Bisnis & Informatika Kosgoro 1957 — Jakarta",
  period: "2019 — 2023",
  gpa: "GPA 3.38 / 4.00",
  notes: [
    {
      id: "Membangun aplikasi web Online Attendance saat magang (PKL) — dipakai aktif oleh perusahaan tempat magang",
      en: "Built an Online Attendance web app during internship — actively used by the host company",
    },
    {
      id: "Skripsi: Sistem Manajemen Inventori penuh, dari requirement & desain sistem (ERD, DFD) hingga deployment",
      en: "Thesis: a full Inventory Management System, from requirements & system design (ERD, DFD) through deployment",
    },
  ] as Bi[],
};

export const certifications: { name: string; issuer: string; year: string }[] = [
  { name: "Data Loss Prevention Endpoint", issuer: "Trellix", year: "2024" },
  { name: "Endpoint Security", issuer: "Trellix", year: "2024" },
  { name: "ePolicy Orchestrator (ePO) On-Prem", issuer: "Trellix", year: "2024" },
  { name: "Database Security", issuer: "Trellix", year: "2024" },
  { name: "Application Control & Change Control", issuer: "Trellix", year: "2024" },
  { name: "CCNA — ITN, SRWE, ENSA", issuer: "Cisco", year: "2024" },
  { name: "Full Stack Open", issuer: "University of Helsinki", year: "2025" },
  {
    name: "Meta Back-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    year: "2025",
  },
];

export type SkillGroup = {
  title: Bi;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { id: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: { id: "Backend", en: "Backend" },
    items: ["Node.js", "Express.js", "Laravel", "PHP", "REST API"],
  },
  {
    title: { id: "Database", en: "Database" },
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "MongoDB"],
  },
  {
    title: { id: "Infrastruktur", en: "Infrastructure" },
    items: ["Docker", "Linux", "Vercel", "GitHub", "VPS Deployment"],
  },
  {
    title: { id: "Enterprise Security", en: "Enterprise Security" },
    items: [
      "Trellix DLP / ePO",
      "Skyhigh CASB",
      "Microsoft 365 Security",
      "Endpoint Security",
      "Cisco CCNA / Networking",
    ],
  },
];

export const aboutParagraphs: Bi[] = [
  {
    id: "Saya Full Stack Software Engineer yang membangun produk, bukan sekadar fitur. Proyek utama saya, Virai, adalah pegawai AI untuk WhatsApp bisnis — live di production, punya pelanggan nyata, dan punya harga — dipakai lintas industri dari UMKM sampai klinik dan perusahaan jasa keuangan.",
    en: "I'm a Full Stack Software Engineer who builds products, not just features. My flagship project, Virai, is an AI employee for business WhatsApp — live in production, with real customers and real pricing — used across industries from SMEs to clinics and financial services companies.",
  },
  {
    id: "Sebelum Virai, saya menghabiskan bertahun-tahun sebagai freelance software engineer, mengirimkan platform e-commerce dan tool automasi untuk klien nyata — pola yang sama terus berulang: kalau prosesnya masih manual, saya anggap itu bug yang harus diperbaiki.",
    en: "Before Virai, I spent years as a freelance software engineer, shipping e-commerce platforms and automation tools for real clients — the same pattern kept repeating: if a process is still manual, I treat it as a bug to fix.",
  },
  {
    id: "Sebagai nilai tambah, saya juga punya pengalaman Enterprise Security nyata — mengamankan data untuk 23.000+ endpoint di salah satu bank syariah terbesar di Indonesia, lengkap dengan sistem automasi pelaporan yang saya bangun sendiri memakai Excel VBA.",
    en: "As a bonus edge, I also have real Enterprise Security experience — securing data across 23,000+ endpoints at one of Indonesia's largest Islamic banks, complete with a self-built reporting automation system using Excel VBA.",
  },
  {
    id: "Tujuan jangka panjang saya adalah membangun produk SaaS yang dipakai oleh ribuan bisnis — Virai baru permulaan.",
    en: "My long-term goal is to build SaaS products used by thousands of businesses — Virai is just the beginning.",
  },
];

export const differentiators: { title: Bi; description: Bi }[] = [
  {
    title: {
      id: "Saya Mengirim Produk, Bukan Cuma Kode",
      en: "I Ship Products, Not Just Code",
    },
    description: {
      id: "Virai bukan proyek portfolio — dia live, punya pelanggan, dan punya harga. Saya menilai diri dari apa yang benar-benar dipakai orang, bukan dari repo yang rapi.",
      en: "Virai isn't a portfolio project — it's live, has real customers, and has real pricing. I measure myself by what people actually use, not by how clean the repo looks.",
    },
  },
  {
    title: { id: "SaaS Founder Sekaligus Full Stack Engineer", en: "SaaS Founder and Full Stack Engineer, at Once" },
    description: {
      id: "Saya merancang, membangun, dan menjalankan produk saya sendiri dari nol — arsitektur, UI, backend, sampai strategi harga.",
      en: "I design, build, and run my own product end-to-end — architecture, UI, backend, all the way to pricing strategy.",
    },
  },
  {
    title: { id: "Automation-First Mindset", en: "Automation-First Mindset" },
    description: {
      id: "Kalau sebuah proses masih manual, saya anggap itu bug. Pola ini konsisten muncul di setiap peran yang pernah saya jalani.",
      en: "If a process is still manual, I treat that as a bug. This pattern shows up consistently across every role I've held.",
    },
  },
  {
    title: {
      id: "Bonus: Pengalaman Enterprise Security Nyata",
      en: "Bonus: Real Enterprise Security Experience",
    },
    description: {
      id: "Di luar produk, saya juga menjaga keamanan data untuk 23.000+ endpoint di bank syariah terbesar di Indonesia — nilai tambah yang jarang dimiliki software engineer lain.",
      en: "Outside of product work, I also secure data across 23,000+ endpoints at one of Indonesia's largest Islamic banks — an edge most software engineers don't have.",
    },
  },
];

export const viraiFeatures: { title: Bi; description: Bi; image: string }[] = [
  {
    title: { id: "Ringkasan & Skor Kesehatan AI", en: "Dashboard & AI Health Score" },
    description: {
      id: "Status koneksi, channel aktif, dan skor kesehatan AI real-time — semua kelihatan dalam satu layar begitu login.",
      en: "Connection status, active channels, and a real-time AI health score — all visible in one screen right after login.",
    },
    image: "/virai/dashboard.jpg",
  },
  {
    title: { id: "Analitik Percakapan", en: "Conversation Analytics" },
    description: {
      id: "Balasan AI, tingkat gagal balas, rata-rata waktu respons, sampai rekomendasi perbaikan otomatis dari pola percakapan nyata.",
      en: "AI reply volume, failure rate, average response time, and auto-generated improvement recommendations from real conversation patterns.",
    },
    image: "/virai/analytics.jpg",
  },
  {
    title: { id: "Live Chat", en: "Live Chat" },
    description: {
      id: "Semua percakapan WhatsApp masuk real-time, terpilah antara yang ditangani AI dan yang di-takeover manual.",
      en: "Every WhatsApp conversation streams in real-time, split between AI-handled and manually taken-over chats.",
    },
    image: "/virai/live-chat.jpg",
  },
  {
    title: { id: "Broadcast & Marketing", en: "Broadcast & Marketing" },
    description: {
      id: "Kirim promosi ke banyak nomor sekaligus dengan jeda acak anti-banned, lengkap AI caption generator bawaan.",
      en: "Send promos to many numbers at once with randomized anti-ban delays, plus a built-in AI caption generator.",
    },
    image: "/virai/broadcast.jpg",
  },
  {
    title: { id: "AI Business Assistant", en: "AI Business Assistant" },
    description: {
      id: "Chat internal ke AI untuk update stok, tambah produk, atau minta ringkasan penjualan — cukup ketik atau ngomong langsung.",
      en: "An internal AI chat to update stock, add products, or get a sales summary — just type or talk to it directly.",
    },
    image: "/virai/ai-assistant.jpg",
  },
  {
    title: { id: "Admin Panel Multi-Tenant", en: "Multi-Tenant Admin Panel" },
    description: {
      id: "Dashboard super-admin untuk kelola seluruh tenant, billing (integrasi Midtrans), backup database, sampai monitoring error — infrastruktur SaaS yang sepenuhnya saya bangun sendiri.",
      en: "A super-admin dashboard for managing every tenant, billing (Midtrans integration), database backups, and error monitoring — SaaS infrastructure I built entirely myself.",
    },
    image: "/virai/admin-panel.jpg",
  },
];

export const stats: { value: string; label: Bi }[] = [
  { value: "1", label: { id: "Produk SaaS Live", en: "Live SaaS Product" } },
  { value: "20+", label: { id: "Proyek Diselesaikan", en: "Projects Delivered" } },
  { value: "4+", label: { id: "Tahun Freelancing", en: "Years Freelancing" } },
  { value: "23,000+", label: { id: "Endpoint Diamankan", en: "Endpoints Secured" } },
];

export type Service = {
  icon: string;
  title: Bi;
  description: Bi;
};

export const services: Service[] = [
  {
    icon: "bot",
    title: { id: "AI SaaS Development", en: "AI SaaS Development" },
    description: {
      id: "Produk SaaS berbasis AI dari nol — arsitektur, backend, sampai deployment production. Virai adalah buktinya.",
      en: "AI-powered SaaS products built from scratch — architecture, backend, all the way to production deployment. Virai is the proof.",
    },
  },
  {
    icon: "message",
    title: { id: "WhatsApp & API Automation", en: "WhatsApp & API Automation" },
    description: {
      id: "Integrasi WhatsApp Business API, broadcast anti-banned, dan automasi berbasis API untuk proses bisnis apa pun.",
      en: "WhatsApp Business API integrations, anti-ban broadcast systems, and API-driven automation for any business process.",
    },
  },
  {
    icon: "dashboard",
    title: { id: "Sistem & Dashboard Internal", en: "Internal Systems & Dashboards" },
    description: {
      id: "Dashboard admin, CRM, dan sistem internal custom yang menggantikan spreadsheet dan proses manual.",
      en: "Admin dashboards, CRM systems, and custom internal tools that replace spreadsheets and manual processes.",
    },
  },
  {
    icon: "cart",
    title: { id: "Platform E-Commerce", en: "E-Commerce Platforms" },
    description: {
      id: "Toko online end-to-end — katalog, checkout, pembayaran, sampai manajemen stok.",
      en: "End-to-end online stores — catalog, checkout, payments, and inventory management.",
    },
  },
  {
    icon: "code",
    title: { id: "Aplikasi Web Custom", en: "Custom Web Applications" },
    description: {
      id: "Aplikasi web dengan kebutuhan spesifik yang tidak bisa dipenuhi template atau plugin siap pakai.",
      en: "Web applications for specific needs that off-the-shelf templates or plugins simply can't cover.",
    },
  },
  {
    icon: "workflow",
    title: { id: "Automasi Proses Bisnis", en: "Business Process Automation" },
    description: {
      id: "Kalau sebuah proses masih dikerjakan manual berulang-ulang, saya bantu ubah jadi otomatis.",
      en: "If a process is still being done manually over and over, I'll help turn it into something automatic.",
    },
  },
];
