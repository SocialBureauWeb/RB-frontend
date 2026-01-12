// // // import React, { useRef, useState, useEffect } from "react";
// // // import { BASE_URL } from "../utils/urls";
// // // import PropertyCard from "../components/PropertyCard";
// // // import Modal from "../components/Modal";

// // // export default function Trending() {
// // //   const scrollRef = useRef(null);

// // //   const [plots, setPlots] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [wishlist, setWishlist] = useState([]);
// // //   const [selectedPlot, setSelectedPlot] = useState(null);

// // //   /* -------------------- EFFECTS -------------------- */

// // //   useEffect(() => {
// // //     fetchTrending();
// // //     loadWishlist();
// // //   }, []);

// // //   /* -------------------- API CALLS -------------------- */

// // //   const fetchTrending = async () => {
// // //     setLoading(true);
// // //     setError(null);
// // //     try {
// // //       const params = new URLSearchParams({
// // //         approved: "true",
// // //         limit: "10",
// // //         sort: "-createdAt",
// // //       });

// // //       const res = await fetch(`${BASE_URL}/plot?${params}`);
// // //       const data = await res.json();

// // //       if (data.success) setPlots(data.data);
// // //       else setError(data.message || "Failed to fetch trending plots");
// // //     } catch (err) {
// // //       console.error(err);
// // //       setError("Network error. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const loadWishlist = async () => {
// // //     const token = localStorage.getItem("token");
// // //     if (!token) return;

// // //     try {
// // //       const res = await fetch(`${BASE_URL}/api/wishlist`, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });
// // //       const data = await res.json();

// // //       if (data.success && Array.isArray(data.wishlist)) {
// // //         const ids = data.wishlist.map((i) =>
// // //           typeof i === "string" ? i : i._id
// // //         );
// // //         setWishlist(ids);
// // //       }
// // //     } catch (err) {
// // //       console.error("Wishlist load error:", err);
// // //     }
// // //   };

// // //   const handleWishlistChange = (plotId, isAdded) => {
// // //     if (isAdded) {
// // //       setWishlist((prev) => [...prev, plotId]);
// // //     } else {
// // //       setWishlist((prev) => prev.filter((id) => id !== plotId));
// // //     }
// // //   };

// // //   /* -------------------- HELPERS -------------------- */

// // //   const scrollBy = (offset) => {
// // //     scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
// // //   };

// // //   const formatPrice = (price) => {
// // //     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
// // //     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
// // //     return `₹${price?.toLocaleString("en-IN")}`;
// // //   };

// // //   /* -------------------- STATES -------------------- */

// // //   if (loading) {
// // //     return (
// // //       <section className="px-6 py-10">
// // //         <div className="flex justify-center h-64">
// // //           <div className="animate-spin h-12 w-12 border-b-2 border-[#2b54a2]" />
// // //         </div>
// // //       </section>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <section className="px-6 py-10 text-center text-red-500">
// // //         {error}
// // //       </section>
// // //     );
// // //   }

// // //   /* -------------------- UI -------------------- */

// // //   return (
// // //     <section className="mx-auto px-6 py-10 max-w-[90vw]">
// // //       {/* HEADER */}
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h2 className="font-serif text-2xl lg:text-3xl">Trending</h2>

// // //         <div className="hidden lg:flex gap-2">
// // //           <button onClick={() => scrollBy(-560)} className="nav-btn">‹</button>
// // //           <button onClick={() => scrollBy(560)} className="nav-btn">›</button>
// // //         </div>
// // //       </div>

// // //       {/* SCROLL STRIP */}
// // // <div
// // //   ref={scrollRef}
// // //   className="
// // //     flex gap-6 overflow-x-auto snap-x pb-4 scrollbar-hide
// // //     lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible
// // //   "
// // // >
// // //         {plots.map((plot) => (
// // // <div
// // //   key={plot._id}
// // //   onClick={() => setSelectedPlot(plot)}
// // //   className="
// // //     flex-shrink-0 w-72 snap-start cursor-pointer
// // //     lg:w-auto
// // //   "
// // // >

// // //             <PropertyCard 
// // //               property={plot}
// // //               onWishlistChange={handleWishlistChange}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* MODAL */}
// // //       {selectedPlot && (
// // //         <Modal 
// // //           property={selectedPlot}
// // //           onClose={() => setSelectedPlot(null)}
// // //           formatPrice={formatPrice}
// // //         />
// // //       )}
// // //     </section>
// // //   );
// // // }



