import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./DigisphereHome.css";
import { TiArrowUp } from "react-icons/ti";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Website from "../../assets/Website.svg";
import Launchgrow from "../../assets/Launch & Grow.svg";
import GenerationIcon from "../../assets/Lead Generationicon.svg";
import Marketing from "../../assets/Marketing ROI.svg";
import Infrastructure from "../../assets/Cloud Infrastructure.svg";
import Securitye from "../../assets/Security.svg";
import Performance from "../../assets/Performance.svg";
import DevOps from "../../assets/DevOps.svg";
import analyticsIcon from "../../assets/Website AnalyticsIcon.svg";
import manual from "../../assets/manual.svg";
import infrastructure from "../../assets/infrastructure.svg";
import Growth from "../../assets/Growth.svg";
import Design from "../../assets/Website Design.svg";
import Development from "../../assets/Web Development.svg";
import SEO from "../../assets/SEO.svg";
import Google from "../../assets/Google Ads.svg";
import Meta from "../../assets/Meta Ads.svg";
import ux from "../../assets/UX Design.svg";
import Cybersecurity from "../../assets/Cybersecurity.svg";
import Managed from "../../assets/Managed IT.svg";
import Monitoring from "../../assets/Monitoring.svg";
import Automation from "../../assets/Automation.svg";
import Before from "../../assets/Before.svg";
import After from "../../assets/After.svg";
import beforesection from "../../assets/beforesection.svg";
import aftersection from "../../assets/aftersection.svg";
import WebsiteDesignIcon from "../../assets/WebsiteDesignIcon.svg";
import WebApplicationIcon from "../../assets/WebApplicationIcon.svg";
import DigitalMarketingIcon from "../../assets/DigitalMarketingIcon.svg";
import ExperienceDesignIcon from "../../assets/ExperienceDesignIcon.svg";
import CloudServicesIcon from "../../assets/CloudServicesIcon.svg";
import CyberSecurityIcon from "../../assets/CyberSecurityIcon.svg";

import howwedo from "../../assets/howwedo arrow icon.svg";

import FreeAudit from "../../assets/Free Audit.svg";
import Proposal from "../../assets/Clear Proposal.svg";
import Launch from "../../assets/Build & Launch.svg";
import Grow from "../../assets/Grow.svg";
import Protect from "../../assets/Protect.svg";
import ChatonWhatsApp from "../../assets/Chat on WhatsApp.svg";
import logo1 from "../../assets/logo1-removebg-preview.png";
import logo4 from "../../assets/logo5-removebg-preview.png";
import logo5 from "../../assets/logo6-removebg-preview.png";
import logo6 from "../../assets/logo7-removebg-preview.png";
import logo7 from "../../assets/logo8-removebg-preview.png";
import logo8 from "../../assets/logo9-removebg-preview.png";
import logo9 from "../../assets/logo10-removebg-preview.png";
import logo10 from "../../assets/logo11-removebg-preview.png";
import logo11 from "../../assets/logo12-removebg-preview - Copy.png";

import Reveal from "../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../animations/variants";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";


const CountUp = ({ end, suffix = "", duration = 2000, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startAnimation]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};
const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const isRange = Array.isArray(end);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const target1 = isRange ? end[0] : end;
  const target2 = isRange ? end[1] : 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount1(progress * target1);

      if (isRange) {
        setCount2(progress * target2);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target1, target2, duration, isRange]);

  const formatNumber = (currentVal, finalVal) => {
    return Number.isInteger(finalVal)
      ? Math.floor(currentVal).toLocaleString()
      : currentVal.toFixed(1);
  };

  return (
    <span ref={ref}>
      {prefix}
      {isRange ? (
        <>
          {formatNumber(count1, target1)}–{formatNumber(count2, target2)}
        </>
      ) : (
        formatNumber(count1, target1)
      )}
      {suffix}
    </span>
  );
};

