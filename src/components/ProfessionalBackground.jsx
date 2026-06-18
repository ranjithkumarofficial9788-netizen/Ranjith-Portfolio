import { motion } from 'framer-motion';

const particles = [
  { left: '10%', top: '20%', size: 6, duration: 25, delay: 0, color: '#3B82F6', opacity: 0.15 },
  { left: '25%', top: '65%', size: 10, duration: 30, delay: -5, color: '#A78BFA', opacity: 0.12 },
  { left: '40%', top: '15%', size: 4, duration: 20, delay: -12, color: '#818CF8', opacity: 0.2 },
  { left: '55%', top: '80%', size: 8, duration: 35, delay: -2, color: '#C084FC', opacity: 0.15 },
  { left: '70%', top: '40%', size: 12, duration: 40, delay: -8, color: '#3B82F6', opacity: 0.1 },
  { left: '85%', top: '10%', size: 5, duration: 22, delay: -15, color: '#60A5FA', opacity: 0.18 },
  { left: '90%', top: '70%', size: 7, duration: 28, delay: -4, color: '#818CF8', opacity: 0.14 },
  { left: '15%', top: '85%', size: 9, duration: 32, delay: -18, color: '#C084FC', opacity: 0.12 },
  { left: '30%', top: '35%', size: 5, duration: 24, delay: -6, color: '#3B82F6', opacity: 0.15 },
  { left: '50%', top: '50%', size: 11, duration: 38, delay: -11, color: '#A78BFA', opacity: 0.08 },
  { left: '65%', top: '90%', size: 6, duration: 27, delay: -1, color: '#818CF8', opacity: 0.18 },
  { left: '80%', top: '30%', size: 8, duration: 31, delay: -9, color: '#C084FC', opacity: 0.12 },
  { left: '95%', top: '55%', size: 4, duration: 18, delay: -14, color: '#3B82F6', opacity: 0.2 },
  { left: '20%', top: '45%', size: 7, duration: 26, delay: -3, color: '#60A5FA', opacity: 0.15 },
  { left: '75%', top: '75%', size: 10, duration: 34, delay: -10, color: '#818CF8', opacity: 0.1 }
];

export default function ProfessionalBackground() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-[#FFFFFF] overflow-hidden pointer-events-none">
      {/* Soft blue-purple professional glow pools */}
      <motion.div 
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#EEF2FF] rounded-full filter blur-[120px] opacity-70 pointer-events-none"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-[#F5F3FF] rounded-full filter blur-[150px] opacity-80 pointer-events-none"
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 50, -60, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-[#EEF2FF]/60 rounded-full filter blur-[130px] opacity-50 pointer-events-none"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.15, 0.85, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Ambient Moving Particles */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 40, -40, 0],
            scale: [1, 1.3, 0.7, 1]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

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
