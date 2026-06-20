import React from "react";
import "./ServicesGrid.css";
import Reveal from "../../animations/Reveal";
import { fadeUp } from "../../animations/variants";

const ServicesGrid = ({
  sectionLabel,
  heading,
  description,
  services,
  tickIcon,
}) => {
  return (
    <section className="se-services-grid">
      <div className="container">
        <Reveal variant={fadeUp}>
          <div className="se-services-header">
            <span className="section-label">{sectionLabel}</span>

            <h2>{heading}</h2>

            <p>{description}</p>
          </div>
        </Reveal>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
                <Reveal variant={fadeUp} delay={index * 0.15} className="h-100">
                <div className="services-card">
                  <div className="services-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.points.map((point, idx) => (
                      <li key={idx}>
                        <img src={tickIcon} alt="tick" />
                        <span>{point}</span>
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
};

export default ServicesGrid;
