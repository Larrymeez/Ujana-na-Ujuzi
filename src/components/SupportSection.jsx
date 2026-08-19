import React from "react";
import { useNavigate } from "react-router-dom";

export default function SupportSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white text-black py-16 sm:py-20 lg:py-24 px-5 sm:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-10 lg:mb-14">

          <div className="flex items-center gap-3">

            <span className="w-8 h-[2px] bg-red-600" />

            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Get Involved
            </span>

          </div>

        </div>


        {/* =====================================================
            DESKTOP TWO-COLUMN LAYOUT
            LEFT  = IMAGE
            RIGHT = CONTENT
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">


          {/* =====================================================
              LEFT — IMAGE
          ====================================================== */}

          <div className="w-full">

            <div className="relative">

              {/* Decorative offset border */}
              <div
                className="
                  absolute
                  -bottom-3
                  -right-3
                  sm:-bottom-4
                  sm:-right-4
                  w-full
                  h-full
                  border
                  border-red-600/40
                "
              />

              {/* Image */}
              <div className="relative z-10 w-full overflow-hidden bg-gray-100">

                <img
                  src="/assets/support.jpg"
                  alt="Supporting Ujana na Ujuzi programmes"
                  className="
                    block
                    w-full
                    h-auto
                    aspect-[4/3]
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Image caption */}
                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">

                  <div className="flex items-center gap-3">

                    <span className="w-7 h-[2px] bg-red-600" />

                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      Community • Action • Change
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}

          <div className="w-full">

            <div className="max-w-xl">

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] text-gray-900">

                Support Our{" "}

                <span className="text-red-600">
                  Programmes
                </span>

              </h2>


              {/* Accent line */}
              <div className="mt-5 w-14 h-[3px] bg-red-600" />


              {/* Main paragraph */}
              <p className="mt-7 text-gray-700 text-base sm:text-lg leading-relaxed">

                Our work is built around people. Through youth programmes,
                community workshops and civic engagement, we create spaces
                where people can learn, participate and make a difference.

              </p>


              {/* Second paragraph */}
              <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">

                Your support helps us reach more young people and communities
                with practical education, mental wellbeing initiatives and
                environmental programmes.

              </p>


              {/* Highlight */}
              <div className="mt-8 border-l-2 border-red-600 pl-5">

                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  Every contribution helps us do more.
                </p>

                <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed">

                  Whether you choose to support our programmes, explore the
                  Bulldogs initiative or simply connect with us, you're
                  helping strengthen the work we do within our communities.

                </p>

              </div>


              {/* =====================================================
                  BUTTONS
              ====================================================== */}

              <div className="mt-9 flex flex-col sm:flex-row gap-3">


                {/* Bulldogs */}
                <button
                  onClick={() => navigate("/bulldogs")}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-red-600
                    hover:bg-black
                    text-white
                    font-semibold
                    px-6
                    py-3.5
                    transition-all
                    duration-300
                  "
                >

                  <span>
                    Explore Bulldogs
                  </span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>


                {/* Contact */}
                <button
                  onClick={() => navigate("/contact")}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-white
                    border
                    border-gray-300
                    hover:border-red-600
                    hover:text-red-600
                    text-gray-800
                    font-semibold
                    px-6
                    py-3.5
                    transition-all
                    duration-300
                  "
                >

                  <span>
                    Contact Us
                  </span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}