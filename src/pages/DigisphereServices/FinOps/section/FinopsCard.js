import React from "react";
import "./FinopsCard.css";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import tickIcon from "../../../../assets/digital-marketing/tick-icon.svg";
import ServicesGrid from "../../../../components/ServicesGrid/ServicesGrid";
import ProcessCards from "../../../../components/ProcessCards/ProcessCards";
import offer1 from "../../../../assets/Finops/offer1.svg";
import offer2 from "../../../../assets/Finops/offer2.svg";
import offer3 from "../../../../assets/Finops/offer3.svg";
import offer4 from "../../../../assets/Finops/offer4.svg";
import offer5 from "../../../../assets/Finops/offer5.svg";
import offer6 from "../../../../assets/Finops/offer6.svg";

const ApplicationsServices = [
  {
    icon: offer1,
    title: "Cloud Cost Audit",
    description:
      "We analyse your entire cloud bill  every service, region, and account  and identify waste, idle resources, overprovisioned instances, and architectural inefficiencies.",
    points: [
      "Line-item audit across AWS, Azure, or GCP",
      "Idle and zombie resource identification",
      "Rightsizing recommendations with ROI estimates",
      "Quick-win savings you can action in week one",
    ],
  },

  {
    icon: offer2,
    title: "Reserved Instance & Savings Plans",
    description:
      "Strategic RI and Savings Plan purchasing can cut compute costs by 30–60%. We model your usage patterns and recommend the optimal commitment strategy.",
    points: [
      "Usage pattern analysis across 12 months",
      "RI vs Savings Plan comparison modelling",
      "Convertible vs standard RI recommendations",
      "Continuous utilisation monitoring",
    ],
  },

  {
    icon: offer3,
    title: "Cost Allocation & Tagging",
    description:
      "Without proper tagging, you can't know which teams or products are driving your cloud costs. We build and enforce a tagging strategy that makes every rupee attributable.",
    points: [
      "Tagging taxonomy design and documentation",
      "Automated tag policy enforcement",
      "Cost centre and team level allocation reports",
      "Showback and chargeback implementation",
    ],
  },

  {
    icon: offer4,
    title: "Anomaly Detection & Alerting",
    description:
      "Unexpected spend spikes can add lakhs to your bill before anyone notices. We configure intelligent anomaly detection with tiered alerts so you catch issues in hours, not weeks.",
    points: [
      "ML-based spend anomaly detection",
      "Multi-channel alerts (Slack, email, PagerDuty)",
      "Budget thresholds with escalation rules",
      "Monthly spend forecasting with confidence bands",
    ],
  },

  {
    icon: offer5,
    title: "Multi-Cloud Cost VisibilitySecure Internal Tools",
    description:
      "Running on AWS and Azure? We unify cost data across clouds into a single view  normalised, categorised, and benchmarked against your peers.",
    points: [
      "Unified dashboard across all cloud accounts",
      "Cross-cloud cost normalisation",
      "Service-to-service cost comparisonGDPR & data governance",
      "Executive-ready spend reports,",
    ],
  },

  {
    icon: offer6,
    title: "FinOps Practice Setup",
    description:
      "FinOps is not a tool  it's a culture change. We help engineering, finance, and product teams build the workflows, rituals, and accountability structures that make cost efficiency stick.",
    points: [
      "FinOps team structure and RACI definition",
      "Unit economics framework (cost per customer, feature)",
      "Monthly FinOps review cadence setup",
      "Engineer cost-awareness training",
    ],
  },
];
const steps = [
  {
    step: "01",
    timeframe: "WEEK 1",
    title: "Audit & Baseline",
    desc: "We pull 12 months of billing data, map your architecture, and establish your cost baseline across services, regions, and accounts.",
  },
  {
    step: "02",
    timeframe: "WEEK 2",
    title: "Identify & Prioritise",
    desc: "We rank every savings opportunity by impact and effort  from quick wins (idle resources) to strategic moves (RI purchasing, architectural refactoring).",
  },
  {
    step: "03",
    timeframe: "WEEKS 3–6",
    title: "Implement & Measure",
    desc: "We action the agreed optimisations, track cost changes in real time, and report on actual vs projected savings weekly.",
  },
  {
    step: "04",
    timeframe: "ONGOING",
    title: "Govern & Sustain",
    desc: "We put in place the tagging policies, budget alerts, anomaly detection, and review cadences that prevent cost drift from coming back.",
  },
];

const FinopsCard = () => {
  return (
    <>
      <ServicesGrid
        sectionLabel="What We Offer"
        heading="Full-spectrum cloud financial management."
        description="From one-time audits to ongoing FinOps programme management  every service is designed to deliver measurable savings."
        services={ApplicationsServices}
        tickIcon={tickIcon}
      />
   <section className="finops-approach-section">
  <div className="container">
    <div className="finops-hero-wrapper">
      
      {/* Section Header */}
      <Reveal variant={fadeUp} delay={0.1}>
        <span className="approach-subtitle">OUR APPROACH</span>
        <h2 className="approach-title">
          From audit to ongoing optimisation.
        </h2>
      </Reveal>

      {/* 4-Step Grid Card */}
      <Reveal variant={fadeUp} delay={0.2}>
        <div className="approach-card-wrapper">
          <div className="approach-grid">
            {steps.map((item, index) => (
              <div key={index} className="approach-step-card">
                <span className="approach-step-number">{item.step}</span>
                <span className="approach-timeframe">{item.timeframe}</span>
                <h3 className="approach-step-title">{item.title}</h3>
                <p className="approach-step-desc">{item.desc}</p>

                {/* Flow Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="approach-step-arrow">
                    <FaArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

    </div>
  </div>
</section>
    </>
  );
};

export default FinopsCard;
