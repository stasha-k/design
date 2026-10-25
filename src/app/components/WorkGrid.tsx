import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} delay={index * 0.1} headingLevel="h2" />
      ))}
    </div>
  );
}