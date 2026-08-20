import React from "react";
import "./AllIndustriesc.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";

import indaustries1 from "../../../assets/Industries/Healthcare.svg";
import indaustries2 from "../../../assets/Industries/Education.svg";
import indaustries3 from "../../../assets/Industries/Finance.svg";
import indaustries4 from "../../../assets/Industries/E-Commerce.svg";
import indaustries5 from "../../../assets/Industries/Manufacturing.svg";
import indaustries6 from "../../../assets/Industries/RealEstate.svg";
import indaustries7 from "../../../assets/Industries/Logistics.svg";
import indaustries8 from "../../../assets/Industries/Startups.svg";
import indaustries9 from "../../../assets/Industries/Professional.svg";
import BookingSection from "../../../components/BookingSection/BookingSection.js"


const industriesData = [
  {
    id: 1,
    icon: indaustries1,
    count: "12+",
    countLabel: "Healthcare clients",
    title: "Healthcare",
    subtitle: "HIPAA-compliant digital health solutions",
    description:
      "Patient portals, telemedicine platforms, hospital management systems, and healthcare data pipelines — built with clinical compliance from the ground up.",
    bullets: [
      "Patient management portals",
      "Telemedicine apps",
      "HIPAA-compliant cloud",
      "Medical records digitization",
    ],
  },
  {
    id: 2,
    icon: indaustries2,
    count: "28+",
    countLabel: "EdTech & institution clients",
    title: "Education",
    subtitle: "Learning platforms that scale",
    description:
      "LMS platforms, admission management systems, student portals, and e-learning apps — for schools, colleges, universities, and EdTech startups.",
    bullets: [
      "Learning management systems",
      "Admission & fee portals",
      "Online exam platforms",
      "Student analytics dashboards",
    ],
  },
  {
    id: 3,
    icon: indaustries3,
    count: "18+",
    countLabel: "Finance sector clients",
    title: "Finance & Fintech",
    subtitle: "Secure fintech applications",
    description:
      "Loan management systems, payment gateways, trading dashboards, and compliance-ready fintech apps built to RBI and SEBI framework requirements.",
    bullets: [
      "Loan origination systems",
      "Payment gateway integration",
      "Portfolio management apps",
      "Regulatory reporting tools",
    ],
  },
  {
    id: 4,
    icon: indaustries4,
    count: "45+",
    countLabel: "Retail & e-commerce clients",
    title: "Retail & E-Commerce",
    subtitle: "Omnichannel retail technology",
    description:
      "E-commerce platforms, POS integrations, inventory management, and customer loyalty systems that connect your online and offline retail operations.",
    bullets: [
      "Custom e-commerce stores",
      "POS & inventory integration",
      "Loyalty & rewards platforms",
      "Customer analytics",
    ],
  },
  {
    id: 5,
    icon: indaustries5,
    count: "22+",
    countLabel: "Manufacturing clients",
    title: "Manufacturing",
    subtitle: "Smart factory & ERP solutions",
    description:
      "Production monitoring, quality inspection workflows, supply chain visibility, and ERP integrations that reduce downtime and improve factory efficiency.",
    bullets: [
      "Production monitoring dashboards",
      "Quality inspection apps",
      "Supply chain tracking",
      "ERP customization",
    ],
  },
  {
    id: 6,
    icon: indaustries6,
    count: "30+",
    countLabel: "Real estate clients",
    title: "Real Estate",
    subtitle: "Property management & proptech",
    description:
      "Property listing platforms, tenant management portals, maintenance tracking systems, and CRMs built for real estate developers, agencies, and property managers.",
    bullets: [
      "Property listing portals",
      "Tenant management systems",
      "Maintenance request apps",
      "Real estate CRM",
    ],
  },
  {
    id: 7,
    icon: indaustries7,
    count: "16+",
    countLabel: "Logistics clients",
    title: "Logistics & Supply Chain",
    subtitle: "Fleet, warehouse & last-mile tech",
    description:
      "Fleet management systems, warehouse management software, shipment tracking, and route optimization tools for logistics companies and 3PLs.",
    bullets: [
      "Fleet tracking & management",
      "Warehouse management systems",
      "Shipment tracking portals",
      "Route optimization tools",
    ],
  },
  {
    id: 8,
    icon: indaustries8,
    count: "60+",
    countLabel: "Startups supported",
    title: "Startups",
    subtitle: "MVP to scale — we build with you",
    description:
      "We partner with founders from idea to Series A — designing MVPs, building the technical foundation, and setting up the infrastructure to scale fast.",
    bullets: [
      "MVP design & development",
      "Technical co-founder support",
      "Scalable cloud architecture",
      "Product analytics setup",
    ],
  },
  {
    id: 9,
    icon: indaustries9,
    count: "25+",
    countLabel: "Professional services clients",
    title: "Professional Services",
    subtitle: "Practice management for service firms",
    description:
      "Practice management software, client portals, billing systems, and workflow automation for law firms, CA firms, consulting businesses, and agencies.",
    bullets: [
      "Client management portals",
      "Billing & invoice automation",
      "Document management",
      "Workflow & approval systems",
    ],
  },
];

const AllIndustries = () => {
  return (
    <>
      <section className="industries-section mb-5 mt-5">
        <div className="container">
          {/* Header */}
          <Reveal variant={fadeUp} delay={0.1}>
            <div className="industries-header">
              <span className="industries-badge">ALL INDUSTRIES</span>
              <h2 className="industries-title">
                Built for your world, not just your tech stack.
              </h2>
            </div>
          </Reveal>

          {/* Bootstrap Grid Columns */}
          <div className="row g-4">
            {industriesData.map((item, index) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-12">
                <Reveal variant={fadeUp} delay={0.15 + (index % 3) * 0.1} className="w-100 h-100">
                  <div className="industries-card">
                    {/* Top Row: Icon Image + Counter */}
                    <div className="industries-card-top">
                      <div className="industries-icon-wrapper">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="industries-icon-img"
                        />
                      </div>
                      <div className="industries-count-wrapper">
                        <span className="industries-count-number">
                          {item.count}
                        </span>
                        <span className="industries-count-label">
                          {item.countLabel}
                        </span>
                      </div>
                    </div>

                    {/* Main Content */}
                    <h3 className="industries-card-title">{item.title}</h3>
                    <p className="industries-card-subtitle">{item.subtitle}</p>
                    <p className="industries-card-description">
                      {item.description}
                    </p>

                    {/* Bullets List */}
                    <ul className="industries-card-bullets">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>
                          <span className="industries-bullet-dot">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Link */}
                    <div className="industries-card-cta">
                      <Link to="/contact">
                        <span>Discuss Your Project</span>
                        <FaArrowRight className="industries-arrow-icon" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Banner */}
      
       <BookingSection
        title="Don't see your industry?"
        description="We work with businesses of all types. Tell us your challenge — we'll figure out if and how we can help."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    
    </>
  );
};

export default AllIndustries;