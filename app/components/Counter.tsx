"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow">
      <button
        onClick={() => setCount(count - 1)} 
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        −
      </button>
      
      <span className="text-3xl font-bold w-16 text-center text-black">{count}</span>
      
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
}