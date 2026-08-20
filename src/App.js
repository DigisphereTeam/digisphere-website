import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DigispherHeader from "./components/DigispherHeader/DigisphereHeader";
import DigisphereHome from "./pages/DigisphereHome/DigispherHome";
import DigisphereAbout from "./pages/DigisphereAbout/DigisphereAbout";
import DigisphereFooter from "./components/DigisphereFooter/DigisphereFooter";
import { WebsiteDevelopment } from "./pages/DigisphereServices/WebsiteDevelopment/WebsiteDevelopment";
import { DigitalMarketing } from "./pages/DigisphereServices/DigitalMarketing/DigitalMarketing";
import ManagedItServices from "./pages/DigisphereServices/MangedItServices/ManagedItServices";
import ExperienceDesign from "./pages/DigisphereServices/ExperienceDesign/ExperienceDesign.js";
import Devops from "./pages/DigisphereServices/Devops/Devops.js";
import CyberSecurity from "./pages/DigisphereServices/CyberSecurity/CyberSecurity.js";

import Automation from "./pages/DigisphereServices/AutomationSolutions/Automation.js";
import AIPowered from "./pages/DigisphereServices/AIPoweredSolutions/AIPowered.js";
import CloudServices from "./pages/DigisphereServices/CloudServices/CloudServices.js";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import WebApplications from "./pages/DigisphereServices/webApplications/WebApplications.js";
import Industries from "./pages/Industries/Industries.js";
import CaseStudies from "./pages/Resources/CaseStudies/CaseStudies.js";
import TechnologyGuides from "./pages/Resources/TechnologyGuides/TechnologyGuides.js";
import Blogs from "./pages/Resources/Blogs/Blogs.js";
import Careers from "./pages/Resources/Careers/Careers.js";
import SuccessStoriesHero from "./pages/Resources/SuccessStories/section/SuccessStoriesHero.js";
import SuccessStories from "./pages/Resources/SuccessStories/SuccessStories.js";
import HowWeWork from "./pages/Resources/HowWeWork/HowWeWork.js";
import FinOps from "./pages/DigisphereServices/FinOps/FinOps.js";
import Applying from "./pages/Applying/Applying.js";
import Faqspage from "./pages/Faqspage/Faqspage.js";
import HelpCenter from "./pages/HelpCenter/HelpCenter.js";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor the user scroll positioning
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click handler to scroll back to zero position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      {/* DIRECT CSS INJECTION TO GUARANTEE IT WORKS */}
      <style>{`
        html {
          scroll-behavior: smooth !important;
        }
        .back-to-top-btn {
          position: fixed !important;
          bottom: 30px !important;
          right: 30px !important;
          z-index: 99999 !important;
          border: none !important;
          outline: none !important;
          background-color: #057DCD !important;
          color: #ffffff !important;
          cursor: pointer !important;
          width: 46px !important;
          height: 46px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
          opacity: 0;
          visibility: hidden;
          transform: scale(0.7);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .back-to-top-btn:hover {
          background-color:#057DCD !important;
          transform: scale(1.05) translateY(-3px) !important;
        }
        .back-to-top-btn.show {
          opacity: 1 !important;
          visibility: visible !important;
          transform: scale(1) !important;
        }
        @media (max-width: 767px) {
          .back-to-top-btn {
            bottom: 20px !important;
            right: 20px !important;
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>

      <DigispherHeader />

      <Routes>
        <Route path="/" element={<DigisphereHome />} />
        <Route path="/about" element={<DigisphereAbout />} />
        <Route
          path="/services/webdevelopment"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/services/managed-it-services"
          element={<ManagedItServices />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/experience-design"
          element={<ExperienceDesign />}
        />
        <Route path="/services/devops" element={<Devops />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/webapplications" element={<WebApplications />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/aipowered" element={<AIPowered />} />
        <Route path="/services/cloudservices" element={<CloudServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/Resources/casestudies" element={<CaseStudies />} />
        <Route path="/Resources/technologyguides" element={<TechnologyGuides/>} />
        <Route path="/Resources/blogs" element={<Blogs/>} />
        <Route path="/Resources/careers" element={<Careers/>} />
        <Route path="/Resources/successstories" element={<SuccessStories/>} />
        <Route path="/Resources/howwework" element={<HowWeWork/>} />
         <Route path="/services/finops" element={<FinOps/>} />
         <Route path="/applying" element={<Applying/>} />
         <Route path="/Resources/faqspage" element={<Faqspage/>} />
           <Route path="/Resources/helpcenter" element={<HelpCenter/>} />
      </Routes>

      <DigisphereFooter />

      {/* Floating Back to Top Arrow Element */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-btn ${showBackToTop ? "show" : ""}`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </Router>
  );
};

export default App;
