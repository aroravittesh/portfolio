// import { useState } from "react";
// import ParticleBackground from "@/components/ParticleBackground";
// import Topbar from "@/components/layouts/Topbar";
// import LeftSidebar from "@/components/layouts/LeftSidebar";
// import RightNav from "@/components/layouts/RightNav";
// import Hero from "@/components/Hero";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import WhatIDo from "@/components/WhatIDo";
// import Navigation from "@/components/Navigation"; // Mobile Nav
// import Education from "@/components/Education";
// import Extracurricular from "@/components/Extracurricular";

// export default function Home() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="min-h-screen bg-cosmic-dark text-white relative overflow-x-hidden">
//       <ParticleBackground />

//       {/* Mobile Toggle Button */}
//       {!showMenu && (
//         <div className="md:hidden fixed top-4 right-4 z-[10000]">
//           <button
//             onClick={() => setShowMenu(true)}
//             className="flex flex-col justify-center items-center w-10 h-10 bg-cosmic-cyan text-black rounded transition-all duration-300 hover:scale-105"
//           >
//             <span className="block w-5 h-0.5 bg-black mb-1" />
//             <span className="block w-5 h-0.5 bg-black mb-1" />
//             <span className="block w-5 h-0.5 bg-black" />
//           </button>
//         </div>
//       )}

//       {/* Desktop Sidebars */}
//       <div className="hidden md:block">
//         <Topbar />
//         <LeftSidebar />
//         <RightNav />
//       </div>

//       {/* Mobile Navigation Drawer */}
//       {showMenu && (
//         <Navigation isOpen={showMenu} setIsOpen={setShowMenu} />
//       )}

//       {/* Main Content */}
//       <main className="pt-20 md:pl-[80px] md:pr-[220px] px-4">
//         <section id="about">
//           <Hero />
//         </section>
//         <section id="whatido">
//           <WhatIDo />
//         </section>
//         <section id="projects">
//           <Projects />
//         </section>
//         <section id="skills">
//           <Skills />
//         </section>
//         <section id="education">
//           <Education />
//         </section>
//         <section id="extracurricular">
//           <Extracurricular />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>
//         <footer className="bg-cosmic-purple/20 py-8 border-t border-gray-800 mt-10 text-center">
//           <p className="text-gray-400">
//             © 2025 Vittesh Arora. Crafted with
//             <span className="text-red-500 mx-1">❤️</span> and cutting-edge tech.
//           </p>
//         </footer>
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Topbar from "@/components/layouts/Topbar";
import LeftSidebar from "@/components/layouts/LeftSidebar";
import RightNav from "@/components/layouts/RightNav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import WhatIDo from "@/components/WhatIDo";
import Navigation from "@/components/Navigation"; // Mobile Nav
import Education from "@/components/Education";
import Extracurricular from "@/components/Extracurricular";
import Terminal from "@/components/Terminal"; // CLI mode

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [mode, setMode] = useState<"gui" | "cli">("gui");

  return (
    <div className="min-h-screen bg-cosmic-dark text-white relative overflow-x-hidden">
      <ParticleBackground />

      <Topbar mode={mode} setMode={setMode} />

      {mode === "gui" ? (
        <>
          {/* Mobile Toggle Button */}
          {!showMenu && (
            <div className="md:hidden fixed top-4 right-4 z-[10000]">
              <button
                onClick={() => setShowMenu(true)}
                className="flex flex-col justify-center items-center w-10 h-10 bg-cosmic-cyan text-black rounded transition-all duration-300 hover:scale-105"
              >
                <span className="block w-5 h-0.5 bg-black mb-1" />
                <span className="block w-5 h-0.5 bg-black mb-1" />
                <span className="block w-5 h-0.5 bg-black" />
              </button>
            </div>
          )}

          {/* Desktop Sidebars */}
          <div className="hidden md:block">
            <LeftSidebar />
            <RightNav />
          </div>

          {/* Mobile Navigation Drawer */}
          {showMenu && <Navigation isOpen={showMenu} setIsOpen={setShowMenu} />}

          {/* Main Content */}
          <main className="pt-20 md:pl-[80px] md:pr-[220px] px-4">
            <section id="about">
              <Hero />
            </section>
            <section id="whatido">
              <WhatIDo />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="extracurricular">
              <Extracurricular />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <footer className="bg-cosmic-purple/20 py-8 border-t border-gray-800 mt-10 text-center">
              <p className="text-gray-400">
                © 2025 Vittesh Arora. Crafted with
                <span className="text-red-500 mx-1">❤️</span> and cutting-edge tech.
              </p>
            </footer>
          </main>
        </>
      ) : (
        <Terminal />
      )}
    </div>
  );
}

