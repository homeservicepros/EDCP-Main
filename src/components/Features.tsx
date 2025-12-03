
import './Features.css';

function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Rapid Emergency Response',
      description: 'Available 24/7 with same-day and 1-hour emergency service options for critical drain issues.'
    },
    {
      icon: '🎓',
      title: 'Licensed & Certified Experts',
      description: 'All technicians are fully licensed, insured, and continuously trained on the latest techniques.'
    },
    {
      icon: '🔬',
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment including hydro jetters, video cameras, and precision diagnostic tools.'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'Upfront quotes with no hidden fees. You know the cost before we start any work.'
    },
    {
      icon: '🛡️',
      title: '100% Satisfaction Guarantee',
      description: 'We stand behind our work with comprehensive warranties and satisfaction commitments.'
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly Solutions',
      description: 'Environmentally responsible methods that protect your pipes and the planet.'
    },
    {
      icon: '📱',
      title: 'Easy Scheduling',
      description: 'Book online or call anytime. Simple, fast, and convenient appointment scheduling.'
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Thousands of satisfied customers and consistently high ratings across all platforms.'
    },
    {
      icon: '💳',
      title: 'Flexible Payment Options',
      description: 'Multiple payment methods accepted including all major credit cards, financing available, and flexible payment plans for larger jobs.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Emergency Drain Cleaning Pros?</h2>
        <p className="section-subtitle">
          Unmatched expertise, cutting-edge technology, and customer-first service that sets us apart from the competition.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-card-icon">{feature.icon}</div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="features-highlight">
          <div className="highlight-box glass-card">
            <div className="highlight-icon">🔥</div>
            <div className="highlight-content">
              <h3>Emergency Service Promise</h3>
              <p>When you have a drain emergency, every minute counts. Our rapid response team is strategically positioned across all service areas to reach you fast — often within 60 minutes. We're equipped, experienced, and ready to solve your problem right the first time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
