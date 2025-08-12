"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "backdrop-blur-md bg-slate-900/60 border-b border-white/10" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          gyamjo.dev
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#work" className="opacity-80 hover:opacity-100">Work</Link>
          <Link href="#about" className="opacity-80 hover:opacity-100">About</Link>
          <Link href="#contact" className="opacity-80 hover:opacity-100">Contact</Link>
          <Link href="/resume.pdf" target="_blank" className="opacity-80 hover:opacity-100">
            Resume
          </Link>
        </nav>
        <Button asChild size="sm" className="rounded-xl">
          <a href="mailto:gyamjosherpa@example.com">Say hi</a>
        </Button>
      </div>
    </div>
  );
}
