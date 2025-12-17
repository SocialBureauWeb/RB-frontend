import React from "react";
export default function Podcast() {
  const host = {
    name: "Alen Jacob",
    role: "Managing Director",
    image:
      "https://trillionedition.com/assets/AlenJacob.webp",
    alt: "Alen Jacob",
  };

  return (
    <section className="mx-auto px-6 py-12 max-w-[90vw]">
      <div className="bg-gray-50 border border-transparent rounded-sm">
        <div className="grid lg:grid-cols-3 items-center gap-8 p-10">
          {/* Left - content: spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-neutral-900 mb-4">
              Luxury Real Estate
            </h2>

            <p className="text-gray-700 max-w-2xl leading-relaxed">
              RealtyBureau, a company that is part of the Trillion Edition network, a trillionaire networking company with more than a decade of field expertise, was established to ensure that every buyer gets access to verified, high-value land opportunities in total harmony with themselves.</p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#listen"
                role="button"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-neutral-900 text-white text-sm tracking-wide font-semibold shadow-sm hover:bg-neutral-800 transition-colors duration-150"
              >
                Discover Now
                <svg
                  className="w-4 h-4 ml-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l6 7-6 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - host */}
          <div className="flex justify-center lg:justify-end">
            {/* Divider visual on lg screens: put padding on host and a left border on container */}
            <div className="w-full lg:w-56 flex items-center justify-center">
              <div className="w-full lg:w-auto flex flex-col items-center text-center lg:text-center lg:items-center">
                <img
                  src={host.image}
                  alt={host.alt || host.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-sm"
                />

                <div className="mt-4">
                  <div className="font-serif text-xl md:text-2xl mt-1 text-neutral-900">{host.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{host.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}