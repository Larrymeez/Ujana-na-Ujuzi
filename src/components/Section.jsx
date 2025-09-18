import React from "react";

export default function Section({ id, title, desc, items = [] }) {
  return (
    <section id={id} className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-gray-600">{desc}</p>

      {items.length > 0 && (
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <li key={i} className="border rounded p-4">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{it.text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
