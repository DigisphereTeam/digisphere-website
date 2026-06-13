import React from "react";
import "./BeforeAfterCards.css";
import Reveal from "../../animations/Reveal";
import { fadeLeft, fadeRight, fadeUp } from "../../animations/variants";


const BeforeAfterCards = ({
  title,
  highlightedText,
  beforeItems,
  afterItems,
  beforeIcon,
  afterIcon,
}) => {
  return (
    <section className="before-after-section">
      <div className="container">
        <Reveal variant={fadeUp}>
          <h2 className="before-after-title">
            {title} <span>{highlightedText}</span>
          </h2>
        </Reveal>

        <div className="before-after-wrapper">
          {/* Before Card */}

          <Reveal variant={fadeRight}>
            <div className="before-after-card before-card">
              <div className="before-after-card-header">
                <img src={beforeIcon} alt="Before" />
                <span>Before</span>
              </div>

              <ul>
                {beforeItems.map((item, index) => (
                  <li key={index}>
                    <span className="item-icon danger">
                      {item.icon}
                    </span>

                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* After Card */}

          <Reveal variant={fadeLeft}>
            <div className="before-after-card after-card">
              <div className="before-after-card-header">
                <img src={afterIcon} alt="After" />
                <span>After</span>
              </div>

              <ul>
                {afterItems.map((item, index) => (
                  <li key={index}>
                    <span className="item-icon success">
                      {item.icon}
                    </span>

                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCards;