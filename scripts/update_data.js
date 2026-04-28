const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/provinces.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Extract the object part
const startStr = 'export const provinceData: Record<string, ProvinceData> = ';
const startIndex = content.indexOf(startStr) + startStr.length;
const objectStr = content.substring(startIndex, content.lastIndexOf(';'));

// Evaluate the object (it's safe since we generated it)
const oldData = eval(`(${objectStr})`);

const newInterface = `export interface ProvinceData {
  nama: string;
  ibukota: string;
  sejarah: string;
  menarik: string[];
  tahun_berdiri: string;
  luas_wilayah: string;
  semboyan: string;
  gambar_cover: string;
  informasi_umum: { dasar_hukum: string; makna_lambang: string };
  geografis: { koordinat: string; batas_wilayah: string; kondisi: string; iklim: string };
  demografi: { jumlah_penduduk: string; kepadatan: string; komposisi: string; suku: string[]; agama: string[] };
  pemerintahan: { gubernur: string; struktur: string; kabupaten_kota: number };
  ekonomi: { pdrb: string; sektor_unggulan: string[]; komoditas: string[] };
  sosbud: { bahasa: string[]; rumah_adat: string; pakaian_adat: string; tarian: string[]; hari_jadi: string };
  infrastruktur: { transportasi: string[]; pendidikan: string[]; kesehatan: string[] };
  arsip: { tokoh: string[]; dokumen: string[]; peristiwa: string[] };
  metadata_arsip: { sumber: string; tahun: string; jenis: string; status: string };
}

const createProv = (base: any): ProvinceData => ({
  nama: base.nama || "",
  ibukota: base.ibukota || "",
  sejarah: base.sejarah || "",
  menarik: base.menarik || [],
  tahun_berdiri: base.tahun_berdiri || "-",
  luas_wilayah: base.luas_wilayah || "-",
  semboyan: base.semboyan || "-",
  gambar_cover: base.gambar_cover || "",
  informasi_umum: {
    dasar_hukum: "Undang-Undang Pembentukan Daerah Republik Indonesia",
    makna_lambang: "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat.",
    ...base.informasi_umum
  },
  geografis: {
    koordinat: "Kawasan strategis Nusantara",
    batas_wilayah: "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    kondisi: "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    iklim: "Iklim tropis dengan kelembaban tinggi.",
    ...base.geografis
  },
  demografi: {
    jumlah_penduduk: "Berdasarkan rilis Sensus BPS terbaru",
    kepadatan: "Terdistribusi secara regional",
    komposisi: "Didominasi oleh usia produktif (Bonus Demografi)",
    suku: base.demografi?.suku || ["Suku Asli", "Suku Pendatang"],
    agama: ["Islam", "Kristen Protestan", "Katolik", "Hindu", "Buddha", "Konghucu"],
    ...base.demografi
  },
  pemerintahan: {
    gubernur: "Gubernur Petahana / Penjabat (Pj)",
    struktur: "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    kabupaten_kota: base.pemerintahan?.kabupaten_kota || 0,
    ...base.pemerintahan
  },
  ekonomi: {
    pdrb: "Menyesuaikan dengan Indikator Makro Ekonomi",
    sektor_unggulan: ["Pertanian", "Perdagangan", "Industri", "Pariwisata"],
    komoditas: ["Bahan Pokok", "Hasil Kebun", "Hasil Laut"],
    ...base.ekonomi
  },
  sosbud: {
    bahasa: ["Bahasa Indonesia", "Bahasa Daerah"],
    rumah_adat: "Tercatat dalam Warisan Budaya Nasional",
    pakaian_adat: "Busana Tradisional Khas",
    tarian: base.menarik ? [base.menarik[1] || "Tarian Daerah"] : ["Tarian Tradisional"],
    hari_jadi: base.tahun_berdiri || "-",
    ...base.sosbud
  },
  infrastruktur: {
    transportasi: ["Bandar Udara Utama", "Pelabuhan", "Jaringan Jalan Nasional Trans"],
    pendidikan: ["Universitas Negeri Utama & Perguruan Tinggi Swasta"],
    kesehatan: ["Rumah Sakit Umum Daerah (RSUD) Rujukan"],
    ...base.infrastruktur
  },
  arsip: {
    tokoh: ["Pahlawan Nasional dari Daerah", "Tokoh Adat & Masyarakat"],
    dokumen: ["Arsip Surat Keputusan Pembentukan", "Dokumen Sejarah Lokal", "Foto Masa Lampau"],
    peristiwa: ["Masa Perjuangan Kemerdekaan", "Peristiwa Pemilihan Kepala Daerah Perdana"],
    ...base.arsip
  },
  metadata_arsip: {
    sumber: "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    tahun: "Abad ke-19 hingga Era Reformasi",
    jenis: "Teks, Foto Sejarah, Audio Visual",
    status: "Dalam Proses Digitalisasi Arsip",
    ...base.metadata_arsip
  }
});
`;

let newObjCode = `export const provinceData: Record<string, ProvinceData> = {\n`;
for (const key in oldData) {
  newObjCode += `  "${key}": createProv(${JSON.stringify(oldData[key], null, 2)}),\n`;
}
newObjCode += `};\n`;

fs.writeFileSync(filePath, newInterface + '\n' + newObjCode);
console.log('Successfully updated provinces.ts');
