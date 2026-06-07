import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { GiLeafSwirl } from 'react-icons/gi';

export default function Navbar({ recruiterMode, setRecruiterMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const menuItems = recruiterMode ? [
    { label: 'Profile', id: 'hero' },
    { label: 'Education', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience & Certs', id: 'experience-certifications' },
    { label: 'Contact', id: 'contact' },
  ] : [
    { label: 'Shinobi Way', id: 'hero' },
    { label: 'Academy Days', id: 'about' },
    { label: 'Jutsu & Chakra', id: 'skills' },
    { label: 'Missions', id: 'projects' },
    { label: 'Mastery Scrolls', id: 'experience-certifications' },
    { label: 'Summoning contract', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 220;
      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? (recruiterMode ? 'py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'py-3 bg-inkBlack/95 border-b-[3px] border-inkBlack') 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo with Leaf crest */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            {recruiterMode ? (
              <span className="font-fredoka font-black text-xl tracking-tight text-slate-800 select-none">
                RK.<span className="text-[#3B82F6]">dev</span>
              </span>
            ) : (
              <>
                <GiLeafSwirl className="text-2xl text-narutoOrange group-hover:rotate-180 transition-transform duration-500" />
                <span className="font-fredoka font-black text-xl tracking-tight text-white select-none">
                  SHINOBI.<span className="text-narutoOrange">RK</span>
                </span>
              </>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={recruiterMode ? (
                    `px-4 py-2 font-fredoka font-bold text-xs uppercase tracking-wider transition-colors relative ${
                      isActive ? 'text-[#3B82F6]' : 'text-slate-600 hover:text-[#3B82F6]'
                    }`
                  ) : (
                    `relative px-4 py-2.5 font-fredoka font-bold text-xs uppercase tracking-wider transition-all duration-200 border-2 rounded-xl ${
                      isActive 
                        ? 'bg-narutoOrange text-white border-inkBlack shadow-[3px_3px_0px_#0B0C16] -translate-x-[2px] -translate-y-[2px]' 
                        : 'bg-transparent text-white/80 border-transparent hover:text-white hover:border-inkBlack hover:bg-[#1C1D38] hover:shadow-[3px_3px_0px_#0B0C16] hover:-translate-x-[2px] hover:-translate-y-[2px]'
                    }`
                  )}
                >
                  {item.label}
                  {recruiterMode && isActive && (
                    <motion.div 
                      layoutId="activeDot" 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#3B82F6] rounded-full" 
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Recruiter Mode Switcher & Download CV (Desktop Nav Right) */}
          <div className="hidden xl:flex items-center gap-3">
            {recruiterMode ? (
              <>
                <a 
                  href="/Ranjithkumar resume.pdf" 
                  download="Ranjithkumar_Resume.pdf"
                  className="px-6 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-fredoka font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-center"
                >
                  Download CV
                </a>
                <button
                  onClick={() => setRecruiterMode(false)}
                  className="px-4 py-2.5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-fredoka font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-200"
                >
                  Shinobi Mode 🌀
                </button>
              </>
            ) : (
              <button
                onClick={() => setRecruiterMode(true)}
                className="px-4 py-2.5 font-fredoka font-black text-xs uppercase tracking-wider transition-all duration-200 border-2 rounded-xl border-inkBlack shadow-[3px_3px_0px_#0B0C16] hover:-translate-x-[2px] hover:-translate-y-[2px] bg-[#00F0FF] text-inkBlack"
              >
                Recruiter Mode 💼
              </button>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Mobile Recruiter Toggle */}
            <button
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={recruiterMode ? (
                "px-3 py-1.5 border border-slate-300 bg-white text-slate-700 rounded-full text-xs font-fredoka font-bold transition-colors"
              ) : (
                "px-3 py-2 border-2 border-inkBlack rounded-xl shadow-[3px_3px_0px_#0B0C16] font-fredoka font-black text-xs uppercase bg-[#00F0FF] text-inkBlack"
              )}
            >
              {recruiterMode ? "Shinobi 🌀" : "Recruiter 💼"}
            </button>

            {/* Mobile hamburger - always shown for full accessibility */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={recruiterMode ? (
                "p-2 bg-white border border-slate-300 rounded-full text-slate-700 hover:text-[#3B82F6] shadow-sm transition-colors"
              ) : (
                "p-2 bg-[#1C1D38] border-2 border-inkBlack rounded-xl shadow-[3px_3px_0px_#0B0C16] text-white hover:text-narutoOrange transition-colors"
              )}
            >
              {mobileMenuOpen ? <HiX className="text-xl" /> : <HiMenuAlt4 className="text-xl" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-x-0 top-[65px] p-6 z-40 xl:hidden flex flex-col gap-4 shadow-2xl ${
              recruiterMode ? 'bg-white border-b border-slate-200' : 'bg-inkBlack/98 border-b-[3px] border-inkBlack'
            }`}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-center font-fredoka font-bold py-3.5 rounded-xl border-2 uppercase text-xs tracking-wider transition-all ${
                  activeSection === item.id 
                    ? (recruiterMode ? 'bg-[#3B82F6] text-white border-transparent' : 'bg-narutoOrange text-white border-inkBlack shadow-[4px_4px_0px_#0B0C16]') 
                    : (recruiterMode ? 'bg-slate-50 text-slate-700 border-slate-200' : 'bg-[#1C1D38] text-white border-inkBlack shadow-[4px_4px_0px_#0B0C16]')
                }`}
              >
                {item.label}
              </button>
            ))}
            {recruiterMode && (
              <a 
                href="/Ranjithkumar resume.pdf" 
                download="Ranjithkumar_Resume.pdf"
                className="w-full text-center font-fredoka font-bold py-3.5 bg-[#FF6700] hover:bg-[#FF8533] text-white rounded-xl uppercase text-xs tracking-wider transition-all"
              >
                Download CV
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
