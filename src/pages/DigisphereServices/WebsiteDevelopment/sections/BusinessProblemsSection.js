import React from "react";
import "./BusinessProblemsSection.css";

import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../../../animations/variants";
import wrongIcon from "../../../../assets/website-development/wrong-icon.svg";
import rightIcon from "../../../../assets/website-development/right-icon.svg";
import dropOffIcon from "../../../../assets/website-development/dropoff-icon.svg";
import funnelIcon from "../../../../assets/website-development/funnel-icon.svg";

import DropOffAnimation from "./DropOffAnimation";
import SeoRankingAnimation from "./SeoRankingAnimation";

const BusinessProblemsSection = () => {
  // Datasets mimicking your actual design percentages
  const dropOffData = [
  { percentage: 85, numericValue: 85, suffix: "%" },
  { percentage: 70, numericValue: 70, suffix: "%" },
  { percentage: 50, numericValue: 50, suffix: "%" },
  { percentage: 30, numericValue: 30, suffix: "%" },
  { percentage: 15, numericValue: 15, suffix: "%" },
];

  const funnelData = [
  { label: "Visitors", percentage: 100, numericValue: 1000, suffix: "", color: "#0066cc" },
  { label: "Engaged", percentage: 65, numericValue: 400, suffix: "", color: "#0044cc" },
  { label: "Interested", percentage: 35, numericValue: 120, suffix: "", color: "#8b5cf6" },
  { label: "Converted", percentage: 10, numericValue: 8, suffix: "", color: "#ef4444" },
];

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
                  <p>Performance-first websites designed around business outcomes.</p>
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
              {/* Row 1 Interactive Line Animation */}
              <DropOffAnimation title="Visitor Drop-off Rate" data={dropOffData} isRedTheme={true} icon={dropOffIcon}/>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="problem-row row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="problem-image">
              {/* Row 2 Delayed Color Change Animation */}
              <SeoRankingAnimation />
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
              {/* Row 3 Interactive Funnel Line Animation */}
              <DropOffAnimation title="Conversion Funnel" data={funnelData} isRedTheme={false} icon={funnelIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProblemsSection;