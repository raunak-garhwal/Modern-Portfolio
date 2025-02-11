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
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2
                  }}
                  className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-lg bg-card/50 hover:bg-accent/10 transition-all"
                  >
                    <h3 className="font-semibold">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.company} • {item.period}</p>
                    <p className="mt-2">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Education</h2>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2 + 0.3
                  }}
                  className="border-l-2 border-primary pl-4 hover:border-l-4 transition-all"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-lg bg-card/50 hover:bg-accent/10 transition-all"
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