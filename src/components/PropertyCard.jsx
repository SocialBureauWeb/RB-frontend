// import React, { useState } from "react";

// export default function PropertyCard({ property }) {
//   const [saved, setSaved] = useState(false);

//   function toggleSaved(e) {
//     e.preventDefault();
//     setSaved((s) => !s);
//   }

//   return (
//     <article className="group relative">
//       <div className="relative overflow-hidden rounded-sm bg-gray-100">
//         <img
//           src={property.image}
//           alt={property.title}
//           className="w-full h-56 sm:h-64 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
//           loading="lazy"
//         />

//         {/* heart button - toggles red when clicked */}
//         <button
//           aria-label={saved ? "Unsave" : "Save"}
//           aria-pressed={saved}
//           onClick={toggleSaved}
//           className={
//             "absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full shadow transition-colors duration-200 " +
//             (saved
//               ? "bg-red-600 text-white hover:bg-red-700"
//               : "bg-white/90 text-gray-700 hover:bg-white")
//           }
//         >
//           {/* Filled heart when saved, outline otherwise */}
//           {saved ? (
//             <svg
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//             </svg>
//           ) : (
//             <svg
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M20.8 8.6c0 4.3-3.4 7.4-8 11.1L12 20l-.8-.3C6.6 16 3.2 12.9 3.2 8.6 3.2 6.2 5.2 4.2 7.6 4.2c1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2 2.4 0 4.4 2 4.4 4.4z"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 fill="none"
//               />
//             </svg>
//           )}
//         </button>

//         {/* video / badge (optional) */}
//         {property.badge && (
//           <span className="absolute left-3 top-3 rounded px-2 py-1 bg-white text-[11px] font-semibold text-gray-800 shadow">
//             {property.badge}
//           </span>
//         )}
//       </div>

//       <div className="mt-3 text-sm">
//         <div className="text-xs font-semibold text-gray-900">₹ {property.price}</div>
//         <div className="text-xs text-gray-500 truncate">{property.location}</div>
//       </div>
//     </article>
//   );
// }


import React from 'react';

export default function PropertyCard({ property }) {
  if (!property) return null;

  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {property.images && property.images.length > 0 ? (
          <img
            src={property.images[0].url}
            alt={property.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500">No Image</span>
          </div>
        )}

        {/* Status Badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${
            property.status === 'Available'
              ? 'bg-green-500 text-white'
              : property.status === 'Reserved'
              ? 'bg-yellow-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          {property.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {property.description}
        </p>

        {/* Location - Render individual fields, not the object */}
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-500">Location:</span>
          <span className="font-medium text-gray-900">
            {property.location?.city || 'N/A'}
            {property.location?.state && `, ${property.location.state}`}
          </span>
        </div>

        {/* Plot Size */}
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-gray-500">Size:</span>
          <span className="font-medium text-gray-900">
            {property.plotSize?.toLocaleString()} sq.ft
          </span>
        </div>

        {/* Category */}
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-gray-500">Category:</span>
          <span className="font-medium text-gray-900">
            {property.category}
          </span>
        </div>

        {/* Price */}
        <div className="pt-3 border-t border-gray-200">
          <div className="text-2xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </div>
        </div>
      </div>
    </div>
  );
}