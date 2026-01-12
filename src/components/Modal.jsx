// // // import React, { useState } from "react";

// // // export default function Modal({ property, onClose, formatPrice }) {
// // //   const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  
// // //   if (!property) return null;

// // //   // Combine images and videos for the media gallery
// // //   const allMedia = [
// // //     ...(property.images || []).map(img => ({ ...img, type: 'image' })),
// // //     ...(property.videos || []).map(video => ({ ...video, type: 'video' }))
// // //   ];

// // //   return (
// // //     <div
// // //       className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
// // //       onClick={onClose}
// // //     >
// // //       <div
// // //         className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] my-8"
// // //         onClick={(e) => e.stopPropagation()}
// // //       >
// // //         {/* Modal Header */}
// // //         <div className="flex justify-between items-start p-6">
// // //           <div>
// // //             <h2 className="text-2xl font-semibold mb-3 font-sans">{property.title}</h2>
// // //             <p className="text-[#2b54a2] text-xl font-semibold mt-1">
// // //               {formatPrice(property.price)}
// // //             </p>
// // //           </div>
// // //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// // //             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// // //                 d="M6 18L18 6M6 6l12 12" />
// // //             </svg>
// // //           </button>
// // //         </div>

// // //         {/* Modal Body - E-commerce Style Layout */}
// // //         <div className="flex flex-col lg:flex-row px-6 pb-6 max-h-[calc(90vh-140px)]">
          
// // //           {/* Left Column - Media Gallery */}
// // //           <div className="lg:w-2/3 pr-0 lg:pr-6 flex flex-col">
// // //             {/* Main Media Display */}
// // //             <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center min-h-[400px] max-h-[500px] overflow-hidden">
// // //               {allMedia.length > 0 ? (
// // //                 allMedia[selectedMediaIndex].type === 'image' ? (
// // //                   <img
// // //                     src={allMedia[selectedMediaIndex].url}
// // //                     alt={allMedia[selectedMediaIndex].alt || property.title}
// // //                     className="w-full h-full object-contain"
// // //                   />
// // //                 ) : (
// // //                   <video
// // //                     controls
// // //                     poster={allMedia[selectedMediaIndex].thumbnail}
// // //                     className="w-full h-full object-contain"
// // //                   >
// // //                     <source src={allMedia[selectedMediaIndex].url} type="video/mp4" />
// // //                   </video>
// // //                 )
// // //               ) : (
// // //                 <div className="text-gray-400">No media available</div>
// // //               )}
// // //             </div>

// // //             {/* Thumbnail/Media List */}
// // //             {allMedia.length > 1 && (
// // //               <div className="mt-4">
// // //                 <h3 className="text-lg font-semibold mb-3 font-sans">Gallery</h3>
// // //                 <div className="flex overflow-x-auto pb-2 space-x-3">
// // //                   {allMedia.map((media, index) => (
// // //                     <button
// // //                       key={index}
// // //                       onClick={() => setSelectedMediaIndex(index)}
// // //                       className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
// // //                         selectedMediaIndex === index 
// // //                           ? 'border-blue-500' 
// // //                           : 'border-transparent hover:border-gray-300'
// // //                       }`}
// // //                     >
// // //                       {media.type === 'image' ? (
// // //                         <img
// // //                           src={media.url}
// // //                           alt={media.alt || property.title}
// // //                           className="w-full h-full object-cover"
// // //                         />
// // //                       ) : (
// // //                         <div className="relative w-full h-full bg-gray-800">
// // //                           <img
// // //                             src={media.thumbnail}
// // //                             alt="Video thumbnail"
// // //                             className="w-full h-full object-cover opacity-70"
// // //                           />
// // //                           <div className="absolute inset-0 flex items-center justify-center">
// // //                             <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
// // //                               <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
// // //                                 <path d="M8 5v14l11-7z"/>
// // //                               </svg>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       )}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Right Column - Details (Fixed/Scrollable) */}
// // //           <div className="lg:w-1/3 mt-6 lg:mt-0">
// // //             <div className="sticky top-0 max-h-[calc(90vh-200px)] overflow-y-auto">
              
