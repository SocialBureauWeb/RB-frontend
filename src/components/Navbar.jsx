// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Navbar({ onSearch }) {
// // //   const [value, setValue] = useState("");
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   useEffect(() => {
// // //     const onScroll = () => setScrolled(window.scrollY > 40);
// // //     onScroll(); // check on load
// // //     window.addEventListener("scroll", onScroll, { passive: true });
// // //     return () => window.removeEventListener("scroll", onScroll);
// // //   }, []);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     onSearch?.(value);

// // //     // Close the mobile menu after searching on small screens
// // //     // (768px is the Tailwind md breakpoint used above)
// // //     if (typeof window !== "undefined" && window.innerWidth < 768) {
// // //       setMenuOpen(false);
// // //     }
// // //   };
// // // const navigate = useNavigate();
// // //   return (
// // //     <header
// // //       className={`fixed top-0 z-50 w-full transition-all duration-200 backdrop-blur-md ${
// // //         scrolled
// // //           ? "bg-[#2b55a2ee] text-slate-900 shadow-sm"
// // //           : "bg-gradient-to-b from-black/28 to-black/8 text-white"
// // //       }`}
// // //     >
// // //       <div className="mx-auto px-4 sm:px-6 max-w-[90vw]">
// // //         <div className="flex items-center justify-between gap-4">
// // //           {/* Mobile menu button */}
// // //           <button
// // //             className="md:hidden p-2 text-2xl text-current rounded-md hover:bg-white/10"
// // //             aria-label="Toggle menu"
// // //             aria-expanded={menuOpen}
// // //             onClick={() => setMenuOpen((s) => !s)}
// // //           >
// // //             ☰
// // //           </button>

// // //           {/* Brand */}
// // //           <div className="flex-shrink-0 font-extrabold text-lg tracking-wide">
// // //            <img src="/assets/realtybureau.png" alt="RealtyBureau" className="h-20" onClick={()=>navigate('/')}/>
// // //           </div>

// // //           {/* Search form: visible on md and up; hidden on mobile */}


// // //           {/* Header actions (shown on md and up) */}
// // //           <nav className="hidden md:flex items-center gap-3">
// // //             <form
// // //             className="hidden md:flex flex-1 items-center gap-3 mx-6 max-w-4xl"
// // //             onSubmit={handleSubmit}
// // //           >
// // //             <input
// // //               aria-label="Search listings"
// // //               placeholder="Search for properties"
// // //               value={value}
// // //               onChange={(e) => setValue(e.target.value)}
// // //               className={`flex-1 rounded-lg px-3 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/5
// // //                 ${
// // //                   scrolled
// // //                     ? "bg-white/5 text-slate-900 placeholder-slate-400"
// // //                     : "border border-white/20 bg-white/5 text-current placeholder-white/85"
// // //                 }`}
// // //             />

// // //             <button
// // //               type="submit"
// // //               className="inline-flex items-center rounded-lg px-4 py-2 font-medium text-white border border-white/30"
// // //               style={{ backgroundColor: "#ffffff2a" }}
// // //             >
// // //               Search
// // //             </button>
// // //           </form>
// // //             <button
// // //               className={`px-3 py-2 rounded-lg font-medium ${
// // //                 scrolled
// // //                   ? "border border-white/20 text-[#2b54a2] bg-white"
// // //                   : "border border-white/30 text-white bg-[#d4a73b] hover:bg-[white/5]"
// // //               }`}
// // //             >
// // //               Log in
// // //             </button>
// // //           </nav>
// // //         </div>
// // //       </div>

// // //       {/* Mobile dropdown menu (contains the search form) */}
// // //       {menuOpen && (
// // //         <nav className="md:hidden bg-white border-t border-gray-100 mt-2">
// // //           <div className="mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
// // //             {/* Mobile search form */}
// // //             <form className="flex gap-2" onSubmit={handleSubmit}>
// // //               <input
// // //                 aria-label="Search listings"
// // //                 placeholder="Search for properties"
// // //                 value={value}
// // //                 onChange={(e) => setValue(e.target.value)}
// // //                 className="flex-1 rounded-lg px-3 py-2 border border-gray-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
// // //               />
// // //               <button
// // //                 type="submit"
// // //                 className="rounded-lg px-4 py-2 font-medium text-white"
// // //                 style={{ backgroundColor: "#2b54a2" }}
// // //               >
// // //                 Search
// // //               </button>
// // //             </form>

// // //             <a
// // //               href="#login"
// // //               className="text-slate-900 font-medium hover:text-[#2b54a2]"
// // //             >
// // //               Log in
// // //             </a>

// // //             {/* Optional: other nav links */}
// // //             <a href="#listings" className="text-slate-700 hover:text-slate-900">
// // //               Listings
// // //             </a>
// // //             <a href="#contact" className="text-slate-700 hover:text-slate-900">
// // //               Contact
// // //             </a>
// // //           </div>
// // //         </nav>
// // //       )}
// // //     </header>
// // //   );
// // // }


// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function Navbar({ onSearch }) {
// //   const [value, setValue] = useState("");
// //   const [scrolled, setScrolled] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 40);
// //     onScroll();
// //     window.addEventListener("scroll", onScroll, { passive: true });

// //     const token = localStorage.getItem("token");
// //     const userData = localStorage.getItem("user");
// //     if (token && userData) {
// //       try {
// //         setUser(JSON.parse(userData));
// //       } catch (err) {
// //         console.error("Failed to parse user data", err);
// //       }
// //     }

// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSearch?.(value);
// //     if (window.innerWidth < 768) {
// //       setMenuOpen(false);
// //     }
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //     setUser(null);
// //     setShowLogoutConfirm(false);
// //     setMenuOpen(false);
// //     navigate("/");
// //   };

// //   const handleLoginClick = () => {
// //     navigate("/login");
// //     setMenuOpen(false);
// //   };

// //   return (
// //     <>
// //       <header
// //         className={`fixed top-0 z-50 w-full transition-all duration-200 backdrop-blur-md ${
// //           scrolled
// //             ? "bg-[#2b55a2ee] text-slate-900 shadow-sm"
// //             : "bg-gradient-to-b from-black/28 to-black/8 text-white"
// //         }`}
// //       >
// //         <div className="mx-auto px-4 sm:px-6 max-w-[90vw]">
// //           <div className="flex items-center justify-between gap-4">
// //             {/* Mobile menu button */}
// //             <button
// //               className="md:hidden p-2 text-2xl text-current rounded-md hover:bg-white/10"
// //               onClick={() => setMenuOpen(!menuOpen)}
// //             >
// //               ☰
// //             </button>

// //             {/* Brand Logo */}
// //             <img 
// //               src="/assets/realtybureau.png" 
// //               alt="RealtyBureau" 
// //               className="h-16 md:h-20 cursor-pointer" 
// //               onClick={() => navigate('/')}
// //             />

// //             {/* Desktop Search */}
// //             <form
// //               className="hidden md:flex flex-1 items-center gap-3 mx-6 max-w-4xl"
// //               onSubmit={handleSubmit}
// //             >
// //               <input
// //                 placeholder="Search for properties"
// //                 value={value}
// //                 onChange={(e) => setValue(e.target.value)}
// //                 className={`flex-1 rounded-lg px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/5
// //                   ${
// //                     scrolled
// //                       ? "bg-white/10 text-slate-900 placeholder-slate-400"
// //                       : "border border-white/20 bg-white/5 text-white placeholder-white/85"
// //                   }`}
// //               />

// //               <button
// //                 type="submit"
// //                 className="inline-flex items-center rounded-lg px-4 py-2 font-medium text-white border border-white/30"
// //                 style={{ backgroundColor: "#ffffff2a" }}
// //               >
// //                 Search
// //               </button>
// //             </form>

// //             {/* Desktop User Actions */}
// //             <nav className="hidden md:flex items-center gap-4">
// //               {user ? (
// //                 <div className="flex items-center gap-3">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
// //                       <span className="text-white font-medium text-sm">
// //                         {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
// //                       </span>
// //                     </div>
// //                     <span className="text-white font-medium text-sm">
// //                       {user.name?.split(" ")[0] || user.email?.split("@")[0]}
// //                     </span>
// //                   </div>
// //                   <button
// //                     onClick={() => setShowLogoutConfirm(true)}
// //                     className={`px-4 py-2 rounded-lg font-medium ${
// //                       scrolled
// //                         ? "border border-white/20 text-[#2b54a2] bg-white hover:bg-gray-100"
// //                         : "border border-white/30 text-white bg-red-600 hover:bg-red-700"
// //                     }`}
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <button
// //                   onClick={handleLoginClick}
// //                   className={`px-4 py-2 rounded-lg font-medium ${
// //                     scrolled
// //                       ? "border border-white/20 text-[#2b54a2] bg-white hover:bg-gray-100"
// //                       : "border border-white/30 text-white bg-[#d4a73b] hover:bg-[#c09733]"
// //                   }`}
// //                 >
// //                   Log in
// //                 </button>
// //               )}
// //             </nav>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {menuOpen && (
// //           <nav className="md:hidden bg-white border-t border-gray-100 mt-2">
// //             <div className="mx-auto px-4 py-4 flex flex-col gap-4">
// //               {/* Mobile Search */}
// //               <form className="flex gap-2" onSubmit={handleSubmit}>
// //                 <input
// //                   placeholder="Search for properties"
// //                   value={value}
// //                   onChange={(e) => setValue(e.target.value)}
// //                   className="flex-1 rounded-lg px-4 py-2 border border-gray-300 bg-white text-slate-900 placeholder-slate-400"
// //                 />
// //                 <button
// //                   type="submit"
// //                   className="rounded-lg px-4 py-2 font-medium text-white bg-[#2b54a2]"
// //                 >
// //                   Search
// //                 </button>
// //               </form>

// //               {user ? (
// //                 <div className="flex flex-col gap-3">
// //                   <div className="flex items-center gap-3 py-2">
// //                     <div className="w-10 h-10 rounded-full bg-[#2b54a2] flex items-center justify-center">
// //                       <span className="text-white font-medium">
// //                         {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
// //                       </span>
// //                     </div>
// //                     <div>
// //                       <p className="font-medium text-slate-900">{user.name}</p>
// //                       <p className="text-sm text-slate-600">{user.email}</p>
// //                     </div>
// //                   </div>
// //                   <button
// //                     onClick={() => {
// //                       setShowLogoutConfirm(true);
// //                       setMenuOpen(false);
// //                     }}
// //                     className="w-full py-2 rounded-lg font-medium text-white bg-red-600 hover:bg-red-700"
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <button
// //                   onClick={handleLoginClick}
// //                   className="py-2 rounded-lg font-medium text-white bg-[#2b54a2]"
// //                 >
// //                   Log in
// //                 </button>
// //               )}

// //               <a href="#listings" className="text-slate-700 hover:text-slate-900 py-2">
// //                 Listings
// //               </a>
// //               <a href="#contact" className="text-slate-700 hover:text-slate-900 py-2">
// //                 Contact
// //               </a>
// //               <a href="#contact" className="text-slate-700 hover:text-slate-900 py-2">
// //                 ❤️
// //               </a>
// //             </div>
// //           </nav>
// //         )}
// //       </header>

// //       {/* Logout Confirmation Popup */}
// //       {showLogoutConfirm && (
// //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50">
// //           <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 animate-fade-in">
// //             <div className="mb-4">
// //               <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirm Logout</h3>
// //               <p className="text-gray-600">Are you sure you want to log out?</p>
// //             </div>

// //             <div className="flex gap-3 mt-6">
// //               <button
// //                 onClick={() => setShowLogoutConfirm(false)}
// //                 className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleLogout}
// //                 className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
// //               >
// //                 Logout
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Simple CSS animation */}
// //       <style jsx>{`
// //         @keyframes fade-in {
// //           from {
// //             opacity: 0;
// //             transform: scale(0.95);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }
// //         .animate-fade-in {
// //           animation: fade-in 0.2s ease-out;
// //         }
// //       `}</style>
// //     </>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar({ onSearch }) {
//   const navigate = useNavigate();

//   const [value, setValue] = useState("");
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

//   /* -------------------- EFFECTS -------------------- */

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });

