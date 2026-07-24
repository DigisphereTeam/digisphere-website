import React, { useState, useEffect, useRef } from "react";
import "./CaseStudiesHero.css";
import Icon336 from "../../../../assets/CaseStudies/Icon336.svg";
import Icon316 from "../../../../assets/CaseStudies/Icon316.svg";
import Icon87 from "../../../../assets/CaseStudies/Icon87.svg";
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeUp } from "../../../../animations/variants";

// Helper component to count up the percentage numbers smoothly
const CountUp = ({ target, start, duration = 1200, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame = null;
    const delayInMs = parseFloat(delay) * 1000 || 0;

    const timer = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Ease-out quad function for natural deceleration
        const easeOutProgress = 1 - (1 - progress) * (1 - progress);
        setCount(Math.floor(easeOutProgress * target));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
    }, delayInMs);

    return () => {
      clearTimeout(timer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [target, start, duration, delay]);

  return <span>{count}%</span>;
};

const CaseStudiesHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const widgetRef = useRef(null);

  // Intersection Observer to trigger progress bar and counter animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (widgetRef.current) {
            observer.unobserve(widgetRef.current);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (widgetRef.current) {
      observer.observe(widgetRef.current);
    }

    return () => {
      if (widgetRef.current) {
        observer.unobserve(widgetRef.current);
      }
    };
  }, []);

  const topStats = [
    {
      id: 1,
      number: "336+",
      label: "Projects",
      icon: Icon336,
    },
    {
      id: 2,
      number: "316+",
      label: "Clients",
      icon: Icon316,
    },
    {
      id: 3,
      number: "87%",
      label: "Retention",
      icon: Icon87,
    },
  ];

  const industryData = [
    { industry: "Healthcare", rate: 85, delay: "0.1s" },
    { industry: "Finance", rate: 72, delay: "0.25s" },
    { industry: "Retail", rate: 90, delay: "0.4s" },
    { industry: "Logistics", rate: 65, delay: "0.55s" },
    { industry: "Education", rate: 78, delay: "0.7s" },
  ];

  return (
    <section className="case-hero-section">
      <div className="container">
        <div className="row align-items-center g-5 mb-5 ">
          {/* Left Column: Text Content */}
         <div className="col-lg-6">
            <Reveal variant={fadeLeft} delay={0.1}>
              <div className="industries-main-section">
               <p class="Digisphere-badge">
                 Case Studies
                </p>
                <h1 className="industries-hero-title">
                  Work we're
                  <br />
                  <span className="industries-text-highlight">
                    proud to show.
                  </span>
                </h1>
                <p className="industries-hero-description">
                  Real projects, real results. Each case study shows the
                  problem, what we built, and the measurable outcomes — no
                  inflated claims.
                </p>

                {/* Bottom Stats */}
                <div className="industries-hero-stats-row">
                  <div className="industries-stat-item">
                    <h6 className="industries-stat-value">336+</h6>
                    <h6 className="industries-stat-label">
                      Projects delivered
                    </h6>
                  </div>
                  <div className="industries-stat-item">
                    <h6 className="industries-stat-value">316+</h6>
                    <h6 className="industries-stat-label">Clients served</h6>
                  </div>
                  <div className="industries-stat-item">
                    <span className="industries-stat-value">87%</span>
                    <span className="industries-stat-label">
                      Retention rate
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Compact Visual Grid */}
          <div className="col-lg-6">
            <Reveal variant={fadeUp} delay={0.2}>
              <div className="case-stats-widget-container p-3" ref={widgetRef}>
                {/* Top 3 Stat Cards */}
                <div className="row g-2 mb-3">
                  {topStats.map((item) => (
                    <div key={item.id} className="col-4">
                      <div className="case-top-stat-card p-3 text-center">
                        <div className="mb-1">
                          <img
                            src={item.icon}
                            alt={item.label}
                            width="20"
                            height="20"
                          />
                        </div>
                        <div className="case-stat-number">{item.number}</div>
                        <div className="case-stat-card-label">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Middle Success Rate Card with Animated Bars and Numbers */}
                <div className="case-industry-success-card p-4 mb-3">
                  <h6 className="case-industry-title mb-3">
                    SUCCESS RATE BY INDUSTRY
                  </h6>
                  <div className="d-flex flex-column gap-3">
                    {industryData.map((item, index) => (
                      <div key={index} className="d-flex align-items-center">
                        <span className="case-industry-name">{item.industry}</span>
                        <div className="flex-grow-1 mx-3 case-progress-track">
                          <div
                            className="case-progress-fill"
                            role="progressbar"
                            style={{
                              width: isVisible ? `${item.rate}%` : "0%",
                              transitionDelay: item.delay,
                            }}
                            aria-valuenow={item.rate}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <span className="case-industry-rate">
                          <CountUp
                            target={item.rate}
                            start={isVisible}
                            delay={item.delay}
                            duration={1200}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Revenue Pill */}
                <div className="case-revenue-pill d-flex align-items-center justify-content-between p-3 text-white">
                  <div className="d-flex align-items-center">
                    <svg
                      className="me-2"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                    <span className="case-attributed">
                      ₹50Cr+ client revenue attributed
                    </span>
                  </div>
                  <span className="case-revenue-subtext">Across all projects</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;