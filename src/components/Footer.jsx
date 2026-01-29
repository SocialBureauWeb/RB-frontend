// // import React from "react";
// // export default function Footer() {
// //   const year = new Date().getFullYear();

// //   const socials = [
// //     {
// //       id: "instagram",
// //       label: "Instagram",
// //       href: "https://instagram.com/",
// //       // SVG path(s) for the icon
// //       svg: (
// //         <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="instagram" className="h-5 w-5" />
// //       ),
// //     },
// //     {
// //       id: "facebook",
// //       label: "Facebook",
// //       href: "https://facebook.com/",
// //       svg: (
// //         <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="facebook" className="h-5 w-5" />
// //       ),
// //     },
// //     {
// //       id: "youtube",
// //       label: "YouTube",
// //       href: "https://youtube.com/",
// //       svg: (
// //         <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="youtube" className="h-5 w-5" />
// //       ),
// //     },
// //     {
// //       id: "x",
// //       label: "X / Twitter",
// //       href: "https://twitter.com/",
// //       svg: (
// //         <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80" alt="twitter" className="h-5 w-5" />
// //       ),
// //     },
// //     {
// //       id: "linkedin",
// //       label: "LinkedIn",
// //       href: "https://linkedin.com/",
// //       svg: (
// //         <img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png" alt="linkedin" className="h-5 w-5" />
// //       ),
// //     },
// //     {
// //       id: "pinterest",
// //       label: "Pinterest",
// //       href: "https://pinterest.com/",
// //       svg: (
// //         <img src="https://www.freeiconspng.com/uploads/white-pinterest-logo-png--30.png" alt="pinterest" className="h-5 w-5" />
// //       ),
// //     },
// // {
// //   id: "gmail",
// //   label: "Gmail",
// //   href: "mailto:yourmail@gmail.com",
// //   svg: (
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       viewBox="0 0 24 24"
// //       fill="currentColor"
// //       className="h-5 w-5"
// //     >
// //       <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 7L2 6v12h20V6l-10 5z" />
// //     </svg>
// //   ),
// // }

// //   ];

// //   return (
// //     <footer className="bg-black text-gray-300 border-t border-neutral-800 ">
// //       <div className="mx-auto px-6 py-6 flex flex-col items-center gap-4 lg:flex-row lg:justify-between max-w-[90vw]">
// //         {/* Social icons: on mobile show first (order-1), on desktop appears on right (lg:order-2) */}
// //         <div className="flex gap-3 order-1 lg:order-2">
// //           {socials.map((s) => (
// //             <a
// //               key={s.id}
// //               href={s.href}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               aria-label={s.label}
// //               title={s.label}
// //               className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-700 bg-transparent hover:bg-white/6 transition-colors duration-150"
// //             >
// //               <span className="text-current">{s.svg}</span>
// //             </a>
// //           ))}
// //         </div>

// //         {/* Logo / JE shield + copyright */}
// //         <div className="flex flex-col items-center text-center order-2 lg:order-1 lg:items-start lg:text-left">
// //           {/* JE shield */}
// //           <div className="flex items-center gap-3">
// //             <div
// //               className="flex items-center cursor-pointer"
// //               onClick={() => navigate("/")}
// //             >
// //               <img
// //                 src="/assets/realtybureau.png"
// //                 alt="RealtyBureau"
// //                 className="h-8 md:h-10 transition-all duration-300"
// //               />
// //             </div>

// //             <div className="hidden lg:block">
// //               {/* on desktop show copyright to the right of the shield */}
// //               <div className="text-sm text-gray-300">
// //                 Copyright © {year} RealtyBureau®
// //               </div>
// //             </div>
// //           </div>
// //           <div>
// //             <p>
// //               <a href='/privacy-policy'>Privacy Policy</a> 
// //             </p>
// //                         <p>
// //               <a href='/terms-n-condition'>Terms and Condition</a> 
// //             </p>
// //                         <p>
// //               <a href='/privacy-policy'>About</a> 
// //             </p>
// //             <p>
// //               <a href='/sigup'>Sign up</a> 
// //             </p>
// //            <p>
// //               <a href='/login'>Login</a> 
// //             </p>
// //           </div>

