import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectPortalCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -inset-6 bg-gradient-to-br from-orange-400/20 via-violet-400/20 to-lime-400/20 blur-3xl" />
      </div>

      <div className="relative p-4">
        {/* top */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-2">
            <div className="h-2 w-2 bg-orange-400 rounded-full" />
            <div className="h-2 w-2 bg-lime-400 rounded-full" />
            <div className="h-2 w-2 bg-violet-400 rounded-full" />
          </div>

          <span className="text-xs text-slate-400">LIVE</span>
        </div>

        {/* interactive iframe */}
        <div className="rounded-xl overflow-hidden border border-white/10 h-[320px]">
          <iframe
            src={project.url}
            className="w-full h-full bg-white"
            title={project.title}
          />
        </div>

        {/* text */}
        <h3 className="mt-4 text-lg font-bold text-white">{project.title}</h3>

        <p className="text-sm text-slate-400 mt-2">{project.summary}</p>

        {/* 🔥 NEON BUTTON */}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full
          bg-gradient-to-r from-orange-400 via-lime-400 to-violet-400
          text-black font-bold text-sm
          shadow-[0_0_25px_rgba(251,146,60,0.6)]
          hover:scale-105 transition"
        >
          OPEN PROJECT
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
