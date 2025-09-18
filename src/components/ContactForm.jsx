import React from "react";

export default function ContactForm({ id }) {
  return (
    <section id={id} className="py-12 bg-light">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-dark mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded px-4 py-2"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-light px-6 py-2 rounded font-bold hover:bg-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
