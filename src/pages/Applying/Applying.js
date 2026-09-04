import React, { useState, useEffect } from "react";
import "./Applying.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGlobe,
  FaBuilding,
  FaBriefcase,
  FaFileUpload,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const Applying = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedJob = location.state?.job;

  const [resume, setResume] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 1. Complete Form State Initialization
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    linkedin: "",
    portfolio: "",
  });

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-close modal after 2 seconds and navigate
  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
        navigate("/Resources/careers");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showModal, navigate]);

  // 2. Generic Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Strict 10-Digit Only Phone Handler
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  // 4. File Upload Handler
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();

      formPayload.append("applied_role", selectedJob?.title || "Open Position");
      formPayload.append("full_name", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("phone_number", formData.phone);
      formPayload.append("current_location", formData.location);
      formPayload.append("experience", formData.experience);
      formPayload.append("linkedin_profile", formData.linkedin);
      formPayload.append("portfolio_url", formData.portfolio);

      if (resume) {
        formPayload.append("resume", resume);
      }

      const response = await fetch(
        "https://annapurnafarms.digispheretech.in/job-applications",
        {
          method: "POST",
          body: formPayload,
        }
      );

      const result = await response.json();

      if (result.statusCode === 201) {
        setShowModal(true);
      } else {
        alert(result.msg || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Application submission error:", error);
      alert(
        "Something went wrong while submitting your application. Please try again."
      );
    }
  };

  return (
    <div className="applying-wrapper py-5 position-relative">
      <div className="container" style={{ maxWidth: "1100px" }}>
        <div className="row g-4 align-items-start">
          {/* LEFT SIDE: JOB OVERVIEW */}
          <div className="col-lg-5 col-md-12">
            <div className="applying-job-info pe-lg-3">
              <span className="applying-category text-uppercase fw-bold">
                CAREERS /{" "}
                {selectedJob?.department || selectedJob?.category || "GENERAL"}
              </span>
              <h1 className="applying-job-title mt-1 mb-4">
                {selectedJob?.title || "Open Position"}
              </h1>

              {/* DETAILS CARD */}
              <div className="applying-details-card p-4 mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="applying-icon-wrapper me-3">
                    <FaBuilding size={16} />
                  </div>
                  <div>
                    <div className="applying-meta-label">DEPARTMENT</div>
                    <div className="applying-meta-value">
                      {selectedJob?.department || "N/A"}
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="applying-icon-wrapper me-3">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <div className="applying-meta-label">LOCATION</div>
                    <div className="applying-meta-value">
                      {selectedJob?.location || "N/A"}
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="applying-icon-wrapper me-3">
                    <FaBriefcase size={16} />
                  </div>
                  <div>
                    <div className="applying-meta-label">REQUIREMENT</div>
                    <div className="applying-meta-value">
                      {selectedJob?.experience || "N/A"}
                    </div>
                  </div>
                </div>

                {selectedJob?.type && (
                  <div className="d-flex align-items-center">
                    <div className="applying-icon-wrapper me-3">
                      <FaClock size={16} />
                    </div>
                    <div>
                      <div className="applying-meta-label">EMPLOYMENT TYPE</div>
                      <div className="applying-meta-value">
                        {selectedJob.type}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SKILLS TAGS */}
              {selectedJob?.tags && selectedJob.tags.length > 0 && (
                <div className="mb-4">
                  <h6 className="fw-bold mb-2">Required Skills</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedJob.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="badge bg-light text-dark border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ROLE RESPONSIBILITIES CARD WITH TOP BLUE BAR */}
              <div className="applying-responsibilities-card p-4 mb-4 rounded-4 ">
                <h5 className="fw-bold mb-3 text-dark">
                  Role's & Responsibilities
                </h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                  {(() => {
                    // 1. If explicit responsibilities exist in selectedJob, use them
                    if (
                      selectedJob?.responsibilities &&
                      selectedJob.responsibilities.length > 0
                    ) {
                      return selectedJob.responsibilities;
                    }

                    const title = (selectedJob?.title || "").toLowerCase();

                    // 2. Specific matching for requested roles
                    if (title.includes("full stack")) {
                      return [
                        "Architect and maintain scalable frontend and backend Web applications",
                        "Design and optimize relational and non-relational database schemas",
                        "Develop secure RESTful APIs and integrate third-party microservices",
                        "Collaborate with cross-functional teams to define technical requirements",
                        "Ensure high performance, mobile responsiveness, and code security",
                      ];
                    }

                    if (title.includes("finops") || title.includes("cloud cost")) {
                      return [
                        "Identify, drive, and close cloud cost optimization sales opportunities",
                        "Conduct cloud spend assessments and demo FinOps platforms to enterprise clients",
                        "Develop relationship management strategies with IT leadership and CFOs",
                        "Partner with cloud architects to build ROI proposals for cloud governance",
                        "Achieve quarterly revenue targets through strategic pipeline management",
                      ];
                    }

                    if (title.includes("ui/ux") || title.includes("designer")) {
                      return [
                        "Create user-centered designs by understanding business requirements and user feedback",
                        "Build interactive wireframes, storyboards, user flows, and high-fidelity prototypes",
                        "Establish and maintain scalable design systems and brand UI guidelines",
                        "Conduct usability testing, user research, and analyze engagement metrics",
                        "Collaborate closely with frontend developers to ensure accurate UI execution",
                      ];
                    }

                    if (title.includes("digital marketing")) {
                      return [
                        "Plan, execute, and optimize multi-channel marketing strategies (SEO, PPC, Social, Email)",
                        "Manage social media platforms, content schedules, and brand awareness campaigns",
                        "Monitor campaign performance, ROI, and website traffic using analytics tools",
                        "Create high-converting ad copy and collaborate on visual marketing assets",
                        "Identify targeted market segments to continuously increase lead conversion",
                      ];
                    }

                    if (title.includes("business development")) {
                      return [
                        "Identify, research, and prospect new business leads and strategic enterprise clients",
                        "Conduct cold outreach, pitch presentations, and discovery calls with prospects",
                        "Build and nurture strong strategic relationships with key corporate decision-makers",
                        "Negotiate contracts, close deals, and achieve revenue and expansion targets",
                        "Collaborate with tech and delivery teams to align services with client needs",
                      ];
                    }

                    if (title.includes("frontend") || title.includes("react")) {
                      return [
                        "Develop responsive, high-performance UI components using React.js",
                        "Collaborate with UI/UX designers to translate wireframes into interactive code",
                        "Optimize applications for maximum speed, performance, and scalability",
                        "Integrate frontend components with RESTful APIs and backend services",
                        "Ensure cross-browser compatibility and mobile responsiveness",
                      ];
                    }

                    if (title.includes("backend") || title.includes("node") || title.includes("java")) {
                      return [
                        "Design and maintain scalable server-side architecture and APIs",
                        "Manage and optimize database performance, schemas, and queries",
                        "Ensure robust security practices and data protection mechanisms",
                        "Integrate third-party services and microservices architecture",
                      ];
                    }

                    // 3. Default generic responsibilities fallback
                    return [
                      "Design and maintain scalable software architecture",
                      "Build robust RESTful APIs and microservices",
                      "Write clean, efficient, and well-documented code",
                      "Collaborate cross-functionally with product teams",
                      "Conduct thorough code reviews and mentor team members",
                    ];
                  })().map((item, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-center gap-2 text-secondary fs-6"
                    >
                      <FaCheckCircle
                        className="text-primary flex-shrink-0"
                        size={16}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM CARD */}
          <div className="col-lg-7 col-md-12">
            <div className="card applying-form-card p-4 p-md-5">
              <h3 className="applying-form-title mb-1">Personal Information</h3>
              <p className="applying-form-subtitle mb-4">
                Please provide your basic contact details so we can reach you
                regarding your application for{" "}
                <strong>{selectedJob?.title || "this position"}</strong>.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label applying-label">Role</label>
                  <div className="input-group">
                    <span className="input-group-text applying-input-icon">
                      <FaBriefcase />
                    </span>
                    <input
                      type="text"
                      className="form-control applying-input bg-light fw-bold"
                      value={selectedJob?.title || "Open Position"}
                      readOnly
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label applying-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text applying-input-icon">
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        className="form-control applying-input"
                        placeholder="Enter Full Name"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label applying-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text applying-input-icon">
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        className="form-control applying-input"
                        placeholder="Enter Email Address"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label applying-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text applying-input-icon">
                        <FaPhone />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        className="form-control applying-input"
                        placeholder="Enter 10-digit Phone Number"
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label applying-label">
                      Current Location <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text applying-input-icon">
                        <FaMapMarkerAlt />
                      </span>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        className="form-control applying-input"
                        placeholder="Enter Current Location"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label applying-label">
                      Experience <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text applying-input-icon">
                        <FaBriefcase />
                      </span>
                      <select
                        name="experience"
                        value={formData.experience}
                        className="form-select applying-input"
                        required
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          Select Total Experience
                        </option>
                        <option value="Fresher / 0 Years">Fresher</option>
                        <option value="0 - 1 Years">0 - 1 Years</option>
                        <option value="1 - 2 Years">1 - 2 Years</option>
                        <option value="3 - 5 Years">3 - 5 Years</option>
                        <option value="5 - 8 Years">5 - 8 Years</option>
                        <option value="8+ Years">8+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label applying-label">
                      Upload Resume / CV <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text applying-input-icon">
                        <FaFileUpload />
                      </span>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        className="form-control applying-input"
                        required
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label applying-label">
                    LinkedIn Profile
                  </label>
                  <div className="input-group">
                    <span className="input-group-text applying-input-icon">
                      <FaLinkedin />
                    </span>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      className="form-control applying-input"
                      placeholder="Enter LinkedIn Profile URL"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label applying-label">
                    Portfolio / Personal Website
                  </label>
                  <div className="input-group">
                    <span className="input-group-text applying-input-icon">
                      <FaGlobe />
                    </span>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      className="form-control applying-input"
                      placeholder="Enter Portfolio URL"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="text-end">
                  <button
                    type="submit"
                    className="btn applying-continue-btn px-4 py-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className="modal fade show d-block modal-animated-backdrop"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-animated-content text-center p-4 border-0 shadow-lg rounded-4">
              <div className="modal-body">
                <FaCheckCircle className="text-success mb-3" size={60} />
                <h3 className="fw-bold mb-2">Applied Successfully!</h3>
                <p className="text-muted mb-0">
                  Thank you, <strong>{formData.fullName}</strong>. Your
                  application for{" "}
                  <strong>{selectedJob?.title || "this role"}</strong> has been
                  received. Redirecting...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applying;