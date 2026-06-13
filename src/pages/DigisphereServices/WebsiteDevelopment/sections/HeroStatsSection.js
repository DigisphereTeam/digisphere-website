import React from "react";
import "./HeroStatsSection.css";

import heroImage from "../../../../assets/website-development/hero-image.svg";
import Counter from "../../../../components/Counter/Counter";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";

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
      prefix:  "60-",
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
              <Breadcrumb items={[
                {label:"Home",path:"/"},
                {label:"Services",path:"/services/webdevelopment"},
                {label:"Website Design & Development"}
              ]}/>

              <span className="hero-tag">
                WEBSITE DESIGN & DEVELOPMENT
              </span>

              <h1 className="hero-title">
                Websites that work as hard
                <span> as your business does.</span>
              </h1>

              <p className="hero-description">
                Your website should be your best salesperson, not your biggest
                frustration. We design and develop fast, secure, and
                conversion-focused websites that help businesses attract more
                visitors, generate more leads, and win more customers.
              </p>

              <div className="hero-buttons">
                <button className="primary-btn">
                  Start Free Digital Audit
                </button>

                <button className="secondary-btn">
                  View Website Projects
                </button>
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
            <div
              key={index}
              className="col-lg-3 col-md-6 col-12"
            >
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