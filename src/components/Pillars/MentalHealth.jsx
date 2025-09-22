// src/components/MentalHealth.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MentalHealth() {
  const trainingImages = [
    "/assets/mh1.jpg",
    "/assets/mh2.jpg",
    "/assets/mh3.jpg",
    "/assets/mh4.jpg",
  ];

  // Fade-in variants for sequential animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Page Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-red-600 text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Mental Wellbeing
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-gray-700 text-lg md:text-xl leading-relaxed text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        We are committed to supporting the mental health of young people through
        awareness, training, and community engagement. By empowering youth with
        the right tools, we reduce stigma, build resilience, and create safe
        spaces where conversations on mental wellbeing can thrive.
      </motion.p>

      {/* Awareness & Training Report Section */}
      <motion.div
        className="bg-gray-50 p-6 rounded-xl shadow space-y-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <h2 className="text-2xl font-semibold text-green-700 text-center md:text-left">
          Mental Health Awareness & Training
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Mental health challenges remain a pressing issue for Kenyan youth, with
          many facing depression and anxiety worsened by socioeconomic pressures,
          limited access to care, and persistent stigma. Being a youth-centered
          organization, <span className="font-medium">Ujana na Ujuzi CBO</span> was
          founded on the commitment to address such priority issues affecting
          young people.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We recognize that promoting mental wellbeing requires not only
          awareness but also <span className="font-medium">specialized training
          and capacity building</span>. Our approach empowers members to become
          advocates — and trainers of advocates — ensuring long-term impact within
          the community.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The program involves active participation in{" "}
          <span className="font-medium">discussions, workshops, and short courses</span>{" "}
          that align with our mission and vision of empowering young people.
          Through strong partnerships with{" "}
          <span className="font-medium">YMCA</span> and{" "}
          <span className="font-medium">Nivishe Initiative</span>, we have
          strengthened our capacity in this space.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Recently, our members <span className="font-medium">Derrick</span> and{" "}
          <span className="font-medium">Nellius</span> successfully completed a
          mental health course at Nivishe, equipping them with skills to train
          others and extend our advocacy work further.
        </p>

        {/* Training Gallery */}
        <motion.div
          className="mt-6 flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200 py-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {trainingImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Mental Health Training ${idx + 1}`}
              className="flex-shrink-0 w-64 h-48 object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-gray-100 p-2"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
