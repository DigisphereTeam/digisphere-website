import React from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import "./TermsService.css";

const termsSections = [
  {
    id: 1,
    title: "1. Introduction",
    text: "By accessing and using Digisphere, you agree to be bound by these Terms & Conditions. If you do not agree, you should not use our website or engage our services. These terms apply to all clients, website visitors, and platform users.",
  },
  {
    id: 2,
    title: "2. User & Client Responsibilities",
    text: "Clients and users are required to provide accurate project details, maintain account/credential confidentiality, and use our services ethically. Misuse, unauthorized system access, or failure to provide necessary assets may lead to project suspension.",
  },
  {
    id: 3,
    title: "3. Scope of Services",
    text: "Digisphere provides custom website design, web application development, brand identity, and technical maintenance. Specific project scope, timelines, and deliverables are defined in individual proposals or client agreements.",
  },
  {
    id: 4,
    title: "4. Payments & Refunds",
    text: "All payments must be completed through authorized payment gateways or bank transfers as outlined in project invoices. Project deposits are non-refundable once work has commenced unless explicitly agreed upon in writing.",
  },
  {
    id: 5,
    title: "5. Intellectual Property",
    text: "Final custom project deliverables transfer to the client upon full payment. Digisphere  retains ownership of its core framework, proprietary code, tools, and pre-existing design assets used during development.",
  },
  {
    id: 6,
    title: "6. Client Credentials & Third-Party Access",
    text: "Access credentials (hosting, server panels, APIs) provided for development are used solely for project execution. Digisphere  is not responsible for security breaches resulting from client-managed external environments.",
  },
  {
    id: 7,
    title: "7. Privacy & Data Protection",
    text: "We handle your personal and project information in accordance with applicable laws. Information collected is used strictly to provide services and improve platform security. We do not sell your data.",
  },
  {
    id: 8,
    title: "8. Third-Party Services",
    text: "Our solutions may integrate with third-party tools (e.g., payment gateways, hosting providers, analytics). Digisphere  is not responsible for the uptime, policies, or practices of third-party vendors.",
  },
  {
    id: 9,
    title: "9. Limitation of Liability",
    text: "Digisphere  is not liable for indirect, incidental, or consequential losses, including server downtime or business interruption, to the fullest extent permitted by law.",
  },
  {
    id: 10,
    title: "10. Termination of Services",
    text: "We reserve the right to suspend or terminate services or ongoing project development without prior notice in the event of non-payment, breach of contract, or illegal platform activity.",
  },
  {
    id: 11,
    title: "11. Governing Law",
    text: "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes shall fall under the jurisdiction of local courts in Andhra Pradesh or Telangana.",
  },
];

const TermsService = () => {
  return (
    <div className="terms-page-wrapper py-5">
      <div className="container" style={{ maxWidth: "850px" }}>
        
        {/* TOP CENTERED HEADER */}
        <div className="text-center mb-4 px-3">
          <h1 className="terms-header-title fw-semibold text-dark mb-2">
            Terms & Conditions
          </h1>
          <p className="terms-header-subtitle text-muted mx-auto" style={{ maxWidth: "620px" }}>
            Please read these terms and conditions carefully before using Digisphere  services. By continuing, you agree to abide by all rules and policies mentioned below.
          </p>
        </div>

        {/* MAIN WHITE CARD CONTAINER */}
        <div className="terms-card bg-white p-4 p-md-5 rounded-3 border shadow-sm">
          <div className="d-flex flex-column gap-4">
            
            {/* SECTIONS 1 TO 11 */}
            {termsSections.map((section) => (
              <div key={section.id} className="terms-section">
                <h2 className="terms-blue-line-heading h6 fw-bold text-dark mb-2 ps-2">
                  {section.title}
                </h2>
                <p className="terms-section-desc text-secondary mb-0">
                  {section.text}
                </p>
              </div>
            ))}

            {/* SECTION 12: CONTACT US */}
            <div className="terms-section">
              <h2 className="terms-blue-line-heading h6 fw-bold text-dark mb-2 ps-2">
                12. Contact Us
              </h2>
              <p className="terms-section-desc text-secondary mb-3">
                For any questions, support requests, or clarifications regarding these Terms & Conditions, you can contact us at:
              </p>

              <ul className="list-unstyled text-secondary d-flex flex-column gap-2 mb-0 ms-1">
                <li className="d-flex align-items-center gap-2">
                  <FiMail className="text-primary flex-shrink-0" size={14} />
                  <span>Email: <a href="mailto:info@digispheretech.in" className="text-decoration-none text-secondary">info@digispheretech.in</a></span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <FiMapPin className="text-primary flex-shrink-0" size={14} />
                  <span>Address: Digisphere  Pvt. Ltd, Hyderabad, Telangana | Vijayawada, Andhra Pradesh, India</span>
                </li>
              </ul>
            </div>

          </div>

          {/* BOTTOM DISCLAIMER BANNER */}
          <div className="terms-disclaimer-banner mt-5 p-3 rounded text-center">
            <p className="mb-0 text-secondary fw-medium">
              By continuing to use Digisphere , you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsService;