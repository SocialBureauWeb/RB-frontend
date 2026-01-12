// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // import { BASE_URL } from "../utils/urls";

// // // // // export default function PropertyDetail() {
// // // // //   const { id } = useParams();
// // // // //   const navigate = useNavigate();
// // // // //   const [plot, setPlot] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [saved, setSaved] = useState(false);
// // // // //   const [wishlistLoading, setWishlistLoading] = useState(false);

// // // // //   useEffect(() => {
// // // // //     if (!id) return;
// // // // //     setLoading(true);
// // // // //     setError(null);

// // // // //     fetch(`${BASE_URL}/plot/${id}`)
// // // // //       .then((r) => r.json())
// // // // //       .then((data) => {
// // // // //         if (data.success) setPlot(data.data || data.plot || null);
// // // // //         else setError(data.message || "Plot not found");
// // // // //       })
// // // // //       .catch(() => setError("Error fetching property"))
// // // // //       .finally(() => setLoading(false));
// // // // //   }, [id]);

// // // // //   useEffect(() => {
// // // // //     const token = localStorage.getItem("token");
// // // // //     if (!token || !id) return;

// // // // //     fetch(`${BASE_URL}/api/wishlist`, {
// // // // //       headers: { Authorization: `Bearer ${token}` },
// // // // //     })
// // // // //       .then((r) => r.json())
// // // // //       .then((data) => {
// // // // //         if (data.success && data.wishlist) setSaved(data.wishlist.includes(id));
// // // // //       })
// // // // //       .catch(() => {});
// // // // //   }, [id]);

// // // // //   const toggleSaved = async () => {
// // // // //     const token = localStorage.getItem("token");
// // // // //     if (!token) {
// // // // //       alert("Please login to use wishlist");
// // // // //       return;
// // // // //     }

// // // // //     setWishlistLoading(true);
// // // // //     const endpoint = saved ? "remove" : "add";

// // // // //     try {
// // // // //       const res = await fetch(`${BASE_URL}/api/wishlist/${endpoint}`, {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           Authorization: `Bearer ${token}`,
// // // // //         },
// // // // //         body: JSON.stringify({ plotId: id }),
// // // // //       });

// // // // //       const data = await res.json();
// // // // //       if (data.success) setSaved(!saved);
// // // // //       else alert(data.message || "Failed to update wishlist");
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       alert("Error updating wishlist");
// // // // //     } finally {
// // // // //       setWishlistLoading(false);
// // // // //     }
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="min-h-[60vh] flex items-center justify-center">
// // // // //         <p className="text-sm text-gray-500">Loading property…</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (error || !plot) {
// // // // //     return (
// // // // //       <div className="min-h-[60vh] flex flex-col items-center justify-center">
// // // // //         <p className="text-sm text-red-500 mb-4">{error || "Property not found"}</p>
// // // // //         <button
// // // // //           onClick={() => navigate(-1)}
// // // // //           className="px-3 py-2 bg-gray-200 rounded"
// // // // //         >
// // // // //           Go back
// // // // //         </button>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   const imageUrl = plot.images?.[0]?.url || plot.image || "/placeholder.jpg";
// // // // //   const price = plot.price?.toLocaleString("en-IN") || "N/A";
// // // // //   const location = plot.location?.city || plot.location?.address || "Location not specified";

// // // // //   return (
// // // // //     <section className="max-w-4xl mx-auto px-4 py-8">
// // // // //       <button onClick={() => navigate(-1)} className="text-sm text-blue-600 mb-4">← Back</button>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //         <div className="bg-gray-100 rounded overflow-hidden">
// // // // //           <img src={imageUrl} alt={plot.title || "Property"} className="w-full h-96 object-cover" />
// // // // //         </div>

// // // // //         <div>
// // // // //           <h1 className="text-2xl font-semibold text-gray-900">{plot.title || "Untitled"}</h1>
// // // // //           <div className="mt-2 text-xl font-bold">₹ {price}</div>
// // // // //           <div className="mt-1 text-sm text-gray-500">{location}</div>

// // // // //           <div className="mt-4">
// // // // //             <button
// // // // //               onClick={toggleSaved}
// // // // //               disabled={wishlistLoading}
// // // // //               className={`inline-flex items-center px-3 py-2 rounded ${saved ? 'bg-red-600 text-white' : 'bg-white border text-gray-700'}`}
// // // // //             >
// // // // //               {saved ? 'Saved' : 'Save to wishlist'}
// // // // //             </button>
// // // // //           </div>

// // // // //           <div className="mt-6 text-sm text-gray-700 whitespace-pre-line">
// // // // //             {plot.description || "No description provided."}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import { BASE_URL } from "../utils/urls";

// // // // export default function PropertyDetail() {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [plot, setPlot] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [saved, setSaved] = useState(false);
// // // //   const [wishlistLoading, setWishlistLoading] = useState(false);
// // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// // // //   useEffect(() => {
// // // //     if (!id) return;
// // // //     setLoading(true);
// // // //     setError(null);
// // // //     fetch(`${BASE_URL}/plot/${id}`)
// // // //       .then((r) => r.json())
// // // //       .then((data) => {
// // // //         if (data.success) setPlot(data.data || data.plot || null);
// // // //         else setError(data.message || "Plot not found");
// // // //       })
// // // //       .catch(() => setError("Error fetching property"))
// // // //       .finally(() => setLoading(false));
// // // //   }, [id]);

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (!token || !id) return;
// // // //     fetch(`${BASE_URL}/api/wishlist`, {
// // // //       headers: { Authorization: `Bearer ${token}` },
// // // //     })
// // // //       .then((r) => r.json())
// // // //       .then((data) => {
// // // //         if (data.success && data.wishlist)
// // // //           setSaved(data.wishlist.includes(id));
// // // //       })
// // // //       .catch(() => {});
// // // //   }, [id]);

// // // //   const toggleSaved = async () => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (!token) {
// // // //       alert("Please login to use wishlist");
// // // //       return;
// // // //     }
// // // //     setWishlistLoading(true);
// // // //     const endpoint = saved ? "remove" : "add";
// // // //     try {
// // // //       const res = await fetch(`${BASE_URL}/api/wishlist/${endpoint}`, {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //         body: JSON.stringify({ plotId: id }),
// // // //       });
// // // //       const data = await res.json();
// // // //       if (data.success) setSaved(!saved);
// // // //       else alert(data.message || "Failed to update wishlist");
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       alert("Error updating wishlist");
// // // //     } finally {
// // // //       setWishlistLoading(false);
// // // //     }
// // // //   };

// // // //   const convertToSqft = (size) => {
// // // //     return Math.round(size * 435.6);
// // // //   };

