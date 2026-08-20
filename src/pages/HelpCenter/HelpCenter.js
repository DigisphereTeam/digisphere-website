import React, { useState } from 'react';
import"./HelpCenter.css"
import { Link } from 'react-router-dom';
import { 
  HiOutlineQuestionMarkCircle, 
  HiOutlineMagnifyingGlass, 
  HiOutlineRocketLaunch, 
  HiOutlineComputerDesktop, 
  HiOutlineChartBar, 
  HiOutlineCreditCard, 
  HiOutlineWrenchScrewdriver, 
  HiOutlineCheckCircle, 
  HiOutlineEnvelope, 
  HiOutlineMapPin, 
  HiOutlineClock, 
  HiArrowRight 
} from 'react-icons/hi2';
import './HelpCenter.css';

const helpCategories = [
  {
    id: 1,
    title: 'Starting a Project',
    icon: <HiOutlineRocketLaunch />,
    items: [
      'Book a free consultation',
      'Tell us what you need (website, app, or marketing)',
      'Get a custom plan and quote',
    ],
  },
  {
    id: 2,
    title: 'Website & App Help',
    icon: <HiOutlineComputerDesktop />,
    items: [
      'Want a new website or app? We design and build it.',
      'Want changes to your existing site? Just ask.',
      "Not sure how to edit? We'll show you how.",
    ],
  },
  {
    id: 3,
    title: 'Marketing & SEO Help',
    icon: <HiOutlineChartBar />,
    items: [
      'Want more Google visitors? We handle SEO.',
      'Need Instagram/Facebook help? We manage that.',
      'Want to run ads? We set those up and track results.',
    ],
  },
  {
    id: 4,
    title: 'Billing Help',
    icon: <HiOutlineCreditCard />,
    items: [
      'Confused about pricing? We explain it upfront.',
      'Need an invoice or receipt? Just ask us.',
    ],
  },
  {
    id: 5,
    title: 'Support After Launch',
    icon: <HiOutlineWrenchScrewdriver />,
    items: [
      "Found a bug? Let us know and we'll fix it fast.",
      "Need small updates? We're happy to help anytime.",
      'Want a support/maintenance plan? Ask us for options.',
    ],
  },
];

const HelpCenter = () => {
   const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };
  return (
   <div className="help-container">
      {/* Top Header Badge */}
      <div className="help-badgeContainer">
        <span className="help-badge">
          <HiOutlineQuestionMarkCircle className="help-badgeIcon" /> Support Hub
        </span>
      </div>

      {/* Main Title & Subtitle */}
      <h1 className="help-mainTitle">
        Help Center <span className="help-waveEmoji"></span>
      </h1>
      <p className="help-subTitle">
        Hi! Need help with something? Here's a quick guide to find exactly what you're
        looking for to keep your digital presence growing.
      </p>


      {/* Grid of Help Cards */}
      <div className="help-grid">
        {helpCategories.map((category) => (
          <div key={category.id} className="help-card">
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
          </div>
        ))}
      </div>

      {/* Bottom Contact Banner */}
   <div className="help-bannerContainer">
  <div className="help-banner">
    {/* Left Content Column */}
    <div className="help-leftContent">
      <div className="help-bannerText">
        <h2 className="help-bannerTitle">Still Need Help?</h2>
        <p className="help-bannerSub">
          We're here to assist you. Reach out directly or browse our FAQs for immediate answers.
        </p>
      </div>

      <div className="help-bannerDetails">
        <div className="help-detailItem">
          <HiOutlineEnvelope className="help-detailIcon" />
          <div>
            <div className="help-detailLabel">EMAIL US</div>
            <div className="help-detailValue">info@digispheretech.in</div>
          </div>
        </div>

        <div className="help-detailItem">
          <HiOutlineMapPin className="help-detailIcon" />
          <div>
            <div className="help-detailLabel">LOCATION</div>
            <div className="help-detailValue"> Hyderabad & Vijayawada</div>
          </div>
        </div>
      </div>

      <div className="help-replyTime">
        <HiOutlineClock className="help-clockIcon" />
        <span>Reply Time: Within 1–2 days</span>
      </div>
    </div>

    {/* Right Side Button */}
    <Link to="/Resources/faqspage" className="help-faqBtn">
      Check FAQs <HiArrowRight className="help-btnArrow" />
    </Link>
  </div>
</div>
    </div>
  );
};

export default HelpCenter;
