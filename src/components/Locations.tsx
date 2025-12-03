
import React from 'react';
import './Locations.css';

function Locations() {
  const locations = [
    {
      city: 'Rocky River',
      state: 'OH',
      phone: '(440) 496-9290',
      url: 'https://rocky-river-oh.emergencydraincleaningpros.com',
      neighbors: ['Lakewood', 'Fairview Park', 'Bay Village', 'Westlake']
    },
    {
      city: 'Bay Village',
      state: 'OH',
      phone: '(440) 814-0187',
      url: 'https://bay-village-oh.emergencydraincleaningpros.com',
      neighbors: ['Westlake', 'Rocky River', 'Avon Lake', 'Dover']
    },
    {
      city: 'Avon',
      state: 'OH',
      phone: '(440) 701-9400',
      url: 'https://avon-oh.emergencydraincleaningpros.com',
      neighbors: ['Avon Lake', 'Sheffield', 'North Ridgeville', 'Westlake']
    },
    {
      city: 'North Olmsted',
      state: 'OH',
      phone: '(440) 722-0900',
      url: 'https://north-olmsted-oh.emergencydraincleaningpros.com',
      neighbors: ['Fairview Park', 'Brookpark', 'Olmsted Falls', 'Westlake']
    },
    {
      city: 'West Park',
      state: 'OH',
      phone: '(440) 491-3570',
      url: 'https://west-park-oh.emergencydraincleaningpros.com',
      neighbors: ['Lakewood', 'Brooklyn', 'Parma', 'Fairview Park']
    },
    {
      city: 'Fairview Park',
      state: 'OH',
      phone: '(216) 332-3846',
      url: 'https://fairview-park-oh.emergencydraincleaningpros.com',
      neighbors: ['Rocky River', 'North Olmsted', 'Lakewood', 'Westlake']
    },
    {
      city: 'Miami',
      state: 'FL',
      phone: '(645) 300-7511',
      url: 'https://miami-fl.emergencydraincleaningpros.com',
      neighbors: ['Miami Beach', 'Coral Gables', 'Hialeah', 'Kendall']
    },
    {
      city: 'Lakeland',
      state: 'FL',
      phone: '(863) 500-8231',
      url: 'https://lakeland-fl.emergencydraincleaningpros.com',
      neighbors: ['Winter Haven', 'Auburndale', 'Bartow', 'Mulberry']
    },
    {
      city: 'Marietta',
      state: 'GA',
      phone: '(770) 830-3893',
      url: 'https://marietta-ga.emergencydraincleaningpros.com',
      neighbors: ['Smyrna', 'Kennesaw', 'Roswell', 'Atlanta']
    },
    {
      city: 'Rochester',
      state: 'NY',
      phone: '(585) 212-0270',
      url: 'https://rochester-ny.emergencydraincleaningpros.com',
      neighbors: ['Brighton', 'Irondequoit', 'Greece', 'Henrietta']
    }
  ];

  return (
    <section id="locations" className="locations-section">
      <div className="container">
        <h2 className="section-title">Service Locations</h2>
        <p className="section-subtitle">
          Find emergency drain cleaning near me in your area. Fast, local service available 24/7.
        </p>
        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card glass-card">
              <div className="location-header">
                <div className="location-icon">📍</div>
                <div className="location-info">
                  <h3 className="location-name">{location.city}, {location.state}</h3>
                  <div className="location-phone">
                    <span className="phone-icon">📞</span>
                    {location.phone}
                  </div>
                </div>
              </div>
              <div className="location-neighbors">
                <div className="neighbors-label">Serving nearby:</div>
                <div className="neighbors-list">
                  {location.neighbors.map((neighbor, i) => (
                    <span key={i} className="neighbor-tag">{neighbor}</span>
                  ))}
                </div>
              </div>
              <div className="location-actions">
                <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="btn btn-primary btn-small">
                  <span className="btn-icon">📞</span>
                  <span>Call Now</span>
                </a>
                <a href={location.url} className="btn btn-secondary btn-small" target="_blank" rel="noopener noreferrer">
                  <span className="btn-icon">🌐</span>
                  <span>Visit Site</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="locations-expansion">
          <div className="expansion-card glass-card">
            <div className="expansion-icon">🚀</div>
            <h3>Expanding Service Areas</h3>
            <p>We're continuously growing to serve more communities. More locations coming soon! Don't see your area? Contact us to check if we can provide emergency service in your location.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
