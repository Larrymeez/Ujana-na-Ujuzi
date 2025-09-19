import React from "react";
import Hero from "./Hero.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero>
        <p className="text-lg text-gray-600 italic text-center">
          Empowering Youth for Civic Education, Mental Health & Environmental Action
        </p>
      </Hero>

      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-600">Welcome to Ujana na Ujuzi</h2>
        <p className="mt-4 text-gray-700">
          Explore our pillars to learn more about our work in Civic Education, Mental Health, and Environmental Conservation.
        </p>
      </section>
    </div>
  );
}

