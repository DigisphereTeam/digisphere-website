import React, { useState, useEffect } from "react";
import "./DevopsHeroSection.css";
import { FaSyncAlt } from "react-icons/fa";
import { Check } from "lucide-react";
import pen from "../../../assets/devops/devops-label.svg";
import pipelineCard from "../../../assets/devops/pipeline-card.svg";
import metricsCard from "../../../assets/devops/metrics-card.svg";
import kubernetesCard from "../../../assets/devops/kubernetes-card.svg";
import { FaCheck, FaDatabase, FaCog, FaBell, FaCube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";
import Button from "../../../components/Button/Button";
import Pipeline from "../../../assets/devops/Pipeline.svg";
import RecentBuilds from "../../../assets/devops/RecentBuilds.svg";
import {
  Zap,
  Hammer,
  FlaskConical,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
const DevOpsHeroSection = () => {
  const autosteps = [
    { title: "Source", icon: Zap },
    { title: "Build", icon: Check },
    { title: "Test", icon: FlaskConical },
    { title: "Security", icon: ShieldCheck },
    { title: "Deploy", icon: FileText },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    if (activeStep >= autosteps.length) return;

    const timer = setTimeout(() => {
      setCompleted((prev) => [...prev, activeStep]);
      setActiveStep((prev) => prev + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeStep]);
  const metrics = [
    {
      id: 1,
      title: "Deploy Freq.",
      value: 18,
      suffix: "/day",
      change: "↑10x",
      type: "up",
    },
    {
      id: 2,
      title: "MTTR",
      value: 8,
      suffix: " min",
      change: "↓85%",
      type: "down",
    },
    {
      id: 3,
      title: "Failure Rate",
      value: 0.4,
      suffix: "%",
      change: "↓91%",
      type: "down",
    },
  ];
  const [counts, setCounts] = useState(metrics.map(() => 0));
  useEffect(() => {
    metrics.forEach((metric, index) => {
      let start = 0;
      const end = metric.value;
      const duration = 1200;
      const increment = end / (duration / 20);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 20);
    });
  }, []);
  const builds = [
  {
    id: "#920",
    branch: "hotfix/bug",
    title: "feat: new dashboard",
    author: "Divya R.",
    time: "0m 12s",
  },
  {
    id: "#919",
    branch: "main",
    title: "feat: new dashboard",
    author: "Divya R.",
    time: "0m 12s",
  },
  {
    id: "#918",
    branch: "hotfix/bug",
    title: "refactor: services",
    author: "Divya R.",
    time: "0m 12s",
  },
];


  return (
 
      <div className="hero-wrapper">
        <div className="row mt-5">
          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="devops-hero-content">
                <p className="devops-badge">
                  <img src={pen} alt="pen" />
                  DevOps
                </p>

                <h1 className="devops-title">
                  Ship faster.
                  <br />
                  <span>Break less. Scale more.</span>
                </h1>

                <p className="devops-description">
                  CI/CD, Kubernetes, infrastructure-as-code, monitoring, and
                  platform engineering — we modernise your engineering workflow
                  so your team ships with confidence.
                </p>

                <div className="hero-buttons">
                  <Link to="/contact"><Button variant="primary" icon={<FaArrowRight />}>
                    <span>Start DevOps Assessment</span>
                  </Button></Link>

                  <Link to="/contact"><Button variant="secondary">
                    <span>Our Services</span>
                  </Button></Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6 col-12">
            <div className="workflow-wrapper">
              {/* Header */}
              <div className="workflow-header">
                <div className="Onboarding-Workflow">
                  <div className="logo">
                    <img className="Onbord-logo" src={Pipeline} alt="Pipeline" />
                  </div>

                  <div>
                    <h6>CI/CD Pipeline · main branch </h6>
                    <p>Build #848 running</p>
                  </div>
                </div>

                <span className="auto-status">● Active</span>
              </div>
              

              {/* Steps */}
              <div className="autosteps">
                {autosteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div
                      className={`auto-step-card ${
                        completed.includes(index)
                          ? "done"
                          : activeStep === index
                            ? "active"
                            : ""
                      }`}
                    >
                      <div className="icon">
                        {completed.includes(index) ? (
                          <Check size={20} />
                        ) : (
                          (() => {
                            const Icon = step.icon;

                            return (
                              <Icon
                                size={20}
                                className={
                                  activeStep === index ? "rotate-icon" : ""
                                }
                              />
                            );
                          })()
                        )}
                      </div>

                      <h6>{step.title}</h6>
                      <span
                        className={
                          completed.includes(index)
                            ? "status-passed"
                            : activeStep === index
                              ? "status-running"
                              : "status-default"
                        }
                      >
                        {completed.includes(index)
                          ? "Passed"
                          : activeStep === index
                            ? "Running..."
                            : step.subtitle}
                      </span>
                    </div>

                    {index !== autosteps.length - 1 && (
                      <div className="connector"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="workflow-metrics">
                {metrics.map((item, index) => (
                  <div className="metric-cards" key={item.id}>
                    <div className="metric-title">{item.title}</div>

                    <div className="metric-value">
                      {item.value % 1 === 0
                        ? Math.floor(counts[index])
                        : counts[index].toFixed(1)}
                      {item.suffix}
                    </div>

                    <div className={`metric-change ${item.type}`}>
                      {item.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
               <div className="recent-builds-card">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 fw-bold" style={{fontSize:"12px"}}>Recent Builds</h5>
          <small className="text-muted" style={{fontSize:"10px", fontWeight:"700"}}>Updated just now</small>
        </div>

        {builds.map((build) => (
          <div
            key={build.id}
            className="Recent-Builds d-flex justify-content-between  align-items-center"
          >
            <div className="d-flex align-items-center">
              <div className="icon-circle">
                <img src={RecentBuilds} alt="RecentBuilds" className="rotate-icon" />
              </div>

              <div className="ms-3">
                <div className=" devops-hotfix d-flex">
                  <span className="fw-semibold mr-2">{build.id}</span>

                  <span
                    className={`badge ${
                      build.branch === "main"
                        ? "bg-secondary-subtle text-dark"
                        : "bg-light text-secondary border"
                    }`}
                  >
                    {build.branch}
                  </span>
                  
                </div>

                <small className="text-muted">
                  {build.title} - {build.author}
                </small>
              </div>
            </div>

            <small className="text-muted">{build.time}</small>
          </div>
        ))}
      </div>
          </div>
        </div>
      </div>
   
  );
};

export default DevOpsHeroSection;
