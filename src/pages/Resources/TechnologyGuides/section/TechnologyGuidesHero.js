import React from "react";
import "./TechnologyGuidesHero.css";
import Reveal from "../../../../animations/Reveal";
// 1. Import fadeLeft and fadeRight
import { fadeLeft, fadeRight } from "../../../../animations/variants";

import icon1 from "../../../../assets/TechnologyGuides/WebDev.svg";
import icon2 from "../../../../assets/TechnologyGuides/Cloudtech.svg";
import icon3 from "../../../../assets/TechnologyGuides/Securitytech.svg";
import icon4 from "../../../../assets/TechnologyGuides/AItech.svg";

const categories = [
  { title: "Web Dev", count: "8 guides", icon: icon1 },
  { title: "Cloud", count: "6 guides", icon: icon2 },
  { title: "Security", count: "5 guides", icon: icon3 },
  { title: "AI & Automation", count: "7 guides", icon: icon4 },
];

const TechnologyGuidesHero = () => {
  return (
    <section className="industries-hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Slides in from Left */}
          <div className="col-lg-6">
            <Reveal variant={fadeLeft} delay={0.1}>
              <div className="industries-main-section">
              <p class="Digisphere-badge">
                  Technology Guides
                </p>
                <h1 className="industries-hero-title">
                  Make better decisions
                  <br />
                  <span className="industries-text-highlight">
                    about technology.{" "}
                  </span>
                </h1>
                <p className="industries-hero-description">
                  Practical guides written for business owners, product managers,
                  and decision-makers  not developers. No jargon. No fluff.
                </p>

                <div className="industries-hero-stats-row">
                  <div className="industries-stat-item">
                    <h6 className="industries-stat-value">36+</h6>
                    <h6 className="industries-stat-label">Guides published</h6>
                  </div>
                  <div className="industries-stat-item">
                    <h6 className="industries-stat-value">6</h6>
                    <h6 className="industries-stat-label">Topic areas</h6>
                  </div>
                  <div className="industries-stat-item">
                    <span className="industries-stat-value">Free</span>
                    <span className="industries-stat-label">Always</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Slides in from Right */}
          <div className="col-lg-6">
            
            {/* 2x2 Category Grid */}
            <div className="row g-3 mb-3">
              {categories.map((cat, index) => (
                <div key={index} className="col-6">
                  <Reveal variant={fadeRight} delay={0.2 + index * 0.1}>
                    <div className="Guides-category-card">
                      <div className="Guides-category-icon-wrapper">
                        <img src={cat.icon} alt={cat.title} className="Guides-category-icon" />
                      </div>
                      <div className="Guides-category-info">
                        <h4 className="Guides-category-title">{cat.title}</h4>
                        <span className="Guides-category-count">{cat.count}</span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>

            {/* Featured Guide Card */}
            <Reveal variant={fadeRight} delay={0.6}>
              <div className="Guides-featured-card">
                <div className="Guides-featured-header">
                  <span className="Guides-badge-featured">Featured Guide</span>
                  <span className="Guides-read-time">
                    <svg className="Guides-clock-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    8 min read
                  </span>
                </div>

                <h3 className="Guides-featured-title">
                  AWS vs GCP vs Azure: A Guide for Indian Businesses
                </h3>
                <p className="Guides-featured-description">
                  Data residency, pricing in INR, support quality, and regional coverage  how the three major clouds compare for businesses in India.
                </p>

                <div className="Guides-featured-footer">
                  <span className="Guides-badge-level">Beginner</span>
                  <a href="#read" className="Guides-read-link">
                    Read Guide <span>&rsaquo;</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Bottom Blue Stats Bar */}
            <Reveal variant={fadeRight} delay={0.7}>
              <div className="Guides-stats-blue-bar mt-2">
                <div className="Guides-stat-blue-item">
                  <span className="Guides-stat-blue-num">36+</span>
                  <span className="Guides-stat-blue-lbl">Guides</span>
                </div>
                <div className="Guides-stat-blue-item">
                  <span className="Guides-stat-blue-num">6</span>
                  <span className="Guides-stat-blue-lbl">Categories</span>
                </div>
                <div className="Guides-stat-blue-item">
                  <span className="Guides-stat-blue-num">Free</span>
                  <span className="Guides-stat-blue-lbl">Always</span>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyGuidesHero;