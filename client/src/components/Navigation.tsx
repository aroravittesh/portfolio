import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass rounded-full px-6 py-3"
    >
      <div className="flex items-center space-x-6">
        {[
          { id: "home", label: "Home" },
          { id: "projects", label: "Projects" },
          { id: "about", label: "About" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="nav-link text-white hover:text-cosmic-cyan transition-colors duration-300 px-3 py-1 rounded-full"
          >
            {item.label}
          </button>
        ))}
        <a
          href="/attached_assets/Vittesh_Arora.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cosmic-cyan text-white px-4 py-2 rounded-full hover:bg-cosmic-cyan/80 transition-colors duration-300 text-sm font-medium"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
