import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold text-red-600">Ujana na Ujuzi</h1>

      {/* Navbar Links */}
      <ul className="flex items-center space-x-8">
        <li>
          <a href="#home" className="hover:text-red-600 transition">Home</a>
        </li>

        {/* Pillars dropdown with hover */}
        <li className="relative group">
          <button className="flex items-center hover:text-red-600 transition">
            Pillars
            <span className="ml-1">▾</span>
          </button>

          {/* Dropdown menu */}
          <ul
            className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200"
          >
            <li>
              <a href="#civic" className="block px-4 py-2 hover:bg-red-50">
                Civic Education
              </a>
            </li>
            <li>
              <a href="#mental" className="block px-4 py-2 hover:bg-red-50">
                Mental Health
              </a>
            </li>
            <li>
              <a href="#environment" className="block px-4 py-2 hover:bg-red-50">
                Environmental Conservation
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#about" className="hover:text-red-600 transition">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-red-600 transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

