import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PERSONAL_INFO, TYPING_TEXTS } from "@/lib/constants";

export default function Hero() {
  const [typingText, setTypingText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = TYPING_TEXTS[currentTextIndex];
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, typingText.length - 1));
        if (typingText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
        }
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1));
        if (typingText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingText, currentTextIndex, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="animate-float"
        >
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
            alt="Developer workspace" 
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-cosmic-cyan animate-glow object-cover" 
          />
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </motion.h1>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 font-inter font-light h-16 flex items-center justify-center"
        >
          <span className="typing-cursor">{typingText}</span>
        </motion.div>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Crafting digital experiences with cutting-edge technologies. Currently pursuing B.Tech CSE at {PERSONAL_INFO.university} with {PERSONAL_INFO.cgpa} CGPA.
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cosmic-cyan to-cosmic-teal px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-cosmic-cyan/25 transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-cosmic-coral px-8 py-4 rounded-full font-medium hover:bg-cosmic-coral transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-6"
        >
          {[
            { href: `mailto:${PERSONAL_INFO.email}`, icon: "fas fa-envelope" },
            { href: PERSONAL_INFO.linkedIn, icon: "fab fa-linkedin" },
            { href: PERSONAL_INFO.github, icon: "fab fa-github" },
            { href: PERSONAL_INFO.leetcode, icon: "fas fa-code" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-2xl hover:text-cosmic-cyan transition-colors duration-300"
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        className="absolute top-20 left-10"
      >
        <div className="w-4 h-4 bg-cosmic-cyan rounded-full opacity-60"></div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 right-16"
      >
        <div className="w-6 h-6 bg-cosmic-coral rounded-full opacity-40"></div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1.5 }}
        className="absolute top-1/2 right-10"
      >
        <div className="w-3 h-3 bg-cosmic-teal rounded-full opacity-70"></div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <i className="fas fa-chevron-down text-cosmic-cyan text-2xl"></i>
      </motion.div>
    </section>
  );
}
