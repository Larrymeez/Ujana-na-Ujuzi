import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    // Placeholder for backend submission
    console.log("Subscribed email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 grid place-items-center">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
          Stay Updated with Ujana na Ujuzi
        </h2>
        <p className="text-black/80 text-base sm:text-lg mb-6">
          Subscribe to our newsletter to get the latest updates on our programs,
          events, and initiatives. Join our community and stay connected!
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-72 px-4 py-2 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-semibold mt-4 text-base sm:text-lg">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}
