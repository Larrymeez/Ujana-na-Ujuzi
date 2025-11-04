import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/assets/hero9.jpg",
  "/assets/hero2.jpg",
  "/assets/bulldog33.jpg",
  "/assets/bulldog24.jpg",
  "/assets/bulldog26.jpg",
  "/assets/event2.jpg",
  "/assets/bulldog25.jpg", 
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowText(true), 500);
  }, []);

  return (
    <section className="relative w-full h-[95vh]">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Soft blurred edges background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20 rounded-3xl blur-md"></div>
      </div>

      {/* Logos */}
      <div className="absolute top-6 left-6">
        <img src="/assets/logo.png" alt="Logo Left" className="w-36 object-contain" />
      </div>
      <div className="absolute top-6 right-6">
        <img src="/assets/logo.png" alt="Logo Right" className="w-36 object-contain" />
      </div>

      {/* Hero Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-12">
        <p
          className={`mt-2 max-w-3xl font-bold text-xl italic text-green transition-all duration-700 transform delay-200 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } hover:scale-105`}
        >
          In{" "}
          <span
            className={`relative font-bold text-red-400 not-italic inline-block transition-all duration-700 delay-[400ms] ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Speech
          </span>
          ,{" "}
          <span
            className={`relative font-bold text-red-400 not-italic inline-block transition-all duration-700 delay-[700ms] ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Conduct
          </span>{" "}
          &{" "}
          <span
            className={`relative font-bold text-red-400 not-italic inline-block transition-all duration-700 delay-[1000ms] ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Love
          </span>
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition duration-300"
        >
          Join Us
        </Link>
      </div>

      {/* Minimal Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1 h-1 rounded-full transition-colors duration-300 ${
              index === current ? "bg-red-500" : "bg-gray-300/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
