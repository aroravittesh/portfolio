import { Link } from "react-scroll";
import ParticleBackground from "@/components/ParticleBackground";

const sections = [
  "About",
  "What I Do",
  "Projects",
  "Skills",
  "Education",
  "Extracurricular",
  "Contact"
];

const RightNav = () => (
  <div className="fixed top-12 right-0 bottom-0 w-52 z-40 border-l border-cosmic-cyan overflow-hidden">

    {/* Particle background */}
    <div className="absolute inset-0 -z-20">
      <ParticleBackground />
    </div>

    {/* Light blur overlay */}
    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10" />

    {/* Centered wrapper */}
    <div className="flex justify-center items-start h-full pt-10 pb-10 relative z-10">
      {/* Inner left-aligned vertical list */}
      <div className="flex flex-col space-y-6">
        {sections.map((sec) => (
          <div
            key={sec}
            className="flex items-center gap-3 group"
          >
            {/* Dot */}
            <span className="w-3 h-3 rounded-full bg-gray-500/40 transition-all duration-300 group-[.active]:bg-cosmic-cyan group-[.active]:shadow-[0_0_8px_2px_theme('colors.cosmic-cyan')]" />

            {/* Label */}
            <Link
              to={sec.toLowerCase().replace(/ /g, '')}
              smooth
              duration={100}
              spy
              activeClass="active"
              className="group font-sans text-[0.925rem] text-gray-300 hover:text-cosmic-cyan transition-all duration-200 cursor-pointer font-medium tracking-wide
                [&.active]:text-cosmic-cyan [&.active]:text-[1.05rem] [&.active]:font-semibold"
            >
              {sec}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RightNav;
