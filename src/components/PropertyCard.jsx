import React, { useState } from "react";

export default function PropertyCard({ property }) {
  const [saved, setSaved] = useState(false);

  function toggleSaved(e) {
    e.preventDefault();
    setSaved((s) => !s);
  }

  return (
    <article className="group relative">
      <div className="relative overflow-hidden rounded-sm bg-gray-100">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 sm:h-64 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* heart button - toggles red when clicked */}
        <button
          aria-label={saved ? "Unsave" : "Save"}
          aria-pressed={saved}
          onClick={toggleSaved}
          className={
            "absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full shadow transition-colors duration-200 " +
            (saved
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-white/90 text-gray-700 hover:bg-white")
          }
        >
          {/* Filled heart when saved, outline otherwise */}
          {saved ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8 8.6c0 4.3-3.4 7.4-8 11.1L12 20l-.8-.3C6.6 16 3.2 12.9 3.2 8.6 3.2 6.2 5.2 4.2 7.6 4.2c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2 2.4 0 4.4 2 4.4 4.4z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          )}
        </button>

        {/* video / badge (optional) */}
        {property.badge && (
          <span className="absolute left-3 top-3 rounded px-2 py-1 bg-white text-[11px] font-semibold text-gray-800 shadow">
            {property.badge}
          </span>
        )}
      </div>

      <div className="mt-3 text-sm">
        <div className="text-xs font-semibold text-gray-900">₹ {property.price}</div>
        <div className="text-xs text-gray-500 truncate">{property.location}</div>
      </div>
    </article>
  );
}

