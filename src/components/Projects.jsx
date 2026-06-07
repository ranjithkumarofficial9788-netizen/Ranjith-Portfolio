import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { GiShuriken } from 'react-icons/gi';

export default function Projects({ recruiterMode }) {
  const missionsData = [
    {
      id: 1,
      rank: "S-Rank Mission",
      recruiterRank: "Featured AI Project",
      title: "Kural Isai",
      subtitle: "AI Powered Music Learning Hub",
      desc: "An AI-powered music learning platform providing personalized learning paths, lesson recommendations, and intelligent practice exercises based on user progress and skill levels.",
      tech: ["React.js", "AI APIs", "CSS Modules"],
      github: "https://github.com",
      live: "https://kuralisai.com",
      shadowClass: "shadow-neoOrange border-inkBlack hover:border-narutoOrange hover:shadow-[9px_9px_0px_#FF6700]",
      badgeColor: "bg-narutoOrange text-white"
    },
    {
      id: 2,
      rank: "A-Rank Mission",
      recruiterRank: "Portfolio Project",
      title: "Personal Portfolio Website",
      subtitle: "UI/UX & Creative Showcase",
      desc: "Designed and developed this responsive personal portfolio website with a strong focus on visual hierarchy, anime design rules, and smooth interactive UX best practices using custom animations.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      live: "https://portfolio.com",
      shadowClass: "shadow-neoCyan border-inkBlack hover:border-chakraBlue hover:shadow-[9px_9px_0px_#00F0FF]",
      badgeColor: "bg-chakraBlue text-inkBlack"
    }
  ];

  return (
    <section id="projects" className={`relative py-24 border-b-3 ${recruiterMode ? 'border-slate-200' : 'border-animeOutline'}`}>
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
              recruiterMode ? 'text-[#3B82F6]' : 'comic-text-stroke-green text-shinobiGreen'
            }`}
          >
            {recruiterMode ? "Key Projects" : "Completed Missions"}
          </motion.h2>
        </div>

        {/* Missions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {missionsData.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`p-8 flex flex-col justify-between space-y-6 relative group overflow-hidden ${
                recruiterMode 
                  ? 'bg-white border border-slate-200 rounded-2xl shadow-md text-slate-800 hover:shadow-lg transition-all duration-300' 
                  : `shinobi-card bg-[#1C1E2F] ${mission.shadowClass}`
              }`}
            >
              {/* Smoke puff shockwave hover animation - only in shinobi mode */}
              {!recruiterMode && (
                <motion.div 
                  className="absolute inset-0 bg-white/15 rounded-2xl pointer-events-none mix-blend-screen filter blur-md"
                  initial={{ scale: 0.1, opacity: 0 }}
                  whileHover={{ scale: 1.3, opacity: [0, 0.7, 0] }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              )}

              {/* Background watermark - only in shinobi mode */}
              {!recruiterMode && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
              )}

              <div className="space-y-4 z-10">
                {/* Header info */}
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 text-[10px] font-fredoka font-black uppercase tracking-widest rounded border ${
                    recruiterMode 
                      ? 'bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]'
                      : `${mission.badgeColor} border-2 border-inkBlack shadow-[2px_2px_0px_#0B0C16]`
                  }`}>
                    {recruiterMode ? mission.recruiterRank : mission.rank}
                  </span>
                  <div className="text-white/40 group-hover:text-narutoOrange transition-colors text-lg animate-spin-fast-none hidden sm:block">
                    {recruiterMode ? <FiCode className="text-slate-400 text-base" /> : <GiShuriken className="animate-spin-fast text-lg" />}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className={`text-2xl font-black font-fredoka uppercase tracking-tight ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
                    {mission.title}
                  </h3>
                  <p className={`text-xs font-fredoka font-bold mt-1 uppercase tracking-wider ${recruiterMode ? 'text-[#3B82F6]' : 'text-narutoOrange'}`}>
                    {mission.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed font-medium ${recruiterMode ? 'text-slate-600' : 'text-white/80'}`}>
                  {mission.desc}
                </p>

                {/* Tech specifications */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {mission.tech.map((t) => (
                    <span 
                      key={t}
                      className={`text-[10px] font-fredoka font-bold px-2.5 py-0.5 rounded border ${
                        recruiterMode
                          ? 'bg-slate-50 border-slate-200 text-slate-600'
                          : 'text-white bg-white/5 border-2 border-inkBlack shadow-[1.5px_1.5px_0px_#0B0C16]'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`flex items-center gap-4 pt-4 z-10 border-t ${recruiterMode ? 'border-slate-100' : 'border-inkBlack'}`}>
                <a
                  href={mission.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={recruiterMode ? (
                    "flex-1 text-center py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-fredoka font-bold uppercase text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 hover:border-[#3B82F6]"
                  ) : (
                    "flex-1 text-center py-2.5 bg-white hover:bg-white/95 border-2 border-inkBlack text-[#0B0C16] font-fredoka font-black uppercase text-xs rounded-xl shadow-[3px_3px_0px_#0B0C16] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[4.5px_4.5px_0px_#0b0c16] transition-all flex items-center justify-center gap-2"
                  )}
                >
                  {recruiterMode ? <FiGithub className="text-sm text-slate-600" /> : <GiShuriken className="text-sm group-hover:rotate-180 transition-transform" />}
                  {recruiterMode ? "GitHub Repository" : "Scroll Info"}
                </a>
                <a
                  href={mission.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={recruiterMode ? (
                    "flex-1 text-center py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-fredoka font-bold uppercase text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  ) : (
                    "flex-1 text-center py-2.5 bg-narutoOrange hover:bg-narutoOrange/90 border-2 border-inkBlack text-white font-fredoka font-black uppercase text-xs rounded-xl shadow-[3px_3px_0px_#0B0C16] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[4.5px_4.5px_0px_#0b0c16] transition-all flex items-center justify-center gap-2"
                  )}
                >
                  {recruiterMode ? <FiExternalLink className="text-sm" /> : <GiShuriken className="text-sm group-hover:rotate-180 transition-transform" />}
                  {recruiterMode ? "Live Preview" : "Live Portal"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