// // // // // import React, { useRef, useState, useEffect } from "react";
// // // // // import PropertyCard from "../components/PropertyCard";
// // // // // import Modal from "../components/Modal";
// // // // // import { getTrendingPlots } from "../../services/plotService";
// // // // // import { fetchWishlist } from "../../services/wishlistService";

// // // // // export default function Trending() {
// // // // //   const scrollRef = useRef(null);

// // // // //   const [plots, setPlots] = useState([]);
// // // // //   const [wishlist, setWishlist] = useState([]);
// // // // //   const [selectedPlot, setSelectedPlot] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   /* -------------------- EFFECTS -------------------- */

// // // // //   useEffect(() => {
// // // // //     init();
// // // // //   }, []);

// // // // //   const init = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const [plotsData, wishlistData] = await Promise.all([
// // // // //         getTrendingPlots(),
// // // // //         fetchWishlist(),
// // // // //       ]);

// // // // //       setPlots(plotsData);
// // // // //       setWishlist(wishlistData);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       setError(err.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   /* -------------------- HANDLERS -------------------- */

// // // // //   const handleWishlistChange = (plotId, isAdded) => {
// // // // //     setWishlist((prev) =>
// // // // //       isAdded ? [...prev, plotId] : prev.filter((id) => id !== plotId)
// // // // //     );
// // // // //   };

// // // // //   const scrollBy = (offset) => {
// // // // //     scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
// // // // //   };

// // // // //   /* -------------------- UI -------------------- */

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <section className="min-h-[60vh] flex items-center justify-center">
// // // // //         <div className="animate-spin h-10 w-10 border-b-2 border-gray-800" />
// // // // //       </section>
// // // // //     );
// // // // //   }

// // // // //   if (error) {
// // // // //     return (
// // // // //       <section className="min-h-[60vh] flex items-center justify-center text-red-500">
// // // // //         {error}
// // // // //       </section>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <section className="max-w-7xl mx-auto px-4 py-10">
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h2 className="text-2xl font-semibold">Trending Properties</h2>

