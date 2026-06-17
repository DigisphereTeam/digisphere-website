import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WebsiteFAQCTASection.css";

import Reveal from "../../../../animations/Reveal";
import { fadeUp,fadeLeft,fadeRight } from "../../../../animations/variants";
import Button from "../../../../components/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { RxPeople } from "react-icons/rx";

const faqData = [
  {
    question: "How long does a website project take?",
    answer:
      "Most website projects are completed within 2–6 weeks depending on complexity. Timelines may vary based on content, revisions, and required features.",
  },
  {
    question: "How much does a professional website cost?",
    answer:
      "Website pricing depends on the scope and functionality required. We provide custom quotes based on your business goals and requirements.",
  },
  {
    question: "Will the website be mobile responsive?",
    answer:
      "Yes, every website we develop is fully responsive. It is optimized to work seamlessly across desktops, tablets, and mobile devices.",
  },
  {
    question: "Do you provide hosting support?",
    answer:
      "Yes, we can assist with hosting setup and ongoing support. Our team ensures your website remains secure and performs efficiently.",
  },
  {
    question: "Will my website be SEO optimized?",
    answer:
      "Yes, we follow SEO best practices during development. This helps improve visibility and search engine performance from the start.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can modernize your existing website and improve its design, performance, user experience, and conversion rate.",
  },
];

const WebsiteFAQCTASection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="website-faq-cta">
      {/* FAQ SECTION */}

      <div className="faq-section">
        <Container>
          <Reveal variants={fadeUp}>
            <h2 className="section-heading text-center">
              Frequently asked <span>questions.</span>
            </h2>
          </Reveal>

          <div className="faq-wrapper">
            {faqData.map((item, index) => (
              <Reveal key={index} variants={fadeUp}>
                <div className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>

                    <span
                      className={`faq-icon ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA SECTION */}

      <div className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Reveal variants={fadeUp}>
                <h2 className="section-heading cta-heading text-center">
                  Your website should be
                  <br />
                  <span>generating business.</span>
                  <br />
                  Not collecting dust.
                </h2>
              </Reveal>

              <Reveal variants={fadeUp}>
                <p className="cta-description text-center">
                  Book a free digital audit and discover exactly what's holding
                  your website back.
                </p>
              </Reveal>

              <Reveal variants={fadeUp}>
                <div className="cta-buttons">
                  <Button variant="primary" icon={<FaArrowRight/>}>
                    Book Free Audit
                  </Button>

                  <Button variant="secondary" icon={<RxPeople />} iconPosition="left" >
                    Talk To Our Team
                  </Button>
                </div>
              </Reveal>

              <Row className="stats-row">
                <Col xs={12} md={4}>
                  <Reveal variants={fadeLeft}>
                    <div className="stat-item">
                      <span className="dot"></span>
                      Response Within 4 Hours
                    </div>
                  </Reveal>
                </Col>

                <Col xs={12} md={4}>
                  <Reveal variants={fadeUp}>
                    <div className="stat-item">
                      <strong>150+</strong> Websites Delivered
                    </div>
                  </Reveal>
                </Col>

                <Col xs={12} md={4}>
                  <Reveal variants={fadeRight}>
                    <div className="stat-item">
                      <strong>310+</strong> Clients Served
                    </div>
                  </Reveal>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default WebsiteFAQCTASection;