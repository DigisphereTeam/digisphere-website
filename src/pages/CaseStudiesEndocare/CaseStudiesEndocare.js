import React from "react";
import "./CaseStudiesEndocare.css";
import { motion } from "framer-motion";
import {
  FiEyeOff,
  FiSearch,
  FiMonitor,
  FiMousePointer,
  FiTrendingUp,
  FiUserCheck,
  FiZap,
} from "react-icons/fi";
import { TbFingerprint } from "react-icons/tb";

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

const CaseStudiesEndocare = () => {
  const challenges = [
    {
      icon: <FiEyeOff size={18} color="#057dcd" />,
      title: "Service Visibility",
      description:
        "Specialized clinical offerings and endocrine programs were buried in deep menus, preventing patients from easily finding key care options.",
    },
    {
      icon: <TbFingerprint size={20} color="#057dcd" />,
      title: "Brand Identity",
      description:
        "Outdated visuals and legacy web components failed to reflect Endocare's clinical excellence or build trust with new patients.",
    },
    {
      icon: <FiSearch size={18} color="#057dcd" />,
      title: "Information Friction",
      description:
        "Disorganized schedules and scattered contact info caused frustration and drove up repetitive calls to support staff.",
    },
    {
      icon: <FiMonitor size={18} color="#057dcd" />,
      title: "Cross-Device UX",
      description:
        "Unresponsive mobile layouts and broken scheduling tools ruined the experience for over 60% of site traffic.",
    },
    {
      icon: <FiMousePointer size={18} color="#057dcd" />,
      title: "Conversion Paths",
      description:
        "Multi-step booking forms without clear progress indicators led to high drop-off rates during appointment setup.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & User Profiling",
      description:
        "Analyzed key patient demographics and search behaviors to identify core usability obstacles across mobile and desktop workflows.",
    },
    {
      number: "02",
      title: "Architecture & Flow Design",
      description:
        "Restructured site navigation to ensure doctors, schedules, and specialty departments are accessible within just two clicks.",
    },
    {
      number: "03",
      title: "Accessible UI System",
      description:
        "Built a clean, high-contrast visual system adhering to WCAG 2.1 AA standards for seamless accessibility across all age groups.",
    },
    {
      number: "04",
      title: "Performance Engineering",
      description:
        "Developed a responsive React web app optimized for rapid load times, even on low-bandwidth mobile networks.",
    },
  ];

  const metrics = [
    {
      icon: <FiTrendingUp size={22} color="#057dcd" />,
      value: "+140%",
      label: "Online Bookings",
      detail:
        "Direct appointment conversions surged within 90 days of launch thanks to simplified booking steps and clear calls-to-action.",
    },
    {
      icon: <FiZap size={22} color="#057dcd" />,
      value: "1.2s",
      label: "Average Load Time",
      detail:
        "Optimized Core Web Vitals to deliver sub-second response rates and keep bounce rates to a minimum across mobile devices.",
    },
    {
      icon: <FiUserCheck size={22} color="#057dcd" />,
      value: "45%",
      label: "Bounce Rate Cut",
      detail:
        "Intuitive menu structures kept patients engaged longer, encouraging deeper exploration of treatment plans and medical credentials.",
    },
  ];

  return (
    <div className="Endocare-wrapper">
      {/* Hero Section */}
      <section className="Endocare-hero">
        <div className="container">
          <motion.div 
            className="Endocare-badge"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="Endocare-badge-dot"></span>
            Endocare
          </motion.div>

          <motion.h1 
            className="Endocare-hero-title"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            Redesigning the Patient Experience for{" "}
            <span className="Endocare-blue">Endocare Hospitals</span>
          </motion.h1>

          <motion.p 
            className="Endocare-hero-desc"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            We transformed Endocare's legacy digital presence into an enterprise-grade, patient-first portal. By combining intuitive appointment scheduling, WCAG-compliant accessibility, and rapid mobile performance, the new platform builds institutional trust and guarantees seamless access to specialty medical care.
          </motion.p>
        </div>

        {/* Meta Bar */}
        <motion.div 
          className="Endocare-meta-bar"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <div className="Endocare-meta-container">
            <div className="Endocare-meta-col">
              <span className="Endocare-meta-label">CLIENT</span>
              <span className="Endocare-meta-val">Endocare Hospitals</span>
            </div>
            <div className="Endocare-meta-col">
              <span className="Endocare-meta-label">INDUSTRY</span>
              <span className="Endocare-meta-val">Healthcare & Clinical</span>
            </div>
            <div className="Endocare-meta-col">
              <span className="Endocare-meta-label">SERVICES</span>
              <span className="Endocare-meta-val">UX Research, UI Design</span>
            </div>
            <div className="Endocare-meta-col">
              <span className="Endocare-meta-label">TECH STACK</span>
              <span className="Endocare-meta-val">React, Web Performance</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="Endocare-challenge">
        <div className="Endocare-container">
          <motion.span 
            className="Endocare-section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            THE CHALLENGE
          </motion.span>

          <motion.h2 
            className="Endocare-challenge-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            Bridging the gap between clinical services and intuitive patient access.
          </motion.h2>

          <div className="Endocare-challenge-grid">
            {challenges.map((item, index) => (
              <motion.div 
                className="Endocare-challenge-card" 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="Endocare-icon-box">{item.icon}</div>
                <h3 className="Endocare-card-title">{item.title}</h3>
                <p className="Endocare-card-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="Endocare-approach">
        <div className="container">
          <motion.span 
            className="Endocare-approach-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            THE STRATEGY
          </motion.span>

          <motion.h2 
            className="Endocare-approach-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            A patient-centric execution framework.
          </motion.h2>

          <div className="Endocare-approach-grid">
            {steps.map((step, index) => (
              <motion.div 
                className="Endocare-step-wrapper" 
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
              >
                <div className="Endocare-step-num">{step.number}</div>
                <div className="Endocare-step-card">
                  <h3 className="Endocare-card-title">{step.title}</h3>
                  <p className="Endocare-card-desc">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="Endocare-results">
        <div className="container">
          <motion.span 
            className="Endocare-section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            THE IMPACT
          </motion.span>

          <motion.h2 
            className="Endocare-results-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            Measurable outcomes for patients and hospital operations.
          </motion.h2>

          <div className="Endocare-results-grid">
            {metrics.map((metric, index) => (
              <motion.div 
                className="Endocare-result-card" 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <div className="Endocare-result-header">
                  {metric.icon}
                  <span className="Endocare-result-value">{metric.value}</span>
                </div>
                <h3 className="Endocare-result-label">{metric.label}</h3>
                <p className="Endocare-result-desc">{metric.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesEndocare;