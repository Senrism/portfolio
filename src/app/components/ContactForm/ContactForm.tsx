'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:lasenafebry@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 500);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto mt-8"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-white/90 mb-2 font-medium">
            <FaUser className="inline mr-2" />
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white/90 mb-2 font-medium">
            <FaEnvelope className="inline mr-2" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-white/90 mb-2 font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
          placeholder="What's this about?"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-white/90 mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
          placeholder="Tell me about your project or idea..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full md:w-auto px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : submitStatus === 'success' ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Email client opened!</span>
          </>
        ) : (
          <>
            <FaPaperPlane />
            <span>Send Message</span>
          </>
        )}
      </motion.button>

      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-white/80 text-center"
        >
          Your email client should open shortly. If it doesn't, please email me directly at{' '}
          <a href="mailto:lasenafebry@gmail.com" className="underline font-semibold">
            lasenafebry@gmail.com
          </a>
        </motion.p>
      )}
    </motion.form>
  );
}

