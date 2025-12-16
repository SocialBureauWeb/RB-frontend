import React, { useRef } from "react";
import PropertyCard from "./PropertyCard";
import properties from "../data/properties";

export default function Trending() {
  const scrollRef = useRef(null);

  function scrollBy(offset) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  }

  return (
    <section className="mx-auto px-6 py-10 max-w-[90vw]">
      <div className="flex items-start justify-between mb-6">
        <h2 className="font-serif text-2xl lg:text-3xl">Trending</h2>

        {/* desktop controls */}
        <div className="hidden lg:flex gap-2 items-center">
          <button
            aria-label="Prev"
            onClick={() => scrollBy(-560)}
            className="h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow focus:outline-none"
          >
            <svg className="w-4 h-4 mx-auto" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(560)}
            className="h-10 w-10 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow focus:outline-none"
          >
            <svg className="w-4 h-4 mx-auto" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive layout:
          - Mobile/sm: horizontal scroll list
          - md+: more columns
          - lg: fixed 5-column grid (no overflow)
      */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:overflow-visible lg:grid lg:grid-cols-5 lg:gap-6"
      >
        {properties.map((p) => (
          <div
            key={p.id}
            className="flex-shrink-0 w-72 snap-start lg:static lg:w-auto"
            style={{ minWidth: 0 }}
          >
            <PropertyCard property={p} />
          </div>
        ))}
      </div>
    </section>
  );
}