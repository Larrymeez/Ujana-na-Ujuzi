import React from "react";

export default function Hero() {
  return (
    <section className="bg-light text-dark min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-primary font-extrabold text-5xl md:text-6xl mb-4">
        Ujana na Ujuzi
      </h1>
      <p className="text-dark text-lg md:text-xl mb-6">
        Civic Education • Environment • Mental Health
      </p>
      <button className="bg-primary text-light font-bold px-6 py-3 hover:bg-dark hover:text-light transition">
        Get Involved
      </button>
    </section>
  );
}
