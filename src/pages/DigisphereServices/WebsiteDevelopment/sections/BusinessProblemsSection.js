import React, { useState, useEffect, useRef } from "react";

// Local component imports
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../../../animations/variants";
import wrongIcon from "../../../../assets/website-development/wrong-icon.svg";
import rightIcon from "../../../../assets/website-development/right-icon.svg";
import dropOffIcon from "../../../../assets/website-development/dropoff-icon.svg";
import funnelIcon from "../../../../assets/website-development/funnel-icon.svg";
import SeoRankingAnimation from "./SeoRankingAnimation";

// ==========================================
// 1. Embedded CSS Styles
// ==========================================
const inlineStyles = `
.business-problems-section {
  padding: 50px 0;
  background: #ffffff;
}

.section-heading {
  margin-bottom: 50px;
}

.section-heading h2 {
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  color: #141b34;
}

.section-heading span {
  color: #057dcd;
}

.problem-row {
  margin-bottom: 60px;
}

.problem-row:last-child {
  margin-bottom: 0;
}

.problem-content {
  max-width: 540px;
}

.problem-content h3 {
  font-size: 24px;
  font-weight: 600;
  color: #141b34;
  margin-bottom: 20px;
}

.problem-info {
  padding: 10px 0;
  border-top: 1px solid #e8edf3;
}

.problem-info:last-child {
  border-bottom: 1px solid #e8edf3;
}

.problem-info h5 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 14px;
  letter-spacing: 1px;
}

.reason-title { color: #ff4d4d; }
.solution-title { color: #057dcd; }
.outcome-title { color: #00b26b; }

.reason-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 30px;
}

.reason-grid span {
  font-size: 14px;
  color: #475569;
}

.problem-info p {
  margin: 0;
  color: #475569;
  font-size: 15px;
  line-height: 1.7;
}

.success {
  color: #0f172a !important;
  font-weight: 600;
}

.grade-icons {
  margin-right: 4px;
  height: 18px;
  width: 18px;
}

.problem-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dynamic-chart-container {
  position: relative;
  width: 100%;
  min-height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Card Styling for Charts */
.dropoff-card-container {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  width: 100%;
}

.dropoff-title {
  font-weight: 700;
  color: #1e293b;
  font-size: 16px;
}

.dropoff-row-label {
  min-width: 80px;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
}

.dropoff-progress-track {
  height: 10px;
  background-color: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
}

.dropoff-progress-fill {
  height: 100%;
  border-radius: 999px;
}

.dropoff-row-value {
  min-width: 45px;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
}

/* Responsive Styles */
@media (max-width: 991px) {
  .business-problems-section { padding: 30px 0; }
  .section-heading { margin-bottom: 60px; }
  .section-heading h2 { font-size: 36px; }
  .problem-row { margin-bottom: 40px; }
  .problem-content { max-width: 100%; margin-bottom: 15px; }
  .problem-content h3 { font-size: 20px; }
  .problem-image { margin-top: 24px; width: 100%; }
}

@media (max-width: 576px) {
  .business-problems-section { padding: 18px 0; }
  .section-heading h2 { font-size: 27px; }
  .problem-content h3 { font-size: 16px; }
  .reason-grid { grid-template-columns: 1fr; gap: 4px; }
  .problem-row { margin-bottom: 32px; }
  .dropoff-row-label { min-width: 65px; font-size: 12px; }
  .dropoff-row-value { font-size: 12px; }
}
`;

// ==========================================
// 2. Internal Helper Component: CountUp
// ==========================================
const CountUpNumber = ({ target, duration = 1200, start = false, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutProgress = 1 - (1 - progress) * (1 - progress);

      setCount(Math.floor(easeOutProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [target, duration, start]);

  return (
    <span>
      {start ? count : target}
      {suffix}
    </span>
  );
};

// ==========================================
// 3. Internal Chart Component
// ==========================================
const DropOffAnimation = ({ title, data = [], icon, isRedTheme = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="dropoff-card-container p-4" ref={containerRef}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="dropoff-title m-0">{title}</h5>
        {icon && <img src={icon} alt="chart-icon" className="dropoff-icon" width="20" height="20" />}
      </div>

      <div className="d-flex flex-column gap-3">
        {data.map((item, index) => {
          const targetValue =
            item.numericValue !== undefined
              ? item.numericValue
              : item.value !== undefined
              ? item.value
              : item.percentage ?? 0;

          const targetSuffix = item.suffix ?? "";
          const barWidth = item.percentage ?? 0;

          return (
            <div key={index} className="d-flex align-items-center justify-content-between">
              {item.label && <span className="dropoff-row-label me-2">{item.label}</span>}

              <div className="flex-grow-1 mx-2 dropoff-progress-track">
                <div
                  className="dropoff-progress-fill"
                  style={{
                    width: isVisible ? `${barWidth}%` : "0%",
                    backgroundColor: item.color || (isRedTheme ? "#ef4444" : "#0066cc"),
                    transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${index * 0.15}s`,
                  }}
                ></div>
              </div>

              <span className="dropoff-row-value ms-2">
                <CountUpNumber
                  target={targetValue}
                  suffix={targetSuffix}
                  start={isVisible}
                  duration={1200}
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// 4. Main Export Component
// ==========================================
const BusinessProblemsSection = () => {
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
    <>
      <style>{inlineStyles}</style>

      <section className="business-problems-section">
        <div className="container">
          {/* Section Heading */}
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
              <div className="problem-image dynamic-chart-container">
                <DropOffAnimation title="Visitor Drop-off Rate" data={dropOffData} isRedTheme={true} icon={dropOffIcon}/>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="problem-row row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="problem-image">
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
              <div className="problem-image dynamic-chart-container">
                <DropOffAnimation title="Conversion Funnel" data={funnelData} isRedTheme={false} icon={funnelIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessProblemsSection;