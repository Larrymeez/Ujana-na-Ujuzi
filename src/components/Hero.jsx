import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Path to your logo

export default function Hero() {
  const [showTagline, setShowTagline] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    setShowTagline(true);
    const buttonTimer = setTimeout(() => setShowButton(true), 500);
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1000);

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(subtextTimer);
    };
  }, []);

  return (
    <section className="text-center py-12 rounded-lg shadow-md bg-white transition-colors duration-300">
      {/* Logo */}
      <div className="mb-6">
        <img
          src={logo}
          alt="Ujana na Ujuzi Logo"
          className="w-40 md:w-40 mx-auto transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 transition-colors duration-300 hover:text-black">
        Welcome to Ujana na Ujuzi
      </h1>

      {/* Tagline */}
      <div
        className={`mt-4 transition-opacity duration-700 ${
          showTagline ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-lg text-gray-600 italic font-bold transform transition duration-300 hover:scale-105 hover:text-red-600">
          Empowering Youth for Civic Engagement, Mental Health & Climate Action
        </p>
      </div>

      {/* Join Us Button */}
      <div
        className={`mt-6 transition-opacity duration-700 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="/contact"
          className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 hover:scale-110 hover:shadow-xl transform transition duration-300"
        >
          Join Us
        </a>
      </div>

      {/* Subtext */}
      <div
        className={`mt-4 transition-opacity duration-700 ${
          showSubtext ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-sm text-gray-500">Be part of the change today!</p>
      </div>
    </section>
  );
}
