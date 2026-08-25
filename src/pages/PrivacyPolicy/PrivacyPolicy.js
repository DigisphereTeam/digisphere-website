import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./PrivacyPolicy.css";

const privacySections = [
  {
    id: 1,
    title: "1. Who We Are & Overview",
    text: "Digisphere  (\"we,\" \"us\") designs, builds, and maintains websites and web applications. This Privacy Policy outlines how we collect, handle, and protect your information across our website and client engagements.",
  },
  {
    id: 2,
    title: "2. Information We Collect",
    text: "We collect information you submit via inquiry forms (name, email, phone, project scope). For development projects, we may process client-provided business content, design assets, and authorized third-party access credentials necessary to build and deploy your application.",
  },
  {
    id: 3,
    title: "3. How We Use Your Information",
    text: "Your data is strictly used to prepare proposals, develop and host web applications, process client billing, provide post-launch technical support, and improve our core digital services.",
  },
  {
    id: 4,
    title: "4. Client Credentials & Development Data",
    text: "Access credentials (hosting, server panels, domain registrars, or APIs) shared during development are used exclusively for project fulfillment. We recommend rotating sensitive credentials following project handover.",
  },
  {
    id: 5,
    title: "5. Cookies & Analytics",
    text: "Our website uses essential cookies and basic analytics (such as pages visited, session duration, and device details) to analyze visitor traffic and improve user experience. You can manage cookies via your browser.",
  },
  {
    id: 6,
    title: "6. Data Sharing & Disclosure",
    text: "We do not sell or rent personal information. Data is shared only with trusted third-party service providers (such as hosting infrastructure or payment gateways) strictly required to deliver our services, or when legally required.",
  },
  {
    id: 7,
    title: "7. Data Protection & Security",
    text: "We apply industry-standard technical safeguards, restricted internal access, and secure data handling procedures. While we implement strict security measures, no online storage system can be guaranteed 100% secure.",
  },
  {
    id: 8,
    title: "8. Data Retention",
    text: "We retain project assets and contact details only for the duration of our business engagement and a reasonable post-delivery support period, after which data is archived or securely deleted.",
  },
  {
    id: 9,
    title: "9. Your Rights & Updates",
    text: "You have the right to request access to, correction of, or deletion of your personal data. We may update this policy periodically, and the latest version will always be posted with an updated effective date.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page-wrapper py-5">
      <div className="container" style={{ maxWidth: "850px" }}>
        
        {/* HEADER SECTION */}
        <div className="text-center mb-4 px-3">
          <h1 className="privacy-header-title fw-semibold text-dark mb-2">
            Privacy Policy
          </h1>
          <p className="privacy-header-subtitle text-muted mx-auto" style={{ maxWidth: "620px" }}>
            At Digisphere , we value your trust and are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, and protect your personal and project information.
          </p>
        </div>

        {/* MAIN CONTAINER CARD */}
        <div className="privacy-card bg-white p-4 p-md-5 rounded-3 border shadow-sm">
          <div className="d-flex flex-column gap-4">
            
            {/* SECTIONS 1 TO 9 */}
            {privacySections.map((section) => (
              <div key={section.id} className="privacy-section">
                <h2 className="privacy-blue-line-heading h6 fw-bold text-dark mb-2 ps-2">
                  {section.title}
                </h2>
                <p className="privacy-section-desc text-secondary mb-0">
                  {section.text}
                </p>
              </div>
            ))}

            {/* SECTION 10: CONTACT US */}
            <div className="privacy-section">
              <h2 className="privacy-blue-line-heading h6 fw-bold text-dark mb-2 ps-2">
                10. Contact Us
              </h2>
              <p className="privacy-section-desc text-secondary mb-3">
                If you have any questions or concerns regarding this Privacy Policy, please contact us:
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

          {/* INNER DISCLAIMER BANNER */}
          <div className="privacy-disclaimer-banner mt-5 p-3 rounded text-center">
            <p className="mb-0 text-secondary fw-medium">
              By using our website and services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;