import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import "./CareersPositions.css";
import BookingSection from "../../../../components/BookingSection/BookingSection.js";
import { FaArrowRight } from "react-icons/fa";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Vijayawada / Hyderabad",
    experience: "3–6 years",
    type: "Full-time",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
 {
  title: "Cloud Sales Specialist",
  department: "Sales",
  location: "Vijayawada / Hyderabad",
  experience: "2–5 years",
  type: "Full-time",
  tags: [
    "FinOps",
    "Cloud Sales",
    "Cost Optimization",
    "B2B Sales",
    "AWS/Azure/GCP"
  ],
},
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Vijayawada / Hyderabad",
    experience: "2–4 years",
    type: "Full-time",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
  },
  {
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Vijayawada / Hyderabad",
    experience: "1-3 years",
    type: "Full-time",
    tags: ["Google Ads", "Meta Ads", "SEO", "Analytics", "Content Strategy"],
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    location: "Vijayawada / Hyderabad",
    experience: "1–2 years",
    type: "Full-time",
    tags: ["B2B Sales", "CRM", "IT Services", "Enterprise Accounts","Cloud Sales"],
  },
];

const CareersPositions = () => {
 const navigate = useNavigate(); // 2. Initialize navigate

  // 3. Update handleApply to pass state
  const handleApply = (job) => {
    navigate("/applying", { state: { job } });
  };

  return (
    <>
      <section className="career-openings-section py-5">
        <div className="container">
          {/* Header */}
          <Reveal variant={fadeUp} delay={0.1}>
            <div className="row mb-4">
              <div className="col-12">
                <span className="career-subtitle">OPEN POSITIONS</span>
                <h2 className="career-title mt-2">Current openings.</h2>
                <p className="career-header-desc mt-2">
                  Don't see a perfect fit? Email us at{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@digispheretech.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="career-email-link"
                  >
                    careers@digispheretech.in
                  </a>
                   -we hire for talent, not just vacancies.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Job Cards with Staggered Slide & Hover Lift Effect */}
          <div className="row g-3">
            {jobOpenings.map((job, index) => (
              <div key={index} className="col-12">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 * index,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="career-job-card p-4"
                >
                  <div className="row align-items-center g-3">
                    {/* Left Details */}
                    <div className="col-lg-9 col-md-8">
                      <h3 className="career-job-title mb-2">{job.title}</h3>

                      {/* Metadata line */}
                      <div className="career-job-meta d-flex flex-wrap gap-3 mb-3">
                        <span className="career-meta-item">
                          <Briefcase size={15} className="career-meta-icon" />
                          {job.department}
                        </span>
                        <span className="career-meta-item">
                          <MapPin size={15} className="career-meta-icon" />
                          {job.location}
                        </span>
                        <span className="career-meta-item">
                          <Clock size={15} className="career-meta-icon" />
                          {job.experience}
                        </span>
                        <span className="career-job-type-badge">
                          {job.type}
                        </span>
                      </div>

                      {/* Skills Tags */}
                      <div className="career-tags-wrapper d-flex flex-wrap gap-2">
                        {job.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="career-tag-badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Action Button */}
                    <div className="col-lg-3 col-md-4 text-md-end text-start">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="career-apply-btn"
                        onClick={() => handleApply(job)}
                      >
                        Apply Now <FaArrowRight size={14} className="ms-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action Section */}
      <BookingSection
        title="Don't see your role listed?"
        description="We're always looking for exceptional people. Send your portfolio and a note about how you'd contribute  we read every email."
        buttonText="Send Open Application"
        buttonLink="/contact"
      />
    </>
  );
};

export default CareersPositions;