// // //               {/* Property Details */}
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold mb-3 font-sans">Property Details</h3>
// // //                 <dl className="space-y-3">
// // //                   <div className="flex justify-between items-center py-2">
// // //                     <dt className="text-gray-600">Plot Size:</dt>
// // //                     <dd className="font-medium">{property.plotSize.toLocaleString()} sq.ft</dd>
// // //                   </div>
// // //                   <div className="flex justify-between items-center py-2">
// // //                     <dt className="text-gray-600">Category:</dt>
// // //                     <dd className="font-medium">{property.category}</dd>
// // //                   </div>
// // //                   <div className="flex justify-between items-center py-2">
// // //                     <dt className="text-gray-600">Status:</dt>
// // //                     <dd className={`font-medium ${
// // //                       property.status === "Available"
// // //                         ? "text-green-600"
// // //                         : property.status === "Reserved"
// // //                         ? "text-yellow-600"
// // //                         : "text-red-600"
// // //                     }`}>
// // //                       {property.status}
// // //                     </dd>
// // //                   </div>
// // //                 </dl>
// // //               </div>

// // //               {/* Location */}
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold mb-3 font-sans">Location</h3>
// // //                 <address className="not-italic text-gray-600 space-y-2">
// // //                   {property.location?.address && (
// // //                     <p className="flex items-start">
// // //                       <svg className="w-5 h-5 mr-2 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// // //                       </svg>
// // //                       <span>{property.location.address}</span>
// // //                     </p>
// // //                   )}
// // //                   <div className="grid grid-cols-2 gap-2 pl-7">
// // //                     {property.location?.city && (
// // //                       <div>
// // //                         <span className="text-sm text-gray-500">City:</span>
// // //                         <p>{property.location.city}</p>
// // //                       </div>
// // //                     )}
// // //                     {property.location?.district && (
// // //                       <div>
// // //                         <span className="text-sm text-gray-500">District:</span>
// // //                         <p>{property.location.district}</p>
// // //                       </div>
// // //                     )}
// // //                     {property.location?.state && (
// // //                       <div>
// // //                         <span className="text-sm text-gray-500">State:</span>
// // //                         <p>{property.location.state}</p>
// // //                       </div>
// // //                     )}
// // //                     {property.location?.pincode && (
// // //                       <div>
// // //                         <span className="text-sm text-gray-500">Pincode:</span>
// // //                         <p>{property.location.pincode}</p>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </address>
// // //               </div>

// // //               {/* Description */}
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold mb-3 font-sans">Description</h3>
// // //                 <p className="text-gray-600 leading-relaxed">{property.description}</p>
// // //               </div>

// // //               {/* Additional Features */}
// // //               {property.features && property.features.length > 0 && (
// // //                 <div className="mb-6">
// // //                   <h3 className="text-lg font-semibold mb-3 font-sans">Features</h3>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {property.features.map((feature, index) => (
// // //                       <span 
// // //                         key={index} 
// // //                         className="px-3 py-1 bg-[#2b54a2] text-[#2b54a2] rounded-full text-sm"
// // //                       >
// // //                         {feature}
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Footer */}
// // //         <div className="p-6 bg-gray-50 flex flex-col sm:flex-row gap-3">
// // //           <button
// // //             onClick={onClose}
// // //             className="flex-1 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 font-medium transition-colors"
// // //           >
// // //             Close
// // //           </button>
// // //           <button
// // //             className="flex-1 px-6 py-3 bg-[#2b54a2] text-white rounded-md hover:bg-blue-700 font-medium transition-colors"
// // //           >
// // //             Contact
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useState } from "react";

// // export default function Modal({ property, onClose, formatPrice }) {
// //   const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  
// //   if (!property) return null;

// //   // Combine images and videos for the media gallery
// //   const allMedia = [
// //     ...(property.images || []).map(img => ({ ...img, type: 'image' })),
// //     ...(property.videos || []).map(video => ({ ...video, type: 'video' }))
// //   ];

// //   // WhatsApp Contact Handler
// //   const handleContactViaWhatsApp = () => {
// //     // Replace with your actual WhatsApp number (include country code without + or spaces)
// //     const phoneNumber = "918921840486"; // Example: India +91
    
// //     // Create message with plot details
// //     const message = `Hello, I would like to know more about this plot: ${property.title}. 
// // Plot Size: ${property.plotSize?.toLocaleString()} sq.ft
// // Location: ${property.location?.address || property.location?.city}
// // Price: ${formatPrice(property.price)}
// // Status: ${property.status}`;
    
