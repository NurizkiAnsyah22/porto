import type { Lang } from "./language-context";

export type Bi = Record<Lang, string>;

export const nav = {
  home: { id: "Beranda", en: "Home" } as Bi,
  projects: { id: "Proyek", en: "Projects" } as Bi,
  experience: { id: "Pengalaman", en: "Experience" } as Bi,
  skills: { id: "Keahlian", en: "Skills" } as Bi,
  about: { id: "Tentang", en: "About" } as Bi,
  contact: { id: "Kontak", en: "Contact" } as Bi,
};

export const common = {
  roleTitle: {
    id: "Freelance Software Engineer & Product Builder",
    en: "Freelance Software Engineer & Product Builder",
  } as Bi,
  heroGreeting: { id: "Halo,", en: "Hey," } as Bi,
  heroName: { id: "Nurizkiansyah", en: "Nurizkiansyah" } as Bi,
  heroTagline: {
    id: "Saya membangun produk yang benar-benar dipakai orang — dari Virai, AI SaaS yang live di production, sampai sistem otomatisasi untuk klien nyata. Kalau Anda punya ide software atau proses bisnis yang masih manual, saya bisa bantu wujudkan.",
    en: "I build products people actually use — from Virai, a live production AI SaaS, to automation systems for real clients. If you have a software idea or a manual business process that needs fixing, I can help you build it.",
  } as Bi,
  startProject: { id: "Mulai Proyek", en: "Start a Project" } as Bi,
  viewProjects: { id: "Lihat Karya Saya", en: "See My Work" } as Bi,
  getInTouch: { id: "Hubungi Saya", en: "Get in Touch" } as Bi,
  liveOnVirai: {
    id: "Sedang dipakai bisnis nyata sekarang",
    en: "Actively used by real businesses right now",
  } as Bi,
  featuredWork: { id: "Proyek Unggulan", en: "Featured Work" } as Bi,
  featuredWorkDesc: {
    id: "Produk yang benar-benar saya bangun dan jalankan, bukan sekadar prototipe.",
    en: "Products I actually built and run in production, not just prototypes.",
  } as Bi,
  visit: { id: "Kunjungi", en: "Visit" } as Bi,
  liveApp: { id: "Buka App", en: "Open App" } as Bi,
  viewCode: { id: "Kode", en: "Code" } as Bi,
  caseStudy: { id: "Studi Kasus", en: "Case Study" } as Bi,
  live: { id: "Live", en: "Live" } as Bi,
  internal: { id: "Internal / Enterprise", en: "Internal / Enterprise" } as Bi,
  allProjects: { id: "Semua Proyek", en: "All Projects" } as Bi,
  allProjectsDesc: {
    id: "Dari SaaS berbasis AI, automasi keamanan enterprise, hingga proyek freelance yang mengasah kemampuan membangun end-to-end.",
    en: "From AI-powered SaaS, enterprise security automation, to freelance work that sharpened end-to-end product delivery.",
  } as Bi,
  careerTimeline: { id: "Perjalanan Karier", en: "Career Timeline" } as Bi,
  experienceTitle: {
    id: "Dari IT support ke product builder",
    en: "From IT support to product builder",
  } as Bi,
  experienceDesc: {
    id: "Setiap peran membangun kemampuan berikutnya — dari troubleshooting infrastruktur, membangun produk untuk klien, sampai memimpin program keamanan data skala enterprise.",
    en: "Each role built the next capability — from infrastructure troubleshooting, to shipping products for clients, to leading an enterprise-scale data security program.",
  } as Bi,
  educationLabel: { id: "Pendidikan", en: "Education" } as Bi,
  certificationsLabel: { id: "Sertifikasi", en: "Certifications" } as Bi,
  skillsTitle: { id: "Tech Stack & Keahlian", en: "Tech Stack & Skills" } as Bi,
  skillsDesc: {
    id: "Fondasi engineering yang saya pakai sehari-hari untuk membangun produk — plus keahlian security yang jadi diferensiator.",
    en: "The engineering foundation I use daily to ship products — plus the security expertise that sets me apart.",
  } as Bi,
  aboutTitle: { id: "Tentang Saya", en: "About Me" } as Bi,
  contactTitle: { id: "Mari Berkolaborasi", en: "Let's Work Together" } as Bi,
  contactDesc: {
    id: "Terbuka untuk proyek freelance, kerja sama jangka panjang, atau konsultasi teknis untuk produk yang sedang Anda bangun. Saya biasanya balas dalam 1x24 jam.",
    en: "Open for freelance projects, longer-term collaborations, or technical consulting on the product you're building. I typically reply within 24 hours.",
  } as Bi,
  sendEmail: { id: "Kirim Email", en: "Send Email" } as Bi,
  yourName: { id: "Nama Anda", en: "Your Name" } as Bi,
  yourEmail: { id: "Email Anda", en: "Your Email" } as Bi,
  message: { id: "Pesan", en: "Message" } as Bi,
  send: { id: "Kirim Pesan", en: "Send Message" } as Bi,
  mailtoFallback: {
    id: "Tombol ini membuka aplikasi email Anda. Kalau tidak ada yang terjadi, langsung saja email ke alamat di atas.",
    en: "This button opens your email app. If nothing happens, just email the address above directly.",
  } as Bi,
  basedIn: { id: "Berbasis di Indonesia", en: "Based in Indonesia" } as Bi,
  footerNote: {
    id: "Dirancang & dibangun oleh Nurizkiansyah.",
    en: "Designed & built by Nurizkiansyah.",
  } as Bi,
  openForFreelance: {
    id: "Terbuka untuk proyek freelance baru",
    en: "Open for new freelance projects",
  } as Bi,
  previewComingSoon: {
    id: "Preview segera hadir",
    en: "Preview coming soon",
  } as Bi,
  productScreenshot: {
    id: "Screenshot produk — menyusul",
    en: "Product screenshot — coming soon",
  } as Bi,
  viraiShowcaseLabel: {
    id: "Sekilas Virai — AI Employee untuk WhatsApp Bisnis",
    en: "A Look Inside Virai — AI Employee for WhatsApp Business",
  } as Bi,
  whatIBuildLabel: { id: "Yang Saya Bangun", en: "What I Build" } as Bi,
  whatIBuildTitle: {
    id: "Dari ide jadi produk yang benar-benar dipakai",
    en: "From idea to a product people actually use",
  } as Bi,
  whatIBuildDesc: {
    id: "Kalau kebutuhan Anda mirip salah satu ini, kemungkinan besar saya bisa bantu.",
    en: "If what you need looks like one of these, there's a good chance I can help build it.",
  } as Bi,
  differentiatorsLabel: { id: "Kenapa Bekerja Sama Dengan Saya", en: "Why Work With Me" } as Bi,
  differentiatorsDesc: {
    id: "Bukan sekadar jasa coding — begini cara saya mendekati setiap proyek.",
    en: "Not just a coding service — here's how I actually approach every project.",
  } as Bi,
  privateWorkNote: {
    id: "Studi kasus di atas hanyalah contoh terpilih. Sebagian besar dari 20+ proyek yang saya kirimkan sejak 2021 terikat NDA atau sepenuhnya milik klien — saya senang membahas contoh yang relevan lewat panggilan singkat.",
    en: "The case studies above are selected examples. Most of the 20+ projects I've delivered since 2021 are under NDA or fully client-owned — happy to walk through relevant examples on a quick call.",
  } as Bi,
  privateWorkNoteShort: {
    id: "3 studi kasus di atas hanyalah sebagian kecil dari 20+ proyek yang sudah saya kirimkan sejak 2021 — sisanya terikat NDA atau milik klien.",
    en: "The 3 case studies above are a small sample of the 20+ projects I've shipped since 2021 — the rest are under NDA or client-owned.",
  } as Bi,
  footerCtaTitle: {
    id: "Ada proyek yang ingin dibangun?",
    en: "Have a project in mind?",
  } as Bi,
  footerCtaDesc: {
    id: "Ceritakan kebutuhan Anda — saya bantu wujudkan dari ide sampai production.",
    en: "Tell me what you need — I'll help take it from idea to production.",
  } as Bi,
  footerCtaButton: {
    id: "Mulai Percakapan",
    en: "Start the Conversation",
  } as Bi,
  projectTypeLabel: { id: "Jenis Proyek", en: "Project Type" } as Bi,
  projectTypePlaceholder: {
    id: "Pilih jenis proyek (opsional)",
    en: "Select a project type (optional)",
  } as Bi,
  reachOut: { id: "Hubungi", en: "Reach Out" } as Bi,
};

export const projectTypeOptions: Bi[] = [
  { id: "Proyek Baru dari Nol", en: "New Build" },
  { id: "Sistem yang Sudah Ada", en: "Existing System" },
  { id: "Automasi / Integrasi API", en: "Automation / API Integration" },
  { id: "Belum Yakin", en: "Not Sure Yet" },
];

export const rotatingRoles: Bi[] = [
  { id: "Freelance Software Engineer", en: "Freelance Software Engineer" },
  { id: "SaaS Founder — Virai", en: "SaaS Founder — Virai" },
  { id: "Mitra Automasi Bisnis Anda", en: "Your Business Automation Partner" },
  { id: "+ Enterprise Security", en: "+ Enterprise Security" },
];

export const navTypewriterWords: Record<Lang, string[]> = {
  id: ["Freelance Dev", "SaaS Founder", "Automation Dev"],
  en: ["Freelance Dev", "SaaS Founder", "Automation Dev"],
};
