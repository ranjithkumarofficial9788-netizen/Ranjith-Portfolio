import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// SVG Shuriken path
const ShurikenSvg = ({ color }) => (
  <svg viewBox="0 0 100 100" fill={color} className="w-full h-full stroke-inkBlack stroke-[3px]">
    <path d="M50 50 L50 5 L58 38 L95 50 L62 58 L50 95 L42 62 L5 50 L38 42 Z" />
    <circle cx="50" cy="50" r="10" fill="#0B0C16" />
  </svg>
);

export default function CustomCursor({ recruiterMode }) {
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Precision coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for shuriken/ring trail
  const springConfig = { damping: 25, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!pointerQuery.matches);

    const updateMobileStatus = (e) => setIsMobile(!e.matches);
    pointerQuery.addEventListener('change', updateMobileStatus);

    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-target') ||
        target.getAttribute('role') === 'button';

      if (isInteractive) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseDown = () => setCursorType('click');
    const handleMouseUp = () => setCursorType('hover');

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    if (pointerQuery.matches) {
      document.body.classList.add('custom-cursor-active');
    }

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      pointerQuery.removeEventListener('change', updateMobileStatus);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {recruiterMode ? (
        <>
          {/* Professional Circle Follower */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border-2 border-[#00F0FF]/50"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: cursorType === 'hover' ? 1.4 : cursorType === 'click' ? 0.85 : 1,
              borderColor: cursorType === 'hover' ? '#FF6700' : '#00F0FF',
              backgroundColor: cursorType === 'hover' ? 'rgba(255, 103, 0, 0.05)' : 'rgba(0, 240, 255, 0.01)',
            }}
            transition={{
              scale: { type: 'spring', damping: 20, stiffness: 220 },
            }}
          />

          {/* Professional Inner Dot */}
          <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FF6700] rounded-full pointer-events-none z-[9999]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: cursorType === 'hover' ? 1.2 : 1,
              backgroundColor: cursorType === 'hover' ? '#00F0FF' : '#FF6700',
            }}
          />
        </>
      ) : (
        <>
          {/* Interactive Shuriken Custom Cursor */}
          <motion.div
            className="fixed top-0 left-0 w-9 h-9 pointer-events-none z-[9999] flex items-center justify-center"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: cursorType === 'hover' ? 1.5 : cursorType === 'click' ? 0.9 : 1,
              rotate: cursorType === 'hover' ? 360 : [0, 90, 180, 270, 360],
              filter: cursorType === 'hover' ? 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.8))' : 'none'
            }}
            transition={{
              scale: { type: 'spring', damping: 15, stiffness: 200 },
              rotate: cursorType === 'hover' 
                ? { repeat: Infinity, duration: 0.3, ease: 'linear' } 
                : { repeat: Infinity, duration: 8, ease: 'linear' }
            }}
          >
            <ShurikenSvg color={cursorType === 'hover' ? '#FF6700' : '#00F0FF'} />
          </motion.div>

          {/* Center focus dot */}
          <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FFDD00] rounded-full pointer-events-none z-[9999] border border-inkBlack"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: cursorType === 'hover' ? 0.5 : 1,
            }}
          />
        </>
      )}
    </>
  );
}
