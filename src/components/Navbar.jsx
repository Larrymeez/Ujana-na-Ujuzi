import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Path to your logo

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-50 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Ujana na Ujuzi Logo"
          className="w-16 md:w-20 h-auto object-contain transition-transform duration-300 transform hover:scale-110"
        />
        <span className="ml-3 text-2xl font-bold text-red-600">
          Ujana na Ujuzi
        </span>
      </Link>

      {/* Navbar Links */}
      <ul className="flex items-center space-x-8">
        <li>
          <Link to="/" className="text-gray-800 hover:text-red-600 transition">
            Home
          </Link>
        </li>

        <li className="relative group">
          <button className="flex items-center text-gray-800 hover:text-red-600 transition">
            Pillars <span className="ml-1">▾</span>
          </button>

          <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
            <li>
              <Link
                to="/civic"
                className="block px-4 py-2 text-gray-800 hover:bg-red-50"
              >
                Civic Engagement
              </Link>
            </li>
            <li>
              <Link
                to="/mental"
                className="block px-4 py-2 text-gray-800 hover:bg-red-50"
              >
                Mental Health
              </Link>
            </li>
            <li>
              <Link
                to="/env"
                className="block px-4 py-2 text-gray-800 hover:bg-red-50"
              >
                Climate Action
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/gallery" className="text-gray-800 hover:text-red-600 transition">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-800 hover:text-red-600 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-800 hover:text-red-600 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
