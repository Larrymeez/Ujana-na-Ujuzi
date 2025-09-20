import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const height = navRef.current.offsetHeight;
        window.dispatchEvent(new CustomEvent("navbarHeight", { detail: height }));
      });
      resizeObserver.observe(navRef.current);

      // Initial dispatch
      const height = navRef.current.offsetHeight;
      window.dispatchEvent(new CustomEvent("navbarHeight", { detail: height }));

      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`flex justify-between items-center px-6 py-2 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/20 backdrop-blur-md"
      }`}
    >
      {/* Logo + Brand */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/assets/logo.png"
          alt="Ujana na Ujuzi Logo"
          className="w-20 md:w-24 lg:w-28 object-contain"
        />
        <span
          className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-red-600"
          }`}
        >
          Ujana na Ujuzi
        </span>
      </Link>

      {/* Navbar Links */}
      <ul
        className={`flex items-center space-x-6 font-medium text-sm md:text-base transition-colors duration-300 ${
          scrolled ? "text-gray-800" : "text-red-600"
        }`}
      >
        <li>
          <Link to="/" className="hover:text-red-700 transition">Home</Link>
        </li>

        {/* Pillars dropdown */}
        <li className="relative group">
          <button className="flex items-center hover:text-red-700 transition">
            Pillars <span className="ml-1">▾</span>
          </button>
          <ul className="absolute left-0 mt-2 w-48 bg-white/90 backdrop-blur-md shadow-lg rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
            <li>
              <Link to="/civic" className="block px-4 py-2 hover:bg-red-50">Civic Engagement</Link>
            </li>
            <li>
              <Link to="/mental" className="block px-4 py-2 hover:bg-red-50">Mental Wellbeing</Link>
            </li>
            <li>
              <Link to="/env" className="block px-4 py-2 hover:bg-red-50">Climate Action</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/gallery" className="hover:text-red-700 transition">Gallery</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-700 transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-red-700 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
