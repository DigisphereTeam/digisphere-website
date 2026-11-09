import React from "react";
import "./CaseStudiesSRSteelDoors.css";
import { motion } from "framer-motion";
import { FiGrid, FiSend, FiSmartphone } from "react-icons/fi";

// Shared Scroll Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const challengesData = [
  {
    icon: <FiGrid size={18} color="#057dcd" />,
    title: "Product Showcase",
    description:
      "Structuring extensive steel door lines into an intuitive online catalogue presented significant navigation obstacles. Legacy product listings lacked high-resolution imagery, detailed dimensional specifications, and organized structural categories. Customers struggled to explore finishes, security ratings, and custom fitting options effortlessly.",
  },
  {
    icon: <FiSmartphone size={18} color="#057dcd" />,
    title: "Responsive Design",
    description:
      "Delivering a unified, ultra-fast browsing experience across desktop workstations, tablets, and smartphones required tailored layouts. The previous digital setup failed to render high-density product images and specification tables cleanly on smaller screens. Ensuring smooth mobile navigation was vital for contractors and homeowners reviewing doors on job sites.",
  },
  {
    icon: <FiSend size={18} color="#057dcd" />,
    title: "Lead Focused",
    description:
      "Converting online visitors into qualified wholesale and retail sales leads required an aggressive conversion overhaul. Disconnected contact forms and subtle phone prompts resulted in high drop-off rates from high-intent buyers. SR Steel Doors needed seamless quote request pathways integrated directly into every product detail view.",
  },
];

const highlightsData = [
  {
    number: 1,
    title: "Responsive Layouts",
    description:
      "Engineered a fully mobile-optimized digital experience tailored for home builders, contractors, and architects on the go. Interactive product galleries and specifications auto-fit seamlessly across all device screens without performance lag. Rapid page loading ensures visitors can explore complete door series without friction.",
  },
  {
    number: 2,
    title: "Structured Showcase",
    description:
      "Designed an organized digital catalogue showcasing residential, commercial, and heavy-duty steel door collections clearly. Each listing features detailed dimensions, material grades, fire-safety ratings, and high-resolution finish previews. Clear visual hierarchy helps customers find exact architectural solutions in fewer clicks.",
  },
  {
    number: 3,
    title: "Lead Generation Engine",
    description:
      "Embedded high-converting inquiry forms, instant WhatsApp consultation triggers, and customized quote calculators directly onto product pages. Strategic call-to-action placement guides potential buyers effortlessly from initial exploration to sending detailed order inquiries. The direct pathways significantly boosted inbound sales leads.",
  },
];

const CaseStudiesSRSteelDoors = () => {
  return (
    <div className="SRSteel-wrapper">
      {/* Hero Section */}
      <section className="SRSteel-hero">
        <div className="container">
          <motion.div
            className="SRSteel-badge"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="SRSteel-badge-dot"></span>
            SR Steel Doors
          </motion.div>

          <motion.h1
            className="SRSteel-hero-title"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            Product Catalogue &
            <span className="SRSteel-blue"> Website Development</span> <br />
            for SR Steel Doors.
          </motion.h1>

          <motion.p
            className="SRSteel-hero-desc"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            SR Steel Doors needed to bridge the gap between their physical
            manufacturing excellence and their digital customer experience.
            While their product line offered premium durability, modern
            architectural aesthetics, and superior security engineering, their
            previous online setup fell short of communicating these strengths
            effectively. We developed a modern, high-converting digital
            catalogue that showcases their entire inventory, simplifies product
            discovery, and drives verified trade and retail inquiries.
          </motion.p>
        </div>

        {/* Meta Bar */}
        <motion.div
          className="SRSteel-meta-bar"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <div className="container">
            <div className="SRSteel-meta-col">
              <span className="SRSteel-meta-label">CLIENT</span>
              <span className="SRSteel-meta-val">SR Steel Doors</span>
            </div>
            <div className="SRSteel-meta-col">
              <span className="SRSteel-meta-label">CATEGORY</span>
              <span className="SRSteel-meta-val">Manufacturing & Retail</span>
            </div>
            <div className="SRSteel-meta-col">
              <span className="SRSteel-meta-label">PROJECT TYPE</span>
              <span className="SRSteel-meta-val">
                Product Catalogue + Web Dev
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="SRSteel-challenge">
        <div className="container">
          <motion.span
            className="SRSteel-section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            THE CHALLENGE
          </motion.span>

          <motion.h2
            className="SRSteel-challenge-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            Creating an accessible online catalog <br />
            that simplifies product discovery and drives customer enquiries.
          </motion.h2>

          <div className="SRSteel-challenge-grid">
            {challengesData.map((item, index) => (
              <motion.div
                className="SRSteel-challenge-card"
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="SRSteel-icon-box">{item.icon}</div>
                <h3 className="SRSteel-card-title">{item.title}</h3>
                <p className="SRSteel-card-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built Section */}
      <section className="SRSteel-approach">
        <div className="container">
          <motion.span
            className="SRSteel-approach-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            WHAT WE BUILT
          </motion.span>

          <motion.h2
            className="SRSteel-approach-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            Organized collections, engaging visuals, <br />
            and clear enquiry-focused calls-to-action.
          </motion.h2>

          <div className="SRSteel-approach-grid">
            {highlightsData.map((step, index) => (
              <motion.div
                className="SRSteel-step-wrapper"
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
              >
                <div className="SRSteel-step-num">{step.number}</div>
                <div className="SRSteel-step-card">
                  <h3 className="SRSteel-card-title">{step.title}</h3>
                  <p className="SRSteel-card-desc">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="SRSteel-cta-wrapper"></div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesSRSteelDoors;
