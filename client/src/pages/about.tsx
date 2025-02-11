import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack developer with a strong focus on creating
              beautiful and functional web applications. With several years of
              experience in web development, I specialize in modern JavaScript
              frameworks and responsive design.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Experience</h2>
            <div className="space-y-6 perspective-1000">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, rotateY: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 70,
                    damping: 20
                  }}
                  className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all transform-gpu"
                >
                  <motion.div
                    whileHover={{ 
                      x: 5,
                      scale: 1.02,
                      rotateY: 5,
                      transition: { type: "spring", stiffness: 400, damping: 30 }
                    }}
                    className="p-4 rounded-lg bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-semibold">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.company} • {item.period}</p>
                    <p className="mt-2">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Education</h2>
            <div className="space-y-6 perspective-1000">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, rotateY: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 70,
                    damping: 20
                  }}
                  className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all transform-gpu"
                >
                  <motion.div
                    whileHover={{ 
                      x: 5,
                      scale: 1.02,
                      rotateY: 5,
                      transition: { type: "spring", stiffness: 400, damping: 30 }
                    }}
                    className="p-4 rounded-lg bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-semibold">{item.degree}</h3>
                    <p className="text-sm text-muted-foreground">{item.school} • {item.period}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Leading the frontend development team, implementing modern web applications using React and TypeScript.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL.",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    period: "2015 - 2019",
  },
];