import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    "/assets/event1.jpg",
    "/assets/event2.jpg",
    "/assets/event3.jpg",
    "/assets/event4.jpg",
    "/assets/event5.jpg",
    "/assets/civic1.jpg",
    "/assets/civic2.jpg",
    "/assets/civic3.jpg",
    "/assets/hero2.jpg",
    "/assets/civic4.jpg",
    "/assets/civic5.jpg",
    "/assets/tree1.jpg",
    "/assets/tree2.jpg",
    "/assets/tree3.jpg",
    "/assets/envi1.jpg",
    "/assets/envi2.jpg",
    "/assets/envi3.jpg",
    "/assets/envi4.jpg",
    "/assets/bull1.jpg",
    "/assets/hero5.jpg",
    "/assets/tree7.jpg",
    "/assets/hero8.jpg",
    "/assets/hero3.jpg",
    "/assets/hero6.jpg",
  ];

  const [selected, setSelected] = useState(null);

  const handlePrev = () => {
    setSelected((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-red-600 mb-4">
        Gallery
      </h2>

      {/* Tagline */}
      <p className="text-center text-lg font-bold italic text-gray-600 mb-10 transition-transform duration-300 hover:scale-105">
        “In Speech, Conduct and Love”
      </p>

      {/* Modern Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className={`overflow-hidden rounded-xl shadow-md cursor-pointer ${
              idx % 5 === 0 ? "col-span-2 row-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelected(idx)}
          >
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
              onClick={() => setSelected(null)}
            >
              <X size={36} />
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-6 text-white hover:scale-110 transition"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <motion.img
              key={selected}
              src={images[selected]}
              alt="Selected"
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Next Button */}
            <button
              className="absolute right-6 text-white hover:scale-110 transition"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
