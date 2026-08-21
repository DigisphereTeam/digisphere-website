import React, { useState } from "react";
import {
  FaSearch,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaExternalLinkAlt,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import "./Faqspage.css";
import { Link } from "react-router-dom";

const faqData = [
  {
    id: 1,
    question: "What is Digisphere?",
    answer:
      "Digisphere is a technology and digital solutions company that helps businesses grow through custom software, websites, AI solutions, UI/UX design, digital marketing, and cloud services.",
  },
  {
    id: 2,
    question: "What services does Digisphere offer?",
    answer:
      "Digisphere offers custom software development, website development, AI solutions, UI/UX design, digital marketing, cloud services, and technical support.",
  },
  {
    id: 3,
    question: "How much will it cost?",
    answer:
      "Pricing depends on your project's scope, features, and requirements, so every quote is customized. Reach out for a free consultation and we'll give you a clear, no-obligation estimate.",
  },
  {
    id: 4,
    question: "How long will my project take?",
    answer:
      "A simple website takes about 2–4 weeks, while apps or larger projects take a bit longer based on complexity. Either way, we'll share a clear timeline before starting so you know exactly what to expect.",
  },
  {
    id: 5,
    question: "How can I contact you?",
    answer:
      "Send us an email at info@digispheretech.in. We’ll get back to you within 1–2 working days.",
  },
  {
    id: 6,
    question: "How do I get started?",
    answer:
      "Just reach out to us with your project idea or business goals, and our team will schedule a free consultation. We'll assess your needs and recommend the right solution to get you moving quickly.",
  },
  {
    id: 7,
    question: "How can Digisphere help my business?",
    answer:
      "We help businesses improve efficiency, automate processes, strengthen their digital presence, and build scalable technology solutions tailored to their needs.",
  },
  {
    id: 8,
    question: "What makes Digisphere different?",
    answer:
      "We combine technology, AI, design, and digital marketing to provide end-to-end solutions focused on real business challenges and measurable results.",
  },
  {
    id: 9,
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes, we work with startups, SMEs, and enterprises, offering scalable solutions based on your business goals and budget.",
  },
  {
    id: 10,
    question: "Can Digisphere develop a website for my business?",
    answer:
      "Yes, we create modern, responsive, high-performance websites designed to improve user experience and support business growth.",
  },
  {
    id: 11,
    question: "Will my website work on mobile?",
    answer:
      "Yes, every website we build is fully responsive and works smoothly across phones, tablets, and desktops. We test it on multiple screen sizes to make sure it looks and performs great everywhere.",
  },
  {
    id: 12,
    question: "Do you help with Google ranking (SEO)?",
    answer:
      "Yes, we optimize your website with proven SEO practices to help it rank higher on Google. This means more visibility and more people finding you organically.",
  },
   {
    id: 13,
    question: "Do you manage Instagram/Facebook pages too?",
    answer:
      "Yes, we manage your social media end-to-end — from content and design to posting and growth strategy, so your brand stays active and engaging.",
  },
  {
    id: 14,
    question: "What if something breaks after my website is live?",
    answer:
      "No worries — just message us and we'll fix it quickly. We're always around to keep your website running smoothly.",
  },
  {
    id: 15,
    question:
      "Does Digisphere provide ongoing support after project completion?",
    answer:
      "Yes. We provide ongoing maintenance and technical support to ensure your websites, software, and digital solutions continue to perform effectively.",
  },
];

const Faqspage = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="faqs-pageContainer">
      <main className="faqs-content">
        <div className="faqs-section">
          <h1 className="faqs-title">
            <span className="faqs-highlight">Frequently</span> Asked Questions
          </h1>
          <p className="faqs-subtitle">
            Everything you need to know about working with Digisphere Tech.
            Can't find the answer you're looking for? Feel free to{" "}
            <Link to="/contact">contact us</Link>.
          </p>

          <div className="faqs-accordionList">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`faqs-accordionCard ${isOpen ? "faqs-open" : ""}`}
                >
                  <button
                    className="faqs-accordionHeader"
                    onClick={() => toggleFaq(item.id)}
                  >
                    <span className="faqs-questionText">{item.question}</span>
                    <span className="faqs-toggleIcon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faqs-accordionBody">{item.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faqspage;
