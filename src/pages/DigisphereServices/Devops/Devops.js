import React from "react";
import "./Devops.css";
import Counter from "../../../components/Counter/Counter";
import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";
import ServicesGrid from "../../../components/ServicesGrid/ServicesGrid";
import tickIcon from "../../../assets/digital-marketing/tick-icon.svg";
import devopsIcon1 from "../../../assets/devops/devops-icon1.svg";
import devopsIcon2 from "../../../assets/devops/devops-icon2.svg";
import devopsIcon3 from "../../../assets/devops/devops-icon3.svg";
import devopsIcon4 from "../../../assets/devops/devops-icon4.svg";
import devopsIcon5 from "../../../assets/devops/devops-icon5.svg";
import devopsIcon6 from "../../../assets/devops/devops-icon6.svg";
import { FaArrowRight } from "react-icons/fa";
import FAQSection from "../../../components/FaqSection/FAQSection";
import DevOpsHeroSection from "./DevopsHeroSection";
import { Link } from "react-router-dom";

const Devops = () => {
  const devopsStats = [
    {
      end: 10,
      suffix: "x",
      label: "Avg. deployment frequency increase",
    },
    {
      end: 85,
      suffix: "%",
      label: "Reduction in deployment failures",
    },
    {
      end: 30,
      suffix: "%",
      label: "Avg. infrastructure cost reduction",
    },
    {
      end: 45,
      suffix: "+",
      label: "DevOps transformations delivered",
    },
  ];
  const devopsServices = [
    {
      icon: devopsIcon1,
      title: "CI/CD Pipeline Design",
      description:
        "Automated build, test, and deployment pipelines that cut release cycles from weeks to hours — with quality gates, rollback mechanisms, and full audit trails.",
      points: [
        "GitHub Actions / GitLab CI / Jenkins",
        "Automated testing integration",
        "Blue/green & canary deployments",
      ],
    },
    {
      icon: devopsIcon2,
      title: "Containerisation & Kubernetes",
      description:
        "Containerise your applications and orchestrate them with Kubernetes — scalable, portable, and resilient deployments across any cloud environment.",
      points: [
        "Docker containerisation",
        "Kubernetes cluster management",
        "Helm chart development",
      ],
    },
    {
      icon: devopsIcon3,
      title: "Infrastructure as Code",
      description:
        "Version-controlled, reproducible infrastructure using Terraform and Ansible — eliminate configuration drift and make infrastructure changes auditable and reversible.",
      points: [
        "Terraform module library",
        "Ansible playbooks",
        "GitOps workflow setup",
      ],
    },
    {
      icon: devopsIcon4,
      title: "Monitoring & Observability",
      description:
        "Full-stack observability — metrics, logs, traces, and dashboards — using Prometheus, Grafana, ELK Stack, or Datadog so you can see and fix problems fast.",
      points: [
        "Prometheus + Grafana setup",
        "Centralised logging (ELK)",
        "SLI/SLO definition & tracking",
      ],
    },
    {
      icon: devopsIcon5,
      title: "DevSecOps",
      description:
        "Security built into the pipeline — SAST/DAST scanning, container vulnerability scanning, secrets management, and compliance-as-code for regulated environments.",
      points: [
        "SAST/DAST integration",
        "Container image scanning",
        "HashiCorp Vault setup",
      ],
    },
    {
      icon: devopsIcon6,
      title: "Platform Engineering",
      description:
        "Internal developer platforms that give your engineering teams self-service capabilities — provisioning, deployment, and monitoring without waiting on ops.",
      points: [
        "Internal developer portal",
        "Self-service provisioning",
        "Golden path templates",
      ],
    },
  ];
  const toolchainData = [
    {
      title: "CI/CD",
      tools: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
    },
    {
      title: "Containers",
      tools: ["Docker", "Kubernetes", "Helm", "Rancher"],
    },
    {
      title: "IaC",
      tools: ["Terraform", "Ansible", "Pulumi", "AWS CDK"],
    },
    {
      title: "Observability",
      tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    },
  ];
  const DevopsFaqData = [
    {
      question: "Our team has never used Kubernetes. Can you still help?",
      answer:
        "Absolutely. Many of our clients start with little or no Kubernetes experience. We guide your team through every stage — from architecture design and cluster setup to training and documentation. Our goal is not only to implement Kubernetes successfully but also to empower your team with the knowledge and confidence to manage it effectively over time.",
    },
    {
      question: "How long does it take to set up a CI/CD pipeline?",
      answer:
        "The timeline depends on the complexity of your application and existing infrastructure. For most projects, an initial CI/CD pipeline can be implemented within 1–3 weeks. More advanced workflows involving automated testing, security scanning, multi-environment deployments, and rollback strategies may take longer. We focus on delivering quick wins first, then continuously improving the pipeline as your needs evolve.",
    },
    {
      question: "Do you work with existing development teams?",
      answer:
        "Yes. We work as an extension of your development team rather than replacing it. Whether you have in-house developers, outsourced teams, or a hybrid setup, we collaborate closely to streamline workflows, improve deployment processes, and introduce DevOps best practices that help everyone deliver software faster and more reliably.",
    },
    {
      question: "Can you help us reduce our cloud bill?",
      answer:
        "Definitely. Cloud cost optimization is a key part of our DevOps approach. We analyze your infrastructure, identify underutilized resources, optimize workloads, implement auto-scaling strategies, and improve resource allocation. Many clients achieve significant cost savings while maintaining or even improving application performance, reliability, and scalability.",
    },
  ];
  return (
    <div className="devops-page">
      <section className="devops-hero-section">
        <DevOpsHeroSection />
        <div
          className="container-fluid mt-5 px-5"
          style={{ backgroundColor: "#0F172A" }}
        >
          <div className="row g-4">
            {devopsStats.map((item, index) => (
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
          sectionLabel="OUR CAPABILITIES"
          heading="End-to-end Devops Engineering."
          services={devopsServices}
          tickIcon={tickIcon}
        />
      </section>
      <section className="toolchain-section">
        <div className="container">
          <div className="toolchain-header">
            <span className="toolchain-label">TOOLCHAIN</span>

            <h2 className="toolchain-title">
              Industry-standard tools, expertly
              <br />
              configured.
            </h2>
          </div>

          <div className="row g-4">
            {toolchainData.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <Reveal variant={fadeUp} delay={index*0.15}>
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
      <section>
        <FAQSection
          eyebrow="FAQ"
          title="DevOps questions answered."
          description="complex devops decisions?"
          linkText="Talk to our engineers"
          link="/contact"
          faqs={DevopsFaqData}
        />
      </section>
      <section className="marketing-banner-section">
        <h2 className="marketing-banner-header">
          Ready to modernise your engineering workflow?
        </h2>
        <p className="marketing-banner-description">
          Start with a free DevOps maturity assessment. We'll benchmark your
          current practices and give you a prioritised improvement roadmap.
        </p>
        <div className="marketing-btn">
          <Link to="/contact"><button>
            Get Devops Assessment <FaArrowRight />
          </button></Link>
        </div>
      </section>
    </div>
  );
};
export default Devops;
