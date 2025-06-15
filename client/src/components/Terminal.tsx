import { useEffect, useRef, useState } from 'react';
import TerminalPrompt from './TerminalPrompt';
import { cliCommands, runCommand } from '@/lib/cliCommands';

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLines([getAsciiBanner(), 'Type "help" to see available commands.']);
  }, []);

  useEffect(() => {
    contentRef.current?.scrollTo(0, contentRef.current.scrollHeight);
  }, [lines]);

  const handleCommand = (command: string) => {
    const output = runCommand(command);
  
    if (command.trim().toLowerCase() === "clear") {
      setLines([getAsciiBanner(), 'Type "help" to see available commands.']);
      return;
    }
  
    setLines((prev) => [...prev, `> ${command}`, ...output]);
  };
  
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white px-4 py-10">
      <div className="w-full max-w-3xl h-[80vh] bg-[#1e1e1e] rounded-xl shadow-xl overflow-hidden border border-gray-700">
        <div
          ref={contentRef}
          className="p-4 overflow-y-auto h-full font-mono text-sm scroll-smooth"
        >
          {lines.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {line}
            </div>
          ))}
          <TerminalPrompt input={input} setInput={setInput} onSubmit={handleCommand} />
        </div>
      </div>
    </div>
  );
}

function getAsciiBanner() {
  return `
██╗   ██╗██╗████████╗████████╗███████╗███████╗██╗      ██╗
██║   ██║██║╚══██╔══╝╚══██╔══╝██╔════╝██╔════╝██║      ██║
██║   ██║██║   ██║      ██║   █████╗  ███████╗██║█████╗██║
██║   ██║██║   ██║      ██║   ██╔══╝  ╚════██║██║      ██║
╚██████╔╝██║   ██║      ██║   ███████╗███████║██║      ██║
 ╚═════╝ ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚═╝      ╚═╝

Welcome to Vittesh's Portfolio Terminal! 🚀
`;
}
