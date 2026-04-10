import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 24;
    const y = (e.clientY / innerHeight - 0.5) * 24;
    setOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-16"
    >
      {/* ambient energy */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.06),transparent_34%)]" />

        {/* fluid light layer 1 */}
        <motion.div
          animate={{
            x: offset.x * -0.35,
            y: offset.y * -0.35,
            scale: [1, 1.04, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 30, damping: 18 },
            y: { type: "spring", stiffness: 30, damping: 18 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute left-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-orange-400/18 blur-[140px]"
        />

        {/* fluid light layer 2 */}
        <motion.div
          animate={{
            x: offset.x * 0.3,
            y: offset.y * 0.3,
            scale: [1, 1.06, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 28, damping: 18 },
            y: { type: "spring", stiffness: 28, damping: 18 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-[-100px] right-[-80px] h-[420px] w-[420px] rounded-full bg-violet-500/18 blur-[150px]"
        />

        {/* fluid light layer 3 */}
        <motion.div
          animate={{
            x: offset.x * -0.22,
            y: offset.y * 0.22,
            scale: [1, 1.08, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 24, damping: 18 },
            y: { type: "spring", stiffness: 24, damping: 18 },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute left-[38%] top-[24%] h-[320px] w-[320px] rounded-full bg-lime-400/10 blur-[130px]"
        />

        {/* brighter neon core behind portrait */}
        <motion.div
          animate={{
            x: offset.x * -0.16,
            y: offset.y * -0.16,
            opacity: [0.45, 0.65, 0.45],
            scale: [1, 1.03, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 26, damping: 18 },
            y: { type: "spring", stiffness: 26, damping: 18 },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute right-[12%] top-[18%] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-orange-300/18 via-violet-300/18 to-lime-300/12 blur-[110px]"
        />

        {/* soft mechanical shadow drift */}
        <motion.div
          animate={{
            x: offset.x * 0.12,
            y: offset.y * 0.12,
            opacity: [0.45, 0.6, 0.45],
          }}
          transition={{
            x: { type: "spring", stiffness: 20, damping: 18 },
            y: { type: "spring", stiffness: 20, damping: 18 },
            opacity: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-x-10 bottom-10 h-24 rounded-full bg-black/60 blur-3xl"
        />
      </div>

      {/* text side */}
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-xs uppercase tracking-[0.28em] text-slate-400"
        >
          {profile.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="mt-4 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mt-4 bg-gradient-to-r from-orange-300 via-violet-300 to-lime-300 bg-clip-text text-3xl font-black leading-tight text-transparent sm:text-4xl lg:text-5xl"
        >
          builds across systems.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          {profile.heroIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
          >
            Explore projects
          </a>

          <a
            href="/media/ATS-JB25.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-lime-300/20 bg-lime-300/10 px-6 py-3 font-semibold text-lime-200 transition hover:bg-lime-300/20"
          >
            Open CV
          </a>
        </motion.div>
      </div>

      {/* visual side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.15 }}
        className="relative flex min-h-[540px] items-center justify-center"
      >
        {/* layered glows behind image only */}
        <motion.div
          animate={{
            x: offset.x * -0.35,
            y: offset.y * -0.35,
            opacity: [0.65, 0.9, 0.65],
          }}
          transition={{
            x: { type: "spring", stiffness: 35, damping: 18 },
            y: { type: "spring", stiffness: 35, damping: 18 },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-orange-300/18 via-violet-300/18 to-lime-300/12 blur-[120px]"
        />

        <motion.div
          animate={{
            x: offset.x * 0.25,
            y: offset.y * 0.25,
            scale: [1, 1.04, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 30, damping: 20 },
            y: { type: "spring", stiffness: 30, damping: 20 },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute h-[380px] w-[380px] rounded-full border border-white/10 bg-white/5 blur-[2px]"
        />

        <motion.div
          animate={{
            x: offset.x * -0.18,
            y: offset.y * -0.18,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute inset-x-10 bottom-10 h-24 rounded-full bg-black/60 blur-3xl"
        />

        {/* portrait stays fixed */}
        <div className="relative z-10 flex items-end justify-center">
          <div className="relative">
            <div className="absolute inset-0 scale-[0.92] rounded-full bg-gradient-to-b from-white/8 via-white/4 to-transparent blur-3xl" />

            <img
              src="/media/removedbg.png"
              alt={profile.name}
              className="relative z-10 h-[540px] w-auto max-w-[92vw] object-contain object-bottom drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)] sm:h-[600px]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0.92) 80%, rgba(0,0,0,0.55) 92%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0.92) 80%, rgba(0,0,0,0.55) 92%, transparent 100%)",
              }}
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
          </div>
        </div>

        {/* side labels / subtle system feel */}
        <motion.div
          animate={{
            x: offset.x * -0.12,
            y: offset.y * -0.12,
          }}
          transition={{ type: "spring", stiffness: 35, damping: 18 }}
          className="absolute bottom-6 left-1/2 z-20 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl"
        >
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
            Based in Denmark
          </p>
          <p className="mt-1 text-sm text-slate-200">{profile.location}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
