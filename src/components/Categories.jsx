import React, { useEffect, useState } from "react";
import { getCategoryCounts } from "../../services/plotService";

const Categories = () => {
  const [counts, setCounts] = useState({
    Commercial: 0,
    Residence: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryCounts();
  }, []);

  const fetchCategoryCounts = async () => {
    try {
      setLoading(true);
      const data = await getCategoryCounts();
      setCounts(data);
    } catch (err) {
      console.error("Failed to fetch category counts:", err);
      setCounts({ Commercial: 0, Residence: 0 });
    } finally {
      setLoading(false);
    }
  };

  const items = [
    {
      id: 1,
      title: "Commercial",
      listings: counts.Commercial,
      image:
        "https://res.cloudinary.com/dtwcgfmar/image/upload/v1769161425/modern-luxury-hotel-office-reception-lounge-with-meeting-room_v8e93o.jpg",
      href: "/commercial",
    },
    {
      id: 2,
      title: "Residence",
      listings: counts.Residence,
      image:
        "https://res.cloudinary.com/dtwcgfmar/image/upload/v1769161425/modern-luxury-home-with-beautiful-landscape_r2ncki.jpg",
      href: "/residential",
    },
  ];

  return (
    <section className="mx-auto px-6 sm:px-8 py-5 w-full">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-0 min-h-screen">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="relative group overflow-hidden rounded-lg lg:rounded-none shadow-md hover:shadow-lg transition-shadow h-72 sm:h-80 md:h-96 lg:h-screen"
          >
            {/* Small-screen image (kept for accessibility/phone) */}
            <img
              src={item.image || null}
              alt={item.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500 lg:hidden"
              draggable="false"
              onError={(e) => e.target.style.display = 'none'}
            />

            {/* Desktop background image */}
            <div
              className="hidden lg:block absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${item.image || ''})` }}
              aria-hidden="true"
            />

            {/* Dark gradient overlay (vertical on mobile, horizontal on desktop) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:to-transparent" />

            {/* Card content: bottom-aligned on small, centered on desktop */}
            <div className="absolute left-6 bottom-6 right-6 text-white flex items-center justify-between lg:inset-0 lg:items-center lg:justify-center lg:text-center">
              <div className="lg:max-w-xl">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 uppercase text-xs tracking-widest text-white/90 lg:mt-4 lg:text-sm">
                  {loading ? "Loading..." : `${item.listings} listings`}
                </p>

                {/* CTAs that mimic the example layout */}
                <div className="mt-4 flex gap-3 justify-start lg:justify-center">
                  <button className="bg-white text-black px-5 py-2 rounded-full shadow">View</button>
                </div>
              </div>
            </div>

            {/* Arrow icon (kept for small screens) */}
            <span className="absolute inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 right-6 bottom-6 lg:hidden">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;