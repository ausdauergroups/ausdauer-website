import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const jobs = [
  { 
    title: "Fullstack Development", 
    skills: ["MERN Stack", "JavaScript", "Node.js", "APIs"], 
    description: "Build scalable web applications and digital systems that support real business needs.",
    className: "md:col-span-2", 
    accent: "from-blue-500/10" 
  },
  { 
    title: "Data & Intelligence", 
    skills: ["SQL", "Power BI", "Python"], 
    description: "Turn data into insights that support strategy, performance, and decision-making.",
    className: "md:col-span-1", 
    accent: "from-purple-500/10" 
  },
  { 
    title: "UI/UX Design", 
    skills: ["Figma", "Prototyping", "User Research"], 
    description: "Design intuitive user experiences that balance clarity, usability, and visual discipline.",
    className: "md:col-span-1", 
    accent: "from-emerald-500/10" 
  },
  { 
    title: "Graphic & Motion Design", 
    skills: ["Adobe Suite", "After Effects", "Branding"], 
    description: "Create visual systems and motion assets that clearly communicate brand identity.",
    className: "md:col-span-1", 
    accent: "from-orange-500/10" 
  },
  { 
    title: "Content & Strategy", 
    skills: ["Copywriting", "SEO", "Digital Strategy"], 
    description: "Craft content and strategies that align brand voice with business objectives.",
    className: "md:col-span-1", 
    accent: "from-pink-500/10" 
  },
  { 
    title: "Marketing & Research", 
    skills: ["Campaigns", "Analytics", "Consumer Insights"], 
    description: "Analyze markets and campaigns to support informed growth strategies.",
    className: "md:col-span-2", 
    accent: "from-white/5" 
  },
  { 
    title: "Sales & Digital Platforms", 
    skills: ["CRM Tools", "Client Engagement", "Strategy"], 
    description: "Build and manage digital systems that improve customer relationships and revenue flow.",
    className: "md:col-span-1", 
    accent: "from-gray-500/10" 
  },
];

const Careers = ({ onApplyClick }) => {
  const containerRef = useRef(null);
  
  // Parallax logic for the floating effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring physics for weighted floating motion
  const headerFloat = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), { stiffness: 100, damping: 30 });
  const gridFloat = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-8 max-w-[1400px] mx-auto min-h-screen bg-[#050505] overflow-x-hidden">
      
      {/* Background Architectural Grid (Static) */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />

      {/* --- HEADER SECTION --- */}
      <motion.div 
        style={{ y: headerFloat }}
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-20 border-l border-white/10 pl-6 md:pl-8 relative z-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter">
          Careers<span className="text-gray-600">.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
          Ignite your passion to profession. Got some skills? <br className="hidden md:block"/>
          <span className="text-gray-500 font-light italic font-serif lowercase tracking-tight">
            Let's build some business 
          </span>
          <span className="text-white italic font-serif font-light lowercase"> together.</span>
        </p>
      </motion.div>

      {/* --- BENTO GRID --- */}
      <motion.div 
        style={{ y: gridFloat }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative z-10"
      >
        {jobs.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.7 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`group relative rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-500 flex flex-col justify-between ${job.className}`}
          >
            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${job.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Briefcase size={20} strokeWidth={1.5} />
                </div>
                {/* Desktop Arrow Interaction */}
                <div className="w-10 h-10 rounded-full border border-white/10 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 leading-tight">
                {job.title}
              </h2>

              <p className="text-sm md:text-base text-gray-400 mb-6 font-light leading-relaxed">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 md:px-4 py-1.5 bg-white/5 text-gray-400 text-[10px] md:text-xs font-medium rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <button 
              onClick={onApplyClick}
              className="relative z-10 w-full py-3.5 md:py-4 bg-transparent border border-white/10 text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-xl md:rounded-2xl hover:bg-white hover:text-black transition-all duration-500 active:scale-95"
            >
              Apply Now
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Careers;