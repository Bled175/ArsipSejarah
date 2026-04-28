import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Info, X, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import IndonesiaMap from "../components/IndonesiaMap";
import { getProvinceDetails } from "../services/provinceService";

export default function Explore() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [provinceDetails, setProvinceDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProvinceClick = async (name: string) => {
    if (!name) return;
    setSelectedProvince(name);
    setIsLoading(true);
    const details = await getProvinceDetails(name);
    setProvinceDetails(details);
    setIsLoading(false);
  };

  const closeModal = () => {
    setSelectedProvince(null);
    setProvinceDetails(null);
  };

  return (
    <div className="w-full h-screen bg-[#F7F3EF] flex flex-col font-sans text-stone-800 overflow-hidden relative">
      <nav className="h-16 px-8 border-b border-stone-200 flex items-center justify-between bg-white z-20">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white font-bold text-lg hover:bg-stone-900 transition-colors">
            N
          </Link>
          <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
            Nusantara<span className="text-accent underline decoration-2 underline-offset-4">Arsip</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
          <Link to="/explore" className="text-accent border-b-2 border-accent pb-1">Peta Sejarah</Link>
          <span className="cursor-not-allowed opacity-50">Daftar Tokoh</span>
          <span className="cursor-not-allowed opacity-50">Linimasa</span>
        </div>
        <div className="w-32"></div> {/* Spacer to maintain layout balance */}
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden bg-[#F1EDE9]">
        <div className="w-full h-full flex items-center justify-center p-8">
            <IndonesiaMap onProvinceClick={handleProvinceClick} activeProvince={selectedProvince} />
            
            <div className="absolute bottom-10 right-10 flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-stone-200 shadow-xl">
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">Pilih provinsi pada peta untuk informasi</span>
            </div>
        </div>
      </main>

      <footer className="h-10 bg-stone-900 text-[9px] text-stone-500 flex items-center px-8 justify-between font-bold uppercase tracking-[0.2em]">
        <p>&copy; 2024 Arsip Nasional Nusantara - Sejarah NKRI</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Repositori Publik</span>
          <span className="hover:text-white cursor-pointer transition-colors">Dokumentasi</span>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProvince && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-white w-full max-w-sm rounded-lg overflow-hidden shadow-2xl relative border border-stone-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-32 bg-stone-100 flex items-end p-6 border-b border-stone-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-50"></div>
                <div className="relative z-10 w-full flex justify-between items-end">
                   <div>
                    <h3 className="text-3xl font-serif font-bold italic text-stone-900 leading-none">{selectedProvince}</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mt-2">Arsip Provinsi</p>
                   </div>
                   <button 
                    onClick={closeModal}
                    className="p-1 rounded hover:bg-black/5 transition-colors text-stone-400"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {isLoading ? (
                <div className="p-12 text-center flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin"></div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">Mencari Arsip...</p>
                </div>
              ) : provinceDetails ? (
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Ringkasan Singkat</h4>
                    <p className="text-sm leading-relaxed text-stone-600 line-clamp-3">
                      {provinceDetails.sejarah}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 mb-6">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-stone-400">
                      <span>Ibukota</span>
                      <span className="text-stone-900">{provinceDetails.ibukota}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/province/${encodeURIComponent(selectedProvince)}`}
                    className="w-full py-4 bg-accent text-white text-[10px] font-bold rounded-sm uppercase tracking-[0.2em] hover:bg-stone-900 transition-colors flex items-center justify-center gap-2 group shadow-lg"
                  >
                    Lihat Detail Selengkapnya
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ) : (
                <div className="p-12 text-center">
                   <p className="font-sans text-[10px] uppercase tracking-widest text-red-500 font-bold">Gagal memuat arsip.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
