import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, MessageCircle, X, User as UserIcon, Calendar, MapPin, Quote, Sparkles, BookOpen } from "lucide-react";
import { figuresData } from "../data/figures";
import AIChat from "../components/AIChat";

export default function FigureDetail() {
  const { id } = useParams<{ id: string }>();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const figure = figuresData.find(f => f.id === id);

  if (!figure) {
    return (
      <div className="min-h-screen bg-[#F7F3EF] flex flex-col items-center justify-center p-8">
        <p className="text-red-500 font-bold mb-4">Gagal memuat arsip tokoh.</p>
        <Link to="/tokoh" className="text-stone-900 underline font-bold uppercase tracking-widest text-xs">Kembali ke Daftar Tokoh</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F3EF] flex flex-col font-sans selection:bg-accent/20">
      <nav className="h-20 px-8 flex items-center justify-between bg-white border-b border-stone-200 sticky top-0 z-50">
        <Link to="/tokoh" className="inline-flex items-center gap-3 text-stone-400 hover:text-stone-900 transition-colors group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Daftar Tokoh</span>
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
          <header className="mb-16 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-accent rounded-full"></span>
                <span className="text-sm uppercase tracking-[0.4em] text-accent font-bold">Biografi Tokoh</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-stone-900 mb-4 tracking-tight leading-none">
                {figure.nama}
              </h1>
              <p className="text-xl md:text-2xl text-stone-400 font-serif italic mb-10">
                "{figure.julukan}"
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                   <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                     <MapPin size={18} className="text-accent" />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Asal Daerah</p>
                     <p className="text-sm font-bold text-stone-900">{figure.asal_daerah}</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                   <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                     <Calendar size={18} className="text-accent" />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Masa Hidup</p>
                     <p className="text-sm font-bold text-stone-900">{figure.masa_hidup}</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[350px] aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white bg-stone-100 flex shrink-0 group">
               {figure.gambar_foto ? (
                 <img src={figure.gambar_foto} alt={figure.nama} className="w-full h-full object-cover cursor-zoom-in" onClick={() => setSelectedImage(figure.gambar_foto!)} />
               ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center text-stone-300">
                    <UserIcon size={64} className="mb-4 opacity-50" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-8 text-center">Foto Akan Ditambahkan Nanti</span>
                 </div>
               )}
            </div>
          </header>

          <div className="space-y-16">
            <section className="bg-stone-900 text-white p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <Quote className="absolute top-8 left-8 text-stone-800 opacity-50 rotate-180" size={120} />
               <div className="relative z-10 max-w-2xl mx-auto text-center">
                  <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-stone-100 mb-8">
                    "{figure.kutipan}"
                  </p>
                  <div className="w-12 h-[2px] bg-accent mx-auto"></div>
               </div>
            </section>

            <div className="grid md:grid-cols-3 gap-12 items-start">
               <section className="md:col-span-2">
                 <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="text-accent" size={24} />
                    <h2 className="text-xs uppercase font-bold text-stone-400 tracking-[0.4em]">Perjalanan Hidup</h2>
                 </div>
                 <div className="bg-white p-10 md:p-12 border border-stone-100 shadow-xl rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                    <p className="text-lg font-sans text-stone-700 leading-relaxed font-normal">
                      {figure.biografi}
                    </p>
                 </div>
               </section>

               <section>
                 <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="text-accent" size={24} />
                    <h2 className="text-xs uppercase font-bold text-stone-400 tracking-[0.4em]">Peran Sejarah</h2>
                 </div>
                 <div className="bg-white p-8 border border-stone-100 shadow-xl rounded-[2rem]">
                    <ul className="space-y-6">
                      {figure.peran_sejarah.map((peran, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="text-2xl font-serif font-bold italic text-stone-200 mt-1">0{idx + 1}</span>
                          <span className="text-sm font-medium text-stone-700 leading-relaxed pt-2">{peran}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
               </section>
            </div>
          </div>

          <footer className="pt-16 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-8 text-stone-400 mt-20">
             <div className="text-[10px] font-bold uppercase tracking-[0.3em]">
               Dokumentasi Terverifikasi • Republik Indonesia
             </div>
          </footer>
        </motion.div>
      </main>
      
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
              <AIChat contextTopic={figure.nama} />
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
