import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPaperPlane,
  FaCheckCircle,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Section from './Section';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await emailjs.send(
        'service_mmi4bv6',
        'template_3b38gw5',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'SWmkpZsA2dci4_kln'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('idle');
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <Section id="contact" className="bg-slate-50 dark:bg-[#0b0f1a] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                Get in <span className="text-blue-600 italic">Touch</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I’m always open to discussing new opportunities, collaborations,
                or technical challenges. Whether you’re hiring, building, or
                brainstorming — feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <FaEnvelope />,
                  label: 'Email',
                  value: 'tusharsingh7705@gmail.com',
                  link: 'mailto:tusharsingh7705@gmail.com'
                },
                {
                  icon: <FaLinkedin />,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/tusharsingh77',
                  link: 'https://www.linkedin.com/in/tusharsingh77/'
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: 'Location',
                  value: 'Greater Noida, Uttar Pradesh, India',
                  link: null
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 dark:text-white font-semibold hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white font-semibold">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-slate-800/50 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-14 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-slate-500">
                    Thank you for reaching out. I’ll respond shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your message or opportunity..."
                      className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all ${
                      status === 'submitting'
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
