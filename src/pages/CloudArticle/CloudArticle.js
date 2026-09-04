import React from 'react'
import"./CloudArticle.css"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import Reveal from "../../animations/Reveal"; 
import { fadeUp } from "../../animations/variants";
const savingsList = [
  {
    id: 1,
    title: "Rightsizing",
    description: "Adjusting compute resources to match actual usage.",
  },
  {
    id: 2,
    title: "Reserved Instances",
    description: "Using longer-term pricing where workloads were predictable.",
  },
  {
    id: 3,
    title: "S3 Lifecycle Policies",
    description: "Automatically moving or removing older data based on business requirements.",
  },
  {
    id: 4,
    title: "Unused Resources",
    description: "Identifying resources that were running but no longer needed.",
  },
];
const CloudArticle = () => {
  return (
  <article className="webdevarticle-section py-5">
      <div className="container">
        <div className="row justify-content-center">          
          <div className="col-12 ">
            <div className="webarticle-main">
              
              <Reveal variant={fadeUp} delay={0.1}>
                {/* Category Tag Pill */}
                <div className="mb-3">
                  <span className="AwsCostArticle-tag-pill AwsCostArticle-tag-featured">
                    Cloud 
                  </span>
                </div>

                {/* Article Main Title */}
                <h1 className="AwsCostArticle-main-title mb-4">
                  How We Cut a Client's AWS Bill by 42% Without Changing Their Architecture
                </h1>

                {/* Meta Info Bar */}
                <div className="d-flex align-items-center gap-4 text-muted AwsCostArticle-meta pb-4 mb-4 border-bottom">
                 
                </div>
              </Reveal>

              {/* Full Content Body */}
              <Reveal variant={fadeUp} delay={0.2}>
                <div className="AwsCostArticle-content">
                  {/* Intro Paragraphs */}
                  <p className="AwsCostArticle-lead-text text-muted mb-3">
                    Cloud costs can grow quietly. A business may keep the same infrastructure for months while paying for resources it doesn't actually need.
                  </p>
                  <p className="AwsCostArticle-lead-text text-muted mb-4">
                    We recently reviewed a client's AWS environment and reduced their monthly cloud bill by 42% — without changing their core architecture.
                  </p>

                  {/* Savings Areas Section */}
                  <div className="AwsCostArticle-reasons-list my-4">
                    <h3 className="AwsCostArticle-structure-title mb-3">
                      Where the Savings Came From
                    </h3>
                    <p className="text-muted mb-3">
                      The biggest opportunities were found in a few key areas:
                    </p>
                    
                    {savingsList.map((item) => (
                      <div key={item.id} className="AwsCostArticle-reason-item mb-3">
                        <h4 className="AwsCostArticle-reason-title mb-1">
                          • {item.title}:
                        </h4>
                        <p className="AwsCostArticle-reason-desc text-muted mb-0">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* The Important Part Section */}
                  <div className="AwsCostArticle-structure-card p-4 my-5 rounded-4">
                    <h3 className="AwsCostArticle-structure-title mb-3">
                      The Important Part
                    </h3>
                    <p className="text-muted mb-3">
                      We didn't reduce costs by simply turning things off or compromising performance.
                    </p>
                    <p className="text-muted mb-0 fw-semibold">
                      We analyzed usage patterns, identified unnecessary spending, and optimized resources around the client's actual requirements.
                    </p>
                  </div>

                  {/* Conclusion Section */}
                  <div className="AwsCostArticle-conclusion-box p-4 rounded-4 mb-5">
                    <h4 className="AwsCostArticle-conclusion-title mb-2">
                      Cloud Cost Optimization Isn't Just About Cutting Costs
                    </h4>
                    <p className="text-muted mb-3">
                      A lower AWS bill is valuable, but sustainable optimization is about understanding where your money is going and why.
                    </p>
                    <p className="text-muted mb-3">
                      Regular reviews can prevent cloud waste from becoming a permanent expense.
                    </p>
                    <p className="AwsCostArticle-conclusion-highlight fw-bold mb-0">
                      You don't always need a new architecture to reduce your cloud bill. Sometimes, you just need to optimize the one you already have.
                    </p>
                  </div>

                  {/* Bottom CTA Card */}
                  <div className="AwsCostArticle-cta-card p-4 p-md-5 text-center rounded-4">
                    <h3 className="text-white mb-2">Ready to Optimize Your AWS Costs?</h3>
                    <p className="text-white-50 mb-4">
                      Get a comprehensive infrastructure audit to eliminate cloud waste without compromising performance.
                    </p>
                    <Link to="/contact">
                      <button className="AwsCostArticle-btn-primary AwsCostArticle-btn-lg">
                        Request Your Cloud Audit <FaArrowRight className="ms-2" />
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

export default CloudArticle