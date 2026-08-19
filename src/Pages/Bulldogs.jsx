import React, { useState, useEffect, useRef } from "react";

export default function Bulldogs() {
  const images = [
    "/assets/bulldog12.jpg",
    "/assets/bulldog2.jpg",
    "/assets/hero9.jpg",
    "/assets/bulldog4.jpg",
    "/assets/bulldog24.jpg",
    "/assets/bulldog6.jpg",
    "/assets/bulldog17.jpg",
    "/assets/bulldog16.jpg",
    "/assets/bulldog25.jpg",
    "/assets/bulldog22.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const [selection, setSelection] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
  });

  const [orderMessage, setOrderMessage] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const popupRef = useRef(null);
  const jerseySectionRef = useRef(null);

  // =========================================================
  // BACKEND
  // =========================================================

  const backendURL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://ujana-na-ujuzi-backend.vercel.app";

  // =========================================================
  // HERO SLIDESHOW
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // =========================================================
  // SECTION REVEAL
  // =========================================================

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // =========================================================
  // CLOSE ORDER MODAL
  // =========================================================

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelectedItem(null);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // =========================================================
  // SCROLL TO JERSEY
  // =========================================================

  const scrollToJersey = () => {
    jerseySectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // =========================================================
  // MERCHANDISE
  // =========================================================

  const jersey = {
    title: "2025/26 Fan Jersey",
    description:
      "Represent 44 Bulldogs FC wherever you go. Every jersey purchased helps support the team and our grassroots football initiative.",
    image: "/assets/jersey.jpeg",
    buttonText: "Get Your Jersey",
    price: 2000,
  };

  // =========================================================
  // MANAGEMENT
  // =========================================================

  const management = [
    {
      name: "Murimi Karani",
      role: "President & Founder",
      photo: "/assets/raww.jpg",
    },
    {
      name: "Derrick Kubai",
      role: "1st Vice President",
      photo: "/assets/kubai.jpg",
    },
    {
      name: "Sofina Merinyo",
      role: "2nd Vice President",
      photo: "/assets/sofina.jpg",
    },
    {
      name: "Lawrence Miringu",
      role: "Team Manager",
      photo: "/assets/larry.jpg",
    },
    {
      name: "Collins Tiego",
      role: "Technical Director",
      photo: "/assets/tiego.jpg",
    },
    {
      name: "Scarlet Wairimu",
      role: "C.E.O",
      photo: "/assets/hero2.jpg",
    },
    {
      name: "Lincoln Wambua",
      role: "Sporting Director",
      photo: "/assets/lincoln.jpg",
    },
  ];

  // =========================================================
  // ORDER SUBMISSION
  // =========================================================

  const handleOrderSubmit = async () => {
    const { name, email, phone, quantity } = selection;

    if (!name || !email || !phone) {
      setOrderMessage(
        "Please fill in your name, email, and phone number."
      );

      setOrderSuccess(false);
      setShowBanner(true);

      setTimeout(() => setShowBanner(false), 5000);

      return;
    }

    const orderData = {
      name,
      email,
      phone,
      item: selectedItem.title,
      quantity,
    };

    try {
      const res = await fetch(`${backendURL}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      let data;

      try {
        data = await res.json();
      } catch {
        data = {
          success: false,
          message: "Server returned invalid response.",
        };
      }

      setOrderMessage(data.message);
      setOrderSuccess(data.success);
      setShowBanner(true);

      setTimeout(() => setShowBanner(false), 5000);

      if (data.success) {
        setSelectedItem(null);

        setSelection({
          name: "",
          email: "",
          phone: "",
          quantity: 1,
        });
      }
    } catch (err) {
      console.error(err);

      setOrderMessage("Order failed. Please try again.");
      setOrderSuccess(false);
      setShowBanner(true);

      setTimeout(() => setShowBanner(false), 5000);
    }
  };

  return (
    <section className="bg-black text-white font-sans overflow-hidden relative">

      {/* =====================================================
          ORDER STATUS BANNER
      ====================================================== */}

      {showBanner && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-md shadow-2xl z-[100] text-center text-white ${
            orderSuccess ? "bg-green-600" : "bg-red-600"
          } fade-in-out`}
        >
          {orderMessage}
        </div>
      )}

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative h-[92vh] min-h-[650px] w-full overflow-hidden">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="44 Bulldogs FC"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        {/* Club identity */}

        <div className="absolute top-8 left-6 md:left-12 z-20">

          <div className="flex items-center gap-3">

            <div className="w-9 h-[3px] bg-red-600" />

            <span className="text-xs md:text-sm tracking-[0.3em] font-bold text-white/90">
              44 BULLDOGS FC
            </span>

          </div>

        </div>

        {/* Hero content */}

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">

          <div className="max-w-3xl pt-12">

            <p className="uppercase tracking-[0.35em] text-sm md:text-base text-blue-400 font-semibold mb-5 hero-reveal">
              Ujana na Ujuzi • Grassroots Football
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] hero-title">
              WE ARE
              <span className="block text-white">
                THE
              </span>

              <span className="block text-red-500">
                PACK.
              </span>
            </h1>

            <div className="mt-7 flex items-center gap-4">

              <div className="h-[2px] w-12 bg-blue-500" />

              <p className="text-lg md:text-2xl font-bold tracking-wide text-white/90">
                Uma Wao!!
              </p>

            </div>

            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
              Football, purpose and community. We are building a stronger
              generation through the game we love.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">

              <button
                onClick={scrollToJersey}
                className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 font-bold uppercase tracking-wide text-sm transition-all duration-300"
              >
                Support the Pack

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <div className="text-sm text-gray-400">
                <span className="text-white font-semibold">
                  Nairobi
                </span>{" "}
                • Kenya
              </div>

            </div>

          </div>

        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-3">

          <span className="text-xs tracking-[0.25em] text-gray-400">
            SCROLL TO EXPLORE
          </span>

          <div className="w-10 h-[1px] bg-gray-500" />

        </div>

        {/* Slide indicator */}

        <div className="absolute bottom-8 right-6 md:right-12 z-20 flex items-center gap-2">

          {images.map((_, index) => (
            <span
              key={index}
              className={`h-[2px] transition-all duration-500 ${
                index === currentImage
                  ? "w-8 bg-red-500"
                  : "w-3 bg-white/30"
              }`}
            />
          ))}

        </div>

      </section>

      {/* =====================================================
          JERSEY STORE
      ====================================================== */}

      <section
        ref={jerseySectionRef}
        className="fade-in-section relative py-24 md:py-32 px-6 bg-black opacity-0"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <div className="flex justify-center items-center gap-3 mb-5">

              <div className="w-8 h-[3px] bg-red-600" />

              <span className="text-xs tracking-[0.3em] font-bold text-gray-500 uppercase">
                Official Merchandise
              </span>

              <div className="w-8 h-[3px] bg-blue-600" />

            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
              WEAR
              <span className="text-blue-500">
                {" "}THE PACK.
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
              Get your official 2025/26 44 Bulldogs FC fan jersey and
              represent the Pack wherever you go.
            </p>

          </div>

          <div className="relative max-w-6xl mx-auto">

            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 border-l-2 border-t-2 border-red-600/60" />

            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 border-r-2 border-b-2 border-blue-600/60" />

            <div className="relative z-10 bg-[#0b0b0b] border border-white/10 overflow-hidden">

              <div className="grid lg:grid-cols-2">

                <div className="relative min-h-[450px] md:min-h-[580px] overflow-hidden bg-[#111]">

                  <img
                    src={jersey.image}
                    alt="2025/26 44 Bulldogs FC Fan Jersey"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-6 left-6">

                    <div className="bg-red-600 px-4 py-3">

                      <span className="block text-[10px] tracking-[0.25em] uppercase font-bold">
                        Official
                      </span>

                      <span className="block text-lg font-black">
                        2025/26
                      </span>

                    </div>

                  </div>

                  <div className="absolute bottom-6 right-6">

                    <span className="text-6xl md:text-8xl font-black text-white/10">
                      44
                    </span>

                  </div>

                </div>

                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">

                  <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-[3px] bg-blue-500" />

                    <span className="text-xs tracking-[0.25em] uppercase text-gray-500 font-bold">
                      Matchday Collection
                    </span>

                  </div>

                  <h3 className="text-4xl md:text-5xl font-black leading-tight">
                    2025/26
                    <span className="block text-red-500">
                      FAN JERSEY
                    </span>
                  </h3>

                  <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
                    {jersey.description}
                  </p>

                  <div className="mt-8 pt-7 border-t border-white/10">

                    <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                      Official price
                    </p>

                    <div className="mt-1 flex items-end gap-3">

                      <span className="text-4xl md:text-5xl font-black text-white">
                        Ksh {jersey.price.toLocaleString()}
                      </span>

                    </div>

                  </div>

                  <button
                    onClick={() => setSelectedItem(jersey)}
                    className="group mt-8 w-full bg-red-600 hover:bg-blue-600 text-white py-4 px-6 font-black uppercase tracking-[0.08em] text-sm transition-all duration-300 flex items-center justify-center gap-4"
                  >
                    <span>
                      Get Your Jersey
                    </span>

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </button>

                  <div className="mt-5 flex items-start gap-3">

                    <div className="w-1 h-8 bg-blue-600 shrink-0" />

                    <p className="text-xs text-gray-600 leading-relaxed">
                      Every purchase helps support 44 Bulldogs FC and
                      contributes towards the continued growth of our
                      grassroots football initiative.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          2026/27 PLAYER REGISTRATION
      ====================================================== */}

      <section className="fade-in-section relative py-24 md:py-28 px-6 bg-[#080808] opacity-0">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden border border-white/10 bg-black">

            {/* Background accents */}

            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full" />

            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 blur-3xl rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-12">

              {/* Registration content */}

              <div className="lg:col-span-8 p-8 md:p-12 lg:p-16">

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-10 h-[3px] bg-red-600" />

                  <span className="text-xs tracking-[0.3em] text-gray-500 uppercase font-bold">
                    Player Recruitment
                  </span>

                </div>

                <h2 className="text-4xl md:text-6xl font-black leading-none">

                  READY TO JOIN

                  <span className="block text-blue-500">
                    THE PACK?
                  </span>

                </h2>

                <p className="mt-7 max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed">

                  44 Bulldogs FC is now welcoming player registrations for
                  the{" "}

                  <span className="text-white font-semibold">
                    2026/27 season
                  </span>
                  .

                  If you're ready to compete, grow, and contribute to the
                  team, register your interest below.

                </p>

                <p className="mt-4 max-w-2xl text-gray-500 leading-relaxed">

                  Registration is for players who are prepared to commit to
                  the team, attend training and matches, respect the club's
                  values, and give their best throughout the season.

                </p>

                <a
                  href="https://forms.gle/SFP1woF1oYj4SPdA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 mt-9 bg-red-600 hover:bg-blue-600 text-white px-7 py-4 font-black uppercase tracking-wide text-sm transition-all duration-300"
                >

                  Register for 26/27

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </a>

              </div>

              {/* Bulldog standard */}

              <div className="lg:col-span-4 bg-[#0b0b0b] border-t lg:border-t-0 lg:border-l border-white/10 p-8 md:p-12 flex flex-col justify-center">

                <p className="text-xs uppercase tracking-[0.25em] text-gray-600 font-bold">
                  The Bulldog Standard
                </p>

                <div className="mt-6 space-y-5">

                  <div className="flex gap-4">

                    <span className="text-red-500 font-black">
                      01
                    </span>

                    <div>

                      <h3 className="font-bold text-white">
                        Commitment
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        Be ready to commit to the team throughout the season.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <span className="text-blue-500 font-black">
                      02
                    </span>

                    <div>

                      <h3 className="font-bold text-white">
                        Discipline
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        Respect training, matches, teammates and club
                        leadership.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <span className="text-red-500 font-black">
                      03
                    </span>

                    <div>

                      <h3 className="font-bold text-white">
                        Team First
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        Put the Pack, its values and its goals above
                        individual interests.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-white/10">

                  <p className="text-xs text-gray-600 leading-relaxed">
                    Registration does not automatically guarantee selection.
                    Final selection will be determined by the club's technical
                    and management team.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ORDER MODAL
      ====================================================== */}

      {selectedItem && (

        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50 p-4">

          <div
            ref={popupRef}
            className="bg-[#101010] border border-white/10 w-full max-w-lg shadow-2xl max-h-[92vh] overflow-y-auto"
          >

            <div className="relative">

              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-52 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-5 left-6">

                <span className="text-xs uppercase tracking-[0.25em] text-blue-400 font-bold">
                  44 Bulldogs FC
                </span>

                <h3 className="text-2xl font-black mt-1">
                  Get Your Jersey
                </h3>

              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-red-600 text-white text-xl transition-colors duration-200"
                aria-label="Close order form"
              >
                ×
              </button>

            </div>

            <div className="p-6 md:p-8">

              <div className="flex justify-between items-center mb-7">

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Product
                  </p>

                  <p className="text-lg font-bold text-white mt-1">
                    {selectedItem.title}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Price
                  </p>

                  <p className="text-lg font-black text-red-500 mt-1">
                    Ksh {selectedItem.price.toLocaleString()}
                  </p>

                </div>

              </div>

              <div className="space-y-3">

                <div>

                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={selection.name}
                    onChange={(e) =>
                      setSelection({
                        ...selection,
                        name: e.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-black text-white py-3 px-4 outline-none focus:border-blue-500 transition-colors"
                  />

                </div>

                <div>

                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={selection.email}
                    onChange={(e) =>
                      setSelection({
                        ...selection,
                        email: e.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-black text-white py-3 px-4 outline-none focus:border-blue-500 transition-colors"
                  />

                </div>

                <div>

                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="07XXXXXXXX"
                    value={selection.phone}
                    onChange={(e) =>
                      setSelection({
                        ...selection,
                        phone: e.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-black text-white py-3 px-4 outline-none focus:border-blue-500 transition-colors"
                  />

                </div>

              </div>

              <div className="mt-6">

                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Quantity
                </label>

                <div className="flex items-center border border-white/10 bg-black w-fit">

                  <button
                    type="button"
                    onClick={() =>
                      setSelection({
                        ...selection,
                        quantity: Math.max(
                          1,
                          selection.quantity - 1
                        ),
                      })
                    }
                    className="w-11 h-11 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    −
                  </button>

                  <span className="w-12 text-center font-bold">
                    {selection.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setSelection({
                        ...selection,
                        quantity: selection.quantity + 1,
                      })
                    }
                    className="w-11 h-11 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="mt-7 p-5 bg-black border border-white/10">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    Order Total
                  </span>

                  <span className="text-2xl font-black text-white">

                    Ksh{" "}
                    {(
                      selectedItem.price * selection.quantity
                    ).toLocaleString()}

                  </span>

                </div>

              </div>

              <button
                onClick={handleOrderSubmit}
                className="group mt-5 w-full bg-red-600 hover:bg-blue-600 text-white py-4 font-black uppercase tracking-wide transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Place Jersey Order

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </button>

              <p className="mt-4 text-center text-xs text-gray-600 leading-relaxed">
                Your order details will be sent to the 44 Bulldogs FC
                team for confirmation.
              </p>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          MEET THE PACK
      ====================================================== */}

      <section className="fade-in-section py-24 md:py-28 px-6 bg-[#080808] opacity-0">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-12 gap-10 items-center">

            <div className="md:col-span-7 relative">

              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-red-600/60" />

              <img
                src="/assets/bulldog17.jpg"
                alt="Bulldogs Team"
                className="relative z-10 w-full h-[430px] md:h-[520px] object-cover"
              />

              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-blue-600/60" />

            </div>

            <div className="md:col-span-5 md:pl-8">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-8 h-[3px] bg-blue-500" />

                <span className="text-xs tracking-[0.3em] text-gray-500 uppercase font-bold">
                  The Mentality
                </span>

              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                MEET
                <span className="block text-blue-500">
                  THE PACK.
                </span>
              </h2>

              <p className="mt-7 text-gray-300 text-lg italic leading-relaxed">
                “A bulldog is a person who does not allow negativity to cloud
                their mind...”
              </p>

              <div className="mt-5 flex items-center gap-3">

                <div className="w-8 h-[2px] bg-red-600" />

                <p className="font-bold text-red-500 uppercase tracking-wide text-sm">
                  The Bulldog Mentality
                </p>

              </div>

              <p className="mt-7 text-gray-500 leading-relaxed">
                More than football. We are a community built around
                discipline, resilience, teamwork and purpose.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STORY / MISSION / VISION
      ====================================================== */}

      <section className="fade-in-section py-24 md:py-28 px-6 bg-black opacity-0">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-8 h-[3px] bg-red-600" />

              <span className="text-xs tracking-[0.3em] text-gray-500 uppercase font-bold">
                What drives us
              </span>

            </div>

            <h2 className="text-4xl md:text-6xl font-black">
              MORE THAN
              <span className="text-red-500">
                {" "}FOOTBALL.
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 border border-white/10">

            <div className="relative p-8 md:p-10 min-h-[330px] overflow-hidden group border-b md:border-b-0 md:border-r border-white/10">

              <img
                src="/assets/bulldog17.jpg"
                alt="Our Story"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              />

              <div className="relative z-10">

                <span className="text-5xl font-black text-red-600/30">
                  01
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Our Story
                </h3>

                <p className="mt-5 text-gray-400 leading-relaxed">
                  44 Bulldogs FC is a youth-centered grassroots football
                  initiative under{" "}
                  <span className="text-blue-400 font-semibold">
                    Ujana na Ujuzi CBO
                  </span>
                  . We harness football as a tool for unity, mental health
                  awareness, and positive social change.
                </p>

              </div>

            </div>

            <div className="relative p-8 md:p-10 min-h-[330px] overflow-hidden group border-b md:border-b-0 md:border-r border-white/10">

              <img
                src="/assets/bulldog14.jpg"
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              />

              <div className="relative z-10">

                <span className="text-5xl font-black text-blue-600/30">
                  02
                </span>

                <h3 className="mt-5 text-2xl font-bold text-blue-400">
                  Our Mission
                </h3>

                <p className="mt-5 text-gray-400 leading-relaxed">
                  To empower youth through football by nurturing discipline,
                  teamwork, and leadership while promoting peace and mental
                  well-being across communities.
                </p>

              </div>

            </div>

            <div className="relative p-8 md:p-10 min-h-[330px] overflow-hidden group">

              <img
                src="/assets/bulldog16.jpg"
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              />

              <div className="relative z-10">

                <span className="text-5xl font-black text-red-600/30">
                  03
                </span>

                <h3 className="mt-5 text-2xl font-bold text-red-400">
                  Our Vision
                </h3>

                <p className="mt-5 text-gray-400 leading-relaxed">
                  To become a beacon of hope for young people, transforming
                  passion for football into purpose-driven lives full of
                  opportunity, unity, and pride.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          IMPACT
      ====================================================== */}

      <section className="fade-in-section relative py-24 md:py-28 px-6 bg-[#080808] opacity-0">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="relative">

              <img
                src="/assets/bulldog22.jpg"
                alt="Team Training"
                className="w-full h-[420px] md:h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <span className="bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
                  Be Part of It
                </span>

              </div>

            </div>

            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-8 h-[3px] bg-red-600" />

                <span className="text-xs tracking-[0.3em] text-gray-500 uppercase font-bold">
                  Join the journey
                </span>

              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                BE PART OF THE
                <span className="block text-red-500">
                  IMPACT STORY.
                </span>
              </h2>

              <p className="mt-7 text-gray-300 leading-relaxed">
                Join the{" "}
                <span className="text-blue-400 font-semibold">
                  team
                </span>{" "}
                as a{" "}
                <span className="text-red-400 font-semibold">
                  player
                </span>
                ,{" "}
                <span className="text-blue-400 font-semibold">
                  volunteer
                </span>{" "}
                staff, or{" "}
                <span className="text-red-400 font-semibold">
                  mentor
                </span>
                . Selection is based on{" "}
                <span className="text-yellow-400 font-semibold">
                  talent
                </span>
                ,{" "}
                <span className="text-blue-400 font-semibold">
                  expertise
                </span>
                , and commitment to the club’s values.
              </p>

              <p className="mt-5 text-gray-300 leading-relaxed">
                Merchandise is available for purchase. Goodwill ambassadors,
                philanthropists,{" "}
                <span className="text-blue-400 font-semibold">
                  sponsors
                </span>
                , and partners who share our vision can contribute via in-kind
                donations, grants, and related resources.
              </p>

              <div className="mt-8 border-l-2 border-red-600 bg-black p-6">

                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                  Support the initiative
                </p>

                <div className="space-y-2 text-sm">

                  <p>
                    <span className="text-blue-400 font-semibold">
                      Mobile Money Paybill:
                    </span>{" "}
                    600100
                  </p>

                  <p>
                    <span className="text-red-400 font-semibold">
                      Account No:
                    </span>{" "}
                    440047
                  </p>

                  <p>
                    <span className="text-yellow-400 font-semibold">
                      Name:
                    </span>{" "}
                    Ujana na Ujuzi
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MANAGEMENT
      ====================================================== */}

      <section className="fade-in-section py-24 md:py-28 px-6 bg-black opacity-0">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <div className="flex justify-center items-center gap-3 mb-4">

              <div className="w-8 h-[3px] bg-blue-500" />

              <span className="text-xs tracking-[0.3em] text-gray-500 uppercase font-bold">
                Behind the Pack
              </span>

              <div className="w-8 h-[3px] bg-red-600" />

            </div>

            <h2 className="text-4xl md:text-6xl font-black">
              MEET THE
              <span className="text-blue-500">
                {" "}MANAGEMENT.
              </span>
            </h2>

            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              The people helping guide 44 Bulldogs FC both on the pitch and
              within the wider community.
            </p>

          </div>

          <div className="flex justify-center gap-10 md:gap-14 flex-wrap mb-12">

            {management.slice(0, 4).map((person, idx) => (

              <div
                key={idx}
                className="group flex flex-col items-center text-center w-44"
              >

                <div className="relative mb-5">

                  <div className="absolute inset-0 border border-red-600 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

                  <img
                    src={person.photo}
                    alt={person.name}
                    className="relative z-10 w-32 h-32 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                </div>

                <h3 className="text-base font-bold text-white">
                  {person.name}
                </h3>

                <p className="mt-1 text-xs text-blue-400 uppercase tracking-wide">
                  {person.role}
                </p>

              </div>

            ))}

          </div>

          <div className="flex justify-center gap-10 md:gap-14 flex-wrap">

            {management.slice(4).map((person, idx) => (

              <div
                key={idx}
                className="group flex flex-col items-center text-center w-44"
              >

                <div className="relative mb-5">

                  <div className="absolute inset-0 border border-blue-600 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

                  <img
                    src={person.photo}
                    alt={person.name}
                    className="relative z-10 w-32 h-32 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                </div>

                <h3 className="text-base font-bold text-white">
                  {person.name}
                </h3>

                <p className="mt-1 text-xs text-red-400 uppercase tracking-wide">
                  {person.role}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER STRIP
      ====================================================== */}

      <div className="border-t border-white/10 bg-[#050505]">

        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
            44 Bulldogs FC
          </p>

          <p className="text-xs text-gray-600">
            Part of the Ujana na Ujuzi CBO initiative
          </p>

          <div className="flex items-center gap-2">

            <span className="w-8 h-[2px] bg-blue-600" />

            <span className="w-8 h-[2px] bg-red-600" />

          </div>

        </div>

      </div>

      {/* =====================================================
          LOCAL STYLES
      ====================================================== */}

      <style>{`

        html {
          scroll-behavior: smooth;
        }

        .fade-in-out {
          animation: fadeInOut 5s ease-in-out forwards;
        }

        @keyframes fadeInOut {

          0% {
            opacity: 0;
            transform: translate(-50%, -12px);
          }

          10%,
          90% {
            opacity: 1;
            transform: translate(-50%, 0);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -12px);
          }

        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.9s ease-out,
            transform 0.9s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-title {
          animation: heroTitleIn 1.1s ease-out both;
        }

        .hero-reveal {
          animation: heroReveal 0.9s ease-out both;
        }

        @keyframes heroTitleIn {

          from {
            opacity: 0;
            transform: translateY(24px);
            letter-spacing: 0.04em;
          }

          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: -0.02em;
          }

        }

        @keyframes heroReveal {

          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        button,
        img {
          -webkit-tap-highlight-color: transparent;
        }

      `}</style>

    </section>
  );
}