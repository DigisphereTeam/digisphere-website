import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import "./DigisphereHeader.css";
import digilogo from "../../assets/digispherelogo.svg";

const DigisphereHeader = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const menuItems = [
    {
      title: "Services",
      options: [
        { label: "Website Development", path: "/services/webdevelopment" },
        { label: "Experience Design", path: "/services/experience-design" },
      ],
    },
    {
      title: "Industries",
      options: [
        { label: "Option 1", path: "/industries/1" },
        { label: "Option 2", path: "/industries/2" },
      ],
    },
    {
      title: "Resources",
      options: [
        { label: "Option 1", path: "/resources/1" },
        { label: "Option 2", path: "/resources/2" },
      ],
    },
  ];

  const closeNavbar = () => setIsNavbarOpen(false);

  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container-fluid custom-container">
        {/* Left Side: Logo */}
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
          className={`collapse navbar-collapse justify-content-between ${isNavbarOpen ? "show" : ""}`}
        >
          {/* Center Links */}
          <ul className="navbar-nav mx-auto align-items-center gap-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </NavLink>
            </li>

            {menuItems.map((item, index) => (
              <li className="nav-item dropdown" key={index}>
                <button
                  className="nav-link dropdown-toggle d-flex align-items-center gap-1 border-0 bg-transparent"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  {item.title} <FaChevronDown size={10} className="ms-1" />
                </button>
                <ul className="dropdown-menu">
                  {item.options.map((opt, i) => (
                    <li key={i}>
                      <Link
                        className="dropdown-item"
                        to={opt.path}
                        onClick={closeNavbar}
                      >
                        {opt.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="nav-buttons-container d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0">
            <button className="work-btn w-100 w-lg-auto">See Our Work</button>
            <button className="talk-btn w-100 w-lg-auto">
              Let's Talk <FaArrowRight className="ms-1" size={12} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DigisphereHeader;
