
import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';
import { BASE_URL } from '../../utils/urls';

export default function Residential() {
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

  // Helper function to convert cent to sqft
  const convertToSqft = (size) => {
    return Math.round(size * 435.6);
  };

  // Helper function to display plot size
  const displayPlotSize = (plot) => {
    if (!plot.plotSize) return 'N/A';
    
    // If plotSize is an object with value and unit
    if (typeof plot.plotSize === 'object' && plot.plotSize.value) {
      const value = plot.plotSize.value;
      const unit = plot.plotSize.unit;
      
      if (unit === 'cent') {
        return `${value} cent (${convertToSqft(value).toLocaleString()} sq.ft)`;
      }
      return `${value.toLocaleString()} sq.ft`;
    }
    
    // Fallback for old format (just number)
    return `${plot.plotSize.toLocaleString()} sq.ft`;
  };

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
        category: 'Residential',
        approved: 'true',
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
    e.stopPropagation();
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
      {/* Header */}
      <div className="bg-gradient-to-r pt-20 from-[#2b54a2] to-[#1e3f78] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Residential Properties</h1>
          <p className="text-lg opacity-90">Find your dream home in the perfect neighborhood</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-50 py-6 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                placeholder="Enter city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                placeholder="Min"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                placeholder="Max"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2b54a2] bg-white"
              >
                <option value="-createdAt">Newest First</option>
                <option value="createdAt">Oldest First</option>
                <option value="price">Price: Low to High</option>
                <option value="-price">Price: High to Low</option>
                <option value="plotSize.value">Size: Small to Large</option>
                <option value="-plotSize.value">Size: Large to Small</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {!loading && plots.length > 0 && `Found ${plots.length} properties`}
              {wishlist.length > 0 && <span className="ml-4">♥ {wishlist.length} in Wishlist</span>}
            </div>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-[#2b54a2] text-white rounded-md hover:bg-[#1e3f78] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2b54a2] mx-auto mb-4"></div>
              <p>Loading properties...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && plots.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              We couldn't find any residential properties matching your criteria.
            </h3>
            <p className="text-gray-600 mb-6">But don't worry, your dream home is out there!</p>
            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-[#2b54a2] text-white rounded-lg hover:bg-[#1e3f78] transition-colors"
            >
              Reset & Start Fresh
            </button>
          </div>
        )}

        {/* Properties Grid */}
        {!loading && !error && plots.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plots.map((plot) => (
                <div
                  key={plot._id}
                  onClick={() => openModal(plot)}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    {plot.images && plot.images.length > 0 ? (
                      (() => {
                        const first = plot.images[0];
                        const src = typeof first === 'string' ? first : first.url;
                        const alt = typeof first === 'string' ? plot.title : (first.alt || plot.title);
                        return (
                          <img
                            src={src}
                            alt={alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        );
                      })()
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>No image available</span>
                      </div>
                    )}

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => toggleWishlist(plot._id, e)}
                      className="absolute top-3 left-3 z-20 p-1 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
                      title={wishlist.includes(plot._id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      {wishlist.includes(plot._id) ? (
                        <span className="text-red-500 text-xl">♥</span>
                      ) : (
                        <span className="text-gray-400 text-xl">♡</span>
                      )}
                    </button>

                    {/* Status Badge */}
                    <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {plot.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{plot.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{plot.description}</p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>
                        <span className="font-medium">Size:</span> {displayPlotSize(plot)}
                      </p>
                      <p>
                        <span className="font-medium">Location:</span> {plot.location?.city || 'N/A'}
                      </p>
                    </div>
                    <div className="text-xl font-bold text-[#2b54a2]">
                      {formatPrice(plot.price)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedPlot.title}</h2>
                <p className="text-2xl font-bold text-[#2b54a2] mt-2">{formatPrice(selectedPlot.price)}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Images */}
              {selectedPlot.images && selectedPlot.images.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Images</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedPlot.images.map((img, index) => {
                      const src = typeof img === 'string' ? img : img.url;
                      const alt = typeof img === 'string' ? `Property ${index + 1}` : (img.alt || `Property ${index + 1}`);
                      return (
                        <img
                          key={index}
                          src={src}
                          alt={alt}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Videos */}
              {selectedPlot.videos && selectedPlot.videos.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Videos</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedPlot.videos.map((video, index) => {
                      const src = typeof video === 'string' ? video : video.url;
                      return (
                        <video
                          key={index}
                          width="100%"
                          height="auto"
                          controls
                          className="rounded-lg"
                        >
                          <source src={src} />
                        </video>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Property Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Plot Size:</p>
                    <p className="font-semibold">{displayPlotSize(selectedPlot)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Category:</p>
                    <p className="font-semibold">{selectedPlot.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status:</p>
                    <p className="font-semibold">{selectedPlot.status}</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Location</h3>
                <div className="space-y-2 text-gray-700">
                  {selectedPlot.location?.address && <p>{selectedPlot.location.address}</p>}
                  {selectedPlot.location?.city && <p>{selectedPlot.location.city}</p>}
                  {selectedPlot.location?.district && <p>{selectedPlot.location.district}</p>}
                  {selectedPlot.location?.state && <p>{selectedPlot.location.state}</p>}
                  {selectedPlot.location?.pincode && <p>{selectedPlot.location.pincode}</p>}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-700">{selectedPlot.description}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex gap-4">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
              <button className="flex-1 px-6 py-2 bg-[#2b54a2] text-white rounded-lg hover:bg-[#1e3f78] transition-colors font-medium">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}