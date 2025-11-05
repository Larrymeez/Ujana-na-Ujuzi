import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const darkPages = ["/bulldogs"];
  const isDarkPage = darkPages.includes(location.pathname);

  return (
    <footer
      className={`py-4 shadow-inner transition-all duration-500 ${
        isDarkPage ? "bg-black text-gray-300" : "bg-white text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-6 md:space-y-0">
        {/* Left side — Logo + Copyright */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-16 md:w-20 object-contain"
          />
          <p
            className={`text-sm ${
              isDarkPage ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &copy; {new Date().getFullYear()} Ujana na Ujuzi. All Rights Reserved.
          </p>
        </div>

        {/* Middle — Navigation Links */}
        <ul
          className={`flex items-center space-x-6 font-medium ${
            isDarkPage ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>
            <Link
              to="/about"
              className="hover:text-red-500 transition-transform transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:text-red-500 transition-transform transform hover:scale-105"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-red-500 transition-transform transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side — Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
