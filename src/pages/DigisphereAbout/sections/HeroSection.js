import React from "react";
import "./HeroSection.css";

import ecosystemImage from "../../../assets/about-page/digisphere-ecosystem.svg";

import iconDesign from "../../../assets/about-page/icon-design.svg";
import iconDev from "../../../assets/about-page/icon-dev.svg";
import iconMarketing from "../../../assets/about-page/icon-marketing.svg";
import iconCloud from "../../../assets/about-page/icon-cloud.svg";
import iconSecurity from "../../../assets/about-page/icon-security.svg";
import { FaArrowRight } from "react-icons/fa";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="about-hero-section">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="about-hero-content">
              <Reveal variant={fadeUp}>
                <p className="Digi-digital-badge">
                 About Digisphere
                  </p>
              </Reveal>

              <Reveal variant={fadeUp} delay={0.1}>
                <h1 className="about-hero-title">
                  We started to build things <br />
                  <span className="about-text-blue">that actually work.</span>
                </h1>
              </Reveal>

              <Reveal variant={fadeUp} delay={0.2}>
                <p className="about-hero-description">
                  Digisphere Tech was built around a simple idea: businesses
                  deserve technology partners who stay accountable long after
                  the project goes live. We design, build, market, secure, and
                  scale digital systems that create measurable business
                  outcomes.
                </p>
              </Reveal>

              <Reveal variant={fadeUp} delay={0.4}>
                <div className="about-hero-actions">
                  <Link to="/contact"><Button variant="primary" icon={<FaArrowRight />}>
                    Meet The Team                 
                  </Button ></Link>

                  <Link to="/contact"><Button variant="secondary" icon={<FaArrowRight />}>
                    See Our Work
                  </Button></Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Graphic */}
          <div className="col-lg-6">
            <div className="about-hero-graphic">
              <div className="ecosystem-wrapper">
                {/* Center Image */}
                <div className="ecosystem-center">
                  <img
                    src={ecosystemImage}
                    alt="Digisphere Ecosystem"
                    className="ecosystem-image"
                  />
                </div>

                {/* Orbit */}
                <div className="orbit-rotation">
                  <div className="orbit-item orbit-item-1">
                    <img src={iconDesign} alt="Design" />
                  </div>

                  <div className="orbit-item orbit-item-2">
                    <img src={iconDev} alt="Development" />
                  </div>

                  <div className="orbit-item orbit-item-3">
                    <img src={iconMarketing} alt="Marketing" />
                  </div>

                  <div className="orbit-item orbit-item-4">
                    <img src={iconCloud} alt="Cloud" />
                  </div>

                  <div className="orbit-item orbit-item-5">
                    <img src={iconSecurity} alt="Security" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
