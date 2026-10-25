import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export function CaseStudyNav() {
  // The main site nav is fixed and its height varies (it wraps to two
  // lines on narrow screens), so measure it instead of assuming a
  // fixed offset.
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const mainNav = document.querySelector("nav");
    if (!mainNav) return;

    const updateHeight = () => setNavHeight(mainNav.getBoundingClientRect().height);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(mainNav);
    return () => observer.disconnect();
  }, []);

  // Under HashRouter the URL fragment IS the route, so a plain
  // href="#id" would overwrite the current route (e.g. navigating to
  // "#outcome" instead of "#/case-study/x") and blank the page.
  // Scrolling manually sidesteps the router entirely.
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="sticky z-40 bg-background/95 backdrop-blur-md border-b border-border"
      style={{ top: navHeight }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <nav className="flex gap-6 lg:gap-8 overflow-x-auto py-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => handleClick(event, section.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
