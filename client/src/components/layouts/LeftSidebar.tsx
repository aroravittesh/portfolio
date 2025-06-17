import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiFileText } from "react-icons/fi";

const LeftSidebar = () => (
  <div className="fixed left-0 top-12 bottom-0 w-20 bg-black text-white flex flex-col items-center py-8 z-40">
    
    {/* Icons centered between top and bottom */}
    <div className="flex flex-col items-center justify-center flex-grow space-y-16">
      <a href="https://github.com/aroravittesh" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-xl hover:text-cosmic-cyan transition-colors duration-300" />
      </a>
      <a href="https://linkedin.com/in/vittesh-arora" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl hover:text-cosmic-cyan transition-colors duration-300" />
      </a>
      <a href="mailto:vittesharora04@gmail.com">
        <FaEnvelope className="text-xl hover:text-cosmic-cyan transition-colors duration-300" />
      </a>
      <a href="https://leetcode.com/vittesharora" target="_blank" rel="noopener noreferrer">
        <SiLeetcode className="text-xl hover:text-cosmic-cyan transition-colors duration-300" />
      </a>
    </div>

    {/* Resume button pinned at bottom */}
    <a
      href="https://drive.google.com/file/d/1aEStvpm_6jMkDD93337aIXuc4T5xmNoh/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-cosmic-cyan hover:bg-cosmic-cyan/90 transition-all duration-300 shadow-md"
      title="Resume"
    >
      <FiFileText className="text-white text-lg" />
    </a>
  </div>
);

export default LeftSidebar;
