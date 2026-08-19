import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/assets/hero9.jpg",
  "/assets/hero2.jpg",
  "/assets/bulldog33.jpg",
  "/assets/bulldog24.jpg",
  "/assets/bulldog26.jpg",
  "/assets/event2.jpg",
  "/assets/bulldog25.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showText, setShowText] = useState(false);

  // =========================================================
  // HERO SLIDESHOW
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // =========================================================
  // TEXT REVEAL
  // =========================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[78vh] min-h-[560px] sm:h-[84vh] md:h-[88vh] overflow-hidden bg-black">

      {/* =====================================================
          BACKGROUND IMAGES
      ====================================================== */}

      <div className="absolute inset-0">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Ujana na Ujuzi activity ${index + 1}`}
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-opacity
              duration-[1400ms]
              ease-in-out
              ${
                index === current
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        ))}

      </div>

      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-black/35" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/95
          via-black/45
          to-black/10
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/55
          via-black/10
          to-transparent
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="absolute top-0 left-0 right-0 z-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-5 sm:py-7">

          <div className="flex items-start justify-between">

            {/* Logo */}

            <img
              src="/assets/logo.png"
              alt="Ujana na Ujuzi"
              className="
                w-20
                sm:w-24
                md:w-28
                object-contain
              "
            />

            {/* Small identity label */}

            <div className="hidden sm:flex items-center gap-3">

              <span className="w-7 h-[2px] bg-red-600" />

              <span
                className="
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.25em]
                  font-bold
                  text-white/70
                "
              >
                Youth • Community • Action
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-end">

        <div className="w-full pb-20 sm:pb-24 md:pb-24">

          {/* Small heading */}

          <div
            className={`
              flex
              items-center
              gap-3
              mb-4
              transition-all
              duration-700
              ${
                showText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >

            <span className="w-8 h-[2px] bg-red-600" />

            <span
              className="
                text-[11px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                font-bold
                text-white/80
              "
            >
              Ujana na Ujuzi
            </span>

          </div>

          {/* Main heading */}

          <div
            className={`
              max-w-2xl
              transition-all
              duration-900
              ${
                showText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}
          >

            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                uppercase
                tracking-tight
                leading-[1]
                text-white
              "
            >
              Empowering

              <span className="text-red-500">
                {" "}young people
              </span>

              <span className="block">
                to shape their communities.
              </span>

            </h1>

          </div>

          {/* Motto */}

          <p
            className={`
              mt-5
              text-base
              sm:text-lg
              md:text-xl
              font-semibold
              tracking-wide
              text-white
              transition-all
              duration-700
              delay-200
              ${
                showText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            In{" "}
            <span className="text-red-500">
              Speech
            </span>
            ,{" "}
            <span className="text-red-500">
              Conduct
            </span>{" "}
            &{" "}
            <span className="text-red-500">
              Love
            </span>
          </p>

          {/* CTA */}

          <div
            className={`
              mt-6
              transition-all
              duration-700
              delay-300
              ${
                showText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                bg-red-600
                hover:bg-red-700
                text-white
                px-6
                py-3
                font-bold
                uppercase
                tracking-wide
                text-xs
                sm:text-sm
                transition-colors
                duration-300
              "
            >

              Join Us

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          SLIDE INDICATORS
          Subtle horizontal bars — Bulldogs style
      ====================================================== */}

      <div
        className="
          absolute
          bottom-7
          right-5
          sm:right-8
          md:right-12
          z-20
          flex
          items-center
          gap-2
        "
      >

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-[2px]
              transition-all
              duration-500
              ${
                index === current
                  ? "w-8 bg-red-500"
                  : "w-3 bg-white/35 hover:bg-white/70"
              }
            `}
          />
        ))}

      </div>

    </section>
  );
}