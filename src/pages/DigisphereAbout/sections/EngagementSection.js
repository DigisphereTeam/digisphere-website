import React from "react";
import "./EngagementSection.css";
import { motion } from "framer-motion";
import { TiArrowUp } from "react-icons/ti";

import auditIcon from "../../../assets/about-page/audit-icon.svg";
import strategyIcon from "../../../assets/about-page/strategy-icon.svg";
import buildIcon from "../../../assets/about-page/build-icon.svg";
import launchIcon from "../../../assets/about-page/launch-icon.svg";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";
import ProcessCards from "../../../components/ProcessCards/ProcessCards";

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

  const bars = [18, 30, 48, 62, 78, 86, 94, 100];
  const minHeight = Math.min(...bars);
  const maxHeight = Math.max(...bars);

  // Parent animation manager
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.06, // Cascades the bars beautifully from left-to-right
      },
    },
  };

  const barVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  };

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

        <ProcessCards cards={steps} colClass="col-12 col-sm-6 col-lg" />

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

        {/* Growth Trajectory */}
        <div className="col-lg-6 order-1 order-lg-2 mx-auto">
          <motion.div
            className="traffic-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="traffic-header">
              <h4>Growth Trajectory</h4>
            </div>

            <div className="traffic-bars">
              {bars.map((height, index) => (
                <div
                  key={index}
                  className={`bar-wrapper ${
                    height === maxHeight || height === minHeight
                      ? "fixed-tooltip"
                      : ""
                  }`}
                >
                  <span className="bar-tooltip">
                    <TiArrowUp style={{ marginRight: "-2px" }} />
                    {height}%
                  </span>

                  <motion.div
                    className="traffic-bar"
                    variants={barVariants}
                    style={{
                      height: `${height}%`, // Changed from px to % to scale automatically
                      transformOrigin: "bottom",
                    }}
                  />
                </div>
              ))}
            </div>

            <p className="traffic-footer">Search Rankings Up</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
