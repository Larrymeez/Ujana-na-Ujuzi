import React from "react";
import { Link } from "react-router-dom";

export default function PillarCard({ title, description, link }) {
  return (
    <div className="bg-gray-100 rounded-xl shadow-md p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-red-600 mb-3">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block text-red-600 font-semibold hover:text-red-800 transition-colors duration-300"
      >
        Learn More →
      </Link>
    </div>
  );
}

