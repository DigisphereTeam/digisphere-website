import React from "react";
import "./ClientResultsSection.css";
import Counter from "../../../../components/Counter/Counter";

const ClientResultsSection = () => {
  const stats = [
    {
      end: 70,
      suffix: "%",
      prefix: "60-",
      label: "Increase In Enquiries",
    },
    {
      end: 43,
      suffix: "%",
      label: "Average Organic Traffic Growth",
    },
    {
      end: 90,
      suffix: "+",
      label: "PageSpeed Score",
    },
    {
      end: 2,
      suffix: " sec",
      label: "Average Load Time",
    },
  ];

  return (
    <section className="client-results-section">
      <div className="container">
        
          <h2 className="results-title">
            The numbers <span>our clients care about.</span>
          </h2>

          <div className="results-grid">
            {stats.map((item, index) => (
              <div className="result-card" key={index}>
                <div className="counter-wrapper">
                  <Counter
                    end={item.end}
                    prefix={item.prefix || ""}
                    suffix={item.suffix || ""}
                  />
                </div>

                <p>{item.label}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default ClientResultsSection;