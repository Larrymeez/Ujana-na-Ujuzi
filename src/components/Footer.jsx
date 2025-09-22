import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-8 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/assets/logo.png" alt="Logo" className="w-20 md:w-24 object-contain" />
          <p className="text-sm">&copy; 2021 Ujana na Ujuzi. All Rights Reserved.</p>
        </div>

        {/* Center Links */}
        <ul className="flex space-x-6">
          <li><a href="/about" className="hover:text-red-600">About</a></li>
          <li><a href="/gallery" className="hover:text-red-600">Gallery</a></li>
          <li><a href="/contact" className="hover:text-red-600">Contact</a></li>
        </ul>

        {/* Socials */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-red-600 transition"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-red-600 transition"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-red-600 transition"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-red-600 transition"><FaLinkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
