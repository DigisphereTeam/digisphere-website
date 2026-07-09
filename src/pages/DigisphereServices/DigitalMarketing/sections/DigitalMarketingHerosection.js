import React from "react";
import "./DigitalMarketingHerosection.css";
import pen from "../../../../assets/pen.svg";
import Button from "../../../../components/Button/Button";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import HeroDashboard from "./HeroDashboard.js";

const DigitalMarketingHerosection = () => {
  return (
    <section className="hero-stats-section">
      <div className="hero-wrapper">
        <div className="row mt-5">
          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="Digital-hero-content">
                {/* Fixed: changed 'class' to 'className' */}
                <p className="Digi-digital-badge">
                  <img className="pen-image" src={pen} alt="pen" /> 
                  Digital Marketing
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
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingHerosection;