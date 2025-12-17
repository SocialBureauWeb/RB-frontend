import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onSearch }) {
  const [value, setValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // check on load
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);

    // Close the mobile menu after searching on small screens
    // (768px is the Tailwind md breakpoint used above)
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };
const navigate = useNavigate();
  return (
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
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            ☰
          </button>

          {/* Brand */}
          <div className="flex-shrink-0 font-extrabold text-lg tracking-wide">
           <img src="/assets/realtybureau.png" alt="RealtyBureau" className="h-20" onClick={()=>navigate('/')}/>
          </div>

          {/* Search form: visible on md and up; hidden on mobile */}
          

          {/* Header actions (shown on md and up) */}
          <nav className="hidden md:flex items-center gap-3">
            <form
            className="hidden md:flex flex-1 items-center gap-3 mx-6 max-w-4xl"
            onSubmit={handleSubmit}
          >
            <input
              aria-label="Search listings"
              placeholder="Search for properties"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`flex-1 rounded-lg px-3 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/5
                ${
                  scrolled
                    ? "bg-white/5 text-slate-900 placeholder-slate-400"
                    : "border border-white/20 bg-white/5 text-current placeholder-white/85"
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
            <button
              className={`px-3 py-2 rounded-lg font-medium ${
                scrolled
                  ? "border border-white/20 text-[#2b54a2] bg-white"
                  : "border border-white/30 text-white bg-[#d4a73b] hover:bg-[white/5]"
              }`}
            >
              Log in
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile dropdown menu (contains the search form) */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 mt-2">
          <div className="mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            {/* Mobile search form */}
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <input
                aria-label="Search listings"
                placeholder="Search for properties"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="flex-1 rounded-lg px-3 py-2 border border-gray-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2b54a2]"
              />
              <button
                type="submit"
                className="rounded-lg px-4 py-2 font-medium text-white"
                style={{ backgroundColor: "#2b54a2" }}
              >
                Search
              </button>
            </form>

            <a
              href="#login"
              className="text-slate-900 font-medium hover:text-[#2b54a2]"
            >
              Log in
            </a>

            {/* Optional: other nav links */}
            <a href="#listings" className="text-slate-700 hover:text-slate-900">
              Listings
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}