import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-red-600">Ujana na Ujuzi</h1>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-red-600 transition">Home</a>
        </li>

        {/* Pillars dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="hover:text-red-600 transition">
            Pillars ▾
          </button>
          {isOpen && (
            <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden">
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
          )}
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
