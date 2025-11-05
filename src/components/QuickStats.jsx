// src/components/QuickStats.jsx
import React, { useEffect, useState } from "react";
import { FaTree, FaUsers, FaHeart, FaChalkboardTeacher } from "react-icons/fa";

const statsData = [
  { title: "Community Reached", value: 1200, icon: <FaUsers size={32} className="text-red-600" /> },
  { title: "Trees Planted", value: 1000, icon: <FaTree size={32} className="text-black" /> },
  { title: "Mental Health Sessions", value: 100, icon: <FaHeart size={32} className="text-red-600" /> },
  { title: "Workshops Conducted", value: 50, icon: <FaChalkboardTeacher size={32} className="text-black" /> },
];

export default function QuickStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 30;
    const increments = statsData.map(stat => Math.ceil(stat.value / (duration / intervalTime)));

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) =>
          count + increments[i] >= statsData[i].value ? statsData[i].value : count + increments[i]
        )
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 bg-white text-black">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-red-700">
        Our Impact
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
        {statsData.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white border-2 border-red-600 p-5 sm:p-6 rounded-2xl shadow 
                       hover:shadow-lg transition-transform hover:scale-105 w-[9.5rem] sm:w-56 md:w-64"
          >
            <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-red-100 mb-4">
              {stat.icon}
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-black">{counts[i]}+</p>
            <p className="mt-2 text-center text-base sm:text-lg font-semibold leading-tight">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
