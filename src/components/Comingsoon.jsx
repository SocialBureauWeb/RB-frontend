import React, { useEffect, useRef, useState } from "react";

export const Comingsoon = () => {


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
      <video
        src="https://pub-dbc24446d37a40aeb1dfdd10992cd2d9.r2.dev/copy_ED8325DB-53DC-47E4-896A-36466901BAD1_hqt1d2.mov"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};