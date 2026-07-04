import React from "react";
import "./Fullstackcloud.css"
import FAQSection from "../../../../components/FaqSection/FAQSection";
import tickIcon from "../../../../assets/digital-marketing/tick-icon.svg";
import ServicesGrid from "../../../../components/ServicesGrid/ServicesGrid";
import Cloudigration from "../../../../assets/CloudServiecs/Cloudigration.svg";
import CloudArchitecture from "../../../../assets/CloudServiecs/CloudArchitecture.svg";
import CloudManagement from "../../../../assets/CloudServiecs/CloudManagement.svg";
import DisasterRecovery from "../../../../assets/CloudServiecs/DisasterRecovery.svg";
import CloudSecurity from "../../../../assets/CloudServiecs/CloudManagement.svg";
import CloudOptimisation from "../../../../assets/CloudServiecs/CloudOptimisation.svg";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { text } from "framer-motion/client";
const Fullstackcloud = () => {
    const toolchainData = [
    {
      title: "AWS Logo",
      tools: ["Amazon Web Services"],
      text:["EC2, RDS, Lambda, S3, CloudFront, EKS, Route53"],
    },
    {
      title: "Azure Logo",
      tools: ["Microsoft Azure"],
      text:["App Services, AKS, Azure SQL, Blob, Active Directory"],
    },
    {
      title: "GCP Logo",
      tools: ["Google Cloud Platform"],
      text:["Compute Engine, GKE, Cloud SQL, BigQuery, Cloud Run"],
    },
   
  ];
  const devopsServices = [
    {
      icon: Cloudigration,
      title: "Cloud Migration",
      description:
        "We migrate your on-premise infrastructure to AWS, Azure, or Google Cloud with zero downtime — assessing, planning, and executing migrations that protect business continuity.",
      points: [
        "Discovery & dependency mapping",
        "Zero-downtime migration strategy",
        "Post-migration validation",
      ],
    },
    {
      icon: CloudArchitecture,
      title: "Cloud Architecture",
      description:
        "Purpose-built cloud architectures for your workload — multi-tier VPCs, serverless functions, containerised microservices, and managed database clusters.",
      points: [
        "Well-Architected Review",
        "Cost optimisation design",
        "Auto-scaling configuration",
      ],
    },
    {
      icon: CloudManagement,
      title: "Cloud Management",
      description:
        "Ongoing cloud operations — monitoring, cost management, capacity planning, patching, and incident response — delivered as a managed service.",
      points: [
        "24/7 monitoring & alerting",
        "Monthly cost reports",
        "SLA-backed support",
      ],
    },
    {
      icon: DisasterRecovery,
      title: "Disaster Recovery",
      description:
        "Backup strategies, replication, and failover architectures that meet your RTO and RPO requirements — so a single failure can never stop your business.",
      points: [
        "RTO/RPO-based design",
        "Automated backup verification",
        "DR drill execution",
      ],
    },
    {
      icon: CloudSecurity,
      title: "Cloud Security",
      description:
        "IAM policies, network security groups, WAF configuration, encryption at rest and in transit, and compliance posture for AWS, Azure, and GCP environments.",
      points: [
        "Security posture assessment",
        "IAM hardening",
        "Compliance framework alignment",
      ],
    },
    {
      icon: CloudOptimisation,
      title: "Cloud Optimisation",
      description:
        "Audit your existing cloud spend and eliminate waste. We find rightsizing opportunities, reserved instance strategies, and architecture changes that cut bills by 20–40%.",
      points: [
        "Cost audit & analysis",
        "Rightsizing recommendations",
        "Reserved instance planning",
      ],
    },
  ];
  const MarketingFaqData = [
    {
      question: "Which cloud provider do you recommend?",
      answer:
        "I recommend Amazon Web Services (AWS) because it offers the widest range of cloud services and a highly reliable global infrastructure. It is suitable for startups, enterprises, and individual developers alike. AWS provides excellent scalability, strong security features, and extensive documentation. Its large community and broad industry adoption also make it easier to learn and find support.",
    },
    {
      question: "How long does a cloud migration take?",
      answer:
        "A cloud migration typically takes a few weeks to several months, depending on the size and complexity of the application or organization. Small projects may be completed in 2–6 weeks, while larger enterprise migrations can take 3–12 months or more. Careful planning, testing, and deployment help ensure a smooth and successful migration.",
    },
    {
      question: "Will we experience downtime during migration?",
      answer:
        "Downtime depends on the migration strategy used. Many cloud migrations can be performed with minimal or no downtime by using techniques such as data replication, phased migration, and cutover planning. For more complex systems, a short maintenance window may be required. Proper planning and testing help minimize disruptions to users.",
    },
    {
      question: "Can you manage our cloud after migration?",
      answer:
        "Yes, we can manage your cloud environment after migration. This typically includes monitoring, security updates, performance optimization, backups, cost management, and ongoing technical support. Continuous management helps ensure your cloud infrastructure remains secure, reliable, and efficient.",
    },
  ];

  return (
    <>
      <section>
        <ServicesGrid
          sectionLabel="What We Offer"
          heading="Full-stack cloud expertise."
          services={devopsServices}
          tickIcon={tickIcon}
        />
      </section>
       <section className="toolchain-section">
        <div className="container">
          <div className="toolchain-header">
            <span className="toolchain-label">Platforms</span>

            <h2 className="toolchain-title">
              Certified across all major clouds.
            </h2>
          </div>

          <div className="row g-4">
            {toolchainData.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Reveal variant={fadeUp} delay={index*0.15}>
                <div className="toolchain">
                  <h1>{item.title}</h1>

                  <h6> 
                    {item.tools.map((tool, idx) => (
                      <p key={idx}>{tool}</p>
                    ))}
                  </h6>
                  <p>
                    {item.text.map((text,idx) =>(
                        <span key={idx}>{text}</span>
                    ))}
                  </p>
                </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <FAQSection
          eyebrow="FAQ"
          title="Cloud questions answered."
          description="Complex cloud decisions need honest advice. "
          linkText="Talk to our architects."
          link="/contact"
          faqs={MarketingFaqData}
        />
      </div>
      <div className="marketing-banner-section">
        <h2 className="marketing-banner-header">
          Ready to modernise your infrastructure?{" "}
        </h2>
        <p className="marketing-banner-description">
          Start with a free cloud assessment. We'll review your current
          infrastructure and give you a migration or optimisation roadmap.
        </p>
        <div className="marketing-btn">
          <button>
            Get Free Cloud Assessment <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Fullstackcloud;
