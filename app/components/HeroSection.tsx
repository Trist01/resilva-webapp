"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./Button";
import { BecomeARewiIderButton } from "./BecomeARewiIderButton";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      // Gentle parallax drift + subtle zoom on scroll
      bgRef.current.style.transform = `scale(${1.15 + y * 0.0002}) translateY(${y * 0.1}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-[100dvh] relative overflow-hidden flex flex-col text-white">
      {/* Parallax background — driven by scroll listener */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('/images/hero.webp')] bg-cover bg-center will-change-transform"
        style={{ transform: "scale(1.15) translateY(0px)" }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-start justify-between px-8 py-7 md:px-12">
        <div>
          <h1 className="text-4xl font-bold">RE:SILVA</h1>
        </div>
        <div className="hidden md:flex items-center gap-10 font-bold tracking-[0.18em] lowercase lg:text-lg [text-shadow:_0_1px_6px_rgba(0,0,0,0.5)]">
          <Link
            href="#story"
            className="hover:text-white/70 transition-colors duration-200"
          >
            Our story
          </Link>
          <Link
            href="#approach"
            className="hover:text-white/70 transition-colors duration-200"
          >
            Our approach
          </Link>
          <Link
            href="#involved"
            className="hover:text-white/70 transition-colors duration-200"
          >
            Get involved
          </Link>
        </div>
      </nav>

      {/* Hero content */}
      <section className="relative z-10 flex-1 flex flex-col justify-between px-8 pt-50 pb-14 md:px-12">
        <h2
          className="font-extrabold leading-[0.92] tracking-tight [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]"
          style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)" }}
        >
          We plant trees and bushes.
          <br />
          You follow them.
          <br />
          <span className="text-fern">Down to the roots.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mt-8 md:mt-0">
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto md:ml-auto">
            <BecomeARewiIderButton variant="primary" />
            <ButtonLink href="#approach" variant="secondary">
              How it works
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
