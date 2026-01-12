import React from "react";

const Star = ({ filled = true }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-[#d4a73b]" : "text-white/20"}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    className="w-10 h-10 text-[#d4a73b]/20 absolute top-6 right-6"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
  </svg>
);

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Anand R.",
      location: "Kochi",
      text: "We bought a residential plot through RealtyBureau. The team explained everything clearly and supported us till registration. Overall, a smooth experience.",
      stars: 5,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMDjW5gB0ARwNL7gmKrVz_ZISFeGDsl_opg&s",
    },
    {
      id: 2,
      name: "Shameer K.",
      location: "Dubai",
      text: "I was staying in Dubai when I purchased the plot. RealtyBureau handled everything properly and kept me updated. No issues faced.",
      stars: 5,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdh8vRt0sPkkAHqmG6mY6NlM8JpW_IkmzC4Q&sp",
    },
    {
      id: 3,
      name: "Neethu S.",
      location: "Thrissur",
      text: "This was our first property purchase. The team was patient and helped us understand the process well. We're happy with the house we bought.",
      stars: 5,
      avatar: "https://static.vecteezy.com/system/resources/previews/039/334/804/large_2x/ai-generated-indian-female-student-free-photo.jpg",
    },
    // {
    //   id: 4,
    //   name: "Faisal M.",
    //   location: "Dubai",
    //   text: "RealtyBureau helped me buy a villa back home. Communication was clear and regular. The property details matched what was shown.",
    //   stars: 5,
    //   avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    // },
    // {
    //   id: 5,
    //   name: "Ramesh P.",
    //   location: "Ernakulam",
    //   text: "We were searching for a house within budget. RealtyBureau showed genuine options and didn't pressure us. The deal was clean and simple.",
    //   stars: 5,
    //   avatar: "https://images.unsplash.com/photo-1507209582346-69da8b46cbeb?q=80&w=400&auto=format&fit=crop",
    // },
    // {
    //   id: 6,
    //   name: "Afsal T.",
    //   location: "Abu Dhabi",
    //   text: "Buying property from abroad is not easy, but RealtyBureau made it manageable. They shared proper documents and updates.",
    //   stars: 5,
    //   avatar: "https://images.unsplash.com/photo-1500927143671-a900b850e87b?q=80&w=400&auto=format&fit=crop",
    // },
  ];

  return (
    <div className="relative overflow-hidden bg-[#05080f] py-24 px-6 lg:px-8">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#2b54a2]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4a73b]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="text-center mb-20 animate-slideDown">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-[#d4a73b] uppercase bg-[#d4a73b]/10 rounded-full border border-[#d4a73b]/20">
            Real Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a73b] to-[#f3d081]">Home Buyers</span> Around the Globe
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 font-light leading-relaxed">
            Discover why hundreds of families trust RealtyBureau for their most important life decisions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-[#d4a73b]/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <QuoteIcon />

              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} filled={idx < review.stars} />
                  ))}
                </div>

                <p className="text-lg text-white/80 font-light italic leading-relaxed mb-8 marker:text-[#d4a73b]">
                  "{review.text}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 border-t border-white/5 pt-6 group-hover:border-[#d4a73b]/20 transition-colors">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2b54a2] to-[#d4a73b] rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-[#d4a73b]/50 transition-all"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-[#d4a73b] transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-sm text-white/40 flex items-center gap-1.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>
                    {review.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}