//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("user");
//     if (token && userData) {
//       try {
//         setUser(JSON.parse(userData));
//       } catch {}
//     }

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* -------------------- HANDLERS -------------------- */

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch?.(value);
//     setMenuOpen(false);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     setUser(null);
//     setShowLogoutConfirm(false);
//     navigate("/");
//   };

//   /* -------------------- STYLES -------------------- */

//   const headerStyle = scrolled
//     ? "bg-[#2b54a2]/95 shadow-md"
//     : "bg-gradient-to-b from-black/40 to-black/10";

//   /* -------------------- JSX -------------------- */

//   return (
//     <>
//       <header className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all ${headerStyle}`}>
//         <div className="max-w-[90vw] mx-auto px-4">
//           <div className="flex h-20 items-center justify-between gap-4">

//             {/* Mobile Menu */}
//             <button
//               className="md:hidden text-2xl text-white"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               ☰
//             </button>

//             {/* Logo */}
//             <img
//               src="/assets/realtybureau.png"
//               alt="RealtyBureau"
//               className="h-14 cursor-pointer"
//               onClick={() => navigate("/")}
//             />

//             {/* Desktop Search */}
//             <form
//               onSubmit={handleSubmit}
//               className="hidden md:flex flex-1 max-w-3xl mx-6 gap-3"
//             >
//               <input
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//                 placeholder="Search properties, city, price…"
//                 className="flex-1 rounded-lg px-4 py-2 bg-white/15 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/30"
//               />
//               <button className="px-5 py-2 rounded-lg bg-white/20 text-white font-medium">
//                 Search
//               </button>
//             </form>

