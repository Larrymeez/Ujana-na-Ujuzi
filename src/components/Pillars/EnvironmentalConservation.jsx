import React from "react";

export default function EnvironmentalConservation() {
  const trees = [
    "/assets/tree1.jpg",
    "/assets/tree2.jpg",
    "/assets/tree3.jpg",
  ];

  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
        Environmental Conservation
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Intro */}
        <p className="text-lg leading-relaxed text-center">
          A tree planting exercise was organized and well attended by youth drawn from{" "}
          <span className="font-semibold">Ujana na Ujuzi</span> and{" "}
          <span className="font-semibold">Green Globe International CBOs</span>. 
          We resolved to grow the trees by enlisting{" "}
          <span className="font-semibold">Roysambu Primary School</span> as a
          project under the <span className="text-green-700 font-semibold">Jaza Miti App</span>,
          while also engaging the pupils on the indigenous names of the tree seedlings.
        </p>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {trees.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Tree event ${idx + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transform transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
