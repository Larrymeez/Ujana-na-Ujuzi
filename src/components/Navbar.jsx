import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
        <Link to="/">Ujana na Ujuzi</Link>
      </h1>

      <ul className="flex items-center space-x-6">
        <li>
          <Link to="/" className="hover:text-red-600 dark:hover:text-red-300 transition-colors">
            Home
          </Link>
        </li>

        {/* Pillars Dropdown */}
        <li className="relative group">
          <button className="flex items-center hover:text-red-600 dark:hover:text-red-300 transition-colors">
            Pillars <span className="ml-1">▾</span>
          </button>

          <ul className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
            <li>
              <Link to="/civic" className="block px-4 py-2 hover:bg-red-50 dark:hover:bg-gray-700">
                Civic Education
              </Link>
            </li>
            <li>
              <Link to="/mental" className="block px-4 py-2 hover:bg-red-50 dark:hover:bg-gray-700">
                Mental Health
              </Link>
            </li>
            <li>
              <Link to="/env" className="block px-4 py-2 hover:bg-red-50 dark:hover:bg-gray-700">
                Environmental Conservation
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/about" className="hover:text-red-600 dark:hover:text-red-300 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-red-600 dark:hover:text-red-300 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

