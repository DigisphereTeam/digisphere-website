import React from 'react'
import "./ResearchFirst.css"
import FAQSection from "../../../../components/FaqSection/FAQSection";
import ProcessCards from "../../../../components/ProcessCards/ProcessCards";
const ResearchFirst = () => {
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
      question: "What's the difference between UX and UI design?",
      answer:
        "SEO is a long-term strategy. While some improvements may be noticeable within the first few months, significant growth in rankings, traffic, and leads typically takes 3–6 months, depending on your industry, competition, and website's current performance.",
    },
    {
      question: "Do you design for mobile and desktop?",
      answer:
        "There is no fixed minimum budget. We recommend a budget based on your business goals, target audience, and competition. During our consultation, we'll help determine the most effective ad spend for achieving measurable results.",
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer:
        "We provide regular performance reports that include key metrics such as traffic, conversions, leads, click-through rates, and return on investment. Our team also explains the results and recommends next steps for continuous improvement.",
    },
    {
      question: "What format do you deliver design files in?",
      answer:
        "Yes. We can audit your existing campaigns, identify opportunities for improvement, and take over management seamlessly. Our onboarding process ensures a smooth transition without disrupting your ongoing marketing efforts.",
    },
  ];
  return (
    <>
    <section className='Research-first-grid'>
      <div className='container'>
        <div className='Research-first'> 
          <span className='We-Design'>How We Design</span>
          <h2 className='Research-first-title'>Research first. Always.</h2>
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
          faqs={MarketingFaqData}
        />
      </div>
      </>
    
  )
}

export default ResearchFirst