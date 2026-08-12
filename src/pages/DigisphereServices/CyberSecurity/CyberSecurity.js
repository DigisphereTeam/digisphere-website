import React, { useState, useEffect } from "react";
import "./CyberSecurity.css";
import BookingSection from "../../../components/BookingSection/BookingSection.js";
import tickIcon from "../../../assets/digital-marketing/tick-icon.svg";
import ServicesGrid from "../../../components/ServicesGrid/ServicesGrid";
import Cybersecurity from "../../../assets/Cybersecurity/Cybersecurity (2).svg";
import Button from "../../../components/Button/Button";
import Reveal from "../../../animations/Reveal";
import FAQSection from "../../../components/FaqSection/FAQSection";
import { fadeUp,fadeRight } from "../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";

import Counter from "../../../components/Counter/Counter.js";
import Aligned from "../../../assets/Cybersecurity/Aligned.svg";
import soc from "../../../assets/Cybersecurity/soc.svg";
import VAPT from "../../../assets/Cybersecurity/VAPT.svg";
import Monitoring from "../../../assets/Cybersecurity/Security Monitoring.svg";
import Risk from "../../../assets/Cybersecurity/Risk Assessment.svg";
import Data from "../../../assets/Cybersecurity/Data Protection.svg";
import Incident from "../../../assets/Cybersecurity/Incident.svg";
import Architecture from "../../../assets/Cybersecurity/Architecture.svg";
import { Link } from "react-router-dom";

