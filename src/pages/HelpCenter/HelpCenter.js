import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineQuestionMarkCircle,
  HiOutlineRocketLaunch,
  HiOutlineComputerDesktop,
  HiOutlineChartBar,
  HiOutlineCreditCard,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClock,
  HiArrowRight,
} from "react-icons/hi2";
import "./HelpCenter.css";

const helpCategories = [
  {
    id: 1,
    title: "Starting a Project",
    icon: <HiOutlineRocketLaunch />,
    items: [
      "Book a free consultation",
      "Tell us what you need (website, app, or marketing)",
      "Get a custom plan and quote",
    ],
  },
  {
    id: 2,
    title: "Website & App Help",
    icon: <HiOutlineComputerDesktop />,
    items: [
      "Want a new website or app? We design and build it for you.",
      "Want changes to your existing site? Just reach out  we'll take care of the updates.",
      "Not sure how to make updates yourself? We'll walk you through it, step by step.",
    ],
  },
  {
    id: 3,
    title: "Marketing & SEO Help",
    icon: <HiOutlineChartBar />,
    items: [
      "Want more Google visitors? We handle SEO.",
      "Need Instagram/Facebook help? We manage that.",
      "Want to run ads? We set those up and track results.",
    ],
  },
  {
    id: 4,
    title: "Billing Help",
    icon: <HiOutlineCreditCard />,
    items: [
      "Confused about pricing? We break it down clearly upfront  no hidden costs.",
      "Need an invoice or receipt? Just ask and we'll send it right over.",
      "Have a billing question anytime? Reach out and we'll sort it out quickly.",
    ],
  },
  {
    id: 5,
    title: "Support After Launch",
    icon: <HiOutlineWrenchScrewdriver />,
    items: [
      "Found a bug? Let us know and we'll fix it fast.",
      "Need small updates? We're happy to help anytime.",
      "Want a support/maintenance plan? Ask us for options.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="help-container">
      <motion.div
        className="help-badgeContainer"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span className="help-badge">
          <HiOutlineQuestionMarkCircle className="help-badgeIcon" /> Support Hub
        </span>
      </motion.div>
      <motion.h1
        className="help-mainTitle"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        Help Center <span className="help-waveEmoji"></span>
      </motion.h1>

      <motion.p
        className="help-subTitle"
        initial="hidden"
        animate="visible"
        variants={fadeRight}
      >
        Hi! Need help with something? Here's a quick guide to find exactly what
        you're looking for to keep your digital presence growing.
      </motion.p>

      <motion.div
        className="help-grid"
        initial="hidden"
        animate="visible"
        variants={containerStagger}
      >
        {helpCategories.map((category) => (
          <motion.div key={category.id} className="help-card" variants={fadeUp}>
            <div className="help-iconWrapper">{category.icon}</div>
            <h2 className="help-cardTitle">{category.title}</h2>
            <ul className="help-cardList">
              {category.items.map((item, index) => (
                <li key={index} className="help-cardListItem">
                  <HiOutlineCheckCircle className="help-checkIcon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Still Need Help Banner Section */}
      <div className="container">
        <div className="help-banner-still">
          <div className="help-banner">
            {/* Left Content Column - Fade Left */}
            <motion.div
              className="help-leftContent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <div className="help-bannerText">
                <h2 className="help-bannerTitle">Still Need Help?</h2>
                <p className="help-bannerSub">
                  We're here to assist you. Reach out directly or browse our
                  FAQs for immediate answers.
                </p>
              </div>

              <div className="help-bannerDetails">
                <div className="help-detailItem">
                  <HiOutlineEnvelope className="help-detailIcon" />
                  <div>
                    <div className="help-detailLabel">EMAIL US</div>
                    <div className="help-detailValue">
                      info@digispheretech.in
                    </div>
                  </div>
                </div>

                <div className="help-detailItem">
                  <HiOutlineMapPin className="help-detailIcon" />
                  <div>
                    <div className="help-detailLabel">LOCATION</div>
                    <div className="help-detailValue">
                      Hyderabad & Vijayawada
                    </div>
                  </div>
                </div>
              </div>

              <div className="help-replyTime">
                <HiOutlineClock className="help-clockIcon" />
                <span>Reply Time: Within 1–2 days</span>
              </div>
            </motion.div>

            {/* Right Side Button - Fade Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <Link to="/Resources/faqspage" className="help-faqBtn">
                Check FAQs <HiArrowRight className="help-btnArrow" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
