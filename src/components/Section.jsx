import React from "react";

export default function Section({ id, title, desc, items }) {
  return (
    <section id={id} className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-dark mb-4">{title}</h2>
        <p className="text-dark text-lg mb-8">{desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-light shadow-sm rounded p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
              <p className="text-dark">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

