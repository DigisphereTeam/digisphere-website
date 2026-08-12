import React from "react";
import ProcessCards from "../../../../components/ProcessCards/ProcessCards";
import BookingSection from "../../../../components/BookingSection/BookingSection.js";
import "./HowWeWorkPhase.css";
import Design from "../../../../assets/Howwework/Design.svg";
import Scoping from "../../../../assets/Howwework/Scoping.svg";
import Discovery from "../../../../assets/Howwework/Discovery.svg";
import Development from "../../../../assets/Howwework/Development.svg";
import Launch from "../../../../assets/Howwework/Launch.svg";
import Ongoing from "../../../../assets/Howwework/Ongoing.svg";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import icon1 from "../../../../assets/Howwework/icon1.svg";
import icon2 from "../../../../assets/Howwework/icon2.svg";
import icon3 from "../../../../assets/Howwework/icon3.svg";
import icon4 from "../../../../assets/Howwework/icon4.svg";
const processSteps = [
  {
    phase: "PHASE 01",
    title: "Discovery Call",
    duration: "30–45 min · Free",
    badge: "Clarity on whether and how we can help",
    description:
      "We start with a focused conversation about your business, goals, and what you're trying to solve. No pitch deck, no sales pressure — just questions and listening.",
    icon: <img src={Discovery} className="phase-icon" />,
  },
  {
    phase: "PHASE 02",
    title: "Scoping & Proposal",
    duration: "3–5 business days",
    badge: "Fixed-price proposal with full scope breakdown",
    description:
      "After the call, we write a detailed proposal that defines scope, timeline, cost, and what success looks like. We don't use boilerplate — every proposal is written for your situation.",
    icon: <img src={Scoping} className="phase-icon" />,
  },
  {
    phase: "PHASE 03",
    title: "Design & Planning",
    duration: "1–3 weeks",
    badge: "Approved wireframes and design system",
    description:
      "Before a single line of code is written, we design. Wireframes, user flows, prototypes — you approve the blueprint before we build. This phase eliminates surprises.",
    icon: <img src={Design} className="phase-icon" />,
  },
  {
    phase: "PHASE 04",
    title: "Development",
    duration: "Varies by scope",
    badge: "Working software on staging environment",
    description:
      "We build in sprints with weekly check-ins. You have access to a staging environment throughout. We write clean, documented code — not throw-away prototypes.",
    icon: <img src={Development} className="phase-icon" />,
  },
  {
    phase: "PHASE 05",
    title: "Launch & Handover",
    duration: "1–2 weeks",
    badge: "Live product + full handover package",
    description:
      "We deploy, test under real conditions, and make sure everything works. You get the source code, documentation, and a walkthrough of the system.",
    icon: <img src={Launch} className="phase-icon" />,
  },
  {
    phase: "PHASE 06",
    title: "Ongoing Support",
    duration: "Optional retainer",
    badge: "Reliable long-term partnership",
    description:
      "Most clients stay with us after launch. We offer monthly retainers for maintenance, new features, performance monitoring, and priority support.",
    icon: <img src={Ongoing} className="phase-icon" />,
  },
];
const MarketingProcessSteps = [
  {
    icon: icon1,
    title: "Fixed price, not hourly",
    description:
      "You know what you're paying before we start. No surprises, no scope creep billing.",
  },
  {
    icon: icon2,
    title: "Realistic timelines",
    description:
      "We under-promise and over-deliver. We'd rather give an honest estimate than win work with a lie.",
  },
  {
    icon: icon3,
    title: "Single point of contact",
    description:
      "One senior consultant manages your project end-to-end. You're never passed around.",
  },
  {
    icon: icon4,
    title: "Weekly check-ins",
    description:
      "30-minute calls every week — no surprises, always aligned, always moving.",
  },
];
const HowWeWorkPhase = () => {
  return (
    <>
      <section className="phase-container container py-5">
        <div className="phase-header mb-5">
          <span className="phase-subtitle  fw-bold text-uppercase small">
            Phase by Phase
          </span>
          <h2 className="phase-title display-6 fw-bold text-dark mt-1">
            Every step, explained.
          </h2>
        </div>

        <div className="phase-list d-flex flex-column gap-4">
  {processSteps.map((step, index) => (
    <Reveal key={index} variant={fadeUp} delay={index * 0.1}>
      <div className="card phase-card rounded-4 p-4">
        <div className="card-body p-0">
          <div className="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3 mb-3">
            <div className="d-flex align-items-start gap-3">
              <div className="phase-icon-wrapper rounded-3 d-flex align-items-center justify-content-center">
                {step.icon}
              </div>
              <div>
                <span className="phase-tag fw-bold text-uppercase small">
                  {step.phase}
                </span>
                <h3 className="phase-card-title h5 fw-bold text-dark mb-1">
                  {step.title}
                </h3>
                <p className="phase-duration small mb-0">
                  {step.duration}
                </p>
                <p className="phase-description mb-0">
                  {step.description}
                </p>
              </div>
            </div>

            <span className="phase-badge rounded-pill text-secondary px-3 py-1 small">
              {step.badge}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  ))}
</div>
      </section>
      <section className="cardsfaq-section">
      <div className="container mt-5">
        <div className="cardsfaq-header">
          <span className="cardsfaq-subtitle">OUR Commitments</span>

          <h2 className="cardsfaq-title">
            The standards we hold ourselves to.
          </h2>
        </div>

        <ProcessCards
          cards={MarketingProcessSteps}
          colClass="col-12 col-sm-6 col-lg-3"
        />
      </div>
      </section>
      <BookingSection
        title="Ready to start the process?"
        description="The first step is a free 30-minute discovery call. No obligation, no pitch — just a focused conversation about your goals."
        buttonText="Book Your Discovery Call"
        buttonLink="/contact"
      />
    </>
  );
};

export default HowWeWorkPhase;
