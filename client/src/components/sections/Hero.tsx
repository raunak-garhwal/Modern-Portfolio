import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

const phrases = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));

        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) =>
            (prevIndex + 1) % phrases.length
          );
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20"
            >
              <img
                src="/attached_assets/Profile-Pic.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Hi, I'm <span className="text-primary">Raunak Garhwal</span>
            </motion.h1>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-6 text-xl text-muted-foreground h-8"
          >
            <span className="inline-block min-w-[20ch]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Building scalable web applications with modern technologies
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center gap-4"
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}