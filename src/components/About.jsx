import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCpu, FiMusic, FiGlobe } from 'react-icons/fi';
import { GiScrollUnfurled, GiGraduateCap } from 'react-icons/gi';

export default function About({ recruiterMode }) {
  const educationChronology = recruiterMode ? [
    {
      stage: "B.Sc. Computer Science",
      school: "Rathinam College of Arts & Science",
      period: "2024 – 2027",
      score: "CGPA: 6.6",
      details: "Focusing on frontend technologies, responsive web architectures, and UI/UX design paradigms.",
      badge: "Undergraduate"
    },
    {
      stage: "HSC (Higher Secondary Certificate)",
      school: "TNGR Memorial Hr Sec School",
      period: "Completed 2024",
      score: "Score: 63.8%",
      details: "State Board Syllabus. Built solid mathematical and logical problem-solving foundations.",
      badge: "High School"
    },
    {
      stage: "SSLC (Secondary School Leaving Certificate)",
      school: "TNGR Memorial Hr Sec School",
      period: "Completed 2022",
      score: "Score: 59.8%",
      details: "State Board Syllabus. Initial awakening of technical curiosity and engineering mindset.",
      badge: "Middle School"
    }
  ] : [
    {
      stage: "Genin Academy (B.Sc. CS)",
      school: "Rathinam College of Arts & Science",
      period: "2024 – 2027",
      score: "CGPA: 6.6",
      details: "Focusing on frontend technologies, responsive web architectures, and UI/UX design paradigms.",
      badge: "ACTIVE JUTSU"
    },
    {
      stage: "Chunin Trials (HSC)",
      school: "TNGR Memorial Hr Sec School",
      period: "Completed 2024",
      score: "Score: 63.8%",
      details: "State Board Syllabus. Built solid mathematical and logical problem-solving foundations.",
      badge: "SEALED"
    },
    {
      stage: "Genin Graduation (SSLC)",
      school: "TNGR Memorial Hr Sec School",
      period: "Completed 2022",
      score: "Score: 59.8%",
      details: "State Board Syllabus. Initial awakening of technical curiosity and engineering mindset.",
      badge: "SEALED"
    }
  ];

  const trainingRoutine = [
    {
      title: "Tech Research",
      scope: "Researching New Technologies",
      details: "Studying code structures, API networks, and backend configurations.",
      icon: FiCpu,
      bg: "#FFDD00"
    },
    {
      title: "Self-Improvement",
      scope: "Reading Self-Improvement Books",
      details: "Expanding analytical thoughts, leadership frameworks, and focus vectors.",
      icon: FiBookOpen,
      bg: "#FF2E93"
    },
    {
      title: "Piano Practice",
      scope: "Playing Piano",
      details: "Rehearsing classical scales, timing, and creative harmonies.",
      icon: FiMusic,
      bg: "#00F0FF"
    }
  ];

  const linguisticJutsu = recruiterMode ? [
    { name: "Tamil", type: "Native Tongue", level: "Read | Write | Speak (Fluent)" },
    { name: "English", type: "Professional Scope", level: "Read | Write | Speak (Fluent)" }
  ] : [
    { name: "Tamil", type: "Native Tongue", level: "Read | Write | Speak (100% Mastery)" },
    { name: "English", type: "Professional Comm", level: "Read | Write | Speak (Fluent)" }
  ];

  return (
    <section id="about" className={`relative py-24 border-b-3 ${recruiterMode ? 'border-slate-200' : 'border-animeOutline'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-black font-fredoka uppercase tracking-wide inline-block ${
              recruiterMode ? 'text-[#3B82F6]' : 'comic-text-stroke-orange text-narutoOrange'
            }`}
          >
            {recruiterMode ? "Education & Timeline" : "My Ninja Academy Chronicles"}
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Academy Days Chronology (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className={`text-xl font-black font-fredoka uppercase tracking-wider flex items-center gap-2 mb-4 ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
              <GiGraduateCap className={`${recruiterMode ? 'text-[#3B82F6]' : 'text-narutoOrange'} text-2xl`} /> {recruiterMode ? "Education Chronology" : "Academy Scrolls (Education)"}
            </h3>
            
            <div className="space-y-6">
              {educationChronology.map((edu, index) => (
                <motion.div
                  key={edu.stage}
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`p-6 relative overflow-hidden group animate-pulse-none ${
                    recruiterMode 
                      ? 'bg-white border border-slate-200 rounded-2xl shadow-md' 
                      : 'shinobi-card bg-[#1C1E2F] border-inkBlack shadow-[5px_5px_0px_#0B0C16]'
                  }`}
                >
                  {!recruiterMode && <div className="absolute inset-0 bg-leaf-grid opacity-10 pointer-events-none"></div>}

                  <div className="flex justify-between items-start z-10 relative">
                    <div className="space-y-2">
                      <span className={`font-fredoka text-[9px] font-bold tracking-wider uppercase block ${recruiterMode ? 'text-[#3B82F6]' : 'text-narutoOrange'}`}>
                        // {recruiterMode ? "LEVEL" : "STAGE"}: {edu.badge}
                      </span>
                      <h4 className={`text-lg font-black font-fredoka uppercase leading-tight ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
                        {edu.stage}
                      </h4>
                      <p className={`text-xs font-fredoka font-bold flex items-center gap-1.5 ${recruiterMode ? 'text-slate-500' : 'text-mutedGray'}`}>
                        {recruiterMode ? <FiBookOpen className="text-[#3B82F6]" /> : <GiScrollUnfurled className="text-narutoOrange" />} {edu.school}
                      </p>
                      <p className={`font-medium text-xs leading-relaxed pt-1 ${recruiterMode ? 'text-slate-600' : 'text-white/80'}`}>
                        {edu.details}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 text-right">
                      <span className={`px-2 py-0.5 text-[10px] font-fredoka font-bold rounded border whitespace-nowrap ${
                        recruiterMode 
                          ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30' 
                          : 'bg-narutoOrange text-white border-inkBlack shadow-[2px_2px_0px_#0b0c16]'
                      }`}>
                        {edu.period}
                      </span>
                      <span className={`px-2 py-0.5 text-[10px] font-fredoka font-bold rounded border whitespace-nowrap ${
                        recruiterMode 
                          ? 'bg-emerald-550/10 text-emerald-600 border-emerald-500/30' 
                          : 'bg-chakraBlue text-inkBlack border-inkBlack shadow-[2px_2px_0px_#0b0c16]'
                      }`}>
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Training Routine & Linguistic Jutsu (Right) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            
            {/* Training Routine (Hobbies) */}
            <div className="space-y-4">
              <h3 className={`text-xl font-black font-fredoka uppercase tracking-wider flex items-center gap-2 ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
                {recruiterMode ? <FiCpu className="text-[#3B82F6] text-2xl" /> : <GiScrollUnfurled className="text-narutoOrange text-2xl" />} {recruiterMode ? "Hobbies & Focus Areas" : "Training Routine (Hobbies)"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {trainingRoutine.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className={`p-5 rounded-xl flex flex-col justify-between min-h-[180px] hover:-translate-y-1 transition-all ${
                        recruiterMode 
                          ? 'bg-white border border-slate-200 shadow-md text-slate-800' 
                          : 'parchment-scroll'
                      }`}
                    >
                      <div 
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm shadow-[2px_2px_0px_#0B0C16] flex-shrink-0 ${
                          recruiterMode ? 'border-slate-200' : 'border-inkBlack'
                        }`}
                        style={{ backgroundColor: item.bg, color: recruiterMode ? '#0B0C16' : undefined }}
                      >
                        <Icon />
                      </div>

                      <div className="space-y-1 mt-4">
                        <h4 className={`font-fredoka font-black text-xs leading-tight uppercase ${recruiterMode ? 'text-[#3B82F6]' : 'text-inkBlack'}`}>
                          {item.title}
                        </h4>
                        <p className={`text-[10px] leading-relaxed font-bold ${recruiterMode ? 'text-slate-600' : 'text-inkBlack/75'}`}>
                          {item.scope}
                        </p>
                        <p className={`text-[9px] leading-snug font-medium ${recruiterMode ? 'text-slate-500' : 'text-inkBlack/60'}`}>
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Linguistic Jutsu (Languages) */}
            <div className="space-y-4">
              <h3 className={`text-xl font-black font-fredoka uppercase tracking-wider flex items-center gap-2 ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
                <FiGlobe className={`text-2xl animate-spin-slow ${recruiterMode ? 'text-[#3B82F6]' : 'text-chakraBlue'}`} /> {recruiterMode ? "Language Proficiency" : "Linguistic Jutsu (Languages)"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {linguisticJutsu.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`p-5 flex flex-col justify-between space-y-3 ${
                      recruiterMode
                        ? 'bg-white border border-slate-200 rounded-2xl shadow-md text-slate-800'
                        : 'shinobi-card bg-[#1C1E2F] border-inkBlack shadow-[3px_3px_0px_#0B0C16]'
                    }`}
                  >
                    <div className={`flex justify-between items-center pb-2 border-b ${recruiterMode ? 'border-slate-100' : 'border-inkBlack'}`}>
                      <span className={`font-fredoka font-black text-sm uppercase tracking-tight ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
                        {lang.name}
                      </span>
                      <span className={`px-2 py-0.5 text-[9px] font-fredoka font-bold rounded border ${
                        recruiterMode 
                          ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30' 
                          : 'bg-chakraBlue text-inkBlack border border-inkBlack'
                      }`}>
                        {lang.type}
                      </span>
                    </div>
                    <p className={`font-fredoka font-semibold text-[11px] leading-relaxed ${recruiterMode ? 'text-[#3B82F6]' : 'text-narutoOrange'}`}>
                      {lang.level}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
