import React, { useState } from 'react';
import "./ContactUs.css";
import time from "../../assets/contactus/time.svg";
import phone from "../../assets/contactus/phone.svg";
import locationicon from "../../assets/contactus/locationicon.svg";
import email from "../../assets/contactus/email.svg";

const API_URL = 'https://annapurnafarms.digispheretech.in/contact-us/digisphere'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    serviceNeeded: '',
    projectDetails: ''
  });

  // Status can be: 'idle', 'submitting', 'success', 'error'
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Mapping your state properties to what the backend expects
    const payload = {
      full_name: formData.fullName.trim(),
      company_name: formData.companyName.trim(),
      email: formData.email.trim(),
      phone_number: formData.phoneNumber.trim(),
      service_required: formData.serviceNeeded.trim(),
      project_description: formData.projectDetails.trim()
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        // Clear out the form inputs on success
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          serviceNeeded: '',
          projectDetails: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('API Integration Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container">
        
        {/* Header Section */}
        <header className="contact-header">
          <p className="contact-subtitle">CONTACT US</p>
          <h1 className="contact-title">
            Let's build something <br />
            <span className="accent-text">great together.</span>
          </h1>
          <p className="contact-description">
            Tell us about your project. We respond within one business day — usually much faster.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="row g-5">
          
          {/* Contact Form Column */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="custom-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    className="custom-input"
                    placeholder="Enter your name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="custom-label">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    className="custom-input"
                    placeholder="Your Company"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="custom-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="custom-input"
                    placeholder="Enter your email address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="custom-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="custom-input"
                    placeholder="Enter your contact number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="custom-label">Service You Need *</label>
                <input
                  type="text"
                  name="serviceNeeded"
                  className="custom-input"
                  required
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label className="custom-label">Tell Us About Your Project *</label>
                <textarea
                  name="projectDetails"
                  className="custom-input textarea-input"
                  rows="5"
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  required
                  value={formData.projectDetails}
                  onChange={handleChange}
                />
              </div>

              <div className="form-actions">
                {/* Button is disabled while status is 'submitting' to prevent double click submissions */}
                <button 
                  type="submit" 
                  className="btn-submit" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'} <i className="bi bi-arrow-right"></i>
                </button>

                {/* Inline Status Notifications */}
                {status === 'success' && (
                  <p style={{ color: '#28a745', marginTop: '15px', fontWeight: '500' }}>
                    Thank you! Your request has been successfully submitted.
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ color: '#dc3545', marginTop: '15px', fontWeight: '500' }}>
                    Something went wrong. Please check your network or try again later.
                  </p>
                )}

                <p className="form-footer-note">
                  We respond within 1 business day. No spam, no commission.
                </p>
              </div>
            </form>
          </div>

          {/* Info Sidebar Column */}
          <div className="col-lg-5 sidebar-column">
            <div className="sidebar-stack">
              
              {/* What to Expect Card */}
              <div className="info-panel timeline-panel">
                <h3 className="panel-title">What to expect</h3>
                <p className="panel-subtitle">After you submit, here's what happens next:</p>
                
                <ul className="step-list">
                  <li className="step-item">
                    <span className="contact-step-number">1</span>
                    <span className="step-text">We review your submission within 4 business hours.</span>
                  </li>
                  <li className="step-item">
                    <span className="contact-step-number">2</span>
                    <span className="step-text">A senior consultant calls or emails to understand your needs.</span>
                  </li>
                  <li className="step-item">
                    <span className="contact-step-number">3</span>
                    <span className="step-text">We schedule a 30-45 minute discovery call at your convenience.</span>
                  </li>
                  <li className="step-item">
                    <span className="contact-step-number">4</span>
                    <span className="step-text">You receive a detailed proposal within 2-3 business days.</span>
                  </li>
                </ul>
              </div>

              {/* Vijayawada Office Card */}
              <div className="info-panel office-card">
                <h3 className="panel-title-dark">Vijayawada Office</h3>
                <div className="info-list">
                  <div className="info-item item-align-start">
                    <img src={locationicon} alt="location"/>
                    <span>5th Floor,502, Veeramachaneni Residency, Ring Rd, Ramavarapadu, Kanuru, Andhra Pradesh 520004</span>
                  </div>
                  <div className="info-item">
                    <img src={phone} alt="phone"/>
                    <a href="tel:+918143878627" className="link-accent">+91 81438 78627</a>
                  </div>
                  <div className="info-item">
                    <img src={email} alt="email"/>
                    <a href="mailto:info@digispidertech.in" className="link-muted">info@digispidertech.in</a>
                  </div>
                  <div className="info-item">
                    <img src={time} alt="time"/>
                    <span>Mon–Sat: 9am – 7pm IST</span>
                  </div>
                </div>
              </div>

              {/* Hyderabad Office Card */}
              <div className="info-panel office-card">
                <h3 className="panel-title-dark">Hyderabad Office</h3>
                <div className="info-list">
                  <div className="info-item item-align-start">
                    <img src={locationicon} alt="location"/>
                    <span>HITEC City, Madhapur<br />Hyderabad, Telangana 500081</span>
                  </div>
                  <div className="info-item">
                    <img src={phone} alt="phone"/>
                    <a href="tel:+91401234567" className="link-muted">+91 40 123 4567</a>
                  </div>
                  <div className="info-item">
                    <img src={email} alt="email"/>
                    <a href="mailto:info@digispidertech.in" className="link-muted">info@digispidertech.in</a>
                  </div>
                  <div className="info-item">
                    <img src={time} alt="time"/>
                    <span>Mon–Sat: 9am – 7pm IST</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;