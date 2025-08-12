"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-black leading-tight"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">Gyamjo Sherpa</span>.
            <br />I build playful, interactive web apps.
          </motion.h1>

          <motion.p
            className="mt-4 text-slate-300 max-w-prose"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            NYC-based Software Developer (CUNY Queens College, ’25). Interned at NYC DEP, VJ X-ray, and NYC DOHMH. I love TypeScript, Java, C#, and turning ideas into delightful experiences.
          </motion.p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href="#work">See my work</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="#contact">Collaborate</a>
            </Button>
          </div>

          <div className="mt-6 text-sm opacity-80">
            Open to work — Full-stack · Frontend · Civic Tech
          </div>
        </div>

        {/* Fun blob / card */}
        <motion.div
          className="relative h-64 md:h-80 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800"
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ rotate: -0.6 }}
        >
          <div className="absolute -top-10 -left-8 h-40 w-40 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-12 -right-10 h-52 w-52 bg-indigo-500/20 blur-3xl rounded-full" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="text-5xl">🛠️</div>
              <p className="mt-3 text-slate-300">React • Next.js • Tailwind • Framer Motion</p>
              <p className="text-slate-400 text-sm">Java • C# • SQL • Node.js</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
