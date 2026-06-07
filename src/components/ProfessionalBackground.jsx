import React from 'react';
import { motion } from 'framer-motion';

export default function ProfessionalBackground() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-[#FFFFFF] overflow-hidden pointer-events-none">
      {/* Soft blue-purple professional glow pools */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#EEF2FF] rounded-full filter blur-[120px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-[#F5F3FF] rounded-full filter blur-[150px] opacity-80 pointer-events-none"></div>
      <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-[#EEF2FF]/60 rounded-full filter blur-[130px] opacity-50 pointer-events-none"></div>

      {/* Grid pattern overlay (sleek professional dots) */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundSize: '30px 30px',
          backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)'
        }}
      />

      {/* Abstract Faint Curved Line Vector (matching the mockup background curves) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M -100,200 Q 300,50 600,350 T 1300,100 T 2000,500" 
          fill="none" 
          stroke="#818CF8" 
          strokeWidth="2.5" 
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path 
          d="M 200,800 Q 700,500 1100,900 T 1800,600" 
          fill="none" 
          stroke="#C084FC" 
          strokeWidth="2" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
}
