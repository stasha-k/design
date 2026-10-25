import { motion } from "motion/react";
import { Link } from "react-router";
import type { projects } from "../data/projects";

export function ProjectCard({
  project,
  delay = 0,
  headingLevel: Heading = "h3",
}: {
  project: (typeof projects)[number];
  delay?: number;
  // Callers place this card at different points in the heading outline
  // (a subsection on Home vs. the top-level list on Work), so the
  // heading level needs to be contextual rather than hardcoded.
  headingLevel?: "h2" | "h3";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={`/case-study/${project.slug}`} className="group block">
        <div
          className="aspect-[4/3] mb-6 relative overflow-hidden rounded-[4px]"
          style={{ backgroundColor: `${project.color}15` }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ backgroundColor: project.color }}
          />
        </div>

        <div className="flex items-center gap-4 text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
          <span>{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>{project.year}</span>
        </div>

        <Heading className="text-2xl mb-3 group-hover:text-[#00B4D8] transition-colors">
          {project.title}
        </Heading>

        <p className="text-muted-foreground leading-relaxed mb-3">
          {project.description}
        </p>

        <p className="text-sm text-muted-foreground">
          Role: <span className="text-foreground">{project.role}</span>
        </p>
      </Link>
    </motion.div>
  );
}
