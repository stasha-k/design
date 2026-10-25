import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router";
import { usePageMeta } from "../hooks/usePageMeta";
import stashaPortrait from "@/assets/stasha-portrait.webp";

export function AboutPage() {
  usePageMeta(
    "About, Stanislava Krivošija",
    "From nearly a decade in nursing across four countries to UX design: how a healthcare background shapes research-driven product decisions."
  );

  const uxSkills = [
    "User Research",
    "Interviews & Surveys",
    "Personas & User Flows",
    "Usability Testing",
    "Wireframing & Prototyping",
    "Interaction Design",
    "UI Design",
    "Accessibility",
    "Responsive Design",
  ];

  const tools = [
    "Figma",
    "Figma Make",
    "FigJam",
    "Miro",
    "Lovable",
    "HTML & CSS",
  ];

  const healthcareExpertise = [
    "Patient Care Workflows",
    "Clinical Systems",
    "Cardiovascular Care",
    "Elderly & Dementia Care",
    "Healthcare Technology",
  ];

  const experience = [
    {
      role: "UX Design Student",
      company: "Noroff Higher Vocational College, Norway",
      period: "2023 - 2024",
      description:
        "Completed Professional Degree in UX Design. Built portfolio projects focusing on healthcare, travel, and sustainability, applying design thinking to real world problems.",
    },
    {
      role: "Registered Nurse",
      company: "Stavanger University Hospital, Norway",
      period: "2020 - Present",
      description:
        "Delivering pre- and post-operative care for vascular and thoracic surgery patients. Collaborating with multidisciplinary teams to improve patient outcomes, streamline workflows, and identify opportunities for digital solutions.",
    },
    {
      role: "Healthcare Professional",
      company: "Norway, Serbia & Australia",
      period: "2015 - 2020",
      description:
        "Provided critical care, elderly care, and dementia support across diverse healthcare settings. Developed deep understanding of clinical workflows, patient needs, and healthcare technology that informs user centered design decisions.",
    },
  ];

  const education = [
    {
      degree: "Professional Degree in UX Design",
      institution: "Noroff Higher Vocational College",
      location: "Norway",
      year: "2024",
    },
    {
      degree: "Bachelor of Nursing",
      institution:
        '"Queen Jelena" College of Nursing / Lovisenberg Diakonale Høgskole',
      location: "Montenegro",
      year: "2015",
    },
    {
      degree:
        "Web Development Fundamentals (HTML, CSS, JavaScript)",
      institution: "Startit Center Inđija",
      location: "Serbia",
      year: "2017",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">
            About Me
          </p>

          <h1 className="text-4xl lg:text-6xl tracking-tight mb-12 max-w-3xl">
            From bedside care to product decisions
          </h1>

          <div className="space-y-12 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
              <img
                src={stashaPortrait}
                alt="Portrait of Stanislava Krivošija"
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover flex-shrink-0"
              />

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-4xl">
                <p>
                  I spent nearly a decade as a nurse across Montenegro, Serbia,
                  Norway, and Australia, most recently delivering pre- and
                  post-operative care for vascular and thoracic surgery patients
                  at Stavanger University Hospital. Before that, critical care,
                  elderly care, and dementia support, in settings where the
                  margin for confusion is small.
                </p>

                <p>
                  Nursing means making fast, accurate decisions inside systems
                  that don't tolerate ambiguity: medication charts, handover
                  protocols, equipment that has to work exactly as expected
                  under pressure. When those systems are confusing, the cost
                  isn't a bad review, it's patient safety. That's the lens I
                  bring to UX now: research that gets to how people actually
                  work, not just what they say they want, and interfaces that
                  hold up under real constraints, not just in a demo.
                </p>

                <p>
                  In 2024 I completed a Professional Degree in UX Design at
                  Noroff in Norway, and I've been applying that same instinct
                  through research-driven case studies in sustainable travel
                  and consumer robotics, still working as a nurse alongside it.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <h3 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
                  UX Design Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {uxSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-muted text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-muted text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
                  Healthcare Background
                </h3>
                <div className="flex flex-wrap gap-2">
                  {healthcareExpertise.map((expertise) => (
                    <span
                      key={expertise}
                      className="px-4 py-2 bg-muted text-sm"
                    >
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-12">
              Experience
            </h2>

            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="border-l-2 border-[#00B4D8] pl-8"
                >
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    {item.period}
                  </p>
                  <h3 className="text-2xl mb-1">{item.role}</h3>
                  <p className="text-muted-foreground mb-4">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-12">
              Education
            </h2>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                  }}
                  className="pb-8 border-b border-border last:border-b-0"
                >
                  <h3 className="text-xl mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{item.location}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center border-t border-border pt-12">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00B4D8] text-foreground font-bold hover:bg-[#0096B8] transition-colors rounded-[4px]"
            >
              See the Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:stanislavakrivosija@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[#00B4D8] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
