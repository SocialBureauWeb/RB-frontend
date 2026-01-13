
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  User,
  Heart,
  Menu,
  X,
  LogOut,
  ChevronDown
} from "lucide-react";
import { BASE_URL } from "../../utils/urls";

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  /* -------------------- EFFECTS -------------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Failed to parse user data", err);
      }
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch(`${BASE_URL}/api/wishlist`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) {
          setWishlist(data.wishlist);
        }
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      }
    };

    if (user) {
      fetchWishlist();
    }
  }, [user]);

  /* -------------------- HANDLERS -------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch?.(value.trim());
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowLogoutConfirm(false);
    setShowUserDropdown(false);
    navigate("/");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
    setMenuOpen(false);
  };

  const handleUserClick = () => {
    if (user) {
      setShowUserDropdown(!showUserDropdown);
    } else {
      navigate("/login");
    }
  };

  /* -------------------- STYLES -------------------- */
  const headerClasses = scrolled
    ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
    : "bg-gradient-to-b from-black/70 to-black/10 backdrop-blur-md";

  const textColor = scrolled ? "text-gray-800" : "text-white";
  const brandFilter = scrolled ? "" : "brightness(0) invert(1)";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">

            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/assets/realtybureau.png"
                alt="RealtyBureau"
                className="h-8 md:h-10 transition-all duration-300"
                style={{ filter: brandFilter }}
              />
            </div>

            {/* Desktop Search */}
            <form
              onSubmit={handleSubmit}
              className="hidden lg:flex flex-1 max-w-2xl mx-6"
            >
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Search properties, locations, or amenities..."
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${scrolled ? 'border-gray-200 bg-gray-50 text-gray-900' : 'border-white/30 bg-white/10 text-white placeholder-white/70'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                <button
                  type="submit"
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 rounded-lg font-medium transition-all ${scrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'}`}
                >
                  Search
                </button>
              </div>
            </form>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Wishlist Button */}
              <button
                onClick={handleWishlistClick}
                className={`relative p-2 rounded-lg transition-all hover:scale-105 group ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
              >
                <Heart className={`w-6 h-6 ${textColor} group-hover:text-red-500 transition-colors`} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => navigate("/about")}
                className={`px-3 py-2 rounded-xl transition-all font-medium ${textColor} ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
              >
                About
              </button>

              {/* User Actions */}
              <div className="relative">
                <button
                  onClick={handleUserClick}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
                >
                  {user ? (
                    <>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${scrolled ? 'bg-blue-100 text-blue-600' : 'bg-white/20 text-white'}`}>
                        <span className="font-medium text-sm">
                          {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                        </span>
                      </div>
                      <span className={`font-medium ${textColor} hidden xl:inline`}>
                        {user.name?.split(" ")[0] || user.email?.split("@")[0]}
                      </span>
                      <ChevronDown className={`w-4 h-4 ${textColor} transition-transform ${showUserDropdown ? 'rotate-180' : ''}`} />
                    </>
                  ) : (
                    <>
                      <User className={`w-6 h-6 ${textColor}`} />
                      <span className={`font-medium ${textColor}`}>
                        Log in
                      </span>
                    </>
                  )}
                </button>

                {/* User Dropdown */}
                {user && showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                          {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      <button
                        onClick={() => navigate("/profile")}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        My Profile
                      </button>
                      <button
                        onClick={handleWishlistClick}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        My Wishlist
                      </button>
                      {/* <button 
                        onClick={() => navigate("/residential")}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        My Properties
                      </button> */}
                    </div>

                    <div className="p-2 border-t border-gray-100">
                      <button
                        onClick={() => setShowLogoutConfirm(true)}
                        className="w-full text-left px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {!user && (
                <button
                  onClick={() => navigate("/login")}
                  className={`px-4 py-2.5 rounded-xl font-medium transition-all ${scrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
                >
                  Sign up
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className={`w-6 h-6 ${textColor}`} />
              ) : (
                <Menu className={`w-6 h-6 ${textColor}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-2xl animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 py-4">
              {/* Mobile Search */}
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search properties..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-lg font-medium"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Mobile Menu Items */}
              <div className="space-y-1">
                <button
                  onClick={() => { navigate("/about"); setMenuOpen(false); }}
                  className="w-full flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-medium text-gray-900">About Us</span>
                </button>
                <button
                  onClick={handleWishlistClick}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-gray-900">Wishlist</span>
                  </div>
                  {wishlist.length > 0 && (
                    <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">{wishlist.length}</span>
                  )}
                </button>

                {user ? (
                  <>
                    <div className="px-4 py-3 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                          {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate("/profile")}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={handleWishlistClick}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      My Wishlist
                    </button>
                    <button
                      onClick={() => navigate("/properties")}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      My Properties
                    </button>

                    <button
                      onClick={() => setShowLogoutConfirm(true)}
                      className="w-full flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors text-red-600"
                    >
                      <LogOut className="w-5 h-5" />
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => navigate("/login")}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      Log in
                    </button>
                    <button
                      onClick={() => navigate("/login")}
                      className="w-full text-left px-4 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-scaleIn">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Confirm Logout
              </h3>
              <p className="text-gray-600">
                Are you sure you want to log out of your account?
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}

    </>
  );
}