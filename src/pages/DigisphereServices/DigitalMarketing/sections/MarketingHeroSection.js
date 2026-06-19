import React from "react";
import "./MarketingHeroSection.css";

import Counter from "../../../../components/Counter/Counter";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";

const MarketingHeroSection = () => {
  const marketingStats = [
    {
      end: 4.2,
      suffix: "x",
      label: "Average ROAS on paid campaigns",
    },
    {
      end: 340,
      suffix: "%",
      label: "Organic traffic growth (avg 12 months)",
    },
    {
      prefix: "₹",
      end: 2.8,
      suffix: "cr",
      label: "Revenue attributed to our campaigns",
    },
    {
      end: 87,
      suffix: "%",
      label: "Client retention rate",
    },
  ];
  return (
    <section>
      <div className="container-fluid mt-5 px-5" style={{ backgroundColor: "#0F172A" }}>
        <div className="row g-4">
          {marketingStats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <Reveal variant={fadeUp} delay={index * 0.1}>
                <div className="marketing-stat-card">
                  <h3 className="marketing-stat-number">
                    <Counter
                      end={item.end}
                      prefix={item.prefix || ""}
                      suffix={item.suffix || ""}
                    />
                  </h3>

                  <p className="marketing-stat-label">{item.label}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingHeroSection;
