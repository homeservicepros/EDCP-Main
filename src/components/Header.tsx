
import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  scrolled: boolean;
}

function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Process', href: '#process' },
    { label: 'Locations', href: '#locations' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">⚡</div>
            <div className="logo-text">
              <span className="logo-main">Emergency Drain Cleaning Pros</span>
              <span className="logo-tagline">24/7 Expert Service</span>
            </div>
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
