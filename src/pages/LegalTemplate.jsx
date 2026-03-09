import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Fingerprint, Globe, Mail } from 'lucide-react';

const LegalTemplate = ({ title, subtitle, sections, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans relative overflow-x-hidden">
      {/* Background Architectural Grid */}
      <div className="bg-grid-white fixed inset-0 opacity-[0.03] pointer-events-none" />
      
      {/* 1. RETURN NAVIGATION */}
      <div className="fixed top-32 md:top-40 left-0 w-full z-[100] px-6 md:px-12 pointer-events-none">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 pointer-events-auto outline-none"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 bg-black/50 backdrop-blur-xl">
            <ArrowLeft size={18} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold hidden md:block text-white/50 group-hover:text-white transition-colors">
            Return
          </span>
        </button>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* --- 2. LEFT HEADING: FIXED IDENTITY --- */}
          <div className="w-full lg:w-[40%]">
            <div className="lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:w-[35%] xl:w-[30%] pt-48 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-6 text-gray-600 mb-8">
                    <Fingerprint size={32} strokeWidth={1} />
                    <div className="h-[1px] w-12 bg-white/10"></div>
                </div>

                <h1 className="text-5xl md:text-6xl xl:text-[4.5vw] font-black uppercase leading-[0.85] tracking-tighter">
                  {title} <br />
                  <span className="italic font-serif font-light text-gray-600 lowercase block mt-2">
                    {subtitle}.
                  </span>
                </h1>
                
                <p className="text-gray-500 text-xs md:text-sm font-light max-w-xs leading-relaxed border-l border-white/10 pl-6">
                  Structural protocols defining the legal architecture and data sovereignty of Ausdauer Groups.
                </p>
              </motion.div>
            </div>
          </div>

          {/* --- 3. RIGHT COLUMN: SCROLLABLE --- */}
          <div className="w-full lg:w-[60%] pt-10 lg:pt-60 pb-40 lg:ml-auto">
            <div className="mb-20 flex justify-end">
                <div className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-700 flex items-center gap-3">
                    <Globe size={12} /> Legal Infrastructure // 2026
                </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-32"
            >
              {sections.map((section, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -left-6 md:-left-12 top-0 text-[10px] font-mono text-gray-800 font-bold group-hover:text-white transition-colors duration-500">
                    [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* 4. CONTACT LEGAL: FORCED SINGLE-LINE BUTTON */}
              <div className="pt-24 border-t border-white/5 mt-32">
                <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 group/card hover:bg-white/[0.04] transition-all duration-700">
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold mb-2">Contact Legal</h4>
                    <p className="text-gray-500 text-xs md:text-sm font-light uppercase tracking-[0.1em]">Direct all inquiries to the sovereignty collective.</p>
                  </div>

                  <a 
                    href="mailto:ausdauergroups@gmail.com" 
                    className="group/btn relative flex items-center justify-center px-10 py-5 bg-white text-black rounded-full text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-500 hover:bg-gray-100 shadow-xl shadow-black active:scale-95 whitespace-nowrap overflow-hidden"
                  >
                    {/* The text slides slightly left on hover */}
                    <span className="relative transition-transform duration-500 group-hover/btn:-translate-x-3">
                      Contact Us
                    </span>
                    
                    {/* The icon slides in from the right */}
                    <div className="absolute right-6 translate-x-10 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-500">
                        <Mail size={16} />
                    </div>

                    {/* Default state icon placeholder (invisible but maintains spacing if needed) */}
                    <div className="ml-3 group-hover/btn:opacity-0 transition-opacity duration-300">
                        <Mail size={16} />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalTemplate;