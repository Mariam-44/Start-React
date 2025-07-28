import React from "react";

export default function ThemeButton({setMode}) {
  return (
    <>
    <div className="container">
      <div className="mt-6 flex gap-4 ">
        <button
          onClick={() => setMode("light")}
          className="btn btn-secondary me-2 rounded"
        >
          Light Mode
        </button>

        <button
          onClick={() => setMode("dark")}
          className="btn btn-secondary rounded"
        >
          Dark Mode
        </button>
      </div>
    </div>
      
    </>
  );
}
