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