import React from "react";

export default function PillarCard({ title, description, link, bgImage }) {
  return (
    <a
      href={link}
      className="relative block rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 min-h-[18rem]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered content */}
      <div className="relative flex flex-col justify-center items-center text-center h-full p-6">
        <h3 className="text-2xl font-bold mb-2 text-red-600">{title}</h3>
        <p className="text-white text-1xl">{description}</p>
      </div>
    </a>
  );
}
