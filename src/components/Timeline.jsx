import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';

function TimelineCard({ item, index, icon: Icon, glowColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Vertical Rail Bullet Indicator */}
      <div className="absolute left-0 top-1.5 -translate-x-[45%] z-10 flex items-center justify-center">
        <motion.div 
          whileHover={{ scale: 1.2 }}
          className="w-8 h-8 rounded-full bg-darkBg border-2 flex items-center justify-center shadow-lg"
          style={{ borderColor: glowColor }}
        >
          <Icon className="text-xs" style={{ color: glowColor }} />
        </motion.div>
        {/* Glow pulsing ring */}
        <div 
          className="absolute inset-0 rounded-full animate-ping opacity-25" 
          style={{ backgroundColor: glowColor }}
        />
      </div>

      {/* Card Body */}
      <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group">
        <div 
          className="absolute top-0 left-0 w-[2px] h-full transition-all duration-300"
          style={{ backgroundColor: glowColor }}
        />
        
        <span className="font-orbitron text-[9px] tracking-widest text-mutedGray block mb-1">
          {item.date}
        </span>
        
        <h4 className="text-white font-bold font-orbitron tracking-wide text-base group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        
        <p className="text-xs text-mutedGray font-medium mb-3">
          {item.subtitle}
        </p>

        {item.description && (
          <p className="text-xs text-mutedGray leading-relaxed font-light mb-4">
            {item.description}
          </p>
        )}

        {item.bullets && (
          <div className="flex flex-wrap gap-2">
            {item.bullets.map((bullet, idx) => (
              <span 
                key={idx} 
                className="text-[9px] font-orbitron font-semibold text-white/80 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
              >
                {bullet}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const experienceData = [
    {
      title: "Event Manager",
      subtitle: "Kalomix 2025 // Rathinam College",
      date: "2025",
      description: "Spearheaded management operations and coordination workflows for Kalomix 2025, coordinating across multiple groups and driving active engagement.",
      bullets: ["Event Coordination", "Team Management", "Leadership Core"]
    },
    {
      title: "Technical Team Lead",
      subtitle: "Hackathon Project",
      date: "HACKATHON EVENT",
      description: "Assumed engineering coordinator roles, aligning feature roadmaps and designing database layouts to build working prototypes under constraints.",
      bullets: ["Team Leadership", "Technical Guidance", "Project Planning"]
    }
  ];

  const educationData = [
    {
      title: "B.Sc Computer Science",
      subtitle: "Rathinam College of Arts and Science",
      date: "2024 – 2027",
      description: "Focusing on core algorithms, object-oriented concepts, and advanced scripting formats.",
      bullets: ["CGPA: 6.6", "Algorithms", "Web Development"]
    },
    {
      title: "HSC (Higher Secondary Certificate)",
      subtitle: "State Board Syllabus",
      date: "COMPLETED 2024",
      bullets: ["Score: 63.8%"]
    },
    {
      title: "SSLC (Secondary School Leaving Certificate)",
      subtitle: "State Board Syllabus",
      date: "COMPLETED 2022",
      bullets: ["Score: 59.8%"]
    }
  ];

  return (
    <section id="timeline" className="relative py-28 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-[10px] tracking-widest text-primary uppercase mb-2 flex items-center gap-2"
          >
            <span>[04] // TIMELINE_TRACKER</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-orbitron uppercase text-white tracking-wider"
          >
            Experience & Education
          </motion.h2>
        </div>

        {/* Dual Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Experience Timeline */}
          <div className="relative">
            <h3 className="font-orbitron font-bold text-lg text-primary tracking-widest uppercase mb-8 flex items-center gap-2">
              <FiBriefcase className="text-primary" /> Experience & Leadership
            </h3>
            
            {/* Timeline connection line */}
            <div className="absolute left-[15px] top-12 bottom-6 w-[2px] bg-gradient-to-b from-primary/80 to-secondary/20 pointer-events-none" />
            
            <div className="space-y-2">
              {experienceData.map((item, index) => (
                <TimelineCard 
                  key={index} 
                  item={item} 
                  index={index} 
                  icon={index === 0 ? FiUsers : FiAward} 
                  glowColor="#00E5FF" 
                />
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            <h3 className="font-orbitron font-bold text-lg text-secondary tracking-widest uppercase mb-8 flex items-center gap-2">
              <FiBookOpen className="text-secondary" /> Education Chronology
            </h3>
            
            {/* Timeline connection line */}
            <div className="absolute left-[15px] top-12 bottom-6 w-[2px] bg-gradient-to-b from-secondary/80 to-accent/20 pointer-events-none" />
            
            <div className="space-y-2">
              {educationData.map((item, index) => (
                <TimelineCard 
                  key={index} 
                  item={item} 
                  index={index} 
                  icon={FiBookOpen} 
                  glowColor="#7B61FF" 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