// // // //   const displayPlotSize = () => {
// // // //     if (!plot.plotSize) return "N/A";
// // // //     if (typeof plot.plotSize === "object" && plot.plotSize.value) {
// // // //       const value = plot.plotSize.value;
// // // //       const unit = plot.plotSize.unit;
// // // //       if (unit === "cent") {
// // // //         return `${value} cent (${convertToSqft(value).toLocaleString()} sq.ft)`;
// // // //       }
// // // //       return `${value.toLocaleString()} sq.ft`;
// // // //     }
// // // //     return `${plot.plotSize.toLocaleString()} sq.ft`;
// // // //   };

// // // //   const formatPrice = (price) => {
// // // //     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
// // // //     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
// // // //     return `₹${price.toLocaleString("en-IN")}`;
// // // //   };

// // // //   const handlePrevImage = () => {
// // // //     setCurrentImageIndex((prev) =>
// // // //       prev === 0 ? (plot.images?.length || 1) - 1 : prev - 1
// // // //     );
// // // //   };

// // // //   const handleNextImage = () => {
// // // //     setCurrentImageIndex((prev) =>
// // // //       prev === (plot.images?.length || 1) - 1 ? 0 : prev + 1
// // // //     );
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center min-h-screen bg-gray-50">
// // // //         <div className="text-center">
// // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2b54a2] mx-auto mb-4"></div>
// // // //           <p className="text-gray-600">Loading property…</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error || !plot) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // // //         <div className="bg-white p-8 rounded-lg shadow-md text-center">
// // // //           <p className="text-red-600 mb-4 text-lg">
// // // //             {error || "Property not found"}
// // // //           </p>
// // // //           <button
// // // //             onClick={() => navigate(-1)}
// // // //             className="px-4 py-2 bg-[#2b54a2] text-white rounded hover:bg-blue-700"
// // // //           >
// // // //             Go Back
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const imageUrl =
// // // //     plot.images?.[currentImageIndex]?.url || plot.image || "/placeholder.jpg";
// // // //   const hasMultipleImages = plot.images && plot.images.length > 1;

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50">
// // // //       {/* Header */}
// // // //       <div className="bg-white border-b">
// // // //         <div className="max-w-6xl mx-auto px-4 py-4">
// // // //           <button
// // // //             onClick={() => navigate(-1)}
// // // //             className="text-sm text-[#2b54a2] hover:text-blue-700 mb-4"
// // // //           >
// // // //             ← Back to Properties
// // // //           </button>
// // // //           <h1 className="text-3xl font-bold text-gray-900 mb-2">
// // // //             {plot.title || "Untitled Property"}
// // // //           </h1>
// // // //           <p className="text-gray-600">
// // // //             📍 {plot.location?.city || "Location not specified"}
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       <div className="max-w-6xl mx-auto px-4 py-8">
// // // //         {/* Main Content */}
// // // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //           {/* Image Section */}
// // // //           <div className="lg:col-span-2">
// // // //             <div className="relative bg-gray-200 rounded-lg overflow-hidden">
// // // //               <div className="aspect-video">
// // // //                 <img
// // // //                   src={imageUrl}
// // // //                   alt={plot.title}
// // // //                   className="w-full h-full object-cover"
// // // //                 />
// // // //               </div>

// // // //               {/* Image Navigation */}
// // // //               {hasMultipleImages && (
// // // //                 <>
// // // //                   <button
// // // //                     onClick={handlePrevImage}
// // // //                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
// // // //                   >
// // // //                     ‹
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={handleNextImage}
// // // //                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
// // // //                   >
// // // //                     ›
// // // //                   </button>
// // // //                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
// // // //                     {currentImageIndex + 1} / {plot.images.length}
// // // //                   </div>
// // // //                 </>
// // // //               )}

// // // //               {/* Status Badge */}
// // // //               <div className="absolute top-4 right-4">
// // // //                 <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
// // // //                   {plot.status || "Available"}
// // // //                 </span>
// // // //               </div>
// // // //             </div>

// // // //             {/* Thumbnail Gallery */}
// // // //             {plot.images && plot.images.length > 1 && (
// // // //               <div className="flex gap-2 mt-4 overflow-x-auto">
// // // //                 {plot.images.map((img, idx) => (
// // // //                   <button
// // // //                     key={idx}
// // // //                     onClick={() => setCurrentImageIndex(idx)}
// // // //                     className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
// // // //                       idx === currentImageIndex
// // // //                         ? "border-[#2b54a2]"
// // // //                         : "border-gray-300 opacity-60 hover:opacity-100"
// // // //                     }`}
// // // //                   >
// // // //                     <img
// // // //                       src={img.url}
// // // //                       alt={`Thumbnail ${idx}`}
// // // //                       className="w-full h-full object-cover"
// // // //                     />
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             )}

