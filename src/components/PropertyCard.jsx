import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/urls";

export default function PropertyCard({ property, onWishlistChange }) {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkWishlistStatus();
  }, [property._id]);

  const checkWishlistStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch(`${BASE_URL}/api/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success && data.wishlist) {
        setSaved(data.wishlist.includes(property._id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  async function toggleSaved(e) {
    e.preventDefault();
    e.stopPropagation();

    const token = localStorage.getItem("token");
    if (!token) return alert("Please login");

    setLoading(true);
    const endpoint = saved ? "remove" : "add";

    try {
      const res = await fetch(`${BASE_URL}/api/wishlist/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plotId: property._id }),
      });

      const data = await res.json();
      if (data.success) {
        setSaved(!saved);
        onWishlistChange?.(property._id, !saved);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <article
      className="
        bg-white
        rounded-xl
        overflow-hidden
        border border-gray-200
        shadow-sm
        hover:shadow-lg
        transition
        duration-300
        h-full
        flex flex-col
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/3] bg-gray-100">
        <img
          src={property.images?.[0]?.url || property.image || "/placeholder.jpg"}
          alt={property.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {/* HEART */}
        <button
          onClick={toggleSaved}
          className="absolute top-3 right-3 z-20 p-1 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all shadow-sm"
          title={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          {saved ? (
            <svg className="w-6 h-6 text-red-500 fill-red-500" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.63 2.09-4.5 4.5-4.5 1.74 0 3.41 1.01 4.5 2.09C12.09 5.01 13.76 4 15.5 4 17.91 4 20 5.87 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.87 4.09 4 6.5 4c1.74 0 3.41 1.01 4.5 2.09C12.09 5.01 13.76 4 15.5 4 17.91 4 20 5.87 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </button>

        {property.badge && (
          <span className="absolute left-3 top-3 rounded bg-white px-2 py-1 text-[11px] font-semibold shadow">
            {property.badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-1 p-4">
        <div className="text-sm font-semibold text-gray-900">
          ₹ {property.price?.toLocaleString("en-IN")}
        </div>

        <div className="text-xs text-gray-500 line-clamp-2">
          {property.location?.city ||
            property.location?.address ||
            "Location not specified"}
        </div>
      </div>
    </article>
  );
}
