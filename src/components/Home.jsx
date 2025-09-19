import React from "react";
import Hero from "./Hero.jsx";
import PillarCard from "./PillarCard.jsx";

export default function Home() {
  return (
    <main className="bg-white min-h-screen px-6 py-12">
      {/* Hero Section */}
      <Hero />

      {/* Pillars preview */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
          Our Pillars
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <PillarCard
            title="Civic Engagement"
            description="Workshops, voter education, community dialogues and youth programs to build civic awareness and participation."
            link="/civic"
          />
          <PillarCard
            title="Mental Health"
            description="Peer-support groups, awareness campaigns, and referrals to professional services."
            link="/mental"
          />
          <PillarCard
            title="Climate Action"
            description="Tree planting, clean-up drives, and environmental education for schools and communities."
            link="/env"
          />
        </div>
      </div>
    </main>
  );
}
