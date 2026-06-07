import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiTarget, FiZap, FiUserCheck, FiTrello, FiAward } from 'react-icons/fi';

function AchievementMetric({ item, index }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const Icon = item.icon;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = item.targetValue;
      if (start === end) {
        setValue(end);
        return;
      }

      const totalDuration = 1500; // 1.5s
      const steps = end;
      const stepTime = Math.max(Math.floor(totalDuration / steps), 30);

      const timer = setInterval(() => {
        start += 1;
        setValue(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, item.targetValue]);

  // SVG parameters for radial progress circle
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / item.maxScale) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-xl border border-white/5 hover:border-accent/20 transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
    >
      <div className="space-y-2.5 z-10">
        <div className="text-2xl text-accent group-hover:scale-110 transition-transform duration-300">
          <Icon />
        </div>
        <div>
          <h4 className="text-white font-orbitron text-sm font-bold tracking-wide leading-tight group-hover:text-accent transition-colors">
            {item.title}
          </h4>
          <p className="text-[10px] text-mutedGray tracking-wider font-orbitron mt-1">
            {item.label}
          </p>
        </div>
      </div>

      {/* Futuristic Radial Progress Counter */}
      <div className="relative flex items-center justify-center w-20 h-20">
        <svg className="w-full h-full transform -rotate-90">
          {/* Inner grey rail */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            className="stroke-white/5"
            strokeWidth="3.5"
            fill="transparent"
          />
          {/* Glowing active progress bar */}
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            className="stroke-accent"
            strokeWidth="3.5"
            fill="transparent"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            strokeLinecap="round"
            style={{ filter: 'drop-shadow(0px 0px 4px rgba(0, 255, 163, 0.4))' }}
          />
        </svg>
        {/* Count value in center */}
        <div className="absolute inset-0 flex items-center justify-center font-orbitron text-xs font-black text-white">
          {value}{item.suffix}
        </div>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const achievementsList = [
    {
      title: "Academic Journey",
      label: "B.SC COMPUTER SCIENCE",
      targetValue: 100,
      maxScale: 100,
      suffix: "%",
      icon: FiTarget
    },
    {
      title: "Leadership Scope",
      label: "EVENT COORDINATION & ORG",
      targetValue: 2,
      maxScale: 2,
      suffix: "/2",
      icon: FiUserCheck
    },
    {
      title: "Hackathon Trials",
      label: "COLLABORATIVE EXPERIMENTS",
      targetValue: 1,
      maxScale: 1,
      suffix: "",
      icon: FiZap
    },
    {
      title: "Event Coordination",
      label: "KALOMIX OPERATIONS MANAGER",
      targetValue: 1,
      maxScale: 1,
      suffix: "",
      icon: FiTrello
    },
    {
      title: "Tech Milestones",
      label: "ACQUIRED SKILLS & APIS",
      targetValue: 15,
      maxScale: 15,
      suffix: "+",
      icon: FiAward
    }
  ];

  return (
    <section id="achievements" className="relative py-28 border-b border-white/5 bg-white/[0.01]">
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
            <span>[06] // SYSTEM_TELEMETRY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-orbitron uppercase text-white tracking-wider"
          >
            Milestone Metrics
          </motion.h2>
        </div>

        {/* Achievement Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {achievementsList.map((item, index) => (
            <AchievementMetric key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
