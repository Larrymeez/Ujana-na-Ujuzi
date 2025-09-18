import React from "react";

export default function Hero() {
  return (
    <section className="bg-light text-dark min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-primary font-extrabold text-5xl md:text-6xl mb-4">
        Ujana na Ujuzi
      </h1>
      <p className="text-dark text-lg md:text-xl mb-6">
        Civic Education • Mental Health • Environmental Conservation
      </p>
      <button className="bg-primary text-light font-bold px-6 py-3 rounded hover:bg-dark transition">
        Get Involved
      </button>
    </section>
  );
}
