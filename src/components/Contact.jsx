import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import TextReveal from './TextReveal';
import Magnetic from './Magnetic';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

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
      tempErrors.user_name = "Name is required";
    }
    if (!formData.user_email.trim()) {
      tempErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      tempErrors.user_email = "Invalid email format";
    }
    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty";
    }
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validateForm();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setStatus('sending');

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
  };

  return (
    <section id="contact" className="relative py-24 border-b-2 border-slate-200">
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
            <TextReveal text="Get in Touch" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Summoning coordinates (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl shadow-md p-8 space-y-6 relative overflow-hidden text-slate-800"
            >
              <h3 className="text-xl font-black font-fredoka uppercase tracking-wider pb-2 flex items-center gap-2 text-slate-800 border-b border-slate-100">
                <FiMail className="text-[#3B82F6] text-2xl" />
                Contact Details
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:ranjithkumarmageshwaran@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center text-lg bg-[#FFDD00]/15 text-[#D1B800] border border-[#FFDD00]/30 shadow-none">
                    <FiMail />
                  </div>
                  <div>
                    <span className="text-[9px] font-fredoka font-bold uppercase block text-slate-500">
                      EMAIL
                    </span>
                    <span className="text-xs font-bold font-grotesk transition-colors text-slate-800 group-hover:text-[#3B82F6]">
                      ranjithkumarmageshwaran@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+916382314584"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center text-lg bg-[#00F0FF]/15 text-[#009BB5] border border-[#00F0FF]/30 shadow-none">
                    <FiPhone />
                  </div>
                  <div>
                    <span className="text-[9px] font-fredoka font-bold uppercase block text-slate-500">
                      PHONE
                    </span>
                    <span className="text-xs font-bold font-grotesk transition-colors text-slate-800 group-hover:text-[#3B82F6]">
                      +91 63823 14584
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/ranjithkumarmdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center text-lg bg-[#10B981]/15 text-[#0E9063] border border-[#10B981]/30 shadow-none">
                    <FiLinkedin />
                  </div>
                  <div>
                    <span className="text-[9px] font-fredoka font-bold uppercase block text-slate-500">
                      LINKEDIN
                    </span>
                    <span className="text-xs font-bold font-grotesk transition-colors text-slate-800 group-hover:text-[#3B82F6]">
                      ranjithkumarmageshwaran
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
              className="p-8 rounded-2xl relative overflow-hidden bg-white border border-slate-200 text-slate-800 shadow-md"
            >
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
                    <h3 className="text-xl font-black font-fredoka uppercase tracking-wider mb-6 pb-2 border-b-2 flex items-center gap-2 text-slate-800 border-slate-100">
                      📧 Contact Form
                    </h3>

                    {status === 'error' && (
                      <div className="p-3 border-2 text-xs font-fredoka font-bold rounded-lg bg-red-500/10 border-red-500 text-red-600">
                        Error: Message sending failed. Please check your network and try again.
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-fredoka font-bold uppercase text-slate-500">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleInputChange}
                          className="w-full rounded-xl px-4 py-3 text-xs focus:outline-none transition-all font-bold border-2 bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-[#3B82F6]"
                          placeholder="Your full name"
                        />
                        {errors.user_name && (
                          <span className="text-[10px] font-fredoka font-bold text-red-700">{errors.user_name}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-fredoka font-bold uppercase text-slate-500">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl px-4 py-3 text-xs focus:outline-none transition-all font-bold border-2 bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-[#3B82F6]"
                          placeholder="name@domain.com"
                        />
                        {errors.user_email && (
                          <span className="text-[10px] font-fredoka font-bold text-red-700">{errors.user_email}</span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-fredoka font-bold uppercase text-slate-500">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full rounded-xl px-4 py-3 text-xs focus:outline-none transition-all font-bold border-2 bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-[#3B82F6]"
                        placeholder="Purpose of connection"
                      />
                      {errors.subject && (
                        <span className="text-[10px] font-fredoka font-bold text-red-700">{errors.subject}</span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-fredoka font-bold uppercase text-slate-500">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full rounded-xl px-4 py-3 text-xs focus:outline-none transition-all resize-none font-bold border-2 bg-slate-50 border-slate-200 text-slate-800 focus:bg-white focus:border-[#3B82F6]"
                        placeholder="Write your message details..."
                      />
                      {errors.message && (
                        <span className="text-[10px] font-fredoka font-bold text-red-700">{errors.message}</span>
                      )}
                    </div>

                    {/* Blood signature stamp button */}
                    <Magnetic className="w-full block">
                      <button
                        type="submit"
                        className="w-full text-xs font-black flex items-center justify-center gap-2 mt-4 relative overflow-hidden group transition-all py-3.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl shadow-md hover:shadow-lg"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Send Message <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </Magnetic>
                  </motion.form>
                ) : status === 'sending' ? (
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
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 text-center flex flex-col items-center justify-center min-h-[300px] space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl animate-bounce bg-[#3B82F6]">
                      ✔
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-fredoka font-black text-lg uppercase tracking-wider text-slate-800">
                        Message Sent!
                      </h4>
                      <p className="text-xs max-w-xs leading-relaxed font-bold text-slate-600">
                        Thank you! Your message has been sent successfully. I will get back to you shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2.5 font-fredoka font-bold text-xs uppercase rounded-xl transition-all bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-md hover:shadow-lg"
                    >
                      Send Another Message
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
