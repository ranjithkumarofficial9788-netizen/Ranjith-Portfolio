import React from 'react';
import { motion } from 'framer-motion';

// Classic Japanese cartoon clouds with thick strokes
const CartoonCloud = ({ width, delay, duration, startX, y, color }) => (
  <motion.div
    initial={{ x: startX, y, opacity: 0 }}
    animate={{ 
      x: [startX, startX + 1100],
      opacity: [0, 0.25, 0.25, 0]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "linear",
      delay 
    }}
    className="absolute pointer-events-none hidden md:block"
    style={{ width }}
  >
    <svg viewBox="0 0 200 100" fill={color} className="w-full h-full stroke-inkBlack stroke-[4px]">
      <path d="M 30,70 A 25,25 0 0,1 65,35 A 35,35 0 0,1 125,25 A 35,35 0 0,1 175,45 A 20,20 0 0,1 170,75 L 30,75 Z" />
    </svg>
  </motion.div>
);

// Leaf SVG component
const LeafParticle = ({ size, delay, duration, x, startY }) => (
  <motion.div
    initial={{ x, y: startY, opacity: 0, rotate: 0 }}
    animate={{ 
      y: [startY, startY + 700],
      x: [x, x + 60, x - 60, x],
      rotate: [0, 270, 540, 720],
      opacity: [0, 0.5, 0.5, 0]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "linear",
      delay 
    }}
    className="absolute pointer-events-none hidden sm:block"
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 24 24" fill="#10B981" className="w-full h-full opacity-65 stroke-inkBlack stroke-[1.5px]">
      <path d="M17 2.041c-2.348 0-4.696.892-6.485 2.682-3.578 3.578-3.578 9.393 0 12.971 1.79 1.79 4.137 2.682 6.485 2.682 2.349 0 4.697-.892 6.486-2.682 3.578-3.578 3.578-9.393 0-12.971-1.789-1.79-4.137-2.682-6.486-2.682zm-2.828 4.098c1.562-1.562 4.096-1.562 5.658 0 .39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0-.78-.78-2.048-.78-2.828 0-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414z" />
    </svg>
  </motion.div>
);

// Chakra Spark component
const ChakraSpark = ({ size, delay, duration, x, startY }) => (
  <motion.div
    initial={{ x, y: startY, opacity: 0, scale: 0.5 }}
    animate={{ 
      y: [startY, startY - 300],
      opacity: [0, 0.8, 0],
      scale: [0.6, 1.4, 0.6]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "easeOut",
      delay 
    }}
    className="absolute pointer-events-none rounded-full bg-[#00F0FF]"
    style={{ 
      width: size, 
      height: size, 
      filter: 'blur(1.5px) drop-shadow(0 0 6px #00F0FF)',
      boxShadow: '0 0 10px #00F0FF' 
    }}
  />
);

export default function ChakraBackground() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-[#0B0C16] overflow-hidden pointer-events-none bg-leaf-grid">
      {/* Background glow pools */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-narutoOrange/5 rounded-full filter blur-[130px] pointer-events-none animate-pulse-chakra"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[550px] h-[550px] bg-chakraBlue/5 rounded-full filter blur-[150px] pointer-events-none animate-pulse-chakra" style={{ animationDelay: '3s' }}></div>

      {/* Floating Japanese Cartoon Clouds */}
      <CartoonCloud width={180} delay={0} duration={35} startX={-200} y="15vh" color="#FF6700" />
      <CartoonCloud width={240} delay={8} duration={45} startX={-300} y="45vh" color="#1A1C2B" />
      <CartoonCloud width={160} delay={18} duration={30} startX={-200} y="75vh" color="#10B981" />
      <CartoonCloud width={200} delay={4} duration={40} startX={-250} y="60vh" color="#FF6700" />

      {/* Falling Leaves */}
      <LeafParticle size={20} delay={0} duration={12} x="5vw" startY={-30} />
      <LeafParticle size={25} delay={3} duration={15} x="45vw" startY={-30} />
      <LeafParticle size={18} delay={6} duration={11} x="85vw" startY={-30} />
      <LeafParticle size={22} delay={1.5} duration={14} x="25vw" startY={-30} />
      <LeafParticle size={20} delay={4.5} duration={13} x="65vw" startY={-30} />
      <LeafParticle size={28} delay={8} duration={16} x="75vw" startY={-30} />

      {/* Rising Chakra sparks */}
      <ChakraSpark size={6} delay={0} duration={5} x="10vw" startY="90vh" />
      <ChakraSpark size={7} delay={2.5} duration={4.5} x="80vw" startY="80vh" />
      <ChakraSpark size={5} delay={4} duration={6} x="30vw" startY="95vh" />
      <ChakraSpark size={8} delay={1.2} duration={4} x="70vw" startY="90vh" />
      <ChakraSpark size={6} delay={3} duration={5.5} x="50vw" startY="85vh" />
      <ChakraSpark size={7} delay={5.2} duration={5} x="20vw" startY="95vh" />
    </div>
  );
}
