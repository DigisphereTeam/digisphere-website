import "./HeroStatsSection.css";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import Button from "../../../../components/Button/Button";
import Counter from "../../../../components/Counter/Counter";

const HeroStatsSection = () => {
  const stats = [
    {
      prefix: "<",
      end: 2,
      suffix: " sec",
      label: "Average Page Load Time",
    },
    {
      end: 70,
      prefix: "60-",
      suffix: "%",
      label: "Average Increase In Enquiries",
    },
    {
      end: 150,
      suffix: "+",
      label: "Websites Delivered",
    },
    {
      end: 90,
      suffix: "+",
      label: "Google PageSpeed Score",
    },
  ];
  const [v, setV] = useState(0);
  const [r, setR] = useState(0);

  useEffect(() => {
    let i = 0;
    let j = 0;

    const vT = setInterval(() => {
      i += 250;
      if (i >= 12500) {
        i = 12500;
        clearInterval(vT);
      }
      setV(i);
    }, 20);

    const rT = setInterval(() => {
      j += 1;
      if (j >= 32) {
        j = 32;
        clearInterval(rT);
      }
      setR(j);
    }, 50);

    return () => {
      clearInterval(vT);
      clearInterval(rT);
    };
  }, []);

  return (
    <section className="hero-stats-section">
      <div className="hero-wrapper container">
        <div className="row mt-4">
          <div className="col-lg-6 col-12">
            <Reveal variant={fadeUp} delay={0.1}>
              <div className="hero-content">
                <span className="hero-tag">Website Design & Development</span>

                <h1 className="hero-title">
                  Websites that work as hard
                  <span> as your business does.</span>
                </h1>

                <p className="hero-description">
                  A website is not a brochure. It is your best salesperson
                  working 24 hours a day. We design and build websites that load
                  fast, rank on search engines, and convert visitors into
                  enquiries, bookings and sales.
                </p>

                <div className="hero-buttons">
                  <Button variant="primary" icon={<FaArrowRight />}>
                    <span>Start Free Digital Audit</span>
                  </Button>

                  <Button variant="secondary" icon={<FaArrowRight />}>
                    <span>View Website Projects</span>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-6 col-12">
            <div className="website-wrapper">
              {/* Browser */}
              <div className="website-browser-header">
                <div className="website-dots">
                  <span className="website-dot website-red"></span>
                  <span className="website-dot website-yellow"></span>
                  <span className="website-dot website-green"></span>
                </div>

                <div className="website-url"> ✓ digispheretech.in</div>
              </div>

              {/* Navbar */}
              <div className="website-navbar">
                <div className="website-logo"></div>

                <div className="website-nav">
                  <a href="/">Services</a>
                  <a href="/">About</a>
                  <a href="/">Contact</a>
                  <button>Get Started</button>
                </div>
              </div>

              {/* HERO */}
              <div className="website-hero">
                {/* LEFT */}
                <div className="website-left">
                  <p className="PROFESSIONAL-SERVICES">PROFESSIONAL SERVICES</p>

                  <h1 className="website-title">
                    Transform Your
                    <br />
                    <span>Digital Presence</span>
                  </h1>

                  <div className="website-lines">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

                  <div className="website-buttons">
                    <button className="web-primary">Start Free Trial</button>
                    <button className="web-secondary">Learn More</button>
                  </div>
                </div>

                {/* RIGHT DASHBOARD (NO IMAGE) */}
                <div className="website-right">
                  <div className="website-card">
                    <div className="website-card-header">
                      <h4>Analytics Overview</h4>

                      <div className="website-status">
                        <span></span>
                        <span></span>
                      </div>
                    </div>

                    <div className="website-chart">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className={`bar b${i + 1}`}></div>
                      ))}
                    </div>
                    <div className="website-stats">
                      <div className="box">
                        <span>Visitors</span>
                        <h3 className="blue">{(v / 1000).toFixed(1)}K</h3>
                      </div>

                      <div className="box">
                        <span>Revenue</span>
                        <h3 className="green">+{r}%</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="website-features">
                <div className="website-feature-card">
                  <span className="website-feature-icon">🚀</span>
                  <h4>Fast Performance</h4>

                  <div className="website-performance">
                    <div className="track"></div>
                    <div className="track-1"></div>
                  </div>
                </div>

                <div className="website-feature-card">
                  <span className="website-feature-icon">🎯</span>
                  <h4>SEO Optimized</h4>

                  <div className="website-performance">
                    <div className="track2"></div>
                    <div className="track2-1"></div>
                  </div>
                </div>

                <div className="website-feature-card">
                  <span className="website-feature-icon">📱</span>
                  <h4>Mobile Ready</h4>

                  <div className="website-performance">
                    <div className="track3"></div>
                    <div className="track3-1"></div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="website-footer">
                <div className="logo"></div>
                <span>500+ Reviews</span>
                <span>|</span>
                <span>Trusted by 1000+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container stats-wrapper">
        <div className="row g-4">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <Reveal variant={fadeUp} delay={index * 0.1}>
                <div className="stat-card">
                  <h3 className="stat-number">
                    <Counter
                      end={item.end}
                      prefix={item.prefix || ""}
                      suffix={item.suffix || ""}
                    />
                  </h3>

                  <p className="stat-label">{item.label}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStatsSection;
