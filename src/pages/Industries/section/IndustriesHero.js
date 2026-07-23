import React from "react";
import "./IndustriesHero.css";
import indaustries1 from "../../../assets/Industries/Healthcare2.svg";
import indaustries2 from "../../../assets/Industries/Education2.svg";
import indaustries3 from "../../../assets/Industries/Finance2.svg";
import indaustries4 from "../../../assets/Industries/Retail.svg";
import indaustries5 from "../../../assets/Industries/Manufacturing2.svg";
import indaustries6 from "../../../assets/Industries/RealEstate2.svg";
import indaustries7 from "../../../assets/Industries/Logistics2.svg";
import indaustries8 from "../../../assets/Industries/Startups2.svg";
import indaustries9 from "../../../assets/Industries/Services2.svg";

const gridItems = [
  { id: 1, name: "Healthcare", count: "12+", icon: indaustries1 },
  { id: 2, name: "Education", count: "28+", icon: indaustries2 },
  { id: 3, name: "Finance", count: "18+", icon: indaustries3 },
  { id: 4, name: "Retail", count: "45+", icon: indaustries4 },
  {
    id: 5,
    name: "Manufacturing",
    count: "22+",
    icon: indaustries5,
    highlight: true,
  },
  { id: 6, name: "Real Estate", count: "30+", icon: indaustries6 },
  { id: 7, name: "Logistics", count: "16+", icon: indaustries7 },
  { id: 8, name: "Startups", count: "60+", icon: indaustries8 },
  { id: 9, name: "Services", count: "25+", icon: indaustries9 },
];

const IndustriesHero = () => {
  return (
    <section className="industries-hero-section">
      <div className="container">
        <div className="row align-items-center g-5 mb-5 ">
          {/* Left Column: Text Content */}
          <div className="col-lg-6" >
            <div className="industries-main-section">
            <span className="industries-hero-badge">INDUSTRIES</span>
            <h1 className="industries-hero-title">
              Deep expertise across <br />
              <span className="industries-text-highlight">every sector.</span>
            </h1>
            <p className="industries-hero-description">
              We don't just understand technology — we understand your
              industry. 316+ clients across 9 verticals have shaped our domain
              expertise into practical, deployable knowledge.
            </p>

            {/* Bottom Stats */}
            <div className="industries-hero-stats-row">
              <div className="industries-stat-item">
                <h6 className="industries-stat-value">9</h6>
                <h6 className="industries-stat-label">Industry verticals</h6>
              </div>
              <div className="industries-stat-item">
                <h6 className="industries-stat-value">316+</h6>
                <h6 className="industries-stat-label">Clients served</h6>
              </div>
              <div className="industries-stat-item">
                <span className="industries-stat-value">87%</span>
                <span className="industries-stat-label">Retention rate</span>
              </div>
            </div>
            </div>
          </div>

          {/* Right Column: Compact Visual Grid */}
          <div className="col-lg-6">
            <div className="industries-hero-grid-wrapper">
              {/* Top Floating Badge */}
              <div className="industries-floating-top-badge px-3">
                <span className="industries-badge-count mt-2">316+</span>
                <span className="industries-badge-sub">across India</span>
              </div>

              {/* 3x3 Grid Cards */}
              <div className="industries-hero-icons-grid">
                {gridItems.map((item) => (
                  <div
                    key={item.id}
                    className={`industries-grid-card ${
                      item.highlight ? "industries-highlighted" : ""
                    }`}
                  >
                    <div className="industries-card-icon">
                      <img src={item.icon} alt={item.name} />
                    </div>
                    <span className="industries-card-text">{item.name}</span>
                    <span className="industries-card-count">{item.count}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Floating Stats Bar */}
              <div className="industries-floating-bottom-bar">
                <div className="industries-bar-stat">
                  <strong>9</strong> Verticals
                </div>
                <div className="industries-bar-stat">
                  <strong>316+</strong> Clients
                </div>
                <div className="industries-bar-stat">
                  <strong>7 yrs</strong> Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;