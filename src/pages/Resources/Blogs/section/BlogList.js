import React, { useState } from "react";
import "./BlogList.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../../../../animations/Reveal";
import { fadeLeft, fadeUp } from "../../../../animations/variants";
import { FiCalendar, FiClock } from "react-icons/fi";
import { FaCalendarAlt, FaClock, FaArrowRight, FaTag } from "react-icons/fa";

// Image Imports
import wdFeatured from "../../../../assets/Blogs/wdFeatured.svg";
import WebDevelopmntFeatured from "../../../../assets/Blogs/WebDevelopmntFeatured (2).svg";
import DigitalMarketing from "../../../../assets/Blogs/DigitalMarketing (2).svg";
import aiindia from "../../../../assets/Blogs/AI for Indian.svg";
import CyberThreat from "../../../../assets/Blogs/Cyber Threat.svg";
import cloudimage from "../../../../assets/Blogs/cloudimage.svg";
import UXDesign from "../../../../assets/Blogs/UX Mistak.svg";
import DevOps from "../../../../assets/Blogs/DevOPsimg.jpg";

const categories = [
  "All",
  "Web Development",
  "Digital Marketing",
  "AI & Automation",
  "Cybersecurity",
  "Cloud",
  "UI/UX Design",
  "DevOps",
  
];

