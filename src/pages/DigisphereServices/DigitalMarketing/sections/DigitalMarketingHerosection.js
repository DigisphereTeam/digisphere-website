import React from "react";
import "./DigitalMarketingHerosection.css";
import DigitalMarketing from "../../../../assets/digital-marketing/DigitalMarketing (3).svg";
import Button from "../../../../components/Button/Button";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import HeroDashboard from "./HeroDashboard.js";
import { Link } from "react-router-dom";

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
                  <img className="pen-image" src={DigitalMarketing} alt="pen" />
                  Digital Marketing
                </p>

                <h1 className="hero-title">
                  Marketing that moves revenue,
                  <span> not metrics.</span>
                </h1>

                <p className="hero-description">
                  We build full-funnel digital marketing systems — SEO, paid
                  ads, email, and content — engineered around your customer
                  acquisition economics, not vanity dashboards.
                </p>

                <div className="hero-buttons">
                  <Link to="/contact">
                    <Button variant="primary" icon={<FaArrowRight />}>
                      <span>Get Free Audit </span>
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
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingHerosection;
