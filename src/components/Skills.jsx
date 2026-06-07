import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiReact, SiFigma, SiLinux, SiGithub, SiGit } from 'react-icons/si';
import { FaCss3Alt, FaWindows } from 'react-icons/fa';
import { FiCpu, FiSliders, FiUsers, FiMessageSquare, FiCompass, FiCode } from 'react-icons/fi';
import { GiShuriken } from 'react-icons/gi';

export default function Skills({ recruiterMode }) {
  const kekkeiGenkai = [
    { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
    { name: 'React Js', icon: SiReact, color: '#00E5FF' },
    { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
    { name: 'Stitch', icon: FiCompass, color: '#FF6700' },
  ];

  const ninjaTools = [
    { name: 'Linux', icon: SiLinux, color: '#fcc624' },
    { name: 'Windows', icon: FaWindows, color: '#0078d6' },
    { name: 'VS Code', icon: FiCode, color: '#007acc' },
    { name: 'Git & GitHub', icon: SiGithub, color: '#ffffff' },
  ];

  const tacticalSkills = [
    { name: 'Problem Solving', icon: FiCpu, color: '#FFDD00' },
    { name: 'Decision Making', icon: FiSliders, color: '#FF2E93' },
    { name: 'Team Building', icon: FiUsers, color: '#00F0FF' },
    { name: 'Public Speaking', icon: FiMessageSquare, color: '#10B981' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 12 } }
  };

  return (
    <section id="skills" className={`relative py-24 border-b-3 ${recruiterMode ? 'border-slate-200' : 'border-animeOutline'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-black font-fredoka uppercase tracking-wide inline-block ${
              recruiterMode ? 'text-[#3B82F6]' : 'comic-text-stroke-cyan text-chakraBlue'
            }`}
          >
            {recruiterMode ? "Skills & Expertise" : "Chakra Natures & Jutsu"}
          </motion.h2>
        </div>

        {/* Elemental Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Fire Style Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={recruiterMode ? (
              "bg-white border border-slate-200 rounded-2xl shadow-md text-slate-800 p-6 relative overflow-hidden group hover:shadow-lg transition-all"
            ) : (
              "shinobi-card p-6 border-inkBlack bg-[#1C1E2F] hover:shadow-neoOrange relative overflow-hidden group"
            )}
          >
            {/* Smoke shockwave - only in shinobi mode */}
            {!recruiterMode && (
              <motion.div 
                className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none mix-blend-screen filter blur-md"
                initial={{ scale: 0.1, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: [0, 0.7, 0] }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            )}
            <h3 className={`font-fredoka font-black text-lg uppercase tracking-wider mb-6 pb-2 border-b-2 flex items-center justify-between ${
              recruiterMode ? 'text-slate-800 border-slate-100' : 'text-narutoOrange border-inkBlack'
            }`}>
              <span className="flex items-center gap-1.5">
                {recruiterMode ? <FiCode className="text-sm text-[#3B82F6]" /> : <GiShuriken className="animate-spin-fast text-sm" />} 
                {recruiterMode ? "Technical Skills" : "Kekkei Genkai"}
              </span>
              <span className={`text-[10px] border px-2.5 py-0.5 rounded font-bold ${
                recruiterMode 
                  ? 'bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]' 
                  : 'bg-narutoOrange/15 border-narutoOrange text-narutoOrange'
              }`}>
                {recruiterMode ? "FRONTEND & UI" : "FIRE_STYLE"}
              </span>
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {kekkeiGenkai.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div 
                    variants={itemVariants}
                    key={skill.name}
                    className={recruiterMode ? (
                      "flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 bg-slate-50/50 hover:bg-slate-50 hover:border-[#3B82F6] transition-colors cursor-pointer text-xs font-fredoka font-semibold shadow-sm"
                    ) : (
                      "chakra-badge flex items-center gap-2 cursor-pointer"
                    )}
                  >
                    <Icon style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Wind Style Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={recruiterMode ? (
              "bg-white border border-slate-200 rounded-2xl shadow-md text-slate-800 p-6 relative overflow-hidden group hover:shadow-lg transition-all"
            ) : (
              "shinobi-card shinobi-card-cyan p-6 border-inkBlack bg-[#1C1E2F] relative overflow-hidden group"
            )}
          >
            {/* Smoke shockwave - only in shinobi mode */}
            {!recruiterMode && (
              <motion.div 
                className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none mix-blend-screen filter blur-md"
                initial={{ scale: 0.1, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: [0, 0.7, 0] }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            )}
            <h3 className={`font-fredoka font-black text-lg uppercase tracking-wider mb-6 pb-2 border-b-2 flex items-center justify-between ${
              recruiterMode ? 'text-slate-800 border-slate-100' : 'text-chakraBlue border-inkBlack'
            }`}>
              <span className="flex items-center gap-1.5">
                {recruiterMode ? <FiCpu className="text-sm text-[#3B82F6]" /> : <GiShuriken className="animate-spin-fast text-sm" />} 
                {recruiterMode ? "Platforms & Tools" : "Ninja Tools"}
              </span>
              <span className={`text-[10px] border px-2.5 py-0.5 rounded font-bold ${
                recruiterMode 
                  ? 'bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]' 
                  : 'bg-chakraBlue/15 border border-chakraBlue text-chakraBlue'
              }`}>
                {recruiterMode ? "DEVELOPMENT" : "WIND_STYLE"}
              </span>
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {ninjaTools.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div 
                    variants={itemVariants}
                    key={skill.name}
                    className={recruiterMode ? (
                      "flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 bg-slate-50/50 hover:bg-slate-50 hover:border-[#3B82F6] transition-colors cursor-pointer text-xs font-fredoka font-semibold shadow-sm"
                    ) : (
                      "chakra-badge chakra-badge-cyan flex items-center gap-2 cursor-pointer"
                    )}
                  >
                    <Icon style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Lightning Style Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={recruiterMode ? (
              "bg-white border border-slate-200 rounded-2xl shadow-md text-slate-800 p-6 relative overflow-hidden group hover:shadow-lg transition-all"
            ) : (
              "shinobi-card shinobi-card-green p-6 border-inkBlack bg-[#1C1E2F] relative overflow-hidden group"
            )}
          >
            {/* Smoke shockwave - only in shinobi mode */}
            {!recruiterMode && (
              <motion.div 
                className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none mix-blend-screen filter blur-md"
                initial={{ scale: 0.1, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: [0, 0.7, 0] }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            )}
            <h3 className={`font-fredoka font-black text-lg uppercase tracking-wider mb-6 pb-2 border-b-2 flex items-center justify-between ${
              recruiterMode ? 'text-slate-800 border-slate-100' : 'text-shinobiGreen border-inkBlack'
            }`}>
              <span className="flex items-center gap-1.5">
                {recruiterMode ? <FiUsers className="text-sm text-[#3B82F6]" /> : <GiShuriken className="animate-spin-fast text-sm" />} 
                {recruiterMode ? "Tactical & Soft Skills" : "Tactical skills"}
              </span>
              <span className={`text-[10px] border px-2.5 py-0.5 rounded font-bold ${
                recruiterMode 
                  ? 'bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]' 
                  : 'bg-shinobiGreen/15 border border-shinobiGreen text-shinobiGreen'
              }`}>
                {recruiterMode ? "INTERPERSONAL" : "LIGHTNING"}
              </span>
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {tacticalSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div 
                    variants={itemVariants}
                    key={skill.name}
                    className={recruiterMode ? (
                      "flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 bg-slate-50/50 hover:bg-slate-50 hover:border-[#3B82F6] transition-colors cursor-pointer text-xs font-fredoka font-semibold shadow-sm"
                    ) : (
                      "chakra-badge chakra-badge-green flex items-center gap-2 cursor-pointer"
                    )}
                  >
                    <Icon style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
