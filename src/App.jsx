import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChakraBackground from './components/ChakraBackground';
import ProfessionalBackground from './components/ProfessionalBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceCertifications from './components/ExperienceCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [recruiterMode, setRecruiterMode] = useState(true);

  useEffect(() => {
    if (recruiterMode) {
      document.body.classList.add('light-theme');
      document.body.style.backgroundColor = '#F8F9FD';
      document.body.style.color = '#1E293B';
    } else {
      document.body.classList.remove('light-theme');
      document.body.style.backgroundColor = '#0B0C16';
      document.body.style.color = '#FFFFFF';
    }
  }, [recruiterMode]);

  return (
    <>
      {/* Dynamic Backgrounds based on active mode with smooth cross-fade */}
      <AnimatePresence mode="wait">
        {recruiterMode ? (
          <motion.div
            key="professional-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 -z-20 w-full h-full"
          >
            <ProfessionalBackground />
          </motion.div>
        ) : (
          <motion.div
            key="chakra-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 -z-20 w-full h-full"
          >
            <ChakraBackground />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled Spring Cursor */}
      <CustomCursor recruiterMode={recruiterMode} />

      {/* Leaf crested Header Menu */}
      <Navbar recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />

      {/* Shinobi Sections */}
      <main className="relative z-10 w-full min-h-screen">
        <Hero recruiterMode={recruiterMode} />
        <About recruiterMode={recruiterMode} />
        <Skills recruiterMode={recruiterMode} />
        <Projects recruiterMode={recruiterMode} />
        <ExperienceCertifications recruiterMode={recruiterMode} />
        <Contact recruiterMode={recruiterMode} />
      </main>

      {/* Playful Naruto Footer */}
      <Footer recruiterMode={recruiterMode} />
    </>
  );
}

export default App;
