import React from 'react'
import"./AiArticle.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";
import Reveal from "../../animations/Reveal"; 
import { fadeUp } from "../../animations/variants";
const practicalUseCases = [
  {
    id: 1,
    title: "1. Customer Support",
    description:
      "AI chatbots can handle common questions, initial inquiries, and basic support around the clock, improving response time instantly.",
  },
  {
    id: 2,
    title: "2. Sales & Lead Follow-ups",
    description:
      "Automate lead follow-ups, meeting reminders, and personalized prospect communication so high-intent leads never drop off.",
  },
  {
    id: 3,
    title: "3. Marketing Automation",
    description:
      "Generate marketing content efficiently, analyze campaign performance data in real time, and personalize customer outreach.",
  },
  {
    id: 4,
    title: "4. Internal Operations",
    description:
      "Automate repetitive data entry, routine reporting, spreadsheet processing, and internal operational workflows.",
  },
  {
    id: 5,
    title: "5. Finance & Invoicing",
    description:
      "Speed up invoice processing, document parsing, expense sorting, and routine financial analysis to eliminate manual errors.",
  },
];

const implementationSteps = [
  "Identify Bottleneck",
  "Select Tool",
  "Pilot Workflow",
  "Measure Impact",
  "Scale Strategy",
];
const AiArticle = () => {
  return (
    <article className="webdevarticle-section  py-5">
      <div className="container">
        <div className="row justify-content-center">          
          <div className="col-12 ">
            <div className="webarticle-main">
              
              <Reveal variant={fadeUp} delay={0.1}>
                {/* Category Tag Pill */}
                <div className="mb-3">
                  <span className="PracticalAIArticle-tag-pill PracticalAIArticle-tag-featured">
                   AI & Automation
                  </span>
                </div>

                {/* Article Main Title */}
                <h1 className="PracticalAIArticle-main-title mb-4">
                  Practical AI for Indian SMEs: What's Actually Worth Doing in 2026
                </h1>

                {/* Meta Info Bar */}
                <div className="d-flex align-items-center gap-4 text-muted PracticalAIArticle-meta pb-4 mb-4 border-bottom">
                  <span className="d-inline-flex align-items-center">
                    <FiCalendar className="me-2 PracticalAIArticle-theme-icon" /> August 26, 2026
                  </span>
                  <span className="d-inline-flex align-items-center">
                    <FiClock className="me-2 PracticalAIArticle-theme-icon" /> 5 min read
                  </span>
                </div>
              </Reveal>

              {/* Intro Paragraphs & Content */}
              <Reveal variant={fadeUp} delay={0.2}>
                <div className="PracticalAIArticle-content">
                  <p className="PracticalAIArticle-lead-text text-muted mb-4">
                    AI is everywhere, but for small and mid-size businesses, the real question is simple: 
                    What can actually save time, reduce costs, or generate more business? 
                    Not every AI trend is worth investing in.
                  </p>

                  {/* Use Cases List */}
                  <div className="PracticalAIArticle-reasons-list my-4">
                    <h3 className="PracticalAIArticle-structure-title mb-3">Where AI Can Actually Help</h3>
                    {practicalUseCases.map((item) => (
                      <div key={item.id} className="PracticalAIArticle-reason-item mb-4">
                        <h4 className="PracticalAIArticle-reason-title mb-2">{item.title}</h4>
                        <p className="PracticalAIArticle-reason-desc text-muted">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Implementation Approach Card */}
                  <div className="PracticalAIArticle-structure-card p-4 my-5 rounded-4">
                    <h3 className="PracticalAIArticle-structure-title mb-3">Start Small, Not Big</h3>
                    <p className=" mb-3">
                      You don't need a huge AI transformation project to see results. 
                      Start with one repetitive task that consumes significant employee time. Automate it, 
                      measure the improvement, and expand from there.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                      {implementationSteps.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span className="PracticalAIArticle-structure-badge">{step}</span>
                          {idx < implementationSteps.length - 1 && (
                            <span className=" fw-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <p className=" mb-0 fw-semibold">
                      Depending on the workflow, a useful AI automation can often be implemented in weeks rather than months, 
                      ranging from simple software subscriptions to custom automation builds.
                    </p>
                  </div>

                  {/* Conclusion Callout */}
                  <div className="PracticalAIArticle-conclusion-box p-4 rounded-4 mb-5">
                    <h4 className="PracticalAIArticle-conclusion-title mb-2">The Real Opportunity</h4>
                    <p className=" mb-3">
                      The goal isn't to use AI simply because everyone else is using it. 
                      The goal is to remove repetitive work, improve efficiency, and help your team focus on higher-value activities.
                    </p>
                    <p className="PracticalAIArticle-conclusion-highlight fw-bold mb-0">
                      For Indian SMEs, practical AI isn't about replacing the entire workforce — it's about making a good team significantly more productive.
                    </p>
                  </div>

                  {/* Bottom CTA Card */}
                  <div className="PracticalAIArticle-cta-card p-4 p-md-5 text-center rounded-4">
                    <h3 className="text-white mb-2">Ready to Implement Practical AI Workflows?</h3>
                    <p className="text-white-50 mb-4">
                      Let's identify repetitive bottlenecks in your business and build targeted AI automations that save time and cut costs.
                    </p>
                    <Link to="/contact">
                      <button className="PracticalAIArticle-btn-primary PracticalAIArticle-btn-lg">
                        Consult Our AI Experts <FaArrowRight className="ms-2" />
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

export default AiArticle