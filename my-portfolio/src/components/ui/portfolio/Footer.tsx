export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} Gyamjo Sherpa • NYC</div>
        <div className="opacity-80">
          Built with Next.js, Tailwind, Framer Motion, shadcn/ui
        </div>
      </div>
    </footer>
  );
}
