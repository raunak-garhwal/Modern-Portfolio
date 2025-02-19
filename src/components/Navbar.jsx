import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      className="sticky top-0 bg-[#050b15]/90 backdrop-blur-sm z-50 py-4 border-b border-teal-900/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold text-teal-400"
            whileHover={{ scale: 1.05 }}
          >
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-3xl"></span>
              <span className="hidden sm:block">{`<Raunak/>`}</span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/resume" className="nav-link">Resume</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center space-y-4 py-4">
                <NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/about" className="nav-link" onClick={toggleMenu}>About</NavLink>
                <NavLink to="/projects" className="nav-link" onClick={toggleMenu}>Projects</NavLink>
                <NavLink to="/resume" className="nav-link" onClick={toggleMenu}>Resume</NavLink>
                <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;