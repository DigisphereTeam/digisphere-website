import React from "react";
import "./WebsiteCapabilities.css";

import blueIcon from "../../../../assets/website-development/blue-icon.svg";

import cardIcon1 from "../../../../assets/website-development/card-icon1.svg";
import cardIcon2 from "../../../../assets/website-development/card-icon2.svg";
import cardIcon3 from "../../../../assets/website-development/card-icon3.svg";
import cardIcon4 from "../../../../assets/website-development/card-icon4.svg";
import cardIcon5 from "../../../../assets/website-development/card-icon5.svg";
import cardIcon6 from "../../../../assets/website-development/card-icon6.svg";
import cardIcon7 from "../../../../assets/website-development/card-icon7.svg";
import cardIcon8 from "../../../../assets/website-development/card-icon8.svg";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";


const WebsiteCapabilities = () => {
  const capabilities = [
    {
      capability: "Custom Website Design",
      outcome: "Unique professional brand presence",
    },
    {
      capability: "Responsive Development",
      outcome: "Perfect experience on every device",
    },
    {
      capability: "SEO Foundation",
      outcome: "Higher visibility on Google",
    },
    {
      capability: "Landing Pages",
      outcome: "Better campaign conversions",
    },
    {
      capability: "CMS Integration",
      outcome: "Easy content management",
    },
    {
      capability: "Performance Optimization",
      outcome: "Faster loading speeds",
    },
    {
      capability: "Analytics Setup",
      outcome: "Data-driven decisions",
    },
    {
      capability: "Lead Capture Systems",
      outcome: "More enquiries",
    },
    {
      capability: "Security Hardening",
      outcome: "Safer customer experience",
    },
    {
      capability: "Maintenance & Support",
      outcome: "Continuous improvement",
    },
  ];

  const industries = [
    {
      icon: cardIcon1,
      title: "Corporate Websites",
      description:
        "Professional presence for established businesses",
      benefit: "Enhanced credibility and trust",
    },
    {
      icon: cardIcon2,
      title: "Professional Services",
      description:
        "Websites for consultants, lawyers, and agencies",
      benefit: "More qualified leads",
    },
    {
      icon: cardIcon3,
      title: "Healthcare Websites",
      description:
        "Patient-focused medical and clinic websites",
      benefit: "Improved patient engagement",
    },
    {
      icon: cardIcon4,
      title: "Educational Institutions",
      description:
        "Schools, colleges, and training centers",
      benefit: "Higher enrollment rates",
    },
    {
      icon: cardIcon5,
      title: "E-Commerce Platforms",
      description:
        "Online stores that convert browsers to buyers",
      benefit: "Increased online sales",
    },
    {
      icon: cardIcon6,
      title: "SaaS Websites",
      description:
        "Product pages for software companies",
      benefit: "Better trial signups",
    },
    {
      icon: cardIcon7,
      title: "Startup Launch Sites",
      description:
        "MVPs and product launch websites",
      benefit: "Faster time to market",
    },
    {
      icon: cardIcon8,
      title: "Custom Business Portals",
      description:
        "Tailored solutions for unique requirements",
      benefit: "Streamlined operations",
    },
  ];

  return (
    <section className="website-capabilities">
      <div>

        {/* Capability Table */}
        <div className="capability-section">
          <Reveal variant={fadeUp} delay={0.1}>
          <h2 className="web-section-title">
            Everything required to build a <br/>
            <span> high-performing website.</span>
          </h2>
          </Reveal>

          <div className="capability-table-wrapper">
            <Reveal variant={fadeUp} delay={0.15}>
            <table className="capability-table">
              <thead>
                <tr>
                  <th>CAPABILITY</th>
                  <th>BUSINESS OUTCOME</th>
                </tr>
              </thead>

              <tbody>
                {capabilities.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <span><img src={blueIcon} alt="Icon" className="blue-icon"/></span>
                      {item.capability}
                    </td>
                    <td className="item-outcome">{item.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </Reveal>
          </div>
        </div>

        {/* Industry Cards */}
        <div className="industry-section container">
          <Reveal variant={fadeUp} delay={0.1}>
          <h2 className="web-section-title">
            Built for
            <span> every stage of growth.</span>
          </h2>
          </Reveal>

          <div className="row g-4">
            {industries.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-12"
              >
                <Reveal variant={fadeUp} delay={index * 0.15}>
                <div className="industry-card">
                  <div className="industry-icon">
                    <img src={item.icon} alt="Card Icon"/>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                  <div className="industry-footer">
                    <span className="industry-benefit">
                        <i className="bi bi-arrow-right"></i>
                        {item.benefit}
                    </span>
                  </div>
                </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebsiteCapabilities;