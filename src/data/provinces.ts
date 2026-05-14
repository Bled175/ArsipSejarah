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
  galeri?: string[];
}

export const provinceData: Record<string, ProvinceData> = {
  "Aceh": {
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
  "gambar_cover": "/images/provinces/aceh.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "5.33 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Aceh",
      "Gayo",
      "Alas",
      "Tamiang"
    ],
    "agama": [
      "Islam (98%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Bustami Hamzah (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 23
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Aceh",
      "Gayo"
    ],
    "rumah_adat": "Rumoh Aceh",
    "pakaian_adat": "Ulee Balang",
    "tarian": [
      "Tari Saman yang diakui UNESCO"
    ],
    "hari_jadi": "7 Desember 1959"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Aceh/Kopi-Gayo.jpg",
    "/images/provinces/Aceh/Masjid-jaya-Baiturrahman.jpg",
    "/images/provinces/Aceh/Rumoh-Aceh.jpg",
    "/images/provinces/Aceh/Tari-saman.jpg",
    "/images/provinces/Aceh/Ulee-Balang.jpg"
]
},
  "Jawa Tengah": {
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
  "gambar_cover": "/images/provinces/jawa-tengah.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "36.73 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Jawa",
      "Samin"
    ],
    "agama": [
      "Islam",
      "Kristen",
      "Katolik"
    ]
  },
  "pemerintahan": {
    "gubernur": "Nana Sudjana (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 35
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Jawa"
    ],
    "rumah_adat": "Joglo",
    "pakaian_adat": "Jawi Jangkep & Kebaya",
    "tarian": [
      "Dataran Tinggi Dieng"
    ],
    "hari_jadi": "4 Juli 1950"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Jawa-Tengah/Candi-Borobudur.jpg",
    "/images/provinces/Jawa-Tengah/Dataran-Tinggi-Dieng.jpg",
    "/images/provinces/Jawa-Tengah/Jawi-Jangkep.jpg",
    "/images/provinces/Jawa-Tengah/Kota-Lama-Semarang.jpg",
    "/images/provinces/Jawa-Tengah/Rumah-Adat-Joglo.jpg"
]
},
  "Bengkulu": {
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
  "gambar_cover": "/images/provinces/bengkulu.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "2.03 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Rejang",
      "Serawai",
      "Melayu Bengkulu"
    ],
    "agama": [
      "Islam"
    ]
  },
  "pemerintahan": {
    "gubernur": "Rohidin Mersyah",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 10
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Bengkulu",
      "Rejang"
    ],
    "rumah_adat": "Bubungan Lima",
    "pakaian_adat": "Melayu Bengkulu",
    "tarian": [
      "Benteng Marlborough"
    ],
    "hari_jadi": "18 November 1968"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Bengkulu/Benteng-Marlborough.jpg",
    "/images/provinces/Bengkulu/Bubungan-Lima.jpg",
    "/images/provinces/Bengkulu/Melayu-Bengkulu.jpg",
    "/images/provinces/Bengkulu/Rafflesia-Arnoldi.jpg",
    "/images/provinces/Bengkulu/Rumah-Pengasingan.jpg"
]
},
  "Banten": {
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
  "gambar_cover": "/images/provinces/banten.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "12.08 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Banten",
      "Sunda",
      "Baduy"
    ],
    "agama": [
      "Islam (94%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Al Muktabar (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 8
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Sunda Banten",
      "Jawa Serang"
    ],
    "rumah_adat": "Sulah Nyanda",
    "pakaian_adat": "Pangsi",
    "tarian": [
      "Taman Nasional Ujung Kulon"
    ],
    "hari_jadi": "4 Oktober 2000"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Banten/Masjid-Agung-Banten.jpg",
    "/images/provinces/Banten/Pangsi.jpg",
    "/images/provinces/Banten/Suku-Badut.jpg",
    "/images/provinces/Banten/Taman-Nasional-Ujung-Kulon.jpg"
]
},
  "Kalimantan Barat": {
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
  "gambar_cover": "/images/provinces/kalimantan-barat.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "5.46 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Dayak",
      "Melayu",
      "Tionghoa"
    ],
    "agama": [
      "Islam",
      "Katolik",
      "Protestan"
    ]
  },
  "pemerintahan": {
    "gubernur": "Harisson (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 14
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Melayu Pontianak",
      "Dayak"
    ],
    "rumah_adat": "Rumah Radakng",
    "pakaian_adat": "King Baba & King Bibinge",
    "tarian": [
      "Sungai Kapuas"
    ],
    "hari_jadi": "1 Januari 1957"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Bangka-Belitung": {
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
  "gambar_cover": "/images/provinces/bangka-belitung.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "1.47 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Melayu Bangka",
      "Tionghoa Hakka"
    ],
    "agama": [
      "Islam",
      "Buddha",
      "Konghucu"
    ]
  },
  "pemerintahan": {
    "gubernur": "Safrizal ZA (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 7
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Melayu Bangka"
    ],
    "rumah_adat": "Rumah Panggung",
    "pakaian_adat": "Paksian",
    "tarian": [
      "Wisata Laskar Pelangi"
    ],
    "hari_jadi": "21 November 2000"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Bangka-Belitung/Batu-Granit.jpg",
    "/images/provinces/Bangka-Belitung/Paksian.jpg",
    "/images/provinces/Bangka-Belitung/Pantai-Laskar-Pelangi.jpg",
    "/images/provinces/Bangka-Belitung/Rumah-Panggung.jpg",
    "/images/provinces/Bangka-Belitung/Sejarah-Pertambangan-Timah.jpg"
]
},
  "Bali": {
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
  "gambar_cover": "/images/provinces/bali.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "4.33 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Bali Aga",
      "Bali Majapahit"
    ],
    "agama": [
      "Hindu (86%)",
      "Islam"
    ]
  },
  "pemerintahan": {
    "gubernur": "Sang Made Mahendra Jaya (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 9
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Bali",
      "Indonesia"
    ],
    "rumah_adat": "Gapura Candi Bentar",
    "pakaian_adat": "Payas Agung",
    "tarian": [
      "Tari Kecak dan Barong"
    ],
    "hari_jadi": "14 Agustus 1958"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Bali/Candi-Bentar.jpg",
    "/images/provinces/Bali/Pantai-Nusa-Dua.jpg",
    "/images/provinces/Bali/Payas-Agung.jpg",
    "/images/provinces/Bali/Pura-Besakih.jpg",
    "/images/provinces/Bali/Subak.jpg"
]
},
  "Jawa Timur": {
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
  "gambar_cover": "/images/provinces/jawa-timur.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "40.87 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Jawa",
      "Madura",
      "Osing",
      "Tengger"
    ],
    "agama": [
      "Islam",
      "Kristen"
    ]
  },
  "pemerintahan": {
    "gubernur": "Adhy Karyono (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 38
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Jawa Timur",
      "Madura"
    ],
    "rumah_adat": "Joglo Situbondo",
    "pakaian_adat": "Pesa'an Madura",
    "tarian": [
      "Kawah Ijen (Blue Fire)"
    ],
    "hari_jadi": "12 Oktober 1945"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Jawa-Timur/Gunung-Bromo.jpg",
    "/images/provinces/Jawa-Timur/Kawah-Ijen.jpg",
    "/images/provinces/Jawa-Timur/Pesa'an.jpg",
    "/images/provinces/Jawa-Timur/Situs-Trowulan.jpg"
]
},
  "Kalimantan Selatan": {
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
  "gambar_cover": "/images/provinces/kalimantan-selatan.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "4.12 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Banjar",
      "Dayak Meratus"
    ],
    "agama": [
      "Islam (97%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Sahbirin Noor",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 13
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Banjar"
    ],
    "rumah_adat": "Bubungan Tinggi",
    "pakaian_adat": "Bagajah Gamuling Baular Lulut",
    "tarian": [
      "Intan Martapura"
    ],
    "hari_jadi": "14 Agustus 1950"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Nusa Tenggara Timur": {
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
  "gambar_cover": "/images/provinces/nusa-tenggara-timur.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "5.38 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Atoni",
      "Manggarai",
      "Sumba"
    ],
    "agama": [
      "Katolik (53%)",
      "Protestan (36%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Ayodhia Kalake (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 22
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Uab Meto",
      "Manggarai"
    ],
    "rumah_adat": "Mbaru Niang",
    "pakaian_adat": "Tenun Ikat NTT",
    "tarian": [
      "Danau Kelimutu"
    ],
    "hari_jadi": "20 Desember 1958"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Nusa-Tenggara-Timur/Danau-Kelimutu.jpg",
    "/images/provinces/Nusa-Tenggara-Timur/Mbaru-Niang.jpg",
    "/images/provinces/Nusa-Tenggara-Timur/Taman-Nasional-Komodo.jpg",
    "/images/provinces/Nusa-Tenggara-Timur/Tenun-Ikat.jpg",
    "/images/provinces/Nusa-Tenggara-Timur/Wae-Rebo.jpg"
]
},
  "Sulawesi Selatan": {
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
  "gambar_cover": "/images/provinces/sulawesi-selatan.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "9.13 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Bugis",
      "Makassar",
      "Toraja",
      "Mandar"
    ],
    "agama": [
      "Islam (89%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Bahtiar Baharuddin (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 24
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Bugis",
      "Makassar",
      "Toraja"
    ],
    "rumah_adat": "Tongkonan",
    "pakaian_adat": "Baju Bodo",
    "tarian": [
      "Benteng Rotterdam"
    ],
    "hari_jadi": "13 Desember 1960"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Kepulauan Riau": {
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
  "gambar_cover": "/images/provinces/kepulauan-riau.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "2.08 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Melayu",
      "Tionghoa",
      "Jawa"
    ],
    "agama": [
      "Islam",
      "Buddha"
    ]
  },
  "pemerintahan": {
    "gubernur": "Ansar Ahmad",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 7
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Melayu"
    ],
    "rumah_adat": "Belah Bubung",
    "pakaian_adat": "Teluk Belanga",
    "tarian": [
      "Pantai Lagoi"
    ],
    "hari_jadi": "24 September 2002"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Kepulauan-Riau/Belah-Bubung.jpg",
    "/images/provinces/Kepulauan-Riau/Pantai-Lagoi.jpg",
    "/images/provinces/Kepulauan-Riau/Pulau-Penyengat.jpg",
    "/images/provinces/Kepulauan-Riau/Pusat-Perdaganyan-Batam.jpg"
]
},
  "Irian Jaya Barat": {
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
  "gambar_cover": "/images/provinces/papua-barat.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "1.15 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Arfak",
      "Doreri",
      "Raja Ampat"
    ],
    "agama": [
      "Protestan",
      "Islam"
    ]
  },
  "pemerintahan": {
    "gubernur": "Ali Baham Temongmere (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 13
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Papua Barat",
      "Indonesia"
    ],
    "rumah_adat": "Mod Aki Aksa",
    "pakaian_adat": "Ewer",
    "tarian": [
      "Taman Nasional Teluk Cenderawasih"
    ],
    "hari_jadi": "4 Oktober 1999"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Sumatera Utara": {
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
  "gambar_cover": "/images/provinces/sumatera-utara.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "14.9 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Batak",
      "Nias",
      "Melayu Deli",
      "Jawa"
    ],
    "agama": [
      "Islam (66%)",
      "Kristen Protestan (26%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Hassanudin (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 33
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Batak",
      "Nias",
      "Melayu"
    ],
    "rumah_adat": "Bolon",
    "pakaian_adat": "Ulos",
    "tarian": [
      "Istana Maimun"
    ],
    "hari_jadi": "15 April 1948"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Sumatra-Utara/Danau-Toba.jpg",
    "/images/provinces/Sumatra-Utara/Istana-Maimun.jpg",
    "/images/provinces/Sumatra-Utara/Lompat-Batu-Nias.JPG",
    "/images/provinces/Sumatra-Utara/Rumah-Bolon.jpg",
    "/images/provinces/Sumatra-Utara/Ulos.jpg"
]
},
  "Riau": {
  "nama": "Riau",
  "ibukota": "Pekanbaru",
  "sejarah": "Dikenal sebagai Bumi Lancang Kuning, Riau terbentuk tahun 1958. Riau memiliki sejarah panjang di era Kerajaan Siak Sri Indrapura.",
  "menarik": [
    "Istana Siak Sri Indrapura",
    "Sungai Kampar"
  ],
  "tahun_berdiri": "9 Agustus 1957",
  "luas_wilayah": "87.023 km²",
  "semboyan": "Bumi Lancang Kuning",
  "gambar_cover": "/images/provinces/riau.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "6.49 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Melayu",
      "Minangkabau",
      "Jawa"
    ],
    "agama": [
      "Islam (87%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "SF Hariyanto (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 12
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Melayu Riau"
    ],
    "rumah_adat": "Selaso Jatuh Kembar",
    "pakaian_adat": "Teluk Belanga & Kebaya Laboh",
    "tarian": [
      "Budaya pantun"
    ],
    "hari_jadi": "9 Agustus 1957"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Riau/Istana-Siak-Sri-Indrapura.jpg",
    "/images/provinces/Riau/Kebaya-Labuh-dan-Teluk-Balanga.jpg",
    "/images/provinces/Riau/Selaso-Jatuh-Tunggal.jpg",
    "/images/provinces/Riau/Sungai-Kampar.jpg"
]
},
  "Sulawesi Utara": {
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
  "gambar_cover": "/images/provinces/sulawesi-utara.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "2.63 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Minahasa",
      "Sangihe",
      "Mongondow"
    ],
    "agama": [
      "Protestan (63%)",
      "Islam (31%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Olly Dondokambey",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 15
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Melayu Manado",
      "Minahasa"
    ],
    "rumah_adat": "Wale",
    "pakaian_adat": "Kabasaran",
    "tarian": [
      "Kawasan Tomohon"
    ],
    "hari_jadi": "14 Agustus 1959"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Kalimantan Utara": {
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
  "gambar_cover": "/images/provinces/kalimantan-utara.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "0.71 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Dayak",
      "Tidung",
      "Bulungan"
    ],
    "agama": [
      "Islam",
      "Protestan"
    ]
  },
  "pemerintahan": {
    "gubernur": "Zainal Arifin Paliwang",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 5
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Tidung",
      "Dayak"
    ],
    "rumah_adat": "Baloy",
    "pakaian_adat": "Ta'a & Sapei Sapaq",
    "tarian": [
      "Kehidupan suku Dayak Kenyah"
    ],
    "hari_jadi": "25 Oktober 2012"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Maluku Utara": {
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
  "gambar_cover": "/images/provinces/maluku-utara.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "1.29 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Ternate",
      "Tidore",
      "Galela"
    ],
    "agama": [
      "Islam (74%)",
      "Protestan (24%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Samsuddin Abdul Kadir (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 10
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Ternate",
      "Tidore"
    ],
    "rumah_adat": "Baileo",
    "pakaian_adat": "Manteren Lamo",
    "tarian": [
      "Pulau Morotai"
    ],
    "hari_jadi": "4 Oktober 1999"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Maluku-Utara/Baileo.jpg",
    "/images/provinces/Maluku-Utara/Manteren-Lamo.jpg",
    "/images/provinces/Maluku-Utara/Tidore.jpg"
]
},
  "Sumatera Barat": {
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
  "gambar_cover": "/images/provinces/sumatera-barat.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "5.58 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Minangkabau",
      "Mentawai"
    ],
    "agama": [
      "Islam (97%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Mahyeldi Ansharullah",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 19
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Minangkabau"
    ],
    "rumah_adat": "Rumah Gadang",
    "pakaian_adat": "Bundo Kanduang",
    "tarian": [
      "Rendang"
    ],
    "hari_jadi": "1 Oktober 1945"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Sumatra-Barat/Bundo-Kanduang.jpg",
    "/images/provinces/Sumatra-Barat/Jam-Gadang.jpg",
    "/images/provinces/Sumatra-Barat/Lembah-Harau.jpg",
    "/images/provinces/Sumatra-Barat/Rendang.jpg",
    "/images/provinces/Sumatra-Barat/Tari-Piring.jpg"
]
},
  "Maluku": {
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
  "gambar_cover": "/images/provinces/maluku.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "1.86 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Ambon",
      "Kei",
      "Buru"
    ],
    "agama": [
      "Islam (52%)",
      "Protestan (41%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Sadali Ie (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 11
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Ambon",
      "Kei"
    ],
    "rumah_adat": "Baileo",
    "pakaian_adat": "Baju Cele",
    "tarian": [
      "Benteng Belgica di Banda Neira"
    ],
    "hari_jadi": "19 Agustus 1945"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Maluku/Baileo.jpg",
    "/images/provinces/Maluku/Baju-Cele.jpg",
    "/images/provinces/Maluku/Benteng-Belgica.jpg",
    "/images/provinces/Maluku/Pantai-Ora.jpg",
    "/images/provinces/Maluku/Peninggalan-Sejarah.jpg"
]
},
  "Nusa Tenggara Barat": {
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
  "gambar_cover": "/images/provinces/nusa-tenggara-barat.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "5.38 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Sasak",
      "Samawa",
      "Mbojo"
    ],
    "agama": [
      "Islam (96%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Lalu Gita Ariadi (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 10
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Sasak",
      "Sumbawa",
      "Bima"
    ],
    "rumah_adat": "Dalam Loka",
    "pakaian_adat": "Lambung & Pegon",
    "tarian": [
      "Sirkuit Mandalika"
    ],
    "hari_jadi": "14 Agustus 1958"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Nusa-Tenggara-Barat/Desa-Adat-Sade.jpg",
    "/images/provinces/Nusa-Tenggara-Barat/Gunung-Rinjani.jpg",
    "/images/provinces/Nusa-Tenggara-Barat/Istana-Dalam-Loka.jpg",
    "/images/provinces/Nusa-Tenggara-Barat/Lambung.jpg",
    "/images/provinces/Nusa-Tenggara-Barat/Sirkut-Mandalika.jpg"
]
},
  "Sulawesi Tenggara": {
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
  "gambar_cover": "/images/provinces/sulawesi-tenggara.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "2.65 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Tolaki",
      "Buton",
      "Muna"
    ],
    "agama": [
      "Islam (95%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Andap Budhi Revianto (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 17
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Tolaki",
      "Buton",
      "Muna"
    ],
    "rumah_adat": "Banua Tada",
    "pakaian_adat": "Babu Nggawi",
    "tarian": [
      "Benteng Keraton Buton"
    ],
    "hari_jadi": "22 September 1964"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Sulawesi Tengah": {
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
  "gambar_cover": "/images/provinces/sulawesi-tengah.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "3.02 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Kaili",
      "Pamona",
      "Banggai"
    ],
    "agama": [
      "Islam (76%)",
      "Protestan (16%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Rusdy Mastura",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 13
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Kaili",
      "Pamona"
    ],
    "rumah_adat": "Tambi",
    "pakaian_adat": "Nggembe",
    "tarian": [
      "Taman Nasional Lore Lindu"
    ],
    "hari_jadi": "13 April 1964"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Papua": {
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
  "gambar_cover": "/images/provinces/papua.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "4.30 juta jiwa (pra-pemekaran)",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Dani",
      "Asmat",
      "Amungme",
      "Sentani"
    ],
    "agama": [
      "Protestan (69%)",
      "Katolik"
    ]
  },
  "pemerintahan": {
    "gubernur": "Ridwan Rumasukun (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 29
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Dani",
      "Asmat",
      "Melayu Papua"
    ],
    "rumah_adat": "Honai",
    "pakaian_adat": "Koteka & Rok Rumbai",
    "tarian": [
      "Lembah Baliem"
    ],
    "hari_jadi": "1 Mei 1963"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Jawa Barat": {
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
  "gambar_cover": "/images/provinces/jawa-barat.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "48.78 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Sunda",
      "Cirebon",
      "Betawi"
    ],
    "agama": [
      "Islam (97%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Bey Machmudin (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 27
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Sunda",
      "Cirebonan"
    ],
    "rumah_adat": "Kasepuhan",
    "pakaian_adat": "Kebaya Sunda & Pangsi",
    "tarian": [
      "Tangkuban Perahu"
    ],
    "hari_jadi": "19 Agustus 1945"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Jawa-Barat/Angklung.jpg",
    "/images/provinces/Jawa-Barat/Gedung-Sate.jpg",
    "/images/provinces/Jawa-Barat/Kebaya-Sunda.jpg",
    "/images/provinces/Jawa-Barat/Kesepuhan.jpg",
    "/images/provinces/Jawa-Barat/Tangkuban-Perahu.jpg"
]
},
  "Kalimantan Timur": {
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
  "gambar_cover": "/images/provinces/kalimantan-timur.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "3.80 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Jawa",
      "Bugis",
      "Banjar",
      "Dayak"
    ],
    "agama": [
      "Islam (87%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Akmal Malik (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 10
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Kutai",
      "Banjar",
      "Dayak"
    ],
    "rumah_adat": "Lamin",
    "pakaian_adat": "Kustin",
    "tarian": [
      "Kepulauan Derawan"
    ],
    "hari_jadi": "1 Januari 1957"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Lampung": {
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
  "gambar_cover": "/images/provinces/lampung.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "9.08 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Jawa",
      "Lampung",
      "Sunda"
    ],
    "agama": [
      "Islam (95%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Samsudin (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 15
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Lampung",
      "Jawa"
    ],
    "rumah_adat": "Nuwo Sesat",
    "pakaian_adat": "Tulang Bawang",
    "tarian": [
      "Krakatau"
    ],
    "hari_jadi": "18 Maret 1964"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Lampung/Krakatau.jpg",
    "/images/provinces/Lampung/Nuwo-Sesat.jpg",
    "/images/provinces/Lampung/Pantai-Tanjung-Setia.jpg",
    "/images/provinces/Lampung/Taman-Nasional-Way-Kambas.jpg",
    "/images/provinces/Lampung/Tulang-Bawang.jpg"
]
},
  "Jakarta Raya": {
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
  "gambar_cover": "/images/provinces/jakarta.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "10.67 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Jawa",
      "Betawi",
      "Sunda",
      "Tionghoa"
    ],
    "agama": [
      "Islam (83%)",
      "Kristen (8%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Heru Budi Hartono (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 6
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Melayu Betawi",
      "Indonesia"
    ],
    "rumah_adat": "Kebaya",
    "pakaian_adat": "Abang None",
    "tarian": [
      "Kota Tua Batavia"
    ],
    "hari_jadi": "22 Juni 1527"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Gorontalo": {
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
  "gambar_cover": "/images/provinces/gorontalo.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "1.18 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Gorontalo",
      "Suwawa"
    ],
    "agama": [
      "Islam (97%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Rudy Salahuddin (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 6
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Gorontalo"
    ],
    "rumah_adat": "Dulohupa",
    "pakaian_adat": "Biliu & Makuta",
    "tarian": [
      "Hiu Paus Desa Botubarani"
    ],
    "hari_jadi": "22 Desember 2000"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Yogyakarta": {
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
  "gambar_cover": "/images/provinces/yogyakarta.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "3.67 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Jawa"
    ],
    "agama": [
      "Islam (92%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Sri Sultan Hamengkubuwono X",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 5
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Jawa Mataraman"
    ],
    "rumah_adat": "Bangsal Kencono",
    "pakaian_adat": "Surjan & Kebaya",
    "tarian": [
      "Candi Prambanan"
    ],
    "hari_jadi": "4 Maret 1950"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Yogyakarta/Bangsal-Kencono.jpg",
    "/images/provinces/Yogyakarta/Candi-Prambanan.jpg",
    "/images/provinces/Yogyakarta/Joglo-Situbondo.jpg",
    "/images/provinces/Yogyakarta/Kraton.jpg",
    "/images/provinces/Yogyakarta/Malioboro.jpg",
    "/images/provinces/Yogyakarta/Surjan.jpg"
]
},
  "Sumatera Selatan": {
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
  "gambar_cover": "/images/provinces/sumatera-selatan.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "8.55 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Melayu Palembang",
      "Jawa",
      "Komering"
    ],
    "agama": [
      "Islam (97%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Agus Fatoni (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 17
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Melayu Palembang"
    ],
    "rumah_adat": "Limas",
    "pakaian_adat": "Aesan Gede",
    "tarian": [
      "Kuliner Pempek"
    ],
    "hari_jadi": "14 Agustus 1950"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Sumatra-Selatan/Aesan-Gede.jpg",
    "/images/provinces/Sumatra-Selatan/Jembatan-Ampera.jpg",
    "/images/provinces/Sumatra-Selatan/Limas.jpg",
    "/images/provinces/Sumatra-Selatan/Pempekjpg.jpg",
    "/images/provinces/Sumatra-Selatan/Sungai-Musi.jpg"
]
},
  "Sulawesi Barat": {
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
  "gambar_cover": "/images/provinces/sulawesi-barat.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "1.43 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Mandar",
      "Toraja",
      "Bugis"
    ],
    "agama": [
      "Islam (83%)",
      "Protestan (14%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Bahtiar Baharuddin (Pj)",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 6
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Mandar"
    ],
    "rumah_adat": "Boyang",
    "pakaian_adat": "Pattuqduq Towaine",
    "tarian": [
      "Tenun sutra Mandar"
    ],
    "hari_jadi": "5 Oktober 2004"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
  "Jambi": {
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
  "gambar_cover": "/images/provinces/jambi.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "3.58 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Melayu Jambi",
      "Jawa",
      "Kerinci"
    ],
    "agama": [
      "Islam (95%)"
    ]
  },
  "pemerintahan": {
    "gubernur": "Al Haris",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 11
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Melayu Jambi"
    ],
    "rumah_adat": "Kajang Lako",
    "pakaian_adat": "Baju Kurung Tanggung",
    "tarian": [
      "Gunung Kerinci"
    ],
    "hari_jadi": "9 Agustus 1957"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": [
    "/images/provinces/Jambi/Candi-Muaro-Jambi.jpg",
    "/images/provinces/Jambi/Gunung-Kerinci.jpg",
    "/images/provinces/Jambi/Kajang-Lako.jpg",
    "/images/provinces/Jambi/Kurung-Tanggung.jpg",
    "/images/provinces/Jambi/Suku-Anak-Dalam.jpg"
]
},
  "Kalimantan Tengah": {
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
  "gambar_cover": "/images/provinces/kalimantan-tengah.jpg",
  "informasi_umum": {
    "dasar_hukum": "Undang-Undang Pembentukan Daerah Republik Indonesia",
    "makna_lambang": "Melambangkan sejarah, kesejahteraan, persatuan, dan kekayaan alam daerah setempat."
  },
  "geografis": {
    "koordinat": "Kawasan Strategis Kepulauan Nusantara",
    "batas_wilayah": "Berbatasan dengan provinsi tetangga, perairan, atau negara batas.",
    "kondisi": "Topografi beragam: daratan, perbukitan, pegunungan, dan kawasan pesisir.",
    "iklim": "Iklim tropis dengan dua musim utama"
  },
  "demografi": {
    "jumlah_penduduk": "2.68 juta jiwa",
    "kepadatan": "Terdistribusi secara regional",
    "komposisi": "Terdistribusi dominan pada kelompok usia produktif (Bonus Demografi)",
    "suku": [
      "Dayak Ngaju",
      "Jawa",
      "Banjar"
    ],
    "agama": [
      "Islam (74%)",
      "Protestan (16%)",
      "Hindu Kaharingan"
    ]
  },
  "pemerintahan": {
    "gubernur": "Sugianto Sabran",
    "struktur": "Sistem Eksekutif (Pemprov) dan Legislatif (DPRD)",
    "kabupaten_kota": 14
  },
  "ekonomi": {
    "pdrb": "Data PDRB Makro BPS 2023",
    "sektor_unggulan": [
      "Pertanian",
      "Perdagangan",
      "Industri",
      "Pariwisata"
    ],
    "komoditas": [
      "Bahan Pokok",
      "Hasil Kebun",
      "Hasil Laut"
    ]
  },
  "sosbud": {
    "bahasa": [
      "Dayak Ngaju",
      "Banjar"
    ],
    "rumah_adat": "Betang",
    "pakaian_adat": "Upak Nyamu",
    "tarian": [
      "Susur Sungai Kahayan"
    ],
    "hari_jadi": "23 Mei 1957"
  },
  "infrastruktur": {
    "transportasi": [
      "Bandar Udara Utama",
      "Pelabuhan",
      "Jaringan Jalan Nasional Trans"
    ],
    "pendidikan": [
      "Universitas Negeri Utama & Perguruan Tinggi Swasta"
    ],
    "kesehatan": [
      "Rumah Sakit Umum Daerah (RSUD) Rujukan"
    ]
  },
  "arsip": {
    "tokoh": [
      "Pahlawan Nasional dari Daerah",
      "Tokoh Adat & Masyarakat"
    ],
    "dokumen": [
      "Arsip Surat Keputusan Pembentukan",
      "Dokumen Sejarah Lokal",
      "Foto Masa Lampau"
    ],
    "peristiwa": [
      "Masa Perjuangan Kemerdekaan",
      "Peristiwa Pemilihan Kepala Daerah Perdana"
    ]
  },
  "metadata_arsip": {
    "sumber": "Arsip Nasional Republik Indonesia (ANRI) & Dinas Perpustakaan dan Kearsipan Daerah",
    "tahun": "Abad ke-19 hingga Era Reformasi",
    "jenis": "Teks, Foto Sejarah, Audio Visual",
    "status": "Digitalisasi Bertahap Otoritas Lokal"
  },
  "galeri": []
},
};
