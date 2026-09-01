import React from "react";
import { FiHome, FiCompass, FiSend } from "react-icons/fi";
import "./CaseStudiesRealVentures.css";

const CaseStudiesRealVentures = () => {
  const challenges = [
    {
      icon: <FiHome size={18} color="#057dcd" />,
      title: "Property Presentation",
      description:
        "Showcasing high-end architectural developments required moving beyond static image galleries and flat promotional materials. Buyers needed comprehensive views of structural layouts, material finishes, and neighborhood highlights to make informed purchase decisions. Without rich dynamic media, prospective investors found it difficult to visualize the true scope and premium quality of the properties.",
    },
    {
      icon: <FiCompass size={18} color="#057dcd" />,
      title: "Information Discovery",
      description:
        "Navigating complex site plans, interactive floor layouts, and location advantages proved difficult on their legacy platform. Interested buyers struggled to locate downloadable brochures, master plans, and unit availability status across different property phases. This fragmented browsing structure caused high drop-off rates before visitors could evaluate pricing or schedule site visits.",
    },
    {
      icon: <FiSend size={18} color="#057dcd" />,
      title: "High-Intent Lead Capture",
      description:
        "The legacy website lacked clear conversion paths tailored for serious buyers and institutional investors ready to book consultations. Generic contact forms failed to collect necessary buyer preferences, such as unit preferences, purchase timelines, or financing requirements. Consequently, the sales team faced slow inquiry turnaround times and struggled to filter high-intent leads effectively.",
    },
  ];

  const highlights = [
    {
      number: 1,
      title: "Cross-Device Responsiveness",
      description:
        "Engineered a fluid, high-performance web application designed to load flawlessly across mobile devices, tablets, and desktops. High-resolution property renders and interactive floor plans adapt smoothly to any screen resolution without sacrificing speed. This guarantees that buyers on the go enjoy a rich, responsive visual experience during their search.",
    },
    {
      number: 2,
      title: "Immersive Property Showcase",
      description:
        "Developed structured listing modules that highlight key architectural specifications, luxury amenities, and location maps. Integrated downloadable project brochures, virtual walk-through tours, and dynamic floor plan viewports directly within unit pages. This comprehensive breakdown gives prospective buyers complete clarity on property specs prior to booking.",
    },
    {
      number: 3,
      title: "Strategic Inquiry Funnels",
      description:
        "Embedded contextual inquiry prompts and automated VIP site-visit scheduling tools strategically throughout the user journey. Visitors can instantly submit customized requests regarding unit pricing, payment structures, and private tours directly to sales agents. This streamlined funnel significantly boosted conversion rates and generated higher-quality leads.",
    },
  ];

  return (
    <div className="RealVentures-wrapper">
      {/* Hero Section */}
      <section className="RealVentures-hero">
        <div className="container">
          <div className="RealVentures-badge">
            <span className="RealVentures-badge-dot"></span>
            CASE STUDY
          </div>
          <h1 className="RealVentures-hero-title">
            Website Design &
            <span className="RealVentures-blue"> Digital Experience</span>{" "}
            <br />
            for Real Ventures.
          </h1>
          <p className="RealVentures-hero-desc">
            Real Ventures required a modernized digital flagship to showcase its growing portfolio of premium real estate developments. We crafted an immersive platform that combines elegant visual storytelling with interactive floor plans and streamlined inquiry flows. The result is a high-converting digital experience that captivates prospective buyers and accelerates real estate sales pipelines.
          </p>
        </div>

        {/* Meta Bar */}
        <div className="RealVentures-meta-bar">
          <div className="container">
            <div className="RealVentures-meta-col">
              <span className="RealVentures-meta-label">CLIENT</span>
              <span className="RealVentures-meta-val">Real Ventures</span>
            </div>
            <div className="RealVentures-meta-col">
              <span className="RealVentures-meta-label">CATEGORY</span>
              <span className="RealVentures-meta-val">Real Estate</span>
            </div>
            <div className="RealVentures-meta-col">
              <span className="RealVentures-meta-label">PROJECT TYPE</span>
              <span className="RealVentures-meta-val">
                Website Design + Digital Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="RealVentures-challenge">
        <div className="container">
          <span className="RealVentures-section-label">THE CHALLENGE</span>
          <h2 className="RealVentures-challenge-title">
            Transforming complex property portfolios into <br />
            an intuitive, visually captivating buyer journey.
          </h2>

          <div className="RealVentures-challenge-grid">
            {challenges.map((item, index) => (
              <div className="RealVentures-challenge-card" key={index}>
                <div className="RealVentures-icon-box">{item.icon}</div>
                <h3 className="RealVentures-card-title">{item.title}</h3>
                <p className="RealVentures-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built Section */}
      <section className="RealVentures-approach">
        <div className="container">
          <span className="RealVentures-approach-label">WHAT WE BUILT</span>
          <h2 className="RealVentures-approach-title">
            A responsive real estate platform built for <br />
            discovery, engagement, and lead capture.
          </h2>

          <div className="RealVentures-approach-grid">
            {highlights.map((step) => (
              <div className="RealVentures-step-wrapper" key={step.number}>
                <div className="RealVentures-step-num">{step.number}</div>
                <div className="RealVentures-step-card">
                  <h3 className="RealVentures-card-title">{step.title}</h3>
                  <p className="RealVentures-card-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="RealVentures-cta-wrapper"></div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesRealVentures;