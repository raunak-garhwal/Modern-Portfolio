import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto relative p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none rounded-2xl" />
      
      <h1 className="section-heading text-center">Contact Me</h1>
      <motion.form
        action="https://formspree.io/f/xjkgjpgl"
        method='POST'
        className="space-y-6 relative"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <label htmlFor="name" className="block text-slate-300 pl-2 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-slate-300 pl-2 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-slate-300 pl-2 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="contact-input"
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;