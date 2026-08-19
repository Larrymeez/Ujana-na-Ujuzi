import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [pillarsOpen, setPillarsOpen] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  const isBulldogsPage = location.pathname === "/bulldogs";
  const isDarkPage = isBulldogsPage;

  // =========================================================
  // SCREEN SIZE
  // =========================================================

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // =========================================================
  // SCROLL
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================================
  // NAVBAR HEIGHT
  // =========================================================

  useEffect(() => {
    if (!navRef.current) return;

    const updateHeight = () => {
      window.dispatchEvent(
        new CustomEvent("navbarHeight", {
          detail: navRef.current.offsetHeight,
        })
      );
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(navRef.current);

    return () => observer.disconnect();
  }, []);

  // =========================================================
  // CLOSE MOBILE MENU ON ROUTE CHANGE
  // =========================================================

  useEffect(() => {
    setMobileOpen(false);
    setPillarsOpen(false);
    setProgrammesOpen(false);
  }, [location.pathname]);

  // =========================================================
  // CLOSE MOBILE MENU WHEN SWITCHING TO DESKTOP
  // =========================================================

  useEffect(() => {
    if (!isMobile) {
      setMobileOpen(false);
      setPillarsOpen(false);
      setProgrammesOpen(false);
    }
  }, [isMobile]);

  // =========================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =========================================================

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen && isMobile ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, isMobile]);

  // =========================================================
  // CLOSE MENU
  // =========================================================

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setPillarsOpen(false);
    setProgrammesOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`
        sticky top-0 z-50 w-full
        border-b
        transition-all duration-300
        ${
          isDarkPage
            ? scrolled
              ? "bg-black/95 border-white/10"
              : "bg-black/60 border-white/10"
            : scrolled
            ? "bg-white border-gray-200 shadow-md"
            : "bg-white border-gray-200"
        }
        ${scrolled ? "backdrop-blur-xl" : ""}
      `}
    >

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-[72px] flex items-center justify-between">

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={
                isBulldogsPage
                  ? "/assets/Bulldog.png"
                  : "/assets/logo.png"
              }
              alt={
                isBulldogsPage
                  ? "44 Bulldogs FC"
                  : "Ujana na Ujuzi"
              }
              className={
                isBulldogsPage
                  ? "w-11 h-11 sm:w-12 sm:h-12 object-contain"
                  : "w-12 h-12 sm:w-14 sm:h-14 object-contain"
              }
            />

            <div className="leading-tight">

              <span
                className={`
                  block
                  text-sm sm:text-base
                  font-bold
                  ${
                    isDarkPage
                      ? "text-white"
                      : "text-gray-900"
                  }
                `}
              >
                {isBulldogsPage
                  ? "44 Bulldogs FC"
                  : "Ujana na Ujuzi"}
              </span>

              {!isBulldogsPage && (
                <span className="hidden sm:block text-[9px] uppercase tracking-[0.18em] text-gray-500 mt-1">
                  Community • Purpose • Impact
                </span>
              )}

            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          {!isMobile && (
            <div className="flex items-center">

              <ul
                className={`
                  flex items-center
                  gap-5 lg:gap-7
                  text-sm
                  font-medium
                  ${
                    isDarkPage
                      ? "text-gray-200"
                      : "text-gray-800"
                  }
                `}
              >

                {/* HOME */}

                <li>
                  <Link
                    to="/"
                    className="hover:text-red-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>

                {/* =================================================
                    PILLARS
                ================================================== */}

                <li
                  className="relative"
                  onMouseEnter={() => setPillarsOpen(true)}
                  onMouseLeave={() => setPillarsOpen(false)}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setPillarsOpen(!pillarsOpen)
                    }
                    className="
                      flex
                      items-center
                      gap-1
                      hover:text-red-600
                      transition-colors
                    "
                  >
                    Pillars

                    <span
                      className={`
                        text-[9px]
                        transition-transform
                        ${
                          pillarsOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      ▼
                    </span>
                  </button>

                  {pillarsOpen && (
                    <div className="absolute top-full left-0 pt-3">

                      <div
                        className={`
                          w-52
                          p-2
                          border
                          shadow-xl
                          ${
                            isDarkPage
                              ? "bg-[#111] border-white/10"
                              : "bg-white border-gray-200"
                          }
                        `}
                      >

                        <Link
                          to="/civic"
                          className="
                            block px-4 py-3
                            text-sm
                            hover:bg-red-50
                            hover:text-red-600
                            transition
                          "
                        >
                          Civic Engagement
                        </Link>

                        <Link
                          to="/mental"
                          className="
                            block px-4 py-3
                            text-sm
                            hover:bg-red-50
                            hover:text-red-600
                            transition
                          "
                        >
                          Mental Wellbeing
                        </Link>

                        <Link
                          to="/env"
                          className="
                            block px-4 py-3
                            text-sm
                            hover:bg-red-50
                            hover:text-red-600
                            transition
                          "
                        >
                          Climate Action
                        </Link>

                      </div>

                    </div>
                  )}

                </li>

                {/* =================================================
                    PROGRAMMES
                ================================================== */}

                <li
                  className="relative"
                  onMouseEnter={() =>
                    setProgrammesOpen(true)
                  }
                  onMouseLeave={() =>
                    setProgrammesOpen(false)
                  }
                >

                  <button
                    type="button"
                    onClick={() =>
                      setProgrammesOpen(
                        !programmesOpen
                      )
                    }
                    className="
                      flex
                      items-center
                      gap-1
                      hover:text-red-600
                      transition-colors
                    "
                  >
                    Programmes

                    <span
                      className={`
                        text-[9px]
                        transition-transform
                        ${
                          programmesOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      ▼
                    </span>
                  </button>

                  {programmesOpen && (
                    <div className="absolute top-full left-0 pt-3">

                      <div
                        className={`
                          w-52
                          p-2
                          border
                          shadow-xl
                          ${
                            isDarkPage
                              ? "bg-[#111] border-white/10"
                              : "bg-white border-gray-200"
                          }
                        `}
                      >

                        <Link
                          to="/bulldogs"
                          className="
                            block px-4 py-3
                            text-sm
                            hover:bg-red-50
                            hover:text-red-600
                            transition
                          "
                        >
                          44 Bulldogs FC
                        </Link>

                      </div>

                    </div>
                  )}

                </li>

                {/* GALLERY */}

                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-red-600 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>

                {/* ABOUT */}

                <li>
                  <Link
                    to="/about"
                    className="hover:text-red-600 transition-colors"
                  >
                    About
                  </Link>
                </li>

                {/* CONTACT */}

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-red-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>

                {/* CTA */}

                <li>
                  <Link
                    to="/contact"
                    className="
                      ml-1
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      px-5
                      py-2.5
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      transition-colors
                    "
                  >
                    Get Involved
                  </Link>
                </li>

              </ul>

            </div>
          )}

          {/* =================================================
              MOBILE HAMBURGER
          ================================================== */}

          {isMobile && (
            <button
              type="button"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className={`
                w-11 h-11
                flex flex-col
                justify-center
                items-center
                gap-[5px]
                border
                ${
                  isDarkPage
                    ? "border-white/20"
                    : "border-gray-300"
                }
              `}
              aria-label="Toggle navigation"
            >

              <span
                className={`
                  w-5 h-[2px]
                  ${
                    isDarkPage
                      ? "bg-white"
                      : "bg-black"
                  }
                  transition-transform duration-300
                  ${
                    mobileOpen
                      ? "translate-y-[7px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  w-5 h-[2px]
                  ${
                    isDarkPage
                      ? "bg-white"
                      : "bg-black"
                  }
                  transition-opacity duration-300
                  ${
                    mobileOpen
                      ? "opacity-0"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  w-5 h-[2px]
                  ${
                    isDarkPage
                      ? "bg-white"
                      : "bg-black"
                  }
                  transition-transform duration-300
                  ${
                    mobileOpen
                      ? "-translate-y-[7px] -rotate-45"
                      : ""
                  }
                `}
              />

            </button>
          )}

        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {isMobile && mobileOpen && (

        <div
          className={`
            border-t
            ${
              isDarkPage
                ? "bg-[#080808] border-white/10"
                : "bg-white border-gray-200"
            }
          `}
        >

          <div className="px-5 py-5">

            {/* HOME */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                block
                py-3
                font-medium
                hover:text-red-600
              "
            >
              Home
            </Link>

            {/* PILLARS */}

            <button
              type="button"
              onClick={() =>
                setPillarsOpen(!pillarsOpen)
              }
              className="
                w-full
                flex
                justify-between
                items-center
                py-3
                font-medium
              "
            >
              Pillars

              <span
                className={
                  pillarsOpen
                    ? "rotate-180"
                    : ""
                }
              >
                ▼
              </span>
            </button>

            {pillarsOpen && (
              <div className="ml-4 border-l-2 border-red-600">

                <Link
                  to="/civic"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm"
                >
                  Civic Engagement
                </Link>

                <Link
                  to="/mental"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm"
                >
                  Mental Wellbeing
                </Link>

                <Link
                  to="/env"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm"
                >
                  Climate Action
                </Link>

              </div>
            )}

            {/* PROGRAMMES */}

            <button
              type="button"
              onClick={() =>
                setProgrammesOpen(
                  !programmesOpen
                )
              }
              className="
                w-full
                flex
                justify-between
                items-center
                py-3
                font-medium
              "
            >
              Programmes

              <span
                className={
                  programmesOpen
                    ? "rotate-180"
                    : ""
                }
              >
                ▼
              </span>
            </button>

            {programmesOpen && (
              <div className="ml-4 border-l-2 border-blue-600">

                <Link
                  to="/bulldogs"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2.5 text-sm"
                >
                  44 Bulldogs FC
                </Link>

              </div>
            )}

            {/* OTHER LINKS */}

            <Link
              to="/gallery"
              onClick={closeMobileMenu}
              className="
                block
                py-3
                font-medium
                hover:text-red-600
              "
            >
              Gallery
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="
                block
                py-3
                font-medium
                hover:text-red-600
              "
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="
                block
                py-3
                font-medium
                hover:text-red-600
              "
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="
                block
                text-center
                mt-4
                bg-red-600
                text-white
                py-3
                font-bold
                uppercase
                tracking-wide
                text-sm
              "
            >
              Get Involved
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}