const CyberSecurity = () => {
  // 1. Helper function to find out what week of the year it currently is
  const getWeekNumber = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const pastDaysOfYear = (now - startOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  };

  const currentWeek = getWeekNumber();

  // 2. Put your 10 unique numbers for "Threats Blocked" inside this array
  const threatNumbersPool = [
    1847, // Week 1
    1932, // Week 2
    1654, // Week 3
    2105, // Week 4
    1789, // Week 5
    2044, // Week 6
    1890, // Week 7
    2210, // Week 8
    1567, // Week 9
    1985, // Week 10
  ];

  // 3. Put your 10 unique numbers for "Today's Alerts" inside this array
  const alertNumbersPool = [23, 14, 32, 45, 19, 28, 9, 21, 37, 12];

  // Using % ensures that the index cleanly rotates between 0 and 9 based on the current week
  const poolIndex = currentWeek % threatNumbersPool.length;

  const dynamicThreats = threatNumbersPool[poolIndex];
  const dynamicAlerts = alertNumbersPool[poolIndex];

  const stats = [
    {
      end: 18,
      prefix: "₹",
      suffix: "L",
      label: "Avg. ransomware demand in India",
    },
    {
      end: 19.5,
      prefix: "₹",
      suffix: "Cr",
      label: "Avg. cost per breach in Asia",
    },
    {
      end: 95,
      suffix: "%",
      label: "Cyberattacks start with phishing",
    },
    {
      end: 5.4,
      prefix: "₹",
      suffix: "L",
      label: "Avg. cost per hour of breach downtime",
    },
  ];

  const services = [
    {
      icon: VAPT,
      title: "VAPT (Vulnerability Assessment & Penetration Testing)",
      description:
        "Simulated cyberattacks to find vulnerabilities before malicious actors do. We test web apps, networks, APIs, and cloud environments.",
      points: [
        "Web app & API testing",
        "Network VAPT",
        "Detailed remediation report",
      ],
    },
    {
      icon: Monitoring,
      title: "Security Monitoring (SOC) ",
      description:
        "24/7 Security Operations Center monitoring — real-time threat detection, log analysis, and incident response for your infrastructure.",
      points: [
        "SIEM implementation",
        "Real-time threat alerts",
        "Incident response SLA",
      ],
    },
    {
      icon: Risk,
      title: " Compliance & Risk Assessment",
      description:
        "Gap assessments and remediation roadmaps for ISO 27001, SOC 2, GDPR, IT Act 2000, and RBI/SEBI cybersecurity frameworks.",
      points: [
        "Compliance gap analysis",
        "Policy documentation",
        "Audit readiness support",
      ],
    },
    {
      icon: Data,
      title: "Data Protection & Encryption",
      description:
        "End-to-end encryption implementation, data classification, DLP policies, and access governance to protect sensitive business and customer data.",
      points: [
        "Encryption at rest & transit",
        "Data classification policy",
        "DLP tool configuration",
      ],
    },
    {
      icon: Incident,
      title: "Incident Response",
      description:
        "When a breach happens, speed matters. Emergency incident response — containment, forensic analysis, recovery, and post-incident reporting.",
      points: [
        "Encryption at rest & transit",
        "Forensic investigation",
        "Recovery & hardening plan",
      ],
    },
    {
      icon: Architecture,
      title: "Security Architecture Review",
      description:
        "Independent review of your security architecture — network design, IAM policies, cloud config, application security — with a prioritised improvement roadmap.",
      points: [
        "Architecture threat modelling",
        "Zero-trust assessment",
        "Remediation priority matrix",
      ],
    },
  ];

  const MarketingFaqData = [
    {
      question: "How long does a VAPT engagement take?",
      answer:
        "The duration of a VAPT (Vulnerability Assessment and Penetration Testing) engagement depends on the scope, complexity, and number of assets being tested.",
    },
    {
      question: "Will VAPT disrupt our systems or users?",
      answer:
        "A professionally conducted VAPT (Vulnerability Assessment and Penetration Testing) is designed to minimize disruption, but some level of risk is inherent because testing involves actively probing systems for vulnerabilities.",
    },
    {
      question: "What compliance frameworks do you support?",
      answer:
        "We support VAPT and security assessments aligned with major industry and regulatory frameworks, including ISO 27001, PCI DSS, SOC 2, HIPAA, GDPR, NIST Cybersecurity Framework, NIST SP 800-53, CIS Controls, and OWASP standards. We can tailor testing and reporting to meet specific compliance requirements and provide evidence suitable for audits and regulatory reviews.",
    },
    {
      question: "Do you offer ongoing security retainers?",
      answer:
        "Yes. We offer flexible security retainer plans that provide ongoing access to security expertise, regular assessments, remediation support, and proactive security guidance throughout the year.",
    },
  ];

  const activity = [
    {
      title: "Port Scan Detected",
      ip: "143.234.0.73",
      status: "BLOCKED",
      color: "#2E90FA",
    },
    {
      title: "Port Scan Detected",
      ip: "216.94.0.36",
      status: "BLOCKED",
      color: "#F79009",
    },
    {
      title: "Malware Beacon",
      ip: "38.173.0.100",
      status: "BLOCKED",
      color: "#EF4444",
    },
  ];

  // Radar threat dot appearance controls
  const [showDot1, setShowDot1] = useState(false);
  const [showDot2, setShowDot2] = useState(false);
  const [showDot3, setShowDot3] = useState(false);

  useEffect(() => {
    // Dot 1 renders after 5 seconds
    const timer1 = setTimeout(() => {
      setShowDot1(true);
    }, 5000);

    // Dot 2 renders after 15 seconds (10s delay after Dot 1)
    const timer2 = setTimeout(() => {
      setShowDot2(true);
    }, 15000);

    // Dot 3 renders after 25 seconds (10s delay after Dot 2)
    const timer3 = setTimeout(() => {
      setShowDot3(true);
    }, 25000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <section className="hero-stats-section">
        <div className="hero-wrapper">
          <div className="row mt-5">
            <div className="col-lg-6 col-12">
              <Reveal variant={fadeUp} delay={0.1}>
                <div className="Digital-hero-content">
                  <p className="Digi-digital-badge">
                    <img className="pen-image" src={Cybersecurity} alt="pen" />{" "}
                    Cybersecurity
                  </p>

                  <h1 className="cyber-hero-title">
                    Find your vulnerabilities
                    <span> before attackers do.</span>
                  </h1>

                  <p className="hero-description">
                    VAPT, SOC monitoring, compliance assessments, and security
                    architecture reviews — we protect your business from
                    breaches, ransomware, and regulatory penalties.
                  </p>

                  <div className="hero-buttons">
                    <Link to="/contact">
                      <Button variant="primary" icon={<FaArrowRight />}>
                        <span>Request Security Assessment </span>
                      </Button>
                    </Link>

                    <Link to="/contact">
                      <Button variant="secondary">
                        <span>Our Services</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6 col-12">
              {/* Outer Wrapper with Fade Right Reveal */}
              <Reveal variant={fadeRight} delay={0.2}>
                <div className="CybersecurityDashboard">
                  {/* Header */}
                  <div className="CybersecurityHeader">
                    <div className="dashboard-card dashboard-card-cyber">
                      <img src={Aligned} alt="Analytics" />
                    </div>

                    <div className="CybersecurityHeaderLeft">
                      <img src={soc} alt="SOC" className="CybersecurityLogo" />

                      <div className="CybersecurityHeaderContent">
                        <h2>
                          SOC Dashboard -<span>Live</span>
                        </h2>
                        <p>Monitoring 247 endpoints</p>
                      </div>
                    </div>
                  </div>

                  {/* Main */}
                  <div className="row g-2 CybersecurityContent">
                    {/* RADAR */}
                    <div className="col-lg-6 col-12">
                      <div className="CybersecurityRadarCard">
                        <div className="CybersecurityRadar">
                          <div className="CybersecurityCircle CybersecurityCircle1"></div>
                          <div className="CybersecurityCircle CybersecurityCircle2"></div>
                          <div className="CybersecurityCircle CybersecurityCircle3"></div>

                          <div className="CybersecurityScanner"></div>

                          {/* Dot 1: Triggers at 5 seconds */}
                          {showDot1 && (
                            <span className="CybersecurityTarget CybersecurityTargetOne blinking danger"></span>
                          )}

                          {/* Dot 2: Triggers at 15 seconds */}
                          {showDot2 && (
                            <span className="CybersecurityTarget CybersecurityTargetTwo blinking danger"></span>
                          )}

                          {/* Dot 3: Triggers at 25 seconds */}
                          {showDot3 && (
                            <span className="CybersecurityTarget CybersecurityTargetThree blinking danger"></span>
                          )}
                        </div>

                        <h3 className="Threat-Radar">Threat Radar</h3>
                      </div>
                    </div>

                    {/* STATS */}
                    <div className="col-lg-6 col-12">
                      <div className="CybersecurityStats">
                        {/* Card 1: Threats Blocked */}
                        <div className="CybersecurityStatCard CybersecurityGreen">
                          <small>Threats Blocked</small>
                          <h1>
                            <Counter end={dynamicThreats} />
                          </h1>
                        </div>

                        {/* Card 2: Today's Alerts */}
                        <div className="CybersecurityStatCard CybersecurityOrange">
                          <small>Today's Alerts</small>
                          <h1>
                            <Counter end={dynamicAlerts} />
                          </h1>
                        </div>

                        {/* Card 3: Open Vulnerabilities */}
                        <div className="CybersecurityStatCard CybersecurityBlue">
                          <small>Open Vulnerabilities</small>
                          <h1>0</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="CybersecurityActivity">
                    {activity.map((item, index) => (
                      <div className="CybersecurityActivityCard" key={index}>
                        <div className="CybersecurityActivityLeft">
                          <span
                            className="CybersecurityActivityDot"
                            style={{ background: item.color }}
                          ></span>

                          <div className="CybersecurityActivityInfo">
                            <h4>{item.title}</h4>
                            <span>{item.ip}</span>
                          </div>
                        </div>

                        <div className="CybersecurityActivityRight">
                          <button className="CybersecurityBlockedButton">
                            {item.status}
                          </button>
                          <span className="CybersecurityTime">now</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div
          className="container-fluid mt-5 px-5"
          style={{ backgroundColor: "#0F172A" }}
        >
          <div className="row g-4">
            {stats.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <Reveal variant={fadeUp} delay={index * 0.1}>
                  <div className="experince-stat-card">
                    <h3 className="experince-stat-number">
                      <Counter
                        end={item.end}
                        prefix={item.prefix || ""}
                        suffix={item.suffix || ""}
                      />
                    </h3>

                    <p className="experince-stat-label">{item.label}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <ServicesGrid
          sectionLabel="Our Services"
          heading="Comprehensive security, end to end."
          services={services}
          tickIcon={tickIcon}
        />
      </section>
      <div className="security-section">
        <FAQSection
          eyebrow="FAQ"
          title="Security questions answered."
          description="Every business situation is different."
          linkText="Talk to our team."
          link="/contact"
          faqs={MarketingFaqData}
          
        />
      </div>
      <BookingSection
        title="Don't wait for a breach."
        description="Book a free 30-minute security consultation. We'll identify the top 3 security gaps in your current setup — no strings attached."
        buttonText="Book Security Consultation "
        buttonLink="/contact"
      />
    </>
  );
};

export default CyberSecurity;
