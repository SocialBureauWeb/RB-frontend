// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar({ onSearch }) {
//   const [value, setValue] = useState("");
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll(); // check on load
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch?.(value);

//     // Close the mobile menu after searching on small screens
//     // (768px is the Tailwind md breakpoint used above)
//     if (typeof window !== "undefined" && window.innerWidth < 768) {
//       setMenuOpen(false);
//     }
//   };
// const navigate = useNavigate();
//   return (
//     <header
//       className={`fixed top-0 z-50 w-full transition-all duration-200 backdrop-blur-md ${
//         scrolled
//           ? "bg-[#2b55a2ee] text-slate-900 shadow-sm"
//           : "bg-gradient-to-b from-black/28 to-black/8 text-white"
//       }`}
//     >
//       <div className="mx-auto px-4 sm:px-6 max-w-[90vw]">
//         <div className="flex items-center justify-between gap-4">
//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2 text-2xl text-current rounded-md hover:bg-white/10"
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//             onClick={() => setMenuOpen((s) => !s)}
//           >
//             ☰
//           </button>

//           {/* Brand */}
//           <div className="flex-shrink-0 font-extrabold text-lg tracking-wide">
//            <img src="/assets/realtybureau.png" alt="RealtyBureau" className="h-20" onClick={()=>navigate('/')}/>
//           </div>

//           {/* Search form: visible on md and up; hidden on mobile */}
          

//           {/* Header actions (shown on md and up) */}
//           <nav className="hidden md:flex items-center gap-3">
//             <form
//             className="hidden md:flex flex-1 items-center gap-3 mx-6 max-w-4xl"
//             onSubmit={handleSubmit}
//           >
//             <input
//               aria-label="Search listings"
//               placeholder="Search for properties"
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//               className={`flex-1 rounded-lg px-3 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/5
//                 ${
//                   scrolled
//                     ? "bg-white/5 text-slate-900 placeholder-slate-400"
//                     : "border border-white/20 bg-white/5 text-current placeholder-white/85"
//                 }`}
//             />

//             <button
//               type="submit"
//               className="inline-flex items-center rounded-lg px-4 py-2 font-medium text-white border border-white/30"
//               style={{ backgroundColor: "#ffffff2a" }}
//             >
//               Search
//             </button>
//           </form>
//             <button
//               className={`px-3 py-2 rounded-lg font-medium ${
//                 scrolled
//                   ? "border border-white/20 text-[#2b54a2] bg-white"
//                   : "border border-white/30 text-white bg-[#d4a73b] hover:bg-[white/5]"
//               }`}
//             >
//               Log in
//             </button>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile dropdown menu (contains the search form) */}
//       {menuOpen && (
//         <nav className="md:hidden bg-white border-t border-gray-100 mt-2">
//           <div className="mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
//             {/* Mobile search form */}
//             <form className="flex gap-2" onSubmit={handleSubmit}>
//               <input
//                 aria-label="Search listings"
//                 placeholder="Search for properties"
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//                 className="flex-1 rounded-lg px-3 py-2 border border-gray-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
//               />
//               <button
//                 type="submit"
//                 className="rounded-lg px-4 py-2 font-medium text-white"
//                 style={{ backgroundColor: "#2b54a2" }}
//               >
//                 Search
//               </button>
//             </form>

//             <a
//               href="#login"
//               className="text-slate-900 font-medium hover:text-[#2b54a2]"
//             >
//               Log in
//             </a>

//             {/* Optional: other nav links */}
//             <a href="#listings" className="text-slate-700 hover:text-slate-900">
//               Listings
//             </a>
//             <a href="#contact" className="text-slate-700 hover:text-slate-900">
//               Contact
//             </a>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onSearch }) {
  const [value, setValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowLogoutConfirm(false);
    setMenuOpen(false);
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-200 backdrop-blur-md ${
          scrolled
            ? "bg-[#2b55a2ee] text-slate-900 shadow-sm"
            : "bg-gradient-to-b from-black/28 to-black/8 text-white"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 max-w-[90vw]">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-2xl text-current rounded-md hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* Brand Logo */}
            <img 
              src="/assets/realtybureau.png" 
              alt="RealtyBureau" 
              className="h-16 md:h-20 cursor-pointer" 
              onClick={() => navigate('/')}
            />

            {/* Desktop Search */}
            <form
              className="hidden md:flex flex-1 items-center gap-3 mx-6 max-w-4xl"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Search for properties"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`flex-1 rounded-lg px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/5
                  ${
                    scrolled
                      ? "bg-white/10 text-slate-900 placeholder-slate-400"
                      : "border border-white/20 bg-white/5 text-white placeholder-white/85"
                  }`}
              />

              <button
                type="submit"
                className="inline-flex items-center rounded-lg px-4 py-2 font-medium text-white border border-white/30"
                style={{ backgroundColor: "#ffffff2a" }}
              >
                Search
              </button>
            </form>

            {/* Desktop User Actions */}
            <nav className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                      </span>
                    </div>
                    <span className="text-white font-medium text-sm">
                      {user.name?.split(" ")[0] || user.email?.split("@")[0]}
                    </span>
                  </div>
                  <button
                    onClick={() => setShowLogoutConfirm(true)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      scrolled
                        ? "border border-white/20 text-[#2b54a2] bg-white hover:bg-gray-100"
                        : "border border-white/30 text-white bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    scrolled
                      ? "border border-white/20 text-[#2b54a2] bg-white hover:bg-gray-100"
                      : "border border-white/30 text-white bg-[#d4a73b] hover:bg-[#c09733]"
                  }`}
                >
                  Log in
                </button>
              )}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-100 mt-2">
            <div className="mx-auto px-4 py-4 flex flex-col gap-4">
              {/* Mobile Search */}
              <form className="flex gap-2" onSubmit={handleSubmit}>
                <input
                  placeholder="Search for properties"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="flex-1 rounded-lg px-4 py-2 border border-gray-300 bg-white text-slate-900 placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="rounded-lg px-4 py-2 font-medium text-white bg-[#2b54a2]"
                >
                  Search
                </button>
              </form>

              {user ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-10 h-10 rounded-full bg-[#2b54a2] flex items-center justify-center">
                      <span className="text-white font-medium">
                        {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{user.name}</p>
                      <p className="text-sm text-slate-600">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowLogoutConfirm(true);
                      setMenuOpen(false);
                    }}
                    className="w-full py-2 rounded-lg font-medium text-white bg-red-600 hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="py-2 rounded-lg font-medium text-white bg-[#2b54a2]"
                >
                  Log in
                </button>
              )}

              <a href="#listings" className="text-slate-700 hover:text-slate-900 py-2">
                Listings
              </a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 py-2">
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Logout Confirmation Popup */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 animate-fade-in">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirm Logout</h3>
              <p className="text-gray-600">Are you sure you want to log out?</p>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simple CSS animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
