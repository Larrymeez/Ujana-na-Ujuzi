import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Ujana na Ujuzi
          </h2>
          <p className="text-gray-300 text-sm">
            Empowering youth for civic education, mental health & environmental action.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <Link to="/" className="hover:text-red-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/civic" className="hover:text-red-600 transition">Civic Education</Link>
            </li>
            <li>
              <Link to="/mental" className="hover:text-red-600 transition">Mental Health</Link>
            </li>
            <li>
              <Link to="/env" className="hover:text-red-600 transition">Environment</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-red-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-600 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-400 text-sm text-center py-4">
        &copy; {new Date().getFullYear()} Ujana na Ujuzi. All rights reserved.
      </div>
    </footer>
  );
}
