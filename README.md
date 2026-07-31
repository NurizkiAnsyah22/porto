# Nurizkiansyah — Portfolio

Full Stack Developer & Product Builder portfolio. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and next-themes. Dark/light mode and ID/EN language switching are both built in.

## Menjalankan di lokal

Karena kode ini ditulis di sandbox tanpa akses internet (tidak bisa `npm install` di sana), **build ini belum pernah dijalankan/di-compile**. Jalankan langkah berikut di komputer Anda sebelum deploy:

```bash
cd portfolio
npm install
npm run dev
```

Buka `http://localhost:3000`. Kalau ada error TypeScript/ESLint kecil saat pertama kali build, itu wajar untuk kode yang belum pernah di-compile — biasanya cuma typo import atau nama prop, gampang di-fix. Kirim pesan errornya ke saya kalau butuh bantuan.

## Struktur proyek

```
src/
  app/
    layout.tsx          # root layout, font, providers, nav
    page.tsx            # Home
    projects/page.tsx   # Projects (bento grid)
    experience/page.tsx # Career timeline + education + certifications
    skills/page.tsx     # Tech stack grouped
    about/page.tsx       # About + differentiators
    contact/page.tsx    # Contact form (mailto) + direct links
    globals.css         # design tokens (light/dark CSS variables)
  components/           # Nav, ThemeToggle, LanguageToggle, ProjectCard, Timeline, etc.
  lib/
    data.ts              # ALL content: projects, experience, skills, certifications
    dictionaries.ts       # UI copy strings (ID/EN)
    language-context.tsx  # i18n provider (React Context + localStorage)
```

## Mengubah konten

Semua data profil ada di `src/lib/data.ts` dan teks UI di `src/lib/dictionaries.ts` — setiap string bilingual berbentuk `{ id: "...", en: "..." }`. Edit di situ, tidak perlu sentuh komponen.

## Yang masih perlu dilengkapi

- Foto profil (belum ada, hero masih pakai inisial "N" sebagai placeholder di logo nav — bisa ditambah `<Image>` di `Hero.tsx` kalau foto sudah ada)
- `metadataBase` di `src/app/layout.tsx` masih placeholder (`https://nurizkiansyah.dev`) — ganti dengan domain final setelah deploy
- OG image untuk share preview (opsional)

## Deploy ke Vercel

1. Push folder ini ke repo GitHub baru.
2. Buka [vercel.com/new](https://vercel.com/new), import repo tersebut.
3. Vercel otomatis mendeteksi Next.js — klik Deploy, tidak perlu konfigurasi tambahan.
4. Setelah dapat domain (atau pasang custom domain), update `metadataBase` di `layout.tsx`.
