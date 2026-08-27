import React from 'react'
import "./WebArticle.css"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
const commonReasons = [
    {
      id: 1,
      title: "1. Unclear Messaging",
      description:
        "Your website should immediately explain what you do, who you help, and why customers should choose you. Avoid vague headlines like 'Building Better Solutions.' Be specific about the service and value you provide.",
    },
    {
      id: 2,
      title: "2. Weak Calls to Action",
      description:
        "Interested visitors can leave simply because there's no clear next step. Use simple CTAs such as Get a Quote, Book a Call, Get Started, or Request a Consultation.",
    },
    {
      id: 3,
      title: "3. Not Enough Trust",
      description:
        "Customers want proof before they enquire. Add testimonials, reviews, case studies, client logos, portfolio work, and measurable results to build credibility.",
    },
    {
      id: 4,
      title: "4. Poor User Experience",
      description:
        "Slow loading, complicated forms, confusing navigation, and poor mobile design can quickly turn visitors away. Keep the experience fast, simple, and easy to use on every device.",
    },
    {
      id: 5,
      title: "5. Too Much Information",
      description:
        "More content doesn't always mean more conversions. Focus on the information customers actually need: your services, benefits, proof, process, FAQs, and a clear next step.",
    },
    {
      id: 6,
      title: "6. No Clear Difference",
      description:
        "If your website sounds exactly like your competitors, visitors have little reason to choose you. Clearly communicate what makes your business different — whether that's expertise, speed, service, pricing, or proven results.",
    },
  ];

  const frameworkSteps = [
    "Clear Hero Section",
    "Problem",
    "Solution",
    "Benefits",
    "Proof",
    "Process",
    "FAQs",
    "Strong CTA",
  ];
const WebArticle = () => {
  return (
    <article className="webdevarticle-section py-5">
      <div className="container">
        <div className="row justify-content-center">           
          <div className="col-12  ">
                <div className='webarticle-main'>
              {/* Category Tag Pill */}
              <div className="mb-3 ">
                <span className="webdevarticle-tag-pill webdevarticle-tag-featured">
                  Web Development • Featured
                </span>
              </div>

              {/* Article Main Title */}
              <h1 className="webdevarticle-main-title mb-4">
                Why Most Business Websites Fail to Generate Leads (And What to
                Do About It)
              </h1>

              {/* Meta Info Bar */}
              <div className="d-flex align-items-center gap-4 text-muted webdevarticle-meta pb-4 mb-4 border-bottom">
              </div>
        

            {/* Intro Paragraphs */}
            
              <div className="webdevarticle-content">
                <p className="webdevarticle-lead-text text-muted mb-4">
                  A website can look modern and professional but still generate
                  very few enquiries. The problem isn't always traffic. Often,
                  visitors simply don't understand what you offer, don't trust
                  the business enough, or don't know what to do next.
                </p>

                {/* Reasons List */}
                <div className="webdevarticle-reasons-list my-4">
                  {commonReasons.map((item) => (
                    <div key={item.id} className="webdevarticle-reason-item mb-4">
                      <h4 className="webdevarticle-reason-title mb-2">{item.title}</h4>
                      <p className="webdevarticle-reason-desc text-muted">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Structure Section */}
                <div className="webdevarticle-structure-card p-4 my-5 rounded-4">
                  <h3 className="webdevarticle-structure-title mb-3">A Better Website Structure</h3>
                  <p className=" mb-3">
                    <strong>A strong lead-generating website usually includes:</strong>
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                    {frameworkSteps.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="webdevarticle-structure-badge">{step}</span>
                        {idx < frameworkSteps.length - 1 && (
                          <span className="fw-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className=" mb-0">
                    Every section should help visitors understand your value and move
                    closer to contacting you.
                  </p>
                </div>

                {/* Conclusion Callout */}
                <div className="webdevarticle-conclusion-box p-4 rounded-4 mb-5">
                  <h4 className="webdevarticle-conclusion-title mb-2">The Bottom Line</h4>
                  <p className=" mb-3">
                    Your website shouldn't just look good. It should generate action.
                    If visitors aren't converting, look at your messaging, trust
                    signals, user experience, and calls to action before simply
                    trying to get more traffic.
                  </p>
                  <p className="webdevarticle-conclusion-highlight fw-bold mb-0">
                    A better website doesn't just attract visitors — it turns them into
                    potential customers.
                  </p>
                </div>

                {/* Bottom CTA Card */}
                <div className="webdevarticle-cta-card p-4 p-md-5 text-center rounded-4">
                  <h3 className="text-white mb-2">Ready to Turn Visitors into Leads?</h3>
                  <p className="text-white-50 mb-4">
                    Get a comprehensive audit of your existing website architecture and messaging.
                  </p>
                  <Link to="/contact">
                    <button className="webdevarticle-btn-primary webdevarticle-btn-lg">
                      Request Your Free Audit <FaArrowRight className="ms-2" />
                    </button>
                  </Link>
                </div>
              </div>
           </div>
          </div>
          </div>
        </div>
      
    </article>
  )
}

export default WebArticle