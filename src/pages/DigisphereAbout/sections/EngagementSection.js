import React from "react";
import "./EngagementSection.css";

import growthTrajectory from "../../../assets/about-page/growth-trajectory.svg";

import auditIcon from "../../../assets/about-page/audit-icon.svg";
import strategyIcon from "../../../assets/about-page/strategy-icon.svg";
import buildIcon from "../../../assets/about-page/build-icon.svg";
import launchIcon from "../../../assets/about-page/launch-icon.svg";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";

const EngagementSection = () => {
  const steps = [
    {
      icon: auditIcon,
      number: "01",
      title: "Audit",
      description: "We review your current situation.",
    },
    {
      icon: strategyIcon,
      number: "02",
      title: "Strategy",
      description: "Clear roadmap and recommendations.",
    },
    {
      icon: buildIcon,
      number: "03",
      title: "Build",
      description: "Execution with regular updates.",
    },
    {
      icon: launchIcon,
      number: "04",
      title: "Launch & Grow",
      description: "Ongoing optimisation and support.",
    },
  ];

  return (
    <section className="engagement-section">
      <div className="container">
        {/* Section Heading */}
        <Reveal variant={fadeUp}>
          <div className="engagement-header text-center">
            <h2>
              How a Digisphere{" "}
              <span className="engagement-highlight">engagement works.</span>
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="row g-4 justify-content-center steps-grid">
          {steps.map((step, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <Reveal className="h-100" variant={fadeUp} delay={index * 0.15}>
                <div className="step-card h-100">
                  <div className="step-icon-box">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="step-icon"
                    />
                  </div>

                  <div className="step-number">{step.number}</div>

                  <h3 className="step-title">{step.title}</h3>

                  <p className="step-desc">{step.description}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Getting Started */}
        <Reveal variant={fadeUp}>
          <div className="getting-started text-center">
            <div className="trend-icon-wrap">
              <img src={launchIcon} alt="Growth" />
            </div>

            <h2>
              We're just{" "}
              <span className="engagement-highlight">getting started.</span>
            </h2>

            <p className="getting-started-desc">
              Digisphere is expanding into new markets, new capabilities, and
              new service areas. Our ambition is simple: become the most trusted
              technology growth partner for businesses serious about competing
              in the digital age.
            </p>
          </div>
        </Reveal>

        {/* Growth Trajectory Image */}
        <Reveal variant={fadeUp} delay={0.2}>
          <div className="trajectory-card ">
            <img
              src={growthTrajectory}
              alt="Growth Trajectory"
              className="trajectory-image"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EngagementSection;
