import React from "react";
import tree1 from "../../assets/tree1.jpg";
import tree2 from "../../assets/tree2.jpg";
import tree3 from "../../assets/tree3.jpg";


export default function EnvironmentalConservation() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
        Environmental Conservation
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Intro */}
        <p className="text-lg leading-relaxed text-center">
          The exercise was organized and well attended by youth drawn from{" "}
          <span className="font-semibold">Ujana na Ujuzi</span> and{" "}
          <span className="font-semibold">Green Globe International CBOs</span>. 
          We resolved to grow the trees by enlisting{" "}
          <span className="font-semibold">Roysambu Primary School</span> as a
          project under the <span className="text-green-700 font-semibold">Jaza Miti App</span>,
          while also engaging the pupils on the indigenous names of the tree seedlings.
        </p>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <img
            src={tree1}
            alt="Tree planting event"
            className="rounded-lg shadow-md hover:scale-105 transform transition duration-300"
          />
          <img
            src={tree2}
            alt="Youth planting trees"
            className="rounded-lg shadow-md hover:scale-105 transform transition duration-300"
          />
          <img
            src={tree3}
            alt="Pupils learning about indigenous trees"
            className="rounded-lg shadow-md hover:scale-105 transform transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
