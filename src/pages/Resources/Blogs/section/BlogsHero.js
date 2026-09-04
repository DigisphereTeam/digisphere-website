import { useNavigate } from "react-router-dom";
import "./BlogsHero.css";
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeUp } from "../../../../animations/variants";
import webook from "../../../../assets/Blogs/webook.svg";
import Articles from "../../../../assets/Blogs/Articles.svg";
import Readers from "../../../../assets/Blogs/Readers.svg";
import WeeklyUpdates from "../../../../assets/Blogs/WeeklyUpdates.svg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogsHero = () => {
  return (
    <>
      <section className="case-hero-section ">
        <div className="container">
          <div className="row mt-1 g-5 mb-5">
            {/* Left Column */}
            <div className="col-lg-6">
              <Reveal variant={fadeLeft} delay={0.1}>
                <div className="industries-main-section">
                  <p className="Digisphere-badge">Insights</p>
                  <h1 className="industries-hero-title">
                    Technology, strategy,
                    <br />
                    <span className="industries-text-highlight">
                      and what actually works.
                    </span>
                  </h1>
                  <p className="industries-hero-description">
                    Practical articles from the Digisphere team based on real
                    client work, not conference talks.
                  </p>

                  {/* Bottom Stats */}
                  <div className="industries-hero-stats-row">
                    <div className="industries-stat-item">
                      <h6 className="industries-stat-value">48+</h6>
                      <h6 className="industries-stat-label">Articles</h6>
                    </div>
                    <div className="industries-stat-item">
                      <h6 className="industries-stat-value">12k+</h6>
                      <h6 className="industries-stat-label">Monthly readers</h6>
                    </div>
                    <div className="industries-stat-item">
                      <span className="industries-stat-value">Weekly</span>
                      <span className="industries-stat-label">New content</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="row gy-2">
                {/* Top Floating Pill Container */}
                <div className="col-12 d-flex justify-content-center">
                  <Reveal variant={fadeUp} delay={0.1}>
                    <div className="blogs-top-pill-bar">
                      <div className="blogs-pill-item">
                        <img src={Articles} alt="Articles" />
                        <span>48 Articles</span>
                      </div>
                      <div className="blogs-pill-item">
                        <img src={Readers} alt="Readers" />
                        <span>12k+ Readers</span>
                      </div>
                      <div className="blogs-pill-item">
                        <img src={WeeklyUpdates} alt="WeeklyUpdates" />
                        <span>Weekly Updates</span>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Card 1 */}
                <div className="col-12">
                  <Reveal variant={fadeUp} delay={0.2}>
                    <div className="blogs-article-card d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="blogs-icon-box">
                          <img src={webook} alt="webook" />
                        </div>
                        <div>
                          <span className="blogs-card-tag d-block">
                            WEB DEV
                          </span>
                          <h3 className="blogs-card-title m-0">
                            Why websites fail to generate leads
                          </h3>
                        </div>
                      </div>
                      <span className="blogs-reads-count">2.4k reads</span>
                    </div>
                  </Reveal>
                </div>

                {/* Card 2 */}
                <div className="col-12">
                  <Reveal variant={fadeUp} delay={0.3}>
                    <div className="blogs-article-card d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="blogs-icon-box">
                          <img src={webook} alt="webook" />
                        </div>
                        <div>
                          <span className="blogs-card-tag d-block">
                            AI & AUTOMATION
                          </span>
                          <h3 className="blogs-card-title m-0">
                            Practical AI for Indian SMEs in 2026
                          </h3>
                        </div>
                      </div>
                      <span className="blogs-reads-count">3.1k reads</span>
                    </div>
                  </Reveal>
                </div>

                {/* Card 3 */}
                <div className="col-12">
                  <Reveal variant={fadeUp} delay={0.4}>
                    <div className="blogs-article-card d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="blogs-icon-box">
                          <img src={webook} alt="webook" />
                        </div>
                        <div>
                          <span className="blogs-card-tag d-block">CLOUD</span>
                          <h3 className="blogs-card-title m-0">
                            Cut your AWS bill by 42%
                          </h3>
                        </div>
                      </div>
                      <span className="blogs-reads-count">1.8k reads</span>
                    </div>
                  </Reveal>
                </div>

                {/* Subscribe Banner */}
                <div className="col-12">
                  <Reveal variant={fadeUp} delay={0.5}>
                    <div className="blogs-subscribe-banner d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="blogs-banner-title m-0">
                          Weekly Digest
                        </h4>
                        <p className="blogs-banner-subtitle m-0">
                          New articles every Tuesday
                        </p>
                      </div>
                      <Link
                        to="/resources/technologyguides#newsletter-section"
                        className="blogs-btn-subscribe border-0"
                      >
                        Subscribe{" "}
                        <span className="ms-1">
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsHero;
