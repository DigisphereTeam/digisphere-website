import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Button from "../../../components/Button/Button";
import customIcon from "../../../assets/Products/digicampus-hero-img.svg";
import feeReportImg from "../../../assets/Products/digicampus-reports-img.svg";
import {
  HiUser,
  HiCurrencyRupee,
  HiClock,
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
    icon: <HiUser />,
    title: "Admissions & student profiles",
    description:
      "Complete student record lifecycle with automated roll numbering, linked parent profiles, emergency info, and class-section allocations.",
    tag: "Instant student onboarding",
  },
  {
    id: 2,
    icon: <HiCurrencyRupee />,
    title: "Never chase a pending fee",
    description:
      "Automated fee structure for tuition, transport & exams with scheduled SMS reminders, instant receipts, and partial payment handling.",
    tag: "UPI & online fee collection",
  },
  {
    id: 3,
    icon: <HiClock />,
    title: "Clash-free timetables & periods",
    description:
      "Automated weekly period grid assigning teachers and subjects while blocking duplicate teacher bookings across class-sections.",
    tag: "Teacher conflict detection",
  },
  {
    id: 4,
    icon: <HiCheckCircle />,
    title: "Mark attendance in one tap",
    description:
      "One-tap classroom check-ins for teachers with instant parent absence alerts, monthly attendance registers, and leave tracking.",
    tag: "Instant parent absence alerts",
  },
  {
    id: 5,
    icon: <HiViewGrid />,
    title: "Exams, marks & instant report cards",
    description:
      "Schedule unit and term exams, enter subject marks, auto-compute ranks and GPAs, and securely publish printable report cards.",
    tag: "Automated report card generator",
  },
  {
    id: 6,
    icon: <HiTrendingUp />,
    title: "Know institutional revenue & expenses",
    description:
      "Live financial ledger combining tuition, bus fees, and campus expenses like staff payroll, library acquisitions, and facility upkeep.",
    tag: "Exportable P&L ledger",
  },
];

const roleCardsData = [
  {
    title: "Admin",
    badge: "Master Control",
    description:
      "Complete access to school management, academic setup, staff management, student records, fee administration, and overall institutional operations.",
  },
  {
    title: "Teacher & Staff",
    badge: "Academic & Operations Desk",
    description:
      "Manage assigned classes, student attendance, marks entry, timetables, lesson activities, and day-to-day academic responsibilities.",
  },
  {
    title: "Accountant",
    badge: "Financial Management",
    description:
      "Handle student fee collection, generate receipts, track pending payments, manage expenses, and maintain financial records and reports.",
  },
  {
    title: "Student & Parent",
    badge: "Learning & Parent Portal",
    description:
      "Access attendance records, academic progress, exam results, homework, fee details, announcements, and important school updates.",
  },
];

const roleAccessMatrix = [
  {
    module: "Students & Admissions",
    admin: "Full access",
    teacher: "Class only",
    accountant: "View only",
    parent: "Own record",
  },
  {
    module: "Staff & Employee Management",
    admin: "Full access",
    teacher: "Own profile",
    accountant: "View only",
    parent: "No access",
  },
  {
    module: "Academic Year, Class & Section Management",
    admin: "Full access",
    teacher: "Assigned classes",
    accountant: "View only",
    parent: "Child's class",
  },
  {
    module: "Fees & Payment Dues",
    admin: "Full access",
    teacher: "No access",
    accountant: "Full access",
    parent: "Own dues",
  },
  {
    module: "Timetable & Schedules",
    admin: "Full access",
    teacher: "Own schedule",
    accountant: "No access",
    parent: "Class view",
  },
  {
    module: "Daily Attendance",
    admin: "Full access",
    teacher: "Class mark",
    accountant: "No access",
    parent: "Own history",
  },
  {
    module: "Exams & Report Cards",
    admin: "Full access",
    teacher: "Enter marks",
    accountant: "No access",
    parent: "Published only",
  },
  {
    module: "Homework & Assignments",
    admin: "Full access",
    teacher: "Create & evaluate",
    accountant: "No access",
    parent: "View only",
  },
  {
    module: "Library & Transport Management",
    admin: "Full access",
    teacher: "View only",
    accountant: "No access",
    parent: "Assigned only",
  },
  {
    module: "Revenue, Expenses & Financial Reports",
    admin: "Full access",
    teacher: "No access",
    accountant: "Full access",
    parent: "No access",
  },
];

const reportsList = [
  {
    title: "Live fee & tuition tracking",
    description:
      "Instant breakdown across admission, term fees, bus routes, and lab fees.",
  },
  {
    title: "Student retention & attendance health",
    description:
      "Real-time cohort analytics tracking daily absences, chronic leaves, and term enrollment rates.",
  },
  {
    title: "Automated fee alerts & parent notices",
    description:
      "Scheduled WhatsApp/SMS notifications with direct UPI payment links before due dates.",
  },
  {
    title: "Auditable campus activity log",
    description:
      "Tamper-proof audit trail for admissions, fee receipts, marks submissions, and staff sign-ins.",
  },
];

const Digicampus = () => {
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
                    DigiCampus · Institution &amp; School Management
                  </p>
                  <h1 className="product-hero-title mb-3">
                    Run your entire institution from{" "}
                    <span className="product-text-blue">one screen.</span>
                  </h1>
                  <p className="product-hero-desc mb-4">
                    Students, teachers, attendance, fees, exams, and timetable,
                    connected in one unified platform. No more fragmented
                    registers, manual spreadsheets, and scattered parent
                    communications.
                  </p>
                  <div className="product-hero-cta">
                    <Button
                      variant="primary"
                      onClick={() => navigate("/contact")}
                    >
                      Talk to us
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
                    alt="DigiCampus Institution Management Dashboard"
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
                    Built For Your Institution
                  </span>
                  <h2 className="product-section-title mb-3">
                    The right access for every role.
                  </h2>
                  <p className="product-section-desc">
                    Give administrators, teachers, accountants, staff, parents,
                    and students role-scoped tools without exposing sensitive
                    financial records or administrative controls.
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
                          <th className="py-3 text-start">Teacher</th>
                          <th className="py-3 text-start">Accountant</th>
                          <th className="py-3 text-start">Parent/Student</th>
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
                              {row.teacher}
                            </td>
                            <td
                              className={`py-3 text-start ${
                                row.accountant === "Full access"
                                  ? "product-text-blue fw-semibold"
                                  : "text-muted"
                              }`}
                            >
                              {row.accountant}
                            </td>
                            <td className="py-3 text-muted text-start">
                              {row.parent}
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
                    alt="Fee Collection and Audit Reports Dashboard Preview"
                    className="img-fluid product-dashboard-preview"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="product-reports-content">
                  <span className="product-section-subtitle mb-2 d-block product-text-center">
                    Dashboard And Audit Reports
                  </span>
                  <h2 className="product-section-title mb-3 product-text-center">
                    See your institution at a glance.
                  </h2>
                  <p className="product-section-desc mb-4 product-text-center">
                    Get complete visibility over your school's academics,
                    collections, and operations without compiling numbers
                    manually at month end.
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
                    Run Your Institution Smarter With DigiCampus
                  </h3>
                  <p className="product-banner-desc mb-0">
                    From student admission to fee collection, attendance,
                    timetables, and report cards — manage your entire school
                    from one unified platform.
                  </p>
                </div>
                <div className="col-12 col-lg-4 text-lg-end text-start">
                  <Button
                    variant="primary"
                    onClick={() => navigate("/contact")}
                  >
                    Talk to Us <FiArrowRight className="ms-1" />
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

export default Digicampus;