import React from 'react';
import { motion } from 'framer-motion';

const VeilBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Deep Base Background */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Moving Veil 1 (Purple - Top Left) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Moving Veil 2 (Indigo - Bottom Right) */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Moving Veil 3 (Center Accent) */}
      <motion.div
         animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-violet-600/10 rounded-full blur-[100px]"
      />

      {/* Grain/Noise Texture for Realism */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default VeilBackground;