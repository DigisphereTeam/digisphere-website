import React from 'react';
import "./BookingSection.css"
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BookingSection = ({
  title = "Ready to grow your pipeline?",
  description = "Book a free 30-minute digital marketing audit. We'll identify your biggest growth opportunities — no pitch, no strings.",
  buttonText = "Book Free Audit",
  buttonLink = "/contact"
}) => {
  return (
    <div className="marketing-banner-section">
      <h2 className="marketing-banner-header">{title}</h2>
      <p className="marketing-banner-description">{description}</p>
      <div className="marketing-btn">
        <Link to={buttonLink}>
          <button type="button">
            {buttonText} <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingSection;