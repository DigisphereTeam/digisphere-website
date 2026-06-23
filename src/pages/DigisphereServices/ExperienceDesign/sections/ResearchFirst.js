import React from "react";
import "./ResearchFirst.css";
import FAQSection from "../../../../components/FaqSection/FAQSection";
import ProcessCards from "../../../../components/ProcessCards/ProcessCards";
const ResearchFirst = () => {
  const MarketingProcessSteps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We interview stakeholders and users, audit existing products, and map your customer journey to understand where experience is breaking down.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "We distil research into personas, problem statements, and design principles that guide every decision that follows.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Wireframes → high-fidelity mockups → interactive prototypes. We design in cycles with review checkpoints.",
    },
    {
      number: "04",
      title: "Validate",
      description:
        "We test with real users before development begins, iterating until the experience is proven to work at the task level.",
    },
  ];
  const DesignFaqData = [
    {
      question: "What's the difference between UX and UI design?",
      answer:
        "UX (User Experience) focuses on how a product works — making it intuitive, efficient, and easy to use. UI (User Interface) focuses on how it looks — the visual design, layouts, colors, and interactions. Great products need both. We combine strategic UX thinking with polished UI design to create experiences that delight users and drive business results.",
    },
    {
      question: "Do you design for mobile and desktop?",
      answer:
        "Absolutely. Every interface we design is optimized for the devices your users actually use. We create responsive experiences that work seamlessly across mobile, tablet, and desktop screens, ensuring consistency, usability, and performance regardless of platform.",
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer:
        "Yes. We can work within your existing brand system or help refine it where needed. Our designers ensure every screen aligns with your brand identity while improving usability and creating a modern, cohesive experience that strengthens customer trust.",
    },
    {
      question: "What format do you deliver design files in?",
      answer:
        "We deliver fully organized, developer-ready Figma files complete with components, design systems, annotations, and prototypes. This ensures a smooth handoff to your development team and makes future updates faster, easier, and more scalable.",
    },
  ];
  return (
    <>
      <section className="Research-first-grid">
        <div className="container">
          <div className="Research-first">
            <span className="We-Design">How We Design</span>
            <h2 className="Research-first-title">Research first. Always.</h2>
          </div>
          <ProcessCards
            cards={MarketingProcessSteps}
            colClass="col-12 col-sm-6 col-lg-3"
          />
        </div>
      </section>
      <div>
        <FAQSection
          eyebrow="FAQ"
          title="Design questions answered. "
          description="More questions? "
          linkText="Talk to our team."
          link="/contact"
          faqs={DesignFaqData}
        />
      </div>
    </>
  );
};

export default ResearchFirst;
