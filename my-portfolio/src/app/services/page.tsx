// src/app/services/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Workflow,
  Cloud,
  Layers,
  Presentation,
  GraduationCap,
  ArrowRight,
  CalendarDays,
  Download,
  Menu,
  X,
} from "lucide-react";

type Service = {
  title: string;
  icon: React.ReactNode;
  blurb: string;
  bullets: string[];
};

const BOOKING_URL = "https://calendar.app.google/WAKPhUeznKAU7Sxq7";

const SERVICES: Service[] = [
  {
    title: "Web & App Development",
    icon: <Code2 className="opacity-90" size={18} />,
    blurb:
      "Modern, responsive websites and full-stack apps with React/Next.js, Node.js, ASP.NET, and Tailwind—fast, accessible, and maintainable.",
    bullets: [
      "Landing pages, portfolios, small-business sites",
      "Full-stack apps (auth, dashboards, admin panels)",
      "API design & integration (REST/GraphQL)",
    ],
  },
  {
    title: "Custom Software Solutions",
    icon: <Workflow className="opacity-90" size={18} />,
    blurb:
      "Tools that fit your workflow: automation scripts, internal utilities, and data-driven apps using Java, C#, Python, and SQL.",
    bullets: [
      "Process automation & batch jobs",
      "Data import/export and Excel integrations",
      "ML-powered features (e.g., risk prediction)",
    ],
  },
  {
    title: "Cloud & DevOps Setup",
    icon: <Cloud className="opacity-90" size={18} />,
    blurb:
      "Reliable deployments and pipelines on AWS/Azure with Docker, GitHub Actions, Jenkins, and sensible monitoring.",
    bullets: [
      "CI/CD pipelines & containerization",
      "Secure app hosting & environment setup",
      "DB design, backups, performance tuning",
    ],
  },
  {
    title: "Power Platform / Dynamics 365 Solutions",
    icon: <Layers className="opacity-90" size={18} />,
    blurb:
      "Low-code apps and CRM customizations to speed up internal processes—forms, business rules, workflows, and dashboards.",
    bullets: [
      "Power Apps (Canvas/Model-Driven) + Automations",
      "Dataverse schema, roles, and governance",
      "Dynamics 365 forms, scripts, and views",
    ],
  },
  {
    title: "Presentation Design (PowerPoint)",
    icon: <Presentation className="opacity-90" size={18} />,
    blurb:
      "Professional, clear, and engaging slide decks tailored for any audience—business, school, or public speaking.",
    bullets: [
      "Business: pitches, strategy, reports, client demos",
      "Academic: class projects, research, capstones",
      "Custom templates, visuals, charts, tasteful animation",
    ],
  },
  {
    title: "Tutoring & Mentorship",
    icon: <GraduationCap className="opacity-90" size={18} />,
    blurb:
      "Supportive tutoring for Computer Science and core academics—from high school through college-level prep.",
    bullets: [
      "Computer Science: Programming, Data Structures, Web Dev",
      "Math: HS Algebra I & II, Geometry, Calculus",
      "Science: Chemistry fundamentals & problem solving",
      "Test Prep: SAT (esp. Math), SHSAT; study plans & drills",
    ],
  },
];

