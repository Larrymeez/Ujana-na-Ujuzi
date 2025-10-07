import React from "react";
import { motion } from "framer-motion";

export default function Bulldogs() {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-gray-900 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-red-600 tracking-wide"
        >
          44 Bulldogs Football Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="italic text-gray-400 mt-3 text-lg"
        >
          Football for Change. Purpose Beyond the Game.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
        >
          Join the Movement
        </motion.button>
      </section>

      {/* About Us */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">
        <h2 className="text-3xl font-bold text-red-500 border-l-4 border-red-600 pl-3">
          About Us
        </h2>
        <p className="leading-relaxed text-gray-300">
          44 Bulldogs Football Club is a human-centered local SDG action program
          established in 2023 by <span className="font-semibold text-red-400">Ujana na Ujuzi CBO</span>, a
          youth-led organization championing development through Civic
          Engagement, Mental Health, and Climate Action. Beyond the game, the
          club uses football as a tool for mental health awareness, sustainable
          development, peacebuilding, and empowerment.
        </p>

        <blockquote className="italic bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-red-600">
          “A bulldog is a person who does not allow negativity to cloud their
          mind... They understand that they will fail often but know how to
          overcome that failure quickly.” —{" "}
          <span className="font-bold text-red-400">The Bulldog Mentality</span>
        </blockquote>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Mission",
              text: "Develop resilient urban youth through football and the bulldog mindset.",
            },
            {
              title: "Vision",
              text: "A resilient Nairobi youth exploiting football as a source of livelihood.",
            },
            {
              title: "Core Values",
              text: "Boldness • Resilience • Innovation • Teamwork • Sustainability (BRITS)",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-600/40"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-red-500 mb-8">Our Objectives</h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-300">
          <li>
            Develop talent & resilience through technical football skills and discipline.
          </li>
          <li>
            Promote peace & safety via football dialogues and community events.
          </li>
          <li>
            Promote mental health & civic engagement through sports initiatives.
          </li>
          <li>
            Strengthen community bonds through grassroots organizing.
          </li>
          <li>
            Drive sustainable growth via merchandising and sports enterprises.
          </li>
        </ul>
      </section>

      {/* Milestones */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
          Milestones Achieved
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 border-l-2 border-red-600 pl-6">
          {[
            "2022/23 – Participated in FKF Nairobi East Sub County League Zone D",
            "2023 – Awarded Uprising Team of the Year (SAP Awards)",
            "2024 – Conducted 2nd Bulldogs Day & participated in FKF Branch elections",
            "2025 – Won the Inter County Football for the Goals Kenya Championship",
          ].map((milestone, idx) => (
            <motion.p
              key={idx}
              whileHover={{ x: 10 }}
              className="text-gray-300 relative"
            >
              <span className="absolute -left-3 top-2 w-2 h-2 bg-red-500 rounded-full"></span>
              {milestone}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Future Plans */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">
        <h2 className="text-3xl font-bold text-red-500">Our Future Plans</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Establish the Ujana na Ujuzi Sports Academy",
            "Expand revenue ventures — lounge, gear store, gaming zone",
            "Deepen partnerships with organizations & civil society",
            "Advance peace & advocacy initiatives using football",
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-600"
            >
              <p className="text-gray-300">{plan}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
          The Team
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { name: "Murimi Karani", role: "President & Founder" },
            { name: "Derrick Kubai", role: "1st Vice President" },
            { name: "Sofina Merinyo", role: "2nd Vice President" },
            { name: "Lincoln Wambua", role: "Sporting Director" },
            { name: "Collins Tie", role: "Technical Director" },
            { name: "Scarlet Wairimu", role: "CEO" },
          ].map((person, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-red-400">
                {person.name}
              </h3>
              <p className="text-sm text-gray-400">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jersey Shop */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          🧢 Get the 2025 Season Jersey
        </h2>
        <p className="text-gray-400 mb-8">
          Own a piece of the Bulldog legacy. Support the team and wear the pride.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <img
            src="/assets/jersey.jpg"
            alt="Bulldogs Jersey"
            className="w-64 h-64 object-contain rounded-lg shadow-lg hover:scale-105 transition"
          />
          <div>
            <p className="text-lg text-gray-300 mb-4">
              Available now — <span className="text-red-400 font-semibold">Ksh 2500</span>
            </p>
            <button className="bg-red-600 px-6 py-3 rounded-full text-white hover:bg-red-700 transition">
              Buy Now (Paybill 600100 / Acc 440047)
            </button>
          </div>
        </div>
      </section>

      {/* Join & Support */}
      <section className="bg-gray-800 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Be Part of the Impact Story
        </h2>
        <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
          Join us as a player, volunteer, mentor, or supporter. Together, we can
          redefine what football means for community and change.
        </p>
        <p className="bg-gray-900 inline-block px-6 py-3 rounded-lg border border-red-600 text-sm text-gray-400">
          💳 Paybill: <span className="text-white">600100</span> | Acc No:{" "}
          <span className="text-white">440047</span>
        </p>
      </section>
    </div>
  );
}
