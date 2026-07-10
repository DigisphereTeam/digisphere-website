import React, { useState, useEffect } from "react";
import "./CloudServicesHero.css";
import Counter from "../../../../components/Counter/Counter";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import DigisphereAI from "../../../../assets/AI-Powered/DigisphereAI.svg";
import NeuralNetwork from "../../../../assets/AI-Powered/NeuralNetwork.svg";
import CloudServices from "../../../../assets/servicesDropdown/CloudServices.svg";
import aws from "../../../../assets/CloudServiecs/aws.svg";
import { Link } from "react-router-dom";

const CloudServicesHero = () => {
  const stats = [
    {
      end: 99.9,
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
  const cards = [
    "Load Balancer",
    "App Servers",
    "Cache (Redis)",
    "Database (RDS)",
    "S3 Storage",
    "CDN",
  ];
  const regions = [
    {
      name: "Mumbai",
      code: "ap-south-1",
      cpu: 34,
      progress: 42,
      color: "#22c55e",
    },
    {
      name: "Singapore",
      code: "ap-southeast-1",
      cpu: 52,
      progress: 62,
      color: "#22c55e",
    },
    {
      name: "Ireland",
      code: "eu-west-1",
      cpu: 78,
      progress: 92,
      color: "#f59e0b",
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let random;

      do {
        random = Math.floor(Math.random() * cards.length);
      } while (random === activeCard);

      setActiveCard(random);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [activeCard]);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Change card every 3 seconds (3000ms)
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        // Create a list of all other possible indexes
        const otherIndexes = Array.from(
          { length: cards.length },
          (_, i) => i,
        ).filter((index) => index !== prevIndex);

        // Pick a random index from that remaining pool
        const randomIndex = Math.floor(Math.random() * otherIndexes.length);
        return otherIndexes[randomIndex];
      });
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <>
      <section className="devops-hero-section">
        <div className="hero-wrapper">
          <div className="row mt-4">
            <div className="col-lg-6 col-12">
              <Reveal variant={fadeUp} delay={0.1}>
                <div className="devops-hero-content mt-4">
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
                    <Link to="/contact"><Button variant="primary" icon={<FaArrowRight />}>
                      <span>Get Cloud Assessment </span>
                    </Button></Link>

                    <Link to="/contact"><Button variant="secondary">
                      <span>Our Services </span>
                    </Button></Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-6 col-12">
              <div className="aws-wrapper">
                <div className="aws-card">
                  <div className="header">
                    <div className="title-aws">
                      <img className="cloud-icon" src={aws} alt="aws" />

                      <div>
                        <h2>AWS Architecture · Production</h2>
                        <p>Multi-region · Auto-scaled</p>
                      </div>
                    </div>

                    <div className="status">
                      <span></span>
                      All operational
                    </div>
                  </div>

                  <div className="cloud-grid">
                    {cards.map((card, index) => (
                      <div
                        className={`service-card ${index === activeIndex ? "active" : ""}`}
                        key={index}
                      >
                        <h4>{card}</h4>

                        {index === activeIndex && (
                          <div className="active-text">
                            <span className="dot"></span>
                            active
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="traffic-box">
                    <div className="traffic-title">LIVE TRAFFIC FLOW</div>

                    <div className="traffic">
                      <span>Users</span>

                      <div className="line-aws">
                        <div className="flow"></div>
                      </div>

                      <span>CDN</span>

                      <div className="line-aws">
                        <div className="flow flow2"></div>
                      </div>

                      <span>App</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="health-card">
                <h4 className="title-multi">MULTI-REGION HEALTH</h4>

                {regions.map((item, index) => (
                  <div className="region" key={index}>
                    <div className="top-row">
                      <div className="left">
                        <span
                          className="status-dot"
                          style={{ background: item.color }}
                        ></span>

                        <span className="region-name">{item.name}</span>

                        <span className="region-code">({item.code})</span>
                      </div>

                      <span className="cpu">CPU {item.cpu}%</span>
                    </div>

                    <div className="progress-bg">
                      <div
                        className="progress-fill"
                        style={{
                          width: animate ? `${item.progress}%` : "0%",
                          background: item.color,
                          transitionDelay: `${index * 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
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
