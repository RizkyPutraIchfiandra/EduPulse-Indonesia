## Kelompok 1

1. Muhammad Izzuddin Syarofil Adzkia - 2802521213
2. Melvyn Novsallen Lase - 2802528876
3. Rizky Putra Ichfiandra - 2802530331
4. Muhammad Raid Zakwan - 2802532684

# EduPulse Indonesia

**Akses Website:** [https://edupulse-indonesia.vercel.app/](https://edupulse-indonesia.vercel.app/)

> Platform navigasi akademik untuk mahasiswa Indonesia. Pahami gaya mengajar dosen, optimalkan cara belajarmu.

EduPulse Indonesia membantu mahasiswa memahami karakter dan gaya mengajar dosen melalui **Objective Labeling System**, sebuah pendekatan rating berbasis label terstruktur tanpa komentar bebas. Tujuannya: mengurangi bias subjektif, menjaga etika akademik, sekaligus memberikan informasi yang berguna untuk strategi belajar.

Project ini mendukung **SDG 4: Quality Education** dengan menjembatani kesenjangan informasi antara mahasiswa dan ekspektasi gaya mengajar dosen.

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Project](#struktur-project)
- [Memulai](#memulai)
- [Scripts](#scripts)
- [Sistem Label](#sistem-label)
- [Integrasi Data](#integrasi-data)
- [Routing](#routing)
- [Testing](#testing)
- [Deployment](#deployment)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

---

## Fitur Utama

- **Objective Labeling System** — sistem penilaian dosen berbasis label terkurasi, tanpa kolom komentar bebas, untuk meminimalkan bias dan komentar tidak konstruktif.
- **7 Kategori Label** — mencakup Cara Mengajar, Bahasa & Komunikasi, Penilaian, Ujian & Tugas, Vibe Check, Materi & Referensi, serta Ketersediaan & Bimbingan.
- **Pencarian Dosen** — cari dosen berdasarkan nama, NIDN, universitas, atau program studi.
- **Halaman Detail Dosen** — menampilkan profil, label dominan, dan riwayat penilaian.
- **Survival Roadmap** — tips belajar otomatis yang disesuaikan dengan kombinasi label tiap dosen, membantu mahasiswa menyusun strategi belajar yang relevan.
- **Form Kontak Terintegrasi** — pesan dari pengguna dikirim ke Google Sheets untuk follow-up.
- **Responsive Design** — dioptimalkan untuk mobile dan desktop, lengkap dengan mobile menu.
- **Animasi Halus** — transisi antar section menggunakan Framer Motion untuk pengalaman yang lebih hidup.

---

## Tech Stack

**Core**
- **Build Tool:** Vite 5
- **Framework:** React 18 + TypeScript 5
- **Styling:** Tailwind CSS 3 + tailwindcss-animate
- **UI Components:** shadcn-ui (Radix UI primitives)

**Data & State**
- **Routing:** React Router DOM 6
- **State / Server Data:** TanStack Query (React Query) 5
- **Forms & Validation:** React Hook Form + Zod

**UX**
- **Animasi:** Framer Motion 12
- **Ikon:** lucide-react
- **Notifikasi:** Sonner + Radix Toast

**Tooling**
- **Testing:** Vitest + Testing Library + jsdom
- **Linting:** ESLint 9 + typescript-eslint
- **Deployment:** Vercel

---

## Struktur Project

```
EduPulse-Indonesia/
├── public/                      # Aset statis (icon, robots.txt)
├── src/
│   ├── assets/                  # Gambar dan ilustrasi
│   ├── components/
│   │   ├── ui/                  # Komponen shadcn-ui (button, dialog, dst)
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LabelCloudSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavLink.tsx
│   │   ├── ProfessorCard.tsx
│   │   └── SearchSection.tsx
│   ├── data/
│   │   └── professors.ts        # Data dosen, kategori label, survival tips
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts             # Helper (cn, dst)
│   ├── pages/
│   │   ├── Index.tsx            # Landing page
│   │   ├── ProfessorDetail.tsx  # Detail dosen + roadmap
│   │   └── NotFound.tsx
│   ├── test/                    # Setup dan contoh test
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components.json              # Konfigurasi shadcn-ui
├── tailwind.config.ts
├── vite.config.ts
├── vitest.config.ts
└── vercel.json
```

---

## Memulai

### Prasyarat

- **Node.js** versi 18 atau lebih baru ([install via nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** (sudah terpasang bersama Node.js)

### Instalasi

```bash
# 1. Clone repository
git clone https://github.com/RizkyPutraIchfiandra/EduPulse-Indonesia.git

# 2. Masuk ke direktori project
cd EduPulse-Indonesia

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:8080`.

---

## Scripts

- **`npm run dev`** — Menjalankan dev server di port 8080 dengan hot-reload
- **`npm run build`** — Build production ke folder `dist/`
- **`npm run build:dev`** — Build dengan mode development (untuk debugging)
- **`npm run preview`** — Preview hasil build secara lokal
- **`npm run lint`** — Menjalankan ESLint untuk seluruh project
- **`npm run test`** — Menjalankan unit test sekali (CI mode)
- **`npm run test:watch`** — Menjalankan unit test dalam watch mode

> **Catatan untuk pengguna Windows (PowerShell/CMD):** gunakan `npm.cmd` sebagai pengganti `npm` agar command dapat tereksekusi dengan benar. Contoh: `npm.cmd run dev`.

---

## Sistem Label

EduPulse menggunakan **7 kategori label** untuk memetakan karakter dosen secara objektif:

1. **Cara Mengajar** — Metode Satu Arah, Full Discussion, Speed Runner, Deep Diver, Hands-On Practice, Storytelling, dll.
2. **Bahasa & Komunikasi** — High-Level Language, Bahasa Santai, Instruksi Clear, To the Point, Bilingual, dll.
3. **Penilaian** — Nilai Objektif, Standard Ketat, Reward Proses, Feedback Detail, Transparansi Nilai, dll.
4. **Ujian & Tugas** — Ujian Open Book, Case Study, Project Based, Kuis Dadakan, Take Home Exam, dll.
5. **Vibe Check** — Friendly Vibe, On Time, Resourceful, Approachable, Inspiratif, dll.
6. **Materi & Referensi** — Materi Up-to-Date, Banyak Referensi, Slide Lengkap, Real-World Example, dll.
7. **Ketersediaan & Bimbingan** — Mudah Dihubungi, Bimbingan Intensif, Respon Cepat, Office Hour Rutin, dll.

Setiap label memetakan ke **Survival Tip** yang muncul otomatis di halaman detail dosen, membantu mahasiswa menyusun strategi belajar sesuai gaya dosen yang bersangkutan.

---

## Integrasi Data

### Form Hubungi Kami
Pesan dari form kontak diteruskan ke Google Sheets:
[Sheet — Hubungi Kami](https://docs.google.com/spreadsheets/d/1vsrNekTap8NcZiaVKWvACreDY6NervSkYqT6N8s_dKA/edit?usp=sharing)

### Rating Dosen
Data label yang diberikan mahasiswa diteruskan ke Google Sheets:
[Sheet — Rating Dosen](https://docs.google.com/spreadsheets/d/1IKmL1molPw3W52j6zv85Ls-3fcKON-VQXq8WGpd5sAU/edit?usp=sharing)

> Catatan: Saat ini data juga di-cache di `localStorage` browser sebagai fallback untuk demo.

---

## Routing

- **`/`** → `Index` — Landing page dengan Hero, About, Search, Label Cloud, dan Contact
- **`/dosen/:nidn`** → `ProfessorDetail` — Detail dosen, daftar label, dan Survival Roadmap
- **`*`** → `NotFound` — Halaman 404 untuk route yang tidak dikenal

---

## Testing

Project menggunakan **Vitest** dengan **Testing Library** dan **jsdom**.

```bash
# Run sekali
npm run test

# Watch mode (auto re-run saat file berubah)
npm run test:watch
```

Setup test ada di `src/test/setup.ts`. Tambahkan file test baru dengan pola `*.test.ts` atau `*.test.tsx` di dalam `src/`.

---

## Deployment

### Vercel (rekomendasi)

1. Push project ke GitHub.
2. Import repository di [Vercel Dashboard](https://vercel.com/new).
3. Vercel akan otomatis mendeteksi konfigurasi dari `vercel.json` dan `vite.config.ts`.
4. Build dan deploy berjalan otomatis pada setiap push ke `main`.

### Build Manual

```bash
npm run build
```

Hasil build tersedia di folder `dist/` dan siap di-host di static hosting mana pun (Netlify, Cloudflare Pages, GitHub Pages, dll).

---

## Kontribusi

Kontribusi sangat dipersilakan. Untuk perubahan besar, harap buka issue terlebih dahulu untuk mendiskusikan apa yang ingin diubah.

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feat/nama-fitur`)
3. Commit perubahan (`git commit -m "feat: deskripsi singkat"`)
4. Push ke branch (`git push origin feat/nama-fitur`)
5. Buka Pull Request

Pastikan menjalankan `npm run lint` dan `npm run test` sebelum membuka PR.

---

## Lisensi

Project ini dikembangkan untuk tujuan edukasi dan mendukung **SDG 4: Quality Education**.

---

<div align="center">

**Dibangun dengan rasa peduli untuk mahasiswa Indonesia.**

[Repository](https://github.com/RizkyPutraIchfiandra/EduPulse-Indonesia)

</div>