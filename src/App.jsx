import React, { useState, useRef } from "react";
import Hero from "./components/Hero.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import MobileMenu from "./components/MobileMenu.jsx";

// --- Animated Collapsible Section ---
const CollapsibleSection = ({ title, summary, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHeight(!isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  };

  return (
    <div className="border rounded-md p-6 bg-white shadow-md transition-all duration-300">
      <button
        className="w-full text-left flex justify-between items-center text-xl font-semibold text-primary hover:text-red-700 transition-colors"
        onClick={toggleOpen}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <p className="mt-2 text-gray-700">{summary}</p>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out mt-4"
      >
        {items.map((item, idx) => (
          <div key={idx} className="pl-4 mb-4">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-gray-700">{item.text}</p>
            {item.subItems && (
              <ul className="list-disc list-inside mt-1 text-gray-600">
                {item.subItems.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Data ---
const civicEducationData = {
  title: "Civic Engagement",
  summary: "Empowering youth to participate in governance and community decision-making.",
  items: [
    {
      title: "Standing Commission",
      text: "The inaugural implementing body was appointed on an interim basis, tasked with laying the foundation for institutional structures, procedures, and project evaluation.",
      subItems: ["Robbin Karani","Derrick Kubai","Nancy Wambui","Lucy Nyambura","Brian Chacha"]
    },
    {
      title: "Activities Report: Youth Policy for Nairobi City County",
      text: "Ujana na Ujuzi volunteers registered at the Onestop Youth Resource and Information Centre and participated in Youth programmes. The Chairman was nominated to the Technical Working Group."
    },
    {
      title: "Scope & Partners",
      text: "Volunteering and sponsorship from NGOs such as County Governance Watch, Youth Alive Kenya, and Pamoja Trust. Key activities included workshops and the official launch at Charter Hall, Nairobi."
    }
  ]
};

const mentalHealthData = {
  title: "Mental Health Wellbeing",
  summary: "Addressing youth mental health challenges through training, awareness, and advocacy programs.",
  items: [
    {
      title: "Standing Commission",
      text: "The inaugural implementing body was appointed on an interim basis for project evaluation.",
      subItems: ["Robbin Karani","Derrick Kubai","Charity Maina","Ramadhan Omar","Nellius Wanja"]
    },
    {
      title: "Activities Report",
      text: "Training members as advocates and trainers of advocates to tackle depression and anxiety among youth."
    },
    {
      title: "Scope & Partnerships",
      text: "Includes workshops, discussions, and short courses. Main partners: YMCA and Nivishe Initiative."
    }
  ]
};

const environmentData = {
  title: "Climate Action & Environmental Conservation",
  summary: "Implementing initiatives like river rehabilitation, pollution control, and community awareness programs.",
  items: [
    {
      title: "Standing Commission",
      text: "Appointed on an interim basis to lay foundations for institutional structures.",
      subItems: ["Robbin Karani","Derrick Kubai","Emmah Njeri","Faith Nyambura","Eva Muasya"]
    },
    {
      title: "Activities Report: Adopt a River Initiative",
      text: "Partnership with NEMA focusing on awareness, advocacy, waste management, and riverbank rehabilitation."
    },
    {
      title: "Scope & Implementation",
      text: "Courtesy visits, peer learning, site visits, and feasibility studies to improve sanitation and enforce pollution control."
    }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light text-dark">
      {/* Header / Nav */}
      <header className="bg-light shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            Ujana na Ujuzi
          </a>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#civic" className="hover:text-primary transition-colors">Civic</a>
            <a href="#mental" className="hover:text-primary transition-colors">Mental</a>
            <a href="#env" className="hover:text-primary transition-colors">Environment</a>
          </nav>

          <MobileMenu />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 space-y-8">
        <Hero />

        <section id="civic">
          <CollapsibleSection {...civicEducationData} />
        </section>

        <section id="mental">
          <CollapsibleSection {...mentalHealthData} />
        </section>

        <section id="env">
          <CollapsibleSection {...environmentData} />
        </section>

        <ContactForm id="contact" />
      </main>

      <Footer />
    </div>
  );
}
