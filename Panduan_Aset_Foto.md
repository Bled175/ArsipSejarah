# Panduan Menambahkan Aset Foto Provinsi

Untuk membuat tampilan halaman Detail Provinsi menjadi lebih hidup dan memukau, Anda perlu menambahkan foto (pemandangan/landmark) perwakilan dari setiap provinsi. Kode web telah dikonfigurasi untuk membaca foto-foto ini secara otomatis.

## Lokasi Penyimpanan
Semua foto **wajib** diletakkan di dalam folder:
`public/images/provinces/`

*(Catatan: Jika folder `images` dan sub-folder `provinces` belum ada di dalam folder `public/`, silakan buat foldernya terlebih dahulu).*

## Panduan Resolusi
- **Format**: `.jpg` (disarankan) atau `.png`.
- **Rekomendasi Dimensi**: Lanskap / Mendatar (Contoh: `800x600 px` atau `1200x900 px`) agar tidak terpotong (cropping) secara berlebihan.

## Daftar Lengkap Nama File yang Diperlukan
Berikut adalah daftar nama file gambar untuk ke-34 provinsi. **Pastikan nama filenya persis sama (huruf kecil semua, dipisah tanda strip `-`)** agar cocok dengan data (*database*) yang telah kita buat:

- [ ] `aceh.jpg`
- [ ] `sumatera-utara.jpg`
- [ ] `sumatera-barat.jpg`
- [ ] `riau.jpg`
- [ ] `kepulauan-riau.jpg`
- [ ] `jambi.jpg`
- [ ] `bengkulu.jpg`
- [ ] `sumatera-selatan.jpg`
- [ ] `bangka-belitung.jpg`
- [ ] `lampung.jpg`
- [ ] `banten.jpg`
- [ ] `jakarta.jpg`
- [ ] `jawa-barat.jpg`
- [ ] `jawa-tengah.jpg`
- [ ] `yogyakarta.jpg`
- [ ] `jawa-timur.jpg`
- [ ] `bali.jpg`
- [ ] `nusa-tenggara-barat.jpg`
- [ ] `nusa-tenggara-timur.jpg`
- [ ] `kalimantan-barat.jpg`
- [ ] `kalimantan-tengah.jpg`
- [ ] `kalimantan-selatan.jpg`
- [ ] `kalimantan-timur.jpg`
- [ ] `kalimantan-utara.jpg`
- [ ] `sulawesi-utara.jpg`
- [ ] `gorontalo.jpg`
- [ ] `sulawesi-tengah.jpg`
- [ ] `sulawesi-barat.jpg`
- [ ] `sulawesi-selatan.jpg`
- [ ] `sulawesi-tenggara.jpg`
- [ ] `maluku.jpg`
- [ ] `maluku-utara.jpg`
- [ ] `papua.jpg`
- [ ] `papua-barat.jpg`

> **💡 Tips Penting:** Jika Anda belum sempat menambahkan beberapa foto, jangan khawatir web Anda akan mengalami error (*broken image*). Saya sudah menyematkan kode *fallback* (pelindung) yang otomatis menampilkan area abu-abu dengan tulisan **"Foto Belum Tersedia"** jika foto tidak ditemukan.
