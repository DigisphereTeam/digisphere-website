import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Success.css";
import { ArrowRight, Star, Quote } from "lucide-react";
import BookingSection from "../../../../components/BookingSection/BookingSection.js";
const CASE_STUDIES = [
  {
    id: "endocare",
    badge: "Healthcare",
    category: "Patient Portal + Digital Marketing",
    title: "Endocare Hospitals",
    quote:
      "Digisphere understood our clinical workflows before they touched the design. The patient portal they built reduced our administrative burden dramatically — and patients love it.",
    author: "Dr.T.Satish Chandra",
    role: "Medical Director, Srinivasa Hospitals",
    location: "Vijayawada, AP",
    avatarText: "RR",
    avatarColor: "#057DCD",
    rating: 5,
    before: "34% no-show rate, 4 hrs/day lost to phone bookings",
    after: "68% drop in no-shows, 2,400+ online bookings in month one",
    metrics: [
      { value: "68%", label: "No-show reduction" },
      { value: "2,400+", label: "Online bookings (month 1)" },
      { value: "4 hrs", label: "Staff hours saved/day" },
    ],
    quoteLeft: true,
  },
  {
    id: "realprop",
    badge: "Real Estate",
    category: "Custom CRM + Lead Generation",
    title: "RealProp Ventures",
    quote:
      "We went from managing 600 leads in spreadsheets to a full CRM with automated follow-up. Our conversion rate tripled. The ROI on this project paid for itself in the first quarter.",
    author: "Arvind Sharma",
    role: "Managing Director, RealProp Ventures",
    location: "Hyderabad, TS",
    avatarText: "AS",
    avatarColor: "#057DCD",
    rating: 5,
    before: "1.2% lead conversion, manual follow-up on spreadsheets",
    after: "3.8% conversion, ₹4.2Cr additional revenue attributed",
    metrics: [
      { value: "3.8%", label: "Conversion rate" },
      { value: "₹4.2Cr", label: "Revenue attributed" },
      { value: "72%", label: "Manual work reduction" },
    ],
    quoteLeft: false,
  },
  {
    id: "skilledition",
    badge: "Education",
    category: "LMS Platform + Growth Marketing",
    title: "Skilledition EdTech",
    quote:
      "We launched in 8 weeks. That's not typical for an LMS build. Digisphere's process was so structured that we always knew where we stood. They felt like a co-founder, not a vendor.",
    author: "Krishna Reddy",
    role: "Co-Founder & CEO, Skilledition EdTech",
    location: "Bangalore, KA",
    avatarText: "KR",
    avatarColor: "#057DCD",
    rating: 5,
    before: "No product, pre-seed stage, manual tutoring operations",
    after: "MVP live, 94% beta retention, ₹1.2Cr seed round raised",
    metrics: [
      { value: "8 weeks", label: "Launch timeline" },
      { value: "94%", label: "Beta user retention (30d)" },
      { value: "₹1.2Cr", label: "Seed funding raised" },
    ],
    quoteLeft: true,
  },
  {
    id: "coastal",
    badge: "Logistics",
    category: "Fleet Management + Cloud Migration",
    title: "Coastal Logistics",
    quote:
      "We had 120 trucks and zero visibility. WhatsApp groups were our 'system'. Digisphere built us a real fleet platform that our drivers actually use — and our fuel costs dropped by nearly a third.",
    author: "Suresh Babu",
    role: "Operations Head, Coastal Logistics",
    location: "Visakhapatnam, AP",
    avatarText: "SB",
    avatarColor: "#057DCD",
    rating: 5,
    before: "Zero real-time visibility, WhatsApp and Excel-based tracking",
    after: "31% fuel reduction, 99% on-time delivery improvement",
    metrics: [
      { value: "31%", label: "Fuel cost reduction" },
      { value: "99%", label: "On-time delivery" },
      { value: "40%", label: "Customer complaint reduction" },
    ],
    quoteLeft: false,
  },
  {
    id: "finvest",
    badge: "Finance",
    category: "Web App + Cybersecurity (VAPT)",
    title: "Finvest Advisory",
    quote:
      "We were failing our cybersecurity audit every year. Digisphere didn't just build us a client portal — they cleaned up our entire security posture. First time in three years we passed 100%.",
    author: "CA Vikram Mehta",
    role: "Founder, Finvest Advisory",
    location: "Mumbai, MH",
    avatarText: "VM",
    avatarColor: "#057DCD",
    rating: 5,
    before: "Failing annual cybersecurity audits, no client portal",
    after: "100% audit pass, 8 hrs/month reporting time saved per advisor",
    metrics: [
      { value: "100%", label: "Audit pass rate" },
      { value: "8 hrs/mo", label: "Reporting time saved/advisor" },
      { value: "4.9/5", label: "Client satisfaction" },
    ],
    quoteLeft: true,
  },
  {
    id: "arjun",
    badge: "Retail",
    category: "E-Commerce + Automation",
    title: "Arjun Textiles",
    quote:
      "My father built this business over 40 years with zero technology. Within one year of working with Digisphere, we had ₹28L in online revenue. He couldn't believe it. Neither could I.",
    author: "Arjun Gowda",
    role: "Managing Partner, Arjun Textiles",
    location: "Coimbatore, TN",
    avatarText: "AG",
    avatarColor: "#057DCD",
    rating: 5,
    before: "Purely offline, no digital presence, manual orders",
    after: "₹28L online revenue in year one, 3x order volume",
    metrics: [
      { value: "₹28L", label: "Online revenue (year 1)" },
      { value: "3x", label: "Order volume growth" },
      { value: "94%", label: "On-time fulfillment" },
    ],
    quoteLeft: false,
  },
];
const Success = () => {
  return (
    <>
     <section className="success-section py-5">
  <div className="container">
    {CASE_STUDIES.map((study) => {
      // Determine direction: Quote comes from left if study.quoteLeft is true, otherwise right
      const quoteFromLeft = study.quoteLeft;

      return (
        <div
          key={study.id}
          className="row g-4 align-items-stretch mb-5 overflow-hidden"
        >
          {/* Quote Column */}
          <motion.div
            initial={{ opacity: 0, x: quoteFromLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`col-12 col-lg-6 d-flex flex-column justify-content-between ${
              study.quoteLeft ? "order-lg-1" : "order-lg-2"
            }`}
          >
            <div className="success-testimonial-box">
              <Quote className="success-quote-icon" size={32} />
              <p className="success-quote-text2">"{study.quote}"</p>

              <div className="success-author-wrapper">
                <div className="success-author-info">
                  {/* Text Avatar Circle */}
                  <div
                    className="success-avatar-badge"
                    style={{
                      backgroundColor: study.avatarColor || "#057DCD",
                    }}
                  >
                    {study.avatarText}
                  </div>
                  <div>
                    <h4 className="success-author-name">{study.author}</h4>
                    <p className="success-author-role">{study.role}</p>
                    <span className="success-author-location">
                      {study.location}
                    </span>
                  </div>
                </div>

                <div className="success-stars">
                  {Array.from({ length: study.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#0072ce"
                      color="#0072ce"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Before / After Columns */}
            <div className="row g-2">
              <div className="col-6">
                <div className="success-comp-box success-before h-100">
                  <span className="success-comp-label">BEFORE</span>
                  <p className="success-comp-desc">{study.before}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="success-comp-box success-after h-100">
                  <span className="success-comp-label">AFTER</span>
                  <p className="success-comp-desc">{study.after}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: quoteFromLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`col-12 col-lg-6 d-flex flex-column ${
              study.quoteLeft ? "order-lg-2" : "order-lg-1"
            }`}
          >
            <div>
              <div className="success-header">
                <span className="success-badge">{study.badge}</span>
                <span className="success-category">{study.category}</span>
              </div>

              <h2 className="success-title">{study.title}</h2>

              {/* 3 Metrics Columns */}
              <div className="row g-2 mb-4">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="col-4">
                    <div className="success-metric-card h-100">
                      <span className="success-metric-value">
                        {metric.value}
                      </span>
                      <span className="success-metric-label">
                        {metric.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button className="success-cta-btn">
                  <span>Start a Similar Project</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      );
    })}
  </div>
</section>
      <BookingSection
        title="Be our next success story."
        description="Every story above started with a single conversation. Let's have ours."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </>
  );
};

export default Success;
