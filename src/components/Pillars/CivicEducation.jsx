import React from "react";

export default function CivicEducation() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Civic Engagement</h1>

      {/* Brief Introduction */}
      <p>
        We empower community members to actively participate in decision-making
        processes and civic life. Through forums, outreach activities, and
        advocacy, we create spaces where voices are heard and collective action
        drives positive change.
      </p>

      {/* Event Highlight Section */}
      <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          A Look Back: Ng’arisha Mtaa Bonga Green
        </h2>
        <p className="mb-3">
          Our End-of-Year Ecosystem Restoration engagement in Nanyuki, Laikipia
          County, brought together the community under the theme{" "}
          <span className="italic">Ng’arisha Mtaa Bonga Green</span>. The
          initiative was spearheaded by Ng’arisha Mtaa Initiative in partnership
          with the Dedan Kimathi Foundation.
        </p>
        <p className="mb-3">
          The day featured civic education on waste segregation and interactive
          sessions on proper waste management, empowering residents to take
          collective action for a cleaner, greener community.
        </p>
        <p className="font-medium text-gray-700">
          Special appreciation goes to the 44 Bulldogs FC representatives for
          their active role in the plenary session.
        </p>

        {/* Image Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/event1.jpg"
            alt="Community engagement during the event"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
          <img
            src="/images/event2.jpg"
            alt="Waste segregation civic education"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
          <img
            src="/images/event3.jpg"
            alt="Group photo of participants"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
