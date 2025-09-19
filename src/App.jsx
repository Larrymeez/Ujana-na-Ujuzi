import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Pillars from "./Pillars";

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
