import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Visibility of "Back to Top" button and Scroll Lock
  useEffect(() => {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (isOpen) {
      if (backToTopBtn) backToTopBtn.style.opacity = '0';
      if (backToTopBtn) backToTopBtn.style.pointerEvents = 'none';
      document.body.style.overflow = 'hidden';
    } else {
      if (backToTopBtn) backToTopBtn.style.opacity = '1';
      if (backToTopBtn) backToTopBtn.style.pointerEvents = 'auto';
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (setCurrentPage) setCurrentPage('landing');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
    setIsOpen(false);
  };

  const centerLinks = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Careers', id: 'careers' },
  ];

  // --- ANIMATION VARIANTS ---
  const sidePanelVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 35 } },
    open: { 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 35, 
        staggerChildren: 0.08, 
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 40 },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center">
        <nav className="w-full max-w-[1200px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 flex items-center justify-between text-white shadow-2xl h-[64px]">
          
          <div className="flex-1 flex items-center justify-start h-full">
            <button onClick={() => handleNavClick('home')} className="group flex items-center transition-transform active:scale-95 outline-none">
              <img src="/logo.png" alt="Logo" className="h-7 md:h-8 w-auto object-contain brightness-100 group-hover:opacity-80 transition-opacity -mt-1.5" />
            </button>
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center gap-1">
            {centerLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button 
                  key={link.name} 
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${isActive ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  {isActive && (
                    <motion.div layoutId="activePill" className="absolute inset-0 bg-white rounded-full -z-10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                  )}
                  {link.name}
                </button>
              );
            })}
          </div>

          <div className="flex-1 flex justify-end items-center">
            <button 
              onClick={() => handleNavClick('contact')}
              className={`hidden md:block text-[9px] font-bold uppercase tracking-[0.3em] px-8 py-2.5 rounded-full border border-white/20 transition-all duration-500 whitespace-nowrap ${activeSection === 'contact' ? 'bg-white text-black border-white' : 'text-white hover:bg-white/10'}`}
            >
              Contact
            </button>

            {!isOpen && (
              <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-white outline-none">
                <Menu size={24} />
              </button>
            )}
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              variants={sidePanelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[85%] sm:w-[400px] z-[1000] bg-[#0a0a0a] border-l border-white/5 text-white p-8 flex flex-col justify-between shadow-[-20px_0_50px_rgba(0,0,0,0.5)] md:hidden"
            >
              <div className="flex justify-between items-center w-full">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                <button onClick={() => setIsOpen(false)} className="p-2 border border-white/10 rounded-full bg-white/5 outline-none">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 py-10">
                {['home', 'services', 'about', 'careers', 'contact'].map((id, index) => (
                  <motion.button 
                    key={id} 
                    variants={itemVariants}
                    onClick={() => handleNavClick(id)}
                    className="text-4xl font-black uppercase tracking-tighter text-left flex items-center gap-4 group outline-none"
                  >
                    <span className={`text-[9px] font-mono tracking-widest ${activeSection === id ? 'text-white' : 'text-gray-700'}`}>
                      0{index + 1}
                    </span>
                    <span className={activeSection === id ? 'text-white' : 'text-gray-800 group-hover:text-gray-400 transition-colors'}>
                      {id}
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.div variants={itemVariants} className="flex flex-col gap-8">
                <div className="h-[1px] w-full bg-white/5" />
                <div className="flex justify-between items-end">
                  <div className="flex gap-5">
                    {/* UPDATED LINKS */}
                    <a 
                      href="https://www.linkedin.com/company/ausdauer-groups/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-white transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="https://www.instagram.com/ausdauergroups/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-white transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a 
                      href="mailto:ausdauergroups@gmail.com" 
                      className="text-gray-600 hover:text-white transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-[7px] uppercase tracking-[0.4em] text-gray-700 font-bold mb-1">India</p>
                    <p className="text-[9px] font-mono text-gray-500 tracking-tight">Chennai</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;