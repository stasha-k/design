import { motion } from "motion/react";
import {
  Users,
  Layout,
  Palette,
  BarChart3,
} from "lucide-react";

const skills = [
  {
    icon: Users,
    title: "User Research",
    description:
      "Interviews, surveys, usability testing, and persona development",
  },
  {
    icon: Layout,
    title: "Information Architecture",
    description:
      "User flows, wireframing, and intuitive navigation design",
  },
  {
    icon: Palette,
    title: "UI Design",
    description:
      "Responsive design, accessibility, and design systems",
  },
  {
    icon: BarChart3,
    title: "Strategic Thinking",
    description:
      "Data-driven decisions and complex problem-solving",
  },
];

export function SkillsHighlight() {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            What I Do
          </p>
          <h2 className="text-3xl lg:text-5xl tracking-tight max-w-3xl">
            Combining research, design, and real world
            experience to create meaningful solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-[#00B4D8]/10 flex items-center justify-center rounded-[48px]">
                <skill.icon className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <h3 className="text-xl">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}