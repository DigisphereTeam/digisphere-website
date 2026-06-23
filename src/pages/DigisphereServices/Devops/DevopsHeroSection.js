import React from "react";
import "./DevopsHeroSection.css";

import pen from "../../../assets/devops/devops-label.svg";
import pipelineCard from "../../../assets/devops/pipeline-card.svg";
import metricsCard from "../../../assets/devops/metrics-card.svg";
import kubernetesCard from "../../../assets/devops/kubernetes-card.svg";

import { FaArrowRight } from "react-icons/fa";
import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";
import Button from "../../../components/Button/Button";

const DevOpsHeroSection = () => {
  return (
    <section className="devops-hero-section">
      <div className="hero-wrapper">
        <div className="row align-items-center">

          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="devops-hero-content">

                <p className="devops-badge">
                  <img src={pen} alt="pen" />
                  DevOps
                </p>

                <h1 className="devops-title">
                  Ship faster.
                  <br />
                  <span>Break less. Scale more.</span>
                </h1>

                <p className="devops-description">
                  CI/CD, Kubernetes, infrastructure-as-code, monitoring,
                  and platform engineering — we modernise your engineering
                  workflow so your team ships with confidence.
                </p>

                <div className="hero-buttons">
                  <Button variant="primary" icon={<FaArrowRight />}>
                    <span>Start DevOps Assessment</span>
                  </Button>

                  <Button variant="secondary">
                    <span>Our Services</span>
                  </Button>
                </div>

              </div>
            </Reveal>
          </div>


          <div className="col-lg-6 col-12">

            <div className="devops-dashboard">

              <div className="dashboard-main-card">
                <img src={pipelineCard} alt="Pipeline Dashboard" />
              </div>

              <div className="dashboard-bottom-card">
                <img src={metricsCard} alt="Recent Builds" />
              </div>

              <div className="dashboard-floating-card">
                <img src={kubernetesCard} alt="Kubernetes Health" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DevOpsHeroSection;