import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Ujana na Ujuzi — All rights reserved.
      </div>
    </footer>
  );
}
