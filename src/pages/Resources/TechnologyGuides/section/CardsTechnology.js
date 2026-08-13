import React from 'react';
import './CardsTechnology.css';
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import icon1 from "../../../../assets/TechnologyGuides/webdv.svg";
import icon2 from "../../../../assets/TechnologyGuides/Cloud.svg";
import icon3 from "../../../../assets/TechnologyGuides/Cybersecurity (3).svg";
import icon4 from "../../../../assets/TechnologyGuides/Ai&au.svg";
import icon5 from "../../../../assets/TechnologyGuides/Marketing.svg";
import icon6 from "../../../../assets/TechnologyGuides/Business Technology.svg";

const sectionsData = [
  {
    category: "Web Development",
    icon: icon1,
    articles: [
      {
        level: "Beginner",
        readTime: "5 min read",
        title: "React vs Next.js: Which One Does Your Business Need?",
        description: "A plain-English breakdown of when to use React, when to use Next.js, and how each decision affects your SEO, performance, and hosting costs.",
      },
      {
        level: "Beginner",
        readTime: "6 min read",
        title: "Why Your Website Needs a CMS (And Which One to Pick)",
        description: "Headless CMS vs traditional CMS explained — with a decision framework for business owners who don't want to call a developer every time they update content.",
      },
      {
        level: "Intermediate",
        readTime: "10 min read",
        title: "PostgreSQL vs MongoDB: Choosing the Right Database",
        description: "A real-world comparison for product teams — when relational databases win, when document DBs make sense, and the questions you should ask before your architect decides.",
      },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: icon2,
    articles: [
      {
        level: "Intermediate",
        readTime: "11 min read",
        title: "AWS vs GCP vs Azure: A Guide for Indian Businesses",
        description: "Data residency, pricing in INR, support quality, and regional coverage — how the three major clouds compare for businesses operating in India.",
      },
      {
        level: "Beginner",
        readTime: "8 min read",
        title: "What 'Cloud Migration' Actually Involves (And Costs)",
        description: "A realistic breakdown of the phases, timeline, risks, and cost of migrating from on-premise servers to cloud infrastructure — from someone who does this regularly.",
      },
      {
        level: "Intermediate",
        readTime: "7 min read",
        title: "Docker and Kubernetes: Do You Actually Need Them?",
        description: "Containerization explained for non-engineers — when Kubernetes saves you money, when it's overkill, and how to decide what your project actually needs.",
      },
    ],
  },
  {
    category: "Cybersecurity",
    icon: icon3,
    articles: [
      {
        level: "Beginner",
        readTime: "6 min read",
        title: "What is a VAPT and Why Does Your Business Need One?",
        description: "Vulnerability Assessment and Penetration Testing explained in plain language — what it tests, what the report tells you, and what to do about the findings.",
      },
      {
        level: "Intermediate",
        readTime: "12 min read",
        title: "HIPAA Compliance for Healthcare Tech: A Practical Checklist",
        description: "The technical and administrative controls required to build HIPAA-compliant software — written for healthcare businesses building digital products.",
      },
      {
        level: "Intermediate",
        readTime: "9 min read",
        title: "The 10 Most Common Security Mistakes in Web Applications",
        description: "Based on hundreds of security audits — the vulnerabilities we find most often in Indian business applications, and how to prevent each one.",
      },
    ],
  },
  {
    category: "AI & Automation",
    icon: icon4,
    articles: [
      {
        level: "Beginner",
        readTime: "10 min read",
        title: "Business Process Automation: Where to Start",
        description: "A framework for identifying which processes in your business are worth automating — with cost-benefit analysis templates and ROI calculation methods.",
      },
      {
        level: "Intermediate",
        readTime: "8 min read",
        title: "Integrating AI into Your Existing Business Software",
        description: "Practical patterns for adding AI capabilities (chat, classification, summarisation) to software that wasn't built with AI in mind — without a full rebuild.",
      },
      {
        level: "Beginner",
        readTime: "8 min read",
        title: "WhatsApp Business API: Setup, Use Cases, and Costs",
        description: "The complete guide to integrating WhatsApp Business API into your CRM, ordering system, or customer support flow — with actual pricing and rate limits.",
      },
    ],
  },
  {
    category: "Digital Marketing",
    icon: icon5,
    articles: [
      {
        level: "Intermediate",
        readTime: "11 min read",
        title: "Google Ads for B2B Businesses: What's Actually Different",
        description: "B2B buying cycles, keyword intent, and conversion tracking are all different from B2C. Here's how to structure campaigns when your sales cycle is weeks, not minutes.",
      },
      {
        level: "Beginner",
        readTime: "7 min read",
        title: "Why SEO Takes 6 Months (And How to Accelerate It)",
        description: "An honest explanation of SEO timelines, why shortcuts usually backfire, and the specific actions that move the needle fastest for business websites.",
      },
      {
        level: "Intermediate",
        readTime: "8 min read",
        title: "Analytics Setup That Actually Tracks Revenue, Not Just Visits",
        description: "Moving beyond pageviews — setting up event tracking, conversion funnels, and attribution models that connect marketing spend to actual business outcomes.",
      },
    ],
  },
  {
    category: "Business Technology",
    icon: icon6,
    articles: [
      {
        level: "Beginner",
        readTime: "9 min read",
        title: "Custom Software vs Off-the-Shelf: A Decision Framework",
        description: "When to buy, when to build, and when to customize — a structured way to evaluate build-vs-buy decisions that factors in total cost of ownership.",
      },
      {
        level: "Beginner",
        readTime: "10 min read",
        title: "How to Write a Software Requirements Document",
        description: "A practical guide to documenting what you need before you talk to developers — the questions to answer, the format that works, and the common mistakes to avoid.",
      },
      {
        level: "Beginner",
        readTime: "8 min read",
        title: "Managed IT vs In-House IT: Total Cost Comparison",
        description: "A full cost breakdown comparing managed IT services against hiring an in-house team — salary, infrastructure, coverage, and hidden costs included.",
      },
    ],
  },
];

const CardsTechnology = () => {
  return (
    <div className="container  tech-guide-container mt-5">
      {sectionsData.map((section, idx) => (
        <div key={idx} className="mb-5">
          {/* Section Header */}
          <div className="d-flex align-items-center mb-4">
            <span className="tech-icon-badge me-2">
              <img src={section.icon} alt={section.category} className="tech-icon-img" />
            </span>
            <h2 className="tech-section-title mb-0">{section.category}</h2>
          </div>

          {/* Bootstrap Grid Row */}
          <div className="row g-4">
            {section.articles.map((article, aIdx) => (
              <div key={aIdx} className="col-12 col-md-4">
                 {/* ✅ FIXED: Changed 'index' to 'aIdx' */}
                 <Reveal className="h-100" variant={fadeUp} delay={aIdx * 0.15}>
                <div className="card tech-article-card h-100 p-4">
                  {/* Card Top Meta */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className={`tech-level-badge tech-${article.level.toLowerCase()}`}>
                      {article.level}
                    </span>
                    <span className="tech-read-time">
                      <i className="bi bi-clock me-1"></i> {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="tech-article-title">{article.title}</h3>

                  {/* Description */}
                  <p className="tech-article-desc flex-grow-1">
                    {article.description}
                  </p>

                  {/* Read Link */}
                  <Link to="/Resources/blogs" className="tech-read-link ">
                    Read Guide <span className="tech-arrow"><FaArrowRight /></span>
                  </Link>
                </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsTechnology;