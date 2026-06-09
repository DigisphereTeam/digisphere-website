import React from "react";
import "./PrinciplesSection.css";

import icon1 from "../../../assets/about-page/principles-icon1.svg";
import icon2 from "../../../assets/about-page/principles-icon2.svg";
import icon3 from "../../../assets/about-page/principles-icon3.svg";
import icon4 from "../../../assets/about-page/principles-icon4.svg";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";

const principles = [
  {
    title: "Outcomes Over Outputs",
    description: "We measure success by business results, not deliverables.",
    icon: icon1,
  },
  {
    title: "Radical Transparency",
    description: "Timelines, costs, risks, and expectations are always clear.",
    icon: icon2,
  },
  {
    title: "Grow Together",
    description:
      "The strongest partnerships are built through long-term success.",
    icon: icon3,
  },
  {
    title: "Quality Is Non-Negotiable",
    description:
      "Every website, application, campaign, and infrastructure deployment follows high standards.",
    icon: icon4,
  },
];

function PrinciplesSection() {
  return (
    <section className="principles-section">
      <div className="container">
        <Reveal  variant={fadeUp}>
          <h2 className="principles-heading ">
            The principles behind <span>every project.</span>
          </h2>
        </Reveal>

        <div className="row g-3 justify-content-center">
          {principles.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <Reveal className="h-100" variant={fadeUp} delay={index * 0.12}>
                <div className="principle-card h-100">
                  <div className="principle-icon">
                    <img src={item.icon} alt="item.title" />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrinciplesSection;
