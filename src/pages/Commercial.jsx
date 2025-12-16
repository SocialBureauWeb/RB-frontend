// import React, { useState, useEffect } from 'react';
// import { BASE_URL } from '../../utils/urls';
// import PropertyCard from '../components/PropertyCard';
// import Navbar from '../components/Navbar';

// export default function Commercial() {
//   const [plots, setPlots] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     city: '',
//     minPrice: '',
//     maxPrice: '',
//     status: '',
//     sort: '-createdAt'
//   });
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedPlot, setSelectedPlot] = useState(null);

//   useEffect(() => {
//     fetchPlots();
//   }, [page, filters]);

//   const fetchPlots = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const params = new URLSearchParams({
//         category: 'Commercial',
//         page: page.toString(),
//         limit: '12',
//         // approved: 'true', // Commented out to show all properties including unapproved
//         ...Object.fromEntries(
//           Object.entries(filters).filter(([_, v]) => v !== '')
//         )
//       });

//       const response = await fetch(`${BASE_URL}/plot?${params}`);
//       const data = await response.json();

//       if (data.success) {
//         setPlots(data.data);
//         setTotalPages(data.meta.pages);
//       } else {
//         setError(data.message || 'Failed to fetch properties');
//       }
//     } catch (err) {
//       setError('Network error. Please try again.');
//       console.error('Fetch error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({ ...prev, [key]: value }));
//     setPage(1);
//   };

//   const resetFilters = () => {
//     setFilters({
//       city: '',
//       minPrice: '',
//       maxPrice: '',
//       status: '',
//       sort: '-createdAt'
//     });
//     setPage(1);
//   };

//   const formatPrice = (price) => {
//     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
//     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
//     return `₹${price.toLocaleString('en-IN')}`;
//   };

//   const openModal = (plot) => {
//     setSelectedPlot(plot);
//   };

//   const closeModal = () => {
//     setSelectedPlot(null);
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen bg-gray-50 ">
//       {/* Header */}
//       <div className="bg-[#2b54a2] text-white py-12 pt-30">
//         <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#d4a73b]">Commercial Properties</h1>
//           <p className="text-white max-w-2xl leading-relaxed">Discover the perfect commercial space for your business</p>
//         </div>
//       </div>

//       <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//               <input
//                 type="text"
//                 value={filters.city}
//                 onChange={(e) => handleFilterChange('city', e.target.value)}
//                 placeholder="Enter city"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
//               <input
//                 type="number"
//                 value={filters.minPrice}
//                 onChange={(e) => handleFilterChange('minPrice', e.target.value)}
//                 placeholder="Min"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
//               <input
//                 type="number"
//                 value={filters.maxPrice}
//                 onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
//                 placeholder="Max"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//               <select
//                 value={filters.status}
//                 onChange={(e) => handleFilterChange('status', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2] bg-white"
//               >
//                 <option value="">All</option>
//                 <option value="Available">Available</option>
//                 <option value="Reserved">Reserved</option>
//                 <option value="Sold">Sold</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
//               <select
//                 value={filters.sort}
//                 onChange={(e) => handleFilterChange('sort', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2] bg-white"
//               >
//                 <option value="-createdAt">Newest First</option>
//                 <option value="createdAt">Oldest First</option>
//                 <option value="price">Price: Low to High</option>
//                 <option value="-price">Price: High to Low</option>
//                 <option value="plotSize">Size: Small to Large</option>
//                 <option value="-plotSize">Size: Large to Small</option>
//               </select>
//             </div>
//           </div>

//           <div className="mt-4 flex justify-between items-center">
//             <p className="text-sm text-gray-600">
//               {!loading && plots.length > 0 && `Found ${plots.length} properties`}
//             </p>
//             <button
//               onClick={resetFilters}
//               className="px-4 py-2 text-sm text-[#2b54a2] hover:text-green-700 font-medium"
//             >
//               Reset Filters
//             </button>
//           </div>
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div className="text-center py-12">
//             <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#2b54a2]"></div>
//             <p className="mt-4 text-gray-600">Loading properties...</p>
//           </div>
//         )}

