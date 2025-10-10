// src/components/SupportSection.jsx
import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SupportSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 bg-white text-black">
      <h2 className="text-4xl font-bold text-center text-red-700 mb-10">
        Support Our Work
      </h2>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Your support helps us continue our programs and community initiatives. 
        Explore our merch or directly support 44 Bulldogs and make a difference!
      </p>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {/* Bulldogs Support Card */}
        <div className="flex flex-col items-center bg-white border-2 border-black p-6 rounded-2xl shadow hover:shadow-lg transition-transform hover:scale-105 w-64">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 mb-4">
            <FaHeart size={36} className="text-red-600" />
          </div>
          <p className="text-xl font-semibold text-center mb-4">
            Support 44 Bulldogs
          </p>
          <button
            onClick={() => navigate("/bulldogs")}
            className="flex items-center gap-2 bg-red-600 hover:bg-black text-white font-semibold px-4 py-2 rounded-full transition-all"
          >
            View & Support <FaShoppingCart />
          </button>
        </div>

        {/* Merch Card */}
        <div className="flex flex-col items-center bg-white border-2 border-black p-6 rounded-2xl shadow hover:shadow-lg transition-transform hover:scale-105 w-64">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 mb-4">
            <FaShoppingCart size={36} className="text-black" />
          </div>
          <p className="text-xl font-semibold text-center mb-4">
            Buy Our Merch
          </p>
          <button
            onClick={() => navigate("/bulldogs")}
            className="flex items-center gap-2 bg-red-600 hover:bg-black text-white font-semibold px-4 py-2 rounded-full transition-all"
          >
            Shop Now <FaShoppingCart />
          </button>
        </div>
      </div>
    </section>
  );
}
