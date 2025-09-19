import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
        About the Organization
      </h1>

      {/* Intro */}
      <p className="mb-6 leading-relaxed">
        We are a youth-led and youth-serving Community Based Organization (CBO)
        in Nairobi registered with the State Department for Social Development
        at the Roysambu Sub-county Office, Republic of Kenya. Our focus areas
        include <span className="font-semibold">climate action, civic engagement, and mental wellbeing</span>,
        aligning with the <span className="font-semibold">Sustainable Development Goals (SDGs)</span> and the
        <span className="font-semibold"> Youth Development Index (YDI).</span>
      </p>

      <blockquote className="italic border-l-4 border-red-500 pl-4 mb-6 text-gray-300">
        “Don't let anyone look down on you because you are young, but set an
        example for the believers in speech, in conduct, in love, in faith and
        in purity.” – 1 Timothy 4:12
      </blockquote>

      {/* Mission */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">Mission</h2>
      <p className="mb-6">
        To establish and sustain a model community of skilled urban youth in
        speech, conduct, and love.
      </p>

      {/* Vision */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">Vision</h2>
      <p className="mb-6">
        A model skilled urban youth community within Nairobi City.
      </p>

      {/* Core Values */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">Core Values</h2>
      <ul className="list-disc list-inside mb-6 space-y-1 text-gray-300">
        <li>Youth Inclusion</li>
        <li>Sustainable Development</li>
        <li>Global Citizenship</li>
        <li>Data-oriented policies</li>
        <li>People-centered development</li>
      </ul>

      {/* Strategies */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">Strategies</h2>
      <ul className="list-disc list-inside mb-6 space-y-1 text-gray-300">
        <li>Community Organizing</li>
        <li>Policy Influencing</li>
        <li>Volunteerism</li>
        <li>Partnerships / Collaborations</li>
        <li>Advocacy, Research & Surveys</li>
      </ul>

      {/* Institution Strengthening */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">
        Institution Strengthening
      </h2>
      <p className="mb-2">
        <strong>Address:</strong> P.O Box 19784-00100, GPO Nairobi.  
        <strong>Email:</strong> ujananaujuzi@gmail.com
      </p>
      <p className="mb-2">
        <strong>Office Location:</strong> Zimmerman, Roysambu (hosted by
        Robbins Law Consultancy).
      </p>
      <p className="mb-6">
        <strong>Staff:</strong> Runs on volunteerism, no staff on payroll.  
        <strong>Accounts:</strong> All transactions are currently cash-based.
      </p>

      {/* Executive Committee */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">
        Executive Committee
      </h2>
      <p className="mb-6">
        Founding committee included: Robbin Karani, Derrick Kubai, Richard
        Otene, Elizabeth Kariuki, Charity Maina, Eva Muasya, Nellius Gitonga,
        and Ramadhan Omar.
      </p>

      {/* Admin & Compliance */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">
        Administration & Compliance
      </h2>
      <p className="mb-6">
        Registration was facilitated by Robbins Law Consultancy at the Kasarani
        Sub-County Social Development Office. Founding members contributed fees
        and obtained the certificate of registration.
      </p>

      {/* Meetings */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">Meetings</h2>
      <p className="mb-6">
        Leadership team met virtually 3 times during the year and held an AGM
        on 12th December 2022 at Garden Estate, Roysambu.
      </p>

      {/* Org Structure */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">
        Organizational Structure
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-1 text-gray-300">
        <li>Office Bearers: Chairperson, Secretary, Treasurer</li>
        <li>Executive Committee Members</li>
        <li>Staff & Volunteers</li>
        <li>Consultants</li>
        <li>Project Coordinators</li>
        <li>Projects</li>
      </ul>

      {/* Training */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">
        Capacity Building & Training
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-1 text-gray-300">
        <li>
          <strong>Robbin Karani:</strong> Leadership fellowship (International
          Republican Institute, IRI).
        </li>
        <li>
          <strong>Derrick Kubai:</strong> Graduate of the International Biblical
          Leadership Institute (IBLI).
        </li>
      </ul>

      {/* Membership */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">
        General Membership
      </h2>
      <p className="mb-6">
        At registration, the organization had 23 members. Membership fees:  
        New members – Ksh. 500, Annual renewal – Ksh. 200.
      </p>

      {/* Welfare */}
      <h2 className="text-2xl font-bold text-red-400 mt-8 mb-4">Welfare</h2>
      <p>
        A WhatsApp group “Ujana na Ujuzi C.B.O” connects all paid-up members
        and serves as a communication platform.
      </p>
    </section>
  );
}