// // // //             {/* Videos Section */}
// // // //             {plot.videos && plot.videos.length > 0 && (
// // // //               <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
// // // //                 <h3 className="text-xl font-bold mb-4">Videos</h3>
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                   {plot.videos.map((video, idx) => (
// // // //                     <div key={idx} className="aspect-video">
// // // //                       <iframe
// // // //                         src={video}
// // // //                         title={`Video ${idx + 1}`}
// // // //                         className="w-full h-full rounded-lg"
// // // //                         allowFullScreen
// // // //                       ></iframe>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             )}

// // // //             {/* Description Section */}
// // // //             <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
// // // //               <h3 className="text-xl font-bold mb-4">Description</h3>
// // // //               <p className="text-gray-700 leading-relaxed">
// // // //                 {plot.description || "No description provided."}
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Sidebar */}
// // // //           <div className="lg:col-span-1">
// // // //             {/* Price & Save Card */}
// // // //             <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-4">
// // // //               <div className="text-4xl font-bold text-[#2b54a2] mb-4">
// // // //                 {formatPrice(plot.price)}
// // // //               </div>
// // // //               <button
// // // //                 onClick={toggleSaved}
// // // //                 disabled={wishlistLoading}
// // // //                 className={`w-full py-3 rounded-lg font-semibold mb-4 transition-all ${
// // // //                   saved
// // // //                     ? "bg-red-50 text-red-600 border-2 border-red-600 hover:bg-red-100"
// // // //                     : "bg-[#2b54a2] text-white hover:bg-blue-700"
// // // //                 } ${wishlistLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// // // //               >
// // // //                 {saved ? "♥ Saved to Wishlist" : "♡ Save to Wishlist"}
// // // //               </button>
// // // //               <button className="w-full py-3 rounded-lg font-semibold border-2 border-[#2b54a2] text-[#2b54a2] hover:bg-blue-50 transition-all">
// // // //                 📞 Contact Agent
// // // //               </button>
// // // //             </div>

// // // //             {/* Property Details Card */}
// // // //             <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // // //               <h3 className="text-lg font-bold mb-4">Property Details</h3>
// // // //               <div className="space-y-4">
// // // //                 <div className="border-b pb-3">
// // // //                   <p className="text-gray-600 text-sm mb-1">Plot Size</p>
// // // //                   <p className="text-lg font-semibold text-gray-800">
// // // //                     {displayPlotSize()}
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="border-b pb-3">
// // // //                   <p className="text-gray-600 text-sm mb-1">Category</p>
// // // //                   <p className="text-lg font-semibold text-gray-800">
// // // //                     {plot.category || "N/A"}
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="border-b pb-3">
// // // //                   <p className="text-gray-600 text-sm mb-1">Status</p>
// // // //                   <p className="text-lg font-semibold text-gray-800">
// // // //                     {plot.status || "Available"}
// // // //                   </p>
// // // //                 </div>
// // // //                 <div>
// // // //                   <p className="text-gray-600 text-sm mb-1">Posted Date</p>
// // // //                   <p className="text-lg font-semibold text-gray-800">
// // // //                     {plot.createdAt
// // // //                       ? new Date(plot.createdAt).toLocaleDateString()
// // // //                       : "N/A"}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Location Card */}
// // // //             <div className="bg-white rounded-lg shadow-md p-6">
// // // //               <h3 className="text-lg font-bold mb-4">📍 Location</h3>
// // // //               <div className="space-y-2 text-gray-700">
// // // //                 {plot.location?.address && (
// // // //                   <p>
// // // //                     <strong>Address:</strong> {plot.location.address}
// // // //                   </p>
// // // //                 )}
// // // //                 {plot.location?.city && (
// // // //                   <p>
// // // //                     <strong>City:</strong> {plot.location.city}
// // // //                   </p>
// // // //                 )}
// // // //                 {plot.location?.district && (
// // // //                   <p>
// // // //                     <strong>District:</strong> {plot.location.district}
// // // //                   </p>
// // // //                 )}
// // // //                 {plot.location?.state && (
// // // //                   <p>
// // // //                     <strong>State:</strong> {plot.location.state}
// // // //                   </p>
// // // //                 )}
// // // //                 {plot.location?.pincode && (
// // // //                   <p>
// // // //                     <strong>Pincode:</strong> {plot.location.pincode}
// // // //                   </p>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { BASE_URL } from "../utils/urls";

// // // export default function PropertyDetail() {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [plot, setPlot] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [saved, setSaved] = useState(false);
// // //   const [wishlistLoading, setWishlistLoading] = useState(false);
// // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// // //   useEffect(() => {
// // //     if (!id) return;
// // //     setLoading(true);
// // //     setError(null);
// // //     fetch(`${BASE_URL}/plot/${id}`)
// // //       .then((r) => r.json())
// // //       .then((data) => {
// // //         if (data.success) setPlot(data.data || data.plot || null);
// // //         else setError(data.message || "Plot not found");
// // //       })
// // //       .catch(() => setError("Error fetching property"))
// // //       .finally(() => setLoading(false));
// // //   }, [id]);

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token");
// // //     if (!token || !id) return;
// // //     fetch(`${BASE_URL}/api/wishlist`, {
// // //       headers: { Authorization: `Bearer ${token}` },
// // //     })
// // //       .then((r) => r.json())
// // //       .then((data) => {
// // //         if (data.success && data.wishlist)
// // //           setSaved(data.wishlist.includes(id));
// // //       })
// // //       .catch(() => {});
// // //   }, [id]);

// // //   const toggleSaved = async () => {
// // //     const token = localStorage.getItem("token");
// // //     if (!token) {
// // //       alert("Please login to use wishlist");
// // //       return;
// // //     }
// // //     setWishlistLoading(true);
// // //     const endpoint = saved ? "remove" : "add";
// // //     try {
// // //       const res = await fetch(`${BASE_URL}/api/wishlist/${endpoint}`, {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify({ plotId: id }),
// // //       });
// // //       const data = await res.json();
// // //       if (data.success) setSaved(!saved);
// // //       else console.warn("Failed to update wishlist:", data.message);
// // //     } catch (err) {
// // //       console.error("Wishlist error:", err);
// // //     } finally {
// // //       setWishlistLoading(false);
// // //     }
// // //   };

// // //   const convertToSqft = (size) => {
// // //     return Math.round(size * 435.6);
// // //   };

// // //   const displayPlotSize = () => {
// // //     if (!plot.plotSize) return "N/A";
// // //     if (typeof plot.plotSize === "object" && plot.plotSize.value) {
// // //       const value = plot.plotSize.value;
// // //       const unit = plot.plotSize.unit;
// // //       if (unit === "cent") {
// // //         return `${value} cent (${convertToSqft(value).toLocaleString()} sq.ft)`;
// // //       }
// // //       return `${value.toLocaleString()} sq.ft`;
// // //     }
// // //     return `${plot.plotSize.toLocaleString()} sq.ft`;
// // //   };

// // //   const formatPrice = (price) => {
// // //     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
// // //     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
// // //     return `₹${price.toLocaleString("en-IN")}`;
// // //   };

// // //   const handlePrevImage = () => {
// // //     setCurrentImageIndex((prev) =>
// // //       prev === 0 ? (plot.images?.length || 1) - 1 : prev - 1
// // //     );
// // //   };

// // //   const handleNextImage = () => {
// // //     setCurrentImageIndex((prev) =>
// // //       prev === (plot.images?.length || 1) - 1 ? 0 : prev + 1
// // //     );
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // //         <p className="text-sm text-gray-500">Loading property…</p>
// // //       </div>
// // //     );
// // //   }

// // //   if (error || !plot) {
// // //     return (
// // //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// // //         <div className="text-center">
// // //           <p className="text-red-600 mb-4">{error || "Property not found"}</p>
// // //           <button
// // //             onClick={() => navigate(-1)}
// // //             className="text-sm text-blue-600 hover:text-blue-700"
// // //           >
// // //             ← Go back
// // //           </button>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const imageUrl =
// // //     plot.images?.[currentImageIndex]?.url || plot.image || "/placeholder.jpg";
// // //   const hasMultipleImages = plot.images && plot.images.length > 1;
// // //   const price = plot.price?.toLocaleString("en-IN") || "N/A";
// // //   const location =
// // //     plot.location?.city || plot.location?.address || "Location not specified";

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       {/* Back Button */}
// // //       <div className="max-w-6xl mx-auto px-4 pt-6">
// // //         <button
// // //           onClick={() => navigate(-1)}
// // //           className="text-sm text-blue-600 hover:text-blue-700 mb-6"
// // //         >
// // //           ← Back
// // //         </button>
// // //       </div>

// // //       <div className="max-w-6xl mx-auto px-4 pb-12">
// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //           {/* Main Image Section */}
// // //           <div className="lg:col-span-2">
// // //             <div className="relative overflow-hidden rounded-sm bg-gray-100">
// // //               <div className="aspect-video">
// // //                 <img
// // //                   src={imageUrl}
// // //                   alt={plot.title}
// // //                   className="w-full h-full object-cover"
// // //                 />
// // //               </div>

// // //               {/* Image Navigation */}
// // //               {hasMultipleImages && (
// // //                 <>
// // //                   <button
// // //                     onClick={handlePrevImage}
// // //                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
// // //                     aria-label="Previous image"
// // //                   >
// // //                     <svg
// // //                       className="w-6 h-6"
// // //                       fill="none"
// // //                       stroke="currentColor"
// // //                       viewBox="0 0 24 24"
// // //                     >
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M15 19l-7-7 7-7"
// // //                       />
// // //                     </svg>
// // //                   </button>
// // //                   <button
// // //                     onClick={handleNextImage}
// // //                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
// // //                     aria-label="Next image"
// // //                   >
// // //                     <svg
// // //                       className="w-6 h-6"
// // //                       fill="none"
// // //                       stroke="currentColor"
// // //                       viewBox="0 0 24 24"
// // //                     >
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth={2}
// // //                         d="M9 5l7 7-7 7"
// // //                       />
// // //                     </svg>
// // //                   </button>
// // //                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded text-xs">
// // //                     {currentImageIndex + 1} / {plot.images.length}
// // //                   </div>
// // //                 </>
// // //               )}

// // //               {/* Status Badge */}
// // //               {plot.status && (
// // //                 <div className="absolute right-3 top-3">
// // //                   <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
// // //                     {plot.status}
// // //                   </span>
// // //                 </div>
// // //               )}

// // //               {/* Heart Button */}
// // //               <button
// // //                 type="button"
// // //                 aria-label={saved ? "Unsave" : "Save"}
// // //                 aria-pressed={saved}
// // //                 onClick={(e) => {
// // //                   e.stopPropagation();
// // //                   toggleSaved();
// // //                 }}
// // //                 disabled={wishlistLoading}
// // //                 className={
// // //                   "absolute top-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full shadow transition-colors duration-200 " +
// // //                   (saved
// // //                     ? "bg-red-600 text-white hover:bg-red-700"
// // //                     : "bg-white/90 text-gray-700 hover:bg-white") +
// // //                   (wishlistLoading ? " opacity-50 cursor-not-allowed" : "")
// // //                 }
// // //               >
// // //                 {saved ? (
// // //                   <svg
// // //                     className="w-5 h-5"
// // //                     viewBox="0 0 24 24"
// // //                     fill="currentColor"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                   >
// // //                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
// // //                   </svg>
// // //                 ) : (
// // //                   <svg
// // //                     className="w-5 h-5"
// // //                     viewBox="0 0 24 24"
// // //                     fill="none"
// // //                     xmlns="http://www.w3.org/2000/svg"
// // //                   >
// // //                     <path
// // //                       d="M20.8 8.6c0 4.3-3.4 7.4-8 11.1L12 20l-.8-.3C6.6 16 3.2 12.9 3.2 8.6 3.2 6.2 5.2 4.2 7.6 4.2c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2 2.4 0 4.4 2 4.4 4.4z"
// // //                       stroke="currentColor"
// // //                       strokeWidth="1.2"
// // //                       strokeLinecap="round"
// // //                       strokeLinejoin="round"
// // //                     />
// // //                   </svg>
// // //                 )}
// // //               </button>

// // //               {/* Badge */}
// // //               {plot.badge && (
// // //                 <span className="absolute left-3 top-3 rounded px-2 py-1 bg-white text-[11px] font-semibold text-gray-800 shadow">
// // //                   {plot.badge}
// // //                 </span>
// // //               )}
// // //             </div>

// // //             {/* Thumbnail Gallery */}
// // //             {plot.images && plot.images.length > 1 && (
// // //               <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
// // //                 {plot.images.map((img, idx) => (
// // //                   <button
// // //                     key={idx}
// // //                     onClick={() => setCurrentImageIndex(idx)}
// // //                     className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all ${
// // //                       idx === currentImageIndex
// // //                         ? "border-blue-600"
// // //                         : "border-gray-300 opacity-60 hover:opacity-100"
// // //                     }`}
// // //                   >
// // //                     <img
// // //                       src={img.url}
// // //                       alt={`Thumbnail ${idx}`}
// // //                       className="w-full h-full object-cover"
// // //                     />
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             )}

