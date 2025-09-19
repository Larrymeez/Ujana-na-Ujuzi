import React from "react";
import { Link } from "react-router-dom";

export default function PillarCard({ title, description, link }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-bold text-red-600 mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block text-red-400 font-semibold hover:text-red-600 transition-colors duration-300"
      >
        Learn More →
      </Link>
    </div>
  );
}
