import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import PillarCard from "../components/PillarCard.jsx";
import QuickStats from "../components/QuickStats.jsx";
import SupportSection from "../components/SupportSection.jsx";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  // =========================================================
  // SCROLL REVEAL
  // =========================================================

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
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // =========================================================
  // NEWSLETTER
  // =========================================================

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setAlert({
        message: "Please enter your email address.",
        type: "error",
      });
      return;
    }

    try {
      setSubmitted(true);

      setAlert({
        message: "",
        type: "",
      });

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        if (data.message.includes("already")) {
          setAlert({
            message: "You're already part of our community.",
            type: "warning",
          });
        } else {
          setAlert({
            message: "You're now subscribed. Welcome to the community!",
            type: "success",
          });
        }

        setEmail("");
      } else {
        setAlert({
          message: "Something went wrong. Please try again later.",
          type: "error",
        });
      }

      setSubmitted(false);
    } catch (err) {
      console.error("Subscription error:", err);

      setAlert({
        message: "Unable to subscribe right now. Please try again later.",
        type: "error",
      });

      setSubmitted(false);
    }
  };

  return (
    <main className="bg-white min-h-screen text-black overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero />

      {/* =====================================================
          QUICK STATS
      ====================================================== */}

      <section className="relative bg-black text-white">
        <QuickStats />
      </section>

      {/* =====================================================
          OUR WORK
      ====================================================== */}

      <section className="px-6 py-20 md:py-28 fade-in-section">

        <div className="max-w-7xl mx-auto">

          {/* Section heading */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">

            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="w-8 h-[3px] bg-red-600" />

                <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
                  Our Work
                </span>

              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                THREE PILLARS.
                <span className="block text-red-600">
                  ONE PURPOSE.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-gray-600 leading-relaxed">
              We work with young people and communities to create spaces for
              participation, wellbeing and meaningful action.
            </p>

          </div>

          {/* Pillars */}

          <div className="grid md:grid-cols-3 gap-5">

            <div className="group">

              <PillarCard
                title="Civic Duty"
                description="Workshops, voter education, community dialogues and youth programs that build civic awareness and participation."
                link="/civic"
                bgImage="/assets/event1.jpg"
              />

            </div>

            <div className="group">

              <PillarCard
                title="Mental Health Wellbeing"
                description="Peer-support groups, awareness campaigns and referrals that encourage young people to take wellbeing seriously."
                link="/mental"
                bgImage="/assets/civic3.jpg"
              />

            </div>

            <div className="group">

              <PillarCard
                title="Climate Action"
                description="Tree planting, clean-up drives and environmental education for schools and communities."
                link="/env"
                bgImage="/assets/hero6.jpg"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div className="px-6">

        <div className="max-w-7xl mx-auto border-t border-black/10" />

      </div>

      {/* =====================================================
          SUPPORT
      ====================================================== */}

      <section className="py-20 md:py-28 fade-in-section">

        <SupportSection />

      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="px-6 pb-20 md:pb-28 fade-in-section">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden bg-black text-white">

            {/* Decorative red block */}

            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 hidden md:block" />

            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-red-600" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-14 lg:p-16">

              {/* Copy */}

              <div>

                <div className="flex items-center gap-3 mb-5">

                  <span className="w-8 h-[3px] bg-red-600" />

                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500">
                    Stay Connected
                  </span>

                </div>

                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">

                  FOLLOW THE
                  <span className="block text-red-500">
                    JOURNEY.
                  </span>

                </h2>

                <p className="mt-6 max-w-lg text-gray-400 leading-relaxed">

                  Get occasional updates about our programs, community
                  activities, upcoming events and ways to get involved.

                </p>

              </div>

              {/* Form */}

              <div className="flex flex-col justify-center">

                <label
                  htmlFor="newsletter-email"
                  className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-3"
                >
                  Your email address
                </label>

                <div className="flex flex-col sm:flex-row gap-3">

                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSubscribe();
                      }
                    }}
                    className="
                      flex-1
                      bg-white
                      text-black
                      px-5
                      py-4
                      outline-none
                      border
                      border-white
                      placeholder:text-gray-400
                      focus:border-red-600
                      transition-colors
                    "
                  />

                  <button
                    onClick={handleSubscribe}
                    disabled={submitted}
                    className="
                      bg-red-600
                      hover:bg-red-700
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                      text-white
                      px-7
                      py-4
                      font-bold
                      uppercase
                      tracking-wide
                      text-sm
                      transition-all
                      duration-300
                      whitespace-nowrap
                    "
                  >
                    {submitted ? "Joining..." : "Subscribe"}
                  </button>

                </div>

                {/* Alert */}

                {alert.message && (
                  <div
                    className={`mt-4 text-sm font-semibold ${
                      alert.type === "success"
                        ? "text-green-400"
                        : alert.type === "warning"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {alert.message}
                  </div>
                )}

                <p className="mt-4 text-xs text-gray-600">
                  No spam. Just meaningful updates from Ujana na Ujuzi.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          LOCAL STYLES
      ====================================================== */}

      <style>{`

        html {
          scroll-behavior: smooth;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        input,
        button {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          cursor: pointer;
        }

      `}</style>

    </main>
  );
}