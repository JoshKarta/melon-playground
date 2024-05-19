"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { MouseParallax } from "react-just-parallax";
import Lenis from "lenis";
import { Square } from "lucide-react";

export default function Page() {
  const ref = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full h-[100vh] relative overflow-hidden">
        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          parallaxContainerRef={ref}
        >
          <div className="relative h-full w-full">
            <X className="absolute right-10 top-1/2 text-red-500" />
            <Square className="absolute left-10 top-10 text-pink-500" />
          </div>
        </MouseParallax>
      </div>
      <div className="h-[100dvh] bg-neutral-100"></div>
    </>
  );
}
