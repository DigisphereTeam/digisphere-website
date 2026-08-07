import React from "react";
import "./CareersHero.css"
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import { 
  LuCode, 
  LuLayers, 
  LuPalette, 
  LuShieldCheck, 
  LuMegaphone 
} from 'react-icons/lu';


const positions = [
  {
    id: 1,
    avatarText: 'FE',
    title: 'Frontend Engineer',
    category: 'Engineering',
    icon: <LuCode size={12} className="careers-badge-icon" />
  },
  {
    id: 2,
    avatarText: 'KR',
    title: 'DevOps Lead',
    category: 'Infrastructure',
    icon: <LuLayers size={12} className="careers-badge-icon" />
  },
  {
    id: 3,
    avatarText: 'UX',
    title: 'UX Designer',
    category: 'Design',
    icon: <LuPalette size={12} className="careers-badge-icon" />
  },
  {
    id: 4,
    avatarText: 'FD',
    title: 'Full Stack Dev',
    category: 'Engineering',
    icon: <LuCode size={12} className="careers-badge-icon" />
  },
  {
    id: 5,
    avatarText: 'SA',
    title: 'Security Analyst',
    category: 'Cybersecurity',
    icon: <LuShieldCheck size={12} className="careers-badge-icon" />
  },
  {
    id: 6,
    avatarText: 'DM',
    title: 'Digital Marketing',
    category: 'Marketing',
    icon: <LuMegaphone size={12} className="careers-badge-icon" />
  }
];
const CareersHero = () => {

  return (
    <>
      <section className="case-hero-section ">
        <div className="container">
          <div className="row align-items-center g-5 mb-5">
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
                      <span className="industries-stat-label">Client retention</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-12 col-lg-6 careers-right-wrapper">
      <div className="careers-right-container text-center">
        
        {/* Top Hiring Badge */}
        <div className="careers-hiring-badge-wrapper mb-4">
          <span className="careers-hiring-badge">
            We're Hiring — 6 Open Positions
          </span>
        </div>

        {/* 3x2 Grid Cards */}
        <div className="row g-3">
          {positions.map((item) => (
            <div key={item.id} className="col-4">
              <div className="careers-role-card card h-100 border-0 align-items-center justify-content-between p-3">
                
                {/* Circle Avatar */}
                <div className="careers-avatar-circle">
                  {item.avatarText}
                </div>

                {/* Title / Subtitle Info */}
                <div className="careers-info-block my-1">
                  {item.subtitle && (
                    <div className="careers-subtitle">{item.subtitle}</div>
                  )}
                  <div className={item.subtitle ? "careers-title-small" : "careers-title"}>
                    {item.title}
                  </div>
                </div>

                {/* Category Pill */}
                <div className="careers-category-wrapper mt-2">
                  <span className="careers-category-pill">
                    {item.icon}
                    {item.category}
                  </span>
                </div>

              </div>
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
