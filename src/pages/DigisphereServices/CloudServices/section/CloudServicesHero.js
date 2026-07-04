import React from "react";
import "./CloudServicesHero.css";
import Counter from "../../../../components/Counter/Counter";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import DigisphereAI from "../../../../assets/AI-Powered/DigisphereAI.svg";
import NeuralNetwork from "../../../../assets/AI-Powered/NeuralNetwork.svg";
import CloudServices from "../../../../assets/servicesDropdown/CloudServices.svg";

const CloudServicesHero = () => {
  const stats = [
    {
      end:99.9,
      suffix: "%",
      label: "SLA uptime across managed environments",
    },
    {
      end: 35,
      suffix: "%",
      label: "Average cloud cost reduction after audit",
    },
    {
      end: 50,
      suffix: "+",
      label: "Cloud migrations completed",
    },
    {
      end: 3,
      label: "Cloud platforms: AWS, Azure, GCP",
    },
  ];
  return (
    <>
      <section className="devops-hero-section">
        <div className="hero-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <Reveal variant={fadeUp} delay={0.1}>
                <div className="devops-hero-content">
                  <p className="devops-badge">
                    <img src={CloudServices} alt="CloudServices" />
                    Cloud Services
                  </p>

                  <h1 className="devops-title">
                    Infrastructure that
                    <br />
                    <span>scales with you.</span>
                  </h1>

                  <p className="devops-description">
                    AWS, Azure, and Google Cloud solutions — from migration and
                    architecture to ongoing management and cost optimisation.
                  </p>

                  <div className="hero-buttons">
                    <Button variant="primary" icon={<FaArrowRight />}>
                      <span>Get Cloud Assessment </span>
                    </Button>

                    <Button variant="secondary">
                      <span>Our Services    </span>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-6 col-12">
              <div className="devops-dashboard">
                <div className="dashboard-main-card">
                  <img src={DigisphereAI} alt="Pipeline Dashboard" />
                </div>

                <div className="AI-bottom-card">
                  <img src={NeuralNetwork} alt="Recent Builds" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="devops-hero-section">
        <div
          className="container-fluid mt-5 px-5"
          style={{ backgroundColor: "#0F172A" }}
        >
          <div className="row g-4">
            {stats.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <Reveal variant={fadeUp} delay={index * 0.1}>
                  <div className="marketing-stat-card">
                    <h3 className="marketing-stat-number">
                      <Counter
                        end={item.end}
                        prefix={item.prefix || ""}
                        suffix={item.suffix || ""}
                      />
                    </h3>

                    <p className="marketing-stat-label">{item.label}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudServicesHero;
