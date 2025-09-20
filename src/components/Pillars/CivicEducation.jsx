import React, { useEffect, useState } from "react";

export default function CivicEducation() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in on mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const ngarishaImages = [
    "/assets/event1.jpg",
    "/assets/event2.jpg",
    "/assets/event3.jpg",
    "/assets/event4.jpg",
    "/assets/event5.jpg",
  ];

  const festivalImages = [
    "/assets/civic1.jpg",
    "/assets/civic2.jpg",
    "/assets/civic3.jpg",
    "/assets/civic4.jpg",
    "/assets/civic5.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Page Title */}
      <h1
        className={`text-3xl md:text-4xl font-bold text-red-600 text-center transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        Civic Engagement
      </h1>

      {/* Brief Introduction */}
      <p
        className={`text-gray-700 text-lg md:text-xl leading-relaxed text-center transition-opacity duration-700 delay-200 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        We empower community members to actively participate in decision-making
        processes and civic life. Through forums, outreach activities, and
        advocacy, we create spaces where voices are heard and collective action
        drives positive change.
      </p>

      {/* Ng’arisha Event Section */}
      <div
        className={`bg-gray-50 p-6 rounded-xl shadow space-y-6 transition-opacity duration-700 delay-400 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl font-semibold text-green-700 text-center md:text-left">
          A Look Back: Ng’arisha Mtaa Bonga Green
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Our End-of-Year Ecosystem Restoration engagement in Nanyuki, Laikipia
          County, brought together the community under the theme{" "}
          <span className="italic">Ng’arisha Mtaa Bonga Green</span>. The
          initiative was spearheaded by Ng’arisha Mtaa Initiative in partnership
          with the Dedan Kimathi Foundation.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The day featured civic education on waste segregation and interactive
          sessions on proper waste management, empowering residents to take
          collective action for a cleaner, greener community.
        </p>

        <p className="font-medium text-gray-700">
          Special appreciation goes to the 44 Bulldogs FC representatives for
          their active role in the plenary session.
        </p>

        {/* Ng’arisha Horizontal Scroll Gallery */}
        <div className="mt-6 flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200 py-2">
          {ngarishaImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Ng'arisha Event ${idx + 1}`}
              className={`flex-shrink-0 w-64 h-48 object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-gray-100 p-2 transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${600 + idx * 150}ms` }}
            />
          ))}
        </div>
      </div>

      {/* People Dialogue Festival Section */}
      <div
        className={`bg-gray-50 p-6 rounded-xl shadow space-y-6 transition-opacity duration-700 delay-800 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl font-semibold text-green-700 text-center md:text-left">
          People Dialogue Festival (6th Edition)
        </h2>

        <p className="text-gray-700 leading-relaxed">
          As we marked the second day of the{" "}
          <span className="italic">People Dialogue Festival (6th Edition)</span>,
          we remained steadfast in our commitment to amplifying the voice of
          youth in critical discourse on good governance, transparency, and
          accountability — in line with Chapter 6 of the Constitution of Kenya
          (2010).
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our participation provided a platform for young people to share
          perspectives, exchange ideas, and engage decision-makers on issues
          that directly affect their communities. Through dialogue, we
          emphasized the vital role of youth in promoting integrity,
          strengthening democratic values, and demanding accountability from
          leadership.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This engagement not only highlighted the vibrancy of youth voices but
          also reaffirmed our belief that sustainable change begins when young
          people are empowered to lead conversations on governance.
        </p>

        {/* Festival Horizontal Scroll Gallery */}
        <div className="mt-6 flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200 py-2">
          {festivalImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Festival Event ${idx + 1}`}
              className={`flex-shrink-0 w-64 h-48 object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-gray-100 p-2 transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${1200 + idx * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
