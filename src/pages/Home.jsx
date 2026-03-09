import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] relative flex flex-col overflow-hidden">
      
      {/* 1. Static Noise */}
      <div className="bg-noise" />

      {/* 2. Background Glow */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[10%] right-[-10%] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] bg-white/[0.03] rounded-full pointer-events-none z-0"
      />

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 md:px-20 h-full flex flex-col lg:flex-row items-center justify-between pt-[18vh] lg:pt-[22vh] pb-20 lg:pb-0">
        
        {/* --- LEFT SIDE: TEXT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] z-40 text-left mb-16 lg:mb-0"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-8 md:w-12 bg-white/30"></div>
            <span className="text-[9px] md:text-[10px] text-gray-400 tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold">
              Perseverance meets Innovation
            </span>
          </div>
          
          <h1 className="text-[13vw] sm:text-[10vw] md:text-[6vw] lg:text-[4.8vw] leading-[0.85] font-bold tracking-tighter text-white mb-6 md:mb-10">
            Elevate Your <br/> 
            <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              Potential
            </span> <br/>
            <span className="text-gray-500 font-light italic">with</span> Ausdauer.
          </h1>
          
          <p className="max-w-md text-base md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-6 md:pl-10 mb-10 md:mb-14">
            We help startups and growing businesses build strong brands, reliable websites, and clear growth strategies designed to last. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-8 md:px-10 py-4 md:py-5 rounded-full border border-white/20 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center"
            >
              Explore Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-10 md:px-12 py-4 md:py-5 rounded-full bg-white text-black text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] text-center"
            >
              Start a Project
            </button>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: PNG READY DESKTOP FRAMES --- */}
        <div className="relative w-full lg:w-[55%] h-[350px] sm:h-[450px] lg:h-full flex items-center justify-center lg:justify-end lg:pr-4">
          
          {/* Visible Thunder (Zap) Mockup */}
          <div className="absolute left-1/2 lg:left-auto lg:right-0 top-1/2 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 opacity-[0.08] pointer-events-none select-none z-0">
            <Zap size={350} className="lg:hidden" strokeWidth={0.8} />
            <Zap size={550} className="hidden lg:block text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]" strokeWidth={0.8} />
          </div>

          {/* Card 1: Back Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: 4, y: [0, -10, 0] }}
            transition={{ duration: 1.2, y: { duration: 6, repeat: Infinity, ease: "easeInOut"} }}
            className="absolute w-[75vw] sm:w-[350px] lg:w-[420px] aspect-[16/10] bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl p-4 z-10 translate-x-4 -translate-y-8 lg:translate-x-0 lg:translate-y-0 lg:right-0"
          >
             <div className="w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent rounded-[1rem] border border-white/5" />
          </motion.div>

          {/* Card 2: Front Card (REPLACE IMAGE HERE) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: -2, y: [0, 10, 0] }}
            transition={{ duration: 1.2, y: { duration: 7, repeat: Infinity, ease: "easeInOut"} }}
            className="absolute z-20 w-[85vw] sm:w-[400px] lg:w-[480px] aspect-[16/10] bg-[#0a0a0a] border border-white/15 rounded-[1.8rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,1)] p-2 lg:p-3 -translate-x-2 lg:translate-x-0 lg:right-16"
          >
            <div className="w-full h-full bg-[#0c0c0c] rounded-[1.4rem] lg:rounded-[2rem] overflow-hidden relative border border-white/10">
               {/* HOW TO ADD YOUR PNG:
                  Replace the <img> below with your actual file path.
                  Using 'object-cover' ensures it fills the screen frame perfectly.
               */}
               <img 
                 src="./" 
                 alt="Project Preview"
                 className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
                 onError={(e) => e.target.style.display='none'} // Hides broken icon if path is empty
               />

               {/* Screen Glare Overlay (Makes the PNG look premium) */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;