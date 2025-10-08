// src/Pages/Bulldogs.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Bulldogs() {
  return (
    <div className="bg-black text-gray-100 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400"
        >
          44 Bulldogs Football Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="italic text-gray-400"
        >
          “In Speech, Conduct and Love”
        </motion.p>
      </section>

      {/* New Jersey Announcement */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-yellow-400"
        >
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            🧥 New Season Jersey Drop!
          </h2>
          <p className="text-gray-300 mb-6">
            The 2025/26 official 44 Bulldogs kit has arrived — bold, resilient,
            and unstoppable. Represent the spirit of the bulldog with pride.
          </p>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Placeholder Jersey Image */}
            <div className="bg-gray-800 h-72 rounded-lg flex items-center justify-center text-gray-500 text-xl">
              Jersey Image Placeholder
            </div>

            {/* Purchase Section */}
            <div>
              <p className="text-gray-300 mb-4">
                Available in all sizes — get yours today!
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Club Overview */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center text-gray-500 text-xl">
          Placeholder Image / Video
        </div>
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Our Mission & Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Empowering youth through football and fostering peace, mental
            wellness, and civic action. Bulldogs is not just a team — it’s a
            movement.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
          Club Highlights
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 h-48 rounded-lg flex items-center justify-center text-gray-500"
            >
              Image {i + 1}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
