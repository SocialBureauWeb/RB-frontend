// import React, { useState } from "react";

// export default function Modal({ property, onClose, formatPrice }) {
//   const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

//   if (!property) return null;

//   const allMedia = [
//     ...(property.images || []).map(img => ({ ...img, type: 'image' })),
//     ...(property.videos || []).map(video => ({ ...video, type: 'video' }))
//   ];

//   const handleContactViaWhatsApp = () => {
//     const phoneNumber = "+919778455812";
//     const message = `Hello, I would like to know more about this plot: ${property.title}. 
// Plot Size: ${property.plotSize?.toLocaleString()} sq.ft
// Location: ${property.location?.address || property.location?.city}
// Price: ${formatPrice(property.price)}
// Status: ${property.status}`;

//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-lg w-full sm:max-w-2xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] my-4 sm:my-8 flex flex-col"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Modal Header */}
//         <div className="flex justify-between items-start p-4 sm:p-6 border-b">
//           <div>
//             <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">{property.title}</h2>
//             <p className="text-[#2b54a2] text-lg sm:text-xl font-semibold">
//               {formatPrice(property.price)}
//             </p>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-4">
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Modal Body */}
//         <div className="flex flex-col lg:flex-row px-4 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-6 overflow-y-auto flex-1">

//           {/* Left Column - Media Gallery */}
//           <div className="lg:w-2/3 flex flex-col">
//             <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center h-64 sm:h-96 lg:h-[500px] overflow-hidden">
//               {allMedia.length > 0 ? (
//                 allMedia[selectedMediaIndex].type === 'image' ? (
//                   <img
//                     src={allMedia[selectedMediaIndex].url}
//                     alt={allMedia[selectedMediaIndex].alt || property.title}
//                     className="w-full h-full object-contain"
//                   />
//                 ) : (
//                   <video
//                     controls
//                     poster={allMedia[selectedMediaIndex].thumbnail}
//                     className="w-full h-full object-contain"
//                   >
//                     <source src={allMedia[selectedMediaIndex].url} type="video/mp4" />
//                   </video>
//                 )
//               ) : (
//                 <div className="text-gray-400">No media available</div>
//               )}
//             </div>

//             {allMedia.length > 1 && (
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold mb-3">Gallery</h3>
//                 <div className="flex overflow-x-auto pb-2 space-x-3">
//                   {allMedia.map((media, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedMediaIndex(index)}
//                       className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${selectedMediaIndex === index
//                           ? 'border-blue-500'
//                           : 'border-transparent hover:border-gray-300'
//                         }`}
//                     >
//                       {media.type === 'image' ? (
//                         <img
//                           src={media.url}
//                           alt={media.alt || property.title}
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <div className="relative w-full h-full bg-gray-800">
//                           <img
//                             src={media.thumbnail}
//                             alt="Video thumbnail"
//                             className="w-full h-full object-cover opacity-70"
//                           />
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//                               <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M8 5v14l11-7z" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Column - Details */}
//           <div className="lg:w-1/3 flex flex-col">
//             <div className="space-y-4 sm:space-y-6 overflow-y-auto">

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Property Details</h3>
//                 <dl className="space-y-3">
//                   <div className="flex justify-between items-center py-2">
//                     <dt className="text-gray-600">Plot Size:</dt>
//                     <dd className="font-medium">{property.plotSize.toLocaleString()} sq.ft</dd>
//                   </div>
//                   <div className="flex justify-between items-center py-2">
//                     <dt className="text-gray-600">Category:</dt>
//                     <dd className="font-medium">{property.category}</dd>
//                   </div>
//                   <div className="flex justify-between items-center py-2">
//                     <dt className="text-gray-600">Status:</dt>
//                     <dd className={`font-medium ${property.status === "Available"
//                         ? "text-green-600"
//                         : property.status === "Reserved"
//                           ? "text-yellow-600"
//                           : "text-red-600"
//                       }`}>
//                       {property.status}
//                     </dd>
//                   </div>
//                 </dl>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Location</h3>
//                 <address className="not-italic text-gray-600 space-y-2">
//                   {property.location?.address && (
//                     <p className="flex items-start">
//                       <svg className="w-5 h-5 mr-2 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       <span>{property.location.address}</span>
//                     </p>
//                   )}
//                   <div className="grid grid-cols-2 gap-2 pl-7">
//                     {property.location?.city && (
//                       <div>
//                         <span className="text-sm text-gray-500">City:</span>
//                         <p>{property.location.city}</p>
//                       </div>
//                     )}
//                     {property.location?.district && (
//                       <div>
//                         <span className="text-sm text-gray-500">District:</span>
//                         <p>{property.location.district}</p>
//                       </div>
//                     )}
//                     {property.location?.state && (
//                       <div>
//                         <span className="text-sm text-gray-500">State:</span>
//                         <p>{property.location.state}</p>
//                       </div>
//                     )}
//                     {property.location?.pincode && (
//                       <div>
//                         <span className="text-sm text-gray-500">Pincode:</span>
//                         <p>{property.location.pincode}</p>
//                       </div>
//                     )}
//                   </div>
//                 </address>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Description</h3>
//                 <p className="text-gray-600 leading-relaxed">{property.description}</p>
//               </div>

