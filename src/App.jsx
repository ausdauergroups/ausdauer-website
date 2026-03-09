import React, { useState, useLayoutEffect, useEffect } from 'react';
import { createPortal } from 'react-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main Sections
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Functional Pages
import Apply from './pages/Apply';

// Legal Pages (Individual Components)
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Refund from './pages/Refund';

// --- PORTAL COMPONENT: PREMIUM SCROLL TO TOP ---
const ScrollPortal = ({ isVisible }) => {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999999,
            width: '48px',
            height: '48px',
          }}
          className="hidden md:flex group relative items-center justify-center rounded-full bg-[#050505] border border-white/10 shadow-2xl transition-all duration-500 ease-[0.22,1,0.36,1] hover:bg-white hover:scale-110 active:scale-95"
        >
          <div className="absolute inset-0 rounded-full bg-white/0 transition-all duration-500 group-hover:bg-white/10 group-hover:blur-xl" />
          <div className="relative h-[20px] w-[20px] overflow-hidden">
            <div className="flex flex-col h-[40px] transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-1/2">
              <div className="h-[20px] w-[20px] flex items-center justify-center shrink-0">
                <ArrowUp size={20} strokeWidth={2.5} className="text-white transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="h-[20px] w-[20px] flex items-center justify-center shrink-0">
                <ArrowUp size={20} strokeWidth={2.5} className="text-black" />
              </div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>,
    document.body
  );
};

// --- LANDING PAGE WRAPPER ---
const LandingPage = ({ setCurrentPage }) => {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#050505]">
      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="careers">
        <Careers onApplyClick={() => setCurrentPage('apply')} />
      </section>
      <section id="contact"><Contact /></section>
    </main>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controlled via Navbar
  const [showButton, setShowButton] = useState(false);

  // Monitor scroll for "Back to Top" visibility
  useEffect(() => {
    const checkScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrolled > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Instant scroll to top when changing pages (Apply, Privacy, etc.)
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage]);

  // Helper to quickly return home
  const backToHome = () => setCurrentPage('landing');

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative font-sans selection:bg-gray-500 selection:text-white bg-[#050505]">
      
      <Navbar 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        setCurrentPage={setCurrentPage} 
      />
      
      {/* ROUTING ANIMATION LAYER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentPage === 'landing' && (
            <LandingPage setCurrentPage={setCurrentPage} />
          )}

          {currentPage === 'apply' && (
            <Apply onBack={backToHome} />
          )}

          {currentPage === 'privacy' && (
            <Privacy onBack={backToHome} />
          )}

          {currentPage === 'terms' && (
            <Terms onBack={backToHome} />
          )}

          {currentPage === 'cookies' && (
            <Cookies onBack={backToHome} />
          )}

          {currentPage === 'refund' && (
            <Refund onBack={backToHome} />
          )}
        </motion.div>
      </AnimatePresence>

      <Footer setCurrentPage={setCurrentPage} />
      
      <ScrollPortal isVisible={showButton} />
    </div>
  );
}

export default App;