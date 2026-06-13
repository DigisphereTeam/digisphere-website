import React from "react";
import "./ResultsSection.css";

import professionalImg from "../../../../assets/website-development/professional-services.jpg";
import consultingImg from "../../../../assets/website-development/technology-consulting.png";
import ecommerceImg from "../../../../assets/website-development/ecommerce-retail.svg";

import professionalIcon from "../../../../assets/website-development/professional-services-icon.svg";
import consultingIcon from "../../../../assets/website-development/technology-consulting-icon.svg";
import ecommerceIcon from "../../../../assets/website-development/ecommerce-retail-icon.svg";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";

const ResultsSection = () => {
  const caseStudies = [
    {
      image: professionalImg,
      icon: professionalIcon,
      title: "Professional Services",
      challenge: "Low website traffic and poor lead generation",
      solution:
        "Redesigned website with SEO optimization and conversion-focused UX",
      result: "+72%",
      metric: "Lead Growth",
      color: "#057DCD",
    },
    {
      image: consultingImg,
      icon: consultingIcon,
      title: "Technology Consulting",
      challenge: "Website not ranking for key search terms",
      solution:
        "Complete SEO overhaul with technical optimization and content strategy",
      result: "+43%",
      metric: "Organic Traffic",
      color: "#10B981",
    },
    {
      image: ecommerceImg,
      icon: ecommerceIcon,
      title: "E-Commerce Retail",
      challenge: "High bounce rate and low conversion",
      solution:
        "Performance optimization and streamlined checkout experience",
      result: "+31%",
      metric: "Conversion Rate",
      color: "#8B5CF6",
    },
  ];

  return (
    <section className="design-performance-section">
      <div className="container">
        <Reveal variant={fadeUp}>
          <div className="design-performance-heading">
            <h2>
              Design that <span>performs.</span>
              <br />
              Not design that decorates.
            </h2>
          </div>
        </Reveal>

        <div className="row g-4">
          {caseStudies.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <Reveal className="h-100" variant={fadeUp} delay={index *0.15}>
                <div className="case-study-card">
                  <div className="case-study-card-image h-100">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="case-study-card-content">
                    <div className="case-study-card-title">
                      <img src={item.icon} alt={item.title} />
                      <h4>{item.title}</h4>
                    </div>

                    <h6 className="case-study-challenge">
                      CHALLENGE
                    </h6>

                    <p className="case-study-description">
                      {item.challenge}
                    </p>

                    <h6 className="case-study-solution">
                      SOLUTION
                    </h6>

                    <p className="case-study-description">
                      {item.solution}
                    </p>

                    <div className="case-study-divider"></div>

                    <div className="case-study-result">
                      <span
                        className="case-study-result-number"
                        style={{ color: item.color }}
                      >
                        {item.result}
                      </span>

                      <span className="case-study-result-label">
                        {item.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;