import { motion } from "framer-motion";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { PROJECTS } from "@/lib/constants";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Sustainability": "emerald-400",
      "Mobile App": "cosmic-cyan",
      "AI Chatbot": "cosmic-coral",
    };
    return colors[category] || "gray-400";
  };

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      "React.js": "cosmic-cyan",
      "Node.js": "emerald-400",
      "MongoDB": "cosmic-teal",
      "OpenAI API": "purple-400",
      "React Native": "cosmic-cyan",
      "Express.js": "cosmic-teal",
      "Google Maps API": "emerald-400",
      "MERN Stack": "cosmic-cyan",
      "Power Virtual Agents": "cosmic-coral",
      "SharePoint": "blue-400",
    };
    return colors[tech] || "gray-400";
  };

  const formatRepoName = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <section id="projects" className="py-20 relative" ref={ref}>
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative solutions built with modern technologies, focusing on sustainability, AI integration, and user experience.
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="project-card glass-dark rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/60 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <i className={`fas fa-${project.category === 'Sustainability' ? 'leaf' : project.category === 'Mobile App' ? 'mobile-alt' : 'robot'} text-${getCategoryColor(project.category)} mr-2`}></i>
                    <span className={`text-xs bg-${getCategoryColor(project.category)}/20 text-${getCategoryColor(project.category)} px-2 py-1 rounded-full`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className={`font-orbitron text-xl font-bold mb-3 text-${getCategoryColor(project.category)}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs bg-${getTechColor(tech)}/20 text-${getTechColor(tech)} px-2 py-1 rounded`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <button className={`text-${getCategoryColor(project.category)} hover:text-white transition-colors duration-300 flex items-center text-sm`}>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Details
                    </button>
                    <a
                      href={`https://github.com/aroravittesh/${formatRepoName(project.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
