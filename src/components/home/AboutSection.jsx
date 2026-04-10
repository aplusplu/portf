import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import AccordionItem from "../shared/AccordionItem";
import BasicLogo from "../shared/BasicLogo";
import { cvAccordions, profile } from "../../data/profile";

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <div className="flex items-center gap-4">
            <BasicLogo className="h-16 sm:h-20" />
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Experience / direction
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Built around code, research, and execution
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-8 text-slate-300">
            This portfolio presents a profile that spans software development,
            pharma intelligence, business execution, and product thinking
            without feeling fragmented.
          </p>

          <div className="mt-6 grid gap-3">
            {profile.experience.map((item) => (
              <div
                key={item.company}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition hover:border-white/20 hover:bg-black/30"
              >
                <p className="text-sm font-semibold text-white">
                  {item.company}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {item.role} · {item.period}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div id="details" className="grid gap-4">
          {cvAccordions.map((item, index) => (
            <AccordionItem
              key={item.title}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
