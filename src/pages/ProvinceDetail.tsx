import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Landmark, Sparkles, MapPin } from "lucide-react";
import { getProvinceDetails } from "../services/provinceService";

export default function ProvinceDetail() {
  const { name } = useParams<{ name: string }>();
  const [details, setDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      <nav className="h-20 px-8 flex items-center justify-between bg-white border-b border-stone-200 sticky top-0 z-50">
        <Link to="/explore" className="inline-flex items-center gap-3 text-stone-400 hover:text-stone-900 transition-colors group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Kembali ke Penelusuran</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white font-bold">N</div>
          <span className="font-serif text-xl font-bold italic text-stone-900">Arsip Nasional</span>
        </div>
      </nav>

      <main className="flex-1 max-w-5xl mx-auto w-full p-8 md:p-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-accent rounded-full"></span>
              <span className="text-sm uppercase tracking-[0.4em] text-accent font-bold">Identitas Wilayah</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-serif font-bold italic text-stone-900 mb-8 tracking-tight leading-none">
              {details.nama}
            </h1>
            <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-stone-200 shadow-sm">
               <MapPin size={20} className="text-accent" />
               <span className="text-xl font-serif italic text-stone-500">Ibukota: <span className="text-stone-900 font-bold not-italic ml-1">{details.ibukota}</span></span>
            </div>
          </header>

          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
               <Landmark className="text-stone-300" size={24} />
               <h2 className="text-[10px] uppercase font-bold text-stone-400 tracking-[0.4em]">Sejarah Pembentukan</h2>
            </div>
            <div className="bg-white p-10 md:p-16 border border-stone-100 shadow-xl rounded-[2.5rem] relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
               <p className="text-xl md:text-2xl font-sans text-stone-800 leading-relaxed font-normal">
                 {details.sejarah}
               </p>
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center gap-3 mb-10">
               <Sparkles className="text-accent" size={24} />
               <h2 className="text-[10px] uppercase font-bold text-stone-400 tracking-[0.4em]">Keunikan & Fakta Menarik</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {details.menarik.map((fakta: string, idx: number) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="bg-white p-10 border border-stone-100 shadow-xl rounded-3xl flex flex-col justify-between hover:border-accent/10 transition-colors"
                >
                  <p className="text-stone-700 leading-relaxed font-sans font-medium text-base mb-8">
                    {fakta}
                  </p>
                  <span className="text-5xl font-serif font-bold text-stone-50 italic opacity-50">0{idx + 1}</span>
                </motion.div>
              ))}
            </div>
          </section>

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
      
      <div className="bg-stone-900 p-8 text-center">
         <p className="text-stone-600 text-[9px] font-bold uppercase tracking-[0.5em]">Kekayaan Sejarah Adalah Warisan Bangsa</p>
      </div>
    </div>
  );
}
