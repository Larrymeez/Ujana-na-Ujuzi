import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png"; // make sure your logo is in src/assets/

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-50 text-gray-700 py-8 shadow-inner transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 px-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Ujana na Ujuzi Logo"
          className="w-16 md:w-20 transition-transform duration-300 hover:scale-110"
        />

        {/* Links */}
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <a href="/about" className="hover:text-red-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-red-600 transition-colors">
              Gallery
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Socials */}
        <div className="flex space-x-4 text-gray-700">
          <a href="#" className="hover:text-red-600 transition-colors">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ujana na Ujuzi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

