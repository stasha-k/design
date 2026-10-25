import { motion } from "motion/react";

export function ValueProposition() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-muted/30 ">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
            My Unique Perspective
          </p>

          <h2 className="text-3xl lg:text-5xl tracking-tight max-w-4xl mx-auto">
            12+ years navigating complex systems across multiple
            countries taught me to understand users deeply and
            make decisions under pressure
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 max-w-3xl mx-auto">
            <div>
              <p className="text-3xl mb-2">12+</p>
              <p className="text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl mb-2">4</p>
              <p className="text-sm text-muted-foreground">
                Countries Worked
              </p>
            </div>
            <div>
              <p className="text-3xl mb-2">15+</p>
              <p className="text-sm text-muted-foreground">
                Countries Visited
              </p>
            </div>
            <div>
              <p className="text-3xl mb-2">100%</p>
              <p className="text-sm text-muted-foreground">
                User Centered
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}