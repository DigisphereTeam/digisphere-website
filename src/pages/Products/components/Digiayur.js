import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Button from "../../../components/Button/Button";
import customIcon from "../../../assets/Products/digiayur-hero-img.svg";
import feeReportImg from "../../../assets/Products/digiayur-report-img.svg";
import {
  HiTicket,
  HiHeart,
  HiCalendar,
  HiBeaker,
  HiHome,
  HiShieldCheck,
  HiCheckCircle,
} from "react-icons/hi";
import "./ProductInnerPage.css";
import Reveal from "../../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../../animations/variants";

const journeySteps = [
  {
    id: 1,
    stage: "Register",
    title: "OPD Token",
    description:
      "Smart token generation with fee calculation (₹500 new / ₹400 return) & Aadhaar/phone history search.",
  },
  {
    id: 2,
    stage: "Triage",
    title: "Check Vitals",
    description:
      "Nurse records BP, pulse, temp, SpO2, and pain score with instant abnormal vitals warning alert.",
  },
  {
    id: 3,
    stage: "Diagnosis",
    title: "See Doctor",
    description:
      "Full VitStrip timeline review, clinical diagnosis, herbal formulation prescription & therapy orders.",
  },
  {
    id: 4,
    stage: "Clinical Care",
    title: "Therapy & Tests",
    description:
      "Panchakarma session slots, lab diagnostic turnaround tracking, and authentic herbal pharmacy dispensing.",
  },
  {
    id: 5,
    stage: "IPD / Bill",
    title: "Stay & Discharge",
    description:
      "Bed assignment, daily Ayurveda food diet coupons, itemized billing summary, and NABH discharge slip.",
  },
];
const productsFeatures = [
  {
    id: 1,
    icon: <HiTicket />,
    title: "Front Desk & OPD Tokens",
    description:
      "Smart token generation with configured OPD fees (₹500 for new visits, ₹400 for return consultations), fast search, and patient history drawer.",
    tag: "Smart Token Dispensing",
  },
  {
    id: 2,
    icon: <HiHeart />,
    title: "Nurse Station & VitStrip",
    description:
      "Capture blood pressure, pulse, temperature, SpO2, and pain levels. Abnormal readings flag instantly on the doctor's consultation console.",
    tag: "Real-Time Vitals Triage",
  },
  {
    id: 3,
    icon: <HiCalendar />,
    title: "Panchakarma Scheduling",
    description:
      "Slot-based room & therapist allocation for Shirodhara, Basti, Abhyangam, and Nasya. Track protocol execution and session completion status.",
    tag: "Ayurvedic Protocol Planner",
  },
  {
    id: 4,
    icon: <HiBeaker />,
    title: "Pharmacy & Formulations",
    description:
      "Ayurvedic herb, kashayam, and arishta inventory management. Automatic batch tracking, expiry alerts, and direct doctor prescription dispensing.",
    tag: "Prescription-to-Dispense Flow",
  },
  {
    id: 5,
    icon: <HiHome />,
    title: "IPD Rooms & Food Coupons",
    description:
      "General, Deluxe, and Suite bed allocations with live occupancy boards. Manage tailored Ayurvedic therapeutic diets and patient food coupons.",
    tag: "Inpatient Bed & Diet Board",
  },
  {
    id: 6,
    icon: <HiShieldCheck />,
    title: "NABH Compliance & Billing",
    description:
      "Transparent itemized billing: room charges, therapy sessions, diagnostics, and medicines with complete clinical audit trails and access security.",
    tag: "NABH Audit & Settlement",
  },
];

const roleCardsData = [
  {
    title: "Admin / Medical Director",
    badge: "Super Control",
    description:
      "Full institutional visibility, tariff setups, billing approvals, financial reporting, and NABH compliance logs.",
  },
  {
    title: "Pharmacy Desk",
    badge: "Inventory Desk",
    description:
      "Real-time prescription dispensing, Ayurvedic herb inventory, reorder triggers, and batch expiry tracking.",
  },
  {
    title: "Reception Desk",
    badge: "Front Office",
    description:
      "Token allocation (₹500 / ₹400), patient registration, appointment scheduling, and primary OPD receipts.",
  },
];

const roleColumns = ["Admin", "Doctor", "Nurse", "Pharmacy", "Reception"];

// access array order: Admin, Doctor, Nurse, Pharmacy, Reception
const roleAccessMatrix = [
  {
    module: "Hospital Dashboard",
    access: [
      "Full Analytics",
      "OPD & Inpatients",
      "Ward Vitals",
      "Stock Alerts",
      "Token Queue",
    ],
  },
  {
    module: "Patients & OPD Tokens",
    access: [
      "Full Control",
      "View Queue",
      "Call Patient",
      "No Access",
      "Issue & Collect",
    ],
  },
  {
    module: "Nursing & Consultation",
    access: [
      "Audit Logs",
      "Diagnose & Rx",
      "Record Vitals",
      "No Access",
      "No Access",
    ],
  },
  {
    module: "Panchakarma & Lab",
    access: [
      "Full Control",
      "Prescribe",
      "Session Status",
      "Consumables",
      "Book Slots",
    ],
  },
  {
    module: "Pharmacy Dispense",
    access: [
      "Stock & Audit",
      "View Formulary",
      "Ward Indent",
      "Dispense & Batch",
      "Bill Sync",
    ],
  },
  {
    module: "IPD Rooms & Food Coupons",
    access: [
      "Bed Master",
      "Diet Orders",
      "Daily Diet Slip",
      "No Access",
      "Bed Allocation",
    ],
  },
  {
    module: "Billing & Discharge",
    access: [
      "Final Approval",
      "Discharge Sum.",
      "Ward Clearance",
      "Itemize Meds",
      "Generate Bill",
    ],
  },
  {
    module: "Quality / NABH & Security",
    access: ["Full Access", "No Access", "No Access", "No Access", "No Access"],
  },
];

const reportsList = [
  {
    title: "NABH-compliant clinical audit trails",
    description:
      "Every vital entry, prescription modification, and fee waiver is date-stamped with operator IDs.",
  },
  {
    title: "Automated SMS appointment reminders",
    description:
      "Proactive scheduled alerts sent at 1 week, 2 days, and 1 day prior to consultation & Panchakarma sessions.",
  },
  {
    title: "Real-time Patient FlowBar tracking",
    description:
      "Monitors progression from Reception Token → Nurse Vitals → Doctor → Panchakarma/Lab → Billing.",
  },
  {
    title: "Integrated food coupons and therapeutic diets",
    description:
      "Ayurvedic Pathya diet meal tracking connected with IPD billing and kitchen fulfillment.",
  },
];

const Digiayur = () => {
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
                    DigiAyur · Ayurvedic Hospital Management System
                  </p>
                  <h1 className="product-hero-title mb-3">
                    Run your entire hospital &amp; patient care from{" "}
                    <span className="product-text-blue">one screen.</span>
                  </h1>
                  <p className="product-hero-desc mb-4">
                    OPD token registration, live vitals, Panchakarma therapies,
                    pharmacy dispensing, IPD bed allocations, and
                    NABH-compliant billing — connected in one unified Ayurvedic
                    hospital platform.
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
                    alt="Ayurvedic Hospital Management Dashboard"
                    className="img-fluid product-dashboard-preview"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

     {/* SECTION: 5-STEP PATIENT JOURNEY */}
<section className="product-journey-section py-5">
  <div className="container">
    <div className="text-center mb-5">
      <span className="product-journey-subtitle mb-2 d-block">
        The 5-Step Ayurvedic Patient Journey
      </span>
      <h2 className="product-section-title mb-3">
        Seamless care from reception to discharge.
      </h2>
      <p className="product-section-desc mx-auto">
        Every patient movement is orchestrated in real time across
        departments with zero paper trail bottlenecks.
      </p>
    </div>

    <div className="row g-3">
      {journeySteps.map((step) => (
        <div key={step.id} className="col-12 col-md-6 col-lg">
          <Reveal className="h-100" variant={fadeUp} delay={step.id * 0.12}>
            <div className="product-journey-card h-100 p-4">
              <div className="product-journey-step mb-3">{step.id}</div>
              <span className="product-journey-stage d-block mb-1">
                {step.stage}
              </span>
              <h3 className="product-journey-card-title mb-2">
                {step.title}
              </h3>
              <p className="product-journey-card-desc mb-0">
                {step.description}
              </p>
            </div>
          </Reveal>
        </div>
      ))}
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
              Replace disjointed manual registers, paper prescriptions, and
              billing slips with one integrated hospital management suite.
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
                    Built For Your Hospital Team
                  </span>
                  <h2 className="product-section-title mb-3">
                    The right access for every clinical role.
                  </h2>
                  <p className="product-section-desc">
                    Role-Based Access Control (RBAC) ensures physicians, nurses,
                    therapists, pharmacists, and front desk executives only see
                    what they need.
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
                      Hospital Module Access By Role
                    </span>
                    <span className="product-rbac-security-label">
                      NABH Security Layer
                    </span>
                  </div>

                  <div className="table-responsive">
                    <table className="table align-middle mb-0 product-custom-rbac-table">
                      <thead>
                        <tr>
                          <th className="py-3 text-start">Module Group</th>
                          {roleColumns.map((col) => (
                            <th key={col} className="py-3 text-start">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {roleAccessMatrix.map((row, idx) => (
                          <tr key={idx}>
                            <td className="py-3 fw-medium text-dark text-start">
                              {row.module}
                            </td>
                            {row.access.map((value, colIdx) => (
                              <td
                                key={colIdx}
                                className={`py-3 text-start ${
                                  colIdx === 0
                                    ? "product-text-blue fw-semibold"
                                    : "text-muted"
                                }`}
                              >
                                {value}
                              </td>
                            ))}
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
                    alt="Today's Hospital Census and Revenue Preview"
                    className="img-fluid product-dashboard-preview"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="product-reports-content">
                  <span className="product-section-subtitle mb-2 d-block product-text-center">
                    Hospital Dashboard And Metrics
                  </span>
                  <h2 className="product-section-title mb-3 product-text-center">
                    Total clinical and operational visibility.
                  </h2>
                  <p className="product-section-desc mb-4 product-text-center">
                    Gain real-time oversight of daily consultations, therapy
                    room utilization, and inpatient beds without running between
                    counters.
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
                    Run Your Ayurvedic Hospital Smarter With HMS.
                  </h3>
                  <p className="product-banner-desc mb-0">
                    From OPD token counters to Panchakarma therapy suites,
                    herbal dispensaries, inpatient beds, and NABH-compliant
                    discharge summaries — unify your hospital today.
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

export default Digiayur;