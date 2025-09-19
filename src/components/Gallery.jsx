import React from "react";

export default function Gallery() {
  const placeholderItems = [
    { id: 1, title: "Event 1", description: "Description for Event 1" },
    { id: 2, title: "Event 2", description: "Description for Event 2" },
    { id: 3, title: "Event 3", description: "Description for Event 3" },
    { id: 4, title: "Event 4", description: "Description for Event 4" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
        Gallery & Media
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placeholderItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center text-gray-500">
              Image/Video
            </div>
            <h3 className="font-semibold text-red-600">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