// //           {/* Mobile copyright (below the shield) */}
// //           <div className="mt-2 text-sm text-gray-300 lg:hidden">
// //             Copyright © {year} RealtyBureau®
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// import React from "react";
// import { href, useNavigate } from "react-router-dom";

// export default function Footer() {
//   const navigate = useNavigate();
//   const year = new Date().getFullYear();

//   const socials = [
//     {
//       id: "instagram",
//       label: "Instagram",
//       href: "https://instagram.com/",
//       svg: (
//         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
//         </svg>
//       ),
//     },
//     {
//       id: "facebook",
//       label: "Facebook",
//       href: "https://facebook.com/",
//       svg: (
//         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//         </svg>
//       ),
//     },
//     {
//       id: "youtube",
//       label: "YouTube",
//       href: "https://youtube.com/",
//       svg: (
//         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//         </svg>
//       ),
//     },
//     {
//       id: "twitter",
//       label: "X / Twitter",
//       href: "https://twitter.com/",
//       svg: (
//         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//         </svg>
//       ),
//     },
//     {
//       id: "linkedin",
//       label: "LinkedIn",
//       href: "https://linkedin.com/",
//       svg: (
//         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//         </svg>
//       ),
//     },
//     {
//       id: "gmail",
//       label: "Email",
//       href: "mailto:yourmail@gmail.com",
//       svg: (
//         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
//         </svg>
//       ),
//     },
//   ];

//   const links = [
//     { label: "Privacy Policy", href: "/privacy-policy" },
//     { label: "Terms & Conditions", href: "/terms-n-condition" },
//   ];

//   const quickLinks = [
//     { label: "Sign Up", href: "/signup" },
//     { label: "Login", href: "/login" },
//     { label: "Wishlist", href: "/wishlist" },
//     { label: "Commercial Property", href: '/commercial' },
//     { label: "Residential Property", href: '/residential' },
//     { label: "About Us", href: '/about' },
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 border-t border-gray-800">
//       <div className="mx-auto px-4 py-12 md:px-8 lg:px-12 max-w-7xl">
//         {/* Main footer content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <div
//               className="flex items-center gap-3 cursor-pointer group"
//               onClick={() => navigate("/")}
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-blue-600 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
//                 <img
//                   src="/assets/realtybureau.png"
//                   alt="RealtyBureau"
//                   className="h-10 md:h-12 transition-all duration-300 relative group-hover:scale-105"
//                 />
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//                 RealtyBureau
//               </span>
//             </div>
//             <p className="text-sm text-gray-400 max-w-xs">
//               Your trusted partner in real estate. Finding your perfect home is our priority.
//             </p>

//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
//             <ul className="space-y-2">
//               {links.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <div className="flex gap-3 pt-12">
//               {socials.map((social) => (
//                 <a
//                   key={social.id}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   title={social.label}
//                   className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-700 bg-gray-800/50 hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 group"
//                 >
//                   <span className="text-gray-300 group-hover:text-white">
//                     {social.svg}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const socials = [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/",
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
        </svg>
      ),
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com/",
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "https://youtube.com/",
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      id: "twitter",
      label: "X / Twitter",
      href: "https://twitter.com/",
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/",
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      id: "gmail",
      label: "Email",
      href: "mailto:yourmail@gmail.com",
      svg: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
  ];


  const quickLinks = [
    { label: "Sign Up", href: "/signup" },
    { label: "Login", href: "/login" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Commercial Property", href: "/commercial" },
    { label: "Residential Property", href: "/residential" },
    { label: "About Us", href: "/about" },
  ];

  const links = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-n-condition" },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* 1️⃣ Brand */}
          <div className="order-1 space-y-4">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/assets/realtybureau.png"
                alt="RealtyBureau"
                className="h-10"
              />
              <span className="text-xl font-bold text-white">
                RealtyBureau
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted partner in real estate. Finding your perfect home is our priority.
            </p>
            <p className="text-sm text-gray-500">
              © {year} RealtyBureau®
            </p>
          </div>

          {/* 2️⃣ Quick Links */}
          <div className="order-2">
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3️⃣ Legal */}
          <div className="order-3">
            <h3 className="mb-4 text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4️⃣ Social Icons */}
          <div className="order-4">
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800 hover:bg-blue-600 transition"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
