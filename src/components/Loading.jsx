// // // // // import { useEffect } from "react";

// // // // // export default function BlobLoader() {
// // // // //     // Inject keyframes + custom styles once
// // // // //     useEffect(() => {
// // // // //         const style = document.createElement("style");
// // // // //         style.innerHTML = `
// // // // //       @keyframes blob {
// // // // //         0% {
// // // // //           border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
// // // // //           transform: rotate(0deg) scale(1);
// // // // //         }
// // // // //         33% {
// // // // //           border-radius: 58% 42% 30% 70% / 55% 60% 40% 45%;
// // // // //           transform: rotate(120deg) scale(1.05);
// // // // //         }
// // // // //         66% {
// // // // //           border-radius: 60% 40% 55% 45% / 40% 55% 45% 60%;
// // // // //           transform: rotate(240deg) scale(0.95);
// // // // //         }
// // // // //         100% {
// // // // //           border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
// // // // //           transform: rotate(360deg) scale(1);
// // // // //         }
// // // // //       }
// // // // //     `;
// // // // //         document.head.appendChild(style);
// // // // //         return () => document.head.removeChild(style);
// // // // //     }, []);

// // // // //     return (
// // // // //         <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
// // // // //             <div
// // // // //                 className="
// // // // //           h-28 w-28
// // // // //           animate-[blob_3s_ease-in-out_infinite]
// // // // //           rounded-full
// // // // //           bg-[radial-gradient(circle_at_30%_30%,#7df9ff,#1e90ff,#002b5c)]
// // // // //           shadow-[0_0_30px_rgba(30,144,255,0.9),0_0_60px_rgba(30,144,255,0.6)]
// // // // //           blur-[0.4px]
// // // // //         "
// // // // //             />
// // // // //             <p className="mt-4 tracking-wider text-gray-400">Loading...</p>
// // // // //         </div>
// // // // //     );
// // // // // }


// // // // import { useEffect } from "react";

// // // // export default function BlobLoader() {
// // // //     useEffect(() => {
// // // //         const style = document.createElement("style");
// // // //         style.innerHTML = `
// // // //       @keyframes blob {
// // // //         0% {
// // // //           border-radius: 48% 52% 68% 32% / 48% 48% 52% 52%;
// // // //           transform: rotate(0deg) scale(1);
// // // //         }
// // // //         33% {
// // // //           border-radius: 62% 38% 36% 64% / 56% 60% 40% 44%;
// // // //           transform: rotate(120deg) scale(1.05);
// // // //         }
// // // //         66% {
// // // //           border-radius: 58% 42% 56% 44% / 40% 56% 44% 60%;
// // // //           transform: rotate(240deg) scale(0.97);
// // // //         }
// // // //         100% {
// // // //           border-radius: 48% 52% 68% 32% / 48% 48% 52% 52%;
// // // //           transform: rotate(360deg) scale(1);
// // // //         }
// // // //       }
// // // //     `;
// // // //         document.head.appendChild(style);
// // // //         return () => document.head.removeChild(style);
// // // //     }, []);

// // // //     return (
// // // //         <div className="flex h-screen w-full items-center justify-center bg-white">
// // // //             <div className="relative h-32 w-32">

// // // //                 {/* SOFT DROP SHADOW (ANCHORS IT TO WHITE BG) */}
// // // //                 <div
// // // //                     className="
// // // //             absolute inset-4
// // // //             rounded-full
// // // //             bg-black
// // // //             blur-xl
// // // //             opacity-10
// // // //             translate-y-4
// // // //           "
// // // //                 />

// // // //                 {/* MAIN BODY */}
// // // //                 <div
// // // //                     className="
// // // //             absolute inset-0
// // // //             animate-[blob_3.5s_ease-in-out_infinite]
// // // //             rounded-full
// // // //             bg-[radial-gradient(circle_at_35%_30%,#d4a73b_0%,#2b54a2_55%,#2b54a2_100%)]
// // // //             shadow-[inset_-16px_-20px_30px_rgba(0,0,0,0.25),inset_12px_12px_24px_rgba(255,255,255,0.35)]
// // // //           "
// // // //                 />

// // // //                 {/* GOLD RIM LIGHT */}
// // // //                 <div
// // // //                     className="
// // // //             absolute inset-0
// // // //             rounded-full
// // // //             bg-[radial-gradient(circle_at_70%_25%,rgba(212,167,59,0.55),transparent_60%)]
// // // //             mix-blend-multiply
// // // //             pointer-events-none
// // // //           "
// // // //                 />

// // // //                 {/* BLUE EDGE DEPTH */}
// // // //                 <div
// // // //                     className="
// // // //             absolute inset-1
// // // //             rounded-full
// // // //             border
// // // //             border-[#2b54a2]/30
// // // //             pointer-events-none
// // // //           "
// // // //                 />
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }


// // // import { useEffect } from "react";

// // // export default function BlobLoader() {
// // //   useEffect(() => {
// // //     const style = document.createElement("style");
// // //     style.innerHTML = `
// // //       @keyframes blob {
// // //         0% {
// // //           border-radius: 50% 50% 65% 35% / 50% 50% 50% 50%;
// // //           transform: rotate(0deg) scale(1);
// // //         }
// // //         33% {
// // //           border-radius: 62% 38% 40% 60% / 55% 60% 40% 45%;
// // //           transform: rotate(120deg) scale(1.04);
// // //         }
// // //         66% {
// // //           border-radius: 58% 42% 55% 45% / 40% 55% 45% 60%;
// // //           transform: rotate(240deg) scale(0.98);
// // //         }
// // //         100% {
// // //           border-radius: 50% 50% 65% 35% / 50% 50% 50% 50%;
// // //           transform: rotate(360deg) scale(1);
// // //         }
// // //       }
// // //     `;
// // //     document.head.appendChild(style);
// // //     return () => document.head.removeChild(style);
// // //   }, []);

