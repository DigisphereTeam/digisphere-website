import React from "react";
import ProcessCards from "../../../../components/ProcessCards/ProcessCards";
import FAQSection from "../../../../components/FaqSection/FAQSection";

const CardsFaqSection = () => {
  const MarketingProcessSteps = [
    {
      number: "01",
      title: "Audit & Discovery",
      description:
        "We audit your channels, competitors, keyword landscape, and conversion funnel to find the highest-leverage opportunities.",
    },
    {
      number: "02",
      title: "Strategy Design",
      description:
        "A 90-day growth plan with channel prioritisation, budget allocation, content calendar, and conversion goals.",
    },
    {
      number: "03",
      title: "Launch & Execute",
      description:
        "Campaigns go live with full tracking in place. Creative tested, landing pages optimised, automation wired.",
    },
    {
      number: "04",
      title: "Optimise & Scale",
      description:
        "Monthly performance reviews, ongoing A/B tests, and budget reallocation toward what's working.",
    },
  ];
  const MarketingFaqData = [
    {
      question: "How long before we see results from SEO?",
      answer:
        "SEO is a long-term strategy. While some improvements may be noticeable within the first few months, significant growth in rankings, traffic, and leads typically takes 3–6 months, depending on your industry, competition, and website's current performance.",
    },
    {
      question: "What is your minimum budget for Google Ads?",
      answer:
        "There is no fixed minimum budget. We recommend a budget based on your business goals, target audience, and competition. During our consultation, we'll help determine the most effective ad spend for achieving measurable results.",
    },
    {
      question: "How do you report on campaign performance?",
      answer:
        "We provide regular performance reports that include key metrics such as traffic, conversions, leads, click-through rates, and return on investment. Our team also explains the results and recommends next steps for continuous improvement.",
    },
    {
      question: "Can you take over campaigns managed by another agency?",
      answer:
        "Yes. We can audit your existing campaigns, identify opportunities for improvement, and take over management seamlessly. Our onboarding process ensures a smooth transition without disrupting your ongoing marketing efforts.",
    },
  ];
  return (
    <section>
      <div className="process-wrapper py-5 bg-light-subtle">
        <div className="container py-4">
          <div className="wrapper-header mb-5">
            {/* 1. Added the small uppercase section subtitle */}
            <span className="text-uppercase tracking-wider text-primary fw-bold small-label d-block mb-2">
              OUR PROCESS
            </span>
            {/* 2. Added explicit weight to match the bold title */}
            <h2 className="wrapper-title fw-bold">
              From audit to growth, in 90 days.
            </h2>
          </div>

          {/* 3. Explicitly set to 'col-lg-3' so it wraps perfectly into a 4-column layout on large screens */}
          <ProcessCards
            cards={MarketingProcessSteps}
            colClass="col-12 col-sm-6 col-lg-3"
          />
        </div>
      </div>
      <div>
        <FAQSection
          eyebrow="FAQ"
          title="Common questions."
          description="Still have questions?"
          linkText="Talk to our team."
          link="/contact"
          faqs={MarketingFaqData}
        />
      </div>
    </section>
  );
};
export default CardsFaqSection;
