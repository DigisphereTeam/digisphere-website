import React from "react";
import "./CaseStudiesEndocare.css";
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

const CaseStudiesEndocare = () => {
  const challenges = [
    {
      icon: <FiEyeOff size={18} color="#0284c7" />,
      title: "Service Visibility",
      description:
        "Specialized clinical offerings and advanced endocrine treatment programs were buried beneath complex navigation menus. Prospective patients struggled to identify relevant care departments, lead specialists, or available treatment options. Elevating service discoverability was crucial for driving informed consultations.",
    },
    {
      icon: <TbFingerprint size={20} color="#0284c7" />,
      title: "Brand Identity",
      description:
        "Legacy visual assets and outdated portal layouts failed to reflect Endocare's reputation for medical excellence. The existing design lacked cohesive color schemes, modern healthcare typography, and reassuring patient-centric imagery. Establishing a trustworthy digital identity was vital to build confidence among new patients.",
    },
    {
      icon: <FiSearch size={18} color="#0284c7" />,
      title: "Information Friction",
      description:
        "Patients encountered significant barriers when searching for physician duty rosters, OPD timings, and emergency contact details. Fragmented content presentation led to high call-center volume for basic informational inquiries. Streamlining critical data pathways was essential for patient convenience.",
    },
    {
      icon: <FiMonitor size={18} color="#0284c7" />,
      title: "Cross-Device UX",
      description:
        "Severe layout breakages and unoptimized mobile forms degraded the booking experience for over 60% of site visitors. Interactive schedule pickers were unusable on smaller touchscreens, causing user frustration. Re-architecting a fluid cross-device experience was mandatory for modern healthcare standards.",
    },
    {
      icon: <FiMousePointer size={18} color="#0284c7" />,
      title: "Conversion Paths",
      description:
        "Appointment booking forms lacked prominent calls-to-action, progress tracking, and instant confirmation feedback. Multi-step registration flows resulted in steep drop-off rates during digital onboarding. Implementing frictionless conversion funnels was necessary to maximize appointment conversions.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Patient Profiling",
      description:
        "Mapped user personas across age demographics and health conditions to understand key search behaviors. Conducted stakeholder interviews with clinical staff and patients to isolate pain points in the offline-to-online journey. These insights guided our patient-first design strategy.",
    },
    {
      number: "02",
      title: "Architecture & Flow Design",
      description:
        "Restructured site taxonomy to ensure emergency hotlines, doctor profiles, and booking modules are reachable within two clicks. Designed dedicated department hubs featuring direct appointment scheduling widgets. The streamlined flow eliminated unnecessary steps from patient journeys.",
    },
    {
      number: "03",
      title: "Accessible UI System",
      description:
        "Created a clean, high-contrast design system adhering strictly to WCAG 2.1 AA accessibility guidelines. Standardized typography scales, legibility ratios, and touch targets to accommodate elderly visitors and visually impaired patients. The cohesive visual language reinforced institutional trust.",
    },
    {
      number: "04",
      title: "Performance Engineering",
      description:
        "Architected a lightweight React web app utilizing code-splitting, progressive image loading, and server-side caching. Optimized assets to achieve sub-second page loads across low-bandwidth mobile networks. The rapid responsiveness guaranteed immediate access during urgent medical queries.",
    },
  ];

  const metrics = [
    {
      icon: <FiTrendingUp size={22} color="#0284c7" />,
      value: "+140%",
      label: "Online Bookings",
      detail:
        "Achieved a massive increase in completed digital appointment requests within 90 days post-launch. Simplified booking forms and prominent CTA placement converted high-intent traffic into scheduled clinical visits.",
    },
    {
      icon: <FiZap size={22} color="#0284c7" />,
      value: "1.2s",
      label: "Average Load Time",
      detail:
        "Delivered a 65% improvement in Core Web Vitals performance across all mobile networks. Rapid page delivery minimized patient bounce rates and ensured reliable access during urgent healthcare searches.",
    },
    {
      icon: <FiUserCheck size={22} color="#0284c7" />,
      value: "45%",
      label: "Bounce Rate Reduction",
      detail:
        "Improved content hierarchy and clear department categorization kept patients engaged longer on key service pages. Visitors explored doctor credentials and treatment details far more thoroughly.",
    },
  ];

  return (
    <div className="Endocare-wrapper">
      {/* Hero Section */}
      <section className="Endocare-hero">
        <div className="container">
          <div className="Endocare-badge">
            <span className="Endocare-badge-dot"></span>
            HEALTHCARE CASE STUDY
          </div>
          <h1 className="Endocare-hero-title">
            Redesigning the Patient Experience for{" "}
            <span className="Endocare-blue">Endocare Hospitals</span>
          </h1>
          <p className="Endocare-hero-desc">
            Endocare Hospitals needed to transform a fragmented digital presence into an enterprise-grade healthcare portal. We re-engineered their platform from the ground up—combining intuitive appointment scheduling, WCAG-compliant design accessibility, and rapid mobile performance. The new digital front door elevates patient trust, streamlines clinical workflows, and guarantees effortless access to specialty medical care.
          </p>
        </div>

        {/* Meta Bar */}
        <div className="Endocare-meta-bar">
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
        </div>
      </section>

      {/* Challenge Section */}
      <section className="Endocare-challenge">
        <div className="Endocare-container">
          <span className="Endocare-section-label">THE CHALLENGE</span>
          <h2 className="Endocare-challenge-title">
            Bridging the gap between complex clinical services and intuitive
            patient access.
          </h2>

          <div className="Endocare-challenge-grid">
            {challenges.map((item, index) => (
              <div className="Endocare-challenge-card" key={index}>
                <div className="Endocare-icon-box">{item.icon}</div>
                <h3 className="Endocare-card-title">{item.title}</h3>
                <p className="Endocare-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="Endocare-approach">
        <div className="container">
          <span className="Endocare-approach-label">THE STRATEGY</span>
          <h2 className="Endocare-approach-title">
            A patient-centric execution framework.
          </h2>

          <div className="Endocare-approach-grid">
            {steps.map((step) => (
              <div className="Endocare-step-wrapper" key={step.number}>
                <div className="Endocare-step-num">{step.number}</div>
                <div className="Endocare-step-card">
                  <h3 className="Endocare-card-title">{step.title}</h3>
                  <p className="Endocare-card-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="Endocare-results">
        <div className="container">
          <span className="Endocare-section-label">THE IMPACT</span>
          <h2 className="Endocare-results-title">
            Measurable outcomes for patients and hospital operations.
          </h2>

          <div className="Endocare-results-grid">
            {metrics.map((metric, index) => (
              <div className="Endocare-result-card" key={index}>
                <div className="Endocare-result-header">
                  {metric.icon}
                  <span className="Endocare-result-value">{metric.value}</span>
                </div>
                <h3 className="Endocare-result-label">{metric.label}</h3>
                <p className="Endocare-result-desc">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesEndocare;