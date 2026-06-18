import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollFadeSection({ children, isHero = false }) {
  const ref = useRef(null);
  
  // Use scrollYProgress of the element relative to viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isHero ? ["start start", "end start"] : ["start end", "end start"] // standard offsets
  });

  // If isHero, start at 100% opacity and fade out as it scrolls up/down.
  // Otherwise, start at 0% opacity, fade in completely at 25% viewport entry,
  // stay visible, and fade out as it exits the top of the viewport.
  const opacity = useTransform(
    scrollYProgress,
    isHero ? [0, 0.6] : [0, 0.22, 0.8, 1],
    isHero ? [1, 0] : [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    isHero ? [0, 0.6] : [0, 0.22, 0.8, 1],
    isHero ? [0, -50] : [50, 0, 0, -50]
  );

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="w-full">
      {children}
    </motion.div>
  );
}
