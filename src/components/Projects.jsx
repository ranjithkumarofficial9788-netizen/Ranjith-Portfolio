import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';

export default function Projects() {
  const missionsData = [
    {
      id: 1,
      recruiterRank: "Featured AI Project",
      title: "Kural Isai",
      subtitle: "AI Powered Music Learning Hub",
      desc: "An AI-powered music learning platform providing personalized learning paths, lesson recommendations, and intelligent practice exercises based on user progress and skill levels.",
      tech: ["React.js", "AI APIs", "CSS Modules"],
      github: "https://github.com",
      live: "https://kuralisai.com"
    },
    {
      id: 2,
      recruiterRank: "Portfolio Project",
      title: "Personal Portfolio Website",
      subtitle: "UI/UX & Creative Showcase",
      desc: "Designed and developed this responsive personal portfolio website with a strong focus on visual hierarchy, anime design rules, and smooth interactive UX best practices using custom animations.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      live: "https://portfolio.com"
    }
  ];

  return (
    <section id="projects" className="relative py-24 border-b-2 border-slate-200">
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
            className="text-3xl md:text-5xl font-black font-fredoka uppercase tracking-wide inline-block text-[#3B82F6]"
          >
            <TextReveal text="Key Projects" />
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
              className="w-full h-full"
            >
              <TiltCard className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-8 flex flex-col justify-between h-full space-y-6 relative group overflow-hidden text-slate-800">
                  <div className="space-y-4 z-10">
                    {/* Header info */}
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 text-[10px] font-fredoka font-black uppercase tracking-widest rounded border bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]">
                        {mission.recruiterRank}
                      </span>
                      <div className="text-white/40 group-hover:text-[#3B82F6] transition-colors text-lg animate-spin-fast-none hidden sm:block">
                        <FiCode className="text-slate-400 text-base" />
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-black font-fredoka uppercase tracking-tight text-slate-800">
                        {mission.title}
                      </h3>
                      <p className="text-xs font-fredoka font-bold mt-1 uppercase tracking-wider text-[#3B82F6]">
                        {mission.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed font-medium text-slate-600">
                      {mission.desc}
                    </p>

                    {/* Tech specifications */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {mission.tech.map((t) => (
                        <span 
                          key={t}
                          className="text-[10px] font-fredoka font-bold px-2.5 py-0.5 rounded border bg-slate-50 border-slate-200 text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4 z-10 border-t border-slate-100">
                    <a
                      href={mission.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-fredoka font-bold uppercase text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 hover:border-[#3B82F6]"
                    >
                      <FiGithub className="text-sm text-slate-600" />
                      GitHub Repository
                    </a>
                    <a
                      href={mission.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-fredoka font-bold uppercase text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <FiExternalLink className="text-sm" />
                      Live Preview
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
