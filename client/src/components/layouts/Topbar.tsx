import { useState } from "react";

const Topbar = () => {
  const [mode, setMode] = useState("gui");

  return (
    <div className="w-full h-12 flex items-center justify-between px-6 bg-black border-b border-gray-800 fixed top-0 left-0 right-0 z-40">
      
      {/* Name with gradient */}
      <h1 className="text-lg font-bold font-orbitron gradient-text">
        Vittesh Arora
      </h1>

      {/* Custom Switch */}
      <div className="relative w-28 h-9 bg-gray-800 rounded-full flex items-center justify-between px-1">
        {/* Sliding Blue Background */}
        <div
          className={`absolute top-1 left-1 h-7 w-[48%] rounded-full bg-cosmic-cyan transition-all duration-300 ${
            mode === "cli" ? "translate-x-[100%]" : "translate-x-0"
          }`}
        ></div>

        {/* GUI Option */}
        <button
          onClick={() => setMode("gui")}
          className={`relative z-10 w-1/2 h-full text-sm font-medium rounded-full transition-colors duration-300 ${
            mode === "gui" ? "text-black" : "text-white"
          }`}
        >
          GUI
        </button>

        {/* CLI Option */}
        <button
          onClick={() => setMode("cli")}
          className={`relative z-10 w-1/2 h-full text-sm font-medium rounded-full transition-colors duration-300 ${
            mode === "cli" ? "text-black" : "text-white"
          }`}
        >
          CLI
        </button>
      </div>
    </div>
  );
};

export default Topbar;
