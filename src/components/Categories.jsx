// // // import React from "react";
// // // const Categories = () => {
// // //     const items = [
// // //   {
// // //     id: 1,
// // //     title: "Commercial",
// // //     listings: 10,
// // //     image: "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761135354/Untitled_design_2_1_janmn3.png", // replace with your image path
// // //     href: "/commercial",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Residence",
// // //     listings: 8,
// // //     image: "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761137194/realtybureau_1_puwbp4.png",
// // //     href: "/residential",
// // //   },
// // // //   {
// // // //     id: 3,
// // // //     title: "Category 3",
// // // //     listings: 915,
// // // //     image: "/images/yachts.jpg",
// // // //     href: "#",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     title: "Category 4",
// // // //     listings: 38,
// // // //     image: "/images/jets.jpg",
// // // //     href: "#",
// // // //   },
// // // ];
// // //   return (
// // //     <section className="mx-auto px-6 sm:px-8 py-12 max-w-[90vw]">
// // //       <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-8">
// // //         Featured Categories
// // //       </h2>

// // //       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
// // //         {items.map((item) => (
// // //           <a
// // //             key={item.id}
// // //             href={item.href || "#"}
// // //             className="relative block group overflow-hidden bg-gray-100"
// // //             aria-label={`${item.title} — ${item.listings} listings`}
// // //           >
// // //             {/* Image */}
// // //             <img
// // //               src={item.image}
// // //               alt={item.title}
// // //               className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 transform group-hover:scale-105"
// // //               draggable="false"
// // //             />

// // //             {/* Dark gradient overlay (bottom) */}
// // //             <div className="absolute inset-0 pointer-events-none">
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
// // //             </div>

// // //             {/* Card content */}
// // //             <div className="absolute left-6 bottom-6 right-6 text-white flex items-center justify-between">
// // //               <div>
// // //                 <h3 className="font-serif text-xl sm:text-2xl md:text-3xl leading-tight">
// // //                   {item.title}
// // //                 </h3>
// // //                 <p className="mt-2 uppercase text-xs tracking-widest text-white/90">
// // //                   {item.listings.toLocaleString()} listings
// // //                 </p>
// // //               </div>

// // //               {/* small arrow */}
// // //               <span className="ml-6 mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20">
// // //                 <svg
// // //                   className="w-4 h-4 text-white"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //                 </svg>
// // //               </span>
// // //             </div>
// // //           </a>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Categories;

// // import React, { useEffect, useState } from "react";
// // import { BASE_URL } from "../utils/urls";

// // const Categories = () => {
// //   const [counts, setCounts] = useState({
// //     Commercial: 0,
// //     Residence: 0,
// //   });

// //   useEffect(() => {
// //     const fetchCounts = async () => {
// //       try {
// //         const [commercialRes, residentialRes] = await Promise.all([
// //           fetch(`${BASE_URL}/plot?category=Commercial&approved=true`),
// //           fetch(`${BASE_URL}/plot?category=Residential&approved=true`),
// //         ]);

// //         const commercialData = await commercialRes.json();
// //         const residentialData = await residentialRes.json();

// //         setCounts({
// //           Commercial: commercialData?.data?.length || 0,
// //           Residence: residentialData?.data?.length || 0,
// //         });
// //       } catch (err) {
// //         console.error("Failed to fetch category counts", err);
// //       }
// //     };

// //     fetchCounts();
// //   }, []);

// //   const items = [
// //     {
// //       id: 1,
// //       title: "Commercial",
// //       listings: counts.Commercial,
// //       image:
// //         "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761135354/Untitled_design_2_1_janmn3.png",
// //       href: "/commercial",
// //     },
// //     {
// //       id: 2,
// //       title: "Residence",
// //       listings: counts.Residence,
// //       image:
// //         "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761137194/realtybureau_1_puwbp4.png",
// //       href: "/residential",
// //     },
// //   ];

// //   return (
// //     <section className="mx-auto px-6 sm:px-8 py-12 max-w-[90vw]">
// //       <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-8">
// //         Featured Categories
// //       </h2>

