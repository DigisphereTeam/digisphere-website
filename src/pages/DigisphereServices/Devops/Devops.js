import React from 'react'
import './Devops.css'
import Counter from '../../../components/Counter/Counter';
import Reveal from '../../../animations/Reveal';
import { fadeUp } from '../../../animations/variants';
import ServicesGrid from '../../../components/ServicesGrid/ServicesGrid';
import tickIcon from "../../../assets/digital-marketing/tick-icon.svg";
import devopsIcon1 from "../../../assets/devops/devops-icon1.svg";
import devopsIcon2 from "../../../assets/devops/devops-icon2.svg";
import devopsIcon3 from "../../../assets/devops/devops-icon3.svg";
import devopsIcon4 from "../../../assets/devops/devops-icon4.svg";
import devopsIcon5 from "../../../assets/devops/devops-icon5.svg";
import devopsIcon6 from "../../../assets/devops/devops-icon6.svg";
import { FaArrowRight } from 'react-icons/fa';

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
  return (
    <div className='devops-page'>
        <section className='devops-hero-section'>
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
        <section className="marketing-banner-section">
                <h2 className="marketing-banner-header">
                  Ready to modernise your engineering workflow?
                </h2>
                <p className="marketing-banner-description">
                  Start with a free DevOps maturity assessment. We'll benchmark your current practices 
                  and give you a prioritised improvement roadmap.
                </p>
                <div className="marketing-btn">
                  <button>
                    Get Devops Assessment <FaArrowRight />
                  </button>
                </div>
              </section>
    </div>
  )
}
export default Devops;