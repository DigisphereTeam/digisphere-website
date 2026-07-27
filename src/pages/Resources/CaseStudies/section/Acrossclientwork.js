import React, { useState, useEffect, useRef } from 'react';
import './Acrossclientwork.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const useCounterOnScroll = (targetValue, isVisible, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Don't start counting until visible
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, isVisible, duration]);

  return count;
};


const StatCard = ({ prefix = '', number, suffix = '', label, isVisible }) => {
  const animatedNumber = useCounterOnScroll(number, isVisible, 2000);

  return (
    
    <div className="col-12 col-sm-6 col-lg-3 text-center across-client-work-item mb-4 mb-lg-0">
      <div className="across-client-work-number-wrapper d-flex align-items-center justify-content-center mb-1">
        <span className="across-client-work-icon me-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        </span>


        <h3 className="across-client-work-number mb-0">
          {prefix}{animatedNumber}{suffix}
        </h3>
      </div>
      <p className="across-client-work-label mb-0">{label}</p>
    </div>
  );
};

const Acrossclientwork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statsData = [
    { id: 1, prefix: '', number: 336, suffix: '+', label: 'Projects delivered' },
    { id: 2, prefix: '', number: 316, suffix: '+', label: 'Clients served' },
    { id: 3, prefix: '₹', number: 50, suffix: 'Cr+', label: 'Client revenue attributed' },
    { id: 4, prefix: '', number: 87, suffix: '%', label: 'Client retention rate' },
  ];

  return (
    <>
    <section ref={sectionRef} className="across-client-work-section py-5">
      <div className="container">
       
        <h2 className="across-client-work-heading text-center text-white mb-5 fw-bold">
          Across all our client work
        </h2>

        
        <div className="row justify-content-center">
          {statsData.map((item) => (
            <StatCard
              key={item.id}
              prefix={item.prefix}
              number={item.number}
              suffix={item.suffix}
              label={item.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
    <div className="case-banner-section">
          <h2 className="case-banner-header">Ready to be our next success story?</h2>
          <p className="case-banner-description">
          Tell us your challenge. We'll show you how we'd approach it.
          </p>
          <div className="case-btn">
            <Link to="/contact">
              <button>
              Start Your Project <FaArrowRight/>
              </button>
            </Link>
          </div>
        
        </div>
        </>
  );
};

export default Acrossclientwork;