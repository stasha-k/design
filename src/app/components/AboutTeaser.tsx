import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function AboutTeaser() {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            About Me
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
            <div>
              <h2 className="text-2xl mb-1">Stanislava Krivošija</h2>
              <p className="text-muted-foreground">UX Designer</p>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
              <p>
                Hi, I'm Stasha, a UX designer with a background in nursing,
                having worked across hospitals, care centers, and home care
                settings in multiple countries.
              </p>
              <p>
                That experience taught me how to navigate complex systems,
                understand user needs deeply, and make sound decisions under
                pressure. I now bring those same skills to UX design, with a
                focus on clarity, usability, and experiences that genuinely
                serve the people using them.
              </p>
              <p>
                I'm especially drawn to healthcare, productivity, and digital
                products that make everyday life easier.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[#00B4D8] transition-colors pt-2"
              >
                More About Me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
