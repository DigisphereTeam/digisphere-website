import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Button from "../../../components/Button/Button";
import customIcon from "../../../assets/Products/digilog-hero-img.svg";
import feeReportImg from "../../../assets/Products/digilog-report-img.svg";
import {
  HiUserAdd,
  HiClipboardCheck,
  HiCheckCircle,
  HiCalendar,
  HiChartBar,
  HiCurrencyRupee,
} from "react-icons/hi";
import { MdFingerprint } from "react-icons/md";
import "./ProductInnerPage.css";
import Reveal from "../../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../../animations/variants";

const productsFeatures = [
  {
    id: 1,
    icon: <HiUserAdd />,
    title: "Onboard & Enroll in Minutes",
    description:
      "Complete employee profiles with departments, designations, and biometric fingerprint template capture.",
    tag: "Instant Biometric Sync",
  },
  {
    id: 2,
    icon: <MdFingerprint />,
    title: "Biometric Thumb-Scan Tracking",
    description:
      "Morning and evening thumb-scan verification on biometric hardware with zero-delay cloud sync.",
    tag: "Morning & Evening Verification",
  },
  {
    id: 3,
    icon: <HiCurrencyRupee />,
    title: "Automated Salary Management",
    description:
      "Automatically calculate monthly employee salaries based on attendance, approved leaves, and loss-of-pay (LOP) deductions.",
    tag: "Attendance-Based Salary Calculation",
  },
  {
    id: 4,
    icon: <HiClipboardCheck />,
    title: "End-to-End Leave Lifecycle",
    description:
      "Employee self-service applications with instant real-time approval or rejection workflows for HR.",
    tag: "Real-Time Approval Engine",
  },
  {
    id: 5,
    icon: <HiCalendar />,
    title: "Company Calendar & Events",
    description:
      "Unified schedule for corporate events, public holidays, and employee birthdays across the organization.",
    tag: "Organization-wide Calendar",
  },
  {
    id: 6,
    icon: <HiChartBar />,
    title: "Automated Monthly Reports",
    description:
      "One-click tracking of calculated total working hours, present, absent, and late entry statistics.",
    tag: "Exportable Monthly Analytics",
  },
];

const roleCardsData = [
  {
    title: "HR / Admin",
    badge: "Administration Scope",
    description:
      "Comprehensive organizational control — employee master records, departments, biometric hardware enrollment, attendance management, leave decisions, salary management, company expenses, and reports.",
  },
  {
    title: "Employee",
    badge: "Self-Service Scope",
    description:
      "Dedicated portal — personal attendance logs (From-Date to To-Date), monthly salary details, leave balance tracking, and holiday calendar. No administrative or peer record access.",
  },
];

const roleAccessMatrix = [
  {
    module: "Executive Dashboard",
    admin: "Full access & analytics",
    operator: "No access (Redirected)",
  },
  {
    module: "Employee Management",
    admin: "Add, edit, view & delete",
    operator: "No access",
  },
  {
    module: "Salary Management",
    admin: "Full Access",
    operator: "View Own Salary",
  },
  {
    module: "Biometric Enrollment",
    admin: "Hardware fingerprint sync",
    operator: "No access",
  },
  {
    module: "Attendance History",
    admin: "Monitor all workforce logs",
    operator: "View personal logs only",
  },
  {
    module: "Leave Management",
    admin: "Review, approve & reject",
    operator: "Apply & view balance (My Leaves)",
  },
  {
    module: "Expenditure & Reports",
    admin: "Full financial & monthly export",
    operator: "No access",
  },
];

const reportsList = [
  {
    title: "Live thumb-scan activity tracking",
    description:
      "Real-time feed of the 10 most recent punches across all biometric terminals.",
  },
  {
    title: "Departmental strength & distribution",
    description:
      "Instant visual breakdown of staff allocations across teams and branches.",
  },
  {
    title: "Automated attendance and leave summaries",
    description:
      "Detailed monthly breakdown of employee attendance, approved leaves, absences, and late entries.",
  },
  {
    title: "One-click exportable monthly payroll reports",
    description:
      "Detailed salary reports with attendance-based calculations, leave deductions, and employee-wise payment details.",
  },
];

const Digilog = () => {
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
                    DigiLog · Attendance &amp; HR Management System
                  </p>
                  <h1 className="product-hero-title mb-3">
                    Run your entire workforce from{" "}
                    <span className="product-text-blue">one screen.</span>
                  </h1>
                  <p className="product-hero-desc mb-4">
                    Employee profiles, biometric fingerprint enrollment, daily
                    attendance, leave approvals, and salary management, all
                    connected in one unified platform. No more manual punch
                    registers, paper slips, or spreadsheet chaos.
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
                    alt="DigiLog Attendance and HR Management Dashboard"
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
              Replace fragmented registers, manual attendance records, and paper
              leave forms with one unified HR system to manage employees,
              attendance, leaves, and salaries.
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
                    Give HR and employees the right tools to manage their daily
                    tasks, attendance, leave requests, and salary details with
                    role-based access, data privacy, and secure permissions.
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
                          <th className="py-3 text-start">HR / Admin</th>
                          <th className="py-3 text-start">Employee</th>
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
                    alt="Monthly Attendance and Workforce Summary Preview"
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
                    See your workforce at a glance.
                  </h2>
                  <p className="product-section-desc mb-4 product-text-center">
                    Get complete visibility over your organization's daily
                    punches and monthly performance without compiling registers
                    manually.
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
                    Run Your Workforce Smarter With DigiLog.
                  </h3>
                  <p className="product-banner-desc mb-0">
                    From biometric registration to attendance tracking, leave
                    management, and automated monthly salary calculations —
                    manage your entire HR operation from one unified platform.
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

export default Digilog;
