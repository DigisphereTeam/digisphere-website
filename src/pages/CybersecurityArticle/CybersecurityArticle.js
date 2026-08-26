import React from 'react'
import "./CybersecurityArticle.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import Reveal from "../../animations/Reveal"; 
import { fadeUp } from "../../animations/variants";
const threatList = [
  {
    id: 1,
    title: "Phishing",
    description: "Fake emails and messages designed to steal credentials.",
  },
  {
    id: 2,
    title: "Ransomware",
    description: "Attackers encrypt business data and demand payment.",
  },
  {
    id: 3,
    title: "Supply-chain attacks",
    description: "Vulnerabilities through vendors, software, or third-party services.",
  },
  {
    id: 4,
    title: "Credential theft",
    description: "Stolen passwords being used to access business systems.",
  },
];

const priorityControls = [
  "Multi-factor authentication (MFA)",
  "Regular, tested backups",
  "Endpoint protection",
  "Strong password policies",
  "Employee security awareness training",
  "Timely software updates and patching",
  "Access controls and regular security reviews",
];
const CybersecurityArticle = () => {
  return (
   <article className="webdevarticle-section py-5">
      <div className="container">
        <div className="row justify-content-center">          
          <div className="col-12 ">
            <div className="webarticle-main">
              
              <Reveal variant={fadeUp} delay={0.1}>
                {/* Category Tag Pill */}
                <div className="mb-3">
                  <span className="CyberArticle-tag-pill CyberArticle-tag-featured">
                    Cybersecurity
                  </span>
                </div>

                {/* Article Main Title */}
                <h1 className="CyberArticle-main-title mb-4">
                  The Cyber Threat Landscape for Indian Businesses in 2026
                </h1>

                {/* Meta Info Bar */}
                <div className="d-flex align-items-center gap-4 text-muted CyberArticle-meta pb-4 mb-4 border-bottom">
                  <span className="d-inline-flex align-items-center">
                    <FiCalendar className="me-2 CyberArticle-theme-icon" /> August 26, 2026
                  </span>
                  <span className="d-inline-flex align-items-center">
                    <FiClock className="me-2 CyberArticle-theme-icon" /> 5 min read
                  </span>
                </div>
              </Reveal>

              {/* Content Body */}
              <Reveal variant={fadeUp} delay={0.2}>
                <div className="CyberArticle-content">
                  {/* Intro Section */}
                  <p className="CyberArticle-lead-text text-muted mb-3">
                    Cyberattacks are no longer a problem only for large enterprises. Indian businesses of all sizes are increasingly facing phishing, ransomware, data theft, and supply-chain attacks.
                  </p>
                  <p className="CyberArticle-lead-text text-muted mb-4">
                    The good news? Many of the most damaging attacks can be reduced with the right basic controls.
                  </p>

                  {/* Threats Section */}
                  <div className="CyberArticle-reasons-list my-4">
                    <h3 className="CyberArticle-structure-title mb-3">
                      The Threats Businesses Need to Watch
                    </h3>
                    <p className=" mb-3">Some of the most common risks include:</p>
                    
                    {threatList.map((item) => (
                      <div key={item.id} className="CyberArticle-reason-item mb-3">
                        <h4 className="CyberArticle-reason-title mb-1">
                          • {item.title}
                        </h4>
                        <p className="CyberArticle-reason-desc text-muted mb-0">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Controls Section */}
                  <div className="CyberArticle-structure-card p-4 my-5 rounded-4">
                    <h3 className="CyberArticle-structure-title mb-3">
                      The Controls That Matter Most
                    </h3>
                    <p className=" mb-3">
                      Businesses should prioritize practical security measures such as:
                    </p>
                    
                    <ul className="CyberArticle-controls-list mb-0">
                      {priorityControls.map((control, idx) => (
                        <li key={idx} className=" mb-2">
                          {control}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conclusion Section */}
                  <div className="CyberArticle-conclusion-box p-4 rounded-4 mb-5">
                    <h4 className="CyberArticle-conclusion-title mb-2">
                      Don't Wait for an Incident
                    </h4>
                    <p className=" mb-3">
                      Cybersecurity shouldn't start after a breach.
                    </p>
                    <p className="mb-3">
                      A basic security assessment can identify weak points before attackers do — helping businesses protect their systems, customer data, and reputation.
                    </p>
                    <p className="CyberArticle-conclusion-highlight fw-bold mb-0">
                      The goal isn't to make your business impossible to attack. It's to make it significantly harder to compromise and easier to recover.
                    </p>
                  </div>

                  {/* Bottom CTA Card */}
                  <div className="CyberArticle-cta-card p-4 p-md-5 text-center rounded-4">
                    <h3 className="text-white mb-2">Protect Your Business Systems Today</h3>
                    <p className="text-white-50 mb-4">
                      Get a comprehensive security assessment to discover vulnerabilities before attackers do.
                    </p>
                    <Link to="/contact">
                      <button className="CyberArticle-btn-primary CyberArticle-btn-lg">
                        Request a Security Assessment <FaArrowRight className="ms-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CybersecurityArticle