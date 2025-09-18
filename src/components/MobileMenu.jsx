import React, { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="p-2">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-light border border-primary rounded shadow">
          <a className="block px-4 py-2 text-dark" href="#civic" onClick={() => setOpen(false)}>Civic Education</a>
          <a className="block px-4 py-2 text-dark" href="#mental" onClick={() => setOpen(false)}>Mental Health</a>
          <a className="block px-4 py-2 text-dark" href="#env" onClick={() => setOpen(false)}>Environment</a>
          <a className="block px-4 py-2 text-light bg-primary rounded" href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
}
