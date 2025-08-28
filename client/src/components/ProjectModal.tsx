import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Star, CheckCircle } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  category: string;
  color: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  // const getTechColor = (tech: string) => {
  //   const colors: Record<string, string> = {
  //     "React.js": "cosmic-cyan",
  //     "React Native": "cosmic-cyan",
  //     "Node.js": "emerald-400",
  //     "Express.js": "cosmic-teal",
  //     "MongoDB": "cosmic-teal",
  //     "PostgreSQL": "blue-400",
  //     "Python": "yellow-400",
  //     "OpenAI API": "purple-400",
  //     "Google Maps API": "emerald-400",
  //     "MERN Stack": "cosmic-cyan",
  //     "Power Virtual Agents": "cosmic-coral",
  //     "SharePoint": "blue-400",
  //     "Facebook Prophet": "orange-400"
  //   };
  
  //   return colors[tech] || "gray-400";
  // };
  
  const getTechColorClass = (tech: string) => {
    const map: Record<
      string,
      { bg: string; text: string; border: string }
    > = {
      "React.js": {
        bg: "bg-cosmic-cyan/20",
        text: "text-cosmic-cyan",
        border: "border-cosmic-cyan/30"
      },
      "React Native": {
        bg: "bg-cosmic-cyan/20",
        text: "text-cosmic-cyan",
        border: "border-cosmic-cyan/30"
      },
      "Node.js": {
        bg: "bg-emerald-400/20",
        text: "text-emerald-400",
        border: "border-emerald-400/30"
      },
      "Express.js": {
        bg: "bg-cosmic-teal/20",
        text: "text-cosmic-teal",
        border: "border-cosmic-teal/30"
      },
      "MongoDB": {
        bg: "bg-cosmic-teal/20",
        text: "text-cosmic-teal",
        border: "border-cosmic-teal/30"
      },
      "PostgreSQL": {
        bg: "bg-blue-400/20",
        text: "text-blue-400",
        border: "border-blue-400/30"
      },
      "Python": {
        bg: "bg-yellow-400/20",
        text: "text-yellow-400",
        border: "border-yellow-400/30"
      },
      "OpenAI API": {
        bg: "bg-purple-400/20",
        text: "text-purple-400",
        border: "border-purple-400/30"
      },
      "Google Maps API": {
        bg: "bg-emerald-400/20",
        text: "text-emerald-400",
        border: "border-emerald-400/30"
      },
      "MERN Stack": {
        bg: "bg-cosmic-cyan/20",
        text: "text-cosmic-cyan",
        border: "border-cosmic-cyan/30"
      },
      "Power Virtual Agents": {
        bg: "bg-cosmic-coral/20",
        text: "text-cosmic-coral",
        border: "border-cosmic-coral/30"
      },
      "SharePoint": {
        bg: "bg-blue-400/20",
        text: "text-blue-400",
        border: "border-blue-400/30"
      },
      "Facebook Prophet": {
        bg: "bg-orange-400/20",
        text: "text-orange-400",
        border: "border-orange-400/30"
      }
    };
  
    return (
      map[tech] || {
        bg: "bg-gray-300",
        text: "text-gray-700",
        border: "border-gray-400"
      }
    );
  };
  

  const getGithubLink = (title: string) => {
    if (title.toUpperCase() === "SANCHAYA") {
      return "https://github.com/aroravittesh/GreenRoute";
    }
    return `https://github.com/aroravittesh/${title.toLowerCase().replace(/\s+/g, "-")}`;
  };
  

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-dark rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/80 to-transparent rounded-t-2xl" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center mb-2">
                <span
                  className={`text-xs bg-${project.color}-400/20 text-${project.color}-400 px-3 py-1 rounded-full`}
                >
                  {project.category}
                </span>
              </div>
              <h2 className="font-orbitron text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-xl text-gray-200">{project.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Description */}
            <div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Features and Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Features */}
              <div>
                <h3 className="flex items-center text-xl font-bold text-cosmic-cyan mb-4">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Project Highlights */}
              <div>
                <h3 className="flex items-center text-xl font-bold text-cosmic-coral mb-4">
                  <Star className="w-5 h-5 mr-2" />
                  Project Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-xl font-bold text-cosmic-teal mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {/* {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-4 py-2 bg-${getTechColor(
                      tech
                    )}/20 text-${getTechColor(
                      tech
                    )} rounded-full text-sm font-medium border border-${getTechColor(
                      tech
                    )}/30`}
                  >
                    {tech}
                  </motion.span>
                ))} */}
                {project.technologies.map((tech, index) => {
  const color = getTechColorClass(tech);
  return (
    <motion.span
      key={tech}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`px-4 py-2 border ${color.text} ${color.border} rounded-full text-sm font-medium`}
    >
      {tech}
    </motion.span>
  );
})}

              </div>
            </div>

            {/* Action Buttons */}
            {/* Action Buttons */}
<div className="flex justify-center gap-4 pt-6 border-t border-gray-700">
  {/* Live Link - only show if available */}
  {project.liveUrl && (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center gap-2 border border-emerald-500 text-emerald-400 px-6 py-3 rounded-lg font-medium hover:bg-emerald-600/20 transition-colors duration-300"
    >
      🚀 Live Demo
    </motion.a>
  )}

  {/* GitHub Link */}
  <motion.a
    href={getGithubLink(project.title)}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
  >
    <Github className="w-4 h-4" />
    View Source Code
  </motion.a>
</div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
