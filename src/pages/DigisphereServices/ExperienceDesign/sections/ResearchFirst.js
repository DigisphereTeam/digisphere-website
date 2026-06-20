import React from 'react'
import "./ResearchFirst.css"
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