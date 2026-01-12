import React from "react";
export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/",
      // SVG path(s) for the icon
      svg: (
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="instagram" className="h-5 w-5" />
      ),
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com/",
      svg: (
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="facebook" className="h-5 w-5" />
      ),
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "https://youtube.com/",
      svg: (
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="youtube" className="h-5 w-5" />
      ),
    },
    {
      id: "x",
      label: "X / Twitter",
      href: "https://twitter.com/",
      svg: (
        <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80" alt="twitter" className="h-5 w-5" />
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/",
      svg: (
        <img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png" alt="linkedin" className="h-5 w-5" />
      ),
    },
    {
      id: "pinterest",
      label: "Pinterest",
      href: "https://pinterest.com/",
      svg: (
        <img src="https://www.freeiconspng.com/uploads/white-pinterest-logo-png--30.png" alt="pinterest" className="h-5 w-5" />
      ),
    },
  ];

  return (
    <footer className="bg-black text-gray-300 border-t border-neutral-800 ">
      <div className="mx-auto px-6 py-6 flex flex-col items-center gap-4 lg:flex-row lg:justify-between max-w-[90vw]">
        {/* Social icons: on mobile show first (order-1), on desktop appears on right (lg:order-2) */}
        <div className="flex gap-3 order-1 lg:order-2">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-700 bg-transparent hover:bg-white/6 transition-colors duration-150"
            >
              <span className="text-current">{s.svg}</span>
            </a>
          ))}
        </div>

        {/* Logo / JE shield + copyright */}
        <div className="flex flex-col items-center text-center order-2 lg:order-1 lg:items-start lg:text-left">
          {/* JE shield */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/assets/realtybureau.png"
                alt="RealtyBureau"
                className="h-8 md:h-10 transition-all duration-300"
              />
            </div>

            <div className="hidden lg:block">
              {/* on desktop show copyright to the right of the shield */}
              <div className="text-sm text-gray-300">
                Copyright © {year} RealtyBureau®
              </div>
            </div>
          </div>

          {/* Mobile copyright (below the shield) */}
          <div className="mt-2 text-sm text-gray-300 lg:hidden">
            Copyright © {year} RealtyBureau®
          </div>
        </div>
      </div>
    </footer>
  );
}