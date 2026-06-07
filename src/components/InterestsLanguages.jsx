import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiBookOpen, FiMusic, FiCode, FiActivity, FiGlobe } from 'react-icons/fi';

function InterestCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="glass-card p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300 flex items-center gap-4 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-full pointer-events-none transition-transform duration-300 group-hover:scale-125"></div>
      <div className="p-3 bg-primary/10 rounded-lg text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <span className="text-white text-sm font-medium tracking-wide leading-snug">
        {item.title}
      </span>
    </motion.div>
  );
}

function LanguageGauge({ lang, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card p-6 rounded-xl border border-white/5 space-y-4 hover:border-secondary/20 transition-smooth group relative overflow-hidden"
    >
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-secondary/5 rounded-full filter blur-xl pointer-events-none group-hover:bg-secondary/10 transition-all duration-300"></div>

      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <h4 className="font-orbitron font-bold text-white text-base tracking-widest uppercase flex items-center gap-2">
          <FiGlobe className="text-secondary" /> {lang.name}
        </h4>
        <span className="font-orbitron text-[9px] tracking-widest text-mutedGray bg-white/5 px-2 py-0.5 rounded border border-white/5 uppercase">
          {lang.type}
        </span>
      </div>

      <div className="space-y-3">
        {lang.levels.map((lvl) => (
          <div key={lvl.label} className="space-y-1">
            <div className="flex justify-between items-center text-[10px] font-orbitron">
              <span className="text-mutedGray tracking-wider">{lvl.label}</span>
              <span className="text-white font-bold">{lvl.percent}%</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lvl.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function InterestsLanguages() {
  const interestsList = [
    { title: "Researching New Technologies", icon: FiCpu },
    { title: "Reading Self-Improvement Books", icon: FiBookOpen },
    { title: "Playing Piano", icon: FiMusic },
    { title: "Exploring AI Tools & Models", icon: FiActivity },
    { title: "Building Creative Web Experiences", icon: FiCode }
  ];

  const languagesList = [
    {
      name: "Tamil",
      type: "Native Tongue",
      levels: [
        { label: "READ", percent: 100 },
        { label: "WRITE", percent: 100 },
        { label: "SPEAK", percent: 100 }
      ]
    },
    {
      name: "English",
      type: "Professional Scope",
      levels: [
        { label: "READ", percent: 90 },
        { label: "WRITE", percent: 85 },
        { label: "SPEAK", percent: 85 }
      ]
    }
  ];

  return (
    <section id="interests-languages" className="relative py-28 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Interests Section */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-orbitron text-[10px] tracking-widest text-primary uppercase mb-2 flex items-center gap-2"
              >
                <span>[07] // DIVERGENT_FLOW</span>
              </motion.div>
              <h3 className="text-2xl md:text-4xl font-black font-orbitron uppercase text-white tracking-wider">
                Interests & Focus
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {interestsList.map((item, index) => (
                <InterestCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-orbitron text-[10px] tracking-widest text-secondary uppercase mb-2 flex items-center gap-2"
              >
                <span>[08] // COMM_MODULE</span>
              </motion.div>
              <h3 className="text-2xl md:text-4xl font-black font-orbitron uppercase text-white tracking-wider">
                Linguistic Telemetry
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {languagesList.map((lang, index) => (
                <LanguageGauge key={index} lang={lang} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
