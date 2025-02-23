import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.div 
      className="min-h-[50vh] flex flex-col justify-center items-center text-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none rounded-2xl" />
      
      <motion.h1
        className="text-3xl md:text-5xl font-bold mt-16 mb-4 text-slate-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi I'm <span className='text-teal-400'>RAUNAK GARHWAL</span>
      </motion.h1>
      
      <div className="relative">
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            1000,
            'Frontend Developer',
            1000,
            'Backend Developer',
            1000,
            'Software Engineer',
            1000,
          ]}
          wrapper="h2"
          speed={55}
          className="text-2xl md:text-4xl text-teal-300 mb-8"
          repeat={Infinity}
        />
      </div>

      <motion.p
        className="text-lg text-slate-400 max-w-2xl mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Crafting beautiful and functional web experiences with modern technologies.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to="/projects">
          <motion.button
            className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <FaArrowRight />
          </motion.button>
        </Link>
        <Link to="/contact">
          <motion.button
            className="border border-teal-600 text-teal-300 px-6 py-3 rounded-lg hover:bg-teal-600/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>

    </motion.div>
  );
}

export default Home;