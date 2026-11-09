import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import digiCampusIcon from "../../assets/Products/digicampus-icon.svg";
import digiPlayIcon from "../../assets/Products/digiplay-icon.svg";
import digiLogIcon from "../../assets/Products/digilog-icon.svg";
import digiAyurIcon from "../../assets/Products/digiayur-icon.svg";
import digiStayIcon from "../../assets/Products/digistay-icon.svg";
import customIcon from "../../assets/Products/custom-icon.svg";
import "./Products.css";

const productsData = [
  {
    id: 1,
    name: "DigiCampus",
    highlightName: "Campus",
    category: "Education Management Platform",
    icon: digiCampusIcon,
    description:
      "A connected school and college management platform that brings academics, administration, communication, fees, attendance and student management into one unified operating system.",
    tags: ["Students", "Academics", "Attendance", "Fees"],
    version: "v4.2 LTS · Enterprise",
    linkText: "Explore DigiCampus",
    path: "/products/digicampus",
    iconBg: "#eef2ff",
  },
  {
    id: 2,
    name: "DigiPlay",
    highlightName: "Play",
    category: "Sports Academy Management",
    icon: digiPlayIcon,
    description:
      "Manage your sports academy with one platform for players, trainers, attendance, fees, personal training and automated ground scheduling.",
    tags: ["Players", "Training", "Attendance", "Ground Booking"],
    version: "v3.6 · Ready",
    linkText: "Explore DigiPlay",
    path: "/products/digiplay",
    iconBg: "#eef2ff",
  },
  {
    id: 3,
    name: "DigiLog",
    highlightName: "Log",
    category: "HR Management System",
    icon: digiLogIcon,
    description:
      "Smart human resource management designed to simplify employee management, attendance tracking, leave management, salary processing and day-to-day HR operations.",
    tags: ["Employees", "Attendance", "Leaves", "Payroll"],
    version: "v1.0 HR Core",
    linkText: "Explore DigiLog",
    path: "/products/digilog",
    iconBg: "#eef2ff",
  },
  {
    id: 4,
    name: "DigiAyur",
    highlightName: "Ayur",
    category: "Healthcare Management Platform",
    icon: digiAyurIcon,
    description:
      "A digital healthcare management solution designed to simplify patient management, OPD queues, billing, clinical records and hospital care operations.",
    tags: ["Patients", "Appointments", "Doctors", "Billing"],
    version: "v5.1 HIPAA / ABDM",
    linkText: "Explore DigiAyur",
    path: "/products/digiayur",
    iconBg: "#eef2ff",
  },
  {
    id: 5,
    name: "DigiStay",
    highlightName: "Stay",
    category: "Hostel & Residential Management",
    icon: digiStayIcon,
    description:
      "Comprehensive digital management for hostels, student accommodations, and PG facilities — managing room allocations, student check-in/out, fee collections, mess & meal tracking, gate passes, complaints, and resident safety.",
    tags: ["Room Allocation", "Fee Management", "Mess & Meals", "Complaints"],
    version: "v5.0 · Smart Living",
    linkText: "Explore DigiStay",
    path: "/products/digistay",
    iconBg: "#eef2ff",
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-container container">
      {/* Existing Hero Component */}
      <div className="products-hero">
        <p className="Digisphere-badge">Our Products</p>
        <h1 className="about-hero-title">
          Products Built for{" "}
          <span className="about-text-blue">Real-World Operations</span>
        </h1>
        <p className="about-hero-description">
          We build smart and reliable digital products that make everyday
          business tasks easier. Our solutions help organizations manage their
          work, automate daily processes, and save time. Each product is
          designed to improve efficiency, simplify management, and help
          businesses grow.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="row g-4 mt-2">
        {productsData.map((product) => (
          <div key={product.id} className="col-12 col-lg-6">
            <div className="product-card h-100">
              <div className="row h-100">
                {/* Left Column: Icon + Branding */}
                <div className="col-12 col-sm-5 d-flex flex-column justify-content-between pe-sm-2 mb-3 mb-sm-0">
                  <div>
                    <div className="product-icon-box" style={{ backgroundColor: product.iconBg }} >
                      <img
                        src={product.icon}
                        alt={`${product.name} icon`}
                        className="product-icon-img img-fluid"
                      />
                    </div>
                    <h3 className="product-card-title mt-3">
                      Digi
                      <span className="product-title-blue">
                        {product.highlightName}
                      </span>
                    </h3>
                    <p className="product-card-category">{product.category}</p>
                  </div>
                  <div className="product-badge-version">
                    <span className="dot-indicator"></span> {product.version}
                  </div>
                </div>

                {/* Right Column: Description + Tags + CTA */}
                <div className="col-12 col-sm-7 d-flex flex-column justify-content-between ps-sm-3 border-start-sm">
                  <div>
                    <p className="product-card-description">
                      {product.description}
                    </p>
                    <div className="product-tags d-flex flex-wrap gap-2 my-3">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="product-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="product-card-footer d-flex align-items-center justify-content-between pt-2">
                    {/* Updated Link with onClick using navigate */}
                    <button
                      type="button"
                      onClick={() => navigate(product.path)}
                      className="product-link btn btn-link p-0 text-decoration-none d-flex align-items-center"
                    >
                      {product.linkText} <FiArrowRight className="ms-1" />
                    </button>
                    {product.stat && (
                      <span className="product-stat">{product.stat}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Integration Banner */}
      <div className="custom-integration-banner mt-4 mb-4 p-4 rounded-4">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-8 d-flex align-items-center gap-3">
            <div className="banner-icon-box">
              <img src={customIcon} alt="custom-Icon"/>
            </div>
            <div>
              <h4 className="banner-title mb-1">
                Custom Integrations & Unified Single Sign-On
              </h4>
              <p className="banner-description mb-0">
                All DigiSphere platforms seamlessly sync with your current ERP,
                SIS, payment gateways, and cloud infrastructure.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 text-md-end text-start">
            <Button variant="primary" onClick={() => navigate("/contact")}>
              Let's Talk About Our Products <FiArrowRight className="ms-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
