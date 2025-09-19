import React from "react";
import Hero from "./Hero.jsx";
import PillarCard from "./PillarCard.jsx";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Pillars preview section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        <PillarCard
          title="Civic Education"
          description="Workshops, youth programs, and community engagement for civic awareness."
          link="/civic"
        />
        <PillarCard
          title="Mental Health"
          description="Peer-support groups, awareness campaigns, and professional referrals."
          link="/mental"
        />
        <PillarCard
          title="Environmental Conservation"
          description="Tree planting, clean-up drives, and environmental education."
          link="/env"
        />
      </section>
    </div>
  );
}

