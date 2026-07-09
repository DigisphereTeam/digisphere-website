import React, { useState, useEffect } from "react";

import "./ManagedItServices.css";
import { FaArrowRight } from "react-icons/fa";
import Counter from "../../../components/Counter/Counter";
import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";
import FAQSection from "../../../components/FaqSection/FAQSection";
import ServicesGrid from "../../../components/ServicesGrid/ServicesGrid";
import Critical from "../../../assets/managed-it/Critical response.svg";
import dashboardTop from "../../../assets/managed-it/dashboard-top.svg";
import dashboardBottom from "../../../assets/managed-it/dashboard-bottom.svg";
import heroLabelIcon from "../../../assets/managed-it/hero-label-icon.svg";
import tickIcon from "../../../assets/digital-marketing/tick-icon.svg";
import helpDeskIcon from "../../../assets/managed-it/helpdesk-icon.svg";
import endpointIcon from "../../../assets/managed-it/endpoint-icon.svg";
import serverNetworkIcon from "../../../assets/managed-it/servernetwork-icon.svg";
import backupRecoveryIcon from "../../../assets/managed-it/backup-icon.svg";
import softwareLicenceIcon from "../../../assets/managed-it/software-licence-icon.svg";
import itStrategyIcon from "../../../assets/managed-it/itstrategy-icon.svg";
import Button from "../../../components/Button/Button";
import SystemHealth from "../../../assets/managed-it/SystemHealth.svg";
import CPU from "../../../assets/managed-it/CPU.svg";
import CountUp from "react-countup";
import Memory from "../../../assets/managed-it/Memory.svg";
import Network from "../../../assets/managed-it/Network.svg";
import HelpDesk from "../../../assets/managed-it/HelpDesk.svg";
import { Headphones } from "lucide-react";
import critical from "../../../assets/managed-it/Critical response.svg";

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
  const servers = [
    {
      name: "Web Server 01",
      color: "success",
      uptime: "99.98%",
    },
    {
      name: "DB Server 01",
      color: "success",
      uptime: "99.99%",
    },
    {
      name: "File Server",
      color: "success",
      uptime: "99.95%",
    },
    {
      name: "Email Server",
      color: "warning",
      uptime: "98.2%",
    },
  ];
  const tickets = [
    {
      id: "TKT-2842",
      title: "Password reset needed",
      color: "#22c55e",
    },
    {
      id: "TKT-2843",
      title: "Slow computer — reception",
      color: "#f59e0b",
    },
    {
      id: "TKT-2842",
      title: "Password reset needed",
      color: "#22c55e",
    },
    {
      id: "TKT-2842",
      title: "Password reset needed",
      color: "#22c55e",
    },
  ];
  const [cpu, setCpu] = useState(0);
  const [memory, setMemory] = useState(0);
  const [network, setNetwork] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCpu(33);
      setMemory(66);
      setNetwork(28);
    }, 300);
  }, []);

  return (
    <>
      <section>
        <div className="hero-stats-section">
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="digital-hero-content">
                  <p class="Digi-badge">
                    <img className="pen-image" src={heroLabelIcon} alt="" />{" "}
                    Managed IT Service
                  </p>
                  <h2 className="hero-title">
                    IT that just works,
                    <br />
                    <span>
                      so you can focus on <br />
                      business.
                    </span>
                  </h2>
                  <p className="hero-description">
                    End-to-end IT management — help desk, endpoint management,
                    servers, networks, backups, and security — delivered as a
                    predictable monthly service with SLA guarantees.
                  </p>
                  <div className="hero-buttons">
                    <Button icon={<FaArrowRight />}>Get IT Assessment</Button>
                    <Button variant="secondary">View Plans</Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="py-2">
                  <div className="health-card">
                    <div className="sla-card">
                      <img src={critical} alt="Critical" className="floating-img" />
                    </div>
                    {/* Header */}

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <div className="monitor-icon">
                          <img
                            className="SystemHealth"
                            src={SystemHealth}
                            alt=""
                          />
                        </div>

                        <div className="ms-2">
                          <h5 className="System-Health  mb-0">
                            System Health Monitor
                          </h5>
                        </div>
                      </div>

                      <div className="Systems-status">
                        <span className="green-dot"></span>
                        All Systems OK
                      </div>
                    </div>

                    {/* Cards */}

                    <div className="row g-3 mb-3">
                      <div className="col-md-4">
                        <div className="metric-card">
                          <div className="text-cpu">
                            <img src={CPU} alt="CPU" /> CPU
                          </div>

                          <div className="progress mt-2">
                            <div
                              className="progress-bar cpu-bar"
                              style={{ width: `${cpu}%` }}
                            ></div>
                          </div>

                          <h2 className="metric-cpu">
                            <CountUp end={33} duration={2} />%
                          </h2>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="metric-card">
                          <div className="text-Memory ">
                            <img src={Memory} alt="Memory" /> Memory
                          </div>
                          <div className="progress mt-2">
                            <div
                              className="progress-bar Memory-bar"
                              style={{ width: `${memory}%` }}
                            ></div>
                          </div>

                          <h2 className="metric-Memory">
                            <CountUp end={66} duration={2} />%
                          </h2>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="metric-card">
                          <div className="text-Network ">
                            <img src={Network} alt="Network" />
                            Network
                          </div>

                          <div className="progress mt-2">
                            <div
                              className="progress-bar network-bar"
                              style={{ width: `${network}%` }}
                            ></div>
                          </div>

                          <h2 className="metric-Network">
                            <CountUp end={28} duration={2} />%
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Server List */}

                    <div className="server-list">
                      {servers.map((server, index) => (
                        <div
                          className="server-row d-flex justify-content-between align-items-center "
                          key={index}
                        >
                          <div>
                            <span
                              className={`server-dot bg-${server.color}`}
                            ></span>
                            {server.name}
                          </div>

                          <div className="uptime">Uptime {server.uptime}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="queue-card">
                  <div className="queue-header">
                    <div className="header-left">
                      <div className="icon-box">
                        <img src={HelpDesk} alt="HelpDesk" />
                      </div>

                      <span className="help-title">Help Desk · Live Queue</span>
                    </div>

                    <span className="response-time">Avg. response: 14 min</span>
                  </div>

                  <div className="queue-list">
                    {tickets.map((ticket, index) => (
                      <div className="ticket-row" key={index}>
                        <div className="ticket-left">
                          <span
                            className="status-dot"
                            style={{ background: ticket.color }}
                          />

                          <div>
                            <div className="ticket-title">{ticket.title}</div>
                            <div className="ticket-id">{ticket.id}</div>
                          </div>
                        </div>

                        <button className="open-btn">Open</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
};
export default ManagedItServices;
