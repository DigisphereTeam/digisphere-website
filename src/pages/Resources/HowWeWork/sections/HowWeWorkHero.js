import React, { useState, useEffect } from "react";
import "./HowWeWorkHero.css";
import Reveal from "../../../../animations/Reveal";
import Phase from "../../../../assets/Howwework/Phase.svg";
import tecks from "../../../../assets/Howwework/tecks.svg";
import { fadeLeft,fadeUp,fadeRight } from "../../../../animations/variants";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const HowWeWorkHero = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Single step array definition (6 phases total)
  const steps = [
    { label: "01", text: "Discovery" },
    { label: "02", text: "Planning" },
    { label: "03", text: "Design" },
    { label: "04", text: "Development" },
    { label: "05", text: "Testing" },
    { label: "06", text: "Support" },
  ];

  const METRICS = [
    { value: "1 day", label: "First response" },
    { value: "3–5 days", label: "Proposal ready" },
    { value: "87%", label: "Client retention" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="case-hero-section">
      <div className="container">
        <div className="row g-5 mb-5 mt-1">
          {/* Left Column */}
          <div className="col-lg-6">
            <Reveal variant={fadeLeft} delay={0.1}>
              <div className="industries-main-section">
                <p className="Digisphere-badge">Our Process</p>
                <h1 className="industries-hero-title">
                  How we work —
                  <br />
                  <span className="industries-text-highlight">
                    start to finish.
                  </span>
                </h1>
                <p className="industries-hero-description">
                  Every engagement follows the same 6-phase process. No
                  surprises, no guesswork. Here's exactly what working with
                  Digisphere looks like.
                </p>

                {/* Bottom Stats */}
                <div className="industries-hero-stats-row">
                  <div className="industries-stat-item">
                    <h6 className="industries-stat-value">6</h6>
                    <h6 className="industries-stat-label">Defined phases</h6>
                  </div>
                  <div className="industries-stat-item">
                    <h6 className="industries-stat-value">Fixed</h6>
                    <h6 className="industries-stat-label">Project pricing</h6>
                  </div>
                  <div className="industries-stat-item">
                    <span className="industries-stat-value">1</span>
                    <span className="industries-stat-label">
                      Dedicated contact
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column */}
         <div className="col-12 col-md-6 g-4">
      {/* 1. Project Stepper Progress Card (Fade Up) */}
      <Reveal variant={fadeUp} delay={0.1}>
        <div className="Howwework-card Howwework-progress-card">
          <span className="Howwework-progress-title">PROJECT PROGRESS</span>
          <div className="Howwework-stepper">
            {steps.map((step, index) => {
              const isCompleted = index < activeStepIndex;
              const isActive = index === activeStepIndex;

              return (
                <React.Fragment key={index}>
                  {/* Animated Node */}
                  <motion.div
                    className={`Howwework-step-node ${
                      isCompleted
                        ? "Howwework-completed"
                        : isActive
                        ? "Howwework-active"
                        : "Howwework-pending"
                    }`}
                    animate={
                      isActive
                        ? { rotate: 360, scale: [1, 1.15, 1] }
                        : { rotate: 0, scale: 1 }
                    }
                    transition={{
                      rotate: { duration: 1.2, ease: "easeInOut" },
                      scale: {
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    {isCompleted ? (
                      <Check size={14} strokeWidth={3} />
                    ) : (
                      <span>{step.label}</span>
                    )}
                  </motion.div>

                  {/* Step Connecting Line with Fill Animation */}
                  {index < steps.length - 1 && (
                    <div className="Howwework-step-line-track">
                      <motion.div
                        className="Howwework-step-line-fill"
                        initial={{ width: "0%" }}
                        animate={{
                          width: index < activeStepIndex ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* 2. Main Phase Details Card (Fade Up with slight stagger) */}
      <Reveal variant={fadeUp} delay={0.25}>
        <div className="Howwework-card Howwework-main-card mt-2">
          <div className="Howwework-card-header">
            <div className="Howwework-icon-badge">
              <img className="Howwework-icon" src={Phase} alt="Phase" />
            </div>
            <div>
              <span className="Howwework-phase-tag">PHASE 06</span>
              <h2 className="Howwework-card-title">Ongoing Support</h2>
              <span className="Howwework-card-subtitle">
                Optional retainer
              </span>
            </div>
          </div>

          <p className="Howwework-card-description">
            Most clients stay with us after launch. We offer monthly retainers
            for maintenance, new features, performance monitoring, and priority
            support.
          </p>

          <ul className="Howwework-feature-list">
            <li className="Howwework-feature-item">
              <img
                className="Howwework-check-icon"
                src={tecks}
                alt="check"
              />
              <span>30-day post-launch warranty included free</span>
            </li>
            <li className="Howwework-feature-item">
              <img
                className="Howwework-check-icon"
                src={tecks}
                alt="check"
              />
              <span>Monthly retainers from ₹15,000/month</span>
            </li>
          </ul>
        </div>
      </Reveal>

      {/* 3. Bottom Metrics Cards Grid (Fade Right) */}
      <Reveal variant={fadeRight} delay={0.4}>
        <div className="row g-3 mt-1">
          {METRICS.map((metric, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="Howwework-card Howwework-metric-card">
                <span className="Howwework-metric-value">
                  {metric.value}
                </span>
                <span className="Howwework-metric-label">
                  {metric.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkHero;