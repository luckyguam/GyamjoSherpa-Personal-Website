'use client';
// src/app/page.tsx — responsive & accessible polish
// Uses: Tailwind, framer-motion, lucide-react

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Rocket,
  Download,
  Briefcase,
  GraduationCap,
  Wrench,
  Menu,
  X
} from "lucide-react";

export default function Page() {
  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 selection:bg-indigo-400/30"
    >
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <AmbientBlobs />
    </div>
  );
}

/* ------------------------------ NAVBAR ------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 supports-[backdrop-filter]:bg-slate-950/50 backdrop-blur">
      <div className="mx-auto max-w-screen-xl h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo + Name */}
        <a
          href="#top"
          className="font-semibold tracking-tight hover:opacity-90 flex items-center gap-2"
        >
          <img
            src="/me.jpg" // <-- place your image in public/me.jpg
            alt="Gyamjo Sherpa"
            className="w-8 h-8 rounded-full border border-white/20 object-cover"
          />
          Gyamjo Sherpa
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="navlink" href="#experience">Experience</a>
          <a className="navlink" href="#projects">Projects</a>
          <a className="navlink" href="#skills">Skills</a>
          <a className="navlink" href="#education">Education</a>
          <a className="navlink" href="#contact">Contact</a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-3 py-1.5 text-xs font-medium hover:opacity-90"
          >
            <Download size={14} /> Resume
          </a>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden border-t border-white/10"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 grid gap-3 text-sm">
          <a className="navlink" href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a className="navlink" href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a className="navlink" href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a className="navlink" href="#education" onClick={() => setOpen(false)}>Education</a>
          <a className="navlink" href="#contact" onClick={() => setOpen(false)}>Contact</a>
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


/* ------------------------------- HERO ------------------------------- */
function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden" style={{ containerType: "inline-size" }}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <motion.h1
            className="font-black leading-tight tracking-tight text-[clamp(2rem,7vw,3.75rem)]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Aspiring Software Developer
          </motion.h1>
          <motion.p
            className="mt-4 text-slate-300 max-w-prose text-[clamp(0.95rem,2.5vw,1.05rem)]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.45 }}
          >
            I am a Computer Science graduate and aspiring Software Engineer with experience in both private companies and government organizations, where I have delivered solutions that improved efficiency, usability, and workflows. I’m passionate about learning new technologies, solving problems, and seeing my code come to life. Especially, when it makes someone’s job easier or creates a better experience. I thrive in collaborative settings, enjoy contributing as both a supportive teammate and a capable leader, and take pride in turning ideas into real-world impact. Open to work and eager to bring my skills, creativity, and drive to projects that make a difference.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTA href="#projects" icon={<Rocket size={16} />}>See my work</CTA>
            <CTA href="#contact" variant="ghost" icon={<Mail size={16} />}>Say hi</CTA>
            <CTA href="/resume.pdf" variant="ghost" icon={<Download size={16} />}>Resume</CTA>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 opacity-80 text-sm">
            <IconLink href="https://github.com/luckyguam" icon={<Github size={16} />}>GitHub</IconLink>
            <IconLink href="https://www.linkedin.com/in/gyamjosherpa/" icon={<Linkedin size={16} />}>LinkedIn</IconLink>
            <IconLink href="mailto:gyamjosherpa1@gmail.com" icon={<Mail size={16} />}>Email</IconLink>
          </div>
          <div className="mt-4 text-md text-slate-400">Authorized to work in the U.S. — No visa required</div>
        </div>

        {/* Feature card with tilt */}
        <motion.div
          className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl"
          initial={reduce ? false : { scale: 0.96, opacity: 0 }}
          whileInView={reduce ? {} : { scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={reduce ? undefined : { rotate: -1.2, translateY: -4 }}
        >
          <div className="absolute -top-10 -left-8 h-40 w-40 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-12 -right-10 h-52 w-52 bg-indigo-500/20 blur-3xl rounded-full" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl">✨</div>
              <p className="mt-3 text-slate-300 text-sm sm:text-base">
                React • Next.js • Tailwind • Framer Motion
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Java • C • C++ • Python • C# • SQL • JavaScript • TypeScript • Node.js • ASP.NET • Bootstrap • AngularJS • MySQL • PostgreSQL • MongoDB • AWS • Azure • Docker • Git • GitHub Actions • Jenkins • CI/CD Pipelines • REST APIs • GraphQL • Power BI • Tableau • Microsoft Power Platform
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA({ href, children, icon, variant = "solid" }: { href: string; children: React.ReactNode; icon?: React.ReactNode; variant?: "solid" | "ghost" }) {
  const base = "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-400/40";
  const styles = variant === "solid" ? "bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-900 hover:opacity-90" : "bg-white/5 border border-white/10 text-slate-100 hover:bg-white/10";
  return (
    <a className={`${base} ${styles}`} href={href}>
      {icon}
      {children}
    </a>
  );
}

function IconLink({ href, children, icon }: { href: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-white">
      {icon}
      <span className="opacity-80 group-hover:opacity-100 text-sm">{children}</span>
    </a>
  );
}
/* ---------------------------- EXPERIENCE ---------------------------- */
function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14" style={{ containerType: "inline-size" }}>
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="opacity-80" size={18} />
        <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/10" />
        <TimelineItem side="left" title="Application Developer Intern" org="NYC Department of Environmental Protection (DEP)" location="Queens, NY" period="Jun 2025 – Present" bullets={[
          "Worked on HR & onboarding apps using Agile sprints in Azure DevOps.",
          "Improved backend logic and added features in Dynamics 365; wrote JavaScript for form logic.",
          "Helped rebuild the DTA (Delaware/Distribution Treatment Advisory) system; co-designed UI and developed with C#/.NET.",
        ]} />
        <TimelineItem side="right" title="Software Developer Intern" org="VJ X-ray, Inc." location="Bohemia, NY" period="May 2024 – Aug 2024" bullets={[
          "Built a Windows app (C#/.NET) to securely access SharePoint & Excel data via Microsoft Graph + Azure AD.",
          "Created a custom Excel search to filter results and trigger related document downloads.",
          "Designed the UI in Visual Studio and delivered the project end-to-end on time.",
        ]} />
        <TimelineItem side="left" title="Software Developer Intern" org="NYC Dept. of Health & Mental Hygiene (DOHMH)" location="LIC, NY" period="Jun 2023 – Aug 2023" bullets={[
          "Co-built an interactive ASP.NET MVC web app for clients & assignees; collaborated with PM on goals.",
          "Designed SQL databases, refined UI mockups, and implemented backend features with C#, JS, AngularJS.",
          "Handled testing, user training, and deployment across the full lifecycle.",
        ]} />
      </div>
    </section>
  );
}

