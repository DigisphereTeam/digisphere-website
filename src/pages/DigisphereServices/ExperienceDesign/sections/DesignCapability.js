import React from "react";
import tickIcon from "../../../../assets/digital-marketing/tick-icon.svg";
import ServicesGrid from "../../../../components/ServicesGrid/ServicesGrid";
import UxResearch from "../../../../assets/DesignCapability/UX Research.svg";
import UIDesign from "../../../../assets/DesignCapability/UI Design.svg";
import Interaction from "../../../../assets/DesignCapability/Interaction Design.svg";
import Usability from "../../../../assets/DesignCapability/Usability Testing.svg";
import DesignSystems from "../../../../assets/DesignCapability/Design Systems.svg";
const services = [
  {
    icon: UxResearch,
    title: "UX Research & Strategy",
    description:
      "We research your users  interviews, surveys, usability testing, and competitive benchmarking  to build a foundation for design decisions grounded in real behaviour.",
    points: [
      "User journey mapping",
      "Persona development",
      "Competitive UX analysis",
    ],
  },

  {
    icon: UIDesign,
    title: "UI Design",
    description:
      "Pixel-perfect interfaces that feel effortless. We design with your brand system in mind  consistent, accessible, and production-ready for your development team.",
    points: [
      "Component library creation",
      "Design system documentation",
      "Figma handoff",
    ],
  },

  {
    icon: Interaction,
    title: "Interaction Design",
    description:
      "Micro-interactions, transitions, and motion design that make products feel alive. We prototype interactions before development begins  saving time and budget.",
    points: [
      "Prototype & validation",
      "Motion design specs",
      "Developer-ready assets",
    ],
  },

  {
    icon: Usability,
    title: "Usability Testing",
    description:
      "We test real users on real tasks  moderated sessions, unmoderated remote testing, and A/B experiments  and iterate designs based on evidence.",
    points: [
      "Session recording analysis",
      "Heuristic evaluation",
      "Actionable redesign brief",
    ],
  },

  {
    icon: UIDesign,
    title: "Design Systems",
    description:
    "Scalable design systems that give your product team velocity. Tokens, components, patterns, and documentation built to grow with your product.",
    points: [
      "Token-based design system",
      "Component documentation",
      "Figma variables & styles",
    ],
  },

  {
    icon: DesignSystems,
    title: "Brand & Visual Identity",
    description:
      "Logo, typography, colour, iconography, and brand guidelines that create instant recognition and communicate your values before a single word is read.",
    points: [
      "Full brand identity kit",
      "Brand usage guidelines",
      "Digital & print assets",
    ],
  },
];
const DesignCapability = () => {
  return (
    <ServicesGrid
      sectionLabel="WHAT WE Design"
      heading="End-to-end design capability."
      description="From early research through design system handoff, we handle the full design lifecycle."
      services={services}
      tickIcon={tickIcon}
    />
  );
};

export default DesignCapability;
