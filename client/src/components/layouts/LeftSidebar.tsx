import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const LeftSidebar = () => (
  <div className="fixed left-0 top-12 bottom-0 w-16 bg-black text-white flex flex-col items-center space-y-6 py-6 z-40">
    <a href="https://github.com/aroravittesh" target="_blank"><FaGithub /></a>
    <a href="https://linkedin.com/in/..." target="_blank"><FaLinkedin /></a>
    <a href="mailto:yourmail@gmail.com"><FaEnvelope /></a>
    <a href="https://instagram.com/..." target="_blank"><FaInstagram /></a>
  </div>
);

export default LeftSidebar;