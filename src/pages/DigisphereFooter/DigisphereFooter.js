import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./DigisphereFooter.css";
import Linkedinicon from "../../assets/LinkedinIcon.png";
import instaicon from "../../assets/instaIcon.png";
import facebook from "../../assets/FacebookIcon.png";
import Twitericon from "../../assets/TwiterIcon.png";

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
              <a href="#">
              <img src={Linkedinicon}/>
              </a>
              <a href="#">
                     <img src={instaicon}/>
              </a>
              <a href="#">
                    <img src={facebook}/>
              </a>
              <a href="#">
                    <img src={Twitericon} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4 mb-4">
            <h6 className="footer-title">Services</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">Web Applications</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Experience Design</a>
              </li>
              <li>
                <a href="#">Cloud Services</a>
              </li>
              <li>
                <a href="#">Cybersecurity</a>
              </li>
              <li>
                <a href="#">Managed IT</a>
              </li>
              <li>
                <a href="#">DevOps</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h6 className="footer-title">Company</h6>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
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
