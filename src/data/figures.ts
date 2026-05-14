export interface FigureData {
  id: string;
  nama: string;
  julukan: string;
  asal_daerah: string;
  masa_hidup: string;
  kutipan: string;
  gambar_foto: string | null;
  biografi: string;
  peran_sejarah: string[];
}

export const figuresData: FigureData[] = [
  {
    id: "soekarno",
    nama: "Ir. Soekarno",
    julukan: "Bapak Proklamator Indonesia",
    asal_daerah: "Jawa Timur",
    masa_hidup: "1901 - 1970",
    kutipan: "Bangsa yang besar adalah bangsa yang menghormati jasa pahlawannya.",
    gambar_foto: "/images/figures/sukarno.webp",
    biografi: "Ir. Soekarno, atau akrab disapa Bung Karno, adalah Presiden pertama Republik Indonesia yang menjabat pada periode 1945–1967. Beliau adalah tokoh pergerakan nasional yang memainkan peranan penting dalam memerdekakan bangsa Indonesia dari penjajahan Belanda. Ia adalah penggali Pancasila karena ia yang pertama kali merumuskan konsep dasar negara tersebut.",
    peran_sejarah: [
      "Membacakan Teks Proklamasi Kemerdekaan RI",
      "Merumuskan dasar negara Pancasila",
      "Menggagas Konferensi Asia-Afrika"
    ]
  },
  {
    id: "cut-nyak-dien",
    nama: "Cut Nyak Dien",
    julukan: "Srikandi dari Tanah Rencong",
    asal_daerah: "Aceh",
    masa_hidup: "1848 - 1908",
    kutipan: "Sebagai perempuan Aceh, kita pantang menyerah kepada kaphe (kafir) Belanda!",
    gambar_foto: "/images/figures/cutnyakdien.webp",
    biografi: "Cut Nyak Dien adalah seorang Pahlawan Nasional Indonesia dari Aceh yang berjuang melawan penjajahan Belanda pada masa Perang Aceh. Setelah wilayah VI Mukim diserang, ia mengungsi dan terus berjuang, memimpin pasukan perlawanan gerilya melawan kolonial.",
    peran_sejarah: [
      "Memimpin pasukan gerilya dalam Perang Aceh",
      "Simbol perjuangan dan ketahanan wanita Indonesia",
      "Mempertahankan kebebasan wilayah Barat Nusantara"
    ]
  },
  {
    id: "pangeran-diponegoro",
    nama: "Pangeran Diponegoro",
    julukan: "Pemimpin Perang Jawa",
    asal_daerah: "Yogyakarta",
    masa_hidup: "1785 - 1855",
    kutipan: "Kemerdekaan itu adalah hak segala bangsa, dan kita harus merebutnya kembali.",
    gambar_foto: "/images/figures/pangeran.webp",
    biografi: "Pangeran Diponegoro adalah salah satu pahlawan nasional Republik Indonesia, yang memimpin Perang Diponegoro atau Perang Jawa selama periode tahun 1825 hingga 1830 melawan pemerintah Hindia Belanda.",
    peran_sejarah: [
      "Memimpin Perang Diponegoro (Perang Jawa)",
      "Melawan eksploitasi lahan oleh kolonial Belanda",
      "Menyatukan kekuatan rakyat dan elit kerajaan"
    ]
  },
  {
    id: "ki-hajar-dewantara",
    nama: "Ki Hajar Dewantara",
    julukan: "Bapak Pendidikan Nasional",
    asal_daerah: "Yogyakarta",
    masa_hidup: "1889 - 1959",
    kutipan: "Ing ngarso sung tulodo, ing madyo mangun karso, tut wuri handayani.",
    gambar_foto: "/images/figures/images.webp",
    biografi: "Raden Mas Soewardi Soerjaningrat, yang kemudian berganti nama menjadi Ki Hajar Dewantara, adalah aktivis pergerakan kemerdekaan Indonesia, kolumnis, politisi, dan pelopor pendidikan bagi kaum pribumi Indonesia dari zaman penjajahan Belanda.",
    peran_sejarah: [
      "Mendirikan Perguruan Taman Siswa",
      "Meletakkan dasar sistem pendidikan nasional",
      "Menentang kebijakan diskriminatif kolonial melalui tulisan"
    ]
  },
  {
    id: "kapitan-pattimura",
    nama: "Kapitan Pattimura",
    julukan: "Pahlawan dari Maluku",
    asal_daerah: "Maluku",
    masa_hidup: "1783 - 1817",
    kutipan: "Pattimura-Pattimura tua boleh dihancurkan, tetapi kelak Pattimura-Pattimura muda akan bangkit.",
    gambar_foto: "/images/figures/kapitan.webp",
    biografi: "Thomas Matulessy, yang lebih dikenal dengan nama Kapitan Pattimura, adalah pahlawan nasional Indonesia dari Maluku yang memimpin perlawanan bersenjata yang hebat menentang Vereenigde Oostindische Compagnie (VOC) dan pemerintah Hindia Belanda.",
    peran_sejarah: [
      "Memimpin perlawanan rakyat Maluku terhadap monopoli rempah-rempah VOC",
      "Merebut Benteng Duurstede dari tangan Belanda",
      "Menyatukan para raja dan patih di kepulauan Maluku"
    ]
  },
  {
    id: "sultan-hasanuddin",
    nama: "Sultan Hasanuddin",
    julukan: "Ayam Jantan dari Timur",
    asal_daerah: "Sulawesi Selatan",
    masa_hidup: "1631 - 1670",
    kutipan: "Lebih baik mati berkalang tanah daripada hidup di bawah telapak kaki penjajah.",
    gambar_foto: "/images/figures/sultan.webp",
    biografi: "Sultan Hasanuddin adalah Raja Gowa ke-16 dan pahlawan nasional Indonesia yang terlahir dengan nama I Mallombasi Muhammad Bakir Daeng Mattawang Karaeng Bonto Mangape. Beliau dengan gagah berani memimpin perlawanan rakyat Makassar terhadap VOC.",
    peran_sejarah: [
      "Melawan monopoli perdagangan VOC di Indonesia Timur",
      "Mempertahankan kedaulatan maritim Kerajaan Gowa-Tallo",
      "Simbol keberanian dan kegigihan perlawanan armada laut Nusantara"
    ]
  },
  {
    id: "kartini",
    nama: "R.A. Kartini",
    julukan: "Pelopor Kebangkitan Perempuan Nusantara",
    asal_daerah: "Jawa Tengah",
    masa_hidup: "1879 - 1904",
    kutipan: "Habis gelap terbitlah terang.",
    gambar_foto: "/images/figures/kartini.webp",
    biografi: "Raden Adjeng Kartini adalah seorang tokoh Jawa dan Pahlawan Nasional Indonesia. Kartini dikenal sebagai pelopor kebangkitan perempuan Nusantara. Pemikirannya tentang emansipasi perempuan banyak diabadikan dalam surat-suratnya yang dikumpulkan menjadi buku.",
    peran_sejarah: [
      "Memperjuangkan emansipasi wanita di Indonesia",
      "Mendorong akses pendidikan bagi kaum perempuan",
      "Menginspirasi pergerakan nasional melalui literatur dan korespondensi"
    ]
  },
  {
    id: "tuanku-imambonjol",
    nama: "Tuanku Imam Bonjol",
    julukan: "Pemimpin Kaum Padri",
    asal_daerah: "Sumatera Barat",
    masa_hidup: "1772 - 1864",
    kutipan: "Adat basandi syarak, syarak basandi Kitabullah.",
    gambar_foto: "/images/figures/imambonjol.webp",
    biografi: "Tuanku Imam Bonjol, lahir dengan nama Muhammad Syahab, adalah salah seorang ulama, pemimpin, dan pejuang yang berperang melawan Belanda dalam peperangan yang dikenal dengan nama Perang Padri pada tahun 1803–1838.",
    peran_sejarah: [
      "Memimpin Perang Padri melawan penjajah Belanda",
      "Memperjuangkan kemurnian ajaran agama dan melawan eksploitasi",
      "Menyatukan Kaum Padri dan Kaum Adat dalam satu front perjuangan"
    ]
  }
];
