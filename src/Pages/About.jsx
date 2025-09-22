import React, { useEffect, useState } from "react";

export default function About() {
  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    bible: false,
    missionVision: false,
    coreValues: false,
    strategies: false,
    secretariat: false,
    execCommittee: false,
  });

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleSections((prev) => ({ ...prev, intro: true })), 300),
      setTimeout(() => setVisibleSections((prev) => ({ ...prev, bible: true })), 600),
      setTimeout(() => setVisibleSections((prev) => ({ ...prev, missionVision: true })), 900),
      setTimeout(() => setVisibleSections((prev) => ({ ...prev, coreValues: true })), 1200),
      setTimeout(() => setVisibleSections((prev) => ({ ...prev, strategies: true })), 1500),
      setTimeout(() => setVisibleSections((prev) => ({ ...prev, secretariat: true })), 1800),
      setTimeout(() => setVisibleSections((prev) => ({ ...prev, execCommittee: true })), 2100),
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  const fadeClass = (show) =>
    `transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"}`;

  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">
        About the Organization
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Intro */}
        <p className={`${fadeClass(visibleSections.intro)} text-lg leading-relaxed text-center`}>
          We are a <span className="font-semibold">youth-led and youth-serving Community Based Organization (CBO)</span> 
          in Nairobi, registered with the State Department for Social Development at the Roysambu Sub-county Office.  
          We work in the areas of <span className="text-red-600 font-semibold">climate action</span>,{" "}
          <span className="text-red-600 font-semibold">civic engagement</span> and{" "}
          <span className="text-red-600 font-semibold">mental health wellbeing</span>, aligned to the 
          Sustainable Development Goals (SDGs) and the Youth Development Index (YDI).
        </p>

        {/* Bible Verse */}
        <blockquote className={`${fadeClass(visibleSections.bible)} border-l-4 border-red-600 pl-4 italic text-gray-600`}>
          “Don't let anyone look down on you because you are young, but set an
          example for the believers in speech, in conduct, in love, in faith and
          in purity.” — 1 Timothy 4:12
        </blockquote>

        {/* Mission & Vision */}
        <div className={`${fadeClass(visibleSections.missionVision)} grid md:grid-cols-2 gap-8`}>
          <div className="bg-red-50 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-red-600 mb-3">Mission</h3>
            <p>
              To establish and sustain a model community of skilled urban youth
              in speech, conduct and love.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-red-600 mb-3">Vision</h3>
            <p>
              A model skilled urban youth community within Nairobi City.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className={fadeClass(visibleSections.coreValues)}>
          <h3 className="text-2xl font-bold text-red-600 mb-4">Core Values</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Youth Inclusion</li>
            <li>Sustainable Development</li>
            <li>Global Citizenship</li>
            <li>Data-Oriented Policies</li>
            <li>People-Centered Development</li>
          </ul>
        </div>

        {/* Strategies */}
        <div className={fadeClass(visibleSections.strategies)}>
          <h3 className="text-2xl font-bold text-red-600 mb-4">Strategies</h3>
          <p>
            Community organizing, policy influencing, volunteerism, partnerships & collaborations, 
            advocacy, research and surveys, among others.
          </p>
        </div>

        {/* Address & Secretariat */}
        <div className={`${fadeClass(visibleSections.secretariat)} bg-gray-50 p-6 rounded-lg shadow space-y-2`}>
          <h3 className="text-2xl font-bold text-red-600">Secretariat</h3>
          <p><span className="font-semibold">Postal Address:</span> 19784-00100 GPO Nairobi</p>
          <p><span className="font-semibold">Email:</span> ujananaujuzi@gmail.com</p>
          <p><span className="font-semibold">Office Location:</span> Zimmerman, Roysambu (hosted by Robbins Law Consultancy)</p>
          <p><span className="font-semibold">Staffing:</span> Volunteer-based, no payroll staff</p>
        </div>

        {/* Executive Committee */}
        <div className={fadeClass(visibleSections.execCommittee)}>
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            Executive Committee
          </h3>
          <p className="mb-2">Founding members include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Robbin Karani</li>
            <li>Derrick Kubai</li>
            <li>Richard Otene</li>
            <li>Elizabeth Kariuki</li>
            <li>Charity Maina</li>
            <li>Eva Muasya</li>
            <li>Nellius Gitonga</li>
            <li>Ramadhan Omar</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

