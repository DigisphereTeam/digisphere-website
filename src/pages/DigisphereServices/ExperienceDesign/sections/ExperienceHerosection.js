import React from "react";
import "./ExperienceHerosection.css";
import Reveal from "../../../../animations/Reveal";
import Counter from "../../../../components/Counter/Counter";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import pen from "../../../../assets/pen.svg";
import FigmaWorkspaceSimulator from "./FigmaWorkspaceSimulator";
const stats = [
  {
    end: 68,
    suffix: "%",
    label: "Avg. increase in task completion rate",
  },
  {
    end: 4,
    prefix: "2.",
    suffix: "x",
    label: "Conversion lift from UX redesigns",
  },
  {
    end: 120,
    suffix: "+",

    label: "Products designed and launched",
  },
 {
  end: 4.9,
  suffix: "/5",
  label: "Client satisfaction across projects",
}
];
const ExperinceHerosection = () => {
  return (
    <section className="hero-stats-section">
      <div className="hero-wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="hero-content">
                <p class="Digi-badge">
                  <img className="pen-image" src={pen} alt="pen" /> Experience
                  Design
                </p>

                <h1 className="hero-title">
                  Design that earns
                  <span> trust in seconds.</span>
                </h1>

                <p className="hero-description">
                  We design digital experiences that users love and businesses
                  profit from — grounded in research, refined through testing,
                  and delivered production-ready in Figma.
                </p>

                <div className="hero-buttons">
                  <Button variant="primary" icon={<FaArrowRight />}>
                    <span>Start a Design Project </span>
                  </Button>

                  <Button variant="secondary">
                    <span>Our Services</span>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6 col-12">
            <FigmaWorkspaceSimulator />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 px-5" style={{backgroundColor:"#0F172A",}}>
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
  );
};

export default ExperinceHerosection;
