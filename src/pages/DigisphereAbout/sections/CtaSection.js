import React from "react";
import "./CTASection.css";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";
import Button from "../../../components/Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import { RxPeople } from "react-icons/rx";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        {/* Testimonial Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="quote-text">
                  "The results were visible within weeks. Digisphere focused on
                  our business goals instead of just delivering a website."
                </p>
                <div className="author-row">
                  <div className="author-avatar">MK</div>
                  <div className="author-info">
                    <p className="author-name">Manish Kumar</p>
                    <p className="author-title">CEO, TechVision Solutions</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CTA Block */}
        <div className="cta-block text-center">
          <Reveal variant={fadeUp} delay={0.1}>
            <h2 className="cta-heading">
              Let's build something
              <br />
              <span className="cta-highlight">that works.</span>
            </h2>
          </Reveal>
          <Reveal variant={fadeUp} delay={0.2}>
            <p className="cta-subtitle">
              Whether you're planning a website, application, marketing
              strategy, cloud migration, or security assessment, we're ready to
              help.
            </p>
          </Reveal>
          <Reveal variant={fadeUp} delay={0.3}>
            <div className="cta-buttons">
              <Button variant="primary" icon={<FaArrowRight/>}>
                Book a Free Digital Audit
              </Button>
                
              <Button variant="secondary" icon={<RxPeople/>} iconPosition="left">
                Talk To Our Team
              </Button>
            </div>
          </Reveal>
          <Reveal variant={fadeUp} delay={0.4}>
            <div className="cta-stats">
              <span>
                <i className="bi bi-check2"></i> Response within 4 hours
              </span>
              <span>325+ Projects</span>
              <span>210+ Clients</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
