import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { PERSONAL_INFO, SKILLS, ACHIEVEMENTS } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  useEffect(() => {
    if (isIntersecting) {
      ACHIEVEMENTS.forEach((achievement) => {
        const target = achievement.value === "8.30" ? 8.30 : parseInt(achievement.value);
        animateValue(achievement.label, target);
      });
    }
  }, [isIntersecting]);

  const animateValue = (key: string, target: number) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedValues(prev => ({ ...prev, [key]: current }));
    }, 20);
  };

  const formatValue = (label: string, value: number) => {
    if (label === "CGPA") return value.toFixed(2);
    if (label === "Hackathon Rank") return `${Math.floor(value)}th`;
    if (label === "Problems Solved") return `${Math.floor(value)}+`;
    return `${Math.floor(value)}+`;
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About & Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with expertise in full-stack development, AI integration, and modern web technologies. 
            Solved {PERSONAL_INFO.problemsSolved} coding problems and ranked {PERSONAL_INFO.hackathonRank} in SmartBU Hackathon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Visualization */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-cosmic-cyan">Technical Arsenal</h3>
              
              <div className="space-y-6">
                {SKILLS.flatMap(category => 
                  category.skills.map((skill, index) => (
                    <motion.div
                      key={`${category.category}-${skill.name}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="skill-item"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-cosmic-cyan">{skill.level}%</span>
                      </div>
                      <div className="bg-cosmic-purple rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isIntersecting ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                          className="skill-bar bg-gradient-to-r from-cosmic-cyan to-cosmic-teal h-3 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isIntersecting ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-dark rounded-xl p-6 text-center"
                >
                  <div className={`text-3xl font-orbitron font-bold text-${achievement.color} mb-2`}>
                    {formatValue(achievement.label, animatedValues[achievement.label] || 0)}
                  </div>
                  <div className="text-sm text-gray-300">{achievement.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isIntersecting ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern coding environment" 
              className="rounded-2xl w-full animate-float object-cover h-64"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-cosmic-coral">Education Journey</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cosmic-cyan pl-6">
                  <h4 className="font-semibold text-lg">{PERSONAL_INFO.degree}</h4>
                  <p className="text-cosmic-cyan">{PERSONAL_INFO.university}</p>
                  <p className="text-sm text-gray-400">
                    Expected {PERSONAL_INFO.expectedGraduation} • CGPA: {PERSONAL_INFO.cgpa}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    Ranked {PERSONAL_INFO.hackathonRank} out of 400+ teams in SmartBU Hackathon
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-cosmic-teal">Leadership Experience</h3>
              <div className="border-l-4 border-cosmic-teal pl-6">
                <h4 className="font-semibold text-lg">Core Member - FullStack BU</h4>
                <p className="text-cosmic-teal">{PERSONAL_INFO.university}</p>
                <p className="text-sm text-gray-400">February 2023 – August 2023</p>
                <p className="text-sm text-gray-300 mt-2">
                  Managed organizing team for yearly tech fest i-Cosmic
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