const articles = [
  {
    id: 1,
    tag: "Digital Marketing",
    title: "The Real Cost of Google Ads Mismanagement: A ₹40L Audit Story",
    description:
      "We audited a client's existing Google Ads account and found ₹40L in wasted spend over 12 months. Here's exactly what we found and how it was fixed.",
    date: "May 28, 2026",
    dateIcon: <FiCalendar size={12} className="me-1 " />,
    readTime: "6 min read",
    readTimeIcon: <FiClock size={12} className="me-1 " />,
    image: DigitalMarketing,
    path: "/digitalmarketingarticle",
  },
  {
    id: 2,
    tag: "AI & Automation",
    title: "Practical AI for Indian SMEs: What's Actually Worth Doing in 2026",
    description:
      "Beyond the hype the AI use cases that genuinely improve operations for Indian small and mid-size businesses, with realistic cost and timeline expectations.",
    date: "May 14, 2026",
    dateIcon: <FiCalendar size={12} className="me-1 " />,
    readTime: "9 min read",
    readTimeIcon: <FiClock size={12} className="me-1" />,
    image: aiindia,
    path: "/aiarticle",
  },
  {
    id: 3,
    tag: "Cybersecurity",
    title: "The Cyber Threat Landscape for Indian Businesses in 2026",
    description:
      "Ransomware, supply chain attacks, and phishing what we're seeing across client environments and the controls that matter most.",
    date: "Apr 30, 2026",
    dateIcon: <FiCalendar size={12} className="me-1 " />,
    readTime: "8 min read",
    readTimeIcon: <FiClock size={12} className="me-1 " />,
    image: CyberThreat,
    path: "/cybersecurityarticle",
  },
  {
    id: 4,
    tag: "Cloud",
    title:
      "How We Cut a Client's AWS Bill by 42% Without Changing Their Architecture",
    description:
      "A practical walk-through of the cost optimisation levers we use rightsizing, reserved instances, and S3 lifecycle policies and real numbers.",
    date: "Apr 14, 2026",
    dateIcon: <FiCalendar size={12} className="me-1 " />,
    readTime: "8 min read",
    readTimeIcon: <FiClock size={12} className="me-1 " />,
    image: cloudimage,
    path: "/cloudarticle",
  },
  {
    id: 5,
    tag: "UI/UX Design",
    title: "The 5 UX Mistakes That Cost E-Commerce Sites the Most Revenue",
    description:
      "Based on heatmap analysis and session recordings across 50+ e-commerce sites the design patterns that consistently kill conversions.",
    date: "March 28, 2026",
    dateIcon: <FiCalendar size={12} className="me-1 " />,
    readTime: "7 min read",
    readTimeIcon: <FiClock size={12} className="me-1 " />,
    image: UXDesign,
    path: "/ui&uxarticle",
  },
  {
    id: 6,
    tag: "DevOps",
    title: "Streamlining Deployment: How CI/CD Pipelines Save Hundreds of Developer Hours",
    description:
      "A deep dive into automating your software delivery process, reducing deployment errors, and accelerating time-to-market with modern DevOps practices.",
    date: "June 02, 2026",
    dateIcon: <FiCalendar size={12} className="me-1 " />,
    readTime: "6 min read",
    readTimeIcon: <FiClock size={12} className="me-1 " />,
    image: DevOps, // Reused existing asset to prevent module resolution errors
    path: "/devopsarticle",
  },
];

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = articles.filter((item) =>
    activeCategory === "All" ? true : item.tag === activeCategory
  );

  return (
    <>
      <div className="blog-section">
        {/* Category Filter Pills Wrapper */}
        <div className="blog-category-wrapper w-100 py-3 mb-5">
          <div className="container">
            <div className="categories-section">
              {categories.map((cat, idx) => (
                <Reveal key={idx} variant={fadeUp} delay={0.1 + idx * 0.05}>
                  <button
                    className={`blog-filter-pill ${
                      activeCategory === cat ? "blog-filter-active" : ""
                    }`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content inside bounded container */}
        <div className="container">
          {/* Featured Hero Article */}
          {(activeCategory === "All" ||
            activeCategory === "Web Development") && (
            <Reveal variant={fadeLeft} delay={0.2}>
              <div className="blog-featured-card card border-0 mb-5">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-6">
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                      className="blog-featured-img-wrapper"
                    >
                      <img
                        src={wdFeatured}
                        alt="Featured Article"
                        className="img-fluid blog-featured-img"
                      />
                    </motion.div>
                  </div>
                  <div className="col-lg-6">
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                      className="blog-featured-content p-4 p-lg-5"
                    >
                      <span className="blog-tag-pill blog-tag-featured mb-2">
                        <img
                          src={WebDevelopmntFeatured}
                          alt="WebDevelopmntFeatured"
                        />{" "}
                        Web Development • Featured
                      </span>
                      <h2 className="blog-featured-title">
                        Why Most Business Websites Fail to Generate Leads (And
                        What to Do About It)
                      </h2>
                      <p className="blog-featured-text text-muted">
                        A look at the most common reasons business websites
                        don't convert visitors to enquiries and the structural
                        changes that reliably fix them.
                      </p>

                      <div className="d-flex align-items-center gap-3 text-muted blog-meta mb-4">
                        <span>
                          <FiCalendar className="me-1" /> June 10, 2026
                        </span>
                        <span>
                          <FiClock className="me-1" /> 7 min read
                        </span>
                      </div>

                      <Link
                        to="/webArticle"
                        style={{ textDecoration: "none" }}
                      >
                        <button className="blog-btn-primary">
                          Read Article{" "}
                          <FaArrowRight className="ms-2 blog-btn-arrow" />
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      <div className="latest-articel">
        <div className="container">
          <Reveal variant={fadeUp} delay={0.1}>
            <h3 className="blog-section-title mb-4">Latest Articles</h3>
          </Reveal>

          {/* Articles Grid */}
          <div className="row g-4">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((item, index) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                  <Reveal variant={fadeUp} delay={0.15 * index} className="w-100 h-100">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="blog-grid-card card h-100 border-0 d-flex flex-column"
                    >
                      <div className="blog-card-img-wrapper">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="card-img-top blog-card-img"
                        />
                      </div>
                      <div className="card-body p-3 d-flex flex-column flex-grow-1">
                        <div className="blog-content-wrapper flex-grow-1">
                          <span className="blog-tag-pill mb-1 d-inline-block">
                            {item.tag}
                          </span>
                          <h5 className="blog-card-grid-title mt-1 mb-2">
                            {item.title}
                          </h5>
                          <p className="blog-card-grid-desc text-muted mb-3">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-auto pt-3 d-flex align-items-center justify-content-between border-top text-muted blog-meta">
                          <div className="d-flex align-items-center gap-3">
                            <span className="d-inline-flex align-items-center">
                              {item.dateIcon}
                              {item.date}
                            </span>

                            <span className="d-inline-flex align-items-center">
                              {item.readTimeIcon}
                              {item.readTime}
                            </span>
                          </div>

                          <Link to={item.path} className="blog-read-link">
                            Read{" "}
                            <FaArrowRight
                              size={11}
                              className="ms-1 blog-link-arrow"
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </Reveal>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="text-muted fs-5">
                  No articles available for "{activeCategory}".
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;