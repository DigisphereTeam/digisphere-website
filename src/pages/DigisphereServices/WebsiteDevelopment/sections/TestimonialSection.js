import React from "react";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The website became our best lead-generation channel within three
            months. Traffic increased, enquiries increased, and the user
            experience finally reflected the quality of our business."
          </p>

          <div className="testimonial-footer">
            <div className="client-info">
              <div className="client-avatar">AK</div>

              <div className="client-details">
                <h5>Karthikeya</h5>
                <span>CEO, TechSolutions India</span>
              </div>
            </div>

            <div className="growth-badge">
              <h4>+72%</h4>
              <span>Lead Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;