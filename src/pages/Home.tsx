import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F7F3EF]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl font-bold tracking-tighter">NUSANTARA</div>
        <div className="absolute bottom-10 right-10 text-9xl font-bold tracking-tighter">ARSIP</div>
      </div>

      <main className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-sm uppercase tracking-[0.4em] text-stone-500 font-sans font-bold">
              Arsip Nasional Nusantara
            </span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-8 tracking-tight leading-none italic text-stone-900">
            Jejak <br /> <span className="text-accent underline decoration-4 underline-offset-8">Provinsi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Dokumentasi digital sejarah pembentukan wilayah dan kekayaan budaya 38 provinsi di seluruh Nusantara.
          </p>

          <Link to="/explore">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 rounded-sm text-lg font-sans font-bold uppercase tracking-widest transition-colors hover:bg-stone-800 shadow-xl"
            >
              Mulai Penelusuran
              <ArrowRight size={20} className="text-accent" />
            </motion.button>
          </Link>
        </motion.div>
      </main>

      <footer className="absolute bottom-8 w-full text-center text-[10px] tracking-[0.3em] text-stone-400 font-sans uppercase font-bold">
        NKRI &copy; 2024 • Sejarah Wilayah Terintegrasi
      </footer>
    </div>
  );
}
