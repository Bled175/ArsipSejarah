export interface ProvinceData {
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

export const provinceData: Record<string, ProvinceData> = {
  "Aceh": createProv({
  "nama": "Aceh",
  "ibukota": "Banda Aceh",
  "sejarah": "Aceh merupakan titik awal penyebaran Islam di Indonesia. Dikenal dengan sebutan Serambi Mekkah, daerah ini memiliki otonomi khusus sejak dikeluarkannya UU No. 44 Tahun 1999 dan UU No. 11 Tahun 2006 (UUPA) pasca MoU Helsinki.",
  "menarik": [
    "Masjid Raya Baiturrahman",
    "Tari Saman yang diakui UNESCO",
    "Kopi Gayo"
  ],
  "tahun_berdiri": "7 Desember 1959",
  "luas_wilayah": "57.365 km²",
  "semboyan": "Pancacita (Lima Cita-cita)",
  "gambar_cover": "/images/provinces/aceh.jpg"
}),
  "Jawa Tengah": createProv({
  "nama": "Jawa Tengah",
  "ibukota": "Semarang",
  "sejarah": "Jawa Tengah adalah pusat peradaban Jawa kuno sejak era Mataram Hindu hingga Kesultanan Demak. Secara administratif dibentuk berdasarkan UU No. 10 Tahun 1950.",
  "menarik": [
    "Candi Borobudur terbesar di dunia",
    "Dataran Tinggi Dieng",
    "Kota Lama Semarang"
  ],
  "tahun_berdiri": "4 Juli 1950",
  "luas_wilayah": "32.800 km²",
  "semboyan": "Prasetya Ulah Sakti Bhakti Praja",
  "gambar_cover": "/images/provinces/jawa-tengah.jpg"
}),
  "Bengkulu": createProv({
  "nama": "Bengkulu",
  "ibukota": "Bengkulu",
  "sejarah": "Bengkulu pernah berada di bawah kekuasaan Inggris (Bencoolen) sebelum diserahkan ke Belanda lewat Traktat London 1824. Provinsi ini dibentuk memisahkan diri dari Sumatera Selatan.",
  "menarik": [
    "Bunga Rafflesia Arnoldii",
    "Benteng Marlborough",
    "Tempat pengasingan Bung Karno"
  ],
  "tahun_berdiri": "18 November 1968",
  "luas_wilayah": "19.919 km²",
  "semboyan": "Sekundang Setungguan Seiya Sekata",
  "gambar_cover": "/images/provinces/bengkulu.jpg"
}),
  "Banten": createProv({
  "nama": "Banten",
  "ibukota": "Serang",
  "sejarah": "Dahulu merupakan wilayah Kesultanan Banten yang berjaya sebagai bandar rempah internasional. Banten resmi menjadi provinsi ke-30 pada tahun 2000 memisahkan diri dari Jawa Barat.",
  "menarik": [
    "Suku Baduy",
    "Taman Nasional Ujung Kulon",
    "Masjid Agung Banten"
  ],
  "tahun_berdiri": "4 Oktober 2000",
  "luas_wilayah": "9.662 km²",
  "semboyan": "Iman Taqwa",
  "gambar_cover": "/images/provinces/banten.jpg"
}),
  "Kalimantan Barat": createProv({
  "nama": "Kalimantan Barat",
  "ibukota": "Pontianak",
  "sejarah": "Daerah yang dikenal dengan Seribu Sungai ini didiami oleh banyak kesultanan melayu seperti Kesultanan Kadriah Pontianak.",
  "menarik": [
    "Tugu Khatulistiwa",
    "Sungai Kapuas",
    "Budaya Dayak dan Melayu"
  ],
  "tahun_berdiri": "1 Januari 1957",
  "luas_wilayah": "147.307 km²",
  "semboyan": "Akcaya (Tak Kunjung Binasa)",
  "gambar_cover": "/images/provinces/kalimantan-barat.jpg"
}),
  "Bangka-Belitung": createProv({
  "nama": "Kepulauan Bangka Belitung",
  "ibukota": "Pangkal Pinang",
  "sejarah": "Kepulauan ini dulunya merupakan bagian dari Sumatera Selatan. Dikenal sejak era kolonial sebagai daerah penghasil timah terbesar.",
  "menarik": [
    "Pantai batu granit raksasa di Belitung",
    "Wisata Laskar Pelangi",
    "Sejarah pertambangan timah"
  ],
  "tahun_berdiri": "21 November 2000",
  "luas_wilayah": "16.424 km²",
  "semboyan": "Serumpun Sebalai",
  "gambar_cover": "/images/provinces/bangka-belitung.jpg"
}),
  "Bali": createProv({
  "nama": "Bali",
  "ibukota": "Denpasar",
  "sejarah": "Pulau Dewata menyimpan warisan kebudayaan Majapahit yang sangat kental. Bali diakui sebagai provinsi otonom pada tahun 1958, berpisah dari Sunda Kecil.",
  "menarik": [
    "Subak (Warisan UNESCO)",
    "Tari Kecak dan Barong",
    "Pura Besakih"
  ],
  "tahun_berdiri": "14 Agustus 1958",
  "luas_wilayah": "5.780 km²",
  "semboyan": "Bali Dwipa Jaya",
  "gambar_cover": "/images/provinces/bali.jpg"
}),
  "Jawa Timur": createProv({
  "nama": "Jawa Timur",
  "ibukota": "Surabaya",
  "sejarah": "Jawa Timur adalah jantung kemaharajaan Majapahit yang berhasil menyatukan Nusantara. Surabaya tercatat sebagai Kota Pahlawan.",
  "menarik": [
    "Gunung Bromo",
    "Kawah Ijen (Blue Fire)",
    "Situs Trowulan"
  ],
  "tahun_berdiri": "12 Oktober 1945",
  "luas_wilayah": "47.799 km²",
  "semboyan": "Jer Basuki Mawa Beya",
  "gambar_cover": "/images/provinces/jawa-timur.jpg"
}),
  "Kalimantan Selatan": createProv({
  "nama": "Kalimantan Selatan",
  "ibukota": "Banjarbaru",
  "sejarah": "Provinsi ini adalah pusat budaya Banjar yang kuat sejak era Kesultanan Banjar.",
  "menarik": [
    "Pasar Terapung Lok Baintan",
    "Intan Martapura",
    "Masjid Sultan Suriansyah"
  ],
  "tahun_berdiri": "14 Agustus 1950",
  "luas_wilayah": "38.744 km²",
  "semboyan": "Waja Sampai Kaputing",
  "gambar_cover": "/images/provinces/kalimantan-selatan.jpg"
}),
  "Nusa Tenggara Timur": createProv({
  "nama": "Nusa Tenggara Timur",
  "ibukota": "Kupang",
  "sejarah": "Daerah ini kaya akan keberagaman budaya dari ratusan pulau. Kawasan ini pernah menjadi tempat persinggahan penting bangsa Portugis pada abad ke-16.",
  "menarik": [
    "Taman Nasional Komodo",
    "Danau Kelimutu",
    "Kampung Adat Wae Rebo"
  ],
  "tahun_berdiri": "20 Desember 1958",
  "luas_wilayah": "48.718 km²",
  "semboyan": "Flobamora",
  "gambar_cover": "/images/provinces/nusa-tenggara-timur.jpg"
}),
  "Sulawesi Selatan": createProv({
  "nama": "Sulawesi Selatan",
  "ibukota": "Makassar",
  "sejarah": "Menjadi rumah bagi suku Bugis, Makassar, Toraja, dan Mandar. Kerajaan Gowa-Tallo sangat mahsyur di masa lampau sebagai pelabuhan rempah raksasa.",
  "menarik": [
    "Tana Toraja",
    "Benteng Rotterdam",
    "Kapal Pinisi"
  ],
  "tahun_berdiri": "13 Desember 1960",
  "luas_wilayah": "46.717 km²",
  "semboyan": "Sipakatau",
  "gambar_cover": "/images/provinces/sulawesi-selatan.jpg"
}),
  "Kepulauan Riau": createProv({
  "nama": "Kepulauan Riau",
  "ibukota": "Tanjungpinang",
  "sejarah": "Kepulauan Riau dulunya adalah jantung Kesultanan Riau-Lingga yang melahirkan Bahasa Indonesia.",
  "menarik": [
    "Pulau Penyengat",
    "Pantai Lagoi",
    "Pusat perdagangan Batam"
  ],
  "tahun_berdiri": "24 September 2002",
  "luas_wilayah": "8.201 km²",
  "semboyan": "Berpancang Amanah, Bersauh Marwah",
  "gambar_cover": "/images/provinces/kepulauan-riau.jpg"
}),
  "Irian Jaya Barat": createProv({
  "nama": "Papua Barat",
  "ibukota": "Manokwari",
  "sejarah": "Awalnya bernama Irian Jaya Barat saat dibentuk pada tahun 1999 bersamaan dengan pemekaran Papua, kemudian berganti nama menjadi Papua Barat pada 2007.",
  "menarik": [
    "Raja Ampat",
    "Taman Nasional Teluk Cenderawasih",
    "Pegunungan Arfak"
  ],
  "tahun_berdiri": "4 Oktober 1999",
  "luas_wilayah": "102.955 km²",
  "semboyan": "Cintaku Negeriku",
  "gambar_cover": "/images/provinces/papua-barat.jpg"
}),
  "Sumatera Utara": createProv({
  "nama": "Sumatera Utara",
  "ibukota": "Medan",
  "sejarah": "Tanah Melayu Deli dan Batak ini memiliki sejarah panjang masa Kesultanan Deli.",
  "menarik": [
    "Danau Toba",
    "Istana Maimun",
    "Lompat Batu Nias"
  ],
  "tahun_berdiri": "15 April 1948",
  "luas_wilayah": "72.981 km²",
  "semboyan": "Tekun Berkarya, Hidup Sejahtera, Mulia Berbudaya",
  "gambar_cover": "/images/provinces/sumatera-utara.jpg"
}),
  "Riau": createProv({
  "nama": "Riau",
  "ibukota": "Pekanbaru",
  "sejarah": "Dikenal sebagai Bumi Lancang Kuning, Riau terbentuk tahun 1958. Riau memiliki sejarah panjang di era Kerajaan Siak Sri Indrapura.",
  "menarik": [
    "Istana Siak Sri Indrapura",
    "Budaya pantun",
    "Sungai Kampar"
  ],
  "tahun_berdiri": "9 Agustus 1957",
  "luas_wilayah": "87.023 km²",
  "semboyan": "Bumi Lancang Kuning",
  "gambar_cover": "/images/provinces/riau.jpg"
}),
  "Sulawesi Utara": createProv({
  "nama": "Sulawesi Utara",
  "ibukota": "Manado",
  "sejarah": "Dikenal dengan julukan Bumi Nyiur Melambai. Terbentuk sebagai provinsi pada 1964. Wilayah ini kental dengan akulturasi budaya Eropa.",
  "menarik": [
    "Taman Nasional Bunaken",
    "Kawasan Tomohon",
    "Kuliner khas Manado"
  ],
  "tahun_berdiri": "14 Agustus 1959",
  "luas_wilayah": "13.892 km²",
  "semboyan": "Si Tou Timou Tumou Tou",
  "gambar_cover": "/images/provinces/sulawesi-utara.jpg"
}),
  "Kalimantan Utara": createProv({
  "nama": "Kalimantan Utara",
  "ibukota": "Tanjung Selor",
  "sejarah": "Ini adalah provinsi termuda sebelum pemekaran Papua tahun 2022, terbentuk pada tahun 2012 berpisah dari Kalimantan Timur.",
  "menarik": [
    "Taman Nasional Kayan Mentarang",
    "Kehidupan suku Dayak Kenyah",
    "Kota Tarakan"
  ],
  "tahun_berdiri": "25 Oktober 2012",
  "luas_wilayah": "75.467 km²",
  "semboyan": "Benuanta",
  "gambar_cover": "/images/provinces/kalimantan-utara.jpg"
}),
  "Maluku Utara": createProv({
  "nama": "Maluku Utara",
  "ibukota": "Sofifi",
  "sejarah": "Maluku Utara adalah pusat Kesultanan Ternate dan Tidore yang disebut jazirah Al-Mulk. Dimekarkan dari Maluku pada tahun 1999.",
  "menarik": [
    "Keraton Ternate dan Tidore",
    "Pulau Morotai",
    "Gunung Gamalama"
  ],
  "tahun_berdiri": "4 Oktober 1999",
  "luas_wilayah": "31.982 km²",
  "semboyan": "Marimoi Ngone Futuru",
  "gambar_cover": "/images/provinces/maluku-utara.jpg"
}),
  "Sumatera Barat": createProv({
  "nama": "Sumatera Barat",
  "ibukota": "Padang",
  "sejarah": "Rumah bagi suku Minangkabau dengan sistem kekerabatan matrilineal terbesar di dunia. Daerah ini melahirkan banyak bapak bangsa Indonesia.",
  "menarik": [
    "Jam Gadang",
    "Rendang",
    "Lembah Harau"
  ],
  "tahun_berdiri": "1 Oktober 1945",
  "luas_wilayah": "42.012 km²",
  "semboyan": "Tuah Sakato",
  "gambar_cover": "/images/provinces/sumatera-barat.jpg"
}),
  "Maluku": createProv({
  "nama": "Maluku",
  "ibukota": "Ambon",
  "sejarah": "Dikenal secara internasional sebagai Kepulauan Rempah-Rempah (Spice Islands) yang mengundang bangsa Eropa berdatangan pada abad ke-16.",
  "menarik": [
    "Pantai Ora",
    "Benteng Belgica di Banda Neira",
    "Peninggalan sejarah perdagangan rempah"
  ],
  "tahun_berdiri": "19 Agustus 1945",
  "luas_wilayah": "46.914 km²",
  "semboyan": "Siwalima",
  "gambar_cover": "/images/provinces/maluku.jpg"
}),
  "Nusa Tenggara Barat": createProv({
  "nama": "Nusa Tenggara Barat",
  "ibukota": "Mataram",
  "sejarah": "Terdiri dari dua pulau besar: Lombok (Suku Sasak) dan Sumbawa (Suku Samawa & Mbojo).",
  "menarik": [
    "Gunung Rinjani",
    "Sirkuit Mandalika",
    "Desa Adat Sade"
  ],
  "tahun_berdiri": "14 Agustus 1958",
  "luas_wilayah": "20.153 km²",
  "semboyan": "Bumi Gora",
  "gambar_cover": "/images/provinces/nusa-tenggara-barat.jpg"
}),
  "Sulawesi Tenggara": createProv({
  "nama": "Sulawesi Tenggara",
  "ibukota": "Kendari",
  "sejarah": "Dulunya pusat Kerajaan Buton yang tak pernah dijajah Belanda secara militer.",
  "menarik": [
    "Taman Nasional Wakatobi",
    "Benteng Keraton Buton",
    "Tambang nikel terkemuka"
  ],
  "tahun_berdiri": "22 September 1964",
  "luas_wilayah": "38.067 km²",
  "semboyan": "Bumi Anoa",
  "gambar_cover": "/images/provinces/sulawesi-tenggara.jpg"
}),
  "Sulawesi Tengah": createProv({
  "nama": "Sulawesi Tengah",
  "ibukota": "Palu",
  "sejarah": "Kawasan yang memiliki sejarah panjang megalitik terbesar di Indonesia.",
  "menarik": [
    "Situs Megalitikum Lembah Bada",
    "Taman Nasional Lore Lindu",
    "Kepulauan Togean"
  ],
  "tahun_berdiri": "13 April 1964",
  "luas_wilayah": "61.841 km²",
  "semboyan": "Nosarara Nosabatutu",
  "gambar_cover": "/images/provinces/sulawesi-tengah.jpg"
}),
  "Papua": createProv({
  "nama": "Papua",
  "ibukota": "Jayapura",
  "sejarah": "Masuk resmi menjadi bagian dari NKRI melalui Pepera 1969. Diberikan status Otonomi Khusus lewat UU No. 21 Tahun 2001.",
  "menarik": [
    "Pegunungan Jayawijaya",
    "Lembah Baliem",
    "Taman Nasional Lorentz"
  ],
  "tahun_berdiri": "1 Mei 1963",
  "luas_wilayah": "319.036 km²",
  "semboyan": "Karya Swadaya",
  "gambar_cover": "/images/provinces/papua.jpg"
}),
  "Jawa Barat": createProv({
  "nama": "Jawa Barat",
  "ibukota": "Bandung",
  "sejarah": "Tanah Pasundan yang merupakan asal Kerajaan Tarumanagara dan Sunda Galuh. Bandung memiliki sejarah penting sebagai tempat diselenggarakannya KAA 1955.",
  "menarik": [
    "Gedung Sate",
    "Tangkuban Perahu",
    "Kesenian Angklung"
  ],
  "tahun_berdiri": "19 Agustus 1945",
  "luas_wilayah": "35.377 km²",
  "semboyan": "Gemah Ripah Repeh Rapih",
  "gambar_cover": "/images/provinces/jawa-barat.jpg"
}),
  "Kalimantan Timur": createProv({
  "nama": "Kalimantan Timur",
  "ibukota": "Samarinda",
  "sejarah": "Tempat berdirinya Kerajaan Kutai (abad ke-4) yang merupakan kerajaan Hindu tertua di Nusantara. Kini ditunjuk sebagai lokasi Ibu Kota Negara (IKN).",
  "menarik": [
    "Ibu Kota Nusantara (IKN)",
    "Kepulauan Derawan",
    "Desa Budaya Pampang"
  ],
  "tahun_berdiri": "1 Januari 1957",
  "luas_wilayah": "129.066 km²",
  "semboyan": "Ruhui Rahayu",
  "gambar_cover": "/images/provinces/kalimantan-timur.jpg"
}),
  "Lampung": createProv({
  "nama": "Lampung",
  "ibukota": "Bandar Lampung",
  "sejarah": "Daerah di ujung selatan Sumatera yang terkenal sebagai pemasok lada. Resmi mekar dari Sumatera Selatan pada tahun 1964.",
  "menarik": [
    "Taman Nasional Way Kambas",
    "Krakatau",
    "Pantai Tanjung Setia"
  ],
  "tahun_berdiri": "18 Maret 1964",
  "luas_wilayah": "34.623 km²",
  "semboyan": "Sai Bumi Ruwa Jurai",
  "gambar_cover": "/images/provinces/lampung.jpg"
}),
  "Jakarta Raya": createProv({
  "nama": "DKI Jakarta",
  "ibukota": "Jakarta Pusat",
  "sejarah": "Dahulu bernama Sunda Kelapa, Jayakarta, dan Batavia. Merupakan pusat pergerakan nasional, tempat pembacaan Proklamasi, dan menjadi ibukota negara.",
  "menarik": [
    "Monumen Nasional (Monas)",
    "Kota Tua Batavia",
    "Taman Mini Indonesia Indah"
  ],
  "tahun_berdiri": "22 Juni 1527",
  "luas_wilayah": "664 km²",
  "semboyan": "Jaya Raya",
  "gambar_cover": "/images/provinces/jakarta.jpg"
}),
  "Gorontalo": createProv({
  "nama": "Gorontalo",
  "ibukota": "Gorontalo",
  "sejarah": "Gorontalo adalah salah satu dari sedikit wilayah yang memproklamasikan kemerdekaannya lebih awal, yaitu pada 23 Januari 1942.",
  "menarik": [
    "Taman Laut Olele",
    "Hiu Paus Desa Botubarani",
    "Benteng Otanaha"
  ],
  "tahun_berdiri": "22 Desember 2000",
  "luas_wilayah": "11.257 km²",
  "semboyan": "Bumi Serambi Madinah",
  "gambar_cover": "/images/provinces/gorontalo.jpg"
}),
  "Yogyakarta": createProv({
  "nama": "DI Yogyakarta",
  "ibukota": "Yogyakarta",
  "sejarah": "Daerah Istimewa Yogyakarta lahir dari kebesaran Kasultanan Ngayogyakarta Hadiningrat dan Kadipaten Pakualaman.",
  "menarik": [
    "Keraton Yogyakarta",
    "Candi Prambanan",
    "Jalan Malioboro"
  ],
  "tahun_berdiri": "4 Maret 1950",
  "luas_wilayah": "3.133 km²",
  "semboyan": "Memayu Hayuning Bawana",
  "gambar_cover": "/images/provinces/yogyakarta.jpg"
}),
  "Sumatera Selatan": createProv({
  "nama": "Sumatera Selatan",
  "ibukota": "Palembang",
  "sejarah": "Palembang adalah pusat kemaharajaan Sriwijaya yang pernah menguasai perdagangan maritim se-Asia Tenggara pada abad ke-7 hingga 13.",
  "menarik": [
    "Jembatan Ampera",
    "Kuliner Pempek",
    "Sungai Musi"
  ],
  "tahun_berdiri": "14 Agustus 1950",
  "luas_wilayah": "91.592 km²",
  "semboyan": "Bersatu Teguh",
  "gambar_cover": "/images/provinces/sumatera-selatan.jpg"
}),
  "Sulawesi Barat": createProv({
  "nama": "Sulawesi Barat",
  "ibukota": "Mamuju",
  "sejarah": "Bumi Malaqbi ini resmi menjadi provinsi pada tahun 2004, mekar dari Sulawesi Selatan. Mayoritas didiami oleh Suku Mandar.",
  "menarik": [
    "Pulau Karampuang",
    "Tenun sutra Mandar",
    "Perahu Sandeq"
  ],
  "tahun_berdiri": "5 Oktober 2004",
  "luas_wilayah": "16.787 km²",
  "semboyan": "Mellete Diatonganan",
  "gambar_cover": "/images/provinces/sulawesi-barat.jpg"
}),
  "Jambi": createProv({
  "nama": "Jambi",
  "ibukota": "Jambi",
  "sejarah": "Jambi memiliki sejarah gemilang di masa Kerajaan Melayu dan menjadi pusat ajaran Buddha lewat kompleks percandian Muaro Jambi.",
  "menarik": [
    "Candi Muaro Jambi",
    "Gunung Kerinci",
    "Suku Anak Dalam"
  ],
  "tahun_berdiri": "9 Agustus 1957",
  "luas_wilayah": "50.058 km²",
  "semboyan": "Sepucuk Jambi Sembilan Lurah",
  "gambar_cover": "/images/provinces/jambi.jpg"
}),
  "Kalimantan Tengah": createProv({
  "nama": "Kalimantan Tengah",
  "ibukota": "Palangka Raya",
  "sejarah": "Provinsi ini didirikan berdasarkan UU Darurat No. 10 Tahun 1957. Palangka Raya dibangun secara khusus oleh Bung Karno.",
  "menarik": [
    "Taman Nasional Tanjung Puting",
    "Susur Sungai Kahayan",
    "Jembatan Kahayan"
  ],
  "tahun_berdiri": "23 Mei 1957",
  "luas_wilayah": "153.564 km²",
  "semboyan": "Isen Mulang (Pantang Mundur)",
  "gambar_cover": "/images/provinces/kalimantan-tengah.jpg"
}),
};
