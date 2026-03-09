import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Target, Eye, Linkedin, Star, Users, Zap, Shield, ArrowUpRight } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  
  // Track the scroll progress of the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create "Floating" offsets for different layers
  // Elements will move at 10% to 20% of the scroll speed to create depth
  const floatY1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), { stiffness: 100, damping: 30 });
  const floatY2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="bg-[#050505] relative z-10 overflow-hidden text-white w-full">
      
      {/* Background Architectural Grid (Static) */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />

      {/* --- SECTION 1: ARCHITECTURAL HERO (Float Layer 1) --- */}
      <motion.div 
        style={{ y: floatY1 }}
        className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-8 max-w-[1400px] mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-10 md:mb-14 border-l border-white/20 pl-6 md:pl-8">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold italic">
              About Ausdauer Groups
            </span>
          </div>

          <div className="relative mb-10 md:mb-12">
            <h1 className="flex flex-col gap-y-1 md:gap-y-0">
              <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-6 border-l-2 border-white/30 pl-6 md:pl-12">
                <span className="text-white font-bold tracking-tighter text-4xl sm:text-5xl md:text-[5vw] leading-[0.9]">
                  Transforming
                </span>
                <span className="text-gray-500 font-light italic font-serif lowercase tracking-normal text-5xl sm:text-6xl md:text-[6.5vw] leading-[0.9]">
                  visions
                </span>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 pl-6 md:pl-24 -mt-1 md:-mt-4">
                <span className="text-white font-bold lowercase tracking-tighter text-4xl sm:text-5xl md:text-[5vw] leading-[0.9]">
                  into
                </span>
                <span className="text-gray-500 font-light italic font-serif lowercase text-5xl sm:text-6xl md:text-[6.5vw] leading-[0.9]">
                  reality.
                </span>
              </div>
            </h1>
          </div>

          <div className="max-w-4xl border-l border-white/10 pl-6 md:pl-12">
            <p className="text-lg md:text-2xl text-gray-400 font-light tracking-tight leading-relaxed italic">
              Your full-service business growth partner. We manage every aspect of your idea, from branding to online presence <span className="text-white/60">inception.</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* --- SECTION 2: THE BENTO PHILOSOPHY (Float Layer 2) --- */}
      <motion.div 
        style={{ y: floatY2 }}
        className="pb-32 md:pb-40 px-6 md:px-8 max-w-[1400px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-8 bg-[#0a0a0a] border border-white/5 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 pointer-events-none">
              <Zap size={140} className="md:w-[180px]" />
            </div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold mb-8 md:mb-12 italic">Empowering Your Business Journey</h2>
            <p className="text-xl md:text-4xl text-white leading-tight font-light mb-6 md:mb-8 relative z-10">
              At Ausdauer Groups, we don't just provide services – <span className="text-gray-500 italic font-serif">we forge partnerships</span> that transform visions into reality.
            </p>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl font-light">
              Our approach is simple understand your vision, define the right strategy, and execute with discipline. From branding to digital systems, every step is carefully planned to support long-term success. 
            </p>
          </motion.div>

          <div className="md:col-span-4 grid grid-cols-1 gap-4 md:gap-6">
            {[ 
              { icon: <Target />, title: "Our Mission", desc: "To deliver complete, reliable solutions that help business owners grow with structure." },
              { icon: <Eye />, title: "Our Vision", desc: "To become a trusted starting point for businesses aiming to build sustainable growth." }
            ].map((box, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }} 
                className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-[1.8rem] md:rounded-[2.5rem] flex flex-col justify-between group"
              >
                <div className="text-gray-500 group-hover:text-white transition-colors mb-6 md:mb-0">
                  {React.cloneElement(box.icon, { size: 28 })}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4 tracking-tight">{box.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{box.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- SECTION 3: EXECUTIVE DOSSIER --- */}
      <div className="py-32 md:py-48 border-t border-white/5 bg-[#050505] relative overflow-hidden w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:gap-12 mb-24 md:mb-40 border-l-2 border-white/20 pl-6 md:pl-16"
          >
            <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-gray-600 font-bold font-mono italic">
              // Executive_Board 
            </h2>
            <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.85]">
              The Founder <br />
              <span className="text-gray-600 font-light italic font-serif lowercase tracking-normal">
                of Ausdauer
              </span>
            </h3>
          </motion.div>

          {/* AVINASH R (Floating Image) */}
          <div className="flex flex-col gap-32 md:gap-64">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-32 items-center lg:items-start relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-4 relative group z-10 w-full"
              >
                <div className="relative aspect-[4/5] bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:border-white/30">
                  <img src="avinash.jpeg" alt="Avinash R" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-8 md:bottom-12 left-0 right-0 px-6 text-center z-20">
                    <h4 className="font-bold text-white uppercase tracking-[0.1em] mb-2" style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.4rem)', fontFamily: 'Poppins, sans-serif' }}>Avinash R</h4>
                    <p className="text-gray-300 tracking-wide" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px' }}>Founder & Chief Executive Officer</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-8 lg:pt-16 z-10"
              >
                <div className="space-y-8 md:space-y-12">
                  <p className="text-xl md:text-4xl text-gray-300 leading-tight font-light tracking-tight italic border-l border-white/10 pl-6 md:pl-12">
                    "We don’t wait for <span className="text-white">opportunities</span>, we build them."
                  </p>
                  <div className="pl-6 md:pl-12 space-y-8 md:space-y-10 flex flex-col items-start">
                    <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                      As CEO, Avinash built Ausdauer Groups to be a reliable infrastructure for global brands to achieve market dominance, We turn bold ideas into real world impact. We help startups and brands grow through smart design, powerful tech, and creative strategy. Fast-moving, purpose driven, and results focused we’re here to build what matters.
                    </p>
                    <a href="https://www.linkedin.com/in/nashavi-r-/" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:pr-14 w-full md:w-auto">
                      <span className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">Connect on LinkedIn</span>
                      <Linkedin size={16} />
                      <div className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                        <ArrowUpRight size={18} />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 4: CORE VALUES (Grid Reveal) --- */}
      <div className="py-24 md:py-40 px-6 md:px-8 bg-[#050505] border-t border-white/5 text-center">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tighter uppercase">Our Core Values</h2>
            <div className="h-[2px] w-12 md:w-20 bg-white/20 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-left">
            {[
              { icon: <Star />, title: "Excellence", color: "from-purple-500/10", desc: "We set high standards in everything we do and focus on delivering work that creates impact." },
              { icon: <Users />, title: "Collaboration", color: "from-blue-500/10", desc: "We believe strong results come from trust and working closely with our partners." },
              { icon: <Zap />, title: "Innovation", color: "from-white/10", desc: "We embrace creative thinking and practical solutions to solve business challenges." },
              { icon: <Shield />, title: "Integrity", color: "from-emerald-500/10", desc: "We operate with transparency, honesty, and responsibility in every interaction." }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative z-10">
                  <div className="text-white mb-12 md:mb-20 group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(value.icon, { size: 28, strokeWidth: 1.5 })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 tracking-tighter uppercase tracking-widest">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;