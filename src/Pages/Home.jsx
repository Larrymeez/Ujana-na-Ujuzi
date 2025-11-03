import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import PillarCard from "../components/PillarCard.jsx";
import QuickStats from "../components/QuickStats.jsx";
import SupportSection from "../components/SupportSection.jsx";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" }); // ✅ new state

  // Fade-in scroll effect
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleSubscribe = async () => {
    if (!email) {
      setAlert({ message: "Please enter your email", type: "error" });
      return;
    }

    try {
      setSubmitted(true);
      setAlert({ message: "", type: "" });

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        if (data.message.includes("already")) {
          setAlert({ message: "You’re already part of our community!", type: "warning" });
        } else {
          setAlert({ message: "You’re now subscribed — welcome to the community!", type: "success" });
        }
      } else {
        setAlert({ message: "Something went wrong. Try again later.", type: "error" });
      }

      setEmail("");
      setSubmitted(false);
    } catch (err) {
      console.error("Subscription error:", err);
      setAlert({ message: "Failed to subscribe. Try again later.", type: "error" });
      setSubmitted(false);
    }
  };

  const alertStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    error: "bg-red-100 text-red-800 border-red-300",
  };

  return (
    <main className="bg-white min-h-screen text-black">
      <Hero />
      <QuickStats />

      {/* Pillars */}
      <div className="mt-12 px-6 grid md:grid-cols-3 gap-6 fade-in-section">
        <PillarCard
          title="Civic Duty"
          description="Workshops, voter education, and youth programs to build civic awareness."
          link="/civic"
          bgImage="/assets/event1.jpg"
        />
        <PillarCard
          title="Mental Health Wellbeing"
          description="Peer-support groups, awareness campaigns, and mental wellness resources."
          link="/mental"
          bgImage="/assets/civic3.jpg"
        />
        <PillarCard
          title="Climate Action"
          description="Tree planting, clean-ups, and environmental education initiatives."
          link="/env"
          bgImage="/assets/hero6.jpg"
        />
      </div>

      {/* Support */}
      <SupportSection />

      {/* Newsletter */}
      <div className="mt-16 px-6 py-12 bg-red-50 text-center rounded-xl shadow-md fade-in-section">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-black mb-4">
          Stay updated on our workshops, programs, and ways to support our initiatives.
        </p>

        {/* Alert message */}
        {alert.message && (
          <div
            className={`border px-4 py-3 rounded-full mb-4 text-sm font-medium ${alertStyles[alert.type]}`}
          >
            {alert.message}
          </div>
        )}

        {/* Form */}
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-l-full border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            onClick={handleSubscribe}
            disabled={submitted}
            className="bg-red-600 hover:bg-black text-white font-semibold px-6 py-2 rounded-r-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitted ? "Subscribed!" : "Subscribe"}
          </button>
        </div>
      </div>
    </main>
  );
}