// //     // Encode message for URL
// //     const encodedMessage = encodeURIComponent(message);
    
// //     // Open WhatsApp
// //     window.open(
// //       `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
// //       "_blank"
// //     );
// //   };

// //   return (
// //     <div
// //       className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
// //       onClick={onClose}
// //     >
// //       <div
// //         className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] my-8"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         {/* Modal Header */}
// //         <div className="flex justify-between items-start p-6">
// //           <div>
// //             <h2 className="text-2xl font-semibold mb-3 font-sans">{property.title}</h2>
// //             <p className="text-[#2b54a2] text-xl font-semibold mt-1">
// //               {formatPrice(property.price)}
// //             </p>
// //           </div>
// //           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
// //             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //                 d="M6 18L18 6M6 6l12 12" />
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Modal Body - E-commerce Style Layout */}
// //         <div className="flex flex-col lg:flex-row px-6 pb-6 max-h-[calc(90vh-140px)]">
          
// //           {/* Left Column - Media Gallery */}
// //           <div className="lg:w-2/3 pr-0 lg:pr-6 flex flex-col">
// //             {/* Main Media Display */}
// //             <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center min-h-[400px] max-h-[500px] overflow-hidden">
// //               {allMedia.length > 0 ? (
// //                 allMedia[selectedMediaIndex].type === 'image' ? (
// //                   <img
// //                     src={allMedia[selectedMediaIndex].url}
// //                     alt={allMedia[selectedMediaIndex].alt || property.title}
// //                     className="w-full h-full object-contain"
// //                   />
// //                 ) : (
// //                   <video
// //                     controls
// //                     poster={allMedia[selectedMediaIndex].thumbnail}
// //                     className="w-full h-full object-contain"
// //                   >
// //                     <source src={allMedia[selectedMediaIndex].url} type="video/mp4" />
// //                   </video>
// //                 )
// //               ) : (
// //                 <div className="text-gray-400">No media available</div>
// //               )}
// //             </div>

// //             {/* Thumbnail/Media List */}
// //             {allMedia.length > 1 && (
// //               <div className="mt-4">
// //                 <h3 className="text-lg font-semibold mb-3 font-sans">Gallery</h3>
// //                 <div className="flex overflow-x-auto pb-2 space-x-3">
// //                   {allMedia.map((media, index) => (
// //                     <button
// //                       key={index}
// //                       onClick={() => setSelectedMediaIndex(index)}
// //                       className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
// //                         selectedMediaIndex === index 
// //                           ? 'border-blue-500' 
// //                           : 'border-transparent hover:border-gray-300'
// //                       }`}
// //                     >
// //                       {media.type === 'image' ? (
// //                         <img
// //                           src={media.url}
// //                           alt={media.alt || property.title}
// //                           className="w-full h-full object-cover"
// //                         />
// //                       ) : (
// //                         <div className="relative w-full h-full bg-gray-800">
// //                           <img
// //                             src={media.thumbnail}
// //                             alt="Video thumbnail"
// //                             className="w-full h-full object-cover opacity-70"
// //                           />
// //                           <div className="absolute inset-0 flex items-center justify-center">
// //                             <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
// //                               <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
// //                                 <path d="M8 5v14l11-7z"/>
// //                               </svg>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       )}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Right Column - Details (Fixed/Scrollable) */}
// //           <div className="lg:w-1/3 mt-6 lg:mt-0">
// //             <div className="sticky top-0 max-h-[calc(90vh-200px)] overflow-y-auto">
              
// //               {/* Property Details */}
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold mb-3 font-sans">Property Details</h3>
// //                 <dl className="space-y-3">
// //                   <div className="flex justify-between items-center py-2">
// //                     <dt className="text-gray-600">Plot Size:</dt>
// //                     <dd className="font-medium">{property.plotSize.toLocaleString()} sq.ft</dd>
// //                   </div>
// //                   <div className="flex justify-between items-center py-2">
// //                     <dt className="text-gray-600">Category:</dt>
// //                     <dd className="font-medium">{property.category}</dd>
// //                   </div>
// //                   <div className="flex justify-between items-center py-2">
// //                     <dt className="text-gray-600">Status:</dt>
// //                     <dd className={`font-medium ${
// //                       property.status === "Available"
// //                         ? "text-green-600"
// //                         : property.status === "Reserved"
// //                         ? "text-yellow-600"
// //                         : "text-red-600"
// //                     }`}>
// //                       {property.status}
// //                     </dd>
// //                   </div>
// //                 </dl>
// //               </div>