// // //   return (
// // //     <div className="flex h-screen w-full items-center justify-center bg-blue-200">
// // //       <div className="relative h-28 w-28">

// // //         {/* GROUND SHADOW */}
// // //         <div className="absolute inset-4 rounded-full bg-black/15 blur-xl translate-y-4" />

// // //         {/* MAIN BODY */}
// // //         <div
// // //           className="
// // //             absolute inset-0
// // //             animate-[blob_3.2s_ease-in-out_infinite]
// // //             rounded-full
// // //             bg-[radial-gradient(circle_at_30%_30%,#3b6fd8_0%,#2b54a2_55%,#0f172a_100%)]
// // //             shadow-[inset_-14px_-18px_28px_rgba(0,0,0,0.35),inset_12px_12px_20px_rgba(255,255,255,0.4)]
// // //           "
// // //         />

// // //         {/* RIM HIGHLIGHT */}
// // //         <div
// // //           className="
// // //             absolute inset-0
// // //             rounded-full
// // //             bg-[radial-gradient(circle_at_70%_25%,rgba(0, 34, 121, 0.6),transparent_55%)]
// // //             pointer-events-none
// // //           "
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useEffect } from "react";

// // export default function BlobLoader() {
// //   useEffect(() => {
// //     const style = document.createElement("style");
// //     style.innerHTML = `
// //       @keyframes blob {
// //         0% { border-radius: 50% 50% 65% 35% / 50% 50% 50% 50%; transform: rotate(0deg) scale(1); }
// //         33% { border-radius: 62% 38% 40% 60% / 55% 60% 40% 45%; transform: rotate(120deg) scale(1.04); }
// //         66% { border-radius: 58% 42% 55% 45% / 40% 55% 45% 60%; transform: rotate(240deg) scale(0.98); }
// //         100% { border-radius: 50% 50% 65% 35% / 50% 50% 50% 50%; transform: rotate(360deg) scale(1); }
// //       }

// //       .sqrt-pattern {
// //         position: absolute;
// //         width: 100%;
// //         height: 100%;
// //         opacity: 0.08;
// //         font-size: 24px;
// //         font-weight: 300;
// //         color: #333;
// //         overflow: hidden;
// //         pointer-events: none;
// //       }

// //       .sqrt-pattern span {
// //         position: absolute;
// //         font-family: 'Courier New', monospace;
// //         letter-spacing: 8px;
// //         line-height: 1.8;
// //       }
// //     `;
// //     document.head.appendChild(style);
// //     return () => document.head.removeChild(style);
// //   }, []);

// //   // Generate grid of sqrt symbols
// //   const sqrtPatterns = [];
// //   for (let i = 0; i < 5; i++) {
// //     for (let j = 0; j < 5; j++) {
// //       sqrtPatterns.push(
// //         <span key={`${i}-${j}`} style={{ top: `${i * 20}%`, left: `${j * 20}%` }}>
// //           √ √ √
// //         </span>
// //       );
// //     }
// //   }

// //   return (
// //     <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
// //       {/* SQRT PATTERN BG */}
// //       <div className="sqrt-pattern">
// //         {sqrtPatterns}
// //       </div>

// //       {/* MAIN LOADER */}
// //       <div className="relative w-40 h-40">
// //         {/* GROUND SHADOW */}
// //         <div
// //           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-black rounded-full blur-md"
// //           style={{ opacity: 0.15 }}
// //         />

// //         {/* MAIN BODY */}
// //         <div
// //           className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse"
// //           style={{
// //             animation: "blob 4s infinite",
// //             boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
// //           }}
// //         />

// //         {/* RIM HIGHLIGHT */}
// //         <div
// //           className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-30 pointer-events-none"
// //           style={{
// //             animation: "blob 4s infinite",
// //             borderRadius: "inherit",
// //           }}
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect } from "react";

// export default function BlobLoader() {
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       @keyframes blob {
//         0% { border-radius: 50% 50% 65% 35% / 50% 50% 50% 50%; transform: rotate(0deg) scale(1); }
//         33% { border-radius: 62% 38% 40% 60% / 55% 60% 40% 45%; transform: rotate(120deg) scale(1.04); }
//         66% { border-radius: 58% 42% 55% 45% / 40% 55% 45% 60%; transform: rotate(240deg) scale(0.98); }
//         100% { border-radius: 50% 50% 65% 35% / 50% 50% 50% 50%; transform: rotate(360deg) scale(1); }
//       }

//       .grid-pattern {
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         opacity: 0.12;
//         pointer-events: none;
//       }

//       .grid-pattern svg {
//         width: 100%;
//         height: 100%;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
//       {/* GRID PATTERN BG */}
//       <div className="grid-pattern">
//         <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="1.5" />
//             </pattern>
//           </defs>
//           <rect width="1200" height="800" fill="url(#grid)" />
//         </svg>
//       </div>

//       {/* MAIN LOADER */}
//       <div className="relative w-40 h-40">
//         {/* GROUND SHADOW */}
//         <div
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-black rounded-full blur-md"
//           style={{ opacity: 0.15 }}
//         />

//         {/* MAIN BODY */}
//         <div
//           className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse"
//           style={{
//             animation: "blob 4s infinite",
//             boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
//           }}
//         />

//         {/* RIM HIGHLIGHT */}
//         <div
//           className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-30 pointer-events-none"
//           style={{
//             animation: "blob 4s infinite",
//             borderRadius: "inherit",
//           }}
//         />
//       </div>
//     </div>
//   );
// }