import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Search, User as UserIcon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { figuresData } from "../data/figures";

export default function Figures() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFigures = figuresData.filter(figure => 
    figure.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
    figure.asal_daerah.toLowerCase().includes(searchQuery.toLowerCase()) ||
    figure.julukan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F7F3EF] flex flex-col font-sans text-stone-800">
      <nav className="h-16 px-8 border-b border-stone-200 flex items-center justify-between bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2 md:gap-3">
          <Link to="/" className="w-6 h-6 md:w-8 md:h-8 bg-accent rounded-sm flex items-center justify-center text-white font-bold text-sm md:text-lg hover:bg-stone-900 transition-colors">
            N
          </Link>
          <span className="font-serif text-lg md:text-2xl font-bold tracking-tight text-stone-900">
            Nusantara<span className="hidden md:inline text-accent underline decoration-2 underline-offset-4">Arsip</span>
          </span>
        </div>
        <div className="flex items-center gap-4 md:gap-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-stone-400">
          <Link to="/explore" className="bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-accent transition-colors shadow-md md:bg-transparent md:text-stone-400 md:shadow-none md:p-0 md:rounded-none md:hover:bg-transparent md:hover:text-accent">Peta Sejarah</Link>
          <Link to="/tokoh" className="hidden md:block text-accent border-b-2 border-accent pb-1">Daftar Tokoh</Link>
        </div>
        <div className="w-8 md:w-32"></div> {/* Spacer */}
      </nav>

      <main className="flex-1 w-full max-w-7xl mx-auto p-8 md:p-12 lg:p-16">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-accent rounded-full"></span>
              <span className="text-sm uppercase tracking-[0.4em] text-accent font-bold">Galeri Nasional</span>
              <span className="w-12 h-[2px] bg-accent rounded-full"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-stone-900 mb-8 tracking-tight">
              Tokoh Sejarah & Pahlawan
            </h1>
            <p className="text-stone-500 font-medium leading-relaxed">
              Jelajahi rekam jejak, biografi, dan pengabdian para tokoh luar biasa yang telah membentuk fondasi dan sejarah bangsa Indonesia.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 relative max-w-xl mx-auto"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari nama tokoh, daerah, atau julukan..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-transparent focus:border-accent/20 pl-14 pr-6 py-4 rounded-full shadow-xl text-stone-900 placeholder:text-stone-400 font-medium outline-none transition-all"
            />
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredFigures.map((figure, idx) => (
              <motion.div
                key={figure.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/tokoh/${figure.id}`} className="group block h-full bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                  <div className="aspect-square bg-stone-100 relative overflow-hidden flex items-center justify-center">
                    {figure.gambar_foto ? (
                      <img src={figure.gambar_foto} alt={figure.nama} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300 bg-stone-100 group-hover:bg-stone-200 transition-colors">
                        <UserIcon size={64} className="mb-4 opacity-50" />
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Foto Belum Tersedia</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold text-accent shadow-sm">
                      {figure.asal_daerah}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mb-2">{figure.julukan}</p>
                    <h3 className="font-serif italic font-bold text-2xl text-stone-900 mb-4">{figure.nama}</h3>
                    
                    <p className="text-sm text-stone-500 line-clamp-2 mb-6">
                      "{figure.kutipan}"
                    </p>

                    <div className="flex items-center justify-between text-xs font-bold text-accent uppercase tracking-widest">
                      <span>Lihat Arsip</span>
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredFigures.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-stone-400 font-bold uppercase tracking-widest text-sm">Tidak ada arsip tokoh yang sesuai dengan pencarian.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="h-10 bg-stone-900 text-[8px] md:text-[9px] text-stone-500 flex items-center px-4 md:px-8 justify-center font-bold uppercase tracking-[0.1em] md:tracking-[0.2em]">
        <p>&copy; 2026 npm artisan</p>
      </footer>
    </div>
  );
}
