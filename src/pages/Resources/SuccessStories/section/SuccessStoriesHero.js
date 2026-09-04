import React from "react";
import "./SuccessStoriesHero.css";
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeUp } from "../../../../animations/variants";
import { Users, Award, TrendingUp, Star } from "lucide-react";
import Readers from "../../../../assets/Blogs/Readers.svg";
import Ramakrishna from "../../../../assets/success/Dr. Ramakrishna.svg";
import ArvindSharma from "../../../../assets/success/ArvindSharma.svg";
import skilledition from "../../../../assets/success/skilledition (2).svg";
const STATS_DATA = [
  { id: "stat-1", icon: Users, value: "316+", label: "Happy Clients" },
  { id: "stat-2", icon: Award, value: "87%", label: "Retained" },
  {
    id: "stat-3",
    icon: TrendingUp,
    value: "₹50Cr+",
    label: "Revenue Generated",
  },
];

const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    avatarText: "RR",
    avatarColor: "#057DCD",
    quote:
      "Digisphere understood our clinical workflows before they touched the design. The patient p...",
    author: "Dr.T.Satish Chandra",
    company: "Endocare Hospitals",
    rating: 5,
  },
  {
    id: "test-2",
    avatarText: "AS",
    avatarColor: "#057DCD",
    quote:
      "We went from managing 600 leads in spreadsheets to a full CRM with automated follow-up. Ou...",
    author: "Arvind Sharma",
    company: "RealProp Ventures",
    rating: 5,
  },
  {
    id: "test-3",
    avatarText: "KR",
    avatarColor: "#057DCD",
    quote:
      "We launched in 8 weeks. That's not typical for an LMS build. Digisphere's process was so s...",
    author: "Krishnareddy",
    company: "Skilledition EdTech",
    rating: 5,
  },
];

const SuccessStoriesHero = () => {
  return (
    <section className="case-hero-section">
      <div className="container">
        <div className="row mt-1 g-5 mb-5">
          {/* Left Column */}
          <div className="col-lg-6">
            <Reveal variant={fadeLeft} delay={0.1}>
              <div className="industries-main-section">
                <p className="Digisphere-badge">Success Stories</p>
                <h1 className="industries-hero-title">
                  Real clients.
                  <br />
                  <span className="industries-text-highlight">
                    Real results. Their words.
                  </span>
                </h1>
                <p className="industries-hero-description">
                  Every story here is a real client who trusted us with their
                  business. We let their outcomes and their words speak for us.
                </p>

                {/* Bottom Stats */}
                <div className="industries-hero-stats-row">
                  <div className="industries-stat-item">
                    <h6 className="industries-stat-value">316+</h6>
                    <h6 className="industries-stat-label">Clients served</h6>
                  </div>
                  <div className="industries-stat-item">
                    <h6 className="industries-stat-value">4.9/5</h6>
                    <h6 className="industries-stat-label">Avg. satisfaction</h6>
                  </div>
                  <div className="industries-stat-item">
                    <span className="industries-stat-value">₹50Cr+</span>
                    <span className="industries-stat-label">
                      Revenue generated
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column - FIX APPLIED HERE */}
          <div className="col-12 col-lg-6 success-wrapper">
            <Reveal variant={fadeUp} delay={0.2}>
              <div className="success-container">
                {/* Metric Cards Row */}
                <div className="success-stats-grid">
                  {STATS_DATA.map(({ id, icon: Icon, value, label }) => (
                    <div key={id} className="success-stat-card">
                      <Icon className="success-icon-blue" size={22} />
                      <div className="success-stat-value">{value}</div>
                      <span className="success-stat-label">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial Cards Stack */}
                <div className="success-testimonials-stack">
                  {TESTIMONIALS_DATA.map(
                    ({
                      id,
                      avatarText,
                      avatarColor,
                      quote,
                      author,
                      company,
                      rating,
                    }) => (
                      <article key={id} className="success-testimonial-card">
                        <div
                          className="success-avatar-badge"
                          style={{ backgroundColor: avatarColor || "#057DCD" }}
                        >
                          {avatarText}
                        </div>
                        <div className="success-testimonial-body">
                          <div className="success-stars-row">
                            {Array.from({ length: rating }).map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className="success-star-icon"
                                fill="currentColor"
                                stroke="none"
                              />
                            ))}
                          </div>
                          <p className="success-quote-text">"{quote}"</p>
                          <footer className="success-author-info">
                            <strong className="success-author-name">
                              {author}
                            </strong>
                            {company && (
                              <span className="success-author-company">
                                {company}
                              </span>
                            )}
                          </footer>
                        </div>
                      </article>
                    ),
                  )}
                </div>

                {/* Bottom Banner */}
                <div className="success-satisfaction-banner">
                  <Star size={16} fill="currentColor" stroke="none" />
                  <span>4.9/5 average client satisfaction score</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesHero;
