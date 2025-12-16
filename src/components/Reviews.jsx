import React from "react";

const Star = ({ className = "", filled = true }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke={filled ? "none" : "currentColor"}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Avatar = ({ src, alt }) => (
  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl shadow-lg ring-2 ring-[#d4af37]/50">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export default function Reviews({ reviews = null }) {
  const sample = [
    {
      id: 1,
      name: "Claudia Alves",
      text: "Absolutely outstanding service. The quality exceeded expectations.",
      stars: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Olivia Wilson",
      text: "Premium, elegant and professional. Couldn’t ask for better!",
      stars: 5,
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Juliana Silva",
      text: "Loved everything — from communication to final delivery.",
      stars: 5,
      avatar:
        "https://images.unsplash.com/photo-1545996124-59ae3136f2d1?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const list = reviews || sample;
  const bg =
    "https://i.pinimg.com/1200x/98/85/f3/9885f38dc02d4aad94ffe92bfc728894.jpg";

  return (
    <div
      className="bg-cover bg-center flex justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="w-full max-w-4xl px-6 py-14 relative">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#d4af37] tracking-wide drop-shadow-xl">
            Client Testimonials
          </h2>
          <p className="text-sm text-neutral-200/80 mt-2 uppercase tracking-[0.20em]">
            Trusted by premium brands
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((review, i) => (
            <article
              key={review.id}
              className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10
              shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10"
            >
              {i === 0 && (
                <span className="absolute -top-4 left-6 text-7xl font-serif text-[#d4af37]">
                  “
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div>
                  <h3 className="font-medium text-base text-[#fafafa] leading-tight">
                    {review.name}
                  </h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        filled={idx < review.stars}
                        className="text-[#d4af37]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-200/90 leading-relaxed mt-1">
                {review.text}
              </p>

              <footer className="text-xs text-[#d4af37]/60 mt-4 italic">
                — {review.name}
              </footer>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
