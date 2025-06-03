// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { PERSONAL_INFO } from "@/lib/constants";
// import { Menu, X } from "lucide-react";

// export default function Navigation() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   };

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "projects", label: "Projects" },
//     { id: "about", label: "About" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
//       transition={{ duration: 0.3 }}
//       className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] w-full px-4"
//     >
//       {/* Desktop Nav */}
//       <div className="hidden md:flex glass rounded-full px-8 py-3 items-center justify-center space-x-6">
//         {navItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => scrollToSection(item.id)}
//             className="nav-link text-white hover:text-cosmic-cyan transition-colors duration-300 px-3 py-1 rounded-full"
//           >
//             {item.label}
//           </button>
//         ))}
//         <a
//           href="https://drive.google.com/file/d/17aKdF-oCK0xv0zh1BW3gRanHly_E9nCu/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-cosmic-cyan text-white px-4 py-2 rounded-full hover:bg-cosmic-cyan/80 transition-colors duration-300 text-sm font-medium"
//         >
//           Resume
//         </a>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className="md:hidden flex justify-center">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="glass rounded-full p-3 text-white"
//         >
//           {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//         </button>
//       </div>

//       {/* Mobile Menu Drawer with animation */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ x: 300, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 300, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed top-0 right-0 h-full w-72 bg-cosmic-dark glass p-6 z-[9998] shadow-xl"
//           >
//             <div className="flex justify-end mb-6">
//               <button onClick={() => setIsMenuOpen(false)} className="text-white">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="space-y-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="block w-full text-left text-white hover:text-cosmic-cyan px-3 py-2 rounded-md transition-colors duration-300"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <a
//                 href="https://drive.google.com/file/d/17aKdF-oCK0xv0zh1BW3gRanHly_E9nCu/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block bg-cosmic-cyan text-white text-center px-4 py-2 rounded-md hover:bg-cosmic-cyan/80 transition-colors duration-300 text-sm font-medium"
//               >
//                 Resume
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] w-full px-4"
    >
      {/* Desktop Nav */}
      <div className="hidden md:flex glass rounded-full px-8 py-3 items-center justify-center space-x-6">
        {navItems.map((item) => (
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

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex justify-center pr-6 -ml-5">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="glass rounded-full p-3 text-white"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-cosmic-dark glass p-6 z-[9998] shadow-xl"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
