import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "@/lib/constants";
import { X } from "lucide-react";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "whatido", label: "What I Do" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="nav-drawer"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 20, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed top-0 right-0 h-full w-64 bg-cosmic-dark/80 backdrop-blur-md p-6 z-[9998] shadow-xl md:hidden rounded-l-xl"
        >
          <div className="flex justify-end mb-6">
            <motion.button
              onClick={() => setIsOpen(false)}
              className="text-white z-[10000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 mt-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:text-cosmic-cyan px-3 py-2 rounded-md transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/17aKdF-oCK0xv0zh1BW3gRanHly_E9nCu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-cosmic-cyan text-white text-center px-4 py-2 rounded-md hover:bg-cosmic-cyan/80 transition-colors duration-300 text-sm font-medium"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
