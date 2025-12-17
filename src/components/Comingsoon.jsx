import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'

export const Comingsoon = () => {
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("opacity-100", "scale-100");
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onExplore = () => navigate('/commercial');
  const onConsult = () => window.location.href = 'mailto:consult@realtybureau.com?subject=Land%20Consultant%20Inquiry';

  return (
    <div className="relative h-[100vh] max-h-200 overflow-hidden bg-black/15">
      <video
        src="https://res.cloudinary.com/dtwcgfmar/video/upload/v1763794985/copy_ED8325DB-53DC-47E4-896A-36466901BAD1_hqt1d2.mov"
        className="w-full h-[100vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Redesigned TEXT OVERLAY (initially hidden, fades in when visible) */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 transform scale-95 transition-all duration-700"
      >
        {/* full-size dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="max-w-3xl text-center px-6 py-8 rounded-xl pointer-events-auto z-20">
          <img src="/assets/realtybureau.png" alt="RealtyBureau" className="h-30 justify-center mx-auto" onClick={()=>navigate('/')}/>
          <p className="mt-2 text-white font-semibold text-xl">Your Trusted Partner for Premium Plots in Kochi</p>
          <p className="mt-4 text-gray-200 text-sm md:text-lg">Handpicked residential & commercial plots across Kerala, verified for legality, value, and future growth.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={onExplore} className="px-5 py-3 rounded-full bg-[#2b55a2ee] text-white font-medium hover:bg-[#2b55a2ee]">Explore Available Plots</button>
            <button 
            // onClick={onConsult} 
            className="px-5 py-3 rounded-full border border-white text-white hover:bg-white/5">Speak to a Land Consultant</button>
          </div>
        </div>
      </div>
    </div>
  );
};