// //       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
// //         {items.map((item) => (
// //           <a key={item.id} href={item.href} className="relative group overflow-hidden">
// //             <img
// //               src={item.image}
// //               alt={item.title}
// //               className="w-full h-64 object-cover group-hover:scale-105 transition"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
// //             <div className="absolute bottom-6 left-6 text-white">
// //               <h3 className="text-2xl font-serif">{item.title}</h3>
// //               <p className="uppercase text-xs tracking-widest">
// //                 {item.listings} listings
// //               </p>
// //             </div>
// //           </a>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Categories;



// import React, { useEffect, useState } from "react";
// import { BASE_URL } from "../utils/urls";

// const Categories = () => {
//   const [counts, setCounts] = useState({
//     Commercial: 0,
//     Residence: 0,
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCounts();
//   }, []);

//   const fetchCounts = async () => {
//     try {
//       setLoading(true);
//       const [commercialRes, residentialRes] = await Promise.all([
//         fetch(`${BASE_URL}/plot?category=Commercial&approved=true`),
//         fetch(`${BASE_URL}/plot?category=Residential&approved=true`),
//       ]);

//       // Check if responses are ok before parsing
//       if (!commercialRes.ok || !residentialRes.ok) {
//         throw new Error(`HTTP error! status: ${commercialRes.status || residentialRes.status}`);
//       }

//       const commercialData = await commercialRes.json();
//       const residentialData = await residentialRes.json();

//       setCounts({
//         Commercial: commercialData?.data?.length || 0,
//         Residence: residentialData?.data?.length || 0,
//       });
//     } catch (err) {
//       console.error("Failed to fetch category counts:", err);
//       // Set defaults on error
//       setCounts({ Commercial: 0, Residence: 0 });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const items = [
//     {
//       id: 1,
//       title: "Commercial",
//       listings: counts.Commercial,
//       image:
//         "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761135354/Untitled_design_2_1_janmn3.png",
//       href: "/commercial",
//     },
//     {
//       id: 2,
//       title: "Residence",
//       listings: counts.Residence,
//       image:
//         "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761137194/realtybureau_1_puwbp4.png",
//       href: "/residential",
//     },
//   ];

//   return (
//     <section className="mx-auto px-6 sm:px-8 py-12 max-w-[90vw]">
//       <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-8">
//         Featured Categories
//       </h2>

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {items.map((item) => (
//           <a
//             key={item.id}
//             href={item.href}
//             className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             {/* Image */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
//               draggable="false"
//             />

//             {/* Dark gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//             {/* Card content */}
//             <div className="absolute left-6 bottom-6 right-6 text-white flex items-center justify-between">
//               <div>
//                 <h3 className="font-serif text-xl sm:text-2xl md:text-3xl leading-tight">
//                   {item.title}
//                 </h3>
//                 <p className="mt-2 uppercase text-xs tracking-widest text-white/90">
//                   {loading ? "Loading..." : `${item.listings} listings`}
//                 </p>
//               </div>

//               {/* Arrow icon */}
//               <span className="ml-6 mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20">
//                 <svg
//                   className="w-4 h-4 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </span>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Categories;


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
        "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761135354/Untitled_design_2_1_janmn3.png",
      href: "/commercial",
    },
    {
      id: 2,
      title: "Residence",
      listings: counts.Residence,
      image:
        "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761137194/realtybureau_1_puwbp4.png",
      href: "/residential",
    },
  ];

  return (
    <section className="mx-auto px-6 sm:px-8 py-12 max-w-[90vw]">
      <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-8">
        Featured Categories
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              draggable="false"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Card content */}
            <div className="absolute left-6 bottom-6 right-6 text-white flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 uppercase text-xs tracking-widest text-white/90">
                  {loading ? "Loading..." : `${item.listings} listings`}
                </p>
              </div>

              {/* Arrow icon */}
              <span className="ml-6 mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20">
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
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;