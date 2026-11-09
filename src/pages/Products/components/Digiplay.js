import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Button from "../../../components/Button/Button";
import customIcon from "../../../assets/Products/digiplay-hero-img.svg";
import feeReportImg from "../../../assets/Products/digiplay-fee-img.svg";
import {
  HiUserAdd,
  HiCurrencyRupee,
  HiClipboardCheck,
  HiCheckCircle,
  HiViewGrid,
  HiTrendingUp,
} from "react-icons/hi";
import "./ProductInnerPage.css";
import Reveal from "../../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../../animations/variants";

const productsFeatures = [
  {
    id: 1,
    icon: <HiUserAdd />,
    title: "Register players in minutes",
    description:
      "Complete onboarding with emergency contacts, blood group, medical notes, and digital documentation.",
    tag: "Instant batch grouping",
  },
  {
    id: 2,
    icon: <HiCurrencyRupee />,
    title: "Never chase a pending fee",
    description:
      "Automated renewal alerts, payment links via SMS, and instant digital receipt generation.",
    tag: "UPI & Gateway settlement",
  },
  {
    id: 3,
    icon: <HiClipboardCheck />,
    title: "Plan batches and personal training",
    description:
      "Assign coaches to morning and evening squads with custom skill development tracking.",
    tag: "Coach ratio enforcement",
  },
  {
    id: 4,
    icon: <HiCheckCircle />,
    title: "Mark attendance in one tap",
    description:
      "Mobile check-in for sessions, instant absence alerts to parents, and monthly attendance percentage metrics.",
    tag: "Zero-lag ground sync",
  },
  {
    id: 5,
    icon: <HiViewGrid />,
    title: "Book grounds without clashes",
    description:
      "Live turf and net lane slot booking grid preventing double bookings between academy & public rentals.",
    tag: "Conflict detection engine",
  },
  {
    id: 6,
    icon: <HiTrendingUp />,
    title: "Know where the money goes",
    description:
      "Track coach salaries, equipment upkeep, utility expenses, and net profit margins in real-time.",
    tag: "Exportable P&L ledger",
  },
];

const roleCardsData = [
  {
    title: "Admin",
    badge: "Master Control",
    description:
      "Full access to every module, financial approvals, fee structures, coach payouts, and configuration.",
  },
  {
    title: "Operator",
    badge: "Operational Desk",
    description:
      "Daily tasks like registering players, collecting fees, marking daily batches, and taking ground bookings.",
  },
];

const roleAccessMatrix = [
  {
    module: "Players and registration",
    admin: "Full access",
    operator: "Add and edit",
  },
  {
    module: "Fees and renewals",
    admin: "Full access",
    operator: "Collect and issue receipts",
  },
  {
    module: "Training and batches",
    admin: "Full access",
    operator: "View & mark sessions",
  },
  {
    module: "Attendance",
    admin: "Full access",
    operator: "Mark and update logs",
  },
  {
    module: "Ground bookings",
    admin: "Approve & lock",
    operator: "Create requests & slots",
  },
  {
    module: "Salaries and expenditure",
    admin: "Approve & pay",
    operator: "No access",
  },
  {
    module: "Reports and settings",
    admin: "Full access",
    operator: "No access",
  },
];

const reportsList = [
  {
    title: "Live revenue tracking",
    description:
      "Instant breakdown across batch subscriptions, kit sales, and turf hires.",
  },
  {
    title: "Player growth and retention",
    description:
      "Cohort analytics tracking dropout rates and renewal frequencies.",
  },
  {
    title: "Fees collected and pending dues",
    description:
      "Real-time status tags showing which parents need automated WhatsApp/SMS prompts.",
  },
  {
    title: "Recent activity across the academy",
    description:
      "Audit trail of every check-in, receipt generated, and court reservation.",
  },
];

const Digiplay = () => {
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
                    DigiPlay · Sports Academy Management
                  </p>
                  <h1 className="product-hero-title mb-3">
                    Run your whole academy from{" "}
                    <span className="product-text-blue">one screen.</span>
                  </h1>
                  <p className="product-hero-desc mb-4">
                    Players, fees, training, attendance and ground bookings,
                    connected in one platform. No more registers, spreadsheets
                    and chasing parents on WhatsApp.
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
                    alt="DigiPlay Academy Management Dashboard"
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
              Replace fragmented spreadsheets, chat groups, and paper receipts
              with one cohesive system.
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
                    Built For Your Team
                  </span>
                  <h2 className="product-section-title mb-3">
                    The right access for every role.
                  </h2>
                  <p className="product-section-desc">
                    Give staff the tools to execute their daily routines without
                    exposing sensitive payroll, financial reserves, or business
                    intelligence.
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
                      Module Access By Role
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
                          <th className="py-3 text-start">Admin</th>
                          <th className="py-3 text-start">Operator</th>
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
                  alt="Fee Collection and Reports Dashboard Preview"
                  className="img-fluid product-dashboard-preview"
                />
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="product-reports-content">
                <span className="product-section-subtitle mb-2 d-block product-text-center">
                  Dashboard And Reports
                </span>
                <h2 className="product-section-title mb-3 product-text-center">
                  See your academy at a glance.
                </h2>
                <p className="product-section-desc mb-4 product-text-center">
                  Get complete visibility over your sports academy's operations
                  without compiling numbers manually at month end.
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
                  Run Your Academy Smarter With DigiPlay
                </h3>
                <p className="product-banner-desc mb-0">
                  From player registration to fee collection, training,
                  attendance and ground bookings—manage your entire academy from
                  one platform.
                </p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end text-start">
                <Button variant="primary" onClick={() => navigate("/contact")}>
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

export default Digiplay;
