import React from 'react';
import { motion } from 'framer-motion';

// Inline simple SVG star
const CartoonStar = ({ size, color, delay, duration, x, y }) => (
  <motion.div
    initial={{ x, y, opacity: 0, scale: 0.5 }}
    animate={{ 
      y: [y, y - 60, y],
      rotate: [0, 180, 360],
      opacity: [0.1, 0.4, 0.1],
      scale: [0.8, 1.1, 0.8]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className="absolute pointer-events-none hidden sm:block"
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full stroke-[#0b0c16] stroke-[2px]">
      <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.784 1.4 8.168L12 18.896l-7.334 3.856 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
    </svg>
  </motion.div>
);

const CartoonCross = ({ size, color, delay, duration, x, y }) => (
  <motion.div
    initial={{ x, y, opacity: 0, scale: 0.5 }}
    animate={{ 
      y: [y, y - 40, y],
      rotate: [0, -90, -180],
      opacity: [0.15, 0.35, 0.15],
      scale: [0.7, 1, 0.7]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className="absolute pointer-events-none hidden sm:block font-extrabold"
    style={{ fontSize: size, color, textShadow: '1.5px 1.5px 0px #0b0c16' }}
  >
    +
  </motion.div>
);

export default function AnimeBackground() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-[#0F1020] overflow-hidden pointer-events-none bg-comic-grid">
      {/* Anime neon wash orbs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-animePink/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-animeCyan/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[45%] right-[20%] w-[300px] h-[300px] bg-animeYellow/5 rounded-full filter blur-[90px] pointer-events-none"></div>

      {/* Floating vector decorations */}
      <CartoonStar size={24} color="#FFDD00" delay={0} duration={8} x="10vw" y="15vh" />
      <CartoonStar size={30} color="#FF2E93" delay={2} duration={9} x="85vw" y="25vh" />
      <CartoonStar size={20} color="#00F0FF" delay={4} duration={7} x="5vw" y="70vh" />
      <CartoonStar size={28} color="#FFDD00" delay={1} duration={10} x="80vw" y="65vh" />
      <CartoonStar size={22} color="#FFFFFF" delay={3.5} duration={8.5} x="45vw" y="80vh" />
      <CartoonStar size={25} color="#FF2E93" delay={5} duration={9.5} x="35vw" y="20vh" />

      <CartoonCross size={24} color="#00F0FF" delay={0.5} duration={6} x="20vw" y="50vh" />
      <CartoonCross size={20} color="#FFDD00" delay={2.5} duration={7.5} x="75vw" y="45vh" />
      <CartoonCross size={26} color="#FF2E93" delay={4.5} duration={7} x="50vw" y="10vh" />
      <CartoonCross size={22} color="#FFFFFF" delay={1.5} duration={6.5} x="90vw" y="85vh" />
    </div>
  );
}
