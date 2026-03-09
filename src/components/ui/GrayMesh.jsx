import React from 'react';

const GrayMesh = () => {
  return (
    <div className="fixed top-0 right-0 w-[50vw] h-[50vw] pointer-events-none z-0 mix-blend-screen">
      <div className="relative w-full h-full">
        
        {/* 1. Main Silver Anchor */}
        <div 
          className="absolute top-[-20%] right-[-20%] w-[120%] h-[120%] rounded-full bg-gradient-to-br from-white via-gray-300 to-transparent opacity-40 blur-[80px] animate-pulse"
        ></div>
        
        {/* 2. Liquid Mercury Blob (Moving) */}
        <div 
          className="absolute top-0 right-0 w-[80%] h-[80%] rounded-full bg-gray-100 opacity-60 blur-[60px] liquid-blob"
          style={{ animationDuration: '25s' }}
        ></div>

        {/* 3. Bright Highlight (The Shine) */}
        <div 
          className="absolute top-[10%] right-[10%] w-[60%] h-[60%] rounded-full bg-white opacity-50 blur-[50px] liquid-blob"
          style={{ animationDuration: '20s', animationDirection: 'reverse' }}
        ></div>
        
      </div>
    </div>
  );
};

export default GrayMesh;