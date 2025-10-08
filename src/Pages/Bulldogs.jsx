import React, { useState, useEffect, useRef } from "react";

export default function Bulldogs() {
  const images = [
    "/assets/bulldog12.jpg",
    "/assets/bulldog2.jpg",
    "/assets/bulldog13.jpg",
    "/assets/bulldog4.jpg",
    "/assets/bulldog16.jpg",
    "/assets/bulldog6.jpg",
    "/assets/bulldog17.jpg",
    "/assets/bulldog18.jpg",
    "/assets/bulldog14.jpg",
    "/assets/bulldog10.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [tick, setTick] = useState(0); // for rolling tagline
  const [jerseyTick, setJerseyTick] = useState(0); // for jersey heading roll-in

  const jerseySectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  // Roll-in animation ticker for hero tagline
  useEffect(() => {
    const ticker = setInterval(() => setTick((t) => t + 1), 5000);
    return () => clearInterval(ticker);
  }, []);

  // Roll-in ticker for jersey heading
  useEffect(() => {
    const ticker = setInterval(() => setJerseyTick((t) => t + 1), 7000); // every 7s
    return () => clearInterval(ticker);
  }, []);

  // Intersection observer for fade-in sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in-visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));
  }, []);

  const scrollToJersey = () => {
    jerseySectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderRollingText = (text, colorClass, tickOffset = 0) =>
    text.split("").map((char, index) => (
      <span
        key={index + tickOffset}
        className={`inline-block rolling-letter ${colorClass}`}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="bg-black text-white font-sans overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Bulldogs FC"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

        {/* Hero tagline */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight flex justify-center flex-wrap">
            {renderRollingText("We Are The Pack", "glow-blue", tick)}
          </h1>
          <h2 className="text-xl md:text-2xl font-extrabold mt-2 flex justify-center flex-wrap">
            {renderRollingText("Uma Wao!!", "glow-red", tick)}
          </h2>
          <button
            onClick={scrollToJersey}
            className="mt-6 bg-blue-600 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
          >
            Support Us
          </button>
        </div>

        {/* Corner Logos */}
        <img
          src="/assets/Bulldog.png"
          alt="Bulldogs Logo Left"
          className="absolute bottom-6 left-6 w-16 md:w-20 animate-[flip_4s_infinite]"
        />
        <img
          src="/assets/Bulldog.png"
          alt="Bulldogs Logo Right"
          className="absolute bottom-6 right-6 w-16 md:w-20 animate-[flip_4s_infinite_reverse]"
        />

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce text-sm tracking-wider">
          Scroll Down ⬇️
        </div>
      </div>

      {/* MEET THE PACK */}
      <div className="fade-in-section py-12 px-6 text-center opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">Meet the Pack</h2>
        <img
          src="/assets/bulldog18.jpg"
          alt="Bulldogs Team"
          className="mx-auto w-full max-w-5xl rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* JERSEY SECTION */}
      <div
        ref={jerseySectionRef}
        className="fade-in-section py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-center opacity-0"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 inline-block relative heading-neon">
          {"25/26 Season Fan Replica Jersey Out Now!!".split("").map((char, index) => (
            <span
              key={index + jerseyTick}
              className="inline-block neon-letter"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          The wait is over! Presenting the new 44 Bulldogs FC Fan Jersey for the 2025/26 season.
          Crafted with passion and precision, this jersey embodies our spirit and commitment to excellence on and off the pitch.
          <br />
          <span className="font-semibold text-red-400">Get yours today</span> and wear the pride of the pack!
        </p>
        <div className="relative max-w-3xl mx-auto">
          <img
            src="/assets/jersey.jpeg"
            alt="Bulldogs 2025 Jersey"
            className="rounded-2xl shadow-lg w-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <button className="bg-blue-600 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105">
              Buy Jersey
            </button>
          </div>
        </div>
      </div>

      {/* OUR STORY + MISSION + VISION MERGED */}
      <div className="fade-in-section py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 opacity-0">
        {/* Our Story */}
        <div
          className="relative text-center p-6 border border-red-600/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 fade-in-card"
          style={{ animationDelay: "0s" }}
        >
          <img
            src="/assets/bulldog17.jpg"
            alt="Our Story Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h3 className="relative z-10 text-2xl font-bold text-red-400 mb-4">Our Story</h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            44 Bulldogs FC is a youth-centered grassroots football initiative under <span className="text-blue-400 font-semibold">Ujana na Ujuzi CBO</span>. 
            We harness football as a tool for unity, mental health awareness, and positive social change.
          </p>
        </div>

        {/* Mission */}
        <div
          className="relative text-center p-6 border border-blue-600/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 fade-in-card"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src="/assets/bulldog14.jpg"
            alt="Mission Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h3 className="relative z-10 text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            To empower youth through football by nurturing discipline, teamwork, and leadership while promoting peace and mental well-being across communities.
          </p>
        </div>

        {/* Vision */}
        <div
          className="relative text-center p-6 border border-red-600/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 fade-in-card"
          style={{ animationDelay: "0.4s" }}
        >
          <img
            src="/assets/bulldog16.jpg"
            alt="Vision Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h3 className="relative z-10 text-2xl font-bold text-red-400 mb-4">Our Vision</h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            To become a beacon of hope for young people, transforming passion for football into purpose-driven lives full of opportunity, unity, and pride.
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes flip {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }

        @keyframes rollLetter {
          0% { opacity: 0; transform: translateY(40px) rotateX(-90deg); }
          60% { opacity: 1; transform: translateY(-10px) rotateX(20deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }

        .rolling-letter {
          display: inline-block;
          opacity: 0;
          animation: rollLetter 0.8s ease-out forwards;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .glow-blue {
          color: #00f;
          text-shadow: 0 0 10px #00f, 0 0 20px #007bff;
        }

        .glow-red {
          color: #ff4d4d;
          text-shadow: 0 0 10px #f00, 0 0 20px #ff4d4d;
        }

        @keyframes fadeInCard {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .fade-in-card {
          opacity: 0;
          animation: fadeInCard 1s ease-out forwards;
        }

        /* Neon Jersey Heading */
        @keyframes neonPulse {
          0%, 100% { text-shadow: 0 0 3px #00f, 0 0 6px #ff4d4d, 0 0 10px #007bff; }
          50% { text-shadow: 0 0 6px #00f, 0 0 12px #ff4d4d, 0 0 20px #007bff; }
        }

        @keyframes fadeInLetter {
          0% { opacity: 0; transform: translateY(20px) rotateY(-20deg); }
          100% { opacity: 1; transform: translateY(0) rotateY(0deg); }
        }

        .heading-neon .neon-letter {
          display: inline-block;
          color: #00f;
          transform: perspective(500px) rotateY(-10deg);
          opacity: 0;
          animation: neonPulse 2s infinite alternate, fadeInLetter 0.8s forwards;
        }
      `}</style>
    </section>
  );
}