function TimelineItem({ side, title, org, location, period, bullets }: { side: "left" | "right"; title: string; org: string; location: string; period: string; bullets: string[]; }) {
  const align = side === "left" ? "md:pr-12" : "md:pl-12";
  return (
    <div className="relative grid grid-cols-[28px_1fr] md:grid-cols-2 gap-4 md:gap-10 py-6">
      <div className="col-span-1 flex justify-center md:justify-end md:col-span-1">
        <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
      </div>
      <div className={`md:col-span-1 ${align}`}>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-semibold">{title}</h3>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">{org}</span>
          </div>
          <div className="mt-1 text-xs text-slate-400">{location} • {period}</div>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- PROJECTS ----------------------------- */
const PROJECTS = [
  {
    title: "Financial Risk Predictor",
    summary: "Java-based Random Forest model to predict financial distress with data imputation, bootstrapping, and tailored recommendations.",
    tags: ["Java", "Random Forest", "ML", "CSV"],
    repo: "https://github.com/luckyguam/FinancialStatusPredictionApplication",
  },
  {
    title: "Community Health Data Query System",
    summary: "Java + SQL on AWS that turns natural language into SQL to explore community health datasets with dynamic visualization.",
    tags: ["Java", "SQL", "AWS", "NLP"],
    repo: "https://github.com/luckyguam/Community-Health-Data-Query-System",
  },
  {
    title: "Inspirational Calendar",
    summary: "Node.js app integrating Google Calendar (OAuth 2.0) + a quotes API to show daily inspiration alongside events.",
    tags: ["Node.js", "OAuth 2.0", "API"],
  },
] as const;

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: { title: string; summary: string; tags: readonly string[]; repo?: string } }) {
  const reduce = useReducedMotion();
  return (
    <motion.div whileHover={reduce ? undefined : { y: -6, rotate: -0.3 }} transition={{ type: "spring", stiffness: 200, damping: 16 }}>
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-4 h-full flex flex-col">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 text-slate-300 flex-1 text-sm sm:text-base">{p.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-xs rounded-xl bg-white/10 px-2 py-1">{t}</span>
          ))}
        </div>
        <div className="mt-4">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-xl border border-white/20 px-3 py-1.5 hover:bg-white/10">
              <Github size={16} /> Repo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------ SKILLS ------------------------------ */
