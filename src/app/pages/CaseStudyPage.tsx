import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { CaseStudyNav } from '../components/CaseStudyNav';
import { usePageMeta } from '../hooks/usePageMeta';
import { projects } from '../data/projects';
import travelCover from '@/assets/case-studies/travel-cover.webp';
import travelUiScreens from '@/assets/case-studies/travel-ui-screens.webp';
import travelProcessDiagram from '@/assets/case-studies/travel-process-diagram.webp';
import travelIterations from '@/assets/case-studies/travel-iterations.webp';
import makekitCover from '@/assets/case-studies/makekit-cover.webp';
import makekitContactForm from '@/assets/case-studies/makekit-contact-form.webp';
import makekitProcessDiagram from '@/assets/case-studies/makekit-process-diagram.webp';
import makekitSketch from '@/assets/case-studies/makekit-sketch.webp';
import makekitUserflow from '@/assets/case-studies/makekit-userflow.webp';

const caseStudies = {
  'sustainable-travel-app': {
    title: 'Sustainable Travel App',
    coverImage: travelCover,
    coverAlt: 'Sustainable Travel App cover artwork with a travel and time signpost',
    subhead:
      'Turning scattered, hard-to-trust sustainability data into one place travelers can compare and book from.',
    category: 'Travel',
    year: '2024',
    industry: 'Travel',
    role: 'UX/UI Designer',
    scope: 'Research, UX, UI, Prototyping',
    extraFact: { label: 'Team', value: 'Two designers' },
    color: '#90BE6D',

    context:
      "This is a course project from my UX Design program at Noroff, designed and prototyped independently rather than shipped as a commercial product. It explores how a Nordic-focused travel app could make comparing and booking sustainable transportation as easy as booking any other trip.",

    problem:
      'Many travelers who care about sustainability struggle to find affordable, eco-friendly transportation options that align with their values. The lack of centralized information and easy booking options creates a barrier for those looking to reduce their carbon footprint.',

    goal:
      'Raise awareness around sustainable travel through open data on the environmental impact of transportation options, and make booking eco-friendly travel as easy as booking any other trip, so slow, local, sustainable tourism becomes accessible to everyone.',

    approach:
      "Working in a two-person design team through the Design Thinking process (Empathize, Define, Ideate, Prototype, Test), research combined exploratory user interviews, a competitive audit against apps like Google Maps and Vy, and a literature review of Nordic travel data to ground the problem in evidence rather than assumption.",

    processImage: travelProcessDiagram,
    processImageAlt: 'Design Thinking process diagram: Empathize, Define, Ideate, Prototype, Test',

    insights: [
      {
        title: 'Smothered in information',
        description:
          'Travelers found it cumbersome to plan sustainably, since there was no central source for emissions and cost information.',
      },
      {
        title: 'Budget concerns',
        description:
          'Cost was one of the biggest decision-making factors, and most participants assumed eco-friendly options would cost more.',
      },
      {
        title: 'Convenience wanted',
        description:
          'Travelers were frustrated having to use multiple apps to plan a single journey, and wanted a one-stop solution to compare and book eco-friendly travel.',
      },
    ],

    persona: {
      name: 'Sara Benvenuti',
      subtitle: 'Primary persona, built from user interviews',
      quote:
        "I'd love to travel more eco-consciously, but the journey of planning, especially with kids, is just so long. I don't even know where to begin.",
      goals: [
        'Set a good example for her children by choosing sustainable travel options',
        'Find nearby, affordable destinations she can visit with her family',
      ],
      painPoints: [
        "Doesn't have access to comprehensive information about sustainable travel options",
        "Often doesn't have time to compare and choose the most sustainable option",
      ],
    },

    iterationImage: travelIterations,
    iterationAlt: 'Annotated wireframe iterations for sign up, booking, profile, and more flows',
    iterationCaption:
      'Each flow, sign up, booking, profile, and the app\'s "More" section, went through its own round of wireframing, annotated against specific visual-design and usability principles before moving to high fidelity.',
    extraProcessImage: null as string | null,
    extraProcessImageAlt: '',
    extraProcessCaption: '',

    solution:
      'Ideation moved through mind mapping and affinity mapping, and the strongest ideas were carried into a mid-fidelity prototype built around a clean, muted earth-toned interface, designed to make comparing and booking sustainable travel feel simple rather than effortful.',

    uiImage: travelUiScreens,
    uiAlt: 'Wireframes of the search and book trip flow across six mobile screens',
    uiImageClassName: 'w-full border border-border rounded-[4px]',

    keyFeatures: [
      {
        title: 'Green rating system',
        description:
          'A visual rating so users can see at a glance how sustainable a travel option is and compare choices quickly.',
      },
      {
        title: 'Carbon footprint calculator',
        description:
          'Calculates the CO2 emitted by different modes of transportation and compares them side by side.',
      },
      {
        title: 'Eco-travel rewards',
        description:
          'Points for choosing greener travel options, redeemable for discounts or donations to nature-related causes.',
      },
    ],

    rationale: [
      {
        title: 'Visceral',
        description:
          'Earth tones and clean lines run throughout the interface, to invite a sense of coherence and ecological awareness before a user reads a single word.',
      },
      {
        title: 'Behavioral',
        description:
          'CO2 data and travel options are surfaced upfront in an easily comparable format, so the sustainable choice is also the easy one.',
      },
      {
        title: 'Reflective',
        description:
          "The rewards system and the option to donate points connect directly to users' values around eco-friendly behavior, turning a booking into a small, positive statement.",
      },
    ],

    validation:
      "Usability testing on the prototype fed directly back into the design: a planned 'local transport companies' feature was cut after testers found its purpose confusing, and a 'Hiking' feature was added in its place, closer to what they actually wanted from the app.",

    outcomeLabel: 'Targeted Impact',
    outcomeIntro:
      "These are the goals the design was built to hit, not measured production results. The prototype was never shipped to real users at scale, so there's no live data behind them yet.",
    outcomes: [
      'Up to 15% possible reduction in travel-related CO2 emissions by helping users opt for lower-emission alternatives',
      '70% of users targeted to book eco-friendly options within three months of using the app',
      '85% target success rate for task completion in usability testing of the mid-fidelity prototype',
    ],

    learnings: [
      'Small friction points create big frustration.',
      'Users need trust, not just data.',
      'Clear hierarchy improves decision making.',
    ],

    nextSteps:
      "If I picked this back up, I'd want to pressure-test the rewards system with real budget-conscious travelers, since that's the part of the concept I trust least. I'd also open it up so travelers can share their own sustainable travel tips with each other, and let users donate accrued reward points directly to verified carbon offset programs.",

    behanceUrl: 'https://www.behance.net/gallery/210657137/UX-Case-Study-Sustainable-Travel-APP',
  },

  'makekit-setup-experience': {
    title: 'MakeKit Setup Experience',
    coverImage: makekitCover,
    coverAlt: 'MakeKit support page shown on desktop and mobile device mockups',
    subhead:
      'Replacing a fragmented, frustrating troubleshooting experience with one guided, searchable hub.',
    category: 'Robotics and drone kits',
    year: '2024',
    industry: 'Robotics and drone kits',
    role: 'UX/UI Designer',
    scope: 'Research, UX, UI, Prototyping',
    extraFact: { label: 'Timeline', value: 'Sep – Oct 2024' },
    color: '#00B4D8',

    context:
      "MakeKit is a Norwegian startup selling DIY drone and robotics kits, like the Air:bit, built around the BBC micro:bit, so kids and hobbyists can learn coding, math, and physics hands-on. This case study, a course project from my UX Design program at Noroff rather than a commissioned engagement with MakeKit, redesigns the support experience customers turn to when assembly or setup goes wrong.",

    problem:
      'MakeKit customers experienced frustration during product assembly due to unclear troubleshooting tools. This gap led to increased support requests and a less satisfying experience, particularly when diagnosing issues during and after setup.',

    goal:
      "Improve the setup experience to make it faster, clearer, and frustration-free, regardless of a customer's technical background, in a way that reduces support requests and strengthens MakeKit's reputation among educators and hobbyists through word-of-mouth.",

    approach:
      "Following the same Design Thinking process, research combined structured interviews with five Air:bit customers (twenty minutes each) and the employee who handles MakeKit's support inbox, a SWOT analysis against Lego, Ikea, and DJI, a sixteen-point heuristic evaluation of the existing site, and three rounds of usability testing, one on the live site, one on a low-fidelity prototype, one on the high-fidelity design.",

    processImage: makekitProcessDiagram,
    processImageAlt: 'Design Thinking process diagram: Empathize, Define, Ideate, Prototype, Test, Implement',

    insights: [
      {
        title: 'User interviews',
        description:
          "Interviewed Air:bit customers to understand where confusion and frustration occurred during assembly, along with the MakeKit employee who handles customer support, to find patterns in common questions.",
      },
      {
        title: 'Competitive analysis',
        description:
          'Researched the competitive landscape, focusing on Lego, Ikea, and DJI, to apply their strongest onboarding and troubleshooting practices.',
      },
      {
        title: 'Heuristic evaluation',
        description:
          "Evaluated MakeKit's existing website, focusing on the Docs and Troubleshooting pages, to quickly surface usability issues against established best practices.",
      },
      {
        title: 'Usability testing',
        description:
          "Ran usability testing with tasks focused on solving a drone problem, observing real user interactions with MakeKit's current troubleshooting tools in realistic scenarios.",
      },
    ],

    persona: {
      name: 'Charlene Jacobs',
      subtitle: 'Primary persona, built from support email patterns',
      quote: 'I love my job.',
      goals: [
        'Make efficient use of her limited prep time',
        'Help students not just pass exams, but genuinely understand the material',
      ],
      painPoints: [
        'Limited time to take on new projects or learn new skills, so solutions need to be quick and efficient',
        'Feels pressure to make the lesson a success after the cost of purchasing the drones',
      ],
    },

    iterationImage: makekitSketch,
    iterationAlt: 'Early paper sketch of the Air:bit support page layout',
    iterationCaption:
      'Concepts started as paper sketches before moving to digital wireframes, then a high-fidelity UI checked against WCAG 2.1 AA contrast standards.',
    extraProcessImage: makekitUserflow as string | null,
    extraProcessImageAlt: 'User flow diagram mapping how a customer contacts MakeKit support about a problem',
    extraProcessCaption:
      'Task flows like this one, mapping how a customer gets from a problem to a resolved contact request, were planned before any screens were drawn, so the UI followed the simplest real path rather than the reverse.',

    solution:
      'Redesigned the setup experience around a centralized troubleshooting hub, clearer step-by-step guidance split into three parts (Assemble, Code, Fly), and a quick-access search bar, working through information architecture and user flows into wireframes and high-fidelity UI designs that follow WCAG 2.1 AA contrast standards.',

    uiImage: makekitContactForm,
    uiAlt: 'Redesigned MakeKit contact form with accessible labeling and clear input states',
    uiImageClassName: 'w-full max-w-md mx-auto border border-border rounded-[4px] block',

    keyFeatures: [
      {
        title: 'Centralized troubleshooting hub',
        description:
          'A dedicated, all-in-one section where guides, videos, and FAQs are consolidated for quick access, instead of being scattered across the site.',
      },
      {
        title: 'Interactive step-by-step guides',
        description:
          'Intuitive, visual guides that help users navigate potential issues and resolve them without digging through multiple resources.',
      },
      {
        title: 'Quick-access search bar',
        description:
          'A robust search function so users can find specific solutions rapidly instead of browsing through unrelated content.',
      },
    ],

    rationale: [
      {
        title: 'Clear navigation',
        description:
          "A prominent nav bar with bold typography and well-separated sections, following Jacob's Law so the experience matches conventions users already know.",
      },
      {
        title: 'Reduced cognitive effort',
        description:
          'Instructions were split into three clear parts, Assemble, Code, Fly, based directly on the confusion patterns found in user interviews.',
      },
      {
        title: 'Visual hierarchy',
        description:
          'Larger, bolder headings and a clear size hierarchy help the most important actions stand out first, with less critical content tucked behind accordions.',
      },
    ],

    validation:
      'The design went through three rounds of usability testing, first on the existing site, then on a low-fidelity prototype, then on the high-fidelity version, with each round of findings feeding directly into the next iteration before it reached final designs.',

    outcomeLabel: 'Outcome',
    outcomeIntro:
      'This was a redesign concept, not a production rollout, so there are no live support-ticket numbers to report. What it did produce:',
    outcomes: [
      'Delivered a redesigned troubleshooting flow with clearer step-by-step guidance',
      'Rebuilt the information architecture of the Docs and Troubleshooting pages',
      'Produced user flows and high-fidelity UI designs ready for implementation',
    ],

    learnings: [
      'Small friction points create big frustration.',
      'Clear communication is key in user manuals.',
      'Testing reveals issues not visible in design.',
    ],

    nextSteps:
      "The clearest gap left in this project is real-world validation, everything here was tested with a small group, not MakeKit's actual customer base. If I were continuing it, I'd push for a follow-up round of usability testing once a version shipped, and set up an ongoing feedback loop so the hub keeps improving as new support patterns emerge.",

    behanceUrl: 'https://www.behance.net/gallery/210655041/UX-Case-Study-MakeKit',
  },
};

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  usePageMeta(
    study ? `${study.title}, Stanislava Krivošija` : 'Case study not found, Stanislava Krivošija',
    study ? study.subhead : 'This case study could not be found.'
  );

  if (!study) {
    return (
      <div className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl mb-4">Case study not found</h1>
          <Link to="/work" className="text-[#00B4D8] hover:underline">
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="pt-24 pb-24">
      {/* Hero Section */}
      <div id="overview" className="px-6 lg:px-12 py-16 border-b border-border scroll-mt-44">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 text-xs tracking-[0.15em] uppercase text-muted-foreground mb-8">
              <span>{study.category}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>{study.year}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl tracking-tight mb-6">
              {study.title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              {study.subhead}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Industry</p>
                <p>{study.industry}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Role</p>
                <p>{study.role}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">{study.extraFact.label}</p>
                <p>{study.extraFact.value}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Scope</p>
                <p>{study.scope}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="h-[40vh] relative overflow-hidden" style={{ backgroundColor: `${study.color}15` }}>
        <img
          src={study.coverImage}
          alt={study.coverAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <CaseStudyNav />

      {/* Content Sections */}
      <div className="px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-24 py-24">
          {/* Context */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Context
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              {study.context}
            </p>
          </motion.section>

          {/* Problem & Goal */}
          <motion.section
            id="challenge"
            className="scroll-mt-44"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
              The Challenge
            </h2>
            <div className="border-l-4 pl-8 mb-10" style={{ borderColor: study.color }}>
              <p className="text-xl leading-relaxed">
                {study.problem}
              </p>
            </div>
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Why it mattered</p>
            <p className="text-lg leading-relaxed text-foreground/90">
              {study.goal}
            </p>
          </motion.section>

          {/* Approach & Key Insights */}
          <motion.section
            id="research"
            className="scroll-mt-44"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Research &amp; Approach
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-10">
              {study.approach}
            </p>
            <img
              src={study.processImage}
              alt={study.processImageAlt}
              className="w-full mb-10"
            />
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">Key Insights</p>
            <div className="space-y-8">
              {study.insights.map((insight, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                    style={{ backgroundColor: study.color }}
                  />
                  <div>
                    <h3 className="text-lg mb-1">{insight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Persona */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-8">
              Persona
            </h2>
            <div className="bg-muted p-8 lg:p-10">
              <h3 className="text-2xl mb-1">{study.persona.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{study.persona.subtitle}</p>
              <p className="text-xl leading-relaxed italic mb-8" style={{ color: study.color }}>
                &ldquo;{study.persona.quote}&rdquo;
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Goals</p>
                  <ul className="space-y-2">
                    {study.persona.goals.map((goal, index) => (
                      <li key={index} className="text-sm leading-relaxed">{goal}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Pain Points</p>
                  <ul className="space-y-2">
                    {study.persona.painPoints.map((point, index) => (
                      <li key={index} className="text-sm leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Design Process & Solution */}
          <motion.section
            id="design"
            className="scroll-mt-44"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
              Design Process
            </h2>
            <img
              src={study.iterationImage}
              alt={study.iterationAlt}
              className="block max-w-full max-h-[420px] object-contain mx-auto border border-border rounded-[4px] mb-6"
            />
            <p className="text-base text-muted-foreground leading-relaxed">
              {study.iterationCaption}
            </p>

            {study.extraProcessImage && (
              <>
                <img
                  src={study.extraProcessImage}
                  alt={study.extraProcessImageAlt}
                  className="block max-w-full border border-border rounded-[4px] mt-10 mb-6"
                />
                <p className="text-base text-muted-foreground leading-relaxed">
                  {study.extraProcessCaption}
                </p>
              </>
            )}
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
              The Solution
            </h2>
            <p className="text-xl leading-relaxed text-foreground/90 mb-10">
              {study.solution}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              {study.keyFeatures.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <img
              src={study.uiImage}
              alt={study.uiAlt}
              className={study.uiImageClassName}
            />
          </motion.section>

          {/* Design Rationale */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Design Rationale
            </h2>
            <p className="text-sm text-muted-foreground mb-8">Why these decisions, not just what they were</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              {study.rationale.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-l-4 pl-8" style={{ borderColor: study.color }}>
              <p className="text-lg leading-relaxed text-foreground/90">
                {study.validation}
              </p>
            </div>
          </motion.section>

          {/* Outcomes */}
          <motion.section
            id="outcome"
            className="scroll-mt-44"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-4">
              {study.outcomeLabel}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {study.outcomeIntro}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {study.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="p-6 border-2 border-border hover:border-current transition-colors"
                  style={{ borderColor: study.color }}
                >
                  <p className="text-lg leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Reflection */}
          <motion.section
            id="reflection"
            className="scroll-mt-44"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Reflection
            </h2>
            <p className="text-sm text-muted-foreground mb-8">What this project taught me, and where I'd take it next</p>

            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">Key Learnings</p>
            <div className="space-y-4 mb-12">
              {study.learnings.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: study.color }}
                  />
                  <p className="text-lg leading-relaxed text-foreground/90">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">What's Next</p>
            <p className="text-lg leading-relaxed text-foreground/90 mb-10">
              {study.nextSteps}
            </p>

            <a
              href={study.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Read more on Behance
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.section>
        </div>
      </div>

      {/* Previous / Next Project */}
      {(previousProject || nextProject) && (
        <div className="px-6 lg:px-12 border-t border-border pt-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-8">
            {previousProject && (
              <Link to={`/case-study/${previousProject.slug}`} className="group flex flex-col items-start">
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  <ArrowLeft className="w-3 h-3" />
                  Previous Project
                </span>
                <span className="text-xl group-hover:text-[#00B4D8] transition-colors">
                  {previousProject.title}
                </span>
              </Link>
            )}

            {nextProject && (
              <Link
                to={`/case-study/${nextProject.slug}`}
                className="group flex flex-col items-start sm:items-end sm:text-right sm:ml-auto"
              >
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Next Project
                  <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-xl group-hover:text-[#00B4D8] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
