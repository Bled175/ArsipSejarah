import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Landmark, Sparkles, MapPin, MessageCircle, X, Calendar, Maximize, Quote, Image as ImageIcon, Book, Map, Users, Building, TrendingUp, Music, Construction, Archive, Database, Compass, Users2, Landmark as GovIcon, LineChart, Tent, Hammer, FolderOpen, Info } from "lucide-react";
import { getProvinceDetails } from "../services/provinceService";
import AIChat from "../components/AIChat";
import IndonesiaMap from "../components/IndonesiaMap";

const SectionHeader = ({ icon: Icon, title, id }: { icon: any, title: string, id: string }) => (
  <div id={id} className="flex items-center gap-3 mb-8 pt-24 -mt-24">
    <Icon className="text-accent" size={28} />
    <h2 className="text-xs uppercase font-bold text-stone-400 tracking-[0.4em]">{title}</h2>
  </div>
);

const DataCard = ({ label, value }: { label: string, value: string | React.ReactNode }) => (
  <div className="bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mb-2">{label}</p>
    <p className="font-sans font-medium text-stone-800 text-sm leading-relaxed">{value}</p>
  </div>
);

const ListCard = ({ label, items }: { label: string, items: string[] }) => (
  <div className="bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mb-4">{label}</p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-stone-800">
          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function ProvinceDetail() {
  const { name } = useParams<{ name: string }>();
  const [details, setDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (name) {
      getProvinceDetails(name).then((data) => {
        setDetails(data);
        setIsLoading(false);
      });
    }
  }, [name]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F7F3EF] flex flex-col items-center justify-center gap-6">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-stone-400 font-bold italic">Menyusun Arsip Sejarah...</p>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="min-h-screen bg-[#F7F3EF] flex flex-col items-center justify-center p-8">
        <p className="text-red-500 font-bold mb-4">Gagal memuat data provinsi.</p>
        <Link to="/explore" className="text-stone-900 underline font-bold uppercase tracking-widest text-xs">Kembali ke Peta</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F3EF] flex flex-col font-sans selection:bg-accent/20">
      <nav className="h-20 px-6 md:px-8 flex items-center justify-between bg-white border-b border-stone-200 sticky top-0 z-50">
        <Link to="/explore" className="inline-flex items-center gap-2 md:gap-3 text-stone-400 hover:text-stone-900 transition-colors group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden md:inline text-[10px] uppercase font-bold tracking-[0.2em]">Kembali ke Penelusuran</span>
          <span className="md:hidden text-[10px] uppercase font-bold tracking-[0.1em]">Peta</span>
        </Link>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-accent rounded-sm flex items-center justify-center text-white font-bold text-xs md:text-base">N</div>
          <span className="font-serif text-lg md:text-xl font-bold italic text-stone-900">Arsip Nasional</span>
        </div>
      </nav>

      <main className="flex-1 max-w-5xl mx-auto w-full p-8 md:p-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <header className="mb-16 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-accent rounded-full"></span>
                <span className="text-sm uppercase tracking-[0.4em] text-accent font-bold">Identitas Wilayah</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-stone-900 mb-8 tracking-tight leading-none">
                {details.nama}
              </h1>
              
              <div className="grid sm:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                   <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                     <MapPin size={18} className="text-accent" />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Ibukota</p>
                     <p className="text-sm font-bold text-stone-900">{details.ibukota}</p>
                   </div>
                </div>
                
                {details.tahun_berdiri && (
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                     <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                       <Calendar size={18} className="text-accent" />
                     </div>
                     <div>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Dibentuk</p>
                       <p className="text-sm font-bold text-stone-900">{details.tahun_berdiri}</p>
                     </div>
                  </div>
                )}
                
                {details.luas_wilayah && (
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                     <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                       <Maximize size={18} className="text-accent" />
                     </div>
                     <div>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Luas Wilayah</p>
                       <p className="text-sm font-bold text-stone-900">{details.luas_wilayah}</p>
                     </div>
                  </div>
                )}
                
                {details.semboyan && (
                  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                     <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                       <Quote size={18} className="text-accent" />
                     </div>
                     <div>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Semboyan</p>
                       <p className="text-sm font-bold text-stone-900 line-clamp-1" title={details.semboyan}>{details.semboyan}</p>
                     </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="w-full lg:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden relative shadow-sm bg-stone-100 flex shrink-0 group">
               <div className="w-full h-full transform origin-center transition-transform duration-1000 group-hover:scale-[1.05]">
                 <IndonesiaMap activeProvince={details.nama} minimalMode={true} />
               </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-16 items-start mb-20 relative">
            {/* Scrollspy / Sticky Sidebar Navigation */}
            <aside className="w-full lg:w-[300px] sticky top-28 hidden lg:block shrink-0">
               <nav className="bg-white border border-stone-200 rounded-[2rem] p-8 shadow-xl">
                  <h3 className="font-serif italic font-bold text-xl text-stone-900 mb-6">Daftar Isi Arsip</h3>
                  <ul className="space-y-1">
                     <li><a href="#informasi-umum" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><Book size={14} /> 1. Info Umum</a></li>
                     <li><a href="#geografis" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><Map size={14} /> 2. Geografis</a></li>
                     <li><a href="#demografi" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><Users size={14} /> 3. Demografi</a></li>
                     <li><a href="#pemerintahan" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><GovIcon size={14} /> 4. Pemerintahan</a></li>
                     <li><a href="#ekonomi" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><LineChart size={14} /> 5. Ekonomi</a></li>
                     <li><a href="#sosbud" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><Tent size={14} /> 6. Sosial Budaya</a></li>
                     <li><a href="#infrastruktur" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><Hammer size={14} /> 7. Infrastruktur</a></li>
                     <li><a href="#arsip" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><FolderOpen size={14} /> 8. Arsip Terkait</a></li>
                     <li><a href="#galeri" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3 border-b border-stone-50"><ImageIcon size={14} /> 9. Galeri Foto</a></li>
                     <li><a href="#metadata" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400 hover:text-accent transition-colors py-3"><Info size={14} /> 10. Metadata</a></li>
                  </ul>
               </nav>
            </aside>

            {/* Encyclopedia Content */}
            <div className="flex-1 space-y-24 min-w-0">
              
              <section>
                <SectionHeader id="informasi-umum" icon={Book} title="1. Informasi Umum" />
                <div className="bg-white p-10 md:p-12 border border-stone-100 shadow-xl rounded-[2.5rem] relative overflow-hidden mb-8">
                   <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                   <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mb-4">Sejarah Singkat</p>
                   <p className="text-lg md:text-xl font-sans text-stone-800 leading-relaxed font-normal">
                     {details.sejarah}
                   </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                   <DataCard label="Dasar Hukum Pembentukan" value={details.informasi_umum?.dasar_hukum} />
                   <DataCard label="Makna Lambang/Logo" value={details.informasi_umum?.makna_lambang} />
                </div>
              </section>

              <section>
                <SectionHeader id="geografis" icon={Map} title="2. Data Geografis" />
                <div className="grid sm:grid-cols-2 gap-6">
                   <DataCard label="Letak & Koordinat" value={details.geografis?.koordinat} />
                   <DataCard label="Batas Wilayah" value={details.geografis?.batas_wilayah} />
                   <DataCard label="Kondisi Geografis" value={details.geografis?.kondisi} />
                   <DataCard label="Iklim" value={details.geografis?.iklim} />
                </div>
              </section>

              <section>
                <SectionHeader id="demografi" icon={Users} title="3. Demografi" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                   <DataCard label="Jumlah Penduduk" value={details.demografi?.jumlah_penduduk} />
                   <DataCard label="Kepadatan" value={details.demografi?.kepadatan} />
                   <DataCard label="Komposisi Usia/Gender" value={details.demografi?.komposisi} />
                </div>
                <div className="grid sm:grid-cols-2 gap-6 items-stretch">
                   <ListCard label="Suku Bangsa Utama" items={details.demografi?.suku || []} />
                   <ListCard label="Agama" items={details.demografi?.agama || []} />
                </div>
              </section>

              <section>
                <SectionHeader id="pemerintahan" icon={GovIcon} title="4. Pemerintahan" />
                <div className="grid sm:grid-cols-3 gap-6">
                   <DataCard label="Gubernur Aktif" value={details.pemerintahan?.gubernur} />
                   <DataCard label="Struktur Pemerintah" value={details.pemerintahan?.struktur} />
                   <DataCard label="Jumlah Kab/Kota" value={details.pemerintahan?.kabupaten_kota?.toString() + " Wilayah"} />
                </div>
              </section>

              <section>
                <SectionHeader id="ekonomi" icon={LineChart} title="5. Ekonomi & Potensi" />
                <div className="grid sm:grid-cols-3 gap-6 items-stretch">
                   <DataCard label="PDRB Regional" value={details.ekonomi?.pdrb} />
                   <ListCard label="Sektor Unggulan" items={details.ekonomi?.sektor_unggulan || []} />
                   <ListCard label="Komoditas Utama" items={details.ekonomi?.komoditas || []} />
                </div>
              </section>

              <section>
                <SectionHeader id="sosbud" icon={Tent} title="6. Sosial & Budaya" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                   <DataCard label="Rumah Adat" value={details.sosbud?.rumah_adat} />
                   <DataCard label="Pakaian Adat" value={details.sosbud?.pakaian_adat} />
                   <DataCard label="Hari Jadi Provinsi" value={details.sosbud?.hari_jadi} />
                </div>
                <div className="grid sm:grid-cols-2 gap-6 items-stretch mb-10">
                   <ListCard label="Bahasa Daerah" items={details.sosbud?.bahasa || []} />
                   <ListCard label="Tarian / Tradisi" items={details.sosbud?.tarian || []} />
                </div>
                
                <div className="mt-8">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mb-6">Fakta Menarik Lainnya</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {details.menarik.map((fakta: string, idx: number) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-white p-8 border border-stone-100 shadow-xl rounded-3xl flex flex-col justify-between hover:border-accent/10 transition-colors"
                      >
                        <p className="text-stone-700 leading-relaxed font-sans font-medium text-sm mb-6">
                          {fakta}
                        </p>
                        <span className="text-4xl font-serif font-bold text-stone-50 italic opacity-50">0{idx + 1}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <SectionHeader id="infrastruktur" icon={Hammer} title="7. Infrastruktur & Fasilitas" />
                <div className="grid sm:grid-cols-3 gap-6 items-stretch">
                   <ListCard label="Transportasi Utama" items={details.infrastruktur?.transportasi || []} />
                   <ListCard label="Pendidikan (Universitas)" items={details.infrastruktur?.pendidikan || []} />
                   <ListCard label="Kesehatan (RS Utama)" items={details.infrastruktur?.kesehatan || []} />
                </div>
              </section>

              <section>
                <SectionHeader id="arsip" icon={FolderOpen} title="8. Arsip Terkait" />
                <div className="grid sm:grid-cols-3 gap-6 items-stretch">
                   <ListCard label="Tokoh Penting" items={details.arsip?.tokoh || []} />
                   <ListCard label="Peristiwa Daerah" items={details.arsip?.peristiwa || []} />
                   <ListCard label="Dokumen / Kebijakan" items={details.arsip?.dokumen || []} />
                </div>
              </section>

              {details.galeri && details.galeri.length > 0 && (
                <section>
                  <SectionHeader id="galeri" icon={ImageIcon} title="9. Galeri Foto" />
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {details.galeri.map((img: string, idx: number) => {
                      // Extract name from the filename for caption
                      const filename = img.split('/').pop() || '';
                      const caption = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '').replace(/-/g, ' ');
                      return (
                        <div key={idx} className="bg-white border border-stone-100 p-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow group cursor-zoom-in" onClick={() => setSelectedImage(img)}>
                          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-stone-100">
                            <img src={img} alt={caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <p className="text-[10px] uppercase font-bold tracking-[0.1em] text-stone-500 text-center">{caption}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              <section>
                <SectionHeader id="metadata" icon={Info} title="10. Metadata Arsip" />
                <div className="bg-stone-900 rounded-[2rem] p-8 text-white grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                   <div>
                     <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-bold">Sumber Arsip</p>
                     <p className="text-sm font-medium">{details.metadata_arsip?.sumber}</p>
                   </div>
                   <div>
                     <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-bold">Tahun Arsip</p>
                     <p className="text-sm font-medium">{details.metadata_arsip?.tahun}</p>
                   </div>
                   <div>
                     <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-bold">Jenis Arsip</p>
                     <p className="text-sm font-medium">{details.metadata_arsip?.jenis}</p>
                   </div>
                   <div>
                     <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-2 font-bold">Status Digitalisasi</p>
                     <p className="text-sm font-medium text-accent">{details.metadata_arsip?.status}</p>
                   </div>
                </div>
              </section>

            </div>
          </div>

          <footer className="pt-16 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-8 text-stone-400 mb-20">
             <div className="text-[10px] font-bold uppercase tracking-[0.3em]">
               Dokumentasi Terverifikasi • Republik Indonesia
             </div>
             <div className="flex gap-4">
                <Link to="/explore" className="px-10 py-5 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-accent transition-all shadow-xl hover:shadow-accent/20">
                  Jelajahi Wilayah Lain
                </Link>
             </div>
          </footer>
        </motion.div>
      </main>
      
      <div className="bg-stone-900 p-6 md:p-8 text-center">
         <p className="text-stone-500 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.5em]">&copy; 2026 npm artisan</p>
      </div>

      <AnimatePresence>
        {!isChatOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-stone-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-accent transition-colors group cursor-pointer"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 md:bottom-12 right-8 md:right-12 z-50 w-[calc(100vw-4rem)] md:w-[400px] shadow-2xl origin-bottom-right"
          >
            <div className="relative">
              <button 
                onClick={() => setIsChatOpen(false)}
                className="absolute -top-4 -left-4 w-10 h-10 bg-white border border-stone-200 text-stone-500 rounded-full flex items-center justify-center shadow-lg hover:text-stone-900 z-10 cursor-pointer hover:bg-stone-100 transition-colors"
              >
                <X size={20} />
              </button>
              <AIChat contextTopic={details.nama} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/90 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gambar diperbesar"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
