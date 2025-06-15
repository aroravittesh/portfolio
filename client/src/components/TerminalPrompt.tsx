import { useRef, useEffect } from 'react';

export default function TerminalPrompt({ input, setInput, onSubmit }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <div className="flex">
      <span className="text-cyan-400 mr-2">vittesh@portfolio:~$</span>
      <input
        ref={inputRef}
        className="bg-transparent border-none outline-none text-white w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}