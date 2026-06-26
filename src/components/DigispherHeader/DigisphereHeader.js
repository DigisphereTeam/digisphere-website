import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./DigisphereHeader.css";
import digilogo from "../../assets/digispherelogo.svg";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import pen from "../../assets/pen.svg";
import WebsiteDesign from "../../assets/servicesDropdown/Website Design & Development.svg";
import DigitalMarketing from "../../assets/servicesDropdown/DigitalMarketing.svg";
import WebApplications from "../../assets/servicesDropdown/WebApplications.svg";
import AutomationSolutions from "../../assets/servicesDropdown/AutomationSolutions.svg";
import AIPowered from "../../assets/servicesDropdown/AI-Powered.svg";
import CloudServices from "../../assets/servicesDropdown/CloudServices.svg";
import Cybersecuritys from "../../assets/servicesDropdown/Cybersecuritys.svg";
import Managed from "../../assets/servicesDropdown/Managed.svg";
import DevOp from "../../assets/servicesDropdown/DevOp.svg";

const DigisphereHeader = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = {
    services: [
      {
        heading: "DIGITAL GROWTH",
        items: [
          {
            title: "Website Design & Development",
            desc: "Fast, conversion-focused websites built for growth.",
            path: "/services/webdevelopment",
            icon: (
              <img
                className="service-image"
                src={WebsiteDesign}
                alt="WebsiteDesign"
              />
            ),
          },
          {
            title: "Digital Marketing",
            desc: "SEO, Google Ads, Meta Ads and measurable growth.",
            path: "/services/digital-marketing",
            icon: (
              <img
                className="service-image"
                src={DigitalMarketing}
                alt="DigitalMarketing"
              />
            ),
          },
          {
            title: "Experience Design",
            desc: "User-centered UX/UI and digital experiences.",
            path: "/services/experience-design",
            icon: <img className="service-image" src={pen} alt="pen" />,
          },
        ],
      },

      {
        heading: "CUSTOM SOLUTIONS",
        items: [
          {
            title: "Web Applications",
            desc: "Custom portals, dashboards and business software.",
            path: "/services/web-applications",
            icon: (
              <img className="service-image" src={WebApplications} alt="pen" />
            ),
          },
          {
            title: "Automation Solutions",
            desc: "Replace repetitive work with intelligent automation.",
            path: "/services/automation",
            icon: (
              <img
                className="service-image"
                src={AutomationSolutions}
                alt="pen"
              />
            ),
          },
          {
            title: "AI-Powered Solutions",
            desc: "AI integrations, copilots and assistants.",
            path: "/services/ai",
            icon: <img className="service-image" src={AIPowered} alt="pen" />,
          },
        ],
      },

      {
        heading: "INFRASTRUCTURE & SECURITY",
        items: [
          {
            title: "Cloud Services",
            desc: "AWS, Azure and Google Cloud solutions.",
            path: "/services/cloud",
            icon: (
              <img className="service-image" src={CloudServices} alt="pen" />
            ),
          },
          {
            title: "Cybersecurity",
            desc: "Monitoring, VAPT and security assessments.",
            path: "/services/cyber-security",
            icon: (
              <img className="service-image" src={Cybersecuritys} alt="pen" />
            ),
          },
          {
            title: "Managed IT",
            desc: "End-to-end IT support and maintenance.",
            path: "/services/managed-it-services",
            icon: <img className="service-image" src={Managed} alt="pen" />,
          },
          {
            title: "DevOps",
            desc: "CI/CD, Kubernetes and automation.",
            path: "/services/devops",
            icon: <img className="service-image" src={DevOp} alt="pen" />,
          },
        ],
      },
    ],

    industries: [
      {
        label: "Healthcare",
        path: "/industries/healthcare",
      },
      {
        label: "Finance",
        path: "/industries/finance",
      },
      {
        label: "Retail",
        path: "/industries/retail",
      },
    ],

    resources: [
      {
        label: "Blogs",
        path: "/blogs",
      },
      {
        label: "Case Studies",
        path: "/case-studies",
      },
      {
        label: "White Papers",
        path: "/whitepapers",
      },
    ],
  };

  const closeNavbar = () => setIsNavbarOpen(false);

  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container-fluid custom-container">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeNavbar}>
          <img
            src={digilogo}
            alt="Digisphere Logo"
            className="Digisphere-logo-image"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-between ${
            isNavbarOpen ? "show" : ""
          }`}
        >
          {/* NAV LINKS */}
          <ul className="navbar-nav mx-auto align-items-center gap-4">
            {/* HOME */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={closeNavbar}>
                Home
              </NavLink>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </NavLink>
            </li>

            {/* ================= SERVICES MEGA MENU ================= */}
            <li className="nav-item dropdown mega-dropdown">
              <button
                type="button"
                className="nav-link d-flex align-items-center gap-1 border-0 bg-transparent"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <IoIosArrowDown
                  style={{
                    transform: isServicesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </button>

              <div
                className={`dropdown-menu mega-menu p-4 ${
                  isServicesOpen ? "show" : ""
                }`}
              >
                <div className="row">
                  {menuItems.services.map((section, idx) => (
                    <div className="col-lg-3" key={idx}>
                      <h6 className="mega-heading">{section.heading}</h6>

                      {section.items.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="mega-link d-flex"
                          onClick={() => {
                            setIsServicesOpen(false);
                            closeNavbar();
                          }}
                        >
                          <div className="icon-box">{item.icon}</div>

                          <div>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}

                  <div className="col-lg-3">
                    <div className="Build-service-card">
                      <h3>Build. Grow. Protect.</h3>

                      <p>
                        One technology partner for websites, applications,
                        marketing, cloud infrastructure, cybersecurity, managed
                        IT and DevOps.
                      </p>

                      <div className="stats">
                        <div className="Projects">
                          <span>Projects</span>
                          <strong>336+</strong>
                        </div>

                        <div className="Projects">
                          <span>Clients</span>
                          <strong>316+</strong>
                        </div>

                        <div className="Projects">
                          <span>Uptime</span>
                          <strong>99.9%</strong>
                        </div>
                      </div>

                      <Link
                        to="/services"
                        className="explore-btn"
                        onClick={() => {
                          setIsServicesOpen(false);
                          closeNavbar();
                        }}
                      >
                        Explore All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* ================= INDUSTRIES ================= */}
            <li className="nav-item dropdown">
              <button
                type="button"
                className="nav-link d-flex align-items-center gap-1 border-0 bg-transparent"
                data-bs-toggle="dropdown"
              >
                Industries
                <IoIosArrowDown />
              </button>

              <ul className="dropdown-menu">
                {menuItems.industries.map((item, i) => (
                  <li key={i}>
                    <Link
                      className="dropdown-item"
                      to={item.path}
                      onClick={closeNavbar}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* ================= RESOURCES ================= */}
            <li className="nav-item dropdown">
              <button
                type="button"
                className="nav-link d-flex align-items-center gap-1 border-0 bg-transparent"
                data-bs-toggle="dropdown"
              >
                Resources
                <IoIosArrowDown />
              </button>

              <ul className="dropdown-menu">
                {menuItems.resources.map((item, i) => (
                  <li key={i}>
                    <Link
                      className="dropdown-item"
                      to={item.path}
                      onClick={closeNavbar}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* RIGHT BUTTONS */}
          <div className="nav-buttons-container d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0">
            <button className="work-btn w-100 w-lg-auto">See Our Work</button>

            <button className="talk-btn w-100 w-lg-auto">
              Let's Talk <IoArrowForwardSharp className="ms-1" size={12} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DigisphereHeader;
