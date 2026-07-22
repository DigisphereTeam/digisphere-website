import React from "react";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import ServicesGrid from "../../../../components/ServicesGrid/ServicesGrid";
import tickIcon from "../../../../assets/digital-marketing/tick-icon.svg";
import webaplication1 from "../../../../assets/Webapplication/webapplication1.svg";
import webaplication2 from "../../../../assets/Webapplication/webapplication2.svg";
import webaplication3 from "../../../../assets/Webapplication/webapplication3.svg";
import webaplication4 from "../../../../assets/Webapplication/webaplication4.svg";
import webaplication5 from "../../../../assets/Webapplication/webaplication5.svg";
import webaplication6 from "../../../../assets/Webapplication/webaplication6.svg";
const WebApplicationCards = () => {
  const ApplicationsServices = [
    {
      icon: webaplication1,
      title: "Business Dashboards & Portals",
      description:
        "Internal tools that replace spreadsheets—role-based dashboards, reporting portals, and operational management interfaces built for your team.",
      points: [
        "Role-based access control",
        "Real-time data views",
        "Export & reporting built-in",
      ],
    },

    {
      icon: webaplication2,
      title: "Customer Portals",
      description:
        "Branded self-service portals for your clients—order tracking, document management, ticketing, billing, and account management in one place.",
      points: [
        "White-labelled & branded",
        "Integration with your CRM/ERP",
        "Mobile-responsive",
      ],
    },

    {
      icon: webaplication3,
      title: "Custom CRMs & ERPs",
      description:
        "When off-the-shelf doesn't fit your workflow, we build custom CRM and ERP systems designed around your exact processes—not the other way around.",
      points: [
        "Fully custom data models",
        "Workflow automation built-in",
        "API integrations",
      ],
    },

    {
      icon: webaplication4,
      title: "SaaS Product Development",
      description:
        "From MVP to multi-tenant SaaS—we help startups and enterprises build software products with subscription billing, onboarding, and feature flags.",
      points: [
        "Multi-tenancy architecture",
        "Stripe/Recurring billing",
        "Feature flag management",
      ],
    },

    {
      icon: webaplication5,
      title: "Secure Internal Tools",
      description:
        "Compliance-ready internal applications with audit logs, role-based access, SSO integration, and data governance policies built in from day one.",
      points: [
        "SOC 2 & GDPR integration",
        "Full audit trail",
        "GDPR & data governance",
      ],
    },

    {
      icon: webaplication6,
      title: "API & Integration Layer",
      description:
        "Middleware, API gateways, and integration services that connect your software stack—CRM, ERP, logistics, payment, and third-party platforms.",
      points: [
        "REST & GraphQL APIs",
        "Webhook management",
        "Third-party integrations",
      ],
    },
  ];
  const toolchainData = [
    {
      title: "Frontend",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      tools: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
    },
    {
      title: "Cloud",
      tools: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      title: "Security",
      tools: ["Auth0", "Keycloak", "SSO", "Encryption at rest"],
    },
  ];

  return (
    <>
      <ServicesGrid
        sectionLabel="What We Do"
        heading="Custom software for real workflows."
        services={ApplicationsServices}
        tickIcon={tickIcon}
      />
      <section className="toolchain-section">
        <div className="container">
          <div className="toolchain-header">
            <span className="toolchain-label">Technology</span>

            <h2 className="toolchain-title">Modern, battle-tested stack.</h2>
          </div>

          <div className="row g-4">
            {toolchainData.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <Reveal variant={fadeUp} delay={index * 0.15}>
                  <div className="toolchain-card">
                    <h3>{item.title}</h3>

                    <ul>
                      {item.tools.map((tool, idx) => (
                        <li key={idx}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebApplicationCards;
