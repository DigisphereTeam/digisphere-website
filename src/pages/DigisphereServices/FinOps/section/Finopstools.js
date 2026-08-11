import React from 'react'
import "./Finopstools.css"
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
const tools = [
    {
      title: "AWS Cost Explorer",
      desc: "Native AWS cost analysis and forecasting",
    },
    {
      title: "Azure Cost Mgmt",
      desc: "Microsoft's cost management and billing",
    },
    {
      title: "Google Cloud Billing",
      desc: "GCP spend visibility and budget alerts",
    },
    {
      title: "CloudHealth",
      desc: "Multi-cloud governance and optimisation",
    },
    {
      title: "Apptio Cloudability",
      desc: "FinOps platform for enterprise teams",
    },
    {
      title: "Kubecost",
      desc: "Kubernetes cost monitoring and allocation",
    },
  ];
const Finopstools = () => {
  return (
   <section className="finops-tools-section">
      <div className="container">
        <div className="hero-wrapper">
          
          {/* Section Header */}
          <Reveal variant={fadeUp} delay={0.1}>
            <div className="tools-header-content">
              <span className="tools-subtitle">TOOLS & PLATFORMS</span>
              <h2 className="tools-title">Best-in-class FinOps tooling.</h2>
              <p className="tools-description">
                We work with the tools you already use and introduce specialised
                FinOps platforms where they add value — never tool-for-tool's-sake.
              </p>
            </div>
          </Reveal>

          {/* 6-Card Grid Layout */}
          <Reveal variant={fadeUp} delay={0.2}>
            <div className="tools-grid">
              {tools.map((item, index) => (
                <div key={index} className="tool-card">
                  <h3 className="tool-card-title">{item.title}</h3>
                  <p className="tool-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default Finopstools