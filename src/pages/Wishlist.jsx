import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import Modal from "../components/Modal";
import { BASE_URL } from "../../utils/urls";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    loadWishlist();
  }, []);

  // Load wishlist from backend
  const loadWishlist = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      if (!token) {
        setWishlistItems([]);
        setLoading(false);
        return;
      }

      // Get wishlist IDs
      const res = await axios.get(`${BASE_URL}/api/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const ids = res.data.wishlist || [];

      if (ids.length === 0) {
        setWishlistItems([]);
        setLoading(false);
        return;
      }

      // Fetch full property details for each ID
      const responses = await Promise.all(
        ids.map((id) => axios.get(`${BASE_URL}/plot/${id}`))
      );

      const properties = responses.map((r) => r.data.data);
      setWishlistItems(properties);

    } catch (err) {
      console.error("Error loading wishlist:", err);
      setError("Failed to load wishlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = async (plotId) => {
    // This is handled by PropertyCard component now
    // This function can be removed if not used elsewhere
  };

  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="min-h-screen p-14 bg-gray-50">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold mb-2">Your Wishlist</h1>
          <p className="text-gray-600 mb-8">{wishlistItems.length} properties saved</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          {wishlistItems.length === 0 ? (
            <div className="text-center mt-20 bg-white p-12 rounded-lg shadow-sm">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-600 mb-6">
                Start adding properties to save them for later!
              </p>
              <a
                href="/commercial"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Browse Properties
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((property) => (
                <div 
                  key={property._id} 
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedProperty(property)}
                >
                  <PropertyCard 
                    property={property}
                    onWishlistChange={(id, isAdded) => {
                      if (!isAdded) {
                        setWishlistItems((prev) =>
                          prev.filter((item) => item._id !== id)
                        );
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedProperty && (
        <Modal 
          property={selectedProperty}
          onClose={closeModal}
          formatPrice={formatPrice}
        />
      )}
    </div>  
  );
}