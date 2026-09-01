import React from 'react';
import "./CaseStudiesFinSphere.css";
import { FiShield, FiFolder, FiLock } from "react-icons/fi";

export const CaseStudiesFinSphere = () => {
  const challenges = [
    {
      icon: <FiShield size={18} color="#057dcd" />,
      title: "Data Protection & Privacy",
      description:
        "Safeguarding highly sensitive client financial metrics against evolving cyber threats required architectural overhauls. Managing high-volume transactional data without robust end-to-end encryption exposed the platform to severe compliance risks and potential breaches. FinSphere needed an enterprise-grade security framework to protect client assets while maintaining seamless data access.",
    },
    {
      icon: <FiFolder size={18} color="#057dcd" />,
      title: "Encrypted Document Vault",
      description:
        "Centralizing confidential financial statements, tax records, and regulatory compliance paperwork presented complex storage hurdles. Legacy file management systems lacked automated encryption standards, version control, and secure client-advisor sharing capabilities. Without a centralized vault, clients experienced lengthy delays when attempting to upload, review, or verify high-importance paperwork.",
    },
    {
      icon: <FiLock size={18} color="#057dcd" />,
      title: "Role-Based Access Control",
      description:
        "Establishing strict multi-factor authentication protocols and audit logging pipelines was vital to meet global banking compliance standards. The existing infrastructure struggled to deliver granular permission boundaries for institutional investors, individual accounts, and compliance auditors. Without dynamic role verification, preventing unauthorized access while keeping workflows fast was a key challenge.",
    },
  ];

  const highlights = [
    {
      number: 1,
      title: "Bank-Grade Security Architecture",
      description:
        "Engineered a security-first Web application incorporating AES-256 bit encryption, continuous vulnerability monitoring, and zero-trust authentication protocols. The platform strictly enforces automated session timeouts, multi-factor authorization, and real-time threat detection across all access points. This ironclad framework ensures client portfolios and confidential transactions remain fully protected.",
    },
    {
      number: 2,
      title: "Unified Financial Portal",
      description:
        "Developed a centralized dashboard that aggregates portfolio analytics, real-time market data, and encrypted document storage into one clear view. Wealth managers and clients can effortlessly track asset distribution, download audited statements, and exchange verified tax records safely. The interface reduces administrative friction and streamlines client-advisor communication pipelines.",
    },
    {
      number: 3,
      title: "Seamless Responsive Design",
      description:
        "Delivered a fully responsive web application optimized for ultra-fast performance across desktop monitors, tablets, and mobile smartphones. Intelligent data layout components adapt complex financial tables and dynamic performance charts cleanly to smaller mobile screens. Clients enjoy uninterrupted access to their financial portfolios and secure messaging tools from any location.",
    },
  ];

  return (
    <div className="FinSphere-wrapper">
      {/* Hero Section */}
      <section className="FinSphere-hero">
        <div className="FinSphere-container">
          <div className="FinSphere-badge">
            <span className="FinSphere-badge-dot"></span>
            CASE STUDY
          </div>
          <h1 className="FinSphere-hero-title">
            Web Application &
            <span className="FinSphere-blue"> Cybersecurity Platform</span> <br />
            for FinSphere.
          </h1>
          <p className="FinSphere-hero-desc">
            FinSphere required a high-security digital ecosystem engineered to manage sensitive financial assets without compromising user experience. We architected a bank-grade web platform combining end-to-end data encryption, real-time portfolio management tools, and seamless document exchange modules. The solution instills total client trust, ensures regulatory compliance, and elevates the digital banking experience.
          </p>
        </div>

        {/* Meta Bar */}
        <div className="FinSphere-meta-bar">
          <div className="FinSphere-container">
            <div className="FinSphere-meta-col">
              <span className="FinSphere-meta-label">CLIENT</span>
              <span className="FinSphere-meta-val">FinSphere Global</span>
            </div>
            <div className="FinSphere-meta-col">
              <span className="FinSphere-meta-label">CATEGORY</span>
              <span className="FinSphere-meta-val">FinTech & Security</span>
            </div>
            <div className="FinSphere-meta-col">
              <span className="FinSphere-meta-label">PROJECT TYPE</span>
              <span className="FinSphere-meta-val">Web Application + Cybersecurity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="FinSphere-challenge">
        <div className="FinSphere-container">
          <span className="FinSphere-section-label">THE CHALLENGE</span>
          <h2 className="FinSphere-challenge-title">
            Balancing enterprise-grade financial security with a <br />
            frictionless, user-friendly client dashboard.
          </h2>

          <div className="FinSphere-challenge-grid">
            {challenges.map((item, index) => (
              <div className="FinSphere-challenge-card" key={index}>
                <div className="FinSphere-icon-box">{item.icon}</div>
                <h3 className="FinSphere-card-title">{item.title}</h3>
                <p className="FinSphere-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built Section */}
      <section className="FinSphere-approach">
        <div className="FinSphere-container">
          <span className="FinSphere-approach-label">WHAT WE BUILT</span>
          <h2 className="FinSphere-approach-title">
            A secure client-facing portal with real-time portfolio reporting, <br />
            encrypted document management, and compliance controls.
          </h2>

          <div className="FinSphere-approach-grid">
            {highlights.map((step) => (
              <div className="FinSphere-step-wrapper" key={step.number}>
                <div className="FinSphere-step-num">{step.number}</div>
                <div className="FinSphere-step-card">
                  <h3 className="FinSphere-card-title">{step.title}</h3>
                  <p className="FinSphere-card-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesFinSphere;