import { Mail, Phone } from "lucide-react";
import { profile } from "../../data/profile";

export default function FooterCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(130deg,rgba(253,186,116,0.12),rgba(196,255,114,0.08),rgba(192,132,252,0.12))] p-[1px]">
        <div className="rounded-[calc(2.5rem-1px)] bg-black/70 px-6 py-10 text-center backdrop-blur-2xl sm:px-10 lg:py-14">
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Let’s turn strategy into shipped work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            Web development, product execution, investor-facing research, and
            digital transformation — built with clarity and real-world delivery
            in mind.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>

            <a
              href="/media/ATS-JB25.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-lime-300/20 bg-lime-300/10 px-4 py-3 text-sm font-semibold text-lime-100 transition hover:bg-lime-300/15 sm:col-span-2"
            >
              Open ATS CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