// // //             {/* Videos */}
// // //             {plot.videos && plot.videos.length > 0 && (
// // //               <div className="mt-6 bg-white p-5 rounded-sm shadow-sm">
// // //                 <h3 className="font-semibold text-gray-900 mb-4">Videos</h3>
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                   {plot.videos.map((video, idx) => (
// // //                     <div key={idx} className="aspect-video">
// // //                       <iframe
// // //                         src={video}
// // //                         title={`Video ${idx + 1}`}
// // //                         className="w-full h-full rounded-sm"
// // //                         allowFullScreen
// // //                       ></iframe>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Description */}
// // //             <div className="mt-6 bg-white p-5 rounded-sm shadow-sm">
// // //               <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
// // //               <p className="text-sm text-gray-700 leading-relaxed">
// // //                 {plot.description || "No description provided."}
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Sidebar */}
// // //           <div className="lg:col-span-1">
// // //             {/* Title & Price Card */}
// // //             <div className="bg-white rounded-sm shadow-sm p-5 mb-5 sticky top-4">
// // //               <h1 className="text-xl font-semibold text-gray-900 mb-2">
// // //                 {plot.title || "Untitled"}
// // //               </h1>
// // //               <p className="text-xs text-gray-500 mb-4">{location}</p>

// // //               <div className="text-2xl font-bold text-gray-900 mb-4">
// // //                 ₹ {price}
// // //               </div>

// // //               <button
// // //                 onClick={toggleSaved}
// // //                 disabled={wishlistLoading}
// // //                 className={`w-full py-2 px-3 text-sm font-semibold rounded transition-colors mb-3 ${
// // //                   saved
// // //                     ? "bg-red-50 text-red-600 border border-red-600 hover:bg-red-100"
// // //                     : "bg-blue-600 text-white hover:bg-blue-700"
// // //                 } ${wishlistLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// // //               >
// // //                 {saved ? "✓ Saved" : "Save to wishlist"}
// // //               </button>

// // //               <button className="w-full py-2 px-3 text-sm font-semibold border border-gray-300 text-gray-900 rounded hover:bg-gray-50 transition-colors">
// // //                 Contact Agent
// // //               </button>
// // //             </div>

// // //             {/* Property Details */}
// // //             <div className="bg-white rounded-sm shadow-sm p-5 mb-5">
// // //               <h3 className="font-semibold text-gray-900 mb-4">Details</h3>
// // //               <div className="space-y-3">
// // //                 <div>
// // //                   <p className="text-xs text-gray-500 mb-1">Plot Size</p>
// // //                   <p className="text-sm font-semibold text-gray-900">
// // //                     {displayPlotSize()}
// // //                   </p>
// // //                 </div>
// // //                 <div className="border-t pt-3">
// // //                   <p className="text-xs text-gray-500 mb-1">Category</p>
// // //                   <p className="text-sm font-semibold text-gray-900">
// // //                     {plot.category || "N/A"}
// // //                   </p>
// // //                 </div>
// // //                 <div className="border-t pt-3">
// // //                   <p className="text-xs text-gray-500 mb-1">Status</p>
// // //                   <p className="text-sm font-semibold text-gray-900">
// // //                     {plot.status || "Available"}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Location */}
// // //             <div className="bg-white rounded-sm shadow-sm p-5">
// // //               <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
// // //               <div className="space-y-2 text-xs text-gray-700">
// // //                 {plot.location?.address && (
// // //                   <p className="truncate">{plot.location.address}</p>
// // //                 )}
// // //                 {plot.location?.city && (
// // //                   <p className="truncate">{plot.location.city}</p>
// // //                 )}
// // //                 {plot.location?.district && (
// // //                   <p className="truncate">{plot.location.district}</p>
// // //                 )}
// // //                 {plot.location?.state && (
// // //                   <p className="truncate">{plot.location.state}</p>
// // //                 )}
// // //                 {plot.location?.pincode && (
// // //                   <p>{plot.location.pincode}</p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { BASE_URL } from "../utils/urls";

// // export default function PropertyDetail() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [plot, setPlot] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [saved, setSaved] = useState(false);
// //   const [wishlistLoading, setWishlistLoading] = useState(false);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   useEffect(() => {
// //     if (!id) return;
// //     setLoading(true);
// //     setError(null);
// //     fetch(`${BASE_URL}/plot/${id}`)
// //       .then((r) => r.json())
// //       .then((data) => {
// //         if (data.success) setPlot(data.data || data.plot || null);
// //         else setError(data.message || "Plot not found");
// //       })
// //       .catch(() => setError("Error fetching property"))
// //       .finally(() => setLoading(false));
// //   }, [id]);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (!token || !id) return;
// //     fetch(`${BASE_URL}/api/wishlist`, {
// //       headers: { Authorization: `Bearer ${token}` },
// //     })
// //       .then((r) => r.json())
// //       .then((data) => {
// //         if (data.success && data.wishlist)
// //           setSaved(data.wishlist.includes(id));
// //       })
// //       .catch(() => {});
// //   }, [id]);

// //   const toggleSaved = async () => {
// //     const token = localStorage.getItem("token");
// //     if (!token) {
// //       alert("Please login to use wishlist");
// //       return;
// //     }
// //     setWishlistLoading(true);
// //     const endpoint = saved ? "remove" : "add";
// //     try {
// //       const res = await fetch(`${BASE_URL}/api/wishlist/${endpoint}`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ plotId: id }),
// //       });
// //       const data = await res.json();
// //       if (data.success) setSaved(!saved);
// //       else console.warn("Failed to update wishlist:", data.message);
// //     } catch (err) {
// //       console.error("Wishlist error:", err);
// //     } finally {
// //       setWishlistLoading(false);
// //     }
// //   };

// //   const convertToSqft = (size) => {
// //     return Math.round(size * 435.6);
// //   };

// //   const displayPlotSize = () => {
// //     if (!plot.plotSize) return "N/A";
// //     if (typeof plot.plotSize === "object" && plot.plotSize.value) {
// //       const value = plot.plotSize.value;
// //       const unit = plot.plotSize.unit;
// //       if (unit === "cent") {
// //         return `${value} cent (${convertToSqft(value).toLocaleString()} sq.ft)`;
// //       }
// //       return `${value.toLocaleString()} sq.ft`;
// //     }
// //     return `${plot.plotSize.toLocaleString()} sq.ft`;
// //   };

// //   const formatPrice = (price) => {
// //     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
// //     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
// //     return `₹${price.toLocaleString("en-IN")}`;
// //   };

// //   const handlePrevImage = () => {
// //     setCurrentImageIndex((prev) =>
// //       prev === 0 ? (plot.images?.length || 1) - 1 : prev - 1
// //     );
// //   };

// //   const handleNextImage = () => {
// //     setCurrentImageIndex((prev) =>
// //       prev === (plot.images?.length || 1) - 1 ? 0 : prev + 1
// //     );
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <p className="text-sm text-gray-500">Loading property…</p>
// //       </div>
// //     );
// //   }

// //   if (error || !plot) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <p className="text-red-600 mb-4">{error || "Property not found"}</p>
// //           <button
// //             onClick={() => navigate(-1)}
// //             className="text-sm text-blue-600 hover:text-blue-700"
// //           >
// //             ← Go back
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const imageUrl =
// //     plot.images?.[currentImageIndex]?.url || plot.image || "/placeholder.jpg";
// //   const hasMultipleImages = plot.images && plot.images.length > 1;
// //   const price = plot.price?.toLocaleString("en-IN") || "N/A";
// //   const location =
// //     plot.location?.city || plot.location?.address || "Location not specified";

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Back Button */}
// //       <div className="max-w-6xl mx-auto px-4 pt-6">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="text-sm text-blue-600 hover:text-blue-700 mb-6"
// //         >
// //           ← Back
// //         </button>
// //       </div>

// //       <div className="max-w-6xl mx-auto px-4 pb-12">
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {/* Main Image Section */}
// //           <div className="lg:col-span-2">
// //             <div className="relative overflow-hidden rounded-sm bg-gray-100">
// //               <div className="aspect-video">
// //                 <img
// //                   src={imageUrl}
// //                   alt={plot.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>

// //               {/* Image Navigation */}
// //               {hasMultipleImages && (
// //                 <>
// //                   <button
// //                     onClick={handlePrevImage}
// //                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
// //                     aria-label="Previous image"
// //                   >
// //                     <svg
// //                       className="w-6 h-6"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M15 19l-7-7 7-7"
// //                       />
// //                     </svg>
// //                   </button>
// //                   <button
// //                     onClick={handleNextImage}
// //                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
// //                     aria-label="Next image"
// //                   >
// //                     <svg
// //                       className="w-6 h-6"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M9 5l7 7-7 7"
// //                       />
// //                     </svg>
// //                   </button>
// //                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded text-xs">
// //                     {currentImageIndex + 1} / {plot.images.length}
// //                   </div>
// //                 </>
// //               )}

// //               {/* Status Badge */}
// //               {plot.status && (
// //                 <div className="absolute right-3 top-3">
// //                   <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
// //                     {plot.status}
// //                   </span>
// //                 </div>
// //               )}

// //               {/* Heart Button */}
// //               <button
// //                 type="button"
// //                 aria-label={saved ? "Unsave" : "Save"}
// //                 aria-pressed={saved}
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   toggleSaved();
// //                 }}
// //                 disabled={wishlistLoading}
// //                 className={
// //                   "absolute top-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full shadow transition-colors duration-200 " +
// //                   (saved
// //                     ? "bg-red-600 text-white hover:bg-red-700"
// //                     : "bg-white/90 text-gray-700 hover:bg-white") +
// //                   (wishlistLoading ? " opacity-50 cursor-not-allowed" : "")
// //                 }
// //               >
// //                 {saved ? (
// //                   <svg
// //                     className="w-5 h-5"
// //                     viewBox="0 0 24 24"
// //                     fill="currentColor"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
// //                   </svg>
// //                 ) : (
// //                   <svg
// //                     className="w-5 h-5"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       d="M20.8 8.6c0 4.3-3.4 7.4-8 11.1L12 20l-.8-.3C6.6 16 3.2 12.9 3.2 8.6 3.2 6.2 5.2 4.2 7.6 4.2c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2 2.4 0 4.4 2 4.4 4.4z"
// //                       stroke="currentColor"
// //                       strokeWidth="1.2"
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                     />
// //                   </svg>
// //                 )}
// //               </button>

// //               {/* Badge */}
// //               {plot.badge && (
// //                 <span className="absolute left-3 top-3 rounded px-2 py-1 bg-white text-[11px] font-semibold text-gray-800 shadow">
// //                   {plot.badge}
// //                 </span>
// //               )}
// //             </div>

// //             {/* Thumbnail Gallery */}
// //             {plot.images && plot.images.length > 1 && (
// //               <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
// //                 {plot.images.map((img, idx) => (
// //                   <button
// //                     key={idx}
// //                     onClick={() => setCurrentImageIndex(idx)}
// //                     className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all ${
// //                       idx === currentImageIndex
// //                         ? "border-blue-600"
// //                         : "border-gray-300 opacity-60 hover:opacity-100"
// //                     }`}
// //                   >
// //                     <img
// //                       src={img.url}
// //                       alt={`Thumbnail ${idx}`}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </button>
// //                 ))}
// //               </div>
// //             )}

// //             {/* Videos */}
// //             {plot.videos && plot.videos.length > 0 && (
// //               <div className="mt-6 bg-white p-5 rounded-sm shadow-sm">
// //                 <h3 className="font-semibold text-gray-900 mb-4">Videos</h3>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   {plot.videos.map((video, idx) => (
// //                     <div key={idx} className="aspect-video">
// //                       <iframe
// //                         src={video}
// //                         title={`Video ${idx + 1}`}
// //                         className="w-full h-full rounded-sm"
// //                         allowFullScreen
// //                       ></iframe>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             {/* Description */}
// //             <div className="mt-6 bg-white p-5 rounded-sm shadow-sm">
// //               <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
// //               <p className="text-sm text-gray-700 leading-relaxed">
// //                 {plot.description || "No description provided."}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Sidebar */}
// //           <div className="lg:col-span-1">
// //             {/* Title & Price Card */}
// //             <div className="bg-white rounded-sm shadow-sm p-5 mb-5 sticky top-4">
// //               <h1 className="text-xl font-semibold text-gray-900 mb-2">
// //                 {plot.title || "Untitled"}
// //               </h1>
// //               <p className="text-xs text-gray-500 mb-4">{location}</p>

// //               <div className="text-2xl font-bold text-gray-900 mb-4">
// //                 ₹ {price}
// //               </div>

// //               <button
// //                 onClick={toggleSaved}
// //                 disabled={wishlistLoading}
// //                 className={`w-full py-2 px-3 text-sm font-semibold rounded transition-colors mb-3 ${
// //                   saved
// //                     ? "bg-red-50 text-red-600 border border-red-600 hover:bg-red-100"
// //                     : "bg-blue-600 text-white hover:bg-blue-700"
// //                 } ${wishlistLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// //               >
// //                 {saved ? "✓ Saved" : "Save to wishlist"}
// //               </button>

// //               <button 
// //                 onClick={() => {
// //                   const message = `Hello, I would like to know more about this property:\n\n📍 ${plot.title || "Untitled"}\n💰 Price: ₹${price}\n📌 Location: ${location}\n\nPlease provide more details.`;
// //                   const encodedMessage = encodeURIComponent(message);
// //                   window.open(
// //                     `https://wa.me/918921840486?text=${encodedMessage}`,
// //                     "_blank"
// //                   );
// //                 }}
// //                 className="w-full py-2 px-3 text-sm font-semibold border border-gray-300 text-gray-900 rounded hover:bg-gray-50 transition-colors"
// //               >
// //                 Contact Agent
// //               </button>
// //             </div>

// //             {/* Property Details */}
// //             <div className="bg-white rounded-sm shadow-sm p-5 mb-5">
// //               <h3 className="font-semibold text-gray-900 mb-4">Details</h3>
// //               <div className="space-y-3">
// //                 <div>
// //                   <p className="text-xs text-gray-500 mb-1">Plot Size</p>
// //                   <p className="text-sm font-semibold text-gray-900">
// //                     {displayPlotSize()}
// //                   </p>
// //                 </div>
// //                 <div className="border-t pt-3">
// //                   <p className="text-xs text-gray-500 mb-1">Category</p>
// //                   <p className="text-sm font-semibold text-gray-900">
// //                     {plot.category || "N/A"}
// //                   </p>
// //                 </div>
// //                 <div className="border-t pt-3">
// //                   <p className="text-xs text-gray-500 mb-1">Status</p>
// //                   <p className="text-sm font-semibold text-gray-900">
// //                     {plot.status || "Available"}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Location */}
// //             <div className="bg-white rounded-sm shadow-sm p-5">
// //               <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
// //               <div className="space-y-2 text-xs text-gray-700">
// //                 {plot.location?.address && (
// //                   <p className="truncate">{plot.location.address}</p>
// //                 )}
// //                 {plot.location?.city && (
// //                   <p className="truncate">{plot.location.city}</p>
// //                 )}
// //                 {plot.location?.district && (
// //                   <p className="truncate">{plot.location.district}</p>
// //                 )}
// //                 {plot.location?.state && (
// //                   <p className="truncate">{plot.location.state}</p>
// //                 )}
// //                 {plot.location?.pincode && (
// //                   <p>{plot.location.pincode}</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/urls";

// export default function PropertyDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [plot, setPlot] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [saved, setSaved] = useState(false);
//   const [wishlistLoading, setWishlistLoading] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   useEffect(() => {
//     if (!id) return;
//     setLoading(true);
//     setError(null);
//     fetch(`${BASE_URL}/plot/${id}`)
//       .then((r) => r.json())
//       .then((data) => {
//         if (data.success) setPlot(data.data || data.plot || null);
//         else setError(data.message || "Plot not found");
//       })
//       .catch(() => setError("Error fetching property"))
//       .finally(() => setLoading(false));
//   }, [id]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token || !id) return;
//     fetch(`${BASE_URL}/api/wishlist`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         if (data.success && data.wishlist)
//           setSaved(data.wishlist.includes(id));
//       })
//       .catch(() => {});
//   }, [id]);

//   const toggleSaved = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please login to use wishlist");
//       return;
//     }
//     setWishlistLoading(true);
//     const endpoint = saved ? "remove" : "add";
//     try {
//       const res = await fetch(`${BASE_URL}/api/wishlist/${endpoint}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ plotId: id }),
//       });
//       const data = await res.json();
//       if (data.success) setSaved(!saved);
//       else console.warn("Failed to update wishlist:", data.message);
//     } catch (err) {
//       console.error("Wishlist error:", err);
//     } finally {
//       setWishlistLoading(false);
//     }
//   };

//   const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
    
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     const message = `Property Inquiry:\n\n${formData.message}\n\nProperty: ${plot.title}\nPrice: ₹${price}\nLocation: ${location}`;
//     const encodedMessage = encodeURIComponent(message);
    
//     window.open(
//       `https://wa.me/918921840486?text=${encodedMessage}`,
//       "_blank"
//     );

//     setFormData({ name: '', email: '', phone: '', message: '' });
//     setSubmitStatus('success');
//     setTimeout(() => setSubmitStatus(''), 3000);
//   };

//   const convertToSqft = (size) => {
//     return Math.round(size * 435.6);
//   };

//   const displayPlotSize = () => {
//     if (!plot.plotSize) return "N/A";
//     if (typeof plot.plotSize === "object" && plot.plotSize.value) {
//       const value = plot.plotSize.value;
//       const unit = plot.plotSize.unit;
//       if (unit === "cent") {
//         return `${value} cent (${convertToSqft(value).toLocaleString()} sq.ft)`;
//       }
//       return `${value.toLocaleString()} sq.ft`;
//     }
//     return `${plot.plotSize.toLocaleString()} sq.ft`;
//   };

//   const formatPrice = (price) => {
//     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
//     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
//     return `₹${price.toLocaleString("en-IN")}`;
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? (plot.images?.length || 1) - 1 : prev - 1
//     );
//   };

//   const handleNextImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev === (plot.images?.length || 1) - 1 ? 0 : prev + 1
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <p className="text-sm text-gray-500">Loading property…</p>
//       </div>
//     );
//   }

//   if (error || !plot) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-600 mb-4">{error || "Property not found"}</p>
//           <button
//             onClick={() => navigate(-1)}
//             className="text-sm text-blue-600 hover:text-blue-700"
//           >
//             ← Go back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const imageUrl =
//     plot.images?.[currentImageIndex]?.url || plot.image || "/placeholder.jpg";
//   const hasMultipleImages = plot.images && plot.images.length > 1;
//   const price = plot.price?.toLocaleString("en-IN") || "N/A";
//   const location =
//     plot.location?.city || plot.location?.address || "Location not specified";

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Back Button */}
//       <div className="max-w-6xl mx-auto px-4 pt-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="text-sm text-blue-600 hover:text-blue-700 mb-6"
//         >
//           ← Back
//         </button>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 pb-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Image Section */}
//           <div className="lg:col-span-2">
//             <div className="relative overflow-hidden rounded-sm bg-gray-100">
//               <div className="aspect-video">
//                 <img
//                   src={imageUrl}
//                   alt={plot.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Image Navigation */}
//               {hasMultipleImages && (
//                 <>
//                   <button
//                     onClick={handlePrevImage}
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
//                     aria-label="Previous image"
//                   >
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 19l-7-7 7-7"
//                       />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={handleNextImage}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
//                     aria-label="Next image"
//                   >
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded text-xs">
//                     {currentImageIndex + 1} / {plot.images.length}
//                   </div>
//                 </>
//               )}

