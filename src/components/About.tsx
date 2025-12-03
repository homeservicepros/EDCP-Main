
import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title-left">About Emergency Drain Cleaning Pros</h2>
            <p className="about-intro">
              Your trusted partner for <strong>emergency drain cleaning near me</strong> with over a decade of expertise in residential drain solutions.
            </p>
            <p className="about-paragraph">
              At Emergency Drain Cleaning Pros, we understand that drain emergencies don't wait for business hours. That's why we've built our company around rapid response, cutting-edge technology, and uncompromising quality. Our team of licensed, certified technicians is available 24/7 to handle any drain emergency with precision and care.
            </p>
            <p className="about-paragraph">
              We specialize in all aspects of <strong>drain cleaning near me</strong>, from simple clogs to complex sewer line issues. Using advanced equipment like hydro jetters, video camera inspection systems, and professional-grade snaking tools, we diagnose and resolve drain problems quickly and effectively.
            </p>
            <p className="about-paragraph">
              What sets us apart is our commitment to transparency, reliability, and customer satisfaction. We provide upfront pricing, detailed explanations, and guaranteed workmanship. Our mission is to not just fix your drain problems, but to build lasting relationships through exceptional service and honest communication.
            </p>
            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <div className="value-content">
                  <h4>Our Mission</h4>
                  <p>Deliver rapid, reliable drain solutions that protect homes and provide peace of mind.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">👁️</div>
                <div className="value-content">
                  <h4>Our Vision</h4>
                  <p>Be the most trusted emergency drain cleaning service in every community we serve.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">💎</div>
                <div className="value-content">
                  <h4>Our Values</h4>
                  <p>Integrity, excellence, responsiveness, and customer-first service in every interaction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card glass-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">👨‍🔧</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Technicians</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">📍</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Service Locations</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
