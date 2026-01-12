import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Search, ArrowLeft, House } from "lucide-react";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-8 cursor-pointer" onClick={() => navigate("/")}>
        <img
          src="/assets/realtybureau.png"
          alt="RealtyBureau"
          className="h-12 md:h-16"
        />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Illustration */}
        <div className="mb-10 flex justify-center">
          <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center">
            <House className="w-24 h-24 text-blue-500" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Homepage
          </button>
          
          <button
            onClick={() => navigate("/residential")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Properties
          </button>
        </div>

        {/* Contact Info */}
        <div className="text-gray-500 text-sm">
          Need help? Contact us at{" "}
          <a href="mailto:support@realtybureau.com" className="text-blue-600 hover:underline">
            support@realtybureau.com
          </a>
        </div>
      </div>
    </div>
  );
};