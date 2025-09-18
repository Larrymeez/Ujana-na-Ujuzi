import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Ujana na Ujuzi</h1>
          <p className="mt-4 text-lg text-gray-600">
            A grassroots CBO promoting civic education, mental health support and environmental conservation.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="bg-green-600 text-white px-5 py-3 rounded-md shadow">Get Involved</a>
            <a href="#civic" className="border border-green-600 text-green-600 px-5 py-3 rounded-md">Our Work</a>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full h-64 rounded-lg bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">[Banner / illustration]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
