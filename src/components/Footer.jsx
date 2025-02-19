import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram , FaInstagram } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/raunak-garhwal', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/raunak-garhwal', label: 'LinkedIn' },
    { icon: FaTelegram , href: 'https://t.me/raunak_garhwal', label: 'Telegram' },
    { icon: BiLogoGmail, href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=raunakgarhwal2003@gmail.com', label: 'Email' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/Raunak_Garhwal', label: 'LeetCode' }
  ];

  return (
    <footer className="bg-[#050b15]/90 backdrop-blur-sm mt-8 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-300 transition-colors"
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </div>
          <motion.div 
            className="text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            © {new Date().getFullYear()} Raunak Garhwal. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;