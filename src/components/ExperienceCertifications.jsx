import { motion } from 'framer-motion';
import { SiCisco, SiInfosys } from 'react-icons/si';
import { FaMicrosoft, FaJava } from 'react-icons/fa';
import { FiArrowRight, FiAward } from 'react-icons/fi';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';
import Magnetic from './Magnetic';

export default function ExperienceCertifications() {
  const shinobiLeadership = [
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
      color: "#818CF8"
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
    <section id="experience-certifications" className="relative py-24 border-b-2 border-slate-200">
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
                className="text-2xl md:text-4xl font-black font-fredoka uppercase tracking-wide inline-block text-[#3B82F6]"
              >
                <TextReveal text="Experience & Leadership" />
              </motion.h2>
            </div>

            <div className="space-y-6 relative pl-4 border-l-3 border-slate-200">
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
                    className="absolute -left-[27px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: event.color }}
                  />

                  <TiltCard className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="p-6 text-slate-800">
                      <span className="font-fredoka text-[9px] font-bold uppercase tracking-wider block mb-1 text-slate-500">
                        LEADERSHIP & ENGAGEMENT
                      </span>
                      <h3 className="text-lg font-black font-fredoka uppercase leading-tight text-slate-800">
                        {event.role}
                      </h3>
                      <p className="text-xs font-fredoka font-bold text-[#3B82F6]">
                        {event.event}
                      </p>
                      <p className="text-xs leading-relaxed font-medium mt-2 text-slate-600">
                        {event.scope}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {event.bullets.map((b, idx) => (
                          <span 
                            key={idx}
                            className="text-[9px] font-fredoka font-bold px-2 py-0.5 rounded text-slate-700 bg-slate-100 border border-slate-200"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
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
                className="text-2xl md:text-4xl font-black font-fredoka uppercase tracking-wide inline-block text-[#3B82F6]"
              >
                <TextReveal text="Professional Certifications" />
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
                    className="w-full h-full"
                  >
                    <TiltCard className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="p-5 flex flex-col justify-between h-full min-h-[140px] text-slate-800">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold bg-white border border-slate-200 shadow-sm"
                          style={{ color: cert.color }}
                        >
                          <CertIcon />
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="font-fredoka font-bold text-xs leading-tight text-slate-800">
                            {cert.name}
                          </h4>
                          <p className="text-[9px] font-fredoka font-bold mt-1 uppercase tracking-wider flex items-center gap-1 text-slate-500">
                            <FiAward className="text-[#3B82F6] text-sm" /> {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
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
          className="mt-12 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group bg-slate-50 border border-slate-200 shadow-md"
        >
          <div className="space-y-2 z-10 text-center md:text-left">
            <span className="font-fredoka text-xs font-bold text-[#3B82F6] tracking-wider uppercase block">
              INTERNSHIP STATUS
            </span>
            <h3 className="text-2xl font-black font-fredoka uppercase text-slate-800">
              Ready for Frontend & UI/UX Internships
            </h3>
            <p className="text-sm max-w-2xl font-medium leading-relaxed text-slate-600">
              Seeking Frontend Developer or UI/UX Design internships where I can apply my React, Figma, and design thinking skills to craft intuitive, user-centered digital interfaces.
            </p>
          </div>
          <Magnetic>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-fredoka font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap z-10"
            >
              Get in Touch <FiArrowRight className="text-base" />
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
