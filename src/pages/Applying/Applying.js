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
      }, 2000); // 2000ms = 2 seconds
    }

    return () => clearTimeout(timer); // Cleanup timeout on unmount or state change
  }, [showModal, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit. Please upload a smaller file.");
        e.target.value = null;
        setResume(null);
        return;
      }
      setResume(file);
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
        },
      );

      const result = await response.json();

      if (result.statusCode === 201) {
        setShowModal(true); // Triggers the 2-second timer useEffect
      } else {
        alert(result.msg || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Application submission error:", error);
      alert(
        "Something went wrong while submitting your application. Please try again.",
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
                        placeholder="Enter Phone Number"
                        required
                        onChange={handleInputChange}
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
