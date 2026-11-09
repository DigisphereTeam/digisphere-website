import React from "react";
import "./DigitalMarketingArticle.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import Reveal from "../../animations/Reveal";
import { fadeUp } from "../../animations/variants";

const auditFindings = [
  {
    id: 1,
    title: "1. Poor Keyword Targeting",
    description:
      "Broad match keywords were attracting non-intent visitors with zero buying mindset, wasting substantial ad budget daily.",
  },
  {
    id: 2,
    title: "2. High Spend on Irrelevant Searches",
    description:
      "Thousands of rupees were draining daily on completely unrelated search queries due to a lack of match-type control.",
  },
  {
    id: 3,
    title: "3. Misallocated Budgeting",
    description:
      "Underperforming campaigns received high daily allocations while top-converting ad groups were constantly budget-capped.",
  },
  {
    id: 4,
    title: "4. Weak Conversion Tracking",
    description:
      "Inaccurate conversion tags led smart bidding algorithms to optimize for low-value page visits instead of real business leads.",
  },
  {
    id: 5,
    title: "5. Missing Negative Keyword Strategy",
    description:
      "No negative keyword lists were configured, letting competitor names and 'free' search queries continuously burn budget.",
  },
  {
    id: 6,
    title: "6. Ad & Landing Page Misalignment",
    description:
      "Ad copy promised specific solutions, but landing pages displayed generic information, killing conversion intent.",
  },
];

const optimizationSteps = [
  "Campaign Restructuring",
  "Keyword Pruning",
  "Negative Lists",
  "Conversion Fixes",
  "Landing Page Alignment",
  "Budget Scaled",
];

const DigitalMarketingArticle = () => {
  return (
    <article className="webdevarticle-section  py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <div className="webarticle-main">
              <Reveal variant={fadeUp} delay={0.1}>
                {/* Category Tag Pill */}
                <div className="mb-3">
                  <span className="DigitalArticle-tag-pill DigitalArticle-tag-featured">
                    Digital Marketing 
                  </span>
                </div>

                {/* Article Main Title */}
                <h1 className="DigitalArticle-main-title mb-4">
                  The Real Cost of Google Ads Mismanagement: A ₹40L Audit Story
                </h1>

                {/* Meta Info Bar */}
                <div className="d-flex align-items-center gap-4 text-muted DigitalArticle-meta pb-4 mb-4 border-bottom">
                  
                </div>
              </Reveal>

              {/* Intro Paragraphs & Content */}
              <Reveal variant={fadeUp} delay={0.2}>
                <div className="DigitalArticle-content">
                  <p className="DigitalArticle-lead-text text-muted mb-4">
                    Google Ads can generate excellent results — but poor campaign
                    management can quietly turn a large advertising budget into
                    wasted money. We recently audited a client's Google Ads
                    account and discovered nearly <strong>₹40 lakh in wasted spend</strong> over 12 months.
                  </p>

                  {/* Reasons List */}
                  <div className="DigitalArticle-reasons-list my-4">
                    <h3 className="DigitalArticle-structure-title mb-3">What We Found</h3>
                    {auditFindings.map((item) => (
                      <div key={item.id} className="DigitalArticle-reason-item mb-4">
                        <h4 className="DigitalArticle-reason-title mb-2">{item.title}</h4>
                        <p className="DigitalArticle-reason-desc text-muted">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Structure Section */}
                  <div className="DigitalArticle-structure-card p-4 my-5 rounded-4">
                    <h3 className="DigitalArticle-structure-title mb-3">What We Changed</h3>
                    <p className=" mb-3">
                      We reorganized the campaigns, removed wasteful keywords, improved targeting, added negative keywords, fixed conversion tracking, and redirected the budget toward campaigns that were actually generating results.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                      {optimizationSteps.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span className="DigitalArticle-structure-badge">{step}</span>
                          {idx < optimizationSteps.length - 1 && (
                            <span className="fw-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="mb-0 fw-semibold">
                      The goal wasn't simply to spend less. It was to make every rupee work harder.
                    </p>
                  </div>

                  {/* Conclusion Callout */}
                  <div className="DigitalArticle-conclusion-box p-4 rounded-4 mb-5">
                    <h4 className="DigitalArticle-conclusion-title mb-2">The Key Lesson</h4>
                    <p className="mb-3">
                      Google Ads doesn't fail because advertising doesn't work. It often fails because campaigns aren't monitored, measured, and optimized properly. A regular account audit can reveal wasted spend and opportunities that aren't obvious from the surface.
                    </p>
                    <p className="DigitalArticle-conclusion-highlight fw-bold mb-0">
                      Before increasing your Google Ads budget, make sure you're not already wasting the budget you have.
                    </p>
                  </div>

                  {/* Bottom CTA Card */}
                  <div className="DigitalArticle-cta-card p-4 p-md-5 text-center rounded-4">
                    <h3 className="text-white mb-2">Are You Wasting Your Ad Spend?</h3>
                    <p className="text-white-50 mb-4">
                      Get a comprehensive Google Ads audit to eliminate wasted spend and maximize performance.
                    </p>
                    <Link to="/contact">
                      <button className="DigitalArticle-btn-primary DigitalArticle-btn-lg">
                        Request Your Free Audit <FaArrowRight className="ms-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DigitalMarketingArticle;