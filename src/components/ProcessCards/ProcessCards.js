import React from "react";
import "./ProcessCards.css";
import Reveal from "../../animations/Reveal";
import { fadeUp } from "../../animations/variants";

const ProcessCards = ({ cards, colClass }) => {
  return (
    <div className="row g-4 process-grid">
      {cards.map((card, index) => (
        <div className={colClass} key={index}>
          <Reveal className="h-100" variant={fadeUp} delay={index * 0.15}>
            <div className="process-card h-100">
              {card.icon && (
                <div className="process-icon-box">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="process-icon"
                  />
                </div>
              )}

              {card.number && (
                <div className="process-number">{card.number}</div>
              )}

              <h3 className="process-title">{card.title}</h3>

              {card.description && (
                <p className="process-desc">{card.description}</p>
              )}

              {card.list && (
                <ul className="process-list">
                  {card.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  );
};

export default ProcessCards;
