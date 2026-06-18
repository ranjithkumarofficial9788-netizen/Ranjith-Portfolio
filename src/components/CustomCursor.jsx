import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(() => !window.matchMedia('(pointer: fine)').matches);
  const [ripples, setRipples] = useState([]);

  // Precision coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for ring trail
  const springConfig = { damping: 25, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');

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

    let rippleId = 0;
    const handleMouseClick = (e) => {
      const id = rippleId++;
      const newRipple = { id, x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 700);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('click', handleMouseClick);

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
      document.removeEventListener('click', handleMouseClick);
      pointerQuery.removeEventListener('change', updateMobileStatus);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed rounded-full pointer-events-none z-[9998] border border-[#3B82F6]/70 bg-[#818CF8]/5"
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            translateX: '-50%',
            translateY: '-50%',
            opacity: 0.8
          }}
          animate={{
            width: 80,
            height: 80,
            opacity: 0,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Professional Circle Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border-2 border-[#3B82F6]/50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'hover' ? 1.4 : cursorType === 'click' ? 0.85 : 1,
          borderColor: cursorType === 'hover' ? '#818CF8' : '#3B82F6',
          backgroundColor: cursorType === 'hover' ? 'rgba(129, 140, 248, 0.08)' : 'rgba(59, 130, 246, 0.01)',
        }}
        transition={{
          scale: { type: 'spring', damping: 20, stiffness: 220 },
        }}
      />

      {/* Professional Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'hover' ? 1.2 : 1,
          backgroundColor: cursorType === 'hover' ? '#818CF8' : '#3B82F6',
        }}
      />
    </>
  );
}