//               {property.features && property.features.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-3">Features</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {property.features.map((feature, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 bg-[#2b54a2] text-white rounded-full text-sm"
//                       >
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="p-4 sm:p-6 bg-gray-50 border-t flex flex-col sm:flex-row gap-3 mt-auto">
//           <button
//             onClick={onClose}
//             className="flex-1 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-md hover:bg-gray-100 font-medium transition-colors text-sm sm:text-base"
//           >
//             Close
//           </button>
//           <button
//             onClick={handleContactViaWhatsApp}
//             className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-[#0f750fff] text-white rounded-md hover:bg-blue-700 font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
//           >
//             Contact via WhatsApp
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BASE_URL } from "../../utils/urls";

export default function PropertyDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  /* -------------------- EFFECTS -------------------- */

  useEffect(() => {
    fetchPropertyDetails();
  }, [slug]);

  useEffect(() => {
    if (property) {
      checkWishlistStatus();
    }
  }, [property]);

  /* -------------------- API CALLS -------------------- */

  const fetchPropertyDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/api/plot/${slug}`);
      const data = await res.json();

      if (data.success) {
        setProperty(data.data);
      } else {
        setError("Property not found");
      }
    } catch (err) {
      console.error("Error fetching property:", err);
      setError("Failed to load property details");
    } finally {
      setLoading(false);
    }
  };

  const checkWishlistStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch(`${BASE_URL}/api/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success && data.wishlist) {
        if (data.success && data.wishlist) {
          setSaved(data.wishlist.includes(property._id));
        }
      }
    } catch (err) {
      console.error("Error checking wishlist:", err);
    }
  };

  const toggleWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to save properties", { duration: 800, icon: '🔒' });
      setTimeout(() => {
        navigate("/login", {
          state: {
            from: window.location.pathname,
            message: "Please login to save properties to your wishlist"
          }
        });
      }, 500);
      return;
    }

    setWishlistLoading(true);
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
        toast.success(
          saved
            ? "Property removed from wishlist"
            : "Property added to wishlist",
          { duration: 2000 }
        );
      } else {
        toast.error(data.message || "Operation failed", { duration: 2000 });
      }
    } catch (err) {
      console.error("Error updating wishlist:", err);
      toast.error("An error occurred. Please try again.", { duration: 2000 });
    } finally {
      setWishlistLoading(false);
    }
  };

  /* -------------------- HELPERS -------------------- */

  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price?.toLocaleString("en-IN")}`;
  };

  const handleContactViaWhatsApp = () => {
    const phoneNumber = "+919778455812";
    const message = `Hello, I would like to know more about this plot: ${property.title}. 