//               {/* Status Badge */}
//               {plot.status && (
//                 <div className="absolute right-3 top-3">
//                   <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
//                     {plot.status}
//                   </span>
//                 </div>
//               )}

//               {/* Heart Button */}
//               <button
//                 type="button"
//                 aria-label={saved ? "Unsave" : "Save"}
//                 aria-pressed={saved}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleSaved();
//                 }}
//                 disabled={wishlistLoading}
//                 className={
//                   "absolute top-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full shadow transition-colors duration-200 " +
//                   (saved
//                     ? "bg-red-600 text-white hover:bg-red-700"
//                     : "bg-white/90 text-gray-700 hover:bg-white") +
//                   (wishlistLoading ? " opacity-50 cursor-not-allowed" : "")
//                 }
//               >
//                 {saved ? (
//                   <svg
//                     className="w-5 h-5"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="w-5 h-5"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M20.8 8.6c0 4.3-3.4 7.4-8 11.1L12 20l-.8-.3C6.6 16 3.2 12.9 3.2 8.6 3.2 6.2 5.2 4.2 7.6 4.2c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2 2.4 0 4.4 2 4.4 4.4z"
//                       stroke="currentColor"
//                       strokeWidth="1.2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 )}
//               </button>

//               {/* Badge */}
//               {plot.badge && (
//                 <span className="absolute left-3 top-3 rounded px-2 py-1 bg-white text-[11px] font-semibold text-gray-800 shadow">
//                   {plot.badge}
//                 </span>
//               )}
//             </div>

