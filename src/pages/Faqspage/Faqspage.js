import React, { useState } from 'react';
import { 
  FaSearch, 
  FaChevronRight, 
  FaChevronUp, 
  FaChevronDown, 
  FaHeadset, 
  FaExternalLinkAlt, 
  FaRocket, 
  FaShieldAlt 
} from 'react-icons/fa';
import './Faqspage.css';
import { Link } from 'react-router-dom';


const faqData = [
  { id: 1, question: 'What is Digisphere ?', answer: "Digisphere represents our approach to bringing technology, innovation, and business together. We create reliable and scalable web applications that solve real-world business challenges and help organizations work smarter and grow with confidence." },
  { id: 2, question: 'What services do you offer?', answer: 'Website design, app development, digital marketing, SEO, and social media management.' },
  { id: 3, question: 'How do I get started?', answer: "Just contact us. We'll have a quick chat about your needs and suggest the best plan for you." },
  { id: 4, question: 'Is the first consultation free?', answer: 'Yes, totally free. No obligations.' },
  { id: 5, question: 'How much will it cost?', answer: "It depends on your project. We'll give you a clear, custom quote after understanding what you need." },
  { id: 6, question: 'How long will my project take?', answer: "A simple website takes 1–3 weeks. Apps and bigger projects take longer. We'll give you a timeline upfront." },
  { id: 7, question: 'Will my website work on mobile?', answer: 'Yes, every website we build works perfectly on phones, tablets, and desktops.' },
  { id: 8, question: 'Can I update my website myself later?', answer: 'Yes! We make it easy for you to edit text and images without any tech skills.' },
  { id: 9, question: 'Do you help with Google ranking (SEO)?', answer: 'Yes, we help your website show up higher on Google so more people find you.' },
  { id: 10, question: 'Do you manage Instagram/Facebook pages too?', answer: 'Yes, we handle your social media — posts, designs, and growth.' },
  { id: 11, question: 'What if something breaks after my website is live?', answer: "No worries, just message us. We'll fix it quickly." },
  { id: 12, question: 'Do you offer support after the project is done?', answer: 'Yes, we offer ongoing support and maintenance plans to keep things running smoothly.' },
  { id: 13, question: 'How can I contact you?', answer: 'Email us at digispheretech.in@gmail.com — we usually reply within a day or two.' },
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
        Everything you need to know about working with Digisphere Tech. Can't find the answer
        you're looking for? Feel free to <Link to="/contact">contact us</Link>.
      </p>

      <div className="faqs-accordionList">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className={`faqs-accordionCard ${isOpen ? 'faqs-open' : ''}`}>
              <button className="faqs-accordionHeader" onClick={() => toggleFaq(item.id)}>
                <span className="faqs-questionText">{item.question}</span>
                <span className="faqs-toggleIcon">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <div className="faqs-accordionBody">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </div>
  </main>
</div>
  )
}

export default Faqspage