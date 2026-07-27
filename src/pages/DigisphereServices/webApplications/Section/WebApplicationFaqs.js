import React from "react";
import FAQSection from "../../../../components/FaqSection/FAQSection";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BookingSection from "../../../../components/BookingSection/BookingSection.js"
const WebApplicationFaqs = () => {
  const DesignFaqData = [
    {
      question: "How long does it take to build a custom web application?",
      answer:
        "The timeline depends on the project's complexity and requirements. A simple web application typically takes 4–8 weeks, while more advanced platforms with custom features, integrations, and scalability requirements may take 3–6 months. We provide a detailed project roadmap and timeline before development begins.",
    },
    {
      question: "Who owns the code after delivery?",
      answer:
        "You do. Once the project is completed and all payments are settled, you receive full ownership of the source code, documentation, and intellectual property. There are no hidden licensing fees or restrictions.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes. We can integrate your web application with CRMs, ERPs, payment gateways, third-party APIs, authentication providers, cloud services, and other business tools to ensure everything works seamlessly together.",
    },
    {
      question: "What happens if we need changes after launch?",
      answer:
        "We offer ongoing maintenance and support after launch. Whether you need bug fixes, performance improvements, security updates, or new features, our team can continue to enhance and scale your application as your business grows.",
    },
  ];

  return (
    <>
      <div>
        <FAQSection
          eyebrow="FAQ"
          title="Common questions."
          description="Have a specific question?  "
          linkText="Talk to our team directly."
          link="/contact"
          faqs={DesignFaqData}
        />
      </div>
    <BookingSection
        title="Have a software idea? Let's scope it."
        description="Book a free discovery call. We'll review your requirements, flag technical risks, and give you a realistic scope estimate."
        buttonText="Book Discovery Call"
        buttonLink="/contact"
      />
    </>
  );
};

export default WebApplicationFaqs;
