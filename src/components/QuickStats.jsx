// src/components/QuickStats.jsx
import React, { useEffect, useState } from "react";
import {
  FaTree,
  FaUsers,
  FaHeart,
  FaChalkboardTeacher,
} from "react-icons/fa";

const statsData = [
  {
    title: "Community Reached",
    value: 1200,
    icon: FaUsers,
  },
  {
    title: "Trees Planted",
    value: 1000,
    icon: FaTree,
  },
  {
    title: "Mental Health Sessions",
    value: 100,
    icon: FaHeart,
  },
  {
    title: "Workshops Conducted",
    value: 50,
    icon: FaChalkboardTeacher,
  },
];

export default function QuickStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 30;

    const increments = statsData.map((stat) =>
      Math.ceil(stat.value / (duration / intervalTime))
    );

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          if (count >= statsData[i].value) {
            return statsData[i].value;
          }

          return Math.min(
            count + increments[i],
            statsData[i].value
          );
        })
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-black px-5 sm:px-8 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10 md:mb-14">

          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-[2px] bg-red-600" />

            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-bold text-gray-500">
              Our Impact
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none">
              The work
              <span className="text-red-600"> speaks.</span>
            </h2>

            <p className="max-w-md text-sm md:text-base text-gray-500 leading-relaxed">
              A snapshot of the people reached, programmes delivered and
              communities supported through our work.
            </p>

          </div>

        </div>

        {/* Stats */}
        <div className="border-t border-black/10 grid grid-cols-2 md:grid-cols-4">

          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className={`
                  relative py-8 sm:py-10 md:py-12
                  px-4 sm:px-6 md:px-7
                  group
                  transition-colors duration-300
                  hover:bg-gray-50

                  ${
                    index % 2 === 0
                      ? "border-r border-black/10"
                      : ""
                  }

                  ${
                    index < 2
                      ? "border-b md:border-b-0 border-black/10"
                      : ""
                  }

                  ${
                    index !== statsData.length - 1
                      ? "md:border-r border-black/10"
                      : ""
                  }
                `}
              >

                {/* Top row */}
                <div className="flex items-center justify-between mb-8">

                  <Icon
                    size={17}
                    strokeWidth={1}
                    className="text-red-600 opacity-80 transition-transform duration-300 group-hover:-translate-y-1"
                  />

                  <span className="text-[10px] tracking-[0.2em] font-bold text-gray-300">
                    0{index + 1}
                  </span>

                </div>

                {/* Number */}
                <div className="flex items-baseline">

                  <span className="text-4xl sm:text-5xl md:text-[3.2rem] font-black tracking-[-0.04em] leading-none">
                    {counts[index].toLocaleString()}
                  </span>

                  <span className="ml-1 text-xl font-bold text-red-600">
                    +
                  </span>

                </div>

                {/* Label */}
                <p className="mt-4 text-xs sm:text-sm font-medium text-gray-500 leading-relaxed max-w-[150px]">
                  {stat.title}
                </p>

                {/* Hover line */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}