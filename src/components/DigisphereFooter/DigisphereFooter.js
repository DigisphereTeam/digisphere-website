import React, { memo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./DigisphereFooter.css";
import digilogo from "../../assets/digispherelogo.jpg";
// Asset Imports
import linkedinIcon from "../../assets/LinkedinIcon.png";
import instaIcon from "../../assets/instaIcon.png";
import DigispherHome from "../../pages/DigisphereHome/DigispherHome";

// Static Navigation Datasets
const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/digisphere-tech/", icon: linkedinIcon, label: "LinkedIn" },
  { href: "https://www.instagram.com/digispheretech/", icon: instaIcon, label: "Instagram" },
];

const SERVICES_LINKS = [
  { to: "/services/webdevelopment", label: "Website Development" },
  { to: "/services/digital-marketing", label: "Digital Marketing" },
  { to: "/services/automation", label: "Automation Solution" },
  { to: "/services/aipowered", label: "AI-Powered Solution" },
  { to: "/services/experience-design", label: "Experience Design" },
  { to: "/services/cloudservices", label: "Cloud Services" },
  { to: "/services/cyber-security", label: "Cybersecurity" },
  { to: "/services/managed-it-services", label: "Managed IT" },
  { to: "/services/devops", label: "DevOps" },
];

const COMPANY_LINKS = [
  { to: "/about", label: "About Us" },
  { label: "Careers" },
  { label: "Our Work" },
  { label: "Case Studies" },
  { label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const OFFICES = [
  { title: "Hyderabad Office", lines: ["HITEC City, Madhapur", "Telangana"], className: "mt-4" },
  { title: "Vijayawada Office", lines: ["5th Floor,502, Veeramachaneni Residency, Ring Rd, Ramavarapadu, Kanuru, Andhra Pradesh 520004"], className: "" }
];

const DigisphereFooter = memo(() => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation(); // 1. Grab the current URL path

  // 2. Automatically watch for URL updates and scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="container">
        <div className="row">
          
          {/* Brand Info & Social Stack */}
          <div className="col-lg-4 mb-4">
            <Link className="navbar-brand fw-bold" to="/" onClick={()=>{<DigispherHome/>}}>
          <img
            src={digilogo}
            alt="Digisphere Logo"
            className="Digisphere-logo-image"
          />
        </Link>
            <p className="footer-description">
              We build websites, applications, and marketing systems that grow
              businesses — and the infrastructure that keeps them running.
            </p>
            <div className="social-icons mt-4">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <Link 
                  key={label} 
                  to={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label} page`}
                >
                  <img src={icon} alt="" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Services Navigation Column */}
          <div className="col-lg-3 col-md-4 mb-4">
            <h6 className="footer-title">Services</h6>
            <nav aria-label="Services links">
              <ul className="footer-links">
                {SERVICES_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Dynamic Company Navigation Column */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h6 className="footer-title">Company</h6>
            <nav aria-label="Company links">
              <ul className="footer-links">
                {COMPANY_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Dynamic Office Address Blocks */}
          <div className="col-lg-3">
            {OFFICES.map(({ title, lines, className }) => (
              <React.Fragment key={title}>
                <h6 className={`footer-title ${className}`}>{title}</h6>
                <p className="office-text">
                  {lines.map((line, idx) => (
                    <React.Fragment key={line}>
                      {line}
                      {idx < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </React.Fragment>
            ))}
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Dynamic Legal & Copyright Context */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {currentYear} Digisphere. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
});

DigisphereFooter.displayName = "DigisphereFooter";

export default DigisphereFooter;