import React from "react";
import "./CareersHero.css";
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeUp } from "../../../../animations/variants";
import Engineering from "../../../../assets/Careers/Engineering.svg";
import DevOpsLead from "../../../../assets/Careers/DevOpsLead.svg";
import Marketing from "../../../../assets/Careers/Marketing (2).svg";
import Finopsicon from "../../../../assets/Finopsicon.svg";
import { FaUsers } from "react-icons/fa";
const positions = [
  // {
  //   id: 1,
  //   avatarText: "FE",
  //   avatarColor: "#057DCD",
  //   title: "Frontend Engineer",
  //   category: "Engineering",
  //   icon: <img src={Engineering} alt="" className="careers-badge-icon" />,
  // },
   {
    id: 1,
    avatarText: "FS",
    avatarColor: "#057DCD",
    title: "Full Stack Dev",
    category: "Engineering",
    icon: <img src={Engineering} alt="" className="careers-badge-icon" />,
  },

  {
    id: 2,
    avatarText: "CS",
    avatarColor: "#057DCD",
    title: "Cloud Sales",
    category: "Sales",
    icon: (
      <img src={Finopsicon} alt="FinOps Sales" className="careers-badge-icon" />
    ),
  },
  {
    id: 3,
    avatarText: "UX",
    avatarColor: "#057DCD",
    title: "UX Designer",
    category: "Design",
    icon: <img src={DevOpsLead} alt="" className="careers-badge-icon" />,
  },
  {
    id: 4,
    avatarText: "BD",
    avatarColor: "#057DCD",
    title: "Business Development Executive",
    category: "Sales",
    icon: (
      <FaUsers className="careers-badge-icon" />
    ),
  },
  {
    id: 5,
    avatarText: "DM",
    avatarColor: "#057DCD",
    title: "Digital Marketing",
    category: "Marketing",
    icon: <img src={Marketing} alt="" className="careers-badge-icon" />,
  },
];
const CareersHero = () => {
  return (
    <>
      <section className="case-hero-section ">
        <div className="container">
          <div className="row  g-5 mb-5 mt-1">
            {/* Left Column */}
            <div className="col-lg-6">
              <Reveal variant={fadeLeft} delay={0.1}>
                <div className="industries-main-section">
                  <p className="Digisphere-badge">Careers</p>
                  <h1 className="industries-hero-title">
                    Build the things
                    <br />
                    <span className="industries-text-highlight">
                      that build businesses.
                    </span>
                  </h1>
                  <p className="industries-hero-description">
                    We're a team of engineers, designers, and strategists
                    solving real business problems across India. If you want
                    high-impact work without enterprise bureaucracy — you'll fit
                    in here.
                  </p>

                  {/* Bottom Stats */}
                  <div className="industries-hero-stats-row">
                    <div className="industries-stat-item">
                      <h6 className="industries-stat-value">2018</h6>
                      <h6 className="industries-stat-label">Founded</h6>
                    </div>
                    <div className="industries-stat-item">
                      <h6 className="industries-stat-value">65+</h6>
                      <h6 className="industries-stat-label">Team size</h6>
                    </div>
                    <div className="industries-stat-item">
                      <span className="industries-stat-value">2</span>
                      <span className="industries-stat-label">Offices</span>
                    </div>
                    <div className="industries-stat-item">
                      <span className="industries-stat-value">87%</span>
                      <span className="industries-stat-label">
                        Client retention
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-12 col-lg-6 careers-right-wrapper">
              <div className="careers-right-container text-center">
                {/* Top Hiring Badge */}
                <Reveal variant={fadeUp} delay={0.1}>
                  <div className="careers-hiring-badge-wrapper mb-4">
                    <span className="careers-hiring-badge">
                      We're Hiring — 5 Open Positions
                    </span>
                  </div>
                </Reveal>

                {/* 3x2 Grid Cards */}
                <div className="row g-3">
                  {positions.map((item, index) => (
                    <div key={item.id} className="col-4 d-flex">
                      <Reveal
                        variant={fadeUp}
                        delay={0.2 + index * 0.1}
                        className="w-100"
                      >
                        <div className="careers-role-card card h-100 w-100 border-0 align-items-center justify-content-between">
                          {/* Circle Avatar */}
                          <div
                            className="careers-avatar-circle"
                            style={{ backgroundColor: item.avatarColor }}
                          >
                            {item.avatarText}
                          </div>

                          {/* Title / Subtitle Info */}
                          <div className="careers-info-block">
                            {item.subtitle && (
                              <div className="careers-subtitle">
                                {item.subtitle}
                              </div>
                            )}

                            <div
                              className={
                                item.subtitle
                                  ? "careers-title-small"
                                  : "careers-title"
                              }
                            >
                              {item.title}
                            </div>
                          </div>

                          {/* Category Pill */}
                          <div className="careers-category-wrapper">
                            <span className="careers-category-pill">
                              {item.icon}
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersHero;
