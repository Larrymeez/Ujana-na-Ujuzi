import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Ujana na Ujuzi. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#civic" className="hover:text-primary transition">Civic Education</a>
        <a href="#mental" className="hover:text-primary transition">Mental Health</a>
        <a href="#env" className="hover:text-primary transition">Environment</a>
      </div>
    </footer>
  );
}
