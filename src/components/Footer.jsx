import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // optional: stop observing after fade-in
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-800 text-gray-200 py-8 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-red-600">
          Ujana na Ujuzi
        </h1>

        {/* Footer Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/civic" className="hover:text-red-500 transition-colors">Civic Education</Link>
          </li>
          <li>
            <Link to="/mental" className="hover:text-red-500 transition-colors">Mental Health</Link>
          </li>
          <li>
            <Link to="/env" className="hover:text-red-500 transition-colors">Environment</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-red-500 transition-colors transform hover:scale-110">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-red-500 transition-colors transform hover:scale-110">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-red-500 transition-colors transform hover:scale-110">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Footer Credits */}
      <p className="text-sm text-gray-400 text-center mt-6">
        &copy; {new Date().getFullYear()} Ujana na Ujuzi. All rights reserved.
      </p>
    </footer>
  );
}
