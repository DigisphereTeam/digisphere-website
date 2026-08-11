import React from 'react'
import ProcessCards from "../../../../components/ProcessCards/ProcessCards";
import FAQSection from "../../../../components/FaqSection/FAQSection";
import BookingSection from "../../../../components/BookingSection/BookingSection.js";

const MarketingFaqData = [
    {
      question: "What exactly is FinOps and do we need it?",
      answer:
        "FinOps (Financial Operations) is a cultural practice and framework that brings financial accountability to the variable spend model of the cloud. It enables engineering, finance, and business teams to collaborate on data-driven spending decisions. If your cloud bills are growing rapidly, lack visibility, or feature unallocated costs across teams, you need FinOps to ensure every dollar spent drives business value",
    },
    {
      question: "How much can we realistically save on our cloud bill?",
      answer:
        "Most organizations realistically save between 20% to 40% on their monthly cloud spend. Savings come from eliminating idle resources, rightsizing over-provisioned infrastructure, leveraging commitment discounts (like Reserved Instances and Savings Plans), and eliminating architecture inefficiencies.",
    },
    {
      question: "How quickly will we see savings?",
      answer:
        "You will start seeing initial savings within 14 days. Quick wins—such as terminating unattached storage volumes, removing idle dev/test instances, and rightsizing—deliver immediate impact in your first billing cycle. Strategic savings like Reserved Instances, Savings Plans, and architectural refactoring ramp up over weeks 3 through 6.",
    },
    {
      question: "Do you work with multi-cloud environments?",
      answer:
        "Yes. We support all major cloud providers, including AWS, Microsoft Azure, and Google Cloud Platform (GCP), as well as hybrid and Kubernetes environments (using tools like Kubecost). We consolidate spend data across all your providers into a single, unified financial visibility view.",
    },
  ];
const FionopsFaqs = () => {
  return (
    <section>
      <div className=''>
        <FAQSection
          eyebrow="FAQ"
          title="FinOps questions answered."
          description="Cloud costs are complex. We give you straight answers. "
          linkText="Talk to our FinOps team.    "
          link="/contact"
          faqs={MarketingFaqData}
        />
      </div>
      <BookingSection
        title="Find out what you're overpaying."
        description="Share your latest cloud bill and we'll come back with a free savings estimate — no obligation, no generic report."
        buttonText="Get Your Free Savings Estimate"
        buttonLink="/contact"
      />
    </section>
  )
}

export default FionopsFaqs