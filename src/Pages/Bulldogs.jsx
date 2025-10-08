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
  const [tick, setTick] = useState(0);
  const [jerseyTick, setJerseyTick] = useState(0);
  const [jerseyPulse, setJerseyPulse] = useState(0);
  const [merchHeadingTick, setMerchHeadingTick] = useState(0);

  const jerseySectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setCurrentImage((prev) => (prev + 1) % images.length), 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const ticker = setInterval(() => setTick((t) => t + 1), 5000);
    return () => clearInterval(ticker);
  }, []);

  useEffect(() => {
    const ticker = setInterval(() => setJerseyTick((t) => t + 1), 7000);
    return () => clearInterval(ticker);
  }, []);

  useEffect(() => {
    const ticker = setInterval(() => setJerseyPulse((t) => t + 1), 4000);
    return () => clearInterval(ticker);
  }, []);

  // Merch heading typewriter effect repeat
  useEffect(() => {
    const ticker = setInterval(() => setMerchHeadingTick((t) => t + 1), 5000);
    return () => clearInterval(ticker);
  }, []);

  // Fade-in observer
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

  const management = [
    { name: "Murimi Karani", role: "President & Founder", photo: "/assets/raww.jpg" },
    { name: "Derrick Kubai", role: "Vice President", photo: "/assets/kubai.jpg" },
    { name: "Sofina Merinyo", role: "Vice President", photo: "/assets/sofina.jpg" },
    { name: "Lincoln Wambua", role: "Sporting Director", photo: "/assets/lincoln.jpg" },
    { name: "Collins Tiego", role: "Technical Director", photo: "/assets/tiego.jpg" },
    { name: "Scarlet Wairimu", role: "C.E.O", photo: "/assets/hero2.jpg" },
  ];

  const merch = [
    { title: "2025/26 Fan Jersey", description: "Official 44 Bulldogs FC fan jersey – show your pride!", image: "/assets/jersey.jpeg", buttonText: "Buy Jersey" },
    { title: "Bulldog Wristband", description: "Limited edition wristband – perfect for every fan.", image: "/assets/bulldog20.jpg", buttonText: "Buy Wristband" },
  ];

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

        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight flex justify-center flex-wrap animate-bounce">
            {renderRollingText("We Are The Pack", "glow-blue", tick)}
          </h1>
          <h2 className="text-xl md:text-2xl font-extrabold mt-2 flex justify-center flex-wrap animate-bounce">
            {renderRollingText("Uma Wao!!", "glow-red", tick)}
          </h2>
          <button
            onClick={scrollToJersey}
            className="mt-6 bg-blue-600 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:scale-105"
          >
            Support Us
          </button>
        </div>

        <img src="/assets/Bulldog.png" alt="Bulldogs Logo Left" className="absolute bottom-6 left-6 w-16 md:w-20 animate-[flip_4s_infinite]" />
        <img src="/assets/Bulldog.png" alt="Bulldogs Logo Right" className="absolute bottom-6 right-6 w-16 md:w-20 animate-[flip_4s_infinite_reverse]" />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce text-sm tracking-wider">
          Scroll Down ⬇️
        </div>
      </div>

      {/* MEET THE PACK */}
      <div className="fade-in-section py-12 px-6 opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12 text-center">Meet the Pack</h2>
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
          <img src="/assets/bulldog18.jpg" alt="Bulldogs Team" className="w-full md:w-1/2 rounded-xl shadow-lg object-contain" />
          <div className="bg-gray-900/70 p-6 rounded-xl md:w-1/2 shadow-lg text-gray-300 flex flex-col justify-center">
            <p className="text-lg md:text-xl italic mb-4 leading-relaxed">
              “A bulldog is a person who does not allow negativity to cloud their
              mind, they are always in attack mode and locked in on the task at
              hand. When the opposing team scores or their team makes an
              error, the emotions do not keep a bulldog from being ready for the
              next play. They understand that they will fail and fail often but know
              how to overcome that failure quickly.”
            </p>
            <p className="font-semibold text-red-400 mt-2">- The Bulldog Mentality</p>
          </div>
        </div>
      </div>

      {/* 44 BULLDOGS STORE */}
      <div ref={jerseySectionRef} className="fade-in-section py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-center opacity-0">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400 fade-in-card">
          {"44 Bulldogs Store – Get Your Merch!".split("").map((char, idx) => (
            <span
              key={idx + merchHeadingTick}
              className="inline-block neon-letter"
              style={{ animation: `fadeInLetter 0.05s forwards`, animationDelay: `${idx * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Grab your official 44 Bulldogs FC merch! From the new 25/26 fan jersey to limited edition wristbands, we’ve got everything a true supporter needs.
        </p>

        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {merch.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-gray-900/70 rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-300 fade-in-card slide-in-up items-center w-80 md:w-96 h-[420px]">
              <div className="w-full h-80 overflow-hidden rounded-2xl mb-4 flex items-start justify-center bg-gray-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top transition-transform duration-300" />
              </div>
              <div className="text-gray-300 text-center flex flex-col justify-between flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-red-400">{item.title}</h3>
                <p className="text-base md:text-lg mb-4">{item.description}</p>
                <button className="bg-blue-600 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OUR STORY + MISSION + VISION */}
      <div className="fade-in-section py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 opacity-0">
        <div className="relative text-center p-6 border border-red-600/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 fade-in-card">
          <img src="/assets/bulldog17.jpg" alt="Our Story Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <h3 className="relative z-10 text-2xl font-bold text-red-400 mb-4">Our Story</h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            44 Bulldogs FC is a youth-centered grassroots football initiative under <span className="text-blue-400 font-semibold">Ujana na Ujuzi CBO</span>. 
            We harness football as a tool for unity, mental health awareness, and positive social change.
          </p>
        </div>
        <div className="relative text-center p-6 border border-blue-600/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 fade-in-card">
          <img src="/assets/bulldog14.jpg" alt="Mission Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <h3 className="relative z-10 text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            To empower youth through football by nurturing discipline, teamwork, and leadership while promoting peace and mental well-being across communities.
          </p>
        </div>
        <div className="relative text-center p-6 border border-red-600/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 fade-in-card">
          <img src="/assets/bulldog16.jpg" alt="Vision Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <h3 className="relative z-10 text-2xl font-bold text-red-400 mb-4">Our Vision</h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            To become a beacon of hope for young people, transforming passion for football into purpose-driven lives full of opportunity, unity, and pride.
          </p>
        </div>
      </div>

      {/* MANAGEMENT SECTION */}
      <div className="fade-in-section py-20 px-6 max-w-6xl mx-auto opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12 text-center fade-in-card">Meet the Management</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {management.slice(0,3).map((m, idx) => (
            <div key={idx} className="flex flex-col items-center slide-in-up">
              <img src={m.photo} alt={m.name} className="rounded-full w-40 h-40 object-cover mb-4 shadow-lg" />
              <h3 className="text-xl font-semibold text-red-400 text-center">{m.name}</h3>
              <p className="text-gray-300 text-center">{m.role}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-16 mt-12">
          {management.slice(3,6).map((m, idx) => (
            <div key={idx} className="flex flex-col items-center slide-in-up">
              <img src={m.photo} alt={m.name} className="rounded-full w-40 h-40 object-cover mb-4 shadow-lg" />
              <h3 className="text-xl font-semibold text-red-400 text-center">{m.name}</h3>
              <p className="text-gray-300 text-center">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        @keyframes flip {0%, 100% { transform: rotateY(0deg); } 50% { transform: rotateY(180deg); }}
        @keyframes rollLetter {0% { opacity: 0; transform: translateY(40px) rotateX(-90deg); } 60% { opacity: 1; transform: translateY(-10px) rotateX(20deg); } 100% { opacity: 1; transform: translateY(0) rotateX(0deg); }}
        .rolling-letter { display: inline-block; opacity: 0; animation: rollLetter 0.8s ease-out forwards; }
        .fade-in-section { opacity: 0; transform: translateY(20px); transition: opacity 1s ease-out, transform 1s ease-out; }
        .fade-in-visible { opacity: 1; transform: translateY(0); }
        .glow-blue { color: #00f; text-shadow: 0 0 10px #00f, 0 0 20px #007bff; }
        .glow-red { color: #ff4d4d; text-shadow: 0 0 10px #f00, 0 0 20px #ff4d4d; }
        @keyframes fadeInCard {0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); }}
        .fade-in-card { opacity: 0; animation: fadeInCard 1s ease-out forwards; }
        @keyframes neonPulse {0%, 100% { text-shadow: 0 0 3px #00f, 0 0 6px #ff4d4d, 0 0 10px #007bff; } 50% { text-shadow: 0 0 6px #00f, 0 0 12px #ff4d4d, 0 0 20px #007bff; }}
        @keyframes fadeInLetter {0% { opacity: 0; transform: translateY(20px) rotateY(-20deg); } 100% { opacity: 1; transform: translateY(0) rotateY(0deg); }}
        .neon-letter { display: inline-block; color: #00f; transform: perspective(500px) rotateY(-10deg); opacity: 0; animation: fadeInLetter 0.8s forwards, neonPulse 2s infinite alternate; }
        @keyframes slideInUp {0% { transform: translateY(20px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; }}
        .slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
}