function Skills() {
  const LANG = ["Java", "C", "C++", "SQL", "Python", "JavaScript", "TypeScript", "C#", "HTML", "CSS", "Bash/Shell"];
  const FRAME = ["ASP.NET", "JavaFX", "Bootstrap", "React", "Next.js", "Node.js", "Random Forest", "OpenCV", "AngularJS", "Tailwind CSS", "Express.js"];
  const TOOLS = ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Git", "Docker", "VS Code", "Visual Studio", "Eclipse", "Oracle DB", "Azure AD", "Microsoft Graph API", "AWS", "AWS S3", "Tableau", "Power BI", "Microsoft Power Platform", "Power Query", "Excel Lookup", "Azure DevOps", "Dynamics 365", "GitHub Actions", "Jenkins", "CI/CD Pipelines", "REST APIs", "GraphQL"];

  return (
    <section id="skills" className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="opacity-80" size={18} />
        <h2 className="text-2xl md:text-3xl font-bold">Technical Skills</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SkillGroup title="Languages" items={LANG} />
        <SkillGroup title="Frameworks & Libraries" items={FRAME} />
        <SkillGroup title="Developer Tools" items={TOOLS} />
      </div>
      <div className="mt-6 text-slate-300 text-sm">
        <b>Non‑technical:</b> Communication & Presentation • Teamwork & Leadership • Multi‑tasking & Prioritization • Problem Solving
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="text-sm uppercase tracking-wider text-slate-400">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="text-xs rounded-xl bg-white/10 px-2 py-1">{it}</span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- EDUCATION ---------------------------- */
function Education() {
  return (
    <section id="education" className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="opacity-80" size={18} />
        <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <div className="flex flex-wrap items-baseline gap-3">
          <div className="text-base sm:text-lg font-semibold">CUNY Queens College — B.S. in Computer Science</div>
          <div className="text-xs sm:text-sm text-slate-400">Graduated Jul 2025 • Queens, NY</div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ----------------------------- */


import {FileText} from "lucide-react";

function Contact() {
  const [email, setEmail] = useState("");

  function handleQuickEmailClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const useGmail = window.confirm(
      "Open Gmail compose? (OK = Gmail, Cancel = default mail app)"
    );
    const to = "gyamjosherpa1@gmail.com";
    if (useGmail) {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`,
        "_blank"
      );
    } else {
      window.location.href = `mailto:${to}`;
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Single full email value
    formData.set("email", email.trim());
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const text = await res.text();
      if (!res.ok) {
        console.error("Email send error:", text);
        alert(text || "Hmm, couldn’t send that. Please try again.");
        return;
      }

      alert("Thanks! Your message is on its way.");
      form.reset();
      setEmail("");
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Try again later.");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
      <p className="text-slate-300 max-w-prose">
        Open to roles anywhere in the United States and remote. Let’s build
        something delightful.
      </p>

      {/* Quick actions with icons + Gmail/mailto chooser */}
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="#"
          onClick={handleQuickEmailClick}
          className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 text-sm"
        >
          <Mail size={16} /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/gyamjosherpa/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          href="https://github.com/luckyguam"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
        >
          <FileText size={16} /> Resume (PDF)
        </a>
      </div>
      <div className="mt-4 text-sm text-slate-400">Phone: 929-509-7249</div>

      {/* Contact form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 max-w-lg bg-slate-900/60 p-6 rounded-xl shadow-lg"
        noValidate
      >
        <h3 className="text-xl font-semibold mb-2">Send me a message</h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-xl bg-slate-800/80 placeholder-slate-400 text-white"
        />

        {/* Email - single full input */}
        <label className="block text-xs text-slate-400">
          Your Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full p-3 rounded-xl bg-slate-800/80 placeholder-slate-400 text-white"
          />
        </label>

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-3 rounded-xl bg-slate-800/80 placeholder-slate-400 text-white"
        />

        {/* Honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white font-semibold"
        >
          Send Message
        </button>
        <p className="text-xs text-slate-400">
          Your message will be delivered directly to my inbox.
        </p>
      </form>
    </section>
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
    <a href="#top" className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-xs backdrop-blur hover:bg-white/10" aria-label="Back to top">↑ Top</a>
  );
}

function AmbientBlobs() {
  const reduce = useReducedMotion();
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl" animate={reduce ? {} : { y: [0, 16, 0], x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 10 }} />
      <motion.div aria-hidden className="pointer-events-none fixed -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" animate={reduce ? {} : { y: [0, -12, 0], x: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 11 }} />
    </>
  );
}
