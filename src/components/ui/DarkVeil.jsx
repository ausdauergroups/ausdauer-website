import React from 'react';
import { motion } from 'framer-motion';

const DarkVeil = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full bg-[#030014] overflow-hidden pointer-events-none">
      
      {/* 1. Moving Purple Fog (Top Left) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* 2. Moving Indigo Fog (Bottom Right) */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* 3. Center Pulse */}
      <motion.div
         animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-violet-600/10 rounded-full blur-[90px]"
      />

      {/* 4. Noise Texture Overlay (The "Film Grain" Look) */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
    </div>
  );
};

export default DarkVeil;