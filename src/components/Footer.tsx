
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Our Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  const serviceLinks = [
    { label: 'Emergency Drain Cleaning', href: '#services' },
    { label: 'Hydro Jetting Service', href: '#services' },
    { label: 'Camera Inspection', href: '#services' },
    { label: 'Sewer Line Cleaning', href: '#services' },
    { label: 'Residential Services', href: '#services' },
    { label: 'Kitchen Drain Cleaning', href: '#services' },
    { label: 'Bathroom Drain Cleaning', href: '#services' },
    { label: 'Main Line Service', href: '#services' }
  ];

  const locations = [
    { city: 'Rocky River, OH', url: 'https://rocky-river-oh.emergencydraincleaningpros.com' },
    { city: 'Bay Village, OH', url: 'https://bay-village-oh.emergencydraincleaningpros.com' },
    { city: 'Avon, OH', url: 'https://avon-oh.emergencydraincleaningpros.com' },
    { city: 'North Olmsted, OH', url: 'https://north-olmsted-oh.emergencydraincleaningpros.com' },
    { city: 'West Park, OH', url: 'https://west-park-oh.emergencydraincleaningpros.com' },
    { city: 'Fairview Park, OH', url: 'https://fairview-park-oh.emergencydraincleaningpros.com' },
    { city: 'Miami, FL', url: 'https://miami-fl.emergencydraincleaningpros.com' },
    { city: 'Lakeland, FL', url: 'https://lakeland-fl.emergencydraincleaningpros.com' },
    { city: 'Marietta, GA', url: 'https://marietta-ga.emergencydraincleaningpros.com' },
    { city: 'Rochester, NY', url: 'https://rochester-ny.emergencydraincleaningpros.com' }
  ];

  const seoKeywords = [
    'Drain Cleaning Near Me',
    'Hydrojet Drain Cleaning Near Me',
    'Emergency Drain Cleaning Near Me',
    'Residential Drain Services Near Me',
    '24/7 Emergency Plumbing Near Me',
    'Sewer Line Cleaning Near Me',
    'Clogged Drain Cleaning Near Me',
    'Main Sewer Line Service Near Me'
  ];

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">⚡</div>
              <div className="logo-text">
                <span className="logo-main">Emergency Drain Cleaning Pros</span>
                <span className="logo-tagline">24/7 Expert Service</span>
              </div>
            </div>
            <p className="footer-description">
              Your trusted partner for emergency drain cleaning near me. Professional, reliable, and available 24/7 to handle all your drain emergencies with cutting-edge technology and expert care.
            </p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <span className="contact-icon-footer">📞</span>
                <a href="tel:8003271709">(800) 327-1709</a>
              </div>
              <div className="footer-contact-item">
                <span className="contact-icon-footer">✉️</span>
                <a href="mailto:admin@emergencydraincleaningpros.com">admin@emergencydraincleaningpros.com</a>
              </div>
            </div>
            <div className="footer-trust-badges">
              <div className="trust-badge-item">
                <div className="trust-badge-icon">🛡️</div>
                <div className="trust-badge-content">
                  <div className="trust-badge-title">Licensed & Insured</div>
                  <div className="trust-badge-subtitle">Fully Certified</div>
                </div>
              </div>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">⚡</div>
                <div className="trust-badge-content">
                  <div className="trust-badge-title">24/7 Emergency</div>
                  <div className="trust-badge-subtitle">Always Available</div>
                </div>
              </div>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">⭐</div>
                <div className="trust-badge-content">
                  <div className="trust-badge-title">100% Satisfaction</div>
                  <div className="trust-badge-subtitle">Guaranteed Results</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Service Areas</h3>
            <ul className="footer-links">
              {locations.map((location, index) => (
                <li key={index}>
                  <a href={location.url} target="_blank" rel="noopener noreferrer">
                    {location.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-seo-keywords">
            <div className="seo-keywords-header">
              <div className="keywords-icon">🔍</div>
              <h3>Professional Drain Services Near Me</h3>
            </div>
            <div className="keywords-grid">
              {seoKeywords.map((keyword, index) => (
                <div key={index} className="keyword-tag">
                  <span className="keyword-bullet">›</span>
                  <span className="keyword-text">{keyword}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Emergency Drain Cleaning Pros. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
