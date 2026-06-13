import React from "react";

import "./DigisphereFooter.css";
import Linkedinicon from "../../assets/LinkedinIcon.png";
import instaicon from "../../assets/instaIcon.png";
import facebook from "../../assets/FacebookIcon.png";
import Twitericon from "../../assets/TwiterIcon.png";
import { Link } from "react-router-dom";

const DigisphereFooter = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <h4 className="footer-logo">Digisphere</h4>

            <p className="footer-description">
              We build websites, applications, and marketing systems that grow
              businesses — and the infrastructure that keeps them running.
            </p>

            <div className="social-icons mt-4">
              <Link >
              <img src={Linkedinicon} alt="LinkedIn"/>
              </Link>
              <Link>
                     <img src={instaicon} alt="Instagram"/>
              </Link>
              <Link>
                    <img src={facebook} alt="Facebook"/>
              </Link>
              <Link>
                    <img src={Twitericon} alt="Twitter"/>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4 mb-4">
            <h6 className="footer-title">Services</h6>
            <ul className="footer-links">
              <li>
                <Link>Website Design</Link>
              </li>
              <li>
                <Link>Web Applications</Link>
              </li>
              <li>
                <Link>Digital Marketing</Link>
              </li>
              <li>
                <Link>Experience Design</Link>
              </li>
              <li>
                <Link>Cloud Services</Link>
              </li>
              <li>
                <Link>Cybersecurity</Link>
              </li>
              <li>
                <Link>Managed IT</Link>
              </li>
              <li>
                <Link>DevOps</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h6 className="footer-title">Company</h6>
            <ul className="footer-links">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Our Work</Link>
              </li>
              <li>
                <Link>Case Studies</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div className="col-lg-3">
            <h6 className="footer-title">Vijayawada Office</h6>
            <p className="office-text">
              MG Road, Labbipet
              <br />
              Vijayawada, Andhra Pradesh
            </p>

            <h6 className="footer-title mt-4">Hyderabad Office</h6>
            <p className="office-text">
            HITEC City, Madhapur<br/>
Hyderabad, Telangana
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-certifications">
            <span>ISO 27001 Aligned</span>
            <span>GDPR Framework</span>
            <span>IT Act 2000 Compliant</span>
          </div>

          <div className="footer-status">
            <span className="status-dot"></span>
         All Systems Operational
          </div>
        
        </div>
        <div className="footer-copy">
           © 2026 Digisphere Tech. All rights reserved.
          </div>
      </div>
    </footer>
  );
};

export default DigisphereFooter;
