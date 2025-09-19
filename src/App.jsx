import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
      </main>
    </div>
  );
}

export default App;