//             {/* Thumbnail Gallery */}
//             {plot.images && plot.images.length > 1 && (
//               <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
//                 {plot.images.map((img, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentImageIndex(idx)}
//                     className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all ${
//                       idx === currentImageIndex
//                         ? "border-blue-600"
//                         : "border-gray-300 opacity-60 hover:opacity-100"
//                     }`}
//                   >
//                     <img
//                       src={img.url}
//                       alt={`Thumbnail ${idx}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Videos */}
//             {plot.videos && plot.videos.length > 0 && (
//               <div className="mt-6 bg-white p-5 rounded-sm shadow-sm">
//                 <h3 className="font-semibold text-gray-900 mb-4">Videos</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {plot.videos.map((video, idx) => (
//                     <div key={idx} className="aspect-video bg-gray-900 rounded-sm overflow-hidden">
//                       <iframe
//                         src={video}
//                         title={`Video ${idx + 1}`}
//                         className="w-full h-full"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Description */}
//             <div className="mt-6 bg-white p-5 rounded-sm shadow-sm">
//               <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
//               <p className="text-sm text-gray-700 leading-relaxed">
//                 {plot.description || "No description provided."}
//               </p>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             {/* Title & Price Card */}
//             <div className="bg-white rounded-sm shadow-sm p-5 mb-5 sticky top-4">
//               <h1 className="text-xl font-semibold text-gray-900 mb-2">
//                 {plot.title || "Untitled"}
//               </h1>
//               <p className="text-xs text-gray-500 mb-4">{location}</p>

