import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [showHeading, setShowHeading] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    // Fade in heading
    const headingTimer = setTimeout(() => setShowHeading(true), 200);

    // Fade in tagline after heading
    const taglineTimer = setTimeout(() => setShowTagline(true), 600);

    // Fade in Join Us button
    const buttonTimer = setTimeout(() => setShowButton(true), 1000);

    // Fade in subtext
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1400);

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(taglineTimer);
      clearTimeout(buttonTimer);
      clearTimeout(subtextTimer);
    };
  }, []);

  return (
    <section className="text-center py-12 bg-gray-900 rounded-lg shadow-md text-white">
      {/* Heading */}
      <h1
        className={`text-4xl md:text-5xl font-bold transition-colors duration-300 hover:text-red-600
          ${showHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"} 
          transition-all duration-700`}
      >
        Welcome to Ujana na Ujuzi
      </h1>

      {/* Tagline */}
      <div
        className={`mt-4 transition-all duration-700 transform ${
          showTagline ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <p className="text-lg italic font-bold transform transition duration-300 hover:scale-105 hover:text-red-500">
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
          className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 hover:scale-110 hover:shadow-xl transform transition duration-300"
        >
          Join Us
        </Link>
      </div>

      {/* Subtext */}
      <div
        className={`mt-4 transition-opacity duration-700 ${
          showSubtext ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-sm text-gray-300">Be part of the change today!</p>
      </div>
    </section>
  );
}
