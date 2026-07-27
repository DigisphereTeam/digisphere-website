import React from "react";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import ServicesGrid from "../../../../components/ServicesGrid/ServicesGrid";
import tickIcon from "../../../../assets/digital-marketing/tick-icon.svg";
import FAQSection from "../../../../components/FaqSection/FAQSection";
import { FaArrowRight } from "react-icons/fa";
import Process from "../../../../assets/Automation/Process Automation.svg";
import System from "../../../../assets/Automation/System.svg";
import NotificationAutomation from "../../../../assets/Automation/NotificationAutomation.svg";
import Report from "../../../../assets/Automation/Report Automation.svg";
import Calendar from "../../../../assets/Automation/Calendar Automation.svg";
import Engines from "../../../../assets/Automation/Engines.svg";
import BookingSection from "../../../../components/BookingSection/BookingSection.js"
import { Link } from "react-router-dom";
const devopsServices = [
  {
    icon: Process,
    title: "Process Automation",
    description:
      "Map, document, and automate your most time-consuming manual workflows — approvals, data entry, report generation, and inter-department handoffs.",
    points: [
      "Process mapping & documentation",
      "RPA implementation",
      "Human-in-the-loop design",
    ],
  },
  {
    icon: System,
    title: "System Integration Automation",
    description:
      "Eliminate double-entry and data silos by automating the flow of information between your CRM, ERP, accounting software, and customer-facing systems.",
    points: [
      "Bi-directional sync",
      "Error handling & retry logic",
      "Integration monitoring",
    ],
  },
  {
    icon: NotificationAutomation,
    title: "Alert & Notification Automation",
    description:
      "Build intelligent alert systems — SLA breach notifications, inventory threshold alerts, payment reminders — delivered via email, WhatsApp, or Slack.",
    points: [
      "Multi-channel delivery",
      "Escalation logic",
      "Custom trigger conditions",
    ],
  },
  {
    icon: Report,
    title: "Document & Report Automation",
    description:
      "Automatically generate invoices, reports, contracts, and compliance documents from your data — and distribute them to the right people, on schedule.",
    points: [
      "PDF/Excel generation",
      "Email & WhatsApp delivery",
      "Template management",
    ],
  },
  {
    icon: Calendar,
    title: "Scheduling & Calendar Automation",
    description:
      "Appointment booking, resource scheduling, and shift management systems that reduce back-and-forth and keep operations running on time.",
    points: [
      "Self-serve booking portals",
      "Calendar sync (Google/Outlook)",
      "Automated reminders",
    ],
  },
  {
    icon: Engines,
    title: "Custom Workflow Engines",
    description:
      "For complex multi-step business processes — loan approvals, procurement, quality inspections — we build bespoke workflow engines with full audit trails.",
    points: [
      "Configurable workflow rules",
      "Approval routing",
      "Compliance audit trail",
    ],
  },
];
const toolchainData = [
  {
    title: "Finance",
    tools: [
      "Auto-generate client statements and send via email/WhatsApp on month-end",
    ],
  },
  {
    title: "Healthcare",
    tools: [
      "Patient appointment reminders + pre-visit documentation collection",
    ],
  },
  {
    title: "Manufacturing",
    tools: ["Quality inspection sign-off workflows with automatic escalation"],
  },
  {
    title: "Real Estate",
    tools: [
      "Lead routing, document collection, and contract generation pipeline",
    ],
  },
  {
    title: "Education",
    tools: [
      "Admission workflows — from application to fee collection to enrollment",
    ],
  },
  {
    title: "Logistics",
    tools: [
      "Delivery status alerts and auto-invoice generation on shipment completion",
    ],
  },
];
const FaqData = [
  {
    question: "What tools do you use to build automations?",
    answer:
      "Absolutely. Many of our clients start with little or no Kubernetes experience. We guide your team through every stage — from architecture design and cluster setup to training and documentation. Our goal is not only to implement Kubernetes successfully but also to empower your team with the knowledge and confidence to manage it effectively over time.",
  },
  {
    question: "Do we need to change our existing software?",
    answer:
      "Not necessarily. In most cases, automations are designed to work with your existing software by connecting through APIs, webhooks, or built-in integrations. If your current systems support these, there's usually no need to replace them. If a platform has limited integration capabilities, we can often use custom connectors or alternative methods to make it work. The best approach depends on your current software stack and the specific automation you want to implement.",
  },
  {
    question: "How long does it take to build an automation?",
    answer:
      "The timeline depends on the complexity of the automation. Simple workflows can often be built in a few hours to 1–2 days, while more complex automations involving multiple systems, custom APIs, or advanced business logic may take 1–4 weeks. After understanding your requirements, I can provide a more accurate timeline and project estimate.",
  },
  {
    question: "Can you help us reduce our cloud bill?",
    answer:
      "Yes. I can help identify opportunities to reduce your cloud costs by analyzing your current infrastructure, usage patterns, and billing data. Common optimizations include rightsizing resources, eliminating unused or idle services, optimizing storage, implementing auto-scaling, using reserved or savings plans where appropriate, and improving workload efficiency. After reviewing your environment, I can recommend cost-saving strategies tailored to your needs without compromising performance or reliability.",
  },
];
const AutomationEveryType = () => {
  return (
    <>
      <section>
        <ServicesGrid
          sectionLabel="What We Automate"
          heading="Every type of business process."
          services={devopsServices}
          tickIcon={tickIcon}
        />
      </section>
      <section className="toolchain-section">
        <div className="container">
          <div className="toolchain-header">
            <span className="toolchain-label">By Industry</span>

            <h2 className="toolchain-title">Automation for every sector.</h2>
          </div>

          <div className="row g-4">
            {toolchainData.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Reveal className="h-100" variant={fadeUp} delay={index * 0.15}>
                  <div className="toolchain-card">
                    <h3>{item.title}</h3>

                    <div>
                      {item.tools.map((tool, idx) => (
                        <p key={idx}>{tool}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <FAQSection
          eyebrow="FAQ"
          title="Automation questions."
          description="Not sure if your process can be automated?"
          linkText="Let's find out."
          link="/contact"
          faqs={FaqData}
        />
      </section>
      <BookingSection
        title="Ready to automate your busiest workflows?"
        description="Start with a free process audit. We'll map your workflows and identify the top 3 automation opportunities with estimated time savings."
        buttonText="Book Free Process Audit "
        buttonLink="/contact"
      />
    </>
  );
};

export default AutomationEveryType;
