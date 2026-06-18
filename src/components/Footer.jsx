import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Playful copyright */}
        <div className="text-center sm:text-left space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-sm font-fredoka font-bold uppercase text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full border animate-pulse bg-[#3B82F6] border-slate-300"></span>
            <span>RK // PROFESSIONAL NETWORK</span>
          </div>
          <p className="text-[10px] font-fredoka font-bold tracking-wider text-slate-500">
            © {currentYear} RANJITHKUMAR M. ALL RIGHTS RESERVED. PROFESSIONAL PORTFOLIO.
          </p>
        </div>

        {/* Social redirects & scroll top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl shadow-sm hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all hover:scale-105"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-slate-200 text-[#0077b5] text-sm font-bold rounded-xl shadow-sm hover:bg-[#0077b5]/10 transition-all hover:scale-105"
            >
              <FiLinkedin />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl shadow-sm hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all hover:scale-105 group"
          >
            <FiArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
