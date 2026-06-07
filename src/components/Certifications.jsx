import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiCheck } from 'react-icons/fi';
import { SiCisco, SiInfosys } from 'react-icons/si';
import { FaMicrosoft, FaJava } from 'react-icons/fa';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  const certificationsData = [
    {
      id: 1,
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      date: "2025",
      idCode: "CS-PY-92840",
      icon: SiCisco,
      color: "#00E5FF",
      description: "Covers foundational Python syntax, data structures, algorithm design principles, OOP mechanisms, and exception structures.",
      url: "https://www.netacad.com"
    },
    {
      id: 2,
      title: "Introduction to Python Programming",
      issuer: "Infosys Springboard",
      date: "2025",
      idCode: "INF-PY-48201",
      icon: SiInfosys,
      color: "#ff8200",
      description: "Covers general scripting processes, functional abstractions, flow patterns, string matrices, and collection types.",
      url: "https://springboard.infosys.com"
    },
    {
      id: 3,
      title: "Introduction to Networking & Cloud",
      issuer: "Microsoft",
      date: "2024",
      idCode: "MS-NW-10023",
      icon: FaMicrosoft,
      color: "#00a4ef",
      description: "Covers fundamental network designs, OSI framework, network protocols, subnetting, virtual architectures, and Azure Cloud service layers.",
      url: "https://learn.microsoft.com"
    },
    {
      id: 4,
      title: "Foundations of Java Programming",
      issuer: "Oracle Academy",
      date: "2024",
      idCode: "OR-JV-39180",
      icon: FaJava,
      color: "#f80000",
      description: "Covers Java paradigms, structure syntax, variables, inheritance, interfaces, polymorphism, packages, and garbage collections.",
      url: "https://academy.oracle.com"
    }
  ];

  return (
    <section id="certifications" className="relative py-28 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-[10px] tracking-widest text-accent uppercase mb-2 flex items-center gap-2"
          >
            <span>[05] // CERTIFICATE_VAULT</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-orbitron uppercase text-white tracking-wider"
          >
            Certifications
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => {
            const IssuerIcon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/15 cursor-pointer relative overflow-hidden flex flex-col justify-between group"
                onClick={() => setActiveCert(cert)}
              >
                {/* Visual ambient gradient glow */}
                <div 
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full filter blur-[40px] opacity-10 group-hover:opacity-25 transition-opacity duration-300"
                  style={{ backgroundColor: cert.color }}
                />

                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex justify-between items-start">
                    <div 
                      className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xl"
                      style={{ color: cert.color }}
                    >
                      <IssuerIcon />
                    </div>
                    <span className="font-orbitron text-[9px] tracking-widest text-mutedGray uppercase">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-white font-orbitron font-semibold text-sm group-hover:text-primary transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-mutedGray text-xs font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-orbitron text-primary font-bold">
                  <span>PREVIEW DECRYPT</span>
                  <FiExternalLink />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-darkBg/95 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative"
            >
              {/* Top border indicating issuer color */}
              <div 
                className="h-1.5 w-full"
                style={{ backgroundColor: activeCert.color }}
              />

              <div className="p-6 md:p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-3 bg-white/5 border border-white/10 text-2xl rounded-lg"
                      style={{ color: activeCert.color }}
                    >
                      <activeCert.icon />
                    </div>
                    <div>
                      <h4 className="font-orbitron font-bold text-white text-base">
                        {activeCert.title}
                      </h4>
                      <p className="text-mutedGray text-xs">
                        {activeCert.issuer}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveCert(null)}
                    className="text-mutedGray hover:text-white transition-colors"
                  >
                    <FiX />
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="font-orbitron text-[9px] tracking-widest text-primary font-semibold block uppercase">
                    Credential Scope
                  </span>
                  <p className="text-xs text-mutedGray leading-relaxed font-light">
                    {activeCert.description}
                  </p>
                </div>

                {/* ID code readout */}
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg flex items-center justify-between">
                  <div className="font-orbitron">
                    <span className="text-[8px] text-mutedGray tracking-widest block">CREDENTIAL ID</span>
                    <span className="text-xs text-white font-medium tracking-wide">{activeCert.idCode}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-orbitron text-accent bg-accent/5 px-2 py-1 rounded border border-accent/10">
                    <FiCheck /> SECURE_NODE
                  </div>
                </div>

                {/* Confirm verify link */}
                <a
                  href={activeCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-xs font-orbitron text-white tracking-widest uppercase transition-all duration-300"
                  style={{ backgroundColor: activeCert.color }}
                >
                  Verify at Portal <FiExternalLink />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
