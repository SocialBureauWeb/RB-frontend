// import { BASE_URL } from "../utils/urls";

import { BASE_URL } from "../utils/urls";

// const getToken = () => localStorage.getItem("token");

// export const fetchWishlist = async () => {
//   const token = getToken();
//   if (!token) return [];

//   const res = await fetch(`${BASE_URL}/api/wishlist`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   const data = await res.json();

//   if (!res.ok || !data.success) {
//     throw new Error(data.message || "Failed to load wishlist");
//   }

//   return data.wishlist.map((i) => (typeof i === "string" ? i : i._id));
// };



const getToken = () => {
  try {
    return localStorage.getItem("token");
  } catch (e) {
    console.warn("Could not access localStorage:", e);
    return null;
  }
};

export const fetchWishlist = async () => {
  const token = getToken();
  
  // No token = empty wishlist (user not logged in)
  if (!token) {
    return [];
  }

  try {
    const res = await fetch(`${BASE_URL}/api/wishlist`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Handle 401/403 - token invalid/expired
    if (res.status === 401 || res.status === 403) {
      console.warn("Token invalid or expired, clearing storage");
      try {
        localStorage.removeItem("token");
      } catch (e) {
        console.warn("Could not clear token from storage");
      }
      return [];
    }

    // Handle other HTTP errors
    if (!res.ok) {
      console.warn(`Wishlist fetch failed with status ${res.status}`);
      return [];
    }

    const data = await res.json();

    // Check if response is successful
    if (!data.success) {
      console.warn("Wishlist response not successful:", data.message);
      return [];
    }

    // Extract wishlist IDs
    if (!data.wishlist || !Array.isArray(data.wishlist)) {
      return [];
    }

    return data.wishlist.map((item) => (typeof item === "string" ? item : item._id));
  } catch (err) {
    // Network or parsing error - don't crash, just return empty
    console.error("Error fetching wishlist:", err);
    return [];
  }
};