import React from 'react'
import"./UiUxArticle.css"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import Reveal from "../../animations/Reveal"; 
import { fadeUp } from "../../animations/variants";
const uxMistakes = [
  {
    id: 1,
    title: "1. Complicated Navigation",
    description:
      "Customers should be able to find products quickly. Confusing menus, excessive categories, and poor search functionality make shoppers work too hard.",
  },
  {
    id: 2,
    title: "2. Too Many Checkout Steps",
    description:
      "Every additional step creates another opportunity for customers to abandon their purchase. Keep checkout simple, clear, and focused.",
  },
  {
    id: 3,
    title: "3. Poor Mobile Experience",
    description:
      "A website that works well on desktop but feels difficult to use on mobile can lose a significant number of potential buyers. Buttons, product images, forms, and navigation should all be designed for smaller screens.",
  },
  {
    id: 4,
    title: "4. Weak Product Pages",
    description:
      "Customers need enough information to make a buying decision. Clear images, pricing, product details, reviews, delivery information, and prominent CTAs can make a major difference.",
  },
  {
    id: 5,
    title: "5. Unexpected Friction",
    description:
      "Pop-ups, slow pages, hidden costs, confusing error messages, and forced account creation can interrupt the buying journey.",
  },
];
const UiUxArticle = () => {
  return (
    <article className="webdevarticle-section py-5">
      <div className="container">
        <div className="row justify-content-center">          
          <div className="col-12">
            <div className="webarticle-main">
              
              <Reveal variant={fadeUp} delay={0.1}>
                {/* Category Tag Pill */}
                <div className="mb-3">
                  <span className="EcommerceUxArticle-tag-pill EcommerceUxArticle-tag-featured">
                  UI/UX Design
                  </span>
                </div>

                {/* Article Main Title */}
                <h1 className="EcommerceUxArticle-main-title mb-4">
                  The 5 UX Mistakes That Cost E-Commerce Sites the Most Revenue
                </h1>

                {/* Meta Info Bar */}
                <div className="d-flex align-items-center gap-4 text-muted EcommerceUxArticle-meta pb-4 mb-4 border-bottom">
                  <span className="d-inline-flex align-items-center">
                    <FiCalendar className="me-2 EcommerceUxArticle-theme-icon" /> August 26, 2026
                  </span>
                  <span className="d-inline-flex align-items-center">
                    <FiClock className="me-2 EcommerceUxArticle-theme-icon" /> 5 min read
                  </span>
                </div>
              </Reveal>

              {/* Intro & Main Content */}
              <Reveal variant={fadeUp} delay={0.2}>
                <div className="EcommerceUxArticle-content">
                  {/* Intro Paragraphs */}
                  <p className="EcommerceUxArticle-lead-text text-muted mb-3">
                    A great-looking e-commerce website doesn't guarantee great sales. Small UX problems can create friction, frustrate shoppers, and quietly reduce conversions.
                  </p>
                  <p className="EcommerceUxArticle-lead-text text-muted mb-4">
                    After analyzing heatmaps and session recordings across 50+ e-commerce websites, we found several patterns that repeatedly hurt performance.
                  </p>

                  {/* UX Mistakes List */}
                  <div className="EcommerceUxArticle-reasons-list my-4">
                    {uxMistakes.map((item) => (
                      <div key={item.id} className="EcommerceUxArticle-reason-item mb-4">
                        <h4 className="EcommerceUxArticle-reason-title mb-2">
                          {item.title}
                        </h4>
                        <p className="EcommerceUxArticle-reason-desc text-muted mb-0">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* The Bigger Picture Callout */}
                  <div className="EcommerceUxArticle-conclusion-box p-4 rounded-4 mb-5">
                    <h4 className="EcommerceUxArticle-conclusion-title mb-2">
                      The Bigger Picture
                    </h4>
                    <p className=" mb-3">
                      UX isn't just about making a website look attractive. It's about making it easy for customers to find, understand, and purchase what they want.
                    </p>
                    <p className=" mb-3">
                      Small improvements in the customer journey can have a significant impact on revenue.
                    </p>
                    <p className="EcommerceUxArticle-conclusion-highlight fw-bold mb-0">
                      Better UX means less friction, more completed purchases, and a better customer experience.
                    </p>
                  </div>

                  {/* Bottom CTA Card */}
                  <div className="EcommerceUxArticle-cta-card p-4 p-md-5 text-center rounded-4">
                    <h3 className="text-white mb-2">Eliminate Friction on Your E-Commerce Site</h3>
                    <p className="text-white-50 mb-4">
                      Get a comprehensive UX and conversion rate audit to uncover revenue-draining friction points on your online store.
                    </p>
                    <Link to="/contact">
                      <button className="EcommerceUxArticle-btn-primary EcommerceUxArticle-btn-lg">
                        Request a UX Audit <FaArrowRight className="ms-2" />
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
  )
}

export default UiUxArticle