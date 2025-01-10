"use client";
import { useState } from "react";

export default function Front() {
  const [greet, setGreet] = useState("");

  const saveGreeting = () => {
    fetch("/api", { method: "POST", body: JSON.stringify({ greet }) });

    setGreet("");
  };


  return (
    <>
      <div className="flex justify-center space-between flex-col items-center ">
        <div className="py-5">
          <input
            placeholder="send data to server"
            type="text"
            className="border border-blue-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={greet}
            onChange={(e) => setGreet(e.target.value)}
          />
        </div>

        <button
          onClick={saveGreeting}
          className="text-white bg-slate-600 rounded-md active:bg-slate-700  hover:bg-slate-500  px-4 py-2 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
                Send{"  "}
        </button>
      </div>
    </>
  );
}


