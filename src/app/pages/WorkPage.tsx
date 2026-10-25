import { motion } from "motion/react";
import { WorkGrid } from "../components/WorkGrid";
import { usePageMeta } from "../hooks/usePageMeta";

export function WorkPage() {
  usePageMeta(
    "Work, Stanislava Krivošija",
    "UX case studies in sustainable travel and product design: research, key insights, design decisions, and honest outcomes."
  );

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">
            Selected Work
          </p>

          <h1 className="text-4xl lg:text-6xl tracking-tight mb-16 max-w-3xl">
            Case studies showcasing research driven design
            solutions
          </h1>

          <WorkGrid />
        </motion.div>
      </div>
    </div>
  );
}