import React from "react";
import "./ComparisonSection.css";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";

const comparisonData = [
  {
    title: "DIGISPHERE",
    features: [
      { text: "Websites", available: true },
      { text: "Applications", available: true },
      { text: "Marketing", available: true },
      { text: "Cloud", available: true },
      { text: "Cybersecurity", available: true },
      { text: "Managed IT", available: true },
      { text: "DevOps", available: true },
      { text: "Long-term support", available: true },
    ],
  },
  {
    title: "Traditional Agency",
    features: [
      { text: "Website", available: true },
      { text: "Marketing", available: true },
      { text: "Cloud", available: false },
      { text: "Security", available: false },
      { text: "Infrastructure", available: false },
    ],
  },
  {
    title: "Freelancer",
    features: [
      { text: "One specialization", available: true },
      { text: "Team support", available: false },
      { text: "Scalability", available: false },
      { text: "Business continuity", available: false },
    ],
  },
];

function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div className="container">
        <Reveal variant={fadeUp}>
          <h2 className="comparison-heading">
            Why businesses choose <span>Digisphere.</span>
          </h2>
        </Reveal>

        <div className="row justify-content-center g-3">
          {comparisonData.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <Reveal className="h-100" variant={fadeUp} delay={index * 0.15}>
                <div className="comparison-card h-100">
                  <h5>{card.title}</h5>

                  <ul>
                    {card.features.map((feature, idx) => (
                      <li key={idx}>
                        <span
                          className={
                            feature.available ? "icon-success" : "icon-fail"
                          }
                        >
                          {feature.available ? "✓" : "✕"}
                        </span>

                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
