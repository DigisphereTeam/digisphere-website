import React from "react";
import ServicesGrid from "../../../../components/ServicesGrid/ServicesGrid";
import tickIcon from "../../../../assets/digital-marketing/tick-icon.svg";
import business from "../../../../assets/AI-Powered/AIBusiness.svg";
import Intelligent from "../../../../assets/AI-Powered/Intelligent.svg";
import document from "../../../../assets/AI-Powered/Document.svg";
import Predictive from "../../../../assets/AI-Powered/Predictive.svg";
import reporting from "../../../../assets/AI-Powered/Reporting.svg";
import AIStrategy from "../../../../assets/AI-Powered/AIStrategy.svg";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import ProcessCards from "../../../../components/ProcessCards/ProcessCards";
import FAQSection from "../../../../components/FaqSection/FAQSection";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BookingSection from "../../../../components/BookingSection/BookingSection.js"


const AICapabilities = () => {
  const MarketingProcessSteps = [
    {
      number: "01",
      title: "AI Audit",
      description:
        "We assess your data quality, existing systems, compliance requirements, and identify the highest-ROI AI opportunities.",
    },
    {
      number: "02",
      title: "Prototype",
      description:
        "A working proof-of-concept within 2 weeks so you can see the AI in action with your actual data before committing to full build.",
    },
    {
      number: "03",
      title: "Build & Train",
      description:
        "Full development — model selection, prompt engineering, RAG pipeline, integrations, testing, and safety guardrails.",
    },
    {
      number: "04",
      title: "Deploy & Monitor",
      description:
        "Production deployment with dashboards tracking accuracy, usage, and business impact. Ongoing fine-tuning based on real usage.",
    },
  ];
  const MarketingFaqData = [
    {
      question: "Do you build AI from scratch or use existing models?",
      answer:
        "OpenAI develops and trains its own AI models from scratch, including the GPT family of models that powers ChatGPT. The models are built using large-scale machine learning and extensive research by OpenAI. At the same time, OpenAI builds on decades of scientific advances from the broader AI research community. This combination of original model development and existing research enables ChatGPT to perform a wide range of language and reasoning tasks.",
    },
    {
      question: "How do you handle data privacy with AI?",
      answer:
        "Data privacy is handled by protecting personal and sensitive information throughout the AI process. This includes using encryption, secure storage, and strict access controls to safeguard data. Organizations should also comply with privacy regulations and collect only the data necessary for their purpose. Regular monitoring and security updates help maintain data privacy and prevent unauthorized access.",
    },
    {
      question: "How accurate are AI document extraction systems?",
      answer:
        "AI document extraction systems are highly accurate, often achieving over 90% accuracy on well-structured documents. Their performance depends on factors such as document quality, layout, and handwriting clarity. Modern AI models can extract text, tables, and key information with minimal manual effort. Regular training and validation further improve accuracy and reliability over time.",
    },
    {
      question: "Can AI solutions integrate with our existing software?",
      answer:
        "Yes, AI solutions can integrate with most existing software using APIs, SDKs, or custom integrations. They can work with CRM, ERP, cloud platforms, databases, and other business applications. This enables organizations to automate workflows, improve efficiency, and enhance decision-making without replacing their current systems. The integration approach depends on the software and business requirements.",
    },
  ];
  const devopsServices = [
    {
      icon: business,
      title: "AI Business Assistants",
      description:
        "Custom AI copilots trained on your company data — answering employee questions, retrieving documents, and automating internal knowledge workflows.",
      points: [
        "Trained on your documents & SOPs",
        "Slack/Teams/WhatsApp integration",
        "Role-based access control",
      ],
    },
    {
      icon: Intelligent,
      title: "Intelligent Chatbots",
      description:
        "AI-powered customer support chatbots that understand context, handle complex queries, and escalate to humans only when necessary — 24/7.",
      points: [
        "LLM-powered, not rule-based",
        "Multilingual support",
        "CRM integration & handoff",
      ],
    },
    {
      icon: document,
      title: "Document Intelligence",
      description:
        "Extract, classify, and act on information from unstructured documents — invoices, contracts, forms, and reports — without human review.",
      points: [
        "OCR + LLM extraction",
        "Structured output APIs",
        "Confidence scoring & human review",
      ],
    },
    {
      icon: Predictive,
      title: "Predictive Analytics",
      description:
        "ML models trained on your historical data to forecast demand, predict churn, flag anomalies, and surface insights that spreadsheets miss.",
      points: [
        "Custom model training",
        "Explainable predictions",
        "Dashboard integration",
      ],
    },
    {
      icon: reporting,
      title: "AI-Powered Reporting",
      description:
        "Natural language interfaces for your data — ask questions in plain English and get structured reports, charts, and insights automatically generated.",
      points: [
        "Natural language queries",
        "Auto-generated visualisations",
        "Scheduled digest delivery",
      ],
    },
    {
      icon: AIStrategy,
      title: "AI Integration & Strategy",
      description:
        "Not sure where AI fits in your business? We audit your operations, identify high-ROI AI use cases, and build a prioritised AI roadmap.",
      points: [
        "AI readiness assessment",
        "Use case prioritisation",
        "Build vs. buy recommendations",
      ],
    },
  ];
  return (
    <>
      <section>
        <ServicesGrid
          sectionLabel="Our AI Capabilities"
          heading="AI that works in your context."
          services={devopsServices}
          tickIcon={tickIcon}
        />
      </section>
      <section>
        <div className="marketing-process-wrapper">
          <div className="container py-4">
            <div className="cardsfaq-header">
              <span className="cardsfaq-subtitle">How We Work </span>

              <h2 className="cardsfaq-title">
                From use case to production in 6–10 weeks.
              </h2>
            </div>

            <ProcessCards
              cards={MarketingProcessSteps}
              colClass="col-12 col-sm-6 col-lg-3"
            />
          </div>
        </div>
        <div>
          <FAQSection
            eyebrow="FAQ"
            title="AI questions, answered honestly."
            description="We'll tell you if AI is not the right solution."
            linkText=" Ask us anything."
            link="/contact"
            faqs={MarketingFaqData}
          />
        </div>
      <BookingSection
        title="Curious what AI can do for your business?"
        description="Book a free 45-minute AI strategy session. We'll review your operations and identify your top 3 AI opportunities with honest ROI estimates."
        buttonText="Book AI Strategy Session "
        buttonLink="/contact"
      />
      </section>
    </>
  );
};

export default AICapabilities;
