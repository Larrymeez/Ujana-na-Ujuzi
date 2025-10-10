// src/components/QuickStats.jsx
import React, { useEffect, useState } from "react";
import { FaTree, FaUsers, FaHeart, FaChalkboardTeacher } from "react-icons/fa";

const statsData = [
  { title: "Community Reached", value: 1200, icon: <FaUsers size={36} className="text-red-600" /> },
  { title: "Trees Planted", value: 850, icon: <FaTree size={36} className="text-black" /> },
  { title: "Mental Health Sessions", value: 320, icon: <FaHeart size={36} className="text-red-600" /> },
  { title: "Workshops Conducted", value: 45, icon: <FaChalkboardTeacher size={36} className="text-black" /> },
];

export default function QuickStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 30; // update every 30ms
    const increments = statsData.map(stat => Math.ceil(stat.value / (duration / intervalTime)));

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) => {
          if (count + increments[i] >= statsData[i].value) return statsData[i].value;
          return count + increments[i];
        })
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-red-700">
        Our Impact
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {statsData.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white border-2 border-red-600 p-6 rounded-2xl shadow hover:shadow-lg transition-transform hover:scale-105 w-64"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 mb-4">
              {stat.icon}
            </div>
            <p className="text-3xl font-extrabold text-black">{counts[i]}</p>
            <p className="mt-2 text-center text-lg font-semibold">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
