"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

const Ctx = createContext<{ open: () => void } | null>(null);

export function useRewiIderModal() {
  const ctx = useContext(Ctx);
  if (!ctx)
    throw new Error(
      "useRewiIderModal must be used within RewiIderModalProvider"
    );
  return ctx;
}

function Modal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-forest text-white relative p-10 md:p-14 w-[min(92vw,460px)] aspect-square flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-white/50 hover:text-white transition-colors text-4xl leading-none font-light"
          aria-label="Sluiten"
        >
          ×
        </button>

        <div className="pr-8">
          <h2
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
          >
            Not yet.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Still busy. Follow us on Instagram — you&apos;ll be the first to
            know when it&apos;s time.
          </p>
        </div>

        <div>
          <a
            href="https://www.instagram.com/re.silva.2026/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center justify-center w-full px-8 py-4 font-extrabold text-base md:text-lg tracking-[0.25em] uppercase transition-colors duration-200 bg-mist text-forest hover:bg-white"
          >
            Follow RE:SILVA on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export function RewiIderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </Ctx.Provider>
  );
}