const DigispherHome = () => {
  const tasks = [
    {
      color: "#10B981",
      progress: "100%",
      title: "Automated Lead Flow",
    },
    {
      color: "#057DCDE9",
      progress: "80%",
      title: "CRM Integration",
    },
    {
      color: "#F59E0B",
      progress: "60%",
      title: "Reporting Dashboard",
    },
  ];
  const logos = [
    logo1,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
  ];
  const topCards = [
    {
      icon: <img src={Website} alt="Analytics" />,
      title: "Website Analytics",
      end: 127,
      prefix: "+",
      suffix: "%",
      label: "Traffic Growth",
    },
    {
      icon: <img src={GenerationIcon} alt="Analytics" />,
      title: "Lead Generation",
      end: 3247,
      prefix: "",
      suffix: "",
      label: "New Leads",
    },
    {
      icon: <img src={Marketing} alt="Analytics" />,
      title: "Marketing ROI",
      end: 3.2,
      prefix: "",
      suffix: "x",
      label: "Return Rate",
    },
    {
      icon: <img src={Infrastructure} alt="Analytics" />,
      title: "Cloud Infrastructure",
      end: 99.9,
      prefix: "",
      suffix: "%",
      label: "Uptime",
    },
  ];
  const bottomCards = [
    {
      icon: <img src={Securitye} alt="Analytics" />,
      title: "Security",
      value: "Active",
    },
    {
      icon: <img src={Performance} alt="Analytics" />,
      title: "Performance",
      value: "98/100",
    },
    {
      icon: <img src={DevOps} alt="Analytics" />,
      title: "DevOps",
      value: "Live",
    },
  ];
  const services = [
    { icon: <img src={Design} alt="Analytics" />, name: "Website Design" },
    {
      icon: <img src={Development} alt="Analytics" />,
      name: "Web Development",
    },
    { icon: <img src={SEO} alt="Analytics" />, name: "SEO" },
    { icon: <img src={Google} alt="Analytics" />, name: "Google Ads" },
    { icon: <img src={Meta} alt="Analytics" />, name: "Meta Ads" },
    { icon: <img src={ux} alt="Analytics" />, name: "UX Design" },
    {
      icon: <img src={Infrastructure} alt="Analytics" />,
      name: "Cloud Services",
    },
    {
      icon: <img src={Cybersecurity} alt="Analytics" />,
      name: "Cybersecurity",
    },
    { icon: <img src={Managed} alt="Analytics" />, name: "Managed IT" },
    { icon: <img src={DevOps} alt="Analytics" />, name: "DevOps" },
    { icon: <img src={Monitoring} alt="Analytics" />, name: "Monitoring" },
    { icon: <img src={Automation} alt="Analytics" />, name: "Automation" },
  ];
  const beforeItems = [
    {
      icon: <img src={beforesection} alt="" />,
      name: "Disconnected systems",
    },
    {
      icon: <img src={beforesection} alt="" />,
      name: "Manual processes",
    },
    {
      icon: <img src={beforesection} alt="" />,
      name: "Low visibility",
    },
    {
      icon: <img src={beforesection} alt="" />,
      name: "Poor conversions",
    },
  ];

  const afterItems = [
    {
      icon: <img src={aftersection} alt="" />,
      name: "Unified growth ecosystem",
    },
    {
      icon: <img src={aftersection} alt="" />,
      name: "Automated workflows",
    },
    {
      icon: <img src={aftersection} alt="" />,
      name: "Lead generation engine",
    },
    {
      icon: <img src={aftersection} alt="" />,
      name: "Scalable infrastructure",
    },
  ];
  const businessNeeds = [
    {
      icon: WebsiteDesignIcon,
      title: "Website Design",
      description:
        "High-performance websites that convert visitors into customers",
      highlight: "3-5x higher conversion rates",
    },
    {
      icon: WebApplicationIcon,
      title: "Web Applications",
      description:
        "Custom applications that streamline operations and save time",
      highlight: "10+ hours saved weekly",
    },
    {
      icon: DigitalMarketingIcon,
      title: "Digital Marketing",
      description: "SEO and paid ads strategies that bring qualified leads",
      highlight: "60-80% more enquiries",
    },
    {
      icon: ExperienceDesignIcon,
      title: "Experience Design",
      description: "User experiences that delight customers and build loyalty",
      highlight: "2x engagement increase",
    },
    {
      icon: CloudServicesIcon,
      title: "Cloud Services",
      description: "Scalable infrastructure on AWS, Azure, and Google Cloud",
      highlight: "99.9% uptime guarantee",
    },
    {
      icon: CyberSecurityIcon,
      title: "Cybersecurity",
      description: "Enterprise-grade security and compliance frameworks",
      highlight: "Zero security incidents",
    },
  ];
  const steps = [
    {
      icon: FreeAudit,
      number: "01",
      title: "Free Audit",
      description:
        "We analyze your current digital setup and identify growth opportunities",
    },
    {
      icon: Proposal,
      number: "02",
      title: "Clear Proposal",
      description:
        "You get a detailed plan with timeline, investment, and expected outcomes",
    },
    {
      icon: Launch,
      number: "03",
      title: "Build & Launch",
      description:
        "We design, develop, and deploy your solution with regular updates",
    },
    {
      icon: Launchgrow,
      number: "04",
      title: "Launch & Grow",
      description: "We monitor, optimize, and scale as your business grows",
    },
  ];

  const industries = [
    "Healthcare",
    "Education",
    "Finance",
    "Retail",
    "Manufacturing",
    "Real Estate",
    "Logistics",
    "Professional Services",
    "Startups",
    "Scale-ups",
  ];
  const testimonials = [
    {
      quote:
        "Digisphere transformed our digital presence completely. We went from getting 5–6 enquiries a month to 40+ qualified leads.",
      badge: "Increase in qualified leads",
      initials: "RK",
      name: "Rajesh Kumar",
      role: "Managing Director, TechVision Solutions",
    },
    {
      quote:
        "Our website traffic doubled within three months. The team delivered exceptional results and exceeded expectations.",
      badge: "2x Website Traffic",
      initials: "SJ",
      name: "Sarah Johnson",
      role: "CEO, Bright Labs",
    },
    {
      quote:
        "The ROI on our campaigns improved dramatically. Working with Digisphere was one of our best business decisions.",
      badge: "Higher ROI",
      initials: "ML",
      name: "Michael Lee",
      role: "Founder, GrowthHub",
    },
  ];
  const bars = [36, 42, 50, 65, 78, 100, 117, 127];

  const maxHeight = Math.max(...bars);
  const minHeight = Math.min(...bars);

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  //  AUTO SLIDE ADDED HERE
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000); // change slide every 2 sec

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="digisphere-page-container">
      <section className="Digisphere-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 Digisphere-left">
              <Reveal variant={fadeRight} delay={0.1}>
                <p class="Digisphere-badge">
                  Technology that works for your business
                </p>
                <h1 className="digisphere-hero-title">Technology that <h1 className="digisphere-hero-secondtitle">
                  grows your
                  <br /> business.
                </h1></h1>
               
                <p className="digisphere-hero-desc">
                  We design and build the websites, applications, and marketing<br/>
                  systems that bring in customers and keep them. Then we make<br/>
                  sure the infrastructure behind them is fast, secure, and ready
                  to <br/>scale.
                </p>

                <div class="digisphere-hero-buttons">
                  <Link class="btn-books">
                    Start Free Digital Audit
                    <i>
                      <FaArrowRight />
                    </i>
                  </Link>
                  <Link href="" class="btn-call">
                    <i class="bi bi-telephone"></i> See Our Work
                  </Link>
                </div>
                <div className="digiphere-stats py-3">
                  <div className="digisphere-Projects-Delivered">
                    <h6>336+</h6>
                    <p>Projects Delivered</p>
                  </div>

                  <div className="digisphere-Clients">
                    <h6>316+</h6>
                    <p>Clients</p>
                  </div>

                  <div className="digisphere-growing">
                    <p>Growing Nationwide</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-6 digisphere-right">
              <div className="top-grid">
                {topCards.map((card, index) => (
                  <Reveal
                    variant={
                      index === 0 ? fadeLeft : index === 1 ? fadeRight : fadeUp
                    }
                    delay={0.2}
                  >
                    <div className="card large-card" key={index}>
                      <div className="card-header">
                        <span className="icon">{card.icon}</span>
                        <span className="title">{card.title}</span>
                      </div>

                      <h2 className="Digisphere-value">
                        <AnimatedCounter
                          end={card.end}
                          prefix={card.prefix}
                          suffix={card.suffix}
                        />
                      </h2>

                      <span className="Digisphere-label">{card.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="bottom-grid">
                {bottomCards.map((card, index) => (
                  <div className="card digi-small-card" key={index}>
                    <div className="digi-icon center">{card.icon}</div>
                    <span className="digi-small-title">{card.title}</span>
                    <h3>{card.value}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="digisphere-brands-logos reveal">
        <Container>
          <p className="digi-partners-label">Companies That Trusted Us</p>

          <div className="digisphere-brands-logos-slider">
            <div className="digisphere-brands-logos-track">
              {/* ORIGINAL LOGOS */}
              {logos.map((logo, index) => (
                <div
                  className="digisphere-brands-logos-item"
                  key={`logo-${index}`}
                >
                  <img src={logo} alt={`Brand ${index + 1}`} />
                </div>
              ))}

              {/* DUPLICATE LOGOS FOR SMOOTH LOOP */}
              {logos.map((logo, index) => (
                <div
                  className="digisphere-brands-logos-item"
                  key={`logo-duplicate-${index}`}
                >
                  <img src={logo} alt={`Brand ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="section mt-5">
        <div className="container">
          <div className="row">
            <div className="digisphere-dusinesses-growth">
              <Reveal variant={fadeUp} delay={0.12}>
                <h3 className="digisphere-growth-title">
                  Most businesses don't have a technology problem.
                </h3>
                <h3 className="digisphere-secondgrowth-title">
                  They have a growth problem.
                </h3>
              </Reveal>
            </div>
            <div className="row  align-items-center pair-row my-5">
              <div className="col-lg-6 digisphere-per ">
                <div class="digisphere-service-icon">
                  <img src={analyticsIcon} alt="analyticsIcon" />
                </div>
                <Reveal variant={fadeRight} delay={0.2}>
                  <div className="digisphere-service-section">
                    <p className="digisphere-service-title">
                      Customers are searching for your services right now. If
                      they can't find you, they find your competitors.
                    </p>
                    <h6 className="digisphere-solution">SOLUTION</h6>
                    <p className="SEO-strategies">
                      High-performance websites and SEO strategies.
                    </p>
                    <h6 className="digisphere-outcome">OUTCOME</h6>
                    <p className="enquiries">60–80% more enquiries.</p>
                  </div>
                </Reveal>
              </div>
              {/* <div className="col-lg-6 digisphere-right-per ">
                <div className="digisphere-wrapper">
                  <img className="ranking-image" src={ranking} alt="ranking" />
                </div>
              </div> */}
              <div className="col-lg-6 digisphere-right-per ">
                <div className="traffic-card">
                  <div className="traffic-header">
                    <h4>Organic Traffic</h4>

                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  <div className="traffic-bars">
                    {bars.map((height, index) => (
                      <div
                        key={index}
                        className={`bar-wrapper ${
                          height === maxHeight || height === minHeight
                            ? "fixed-tooltip"
                            : ""
                        }`}
                      >
                        <span className="bar-tooltip">
                          <TiArrowUp /> {height}%
                        </span>

                        <motion.div
                          className="traffic-bar"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                          }}
                          style={{
                            height: `${height}px`,
                            transformOrigin: "bottom",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <motion.p
                    className="traffic-footer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Search Rankings Up
                  </motion.p>
                </div>
              </div>
            </div>
            <div className="row  align-items-center pair-row ">
              {/* <div className="col-lg-6 digisphere-left-per ">
                <div className="digisphere-wrapper-per">
                  <img
                    className="percenteage-image"
                    src={percentage}
                    alt="ranking"
                  />
                </div>
              </div> */}
              <div className="col-lg-6 digisphere-left-per ">
                <div className="progress-card">
                  {tasks.map((task, index) => (
                    <div className="progress-item" key={index}>
                      <div
                        className="progress-icon"
                        style={{ background: `${task.color}20` }}
                      >
                        <span
                          className="icon-dot"
                          style={{ background: task.color }}
                        ></span>
                      </div>

                      <div className="progress-content">
                        <div className="progress-track">
                          <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={{ width: task.progress }}
                            transition={{
                              duration: 1.2,
                              delay: index * 0.3,
                            }}
                            style={{ background: task.color }}
                          />
                        </div>

                        <p>{task.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 digisphere-right-per ">
                <div class="digisphere-service-icon">
                  <img src={manual} alt="manual" />
                </div>
                <Reveal variant={fadeLeft} delay={0.2}>
                  <div className="digisphere-service-section">
                    <p className="digisphere-service-title">
                      Your team relies on WhatsApp, spreadsheets, and manual
                      processes.
                    </p>
                    <h6 className="digisphere-solution">SOLUTION</h6>
                    <p className="SEO-strategies">
                      Custom applications and business automation.
                    </p>
                    <h6 className="digisphere-outcome">OUTCOME</h6>
                    <p className="enquiries">10+ hours saved every week.</p>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="row  align-items-center pair-row  ">
              <div className="col-lg-6 digisphere-left-built">
                <div class="digisphere-service-icon">
                  <img src={Growth} alt="analyticsIcon" />
                </div>
                <Reveal variant={fadeRight} delay={0.2}>
                  <div className="digisphere-service-section">
                    <p className="digisphere-service-title">
                      Growth breaks infrastructure that wasn't built to scale.
                    </p>
                    <h6 className="digisphere-solution">SOLUTION</h6>
                    <p className="SEO-strategies">
                      Cloud architecture, DevOps, and security.
                    </p>
                    <h6 className="digisphere-outcome">OUTCOME</h6>
                    <p className="enquiries">99.9% uptime.</p>
                  </div>
                </Reveal>
              </div>
              <div className="col-lg-6 digisphere-right-built ">
                <div className="digisphere-wrapper-growth">
                  <img
                    className="ranking-image"
                    src={infrastructure}
                    alt="ranking"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="digisphere-ecosystem-section">
        <div className="container">
          <Reveal variant={fadeRight}>
            <h2 className="digisphere-ecosystem-title">
              Everything your business needs
              <br />
              <span>to grow and scale.</span>
            </h2>
          </Reveal>
          <div className="digisphere-service-grid">
            {services.map((item, index) => (
              <Reveal variant={fadeUp}>
                <div className="digisphere-service-card" key={index}>
                  <span className="digisphere-service-icon-image">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant={fadeUp} delay={0.1}>
            <div className="digisphere-ecosystem-box">
              <h3>DIGISPHERE ECOSYSTEM</h3>
              <p>
                All services integrated and working together for your growth
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="digisphere-advantage-section">
        <div className="digisphere-container">
          <Reveal variant={fadeUp} delay={0.1}>
            <h2 className="digisphere-title">
              From
              <span className="digital-presence"> digital presence</span>
              <br />
              to <span className="digital-advantage">digital advantage.</span>
            </h2>
          </Reveal>
          <div className="digisphere-cards-wrapper">
            {/* Before Card */}
            <Reveal variant={fadeRight} delay={0.1}>
              <div className="digisphere-card digisphere-before-card">
                <div className="digisphere-card-header">
                  <span className="digisphere-icon">
                    <img
                      className="digisphere-header-icon"
                      src={Before}
                      alt="Before"
                    />
                  </span>
                  <span>Before</span>
                </div>

                <ul className="digisphere-list">
                  {beforeItems.map((item, index) => (
                    <li key={index} className="digisphere-list-item">
                      <span className="digisphere-item-icon">{item.icon}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {/* After Card */}
            <Reveal variant={fadeLeft} delay={0.1}>
              <div className="digisphere-card digisphere-after-card">
                <div className="digisphere-card-header">
                  <span className="digisphere-icon">
                    <img
                      className="digisphere-header-icon"
                      src={After}
                      alt="After"
                    />
                  </span>
                  <span>After</span>
                </div>

                <ul className="digisphere-list">
                  {afterItems.map((item, index) => (
                    <li key={index} className="digisphere-list-item">
                      <span className="digisphere-item-icon">{item.icon}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="digisphere-business-needs-section">
        <div className="digisphere-business-needs-container">
          <Reveal variant={fadeLeft}>
            <h2 className="digisphere-business-needs-title">
              Everything your business needs
              <br />
              <span>to grow and run online.</span>
            </h2>
          </Reveal>
          <div className="digisphere-business-needs-grid">
            {businessNeeds.map((item, index) => (
              <Reveal variant={fadeUp}>
                <div key={index} className="digisphere-business-needs-card">
                  <div className="digisphere-business-needs-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>

                  <h3 className="digisphere-business-needs-heading">
                    {item.title}
                  </h3>

                  <p className="digisphere-business-needs-description">
                    {item.description}
                  </p>

                  <p className="digisphere-business-needs-highlight">
                    {item.highlight}
                  </p>

                  <button className="digisphere-business-needs-link">
                    Learn more
                    <span>→</span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="digisphere-client-report">
        <div className="digisphere-client-report__container">
          <span className="digisphere-client-report__label">
            OUR CLIENTS REPORT
          </span>

          <h2 className="digisphere-client-report__percentage">
            <AnimatedCounter end={[60, 80]} suffix="%" />
          </h2>

          <p className="digisphere-client-report__description">
            More online enquiries within the first quarter.
          </p>

          <Link className="digisphere-client-report__link">
            How We Do It
            <span className="digisphere-client-report__arrow">
              <img src={howwedo} alt="Analytics" />
            </span>
          </Link>
        </div>
      </section>
      <section className="digisphere-stats" ref={sectionRef}>
        <div className="digisphere-stats__container">
          <div className="digisphere-stats__item">
            <h2 className="digisphere-stats__number">
              <CountUp end={300} suffix="+" startAnimation={startCount} />
            </h2>
            <p className="digisphere-stats__label">Projects Delivered</p>
          </div>

          <div className="digisphere-stats__item">
            <h2 className="digisphere-stats__number">
              <CountUp end={150} suffix="+" startAnimation={startCount} />
            </h2>
            <p className="digisphere-stats__label">Clients</p>
          </div>

          <div className="digisphere-stats__item">
            <h2 className="digisphere-stats__number">
              <CountUp end={3} suffix="×" startAnimation={startCount} />
            </h2>
            <p className="digisphere-stats__label">Average Marketing ROI</p>
          </div>

          <div className="digisphere-stats__item">
            <h2 className="digisphere-stats__number">
              <CountUp end={99} suffix=".9%" startAnimation={startCount} />
            </h2>
            <p className="digisphere-stats__label">Infrastructure Uptime</p>
          </div>
        </div>
      </section>
      <section className="home-engagement-section">
        <div className="container">
          {/* Section Heading */}
          <Reveal variant={fadeUp}>
            <div className="digi-engagement-header text-center">
              <h2>
                From first conversation to{" "}
                <h2 className="engagement-highlight">
                  {" "}
                  your business growing.
                </h2>
              </h2>
            </div>
          </Reveal>
          {/* Cards */}
          <section className="row g-4 justify-content-center digisteps-grid">
            {steps.map((step, index) => (
              <div className="col-12 col-sm-6 col-lg-3" key={index}>
                <Reveal variant={fadeUp} className="h-100" delay={index * 0.15}>
                  <div className="step-card h-100">
                    <div className="step-icon-box">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="step-icon"
                      />
                    </div>

                    <div className="step-number">{step.number}</div>

                    <h3 className="step-title">{step.title}</h3>

                    <p className="step-desc">{step.description}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="digisphere-industries">
        <div className="digisphere-industries__container">
          <h2 className="digisphere-industries__title">
            We've delivered for{" "}
            <span className="digisphere-industries__title-highlight">
              businesses like yours.
            </span>
          </h2>

          <div className="digisphere-industries__tags">
            {industries.map((industry, index) => (
              <button key={index} className="digisphere-industries__tag">
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>
      <div className="digisphere-testimonial-wrapper">
        <div className="digisphere-testimonial-card">
          <p className="digisphere-testimonial-quote">
            "{testimonials[activeIndex].quote}"
          </p>

          <div className="digisphere-testimonial-badge">
            {testimonials[activeIndex].badge}
          </div>

          <div className="digisphere-testimonial-user">
            <div className="digisphere-testimonial-avatar">
              {testimonials[activeIndex].initials}
            </div>

            <div className="digisphere-testimonial-user-content">
              <h4 className="digisphere-testimonial-name">
                {testimonials[activeIndex].name}
              </h4>

              <p className="digisphere-testimonial-role">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>

          <div className="digisphere-testimonial-footer">
            <div className="digisphere-testimonial-controls">
              <button
                type="button"
                className="digisphere-testimonial-nav-btn"
                onClick={prevSlide}
              >
                &#8249;
              </button>

              <button
                type="button"
                className="digisphere-testimonial-nav-btn"
                onClick={nextSlide}
              >
                &#8250;
              </button>
            </div>

            <div className="digisphere-testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`digisphere-testimonial-dot ${
                    activeIndex === index
                      ? "digisphere-testimonial-dot-active"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="digisphere-feature-section">
        <div className="container">
          <Reveal variant={fadeLeft}>
            <h2 className="digisphere-feature-title">
              Build it.{" "}
              <span className="digisphere-feature-grow">Grow it.</span>{" "}
              <span className="digisphere-feature-protect">Protect it.</span>
            </h2>
          </Reveal>
          <Reveal variant={fadeUp} delay={0.15}>
            <div className="digisphere-feature-grid">
              {/* Build */}
              <div className="digisphere-feature-item">
                <div className="digisphere-feature-icon-box digisphere-feature-blue-bg">
                  <img src={Launch} alt="Launch" />
                </div>

                <h3 className="digisphere-feature-blue">Build it.</h3>

                <ul>
                  <li>Websites</li>
                  <li>Applications</li>
                  <li>Digital Products</li>
                </ul>
              </div>

              {/* Grow */}
              <div className="digisphere-feature-item">
                <div className="digisphere-feature-icon-box digisphere-feature-green-bg">
                  <img src={Grow} alt="Grow" />
                </div>

                <h3 className="digisphere-feature-green-text">Grow it.</h3>

                <ul>
                  <li>SEO</li>
                  <li>Ads</li>
                  <li>Marketing</li>
                </ul>
              </div>

              {/* Protect */}
              <div className="digisphere-feature-item">
                <div className="digisphere-feature-icon-box digisphere-feature-orange-bg">
                  <img src={Protect} alt="Protect" />
                </div>

                <h3 className="digisphere-feature-orange-text">Protect it.</h3>

                <ul>
                  <li>Cloud</li>
                  <li>Security</li>
                  <li>Managed IT</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="digisphere-cta-section">
        <div className="digisphere-cta-container">
          <h2 className="digisphere-cta-title">
            Your business deserves a
            <br />
            <h2 className="digisphere-cta-highlight">
              better digital presence.
            </h2>
          </h2>

          <p className="digisphere-cta-description">
            Book a free 30-minute digital audit. We'll review your current
            setup, identify opportunities, and show exactly what we would
            improve.
          </p>

          <div className="digisphere-cta-buttons">
            <button className="digisphere-cta-primary-btn">
              Book Your Free Audit <FaArrowRight />
            </button>

            <button className="digisphere-cta-secondary-btn">
              <img src={ChatonWhatsApp} alt="ChatonWhatsApp" /> Chat on WhatsApp
            </button>
          </div>

          <div className="digisphere-cta-meta">
            <span className="digisphere-cta-response">
              <span className="response-dot">●</span> Response within 4 hours
            </span>

            <span className="digisphere-cta-businesses">
              <strong>316+</strong> businesses growing with Digisphere
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigispherHome;
