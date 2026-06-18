import React from "react";
import "./HeroStatsSection.css";

import heroImage from "../../../../assets/website-development/hero-image.svg";
import Counter from "../../../../components/Counter/Counter";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";

const HeroStatsSection = () => {
  const stats = [
    {
      prefix: "<",
      end: 2,
      suffix: " sec",
      label: "Average Page Load Time",
    },
    {
      end: 70,
      prefix: "60-",
      suffix: "%",
      label: "Average Increase In Enquiries",
    },
    {
      end: 150,
      suffix: "+",
      label: "Websites Delivered",
    },
    {
      end: 90,
      suffix: "+",
      label: "Google PageSpeed Score",
    },
  ];

  return (
    <section className="hero-stats-section">
      <div className="hero-wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="hero-content">
                {/* <Breadcrumb
                  items={[
                    { label: "Home", path: "/" },
                    { label: "Services", path: "/services/webdevelopment" },
                    { label: "Website Design & Development" },
                  ]}
                /> */}
                <span className="hero-tag">WEBSITE DESIGN & DEVELOPMENT</span>

                <h1 className="hero-title">
                  Websites that work as hard
                  <span> as your business does.</span>
                </h1>

                <p className="hero-description">
                  A website is not a brochure. It is your best salesperson working 
                  24 hours a day. We design and build websites that load fast, rank
                  on search engines, and convert visitors into enquiries, bookings and
                  sales.

                  
                </p>

                <div className="hero-buttons">
                  <Button variant="primary" icon={<FaArrowRight/>}>
                    <span>Start Free Digital Audit</span>
                  </Button>

                  <Button variant="secondary" icon={<FaArrowRight />}>
                    <span>View Website Projects</span>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6 col-12">
            <div className="hero-image-wrapper">
              <img
                src={heroImage}
                alt="Website Development"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container stats-wrapper">
        <div className="row g-4">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <Reveal variant={fadeUp} delay={index * 0.1}>
                <div className="stat-card">
                  <h3 className="stat-number">
                    <Counter
                      end={item.end}
                      prefix={item.prefix || ""}
                      suffix={item.suffix || ""}
                    />
                  </h3>

                  <p className="stat-label">{item.label}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStatsSection;
