
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🚨</span>
            <span className="badge-text">24/7 Emergency Service Available</span>
          </div>
          <h1 className="hero-title">
            Emergency Drain Cleaning
            <span className="gradient-text"> Near Me</span>
          </h1>
          <p className="hero-subtitle">
            Fast, Professional, and Reliable Drain Cleaning Services. Expert technicians ready to solve your drain emergencies with cutting-edge technology and guaranteed results.
          </p>
          <div className="hero-features">
            <div className="hero-feature">
              <span className="feature-icon">⚡</span>
              <span className="feature-text">Same-Day Service</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Licensed & Insured</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">⭐</span>
              <span className="feature-text">100% Satisfaction</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#locations" className="btn btn-primary btn-large">
              <span className="btn-icon">📍</span>
              Find Service in Your Area
            </a>
            <a href="#services" className="btn btn-secondary btn-large">
              <span className="btn-icon">🔧</span>
              View All Services
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <div className="trust-number">10,000+</div>
              <div className="trust-label">Drains Cleared</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">24/7</div>
              <div className="trust-label">Availability</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">98%</div>
              <div className="trust-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
