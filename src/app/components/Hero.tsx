import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import heroBackground from "@/assets/hero-background.webp";

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center px-6 lg:px-12 pb-12 pt-24 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 z-0" />
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-foreground/90 mb-6">
            UX Designer
          </p>

          <h1 className="text-5xl lg:text-7xl tracking-tight mb-8 max-w-4xl">
            UX design built on research rigor and years spent
            inside complex, high-stakes systems
          </h1>

          <p className="text-lg text-foreground/90 max-w-2xl mb-12 leading-relaxed">
            Before UX, I spent years as a nurse navigating clinical
            workflows across multiple countries. That background
            now shapes how I research, prioritize, and design for
            people working under real constraints.
          </p>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00B4D8] text-foreground font-bold hover:bg-[#0096B8] transition-colors rounded-[4px]"
          >
            View Selected Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}