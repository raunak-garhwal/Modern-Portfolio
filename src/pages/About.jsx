import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiCplusplus, SiPostman, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function About() {
  const skills = [
    { name: "React", icon: FaReact },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: FaPython },
    { name: "Java", icon: FaJava },
    { name: "C++", icon: SiCplusplus },
  ];

  const tools = [
    { name: "VS Code", icon: VscVscode },
    { name: "Postman", icon: SiPostman },
    { name: "GitHub", icon: FaGithub },
    { name: "Vercel", icon: SiVercel },
  ];

  const education = [
    {
      title: "Master of Computer Applications (MCA)",
      description: "Mohanlal Sukhadia University, Udaipur",
      year: "Oct, 2023 - Oct, 2025"
    },
    {
      title: "Bachelor of Commerce (B.Com.)",
      description: "Mohanlal Sukhadia University, Udaipur",
      year: "April, 2020 - April, 2023"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl relative mx-auto p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none rounded-xl" />
      {/* About Section */}
      <h1 className="text-center section-heading pt-4">About Me</h1>
      <motion.p
        className="text-lg text-slate-300 mb-12"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col items-center justify-center">
          <p>
            Hi Everyone, I am <span className="text-teal-300 font-semibold">Raunak Garhwal</span> from Rajasthan, India.
          </p>
          <p>
          Passionate software engineer with expertise in full-stack development.
          </p>
          <p>
          I love creating efficient, scalable, and user-friendly applications using modern technologies.
          </p>
        </div>
      </motion.p>

      {/* Degrees Section */}
      <h2 className="text-2xl font-bold text-center text-teal-300 mb-6">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {education.map((degree, index) => (
          <motion.div
            key={degree.title}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center text-slate-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-teal-300 mb-2">{degree.title}</h3>
            <p>{degree.description}</p>
            <p>{degree.year}</p>
          </motion.div>
        ))}
      </div>
        
      {/* Skills Section */}
      <h2 className="text-2xl font-bold text-center text-teal-300 mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-14 mb-16">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <skill.icon className="skill-icon text-5xl mb-2" />
            <span className="text-slate-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Tools Section */}
      <h2 className="text-2xl text-center font-bold text-teal-300 mb-6">Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-14">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <tool.icon className="skill-icon text-5xl mb-2" />
            <span className="text-slate-300">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default About;
