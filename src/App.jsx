import { useState } from "react";
import "./App.css";
import AboutMeSlides from "./components/AboutMeSlides/AboutMeSlides";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <AboutMeSlides />
    </div>
  );
}

export default App;
