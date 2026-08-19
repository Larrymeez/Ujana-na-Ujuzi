import React from "react";

export default function PillarCard({
  title,
  description,
  link,
  bgImage,
}) {
  return (
    <a
      href={link}
      className="
        group
        relative
        block
        min-h-[23rem]
        sm:min-h-[25rem]
        md:min-h-[28rem]
        w-full
        overflow-hidden
        border
        border-black/10
        bg-black
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/65
          to-black/10
          transition-opacity
          duration-500
          group-hover:from-black
          group-hover:via-black/55
        "
      />

      {/* =====================================================
          RED ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-1
          h-0
          bg-red-600
          transition-all
          duration-500
          group-hover:h-full
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-end
          h-full
          px-6
          sm:px-7
          md:px-8
          py-7
          sm:py-8
          md:py-9
        "
      >

        {/* Small label */}

        <div className="flex items-center gap-3 mb-5">

          <span
            className="
              w-8
              h-[2px]
              bg-red-600
              transition-all
              duration-300
              group-hover:w-12
            "
          />

          <span
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              font-bold
              text-gray-300
            "
          >
            Our Pillar
          </span>

        </div>

        {/* Title */}

        <h3
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-black
            uppercase
            tracking-tight
            leading-none
            text-white
            max-w-sm
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4
            text-sm
            sm:text-base
            leading-relaxed
            text-gray-300
            max-w-md
          "
        >
          {description}
        </p>

        {/* Explore link */}

        <div
          className="
            mt-7
            flex
            items-center
            gap-3
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.15em]
            font-bold
            text-white
          "
        >

          <span className="text-red-500">
            Explore
          </span>

          <span
            className="
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
          >
            →
          </span>

        </div>

      </div>

    </a>
  );
}