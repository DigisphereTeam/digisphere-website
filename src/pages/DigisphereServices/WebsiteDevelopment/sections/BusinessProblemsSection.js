import React from "react";
import "./BusinessProblemsSection.css";

import dropOffImg from "../../../../assets/website-development/dropoff-rate.svg";
import seoImg from "../../../../assets/website-development/seo-ranking.svg";
import funnelImg from "../../../../assets/website-development/conversion-funnel.svg";
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../../../animations/variants";
import wrongIcon from "../../../../assets/website-development/wrong-icon.svg";
import rightIcon from "../../../../assets/website-development/right-icon.svg";

const BusinessProblemsSection = () => {
  return (
    <section className="business-problems-section">
      <div className="container">
        {/* Heading */}
        <Reveal variant={fadeUp} delay={0.15}>
          <div className="section-heading text-center">
            <h2>
              Most websites don't have a design problem.
              <br />
              <span>They have a business problem.</span>
            </h2>
          </div>
        </Reveal>

        {/* Row 1 */}
        <div className="problem-row row align-items-center">
          <div className="col-lg-6">
            <Reveal variant={fadeRight} delay={0.2}>
              <div className="problem-content">
                <h3>Visitors arrive. Nobody contacts you.</h3>

                <div className="problem-info">
                  <h5 className="reason-title">REASONS</h5>

                  <div className="reason-grid">
                    <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Slow speed</span>
                    <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Poor structure</span>
                    <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Weak messaging</span>
                    <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Poor mobile experience</span>
                  </div>
                </div>

                <div className="problem-info">
                  <h5 className="solution-title">SOLUTION</h5>
                  <p>
                    Performance-first websites designed around business
                    outcomes.
                  </p>
                </div>

                <div className="problem-info">
                  <h5 className="outcome-title">OUTCOME</h5>
                  <p className="success"><img src={rightIcon} alt="right-icon" className="grade-icons"/> Higher engagement and enquiries.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <div className="problem-image">
              <img src={dropOffImg} alt="Visitor Drop Off Rate" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="problem-row row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="problem-image">
              <img src={seoImg} alt="SEO Ranking" />
            </div>
          </div>

          <div className="col-lg-6 order-lg-2 order-1">
            <Reveal variant={fadeLeft} delay={0.3}>
            <div className="problem-content">
              <h3>Your competitors appear on Google. You don't.</h3>

              <div className="problem-info">
                <h5 className="reason-title">REASONS</h5>

                <div className="reason-grid">
                  <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> No SEO</span>
                  <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Poor content</span>
                  <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Slow site</span>
                  <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> No backlinks</span>
                </div>
              </div>

              <div className="problem-info">
                <h5 className="solution-title">SOLUTION</h5>
                <p>SEO-ready architecture built from day one.</p>
              </div>

              <div className="problem-info">
                <h5 className="outcome-title">OUTCOME</h5>
                <p className="success"><img src={rightIcon} alt="right-icon" className="grade-icons"/> More qualified organic traffic.</p>
              </div>
            </div>
            </Reveal>
          </div>
        </div>

        {/* Row 3 */}
        <div className="problem-row row align-items-center">
          <div className="col-lg-6">
            <Reveal variant={fadeRight} delay={0.4}>
              <div className="problem-content">
                <h3>Your website looks good. But it doesn't convert.</h3>

                <div className="problem-info">
                  <h5 className="reason-title">REASONS</h5>

                  <div className="reason-grid">
                    <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Weak CTA</span>
                    <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> No trust signals</span>
                    <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Confusing flow</span>
                    <span><img src={wrongIcon} alt="wrong-icon" className="grade-icons"/> Missing forms</span>
                  </div>
                </div>

                <div className="problem-info">
                  <h5 className="solution-title">SOLUTION</h5>
                  <p>UX research and conversion-focused design.</p>
                </div>

                <div className="problem-info">
                  <h5 className="outcome-title">OUTCOME</h5>
                  <p className="success"><img src={rightIcon} alt="right-icon" className="grade-icons"/> More leads from existing traffic.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <div className="problem-image">
              <img src={funnelImg} alt="Conversion Funnel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProblemsSection;
