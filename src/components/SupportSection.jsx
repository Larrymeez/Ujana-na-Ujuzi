import React from "react";
import { useNavigate } from "react-router-dom";

export default function SupportSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="w-full h-full">
          <img
            src="/assets/support.jpg"
            alt="Support our programs"
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Text + CTA */}
        <div className="flex flex-col justify-center gap-5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
            Support Our Programmes
          </h2>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            Join our mission to empower communities through impactful workshops,
            youth programmes, and civic engagement activities. Every contribution
            helps us reach more people and create lasting change.
          </p>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            By supporting our initiatives, you are helping young people, families,
            and local communities gain access to education, mental health resources,
            and environmental awareness programmes.
          </p>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            Explore our merchandise or reach out to learn how you can get involved
            and make a tangible difference today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
            <button
              onClick={() => navigate("/bulldogs")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
            >
              Explore Merchandise
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white border-2 border-red-600 hover:bg-red-50 text-red-600 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
