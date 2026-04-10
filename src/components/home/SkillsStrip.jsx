import { profile } from "../../data/profile";

export default function SkillsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.22em] text-violet-200">
          Skills / domains
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