Plot Size: ${property.plotSize?.toLocaleString()} sq.ft
Location: ${property.location?.address || property.location?.city}
Price: ${formatPrice(property.price)}
Status: ${property.status}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  /* -------------------- RENDER STATES -------------------- */

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-12 w-12 border-b-2 border-[#2b54a2]" />
      </div>
    );
  }

  if (error || !property) {
    return (
      <section className="px-6 py-10 text-center">
        <p className="text-red-500 text-lg mb-4">{error || "Property not found"}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#2b54a2] text-white rounded hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </section>
    );
  }

  const allMedia = [
    ...(property.images || []).map(img => ({ ...img, type: 'image' })),
    ...(property.videos || []).map(video => ({ ...video, type: 'video' }))
  ];

  /* -------------------- MAIN UI -------------------- */

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#2b54a2] hover:text-blue-700 transition"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Back</span>
          </button>

          <button
            onClick={toggleWishlist}
            disabled={wishlistLoading}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition disabled:opacity-50"
            title={saved ? "Remove from wishlist" : "Add to wishlist"}
          >
            {wishlistLoading ? (
              <svg className="w-6 h-6 text-gray-600 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : saved ? (
              <svg className="w-6 h-6 text-red-500 fill-red-500" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.63 2.09-4.5 4.5-4.5 1.74 0 3.41 1.01 4.5 2.09C12.09 5.01 13.76 4 15.5 4 17.91 4 20 5.87 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.87 4.09 4 6.5 4c1.74 0 3.41 1.01 4.5 2.09C12.09 5.01 13.76 4 15.5 4 17.91 4 20 5.87 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Title & Price */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">{property.title}</h1>
          <p className="text-[#2b54a2] text-2xl sm:text-3xl font-semibold">
            {formatPrice(property.price)}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Media Gallery (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Main Media */}
            <div className="bg-gray-100 rounded-lg mb-6 flex items-center justify-center h-80 sm:h-96 lg:h-[600px] overflow-hidden">
              {allMedia.length > 0 ? (
                allMedia[selectedMediaIndex].type === 'image' ? (
                  <img
                    src={allMedia[selectedMediaIndex].url}
                    alt={allMedia[selectedMediaIndex].alt || property.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video
                    controls
                    poster={allMedia[selectedMediaIndex].thumbnail || property.images?.[0]?.url || null}
                    className="w-full h-full object-contain"
                  >
                    <source src={allMedia[selectedMediaIndex].url || null} type="video/mp4" />
                  </video>
                )
              ) : (
                <div className="text-gray-400">No media available</div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {allMedia.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Gallery</h3>
                <div className="flex overflow-x-auto pb-2 space-x-3">
                  {allMedia.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMediaIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition ${selectedMediaIndex === index
                        ? 'border-[#2b54a2]'
                        : 'border-transparent hover:border-gray-300'
                        }`}
                    >
                      {media.type === 'image' ? (
                        <img
                          src={media.url}
                          alt={media.alt || property.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="relative w-full h-full bg-gray-800">
                          <img
                            src={media.thumbnail || property.images?.[0]?.url || null}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover opacity-70"
                            onError={(e) => {
                              e.target.src = property.images?.[0]?.url || '/placeholder.jpg';
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Details (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              {/* Property Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Property Details</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <dt className="text-gray-600">Plot Size:</dt>
                    <dd className="font-medium">{(property.plotSize?.value || property.plotSize)?.toLocaleString()} sq.ft</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <dt className="text-gray-600">Category:</dt>
                    <dd className="font-medium">{property.category}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <dt className="text-gray-600">Status:</dt>
                    <dd className={`font-medium ${property.status === "Available"
                      ? "text-green-600"
                      : property.status === "Reserved"
                        ? "text-yellow-600"
                        : "text-red-600"
                      }`}>
                      {property.status}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Location</h3>
                <address className="not-italic text-gray-600 space-y-2 text-sm">
                  {property.location?.address && (
                    <p className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{property.location.address}</span>
                    </p>
                  )}
                  {(property.location?.city || property.location?.district || property.location?.state || property.location?.pincode) && (
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {property.location?.city && (
                        <div>
                          <span className="text-xs text-gray-500">City:</span>
                          <p className="font-medium">{property.location.city}</p>
                        </div>
                      )}
                      {property.location?.district && (
                        <div>
                          <span className="text-xs text-gray-500">District:</span>
                          <p className="font-medium">{property.location.district}</p>
                        </div>
                      )}
                      {property.location?.state && (
                        <div>
                          <span className="text-xs text-gray-500">State:</span>
                          <p className="font-medium">{property.location.state}</p>
                        </div>
                      )}
                      {property.location?.pincode && (
                        <div>
                          <span className="text-xs text-gray-500">Pincode:</span>
                          <p className="font-medium">{property.location.pincode}</p>
                        </div>
                      )}
                    </div>
                  )}
                </address>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleContactViaWhatsApp}
                className="w-full px-4 py-3 bg-[#0f750fff] text-white rounded-md hover:bg-blue-700 font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.288-3.586 6.364-1.086 9.233 1.139 1.396 2.823 2.417 4.592 2.757 2.322.45 5.159-.767 6.453-2.549 1.294-1.782.867-4.923-.567-6.328a9.9 9.9 0 00-3.357-1.491z" />
                </svg>
                Contact via WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Description & Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h3 className="text-lg font-semibold mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <div className="flex flex-wrap gap-3">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#2b54a2] text-white rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}