import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import CivicEducation from "./components/Pillars/CivicEducation.jsx";
import MentalHealth from "./components/Pillars/MentalHealth.jsx";
import EnvironmentalConservation from "./components/Pillars/EnvironmentalConservation.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./Pages/Gallery.jsx";
import About from "./Pages/About.jsx";
import ContactForm from "./Pages/ContactForm.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/civic" element={<CivicEducation />} />
        <Route path="/mental" element={<MentalHealth />} />
        <Route path="/env" element={<EnvironmentalConservation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />

      </Routes>
      <Footer /> {/* Footer visible on all pages */}
    </Router>
  );
}