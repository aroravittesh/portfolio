import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "SOFTWARE ENGINEERING",
    description:
      "Experience in building scalable and efficient software systems with modern engineering practices."
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Proficient in crafting responsive, dynamic websites and web apps using React, Next.js, and modern tooling."
  },
  {
    title: "FRONTEND",
    description:
      "Skilled in creating intuitive, accessible user interfaces with pixel-perfect design and interactivity."
  },
  {
    title: "BACKEND",
    description:
      "Capable of building REST APIs, handling databases, and managing server-side logic using Node.js and Supabase."
  }
];

export default function WhatIDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-cosmic-dark text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cosmic-cyan font-orbitron tracking-wide uppercase">
        WHAT I DO
      </h2>
      <div className="flex flex-col gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="w-full p-10 rounded-2xl bg-cosmic-purple/80 hover:bg-cosmic-purple/90 shadow-xl transition-all duration-500 relative overflow-hidden cursor-pointer group"
          >
            <motion.h3
              className="text-4xl font-extrabold uppercase text-white font-orbitron tracking-wider group-hover:scale-105 transition-transform duration-300 ease-in-out"
              initial={false}
              animate={{ y: hoveredIndex === index ? -4 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {skill.title}
            </motion.h3>

            <motion.div
              className="overflow-hidden"
              initial={false}
              animate={{ maxHeight: hoveredIndex === index ? 200 : 0, opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="pt-4 text-gray-300 font-inter text-lg">
                {skill.description}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}