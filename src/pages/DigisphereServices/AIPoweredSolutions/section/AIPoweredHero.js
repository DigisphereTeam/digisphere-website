import React from "react";
import './AIPoweredHero.css'
import Counter from "../../../../components/Counter/Counter";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import aiIcon from "../../../../assets/AI-Powered/aiIcon.svg";
import DigisphereAI from "../../../../assets/AI-Powered/DigisphereAI.svg";
import NeuralNetwork from "../../../../assets/AI-Powered/NeuralNetwork.svg";

const AIPoweredHero = () => {
  const stats = [
    {
      end: 35,
      suffix: "+",
      label: "AI integrations deployed",
    },
    {
      end: 72,
      suffix: "%",
      label: "Automations deployed across clients",
    },
    {
      end: 3.8,
      suffix: "x",
      label: "Average ROAS on paid campaigns",
    },
    {
      end: 24,
      suffix: "/7",
      label: "Client satisfaction across projects",
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
                    <img src={aiIcon} alt="AI-image " />
                    AI-Powered Solutions
                  </p>

                  <h1 className="devops-title">
                    Practical AI that
                    <br />
                    <span>earns its keep.</span>
                  </h1>

                  <p className="devops-description">
                    We build AI integrations, copilots, and intelligent systems
                    that solve real business problems — not AI for the sake of
                    AI.
                  </p>

                  <div className="hero-buttons">
                    <Button variant="primary" icon={<FaArrowRight />}>
                      <span>Explore AI for Your Business</span>
                    </Button>

                    <Button variant="secondary">
                      <span>See Our Solutions</span>
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

export default AIPoweredHero;
