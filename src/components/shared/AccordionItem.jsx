import { AnimatePresence, motion } from "framer-motion";

export default function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-6 bg-gradient-to-br from-orange-400/10 via-violet-400/10 to-lime-400/10 blur-2xl" />
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="relative flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-semibold text-white">{item.title}</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/20 text-lg text-orange-300 transition group-hover:border-white/20">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="mb-4 h-px w-full bg-gradient-to-r from-orange-300/20 via-violet-300/20 to-lime-300/20" />
              <p className="text-sm leading-7 text-slate-300">{item.body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