//               <div className="text-2xl font-bold text-gray-900 mb-4">
//                 ₹ {price}
//               </div>

//               <button
//                 onClick={toggleSaved}
//                 disabled={wishlistLoading}
//                 className={`w-full py-2 px-3 text-sm font-semibold rounded transition-colors mb-3 ${
//                   saved
//                     ? "bg-red-50 text-red-600 border border-red-600 hover:bg-red-100"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 } ${wishlistLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {saved ? "✓ Saved" : "Save to wishlist"}
//               </button>

//               <a
//                 href={`https://wa.me/918921840486?text=I am interested in this property: ${plot.title} - ${location}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full py-2 px-3 text-sm font-semibold border border-green-500 text-green-600 rounded hover:bg-green-50 transition-colors block text-center"
//               >
//                 💬 Chat on WhatsApp
//               </a>
//             </div>

//             {/* Property Details */}
//             <div className="bg-white rounded-sm shadow-sm p-5 mb-5">
//               <h3 className="font-semibold text-gray-900 mb-4">Details</h3>
//               <div className="space-y-3">
//                 <div>
//                   <p className="text-xs text-gray-500 mb-1">Plot Size</p>
//                   <p className="text-sm font-semibold text-gray-900">
//                     {displayPlotSize()}
//                   </p>
//                 </div>
//                 <div className="border-t pt-3">
//                   <p className="text-xs text-gray-500 mb-1">Category</p>
//                   <p className="text-sm font-semibold text-gray-900">
//                     {plot.category || "N/A"}
//                   </p>
//                 </div>
//                 <div className="border-t pt-3">
//                   <p className="text-xs text-gray-500 mb-1">Status</p>
//                   <p className="text-sm font-semibold text-gray-900">
//                     {plot.status || "Available"}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Location */}
//             <div className="bg-white rounded-sm shadow-sm p-5">
//               <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
//               <div className="space-y-2 text-xs text-gray-700">
//                 {plot.location?.address && (
//                   <p className="truncate">{plot.location.address}</p>
//                 )}
//                 {plot.location?.city && (
//                   <p className="truncate">{plot.location.city}</p>
//                 )}
//                 {plot.location?.district && (
//                   <p className="truncate">{plot.location.district}</p>
//                 )}
//                 {plot.location?.state && (
//                   <p className="truncate">{plot.location.state}</p>
//                 )}
//                 {plot.location?.pincode && (
//                   <p>{plot.location.pincode}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <section className="bg-black text-white py-16 px-4 md:px-12 flex flex-col lg:flex-row gap-8 pb-20 mt-12">
//         {/* Left side - Form */}
//         <div className="flex-1 flex flex-col gap-6">
//           <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
//             Interested in this <br />
//             <span className="text-green-500">Property?</span>
//           </h2>

