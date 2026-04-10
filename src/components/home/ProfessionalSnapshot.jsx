import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function ProfessionalSnapshot() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-orange-200">
          Professional snapshot
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Multi-sector execution, digital products, and investor-facing research
        </h2>
        <p className="mt-4 text-sm leading-8 text-slate-300">{profile.summary}</p>

        <div className="mt-6 grid gap-3">
          {profile.bullets.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-7 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
