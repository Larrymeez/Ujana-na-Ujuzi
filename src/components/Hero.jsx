import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="text-center py-16 bg-red-50 rounded-lg shadow-md mx-4 my-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Empowering Communities, Inspiring Change
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Ujana na Ujuzi is a grassroots CBO dedicated to Civic Education,
        Mental Health, and Environmental Conservation.
      </p>
      <button className="px-6 py-3 bg-red-600 text-white rounded-2xl shadow hover:bg-red-700 transition">
        Join Us
      </button>
    </section>
  );
}