//         {/* Error State */}
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-8">
//             {error}
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && !error && plots.length === 0 && (
//           <div className="text-center py-16 bg-white rounded-lg shadow-sm">
//             <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//             </svg>
//             <p className="mt-3 text-gray-600 max-w-md mx-auto">
//               We couldn't find any commercial properties matching your criteria. 
//               <br />
//               <span className="text-[#2b54a2] font-medium">But don't worry, your perfect space is out there!</span>
//             </p>
//             <button
//               onClick={resetFilters}
//               className="mt-6 px-6 py-3 bg-[#2b54a2] text-white rounded-md hover:bg-green-700 font-medium transition-colors"
//             >
//               Reset & Start Fresh
//             </button>
//           </div>
//         )}

//         {/* Properties Grid */}
//         {!loading && !error && plots.length > 0 && (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
//               {plots.map((plot) => (
//                 <div
//                   key={plot._id}
//                   onClick={() => openModal(plot)}
//                   className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
//                 >
//                   {/* Image */}
//                   <div className="relative h-48 bg-gray-200 overflow-hidden">
//                     {plot.images && plot.images.length > 0 ? (
//                       <img
//                         src={plot.images[0].url}
//                         alt={plot.images[0].alt || plot.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center bg-gray-300">
//                         <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                         </svg>
//                       </div>
//                     )}
                    
//                     {/* Status Badge */}
//                     <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded ${
//                       plot.status === 'Available' ? 'bg-[#2b54a2] text-white' :
//                       plot.status === 'Reserved' ? 'bg-yellow-500 text-white' :
//                       'bg-red-500 text-white'
//                     }`}>
//                       {plot.status}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{plot.title}</h3>
//                     <p className="text-sm text-gray-600 mb-3 line-clamp-2">{plot.description}</p>
                    
//                     <div className="flex items-center justify-between text-sm mb-2">
//                       <span className="text-gray-500">Size:</span>
//                       <span className="font-medium text-gray-900">{plot.plotSize.toLocaleString()} sq.ft</span>
//                     </div>

//                     <div className="flex items-center justify-between text-sm mb-3">
//                       <span className="text-gray-500">Location:</span>
//                       <span className="font-medium text-gray-900 truncate ml-2">{plot.location?.city || 'N/A'}</span>
//                     </div>

//                     <div className="pt-3 border-t border-gray-100">
//                       <div className="text-2xl font-bold text-[#2b54a2]">{formatPrice(plot.price)}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-center items-center gap-2">
//                 <button
//                   onClick={() => setPage(p => Math.max(1, p - 1))}
//                   disabled={page === 1}
//                   className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
//                 >
//                   Previous
//                 </button>
                
//                 <div className="flex gap-2">
//                   {[...Array(totalPages)].map((_, i) => (
//                     <button
//                       key={i + 1}
//                       onClick={() => setPage(i + 1)}
//                       className={`w-10 h-10 rounded-md ${
//                         page === i + 1
//                           ? 'bg-[#2b54a2] text-white'
//                           : 'border border-gray-300 hover:bg-gray-50'
//                       }`}
//                     >
//                       {i + 1}
//                     </button>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => setPage(p => Math.min(totalPages, p + 1))}
//                   disabled={page === totalPages}
//                   className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Modal */}
//       {selectedPlot && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg max-w-4xl w-full my-8"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="flex justify-between items-start p-6 border-b">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">{selectedPlot.title}</h2>
//                 <p className="text-[#2b54a2] text-xl font-semibold mt-1">{formatPrice(selectedPlot.price)}</p>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Modal Body */}
//             <div className="p-6 max-h-[70vh] overflow-y-auto">
//               {/* Images */}
//               {selectedPlot.images && selectedPlot.images.length > 0 && (
//                 <div className="mb-6">
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     {selectedPlot.images.map((img, index) => (
//                       <img
//                         key={index}
//                         src={img.url}
//                         alt={img.alt || selectedPlot.title}
//                         className="w-full h-48 object-cover rounded-lg"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Videos */}
//               {selectedPlot.videos && selectedPlot.videos.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-3">Videos</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {selectedPlot.videos.map((video, index) => (
//                       <video
//                         key={index}
//                         controls
//                         poster={video.thumbnail}
//                         className="w-full rounded-lg"
//                       >
//                         <source src={video.url} type="video/mp4" />
//                       </video>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Details */}
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <h3 className="text-lg font-semibold mb-3">Property Details</h3>
//                   <dl className="space-y-2">
//                     <div className="flex justify-between">
//                       <dt className="text-gray-600">Plot Size:</dt>
//                       <dd className="font-medium">{selectedPlot.plotSize.toLocaleString()} sq.ft</dd>
//                     </div>
//                     <div className="flex justify-between">
//                       <dt className="text-gray-600">Category:</dt>
//                       <dd className="font-medium">{selectedPlot.category}</dd>
//                     </div>
//                     <div className="flex justify-between">
//                       <dt className="text-gray-600">Status:</dt>
//                       <dd className={`font-medium ${
//                         selectedPlot.status === 'Available' ? 'text-green-600' :
//                         selectedPlot.status === 'Reserved' ? 'text-yellow-600' :
//                         'text-red-600'
//                       }`}>
//                         {selectedPlot.status}
//                       </dd>
//                     </div>
//                   </dl>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold mb-3">Location</h3>
//                   <address className="not-italic text-gray-600 space-y-1">
//                     {selectedPlot.location?.address && <p>{selectedPlot.location.address}</p>}
//                     {selectedPlot.location?.city && <p>{selectedPlot.location.city}</p>}
//                     {selectedPlot.location?.district && <p>{selectedPlot.location.district}</p>}
//                     {selectedPlot.location?.state && <p>{selectedPlot.location.state}</p>}
//                     {selectedPlot.location?.pincode && <p>{selectedPlot.location.pincode}</p>}
//                   </address>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Description</h3>
//                 <p className="text-gray-600">{selectedPlot.description}</p>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="p-6 border-t bg-gray-50 flex gap-3">
//               <button
//                 onClick={closeModal}
//                 className="flex-1 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 font-medium"
//               >
//                 Close
//               </button>
//               <button
//                 className="flex-1 px-6 py-3 bg-[#2b54a2] text-white rounded-md hover:bg-green-700 font-medium"
//               >
//                 Contact Agent
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </>
//   );
// }



import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/urls';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';

export default function Commercial() {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [filters, setFilters] = useState({
    city: '',
    minPrice: '',
    maxPrice: '',
    status: '',
    sort: '-createdAt'
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedPlot, setSelectedPlot] = useState(null);

  // Load wishlist from backend on component mount
  useEffect(() => {
    loadWishlist();
  }, []);

  // Fetch plots whenever page or filters change
  useEffect(() => {
    fetchPlots();
  }, [page, filters]);

  const fetchPlots = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        category: 'Commercial',
        page: page.toString(),
        limit: '12',
        ...Object.fromEntries(
          Object.entries(filters).filter(([_, v]) => v !== '')
        )
      });

      const response = await fetch(`${BASE_URL}/plot?${params}`);
      const data = await response.json();

      if (data.success) {
        setPlots(data.data);
        setTotalPages(data.meta.pages);
      } else {
        setError(data.message || 'Failed to fetch properties');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load wishlist from backend
  const loadWishlist = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found - user not logged in');
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/wishlist`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      if (data.success && Array.isArray(data.wishlist)) {
        // Extract IDs if wishlist contains objects, otherwise use directly
        const ids = data.wishlist.map(item => 
          typeof item === 'string' ? item : item._id
        );
        setWishlist(ids);
      }
    } catch (err) {
      console.error('Failed to load wishlist:', err);
    }
  };

  // Toggle wishlist (add/remove)
  const toggleWishlist = async (plotId, e) => {
    e.stopPropagation(); // Prevent opening modal

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to use wishlist');
      return;
    }

    const isWished = wishlist.includes(plotId);
    const endpoint = isWished ? 'remove' : 'add';

    try {
      const res = await fetch(`${BASE_URL}/api/wishlist/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ plotId })
      });

      const data = await res.json();

      if (data.success) {
        if (isWished) {
          setWishlist(prev => prev.filter(id => id !== plotId));
        } else {
          setWishlist(prev => [...prev, plotId]);
        }
      } else {
        alert(data.message || 'Failed to update wishlist');
      }
    } catch (err) {
      console.error('Wishlist error:', err);
      alert('Error updating wishlist. Please try again.');
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const resetFilters = () => {
    setFilters({
      city: '',
      minPrice: '',
      maxPrice: '',
      status: '',
      sort: '-createdAt'
    });
    setPage(1);
  };

  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const openModal = (plot) => {
    setSelectedPlot(plot);
  };

  const closeModal = () => {
    setSelectedPlot(null);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#2b54a2] text-white py-12 pt-30">
        <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#d4a73b]">Commercial Properties</h1>
          <p className="text-white max-w-2xl leading-relaxed">Discover the perfect commercial space for your business</p>
        </div>
      </div>

      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                placeholder="Enter city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                placeholder="Min"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                placeholder="Max"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2] bg-white"
              >
                <option value="">All</option>
                <option value="Available">Available</option>
                <option value="Reserved">Reserved</option>
                <option value="Sold">Sold</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2] bg-white"
              >
                <option value="-createdAt">Newest First</option>
                <option value="createdAt">Oldest First</option>
                <option value="price">Price: Low to High</option>
                <option value="-price">Price: High to Low</option>
                <option value="plotSize">Size: Small to Large</option>
                <option value="-plotSize">Size: Large to Small</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {!loading && plots.length > 0 && `Found ${plots.length} properties`}
              {wishlist.length > 0 && <span className="ml-4 font-medium text-[#2b54a2]">♥ {wishlist.length} in Wishlist</span>}
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm text-[#2b54a2] hover:text-green-700 font-medium"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#2b54a2]"></div>
            <p className="mt-4 text-gray-600">Loading properties...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-8">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && plots.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p className="mt-3 text-gray-600 max-w-md mx-auto">
              We couldn't find any commercial properties matching your criteria. 
              <br />
              <span className="text-[#2b54a2] font-medium">But don't worry, your perfect space is out there!</span>
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-6 py-3 bg-[#2b54a2] text-white rounded-md hover:bg-green-700 font-medium transition-colors"
            >
              Reset & Start Fresh
            </button>
          </div>
        )}

        {/* Properties Grid */}
        {!loading && !error && plots.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {plots.map((plot) => (
                <div
                  key={plot._id}
                  onClick={() => openModal(plot)}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    {plot.images && plot.images.length > 0 ? (
                      <img
                        src={plot.images[0].url}
                        alt={plot.images[0].alt || plot.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    )}

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => toggleWishlist(plot._id, e)}
                      className="absolute top-3 left-3 z-20 p-1 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
                      title={wishlist.includes(plot._id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      {wishlist.includes(plot._id) ? (
                        <svg className="w-6 h-6 text-red-500 fill-red-500" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.63 2.09-4.5 4.5-4.5 1.74 0 3.41 1.01 4.5 2.09C12.09 5.01 13.76 4 15.5 4 17.91 4 20 5.87 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.87 4.09 4 6.5 4c1.74 0 3.41 1.01 4.5 2.09C12.09 5.01 13.76 4 15.5 4 17.91 4 20 5.87 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      )}
                    </button>

                    {/* Status Badge */}
                    <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded ${
                      plot.status === 'Available' ? 'bg-[#2b54a2] text-white' :
                      plot.status === 'Reserved' ? 'bg-yellow-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {plot.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{plot.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{plot.description}</p>
                    
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-500">Size:</span>
                      <span className="font-medium text-gray-900">{plot.plotSize.toLocaleString()} sq.ft</span>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Location:</span>
                      <span className="font-medium text-gray-900 truncate ml-2">{plot.location?.city || 'N/A'}</span>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="text-2xl font-bold text-[#2b54a2]">{formatPrice(plot.price)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setPage(i + 1)}
                      className={`w-10 h-10 rounded-md ${
                        page === i + 1
                          ? 'bg-[#2b54a2] text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal */}
      {selectedPlot && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedPlot.title}</h2>
                <p className="text-[#2b54a2] text-xl font-semibold mt-1">{formatPrice(selectedPlot.price)}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {/* Images */}
              {selectedPlot.images && selectedPlot.images.length > 0 && (
                <div className="mb-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedPlot.images.map((img, index) => (
                      <img
                        key={index}
                        src={img.url}
                        alt={img.alt || selectedPlot.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {selectedPlot.videos && selectedPlot.videos.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Videos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedPlot.videos.map((video, index) => (
                      <video
                        key={index}
                        controls
                        poster={video.thumbnail}
                        className="w-full rounded-lg"
                      >
                        <source src={video.url} type="video/mp4" />
                      </video>
                    ))}
                  </div>
                </div>
              )}

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Property Details</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Plot Size:</dt>
                      <dd className="font-medium">{selectedPlot.plotSize.toLocaleString()} sq.ft</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Category:</dt>
                      <dd className="font-medium">{selectedPlot.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Status:</dt>
                      <dd className={`font-medium ${
                        selectedPlot.status === 'Available' ? 'text-green-600' :
                        selectedPlot.status === 'Reserved' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {selectedPlot.status}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Location</h3>
                  <address className="not-italic text-gray-600 space-y-1">
                    {selectedPlot.location?.address && <p>{selectedPlot.location.address}</p>}
                    {selectedPlot.location?.city && <p>{selectedPlot.location.city}</p>}
                    {selectedPlot.location?.district && <p>{selectedPlot.location.district}</p>}
                    {selectedPlot.location?.state && <p>{selectedPlot.location.state}</p>}
                    {selectedPlot.location?.pincode && <p>{selectedPlot.location.pincode}</p>}
                  </address>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-600">{selectedPlot.description}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 font-medium"
              >
                Close
              </button>
              <button
                className="flex-1 px-6 py-3 bg-[#2b54a2] text-white rounded-md hover:bg-green-700 font-medium"
              >
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}