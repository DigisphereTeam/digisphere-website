import React from "react";
import "./EcosystemSection.css";

import webDesign from "../../../assets/about-page/eco-website-design.svg";
import webApps from "../../../assets/about-page/eco-web-apps.svg";
import digitalMarketing from "../../../assets/about-page/eco-digital-marketing.svg";
import experienceDesign from "../../../assets/about-page/eco-expereince-design.svg";
import cloudServices from "../../../assets/about-page/eco-cloud-services.svg";
import cyberSecurity from "../../../assets/about-page/eco-cyber-security.svg";
import managedIt from "../../../assets/about-page/eco-managed-it.svg";
import devops from "../../../assets/about-page/eco-devops.svg";
import automation from "../../../assets/about-page/eco-automation.svg";
import aiSolutions from "../../../assets/about-page/eco-ai-solutions.svg";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";

const EcosystemSection = () => {
  const services = [
    { name: "Website Design", icon: webDesign },
    { name: "Web Applications", icon: webApps },
    { name: "Digital Marketing", icon: digitalMarketing },
    { name: "Experience Design", icon: experienceDesign },
    { name: "Cloud Services", icon: cloudServices },
    { name: "Cybersecurity", icon: cyberSecurity },
    { name: "Managed IT", icon: managedIt },
    { name: "DevOps", icon: devops },
    { name: "Automation", icon: automation },
    { name: "AI Solutions", icon: aiSolutions },
  ];

  return (
    <section className="eco-section">
      <div className="container">
        <Reveal variant={fadeUp}>
          <div className="eco-title text-center">
            <h2>
              One <span className="eco-highlight">technology ecosystem.</span>
            </h2>
          </div>
        </Reveal>

        <div className="row row-cols-2 row-cols-md-5 g-3 justify-content-center eco-grid">
          {services.map((service, index) => (
            <div className="col" key={index}>
              <Reveal className="h-100" variant={fadeUp} delay={index * 0.05}>
                <div className="service-card h-100">
                  <div className="service-icon">
                    <img src={service.icon} alt={service.name} />
                  </div>
                  <p>{service.name}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="row eco-banner-row">
          <div className="col-12">
            <Reveal variant={fadeUp}>
              <div className="digisphere-banner">
                <h1>DIGISPHERE</h1>
                <p>All capabilities integrated and working together</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
