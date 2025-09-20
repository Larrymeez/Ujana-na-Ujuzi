import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Ujana na Ujuzi Logo" className="w-28 md:w-32 lg:w-36 object-contain" />
      </Link>

      {/* Navbar Links */}
      <ul className="flex items-center space-x-8 text-gray-800 font-medium">
        <li>
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
        </li>

        {/* Pillars dropdown */}
        <li className="relative group">
          <button className="hover:text-red-600 transition flex items-center">
            Pillars <span className="ml-1">▾</span>
          </button>
          <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
            <li>
              <Link to="/civic" className="block px-4 py-2 hover:bg-red-50">Civic Education</Link>
            </li>
            <li>
              <Link to="/mental" className="block px-4 py-2 hover:bg-red-50">Mental Health</Link>
            </li>
            <li>
              <Link to="/env" className="block px-4 py-2 hover:bg-red-50">Environmental Conservation</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/gallery" className="hover:text-red-600 transition">Gallery</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-600 transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
