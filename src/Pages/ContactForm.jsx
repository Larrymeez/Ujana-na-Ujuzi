import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-red-600 mb-4">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-12">
        We’d love to hear from you. Reach out for inquiries, collaborations, or just to say hello!
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          className="bg-gray-50 p-8 rounded-xl shadow space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <Mail className="text-red-600" size={24} />
            <span className="text-gray-700">ujananaujuzi@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-red-600" size={24} />
            <span className="text-gray-700">0711869740 / 0712479914</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-red-600" size={24} />
            <span className="text-gray-700">Nairobi, Kenya</span>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.08101396814!2d36.8219468!3d-1.2920659"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
