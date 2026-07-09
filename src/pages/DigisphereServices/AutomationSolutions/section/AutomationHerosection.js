import "./AutomationHerosection.css";
import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import Counter from "../../../../components/Counter/Counter";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import AutomationSolutions from "../../../../assets/servicesDropdown/AutomationSolutions.svg";
import Onboarding from "../../../../assets/Automation/Onboarding Workflow.svg";
import Onboard from "../../../../assets/Automation/Onboarding.svg";
import Automations from "../../../../assets/Automation/Automations.svg";
import { motion } from "framer-motion";
import { FaCheck, FaDatabase, FaCog, FaBell, FaCube } from "react-icons/fa";
import { Zap, CheckCircle, Settings, Bell, FileText } from "lucide-react";

const AutomationHerosection = () => {
  const stats = [
    {
      end: 14,
      suffix: " hrs",
      label: "Average weekly time saved per team",
    },
    {
      end: 60,
      suffix: "+",
      label: "Automations deployed across clients",
    },
    {
      end: 98,
      suffix: "%",
      label: "Automation uptime rate",
    },
    {
      end: 6,
      suffix: "mo",
      label: "Average ROI payback period",
    },
  ];
    const autosteps = [
      { title: "Trigger", subtitle: "Form submitted", icon: Zap },
      { title: "Validate", subtitle: "Check data", icon: Check },
      { title: "Process", subtitle: "Transform", icon: Settings },
      { title: "Notify", subtitle: "Send alert", icon: Bell },
      { title: "Log", subtitle: "Save to CRM", icon: FileText },
    ];
    const automations = [
    {
      id: 1,
      name: "Invoice Generation",
      schedule: "Daily 11pm",
      color: "#10B981",
      status: "Success",
      time: "2m ago",
    },
    {
      id: 2,
      name: "Lead Assignment",
      schedule: "Real-time",
      color: "#3B82F6",
      status: "Running...",
      time: "now",
    },
    {
      id: 3,
      name: "Reminder Emails",
      schedule: "Mon & Thu",
      color: "#10B981",
      status: "Success",
      time: "6h ago",
    },
    {
      id: 4,
      name: "Report Sync",
      schedule: "Weekly Sun",
      color: "#10B981",
      status: "Success",
      time: "1d ago",
    },
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

//   useEffect(() => {
//   const timer = setTimeout(() => {
//     if (activeStep < autosteps.length) {
//       setCompleted((prev) => [...prev, activeStep]);
//       setActiveStep((prev) => prev + 1);
//     } else {
//       // Reset workflow and start again
//       setCompleted([]);
//       setActiveStep(0);
//     }
//   }, 2000);

//   return () => clearTimeout(timer);
// }, [activeStep]);

  return (
    <>
      <section className="devops-hero-section">
        <div className="hero-wrapper">
          <div className="row mt-4">
            <div className="col-lg-6 col-12">
              <Reveal variant={fadeUp} delay={0.1}>
                <div className="devops-hero-content">
                  <p className="devops-badge">
                    <img src={AutomationSolutions} alt="pen" />
                    Automation Solutions
                  </p>

                  <h1 className="devops-title">
                    Replace repetitive work
                    <br />
                    <span>with intelligent systems.</span>
                  </h1>

                  <p className="devops-description">
                    We automate the manual workflows that slow your team down —
                    from data entry and approvals to reporting and customer
                    communications.
                  </p>

                  <div className="hero-buttons">
                    <Button variant="primary" icon={<FaArrowRight />}>
                      <span>Map Your Workflows </span>
                    </Button>

                    <Button variant="secondary">
                      <span>See What We Automate</span>
                    </Button>
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
                      <img
                        className="Onbord-logo"
                        src={Onboard}
                        alt="Onboard"
                      />
                    </div>

                    <div>
                      <h6>Lead Onboarding Workflow</h6>
                      <p>Running · 284 executions today</p>
                    </div>
                  </div>

                  <span className="auto-status">● Active</span>
                </div>

                {/* Steps */}
                <div className="autosteps">
                  {autosteps.map((step, index) => (
                    <React.Fragment key={index}>
                      <div
                        className={`step-card ${
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
          className={activeStep === index ? "rotate-icon" : ""}
        />
      );
    })()
  )}
</div>

                        <h6>{step.title}</h6>
                        <small>{step.subtitle}</small>
                      </div>

                      {index !== autosteps.length - 1 && (
                        <div className="connector"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
               <div className="automation-card">
        <div className="card-header">
          <h5 className="Active-Automations mb-0">Active Automations</h5>
          <span className="text-primary small fw-semibold">
            12 running
          </span>
        </div>

        <div className="automation-item">
          <div className="d-flex align-items-start">
            <span
              className="rounded-circle me-3 mt-2"
              style={{
                width: "8px",
                height: "8px",
                background: "#10b981",
              }}
            ></span>

            <div>
              <div className="Invoice-Generation">Invoice Generation</div>
              <small className="text-muted">Daily 11pm</small>
            </div>
          </div>

          <div className="text-end">
            <div className="success">Success</div>
            <small className="text-muted">2m ago</small>
          </div>
        </div>

        <div className="automation-item">
          <div className="d-flex align-items-start">
            <span
              className="rounded-circle me-3 mt-2"
              style={{
                width: "8px",
                height: "8px",
                background: "#3b82f6",
              }}
            ></span>

            <div>
              <div className="Invoice-Generation">Lead Assignment</div>
              <small className="text-muted">Real-time</small>
            </div>
          </div>

          <div className="text-end">
            <div className="text-primary ">Running...</div>
            <small className="text-muted">now</small>
          </div>
        </div>

        <div className="automation-item">
          <div className="d-flex align-items-start">
            <span
              className="rounded-circle me-3 mt-2"
              style={{
                width: "8px",
                height: "8px",
                background: "#10b981",
              }}
            ></span>

            <div>
              <div className="Invoice-Generation">Reminder Emails</div>
              <small className="text-muted">Mon & Thu</small>
            </div>
          </div>

          <div className="text-end">
            <div className="success">Success</div>
            <small className="text-muted">6h ago</small>
          </div>
        </div>

        <div className="automation-item border-0 pb-0">
          <div className="d-flex align-items-start">
            <span
              className="rounded-circle me-3 mt-2"
              style={{
                width: "8px",
                height: "8px",
                background: "#10b981",
              }}
            ></span>

            <div>
              <div className="Invoice-Generation">Report Sync</div>
              <small className="text-muted">Weekly Sun</small>
            </div>
          </div>

          <div className="text-end">
            <div className="success">Success</div>
            <small className="text-muted">1d ago</small>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </section>
      <section className="devops-hero-section">
        <div
          className="container-fluid mt-5 px-5"
          style={{ backgroundColor: "#0F172A" }}
        >
          <div className="row g-4">
            {stats.map((item, index) => (
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
    </>
  );
};

export default AutomationHerosection;
