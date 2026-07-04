import React from "react";
import Counter from "../../../../components/Counter/Counter";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import AutomationSolutions from "../../../../assets/servicesDropdown/AutomationSolutions.svg";
import Onboarding from "../../../../assets/Automation/Onboarding Workflow.svg";
import Automations from "../../../../assets/Automation/Automations.svg";

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

  return (
    <>
    <section className="devops-hero-section">
      <div className="hero-wrapper">
        <div className="row align-items-center">
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
            <div className="devops-dashboard">
              <div className="dashboard-main-card">
                <img src={Onboarding} alt="Pipeline Dashboard" />
              </div>

              <div className="dashboard-bottom-card">
                <img src={Automations} alt="Recent Builds" />
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
