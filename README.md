# Share.Bill

Share.Bill adalah aplikasi web untuk membantu pengguna membagi tagihan berdasarkan pesanan masing-masing orang. Aplikasi ini dikembangkan sebagai proyek mata kuliah Application Project 1 oleh Kelompok QWERTY.

## Tujuan Proyek

Mempermudah pencatatan pesanan dan pembagian tagihan agar setiap anggota dapat mengetahui tagihan sesuai pesanannya.

## Teknologi yang Digunakan

- React
- TypeScript
- Vite
- React Router
- CSS

## Fitur dan Halaman

- **Home:** Halaman awal Share.Bill.
- **Buat Tagihan:** Halaman awal untuk mencatat informasi tagihan, anggota, dan daftar menu.
- **Not Found:** Halaman untuk alamat yang tidak ditemukan.
- **Header Navigasi:** Navigasi untuk berpindah antara Home dan Buat Tagihan.

**Catatan:** Proyek saat ini masih berupa skeleton Single Page Application (SPA). Tombol tambah anggota, tombol tambah menu, dan proses perhitungan tagihan belum diimplementasikan.

## Struktur Folder

```text
Share.Bill/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── CreateBill.tsx
│   │   └── NotFound.tsx
│   ├── styles/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .editorconfig
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.ts
```

Folder `components` digunakan untuk komponen yang dapat digunakan kembali, sedangkan folder `pages` berisi halaman aplikasi. Folder `assets` digunakan untuk menyimpan aset proyek dan folder `styles` disiapkan untuk pengembangan stylesheet selanjutnya.

## Persyaratan

Pastikan perangkat telah memiliki:

- Node.js
- npm

## Cara Menjalankan Proyek

1. Clone repository Share.Bill:

```bash
git clone https://github.com/Jibril061/Share.Bill.git
```

2. Masuk ke folder proyek:

```bash
cd Share.Bill
```

3. Instal dependensi:

```bash
npm install
```

4. Jalankan server pengembangan:

```bash
npm run dev
```

5. Buka alamat lokal yang ditampilkan di terminal, biasanya `http://localhost:5173/`.

## Perintah Pengembangan

```bash
npm run dev
npm run build
npm run lint
npm run format
```

Keterangan:

- `npm run dev`: Menjalankan server pengembangan.
- `npm run build`: Memeriksa TypeScript dan membangun aplikasi untuk produksi.
- `npm run lint`: Memeriksa kode menggunakan ESLint.
- `npm run format`: Merapikan format kode menggunakan Prettier.

## Konfigurasi Kode

Proyek menggunakan konfigurasi berikut untuk membantu menjaga konsistensi kode:

- **ESLint:** Memeriksa potensi masalah pada kode.
- **Prettier:** Menyeragamkan format kode.
- **EditorConfig:** Menyeragamkan pengaturan dasar editor.
- **Vite:** Menyediakan server pengembangan dan proses build.

## Repository

GitHub: https://github.com/Jibril061/Share.Bill

## Tim Pengembang

Kelompok QWERTY — Application Project 1.
