import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiBriefcase } from 'react-icons/fi';
import { SiReact, SiFigma, SiHtml5 } from 'react-icons/si';
import Magnetic from './Magnetic';
import TextReveal from './TextReveal';

export default function Hero() {
  const scrollInto = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactInfo = {
    email: "ranjithkumarofficial9788@gmail.com",
    phone: "6382314584",
    linkedin: "https://linkedin.com/in/ranjithkumarofficial9788-netizen",
    github: "https://github.com"
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">

        {/* Profile Info (Left Column) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[#3B82F6] font-fredoka font-black text-sm tracking-wider uppercase mb-1"
          >
            <TextReveal text="Hello," />
          </motion.span>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black font-fredoka uppercase leading-none tracking-tight text-slate-800 flex flex-wrap items-center"
          >
            <TextReveal text="I'm" className="text-slate-800" />
            <TextReveal text="Ranjithkumar M" className="text-slate-900 font-extrabold" />
          </motion.h1>

          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-bold font-fredoka tracking-wide uppercase text-slate-600 flex flex-wrap items-center"
          >
            <TextReveal text="Frontend" className="text-slate-600" />
            <TextReveal text="Developer" className="text-[#3B82F6]" />
            <TextReveal text="&" className="text-slate-600" />
            <TextReveal text="UI/UX" className="text-[#3B82F6]" />
            <TextReveal text="Enthusiast" className="text-slate-600" />
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-medium leading-relaxed max-w-xl text-base md:text-lg text-slate-600/90 font-grotesk"
          >
            Motivated computer science student with a strong foundation in frontend technologies and a growing passion for UI/UX design. Experienced in building responsive web interfaces using React.js, HTML5, and CSS3, with a keen eye for clean, user-centred design.
          </motion.p>

          {/* Action buttons & socials */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 pt-4 w-full"
          >
            <Magnetic>
              <button
                onClick={() => scrollInto('about')}
                className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-fredoka font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                About Me
              </button>
            </Magnetic>
            <div className="flex items-center gap-3">
              <Magnetic>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#3B82F6] flex items-center justify-center text-slate-500 hover:text-[#3B82F6] transition-all bg-white shadow-sm hover:scale-105"
                  title="Send Email"
                >
                  <FiMail className="text-base" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#3B82F6] flex items-center justify-center text-slate-500 hover:text-[#3B82F6] transition-all bg-white shadow-sm hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <FiLinkedin className="text-base" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#3B82F6] flex items-center justify-center text-slate-500 hover:text-[#3B82F6] transition-all bg-white shadow-sm hover:scale-105"
                  title="GitHub Profile"
                >
                  <FiGithub className="text-base" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Right Column — Professional Avatar */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center py-10">
          <div className="relative w-full max-w-md flex items-center justify-center">

            {/* Mockup Faint Grid Line Backdrop */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none scale-110" viewBox="0 0 400 400" fill="none">
              <path d="M 50,150 Q 200,20 350,120 Q 300,300 200,380 Z" stroke="#E2E8F0" strokeWidth="2.5" strokeDasharray="5 5" />
            </svg>

            {/* Professional Profile Avatar */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-white flex-shrink-0 z-10"
            >
              <img
                src="/professional_avatar.png"
                alt="Ranjithkumar M"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* React Badge */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-4 w-12 h-12 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-xl text-[#00E5FF] cursor-pointer z-20 hover:scale-110 transition-transform"
              title="React.js"
            >
              <SiReact />
            </motion.div>

            {/* Figma Badge */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 left-6 w-12 h-12 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-xl text-[#F24E1E] cursor-pointer z-20 hover:scale-110 transition-transform"
              title="Figma"
            >
              <SiFigma />
            </motion.div>

            {/* HTML5 Badge */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, -3, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-24 right-4 w-12 h-12 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-xl text-[#E34F26] cursor-pointer z-20 hover:scale-110 transition-transform"
              title="HTML5"
            >
              <SiHtml5 />
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-4 -right-6 sm:-right-12 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl max-w-[200px] z-20"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <FiBriefcase className="text-[#3B82F6] text-xs" />
                <span className="text-[#3B82F6] font-fredoka font-black text-[10px] tracking-wider uppercase block">Quick Bio</span>
              </div>
              <p className="text-[10px] font-bold text-slate-700 leading-snug font-grotesk">
                B.Sc. Computer Science Candidate based in Coimbatore, TN.
              </p>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 pointer-events-none">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-slate-400 flex items-center justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
