import React from "react";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import MobileMenu from "./components/MobileMenu.jsx";

// --- Civic Education Section Data ---
const civicEducationData = {
  id: "civic",
  title: "Civic Engagement",
  desc: "Ujana na Ujuzi empowers youth to actively participate in governance and community decision-making through training, policy engagement, and inclusion programs.",
  items: [
    {
      title: "Standing Commission",
      text: "The inaugural implementing body was appointed on an interim basis, tasked with laying the foundation for institutional structures, procedures, and project evaluation.",
      subItems: [
        "Robbin Karani",
        "Derrick Kubai",
        "Nancy Wambui",
        "Lucy Nyambura",
        "Brian Chacha"
      ]
    },
    {
      title: "Activities Report: Youth Policy for Nairobi City County",
      text: "Ujana na Ujuzi volunteers registered at the Onestop Youth Resource and Information Centre (managed by Nairobi City County). Interim office bearers participated in various Youth programmes. The Chairman was nominated to the Technical Working Group on the Nairobi City County Youth Policy."
    },
    {
      title: "Scope & Partners",
      text: "The project included voluntarism and sponsorship from NGOs such as County Governance Watch, Youth Alive Kenya, and Pamoja Trust. Key activities included Technical Working Group meetings, policy workshops, and the official launch of the policy document at Charter Hall, Nairobi."
    },
    {
      title: "Youth Inclusion & Ward-Based Participation in Zimmerman",
      text: "To ensure meaningful youth participation in governance, the interim standing commissioners focused on Zimmerman Ward, where most CBO members reside. Activities spanned January 22nd to November 16th, 2022, promoting youth engagement and public participation."
    }
  ]
};

// --- Mental Health Section Data ---
const mentalHealthData = {
  id: "mental",
  title: "Mental Health Wellbeing",
  desc: "Ujana na Ujuzi addresses youth mental health challenges through training, awareness, and advocacy programs.",
  items: [
    {
      title: "Standing Commission",
      text: "The inaugural implementing body was appointed on an interim basis, tasked with laying the foundation for institutional structures, procedures, and project evaluation.",
      subItems: [
        "Robbin Karani",
        "Derrick Kubai",
        "Charity Maina",
        "Ramadhan Omar",
        "Nellius Wanja"
      ]
    },
    {
      title: "Activities Report: Mental Health Awareness & Training",
      text: "Mental health challenges are significant among Kenyan youth, including high rates of depression and anxiety, exacerbated by socioeconomic factors and stigma. Ujana na Ujuzi runs programs to train members as advocates and trainers of advocates."
    },
    {
      title: "Scope & Partnerships",
      text: "The project involves discussions, workshops, and short courses aligned to the organization's mission and vision. Main partners: YMCA and Nivishe Initiative. Derrick and Nellius undertook a mental health course at Nivishe and now train other members."
    }
  ]
};

// --- Environmental Conservation Section Data ---
const environmentData = {
  id: "env",
  title: "Climate Action & Environmental Conservation",
  desc: "Ujana na Ujuzi implements climate action initiatives, including river rehabilitation, pollution control, and community awareness programs.",
  items: [
    {
      title: "Standing Commission",
      text: "The inaugural implementing body was appointed on an interim basis, tasked with laying the foundation for institutional structures, procedures, and project evaluation.",
      subItems: [
        "Robbin Karani",
        "Derrick Kubai",
        "Emmah Njeri",
        "Faith Nyambura",
        "Eva Muasya"
      ]
    },
    {
      title: "Activities Report: Adopt a River Initiative (Gathara-ini River)",
      text: "This initiative, in partnership with NEMA, focuses on public participation, awareness, knowledge transfer, advocacy, sustainable solid waste management, and rehabilitation of riverbanks. The Nairobi River Basin, including the Gathara-ini River, passes through urban settlements and faces challenges of pollution from various sources."
    },
    {
      title: "Scope & Implementation",
      text: "Activities include courtesy visits, peer learning on youth empowerment, site visits, and feasibility studies for program implementation. The project aims to improve sanitation, enforce pollution control, and promote sustainable land management along the river basin."
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
            <a href="#civic" className="hover:text-primary transition-colors">
              Civic Education
            </a>
            <a href="#mental" className="hover:text-primary transition-colors">
              Mental Health
            </a>
            <a href="#env" className="hover:text-primary transition-colors">
              Environment
            </a>
            <a
              href="#contact"
              className="bg-primary text-light px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Contact
            </a>
          </nav>

          <MobileMenu />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Hero />

        <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
          {/* Civic Section */}
          <Section
            id={civicEducationData.id}
            title={civicEducationData.title}
            desc={civicEducationData.desc}
            items={civicEducationData.items}
          />

          {/* Mental Health Section */}
          <Section
            id={mentalHealthData.id}
            title={mentalHealthData.title}
            desc={mentalHealthData.desc}
            items={mentalHealthData.items}
          />

          {/* Environmental Section */}
          <Section
            id={environmentData.id}
            title={environmentData.title}
            desc={environmentData.desc}
            items={environmentData.items}
          />

          <ContactForm id="contact" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

