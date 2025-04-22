import { useState } from "react";

export default function ReactCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 border-2 border-sky-500 rounded-lg p-6 shadow-lg hover:shadow-sky-500/20 transition-all">
      <div className="flex items-center justify-center mb-4">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React Logo"
          className="w-24 h-24"
        />
      </div>
      <h2 className="text-xl font-bold text-sky-400 text-center mb-2">
        Componente React
      </h2>
      <p className="text-gray-300 mb-4 text-center">
        Esta es una isla construida con React
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Contador: {count}
        </button>
      </div>
    </div>
  );
}
