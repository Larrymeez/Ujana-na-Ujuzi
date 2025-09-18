import React from "react";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import MobileMenu from "./components/MobileMenu.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-extrabold text-green-700">Ujana na Ujuzi</a>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#civic" className="hover:text-green-600">Civic Education</a>
            <a href="#mental" className="hover:text-green-600">Mental Health</a>
            <a href="#env" className="hover:text-green-600">Environment</a>
            <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded">Contact</a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">
        <Hero />

        <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
          <Section
            id="civic"
            title="Civic Education"
            desc="Workshops, voter education, community dialogues and youth programs to build civic awareness and participation."
            items={[
              { title: "Community Workshops", text: "Local sessions on rights, governance, civic responsibilities." },
              { title: "Schools Program", text: "Youth-focused civic modules and debate clubs." },
              { title: "Advocacy", text: "Community mobilization around local issues." }
            ]}
          />

          <Section
            id="mental"
            title="Mental Health"
            desc="Peer-support groups, awareness campaigns, and referrals to professional services."
            items={[
              { title: "Peer Support", text: "Safe spaces to share and heal." },
              { title: "Awareness", text: "Campaigns to reduce stigma." },
              { title: "Referrals", text: "Linking to counselors and clinics." }
            ]}
          />

          <Section
            id="env"
            title="Environmental Conservation"
            desc="Tree planting, clean-up drives, and environmental education for schools and communities."
            items={[
              { title: "Tree Planting", text: "Local greening initiatives." },
              { title: "Cleanups", text: "Community waste collection events." },
              { title: "Education", text: "Hands-on environmental lessons." }
            ]}
          />

          <ContactForm id="contact" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
