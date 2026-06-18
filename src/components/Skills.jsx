import { motion } from 'framer-motion';
import { SiHtml5, SiReact, SiFigma, SiLinux, SiGithub } from 'react-icons/si';
import { FaCss3Alt, FaWindows } from 'react-icons/fa';
import { FiCpu, FiSliders, FiUsers, FiMessageSquare, FiCompass, FiCode } from 'react-icons/fi';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';

export default function Skills() {
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
    <section id="skills" className="relative py-24 border-b-2 border-slate-200">
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
            <TextReveal text="Skills & Expertise" />
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
            className="w-full h-full"
          >
            <TiltCard className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6 relative overflow-hidden group text-slate-800">
                <h3 className="font-fredoka font-black text-lg uppercase tracking-wider mb-6 pb-2 border-b-2 flex items-center justify-between text-slate-800 border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <FiCode className="text-sm text-[#3B82F6]" />
                    Technical Skills
                  </span>
                  <span className="text-[10px] border px-2.5 py-0.5 rounded font-bold bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]">
                    FRONTEND & UI
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
                        className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 bg-slate-50/50 hover:bg-slate-50 hover:border-[#3B82F6] transition-colors cursor-pointer text-xs font-fredoka font-semibold shadow-sm"
                      >
                        <Icon style={{ color: skill.color }} />
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Wind Style Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full h-full"
          >
            <TiltCard className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6 relative overflow-hidden group text-slate-800">
                <h3 className="font-fredoka font-black text-lg uppercase tracking-wider mb-6 pb-2 border-b-2 flex items-center justify-between text-slate-800 border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <FiCpu className="text-sm text-[#3B82F6]" />
                    Platforms & Tools
                  </span>
                  <span className="text-[10px] border px-2.5 py-0.5 rounded font-bold bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]">
                    DEVELOPMENT
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
                        className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 bg-slate-50/50 hover:bg-slate-50 hover:border-[#3B82F6] transition-colors cursor-pointer text-xs font-fredoka font-semibold shadow-sm"
                      >
                        <Icon style={{ color: skill.color }} />
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Lightning Style Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-full"
          >
            <TiltCard className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6 relative overflow-hidden group text-slate-800">
                <h3 className="font-fredoka font-black text-lg uppercase tracking-wider mb-6 pb-2 border-b-2 flex items-center justify-between text-slate-800 border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <FiUsers className="text-sm text-[#3B82F6]" />
                    Tactical & Soft Skills
                  </span>
                  <span className="text-[10px] border px-2.5 py-0.5 rounded font-bold bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]">
                    INTERPERSONAL
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
                        className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 bg-slate-50/50 hover:bg-slate-50 hover:border-[#3B82F6] transition-colors cursor-pointer text-xs font-fredoka font-semibold shadow-sm"
                      >
                        <Icon style={{ color: skill.color }} />
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
