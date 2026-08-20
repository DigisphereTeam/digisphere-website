import React, { useEffect, useState } from "react";
import "./FinOpsHero.css";
import CountUp from "react-countup";
import Reveal from "../../../../animations/Reveal";
import { fadeUp,fadeRight } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import AutomationSolutions from "../../../../assets/servicesDropdown/AutomationSolutions.svg";
import { Link } from "react-router-dom";
import cloud from "../../../../assets/Finops/CloudSpend.svg";
import { TrendingDown } from "lucide-react";
import { FaRegClock } from "react-icons/fa";
import Counter from "../../../../components/Counter/Counter";

import {
  BsExclamationTriangle,
  BsLightningCharge,
} from "react-icons/bs";

const FinOpsHero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Triggers bar and text animations shortly after mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

 const services = [
    {
      name: "EC2",
      target: 14.2,
      decimals: 1,
      prefix: "$",
      suffix: "K",
      percentage: 65,
    },
    {
      name: "RDS",
      target: 8100,
      decimals: 0,
      prefix: "$",
      suffix: "k",
      highlight: true,
      percentage: 40,
    },
    {
      name: "S3",
      target: 5100,
      decimals: 0,
      prefix: "$",
      suffix: "k",
      percentage: 25,
    },
    {
      name: "Lambda",
      target: 3700,
      decimals: 0,
      prefix: "$",
      suffix: "k",
      percentage: 18,
    },
    {
      name: "CloudFront",
      target: 2700,
      decimals: 0,
      prefix: "$",
      suffix: "k",
      percentage: 12,
    },
  ];

  const marketingStats = [
    {
      end: 34,
      suffix: "%",
      label: "Average cloud cost reduction across engagements",
    },
    {
      end: 14,
      suffix: " days",
      label: "Median time to first measurable savings",
    },
    {
      prefix: "$",
      end: 3.2,
      suffix: "M+",
      label: "Total client cloud savings delivered",
    },
    {
      end: 100,
      suffix: "%",
      label: "Clients who passed cloud cost reviews post-engagement",
    },
  ];
  return (
    <>
    <section className="devops-hero-section">
      <div className="hero-wrapper">
        <div className="row mt-5 ">
          {/* Left Column - Hero Content */}
          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="devops-hero-content">
                <p className="devops-badge">
                  <img src={AutomationSolutions} alt="pen" />
                  FinOps & Cloud Cost Optimisation
                </p>

                <h1 className="automation-title">
                  Stop overpaying
                  <br />
                  <span>for your cloud.</span>
                </h1>

                <p className="devops-description">
                  Most businesses waste 30–40% of their cloud spend. We find it,
                  fix it, and build the financial accountability systems to keep
                  it from coming back.
                </p>

                <div className="hero-buttons">
                  <Link to="/contact">
                    <Button variant="primary" icon={<FaArrowRight />}>
                      <span>Get Free Cost Audit </span>
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button variant="secondary">
                      <span>What We Offer</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column - FinOps Dashboard UI */}
          <div className="col-lg-6 col-12">
      <div className="finops-wrapper">
        {/* 1. Main Dashboard Card (Fade Up) */}
        <Reveal variant={fadeUp} delay={0.1}>
          <div className="finops-card">
            {/* Header */}
            <div className="finops-header">
              <div className="finops-header-info">
                <div className="finops-icon-box">
                  <img
                    className="clou-spend"
                    src={cloud}
                    alt="cloudimage"
                  />
                </div>
                <div>
                  <h5 className="finops-title">
                    Cloud Spend · Live Optimisation
                  </h5>
                  <span className="finops-subtitle">
                    AWS · Multi-region · Real-time
                  </span>
                </div>
              </div>
              <span className="finops-badge">
                <TrendingDown className="pulse-icon" /> Optimising
              </span>
            </div>

            {/* Metric Cards */}
            <div className="finops-metrics-grid">
              <div className="finops-metric-box">
                <span className="finops-metric-label">
                  Current Monthly Spend
                </span>
                <h3 className="finops-metric-value">
                  <CountUp
                    start={0}
                    end={animate ? 2.7 : 0}
                    duration={1.5}
                    decimals={1}
                    prefix="$"
                    suffix="k"
                  />
                </h3>
                <span className="finops-metric-sub">
                  Before optimisation: $2.85k
                </span>
              </div>

              <div className="finops-metric-box finops-savings-box">
                <span className="finops-savings-label">
                  Savings Identified
                </span>
                <h3 className="finops-savings-value">
                  <CountUp
                    start={0}
                    end={animate ? 97200 : 0}
                    duration={1.5}
                    decimals={0}
                    prefix="$"
                    separator=","
                    suffix="k"
                  />
                </h3>
                <span className="finops-savings-sub">
                  34% of original spend
                </span>
              </div>
            </div>

            {/* Progress Bars Section */}
            <div className="finops-spend-section">
              <span className="finops-section-title">SPEND BY SERVICE</span>
              <div className="finops-bars-list">
                {services.map((item, index) => (
                  <div key={index} className="finops-bar-row">
                    <span className="finops-service-name">{item.name}</span>

                    {/* Progress Bar Track */}
                    <div className="finops-bar-track">
                      <div
                        className={`finops-bar-fill ${
                          item.highlight ? "finops-bar-active" : ""
                        }`}
                        style={{
                          width: animate ? `${item.percentage}%` : "0%",
                          transitionDelay: `${index * 120}ms`,
                        }}
                      />
                    </div>

                    {/* React CountUp Animation */}
                    <span className="finops-service-amount">
                      <CountUp
                        start={0}
                        end={animate ? item.target : 0}
                        duration={1.5}
                        decimals={item.decimals}
                        prefix={item.prefix}
                        suffix={item.suffix}
                        separator=","
                        delay={index * 0.12}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Alert Banner (Fade Right) */}
        <Reveal variant={fadeRight} delay={0.25}>
          <div className="finops-alert-banner">
            <div className="finops-alert-left">
              <div className="finops-alert-icon">
                <BsExclamationTriangle />
              </div>
              <div>
                <h6 className="finops-alert-title">
                  Spend Anomaly Detected
                </h6>
                <span className="finops-alert-text">
                  EC2 eu-west-1 spiked 340% vs 7-day avg · $18,400k above
                  baseline
                </span>
              </div>
            </div>
            <span className="finops-alert-tag">Now</span>
          </div>
        </Reveal>

        <Reveal variant={fadeUp} delay={0.4}>
          <div className="finops-bottom-grid">
            <div className="finops-stat-card">
              <TrendingDown className="finops-stat-icon" />
              <h5
                className={`finops-stat-value ${
                  animate ? "fade-number-in" : "hidden-number"
                }`}
              >
                34%
              </h5>
              <span className="finops-stat-label">Avg cost reduction</span>
            </div>

            <div className="finops-stat-card">
              <FaRegClock className="finops-stat-icon" />
              <h5
                className={`finops-stat-value ${
                  animate ? "fade-number-in" : "hidden-number"
                }`}
              >
                14 days
              </h5>
              <span className="finops-stat-label">To first savings</span>
            </div>

            <div className="finops-stat-card">
              <BsLightningCharge className="finops-stat-icon" />
              <h5
                className={`finops-stat-value ${
                  animate ? "fade-number-in" : "hidden-number"
                }`}
              >
                Real-time
              </h5>
              <span className="finops-stat-label">Cost visibility</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
        </div>
      </div>
    </section>
       <div className="counter-section container-fluid px-5" Counter-section style={{ backgroundColor: "#0F172A",marginTop:"10px"}}>
        <div className="row g-4">
          {marketingStats.map((item, index) => (
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
      </>
  );
};

export default FinOpsHero;
