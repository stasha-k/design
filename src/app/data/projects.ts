import travelCover from "../../assets/case-studies/travel-cover.webp";
import makekitCover from "../../assets/case-studies/makekit-cover.webp";

export const projects = [
  {
    id: 1,
    slug: "sustainable-travel-app",
    title: "Sustainable Travel Planning App",
    category: "Travel & Sustainability",
    year: "2024",
    role: "UX/UI Designer",
    description:
      "A concept app helping Nordic travelers compare transportation by emissions, cost, and time, designed to make sustainable choices the easy default rather than extra work.",
    color: "#90BE6D",
    image: travelCover,
    imageAlt: "Sustainable Travel App cover artwork with a travel and time signpost",
  },
  {
    id: 2,
    slug: "makekit-setup-experience",
    title: "MakeKit Setup Experience",
    category: "Robotics & Product Design",
    year: "2024",
    role: "UX/UI Designer",
    description:
      "A redesign of MakeKit's drone-kit support experience, replacing scattered troubleshooting resources with one guided, searchable hub to cut support requests.",
    color: "#00B4D8",
    image: makekitCover,
    imageAlt: "MakeKit support page shown on desktop and mobile device mockups",
  },
];
