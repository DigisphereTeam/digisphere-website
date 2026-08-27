import React from 'react'
import "./DevOpsArticle.css"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import Reveal from "../../animations/Reveal"; 
import { fadeUp } from "../../animations/variants";

const cicdList = [
  {
    id: 1,
    title: "Automate testing",
    description: "Catch issues before they reach production.",
  },
  {
    id: 2,
    title: "Reduce deployment errors",
    description: "Replace repetitive manual steps with consistent automation.",
  },
  {
    id: 3,
    title: "Deploy faster",
    description: "Move tested code from development to production quickly.",
  },
  {
    id: 4,
    title: "Improve developer productivity",
    description: "Let developers focus on building features instead of managing deployments.",
  },
];
const DevOpsArticle = () => {
  return (
    <article className="webdevarticle-section py-5">
      <div className="container">
        <div className="row justify-content-center">          
          <div className="col-12 ">
            <div className="webarticle-main">
              
              <Reveal variant={fadeUp} delay={0.1}>
                {/* Category Tag Pill */}
                <div className="mb-3">
                  <span className="DevopsArticle-tag-pill DevopsArticle-tag-featured">
                    DevOps
                  </span>
                </div>

                {/* Article Main Title */}
                <h1 className="DevopsArticle-main-title mb-4">
                  Streamlining Deployment: How CI/CD Pipelines Save Hundreds of Developer Hours
                </h1>

                {/* Meta Info Bar */}
                <div className="d-flex align-items-center gap-4 text-muted DevopsArticle-meta pb-4 mb-4 border-bottom">
                </div>
              </Reveal>

              {/* Full Content Body */}
              <Reveal variant={fadeUp} delay={0.2}>
                <div className="DevopsArticle-content">
                  {/* Lead Text */}
                  <p className="DevopsArticle-lead-text text-muted mb-3">
                    Deploying software manually can be slow, repetitive, and prone to mistakes. As development teams grow, these problems can quickly become expensive.
                  </p>
                  <p className="DevopsArticle-lead-text text-muted mb-4">
                    CI/CD pipelines automate much of the software delivery process, allowing teams to build, test, and deploy code with minimal manual effort.
                  </p>

                  {/* Section 1: Where CI/CD Makes a Difference */}
                  <div className="DevopsArticle-reasons-list my-4">
                    <h3 className="DevopsArticle-structure-title mb-3">
                      Where CI/CD Makes a Difference
                    </h3>
                    <p className="text-muted mb-3">
                      A well-designed pipeline can help teams:
                    </p>
                    
                    {cicdList.map((item) => (
                      <div key={item.id} className="DevopsArticle-reason-item mb-3">
                        <h4 className="DevopsArticle-reason-title mb-1">
                          • {item.title}:
                        </h4>
                        <p className="DevopsArticle-reason-desc text-muted mb-0">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Section 2: The Real Benefit */}
                  <div className="DevopsArticle-structure-card p-4 my-5 rounded-4">
                    <h3 className="DevopsArticle-structure-title mb-3">
                      The Real Benefit
                    </h3>
                    <p className="text-muted mb-3">
                      CI/CD isn't simply about deploying faster. It's about creating a reliable and repeatable delivery process.
                    </p>
                    <p className="text-muted mb-0 fw-semibold">
                      Automated testing, version control, deployment workflows, monitoring, and rollback capabilities give teams greater confidence when releasing new software.
                    </p>
                  </div>

                  {/* Section 3: Faster Releases, Fewer Problems */}
                  <div className="DevopsArticle-conclusion-box p-4 rounded-4 mb-5">
                    <h4 className="DevopsArticle-conclusion-title mb-2">
                      Faster Releases, Fewer Problems
                    </h4>
                    <p className="text-muted mb-3">
                      When deployment becomes predictable and automated, teams can release more frequently without adding unnecessary operational overhead.
                    </p>
                    <p className="DevopsArticle-conclusion-highlight fw-bold mb-0">
                      The goal of DevOps isn't just to ship faster — it's to make shipping software safer, simpler, and more consistent.
                    </p>
                  </div>

                  {/* Bottom CTA Card */}
                  <div className="DevopsArticle-cta-card p-4 p-md-5 text-center rounded-4">
                    <h3 className="text-white mb-2">Ready to Automate Your Deployments?</h3>
                    <p className="text-white-50 mb-4">
                      Build efficient, automated CI/CD pipelines that eliminate manual error and save hundreds of developer hours.
                    </p>
                    <Link to="/contact">
                      <button className="DevopsArticle-btn-primary DevopsArticle-btn-lg">
                        Consult Our DevOps Team <FaArrowRight className="ms-2" />
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

export default DevOpsArticle