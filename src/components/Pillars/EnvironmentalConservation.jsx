import React from "react";
import { motion } from "framer-motion";

export default function EnvironmentalConservation() {
  const trees = [
    "/assets/tree1.jpg",
    "/assets/tree2.jpg",
    "/assets/tree3.jpg",
  ];

  const cleanup = [
    "/assets/envi1.jpg",
    "/assets/envi2.jpg",
    "/assets/envi3.jpg",
    "/assets/envi4.jpg",
  ];

  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 px-6">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-red-600 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Environmental Conservation
      </motion.h2>

      {/* Introductory Text */}
      <motion.p
        className="max-w-4xl mx-auto text-lg text-center leading-relaxed mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        At <span className="font-semibold">Ujana na Ujuzi</span>, we believe that
        safeguarding our environment is key to ensuring a sustainable future.
        Through climate action initiatives, tree planting, and awareness
        campaigns, we empower communities—especially the youth—to take
        responsibility for the world we live in and the one we leave behind.
      </motion.p>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section 1: Tree Planting Exercise */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-green-700 text-center md:text-left">
            Tree Planting Initiative
          </h3>
          <p className="text-lg leading-relaxed text-center md:text-left">
            A tree planting exercise was organized and well attended by youth
            drawn from{" "}
            <span className="font-semibold">Ujana na Ujuzi</span> and{" "}
            <span className="font-semibold">Green Globe International CBOs</span>.
            We resolved to grow the trees by enlisting{" "}
            <span className="font-semibold">Roysambu Primary School</span> as a
            project under the{" "}
            <span className="text-green-700 font-semibold">Jaza Miti App</span>,
            while also engaging the pupils on the indigenous names of the tree seedlings.
          </p>

          {/* Image Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {trees.map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`Tree event ${idx + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transform transition duration-300 object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Section 2: Community Clean-Up */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-green-700 text-center md:text-left">
            🌍 Community Clean-Up and Green Park Initiative
          </h3>
          <p className="text-lg leading-relaxed text-center md:text-left">
            In partnership with{" "}
            <span className="font-semibold">@sport_sforgreenerenvironment</span> and{" "}
            <span className="font-semibold">@mea_na_mimea</span>, we joined the
            Kahawa West community in a powerful clean-up exercise aimed at promoting
            conservation and ecosystem restoration.
          </p>
          <p className="text-lg leading-relaxed text-center md:text-left">
            What once stood as a common dumping site has now been transformed into
            a budding green park — a space that will not only uplift the community
            but also contribute to cleaner, healthier surroundings.
          </p>
          <p className="text-lg font-medium text-center md:text-left text-green-800">
            Together, we are proving that small collective actions can lead to big
            environmental wins. Mother Nature must be proud! 🌱✨
          </p>

          {/* Cleanup Images */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {cleanup.map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`Cleanup event ${idx + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transform transition duration-300 object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
