import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedWork() {
  const featured = projects.slice(0, 2);

  return (
    <section className="py-24 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl lg:text-5xl tracking-tight max-w-3xl">
            How research turns into design decisions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[#00B4D8] transition-colors"
          >
            View more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
