import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQSection.css";
import Reveal from "../../animations/Reveal";
import { fadeLeft, fadeRight } from "../../animations/variants";

const FAQSection = ({ eyebrow, title, description, linkText, link, faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="service-faq-section">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left Content */}
          <div className="col-lg-6">
            <Reveal variant={fadeRight} delay={0.1}>
              <div className="service-faq-content">
                {eyebrow && (
                  <span className="service-faq-eyebrow">{eyebrow}</span>
                )}

                <h2 className="service-faq-title">{title}</h2>

                {(description || linkText) && (
                  <p className="service-faq-description">
                    {description}{" "}
                    {linkText && (
                      <Link to={link} className="service-faq-link">
                        {linkText}
                      </Link>
                    )}
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          {/* Accordion */}

          <div className="col-lg-6">
            <div className="service-faq-accordion">
              {faqs.map((faq, index) => (
                <Reveal variant={fadeLeft} delay={index * 0.15}>
                  <div
                    key={index}
                    className={`service-faq-item ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <button
                      className="service-faq-question"
                      onClick={() => handleToggle(index)}
                    >
                      <span>{faq.question}</span>

                      <svg
                        className="service-faq-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      className={`service-faq-answer-wrapper ${
                        activeIndex === index ? "open" : ""
                      }`}
                    >
                      <div className="service-faq-answer">{faq.answer}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
