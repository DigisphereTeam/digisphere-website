import React from "react";
import "./ProjectSection.css";
import { Link } from 'react-router-dom';
import endocare from "../../../../assets/CaseStudies/endocare.svg";
import SRSteelDoors from "../../../../assets/CaseStudies/SRSteelDoors.svg";
import RealVentures from "../../../../assets/CaseStudies/RealVentures.svg";
import Skilledition from "../../../../assets/CaseStudies/Skilledition.svg";
import Logistics from "../../../../assets/CaseStudies/Logistics (2).svg";
import Finsphere from "../../../../assets/CaseStudies/Finsphere.svg";
import { IoArrowForward } from "react-icons/io5";

// Import your animation components and variants
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../../../animations/variants";

const caseStudiesData = [
  {
    id: 1,
    badge: "Healthcare",
    services: "Web App + Digital Marketing",
    title: "Endocare Hospitals",
    challenge:
      "Patient appointment scheduling was handled entirely by phone  staff spent 4+ hours daily managing calls and the no-show rate was 24%.",
    solution:
      "Built a patient portal with online appointment booking, automated SMS reminders, and WhatsApp confirmations. Integrated with their existing HIS.",
    stats: [
      { value: "68%", label: "Reduction in no-show rate" },
      { value: "4 hrs", label: "Staff time saved daily" },
      { value: "2,400+", label: "Online bookings in first month" },
    ],
    image: endocare,
    imagePosition: "left",
  },
  {
    id: 2,
    badge: "Manufacturing & Retail",
    services: "E-Commerce + Automation",
    title: "SR Steel Doors",
    challenge:
      "A 40-year-old textile business relying entirely on offline sales wanted to expand online but had no digital presence or technical team.",
    solution:
      "Built a product catalogue website, integrated with WhatsApp ordering, and set up automated inventory alerts and order fulfillment notifications.",
    stats: [
      { value: "₹28L", label: "Online revenue in year one" },
      { value: "3x", label: "Order volume increase" },
      { value: "94%", label: "On-time fulfillment rate" },
    ],
    image: SRSteelDoors,
    imagePosition: "right",
  },
  {
    id: 3,
    badge: "Real Estate",
    services: "CRM + Lead Generation",
    title: "Real Ventures",
    challenge:
      "A mid-size property developer with 800+ leads per month had no CRM  leads were managed in spreadsheets, follow-up was inconsistent, and conversion was 1.2%.",
    solution:
      "Built a custom CRM with automated lead scoring, WhatsApp follow-up sequences, and a broker portal. Integrated Google Ads and Meta Ads with lead tracking.",
    stats: [
      { value: "3.8%", label: "Lead conversion rate (from 1.2%)" },
      { value: "₹4.2Cr", label: "Additional revenue attributed" },
      { value: "72%", label: "Reduction in manual follow-up work" },
    ],
    image: RealVentures,
    imagePosition: "left",
  },
  {
    id: 4,
    badge: "Education",
    services: "Platform Development + Marketing",
    title: "Skilledition EdTech",
    challenge:
      "A bootstrapped EdTech startup needed an MVP learning platform to validate their product with 500 beta users before raising their seed round.",
    solution:
      "Designed and built a full LMS with video hosting, quizzes, progress tracking, and a parent dashboard. Launched in 8 weeks and handled beta onboarding.",
    stats: [
      { value: "8 wks", label: "MVP to launch timeline" },
      { value: "94%", label: "Beta user retention at 30 days" },
      { value: "₹1.2Cr", label: "Seed funding raised post-MVP" },
    ],
    image: Skilledition,
    imagePosition: "right",
  },
  {
    id: 5,
    badge: "Logistics",
    services: "Fleet Management + Cloud Migration",
    title: "Logistics",
    challenge:
      "A 120-truck fleet company running on disconnected WhatsApp groups and Excel sheets  real-time visibility into fleet location and delivery status was zero.",
    solution:
      "Built a fleet tracking platform with GPS integration, driver apps, customer delivery notifications, and migrated their servers to AWS.",
    stats: [
      { value: "31%", label: "Fuel cost reduction" },
      { value: "99%", label: "On-time delivery improvement" },
      { value: "40%", label: "Reduction in customer complaints" },
    ],
    image: Logistics,
    imagePosition: "left",
  },
  {
    id: 6,
    badge: "Finance",
    services: "Web App + Cybersecurity",
    title: "Finsphere",
    challenge:
      "A SEBI-registered investment advisory firm needed a client portal for portfolio reporting and was failing their annual cybersecurity audit.",
    solution:
      "Built a secure client portal with portfolio reporting, document vault, and compliance reporting. Completed a VAPT and implemented ISO 27001 controls.",
    stats: [
      { value: "100%", label: "Cybersecurity audit pass rate" },
      { value: "8 hrs/mo", label: "Reporting time saved per advisor" },
      { value: "4.9/5", label: "Client satisfaction with portal" },
    ],
    image: Finsphere,
    imagePosition: "right",
  },
];

const ProjectSection = () => {
  return (
    <section className="project-section ">
      <div className="container">
        {caseStudiesData.map((item) => {
          const isImageLeft = item.imagePosition === "left";

          return (
            <div
              key={item.id}
              className="row align-items-center project-item my-5"
            >
              {/* Image Column with Reveal Animation */}
              <div
                className={`col-12 col-lg-6 mb-4 mb-lg-0 ${
                  isImageLeft ? "order-lg-1" : "order-lg-2"
                }`}
              >
                <Reveal
                  variant={isImageLeft ? fadeLeft : fadeRight}
                  delay={0.1}
                >
                  <div className="project-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid project-img"
                    />
                  </div>
                </Reveal>
              </div>

              {/* Content Column with Reveal Animation */}
              <div
                className={`col-12 col-lg-6 ${
                  isImageLeft ? "order-lg-2 ps-lg-5" : "order-lg-1 pe-lg-5"
                }`}
              >
                <Reveal variant={fadeUp} delay={0.2}>
                  {/* Category Tags */}
                  <div className="project-tags-container mb-3">
                    <span className="project-badge-tag">{item.badge}</span>
                    <span className="project-services-tag ms-2">
                      {item.services}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="project-title mb-3">{item.title}</h2>

                  {/* Descriptions */}
                  <div className="project-description mb-4">
                    <div className="mb-2">
                      <strong className="text-uppercase project-section-label">
                        THE CHALLENGE
                      </strong>
                      <p className="project-dc">{item.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-uppercase project-section-label">
                        WHAT WE BUILT
                      </strong>
                      <p className="project-dc">{item.solution}</p>
                    </div>
                  </div>

                  {/* Metrics / Stats Row */}
                  <div className="row g-2 mb-4">
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="col-4">
                        {/* Pass h-100 or style={{ height: '100%' }} to Reveal */}
                        <Reveal
                          variant={fadeUp}
                          delay={0.3 + idx * 0.1}
                          className="h-100"
                        >
                          <div className="project-stat-card p-3 text-center">
                            <div className="project-stat-value">
                              {stat.value}
                            </div>
                            <div className="project-stat-label">
                              {stat.label}
                            </div>
                          </div>
                        </Reveal>
                      </div>
                    ))}
                  </div>
                  {/* CTA Button */}
                  <Link to="/contact">
                    <button className="btn btn-outline-secondary project-start-btn">
                      Start a Similar Project <IoArrowForward />
                    </button>
                  </Link>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
