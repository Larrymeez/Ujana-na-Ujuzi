import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import CivicEducation from "./components/Pillars/CivicEducation.jsx";
import MentalHealth from "./components/Pillars/MentalHealth.jsx";
import EnvironmentalConservation from "./components/Pillars/EnvironmentalConservation.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/civic" element={<CivicEducation />} />
        <Route path="/mental" element={<MentalHealth />} />
        <Route path="/env" element={<EnvironmentalConservation />} />
      </Routes>
    </Router>
  );
}
