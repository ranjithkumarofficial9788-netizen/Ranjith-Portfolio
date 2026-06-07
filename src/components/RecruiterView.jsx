import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, FiPhone, FiLinkedin, FiGithub, FiDownload, 
  FiMapPin, FiBriefcase, FiAward, FiBookOpen, FiCode, 
  FiCheckCircle, FiGlobe, FiCpu, FiUsers, FiExternalLink
} from 'react-icons/fi';

export default function RecruiterView({ setRecruiterMode }) {
  const contactInfo = {
    email: "ranjithkumarofficial9788@gmail.com",
    phone: "6382314584",
    linkedin: "https://linkedin.com/in/ranjithkumarofficial9788-netizen",
    github: "https://github.com",
    address: "Coimbatore, Tamil Nadu, India"
  };

  const objective = "Motivated B.Sc. Computer Science student with a strong foundation in frontend technologies and a growing passion for UI/UX design. Experienced in building responsive web interfaces using React.js, HTML5, and CSS3, with a keen eye for clean, user-centred design. Eager to apply design thinking, problem-solving, and full-stack knowledge to craft intuitive digital experiences as part of a forward-thinking product team.";

  const skills = [
    { category: "Technical Skills", list: ["HTML5", "CSS3", "React Js", "Figma", "Stitch"], color: "#FF6700" },
    { category: "Platforms & Tools", list: ["Linux", "Windows", "VS Code", "Git & GitHub"], color: "#00F0FF" },
    { category: "Soft Skills", list: ["Problem Solving", "Decision Making", "Team Building", "Public Speaking"], color: "#10B981" }
  ];

  const education = [
    {
      degree: "B.Sc. Computer Science",
      institution: "Rathinam College of Arts & Science",
      duration: "2024 - 2027",
      score: "CGPA: 6.6",
      desc: "Deep diving into algorithms, software systems, and modern frontend application development."
    },
    {
      degree: "HSC (Class XII)",
      institution: "TNGR Memorial Hr Sec School",
      duration: "Completed 2024",
      score: "Score: 63.8%",
      desc: "Focus on mathematical reasoning, physics, and computer science basics."
    },
    {
      degree: "SSLC (Class X)",
      institution: "TNGR Memorial Hr Sec School",
      duration: "Completed 2022",
      score: "Score: 59.8%",
      desc: "General secondary school education, establishing logical foundations."
    }
  ];

  const projects = [
    {
      title: "Kural Isai (AI Powered Music Learning Hub)",
      subtitle: "Personal Project",
      tech: ["React.js", "AI APIs", "CSS Modules"],
      bullets: [
        "Designed and developed Kural Isai, an AI-powered Music Learning Hub that delivers personalized learning paths, lesson recommendations, and practice exercises based on user skill level and progress.",
        "Built an interactive and responsive user interface using React.js, ensuring an engaging, accessible, and seamless music learning experience across devices."
      ]
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "Personal Project",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      bullets: [
        "Designed and built a personal portfolio to showcase projects and skills, with a focus on visual hierarchy and UX best practices.",
        "Used React.js and custom CSS animations to deliver a polished, interactive browsing experience."
      ]
    }
  ];

  const leadership = [
    {
      role: "Technical Team Lead",
      project: "Hackathon Project",
      desc: "Assumed engineering director roles, aligning code frameworks and building fully functional prototypes under pressure."
    },
    {
      role: "Event Manager",
      project: "Kalomix-2025 // Rathinam College",
      desc: "Contributed as Event Manager for Kalomix-2025 Organized by Raise Smart. Spearheaded management operations and team coordination."
    }
  ];

  const certifications = [
    { name: "Python Essentials", issuer: "Cisco Networking Academy" },
    { name: "Introduction to Python Programming", issuer: "Infosys Springboard" },
    { name: "Introduction To Networking and Cloud Computing", issuer: "Microsoft" },
    { name: "Foundations Of Java Programming", issuer: "Oracle Academy" }
  ];

  return (
    <div className="min-h-screen bg-[#0B0C16] text-white pt-28 pb-16 px-6 md:px-12 font-sans selection:bg-[#FF6700] selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Recruiter Banner Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#1A1C2B] border border-[#2A2E45] rounded-2xl shadow-xl">
          <div className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-[#0B0C16] animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-mutedGray">
              RECRUITER PORTFOLIO ENABLED
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="/Ranjithkumar resume.pdf"
              download="Ranjithkumar_Resume.pdf"
              className="px-4 py-2 bg-[#FF6700] hover:bg-[#FF8533] border-2 border-inkBlack rounded-xl font-fredoka font-black text-xs uppercase tracking-wide shadow-[2.5px_2.5px_0px_#0B0C16] transition-all flex items-center gap-2 hover:-translate-x-[1.5px] hover:-translate-y-[1.5px]"
            >
              <FiDownload /> Download PDF Resume
            </a>
            <button
              onClick={() => setRecruiterMode(false)}
              className="px-4 py-2 bg-[#00F0FF] hover:bg-[#4CF5FF] text-inkBlack border-2 border-inkBlack rounded-xl font-fredoka font-black text-xs uppercase tracking-wide shadow-[2.5px_2.5px_0px_#0B0C16] transition-all flex items-center gap-2 hover:-translate-x-[1.5px] hover:-translate-y-[1.5px]"
            >
              🌀 Switch to Shinobi Mode
            </button>
          </div>
        </div>

        {/* Portfolio Hero Header */}
        <div className="text-center py-8 space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black font-fredoka uppercase text-[#FF6700] tracking-tight">
            Ranjithkumar M
          </h1>
          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white/95">
            Frontend Developer & UI/UX Design Enthusiast
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
            {objective}
          </p>
          
          {/* Quick Contacts Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold pt-4">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 px-3 py-2 bg-[#1A1C2B] rounded-xl border border-[#2A2E45] hover:border-[#FF6700] transition-colors">
              <FiMail className="text-[#FF6700]" />
              <span>{contactInfo.email}</span>
            </a>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 px-3 py-2 bg-[#1A1C2B] rounded-xl border border-[#2A2E45] hover:border-[#00F0FF] transition-colors">
              <FiPhone className="text-[#00F0FF]" />
              <span>+91 {contactInfo.phone}</span>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-[#1A1C2B] rounded-xl border border-[#2A2E45] hover:border-emerald-500 transition-colors">
              <FiLinkedin className="text-emerald-500" />
              <span>LinkedIn</span>
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-[#1A1C2B] rounded-xl border border-[#2A2E45] hover:border-white transition-colors">
              <FiGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Simple Portfolio Layout Section by Section */}
        
        {/* Projects Section */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-black font-fredoka uppercase tracking-wide text-[#00F0FF] border-b-2 border-[#2A2E45] pb-2">
            Completed Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="p-6 bg-[#1A1C2B] border-2 border-[#2A2E45] rounded-2xl shadow-xl flex flex-col justify-between space-y-4 hover:border-[#00F0FF] transition-colors">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-black text-lg text-white uppercase tracking-tight">
                      {project.title}
                    </h4>
                    <span className="text-[9px] font-bold text-mutedGray uppercase bg-[#0B0C16] border border-[#2A2E45] px-2 py-0.5 rounded">
                      {project.subtitle}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs text-white/80 list-disc pl-4 leading-relaxed font-medium">
                    {project.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] bg-[#0B0C16] text-[#00F0FF] border border-[#2A2E45] px-2.5 py-0.5 rounded font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-black font-fredoka uppercase tracking-wide text-[#FF6700] border-b-2 border-[#2A2E45] pb-2">
            Skillsets & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-6 bg-[#1A1C2B] border-2 border-[#2A2E45] rounded-2xl shadow-xl space-y-4">
                <h4 className="font-black text-sm uppercase tracking-wider flex items-center gap-2" style={{ color: skillGroup.color }}>
                  <FiCode /> {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.list.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-[#0B0C16] border border-[#2A2E45] text-xs font-semibold rounded-lg hover:border-white transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Leadership Section */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-black font-fredoka uppercase tracking-wide text-white border-b-2 border-[#2A2E45] pb-2">
            Experience & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#1A1C2B] border-2 border-[#2A2E45] rounded-2xl shadow-xl space-y-3 hover:border-[#FF6700] transition-colors relative overflow-hidden">
                <div className="flex justify-between items-center border-b border-[#2A2E45]/80 pb-2">
                  <h4 className="font-black text-sm md:text-base text-[#FF6700] uppercase">
                    {item.role}
                  </h4>
                  <span className="text-[10px] bg-[#0B0C16] text-[#00F0FF] border border-[#2A2E45] px-2 py-0.5 rounded font-bold">
                    {item.project}
                  </span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Chronicles */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-black font-fredoka uppercase tracking-wide text-[#00F0FF] border-b-2 border-[#2A2E45] pb-2">
              Education Timeline
            </h3>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="p-5 bg-[#1A1C2B] border border-[#2A2E45] rounded-2xl shadow-md flex justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-black text-sm text-white uppercase leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-[10px] text-mutedGray font-bold flex items-center gap-1.5">
                      <FiBookOpen className="text-[#00F0FF]" /> {edu.institution}
                    </p>
                    <p className="text-[11px] text-white/70 font-medium leading-relaxed pt-1">
                      {edu.desc}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between flex-shrink-0 text-right">
                    <span className="px-2 py-0.5 bg-[#FF6700] text-white text-[9px] font-fredoka font-black rounded">
                      {edu.duration}
                    </span>
                    <span className="px-2 py-0.5 bg-[#00F0FF] text-inkBlack text-[9px] font-fredoka font-black rounded">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Scrolls */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-black font-fredoka uppercase tracking-wide text-[#FF6700] border-b-2 border-[#2A2E45] pb-2">
              Mastery Certificates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-5 bg-[#1A1C2B] border border-[#2A2E45] rounded-2xl shadow-md flex items-center gap-3 hover:border-[#FF6700] transition-colors">
                  <div className="text-[#FF6700] text-xl flex-shrink-0">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-[10px] text-mutedGray font-bold mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Linguistic telemetry & Hobbies banner inside right column */}
            <div className="p-5 bg-[#1A1C2B] border border-[#2A2E45] rounded-2xl shadow-md space-y-4">
              <h4 className="font-black text-xs uppercase text-[#00F0FF] tracking-wider border-b border-[#2A2E45]/80 pb-1.5">
                Languages & Communication
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                <div>
                  <span className="text-mutedGray block text-[9px] uppercase">Tamil</span>
                  <span className="text-[#FF6700]">Native Tongue</span>
                </div>
                <div>
                  <span className="text-mutedGray block text-[9px] uppercase">English</span>
                  <span className="text-[#00F0FF]">Professional Fluent</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
