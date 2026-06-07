import React from 'react';
import { motion } from 'framer-motion';
import { SiCisco, SiInfosys } from 'react-icons/si';
import { FaMicrosoft, FaJava } from 'react-icons/fa';
import { GiScrollUnfurled } from 'react-icons/gi';
import { FiArrowRight, FiAward, FiBookOpen } from 'react-icons/fi';

export default function ExperienceCertifications({ recruiterMode }) {
  const shinobiLeadership = recruiterMode ? [
    {
      role: "Technical Team Lead",
      event: "Hackathon Project",
      scope: "Assumed engineering director roles, aligning code frameworks and building fully functional prototypes under pressure.",
      bullets: ["Team Leadership", "Technical Guidance", "Project Planning"],
      color: "#00F0FF"
    },
    {
      role: "Event Manager",
      event: "Kalomix-2025 // Rathinam College",
      scope: "Spearheaded management operations, coordinating across teams and organizing college events.",
      bullets: ["Event Coordination", "Team Management", "Leadership"],
      color: "#FF6700"
    }
  ] : [
    {
      role: "Technical Team Lead",
      event: "Hackathon Project // Chunin rank",
      scope: "Assumed engineering director roles, aligning code frameworks and building fully functional prototypes under pressure.",
      bullets: ["Team Leadership", "Technical Guidance", "Project Planning"],
      color: "#00F0FF"
    },
    {
      role: "Event Manager",
      event: "Kalomix-2025 // Jonin rank",
      scope: "Spearheaded management operations, coordinating across teams and organizing college events.",
      bullets: ["Event Coordination", "Team Management", "Leadership"],
      color: "#FF6700"
    }
  ];

  const jutsuMasteryScrolls = [
    {
      name: "Python Essentials",
      issuer: "Cisco Networking Academy",
      icon: SiCisco,
      color: "#00E5FF"
    },
    {
      name: "Intro to Python Programming",
      issuer: "Infosys Springboard",
      icon: SiInfosys,
      color: "#ff8200"
    },
    {
      name: "Networking & Cloud Computing",
      issuer: "Microsoft",
      icon: FaMicrosoft,
      color: "#00a4ef"
    },
    {
      name: "Foundations of Java",
      issuer: "Oracle Academy",
      icon: FaJava,
      color: "#f80000"
    }
  ];

  return (
    <section id="experience-certifications" className={`relative py-24 border-b-3 ${recruiterMode ? 'border-slate-200' : 'border-animeOutline'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Chunin/Jonin Leadership (Left) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`text-2xl md:text-4xl font-black font-fredoka uppercase tracking-wide inline-block ${
                  recruiterMode ? 'text-narutoOrange' : 'comic-text-stroke-orange text-narutoOrange'
                }`}
              >
                {recruiterMode ? "Experience & Leadership" : "Shinobi Ranks (Leadership)"}
              </motion.h2>
            </div>

            <div className={`space-y-6 relative pl-4 border-l-3 ${recruiterMode ? 'border-slate-200' : 'border-inkBlack'}`}>
              {shinobiLeadership.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative space-y-3"
                >
                  {/* Timeline bullet */}
                  <div 
                    className={`absolute -left-[27px] top-1.5 w-4.5 h-4.5 rounded-full border-2 ${
                      recruiterMode ? 'border-white shadow-sm' : 'border-inkBlack shadow-[1px_1px_0px_#0B0C16]'
                    }`}
                    style={{ backgroundColor: event.color }}
                  />

                  <div className={recruiterMode ? (
                    "bg-white border border-slate-200 rounded-2xl shadow-md p-6 text-slate-800 hover:shadow-lg transition-all"
                  ) : (
                    "shinobi-card p-6 bg-[#1C1E2F] border-inkBlack"
                  )}>
                    <span className={`font-fredoka text-[9px] font-bold uppercase tracking-wider block mb-1 ${recruiterMode ? 'text-slate-500' : 'text-mutedGray'}`}>
                      {recruiterMode ? "LEADERSHIP & ENGAGEMENT" : "LEADERSHIP REPORT"}
                    </span>
                    <h3 className={`text-lg font-black font-fredoka uppercase leading-tight ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
                      {event.role}
                    </h3>
                    <p className="text-xs font-fredoka font-bold text-narutoOrange">
                      {event.event}
                    </p>
                    <p className={`text-xs leading-relaxed font-medium mt-2 ${recruiterMode ? 'text-slate-600' : 'text-white/70'}`}>
                      {event.scope}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {event.bullets.map((b, idx) => (
                        <span 
                          key={idx}
                          className={`text-[9px] font-fredoka font-bold px-2 py-0.5 rounded ${
                            recruiterMode 
                              ? 'text-slate-700 bg-slate-100 border border-slate-200' 
                              : 'text-inkBlack bg-white border border-inkBlack shadow-[1.5px_1.5px_0px_#0B0C16]'
                          }`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Jutsu Mastery Scrolls (Right) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`text-2xl md:text-4xl font-black font-fredoka uppercase tracking-wide inline-block ${
                  recruiterMode ? 'text-chakraBlue' : 'comic-text-stroke-cyan text-chakraBlue'
                }`}
              >
                {recruiterMode ? "Professional Certifications" : "Jutsu Mastery Scrolls"}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jutsuMasteryScrolls.map((cert, index) => {
                const CertIcon = cert.icon;
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 150, damping: 10, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className={recruiterMode ? (
                      "bg-white border border-slate-200 rounded-2xl shadow-md p-5 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all"
                    ) : (
                      "shinobi-card p-5 bg-[#1C1E2F] flex flex-col justify-between space-y-4 hover:border-narutoOrange shadow-[3px_3px_0px_#0B0C16]"
                    )}
                  >
                    <div 
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold bg-white ${
                        recruiterMode 
                          ? 'border border-slate-200 shadow-sm' 
                          : 'border-2 border-inkBlack shadow-[2px_2px_0px_#0B0C16] text-inkBlack'
                      }`}
                      style={{ color: cert.color }}
                    >
                      <CertIcon />
                    </div>
                    
                    <div>
                      <h4 className={`font-fredoka font-bold text-xs leading-tight ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
                        {cert.name}
                      </h4>
                      <p className={`text-[9px] font-fredoka font-bold mt-1 uppercase tracking-wider flex items-center gap-1 ${recruiterMode ? 'text-slate-500' : 'text-mutedGray'}`}>
                        {recruiterMode ? <FiAward className="text-narutoOrange text-sm" /> : <GiScrollUnfurled className="text-narutoOrange" />} {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Internship Readiness Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-12 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group ${
            recruiterMode ? 'bg-slate-50 border border-slate-200 shadow-md' : 'bg-[#1C1D38] border-[3px] border-inkBlack shadow-neoOrange'
          }`}
        >
          {!recruiterMode && <div className="absolute inset-0 bg-leaf-grid opacity-10 pointer-events-none"></div>}
          <div className="space-y-2 z-10 text-center md:text-left">
            <span className="font-fredoka text-xs font-bold text-narutoOrange tracking-wider uppercase block">
              {recruiterMode ? "// INTERNSHIP STATUS" : "// CURRENT MISSION STATUS"}
            </span>
            <h3 className={`text-2xl font-black font-fredoka uppercase ${recruiterMode ? 'text-slate-800' : 'text-white'}`}>
              {recruiterMode ? "Ready for Frontend & UI/UX Internships" : "Ready for Genin & Chunin Internships"}
            </h3>
            <p className={`text-sm max-w-2xl font-medium leading-relaxed ${recruiterMode ? 'text-slate-600' : 'text-white/80'}`}>
              Seeking Frontend Developer or UI/UX Design internships where I can apply my React, Figma, and design thinking skills to craft intuitive, user-centered digital interfaces.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={recruiterMode ? (
              "px-6 py-3.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-fredoka font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap z-10"
            ) : (
              "shinobi-btn shinobi-btn-orange text-xs font-black flex items-center gap-2 whitespace-nowrap z-10 text-white"
            )}
          >
            {recruiterMode ? "Get in Touch" : "Assign Mission"} <FiArrowRight className="text-base" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
