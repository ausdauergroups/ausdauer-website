import React from 'react';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const scrollToSection = (id) => {
    // If the user is on a legal page, flip back to landing first
    if (setCurrentPage) setCurrentPage('landing');
    
    // Small timeout to allow the landing page to mount before scrolling
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' },
  ];

  const companyLinks = [
    { name: 'Privacy', id: 'privacy' },
    { name: 'Terms', id: 'terms' },
    { name: 'Cookies', id: 'cookies' },
    { name: 'Refunds', id: 'refund' },
  ];

  return (
    <footer className="bg-[#050505] text-white pt-24 md:pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 md:mb-32">
          
          {/* Brand Block */}
          <div className="md:col-span-6 lg:col-span-7">
            <div className="mb-8">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-10 md:h-12 w-auto object-contain brightness-100" 
              />
            </div>
            <p className="text-gray-400 text-lg md:text-xl leading-snug md:leading-tight max-w-md mb-10 font-light tracking-tight">
              Empowering global brands through strategic innovation, technical excellence, and the <span className="text-white italic">relentless pursuit of perfection.</span>
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/ausdauer-groups/" },
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/ausdauergroups/" },
                { icon: <Mail size={18} />, href: "mailto:ausdauergroups@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:bg-white hover:text-black hover:border-white transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Side-by-Side Links for Mobile & Desktop */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8">
            
            {/* Navigation Column */}
            <div className="col-span-1">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-bold mb-8 md:mb-10">Navigation</h3>
              <ul className="space-y-4 md:space-y-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="text-[11px] md:text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] font-medium text-left outline-none"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column - Updated to handle page state */}
            <div className="col-span-1">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-bold mb-8 md:mb-10">Company</h3>
              <ul className="space-y-4 md:space-y-5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => {
                        window.scrollTo(0, 0);
                        setCurrentPage(link.id);
                      }}
                      className="text-[11px] md:text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] font-medium block text-left outline-none"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          
          <div className="flex-1 flex justify-center md:justify-start order-2 md:order-1">
            <div className="flex items-center gap-3 group cursor-pointer">
                <MapPin size={16} className="text-gray-700 group-hover:text-white transition-colors" />
                <span className="text-[11px] md:text-[12px] font-mono text-gray-500 group-hover:text-white uppercase tracking-[0.2em] transition-colors">Chennai, IN</span>
            </div>
          </div>

          <div className="flex-1 flex justify-center order-1 md:order-2">
            <p className="text-[11px] md:text-[13px] font-mono text-white uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium whitespace-nowrap">
              © 2026 Ausdauer Groups
            </p>
          </div>

          <div className="hidden md:flex flex-1 justify-end order-3"></div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;