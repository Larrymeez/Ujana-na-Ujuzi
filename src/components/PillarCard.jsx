import React from "react";

export default function PillarCard({ title, description, link, bgImage }) {
  return (
    <a
      href={link}
      className="relative block rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 
                 min-h-[14rem] sm:min-h-[16rem] md:min-h-[18rem] w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 py-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-red-600">
          {title}
        </h3>
        <p className="text-white text-sm sm:text-base md:text-lg leading-snug max-w-xs sm:max-w-md">
          {description}
        </p>
      </div>
    </a>
  );
}
