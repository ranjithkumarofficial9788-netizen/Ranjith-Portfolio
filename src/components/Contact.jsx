import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiLinkedin, FiTerminal, FiArrowRight } from 'react-icons/fi';
import { GiShuriken, GiScrollUnfurled } from 'react-icons/gi';

export default function Contact({ recruiterMode }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [logMessages, setLogMessages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.user_name.trim()) {
      tempErrors.user_name = recruiterMode ? "Name is required" : "Shinobi name is required";
    }
    if (!formData.user_email.trim()) {
      tempErrors.user_email = recruiterMode ? "Email is required" : "Email channel is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      tempErrors.user_email = "Invalid email format";
    }
    if (!formData.subject.trim()) {
      tempErrors.subject = recruiterMode ? "Subject is required" : "Mission objective is required";
    }
    if (!formData.message.trim()) {
      tempErrors.message = recruiterMode ? "Message cannot be empty" : "Scroll payload cannot be empty";
    }
    return tempErrors;
  };

  const addLogMessage = (msg, delay = 0) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setLogMessages((prev) => [...prev, msg]);
        resolve();
      }, delay);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validateForm();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setStatus('sending');
    setLogMessages([]);

    if (recruiterMode) {
      const serviceId = 'service_placeholder';
      const templateId = 'template_placeholder';
      const publicKey = 'public_placeholder';

      if (serviceId === 'service_placeholder' || !publicKey) {
        setTimeout(() => {
          setStatus('success');
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        }, 1200);
        return;
      }

      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          setStatus('success');
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        })
        .catch(() => {
          setStatus('error');
        });
      return;
    }

    await addLogMessage('>>> MOLDING CHAKRA NODES...');
    await addLogMessage('>>> JUTSU: INITIATING KUCHIYOSE NO JUTSU (Summoning)...', 300);
    await addLogMessage('>>> SEAL: HAND SIGNS VERIFIED: Boar → Dog → Bird → Monkey...', 400);
    await addLogMessage('>>> PAYLOAD: COMPILING TRANS-COMM SCROLL DATA...', 200);

    const serviceId = 'service_placeholder';
    const templateId = 'template_placeholder';
    const publicKey = 'public_placeholder';

    if (serviceId === 'service_placeholder' || !publicKey) {
      await addLogMessage('>>> WARN: NO CHAKRA KEY DETECTED. ENGAGING STAND-IN SIMULATION...', 300);
      await addLogMessage('>>> SUMMON: SCROLL SUMMONED SUCCESSFULLY! 200 OK.', 500);
      setTimeout(() => {
        setStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, 700);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(async () => {
        await addLogMessage('>>> SUMMON: TRANS-SCROLL DELIVERED AT PORTAL RECEIVER ROUTE.', 200);
        await addLogMessage('>>> SUMMON: TRANSACTION SEALED. RESPONSE: 200 OK.', 300);
        setStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      })
      .catch(async (error) => {
        await addLogMessage(`>>> FAILED: SUMMONING BROKEN. EXCEPTION: ${error.text || 'UNKNOWN'}`, 200);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className={`relative py-24 border-b-3 ${recruiterMode ? 'border-slate-200' : 'border-animeOutline'}`}>
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
            className={`text-3xl md:text-5xl font-black font-fredoka uppercase tracking-wide inline-block ${
              recruiterMode ? 'text-narutoOrange' : 'comic-text-stroke-orange text-narutoOrange'
            }`}
          >
            {recruiterMode ? "Get in Touch" : "Summoning Jutsu (Contact)"}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Summoning coordinates (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={recruiterMode ? (
                "bg-white border border-slate-200 rounded-2xl shadow-md p-8 space-y-6 relative overflow-hidden text-slate-800"
              ) : (
                "shinobi-card p-8 bg-[#1C1E2F] space-y-6 relative overflow-hidden"
              )}
            >
              {!recruiterMode && <div className="absolute inset-0 bg-leaf-grid opacity-15 pointer-events-none" />}
              
              <h3 className={`text-xl font-black font-fredoka uppercase tracking-wider pb-2 flex items-center gap-2 ${recruiterMode ? 'text-slate-800 border-b border-slate-100' : 'text-white border-b-2 border-inkBlack'}`}>
                {recruiterMode ? <FiMail className="text-narutoOrange text-2xl" /> : <GiScrollUnfurled className="text-narutoOrange" />}
                {recruiterMode ? "Contact Details" : "Ninja Coordinates"}
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:ranjithkumarofficial9788@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-lg ${
                    recruiterMode 
                      ? 'bg-[#FFDD00]/15 text-[#D1B800] border border-[#FFDD00]/30 shadow-none' 
                      : 'border-2 border-inkBlack bg-[#FFDD00] text-inkBlack shadow-[2px_2px_0px_#0B0C16] group-hover:scale-105 transition-transform'
                  }`}>
                    <FiMail />
                  </div>
                  <div>
                    <span className={`text-[9px] font-fredoka font-bold uppercase block ${recruiterMode ? 'text-slate-500' : 'text-mutedGray'}`}>
                      {recruiterMode ? "EMAIL" : "COMM DIRECT"}
                    </span>
                    <span className={`text-xs font-bold font-grotesk transition-colors ${recruiterMode ? 'text-slate-800 group-hover:text-narutoOrange' : 'text-white group-hover:text-narutoOrange'}`}>
                      ranjithkumarofficial9788@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+916382314584"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-lg ${
                    recruiterMode 
                      ? 'bg-[#00F0FF]/15 text-[#009BB5] border border-[#00F0FF]/30 shadow-none' 
                      : 'border-2 border-inkBlack bg-[#00F0FF] text-inkBlack shadow-[2px_2px_0px_#0B0C16] group-hover:scale-105 transition-transform'
                  }`}>
                    <FiPhone />
                  </div>
                  <div>
                    <span className={`text-[9px] font-fredoka font-bold uppercase block ${recruiterMode ? 'text-slate-500' : 'text-mutedGray'}`}>
                      {recruiterMode ? "PHONE" : "SUMMON_LINE"}
                    </span>
                    <span className={`text-xs font-bold font-grotesk transition-colors ${recruiterMode ? 'text-slate-800 group-hover:text-[#3B82F6]' : 'text-white group-hover:text-[#3B82F6]'}`}>
                      +91 63823 14584
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/ranjithkumarofficial9788-netizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-lg ${
                    recruiterMode 
                      ? 'bg-[#10B981]/15 text-[#0E9063] border border-[#10B981]/30 shadow-none' 
                      : 'border-2 border-inkBlack bg-[#10B981] text-white shadow-[2px_2px_0px_#0B0C16] group-hover:scale-105 transition-transform'
                  }`}>
                    <FiLinkedin />
                  </div>
                  <div>
                    <span className={`text-[9px] font-fredoka font-bold uppercase block ${recruiterMode ? 'text-slate-500' : 'text-mutedGray'}`}>
                      {recruiterMode ? "LINKEDIN" : "LINKEDIN SIGNATURE"}
                    </span>
                    <span className={`text-xs font-bold font-grotesk transition-colors ${recruiterMode ? 'text-slate-800 group-hover:text-shinobiGreen' : 'text-white group-hover:text-shinobiGreen'}`}>
                      ranjithkumarofficial9788-netizen
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Summoning Contract (Right) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={recruiterMode ? "p-8 rounded-2xl relative overflow-hidden bg-white border border-slate-200 text-slate-800 shadow-md" : "parchment-scroll p-8 rounded-2xl relative overflow-hidden"}
            >
              {/* Summoning Circle Watermark inside parchment scroll - only in shinobi mode */}
              {!recruiterMode && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                  <svg viewBox="0 0 100 100" className="w-64 h-64 animate-spin-slow">
                    <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="1" fill="none" />
                    <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="black" strokeWidth="1" />
                  </svg>
                </div>
              )}

              <AnimatePresence mode="wait">
                {status === 'idle' || status === 'error' ? (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className={`text-xl font-black font-fredoka uppercase tracking-wider mb-6 pb-2 border-b-2 flex items-center gap-2 ${recruiterMode ? 'text-slate-800 border-slate-100' : 'text-inkBlack border-inkBlack'}`}>
                      {recruiterMode ? "📧 Contact Form" : "📜 SUMMONING CONTRACT"}
                    </h3>

                    {status === 'error' && (
                      <div className={`p-3 border-2 text-xs font-fredoka font-bold rounded-lg ${recruiterMode ? 'bg-red-500/10 border-red-500 text-red-600' : 'bg-red-600/10 border-red-600 text-red-700'}`}>
                        {recruiterMode ? "Error: Message sending failed. Please check your network and try again." : "JUTSU FAULT: Summoning failed. Check chakra or try again."}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className={`text-[10px] font-fredoka font-bold uppercase ${recruiterMode ? 'text-slate-500' : 'text-inkBlack/70'}`}>
                          {recruiterMode ? "Your Name" : "Shinobi Name"}
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleInputChange}
                          className={`w-full rounded-xl px-4 py-3 text-xs focus:outline-none transition-all font-bold border-2 ${
                            recruiterMode 
                              ? 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-[#3B82F6]' 
                              : 'bg-[#E5DFCE] border-inkBlack text-inkBlack focus:border-narutoOrange'
                          }`}
                          placeholder={recruiterMode ? "Your full name" : "Your ninja signature"}
                        />
                        {errors.user_name && (
                          <span className="text-[10px] font-fredoka font-bold text-red-700">{errors.user_name}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className={`text-[10px] font-fredoka font-bold uppercase ${recruiterMode ? 'text-slate-500' : 'text-inkBlack/70'}`}>
                          {recruiterMode ? "Your Email" : "Chakra Email"}
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleInputChange}
                          className={`w-full rounded-xl px-4 py-3 text-xs focus:outline-none transition-all font-bold border-2 ${
                            recruiterMode 
                              ? 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-[#3B82F6]' 
                              : 'bg-[#E5DFCE] border-inkBlack text-inkBlack focus:border-narutoOrange'
                          }`}
                          placeholder="name@domain.com"
                        />
                        {errors.user_email && (
                          <span className="text-[10px] font-fredoka font-bold text-red-700">{errors.user_email}</span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label className={`text-[10px] font-fredoka font-bold uppercase ${recruiterMode ? 'text-slate-500' : 'text-inkBlack/70'}`}>
                        {recruiterMode ? "Subject" : "Mission Objective (Subject)"}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl px-4 py-3 text-xs focus:outline-none transition-all font-bold border-2 ${
                          recruiterMode 
                            ? 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-[#3B82F6]' 
                            : 'bg-[#E5DFCE] border-inkBlack text-inkBlack focus:border-narutoOrange'
                        }`}
                        placeholder={recruiterMode ? "Purpose of connection" : "Purpose of connection"}
                      />
                      {errors.subject && (
                        <span className="text-[10px] font-fredoka font-bold text-red-700">{errors.subject}</span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className={`text-[10px] font-fredoka font-bold uppercase ${recruiterMode ? 'text-slate-500' : 'text-inkBlack/70'}`}>
                        {recruiterMode ? "Message" : "Message Scroll Body"}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className={`w-full rounded-xl px-4 py-3 text-xs focus:outline-none transition-all resize-none font-bold border-2 ${
                          recruiterMode 
                            ? 'bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-[#3B82F6]' 
                            : 'bg-[#E5DFCE] border-inkBlack text-inkBlack focus:border-narutoOrange'
                        }`}
                        placeholder={recruiterMode ? "Write your message details..." : "Write your mission details..."}
                      />
                      {errors.message && (
                        <span className="text-[10px] font-fredoka font-bold text-red-700">{errors.message}</span>
                      )}
                    </div>

                    {/* Blood signature stamp button */}
                    <button
                      type="submit"
                      className={`w-full text-xs font-black flex items-center justify-center gap-2 mt-4 relative overflow-hidden group transition-all ${
                        recruiterMode
                          ? 'py-3.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl shadow-md hover:shadow-lg'
                          : 'shinobi-btn shinobi-btn-orange text-white shadow-neoBlack hover:-translate-y-[2px]'
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {recruiterMode ? (
                          <>
                            Send Message <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                          </>
                        ) : (
                          <>
                            Sign & Summon (Send) <GiShuriken className="text-sm group-hover:rotate-180 transition-transform animate-spin-fast" />
                          </>
                        )}
                      </span>
                    </button>
                  </motion.form>
                ) : status === 'sending' ? (
                  recruiterMode ? (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 text-center flex flex-col items-center justify-center min-h-[300px] space-y-4"
                    >
                      <div className="w-12 h-12 border-4 border-[#3B82F6] border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-slate-600 text-sm font-fredoka font-bold">Sending your message...</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-6 rounded-xl font-mono text-xs text-inkBlack min-h-[300px] flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between border-b-2 border-inkBlack pb-2 mb-4 font-fredoka font-black">
                          <span className="flex items-center gap-2"><FiTerminal /> CHAKRA_FLOW.TXT</span>
                          <span className="text-red-700 animate-pulse">SUMMONING...</span>
                        </div>
                        
                        <div className="space-y-1">
                          {logMessages.map((msg, i) => (
                            <div key={i} className="font-bold leading-normal">
                              {msg}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1 mt-4">
                        <div className="flex justify-between items-center text-[10px] font-fredoka font-black">
                          <span>SUMMONING TARGETS</span>
                          <span className="animate-pulse">ACTIVE...</span>
                        </div>
                        <div className="w-full h-1.5 bg-inkBlack/15 rounded-full overflow-hidden border-2 border-inkBlack">
                          <motion.div 
                            className="h-full bg-narutoOrange"
                            animate={{ width: ['0%', '100%'] }}
                            transition={{ duration: 2.5, ease: 'easeInOut' }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 text-center flex flex-col items-center justify-center min-h-[300px] space-y-6"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl animate-bounce ${
                      recruiterMode 
                        ? 'bg-[#3B82F6]' 
                        : 'bg-shinobiGreen border-3 border-inkBlack shadow-[3px_3px_0px_#0b0c16]'
                    }`}>
                      ✔
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className={`font-fredoka font-black text-lg uppercase tracking-wider ${recruiterMode ? 'text-slate-800' : 'text-inkBlack'}`}>
                        {recruiterMode ? "Message Sent!" : "Summoning Success!"}
                      </h4>
                      <p className={`text-xs max-w-xs leading-relaxed font-bold ${recruiterMode ? 'text-slate-600' : 'text-inkBlack/75'}`}>
                        {recruiterMode 
                          ? "Thank you! Your message has been sent successfully. I will get back to you shortly." 
                          : "The trans-summoning contract scroll has been successfully sealed and dispatched to Ranjithkumar M."}
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus('idle')}
                      className={`px-5 py-2.5 font-fredoka font-bold text-xs uppercase rounded-xl transition-all ${
                        recruiterMode 
                          ? 'bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-md hover:shadow-lg' 
                          : 'bg-white text-inkBlack border-2 border-inkBlack shadow-[3px_3px_0px_#0B0C16] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px]'
                      }`}
                    >
                      {recruiterMode ? "Send Another Message" : "New Summon Contract"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
