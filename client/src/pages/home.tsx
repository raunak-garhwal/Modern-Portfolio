import Hero from "@/components/sections/Hero";
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
  SiVisualstudio,
  SiPostman,
  SiGit,
  SiVercel
} from "react-icons/si";

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
  { name: "VS Code", icon: SiVisualstudio },
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20"
            >
              <img
                src="/attached_assets/Profile-Pic.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I'm a passionate MERN Stack Developer with expertise in building scalable web applications.
                My focus is on creating efficient, user-friendly solutions using modern technologies.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
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