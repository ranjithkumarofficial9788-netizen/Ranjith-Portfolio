import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer({ recruiterMode }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative py-12 overflow-hidden ${
      recruiterMode 
        ? 'bg-slate-50 border-t border-slate-200' 
        : 'bg-[#0B0C16] border-t-3 border-inkBlack'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Playful copyright */}
        <div className="text-center sm:text-left space-y-1">
          <div className={`flex items-center justify-center sm:justify-start gap-2 text-sm font-fredoka font-bold uppercase ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
            <span className={`w-2.5 h-2.5 rounded-full border animate-pulse ${
              recruiterMode 
                ? 'bg-[#3B82F6] border-slate-300' 
                : 'bg-narutoOrange border-inkBlack'
            }`}></span>
            <span>{recruiterMode ? "RK // PROFESSIONAL NETWORK" : "RK // SHINOBI NET"}</span>
          </div>
          <p className={`text-[10px] font-fredoka font-bold tracking-wider ${recruiterMode ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
            © {currentYear} RANJITHKUMAR M. {recruiterMode ? "ALL RIGHTS RESERVED. PROFESSIONAL PORTFOLIO." : "ALL SCROLLS COMMITTED VIA GENIN CHAKRA."}
          </p>
        </div>

        {/* Social redirects & scroll top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={recruiterMode ? (
                "p-3 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl shadow-sm hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all hover:scale-105"
              ) : (
                "p-3 bg-white border-2 border-inkBlack text-[#0B0C16] text-sm font-bold rounded-xl shadow-[2.5px_2.5px_0px_#0b0c16] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3.5px_3.5px_0px_#0b0c16] transition-all"
              )}
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={recruiterMode ? (
                "p-3 bg-white border border-slate-200 text-[#0077b5] text-sm font-bold rounded-xl shadow-sm hover:bg-[#0077b5]/10 transition-all hover:scale-105"
              ) : (
                "p-3 bg-[#00F0FF] border-2 border-inkBlack text-[#0B0C16] text-sm font-bold rounded-xl shadow-[2.5px_2.5px_0px_#0b0c16] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3.5px_3.5px_0px_#0b0c16] transition-all"
              )}
            >
              <FiLinkedin />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className={recruiterMode ? (
              "p-3 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl shadow-sm hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all hover:scale-105 group"
            ) : (
              "p-3 bg-narutoOrange border-2 border-inkBlack text-white text-sm font-bold rounded-xl shadow-[2.5px_2.5px_0px_#0b0c16] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3.5px_3.5px_0px_#0b0c16] transition-all group"
            )}
          >
            <FiArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
