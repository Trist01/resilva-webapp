"use client";

import { useEffect, useRef } from "react";

interface ParallaxSectionProps {
  src: string;
  children?: React.ReactNode;
}

export function ParallaxSection({ src, children }: ParallaxSectionProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const rect = bgRef.current.parentElement!.getBoundingClientRect();
      const offset = Math.max(0, -rect.top);
      bgRef.current.style.transform = `scale(${1.15 + offset * 0.0002}) translateY(${offset * 0.1}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="h-screen relative overflow-hidden flex items-center justify-center">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-no-repeat bg-center will-change-transform"
        style={{
          backgroundImage: `url('${src}')`,
          transform: "scale(1.15) translateY(0px)",
        }}
      />
      {children && (
        <div className="relative z-10 px-8 text-center">{children}</div>
      )}
    </div>
  );
}