/* ------------------------------ NAVBAR ------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 supports-[backdrop-filter]:bg-slate-950/50 backdrop-blur">
      <div className="mx-auto max-w-screen-xl h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo + Name (internal route => Link) */}
        <Link
          href="/#top"
          className="font-semibold tracking-tight hover:opacity-90 flex items-center gap-2"
        >
          <Image
            src="/me.jpg"
            alt="Gyamjo Sherpa"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border border-white/20 object-cover"
            priority
          />
          Gyamjo Sherpa
        </Link>

        {/* Desktop Nav (all internal => Link) */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="navlink" href="/#experience">Experience</Link>
          <Link className="navlink" href="/#projects">Projects</Link>
          <Link className="navlink" href="/#skills">Skills</Link>
          <Link className="navlink" href="/#education">Education</Link>
          <Link className="navlink" href="/#contact">Contact</Link>
          <Link className="navlink" href="/services">Services</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Book a call (external => <a>) */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-3 py-1.5 text-xs font-medium hover:opacity-90"
          >
            <CalendarDays size={14} /> Book a call
          </a>

          {/* Resume (static file => <a>) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/90 text-slate-900 px-3 py-1.5 text-xs font-medium hover:opacity-100"
          >
            <Download size={14} /> Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-nav"
        role="navigation"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden border-t border-white/10 bg-slate-950/90 backdrop-blur"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 grid gap-3 text-sm">
          <Link className="navlink" href="/#experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link className="navlink" href="/#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link className="navlink" href="/#skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link className="navlink" href="/#education" onClick={() => setOpen(false)}>Education</Link>
          <Link className="navlink" href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link className="navlink" href="/services" onClick={() => setOpen(false)}>Services</Link>

          {/* Book a call (external) */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 w-max px-3 py-1.5 text-xs font-medium"
            onClick={() => setOpen(false)}
          >
            <CalendarDays size={14} /> Book a call
          </a>

          {/* Resume (static file) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 w-max px-3 py-1.5 text-xs font-medium"
            onClick={() => setOpen(false)}
          >
            <Download size={14} /> Resume
          </a>
        </div>
      </motion.div>

      <style>{`.navlink{opacity:.85} .navlink:hover{opacity:1}`}</style>
    </div>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="mt-6 border-t border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} Gyamjo Sherpa • NYC</div>
        <div className="opacity-80">Built with Next.js, Tailwind, Framer Motion</div>
      </div>
    </footer>
  );
}

/* --------------------------- AMBIENT ELEMENTS --------------------------- */
function BackToTop() {
  return (
    <Link
      href="/#top"
      className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-xs backdrop-blur hover:bg-white/10"
      aria-label="Back to top"
    >
      ↑ Top
    </Link>
  );
}

function AmbientBlobs() {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, -12, 0], x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 11 }}
      />
    </>
  );
}

/* ------------------------------ PAGE ------------------------------ */
export default function ServicesPage() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <Navbar />

      {/* Header */}
      <header className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h1>
        <p className="mt-4 text-slate-300 max-w-prose">
          I help students, individuals, and organizations turn ideas into
          reliable, user-friendly software—and clear, compelling presentations.
          Pick what you need, or combine services for an end-to-end solution.
        </p>

        {/* Header CTAs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            <CalendarDays size={16} /> Book a call
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            Send a message
          </Link>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 hover:border-white/20 transition"
            >
              <div className="flex items-center gap-2">
                {s.icon}
                <h2 className="text-lg font-semibold">{s.title}</h2>
              </div>
              <p className="mt-2 text-sm text-slate-300">{s.blurb}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* How it works */}
        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { t: "1. Quick Chat", d: "Tell me your goal, timeline, and budget." },
            { t: "2. Plan & Quote", d: "Clear scope, milestones, and a no-surprise estimate." },
            { t: "3. Build & Deliver", d: "Frequent check-ins, demo links, and smooth handoff." },
          ].map((step) => (
            <div
              key={step.t}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <div className="text-sm uppercase tracking-wider text-slate-400">
                {step.t}
              </div>
              <div className="mt-2 text-slate-200">{step.d}</div>
            </div>
          ))}
        </section>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            <CalendarDays size={16} /> Book a call
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
          >
            Get a free estimate <ArrowRight size={16} />
          </Link>
          <span className="text-sm text-slate-400">
            Prefer email?{" "}
            <a
              className="underline hover:text-white"
              href="mailto:gyamjosherpa1@gmail.com"
            >
              gyamjosherpa1@gmail.com
            </a>
          </span>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-xs text-slate-500">
          Student discounts and non-profit rates available upon request.
        </p>
      </main>

      <Footer />
      <BackToTop />
      <AmbientBlobs />
    </div>
  );
}