//           <div className="bg-neutral-900 p-6 rounded-lg shadow-lg space-y-4">
//             {submitStatus === 'success' && (
//               <div className="bg-green-600 text-white p-3 rounded-md text-center">
//                 Thank you! We'll contact you soon.
//               </div>
//             )}

//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               {/* Name */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   required
//                   className="peer w-full bg-neutral-800 p-3 pt-6 rounded placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
//                 />
//                 <label
//                   htmlFor="name"
//                   className="absolute left-3 top-3 text-gray-400 text-base transition-all duration-200
//                   peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-focus:bg-neutral-800 peer-focus:rounded-lg peer-focus:px-1
//                   peer-valid:-top-2 peer-valid:text-xs peer-valid:text-green-500 peer-valid:bg-neutral-800 peer-valid:rounded-lg peer-valid:px-1"
//                 >
//                   Name *
//                 </label>
//               </div>

//               {/* Email */}
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   className="peer w-full bg-neutral-800 p-3 pt-6 rounded placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
//                 />
//                 <label
//                   htmlFor="email"
//                   className="absolute left-3 top-3 text-gray-400 text-base transition-all duration-200
//                   peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-focus:bg-neutral-800 peer-focus:rounded-lg peer-focus:px-1
//                   peer-valid:-top-2 peer-valid:text-xs peer-valid:text-green-500 peer-valid:bg-neutral-800 peer-valid:rounded-lg peer-valid:px-1"
//                 >
//                   Email *
//                 </label>
//               </div>

//               {/* Phone */}
//               <div className="relative">
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleFormChange}
//                   required
//                   className="peer w-full bg-neutral-800 p-3 pt-6 rounded placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
//                 />
//                 <label
//                   htmlFor="phone"
//                   className="absolute left-3 top-3 text-gray-400 text-base transition-all duration-200
//                   peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-focus:bg-neutral-800 peer-focus:rounded-lg peer-focus:px-1
//                   peer-valid:-top-2 peer-valid:text-xs peer-valid:text-green-500 peer-valid:bg-neutral-800 peer-valid:rounded-lg peer-valid:px-1"
//                 >
//                   Phone *
//                 </label>
//               </div>

//               {/* Message */}
//               <div className="relative">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleFormChange}
//                   className="peer w-full bg-neutral-800 p-3 pt-6 rounded placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-white"
//                 ></textarea>
//                 <label
//                   htmlFor="message"
//                   className="absolute left-3 top-3 text-gray-400 text-base transition-all duration-200
//                   peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-focus:bg-neutral-800 peer-focus:rounded-lg peer-focus:px-1
//                   peer-valid:-top-2 peer-valid:text-xs peer-valid:text-green-500 peer-valid:bg-neutral-800 peer-valid:rounded-lg peer-valid:px-1"
//                 >
//                   Message
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full border border-white hover:border-green-500 text-white hover:bg-green-500 transition-all duration-300 font-medium py-3 px-3 rounded-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     📨 Send Inquiry
//                   </>
//                 )}
//               </button>
//             </form>

//             <div className="flex flex-col md:flex-row bg-neutral-800 py-6 rounded-lg px-6 justify-center items-center text-center gap-4 mt-6">
//               <p className="text-lg font-semibold text-white">
//                 Need quick response?
//               </p>
//               <a
//                 href={`https://wa.me/918921840486?text=Hi! I'm interested in ${plot.title}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 w-full md:w-auto"
//               >
//                 💬 Chat Now
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right side - Info */}
//         <div className="flex-1 flex items-center">
//           <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-full text-center flex flex-col justify-center">
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-white mb-4">{plot.title}</h3>
//               <p className="text-gray-300 mb-4">
//                 📍 {location}
//               </p>
//               <p className="text-3xl font-bold text-green-500 mb-4">
//                 ₹{price}
//               </p>
//             </div>

//             <div className="space-y-4 text-left">
//               <div className="border-l-4 border-green-500 pl-4">
//                 <p className="text-gray-400 text-sm">Plot Size</p>
//                 <p className="text-white font-semibold">{displayPlotSize()}</p>
//               </div>
//               <div className="border-l-4 border-green-500 pl-4">
//                 <p className="text-gray-400 text-sm">Category</p>
//                 <p className="text-white font-semibold">{plot.category || "N/A"}</p>
//               </div>
//               <div className="border-l-4 border-green-500 pl-4">
//                 <p className="text-gray-400 text-sm">Status</p>
//                 <p className="text-white font-semibold">{plot.status || "Available"}</p>
//               </div>
//             </div>

//             <div className="border-t border-neutral-700 w-full mt-6 pt-6">
//               <p className="text-green-500 text-sm font-semibold mb-3">Quick Contact</p>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href={`https://wa.me/918921840486`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white bg-green-600 hover:bg-green-700 transition-all"
//                 >
//                   💬
//                 </a>
//                 <a
//                   href="tel:+918921840486"
//                   className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all"
//                 >
//                   📞
//                 </a>
//                 <a
//                   href="mailto:info@property.com"
//                   className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all"
//                 >
//                   ✉️
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }