import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Button from "../../../components/Button/Button";
import customIcon from "../../../assets/Products/digistay-hero-img.svg";
import feeReportImg from "../../../assets/Products/digistay-report-img.svg";
import {
  HiHome,
  HiUsers,
  HiCalendar,
  HiReceiptTax,
  HiLogout,
  HiShieldCheck,
  HiCheckCircle,
} from "react-icons/hi";
import "./ProductInnerPage.css";
import Reveal from "../../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../../animations/variants";

const productsFeatures = [
  {
    id: 1,
    icon: <HiHome />,
    title: "Rooms & Capacity Management",
    description:
      "Maintain room inventory, floor maps, sharing configurations, and live vacant vs occupied bed visibility across buildings.",
    tag: "Room Availability Matrix",
  },
  {
    id: 2,
    icon: <HiUsers />,
    title: "Hosteller Profiles & Directory",
    description:
      "Complete resident directory with personal data, emergency phone numbers, room history, and stay status in one centralized repository.",
    tag: "Hosteller Directory",
  },
  {
    id: 3,
    icon: <HiCalendar />,
    title: "Fee Schedules & Due Dates",
    description:
      "Set room rates for daily or monthly billing. Auto-calculate dues and track upcoming deadlines with automated reminders.",
    tag: "Fee Management Engine",
  },
  {
    id: 4,
    icon: <HiReceiptTax />,
    title: "Payment History & Receipts",
    description:
      "Log single and split payments with receipt IDs, payment modes (UPI/Cash/NEFT), and generate instant print-ready digital slips.",
    tag: "Receipt Ledger",
  },
  {
    id: 5,
    icon: <HiLogout />,
    title: "Check-In & Vacating Clearance",
    description:
      "Record exact joining and vacating dates, inspect bed status, handle security deposits, and free rooms instantly for new allotments.",
    tag: "Check-In & Clearance",
  },
  {
    id: 6,
    icon: <HiShieldCheck />,
    title: "Multi-Hostel Cloud Isolation",
    description:
      "Multi-client architecture with strict database separation and access controls for multi-property hostel chains and owners.",
    tag: "Multi-Tenant Security",
  },
];

const roleCardsData = [
  {
    title: "Hostel Owner / Director",
    badge: "Master Control",
    description:
      "Complete control of rooms, hostellers, fees and reports — P&L visibility, multi-branch overview, tariff setting, fee adjustments, and organizational audit reports.",
  },
];

const roleAccessMatrix = [
  {
    module: "Rooms",
    admin: "Full Control",
    operator: "Manage room inventory, floor maps, sharing & vacant beds",
  },
  {
    module: "Hostellers",
    admin: "Full Control",
    operator: "Add, edit & verify profiles, check-in and vacating clearance",
  },
  {
    module: "Fees",
    admin: "Full Control",
    operator: "Configure rates, track dues, collect payments & issue receipts",
  },
  {
    module: "Reports",
    admin: "Full Control",
    operator: "Occupancy, collections, dues & full P&L analytics",
  },
];

const reportsList = [
  {
    title: "Live room occupancy & vacant bed tracking",
    description:
      "Real-time floor-wise map displaying filled, reserved, and available beds.",
  },
  {
  title: "Pending dues & overdue tracking",
  description:
    "See which residents have paid, are due soon, or are overdue, with outstanding amounts and realization rate at a glance.",
  },
  {
    title: "Transparent digital receipts with reference numbers",
    description:
      "Instant PDF and SMS billing slips with complete transaction records.",
  },
  {
    title: "Detailed hosteller stay history & vacating records",
    description:
      "Complete audit logs of resident check-ins, room switches, dues clearance, and security deposit returns.",
  },
];