// //               {/* Location */}
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold mb-3 font-sans">Location</h3>
// //                 <address className="not-italic text-gray-600 space-y-2">
// //                   {property.location?.address && (
// //                     <p className="flex items-start">
// //                       <svg className="w-5 h-5 mr-2 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// //                       </svg>
// //                       <span>{property.location.address}</span>
// //                     </p>
// //                   )}
// //                   <div className="grid grid-cols-2 gap-2 pl-7">
// //                     {property.location?.city && (
// //                       <div>
// //                         <span className="text-sm text-gray-500">City:</span>
// //                         <p>{property.location.city}</p>
// //                       </div>
// //                     )}
// //                     {property.location?.district && (
// //                       <div>
// //                         <span className="text-sm text-gray-500">District:</span>
// //                         <p>{property.location.district}</p>
// //                       </div>
// //                     )}
// //                     {property.location?.state && (
// //                       <div>
// //                         <span className="text-sm text-gray-500">State:</span>
// //                         <p>{property.location.state}</p>
// //                       </div>
// //                     )}
// //                     {property.location?.pincode && (
// //                       <div>
// //                         <span className="text-sm text-gray-500">Pincode:</span>
// //                         <p>{property.location.pincode}</p>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </address>
// //               </div>

// //               {/* Description */}
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold mb-3 font-sans">Description</h3>
// //                 <p className="text-gray-600 leading-relaxed">{property.description}</p>
// //               </div>

// //               {/* Additional Features */}
// //               {property.features && property.features.length > 0 && (
// //                 <div className="mb-6">
// //                   <h3 className="text-lg font-semibold mb-3 font-sans">Features</h3>
// //                   <div className="flex flex-wrap gap-2">
// //                     {property.features.map((feature, index) => (
// //                       <span 
// //                         key={index} 
// //                         className="px-3 py-1 bg-[#2b54a2] text-white rounded-full text-sm"
// //                       >
// //                         {feature}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div className="p-6 bg-gray-50 flex flex-col sm:flex-row gap-3">
// //           <button
// //             onClick={onClose}
// //             className="flex-1 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 font-medium transition-colors"
// //           >
// //             Close
// //           </button>
// //           <button
// //             onClick={handleContactViaWhatsApp}
// //             className="flex-1 px-6 py-3 bg-[#2b54a2] text-white rounded-md hover:bg-blue-700 font-medium transition-colors flex items-center justify-center gap-2"
// //           >
// //             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //               {/* <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.488c-1.547.909-2.723 2.142-3.976 3.724C3.44 11.59 2 14.322 2 17c0 1.373.264 2.645.764 3.865l.575 1.377.899-.149C7.9 21.584 10.487 21 12 21c4.694 0 8.845-3.797 9.465-8.66l.575-.097.227-.898c.5-2.22.764-3.492.764-3.865 0-4.694-3.797-8.845-8.66-9.465"/> */}
// //             </svg>
// //             Contact via WhatsApp
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";

// export default function Modal({ property, onClose, formatPrice }) {
//   const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  
//   if (!property) return null;

//   const allMedia = [
//     ...(property.images || []).map(img => ({ ...img, type: 'image' })),
//     ...(property.videos || []).map(video => ({ ...video, type: 'video' }))
//   ];

//   const handleContactViaWhatsApp = () => {
//     const phoneNumber = "918921840486";
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
//       className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] my-8"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Modal Header */}
//         <div className="flex justify-between items-start p-6">
//           <div>
//             <h2 className="text-2xl font-semibold mb-3 font-sans">{property.title}</h2>
//             <p className="text-[#2b54a2] text-xl font-semibold mt-1">
//               {formatPrice(property.price)}
//             </p>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Modal Body */}
//         <div className="flex flex-col lg:flex-row px-6 pb-6 max-h-[calc(90vh-140px)]">
          
