import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import { NavLink, Link, useLocation } from "react-router-dom";
import digilogo from "../../assets/digispherelogo.jpg";
import AbouUs from "../../assets/Lead Generationicon.svg";
import CaseStudies from "../../assets/Marketing ROI.svg";
import pen from "../../assets/pen.svg";
import Blog from "../../assets/resourcesdropdown/Blog.svg";
import Careers from "../../assets/resourcesdropdown/Careers.svg";
import Contact from "../../assets/resourcesdropdown/Contact.svg";
import DocumentationIcon from "../../assets/resourcesdropdown/Documentation.svg";
import FAQs from "../../assets/resourcesdropdown/FAQs.svg";
import HelpCenter from "../../assets/resourcesdropdown/HelpCenter.svg";
import HowWeWork from "../../assets/resourcesdropdown/HowWeWork.svg";
import SuccessStories from "../../assets/resourcesdropdown/SuccessStories.svg";
import TechnologyGuides from "../../assets/resourcesdropdown/TechnologyGuides.svg";
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
import DigispherHome from "../../pages/DigisphereHome/DigispherHome.js";
const DigisphereHeader = () => {
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsResourcesOpen(false);
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
            desc: "Custom portals, dashboards and business software.",
            path: "/services/web-applications",
            icon: (
              <img
                className="service-image"
                src={WebApplications}
                alt="WebApplications"
              />
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
  const resourcesmenuItems = {
    Resources: [
      {
        heading: "Company",
        items: [
          {
            title: "About Us",
            desc: "Our story, team, and mission.",
            path: "/services",
            icon: (
              <img className="service-image" src={AbouUs} alt="WebsiteDesign" />
            ),
          },
          {
            title: "How We Work",
            desc: "Our engagement process explained.",
            path: "/services",
            icon: (
              <img
                className="service-image"
                src={HowWeWork}
                alt="DigitalMarketing"
              />
            ),
          },
          {
            title: "Careers",
            desc: "Join a growing tech team.",
            path: "/services",
            icon: <img className="service-image" src={Careers} alt="pen" />,
          },
          {
            title: "Contact",
            desc: "Get in touch with our team.",
            path: "/services",
            icon: (
              <img
                className="service-image"
                src={Contact}
                alt="WebsiteDesign"
              />
            ),
          },
        ],
      },

      {
        heading: "INSIGHTS",
        items: [
          {
            title: "Blog",
            desc: "Tech insights and practical guides.",
            path: "/services",
            icon: <img className="service-image" src={Blog} alt="Blog" />,
          },
          {
            title: "Case Studies",
            desc: "Real results from real clients.",
            path: "/services",
            icon: <img className="service-image" src={CaseStudies} alt="pen" />,
          },
          {
            title: "Success Stories",
            desc: "How clients grew with us.",
            path: "/services",
            icon: (
              <img className="service-image" src={SuccessStories} alt="pen" />
            ),
          },
          {
            title: "Technology Guides",
            desc: "Deep-dives on tools and stacks.",
            path: "/services",
            icon: (
              <img className="service-image" src={TechnologyGuides} alt="pen" />
            ),
          },
        ],
      },

      {
        heading: "SUPPORT",
        items: [
          {
            title: "FAQs",
            desc: "Answers to common questions.",
            path: "/services",
            icon: <img className="service-image" src={FAQs} alt="pen" />,
          },
          {
            title: "Help Center",
            desc: "Support resources and docs.",
            path: "/services",
            icon: <img className="service-image" src={HelpCenter} alt="pen" />,
          },
          {
            title: "Documentation",
            desc: "Technical references and guides.",
            path: "/services",
            icon: (
              <img
                className="service-image"
                src={DocumentationIcon}
                alt="Documentation"
              />
            ),
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
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const location = useLocation();

  const isResourcesActive =
    location.pathname.startsWith("/blogs") ||
    location.pathname.startsWith("/case-studies") ||
    location.pathname.startsWith("/whitepapers");
  return (
    <nav ref={menuRef} className="custom-navbar navbar navbar-expand-lg">
      <div className="container custom-container">
        <Link className="navbar-brand fw-bold" to="/" onClick={()=>{<DigispherHome/>}}>
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
                            setIsResourcesOpen(false);
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
                        className="explore-btn "
                        onClick={() => {
                          setIsServicesOpen(false);
                          closeNavbar();
                        }}
                      >
                        Explore All Services <IoArrowForwardSharp />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* ================= INDUSTRIES ================= */}
             {/* <li className="nav-item dropdown">
              <button
                type="button"
                className={`nav-link nav-button d-flex align-items-center gap-1 border-0 bg-transparent ${
                  location.pathname.startsWith("/industries") ? "active" : ""
                }`}
                data-bs-toggle="dropdown"
                onClick={() => {
                  setIsIndustriesOpen(!isIndustriesOpen);
                  setIsServicesOpen(false);
                  setIsResourcesOpen(false);
                }}
              >
                Industries
                <IoIosArrowDown
                  style={{
                    transform: isIndustriesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
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
            </li>  */}

            {/* ================= RESOURCES ================= */}
             {/* <li className="nav-item dropdown mega-dropdown">
              <button
                type="button"
                className={`nav-link nav-button d-flex align-items-center gap-1 border-0 bg-transparent ${
                  isResourcesActive ? "active" : ""
                }`}
                onClick={() => {
                  setIsResourcesOpen(!isResourcesOpen);
                  setIsServicesOpen(false);
                  setIsIndustriesOpen(false);
                }}
              >
                Resources
                <IoIosArrowDown
                  style={{
                    transform: isResourcesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </button>

              <div
                className={`dropdown-menu mega-menu p-4 ${
                  isResourcesOpen ? "show" : ""
                }`}
              >
                <div className="row">
                  {resourcesmenuItems.Resources.map((section, idx) => (
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
                      <h3>Free Digital Audit</h3>

                      <p>
                        30-minute consultation to review your digital setup and
                        identify your biggest growth opportunities.
                      </p>

                      <div className="stats">
                        <div className="Projects">
                          <span>Duration</span>
                          <strong>30 min</strong>
                        </div>

                        <div className="Projects">
                          <span>Cost</span>
                          <strong>Free</strong>
                        </div>

                        <div className="Projects">
                          <span>Response</span>
                          <strong> 4 hours</strong>
                        </div>
                      </div>

                      <Link
                        to="/services"
                        className="explore-btn "
                        onClick={() => {
                          setIsServicesOpen(false);
                          closeNavbar();
                        }}
                      >
                        Book Free Audit <IoArrowForwardSharp />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>  */}
          </ul>

          {/* RIGHT BUTTONS */}
          <div className="nav-buttons-container d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0">
            {/* <button className="work-btn w-100 w-lg-auto">See Our Work</button> */}

            <button
              onClick={() => navigate("/contact")}
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
