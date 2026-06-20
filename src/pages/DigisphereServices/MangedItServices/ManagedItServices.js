import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Counter from "../../../components/Counter/Counter";
import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";
import FAQSection from "../../../components/FaqSection/FAQSection";
import ServicesGrid from "../../../components/ServicesGrid/ServicesGrid";

import tickIcon from "../../../assets/digital-marketing/tick-icon.svg"
import helpDeskIcon from "../../../assets/managed-it/helpdesk-icon.svg"
import endpointIcon from "../../../assets/managed-it/endpoint-icon.svg"
import serverNetworkIcon from "../../../assets/managed-it/servernetwork-icon.svg"
import backupRecoveryIcon from "../../../assets/managed-it/backup-icon.svg"
import softwareLicenceIcon from "../../../assets/managed-it/software-licence-icon.svg"
import itStrategyIcon from "../../../assets/managed-it/itstrategy-icon.svg"

const ManagedItServices = () => {
  const marketingStats = [
    {
      prefix: "<",
      end: 2,
      suffix: "hr",
      label: "Critical issue response time",
    },
    {
      end: 99.2,
      suffix: "%",
      label: "First contact resolution rate",
    },
    {
      end: 150,
      suffix: "+",
      label: "Businesses supported",
    },
    {
      end: 4.8,
      suffix: "/5",
      label: "Client satisfaction score",
    },
  ];

  const itServices = [
  {
    icon: helpDeskIcon,
    title: "IT Help Desk Support",
    description:
      "Single point of contact for all employee IT issues — hardware, software, connectivity, and account management — resolved fast so your team stays productive.",
    points: [
      "8am–8pm support (SLA-backed)",
      "Remote & on-site resolution",
      "Ticketing & tracking system",
    ],
  },
  {
    icon: endpointIcon,
    title: "Endpoint Management",
    description:
      "Centrally managed desktops, laptops, and mobile devices — software deployment, patch management, security policies, and asset tracking across your fleet.",
    points: [
      "MDM/UEM platform setup",
      "Automated patch management",
      "Device health monitoring",
    ],
  },
  {
    icon: serverNetworkIcon,
    title: "Server & Network Management",
    description:
      "Proactive management of your on-premise servers, network switches, firewalls, and Wi-Fi infrastructure — monitoring, patching, and performance optimisation.",
    points: [
      "24/7 monitoring",
      "Network performance reporting",
      "Firmware & patch management",
    ],
  },
  {
    icon: backupRecoveryIcon,
    title: "Backup & Recovery",
    description:
      "Automated, verified backups with documented recovery procedures — protecting your business data against hardware failure, ransomware, and human error.",
    points: [
      "Daily automated backups",
      "Backup verification testing",
      "Documented RTO/RPO",
    ],
  },
  {
    icon: softwareLicenceIcon,
    title: "Software & Licence Management",
    description:
      "Inventory, procurement, and compliance management for all software licences — eliminating audit risk and ensuring your team always has the tools they need.",
    points: [
      "Licence inventory audit",
      "Renewal management",
      "Usage optimisation",
    ],
  },
  {
    icon: itStrategyIcon,
    title: "IT Strategy & Consulting",
    description:
      "Quarterly business reviews, technology roadmap planning, and budgeting guidance from a virtual CTO who understands your business context.",
    points: [
      "Quarterly IT reviews",
      "3-year technology roadmap",
      "Budget planning support",
    ],
  },
];

  const ItServicesFaqData = [
    {
      question: "Do you provide on-site support?",
      answer:
        "Yes. While we resolve the majority of technical issues remotely for faster turnaround times, we provide on-site support whenever a physical presence is required for hardware installations, network setups, or critical troubleshooting.",
    },
    {
      question: "What is your typical response time?",
      answer:
        "Our response times depend on the severity of the issue. Critical, business-disrupting problems are addressed immediately, typically within 15–30 minutes, while standard support requests are usually responded to within 1–2 hours.",
    },
    {
      question: "Can you take over from our current IT provider?",
      answer:
        "Absolutely. We can seamlessly transition management from your existing IT provider. Our comprehensive onboarding process involves auditing your current infrastructure, documenting your systems, and ensuring a smooth handoff with zero downtime or disruption to your daily operations.",
    },
    {
      question: "Do you support Mac, Linux, and Windows environments?",
      answer:
        "Yes, we provide full cross-platform support. Our team is highly experienced in managing, securing, and maintaining Windows, macOS, and Linux environments, including mixed networks and hybrid infrastructures.",
    },
  ];

  return (
    <div className="managed-it-services-page">
      <section>
        <div
          className="container-fluid mt-5 px-5"
          style={{ backgroundColor: "#0F172A" }}
        >
          <div className="row g-4">
            {marketingStats.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <Reveal variant={fadeUp} delay={index * 0.1}>
                  <div className="marketing-stat-card">
                    <h3 className="marketing-stat-number">
                      <Counter
                        end={item.end}
                        prefix={item.prefix || ""}
                        suffix={item.suffix || ""}
                      />
                    </h3>

                    <p className="marketing-stat-label">{item.label}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <ServicesGrid
      sectionLabel="WHAT'S INCLUDED"
      heading="Everything your IT needs, covered."
      services={itServices}
      tickIcon={tickIcon}
    />
      </section>
      <section>
        <FAQSection
          eyebrow="FAQ"
          title="IT support questions."
          description="Questions about our services levels?"
          linkText="Let's talk."
          link="/contact"
          faqs={ItServicesFaqData}
        />
      </section>
      <section className="marketing-banner-section">
        <h2 className="marketing-banner-header">
          Tired of reactive firefighting?
        </h2>
        <p className="marketing-banner-description">
          Switch to a proactive managed IT partner. Start with a free IT
          environment assessment.
        </p>
        <div className="marketing-btn">
          <button>
            Book Free IT Assessment <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};
export default ManagedItServices;
