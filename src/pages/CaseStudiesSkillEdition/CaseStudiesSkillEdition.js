import React from "react";
import "./CaseStudiesSkillEdition.css";
import { FiUsers, FiBookOpen, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation Variants
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

const CaseStudiesSkillEdition = () => {
  const challenges = [
    {
      icon: <FiUsers size={18} color="#057dcd" />,
      title: "Role-Based Workflows",
      description:
        "Building separate digital environments for students, tutors, and administrators required strict permission boundaries and custom navigation structures. Tutors needed administrative tools to manage classes and assign grading responsibilities without gaining access to system-wide settings. Students required a clean, distraction-free interface, while admins needed total platform control across all active user tiers.",
    },
    {
      icon: <FiBookOpen size={18} color="#057dcd" />,
      title: "Content & Curriculum Scaling",
      description:
        "Structuring technical programming curricula, downloadable code repositories, and high-definition video streams presented significant content architecture challenges. The platform needed to support interactive coding assignments, modular lesson pathways, and structured resource libraries within a single interface. Without clear categorizations, learners struggled to navigate complex course prerequisites effectively.",
    },
    {
      icon: <FiTrendingUp size={18} color="#057dcd" />,
      title: "Real-Time Analytics & Tracking",
      description:
        "Monitoring student engagement, assignment completion rates, and quiz scores across thousands of concurrent users required robust real-time tracking pipelines. Tutors lacked centralized reporting dashboards to identify struggling students early or measure overall cohort progress. The platform needed integrated metrics to evaluate learning milestones and streamline automated certification issue workflows.",
    },
  ];

  const highlights = [
    {
      number: 1,
      title: "Dedicated Multi-Role Dashboards",
      description:
        "Architected tailored dashboard experiences engineered specifically for Students, Tutors, and Platform Administrators. Students gain instant access to active enrolled courses, upcoming deadlines, and personal gradebooks upon logging in. Tutors utilize specialized portals for curriculum creation and assignment evaluation, while admins retain high-level system oversight.",
    },
    {
      number: 2,
      title: "Structured Curriculum Architecture",
      description:
        "Engineered a dynamic course creation and content management engine capable of handling multi-format learning materials seamlessly. Instructors can effortlessly upload video lectures, attach code files, build interactive quizzes, and organize modules into structured learning tracks. This intuitive interface reduces administrative overhead and simplifies ongoing course maintenance.",
    },
    {
      number: 3,
      title: "Automated Milestone Tracking",
      description:
        "Integrated real-time analytics engines that track student completion rates, quiz submissions, and course participation automatically. Visual progress indicators provide learners with immediate feedback on their skill development journey and remaining requirements. Automated alerts notify tutors when intervention is needed, ensuring students remain engaged and on track to graduate.",
    },
  ];

  return (
    <div className="Skilledition-wrapper">
      {/* Hero Section */}
      <section className="Skilledition-hero">
        <div className="container">
          <motion.div
            className="Skilledition-badge"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="Skilledition-badge-dot"></span>
            Skilledition
          </motion.div>

          <motion.h1
            className="Skilledition-hero-title"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            Centralized EdTech Platform &
            <span className="Skilledition-blue"> Role-Based Ecosystem </span>
            for Skilledition EdTech.
          </motion.h1>

          <motion.p
            className="Skilledition-hero-desc"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Skilledition wanted to create a centralized, scalable learning
            ecosystem capable of powering modern technical education at scale.
            We designed and built a multi-role web platform that unifies student
            portals, instructor management modules, and administrator controls
            into one cohesive experience. The solution streamlines curriculum
            delivery, drives student retention, and simplifies complex
            educational workflows.
          </motion.p>
        </div>

        {/* Meta Bar */}
        <motion.div
          className="Skilledition-meta-bar"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <div className="container">
            <div className="Skilledition-meta-col">
              <span className="Skilledition-meta-label">CLIENT</span>
              <span className="Skilledition-meta-val">Skilledition EdTech</span>
            </div>
            <div className="Skilledition-meta-col">
              <span className="Skilledition-meta-label">CATEGORY</span>
              <span className="Skilledition-meta-val">
                Education & Learning
              </span>
            </div>
            <div className="Skilledition-meta-col">
              <span className="Skilledition-meta-label">PROJECT TYPE</span>
              <span className="Skilledition-meta-val">
                EdTech Platform Development
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="Skilledition-challenge">
        <div className="Skilledition-container">
          <motion.span
            className="Skilledition-section-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            THE CHALLENGE
          </motion.span>

          <motion.h2
            className="Skilledition-challenge-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            Unifying multi-user educational workflows into a single <br />
            scalable, intuitive learning management system.
          </motion.h2>

          <div className="Skilledition-challenge-grid">
            {challenges.map((item, index) => (
              <motion.div
                className="Skilledition-challenge-card"
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="Skilledition-icon-box">{item.icon}</div>
                <h3 className="Skilledition-card-title">{item.title}</h3>
                <p className="Skilledition-card-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built Section */}
      <section className="Skilledition-approach">
        <div className="container">
          <motion.span
            className="Skilledition-approach-label"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            WHAT WE BUILT
          </motion.span>

          <motion.h2
            className="Skilledition-approach-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            A complete role-based EdTech platform bringing <br />
            students, tutors, and administrators together.
          </motion.h2>

          <div className="Skilledition-approach-grid">
            {highlights.map((step, idx) => (
              <motion.div
                className="Skilledition-step-wrapper"
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={idx % 2 === 0 ? fadeRight : fadeLeft}
              >
                <div className="Skilledition-step-num">{step.number}</div>
                <div className="Skilledition-step-card">
                  <h3 className="Skilledition-card-title">{step.title}</h3>
                  <p className="Skilledition-card-desc">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesSkillEdition;