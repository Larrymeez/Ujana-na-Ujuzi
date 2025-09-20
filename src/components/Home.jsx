import React from "react";
import Hero from "./Hero.jsx";
import PillarCard from "./PillarCard.jsx";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />

      {/* Pillars preview */}
      <div className="mt-12 px-6 grid md:grid-cols-3 gap-6">
        <PillarCard
          title="Civic Education"
          description="Workshops, voter education, community dialogues and youth programs to build civic awareness and participation."
          link="/civic"
        />
        <PillarCard
          title="Mental Health"
          description="Peer-support groups, awareness campaigns, and referrals to professional services."
          link="/mental"
        />
        <PillarCard
          title="Environmental Conservation"
          description="Tree planting, clean-up drives, and environmental education for schools and communities."
          link="/env"
        />
      </div>
    </main>
  );
}
