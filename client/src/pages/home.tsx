import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiVsco,
  SiPostman,
  SiGit,
  SiVercel
} from "react-icons/si";
import Hero from "@/components/sections/Hero";

const skills = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express", icon: SiExpress },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: SiOpenjdk },
];

const tools = [
  { name: "VS Code", icon: SiVsco },
  { name: "Postman", icon: SiPostman },
  { name: "Git", icon: SiGit },
  { name: "Vercel", icon: SiVercel },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="py-16 md:py-24 bg-accent/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-accent/10 transition-colors"
              >
                <skill.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-accent/10 transition-colors"
              >
                <tool.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-medium">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}