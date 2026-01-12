import React, { useRef, useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import Modal from "./Modal";
import { getTrendingPlots } from "../../services/plotService";

export default function Trending() {
  const scrollRef = useRef(null);

  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectedPlot, setSelectedPlot] = useState(null);

  /* -------------------- EFFECTS -------------------- */

  useEffect(() => {
    init();
  }, []);

  /* -------------------- INITIALIZATION -------------------- */

  const init = async () => {
    try {
      setLoading(true);
      setError(null);
      const plotsData = await getTrendingPlots();
      setPlots(plotsData);
      loadWishlist();
    } catch (err) {
      console.error("Initialization error:", err);
      setError("Failed to load trending plots. Please try again.");
      setPlots([]);
    } finally {
      setLoading(false);
    }
  };

  const loadWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const BASE_URL = "http://localhost:5000";
      const res = await fetch(`${BASE_URL}/api/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) return;

      const data = await res.json();

      if (data.success && Array.isArray(data.wishlist)) {
        const ids = data.wishlist.map((i) =>
          typeof i === "string" ? i : i._id
        );
        setWishlist(ids);
      }
    } catch (err) {
      console.error("Wishlist load error:", err);
    }
  };

  const handleWishlistChange = (plotId, isAdded) => {
    if (isAdded) {
      setWishlist((prev) => [...prev, plotId]);
    } else {
      setWishlist((prev) => prev.filter((id) => id !== plotId));
    }
  };

  /* -------------------- HELPERS -------------------- */

  const scrollBy = (offset) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price?.toLocaleString("en-IN")}`;
  };

  /* -------------------- RENDER STATES -------------------- */

  if (loading) {
    return (
      <section className="px-6 py-10">
        <div className="flex justify-center h-64">
          <div className="animate-spin h-12 w-12 border-b-2 border-[#2b54a2]" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-10 text-center">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button
          onClick={init}
          className="px-4 py-2 bg-[#2b54a2] text-white rounded hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </section>
    );
  }

  if (!plots.length) {
    return (
      <section className="px-6 py-10 text-center text-gray-500">
        <p className="text-lg">No trending plots available at the moment.</p>
      </section>
    );
  }

  /* -------------------- MAIN UI -------------------- */

  return (
    <section className="mx-auto px-4 sm:px-6 py-10 max-w-[90vw]">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-gray-900">
          Trending
        </h2>

        <div className="hidden lg:flex gap-2">
          <button
            onClick={() => scrollBy(-560)}
            className="p-2 hover:bg-gray-200 rounded transition"
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            onClick={() => scrollBy(560)}
            className="p-2 hover:bg-gray-200 rounded transition"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>

      {/* GRID - RESPONSIVE */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-3
          sm:gap-4
          lg:gap-6
        "
      >
        {plots.map((plot) => (
          <div
            key={plot._id}
            onClick={() => setSelectedPlot(plot)}
            className="cursor-pointer"
          >
            <PropertyCard
              property={plot}
              onWishlistChange={handleWishlistChange}
              isSaved={wishlist.includes(plot._id)}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPlot && (
        <Modal
          property={selectedPlot}
          onClose={() => setSelectedPlot(null)}
          formatPrice={formatPrice}
        />
      )}
    </section>
  );
}