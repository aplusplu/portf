import BasicLogo from "./shared/BasicLogo";
import { profile } from "../data/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-4">
          <BasicLogo className="h-12 sm:h-14" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
              Jonas Belu
            </p>
            <p className="text-xs tracking-[0.22em] text-slate-400 uppercase">
              WebDev · Pharma · Execution
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a
            href="/media/ATS-JB25.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            CV
          </a>
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
