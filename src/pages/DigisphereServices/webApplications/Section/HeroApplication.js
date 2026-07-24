import React, { useState, useEffect, useRef } from "react";
import "./HeroApplication.css";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";
import { FaArrowRight, FaLock, FaCode } from "react-icons/fa";
import { TrendingUp, Database, Users } from "lucide-react";
import { Link } from "react-router-dom";

import application from "../../../../assets/Webapplication/Applications.svg";
import BusinessOs from "../../../../assets/Webapplication/BusinessOs.svg";
import TotalOrders from "../../../../assets/Webapplication/TotalOrders.svg";
import Revenue from "../../../../assets/Webapplication/Revenue.svg";
import ActiveUsers from "../../../../assets/Webapplication/ActiveUsers.svg";

import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import Button from "../../../../components/Button/Button";

// Custom CountUp Component using Framer Motion
const CountUp = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  const numericValue = parseFloat(value.toString().replace(/,/g, ""));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest).toLocaleString());
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

const HeroApplication = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      title: "Total Orders",
      value: "1,310",
      change: "+12.4%",
      icon: <TrendingUp size={18} color="#2563eb" />,
    },
    {
      title: "Revenue",
      value: "₹668K",
      change: "+8.7%",
      icon: <Database size={18} color="#10b981" />,
    },
    {
      title: "Active Users",
      value: "284",
      change: "+23",
      icon: <Users size={18} color="#8b5cf6" />,
    },
  ];

  const graphData = [
    { month: "Jul", height: "26%" },
    { month: "Aug", height: "37%" },
    { month: "Sep", height: "32%" },
    { month: "Oct", height: "43%" },
    { month: "Nov", height: "39%" },
    { month: "Dec", height: "47%" },
    { month: "Jan", height: "45%" },
    { month: "Feb", height: "53%" },
    { month: "Mar", height: "50%" },
    { month: "Apr", height: "56%" },
    { month: "May", height: "54%" },
    { month: "Jun", height: "60%" },
  ];

  const activities = [
    { dotColor: "#10B981", title: "New order #4821", meta: "Ravi K. · 2s ago" },
    {
      dotColor: "#3B82F6",
      title: "Invoice generated",
      meta: "Priya M. · 12s ago",
    },
    {
      dotColor: "#F59E0B",
      title: "Payment received",
      meta: "Arjun S. · 34s ago",
    },
    {
      dotColor: "#8B5CF6",
      title: "Report exported",
      meta: "Divya R. · 1m ago",
    },
  ];

  return (
    <>
      <div className="web-hero-wrapper">
        <div className="row mt-5">
          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="devops-hero-content">
                <p className="devops-badge">
                  <img src={application} alt="pen" />
                  Web Applications
                </p>

                <h1 className="devops-title">
                  Software built for
                  <br />
                  <span>the way you work.</span>
                </h1>

                <p className="devops-description">
                  Custom web applications — dashboards, portals, SaaS products,
                  and internal tools — that replace broken spreadsheet workflows
                  and give your team a competitive edge.
                </p>

                <div className="hero-buttons">
                  <Link to="/contact">
                    <Button variant="primary" icon={<FaArrowRight />}>
                      <span>Discuss Your Project</span>
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button variant="secondary">
                      <span>What We Build</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6 col-12">
            <div className="portal-card-wrapper">
              <div className="portal-card">
                {/* 🟢 TOP RIGHT FLOATING CARD */}
                <div className="floating-ssl-card">
                  <div className="ssl-icon-box">
                    <FaLock className="ssl-icon" />
                  </div>
                  <div>
                    <div className="ssl-subtitle">SSL Secured</div>
                    <div className="ssl-title">Role-Based Access</div>
                  </div>
                </div>

                {/* Top Navbar */}
                <header className="portal-navbar flex-between">
                  <div className="flex-center gap-sm">
                    <div className="portal-logo-icon">
                      <img src={BusinessOs} alt="BusinessOs" />
                    </div>
                    <span className="portal-title">BusinessOS Portal</span>
                  </div>

                  <div className="flex-center gap-md">
                    <div className="portal-bell-icon">
                      <span className="portal-bell-dot"></span>
                    </div>
               
                  </div>
                </header>

                {/* Content Body */}
                <div className="portal-body">
                  {/* Navigation Tabs Bar */}
                  <div className="portal-tabs-bar flex-between">
                    <ul className="portal-tabs">
                      <li>
                        <button className="portal-tab-btn active">
                          Overview
                        </button>
                      </li>
                      <li>
                        <button className="portal-tab-btn">Orders</button>
                      </li>
                      <li>
                        <button className="portal-tab-btn">Revenue</button>
                      </li>
                    </ul>

                    <div className="live-indicator">
                      <span className="live-dot"></span> Live
                    </div>
                  </div>

                  {/* Dashboard Main View */}
                  <div className="portal-main-dashboard">
                    {/* Top Stat Cards with CountUp */}
                    <div className="stats-grid">
                      <div className="stat-box">
                        <div className="flex-align-start">
                          <span className="web-stat-label">Total Orders</span>
                          <img src={TotalOrders} alt="TotalOrders" />
                        </div>
                        <div className="web-stat-value">
                          <CountUp value={1310} />
                        </div>
                        <span className="stat-badge badge-blue">+12.4%</span>
                      </div>

                      <div className="stat-box">
                        <div className="flex-align-start">
                          <span className="web-stat-label">Revenue</span>
                          <img src={Revenue} alt="Revenue" />
                        </div>
                        <div className="web-stat-value">
                          <CountUp value={668} prefix="₹" suffix="K" />
                        </div>
                        <span className="stat-badge badge-green">+8.7%</span>
                      </div>

                      <div className="stat-box">
                        <div className="flex-align-start">
                          <span className="web-stat-label">Active Users</span>
                          <img src={ActiveUsers} alt="ActiveUsers" />
                        </div>
                        <div className="web-stat-value">
                          <CountUp value={284} />
                        </div>
                        <span className="stat-badge badge-purple">+23</span>
                      </div>
                    </div>

                    {/* Bottom Chart & Activity Feed */}
                    <div className="web-bottom-grid">
                      <div>
                        <div className="webapplication-section-title">
                          Monthly Revenue
                        </div>
                        <div className="bars-wrapper">
                          {graphData.map((item, i) => (
                            <div key={i} className="bar-column">
                              <div className="bar-track">
                                <motion.div
                                  className="bar-fill"
                                  initial={{ height: 0 }}
                                  whileInView={{ height: item.height }}
                                  transition={{
                                    duration: 0.6,
                                    delay: i * 0.05,
                                  }}
                                  viewport={{ once: true }}
                                />
                              </div>
                              <span className="bar-label">{item.month}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="webapplication-section-title">
                          Live Activity
                        </div>
                        <div className="activity-feed">
                          {activities.map((act, idx) => (
                            <div key={idx} className="activity-row">
                              <span
                                className="activity-dot-indicator"
                                style={{ backgroundColor: act.dotColor }}
                              ></span>
                              <div>
                                <div className="activity-name">{act.title}</div>
                                <div className="activity-time">{act.meta}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 🔵 BOTTOM LEFT FLOATING CODE CARD */}
                <div className="floating-api-card">
                  <div className="api-header flex-center gap-xs">
                    <FaCode className="api-icon" />
                    <span>API Response</span>
                  </div>
                  <pre className="api-code">
                    <code>
                      {"{\n"}
                      {'  "status": '}
                      <span className="json-string">"success"</span>
                      {",\n"}
                      {'  "orders": '}
                      <span className="json-number">1318</span>
                      {"\n}"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroApplication;