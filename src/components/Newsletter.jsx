import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      setMessageType("error");
      return;
    }

    try {
      setSubmitted(true);
      setMessage("");

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
        if (data.message?.includes("already")) {
          setMessage("You're already part of our community.");
          setMessageType("warning");
        } else {
          setMessage(
            "You're now subscribed. Welcome to the community!"
          );
          setMessageType("success");
        }

        setEmail("");
      } else {
        setMessage(
          "Something went wrong. Please try again later."
        );
        setMessageType("error");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      setMessage(
        "Unable to subscribe right now. Please try again later."
      );
      setMessageType("error");
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <section className="bg-white px-6 py-20 md:py-28">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden bg-black text-white">

          {/* =================================================
              DECORATIVE ELEMENTS
          ================================================== */}

          <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-red-600" />

          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-red-600" />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 sm:p-10 md:p-14 lg:p-16">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-3 mb-5">

                <span className="w-8 h-[3px] bg-red-600" />

                <span className="text-xs uppercase tracking-[0.25em] font-bold text-gray-500">
                  Stay Connected
                </span>

              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">

                STAY WITH
                <span className="block text-red-500">
                  THE JOURNEY.
                </span>

              </h2>

              <p className="mt-6 max-w-lg text-gray-400 text-base sm:text-lg leading-relaxed">

                Get occasional updates about our programs, community
                activities, events and opportunities to get involved.

              </p>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-center">

              <form
                onSubmit={handleSubmit}
                className="w-full"
              >

                <label
                  htmlFor="newsletter-email"
                  className="block text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-3"
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
                    className="
                      flex-1
                      min-w-0
                      bg-white
                      text-black
                      px-5
                      py-4
                      border
                      border-white
                      outline-none
                      placeholder:text-gray-400
                      focus:border-red-600
                      transition-colors
                    "
                  />

                  <button
                    type="submit"
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
                      transition-colors
                      duration-300
                      whitespace-nowrap
                    "
                  >
                    {submitted ? "Joining..." : "Subscribe"}
                  </button>

                </div>

              </form>

              {/* =================================================
                  RESPONSE MESSAGE
              ================================================== */}

              {message && (
                <p
                  className={`mt-4 text-sm font-semibold ${
                    messageType === "success"
                      ? "text-green-400"
                      : messageType === "warning"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}

              <p className="mt-4 text-xs text-gray-600">
                No spam. Just meaningful updates from Ujana na Ujuzi.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}