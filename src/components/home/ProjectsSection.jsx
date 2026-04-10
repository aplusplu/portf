import { useMemo } from "react";
import { projects } from "../../data/projects";
import ProjectPortalCard from "./ProjectPortalCard";

export default function ProjectsSection() {
  const shuffledProjects = useMemo(() => {
    return [...projects].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">
        Live Projects / Portals
      </h2>

      <div className="grid gap-6">
        {shuffledProjects.map((project, index) => (
          <ProjectPortalCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
