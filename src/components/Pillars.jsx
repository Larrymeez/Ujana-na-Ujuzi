import React from "react";

export default function Pillars() {
  return (
    <section className="py-12 px-6 bg-white" id="pillars">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
        Our Pillars
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Civic Education */}
        <div
          id="civic"
          className="p-6 bg-red-50 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-4">Civic Education</h3>
          <p>
            We equip communities with knowledge about their rights,
            responsibilities, and participation in governance to foster
            accountability and active citizenship.
          </p>
        </div>

        {/* Mental Health */}
        <div
          id="mental"
          className="p-6 bg-red-50 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-4">Mental Health</h3>
          <p>
            We raise awareness, provide support systems, and reduce stigma
            around mental health to promote overall well-being in society.
          </p>
        </div>

        {/* Environmental Conservation */}
        <div
          id="environment"
          className="p-6 bg-red-50 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-4">
            Environmental Conservation
          </h3>
          <p>
            Through education and community initiatives, we encourage
            sustainable practices to protect our environment for future
            generations.
          </p>
        </div>
      </div>
    </section>
  );
}
