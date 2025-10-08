// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update height for sticky offset logic
  useEffect(() => {
    if (navRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const height = navRef.current.offsetHeight;
        window.dispatchEvent(new CustomEvent("navbarHeight", { detail: height }));
      });
      resizeObserver.observe(navRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  // Detect if on a dark-themed page
  const darkPages = ["/bulldogs"];
  const isDarkPage = darkPages.includes(location.pathname);

  return (
    <nav
      ref={navRef}
      className={`flex justify-between items-center px-6 py-2 sticky top-0 z-50 transition-all duration-300
        ${
          isDarkPage
            ? scrolled
              ? "bg-black/90 backdrop-blur-md shadow-md"
              : "bg-black/40 backdrop-blur-md"
            : scrolled
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
            isDarkPage
              ? "text-white"
              : scrolled
              ? "text-gray-800"
              : "text-red-600"
          }`}
        >
          Ujana na Ujuzi
        </span>
      </Link>

      {/* Navbar Links */}
      <ul
        className={`flex items-center space-x-6 font-medium text-sm md:text-base transition-colors duration-300 ${
          isDarkPage
            ? "text-gray-200"
            : scrolled
            ? "text-gray-800"
            : "text-red-600"
        }`}
      >
        <li>
          <Link to="/" className="hover:text-red-700 transition">Home</Link>
        </li>

        {/* Pillars Dropdown */}
        <li className="relative group">
          <button className="flex items-center hover:text-red-700 transition">
            Pillars <span className="ml-1">▾</span>
          </button>
          <ul
            className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg backdrop-blur-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200
              ${isDarkPage ? "bg-gray-900 text-gray-200" : "bg-white/90 text-gray-800"}
            `}
          >
            <li><Link to="/civic" className="block px-4 py-2 hover:bg-red-50">Civic Engagement</Link></li>
            <li><Link to="/mental" className="block px-4 py-2 hover:bg-red-50">Mental Wellbeing</Link></li>
            <li><Link to="/env" className="block px-4 py-2 hover:bg-red-50">Climate Action</Link></li>
          </ul>
        </li>

        {/* Programmes Dropdown */}
        <li className="relative group">
          <button className="flex items-center hover:text-red-700 transition">
            Programmes <span className="ml-1">▾</span>
          </button>
          <ul
            className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg backdrop-blur-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200
              ${isDarkPage ? "bg-gray-900 text-gray-200" : "bg-white/90 text-gray-800"}
            `}
          >
            <li>
              <Link to="/bulldogs" className="block px-4 py-2 hover:bg-red-50">44 Bulldogs FC</Link>
            </li>
          </ul>
        </li>

        <li><Link to="/gallery" className="hover:text-red-700 transition">Gallery</Link></li>
        <li><Link to="/about" className="hover:text-red-700 transition">About</Link></li>
        <li><Link to="/contact" className="hover:text-red-700 transition">Contact</Link></li>
      </ul>
    </nav>
  );
}