//             {/* Desktop Actions */}
//             <nav className="hidden md:flex items-center gap-4">
//               {/* Wishlist placeholder */}
//               <button
//                 onClick={() => navigate("/wishlist")}
//                 className="text-white text-xl"
//                 title="Wishlist"
//               >
//                 ❤️
//               </button>

//               {user ? (
//                 <>
//                   <span className="text-white text-sm font-medium">
//                     Hi, {user.name?.split(" ")[0] || "User"}
//                   </span>
//                   <button
//                     onClick={() => setShowLogoutConfirm(true)}
//                     className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="px-4 py-2 rounded-lg bg-[#d4a73b] text-white hover:bg-[#c09733]"
//                 >
//                   Log in
//                 </button>
//               )}
//             </nav>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
//             <div className="p-4 flex flex-col gap-4">

//               <form onSubmit={handleSubmit} className="flex gap-2">
//                 <input
//                   value={value}
//                   onChange={(e) => setValue(e.target.value)}
//                   placeholder="Search properties…"
//                   className="flex-1 px-3 py-2 border rounded-lg"
//                 />
//                 <button className="px-4 py-2 bg-[#2b54a2] text-white rounded-lg">
//                   Search
//                 </button>
//               </form>

//               {user ? (
//                 <>
//                   <div className="text-sm text-gray-700">
//                     {user.name} <br />
//                     <span className="text-gray-500">{user.email}</span>
//                   </div>
//                   <button
//                     onClick={() => setShowLogoutConfirm(true)}
//                     className="py-2 rounded-lg bg-red-600 text-white"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="py-2 rounded-lg bg-[#2b54a2] text-white"
//                 >
//                   Log in
//                 </button>
//               )}

//               <button
//                 onClick={() => navigate("/wishlist")}
//                 className="text-left text-gray-700"
//               >
//                 ❤️ Wishlist
//               </button>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Logout Confirmation */}
//       {showLogoutConfirm && (
//         <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center">
//           <div className="bg-white rounded-xl p-6 w-full max-w-sm animate-fade-in">
//             <h3 className="text-lg font-semibold mb-2">Confirm Logout</h3>
//             <p className="text-sm text-gray-600 mb-6">
//               Are you sure you want to log out?
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowLogoutConfirm(false)}
//                 className="flex-1 py-2 border rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="flex-1 py-2 bg-red-600 text-white rounded-lg"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



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