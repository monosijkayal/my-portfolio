"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smoothWheel: true, // enable smooth scrolling with mouse wheel
      // smoothTouch: false, // removed as it is not a valid property
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // optional: handle resize or route change
    return () => {
      lenis.destroy();
    };
  }, []);
}
