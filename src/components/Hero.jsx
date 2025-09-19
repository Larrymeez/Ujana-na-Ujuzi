import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <section className="text-center py-12 rounded-lg shadow-md bg-red-50 dark:bg-gray-800 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400 transition-colors duration-300 hover:text-black dark:hover:text-white">
        Welcome to Ujana na Ujuzi
      </h1>

      {/* Tagline */}
      <div
        className={`mt-4 transition-opacity duration-700 ${
          showTagline ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 italic font-bold transform transition duration-300 hover:scale-105 hover:text-red-600 dark:hover:text-red-400">
          Empowering Youth for Civic Education, Mental Health & Environmental Action
        </p>
      </div>

      {/* Join Us Button */}
      <div
        className={`mt-6 transition-opacity duration-700 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          to="/contact"
          className="inline-block bg-red-600 dark:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 dark:hover:bg-red-600 hover:scale-110 hover:shadow-xl transform transition duration-300"
        >
          Join Us
        </Link>
      </div>

      {/* Optional Subtext */}
      <div
        className={`mt-4 transition-opacity duration-700 ${
          showSubtext ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">Be part of the change today!</p>
      </div>
    </section>
  );
}
