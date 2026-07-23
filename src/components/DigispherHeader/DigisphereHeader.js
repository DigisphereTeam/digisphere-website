import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import digilogo from "../../assets/digishperelogo.png";
import pen from "../../assets/pen.svg";
import AIPowered from "../../assets/servicesDropdown/AI-Powered.svg";
import AutomationSolutions from "../../assets/servicesDropdown/AutomationSolutions.svg";
import CloudServices from "../../assets/servicesDropdown/CloudServices.svg";
import Cybersecuritys from "../../assets/servicesDropdown/Cybersecuritys.svg";
import DevOp from "../../assets/servicesDropdown/DevOp.svg";
import DigitalMarketing from "../../assets/servicesDropdown/DigitalMarketing.svg";
import Managed from "../../assets/servicesDropdown/Managed.svg";
import WebApplications from "../../assets/servicesDropdown/WebApplications.svg";
import WebsiteDesign from "../../assets/servicesDropdown/Website Design & Development.svg";

import "./DigisphereHeader.css";

const DigisphereHeader = () => {
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const location = useLocation();

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsResourcesOpen(false);
        setIsIndustriesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
    setIsIndustriesOpen(false);
  };

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
            desc: "Customportals,dashboards,and business software.",
            path: "/services/webapplications",
            icon: (
              <img className="service-image" src={WebApplications} alt="WebApplications" />
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
                alt="AutomationSolutions"
              />
            ),
          },
          {
            title: "AI-Powered Solutions",
            desc: "AI integrations, copilots and assistants.",
            path: "/services/aipowered",
            icon: (
              <img className="service-image" src={AIPowered} alt="AIPowered" />
            ),
          },
        ],
      },
      {
        heading: "INFRASTRUCTURE & SECURITY",
        items: [
          {
            title: "Cloud Services",
            desc: "AWS, Azure and Google Cloud solutions.",
            path: "/services/cloudServices",
            icon: (
              <img
                className="service-image"
                src={CloudServices}
                alt="CloudServices"
              />
            ),
          },
          {
            title: "Cybersecurity",
            desc: "Monitoring, VAPT and security assessments.",
            path: "/services/cyber-security",
            icon: (
              <img
                className="service-image"
                src={Cybersecuritys}
                alt="Cybersecuritys"
              />
            ),
          },
          {
            title: "Managed IT",
            desc: "End-to-end IT support and maintenance.",
            path: "/services/managed-it-services",
            icon: <img className="service-image" src={Managed} alt="Managed" />,
          },
          {
            title: "DevOps",
            desc: "CI/CD, Kubernetes and automation.",
            path: "/services/devops",
            icon: <img className="service-image" src={DevOp} alt="DevOp" />,
          },
        ],
      },
    ],
    industries: [
      { label: "Healthcare", path: "/industries/healthcare" },
      { label: "Finance", path: "/industries/finance" },
      { label: "Retail", path: "/industries/retail" },
    ],
  };

  return (
    <nav ref={menuRef} className="custom-navbar navbar navbar-expand-lg">
      <div className="container custom-container">
        {/* Fixed: Logo now properly closes navbar layout instead of rendering a broken component setup */}
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
          <ul className="navbar-nav mx-auto align-items-center">
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
                className={`nav-link nav-button d-flex align-items-center gap-1 border-0 bg-transparent ${
                  location.pathname.startsWith("/services") ? "active" : ""
                }`}
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsResourcesOpen(false);
                  setIsIndustriesOpen(false);
                }}
              >
                Services
                <IoIosArrowDown
                  style={{
                    transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </button>

              <div className={`dropdown-menu mega-menu p-4 ${isServicesOpen ? "show" : ""}`}>
                <div className="row">
                  {menuItems.services.map((section, idx) => (
                    <div className="col-lg-3" key={idx}>
                      <h6 className="mega-heading">{section.heading}</h6>

                      {section.items.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="mega-link d-flex"
                          onClick={closeNavbar}
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

                      <Link to="/contact" className="explore-btn" onClick={closeNavbar}>
                        Explore All Services <IoArrowForwardSharp />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/Industries" onClick={closeNavbar}>
                Industries
              </NavLink>
            </li>

          </ul>

          {/* RIGHT BUTTONS */}
          <div className="nav-buttons-container d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0">
            {/* Fixed: Added closeNavbar() run safely inside click blocks right here */}
            <button
              onClick={() => {
                closeNavbar();
                navigate("/contact");
              }}
              className="talk-btn w-100 w-lg-auto"
            >
              Let's Talk <IoArrowForwardSharp className="ms-1" size={12} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DigisphereHeader;