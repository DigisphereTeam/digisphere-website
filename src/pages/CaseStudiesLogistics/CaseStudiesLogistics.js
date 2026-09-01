import React from 'react';
import "./CaseStudiesLogistics.css";
import { FiLayers, FiMapPin, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

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
    icon: <FiLayers size={18} color="#057dcd" />,
    title: "Operational Complexity",
    description: "Translating multi-modal transport infrastructure into dynamic web components was a core operational obstacle. Prospective B2B partners struggled to evaluate technical fleet capacities, regional terminal capabilities, and customized enterprise pricing tiers. The outdated architecture obscured high-margin freight solutions behind dense, hard-to-navigate legacy documentation.",
  },
  {
    icon: <FiMapPin size={18} color="#057dcd" />,
    title: "Network & Fleet Visibility",
    description: "Communicating international route coverage and real-time asset availability presented significant engagement hurdles online. Potential clients lacked direct visibility into warehouse hub locations, active shipping lanes, and equipment options. This disconnect caused unnecessary friction during early-stage vendor evaluation and cross-border transport planning.",
  },
  {
    icon: <FiSend size={18} color="#057dcd" />,
    title: "High-Friction Lead Pipelines",
    description: "Legacy inquiry workflows relied on disjointed contact methods and tedious static request forms. Cargo shippers experienced long turnaround times when attempting to request customized freight estimates or request volume discounts. As a result, valuable high-intent enterprise transport opportunities were dropping off before initial contact.",
  },
];

const highlightsData = [
  {
    number: 1,
    title: "Cross-Platform Architecture",
    description: "Engineered a high-performance responsive web system tailored for diverse operational devices and network speeds. The application renders seamlessly across desktop corporate portals, field tablet displays, and mobile devices on the road. Optimizing assets ensured rapid load speeds and uninterrupted access for logistics managers everywhere.",
  },
  {
    number: 2,
    title: "Intuitive Service Discovery",
    description: "Restructured the entire site navigation around core supply chain solutions, freight categories, and specialized transport capabilities. Interactive service breakdown modules now allow prospective enterprise clients to quickly review specifications, regulatory certifications, and handling limits. Clear layout structures guide visitors directly to relevant solutions without hassle.",
  },
  {
    number: 3,
    title: "Automated Lead Capture",
    description: "Implemented streamlined inquiry triggers and high-conversion dynamic quote calculation request forms across key pages. Shippers can now input cargo specifications, route origin points, and fulfillment timetables directly through intuitive UI components. This enhancement dramatically reduced intake turnaround and increased overall lead generation.",
  },
];

export const CaseStudiesLogistics = () => {
  return (
    <div className="Logistics-wrapper">
      {/* Hero Section */}
      <section className="Logistics-hero">
        <div className="container">
          <motion.div 
            className="Logistics-badge"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="Logistics-badge-dot"></span>
            Logistics
          </motion.div>

          <motion.h1 
            className="Logistics-hero-title"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            Scaling Supply Chain 
            <span className="Logistics-blue"> Digital Infrastructure</span> <br />
            for 6. Logistics.
          </motion.h1>

          <motion.p 
            className="Logistics-hero-desc"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            We overhauled 6. Logistics’ digital presence to modernize their end-to-end customer journey and improve market reach. By converting complex multi-modal capabilities into user-friendly digital touchpoints, we empowered cargo partners to explore services instantly. The result is a robust digital ecosystem that drives trust, streamlines dispatch inquiries, and accelerates enterprise pipelines.
          </motion.p>
        </div>

        {/* Meta Bar */}
        <motion.div 
          className="Logistics-meta-bar"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <div className="container">
            <div className="Logistics-meta-col">
              <span className="Logistics-meta-label">CLIENT</span>
              <span className="Logistics-meta-val">6. Logistics Group</span>
            </div>
            <div className="Logistics-meta-col">
              <span className="Logistics-meta-label">INDUSTRY</span>
              <span className="Logistics-meta-val">Freight & Supply Chain</span>
            </div>
            <div className="Logistics-meta-col">
              <span className="Logistics-meta-label">SERVICES PROVIDED</span>
              <span className="Logistics-meta-val">UX Architecture + Web Development</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="Logistics-challenge">
        <div className="Logistics-container">
          <motion.span 
            className="Logistics-section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            THE CHALLENGE
          </motion.span>

          <motion.h2 
            className="Logistics-challenge-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            Bridging heavy freight operations with a modern, <br />
            streamlined enterprise web experience.
          </motion.h2>

          <div className="Logistics-challenge-grid">
            {challengesData.map((item, index) => (
              <motion.div 
                className="Logistics-challenge-card" 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="Logistics-icon-box">{item.icon}</div>
                <h3 className="Logistics-card-title">{item.title}</h3>
                <p className="Logistics-card-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built Section */}
      <section className="Logistics-approach">
        <div className="container">
          <motion.span 
            className="Logistics-approach-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            WHAT WE BUILT
          </motion.span>

          <motion.h2 
            className="Logistics-approach-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            A performant, scalable platform engineered around <br />
            service discovery, network visibility, and quick quotes.
          </motion.h2>

          <div className="Logistics-approach-grid">
            {highlightsData.map((step, index) => (
              <motion.div 
                className="Logistics-step-wrapper" 
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
              >
                <div className="Logistics-step-num">{step.number}</div>
                <div className="Logistics-step-card">
                  <h3 className="Logistics-card-title">{step.title}</h3>
                  <p className="Logistics-card-desc">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};