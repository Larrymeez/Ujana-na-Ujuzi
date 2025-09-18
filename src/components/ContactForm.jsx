import React, { useState } from "react";

export default function ContactForm({ id }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id={id} className="bg-light rounded-lg p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-dark">Contact Us</h2>
      <p className="mt-2 text-dark">Partnerships, volunteers, or general enquiries — drop a message.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="border border-primary rounded p-3" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" type="email" className="border border-primary rounded p-3" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="6" className="border border-primary rounded p-3" required />
        <div className="flex items-center gap-4">
          <button type="submit" className="bg-primary text-light px-5 py-3 rounded disabled:opacity-60 hover:bg-red-700">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <span className="text-primary">Message sent — thank you!</span>}
          {status === "error" && <span className="text-red-600">Error sending. Try again later.</span>}
        </div>
      </form>

      <p className="mt-4 text-sm text-dark">Or email: info@ujananaujuzi.org</p>
    </section>
  );
}
