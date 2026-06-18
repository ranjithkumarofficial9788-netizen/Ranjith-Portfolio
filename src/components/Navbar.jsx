import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import Magnetic from './Magnetic';

const menuItems = [
  { label: 'Profile', id: 'hero' },
  { label: 'Education', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience & Certs', id: 'experience-certifications' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

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
            ? 'py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Magnetic>
            <div
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="font-fredoka font-black text-xl tracking-tight text-slate-800 select-none">
                RK.<span className="text-[#3B82F6]">dev</span>
              </span>
            </div>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Magnetic key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 font-fredoka font-bold text-xs uppercase tracking-wider transition-colors relative ${
                      isActive ? 'text-[#3B82F6]' : 'text-slate-600 hover:text-[#3B82F6]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#3B82F6] rounded-full"
                      />
                    )}
                  </button>
                </Magnetic>
              );
            })}
          </nav>

          {/* Desktop Right — Download CV */}
          <div className="hidden xl:flex items-center gap-3">
            <Magnetic>
              <a
                href="/Ranjithkumar resume.pdf"
                download="Ranjithkumar_Resume.pdf"
                className="px-6 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-fredoka font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-center inline-block"
              >
                Download CV
              </a>
            </Magnetic>
          </div>

          {/* Mobile Controls */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white border border-slate-300 rounded-full text-slate-700 hover:text-[#3B82F6] shadow-sm transition-colors"
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
            className="fixed inset-x-0 top-[65px] p-6 z-40 xl:hidden flex flex-col gap-4 shadow-2xl bg-white border-b border-slate-200"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-center font-fredoka font-bold py-3.5 rounded-xl border-2 uppercase text-xs tracking-wider transition-all ${
                  activeSection === item.id
                    ? 'bg-[#3B82F6] text-white border-transparent'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/Ranjithkumar resume.pdf"
              download="Ranjithkumar_Resume.pdf"
              className="w-full text-center font-fredoka font-bold py-3.5 bg-[#FF6700] hover:bg-[#FF8533] text-white rounded-xl uppercase text-xs tracking-wider transition-all"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
