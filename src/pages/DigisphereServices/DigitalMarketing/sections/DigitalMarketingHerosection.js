import React from "react";
import "./DigitalMarketingHerosection.css";
import Campaign from "../../../../assets/digital-marketing/Campaign Analytics.svg";
import Conversion from "../../../../assets/digital-marketing/Conversion.svg";
import Position from "../../../../assets/digital-marketing/Position.svg";
import NewLead from "../../../../assets/digital-marketing/NewLeads.svg";
import pen from "../../../../assets/pen.svg";
import Button from "../../../../components/Button/Button";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";

const DigitalMarketingHerosection = () => {
  return (
    <section className="hero-stats-section">
      <div className="hero-wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="hero-content">
                <p class="Digi-digital-badge">
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
            <div className="hero-dashboard">
              {/* Main Dashboard */}
              <div className="dashboard-main">
                <img
                  src={Campaign}
                  className="digital-hero-image"
                  alt="Dashboard"
                />
              </div>
               <div className="dashboard-main">
                <img src={Conversion} className="digitaldigtal-hero-image" alt="Positions" />
              </div>

              {/* Top Right Floating Card */}
              <div className="dashboard-card dashboard-card-1">
                <img src={NewLead} alt="Analytics" />
              </div>


              {/* Bottom Floating Badge */}
             
              <div className="dashboard-card dashboard-card-4">
                <img src={Position} alt="Positions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingHerosection;
