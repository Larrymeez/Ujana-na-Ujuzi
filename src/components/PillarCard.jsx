import React from "react";
import { Link } from "react-router-dom";

export default function PillarCard({ title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-bold text-red-600 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block text-red-600 font-semibold hover:text-red-800 transition"
      >
        Learn More →
      </Link>
    </div>
  );
}
