
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { BASE_URL } from '../../utils/urls';

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    plotSize: {
      value: '',
      unit: 'sqft',
    },
    price: '',
    category: 'Residential',
    status: 'Available',
    location: {
      address: '',
      city: '',
      district: '',
      state: '',
      pincode: ''
    },
    images: [],
    videos: []
  });

  const [imageInput, setImageInput] = useState({ url: '', alt: '' });
  const [videoInput, setVideoInput] = useState({ url: '', thumbnail: '', duration: '', alt: '' });
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('location.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        location: { ...prev.location, [field]: value }
      }));
    }
    else if (name.startsWith('plotSize.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        plotSize: { ...prev.plotSize, [field]: value }
      }));
    } 
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const addImage = () => {
    if (imageInput.url) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageInput]
      }));
      setImageInput({ url: '', alt: '' });
    }
  };

  const handleMultipleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploadingImage(true);

    try {
      const uploadedImages = [];

      for (let file of files) {
        const formDataObj = new FormData();
        formDataObj.append("file", file);

        const res = await fetch(`${BASE_URL}/upload/image`, {
          method: "POST",
          body: formDataObj,
        });

        const data = await res.json();

        if (data.success) {
          uploadedImages.push({
            url: data.data.url,
            alt: file.name,
          });
        }
      }

      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...uploadedImages],
      }));

      setMessage({ type: "success", text: `${uploadedImages.length} image(s) uploaded!` });
    } catch (err) {
      console.log(err);
      setMessage({ type: "error", text: "Upload failed." });
    }

    setUploadingImage(false);
    e.target.value = "";
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const addVideo = () => {
    if (videoInput.url) {
      setFormData(prev => ({
        ...prev,
        videos: [...prev.videos, {
          ...videoInput,
          duration: videoInput.duration ? Number(videoInput.duration) : undefined
        }]
      }));
      setVideoInput({ url: '', thumbnail: '', duration: '', alt: '' });
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingVideo(true);
    const formDataObj = new FormData();
    formDataObj.append('file', file);

    try {
      const response = await fetch(`${BASE_URL}/upload/video`, {
        method: 'POST',
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setFormData(prev => ({
          ...prev,
          videos: [...prev.videos, { 
            url: data.data.url, 
            thumbnail: videoInput.thumbnail || '',
            duration: videoInput.duration ? Number(videoInput.duration) : undefined,
            alt: videoInput.alt || file.name 
          }]
        }));
        setVideoInput({ url: '', thumbnail: '', duration: '', alt: '' });
        setMessage({ type: 'success', text: 'Video uploaded and added!' });
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
      } else {
        setMessage({ type: 'error', text: data.message || 'Upload failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Upload error. Please try again.' });
      console.error('Upload error:', error);
    } finally {
      setUploadingVideo(false);
      e.target.value = '';
    }
  };

  const removeVideo = (index) => {
    setFormData(prev => ({
      ...prev,
      videos: prev.videos.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Client-side validation
    if (!formData.title.trim()) {
      setMessage({ type: 'error', text: 'Title is required' });
      setLoading(false);
      return;
    }
    if (!formData.description.trim()) {
      setMessage({ type: 'error', text: 'Description is required' });
      setLoading(false);
      return;
    }
    if (!formData.plotSize.value || formData.plotSize.value === '') {
      setMessage({ type: 'error', text: 'Plot size value is required' });
      setLoading(false);
      return;
    }
    if (!formData.price || formData.price === '') {
      setMessage({ type: 'error', text: 'Price is required' });
      setLoading(false);
      return;
    }
    if (!formData.category) {
      setMessage({ type: 'error', text: 'Category is required' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/plot/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          plotSize: {
            value: Number(formData.plotSize.value),
            unit: formData.plotSize.unit,
          },
          price: Number(formData.price),
          postedBy: '673b1234567890abcdef1234'
        })
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Property added successfully!' });
        setFormData({
          title: '',
          description: '',
          plotSize: {
            value: '',
            unit: 'sqft',
          },
          price: '',
          category: 'Residential',
          status: 'Available',
          location: {
            address: '',
            city: '',
            district: '',
            state: '',
            pincode: ''
          },
          images: [],
          videos: []
        });
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to add property' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#2b54a2] md:pt-20 pb-10 pt-20">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-6 text-[#2b54a2]">Add New Property</h1>

          {message.text && (
            <div
              className={`mb-6 rounded-md px-4 py-3 border ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-red-50 text-red-800 border-red-200'
              }`}
              role="status"
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Basic Information */}
            <div>
              <label className="block text-sm font-medium mb-1">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Plot Size *</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="plotSize.value"
                    value={formData.plotSize.value}
                    onChange={handleChange}
                    required
                    placeholder="Enter size"
                    className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                  />
                  <select
                    name="plotSize.unit"
                    value={formData.plotSize.unit}
                    onChange={handleChange}
                    className="px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                  >
                    <option value="sqft">Sq.ft</option>
                    <option value="cent">Cent</option>
                  </select>
                </div>
                <p className="text-xs text-gray-500 mt-1">1 Cent = 435.6 Sq.ft</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Price *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                >
                  <option value="Available">Available</option>
                  <option value="Reserved">Reserved</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <h3 className="mt-4 mb-2 text-lg font-medium">Location</h3>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="location.address"
                value={formData.location.address}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="location.city"
                  value={formData.location.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">District</label>
                <input
                  type="text"
                  name="location.district"
                  value={formData.location.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  name="location.state"
                  value={formData.location.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Pincode</label>
                <input
                  type="text"
                  name="location.pincode"
                  value={formData.location.pincode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>
            </div>

            {/* Images */}
            <h3 className="mt-4 mb-2 text-lg font-medium">Images</h3>

            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="url"
                  value={imageInput.url}
                  onChange={(e) => setImageInput(prev => ({ ...prev, url: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-sm font-medium mb-1">Alt Text</label>
                <input
                  type="text"
                  value={imageInput.alt}
                  onChange={(e) => setImageInput(prev => ({ ...prev, alt: e.target.value }))}
                  placeholder="Description"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>
              <button
                type="button"
                onClick={addImage}
                className="inline-flex items-center px-4 py-2 bg-[#2b54a2] text-white rounded-md hover:bg-[#1e3f7a] focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              >
                Add Image
              </button>
            </div>

            <div className="mt-2">
              <label className="block text-sm font-medium mb-1">Or Upload Image</label>
              <div className="flex gap-2 items-center">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/jpg,image/webp"
                  multiple
                  onChange={handleMultipleImageUpload}
                  className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
                {uploadingImage && (
                  <span className="text-sm text-gray-600">Uploading...</span>
                )}
              </div>
            </div>

            {formData.images.length > 0 && (
              <div className="mt-2">
                <strong>Added Images:</strong>
                <ul className="mt-2 space-y-2">
                  {formData.images.map((img, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="truncate pr-4">{img.url} {img.alt && `(${img.alt})`}</span>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Videos */}
            <h3 className="mt-4 mb-2 text-lg font-medium">Videos</h3>

            <div className="grid gap-4 md:grid-cols-6 items-end">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Video URL</label>
                <input
                  type="url"
                  value={videoInput.url}
                  onChange={(e) => setVideoInput(prev => ({ ...prev, url: e.target.value }))}
                  placeholder="https://example.com/video.mp4"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium mb-1">Thumbnail</label>
                <input
                  type="url"
                  value={videoInput.thumbnail}
                  onChange={(e) => setVideoInput(prev => ({ ...prev, thumbnail: e.target.value }))}
                  placeholder="Thumbnail URL"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium mb-1">Duration (sec)</label>
                <input
                  type="number"
                  value={videoInput.duration}
                  onChange={(e) => setVideoInput(prev => ({ ...prev, duration: e.target.value }))}
                  placeholder="45"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium mb-1">Alt Text</label>
                <input
                  type="text"
                  value={videoInput.alt}
                  onChange={(e) => setVideoInput(prev => ({ ...prev, alt: e.target.value }))}
                  placeholder="Description"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
              </div>

              <div className="md:col-span-1">
                <button
                  type="button"
                  onClick={addVideo}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#2b54a2] text-white rounded-md hover:bg-[#1e3f7a] focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                >
                  Add Video
                </button>
              </div>
            </div>

            <div className="mt-2">
              <label className="block text-sm font-medium mb-1">Or Upload Video</label>
              <div className="flex gap-2 items-center">
                <input
                  type="file"
                  accept="video/mp4,video/webm,video/ogg"
                  onChange={handleVideoUpload}
                  disabled={uploadingVideo}
                  className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
                />
                {uploadingVideo && (
                  <span className="text-sm text-gray-600">Uploading...</span>
                )}
              </div>
            </div>

            {formData.videos.length > 0 && (
              <div className="mt-2">
                <strong>Added Videos:</strong>
                <ul className="mt-2 space-y-2">
                  {formData.videos.map((video, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="truncate pr-4">{video.url} {video.duration && `(${video.duration}s)`} {video.alt && `- ${video.alt}`}</span>
                      <button
                        type="button"
                        onClick={() => removeVideo(index)}
                        className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              aria-disabled={loading}
              className={`mt-6 px-5 py-3 text-base font-semibold rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#2b54a2] ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2b54a2] hover:bg-[#1e3f7a]'
              }`}
            >
              {loading ? 'Adding Property...' : 'Add Property'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}