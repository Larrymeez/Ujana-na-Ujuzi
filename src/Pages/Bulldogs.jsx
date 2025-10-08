import React from "react";

export default function Bulldogs() {
  return (
    <section className="min-h-screen bg-black text-white font-sans">
      {/* Hero / Header */}
      <div className="relative text-center py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-5xl font-extrabold text-blue-500 tracking-tight mb-4">
          44 Bulldogs Football Club
        </h1>
        <p className="text-lg text-gray-300 italic max-w-2xl mx-auto px-4">
          “Building resilience, unity, and purpose through football.”
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-blue-400 border-l-4 border-red-600 pl-3">
          About the Club
        </h2>
        <p className="text-gray-300 leading-relaxed">
          44 Bulldogs FC is a youth-centered grassroots football initiative
          established under <span className="text-blue-400 font-semibold">Ujana na Ujuzi CBO</span>.
          We are committed to transforming football into a tool for
          <span className="text-red-500 font-semibold"> peace, mental health, and empowerment.</span>
        </p>

        {/* Placeholder Images Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`/assets/placeholder${num}.jpg`}
                alt={`Bulldogs placeholder ${num}`}
                className="w-full h-56 object-cover opacity-90 hover:opacity-100"
              />
              <div className="p-4">
                <p className="text-gray-400 text-sm italic">
                  Training session {num}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Jersey Reveal */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-6">
          🔥 New Season Jersey Unveiled!
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Our 2025/26 season jersey celebrates unity, resilience, and community pride.
          Be part of the movement — wear the spirit of the Bulldogs.
        </p>

        <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transform transition duration-500">
          <img
            src="/jersey.jpeg"
            alt="Bulldogs 2025 Jersey"
            className="w-full h-auto"
          />
        </div>

        <button className="mt-8 bg-blue-600 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105">
          Buy Now
        </button>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-black border-t border-gray-800">
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
          Join the Bulldogs Movement
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto">
          Whether you’re a player, fan, or supporter — your energy fuels our journey.
          Follow us, show up, and stay locked in for what’s next.
        </p>
      </div>
    </section>
  );
}
