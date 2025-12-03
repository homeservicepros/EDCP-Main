
import React from 'react';
import './ContentSections.css';

function ContentSections() {
  
  const warningSigns = [
    {
      number: '01',
      icon: '🚫',
      title: 'Complete Drain Blockage',
      subtitle: 'Zero Water Flow Emergency',
      description: 'When water completely stops draining from your fixtures, immediate professional intervention is critical to prevent overflow and damage.',
      details: [
        'Water not draining at all from sink, tub, or toilet',
        'Standing water remaining in fixtures after hours',
        'Attempts to plunge produce no results',
        'Risk of overflow and water damage increasing by the minute'
      ]
    },
    {
      number: '02',
      icon: '💧',
      title: 'Water Backing Up',
      subtitle: 'Cross-Fixture Drainage Issues',
      description: 'Water appearing in unexpected places when using other fixtures indicates a serious main line blockage requiring immediate attention.',
      details: [
        'Water coming up in shower when toilet flushes',
        'Sink backing up when washing machine drains',
        'Multiple fixtures showing simultaneous problems',
        'Indicates main sewer line blockage affecting entire system'
      ]
    },
    {
      number: '03',
      icon: '🦠',
      title: 'Sewage Exposure',
      subtitle: 'Critical Health Hazard',
      description: 'Raw sewage backup poses immediate health risks and requires urgent professional clearing with proper safety protocols.',
      details: [
        'Raw sewage visible in drains or toilets',
        'Dark water with solid waste materials',
        'Immediate health hazard requiring urgent response',
        'Risk of contamination spreading throughout home'
      ]
    },
    {
      number: '04',
      icon: '👃',
      title: 'Persistent Sewage Odors',
      subtitle: 'Hidden Blockage Warning',
      description: 'Strong foul odors throughout your home indicate developing blockages or venting issues that will worsen without professional clearing.',
      details: [
        'Strong foul smells throughout home',
        'Odors worsening when water is used',
        'Smell originating from multiple drains',
        'Sign of sewage gas buildup or partial blockage'
      ]
    },
    {
      number: '05',
      icon: '🔊',
      title: 'Unusual Drain Sounds',
      subtitle: 'Air Trap Indicators',
      description: 'Gurgling and bubbling sounds from drains indicate air trapped by blockages—an early warning of impending complete failure.',
      details: [
        'Loud gurgling from toilets or drains',
        'Bubbling sounds when using fixtures',
        'Indicates air trapped by blockages',
        'Early warning sign of developing main line issues'
      ]
    },
    {
      number: '06',
      icon: '🏠',
      title: 'Basement or Floor Flooding',
      subtitle: 'Property Damage Emergency',
      description: 'Water pooling in your basement or from floor drains demands immediate action to prevent extensive structural damage and mold.',
      details: [
        'Water pooling on basement floor',
        'Floor drain overflowing',
        'Active flooding from drain systems',
        'Foundation and structural damage risk'
      ]
    }
  ];

  return (
    <section id="content" className="content-sections">
      <div className="container">
        
        {/* Emergency Drain Cleaning Introduction */}
        <div className="intro-block">
          <div className="intro-content">
            <div className="intro-text-side">
              <h2 className="intro-title">Fast Action When Seconds Count</h2>
              <div className="intro-highlight">
                <span className="highlight-icon">🚨</span>
                <span className="highlight-text">Emergency Response Available 24/7</span>
              </div>
              <p className="intro-description">
                When a drain emergency strikes, every moment matters. Water backing up into your home, sewage overflows, or multiple drains failing simultaneously aren't just inconveniences—they're urgent threats to your property, health, and peace of mind.
              </p>
              <p className="intro-description">
                Emergency drain cleaning provides immediate, professional intervention for severe blockages, backups, and overflows that demand instant attention. Unlike routine maintenance that can be scheduled at your convenience, emergency services operate 24/7 because drain disasters don't wait for business hours.
              </p>
              <div className="intro-benefits-redesign">
                <div className="benefit-card-modern glass-card">
                  <div className="benefit-icon-modern">⚡</div>
                  <div className="benefit-content-modern">
                    <h4>Immediate Response</h4>
                    <p>Technicians dispatched within minutes to handle your emergency</p>
                  </div>
                </div>
                <div className="benefit-card-modern glass-card">
                  <div className="benefit-icon-modern">🛡️</div>
                  <div className="benefit-content-modern">
                    <h4>Damage Prevention</h4>
                    <p>Stop water damage before it spreads throughout your property</p>
                  </div>
                </div>
                <div className="benefit-card-modern glass-card">
                  <div className="benefit-icon-modern">💪</div>
                  <div className="benefit-content-modern">
                    <h4>Professional Equipment</h4>
                    <p>Advanced tools for complete clearing and long-lasting results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-visual-side">
              <div className="visual-card glass-card">
                <h3>Why Fast Action Changes Everything</h3>
                <div className="timeline-points">
                  <div className="timeline-point">
                    <span className="time-label">First 15 Minutes</span>
                    <p>Water begins spreading, contaminating surfaces and materials</p>
                  </div>
                  <div className="timeline-point">
                    <span className="time-label">First Hour</span>
                    <p>Significant property damage, structural threats emerge</p>
                  </div>
                  <div className="timeline-point">
                    <span className="time-label">Beyond 2 Hours</span>
                    <p>Extensive damage, potential health hazards, costly repairs</p>
                  </div>
                </div>
                <div className="visual-cta">
                  <a href="tel:8003271709" className="btn btn-accent">
                    <span>📞</span>
                    Call Emergency Line Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding Block */}
        <div className="understanding-block">
          <h2 className="block-title">Understanding Emergency Drain Situations</h2>
          <p className="block-subtitle">
            Not all drain problems are emergencies, but knowing the difference can save you from disaster.
          </p>
          <div className="emergency-categories">
            <div className="category-card glass-card urgent-card">
              <div className="category-header">
                <span className="category-icon">🚨</span>
                <h3>True Emergencies</h3>
                <span className="urgency-badge severe">Call Immediately</span>
              </div>
              <ul className="category-list">
                <li><strong>Sewage Backup:</strong> Raw sewage coming up through drains or toilets—immediate health hazard</li>
                <li><strong>Multiple Drain Failure:</strong> Several drains backing up simultaneously—indicates main line blockage</li>
                <li><strong>Flooding from Drains:</strong> Water actively overflowing causing property damage</li>
                <li><strong>Complete Blockage:</strong> Zero drainage with water standing in fixtures</li>
                <li><strong>Basement Floor Drain Overflow:</strong> Water backing up into living spaces</li>
              </ul>
            </div>
            <div className="category-card glass-card warning-card">
              <div className="category-header">
                <span className="category-icon">⚠️</span>
                <h3>Urgent Situations</h3>
                <span className="urgency-badge high">Schedule Today</span>
              </div>
              <ul className="category-list">
                <li><strong>Slow Multiple Drains:</strong> Multiple fixtures draining slowly—early warning of main line issues</li>
                <li><strong>Gurgling Sounds:</strong> Air trapped in pipes indicating developing blockages</li>
                <li><strong>Sewage Odors:</strong> Persistent foul smells suggesting partial blockage or venting issues</li>
                <li><strong>Recurring Clogs:</strong> Same drain repeatedly blocking despite clearing attempts</li>
                <li><strong>Water Backing Up:</strong> Water appearing in unexpected places when using fixtures</li>
              </ul>
            </div>
          </div>
          <div className="difference-comparison">
            <div className="comparison-side emergency-side">
              <h3>Emergency Service</h3>
              <div className="comparison-features">
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <span>24/7 immediate response</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <span>Critical situations only</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <span>Premium pricing</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">⚡</span>
                  <span>Prevents extensive damage</span>
                </div>
              </div>
            </div>
            <div className="comparison-divider">
              <span className="divider-text">VS</span>
            </div>
            <div className="comparison-side routine-side">
              <h3>Routine Service</h3>
              <div className="comparison-features">
                <div className="feature-point">
                  <span className="point-icon">✓</span>
                  <span>Scheduled appointments</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">✓</span>
                  <span>Preventive maintenance</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">✓</span>
                  <span>Standard pricing</span>
                </div>
                <div className="feature-point">
                  <span className="point-icon">✓</span>
                  <span>Business hours service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When to Call Block - Redesigned with Stacked Cards */}
        <div className="when-call-block">
          <h2 className="section-title-left">Don't Wait—Call When You See These Warning Signs</h2>
          <p className="when-description">
            Recognizing emergency warning signs and acting quickly can mean the difference between a quick fix and extensive property damage. Here's what demands immediate professional attention.
          </p>
          
          {/* Warning Signs - Stacked Card Style */}
          <div className="warning-signs-stack-container">
            {warningSigns.map((sign, index) => (
              <React.Fragment key={index}>
                <div 
                  className="warning-sign-stack"
                  style={{
                    ['--sign-index' as any]: index,
                    ['--total-signs' as any]: warningSigns.length
                  }}
                >
                  <div className="sign-stack-card">
                    <div className="sign-stack-header">
                      <div className="sign-number-badge">{sign.number}</div>
                      <div className="sign-icon-large">{sign.icon}</div>
                      <div className="sign-header-content">
                        <h3 className="sign-title-large">{sign.title}</h3>
                        <p className="sign-subtitle">{sign.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="sign-stack-body">
                      <p className="sign-description-main">{sign.description}</p>
                      
                      <div className="sign-details-list">
                        {sign.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="sign-detail-item">
                            <span className="detail-bullet">▸</span>
                            <span className="detail-text">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insert Action Panel after 6th warning sign (index 5) - Removed to simplify */}
              </React.Fragment>
            ))}
          </div>

          {/* Action Panel at end instead */}
          <div className="action-panel-inserted glass-card">
            <h3>Take Action Now</h3>
            <p>Don't wait for drain emergencies to worsen. Our expert technicians are standing by 24/7 to provide immediate assistance and prevent costly damage.</p>
            <div className="emergency-contact">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <span className="contact-label">Emergency Hotline</span>
                  <a href="tel:8003271709" className="contact-value">(800) 327-1709</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏱️</span>
                <div className="contact-details">
                  <span className="contact-label">Average Response</span>
                  <span className="contact-value">60-90 Minutes</span>
                </div>
              </div>
            </div>
            <div className="response-guarantee">
              <div className="guarantee-badge">
                <span className="badge-icon">✓</span>
                <span className="badge-text">Rapid Response Guaranteed</span>
              </div>
              <p>Our technicians are strategically positioned throughout all service areas for the fastest possible emergency response.</p>
            </div>
          </div>
        </div>

        {/* Remaining sections omitted for brevity - they don't have the CSS custom property issue */}
        {/* Add remaining content sections here if needed */}
      </div>
    </section>
  );
}

export default ContentSections;