const Digistay = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page-container">
      {/* SECTION 1: HERO SECTION */}
      <section className="product-hero-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <Reveal variant={fadeRight} delay={0.2}>
                <div className="product-hero-content pe-lg-4">
                  <p className="Digisphere-badge">
                    DigiStay · Private Hostel Management System
                  </p>
                  <h1 className="product-hero-title mb-3">
                    Run your entire hostel &amp; resident care from{" "}
                    <span className="product-text-blue">one screen.</span>
                  </h1>
                  <p className="product-hero-desc mb-4">
                    Room allocations, vacant bed tracking, hosteller KYC
                    onboarding, monthly fee collections, payment receipts, and
                    vacating management — unified in one multi-hostel SaaS
                    suite.
                  </p>
                  <div className="product-hero-cta">
                    <Button
                      variant="primary"
                      onClick={() => navigate("/contact")}
                    >
                      Book a demo
                      <FiArrowRight className="ms-1" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-12 col-lg-6">
              <Reveal variant={fadeLeft} delay={0.2}>
                <div className="product-hero-image-wrapper text-center">
                  <img
                    src={customIcon}
                    alt="DigiStay Hostel Management Dashboard"
                    className="img-fluid product-dashboard-preview"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES GRID */}
      <section className="product-features-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="product-section-subtitle mb-2 d-block">
              What You Can Do
            </span>
            <h2 className="product-section-title mb-3">
              Everything connected. Nothing scattered.
            </h2>
            <p className="product-section-desc mx-auto">
              Replace disjointed spreadsheets, paper registers, and WhatsApp
              rent chasing with one unified hostel management platform.
            </p>
          </div>

          <div className="row g-4">
            {productsFeatures.map((feature) => (
              <div key={feature.id} className="col-12 col-md-6 col-lg-4">
                <Reveal
                  className="h-100"
                  variant={fadeUp}
                  delay={feature.id * 0.15}
                >
                  <div className="product-feature-card h-100 p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div className="product-feature-icon-box mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="product-feature-card-title mb-2">
                        {feature.title}
                      </h3>
                      <p className="product-feature-card-desc mb-4">
                        {feature.description}
                      </p>
                    </div>
                    <div className="product-feature-card-tag pt-3 border-top">
                      <span>{feature.tag}</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section-3 */}
      <section className="product-team-access-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <Reveal variant={fadeRight} delay={0.1}>
                <div className="product-team-access-header mb-4">
                  <span className="product-section-subtitle mb-2 d-block">
                    Built For Your Hostel
                  </span>
                  <h2 className="product-section-title mb-3">
                    Complete control for the hostel owner.
                  </h2>
                  <p className="product-section-desc">
                    One secure owner login to manage rooms, hostellers, fees and
                    reports — with strict data isolation and zero data leaks
                    across properties.
                  </p>
                </div>

                <div className="d-flex flex-column gap-3">
                  {roleCardsData.map((role, idx) => (
                    <div key={idx} className="product-role-card p-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h4 className="product-role-card-title mb-0">
                          {role.title}
                        </h4>
                        <span className="product-role-badge">{role.badge}</span>
                      </div>
                      <p className="product-role-card-desc mb-0">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="col-12 col-lg-7">
              <Reveal variant={fadeLeft} delay={0.1}>
                <div className="product-rbac-table-container p-4">
                  <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom product-rbac-table-top-bar">
                    <span className="product-rbac-table-heading">
                      Module Access
                    </span>
                    <span className="product-rbac-security-label">
                      RBAC Security Layer
                    </span>
                  </div>

                  <div className="table-responsive">
                    <table className="table align-middle mb-0 product-custom-rbac-table">
                      <thead>
                        <tr>
                          <th className="py-3 text-start">Module</th>
                          <th className="py-3 text-start">Owner / Director</th>
                          <th className="py-3 text-start">What You Can Do</th>
                        </tr>
                      </thead>
                      <tbody>
                        {roleAccessMatrix.map((row, idx) => (
                          <tr key={idx}>
                            <td className="py-3 fw-medium text-dark text-start">
                              {row.module}
                            </td>
                            <td className="py-3 product-text-blue fw-semibold text-start">
                              {row.admin}
                            </td>
                            <td className="py-3 text-muted text-start">
                              {row.operator}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* section-4 */}
      <section className="product-dashboard-reports-section py-5">
        <div className="container">
          <Reveal variant={fadeUp} delay={0.1}>
            <div className="row align-items-center g-5 mb-5">
              <div className="col-12 col-lg-7">
                <div className=" text-center">
                  <img
                    src={feeReportImg}
                    alt="Monthly Occupancy and Collections Summary Preview"
                    className="img-fluid product-dashboard-preview"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="product-reports-content">
                  <span className="product-section-subtitle mb-2 d-block product-text-center">
                    Hostel Dashboard And Reports
                  </span>
                  <h2 className="product-section-title mb-3 product-text-center">
                    Total operational and financial visibility.
                  </h2>
                  <p className="product-section-desc mb-4 product-text-center">
                    Gain real-time oversight of room occupancy, fee collections,
                    and tenant turnover without running between hostel floors.
                  </p>

                  <div className="d-flex flex-column gap-3">
                    {reportsList.map((item, idx) => (
                      <div key={idx} className="d-flex align-items-start gap-3">
                        <div className="product-report-check-icon mt-1">
                          <HiCheckCircle className="text-primary fs-5" />
                        </div>
                        <div>
                          <h5 className="product-report-item-title mb-1">
                            {item.title}
                          </h5>
                          <p className="product-report-item-desc mb-0">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner: Get Started */}
            <div className="product-get-started-banner p-4 p-md-5 rounded-4 mt-5">
              <div className="row align-items-center g-4">
                <div className="col-12 col-lg-8">
                  <span className="product-section-subtitle mb-2 d-block">
                    Get Started
                  </span>
                  <h3 className="product-banner-title mb-2">
                    Run Your Hostel Smarter With DigiStay.
                  </h3>
                  <p className="product-banner-desc mb-0">
                    From bed allocation to automated fee collection and vacating
                    clearance — manage your entire hostel property from one
                    unified platform.
                  </p>
                </div>
                <div className="col-12 col-lg-4 text-lg-end text-start">
                  <Button
                    variant="primary"
                    onClick={() => navigate("/contact")}
                  >
                    Book a demo <FiArrowRight className="ms-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Digistay;