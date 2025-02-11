import { motion } from "framer-motion";
import ProjectCard from "@/components/sections/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    tech: ["React", "TypeScript", "Socket.io", "Express"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Framer Motion",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];
