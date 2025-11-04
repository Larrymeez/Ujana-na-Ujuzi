import React, { useState, useEffect, useRef } from "react";

export default function Bulldogs() {
  const images = [
    "/assets/bulldog12.jpg",
    "/assets/bulldog2.jpg",
    "/assets/bulldog26.jpg",
    "/assets/bulldog4.jpg",
    "/assets/bulldog16.jpg",
    "/assets/bulldog6.jpg",
    "/assets/bulldog17.jpg",
    "/assets/bulldog18.jpg",
    "/assets/bulldog25.jpg",
    "/assets/bulldog22.jpg",

   
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [tick, setTick] = useState(0);
  const [merchHeadingTick, setMerchHeadingTick] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selection, setSelection] = useState({
    size: "",
    color: "",
    quantity: 1,
  });
  const [phone, setPhone] = useState("");
  const popupRef = useRef(null);
  const jerseySectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const ticker = setInterval(() => setTick((t) => t + 1), 5000);
    return () => clearInterval(ticker);
  }, []);

  useEffect(() => {
    const ticker = setInterval(() => setMerchHeadingTick((t) => t + 1), 5000);
    return () => clearInterval(ticker);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("fade-in-visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-section").forEach((el) =>
      observer.observe(el)
    );
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelectedItem(null);
        setSelection({ size: "", color: "", quantity: 1 });
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
        setSelection({ size: "", color: "", quantity: 1 });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
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
    { name: "Derrick Kubai", role: "1st Vice President", photo: "/assets/kubai.jpg" },
    { name: "Sofina Merinyo", role: "2nd Vice President", photo: "/assets/sofina.jpg" },
    { name: "Lawrence Miringu", role: "Team Manager", photo: "/assets/larry.jpg" },
    { name: "Collins Tiego", role: "Technical Director", photo: "/assets/tiego.jpg" },
    { name: "Scarlet Wairimu", role: "C.E.O", photo: "/assets/hero2.jpg" },
    { name: "Lincoln Wambua", role: "Sporting Director", photo: "/assets/lincoln.jpg" },
  ];

  const merch = [
    {
      title: "2025/26 Fan Jersey",
      description: "Official 44 Bulldogs FC fan jersey is out now!! – Join the Pack!",
      image: "/assets/jersey.jpeg",
      buttonText: "Buy Jersey",
      price: 2000,
    },
    {
      title: "44 Bulldogs Wristband",
      description:
        "Get yourself the team wristband! – Chip in facilitating our Match officiating fees.",
      image: "/assets/bulldog20.jpg",
      buttonText: "Buy Wristband",
      price: "150 - 200",
    },
  ];

  const getWristbandPrice = () => {
    if (selection.size === "Small") return 150;
    if (selection.size === "Medium" || selection.size === "Large") return 200;
    return 0;
  };

  return (
    <section className="bg-black text-white font-sans overflow-hidden relative">
      {/* HERO */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
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
      </div>

      {/* STORE */}
      <div
        ref={jerseySectionRef}
        className="fade-in-section py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-center opacity-0"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 fade-in-card text-center">
          <span className="text-blue-400 inline-block">
            {"44 Bulldogs Store –".split("").map((char, idx) => (
              <span
                key={idx + merchHeadingTick}
                className="inline-block neon-letter"
                style={{
                  animation: `fadeInLetter 0.05s forwards`,
                  animationDelay: `${idx * 0.05 + 2}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="text-red-500 ml-2 inline-block typewriter-delay">
            {" Get Your Merch!!"}
          </span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Grab your official 44 Bulldogs FC merch! From the new 25/26 fan jersey
          to limited edition wristbands, we’ve got everything a true supporter
          needs.
        </p>

        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {merch.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-gray-900/70 rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-300 fade-in-card slide-in-up items-center w-80 md:w-96 h-[460px]"
            >
              <div className="w-full h-80 overflow-hidden rounded-2xl mb-4 flex items-start justify-center bg-gray-800 group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-red-400">
                {item.title}
              </h3>
              <p className="text-base md:text-lg mb-4">{item.description}</p>
              <button
                onClick={() => {
                  setSelectedItem(item);
                  setSelection({ size: "", color: "", quantity: 1 });
                }}
                className="bg-blue-600 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300"
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50">
          <div
            ref={popupRef}
            className="bg-gray-900/80 border border-gray-700 rounded-2xl p-6 max-w-md w-[90%] shadow-2xl text-center relative"
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-40 h-40 mx-auto rounded-xl object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              {selectedItem.title}
            </h3>
            <p className="text-gray-300 mb-4">{selectedItem.description}</p>

            {/* Quantity */}
            <div className="flex justify-center items-center gap-3 mb-4">
              <label className="text-gray-300 font-semibold">Quantity:</label>
              <input
                type="number"
                min="1"
                value={selection.quantity}
                onChange={(e) =>
                  setSelection({
                    ...selection,
                    quantity: parseInt(e.target.value),
                  })
                }
                className="w-16 text-center rounded border border-gray-500 bg-gray-800 text-white"
              />
            </div>

            {/* Wristband Options */}
            {selectedItem.title.includes("Wristband") && (
              <div className="mb-4 flex justify-center gap-3">
                {["Small", "Medium", "Large"].map((size) => {
                  const colors = {
                    Small: ["pink"],
                    Medium: ["blue", "red"],
                    Large: ["black", "white"],
                  };
                  return (
                    <div key={size} className="flex flex-col items-center">
                      <p className="text-gray-300 mb-1">{size}</p>
                      <div className="flex gap-2">
                        {colors[size].map((color) => (
                          <button
                            key={color}
                            onClick={() =>
                              setSelection({ ...selection, size, color })
                            }
                            className="w-8 h-8 rounded-full border-2 border-gray-500 transition-transform transform hover:scale-110"
                            style={{
                              backgroundColor: color,
                              opacity:
                                selection.size === size &&
                                selection.color === color
                                  ? 1
                                  : 0.7,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Total Calculation */}
            <p className="text-lg text-red-400 font-semibold mb-2">
              Total: Ksh{" "}
              {selectedItem.title.includes("Wristband")
                ? getWristbandPrice() * selection.quantity
                : selectedItem.price * selection.quantity}
            </p>

            {/* Phone input */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="07XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-center rounded border border-gray-500 bg-gray-800 text-white py-2"
              />
            </div>

            {/* Confirm Payment */}
            <button
              onClick={async () => {
                if (!phone) return alert("Please enter phone number");
                let amount = selectedItem.title.includes("Wristband")
                  ? getWristbandPrice() * selection.quantity
                  : selectedItem.price * selection.quantity;

                try {
                  const res = await fetch(
                    "https://proconviction-viciously-kala.ngrok-free.dev/api/stkpush",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        phone,
                        amount,
                        item: selectedItem.title,
                      }),
                    }
                  );
                  const data = await res.json();
                  console.log(data);
                  alert(
                    "Payment request sent! Check your phone to complete the transaction."
                  );
                  setSelectedItem(null);
                } catch (err) {
                  console.error(err);
                  alert("Payment failed. Try again.");
                }
              }}
              className="bg-blue-600 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 mt-4"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      )}

      {/* MEET THE PACK */}
      <div className="fade-in-section py-16 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900 opacity-0">
        <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">
          Meet the Pack
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
          <img
            src="/assets/bulldog18.jpg"
            alt="Bulldogs Team"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-contain"
          />
          <div className="bg-gray-900/70 p-6 rounded-xl md:w-1/2 shadow-lg text-gray-300 flex flex-col justify-center">
            <p className="text-lg md:text-xl italic mb-4 leading-relaxed">
              “A bulldog is a person who does not allow negativity to cloud their
              mind...”
            </p>
            <p className="font-semibold text-red-400 mt-2">
              - The Bulldog Mentality
            </p>
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="fade-in-section py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 opacity-0 bg-gradient-to-b from-gray-950 via-black to-gray-900">
        <div className="relative text-center p-6 border border-red-600/30 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105">
          <img
            src="/assets/bulldog17.jpg"
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h3 className="relative z-10 text-2xl font-bold text-red-400 mb-4">
            Our Story
          </h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            44 Bulldogs FC is a youth-centered grassroots football initiative
            under{" "}
            <span className="text-blue-400 font-semibold">
              Ujana na Ujuzi CBO
            </span>
            . We harness football as a tool for unity, mental health awareness,
            and positive social change.
          </p>
        </div>

        <div className="relative text-center p-6 border border-blue-600/30 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105">
          <img
            src="/assets/bulldog14.jpg"
            alt="Mission"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h3 className="relative z-10 text-2xl font-bold text-blue-400 mb-4">
            Our Mission
          </h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            To empower youth through football by nurturing discipline, teamwork,
            and leadership while promoting peace and mental well-being across
            communities.
          </p>
        </div>

        <div className="relative text-center p-6 border border-red-600/30 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105">
          <img
            src="/assets/bulldog16.jpg"
            alt="Vision"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h3 className="relative z-10 text-2xl font-bold text-red-400 mb-4">
            Our Vision
          </h3>
          <p className="relative z-10 text-gray-300 leading-relaxed">
            To become a beacon of hope for young people, transforming passion for
            football into purpose-driven lives full of opportunity, unity, and
            pride.
          </p>
        </div>
      </div>

      {/* JOIN THE IMPACT STORY */}
      <div className="fade-in-section py-20 px-6 max-w-6xl mx-auto opacity-0">
        <div className="relative md:flex md:items-start md:gap-8">
          <img
            src="/assets/bulldog22.jpg"
            alt="Team Training"
            className="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-80 mb-6 md:mb-0"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
              Be Part of the <span className="text-red-400">Impact Story</span>
            </h2>
            <p className="mb-4 leading-relaxed text-white">
              Join the <span className="text-blue-400 font-semibold">team</span> as a <span className="text-red-400 font-semibold">player</span>, <span className="text-blue-400 font-semibold">volunteer</span> staff, or <span className="text-red-400 font-semibold">mentor</span>. Selection is based on <span className="text-yellow-400 font-semibold">talent</span>, <span className="text-blue-400 font-semibold">expertise</span>, and commitment to the club’s values.
            </p>
            <p className="mb-4 leading-relaxed text-white">
              Merchandise is available for purchase. Goodwill ambassadors, philanthropists, <span className="text-blue-400 font-semibold">sponsors</span>, and partners who share our vision can contribute via in-kind donations, grants, and related resources.
            </p>
            <div className="bg-gray-900/80 p-4 rounded-xl text-white shadow-md inline-block mt-4">
              <p><span className="font-semibold text-blue-400">Mobile Money Paybill No:</span> 600100</p>
              <p><span className="font-semibold text-red-400">Account No:</span> 440047</p>
              <p><span className="font-semibold text-yellow-400">Name:</span> Ujana na Ujuzi</p>
            </div>
          </div>
        </div>
      </div>

      {/* MANAGEMENT */}
      <div className="fade-in-section py-20 px-6 max-w-6xl mx-auto opacity-0">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
          Meet the Management
        </h2>

        {/* First row: 4 people */}
        <div className="flex justify-center gap-8 flex-wrap mb-8">
          {management.slice(0, 4).map((person, idx) => (
            <div key={idx} className="flex flex-col items-center text-center w-48">
              <img
                src={person.photo}
                alt={person.name}
                className="w-28 h-28 rounded-full object-cover mb-3 border-4 border-blue-600/40 shadow-lg"
              />
              <h3 className="text-lg font-bold text-red-400">{person.name}</h3>
              <p className="text-gray-300 text-sm">{person.role}</p>
            </div>
          ))}
        </div>

        {/* Second row: 3 people */}
        <div className="flex justify-center gap-8 flex-wrap">
          {management.slice(4).map((person, idx) => (
            <div key={idx} className="flex flex-col items-center text-center w-48">
              <img
                src={person.photo}
                alt={person.name}
                className="w-28 h-28 rounded-full object-cover mb-3 border-4 border-blue-600/40 shadow-lg"
              />
              <h3 className="text-lg font-bold text-red-400">{person.name}</h3>
              <p className="text-gray-300 text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .typewriter-delay {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #ff4d4d;
          width: 0;
          animation:
            typewriter 4s steps(22, end) 2s infinite alternate,
            blinkCursorTeam 0.8s step-end infinite;
          animation-delay: 10s, 10s;
        }
        @keyframes typewriter {0% { width: 0; } 40% { width: 15ch; } 60% { width: 15ch; } 100% { width: 0; }}
        @keyframes blinkCursorTeam {0%,100% {border-color:transparent;}25%{border-color:#ff4d4d;}75%{border-color:#3b82f6;}}
        @keyframes fadeInLetter {0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);}}
        .fade-in-section {opacity:0;transform:translateY(20px);transition:opacity 1s ease-out, transform 1s ease-out;}
        .fade-in-visible {opacity:1;transform:translateY(0);}
        .glow-blue {color:#00f;text-shadow:0 0 10px #00f,0 0 20px #007bff;}
        .glow-red {color:#ff4d4d;text-shadow:0 0 10px #f00,0 0 20px #ff4d4d;}
        .rolling-letter {display:inline-block;opacity:0;animation:rollLetter 0.8s ease-out forwards;}
        @keyframes rollLetter {0%{opacity:0;transform:translateY(40px);}100%{opacity:1;transform:translateY(0);}}
        .neon-letter {display:inline-block;color:#00f;text-shadow:0 0 10px #00f,0 0 20px #007bff;animation:fadeInLetter 0.8s forwards;}
        .slide-in-up {animation:slideInUp 0.8s ease-out forwards;}
        @keyframes slideInUp {0%{transform:translateY(20px);opacity:0;}100%{transform:translateY(0);opacity:1;}}
      `}</style>
    </section>
  );
}
