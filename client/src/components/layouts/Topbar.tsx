const Topbar = ({ mode, setMode }) => (
    <div className="w-full h-12 flex items-center justify-between px-6 bg-black border-b border-gray-800 fixed top-0 left-0 right-0 z-40">
      <h1 className="text-white text-lg font-semibold">Vittesh Arora</h1>
      <div className="flex items-center space-x-2">
        <span className="text-white text-sm">{mode === 'gui' ? 'GUI' : 'CLI'}</span>
        <button
          className="bg-gray-700 text-white px-2 py-1 rounded"
          onClick={() => setMode(mode === 'gui' ? 'cli' : 'gui')}
        >
          {mode === 'gui' ? '→ CLI' : '→ GUI'}
        </button>
      </div>
    </div>
  );

export default Topbar;
  