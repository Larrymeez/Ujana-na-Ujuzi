import React from "react";

export default function Hero({ children }) {
  return (
    <section className="text-center py-12 bg-red-50 rounded-lg shadow-md">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 animate-fadeIn">
        Welcome to Ujana na Ujuzi
      </h1>
      {children && <div className="mt-4">{children}</div>}
    </section>
  );
}
