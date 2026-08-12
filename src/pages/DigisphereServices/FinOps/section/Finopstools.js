import React from 'react'
import "./Finopstools.css"
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import aws from "../../../../assets/CloudServiecs/awslogo.svg";
import azure from "../../../../assets/CloudServiecs/azure.svg";
import gcp from "../../../../assets/CloudServiecs/gcp.svg";
import helth from "../../../../assets/Finops/cloudHelth.svg"
import apptio from "../../../../assets/Finops/appito.svg"
import kube from "../../../../assets/Finops/kude.svg"
const tools = [
    {
      icon: aws,
      title:"AWS Cost Explorer",
      desc: "Native AWS cost analysis and forecasting",
    },
    {
      icon: azure,
      title:"Azure Cost Mgmt",
      desc: "Microsoft's cost management and billing",
    },
    {
      icon: gcp,
       title:"Google Cloud Billing",
      desc: "GCP spend visibility and budget alerts",
    },
    {
      icon: helth,
       title:"CloudHealth",
      desc: "Multi-cloud governance and optimisation",
    },
    {
      icon: apptio,
       title:"Apptio Cloudability",
      desc: "FinOps platform for enterprise teams",
    },
    {
      icon: kube,
       title:"Kubecost",
      desc: "Kubernetes cost monitoring and allocation",
    },
  ];
const Finopstools = () => {
  return (
   <section className="finops-tools-section">
      <div className="container">
        <div className="fin-hero-wrapper">
          
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
                  <img src={item.icon} alt='images' className='tooling-icons'/>
                  <h6 className='finops-cloud-title'>{item.title}</h6>
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