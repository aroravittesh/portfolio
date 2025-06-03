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
  animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
  transition={{ duration: 0.3 }}
  className="glass rounded-full px-8 py-3 z-[9999]"
  style={{
    position: "fixed",
    top: "24px",
    left: "0",
    right: "0",
    margin: "0 auto",
    width: "max-content",
  }}
>


  <div className="flex items-center justify-center space-x-6">
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
      href="https://drive.google.com/file/d/17aKdF-oCK0xv0zh1BW3gRanHly_E9nCu/view?usp=sharing"
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