// // // // //         <div className="hidden lg:flex gap-2">
// // // // //           <button onClick={() => scrollBy(-520)} className="nav-btn">‹</button>
// // // // //           <button onClick={() => scrollBy(520)} className="nav-btn">›</button>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div
// // // // //         ref={scrollRef}
// // // // //         className="
// // // // //           flex gap-6 overflow-x-auto snap-x pb-4 scrollbar-hide
// // // // //           lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible
// // // // //         "
// // // // //       >
// // // // //         {plots.map((plot) => (
// // // // //           <div
// // // // //             key={plot._id}
// // // // //             onClick={() => setSelectedPlot(plot)}
// // // // //             className="flex-shrink-0 w-72 snap-start cursor-pointer lg:w-auto"
// // // // //           >
// // // // //             <PropertyCard
// // // // //               property={plot}
// // // // //               onWishlistChange={handleWishlistChange}
// // // // //             />
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {selectedPlot && (
// // // // //         <Modal
// // // // //           property={selectedPlot}
// // // // //           onClose={() => setSelectedPlot(null)}
// // // // //         />
// // // // //       )}
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // import React, { useRef, useState, useEffect } from "react";
// // // // import PropertyCard from "../components/PropertyCard";
// // // // import Modal from "../components/Modal";
// // // // import { getTrendingPlots } from "../../services/plotService";
// // // // import { fetchWishlist } from "../../services/wishlistService";

// // // // export default function Trending() {
// // // //   const scrollRef = useRef(null);

// // // //   const [plots, setPlots] = useState([]);
// // // //   const [wishlist, setWishlist] = useState([]);
// // // //   const [selectedPlot, setSelectedPlot] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   /* -------------------- EFFECTS -------------------- */

// // // //   useEffect(() => {
// // // //     init();
// // // //   }, []);

// // // //   const init = async () => {
// // // //     try {
// // // //       setLoading(true);
      
// // // //       // Fetch plots (required)
// // // //       const plotsData = await getTrendingPlots();
// // // //       setPlots(plotsData);

// // // //       // Fetch wishlist (optional - don't let it block everything)
// // // //       try {
// // // //         const wishlistData = await fetchWishlist();
// // // //         setWishlist(wishlistData);
// // // //       } catch (wishlistErr) {
// // // //         console.warn("Could not load wishlist:", wishlistErr.message);
// // // //         setWishlist([]); // Default to empty wishlist
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       setError(err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   /* -------------------- HANDLERS -------------------- */

// // // //   const handleWishlistChange = (plotId, isAdded) => {
// // // //     setWishlist((prev) =>
// // // //       isAdded ? [...prev, plotId] : prev.filter((id) => id !== plotId)
// // // //     );
// // // //   };

// // // //   const scrollBy = (offset) => {
// // // //     scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
// // // //   };

// // // //   /* -------------------- UI -------------------- */

// // // //   if (loading) {
// // // //     return (
// // // //       <section className="min-h-[60vh] flex items-center justify-center">
// // // //         <div className="animate-spin h-10 w-10 border-b-2 border-gray-800" />
// // // //       </section>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <section className="min-h-[60vh] flex items-center justify-center text-red-500">
// // // //         {error}
// // // //       </section>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <section className="max-w-7xl mx-auto px-4 py-10">
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h2 className="text-2xl font-semibold">Trending Properties</h2>

// // // //         <div className="hidden lg:flex gap-2">
// // // //           <button onClick={() => scrollBy(-520)} className="nav-btn">‹</button>
// // // //           <button onClick={() => scrollBy(520)} className="nav-btn">›</button>
// // // //         </div>
// // // //       </div>

// // // //       <div
// // // //         ref={scrollRef}
// // // //         className="
// // // //           flex gap-6 overflow-x-auto snap-x pb-4 scrollbar-hide
// // // //           lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible
// // // //         "
// // // //       >
// // // //         {plots.map((plot) => (
// // // //           <div
// // // //             key={plot._id}
// // // //             onClick={() => setSelectedPlot(plot)}
// // // //             className="flex-shrink-0 w-72 snap-start cursor-pointer lg:w-auto"
// // // //           >
// // // //             <PropertyCard
// // // //               property={plot}
// // // //               onWishlistChange={handleWishlistChange}
// // // //             />
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {selectedPlot && (
// // // //         <Modal
// // // //           property={selectedPlot}
// // // //           onClose={() => setSelectedPlot(null)}
// // // //         />
// // // //       )}
// // // //     </section>
// // // //   );
// // // // }

// // // // import React, { useRef, useState, useEffect } from "react";
// // // // import PropertyCard from "../components/PropertyCard";
// // // // import Modal from "../components/Modal";
// // // // import { getTrendingPlots } from "../../services/plotService";
// // // // import { fetchWishlist } from "../../services/wishlistService";

// // // // export default function Trending() {
// // // //   const scrollRef = useRef(null);

// // // //   const [plots, setPlots] = useState([]);
// // // //   const [wishlist, setWishlist] = useState([]);
// // // //   const [selectedPlot, setSelectedPlot] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   /* -------------------- EFFECTS -------------------- */

// // // //   useEffect(() => {
// // // //     init();
// // // //   }, []);

// // // //   const init = async () => {
// // // //     try {
// // // //       setLoading(true);
      
// // // //       // Fetch plots (required)
// // // //       const plotsData = await getTrendingPlots();
// // // //       setPlots(plotsData);

// // // //       // Fetch wishlist (optional - don't let it block everything)
// // // //       try {
// // // //         const wishlistData = await fetchWishlist();
// // // //         setWishlist(wishlistData);
// // // //       } catch (wishlistErr) {
// // // //         console.warn("Could not load wishlist:", wishlistErr.message);
// // // //         setWishlist([]); // Default to empty wishlist
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       setError(err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   /* -------------------- HANDLERS -------------------- */

// // // //   const handleWishlistChange = (plotId, isAdded) => {
// // // //     setWishlist((prev) =>
// // // //       isAdded ? [...prev, plotId] : prev.filter((id) => id !== plotId)
// // // //     );
// // // //   };

// // // //   const scrollBy = (offset) => {
// // // //     scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
// // // //   };

// // // //   /* -------------------- UI -------------------- */

// // // //   if (loading) {
// // // //     return (
// // // //       <section className="min-h-[60vh] flex items-center justify-center">
// // // //         <div className="animate-spin h-10 w-10 border-b-2 border-gray-800" />
// // // //       </section>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <section className="min-h-[60vh] flex items-center justify-center text-red-500">
// // // //         {error}
// // // //       </section>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <section className="max-w-7xl mx-auto px-4 py-10">
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h2 className="text-2xl font-semibold">Trending Properties</h2>

// // // //         <div className="hidden lg:flex gap-2">
// // // //           <button onClick={() => scrollBy(-520)} className="nav-btn">‹</button>
// // // //           <button onClick={() => scrollBy(520)} className="nav-btn">›</button>
// // // //         </div>
// // // //       </div>

// // // //       <div
// // // //         ref={scrollRef}
// // // //         className="
// // // //           flex gap-6 overflow-x-auto snap-x pb-4 scrollbar-hide
// // // //           lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible
// // // //         "
// // // //       >
// // // //         {plots.map((plot) => (
// // // //           <div
// // // //             key={plot._id}
// // // //             onClick={() => setSelectedPlot(plot)}
// // // //             className="flex-shrink-0 w-72 snap-start cursor-pointer lg:w-auto"
// // // //           >
// // // //             <PropertyCard
// // // //               property={plot}
// // // //               isSaved={wishlist.includes(plot._id)}
// // // //               onWishlistChange={handleWishlistChange}
// // // //             />
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {selectedPlot && (
// // // //         <Modal
// // // //           property={selectedPlot}
// // // //           onClose={() => setSelectedPlot(null)}
// // // //         />
// // // //       )}
// // // //     </section>
// // // //   );
// // // // }


// // import React, { useRef, useState, useEffect } from "react";
// // import { BASE_URL } from "../utils/urls";
// // import PropertyCard from "../components/PropertyCard";
// // import Modal from "../components/Modal";

// // export default function Trending() {
// //   const scrollRef = useRef(null);

// //   const [plots, setPlots] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [wishlist, setWishlist] = useState([]);
// //   const [selectedPlot, setSelectedPlot] = useState(null);

// //   /* -------------------- EFFECTS -------------------- */

// //   useEffect(() => {
// //     fetchTrending();
// //     loadWishlist();
// //   }, []);

// //   /* -------------------- API CALLS -------------------- */

// //   const fetchTrending = async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const params = new URLSearchParams({
// //         approved: "true",
// //         limit: "10",
// //         sort: "-createdAt",
// //       });

// //       const res = await fetch(`${BASE_URL}/plot?${params}`);
// //       const data = await res.json();

// //       if (data.success) setPlots(data.data);
// //       else setError(data.message || "Failed to fetch trending plots");
// //     } catch (err) {
// //       console.error(err);
// //       setError("Network error. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const loadWishlist = async () => {
// //     const token = localStorage.getItem("token");
// //     if (!token) return;

// //     try {
// //       const res = await fetch(`${BASE_URL}/api/wishlist`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       const data = await res.json();

// //       if (data.success && Array.isArray(data.wishlist)) {
// //         const ids = data.wishlist.map((i) =>
// //           typeof i === "string" ? i : i._id
// //         );
// //         setWishlist(ids);
// //       }
// //     } catch (err) {
// //       console.error("Wishlist load error:", err);
// //     }
// //   };

// //   const handleWishlistChange = (plotId, isAdded) => {
// //     if (isAdded) {
// //       setWishlist((prev) => [...prev, plotId]);
// //     } else {
// //       setWishlist((prev) => prev.filter((id) => id !== plotId));
// //     }
// //   };

// //   /* -------------------- HELPERS -------------------- */

// //   const scrollBy = (offset) => {
// //     scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
// //   };

// //   const formatPrice = (price) => {
// //     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
// //     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
// //     return `₹${price?.toLocaleString("en-IN")}`;
// //   };

// //   /* -------------------- STATES -------------------- */

// //   if (loading) {
// //     return (
// //       <section className="px-6 py-10">
// //         <div className="flex justify-center h-64">
// //           <div className="animate-spin h-12 w-12 border-b-2 border-[#2b54a2]" />
// //         </div>
// //       </section>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <section className="px-6 py-10 text-center text-red-500">
// //         {error}
// //       </section>
// //     );
// //   }

// //   /* -------------------- UI -------------------- */

// //   return (
// //     <section className="mx-auto px-4 sm:px-6 py-10 max-w-full">
// //       {/* HEADER */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl">Trending</h2>

// //         <div className="hidden lg:flex gap-2">
// //           <button onClick={() => scrollBy(-560)} className="nav-btn">‹</button>
// //           <button onClick={() => scrollBy(560)} className="nav-btn">›</button>
// //         </div>
// //       </div>

// //       {/* SCROLL STRIP - RESPONSIVE GRID */}
// //       <div
// //         ref={scrollRef}
// //         className="
// //           grid
// //           grid-cols-2
// //           sm:grid-cols-3
// //           lg:grid-cols-4
// //           xl:grid-cols-5
// //           gap-3
// //           sm:gap-4
// //           lg:gap-6
// //         "
// //       >
// //         {plots.map((plot) => (
// //           <div
// //             key={plot._id}
// //             onClick={() => setSelectedPlot(plot)}
// //             className="cursor-pointer"
// //           >
// //             <PropertyCard 
// //               property={plot}
// //               onWishlistChange={handleWishlistChange}
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       {/* MODAL */}
// //       {selectedPlot && (
// //         <Modal 
// //           property={selectedPlot}
// //           onClose={() => setSelectedPlot(null)}
// //           formatPrice={formatPrice}
// //         />
// //       )}
// //     </section>
// //   );
// // }



// import React, { useRef, useState, useEffect } from "react";
// import { BASE_URL } from "../utils/urls";
// import PropertyCard from "../components/PropertyCard";
// import Modal from "../components/Modal";

// export default function Trending() {
//   const scrollRef = useRef(null);

//   const [plots, setPlots] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const [selectedPlot, setSelectedPlot] = useState(null);

//   /* -------------------- EFFECTS -------------------- */

//   useEffect(() => {
//     fetchTrending();
//     loadWishlist();
//   }, []);

//   /* -------------------- API CALLS -------------------- */

//   const fetchTrending = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const params = new URLSearchParams({
//         approved: "true",
//         limit: "10",
//         sort: "-createdAt",
//       });

//       const res = await fetch(`${BASE_URL}/plot?${params}`);

//       // Check if response is ok
//       if (!res.ok) {
//         throw new Error(`HTTP ${res.status}: Failed to fetch plots`);
//       }

//       const data = await res.json();

//       if (data.success && Array.isArray(data.data)) {
//         setPlots(data.data);
//       } else {
//         setError(data.message || "Failed to fetch trending plots");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setError("Failed to load plots. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadWishlist = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const res = await fetch(`${BASE_URL}/api/wishlist`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) return;

//       const data = await res.json();

//       if (data.success && Array.isArray(data.wishlist)) {
//         const ids = data.wishlist.map((i) =>
//           typeof i === "string" ? i : i._id
//         );
//         setWishlist(ids);
//       }
//     } catch (err) {
//       console.error("Wishlist load error:", err);
//     }
//   };

//   const handleWishlistChange = (plotId, isAdded) => {
//     if (isAdded) {
//       setWishlist((prev) => [...prev, plotId]);
//     } else {
//       setWishlist((prev) => prev.filter((id) => id !== plotId));
//     }
//   };

//   /* -------------------- HELPERS -------------------- */

//   const scrollBy = (offset) => {
//     scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
//   };

//   const formatPrice = (price) => {
//     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
//     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
//     return `₹${price?.toLocaleString("en-IN")}`;
//   };

//   /* -------------------- UI -------------------- */

//   if (loading) {
//     return (
//       <section className="px-6 py-10">
//         <div className="flex justify-center h-64">
//           <div className="animate-spin h-12 w-12 border-b-2 border-[#2b54a2]" />
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="px-6 py-10 text-center">
//         <p className="text-red-500 text-lg">{error}</p>
//         <button
//           onClick={fetchTrending}
//           className="mt-4 px-4 py-2 bg-[#2b54a2] text-white rounded hover:bg-blue-700"
//         >
//           Try Again
//         </button>
//       </section>
//     );
//   }

//   if (!plots.length) {
//     return (
//       <section className="px-6 py-10 text-center text-gray-500">
//         <p>No plots available at the moment.</p>
//       </section>
//     );
//   }

//   /* -------------------- RENDER -------------------- */

//   return (
//     <section className="mx-auto px-4 sm:px-6 py-10 max-w-full">
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl">
//           Trending
//         </h2>

//         <div className="hidden lg:flex gap-2">
//           <button
//             onClick={() => scrollBy(-560)}
//             className="p-2 hover:bg-gray-200 rounded transition"
//             aria-label="Scroll left"
//           >
//             ‹
//           </button>
//           <button
//             onClick={() => scrollBy(560)}
//             className="p-2 hover:bg-gray-200 rounded transition"
//             aria-label="Scroll right"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       {/* GRID - RESPONSIVE */}
//       <div
//         className="
//           grid
//           grid-cols-2
//           sm:grid-cols-3
//           lg:grid-cols-4
//           xl:grid-cols-5
//           gap-3
//           sm:gap-4
//           lg:gap-6
//         "
//       >
//         {plots.map((plot) => (
//           <div
//             key={plot._id}
//             onClick={() => setSelectedPlot(plot)}
//             className="cursor-pointer"
//           >
//             <PropertyCard
//               property={plot}
//               onWishlistChange={handleWishlistChange}
//               isSaved={wishlist.includes(plot._id)}
//             />
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {selectedPlot && (
//         <Modal
//           property={selectedPlot}
//           onClose={() => setSelectedPlot(null)}
//           formatPrice={formatPrice}
//         />
//       )}
//     </section>
//   );
// }


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
    <section className="mx-auto px-4 sm:px-6 py-10 max-w-full">
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