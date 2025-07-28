import React, { useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";

export default function Home() {
  const [mode,setMode]=useState("light");

  const modeStyle = mode === "light" ? "bg-light text-dark" :"bg-dark text-light";

  return (
    <>
      <div className={`min-vh-100 p-5 ${modeStyle} align-items-center d-flex flex-column`}>
        <h1 className="mt-5">Home Page Is {mode === "light" ? "Light" : "Dark"} Now!</h1>
        <div className="mt-4"> <ThemeButton setMode={setMode} /></div>
       
      </div>
    </>
  );
}

