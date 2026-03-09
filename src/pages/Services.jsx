import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Shield, Target, BarChart3, Code2 } from 'lucide-react';

const servicesData = [
  {
    category: "Brand Promotion",
    subtitle: "Integration & Elevation",
    icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
    items: [
      { title: "Strategic Planning", desc: "Defining the right direction for your brand to grow with purpose." },
      { title: "Reputation Management", desc: "Strengthening your online presence and maintaining brand credibility." },
      { title: "Content Creation", desc: "Creating clear and consistent content that reflects your brand values." },
    ],
    accent: "from-white/5",
    position: "left"
  },
  {
    category: "Market Strategy",
    subtitle: "Research & Analysis",
    icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />,
    items: [
      { title: "Market Analysis", desc: "Studying trends, competitors, and opportunities within your industry." },
      { title: "Customer Insights", desc: "Understanding customer behavior to improve positioning and engagement." },
      { title: "Performance Metrics", desc: "Measuring outcomes to improve strategy and return on effort." },
    ],
    accent: "from-blue-500/10",
    position: "right"
  },
  {
    category: "Technical Solutions",
    subtitle: "Creative Requirements",
    icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
    items: [
      { title: "Web Development", desc: "Custom websites and e-commerce platforms built for performance and ease of use." },
      { title: "Digital Solutions", desc: "Optimized digital tools that improve efficiency and user experience." },
      { title: "Visual Design", desc: "Professional design that visually represents your brand with clarity." },
    ],
    accent: "from-purple-500/10",
    position: "left"
  },
  {
    category: "Ground Support",
    subtitle: "Technical Assistance",
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
    items: [
      { title: "Maintenance & Support", desc: "Regular updates, monitoring, and system improvements." },
      { title: "Event Staffing", desc: "On-ground technical and operational support for business events." },
      { title: "24/7 Response", desc: "Quick assistance to handle urgent technical issues when needed." },
    ],
    accent: "from-emerald-500/10",
    position: "right"
  }
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    service.position === 'left' ? [-100, 0, 0, -50] : [100, 0, 0, 50]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, x }}
      className="mb-24 md:mb-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Card Content - Alternating Sides */}
          <div className={`lg:col-span-7 ${service.position === 'right' ? 'lg:order-2' : ''}`}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 overflow-hidden border border-white/5 bg-[#0a0a0a] transition-all duration-700"
            >
              {/* Animated Accent Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12 md:mb-16">
                  <div>
                    <div className="text-gray-500 mb-4 md:mb-6 group-hover:text-white group-hover:scale-110 transition-all duration-500 transform-gpu">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-2">
                      {service.category}
                    </h2>
                    <p className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-gray-600 font-bold italic group-hover:text-gray-400 transition-colors">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  {/* Premium Action Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 shrink-0">
                    <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>

                {/* Service Items List */}
                <div className="grid grid-cols-1 gap-y-8 md:gap-y-10">
                  {service.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group/item border-l-2 border-white/5 pl-6 md:pl-8 hover:border-white/20 transition-all duration-500"
                    >
                      <h3 className="text-white text-base md:text-xl font-bold mb-3 tracking-tight group-hover/item:pl-2 transition-all">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light group-hover/item:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Number Display - Opposite Side */}
          <div className={`lg:col-span-5 ${service.position === 'right' ? 'lg:order-1' : ''} flex ${service.position === 'right' ? 'justify-start' : 'justify-end'}`}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-[120px] md:text-[200px] lg:text-[280px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/5 to-transparent leading-none tracking-tighter">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Floating Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={`absolute top-1/2 ${service.position === 'right' ? 'right-0' : 'left-0'} h-[2px] w-24 md:w-32 bg-gradient-to-r ${service.position === 'right' ? 'from-white/20 to-transparent' : 'from-transparent to-white/20'}`}
                style={{ transformOrigin: service.position === 'right' ? 'right' : 'left' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div 
      ref={containerRef}
      className="bg-[#050505] relative z-10 overflow-hidden text-white w-full"
      style={{ clipPath: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)' }}
    >
      {/* Animated Background Grid */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none"
      />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#050505] pointer-events-none" />
      
      {/* --- SECTION 1: ARCHITECTURAL HEADER --- */}
      <div className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-8 max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow Label */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] w-8 md:w-12 bg-white/20 origin-left"
            />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-500 font-bold italic">
              Our Capabilities
            </span>
          </div>

          {/* Headline */}
          <h1 className="flex flex-wrap items-baseline gap-x-3 md:gap-x-4 tracking-tighter uppercase">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-black text-white"
            >
              Our
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-9xl font-light italic font-serif text-gray-600 lowercase tracking-normal"
            >
              services
            </motion.span>
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-white text-5xl md:text-9xl"
            >
              .
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 md:mt-8 text-lg md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed italic"
          >
            Clear solutions designed to <span className="text-white italic font-medium">elevate your business growth</span> through strategy, design, and technology.
          </motion.p>
        </motion.div>
      </div>

      {/* --- SECTION 2: SCROLL-DRIVEN CARDS --- */}
      <div className="pb-32 md:pb-40 relative z-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-[1400px] mx-auto"
      />
    </div>
  );
};

export default Services;