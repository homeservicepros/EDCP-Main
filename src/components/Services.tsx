

import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '🚨',
      title: 'Emergency Drain Cleaning',
      description: 'Immediate 24/7 response for urgent drain blockages, overflows, and backups. Our emergency drain cleaning near me ensures rapid relief when you need it most.',
      points: ['Available 24/7', 'Rapid response time', 'Handles severe blockages', 'Prevents property damage']
    },
    {
      id: 2,
      icon: '🏠',
      title: 'Residential Drain Cleaning Services',
      description: 'Comprehensive home drain maintenance and cleaning. Professional residential drain cleaning near me for all household drainage systems.',
      points: ['Complete home coverage', 'Preventive maintenance', 'Family-safe methods', 'Long-term solutions']
    },
    {
      id: 3,
      icon: '🚫',
      title: 'Clogged Drain Cleaning',
      description: 'Expert removal of stubborn clogs from any drain type. Specialized clogged drain cleaning near me with advanced equipment and techniques.',
      points: ['Removes tough clogs', 'Multiple cleaning methods', 'Root cause diagnosis', 'Prevents recurrence']
    },
    {
      id: 4,
      icon: '🍽️',
      title: 'Kitchen Sink Drain Cleaning',
      description: 'Specialized cleaning for kitchen drains affected by grease, food particles, and soap buildup. Expert kitchen sink drain cleaning near me services.',
      points: ['Grease removal', 'Food particle clearing', 'Odor elimination', 'Pipe protection']
    },
    {
      id: 5,
      icon: '🚰',
      title: 'Bathroom Sink Drain Cleaning',
      description: 'Professional cleaning for bathroom sinks clogged with hair, soap scum, and mineral deposits. Reliable bathroom sink drain cleaning near me.',
      points: ['Hair removal', 'Soap scum elimination', 'Mineral deposit clearing', 'Smooth drainage restored']
    },
    {
      id: 6,
      icon: '🚽',
      title: 'Toilet Drain Unclogging',
      description: 'Fast and effective toilet unclogging for all types of blockages. Professional toilet drain unclogging near me with guaranteed results.',
      points: ['Quick unclogging', 'Handles tough blockages', 'Prevents overflows', 'Hygienic methods']
    },
    {
      id: 7,
      icon: '🚿',
      title: 'Shower Drain Cleaning',
      description: 'Thorough cleaning of shower drains blocked by hair, soap, and body care products. Expert shower drain cleaning near me services.',
      points: ['Hair removal', 'Soap buildup clearing', 'Improved water flow', 'Mold prevention']
    },
    {
      id: 8,
      icon: '🛁',
      title: 'Bathtub Drain Cleaning',
      description: 'Complete bathtub drain clearing and maintenance. Professional bathtub drain cleaning near me for smooth drainage.',
      points: ['Deep cleaning', 'Hair trap clearing', 'Standing water eliminated', 'Prevents slow drains']
    },
    {
      id: 9,
      icon: '⬇️',
      title: 'Floor Drain Cleaning',
      description: 'Specialized cleaning for basement, garage, and utility floor drains. Reliable floor drain cleaning near me services.',
      points: ['Debris removal', 'Sediment clearing', 'Odor control', 'Flood prevention']
    },
    {
      id: 10,
      icon: '🔧',
      title: 'Main Sewer Line Cleaning',
      description: 'Comprehensive main line cleaning to prevent whole-house backups. Expert main sewer line cleaning near me with advanced technology.',
      points: ['Prevents full backups', 'High-pressure cleaning', 'Tree root removal', 'Camera inspection included']
    },
    {
      id: 11,
      icon: '🐍',
      title: 'Drain Snaking / Rooter Service',
      description: 'Professional mechanical drain cleaning using advanced snaking equipment. Top-rated drain snaking near me and rooter service.',
      points: ['Reaches deep clogs', 'Mechanical precision', 'Non-invasive method', 'Immediate results']
    },
    {
      id: 12,
      icon: '💧',
      title: 'Hydro Jet Drain Cleaning',
      description: 'High-pressure water jetting for the most thorough drain cleaning. Premium hydro jet drain cleaning near me with powerful results.',
      points: ['Complete pipe cleaning', 'Removes buildup', 'Eco-friendly method', 'Long-lasting results']
    },
    {
      id: 13,
      icon: '⚠️',
      title: 'Sewer Backup Clearing',
      description: 'Emergency clearing of dangerous sewage backups and overflows. Immediate sewer backup clearing near me for health and safety.',
      points: ['Health hazard removal', 'Rapid response', 'Complete sanitization', 'Prevents contamination']
    },
    {
      id: 14,
      icon: '📹',
      title: 'Drain Camera Inspection',
      description: 'Advanced video inspection to diagnose hidden drain problems. Professional drain camera inspection near me for accurate diagnosis.',
      points: ['Pinpoint accuracy', 'Visual documentation', 'Finds hidden issues', 'Prevents guesswork']
    },
    {
      id: 15,
      icon: '🧺',
      title: 'Laundry Room Drain Cleaning',
      description: 'Specialized cleaning for washing machine drains and utility sinks. Expert laundry room drain cleaning near me services.',
      points: ['Lint removal', 'Detergent buildup clearing', 'Overflow prevention', 'Efficient drainage']
    },
    {
      id: 16,
      icon: '🏚️',
      title: 'Basement Drain Cleaning',
      description: 'Comprehensive cleaning of basement drains to prevent flooding. Professional basement drain cleaning near me for dry basements.',
      points: ['Flood prevention', 'Sump pump integration', 'Moisture control', 'Foundation protection']
    },
    {
      id: 17,
      icon: '🌳',
      title: 'Outdoor Residential Drain Cleaning',
      description: 'Complete outdoor drainage system cleaning including yard drains and storm drains. Reliable outdoor drain cleaning near me.',
      points: ['Yard drain clearing', 'Storm drain maintenance', 'Landscape protection', 'Water flow optimization']
    },
    {
      id: 18,
      icon: '🛡️',
      title: 'Preventive Drain Maintenance',
      description: 'Scheduled maintenance programs to keep your drains flowing perfectly and prevent future emergencies. Proactive preventive drain maintenance near me.',
      points: ['Regular scheduled cleanings', 'Early problem detection', 'Extends system lifespan', 'Saves on emergency costs']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Drain Cleaning Services</h2>
        <p className="section-subtitle">
          Comprehensive drain cleaning solutions available 24/7. Expert service for every drain in your home.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card glass-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-points">
                {service.points.map((point, index) => (
                  <li key={index}>
                    <span className="point-check">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <a href="#locations" className="btn btn-primary">
            Get Service in Your Area
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;