//           {/* Left Column - Media Gallery */}
//           <div className="lg:w-2/3 pr-0 lg:pr-6 flex flex-col">
//             <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center min-h-[400px] max-h-[500px] overflow-hidden">
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
//                       className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
//                         selectedMediaIndex === index 
//                           ? 'border-blue-500' 
//                           : 'border-transparent hover:border-gray-300'
//                       }`}
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
//                                 <path d="M8 5v14l11-7z"/>
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
//           <div className="lg:w-1/3 mt-6 lg:mt-0">
//             <div className="sticky top-0 max-h-[calc(90vh-200px)] overflow-y-auto">
              
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
//                     <dd className={`font-medium ${
//                       property.status === "Available"
//                         ? "text-green-600"
//                         : property.status === "Reserved"
//                         ? "text-yellow-600"
//                         : "text-red-600"
//                     }`}>
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
//         <div className="p-6 bg-gray-50 flex flex-col sm:flex-row gap-3">
//           <button
//             onClick={onClose}
//             className="flex-1 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 font-medium transition-colors"
//           >
//             Close
//           </button>
//           <button
//             onClick={handleContactViaWhatsApp}
//             className="flex-1 px-6 py-3 bg-[#2b54a2] text-white rounded-md hover:bg-blue-700 font-medium transition-colors flex items-center justify-center gap-2"
//           >
//             Contact via WhatsApp
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function Modal({ property, onClose, formatPrice }) {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  
  if (!property) return null;

  const allMedia = [
    ...(property.images || []).map(img => ({ ...img, type: 'image' })),
    ...(property.videos || []).map(video => ({ ...video, type: 'video' }))
  ];

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

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full sm:max-w-2xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] my-4 sm:my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-start p-4 sm:p-6 border-b">
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">{property.title}</h2>
            <p className="text-[#2b54a2] text-lg sm:text-xl font-semibold">
              {formatPrice(property.price)}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-6 overflow-y-auto flex-1">
          
          {/* Left Column - Media Gallery */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center h-64 sm:h-96 lg:h-[500px] overflow-hidden">
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
                    poster={allMedia[selectedMediaIndex].thumbnail}
                    className="w-full h-full object-contain"
                  >
                    <source src={allMedia[selectedMediaIndex].url} type="video/mp4" />
                  </video>
                )
              ) : (
                <div className="text-gray-400">No media available</div>
              )}
            </div>

            {allMedia.length > 1 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3">Gallery</h3>
                <div className="flex overflow-x-auto pb-2 space-x-3">
                  {allMedia.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMediaIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
                        selectedMediaIndex === index 
                          ? 'border-blue-500' 
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
                            src={media.thumbnail}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover opacity-70"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
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

          {/* Right Column - Details */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="space-y-4 sm:space-y-6 overflow-y-auto">
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Property Details</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <dt className="text-gray-600">Plot Size:</dt>
                    <dd className="font-medium">{property.plotSize.toLocaleString()} sq.ft</dd>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <dt className="text-gray-600">Category:</dt>
                    <dd className="font-medium">{property.category}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <dt className="text-gray-600">Status:</dt>
                    <dd className={`font-medium ${
                      property.status === "Available"
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

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Location</h3>
                <address className="not-italic text-gray-600 space-y-2">
                  {property.location?.address && (
                    <p className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{property.location.address}</span>
                    </p>
                  )}
                  <div className="grid grid-cols-2 gap-2 pl-7">
                    {property.location?.city && (
                      <div>
                        <span className="text-sm text-gray-500">City:</span>
                        <p>{property.location.city}</p>
                      </div>
                    )}
                    {property.location?.district && (
                      <div>
                        <span className="text-sm text-gray-500">District:</span>
                        <p>{property.location.district}</p>
                      </div>
                    )}
                    {property.location?.state && (
                      <div>
                        <span className="text-sm text-gray-500">State:</span>
                        <p>{property.location.state}</p>
                      </div>
                    )}
                    {property.location?.pincode && (
                      <div>
                        <span className="text-sm text-gray-500">Pincode:</span>
                        <p>{property.location.pincode}</p>
                      </div>
                    )}
                  </div>
                </address>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {property.features && property.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-[#2b54a2] text-white rounded-full text-sm"
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

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t flex flex-col sm:flex-row gap-3 mt-auto">
          <button
            onClick={onClose}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-md hover:bg-gray-100 font-medium transition-colors text-sm sm:text-base"
          >
            Close
          </button>
          <button
            onClick={handleContactViaWhatsApp}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-[#2b54a2] text-white rounded-md hover:bg-blue-700 font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Contact via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}