import React, { useEffect, useRef, useState } from "react";

export const Comingsoon = () => {
  const images = [
    "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761137500/Untitled_design_3_1_ox344f.png",
    "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761127062/5_sookqw.png",
    "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761127061/3_jdefi1.png",
    "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761127060/2_djbujq.png",
    "https://res.cloudinary.com/dtwcgfmar/image/upload/v1761127061/4_wtsyua.png"
  ];

  const interval = 5000;
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const next = () =>
    setIndex((i) => {
      const n = i + 1;
      return n >= images.length ? 0 : n;
    });

  const prev = () =>
    setIndex((i) => {
      const p = i - 1;
      return p < 0 ? images.length - 1 : p;
    });

  useEffect(() => {
    // autoplay timer
    if (interval <= 0 || images.length <= 1) return;

    // clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setInterval(() => {
      if (!paused.current) next();
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [interval, images.length]);

  useEffect(() => {
    // keyboard navigation
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  // touch handlers for basic swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    if (endX == null) return;
    const dx = endX - touchStartX.current;
    const threshold = 40; // px
    if (dx > threshold) {
      prev();
    } else if (dx < -threshold) {
      next();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden bg-black "
      role="region"
      aria-label="Coming soon slideshow"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* {images.map((img, i) => {
        // fix: use the string URL directly (not an object)
        const src = img;
        const isActive = i === index;
        return (
          <img
            key={i}
            src={src}
            alt={`slide-${i + 1}`}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-[90vh] object-cover transition-opacity duration-700 ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          />
        );
      })} */}
      <video
    src="https://res.cloudinary.com/dtwcgfmar/video/upload/v1763794985/copy_ED8325DB-53DC-47E4-896A-36466901BAD1_hqt1d2.mov"
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  />
    </div>
  );
};