import React, { useState, useEffect, useRef } from "react";
import "./StatsSection.css";

import Reveal from "../../../animations/Reveal";
import { fadeUp } from "../../../animations/variants";

const StatCard = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          let current = 0;
          const step = value / 50;

          const timer = setInterval(() => {
            current += step;

            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={cardRef} className="stat-card">
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: 336,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      value: 316,
      suffix: "+",
      label: "Clients Served",
    },
    {
      value: 8,
      suffix: "",
      label: "Technology Practices",
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Infrastructure Uptime",
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <Reveal>
          <div className="stats-header">
            <h2>
              Built on work. <span>Not claims.</span>
            </h2>
          </div>
        </Reveal>

        <div className="row g-3 justify-content-center">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <Reveal variant={fadeUp} delay={index * 0.1}>
                <StatCard
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
